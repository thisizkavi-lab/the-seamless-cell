import * as THREE from 'three';
import { COLORS, rand, lerp } from '../utils/constants.js';

/**
 * SignalingWorld — molecular-level: GPCR signaling cascade.
 * Ligand → GPCR → G-protein → Adenylyl Cyclase → cAMP burst → PKA → TF → Nucleus
 * Shows massive signal amplification (1 ligand → 10,000 cAMP).
 */
export class SignalingWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this.cascadePhase = 0; // 0-1 cycling through cascade steps
    this.cycleLength = 12; // seconds per full cycle

    this._buildMembrane();
    this._buildGPCR();
    this._buildLigand();
    this._buildGProtein();
    this._buildAdenylylCyclase();
    this._buildcAMPBurst();
    this._buildPKA();
    this._buildTranscriptionFactor();
    this._buildNucleusPore();
    this._buildLabels();
  }

  // ── Plasma membrane slab ──
  _buildMembrane() {
    const geo = new THREE.BoxGeometry(24, 0.5, 12);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.2,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.membrane = new THREE.Mesh(geo, mat);
    this.membrane.position.y = 3;
    this.group.add(this.membrane);

    // Lipid bilayer hint — two thin sheets
    const leaflet = new THREE.MeshBasicMaterial({ color: 0xFDD835, transparent: true, opacity: 0.08 });
    const leaf1 = new THREE.Mesh(new THREE.BoxGeometry(24, 0.05, 12), leaflet);
    leaf1.position.y = 3.2;
    this.group.add(leaf1);
    const leaf2 = new THREE.Mesh(new THREE.BoxGeometry(24, 0.05, 12), leaflet.clone());
    leaf2.position.y = 2.8;
    this.group.add(leaf2);
  }

  // ── GPCR (7-transmembrane → simplified as cylinder bundle) ──
  _buildGPCR() {
    this.gpcrGroup = new THREE.Group();
    this.gpcrGroup.position.set(-6, 3, 0);

    const helixMat = new THREE.MeshStandardMaterial({
      color: COLORS.gpcr,
      emissive: 0x311B92,
      emissiveIntensity: 0.4,
    });

    // 7 transmembrane helices
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const geo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 6);
      const helix = new THREE.Mesh(geo, helixMat);
      helix.position.set(Math.cos(angle) * 0.5, 0, Math.sin(angle) * 0.5);
      this.gpcrGroup.add(helix);
    }

    // Extracellular binding pocket (shallow bowl)
    const pocketGeo = new THREE.SphereGeometry(0.6, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const pocketMat = new THREE.MeshStandardMaterial({
      color: 0x9575CD,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const pocket = new THREE.Mesh(pocketGeo, pocketMat);
    pocket.position.y = 0.7;
    pocket.rotation.x = Math.PI;
    this.gpcrGroup.add(pocket);

    this.group.add(this.gpcrGroup);
  }

  // ── Ligand (small glowing sphere approaching from outside) ──
  _buildLigand() {
    const geo = new THREE.DodecahedronGeometry(0.25, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.ligand,
      emissive: 0x76FF03,
      emissiveIntensity: 0.8,
    });
    this.ligand = new THREE.Mesh(geo, mat);
    this.ligand.position.set(-6, 7, 0);
    this.group.add(this.ligand);
  }

  // ── G-protein (trimeric complex under membrane) ──
  _buildGProtein() {
    this.gProteinGroup = new THREE.Group();
    this.gProteinGroup.position.set(-6, 2, 0);

    // Gα
    const gAlphaGeo = new THREE.SphereGeometry(0.5, 12, 12);
    const gAlphaMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.gProtein,
      emissive: 0xBF360C,
      emissiveIntensity: 0.4,
    });
    this.gAlpha = new THREE.Mesh(gAlphaGeo, gAlphaMat);
    this.gProteinGroup.add(this.gAlpha);

    // Gβγ
    const gBetaGeo = new THREE.SphereGeometry(0.35, 10, 10);
    const gBetaMat = new THREE.MeshStandardMaterial({
      color: 0xFF8A65,
      emissive: 0xE65100,
      emissiveIntensity: 0.2,
    });
    this.gBeta = new THREE.Mesh(gBetaGeo, gBetaMat);
    this.gBeta.position.set(0.5, 0, 0.3);
    this.gProteinGroup.add(this.gBeta);

    // GDP/GTP indicator (tiny sphere)
    const gdpGeo = new THREE.SphereGeometry(0.1, 6, 6);
    this.gdpIndicator = new THREE.Mesh(gdpGeo, new THREE.MeshBasicMaterial({ color: 0xFF1744 }));
    this.gdpIndicator.position.set(0, -0.3, 0);
    this.gProteinGroup.add(this.gdpIndicator);

    this.group.add(this.gProteinGroup);
  }

  // ── Adenylyl Cyclase (enzyme in membrane) ──
  _buildAdenylylCyclase() {
    const acGeo = new THREE.CylinderGeometry(0.4, 0.6, 1.2, 8);
    const acMat = new THREE.MeshPhysicalMaterial({
      color: 0x26C6DA,
      emissive: 0x00838F,
      emissiveIntensity: 0.3,
    });
    this.adenylylCyclase = new THREE.Mesh(acGeo, acMat);
    this.adenylylCyclase.position.set(-1, 3, 0);
    this.group.add(this.adenylylCyclase);
  }

  // ── cAMP burst (hundreds of small particles — amplification!) ──
  _buildcAMPBurst() {
    const geo = new THREE.OctahedronGeometry(0.08, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.camp,
      emissive: 0x00BCD4,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.8,
    });

    this.campCount = 120;
    this.campInstance = new THREE.InstancedMesh(geo, mat, this.campCount);
    this.campData = [];
    this._campDummy = new THREE.Object3D();

    for (let i = 0; i < this.campCount; i++) {
      this.campData.push({
        pos: new THREE.Vector3(-1, 2, 0),
        vel: new THREE.Vector3(
          rand(-3, 5),
          rand(-2, -0.5),
          rand(-2, 2)
        ),
        active: false,
        delay: rand(0, 2), // staggered release
      });
      this._campDummy.position.set(999, 999, 999);
      this._campDummy.updateMatrix();
      this.campInstance.setMatrixAt(i, this._campDummy.matrix);
    }
    this.campInstance.instanceMatrix.needsUpdate = true;
    this.group.add(this.campInstance);
  }

  // ── PKA ──
  _buildPKA() {
    const geo = new THREE.BoxGeometry(0.8, 0.5, 0.5);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.pka,
      emissive: 0xF57F17,
      emissiveIntensity: 0.3,
    });
    this.pka = new THREE.Mesh(geo, mat);
    this.pka.position.set(4, 0, 0);
    this.group.add(this.pka);

    // "Open" state — two halves
    const halfGeo = new THREE.BoxGeometry(0.35, 0.5, 0.5);
    this.pkaHalf1 = new THREE.Mesh(halfGeo, mat.clone());
    this.pkaHalf2 = new THREE.Mesh(halfGeo, mat.clone());
    this.pkaHalf1.position.set(3.7, 0, 0);
    this.pkaHalf2.position.set(4.3, 0, 0);
    this.pkaHalf1.visible = false;
    this.pkaHalf2.visible = false;
    this.group.add(this.pkaHalf1);
    this.group.add(this.pkaHalf2);
  }

  // ── Transcription Factor ──
  _buildTranscriptionFactor() {
    const geo = new THREE.IcosahedronGeometry(0.3, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.transcriptionFactor,
      emissive: 0xAA00FF,
      emissiveIntensity: 0.5,
    });
    this.tf = new THREE.Mesh(geo, mat);
    this.tf.position.set(6, 0, 0);
    this.group.add(this.tf);
  }

  // ── Nucleus pore (target for TF) ──
  _buildNucleusPore() {
    // Simplified nuclear envelope edge
    const envGeo = new THREE.TorusGeometry(1.5, 0.15, 8, 16, Math.PI);
    const envMat = new THREE.MeshStandardMaterial({
      color: COLORS.nucleus,
      emissive: 0x0D47A1,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.5,
    });
    this.nucPore = new THREE.Mesh(envGeo, envMat);
    this.nucPore.position.set(10, -2, 0);
    this.nucPore.rotation.z = Math.PI / 2;
    this.group.add(this.nucPore);

    // Gene expression flash
    const flashGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xFFEB3B,
      transparent: true,
      opacity: 0,
    });
    this.geneFlash = new THREE.Mesh(flashGeo, flashMat);
    this.geneFlash.position.set(10, -2, 0);
    this.group.add(this.geneFlash);
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'LIGAND', pos: [-6, 8, 0] },
      { text: 'GPCR', pos: [-6, 5, 0] },
      { text: 'G-PROTEIN', pos: [-6, 0.5, 0] },
      { text: 'ADENYLYL CYCLASE', pos: [-1, 5, 0] },
      { text: 'cAMP CASCADE', pos: [2, -1.5, 0] },
      { text: 'PKA', pos: [4, 1.5, 0] },
      { text: 'TRANSCRIPTION FACTOR', pos: [6, 1.5, 0] },
      { text: 'NUCLEUS', pos: [10, -4, 0] },
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
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 160, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.5, 0.5, 1);
    return sprite;
  }

  setOpacity(o) {
    this.membrane.material.opacity = 0.2 * o;
    this.labelSprites.forEach(s => { s.material.opacity = o * 0.45; });
  }

  update(dt) {
    this.time += dt;

    // Cascade cycles continuously over cycleLength seconds
    this.cascadePhase = (this.time % this.cycleLength) / this.cycleLength;
    const p = this.cascadePhase;

    // ── Step 1: Ligand approaches GPCR (0-0.1) ──
    if (p < 0.1) {
      const t = p / 0.1;
      this.ligand.position.y = lerp(7, 3.8, t);
      this.ligand.visible = true;
    }
    // ── Step 2: Ligand docked, GPCR activates (0.1-0.2) ──
    else if (p < 0.2) {
      this.ligand.position.y = 3.8; // docked
      this.gpcrGroup.children.forEach((h, i) => {
        if (h.geometry.type === 'CylinderGeometry') {
          h.material.emissiveIntensity = 0.8; // activated glow
        }
      });
    }
    // ── Step 3: G-protein splits (0.2-0.35) ──
    else if (p < 0.35) {
      const t = (p - 0.2) / 0.15;
      this.gAlpha.position.x = lerp(0, 3, t);
      this.gBeta.position.x = lerp(0.5, -1, t);
      this.gdpIndicator.material.color.setHex(0x00E676); // GDP→GTP (red→green)
    }
    // ── Step 4: Gα activates adenylyl cyclase (0.35-0.45) ──
    else if (p < 0.45) {
      this.gAlpha.position.x = 5; // reached AC
      this.adenylylCyclase.material.emissiveIntensity = 0.8;
    }
    // ── Step 5: cAMP burst (0.45-0.7) — the amplification cascade ──
    else if (p < 0.7) {
      const burstT = (p - 0.45) / 0.25;
      const dummy = this._campDummy;
      for (let i = 0; i < this.campCount; i++) {
        const c = this.campData[i];
        if (burstT > c.delay / 2.5) {
          if (!c.active) {
            c.active = true;
            c.pos.set(-1, 2, 0);
          }
          c.pos.addScaledVector(c.vel, dt);
          // Brownian jitter
          c.pos.x += Math.sin(this.time * 5 + i) * dt * 0.5;
          c.pos.z += Math.cos(this.time * 4 + i * 0.7) * dt * 0.4;
          dummy.position.copy(c.pos);
          dummy.rotation.set(this.time + i, 0, 0);
        } else {
          dummy.position.set(999, 999, 999);
        }
        dummy.updateMatrix();
        this.campInstance.setMatrixAt(i, dummy.matrix);
      }
      this.campInstance.instanceMatrix.needsUpdate = true;
    }
    // ── Step 6: PKA opens (0.7-0.8) ──
    else if (p < 0.8) {
      const t = (p - 0.7) / 0.1;
      this.pka.visible = t < 0.3;
      this.pkaHalf1.visible = t >= 0.3;
      this.pkaHalf2.visible = t >= 0.3;
      if (t >= 0.3) {
        this.pkaHalf1.position.x = lerp(3.7, 3.4, (t - 0.3) / 0.7);
        this.pkaHalf2.position.x = lerp(4.3, 4.6, (t - 0.3) / 0.7);
      }
    }
    // ── Step 7: TF travels to nucleus (0.8-0.95) ──
    else if (p < 0.95) {
      const t = (p - 0.8) / 0.15;
      this.tf.position.x = lerp(6, 10, t);
      this.tf.position.y = lerp(0, -2, t);
      this.tf.material.emissiveIntensity = 0.5 + t * 0.5;

      // Gene flash at arrival
      if (t > 0.8) {
        this.geneFlash.material.opacity = (t - 0.8) * 5;
        this.geneFlash.scale.setScalar(1 + (t - 0.8) * 3);
      }
    }
    // ── Reset phase (0.95-1.0) ──
    else {
      this._resetCascade();
    }

    // ── Continuous animations ──
    this.ligand.rotation.y += dt * 2;
    this.nucPore.rotation.y += dt * 0.3;
  }

  _resetCascade() {
    this.ligand.position.set(-6, 7, 0);
    this.ligand.visible = true;

    this.gpcrGroup.children.forEach(h => {
      if (h.material && h.material.emissiveIntensity !== undefined) {
        h.material.emissiveIntensity = 0.4;
      }
    });

    this.gAlpha.position.set(0, 0, 0);
    this.gBeta.position.set(0.5, 0, 0.3);
    this.gdpIndicator.material.color.setHex(0xFF1744);

    this.adenylylCyclase.material.emissiveIntensity = 0.3;

    // Reset cAMP
    const dummy = this._campDummy;
    for (let i = 0; i < this.campCount; i++) {
      this.campData[i].active = false;
      this.campData[i].pos.set(-1, 2, 0);
      this.campData[i].vel.set(rand(-3, 5), rand(-2, -0.5), rand(-2, 2));
      dummy.position.set(999, 999, 999);
      dummy.updateMatrix();
      this.campInstance.setMatrixAt(i, dummy.matrix);
    }
    this.campInstance.instanceMatrix.needsUpdate = true;

    // Reset PKA
    this.pka.visible = true;
    this.pkaHalf1.visible = false;
    this.pkaHalf2.visible = false;

    // Reset TF
    this.tf.position.set(6, 0, 0);
    this.tf.material.emissiveIntensity = 0.5;

    // Reset flash
    this.geneFlash.material.opacity = 0;
    this.geneFlash.scale.setScalar(1);
  }
}
