import * as THREE from 'three';
import { COLORS, rand, lerp } from '../utils/constants.js';

/**
 * MolecularWorld — ATP Synthase detail (zoom 0.75 – 1.0)
 * Shows: F₀ rotor, γ-stalk rotation, F₁ catalytic head, proton flow, ADP→ATP conversion
 */
export class MolecularWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.name = 'MolecularWorld';
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this._buildMembraneSlab();
    this._buildF0Rotor();
    this._buildGammaStalk();
    this._buildF1Head();
    this._buildProtonFlow();
    this._buildATPParticles();
    this._buildLabels();
  }

  _buildMembraneSlab() {
    // Inner mitochondrial membrane as a flat slab
    const geo = new THREE.BoxGeometry(20, 0.6, 20);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.innerMembrane,
      transparent: true,
      opacity: 0.25,
      roughness: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.membraneSlab = new THREE.Mesh(geo, mat);
    this.membraneSlab.position.y = 0;
    this.group.add(this.membraneSlab);

    // "Intermembrane space" label side (above)
    // "Matrix" label side (below) — will be in _buildLabels
  }

  _buildF0Rotor() {
    // c-ring: a ring of subunits embedded in the membrane
    this.f0Group = new THREE.Group();
    this.f0Group.position.y = 0; // In the membrane

    const subunitCount = 10; // c-subunits
    const ringRadius = 1.2;

    // Ring of cylinders
    for (let i = 0; i < subunitCount; i++) {
      const angle = (i / subunitCount) * Math.PI * 2;
      const geo = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8);
      const mat = new THREE.MeshStandardMaterial({
        color: COLORS.f0rotor,
        emissive: COLORS.f0rotor,
        emissiveIntensity: 0.15,
      });
      const subunit = new THREE.Mesh(geo, mat);
      subunit.position.set(
        Math.cos(angle) * ringRadius,
        0,
        Math.sin(angle) * ringRadius
      );
      this.f0Group.add(subunit);
    }

    // Central bore of the ring
    const boreGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.0, 8);
    const boreMat = new THREE.MeshStandardMaterial({
      color: 0x5D4037,
    });
    const bore = new THREE.Mesh(boreGeo, boreMat);
    this.f0Group.add(bore);

    // a-subunit (stationary, outside ring)
    const aGeo = new THREE.BoxGeometry(0.4, 0.8, 0.6);
    const aMat = new THREE.MeshStandardMaterial({ color: 0x8D6E63 });
    const aSub = new THREE.Mesh(aGeo, aMat);
    aSub.position.set(ringRadius + 0.4, 0, 0);
    // Don't add to f0Group (it rotates) — add to group directly
    this.aSubunit = aSub;
    this.group.add(aSub);

    this.group.add(this.f0Group);
  }

  _buildGammaStalk() {
    // Central rotating shaft connecting F₀ to F₁
    this.gammaGroup = new THREE.Group();

    const stalkGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.5, 8);
    const stalkMat = new THREE.MeshStandardMaterial({
      color: COLORS.gammaStalk,
      emissive: COLORS.gammaStalk,
      emissiveIntensity: 0.3,
    });
    const stalk = new THREE.Mesh(stalkGeo, stalkMat);
    stalk.position.y = -2.0; // extends down from membrane into matrix

    this.gammaGroup.add(stalk);
    this.gammaGroup.position.y = 0;
    this.group.add(this.gammaGroup);
  }

  _buildF1Head() {
    // α₃β₃ hexamer — alternating α and β subunits in a ring
    this.f1Group = new THREE.Group();
    this.f1Group.position.y = -3.5; // Below membrane (in matrix)

    const subunitCount = 6;
    const ringRadius = 1.0;
    this.betaSubunits = [];

    for (let i = 0; i < subunitCount; i++) {
      const angle = (i / subunitCount) * Math.PI * 2;
      const isAlpha = i % 2 === 0;

      const geo = new THREE.SphereGeometry(0.55, 12, 12);
      geo.scale(1, 1.3, 1); // elongate

      const mat = new THREE.MeshStandardMaterial({
        color: isAlpha ? 0x90CAF9 : COLORS.f1head,
        emissive: isAlpha ? 0x42A5F5 : 0x1565C0,
        emissiveIntensity: 0.15,
        transparent: true,
        opacity: 0.85,
      });

      const subunit = new THREE.Mesh(geo, mat);
      subunit.position.set(
        Math.cos(angle) * ringRadius,
        0,
        Math.sin(angle) * ringRadius
      );

      this.f1Group.add(subunit);
      if (!isAlpha) {
        this.betaSubunits.push({ mesh: subunit, angle, phase: i * (Math.PI * 2 / 3) });
      }
    }

    // Bottom cap
    const capGeo = new THREE.SphereGeometry(0.8, 12, 12);
    capGeo.scale(1.3, 0.4, 1.3);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x78909C,
      transparent: true,
      opacity: 0.6,
    });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = -0.7;
    this.f1Group.add(cap);

    this.group.add(this.f1Group);
  }

  _buildProtonFlow() {
    // Protons entering F₀ from intermembrane space (above membrane)
    const geo = new THREE.SphereGeometry(0.08, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.proton,
      emissive: COLORS.proton,
      emissiveIntensity: 1.0,
    });

    const count = 30;
    this.protonFlowMesh = new THREE.InstancedMesh(geo, mat, count);
    this.protonFlowData = [];
    const dummy = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const phase = rand(0, Math.PI * 2);
      const speed = rand(0.8, 2.0);
      const radius = rand(0.3, 2.5);
      const yStart = rand(1.5, 4.0); // above membrane
      this.protonFlowData.push({ phase, speed, radius, y: yStart, yStart });
      dummy.setPosition(0, yStart, 0);
      this.protonFlowMesh.setMatrixAt(i, dummy);
    }
    this.protonFlowMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.protonFlowMesh);
  }

  _buildATPParticles() {
    // ATP molecules being released from F₁ head
    const geo = new THREE.OctahedronGeometry(0.15, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.atpParticle,
      emissive: COLORS.atpParticle,
      emissiveIntensity: 0.6,
    });

    const count = 15;
    this.atpMesh = new THREE.InstancedMesh(geo, mat, count);
    this.atpData = [];
    const dummy = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const phase = rand(0, Math.PI * 2);
      const speed = rand(0.3, 0.8);
      const angle = rand(0, Math.PI * 2);
      this.atpData.push({ phase, speed, angle, radius: rand(1.5, 3), y: -4, alive: false, timer: rand(0, 5) });
      dummy.setPosition(0, -10, 0); // start offscreen
      this.atpMesh.setMatrixAt(i, dummy);
    }
    this.atpMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.atpMesh);
  }

  _buildLabels() {
    // Sprite-based labels positioned near each structure
    const createLabel = (text, y, color, scale = 3) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 512, 64);
      ctx.font = '500 24px Inter, sans-serif';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 256, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(0, y, 4);
      sprite.scale.set(scale, scale * 0.125, 1);
      return sprite;
    };

    this.group.add(createLabel('INTERMEMBRANE SPACE', 2.5, 'rgba(255,138,101,0.7)', 4));
    this.group.add(createLabel('MATRIX', -6.0, 'rgba(255,204,128,0.7)', 2.5));
    this.group.add(createLabel('F₁ HEAD', -3.0, 'rgba(100,181,246,0.5)', 2));
    this.group.add(createLabel('F₀ ROTOR', 1.2, 'rgba(188,170,164,0.5)', 2));
  }

  setOpacity(opacity) {
    this.group.traverse((child) => {
      if (child.material) {
        if (child.material.transparent) {
          if (child.material._baseOpacity === undefined) {
            child.material._baseOpacity = child.material.opacity;
          }
          child.material.opacity = child.material._baseOpacity * opacity;
        }
      }
    });
  }

  update(dt, zoomValue) {
    this.time += dt;

    // ─── Rotate F₀ c-ring (the "turbine") ───
    const rotSpeed = 2.0; // ~2 rev/sec visual (real: ~100/sec, heavily slowed)
    this.f0Group.rotation.y += dt * rotSpeed * Math.PI * 2;

    // ─── Rotate γ-stalk (same speed, connected to F₀) ───
    this.gammaGroup.rotation.y = this.f0Group.rotation.y;

    // ─── β-subunit conformational cycling (glow pulse) ───
    for (const beta of this.betaSubunits) {
      const cycle = (this.time * rotSpeed * Math.PI * 2 + beta.phase) % (Math.PI * 2);
      const intensity = (Math.sin(cycle) + 1) * 0.25; // 0 to 0.5
      beta.mesh.material.emissiveIntensity = 0.1 + intensity;
      beta.mesh.scale.y = 1.3 + Math.sin(cycle) * 0.1;
    }

    // ─── Proton flow animation (spiraling down through F₀) ───
    const dummy = new THREE.Matrix4();
    for (let i = 0; i < this.protonFlowData.length; i++) {
      const p = this.protonFlowData[i];
      p.y -= dt * p.speed;

      // Spiral trajectory
      const angle = this.time * p.speed * 3 + p.phase;
      const r = p.radius * (p.y > 0.3 ? 1 : (p.y + 1) * 0.5); // narrow as they enter pore
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      if (p.y < -1.5) {
        // Reset to top
        p.y = p.yStart;
      }

      dummy.setPosition(x, p.y, z);
      this.protonFlowMesh.setMatrixAt(i, dummy);
    }
    this.protonFlowMesh.instanceMatrix.needsUpdate = true;

    // ─── ATP release animation ───
    for (let i = 0; i < this.atpData.length; i++) {
      const a = this.atpData[i];
      a.timer -= dt;

      if (a.timer <= 0 && !a.alive) {
        // Spawn ATP near F₁ head
        a.alive = true;
        a.y = -4;
        a.angle = rand(0, Math.PI * 2);
        a.radius = 1.2;
      }

      if (a.alive) {
        a.y -= dt * a.speed; // float downward (into matrix)
        a.radius += dt * 0.5; // drift outward
        a.angle += dt * 0.3;

        const x = Math.cos(a.angle) * a.radius;
        const z = Math.sin(a.angle) * a.radius;

        if (a.y < -9) {
          a.alive = false;
          a.timer = rand(1, 4);
          a.y = -15; // hide
        }

        dummy.setPosition(x, a.y, z);
      } else {
        dummy.setPosition(0, -15, 0);
      }

      this.atpMesh.setMatrixAt(i, dummy);
    }
    this.atpMesh.instanceMatrix.needsUpdate = true;
  }
}
