import * as THREE from 'three';
import { COLORS, rand, randomOnSphere } from '../utils/constants.js';

/**
 * NucleusWorld — organelle-level view of the nucleus interior.
 * Shows: nuclear envelope + pores, chromatin fibers, nucleolus,
 * RNA Polymerase crawling along chromatin, mRNA particles exiting pores.
 */
export class NucleusWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;

    this._buildEnvelope();
    this._buildPores();
    this._buildChromatin();
    this._buildNucleolus();
    this._buildRNAPolymerases();
    this._buildMRNAParticles();
    this._buildLabels();
  }

  // ── Nuclear Envelope (double membrane, semitransparent) ──
  _buildEnvelope() {
    // Outer membrane
    const outerGeo = new THREE.SphereGeometry(8, 48, 48);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x1A237E,
      transparent: true,
      opacity: 0.12,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.outerMembrane = new THREE.Mesh(outerGeo, outerMat);
    this.group.add(this.outerMembrane);

    // Inner membrane
    const innerGeo = new THREE.SphereGeometry(7.6, 48, 48);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x283593,
      transparent: true,
      opacity: 0.08,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.innerMembrane = new THREE.Mesh(innerGeo, innerMat);
    this.group.add(this.innerMembrane);
  }

  // ── Nuclear Pores (toroid studs on envelope surface) ──
  _buildPores() {
    const poreGeo = new THREE.TorusGeometry(0.4, 0.12, 8, 16);
    const poreMat = new THREE.MeshStandardMaterial({
      color: 0x5C6BC0,
      emissive: 0x283593,
      emissiveIntensity: 0.3,
      roughness: 0.5,
    });

    this.poreCount = 24;
    this.pores = [];
    const poreInstance = new THREE.InstancedMesh(poreGeo, poreMat, this.poreCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < this.poreCount; i++) {
      const [x, y, z] = randomOnSphere(8.0);
      dummy.position.set(x, y, z);
      // Align pore to face outward
      dummy.lookAt(0, 0, 0);
      dummy.updateMatrix();
      poreInstance.setMatrixAt(i, dummy.matrix);
      this.pores.push({ x, y, z });
    }
    poreInstance.instanceMatrix.needsUpdate = true;
    this.poreInstance = poreInstance;
    this.group.add(poreInstance);
  }

  // ── Chromatin Fibers (spaghetti-like tubes) ──
  _buildChromatin() {
    this.chromatinGroup = new THREE.Group();
    const chromatinMat = new THREE.MeshStandardMaterial({
      color: COLORS.chromatin,
      roughness: 0.6,
      emissive: 0x3949AB,
      emissiveIntensity: 0.15,
    });

    this.chromatinCurves = [];
    const fiberCount = 12;
    for (let f = 0; f < fiberCount; f++) {
      const points = [];
      const baseAngle = (f / fiberCount) * Math.PI * 2;
      const cx = Math.cos(baseAngle) * 3 + rand(-1, 1);
      const cz = Math.sin(baseAngle) * 3 + rand(-1, 1);
      
      for (let i = 0; i < 20; i++) {
        const t = i / 19;
        points.push(new THREE.Vector3(
          cx + Math.sin(t * 8 + f) * 2,
          (t - 0.5) * 10,
          cz + Math.cos(t * 6 + f * 1.5) * 2
        ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 40, 0.15, 6, false);
      const tube = new THREE.Mesh(tubeGeo, chromatinMat);
      this.chromatinGroup.add(tube);
      this.chromatinCurves.push({ curve, fiber: tube, offset: rand(0, 100) });
    }
    this.group.add(this.chromatinGroup);
  }

  // ── Nucleolus (large bright sphere) ──
  _buildNucleolus() {
    const geo = new THREE.SphereGeometry(1.5, 32, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.nucleolus,
      emissive: 0x00838F,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.8,
    });
    this.nucleolus = new THREE.Mesh(geo, mat);
    this.nucleolus.position.set(1, 1, 0);
    this.group.add(this.nucleolus);
  }

  // ── RNA Polymerase dots crawling along chromatin ──
  _buildRNAPolymerases() {
    const polGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const polMat = new THREE.MeshStandardMaterial({
      color: COLORS.rnaPol,
      emissive: 0xF9A825,
      emissiveIntensity: 0.6,
    });

    this.polCount = 8;
    this.polData = [];
    this.polMeshes = [];

    for (let i = 0; i < this.polCount; i++) {
      const fiberIdx = Math.floor(rand(0, this.chromatinCurves.length));
      const t = rand(0, 0.7);
      const mesh = new THREE.Mesh(polGeo, polMat);
      this.group.add(mesh);
      this.polMeshes.push(mesh);
      this.polData.push({
        fiberIdx,
        t,
        speed: rand(0.02, 0.05),
        trailPoints: [],
      });
    }

    // Pre-mRNA trail material
    this.trailMat = new THREE.LineBasicMaterial({
      color: COLORS.mrna,
      transparent: true,
      opacity: 0.6,
    });
    this.trailLines = [];
    for (let i = 0; i < this.polCount; i++) {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(60 * 3); // max 60 points
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setDrawRange(0, 0);
      const line = new THREE.Line(geo, this.trailMat);
      this.group.add(line);
      this.trailLines.push(line);
    }
  }

  // ── mRNA particles drifting toward pores ──
  _buildMRNAParticles() {
    const geo = new THREE.DodecahedronGeometry(0.2, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.mrna,
      emissive: 0xFF6F00,
      emissiveIntensity: 0.5,
    });

    this.mrnaCount = 16;
    this.mrnaInstance = new THREE.InstancedMesh(geo, mat, this.mrnaCount);
    this.mrnaData = [];
    
    const dummy = new THREE.Object3D();
    for (let i = 0; i < this.mrnaCount; i++) {
      const angle = rand(0, Math.PI * 2);
      const r = rand(2, 6);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = rand(-4, 4);

      // Pick nearest pore as target
      let nearestPore = this.pores[0];
      let minDist = Infinity;
      for (const p of this.pores) {
        const d = Math.sqrt((p.x-x)**2 + (p.y-y)**2 + (p.z-z)**2);
        if (d < minDist) { minDist = d; nearestPore = p; }
      }

      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      this.mrnaInstance.setMatrixAt(i, dummy.matrix);
      
      this.mrnaData.push({
        pos: new THREE.Vector3(x, y, z),
        target: new THREE.Vector3(nearestPore.x, nearestPore.y, nearestPore.z),
        speed: rand(0.3, 0.8),
        phase: rand(0, 100),
        active: true,
      });
    }
    this.mrnaInstance.instanceMatrix.needsUpdate = true;
    this.group.add(this.mrnaInstance);
    this._mrnaDummy = new THREE.Object3D();
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'NUCLEOLUS', pos: [1, 3, 0] },
      { text: 'CHROMATIN', pos: [-3, 4, 2] },
      { text: 'NUCLEAR PORE', pos: [6, 3, 4] },
      { text: 'RNA POLYMERASE', pos: [-4, -2, 0] },
    ];

    this.labelSprites = [];
    for (const l of labels) {
      const sprite = this._makeLabel(l.text);
      sprite.position.set(l.pos[0], l.pos[1], l.pos[2]);
      this.group.add(sprite);
      this.labelSprites.push(sprite);
    }
  }

  _makeLabel(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 64);
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3, 0.75, 1);
    return sprite;
  }

  setOpacity(o) {
    this.outerMembrane.material.opacity = 0.12 * o;
    this.innerMembrane.material.opacity = 0.08 * o;
    this.nucleolus.material.opacity = 0.8 * o;
    this.mrnaInstance.material.opacity = o;
    this.labelSprites.forEach(s => { s.material.opacity = o * 0.5; });
  }

  update(dt, zoom) {
    this.time += dt;

    // ── Undulate chromatin ──
    for (const ch of this.chromatinCurves) {
      ch.fiber.rotation.y += dt * 0.02;
      ch.fiber.position.y = Math.sin(this.time * 0.3 + ch.offset) * 0.2;
    }

    // ── Pulse nucleolus ──
    const s = 1 + Math.sin(this.time * 1.5) * 0.05;
    this.nucleolus.scale.setScalar(s);

    // ── RNA Polymerase crawls along chromatin ──
    for (let i = 0; i < this.polCount; i++) {
      const data = this.polData[i];
      data.t += data.speed * dt;
      if (data.t > 0.95) {
        data.t = rand(0, 0.2);
        data.fiberIdx = Math.floor(rand(0, this.chromatinCurves.length));
        data.trailPoints = [];
      }

      const curve = this.chromatinCurves[data.fiberIdx].curve;
      const pt = curve.getPointAt(data.t);
      this.polMeshes[i].position.copy(pt);

      // Build trail
      data.trailPoints.push(pt.clone());
      if (data.trailPoints.length > 40) data.trailPoints.shift();

      const lineGeo = this.trailLines[i].geometry;
      const posAttr = lineGeo.getAttribute('position');
      for (let j = 0; j < data.trailPoints.length; j++) {
        posAttr.setXYZ(j, data.trailPoints[j].x, data.trailPoints[j].y, data.trailPoints[j].z);
      }
      posAttr.needsUpdate = true;
      lineGeo.setDrawRange(0, data.trailPoints.length);
    }

    // ── mRNA particles drift toward pores ──
    const dummy = this._mrnaDummy;
    for (let i = 0; i < this.mrnaCount; i++) {
      const m = this.mrnaData[i];
      if (!m.active) continue;

      // Drift toward target pore with Brownian motion
      const dir = m.target.clone().sub(m.pos).normalize();
      m.pos.addScaledVector(dir, m.speed * dt);
      m.pos.x += Math.sin(this.time * 2 + m.phase) * dt * 0.3;
      m.pos.y += Math.cos(this.time * 1.5 + m.phase) * dt * 0.2;

      // If reached pore, reset
      if (m.pos.distanceTo(m.target) < 0.5) {
        const angle = rand(0, Math.PI * 2);
        const r = rand(1, 4);
        m.pos.set(Math.cos(angle) * r, rand(-3, 3), Math.sin(angle) * r);
        // Pick new pore
        const pIdx = Math.floor(rand(0, this.pores.length));
        m.target.set(this.pores[pIdx].x, this.pores[pIdx].y, this.pores[pIdx].z);
      }

      dummy.position.copy(m.pos);
      dummy.rotation.set(this.time + i, this.time * 0.7, 0);
      dummy.updateMatrix();
      this.mrnaInstance.setMatrixAt(i, dummy.matrix);
    }
    this.mrnaInstance.instanceMatrix.needsUpdate = true;

    // ── Pulse pore glow ──
    this.poreInstance.material.emissiveIntensity = 0.3 + Math.sin(this.time * 2) * 0.15;
  }
}
