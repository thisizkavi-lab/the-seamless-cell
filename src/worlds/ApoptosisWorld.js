import * as THREE from 'three';
import { COLORS, rand, lerp, clamp } from '../utils/constants.js';

/**
 * ApoptosisWorld — Molecular-level: Programmed Cell Death (Apoptosis).
 *
 * 15-second animated cycle showing the extrinsic apoptotic pathway:
 *   0-2s    Fas Ligand approaches Fas receptor on cell surface
 *   2-3s    FADD adaptor assembles → DISC (Death-Inducing Signaling Complex)
 *   3-4.5s  Procaspase-8 cleaved → active Caspase-8
 *   4.5-6s  Caspase-8 cleaves Bid → tBid migrates to mitochondria
 *   6-8s    tBid activates Bax/Bak → pores in outer mitochondrial membrane
 *   8-10s   Cytochrome c leaks out → assembles with Apaf-1 into Apoptosome
 *   10-12s  Caspase-9 → Caspase-3 (executioner caspase) activated
 *   12-15s  Cell death: chromatin condenses, cell shrinks, membrane blebs,
 *           apoptotic bodies bud off
 */
export class ApoptosisWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this.cycleLength = 15;

    this._buildMembrane();
    this._buildFasReceptor();
    this._buildFasLigand();
    this._buildFADD();
    this._buildCaspase8();
    this._buildBid();
    this._buildMitochondrion();
    this._buildCytochromeC();
    this._buildApoptosome();
    this._buildCaspase3();
    this._buildCellDeathEffects();
    this._buildLabels();
  }

  // ═══════════════════════════════════════════
  //  BUILD METHODS
  // ═══════════════════════════════════════════

  // Plasma membrane (top)
  _buildMembrane() {
    const geo = new THREE.BoxGeometry(20, 0.4, 10);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.2,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.membrane = new THREE.Mesh(geo, mat);
    this.membrane.position.y = 4;
    this.group.add(this.membrane);
  }

  // Fas receptor (death receptor) — vertical cylinder bundle in membrane
  _buildFasReceptor() {
    this.fasGroup = new THREE.Group();
    this.fasGroup.position.set(-5, 4, 0);

    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.fas,
      emissive: 0x8B0000,
      emissiveIntensity: 0.4,
    });

    // 3 subunits (Fas trimerizes)
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const geo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 6);
      const sub = new THREE.Mesh(geo, mat);
      sub.position.set(Math.cos(angle) * 0.25, 0, Math.sin(angle) * 0.25);
      this.fasGroup.add(sub);
    }

    // Death domain (DD) — intracellular tails
    const ddGeo = new THREE.BoxGeometry(0.3, 0.6, 0.3);
    const ddMat = new THREE.MeshStandardMaterial({
      color: 0x880E4F,
      emissive: 0x4A0025,
      emissiveIntensity: 0.3,
    });
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const dd = new THREE.Mesh(ddGeo, ddMat);
      dd.position.set(Math.cos(angle) * 0.25, -1, Math.sin(angle) * 0.25);
      this.fasGroup.add(dd);
    }

    this.group.add(this.fasGroup);
  }

  // Fas Ligand (FasL) — approaching from outside
  _buildFasLigand() {
    const geo = new THREE.DodecahedronGeometry(0.3, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.fasLigand,
      emissive: 0xD50000,
      emissiveIntensity: 0.8,
    });
    this.fasLigand = new THREE.Mesh(geo, mat);
    this.fasLigand.position.set(-5, 8, 0);
    this.group.add(this.fasLigand);
  }

  // FADD adaptor protein
  _buildFADD() {
    const geo = new THREE.BoxGeometry(0.5, 0.4, 0.4);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.fadd,
      emissive: 0xE65100,
      emissiveIntensity: 0.5,
    });
    this.fadd = new THREE.Mesh(geo, mat);
    this.fadd.position.set(-5, 2.5, 0);
    this.fadd.visible = false;
    this.group.add(this.fadd);
  }

  // Caspase-8 (initiator caspase)
  _buildCaspase8() {
    // Inactive procaspase-8 (single block)
    const proGeo = new THREE.BoxGeometry(0.4, 0.6, 0.3);
    const proMat = new THREE.MeshStandardMaterial({
      color: COLORS.caspase8,
      emissive: 0xBF360C,
      emissiveIntensity: 0.3,
    });
    this.proCaspase8 = new THREE.Mesh(proGeo, proMat);
    this.proCaspase8.position.set(-5, 2, 0);
    this.proCaspase8.visible = false;
    this.group.add(this.proCaspase8);

    // Active caspase-8 (scissors shape — two angled blades)
    this.activeCaspase8 = new THREE.Group();
    const bladeGeo = new THREE.BoxGeometry(0.12, 0.6, 0.15);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: COLORS.caspase8,
      emissive: 0xDD2C00,
      emissiveIntensity: 0.7,
    });
    const blade1 = new THREE.Mesh(bladeGeo, bladeMat);
    const blade2 = new THREE.Mesh(bladeGeo, bladeMat.clone());
    blade1.rotation.z = 0.3;
    blade2.rotation.z = -0.3;
    blade1.position.x = -0.15;
    blade2.position.x = 0.15;
    this.activeCaspase8.add(blade1, blade2);
    this.activeCaspase8.position.set(-5, 1.5, 0);
    this.activeCaspase8.visible = false;
    this.group.add(this.activeCaspase8);
  }

  // Bid → tBid
  _buildBid() {
    const geo = new THREE.SphereGeometry(0.2, 8, 8);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.bid,
      emissive: 0xFF8F00,
      emissiveIntensity: 0.5,
    });
    this.bid = new THREE.Mesh(geo, mat);
    this.bid.position.set(-3, 1, 0);
    this.bid.visible = false;
    this.group.add(this.bid);

    // tBid (truncated Bid — slightly different shape)
    const tGeo = new THREE.OctahedronGeometry(0.18, 0);
    const tMat = new THREE.MeshStandardMaterial({
      color: COLORS.tBid,
      emissive: 0xE65100,
      emissiveIntensity: 0.7,
    });
    this.tBid = new THREE.Mesh(tGeo, tMat);
    this.tBid.position.set(-3, 1, 0);
    this.tBid.visible = false;
    this.group.add(this.tBid);
  }

  // Mitochondrion (target for tBid)
  _buildMitochondrion() {
    // Outer membrane
    const outerGeo = new THREE.SphereGeometry(1.5, 16, 16);
    outerGeo.scale(1.8, 1, 1);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.mitochondria,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.mitoOuter = new THREE.Mesh(outerGeo, outerMat);
    this.mitoOuter.position.set(2, -1, 0);
    this.group.add(this.mitoOuter);

    // Inner membrane (cristae fold)
    const innerGeo = new THREE.TorusGeometry(0.8, 0.15, 8, 12);
    const innerMat = new THREE.MeshStandardMaterial({
      color: COLORS.cristae,
      emissive: 0x8B0000,
      emissiveIntensity: 0.2,
    });
    this.cristae = new THREE.Mesh(innerGeo, innerMat);
    this.cristae.position.set(2, -1, 0);
    this.cristae.rotation.y = Math.PI / 4;
    this.group.add(this.cristae);

    // Bax/Bak pores (appear when tBid arrives)
    this.baxPores = [];
    const poreGeo = new THREE.TorusGeometry(0.2, 0.06, 6, 8);
    const poreMat = new THREE.MeshStandardMaterial({
      color: COLORS.baxBak,
      emissive: 0x8B0000,
      emissiveIntensity: 0.6,
    });
    for (let i = 0; i < 4; i++) {
      const pore = new THREE.Mesh(poreGeo, poreMat.clone());
      const angle = (i / 4) * Math.PI * 2;
      pore.position.set(
        2 + Math.cos(angle) * 2.2,
        -1 + Math.sin(angle) * 0.8,
        Math.sin(angle + 1) * 0.5
      );
      pore.lookAt(2, -1, 0);
      pore.visible = false;
      this.group.add(pore);
      this.baxPores.push(pore);
    }
  }

  // Cytochrome c particles (leak from mitochondria)
  _buildCytochromeC() {
    const geo = new THREE.SphereGeometry(0.08, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.cytochromeC,
      emissive: 0xE65100,
      emissiveIntensity: 0.8,
    });

    this.cytCCount = 30;
    this.cytCInstance = new THREE.InstancedMesh(geo, mat, this.cytCCount);
    this.cytCData = [];
    this._cytDummy = new THREE.Object3D();

    for (let i = 0; i < this.cytCCount; i++) {
      this.cytCData.push({
        pos: new THREE.Vector3(2, -1, 0),
        vel: new THREE.Vector3(rand(-2, 4), rand(-1, 1), rand(-1, 1)),
        active: false,
        delay: rand(0, 1.5),
      });
      this._cytDummy.position.set(999, 999, 999);
      this._cytDummy.updateMatrix();
      this.cytCInstance.setMatrixAt(i, this._cytDummy.matrix);
    }
    this.cytCInstance.instanceMatrix.needsUpdate = true;
    this.group.add(this.cytCInstance);
  }

  // Apoptosome (wheel-like structure)
  _buildApoptosome() {
    this.apoptosomeGroup = new THREE.Group();
    this.apoptosomeGroup.position.set(6, -1, 0);
    this.apoptosomeGroup.visible = false;

    // Central hub
    const hubGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 8);
    const hubMat = new THREE.MeshStandardMaterial({
      color: COLORS.apoptosome,
      emissive: 0x4A148C,
      emissiveIntensity: 0.5,
    });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    this.apoptosomeGroup.add(hub);

    // 7 Apaf-1 spokes (heptameric wheel)
    const spokeMat = new THREE.MeshStandardMaterial({
      color: COLORS.apaf1,
      emissive: 0x4527A0,
      emissiveIntensity: 0.4,
    });
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const spokeGeo = new THREE.BoxGeometry(0.8, 0.1, 0.15);
      const spoke = new THREE.Mesh(spokeGeo, spokeMat);
      spoke.position.set(Math.cos(angle) * 0.7, 0, Math.sin(angle) * 0.7);
      spoke.rotation.y = -angle;
      this.apoptosomeGroup.add(spoke);

      // Cytochrome c at end of each spoke
      const cytGeo = new THREE.SphereGeometry(0.1, 6, 6);
      const cytMat = new THREE.MeshStandardMaterial({
        color: COLORS.cytochromeC,
        emissive: 0xFF6F00,
        emissiveIntensity: 0.6,
      });
      const cyt = new THREE.Mesh(cytGeo, cytMat);
      cyt.position.set(Math.cos(angle) * 1.1, 0, Math.sin(angle) * 1.1);
      this.apoptosomeGroup.add(cyt);
    }

    this.group.add(this.apoptosomeGroup);
  }

  // Caspase-3 (executioner — large active enzyme)
  _buildCaspase3() {
    const geo = new THREE.IcosahedronGeometry(0.35, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.caspase3,
      emissive: 0xBF360C,
      emissiveIntensity: 0.8,
    });
    this.caspase3 = new THREE.Mesh(geo, mat);
    this.caspase3.position.set(8, -1, 0);
    this.caspase3.visible = false;
    this.group.add(this.caspase3);
  }

  // ── Cell death visual effects ──
  _buildCellDeathEffects() {
    // Cell body (for shrinkage)
    const cellGeo = new THREE.SphereGeometry(5, 24, 24);
    const cellMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.dyingCell = new THREE.Mesh(cellGeo, cellMat);
    this.dyingCell.position.set(0, -5, 0);
    this.group.add(this.dyingCell);

    // Condensed chromatin (appears inside dying cell)
    const chromGeo = new THREE.SphereGeometry(1, 8, 8);
    const chromMat = new THREE.MeshStandardMaterial({
      color: COLORS.chromatin,
      emissive: 0x283593,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0,
    });
    this.condensedChromatin = new THREE.Mesh(chromGeo, chromMat);
    this.condensedChromatin.position.set(0, -5, 0);
    this.group.add(this.condensedChromatin);

    // Apoptotic bodies (blebs that break off)
    this.apoptoticBodies = [];
    const blebGeo = new THREE.SphereGeometry(0.4, 8, 8);
    const blebMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.apoptoticBody,
      transparent: true,
      opacity: 0,
      roughness: 0.5,
    });

    for (let i = 0; i < 8; i++) {
      const bleb = new THREE.Mesh(blebGeo, blebMat.clone());
      const angle = (i / 8) * Math.PI * 2;
      bleb.position.set(
        Math.cos(angle) * 4,
        -5 + Math.sin(angle) * 2,
        Math.sin(angle * 2) * 1.5
      );
      bleb.visible = false;
      this.group.add(bleb);
      this.apoptoticBodies.push({
        mesh: bleb,
        baseAngle: angle,
        driftVel: new THREE.Vector3(
          Math.cos(angle) * rand(0.5, 1.5),
          rand(-0.3, 0.3),
          Math.sin(angle) * rand(0.3, 1)
        ),
      });
    }
  }

  // ── Labels ──
  _buildLabels() {
    const labels = [
      { text: 'FAS LIGAND (Death Signal)', pos: [-5, 9, 0] },
      { text: 'FAS RECEPTOR', pos: [-5, 5.5, 0] },
      { text: 'FADD + DISC', pos: [-5, 3.5, 0], id: 'fadd' },
      { text: 'CASPASE-8', pos: [-5, 0.5, 0], id: 'casp8' },
      { text: 'BID → tBID', pos: [-2, 1.5, 0], id: 'bid' },
      { text: 'MITOCHONDRION', pos: [2, 1, 0] },
      { text: 'BAX/BAK PORES', pos: [4, -0.5, 0], id: 'bax' },
      { text: 'CYTOCHROME C', pos: [4, -2, 0], id: 'cytc' },
      { text: 'APOPTOSOME (Apaf-1 + Cyt c)', pos: [6, 1, 0], id: 'apopto' },
      { text: 'CASPASE-3 (Executioner)', pos: [8, 0.5, 0], id: 'casp3' },
      { text: 'CELL DEATH', pos: [0, -8, 0], id: 'death' },
    ];

    this.labelSprites = [];
    for (const l of labels) {
      const sprite = this._makeLabel(l.text);
      sprite.position.set(l.pos[0], l.pos[1], l.pos[2]);
      if (l.id) sprite.visible = false;
      this.group.add(sprite);
      this.labelSprites.push({ sprite, id: l.id });
    }
  }

  _makeLabel(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 36);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3.5, 0.5, 1);
    return sprite;
  }

  // ═══════════════════════════════════════════
  //  OPACITY
  // ═══════════════════════════════════════════

  setOpacity(o) {
    this.membrane.material.opacity = 0.2 * o;
    this.mitoOuter.material.opacity = 0.15 * o;
  }

  // ═══════════════════════════════════════════
  //  UPDATE — 15-SECOND APOPTOSIS CYCLE
  // ═══════════════════════════════════════════

  update(dt) {
    this.time += dt;
    const p = (this.time % this.cycleLength) / this.cycleLength;

    // ─── Step 1: Fas Ligand approaches (0-0.13) ──
    if (p < 0.13) {
      const t = p / 0.13;
      this.fasLigand.position.y = lerp(8, 4.5, t);
      this.fasLigand.visible = true;
      this.fasLigand.rotation.y += dt * 3;

      // Hide later-stage elements
      this.fadd.visible = false;
      this.proCaspase8.visible = false;
      this.activeCaspase8.visible = false;
      this.bid.visible = false;
      this.tBid.visible = false;
      this.apoptosomeGroup.visible = false;
      this.caspase3.visible = false;
      for (const pore of this.baxPores) pore.visible = false;
      this._hideDeathEffects();
      this._showLabelIds([]);
    }

    // ─── Step 2: FADD assembles → DISC (0.13-0.20) ──
    else if (p < 0.20) {
      const t = (p - 0.13) / 0.07;
      this.fasLigand.position.y = 4.5; // docked of

      // FADD slides in
      this.fadd.visible = true;
      this.fadd.position.y = lerp(1, 3, t);
      this.fadd.material.emissiveIntensity = 0.5 + t * 0.3;

      // Fas receptor glows when activated
      this.fasGroup.children.forEach(ch => {
        if (ch.material) ch.material.emissiveIntensity = 0.4 + t * 0.4;
      });

      this._showLabelIds(['fadd']);
    }

    // ─── Step 3: Procaspase-8 → Caspase-8 (0.20-0.30) ──
    else if (p < 0.30) {
      const t = (p - 0.20) / 0.10;

      // Procaspase-8 appears then cleaves
      if (t < 0.5) {
        this.proCaspase8.visible = true;
        this.proCaspase8.position.y = lerp(0.5, 2, t * 2);
        this.activeCaspase8.visible = false;
      } else {
        // Cleaved! Active caspase-8 (scissors)
        this.proCaspase8.visible = false;
        this.activeCaspase8.visible = true;
        this.activeCaspase8.position.y = lerp(2, 1.5, (t - 0.5) * 2);
        // Scissors animation — blades open/close
        const bladeAngle = Math.sin(this.time * 10) * 0.2 + 0.3;
        this.activeCaspase8.children[0].rotation.z = bladeAngle;
        this.activeCaspase8.children[1].rotation.z = -bladeAngle;
      }

      this._showLabelIds(['fadd', 'casp8']);
    }

    // ─── Step 4: Caspase-8 cleaves Bid → tBid (0.30-0.40) ──
    else if (p < 0.40) {
      const t = (p - 0.30) / 0.10;

      this.activeCaspase8.visible = true;
      // Scissors animation continues
      const bladeAngle = Math.sin(this.time * 10) * 0.2 + 0.3;
      this.activeCaspase8.children[0].rotation.z = bladeAngle;
      this.activeCaspase8.children[1].rotation.z = -bladeAngle;

      if (t < 0.4) {
        // Bid appears
        this.bid.visible = true;
        this.bid.position.set(lerp(-3, -4, t), 1, 0);
      } else {
        // Bid → tBid (cleaved, changes shape)
        this.bid.visible = false;
        this.tBid.visible = true;
        // tBid migrates toward mitochondria
        this.tBid.position.x = lerp(-4, 0, (t - 0.4) / 0.6);
        this.tBid.position.y = lerp(1, -1, (t - 0.4) / 0.6);
        this.tBid.rotation.y += dt * 5;
      }

      this._showLabelIds(['casp8', 'bid']);
    }

    // ─── Step 5: tBid → Bax/Bak pores (0.40-0.53) ──
    else if (p < 0.53) {
      const t = (p - 0.40) / 0.13;

      this.tBid.visible = true;
      this.tBid.position.set(lerp(0, 2, Math.min(t * 2, 1)), -1, 0);

      // Bax/Bak pores appear on mitochondria
      for (let i = 0; i < this.baxPores.length; i++) {
        const pore = this.baxPores[i];
        pore.visible = t > 0.3 + i * 0.1;
        if (pore.visible) {
          // Pore pulses
          const pulse = 1 + Math.sin(this.time * 6 + i) * 0.15;
          pore.scale.setScalar(pulse);
        }
      }

      this._showLabelIds(['bid', 'bax']);
    }

    // ─── Step 6: Cytochrome c leaks out (0.53-0.67) ──
    else if (p < 0.67) {
      const t = (p - 0.53) / 0.14;

      // All pores open
      for (const pore of this.baxPores) {
        pore.visible = true;
        pore.scale.setScalar(1 + Math.sin(this.time * 4) * 0.1);
      }

      // Cytochrome c particles stream out
      const dummy = this._cytDummy;
      for (let i = 0; i < this.cytCCount; i++) {
        const c = this.cytCData[i];
        if (t > c.delay / 1.5) {
          if (!c.active) {
            c.active = true;
            c.pos.set(2, -1, 0);
          }
          c.pos.addScaledVector(c.vel, dt);
          c.pos.x += Math.sin(this.time * 3 + i) * dt * 0.3;
          dummy.position.copy(c.pos);
        } else {
          dummy.position.set(999, 999, 999);
        }
        dummy.updateMatrix();
        this.cytCInstance.setMatrixAt(i, dummy.matrix);
      }
      this.cytCInstance.instanceMatrix.needsUpdate = true;

      this._showLabelIds(['bax', 'cytc']);
    }

    // ─── Step 7: Apoptosome forms (0.67-0.80) ──
    else if (p < 0.80) {
      const t = (p - 0.67) / 0.13;

      // Apoptosome assembles (scales in)
      this.apoptosomeGroup.visible = true;
      this.apoptosomeGroup.scale.setScalar(lerp(0.1, 1, Math.min(t * 1.5, 1)));
      this.apoptosomeGroup.rotation.y += dt * 1.5;

      // Caspase-3 activates
      if (t > 0.5) {
        this.caspase3.visible = true;
        this.caspase3.position.x = lerp(7, 8, (t - 0.5) * 2);
        this.caspase3.material.emissiveIntensity = 0.8 + Math.sin(this.time * 8) * 0.2;
        this.caspase3.rotation.y += dt * 5;
        this._showLabelIds(['apopto', 'casp3']);
      } else {
        this._showLabelIds(['apopto']);
      }
    }

    // ─── Step 8: Cell Death Effects (0.80-1.00) ──
    else {
      const t = (p - 0.80) / 0.20;

      this.caspase3.visible = true;
      this.caspase3.material.emissiveIntensity = 1.0;
      this.apoptosomeGroup.visible = true;
      this.apoptosomeGroup.rotation.y += dt;

      // ── Dying cell appears and shrinks ──
      this.dyingCell.visible = true;
      this.dyingCell.material.opacity = lerp(0.12, 0.05, t);
      const shrink = lerp(1, 0.5, t);
      this.dyingCell.scale.setScalar(shrink);

      // ── Chromatin condenses ──
      this.condensedChromatin.visible = true;
      this.condensedChromatin.material.opacity = lerp(0, 0.8, Math.min(t * 3, 1));
      this.condensedChromatin.scale.setScalar(lerp(1, 0.4, t));

      // ── Membrane blebbing — apoptotic bodies bud off ──
      for (let i = 0; i < this.apoptoticBodies.length; i++) {
        const ab = this.apoptoticBodies[i];
        const blebStart = 0.2 + (i / this.apoptoticBodies.length) * 0.3;
        if (t > blebStart) {
          ab.mesh.visible = true;
          const bt = (t - blebStart) / (1 - blebStart);
          ab.mesh.material.opacity = lerp(0, 0.5, Math.min(bt * 3, 1));

          // Drift outward
          const baseX = Math.cos(ab.baseAngle) * lerp(4, 6, bt);
          const baseY = -5 + Math.sin(ab.baseAngle) * lerp(2, 4, bt);
          ab.mesh.position.set(
            baseX + ab.driftVel.x * bt * 2,
            baseY + ab.driftVel.y * bt,
            ab.driftVel.z * bt * 2
          );
          ab.mesh.scale.setScalar(lerp(0.3, 0.6, bt));
          ab.mesh.rotation.x += dt;
        }
      }

      this._showLabelIds(['casp3', 'death']);
    }

    // Continuous ligand spin
    this.fasLigand.rotation.y += dt * 2;
  }

  // ── Helpers ──
  _hideDeathEffects() {
    this.dyingCell.visible = false;
    this.dyingCell.scale.setScalar(1);
    this.condensedChromatin.visible = false;
    for (const ab of this.apoptoticBodies) {
      ab.mesh.visible = false;
    }
    // Reset cytochrome c
    for (let i = 0; i < this.cytCCount; i++) {
      this.cytCData[i].active = false;
      this.cytCData[i].pos.set(2, -1, 0);
    }
  }

  _showLabelIds(ids) {
    for (const l of this.labelSprites) {
      if (l.id) {
        l.sprite.visible = ids.includes(l.id);
      }
    }
  }
}
