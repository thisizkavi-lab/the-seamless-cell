# 🔬 The Seamless Cell

An interactive, multi-scale 3D visualization of cellular biology built with **Three.js**. Explore a living virtual cell from tissue level down to individual molecules — five learning tracks covering the core processes of life.

> *"This is not a static textbook; it is a living virtual environment in constant motion."*

![The Seamless Cell](https://img.shields.io/badge/Three.js-WebGL-orange?style=flat-square) ![Status](https://img.shields.io/badge/Status-Active_Development-green?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 🎮 Live Demo

- **Local:** `npm run dev` → `http://localhost:5173`
- **Controls:** Scroll to zoom • Drag to orbit • Right-drag to pan

---

## 🧪 Five Learning Tracks

Each track dives into a core biological process at multiple scales — from tissue to molecular:

### ⚡ Energy — ATP Production
| Scale | View | What You Learn |
|-------|------|----------------|
| Cell | Whole animal cell | Mitochondria, ER, nucleus, vesicles, microtubules |
| Organelle | Mitochondrion interior | Cristae folds, electron transport chain, proton gradient |
| Molecular | ATP Synthase | F₁/F₀ rotary motor, γ-stalk spinning at ~100 rev/sec |

### 🧬 Central Dogma — Gene Expression
| Scale | View | What You Learn |
|-------|------|----------------|
| Cell | Whole animal cell | Nucleus as genome storage, mRNA export |
| Organelle | Nucleus interior | Chromatin fibers, RNA Polymerase II, nuclear pores, mRNA trafficking |
| Molecular | Transcription & Translation | DNA helix unwinding, spliceosome action, ribosome with tRNA cycling (A→P→E), polypeptide folding |

### 📦 Transport — Secretory Pathway
| Scale | View | What You Learn |
|-------|------|----------------|
| Cell | Whole animal cell | ER-Golgi-PM vesicle flow |
| Organelle | Secretory pathway | Rough ER with ribosomes, COPII/COPI vesicles, 4-cisterna Golgi stack (cis→trans gradient), microtubule tracks |
| Molecular | Vesicle transport | Coat protein assembly/disassembly, exocytosis burst |

### 📡 Signaling — Cell Communication
| Scale | View | What You Learn |
|-------|------|----------------|
| Tissue | Cell community | 5 epithelial cells, gap junctions, paracrine signaling, ECM |
| Molecular | GPCR cascade | 12-sec animated loop: ligand → GPCR → G-protein split → adenylyl cyclase → cAMP burst (10,000× amplification) → PKA → TF nuclear import → gene expression |

### 🔄 Division — Mitosis
| Scale | View | What You Learn |
|-------|------|----------------|
| Tissue | Cell community | Pre-division cell coordination |
| Organelle | Mitosis cycle | 30-sec loop through 7 stages: Interphase → Prophase → Prometaphase → Metaphase → Anaphase → Telophase → Cytokinesis |

---

## 🏗 Architecture

```
app/
├── index.html             # Entry point
├── src/
│   ├── main.js            # Engine bootstrap, camera, post-processing
│   ├── core/
│   │   └── LODManager.js  # Track-aware zoom/LOD system
│   ├── ui/
│   │   └── HUD.js         # Track selector, zoom slider, info panels
│   ├── utils/
│   │   └── constants.js   # Colors, TRACKS config, helpers
│   └── worlds/
│       ├── CellWorld.js         # Whole cell (shared hub)
│       ├── OrganelleWorld.js    # Mitochondrion interior (⚡)
│       ├── MolecularWorld.js    # ATP synthase (⚡)
│       ├── NucleusWorld.js      # Nucleus interior (🧬)
│       ├── CentralDogmaWorld.js # Transcription + Translation (🧬)
│       ├── TransportWorld.js    # ER → Golgi → PM (📦)
│       ├── TissueWorld.js       # Multi-cell view (📡🔄)
│       ├── SignalingWorld.js    # GPCR cascade (📡)
│       └── DivisionWorld.js    # Mitosis cycle (🔄)
└── package.json
```

### Key Design Decisions

- **Vanilla Three.js** — no React Three Fiber. Direct WebGL control for performance.
- **InstancedMesh everywhere** — Dense particle scenes (cAMP burst, ribosomes, mRNA) use instancing for 60fps.
- **Track-aware LOD** — `LODManager._getRange()` dynamically merges zoom ranges based on the active track, allowing one world to span multiple zoom levels.
- **Rule-based simulation** — Not simulating atomic physics. Animations follow known biological behaviors (e.g., ATP synthase rotation rate, ribosome translation speed) compressed for educational clarity.

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/thisizkavi-lab/the-seamless-cell.git
cd the-seamless-cell/app

# Install
npm install

# Run
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📖 What's What — Visual Guide

Every 3D object in the visualization is modeled after real cellular components. Here's a quick reference:

### Color Legend

| Color | Component |
|-------|-----------|
| 🟤 Gold/Brown (translucent) | Cell & nuclear membranes |
| 🔵 Dark blue | Nucleus |
| 🔴 Red/Orange capsules | Mitochondria |
| 🟢 Teal/Green tubes | Endoplasmic Reticulum |
| 🟢 Green spheres | Vesicles |
| ⚪ Light blue lines | Microtubules, spindle fibers |
| 🟣 Purple | Chromosomes, Golgi, polypeptide |
| 🟡 Yellow/Gold | ATP synthase parts, active enzymes |
| 🟠 Orange | mRNA, protons, G-protein |
| 💗 Pink/Magenta | Contractile ring (actin+myosin) |
| 💠 Cyan | cAMP, COPII vesicles, adenylyl cyclase |

### The Processes

**ATP Synthesis (⚡):** Glucose → ETC pumps H⁺ → protons flow through ATP synthase F₀ → γ-stalk spins → F₁ head forges ATP. ~40 kg ATP/day.

**Central Dogma (🧬):** DNA → RNA Pol II transcribes pre-mRNA → spliceosome removes introns → mRNA exits nucleus → ribosome reads codons → tRNAs deliver amino acids → polypeptide folds into protein.

**Secretory Pathway (📦):** Ribosome on rough ER → protein enters ER → COPII vesicle → cis-Golgi → medial → trans-Golgi → secretory vesicle → exocytosis at plasma membrane.

**GPCR Signaling (📡):** 1 ligand → 1 GPCR → 1 G-protein (GDP→GTP) → 1 adenylyl cyclase → ~10,000 cAMP → PKA → transcription factor → nucleus → gene expression. **Massive amplification.**

**Mitosis (🔄):** Interphase → Prophase (condense) → Prometaphase (envelope breaks) → Metaphase (align) → Anaphase (pull apart!) → Telophase (reform nuclei) → Cytokinesis (pinch in two).

---

## 📚 References

- *Essential Cell Biology*, 6th Edition — Alberts, Heald, Hopkin et al.
- *Molecular Biology of the Cell*, 7th Edition — Alberts et al.

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
