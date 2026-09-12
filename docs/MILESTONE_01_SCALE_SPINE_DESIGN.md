# Milestone 1: The Scale Spine — Design Specification

**Document Version:** 1.1.0-REVISED  
**Status:** Architectural Design — Under Review  
**Milestone Target:** Phase 1 Architectural Prototype  
**Scope:** Design Specification Only (No runtime implementation until approved)  

---

## Executive Summary

**Milestone 1 — The Scale Spine** tests the defining architectural problem of *The Seamless Cell*: **continuous biological scale-space**.

Rather than attempting to model complete metabolic or molecular mechanisms (such as ATP synthesis or transcription elongation), this milestone establishes an unbroken, mathematically stable, and biologically organized traversal from a whole mammalian cell down to atomic bonds.

The traversal spans approximately $10^6\times$ (one million-fold) in physical scale:
$$\text{Mammalian Cell } (\sim 20\text{ }\mu\text{m} = 2 \times 10^{-5}\text{ m}) \longrightarrow \text{Chemical Bond } (\sim 0.1\text{ nm} = 10^{-10}\text{ m})$$

This document specifies the intended user experience, the absolute separation of `WorldState` and `ViewState`, the temporal triad (`BiologicalTime`, `PlaybackTime`, `CameraTime`), the provisional chromatin scale hierarchy, coordinate-system candidate evaluations, the persistent biological identity model, representation/LOD dynamics, camera control, scientific metadata interfaces, performance budgets, prototype acceptance tests, and unresolved scientific/visual inputs.

---

## 1. Intended User Experience & Traversal Path

The user begins in an expansive cellular environment observing an intact mammalian cell suspended in extracellular space.

```
                               THE SCALE SPINE TRAVERSAL
                               ─────────────────────────
[ 1. Mammalian Cell ] (~20 µm) [ASSUMPTION]
         │  Camera moves toward cell; ViewState analytical clipping peels plasma membrane
         ▼
[ 2. Cell Interior / Cytosol ] (~10 µm) [ASSUMPTION]
         │  Organelle crowding visible; camera approaches the nuclear envelope
         ▼
[ 3. Nucleus ] (~6 µm) [ASSUMPTION]
         │  ViewState sectioning opens nuclear envelope (Nuclear Pore is a future branch)
         ▼
[ 4. Chromosome Territory ] (~1 µm) [ASSUMPTION]
         │  Interphase chromosome boundary reveals internal compartment structure
         ▼
[ 5. Chromatin Compartment / Domain ] (~200 nm) [ASSUMPTION]
         │  Density resolves into dense clusters of loop domains
         ▼
[ 6. Chromatin Loop / Contact Domain ] (~100 nm) [ASSUMPTION]
         │  An individual loop / contact domain resolves, anchored at boundary elements
         ▼
[ 7. Irregular Nucleosome Chain ] (~11 nm chain) [ASSUMPTION]
         │  Irregular "beads-on-a-string" polymer (NO regular 30 nm fiber assumed)
         ▼
[ 8. Nucleosome Core Particle ] (~11 nm) [ASSUMPTION]
         │  Individual histone octamer cylinder resolves with 1.67 turns of wrapped DNA
         ▼
[ 9. DNA Double Helix ] (~2 nm) [ASSUMPTION]
         │  Major and minor grooves of the B-form duplex emerge
         ▼
[ 10. Base Pair ] (~0.34 nm) [ASSUMPTION]
         │  Complementary nitrogenous base rings with hydrogen-bond rungs
         ▼
[ 11. Atomic / Chemical Representation ] (~0.1 nm) [ASSUMPTION]
         │  Space-filling CPK atomic spheres with covalent bond lengths
         ▼
[ Scale Minimum Reached: ~0.1 nm ]
```

### Core Experiential Tenets:
1. **Unbroken Spatial Continuity:** The user never experiences an abrupt cut, a scene reload, or an isolated diorama swap at $(0,0,0)$. Every smaller structure is visibly situated inside its parent container.
2. **Natural Scale Traversal:** As the observer zooms, zoom velocity adapts logarithmically to the current scale, allowing natural travel across microns and nanometers without disorienting acceleration.
3. **Persistent Biological Identity:** Clicking on a structure at any point in the traversal displays its persistent biological entity identity, position within the cellular hierarchy, and quantitative metadata in the Scientific Inspector.
4. **Non-Destructive Observation:** Peeling back or clipping through the plasma membrane or nuclear envelope is purely an optical sectioning operation in the observer's view. In the simulation, membranes remain intact physical barriers.

---

## 2. Separation of WorldState and ViewState

To guarantee that visualization and camera operations never distort biological reality, V2 enforces an absolute architectural separation between **`WorldState`** and **`ViewState`**:

```mermaid
graph LR
    subgraph WorldState["WorldState (Biological Reality)"]
        WS_Entities[Entity Graph & Parent-Child Tree]
        WS_Molecules[Spatial Coordinates & Counts]
        WS_Topology[Membrane Boundaries & Compartments]
        WS_Kinetics[Reaction States & Bonds]
    end

    subgraph ViewState["ViewState (Observer & Presentation)"]
        VS_Camera[Camera Position, Target & FOV]
        VS_Clip[Analytical Clipping & Peeling Planes]
        VS_LOD[Active Representation Levels]
        VS_Inspect[Inspector Selection & Labels]
        VS_Clocks[CameraTime & Transport Settings]
    end

    WorldState -->|Provides Biological Data| RenderPipeline[GPU Scene Graph & Shaders]
    ViewState -->|Configures Visual Projection| RenderPipeline
```

### 1. `WorldState` (Biological Truth)
* **Definition:** The simulated physical state of the cell. Contains the entity registry, 3D metric coordinates, topological compartment containment, chemical concentrations, and physical membrane integrity.
* **Immutability by Observer:** Moving the camera, zooming, orbiting, enabling cross-section planes, or selecting objects *never* alters `WorldState`.
* **Compartment Logic:** A molecule inside the nucleus belongs to the `nucleoplasm` compartment in `WorldState`, regardless of whether the camera is viewing it from inside or outside the cell.

### 2. `ViewState` (Observer Operations)
* **Definition:** The parameters governing how `WorldState` is projected to the human observer at any given instant.
* **Scope:**
  * Camera spatial transform ($\vec{P}_{\text{cam}}, \vec{T}_{\text{focus}}, \text{FOV}$).
  * Analytical clipping planes (`clippingPlanes: THREE.Plane[]`) and dynamic angle cutaways.
  * Representation level selection (LOD tier per entity).
  * Transparency overrides and highlights.
  * Active UI overlays and inspector targets.
* **The Membrane Sectioning Principle:**
  * When the camera penetrates the plasma membrane or nuclear envelope, the visual opening is generated via `ViewState.clippingPlanes` or a custom depth-peeling shader.
  * In `WorldState`, the membrane remains an unbroken, continuous lipid bilayer maintaining its permeability barrier and electrochemical gradient. 
  * Slicing an envelope for visual inspection **must never** be modeled as biological membrane lysis or disruption.

---

## 3. The Temporal Triad: BiologicalTime, PlaybackTime, and CameraTime

To eliminate ambiguity between simulation speed, playback, and cinematic observer navigation, the engine formalizes three distinct clocks:

```
Clocks Overview:
─────────────────────────────────────────────────────────────────────────────
[ BiologicalTime (t_bio) ]   SI seconds. Represents true biochemical time.
                             (e.g., 10 ms enzymatic cycle, 20 min replication).
                             Advances ONLY when simulation is unpaused.

[ PlaybackTime (t_play) ]     Wall-clock seconds of active playback.
                             d(t_bio) / d(t_play) = kappa (biological scaling factor).

[ CameraTime (t_cam) ]       Wall-clock seconds of observer movement.
                             Drives camera interpolation, cinematic pans, and orbit.
                             ADVANCES INDEPENDENTLY of t_bio.
─────────────────────────────────────────────────────────────────────────────
```

### Governing Rule: Decoupling Observer Motion from Biological State
* **Cinematic movement of the observer ($t_{\text{cam}}$) must not advance biological state ($t_{\text{bio}}$) unless explicitly requested.**
* The user can pause biological time ($d t_{\text{bio}} / d t_{\text{play}} = 0$) and freely orbit, pan, or execute a continuous scale traversal from cell to DNA. The biological world remains frozen at that exact physical instant.
* Conversely, biological processes can play at variable speed ($\kappa$) while the camera remains completely stationary.

---

## 4. Provisional Scale Hierarchy & Metric Framework

> [!NOTE]
> **Provisional Chromatin Organization & Epistemic Status:**
> * Modern chromosome conformation capture (Hi-C) and cryo-electron tomography (cryo-ET) have overturned the classical textbook model of a uniform 30-nm solenoid/zigzag chromatin fiber in vivo.
> * Milestone 1 provisionally models interphase chromatin as an **irregular nucleosome chain** ("beads-on-a-string" polymer) clustered into chromatin loop domains and compartments.
> * **All physical dimensions below are explicitly marked as `[ASSUMPTION]`** until validated ranges, species, and cell-type context are supplied by the Scientific Lead.
> * The primary Scale Spine does **not** force traversal through a nuclear pore complex; the nuclear pore is designated as a specialized future branch and inspection target.

| Tier | Provisional Biological Level | Nominal Dimension `[ASSUMPTION]` | Scale Order | Display Units | Provisional Representation Mode |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Mammalian Cell** | $\sim 20\text{ }\mu\text{m}$ | $10^{-5}\text{ m}$ | $\mu\text{m}$ | Smooth ellipsoidal membrane envelope with surface receptors |
| **2** | **Cell Interior / Cytosol** | $\sim 10\text{ }\mu\text{m}$ | $10^{-5}\text{ m}$ | $\mu\text{m}$ | Crowded cytoplasm with major organelle silhouettes |
| **3** | **Nucleus** | $\sim 6\text{ }\mu\text{m}$ | $10^{-6}\text{ m}$ | $\mu\text{m}$ | Double membrane envelope; nuclear pores visible on surface |
| **4** | **Chromosome Territory** | $\sim 1\text{ }\mu\text{m}$ | $10^{-6}\text{ m}$ | $\mu\text{m}$ | Volumetric territory envelope with sub-compartment density |
| **5** | **Chromatin Compartment / Domain** | $\sim 200\text{ nm}$ | $10^{-7}\text{ m}$ | $\text{nm}$ | Dense cluster of looped nucleosome chains |
| **6** | **Chromatin Loop / Contact Domain** | $\sim 100\text{ nm}$ | $10^{-7}\text{ m}$ | $\text{nm}$ | Anchored looping polymer path |
| **7** | **Irregular Nucleosome Chain** | $\sim 11\text{ nm}$ chain | $10^{-8}\text{ m}$ | $\text{nm}$ | Irregular flexible chain of nucleosomes (no 30 nm fiber) |
| **8** | **Nucleosome Core Particle** | $\sim 11\text{ nm}$ | $10^{-8}\text{ m}$ | $\text{nm}$ | Cylindrical histone octamer envelope wrapped by 1.67 turns of DNA |
| **9** | **DNA Double Helix** | $\sim 2\text{ nm}$ | $10^{-9}\text{ m}$ | $\text{nm}$ | B-form double helix with major and minor grooves |
| **10** | **Base Pair** | $\sim 0.34\text{ nm}$ | $10^{-10}\text{ m}$ | $\text{\AA}$ / $\text{nm}$ | Purine-pyrimidine complementary base-pair rungs |
| **11** | **Atomic / Chemical Representation**| $\sim 0.1\text{ nm}$ | $10^{-10}\text{ m}$ | $\text{\AA}$ / $\text{pm}$ | Space-filling CPK spheres with covalent bond cylinders |

---

## 5. Coordinate-System Candidate Implementation (Scale Spine Context)

The traversal spans a dynamic range of $\approx 2 \times 10^5\times$ ($20\text{ }\mu\text{m} \to 0.1\text{ nm}$), extending to $10^6\times$ when multicellular context is included.

```mermaid
graph TD
    subgraph CandidateStrategy["Candidate Coordinate Architecture: Strategy D"]
        CellDomain["Cell Domain: Origin at Cell Center (0, 0, 0) µm"]
        NucDomain["Nucleus Domain: Metric Offset from Cell Center (µm)"]
        ChromDomain["Chromatin Domain: Metric Offset from Nucleus (nm)"]
        ActiveFocus["Active Camera Focus Target: Nucleosome 104"]
        
        CellDomain --> NucDomain --> ChromDomain --> ActiveFocus
        
        ActiveFocus --> DynamicRebase["Camera-Relative Rebase Hook"]
        DynamicRebase --> LocalGPU["GPU Render: Nucleosome at (0,0,0) in Local nm Units"]
        DynamicRebase --> DistantShells["Distant Compartments Rendered with Inverted Scale Offset"]
    end
```

### Strategy Evaluation in Milestone 1:
1. **Primary Prototype (Strategy D):**
   * Compartments form a hierarchical tree in metric units.
   * As the camera focuses on a chromatin domain or nucleosome, that active sub-tree is rebased dynamically into camera-relative coordinates.
   * Molecular geometry (histones, DNA double helix) is rendered in native nanometers directly around the local origin, eliminating single-precision floating point jitter.
2. **Fallback Verification (Strategy A):**
   * If nested rebasing introduces edge-case transform complexity, Strategy A (pure double-precision CPU subtraction + logarithmic depth buffer) will be evaluated side-by-side.

---

## 6. Biological Entity Identity Model

A nucleosome remains logically the same biological entity across all zoom levels.

```typescript
/**
 * Biological Entity Identity Model for Milestone 1
 */

export interface BiologicalEntity {
  readonly entityId: string;                 // Globally unique canonical ID
  readonly commonName: string;               // e.g. "Nucleosome Core Particle 104"
  readonly compartment: SpatialCompartment;  // e.g. "nucleoplasm"
  readonly parentEntityId: string | null;    // e.g. "chromatin_loop_07"
  readonly childEntityIds: string[];         // Constituent sub-entities
  
  // Metric Ground Truth (WorldState)
  readonly nominalDimensionsNm: {
    length: number;
    diameter: number;
    epistemicStatus: 'ASSUMPTION';           // Flagged until Scientific Lead supplies values
  };
  
  // Representation Levels (ViewState Mapping)
  readonly representations: Map<AbstractionTier, RepresentationLevel>;
  activeRepresentationTier: AbstractionTier;
  
  // Epistemic Metadata
  readonly epistemicStatus: EpistemicStatus; // 'APPROVED' | 'EXTERNAL_VERIFIED' | 'ASSUMPTION'
  readonly specificationRef?: string;
}

export interface RepresentationLevel {
  readonly tier: AbstractionTier;
  readonly visualObject: THREE.Object3D;
  readonly minScreenPixels: number;          // Activation threshold
  readonly maxScreenPixels: number;
  
  update(dt: number, worldState: WorldState, viewState: ViewState): void;
  setVisible(visible: boolean, opacity: number): void;
  dispose(): void;
}
```

---

## 7. Representation / LOD Model & Semantic Transitions

To eliminate sudden popping, representation levels transition based on screenspace projected area with a $10\%$ hysteresis buffer:

| Traversal Step | Lower LOD Representation | Upper LOD Representation | Viewport Trigger |
| :--- | :--- | :--- | :--- |
| **Cell $\to$ Nucleus** | Opaque/textured plasma membrane | ViewState sectioned membrane revealing nucleus | Cell covers $> 75\%$ viewport |
| **Nucleus $\to$ Territory** | Intact nuclear envelope | ViewState sectioned envelope revealing chromosome territories | Nucleus covers $> 60\%$ viewport |
| **Territory $\to$ Domain** | Territory boundary cloud | Clustered chromatin domain fiber bundles | Territory covers $> 40\%$ viewport |
| **Domain $\to$ Loop** | Clustered loop density | Individual anchored loop path | Domain covers $> 35\%$ viewport |
| **Loop $\to$ Nucleosome Chain** | Continuous polymer path | Irregular nucleosome chain ("beads-on-a-string") | Fiber width $> 15\text{ pixels}$ |
| **Chain $\to$ Nucleosome** | Simplified bead spheres | Histone octamer cylinder with wrapped DNA superhelix | Bead diameter $> 25\text{ pixels}$ |
| **Nucleosome $\to$ Helix** | Stylized DNA ribbon | B-form double helix with groove contours | DNA width $> 15\text{ pixels}$ |
| **Helix $\to$ Base Pair** | Continuous helical rungs | Nitrogenous base rings & sugar-phosphate backbone | Rung width $> 10\text{ pixels}$ |
| **Base Pair $\to$ Atomic** | Flat geometric rings | Space-filling CPK atomic spheres with covalent bonds | Atom radius $> 8\text{ pixels}$ |

---

## 8. Camera Transition Model & Navigation Dynamics

### 1. Logarithmic Zoom Scaling
Camera velocity $\vec{v}_{\text{zoom}}$ is proportional to current distance from focus target $d = \|\vec{P}_{\text{cam}} - \vec{T}_{\text{focus}}\|$:
$$\vec{v}_{\text{zoom}} = \pm \alpha \cdot d \cdot \Delta t_{\text{cam}}$$
This ensures that zooming at the cell scale ($\sim 20\text{ }\mu\text{m}$) and zooming at the base-pair scale ($\sim 0.34\text{ nm}$) feel identical in responsiveness.

### 2. ViewState Membrane Sectioning
* As the camera approaches within $1.2\times$ of the cell or nuclear radius, the front hemisphere is dynamically clipped by a camera-facing analytical plane (`THREE.Plane`).
* This permits smooth entry into internal compartments without membrane collisions or abrupt visual disappearances.
* In `WorldState`, membrane structures remain unbroken.

---

## 9. Scientific Metadata Interface (Dual-View Architecture)

### Learner View (Default)
* Minimal, quiet, and cinematic.
* Subtle orientation widget in bottom-left.
* Minimal transport bar in bottom-center with biological timestamp and playback speed indicator.
* No permanent numbers or debug panels cluttering the visual field.

### Scientific / Dev Inspector Overlay
* Activated via `Tab` key or by clicking on any entity.
* Displays:
  * Persistent Entity ID and canonical name.
  * Hierarchical parent/child lineage.
  * Epistemic status badge (`[APPROVED]`, `[EXTERNAL_VERIFIED]`, or `[ASSUMPTION]`).
  * Real dimensions vs. display dimensions and exaggeration factors.
  * Active biological time ($t_{\text{bio}}$), playback time ($t_{\text{play}}$), and camera time ($t_{\text{cam}}$).
  * Active assumptions and simplifications.
  * GPU telemetry (FPS, draw calls, triangle count, memory).

---

## 10. Asset-Pipeline Requirements

1. **Procedural Geometry Engines (TypeScript):**
   * **B-Form DNA Duplex Generator:** Generates mathematical double-helical paths, major/minor groove contours, and base-pair rungs.
   * **Irregular Chromatin Chain Generator:** Generates polymer paths for nucleosomes without imposing artificial 30-nm regular helical symmetry.
2. **Structural Mesh Assets (Blender $\to$ glTF):**
   * **Histone Octamer Core Envelope:** Stylized coarse-grained molecular surface representation.
   * **Nuclear Envelope Surface Shell:** Double-membrane section with embedded nuclear pore complex silhouettes.
3. **Strict Structural Data Policy:**
   * **Zero unverified PDB downloads.** No atomic PDB or mmCIF coordinate files will be downloaded or integrated without explicit accession approval from the Scientific Lead.

---

## 11. Performance Budget (Target: MacBook Pro)

| Metric | Budget Limit | Rationale |
| :--- | :--- | :--- |
| **Target Framerate** | **60 FPS** ($\le 16.6\text{ ms}$) | Fluid spatial interaction is essential for scale comprehension. |
| **Peak Triangle Count** | $\le 300,000\text{ triangles}$ | Guarantees instant rasterization on Apple Silicon. |
| **Peak Draw Calls** | $\le 80\text{ draw calls/frame}$ | Enforced via instancing and batching. |
| **Peak GPU Memory** | $\le 120\text{ MB}$ | Preserves head-room for subsequent chapters. |
| **Garbage Collection (GC)** | **0 allocations in tick** | Pre-allocated scratch vectors and matrices. Zero `new` in `update()`. |

---

## 12. Prototype Acceptance Tests

Milestone 1 will be considered complete when the following tests pass:

1. **Continuous Scale Traverse:** Unbroken zoom from whole cell ($20\text{ }\mu\text{m}$) to chemical bond ($0.1\text{ nm}$) and back without camera clipping or scene resets.
2. **Zero Floating-Point Jitter:** At base-pair and atomic scales, vertices exhibit zero floating-point swimming or jitter during camera rotation.
3. **Biological Identity Preservation:** Clicking a nucleosome at chromatin scale and at atomic scale resolves the exact same canonical `entityId` and provenance record.
4. **Hysteresis Stability:** Holding the camera near representation boundaries produces zero visual flickering.
5. **ViewState vs WorldState Integrity:** Sectioning through the plasma membrane or nuclear envelope operates purely as a `ViewState` clipping plane without altering biological compartment state.
6. **Clock Decoupling:** Pausing biological time allows full 3D camera navigation and scale traversal while the biological scene remains frozen.
7. **Performance Standard:** Sustained $\ge 60\text{ fps}$ during continuous zoom on the target MacBook Pro.

---

## 13. Unresolved Scientific Inputs

*(To be supplied incrementally by the Scientific Lead)*

1. **Cell Type Baseline:** Approved model cell type (e.g., human diploid fibroblast).
2. **Nuclear Dimensions:** Verified nuclear diameter, envelope thickness, and nuclear lamina organization.
3. **Chromatin Architecture:** Approved compaction parameters for interphase chromatin domains; verified nucleosome repeat length (NRL).
4. **Histone Structure:** Approved PDB/mmCIF reference structure for the human nucleosome core particle.
5. **DNA Helical Parameters:** Validated rise per base pair ($0.34\text{ nm}$), pitch ($10.5\text{ bp/turn}$), and diameter ($2.0\text{ nm}$).

---

## 14. Unresolved Visual Inputs

*(To be aligned with the Human Project Lead)*

1. **Chromatin Domain Aesthetics:** Color palette for chromosome territories (contrasting identification hues vs. epigenetic functional coloring).
2. **Nucleoplasm Optical Density:** Transparent clean aesthetic vs. subtle macromolecular depth haze.
3. **Membrane Sectioning Style:** Planar geometric clipping cutaway vs. smooth angle-of-incidence Fresnel transparency peeling.

---

*End of Milestone 1 Design Specification (Revision 1.1.0).*  
*Next step: Commit and push architecture documents to remote GitHub repository.*
