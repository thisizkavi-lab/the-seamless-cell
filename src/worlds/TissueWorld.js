import * as THREE from 'three';
import { COLORS, rand, lerp, randomOnSphere } from '../utils/constants.js';

/**
 * TissueWorld — Multi-cell view showing 5 cells in an epithelial arrangement.
 * Demonstrates cell-cell communication: paracrine signaling, gap junctions,
 * and contact-dependent signaling.
 */
export class TissueWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;

    this._buildCells();
    this._buildGapJunctions();
    this._buildSignalParticles();
    this._buildECM();
    this._buildLabels();
  }

  // ── 5 Cells arranged in an epithelial sheet ──
  _buildCells() {
    this.cells = [];
    const cellPositions = [
      [-8, 0, 0],
      [-4, 0, 2],
      [0, 0, 0],
      [4, 0, -1],
      [8, 0, 1],
    ];

    const membraneMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.15,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const nucleusMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.nucleus,
      emissive: 0x0D47A1,
      emissiveIntensity: 0.3,
      roughness: 0.4,
    });

    for (let i = 0; i < cellPositions.length; i++) {
      const cellGroup = new THREE.Group();
      cellGroup.position.set(...cellPositions[i]);

      // Cell membrane (ellipsoid)
      const memGeo = new THREE.SphereGeometry(3, 24, 24);
      memGeo.scale(1.2, 0.8, 1);
      const membrane = new THREE.Mesh(memGeo, membraneMat.clone());
      cellGroup.add(membrane);

      // Nucleus
      const nucGeo = new THREE.SphereGeometry(1, 16, 16);
      const nuc = new THREE.Mesh(nucGeo, nucleusMat.clone());
      cellGroup.add(nuc);

      // Internal organelles (simplified — small dots)
      const dotGeo = new THREE.SphereGeometry(0.15, 6, 6);
      for (let d = 0; d < 8; d++) {
        const dotMat = new THREE.MeshStandardMaterial({
          color: [COLORS.mitochondria, COLORS.er, COLORS.vesicle, COLORS.golgi][d % 4],
          emissive: [COLORS.mitochondria, COLORS.er, COLORS.vesicle, COLORS.golgi][d % 4],
          emissiveIntensity: 0.3,
        });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(rand(-1.5, 1.5), rand(-0.8, 0.8), rand(-1, 1));
        cellGroup.add(dot);
      }

      // Receptors on surface (small protrusions)
      const recGeo = new THREE.CylinderGeometry(0.05, 0.08, 0.3, 6);
      const recMat = new THREE.MeshStandardMaterial({
        color: COLORS.gpcr,
        emissive: 0x4527A0,
        emissiveIntensity: 0.4,
      });
      const receptors = [];
      for (let r = 0; r < 12; r++) {
        const [rx, ry, rz] = randomOnSphere(3.2);
        const rec = new THREE.Mesh(recGeo, recMat);
        rec.position.set(rx * 1.2, ry * 0.8, rz);
        rec.lookAt(0, 0, 0);
        cellGroup.add(rec);
        receptors.push(rec);
      }

      this.group.add(cellGroup);
      this.cells.push({
        group: cellGroup,
        membrane,
        nucleus: nuc,
        receptors,
        pulsePhase: rand(0, Math.PI * 2),
      });
    }
  }

  // ── Gap Junctions (connecting tubes between adjacent cells) ──
  _buildGapJunctions() {
    this.junctions = [];
    const juncMat = new THREE.MeshBasicMaterial({
      color: 0x80CBC4,
      transparent: true,
      opacity: 0.3,
    });

    const pairs = [[0,1], [1,2], [2,3], [3,4]];
    for (const [a, b] of pairs) {
      const posA = this.cells[a].group.position;
      const posB = this.cells[b].group.position;
      const mid = posA.clone().add(posB).multiplyScalar(0.5);
      const dir = posB.clone().sub(posA);
      const len = dir.length();

      const geo = new THREE.CylinderGeometry(0.08, 0.08, len - 4, 6);
      const junc = new THREE.Mesh(geo, juncMat);
      junc.position.copy(mid);
      junc.lookAt(posB);
      junc.rotateX(Math.PI / 2);
      this.group.add(junc);
      this.junctions.push(junc);
    }
  }

  // ── Signal Particles (paracrine signaling from center cell) ──
  _buildSignalParticles() {
    const sigGeo = new THREE.DodecahedronGeometry(0.12, 0);
    const sigMat = new THREE.MeshStandardMaterial({
      color: COLORS.ligand,
      emissive: 0x64DD17,
      emissiveIntensity: 0.7,
    });

    this.signalCount = 40;
    this.signalInstance = new THREE.InstancedMesh(sigGeo, sigMat, this.signalCount);
    this.signalData = [];
    this._sigDummy = new THREE.Object3D();

    // Signals emitted from cell index 2 (center)
    const sourcePos = this.cells[2].group.position;
    for (let i = 0; i < this.signalCount; i++) {
      const angle = rand(0, Math.PI * 2);
      const speed = rand(1, 3);
      this.signalData.push({
        pos: sourcePos.clone().add(new THREE.Vector3(rand(-0.5, 0.5), rand(-0.5, 0.5), rand(-0.5, 0.5))),
        vel: new THREE.Vector3(Math.cos(angle) * speed, rand(-0.5, 0.5), Math.sin(angle) * speed),
        life: rand(0, 4),
        maxLife: 4,
        active: true,
      });
    }

    // Initialize positions
    for (let i = 0; i < this.signalCount; i++) {
      this._sigDummy.position.copy(this.signalData[i].pos);
      this._sigDummy.updateMatrix();
      this.signalInstance.setMatrixAt(i, this._sigDummy.matrix);
    }
    this.signalInstance.instanceMatrix.needsUpdate = true;
    this.group.add(this.signalInstance);
  }

  // ── Extracellular Matrix (faint fiber network) ──
  _buildECM() {
    const ecmMat = new THREE.LineBasicMaterial({
      color: 0x4E342E,
      transparent: true,
      opacity: 0.15,
    });

    for (let i = 0; i < 20; i++) {
      const points = [];
      const x0 = rand(-15, 15);
      const z0 = rand(-5, 5);
      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(
          x0 + rand(-3, 3),
          rand(-4, -2),
          z0 + rand(-2, 2)
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(10));
      const line = new THREE.Line(geo, ecmMat);
      this.group.add(line);
    }
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'EPITHELIAL CELL', pos: [0, 4, 0] },
      { text: 'GAP JUNCTION', pos: [-2, 1.5, 1] },
      { text: 'SIGNAL MOLECULE', pos: [3, 3, 0] },
      { text: 'RECEPTOR', pos: [-6, 3, 0] },
      { text: 'EXTRACELLULAR MATRIX', pos: [0, -4, 0] },
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
    canvas.width = 320;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 320, 64);
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 160, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3, 0.6, 1);
    return sprite;
  }

  setOpacity(o) {
    for (const cell of this.cells) {
      cell.membrane.material.opacity = 0.15 * o;
    }
    this.signalInstance.material.opacity = o;
    this.labelSprites.forEach(s => { s.material.opacity = o * 0.45; });
  }

  update(dt) {
    this.time += dt;

    // ── Cell breathing (gentle scale pulse) ──
    for (const cell of this.cells) {
      const s = 1 + Math.sin(this.time * 0.5 + cell.pulsePhase) * 0.02;
      cell.group.scale.setScalar(s);

      // Nucleus subtle rotation
      cell.nucleus.rotation.y += dt * 0.1;
    }

    // ── Signal particles diffuse outward ──
    const sourcePos = this.cells[2].group.position;
    const dummy = this._sigDummy;

    for (let i = 0; i < this.signalCount; i++) {
      const s = this.signalData[i];
      s.life -= dt;

      if (s.life <= 0) {
        // Reset: new signal from center cell
        s.pos.copy(sourcePos).add(new THREE.Vector3(rand(-0.5, 0.5), rand(-0.5, 0.5), rand(-0.5, 0.5)));
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1, 3);
        s.vel.set(Math.cos(angle) * speed, rand(-0.5, 0.5), Math.sin(angle) * speed);
        s.life = s.maxLife;
      }

      // Drift with Brownian motion
      s.pos.addScaledVector(s.vel, dt);
      s.pos.x += Math.sin(this.time * 3 + i) * dt * 0.5;
      s.pos.z += Math.cos(this.time * 2.5 + i * 1.3) * dt * 0.4;

      // Check if signal hits a receptor on any cell
      for (const cell of this.cells) {
        const dist = s.pos.distanceTo(cell.group.position);
        if (dist < 3.5 && dist > 2.5) {
          // Near a cell surface — flash a receptor
          const recIdx = Math.floor(rand(0, cell.receptors.length));
          cell.receptors[recIdx].material.emissiveIntensity = 1.0;
        }
      }

      dummy.position.copy(s.pos);
      dummy.rotation.set(this.time + i, this.time * 0.5, 0);
      dummy.scale.setScalar(s.life > 0.5 ? 1 : s.life * 2);
      dummy.updateMatrix();
      this.signalInstance.setMatrixAt(i, dummy.matrix);
    }
    this.signalInstance.instanceMatrix.needsUpdate = true;

    // ── Fade receptor glow back ──
    for (const cell of this.cells) {
      for (const rec of cell.receptors) {
        rec.material.emissiveIntensity = lerp(rec.material.emissiveIntensity, 0.4, dt * 3);
      }
    }

    // ── Gap junctions pulse ──
    for (const j of this.junctions) {
      j.material.opacity = 0.2 + Math.sin(this.time * 2) * 0.1;
    }
  }
}
