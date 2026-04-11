import * as THREE from 'three';
import { COLORS, rand, lerp } from '../utils/constants.js';

/**
 * CentralDogmaWorld — molecular-level: Transcription (left) + Translation (right).
 * DNA → mRNA → Protein, the fundamental flow of genetic information.
 */
export class CentralDogmaWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;

    this._buildTranscriptionSide();
    this._buildTranslationSide();
    this._buildLabels();
  }

  // ═══════════════════════════════════════════
  //  LEFT SIDE: TRANSCRIPTION
  // ═══════════════════════════════════════════
  _buildTranscriptionSide() {
    this.txGroup = new THREE.Group();
    this.txGroup.position.set(-7, 0, 0);
    this.group.add(this.txGroup);

    // ── DNA double helix ──
    this._buildDNAHelix();

    // ── RNA Polymerase (large bead at transcription bubble) ──
    const polGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const polMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.rnaPol,
      emissive: 0xF57F17,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });
    this.rnaPol = new THREE.Mesh(polGeo, polMat);
    this.rnaPol.position.set(0, 0, 0);
    this.txGroup.add(this.rnaPol);

    // ── Transcription bubble (opening in DNA) ──
    // Visual: slight glow around RNA Pol
    const bubbleGeo = new THREE.RingGeometry(1.2, 1.6, 16);
    const bubbleMat = new THREE.MeshBasicMaterial({
      color: 0xFFE082,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    this.bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
    this.txGroup.add(this.bubble);

    // ── Pre-mRNA strand growing out of Pol ──
    this.mrnaCurvePoints = [];
    for (let i = 0; i < 30; i++) {
      this.mrnaCurvePoints.push(new THREE.Vector3(
        i * 0.4 + 1.2,
        Math.sin(i * 0.5) * 0.3,
        0.8
      ));
    }
    const mrnaCurve = new THREE.CatmullRomCurve3(this.mrnaCurvePoints);
    const mrnaGeo = new THREE.TubeGeometry(mrnaCurve, 30, 0.08, 6, false);
    const mrnaMat = new THREE.MeshStandardMaterial({
      color: COLORS.mrna,
      emissive: 0xFF6F00,
      emissiveIntensity: 0.4,
    });
    this.mrnaStrand = new THREE.Mesh(mrnaGeo, mrnaMat);
    this.txGroup.add(this.mrnaStrand);

    // ── 5' cap ──
    const capGeo = new THREE.SphereGeometry(0.15, 8, 8);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xFFD600,
      emissive: 0xFFD600,
      emissiveIntensity: 0.6,
    });
    this.fiveCap = new THREE.Mesh(capGeo, capMat);
    this.txGroup.add(this.fiveCap);

    // ── Spliceosome ──
    const spliceGeo = new THREE.TorusGeometry(0.5, 0.15, 8, 16);
    const spliceMat = new THREE.MeshStandardMaterial({
      color: COLORS.spliceosome,
      emissive: 0x7B1FA2,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.8,
    });
    this.spliceosome = new THREE.Mesh(spliceGeo, spliceMat);
    this.spliceosome.position.set(6, 0.5, 0.8);
    this.txGroup.add(this.spliceosome);

    // Intron lariat (small loop that appears and dissolves)
    const lariatGeo = new THREE.TorusGeometry(0.3, 0.06, 6, 12);
    const lariatMat = new THREE.MeshBasicMaterial({
      color: 0x9575CD,
      transparent: true,
      opacity: 0.6,
    });
    this.lariat = new THREE.Mesh(lariatGeo, lariatMat);
    this.lariat.position.set(6, 1.5, 1);
    this.txGroup.add(this.lariat);
  }

  _buildDNAHelix() {
    // Two intertwined helices
    const helixMat1 = new THREE.MeshStandardMaterial({
      color: COLORS.dnaBlue,
      emissive: 0x1565C0,
      emissiveIntensity: 0.2,
    });
    const helixMat2 = new THREE.MeshStandardMaterial({
      color: COLORS.dnaCompl,
      emissive: 0x283593,
      emissiveIntensity: 0.2,
    });

    const helixPoints1 = [];
    const helixPoints2 = [];
    const length = 50;

    for (let i = 0; i < length; i++) {
      const t = (i / length) * Math.PI * 6;
      const x = (i - length / 2) * 0.4;
      helixPoints1.push(new THREE.Vector3(x, Math.sin(t) * 0.5, Math.cos(t) * 0.5));
      helixPoints2.push(new THREE.Vector3(x, Math.sin(t + Math.PI) * 0.5, Math.cos(t + Math.PI) * 0.5));
    }

    const curve1 = new THREE.CatmullRomCurve3(helixPoints1);
    const curve2 = new THREE.CatmullRomCurve3(helixPoints2);

    const tubeGeo1 = new THREE.TubeGeometry(curve1, 100, 0.1, 6, false);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, 100, 0.1, 6, false);

    this.dnaStrand1 = new THREE.Mesh(tubeGeo1, helixMat1);
    this.dnaStrand2 = new THREE.Mesh(tubeGeo2, helixMat2);
    this.txGroup.add(this.dnaStrand1);
    this.txGroup.add(this.dnaStrand2);

    // Base-pair rungs (simplified, every few steps)
    const rungMat = new THREE.MeshBasicMaterial({ color: 0x4DD0E1, transparent: true, opacity: 0.3 });
    this.rungs = [];
    for (let i = 2; i < length - 2; i += 3) {
      const rungGeo = new THREE.CylinderGeometry(0.03, 0.03, 1, 4);
      const rung = new THREE.Mesh(rungGeo, rungMat);
      const t = (i / length) * Math.PI * 6;
      const x = (i - length / 2) * 0.4;
      rung.position.set(x, 0, 0);
      rung.rotation.x = t;
      this.txGroup.add(rung);
      this.rungs.push(rung);
    }
  }

  // ═══════════════════════════════════════════
  //  RIGHT SIDE: TRANSLATION (Ribosome on mRNA)
  // ═══════════════════════════════════════════
  _buildTranslationSide() {
    this.tlGroup = new THREE.Group();
    this.tlGroup.position.set(7, 0, 0);
    this.group.add(this.tlGroup);

    // ── mRNA strand (wavy line) ──
    const mrnaPoints = [];
    for (let i = 0; i < 40; i++) {
      mrnaPoints.push(new THREE.Vector3(
        (i - 20) * 0.5,
        Math.sin(i * 0.3) * 0.15,
        0
      ));
    }
    const mrnaCurve = new THREE.CatmullRomCurve3(mrnaPoints);
    const mrnaGeo = new THREE.TubeGeometry(mrnaCurve, 60, 0.06, 6, false);
    const mrnaMat = new THREE.MeshStandardMaterial({
      color: COLORS.mrna,
      emissive: 0xFF6F00,
      emissiveIntensity: 0.3,
    });
    this.tlMRNA = new THREE.Mesh(mrnaGeo, mrnaMat);
    this.tlGroup.add(this.tlMRNA);

    // ── Ribosome (large + small subunit) — polyribosome: 3 ribosomes ──
    this.ribosomes = [];
    const positions = [-5, 0, 5]; // spacing along mRNA
    for (const xPos of positions) {
      const riboGroup = new THREE.Group();
      riboGroup.position.set(xPos, 0, 0);

      // Large subunit (60S)
      const largeGeo = new THREE.SphereGeometry(0.8, 16, 12);
      largeGeo.scale(1, 0.7, 1);
      const largeMat = new THREE.MeshPhysicalMaterial({
        color: COLORS.ribosome,
        emissive: 0x546E7A,
        emissiveIntensity: 0.2,
        roughness: 0.4,
      });
      const large = new THREE.Mesh(largeGeo, largeMat);
      large.position.y = -0.5;
      riboGroup.add(large);

      // Small subunit (40S)
      const smallGeo = new THREE.SphereGeometry(0.6, 16, 12);
      smallGeo.scale(1, 0.5, 0.8);
      const smallMat = new THREE.MeshPhysicalMaterial({
        color: 0xB0BEC5,
        emissive: 0x78909C,
        emissiveIntensity: 0.2,
        roughness: 0.4,
      });
      const small = new THREE.Mesh(smallGeo, smallMat);
      small.position.y = 0.4;
      riboGroup.add(small);

      this.tlGroup.add(riboGroup);
      this.ribosomes.push({
        group: riboGroup,
        phase: rand(0, Math.PI * 2),
        tRNAPhase: 0,
      });
    }

    // ── tRNAs (L-shaped) cycling through each ribosome ──
    this._buildTRNAs();

    // ── Polypeptide chain (growing string of spheres) ──
    this._buildPolypeptide();
  }

  _buildTRNAs() {
    const trnaMat = new THREE.MeshStandardMaterial({
      color: COLORS.trna,
      emissive: 0x2E7D32,
      emissiveIntensity: 0.4,
    });

    this.trnaPool = [];
    // 3 tRNAs per ribosome (A, P, E sites)
    for (let r = 0; r < this.ribosomes.length; r++) {
      const riboTRNAs = [];
      for (let s = 0; s < 3; s++) {
        const trnaGroup = new THREE.Group();
        
        // Vertical stem
        const stemGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.7, 6);
        const stem = new THREE.Mesh(stemGeo, trnaMat);
        trnaGroup.add(stem);

        // Horizontal arm (the L)
        const armGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6);
        const arm = new THREE.Mesh(armGeo, trnaMat);
        arm.rotation.z = Math.PI / 2;
        arm.position.set(0.2, 0.35, 0);
        trnaGroup.add(arm);

        // Amino acid (small sphere at top)
        const aaGeo = new THREE.SphereGeometry(0.1, 6, 6);
        const aaMat = new THREE.MeshStandardMaterial({
          color: COLORS.polypeptide,
          emissive: 0xAA00FF,
          emissiveIntensity: 0.5,
        });
        const aa = new THREE.Mesh(aaGeo, aaMat);
        aa.position.set(0, -0.45, 0);
        trnaGroup.add(aa);

        // Position at site (A=right, P=center, E=left relative to ribosome)
        const xOff = (1 - s) * 0.5;
        trnaGroup.position.set(xOff, 0.8, 0.3);

        this.ribosomes[r].group.add(trnaGroup);
        riboTRNAs.push(trnaGroup);
      }
      this.trnaPool.push(riboTRNAs);
    }
  }

  _buildPolypeptide() {
    // Chain of small spheres emerging from first ribosome
    const ppMat = new THREE.MeshStandardMaterial({
      color: COLORS.polypeptide,
      emissive: 0x7B1FA2,
      emissiveIntensity: 0.3,
    });
    const ppGeo = new THREE.SphereGeometry(0.12, 6, 6);

    this.ppCount = 30;
    this.ppInstance = new THREE.InstancedMesh(ppGeo, ppMat, this.ppCount);
    this.ppPositions = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < this.ppCount; i++) {
      // Emerging from exit tunnel, coiling into alpha helix
      const angle = i * 0.6;
      const y = -1 - i * 0.12;
      const x = Math.cos(angle) * 0.3;
      const z = Math.sin(angle) * 0.3;
      
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      this.ppInstance.setMatrixAt(i, dummy.matrix);
      this.ppPositions.push(new THREE.Vector3(x, y, z));
    }
    this.ppInstance.instanceMatrix.needsUpdate = true;
    this.ribosomes[0].group.add(this.ppInstance);
    this._ppDummy = new THREE.Object3D();
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'DNA DOUBLE HELIX', pos: [-12, 2, 0] },
      { text: 'RNA POLYMERASE', pos: [-7, 1.8, 0] },
      { text: 'PRE-mRNA', pos: [-3, 1.5, 1] },
      { text: 'SPLICEOSOME', pos: [-1, 2, 1] },
      { text: 'RIBOSOME', pos: [7, 2, 0] },
      { text: 'tRNA', pos: [7.5, 2.5, 0.5] },
      { text: 'POLYPEPTIDE', pos: [7, -2, 0] },
      { text: 'POLYRIBOSOME', pos: [10, 2, 0] },
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
    this.labelSprites.forEach(s => { s.material.opacity = o * 0.45; });
  }

  update(dt) {
    this.time += dt;

    // ── Transcription: RNA Pol oscillates slightly, bubble pulses ──
    this.rnaPol.position.x = Math.sin(this.time * 0.3) * 0.5;
    this.bubble.position.copy(this.rnaPol.position);
    this.bubble.rotation.z = this.time * 0.5;
    this.bubble.material.opacity = 0.2 + Math.sin(this.time * 3) * 0.1;

    // 5' cap follows mRNA start
    this.fiveCap.position.set(
      this.mrnaCurvePoints[this.mrnaCurvePoints.length - 1].x + this.rnaPol.position.x,
      0.3,
      0.8
    );

    // Spliceosome spins when processing
    this.spliceosome.rotation.x += dt * 2;
    this.spliceosome.rotation.z += dt * 1.5;

    // Lariat pulses in and out
    const lariatCycle = (this.time % 4) / 4;
    this.lariat.material.opacity = lariatCycle < 0.5
      ? lerp(0, 0.6, lariatCycle * 2)
      : lerp(0.6, 0, (lariatCycle - 0.5) * 2);
    this.lariat.position.y = 1.5 + lariatCycle * 1.5;

    // ── Translation: ribosome ratchet + tRNA cycling ──
    for (let r = 0; r < this.ribosomes.length; r++) {
      const ribo = this.ribosomes[r];
      // Slight ratcheting motion
      ribo.group.position.y = Math.sin(this.time * 2 + ribo.phase) * 0.08;

      // tRNA cycling: rotate through A→P→E positions
      const tRNAs = this.trnaPool[r];
      for (let s = 0; s < 3; s++) {
        const cycle = ((this.time * 0.8 + ribo.phase + s * (Math.PI * 2 / 3)) % (Math.PI * 2)) / (Math.PI * 2);
        // Map cycle to position: entry from right, across, exit left
        const xPos = lerp(0.8, -0.8, cycle);
        const yBob = Math.sin(cycle * Math.PI) * 0.3 + 0.8;
        tRNAs[s].position.set(xPos, yBob, 0.3);
        tRNAs[s].rotation.z = lerp(0.3, -0.3, cycle);
      }
    }

    // ── Polypeptide grows/undulates ──
    const dummy = this._ppDummy;
    for (let i = 0; i < this.ppCount; i++) {
      const p = this.ppPositions[i];
      const wave = Math.sin(this.time * 1.5 + i * 0.4) * 0.05;
      dummy.position.set(p.x + wave, p.y, p.z + wave);
      dummy.updateMatrix();
      this.ppInstance.setMatrixAt(i, dummy.matrix);
    }
    this.ppInstance.instanceMatrix.needsUpdate = true;
  }
}
