import * as THREE from 'three';
import { COLORS, rand, lerp, randomOnSphere } from '../utils/constants.js';

/**
 * TransportWorld — organelle-level: The Secretory Pathway.
 * ER → Golgi → Plasma Membrane. Shows vesicle budding, coat proteins,
 * cisternal maturation, motor proteins on microtubule tracks, and exocytosis.
 */
export class TransportWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;

    this._buildRoughER();
    this._buildGolgiStack();
    this._buildMicrotubuleTracks();
    this._buildVesicles();
    this._buildPlasmaMembrane();
    this._buildLabels();
  }

  // ── Rough ER (undulating sheet studded with ribosomes) ──
  _buildRoughER() {
    this.erGroup = new THREE.Group();
    this.erGroup.position.set(-10, 0, 0);
    this.group.add(this.erGroup);

    // Two ER sheets (folded membrane)
    const sheetMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.roughER,
      transparent: true,
      opacity: 0.4,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    for (let s = 0; s < 3; s++) {
      const geo = new THREE.PlaneGeometry(6, 10, 20, 20);
      const positions = geo.getAttribute('position');
      // Undulate the sheet
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        positions.setZ(i, Math.sin(x * 0.8 + s) * 0.5 + Math.cos(y * 0.5) * 0.3);
      }
      positions.needsUpdate = true;
      geo.computeVertexNormals();

      const sheet = new THREE.Mesh(geo, sheetMat);
      sheet.position.z = s * 1.5 - 1.5;
      sheet.rotation.y = 0.2 * s;
      this.erGroup.add(sheet);
    }

    // Ribosomes on ER surface (small spheres)
    const rGeo = new THREE.SphereGeometry(0.1, 6, 6);
    const rMat = new THREE.MeshStandardMaterial({
      color: COLORS.ribosome,
      emissive: 0x546E7A,
      emissiveIntensity: 0.3,
    });
    this.ribosomeCount = 60;
    this.erRibosomes = new THREE.InstancedMesh(rGeo, rMat, this.ribosomeCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < this.ribosomeCount; i++) {
      dummy.position.set(
        rand(-3, 3),
        rand(-5, 5),
        rand(-2, 2)
      );
      dummy.updateMatrix();
      this.erRibosomes.setMatrixAt(i, dummy.matrix);
    }
    this.erRibosomes.instanceMatrix.needsUpdate = true;
    this.erGroup.add(this.erRibosomes);
  }

  // ── Golgi Stack (4 flattened cisternae, color gradient cis→trans) ──
  _buildGolgiStack() {
    this.golgiGroup = new THREE.Group();
    this.golgiGroup.position.set(0, 0, 0);
    this.group.add(this.golgiGroup);

    const cisternaeColors = [COLORS.golgiCis, 0xFFC107, COLORS.golgiMed, COLORS.golgiTrans];
    this.cisternae = [];

    for (let i = 0; i < 4; i++) {
      const geo = new THREE.CylinderGeometry(3, 3, 0.25, 32);
      geo.scale(1.3, 1, 0.5);
      const mat = new THREE.MeshPhysicalMaterial({
        color: cisternaeColors[i],
        transparent: true,
        opacity: 0.55,
        roughness: 0.4,
        side: THREE.DoubleSide,
      });
      const cisterna = new THREE.Mesh(geo, mat);
      cisterna.position.y = (i - 1.5) * 1.2;
      cisterna.rotation.x = Math.PI / 2;
      this.golgiGroup.add(cisterna);
      this.cisternae.push(cisterna);
    }

    // Golgi vesicle buds on edges
    const budGeo = new THREE.SphereGeometry(0.3, 8, 8);
    this.golgiBuds = [];
    for (let i = 0; i < 6; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: i < 3 ? COLORS.golgiMed : COLORS.golgiTrans,
        emissive: i < 3 ? 0xE65100 : 0xC62828,
        emissiveIntensity: 0.3,
      });
      const bud = new THREE.Mesh(budGeo, mat);
      const angle = rand(0, Math.PI * 2);
      bud.position.set(
        Math.cos(angle) * 3.5,
        rand(-2, 2),
        Math.sin(angle) * 1.5
      );
      this.golgiGroup.add(bud);
      this.golgiBuds.push({
        mesh: bud,
        angle,
        baseY: bud.position.y,
        phase: rand(0, 10),
      });
    }
  }

  // ── Microtubule Tracks (thin lines from ER to Golgi to PM) ──
  _buildMicrotubuleTracks() {
    const mtMat = new THREE.LineBasicMaterial({
      color: COLORS.microtubule,
      transparent: true,
      opacity: 0.25,
    });

    this.tracks = [];
    const trackDefs = [
      { from: [-7, 2, 0], to: [-2, 1, 0] },
      { from: [-7, -1, 0], to: [-2, -1, 0] },
      { from: [-7, -3, 0], to: [-2, -2, 0] },
      { from: [3, 2, 0], to: [10, 3, 0] },
      { from: [3, 0, 0], to: [10, 0, 0] },
      { from: [3, -2, 0], to: [10, -2, 0] },
    ];

    for (const td of trackDefs) {
      const points = [
        new THREE.Vector3(...td.from),
        new THREE.Vector3(
          (td.from[0] + td.to[0]) / 2 + rand(-0.5, 0.5),
          (td.from[1] + td.to[1]) / 2 + rand(-0.3, 0.3),
          0
        ),
        new THREE.Vector3(...td.to),
      ];
      const curve = new THREE.CatmullRomCurve3(points);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(20));
      const line = new THREE.Line(geo, mtMat);
      this.group.add(line);
      this.tracks.push({ curve, line });
    }
  }

  // ── Vesicles (animated along tracks) ──
  _buildVesicles() {
    const vesGeo = new THREE.SphereGeometry(0.3, 8, 8);

    this.vesicleCount = 12;
    this.vesicles = [];

    for (let i = 0; i < this.vesicleCount; i++) {
      const isRetrograde = i > 8; // COPI retrograde
      const mat = new THREE.MeshPhysicalMaterial({
        color: isRetrograde ? COLORS.copI : COLORS.copII,
        emissive: isRetrograde ? 0xBF360C : 0x00695C,
        emissiveIntensity: 0.4,
        roughness: 0.3,
      });
      const mesh = new THREE.Mesh(vesGeo, mat);
      this.group.add(mesh);

      // Coat wireframe (visible during first part of journey, then dissolves)
      const coatGeo = new THREE.IcosahedronGeometry(0.4, 0);
      const coatMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const coat = new THREE.Mesh(coatGeo, coatMat);
      mesh.add(coat);

      const trackIdx = Math.floor(rand(0, this.tracks.length));
      this.vesicles.push({
        mesh,
        coat,
        trackIdx,
        t: rand(0, 1),
        speed: rand(0.05, 0.15),
        isRetrograde,
      });
    }
  }

  // ── Plasma Membrane (target for secretory vesicles) ──
  _buildPlasmaMembrane() {
    const pmGeo = new THREE.PlaneGeometry(6, 12, 1, 1);
    const pmMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
      roughness: 0.3,
      depthWrite: false,
    });
    this.pm = new THREE.Mesh(pmGeo, pmMat);
    this.pm.position.set(12, 0, 0);
    this.pm.rotation.y = Math.PI / 2;
    this.group.add(this.pm);

    // Exocytosis burst particles
    const burstGeo = new THREE.SphereGeometry(0.08, 4, 4);
    const burstMat = new THREE.MeshBasicMaterial({
      color: COLORS.vesicle,
      transparent: true,
      opacity: 0.6,
    });
    this.burstCount = 20;
    this.burstInstance = new THREE.InstancedMesh(burstGeo, burstMat, this.burstCount);
    this.burstData = [];
    this._burstDummy = new THREE.Object3D();
    
    for (let i = 0; i < this.burstCount; i++) {
      this.burstData.push({
        pos: new THREE.Vector3(12, 0, 0),
        vel: new THREE.Vector3(rand(0.5, 2), rand(-1, 1), rand(-1, 1)),
        life: 0,
        active: false,
      });
      this._burstDummy.position.set(999, 999, 999);
      this._burstDummy.updateMatrix();
      this.burstInstance.setMatrixAt(i, this._burstDummy.matrix);
    }
    this.burstInstance.instanceMatrix.needsUpdate = true;
    this.group.add(this.burstInstance);
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'ROUGH ER', pos: [-10, 6, 0] },
      { text: 'COPII VESICLE', pos: [-5, 4, 0] },
      { text: 'CIS-GOLGI', pos: [0, 4.5, 0] },
      { text: 'TRANS-GOLGI', pos: [0, -4.5, 0] },
      { text: 'MICROTUBULE', pos: [6, 4, 0] },
      { text: 'PLASMA MEMBRANE', pos: [12, 6, 0] },
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
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.5, 0.625, 1);
    return sprite;
  }

  setOpacity(o) {
    this.pm.material.opacity = 0.2 * o;
    this.labelSprites.forEach(s => { s.material.opacity = o * 0.45; });
  }

  update(dt) {
    this.time += dt;

    // ── Golgi cisternae gentle wobble ──
    for (let i = 0; i < this.cisternae.length; i++) {
      this.cisternae[i].position.x = Math.sin(this.time * 0.3 + i) * 0.15;
    }

    // ── Golgi buds pulse ──
    for (const b of this.golgiBuds) {
      b.mesh.position.y = b.baseY + Math.sin(this.time + b.phase) * 0.2;
      const s = 1 + Math.sin(this.time * 2 + b.phase) * 0.1;
      b.mesh.scale.setScalar(s);
    }

    // ── Vesicles travel along tracks ──
    for (const v of this.vesicles) {
      v.t += v.speed * dt;
      if (v.t > 1) {
        v.t = 0;
        v.trackIdx = Math.floor(rand(0, this.tracks.length));
        // Trigger exocytosis burst if ending at PM side
        if (v.trackIdx >= 3) this._triggerBurst(v.mesh.position);
      }

      const track = this.tracks[v.trackIdx];
      const actualT = v.isRetrograde ? (1 - v.t) : v.t;
      const pos = track.curve.getPointAt(Math.max(0, Math.min(1, actualT)));
      v.mesh.position.copy(pos);

      // Coat dissolves partway through
      const coatOpacity = v.t < 0.3 ? 0.4 : Math.max(0, 0.4 * (1 - (v.t - 0.3) / 0.3));
      v.coat.material.opacity = coatOpacity;
      v.coat.visible = coatOpacity > 0.01;
      v.coat.rotation.y += dt;
    }

    // ── Exocytosis burst particles ──
    const bd = this._burstDummy;
    for (let i = 0; i < this.burstCount; i++) {
      const b = this.burstData[i];
      if (!b.active) continue;
      b.life -= dt;
      if (b.life <= 0) {
        b.active = false;
        bd.position.set(999, 999, 999);
      } else {
        b.pos.addScaledVector(b.vel, dt);
        b.vel.y -= 2 * dt; // gravity
        bd.position.copy(b.pos);
      }
      bd.updateMatrix();
      this.burstInstance.setMatrixAt(i, bd.matrix);
    }
    this.burstInstance.instanceMatrix.needsUpdate = true;

    // ── ER sheet undulation ──
    this.erGroup.children.forEach((child, idx) => {
      if (child.isMesh && child.geometry.type === 'PlaneGeometry') {
        child.position.z += Math.sin(this.time * 0.5 + idx) * dt * 0.05;
      }
    });
  }

  _triggerBurst(origin) {
    let count = 0;
    for (const b of this.burstData) {
      if (!b.active && count < 5) {
        b.active = true;
        b.life = rand(0.5, 1.2);
        b.pos.copy(origin);
        b.vel.set(rand(0.5, 2), rand(-1.5, 1.5), rand(-1, 1));
        count++;
      }
    }
  }
}
