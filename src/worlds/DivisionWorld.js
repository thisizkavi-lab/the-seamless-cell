import * as THREE from 'three';
import { COLORS, rand, lerp, clamp } from '../utils/constants.js';

/**
 * DivisionWorld — organelle-level: Mitosis in a continuous 30-second loop.
 * Stages: Interphase → Prophase → Prometaphase → Metaphase → Anaphase → Telophase → Cytokinesis
 * Shows chromosome condensation, nuclear envelope breakdown, spindle assembly, and sister chromatid segregation.
 */
export class DivisionWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this.cycleLength = 30; // seconds per full mitosis cycle
    this.stageLabel = 'INTERPHASE';

    this._buildCellBody();
    this._buildNuclearEnvelope();
    this._buildChromosomes();
    this._buildSpindle();
    this._buildCentrosomes();
    this._buildContractileRing();
    this._buildStageLabel();
    this._buildLabels();
  }

  // ── Cell body (ellipsoid) ──
  _buildCellBody() {
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

  // ── Nuclear Envelope (dissolves at prometaphase) ──
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

    // Envelope fragment particles (appear when envelope breaks)
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

  // ── Chromosomes (4 pairs, X-shaped when condensed) ──
  _buildChromosomes() {
    this.chromosomes = [];
    const chrMat = new THREE.MeshStandardMaterial({
      color: COLORS.chromosome,
      emissive: 0x7B1FA2,
      emissiveIntensity: 0.3,
    });

    // 4 chromosome pairs
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

      // Kinetochore (dot at centromere)
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
      
      // Initial position (scattered in nucleus)
      const angle = (i / 4) * Math.PI * 2;
      chrGroup.position.set(
        Math.cos(angle) * 1.5,
        rand(-1, 1),
        Math.sin(angle) * 1.5
      );
      chrGroup.rotation.z = rand(-0.3, 0.3);

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

  // ── Mitotic Spindle (dynamic microtubule lines) ──
  _buildSpindle() {
    this.spindleGroup = new THREE.Group();
    this.spindleGroup.visible = false;

    const mtMat = new THREE.LineBasicMaterial({
      color: COLORS.spindle,
      transparent: true,
      opacity: 0.3,
    });

    this.spindleLines = [];
    // 8 microtubule lines from each pole
    for (let pole = 0; pole < 2; pole++) {
      for (let i = 0; i < 8; i++) {
        const points = [
          new THREE.Vector3(pole === 0 ? -5 : 5, 0, 0), // pole
          new THREE.Vector3(0, rand(-1, 1), rand(-1, 1)), // equator
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, mtMat.clone());
        this.spindleGroup.add(line);
        this.spindleLines.push({
          line,
          pole,
          targetY: rand(-1, 1),
          targetZ: rand(-1, 1),
        });
      }
    }

    // Astral microtubules (radiating from poles)
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
        const astralMat = new THREE.LineBasicMaterial({
          color: COLORS.spindle,
          transparent: true,
          opacity: 0.15,
        });
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, astralMat);
        this.spindleGroup.add(line);
      }
    }

    this.group.add(this.spindleGroup);
  }

  // ── Centrosomes ──
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

  // ── Contractile Ring ──
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

  // ── Stage label ──
  _buildStageLabel() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    this._stageLabelCanvas = canvas;
    this._stageLabelCtx = canvas.getContext('2d');

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    this.stageLabelSprite = new THREE.Sprite(mat);
    this.stageLabelSprite.scale.set(6, 0.75, 1);
    this.stageLabelSprite.position.set(0, 8, 0);
    this.group.add(this.stageLabelSprite);
  }

  _updateStageLabel(text) {
    if (text === this.stageLabel) return;
    this.stageLabel = text;
    const ctx = this._stageLabelCtx;
    ctx.clearRect(0, 0, 512, 64);
    ctx.font = 'bold 28px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,213,0,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 42);
    this.stageLabelSprite.material.map.needsUpdate = true;
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'CENTROSOME', pos: [-5, 2, 0], id: 'centrosome' },
      { text: 'SPINDLE FIBER', pos: [0, 3, 0], id: 'spindle' },
      { text: 'KINETOCHORE', pos: [1, 2, 0], id: 'kinetochore' },
      { text: 'CONTRACTILE RING', pos: [0, -5, 0], id: 'ring' },
    ];

    this.labelSprites = [];
    for (const l of labels) {
      const sprite = this._makeLabel(l.text);
      sprite.position.set(l.pos[0], l.pos[1], l.pos[2]);
      sprite.visible = false; // shown contextually
      this.group.add(sprite);
      this.labelSprites.push({ sprite, id: l.id });
    }
  }

  _makeLabel(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 320, 64);
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

  setOpacity(o) {
    this.cellBody.material.opacity = 0.1 * o;
    this.stageLabelSprite.material.opacity = o;
  }

  update(dt) {
    this.time += dt;

    const p = (this.time % this.cycleLength) / this.cycleLength;

    // Stage timing:
    // 0.00 - 0.12: Interphase
    // 0.12 - 0.25: Prophase
    // 0.25 - 0.35: Prometaphase
    // 0.35 - 0.50: Metaphase
    // 0.50 - 0.65: Anaphase
    // 0.65 - 0.80: Telophase
    // 0.80 - 1.00: Cytokinesis

    // ─── INTERPHASE ───
    if (p < 0.12) {
      this._updateStageLabel('INTERPHASE');
      this._showLabels([]);

      this.nucEnvelope.visible = true;
      this.nucEnvelope.material.opacity = 0.2;
      this.fragInstance.visible = false;
      this.spindleGroup.visible = false;
      this.contractileRing.material.opacity = 0;

      // Spread chromosomes (loosely)
      for (const chr of this.chromosomes) {
        chr.group.scale.set(0.5, 0.5, 0.5); // small = decondensed
        chr.group.position.lerp(chr.initPos, dt * 2);
        chr.sisterA.position.set(0, 0, 0);
        chr.sisterB.position.set(0, 0, 0);
        chr.separated = false;
      }

      // Centrosomes together
      this.centrosome1.position.lerp(new THREE.Vector3(0, 0.5, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(0, -0.5, 0), dt * 3);

      // Cell body normal
      this.cellBody.scale.set(1.3, 1, 1);
    }

    // ─── PROPHASE ───
    else if (p < 0.25) {
      this._updateStageLabel('PROPHASE');
      this._showLabels(['centrosome']);
      const t = (p - 0.12) / 0.13;

      this.nucEnvelope.visible = true;
      this.nucEnvelope.material.opacity = 0.2;

      // Chromosomes condense (grow larger)
      for (const chr of this.chromosomes) {
        const s = lerp(0.5, 1.2, t);
        chr.group.scale.setScalar(s);
      }

      // Centrosomes start separating
      this.centrosome1.position.lerp(new THREE.Vector3(-3 * t, 0, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(3 * t, 0, 0), dt * 3);
    }

    // ─── PROMETAPHASE ───
    else if (p < 0.35) {
      this._updateStageLabel('PROMETAPHASE');
      this._showLabels(['centrosome', 'spindle', 'kinetochore']);
      const t = (p - 0.25) / 0.1;

      // Nuclear envelope breaks down
      this.nucEnvelope.visible = t < 0.5;
      this.nucEnvelope.material.opacity = lerp(0.2, 0, t * 2);

      // Show fragments
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

      // Centrosomes fully separated
      this.centrosome1.position.lerp(new THREE.Vector3(-5, 0, 0), dt * 3);
      this.centrosome2.position.lerp(new THREE.Vector3(5, 0, 0), dt * 3);

      // Chromosomes begin moving
      for (let i = 0; i < this.chromosomes.length; i++) {
        const chr = this.chromosomes[i];
        chr.group.position.x = lerp(chr.initPos.x, 0, t);
        chr.group.position.y = lerp(chr.initPos.y, (i - 1.5) * 0.8, t);
      }
    }

    // ─── METAPHASE ───
    else if (p < 0.50) {
      this._updateStageLabel('METAPHASE');
      this._showLabels(['spindle', 'kinetochore']);

      this.nucEnvelope.visible = false;
      this.fragInstance.visible = false;
      this.spindleGroup.visible = true;

      // Chromosomes aligned at metaphase plate (x=0)
      for (let i = 0; i < this.chromosomes.length; i++) {
        const chr = this.chromosomes[i];
        chr.group.position.x = lerp(chr.group.position.x, 0, dt * 4);
        chr.group.position.y = lerp(chr.group.position.y, (i - 1.5) * 1, dt * 3);
        chr.group.scale.setScalar(1.2);
      }

      // Spindle tension (lines wobble)
      for (const sl of this.spindleLines) {
        sl.line.material.opacity = 0.3 + Math.sin(this.time * 3 + sl.targetY) * 0.1;
      }
    }

    // ─── ANAPHASE ───
    else if (p < 0.65) {
      this._updateStageLabel('ANAPHASE');
      this._showLabels(['spindle']);
      const t = (p - 0.50) / 0.15;

      // Sister chromatids separate!
      for (let i = 0; i < this.chromosomes.length; i++) {
        const chr = this.chromosomes[i];
        chr.sisterA.position.x = lerp(0, -3 * t, 1);
        chr.sisterB.position.x = lerp(0, 3 * t, 1);
        chr.separated = true;
      }

      // Spindle elongates (poles move further apart)
      this.centrosome1.position.x = lerp(-5, -6.5, t);
      this.centrosome2.position.x = lerp(5, 6.5, t);

      // Cell starts pinching
      this.cellBody.scale.x = lerp(1.3, 1.6, t);
      this.cellBody.scale.y = lerp(1, 0.85, t);
    }

    // ─── TELOPHASE ───
    else if (p < 0.80) {
      this._updateStageLabel('TELOPHASE');
      this._showLabels(['ring']);
      const t = (p - 0.65) / 0.15;

      // Nuclear envelopes reform around each set
      this.nucEnvelope.visible = true;
      this.nucEnvelope.scale.setScalar(lerp(0.3, 0.8, t));
      this.nucEnvelope.material.opacity = lerp(0, 0.2, t);

      // Chromosomes decondense
      for (const chr of this.chromosomes) {
        const s = lerp(1.2, 0.6, t);
        chr.group.scale.setScalar(s);
      }

      // Contractile ring appears
      this.contractileRing.material.opacity = lerp(0, 0.5, t);

      // Cell elongated
      this.cellBody.scale.x = lerp(1.6, 1.8, t);
    }

    // ─── CYTOKINESIS ───
    else {
      this._updateStageLabel('CYTOKINESIS');
      this._showLabels(['ring']);
      const t = (p - 0.80) / 0.20;

      // Contractile ring pinches
      const ringScale = lerp(1, 0.1, t);
      this.contractileRing.scale.set(ringScale, ringScale, 1);
      this.contractileRing.material.opacity = lerp(0.5, 0.8, Math.min(t * 2, 1));

      // Cell body pinches further
      this.cellBody.scale.y = lerp(0.85, 0.6, t);
      this.cellBody.scale.x = lerp(1.8, 2, t);

      // Nuclear envelopes complete
      this.nucEnvelope.material.opacity = 0.2;
      this.nucEnvelope.scale.setScalar(0.8);

      this.spindleGroup.visible = t < 0.7; // disappears late
    }
  }

  _showLabels(visibleIds) {
    for (const l of this.labelSprites) {
      l.sprite.visible = visibleIds.includes(l.id);
    }
  }
}
