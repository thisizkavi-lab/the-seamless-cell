import * as THREE from 'three';
import { COLORS, rand, lerp, clamp } from '../utils/constants.js';

/**
 * DivisionWorld v2 — Multi-generation cell division with molecular detail.
 *
 * Timeline (60s cycle):
 *   0-12s   G1 phase        Cyclin D-Cdk4/6 → Rb phosphorylation
 *   12-13s  G1/S Checkpoint  p53 inspects DNA
 *   13-18s  S phase          Cyclin E-Cdk2, replication forks
 *   18-20s  G2 phase         Cyclin A-Cdk2
 *   20-22s  Prophase          M-Cdk (Cyclin B-Cdk1), chromosomes condense
 *   22-24s  Prometaphase      Nuclear envelope breakdown
 *   24-27s  Metaphase         Chromosomes align, spindle checkpoint
 *   27-32s  Anaphase          APC/C → Separase → Cohesin cleavage
 *   32-35s  Telophase         Nuclear envelopes reform
 *   35-40s  Cytokinesis       Contractile ring → 2 daughter cells
 *   40-50s  Daughter growth   2 cells grow (G1)
 *   50-55s  2nd division      One daughter divides (abbreviated) → 4 cells
 *   55-60s  Hold/reset
 */
export class DivisionWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this.cycleLength = 60;

    // ── Primary dividing cell ──
    this._buildPrimaryCell();
    this._buildNuclearEnvelope();
    this._buildChromosomes();
    this._buildSpindle();
    this._buildCentrosomes();
    this._buildContractileRing();
    this._buildCohesinLinks();
    this._buildRegulators();
    this._buildDaughterCells();
    this._buildStageLabel();
    this._buildLabels();
  }

  // ═══════════════════════════════════════════════
  //  BUILD METHODS
  // ═══════════════════════════════════════════════

  _buildPrimaryCell() {
    const geo = new THREE.SphereGeometry(6, 32, 32);
    geo.scale(1.3, 1, 1);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.1,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.cellBody = new THREE.Mesh(geo, mat);
    this.group.add(this.cellBody);
  }

  _buildNuclearEnvelope() {
    const geo = new THREE.SphereGeometry(3, 24, 24);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.nucleus,
      transparent: true,
      opacity: 0.2,
      roughness: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.nucEnvelope = new THREE.Mesh(geo, mat);
    this.group.add(this.nucEnvelope);

    // Envelope fragment particles
    const fragGeo = new THREE.PlaneGeometry(0.4, 0.4);
    const fragMat = new THREE.MeshBasicMaterial({
      color: COLORS.nucleus,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    this.fragCount = 30;
    this.fragInstance = new THREE.InstancedMesh(fragGeo, fragMat, this.fragCount);
    this.fragData = [];
    this._fragDummy = new THREE.Object3D();

    for (let i = 0; i < this.fragCount; i++) {
      const theta = rand(0, Math.PI * 2);
      const phi = rand(0, Math.PI);
      this.fragData.push({
        basePos: new THREE.Vector3(
          3 * Math.sin(phi) * Math.cos(theta),
          3 * Math.sin(phi) * Math.sin(theta),
          3 * Math.cos(phi)
        ),
        vel: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)),
        rot: rand(0, Math.PI * 2),
      });
      this._fragDummy.position.set(999, 999, 999);
      this._fragDummy.updateMatrix();
      this.fragInstance.setMatrixAt(i, this._fragDummy.matrix);
    }
    this.fragInstance.instanceMatrix.needsUpdate = true;
    this.fragInstance.visible = false;
    this.group.add(this.fragInstance);
  }

  _buildChromosomes() {
    this.chromosomes = [];
    const chrMat = new THREE.MeshStandardMaterial({
      color: COLORS.chromosome,
      emissive: 0x7B1FA2,
      emissiveIntensity: 0.3,
    });

    for (let i = 0; i < 4; i++) {
      const chrGroup = new THREE.Group();

      // Sister chromatid A
      const armA1 = this._makeArm();
      const armA2 = this._makeArm();
      armA1.position.set(-0.15, 0.4, 0);
      armA1.rotation.z = 0.15;
      armA2.position.set(-0.15, -0.4, 0);
      armA2.rotation.z = -0.15;
      const sisterA = new THREE.Group();
      sisterA.add(armA1, armA2);

      // Sister chromatid B
      const armB1 = this._makeArm();
      const armB2 = this._makeArm();
      armB1.position.set(0.15, 0.4, 0);
      armB1.rotation.z = -0.15;
      armB2.position.set(0.15, -0.4, 0);
      armB2.rotation.z = 0.15;
      const sisterB = new THREE.Group();
      sisterB.add(armB1, armB2);

      // Kinetochores
      const kinGeo = new THREE.SphereGeometry(0.1, 6, 6);
      const kinMat = new THREE.MeshStandardMaterial({
        color: COLORS.kinetochore,
        emissive: 0xD50000,
        emissiveIntensity: 0.6,
      });
      const kinA = new THREE.Mesh(kinGeo, kinMat);
      kinA.position.set(-0.2, 0, 0);
      sisterA.add(kinA);

      const kinB = new THREE.Mesh(kinGeo, kinMat.clone());
      kinB.position.set(0.2, 0, 0);
      sisterB.add(kinB);

      chrGroup.add(sisterA, sisterB);

      const angle = (i / 4) * Math.PI * 2;
      chrGroup.position.set(
        Math.cos(angle) * 1.5,
        rand(-1, 1),
        Math.sin(angle) * 1.5
      );

      this.group.add(chrGroup);
      this.chromosomes.push({
        group: chrGroup,
        sisterA,
        sisterB,
        initPos: chrGroup.position.clone(),
        angle,
        separated: false,
      });
    }
  }

  _makeArm() {
    const geo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.chromosome,
      emissive: 0x7B1FA2,
      emissiveIntensity: 0.3,
    });
    return new THREE.Mesh(geo, mat);
  }

  // ── Cohesin links (orange rings between sister chromatids) ──
  _buildCohesinLinks() {
    this.cohesinLinks = [];
    const cohGeo = new THREE.TorusGeometry(0.12, 0.03, 6, 8);
    const cohMat = new THREE.MeshStandardMaterial({
      color: COLORS.cohesin,
      emissive: 0xFF6D00,
      emissiveIntensity: 0.5,
    });

    for (let i = 0; i < 4; i++) {
      const link1 = new THREE.Mesh(cohGeo, cohMat.clone());
      const link2 = new THREE.Mesh(cohGeo, cohMat.clone());
      link1.position.set(0, 0.2, 0);
      link2.position.set(0, -0.2, 0);
      link1.rotation.x = Math.PI / 2;
      link2.rotation.x = Math.PI / 2;

      this.chromosomes[i].group.add(link1, link2);
      this.cohesinLinks.push(link1, link2);
    }
  }

  _buildSpindle() {
    this.spindleGroup = new THREE.Group();
    this.spindleGroup.visible = false;

    const mtMat = new THREE.LineBasicMaterial({
      color: COLORS.spindle,
      transparent: true,
      opacity: 0.3,
    });

    this.spindleLines = [];
    for (let pole = 0; pole < 2; pole++) {
      for (let i = 0; i < 8; i++) {
        const points = [
          new THREE.Vector3(pole === 0 ? -5 : 5, 0, 0),
          new THREE.Vector3(0, rand(-1, 1), rand(-1, 1)),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, mtMat.clone());
        this.spindleGroup.add(line);
        this.spindleLines.push({ line, pole, targetY: rand(-1, 1), targetZ: rand(-1, 1) });
      }
    }

    // Astral microtubules
    for (let pole = 0; pole < 2; pole++) {
      const poleX = pole === 0 ? -5 : 5;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const points = [
          new THREE.Vector3(poleX, 0, 0),
          new THREE.Vector3(
            poleX + (pole === 0 ? -2 : 2),
            Math.cos(angle) * 2,
            Math.sin(angle) * 2
          ),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
          color: COLORS.spindle,
          transparent: true,
          opacity: 0.15,
        }));
        this.spindleGroup.add(line);
      }
    }
    this.group.add(this.spindleGroup);
  }

  _buildCentrosomes() {
    const centGeo = new THREE.SphereGeometry(0.3, 12, 12);
    const centMat = new THREE.MeshStandardMaterial({
      color: COLORS.centrosome,
      emissive: 0x00C853,
      emissiveIntensity: 0.5,
    });

    this.centrosome1 = new THREE.Mesh(centGeo, centMat);
    this.centrosome2 = new THREE.Mesh(centGeo, centMat.clone());
    this.centrosome1.position.set(0, 0, 0);
    this.centrosome2.position.set(0, 0, 0);
    this.group.add(this.centrosome1, this.centrosome2);
  }

  _buildContractileRing() {
    const ringGeo = new THREE.TorusGeometry(6, 0.15, 8, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: COLORS.contractileRing,
      emissive: 0xC51162,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0,
    });
    this.contractileRing = new THREE.Mesh(ringGeo, ringMat);
    this.contractileRing.rotation.y = Math.PI / 2;
    this.group.add(this.contractileRing);
  }

  // ── Cell Cycle Regulators (labeled spheres) ──
  _buildRegulators() {
    this.regulators = {};

    // Cyclin D + Cdk4/6
    this.regulators.cyclinD = this._makeRegulator('CYCLIN D', COLORS.cyclinD, 0xE65100);
    this.regulators.cdk46 = this._makeRegulator('CDK4/6', COLORS.cdk, 0x4E342E);

    // Rb (retinoblastoma)
    this.regulators.rb = this._makeRegulator('Rb', COLORS.rb, 0xB71C1C);

    // p53
    this.regulators.p53 = this._makeRegulator('p53', COLORS.p53, 0x00796B);

    // Cyclin E + Cdk2
    this.regulators.cyclinE = this._makeRegulator('CYCLIN E', COLORS.cyclinE, 0xBF360C);
    this.regulators.cdk2 = this._makeRegulator('CDK2', COLORS.cdk, 0x4E342E);

    // Cyclin A
    this.regulators.cyclinA = this._makeRegulator('CYCLIN A', COLORS.cyclinA, 0xFF6F00);

    // Cyclin B + Cdk1 (M-Cdk)
    this.regulators.cyclinB = this._makeRegulator('CYCLIN B', COLORS.cyclinB, 0xBF360C);
    this.regulators.cdk1 = this._makeRegulator('CDK1', COLORS.cdk, 0x4E342E);
    this.regulators.mCdk = this._makeRegulator('M-Cdk', 0xFF3D00, 0xDD2C00);

    // APC/C (Anaphase-Promoting Complex)
    this.regulators.apc = this._makeRegulator('APC/C', COLORS.apc, 0x7B1FA2);

    // Separase
    this.regulators.separase = this._makeRegulator('SEPARASE', COLORS.separase, 0x33691E);

    // Hide all initially
    for (const key in this.regulators) {
      this.regulators[key].group.visible = false;
    }
  }

  _makeRegulator(name, color, emissiveColor) {
    const group = new THREE.Group();

    // Sphere
    const geo = new THREE.SphereGeometry(0.25, 10, 10);
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: emissiveColor,
      emissiveIntensity: 0.6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Label
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 48;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
    ctx.textAlign = 'center';
    ctx.fillText(name, 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2, 0.4, 1);
    sprite.position.y = 0.5;
    group.add(sprite);

    this.group.add(group);
    return { group, mesh, mat };
  }

  // ── Daughter cells (appear after cytokinesis) ──
  _buildDaughterCells() {
    this.daughters = [];
    const memMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const nucMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.nucleus,
      transparent: true,
      opacity: 0,
      roughness: 0.4,
    });

    for (let i = 0; i < 4; i++) {
      const dGroup = new THREE.Group();
      dGroup.visible = false;

      const memGeo = new THREE.SphereGeometry(3, 20, 20);
      memGeo.scale(1.2, 1, 1);
      const mem = new THREE.Mesh(memGeo, memMat.clone());
      dGroup.add(mem);

      const nucGeo = new THREE.SphereGeometry(1.2, 14, 14);
      const nuc = new THREE.Mesh(nucGeo, nucMat.clone());
      dGroup.add(nuc);

      // Mini organelles
      for (let d = 0; d < 6; d++) {
        const dotGeo = new THREE.SphereGeometry(0.1, 4, 4);
        const dotMat = new THREE.MeshStandardMaterial({
          color: [COLORS.mitochondria, COLORS.er, COLORS.vesicle][d % 3],
          emissive: [COLORS.mitochondria, COLORS.er, COLORS.vesicle][d % 3],
          emissiveIntensity: 0.3,
        });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(rand(-1, 1), rand(-0.6, 0.6), rand(-0.6, 0.6));
        dGroup.add(dot);
      }

      this.group.add(dGroup);
      this.daughters.push({
        group: dGroup,
        membrane: mem,
        nucleus: nuc,
        targetPos: new THREE.Vector3(),
        scale: 0.3,
      });
    }
  }

  // ── UI Elements ──
  _buildStageLabel() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    this._stageLabelCanvas = canvas;
    this._stageLabelCtx = canvas.getContext('2d');

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    this.stageLabelSprite = new THREE.Sprite(mat);
    this.stageLabelSprite.scale.set(8, 1, 1);
    this.stageLabelSprite.position.set(0, 9, 0);
    this.group.add(this.stageLabelSprite);

    this.stageLabel = '';
  }

  _updateStageLabel(text) {
    if (text === this.stageLabel) return;
    this.stageLabel = text;
    const ctx = this._stageLabelCtx;
    ctx.clearRect(0, 0, 512, 64);
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,213,0,0.8)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 42);
    this.stageLabelSprite.material.map.needsUpdate = true;
  }

  _buildLabels() {
    const labels = [
      { text: 'CENTROSOME', pos: [-5, 2, 0], id: 'centrosome' },
      { text: 'SPINDLE FIBER', pos: [0, 3.5, 0], id: 'spindle' },
      { text: 'KINETOCHORE', pos: [1, 2, 0], id: 'kinetochore' },
      { text: 'CONTRACTILE RING', pos: [0, -5, 0], id: 'ring' },
      { text: 'COHESIN', pos: [-1.5, 1, 2], id: 'cohesin' },
      { text: 'DAUGHTER CELL', pos: [-8, 3, 0], id: 'daughter' },
    ];

    this.labelSprites = [];
    for (const l of labels) {
      const sprite = this._makeTextSprite(l.text);
      sprite.position.set(l.pos[0], l.pos[1], l.pos[2]);
      sprite.visible = false;
      this.group.add(sprite);
      this.labelSprites.push({ sprite, id: l.id });
    }
  }

  _makeTextSprite(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 160, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.5, 0.5, 1);
    return sprite;
  }

  // ═══════════════════════════════════════════════
  //  OPACITY
  // ═══════════════════════════════════════════════

  setOpacity(o) {
    this.cellBody.material.opacity = 0.1 * o;
    this.stageLabelSprite.material.opacity = o;
  }

  // ═══════════════════════════════════════════════
  //  UPDATE — 60-SECOND MULTI-GENERATION CYCLE
  // ═══════════════════════════════════════════════

  update(dt) {
    this.time += dt;
    const p = (this.time % this.cycleLength) / this.cycleLength;

    // Hide all regulators first, show selectively per stage
    for (const key in this.regulators) {
      this.regulators[key].group.visible = false;
    }

    // ═══════════════════════════════════════
    // FIRST GENERATION: Full Cell Cycle
    // ═══════════════════════════════════════

    // ─── G1 PHASE (0.00-0.20) ── Cyclin D + Cdk4/6 → Rb phosphorylation
    if (p < 0.20) {
      this._updateStageLabel('G1 PHASE — Cyclin D + Cdk4/6 → Rb');
      this._showLabels([]);
      this._hideAllDaughters();

      const t = p / 0.20;

      this.nucEnvelope.visible = true;
      this.nucEnvelope.material.opacity = 0.2;
      this.nucEnvelope.scale.setScalar(1);
      this.fragInstance.visible = false;
      this.spindleGroup.visible = false;
      this.contractileRing.material.opacity = 0;

      // Chromosomes loose (decondensed)
      for (const chr of this.chromosomes) {
        chr.group.scale.set(0.4, 0.4, 0.4);
        chr.group.position.lerp(chr.initPos, dt * 2);
        chr.sisterA.position.set(0, 0, 0);
        chr.sisterB.position.set(0, 0, 0);
        chr.separated = false;
      }
      // Show cohesin
      for (const c of this.cohesinLinks) c.visible = true;

      // Centrosomes together
      this.centrosome1.position.lerp(new THREE.Vector3(0, 0.5, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(0, -0.5, 0), dt * 3);

      // Cell body normal
      this.cellBody.visible = true;
      this.cellBody.scale.set(1.3, 1, 1);

      // ── Regulators: Cyclin D + Cdk4/6 appear and move toward Rb ──
      if (t > 0.2) {
        this.regulators.cyclinD.group.visible = true;
        this.regulators.cdk46.group.visible = true;
        this.regulators.cyclinD.group.position.set(-2, -2, 1);
        this.regulators.cdk46.group.position.set(-1.5, -2, 1);
      }
      if (t > 0.4) {
        this.regulators.rb.group.visible = true;
        this.regulators.rb.group.position.set(0, -2.5, 1);

        // Rb color shifts from red to green as it's phosphorylated
        const rbProgress = clamp((t - 0.4) / 0.4, 0, 1);
        const rbColor = new THREE.Color(COLORS.rb).lerp(new THREE.Color(COLORS.rbPhospho), rbProgress);
        this.regulators.rb.mat.color.copy(rbColor);
        this.regulators.rb.mat.emissive.copy(rbColor).multiplyScalar(0.5);
      }
    }

    // ─── G1/S CHECKPOINT (0.20-0.22) ── p53 inspects
    else if (p < 0.22) {
      this._updateStageLabel('G1/S CHECKPOINT — p53 DNA Inspection');
      this._showLabels([]);

      this.regulators.p53.group.visible = true;
      this.regulators.p53.group.position.set(0, 0, 2);
      // p53 "inspects" — pulses
      const pulse = Math.sin(this.time * 15) * 0.3 + 0.7;
      this.regulators.p53.mat.emissiveIntensity = pulse;

      // Rb stays phosphorylated (green)
      this.regulators.rb.group.visible = true;
      this.regulators.rb.mat.color.set(COLORS.rbPhospho);
    }

    // ─── S PHASE (0.22-0.30) ── DNA replication, Cyclin E-Cdk2
    else if (p < 0.30) {
      this._updateStageLabel('S PHASE — DNA Replication (Cyclin E + Cdk2)');
      this._showLabels([]);
      const t = (p - 0.22) / 0.08;

      this.regulators.cyclinE.group.visible = true;
      this.regulators.cdk2.group.visible = true;
      this.regulators.cyclinE.group.position.set(-2, 1, 1.5);
      this.regulators.cdk2.group.position.set(-1.5, 1, 1.5);

      // Chromosomes slowly duplicate (sisters separate slightly)
      for (const chr of this.chromosomes) {
        chr.group.scale.setScalar(lerp(0.4, 0.6, t));
        // Show the X shape forming
        chr.sisterA.position.x = lerp(0, -0.05, t);
        chr.sisterB.position.x = lerp(0, 0.05, t);
      }
    }

    // ─── G2 PHASE (0.30-0.33) ── Cyclin A-Cdk2
    else if (p < 0.33) {
      this._updateStageLabel('G2 PHASE — Growth & Error Check (Cyclin A)');
      this._showLabels([]);

      this.regulators.cyclinA.group.visible = true;
      this.regulators.cyclinA.group.position.set(1, -1.5, 1.5);

      // Cell slightly larger
      this.cellBody.scale.set(1.4, 1.05, 1.05);
    }

    // ─── PROPHASE (0.33-0.38) ── M-Cdk, chromosomes condense
    else if (p < 0.38) {
      this._updateStageLabel('PROPHASE — M-Cdk Activated (Cyclin B + Cdk1)');
      this._showLabels(['centrosome', 'cohesin']);
      const t = (p - 0.33) / 0.05;

      // M-Cdk visible
      this.regulators.mCdk.group.visible = true;
      this.regulators.mCdk.group.position.set(0, 3, 0);
      this.regulators.mCdk.mat.emissiveIntensity = 0.8 + Math.sin(this.time * 8) * 0.2;

      // Chromosomes condense
      for (const chr of this.chromosomes) {
        const s = lerp(0.6, 1.2, t);
        chr.group.scale.setScalar(s);
      }

      // Centrosomes start separating
      this.centrosome1.position.lerp(new THREE.Vector3(-3 * t, 0, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(3 * t, 0, 0), dt * 3);

      this.nucEnvelope.visible = true;
    }

    // ─── PROMETAPHASE (0.38-0.42) ── NEB
    else if (p < 0.42) {
      this._updateStageLabel('PROMETAPHASE — Nuclear Envelope Breakdown');
      this._showLabels(['centrosome', 'spindle', 'kinetochore']);
      const t = (p - 0.38) / 0.04;

      // Nuclear envelope breaks
      this.nucEnvelope.visible = t < 0.5;
      this.nucEnvelope.material.opacity = lerp(0.2, 0, t * 2);

      // Fragments
      this.fragInstance.visible = true;
      const dummy = this._fragDummy;
      for (let i = 0; i < this.fragCount; i++) {
        const fd = this.fragData[i];
        const pos = fd.basePos.clone().addScaledVector(fd.vel, t * 3);
        dummy.position.copy(pos);
        dummy.rotation.set(fd.rot + this.time, fd.rot * 0.5, 0);
        dummy.scale.setScalar(lerp(1, 0, t));
        dummy.updateMatrix();
        this.fragInstance.setMatrixAt(i, dummy.matrix);
      }
      this.fragInstance.instanceMatrix.needsUpdate = true;

      // Spindle appears
      this.spindleGroup.visible = true;

      this.centrosome1.position.lerp(new THREE.Vector3(-5, 0, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(5, 0, 0), dt * 3);

      for (let i = 0; i < this.chromosomes.length; i++) {
        const chr = this.chromosomes[i];
        chr.group.position.x = lerp(chr.initPos.x, 0, t);
        chr.group.position.y = lerp(chr.initPos.y, (i - 1.5) * 0.8, t);
      }
    }

    // ─── METAPHASE (0.42-0.47) ── Alignment + Spindle Checkpoint
    else if (p < 0.47) {
      this._updateStageLabel('METAPHASE — Spindle Assembly Checkpoint');
      this._showLabels(['spindle', 'kinetochore', 'cohesin']);

      this.nucEnvelope.visible = false;
      this.fragInstance.visible = false;
      this.spindleGroup.visible = true;

      for (let i = 0; i < this.chromosomes.length; i++) {
        const chr = this.chromosomes[i];
        chr.group.position.x = lerp(chr.group.position.x, 0, dt * 4);
        chr.group.position.y = lerp(chr.group.position.y, (i - 1.5) * 1, dt * 3);
        chr.group.scale.setScalar(1.2);
      }

      // Spindle tension
      for (const sl of this.spindleLines) {
        sl.line.material.opacity = 0.3 + Math.sin(this.time * 3 + sl.targetY) * 0.1;
      }
    }

    // ─── ANAPHASE (0.47-0.55) ── APC/C → Separase → Cohesin cleavage!
    else if (p < 0.55) {
      const t = (p - 0.47) / 0.08;

      if (t < 0.3) {
        this._updateStageLabel('ANAPHASE — APC/C → Separase Cleaves Cohesin!');
        this.regulators.apc.group.visible = true;
        this.regulators.apc.group.position.set(2, 3, 0);
        this.regulators.separase.group.visible = true;
        this.regulators.separase.group.position.set(0, 2, 0);
      } else {
        this._updateStageLabel('ANAPHASE — Sister Chromatids Separate!');
      }
      this._showLabels(['spindle']);

      // Cohesin dissolves!
      for (const c of this.cohesinLinks) {
        c.visible = t < 0.25;
      }

      // Sisters separate
      for (const chr of this.chromosomes) {
        chr.sisterA.position.x = lerp(0, -3 * clamp(t, 0, 1), 1);
        chr.sisterB.position.x = lerp(0, 3 * clamp(t, 0, 1), 1);
        chr.separated = true;
      }

      this.centrosome1.position.x = lerp(-5, -6.5, t);
      this.centrosome2.position.x = lerp(5, 6.5, t);

      this.cellBody.scale.x = lerp(1.4, 1.6, t);
      this.cellBody.scale.y = lerp(1.05, 0.85, t);
    }

    // ─── TELOPHASE (0.55-0.60) ──
    else if (p < 0.60) {
      this._updateStageLabel('TELOPHASE — Nuclear Envelopes Reform');
      this._showLabels(['ring']);
      const t = (p - 0.55) / 0.05;

      this.nucEnvelope.visible = true;
      this.nucEnvelope.scale.setScalar(lerp(0.3, 0.8, t));
      this.nucEnvelope.material.opacity = lerp(0, 0.2, t);

      for (const chr of this.chromosomes) {
        const s = lerp(1.2, 0.6, t);
        chr.group.scale.setScalar(s);
      }

      this.contractileRing.material.opacity = lerp(0, 0.5, t);
      this.cellBody.scale.x = lerp(1.6, 1.8, t);
    }

    // ─── CYTOKINESIS (0.60-0.67) ── Contractile ring → TWO CELLS
    else if (p < 0.67) {
      this._updateStageLabel('CYTOKINESIS — Actin Ring Pinches → Two Cells!');
      this._showLabels(['ring', 'daughter']);
      const t = (p - 0.60) / 0.07;

      const ringScale = lerp(1, 0.05, t);
      this.contractileRing.scale.set(ringScale, ringScale, 1);
      this.contractileRing.material.opacity = lerp(0.5, 0.8, Math.min(t * 2, 1));

      this.cellBody.scale.y = lerp(0.85, 0.5, t);
      this.cellBody.scale.x = lerp(1.8, 2.2, t);

      // Fade primary cell out, daughter cells in
      if (t > 0.6) {
        const fadeT = (t - 0.6) / 0.4;
        this.cellBody.material.opacity = lerp(0.1, 0, fadeT);

        // Show 2 daughter cells
        this.daughters[0].group.visible = true;
        this.daughters[1].group.visible = true;
        this.daughters[0].group.position.set(-6, 0, 0);
        this.daughters[1].group.position.set(6, 0, 0);
        this.daughters[0].group.scale.setScalar(lerp(0.3, 0.5, fadeT));
        this.daughters[1].group.scale.setScalar(lerp(0.3, 0.5, fadeT));
        this.daughters[0].membrane.material.opacity = lerp(0, 0.12, fadeT);
        this.daughters[1].membrane.material.opacity = lerp(0, 0.12, fadeT);
        this.daughters[0].nucleus.material.opacity = lerp(0, 0.6, fadeT);
        this.daughters[1].nucleus.material.opacity = lerp(0, 0.6, fadeT);
      }

      this.nucEnvelope.material.opacity = 0.2;
      this.nucEnvelope.scale.setScalar(0.8);
      this.spindleGroup.visible = t < 0.5;
    }

    // ═══════════════════════════════════════
    // GROWTH PHASE: Daughters grow (0.67-0.83)
    // ═══════════════════════════════════════
    else if (p < 0.83) {
      this._updateStageLabel('G1 — Daughter Cells Growing');
      this._showLabels(['daughter']);
      const t = (p - 0.67) / 0.16;

      // Hide primary cell parts
      this.cellBody.visible = false;
      this.nucEnvelope.visible = false;
      this.fragInstance.visible = false;
      this.spindleGroup.visible = false;
      this.contractileRing.material.opacity = 0;
      for (const chr of this.chromosomes) chr.group.visible = false;

      // Daughters grow
      this.daughters[0].group.visible = true;
      this.daughters[1].group.visible = true;
      const s = lerp(0.5, 0.9, t);
      this.daughters[0].group.scale.setScalar(s);
      this.daughters[1].group.scale.setScalar(s);
      this.daughters[0].membrane.material.opacity = 0.12;
      this.daughters[1].membrane.material.opacity = 0.12;
      this.daughters[0].nucleus.material.opacity = 0.6;
      this.daughters[1].nucleus.material.opacity = 0.6;

      // Gentle breathing
      const breath = Math.sin(this.time * 2) * 0.02;
      this.daughters[0].group.scale.y += breath;
      this.daughters[1].group.scale.y += breath;

      // Show Cyclin D on daughter cells
      if (t > 0.5) {
        this.regulators.cyclinD.group.visible = true;
        this.regulators.cyclinD.group.position.set(-6, 2, 0);
      }
    }

    // ═══════════════════════════════════════
    // SECOND DIVISION (abbreviated) → 4 CELLS (0.83-0.92)
    // ═══════════════════════════════════════
    else if (p < 0.92) {
      this._updateStageLabel('2nd DIVISION — One Daughter Divides Again');
      this._showLabels(['daughter']);
      const t = (p - 0.83) / 0.09;

      // Keep cells hidden from primary
      this.cellBody.visible = false;
      this.nucEnvelope.visible = false;
      for (const chr of this.chromosomes) chr.group.visible = false;

      // Left daughter divides (elongates then splits)
      if (t < 0.5) {
        // Elongating
        const et = t / 0.5;
        this.daughters[0].group.scale.x = lerp(0.9, 1.4, et);
        this.daughters[0].group.scale.y = lerp(0.9, 0.7, et);
      } else {
        // Split into 2 more
        const st = (t - 0.5) / 0.5;
        this.daughters[0].group.scale.setScalar(lerp(0.9, 0.5, st));
        this.daughters[0].group.position.x = lerp(-6, -9, st);

        this.daughters[2].group.visible = true;
        this.daughters[2].group.position.set(lerp(-6, -3, st), 0, 0);
        this.daughters[2].group.scale.setScalar(lerp(0.3, 0.5, st));
        this.daughters[2].membrane.material.opacity = lerp(0, 0.12, st);
        this.daughters[2].nucleus.material.opacity = lerp(0, 0.6, st);
      }

      // Right daughter also divides
      if (t < 0.5) {
        this.daughters[1].group.scale.x = lerp(0.9, 1.4, t / 0.5);
        this.daughters[1].group.scale.y = lerp(0.9, 0.7, t / 0.5);
      } else {
        const st = (t - 0.5) / 0.5;
        this.daughters[1].group.scale.setScalar(lerp(0.9, 0.5, st));
        this.daughters[1].group.position.x = lerp(6, 3, st);

        this.daughters[3].group.visible = true;
        this.daughters[3].group.position.set(lerp(6, 9, st), 0, 0);
        this.daughters[3].group.scale.setScalar(lerp(0.3, 0.5, st));
        this.daughters[3].membrane.material.opacity = lerp(0, 0.12, st);
        this.daughters[3].nucleus.material.opacity = lerp(0, 0.6, st);
      }
    }

    // ═══════════════════════════════════════
    // HOLD: 4 Cells Visible (0.92-1.00)
    // ═══════════════════════════════════════
    else {
      this._updateStageLabel('4 DAUGHTER CELLS — Ready for Next Cycle');
      this._showLabels(['daughter']);
      const t = (p - 0.92) / 0.08;

      this.cellBody.visible = false;
      this.nucEnvelope.visible = false;
      for (const chr of this.chromosomes) chr.group.visible = false;

      // All 4 daughters visible, breathing
      for (let i = 0; i < 4; i++) {
        this.daughters[i].group.visible = true;
        const breath = Math.sin(this.time * 1.5 + i * 1.2) * 0.02;
        this.daughters[i].group.scale.setScalar(0.5 + breath);
        this.daughters[i].membrane.material.opacity = 0.12;
        this.daughters[i].nucleus.material.opacity = 0.6;
      }

      // Positions: evenly spread
      this.daughters[0].group.position.set(-9, 0, 0);
      this.daughters[1].group.position.set(-3, 0, 0);
      this.daughters[2].group.position.set(3, 0, 0);
      this.daughters[3].group.position.set(9, 0, 0);

      // Fade to reset near end
      if (t > 0.7) {
        const fadeOut = (t - 0.7) / 0.3;
        for (const d of this.daughters) {
          d.membrane.material.opacity = lerp(0.12, 0, fadeOut);
          d.nucleus.material.opacity = lerp(0.6, 0, fadeOut);
        }
      }
    }
  }

  _hideAllDaughters() {
    for (const d of this.daughters) {
      d.group.visible = false;
    }
  }

  _showLabels(visibleIds) {
    for (const l of this.labelSprites) {
      l.sprite.visible = visibleIds.includes(l.id);
    }
  }
}
