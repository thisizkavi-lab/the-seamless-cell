# Tissues multicellular

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 34 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-tissue"></a>

### E.tissue — Tissue

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/collection |
| Exists in / context | Named organism, anatomical site and state |
| Biology / relations | Cooperative cells with matrix/junctions/signaling as appropriate. |
| State variables | populations; matrix; junction graph; turnover; mechanics |
| Evidence | [C20 §1](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#1-tissue), [C20 §3](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#3-cells-are-not-passive-bricks), [C20 §5](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#5-mechanical-continuity-in-tissue), [C20 §6](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#6-tissue-maintenance-is-dynamic) |
| Uncertainty / display limits | Not a rigid collection of passive bricks. |

<a id="e-organ"></a>

### E.organ — Organ

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Named organism/anatomical context |
| Biology / relations | Multiple tissues integrated for source physiological functions. |
| State variables | tissue membership; organization; state |
| Evidence | [C20 §2](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#2-organ) |
| Uncertainty / display limits | No generic dimensions or complete organ physiology implied. |

<a id="e-extracellular_matrix"></a>

### E.extracellular_matrix — Extracellular matrix

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/material; ECM |
| Exists in / context | Named connective/epithelial/plant tissue context |
| Biology / relations | Secreted material affecting mechanics, signaling and migration. |
| State variables | composition; fibers; hydration; degradation; bound signals |
| Evidence | [C20 §4](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#4-extracellular-matrix), [C20 §51](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#51-matrix-proteases), [C20 §53](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#53-cells-organize-the-matrix-they-secrete), [C20 §84](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#84-proteoglycans-bind-signals), [C20 §85](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#85-matrix-can-guide-cell-migration) |
| Uncertainty / display limits | Not inert filler; matrix properties are biological state. |

<a id="e-collagen"></a>

### E.collagen — Collagen

| Field | Record |
|---|---|
| Kind / scoped aliases | family; collagen polypeptides/triple-helical molecules qualified |
| Exists in / context | Source extracellular connective tissue |
| Biology / relations | Fibrous protein family; molecular triple helices build higher assemblies in appropriate subtypes. |
| State variables | subtype; chain membership; processing; assembly |
| Evidence | [C20 §34](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#34-collagen), [C20 §38](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#38-collagen-triple-helix), [C20 §46](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#46-procollagen), [C20 §48](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#48-collagen-assembly-is-spatially-gated), [C20 §93](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#93-basal-lamina-composition) |
| Uncertainty / display limits | Not one generic cable; type IV basal-lamina context differs from fibrillar type I. |

<a id="e-collagen_fibril"></a>

### E.collagen_fibril — Collagen fibril

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source fibrillar connective-tissue collagen context |
| Biology / relations | Extracellular assembly of processed collagen molecules. |
| State variables | molecule membership; alignment; growth; tension |
| Evidence | [C20 §41](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#41-collagen-fibril-diameter), [C20 §43](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#43-collagen-fibrils-can-be-many-micrometers-long), [C20 §48](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#48-collagen-assembly-is-spatially-gated), [C20 §53](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#53-cells-organize-the-matrix-they-secrete) |
| Uncertainty / display limits | Molecule, fibril and fiber quantities must not be conflated. |

<a id="e-collagen_fiber"></a>

### E.collagen_fiber — Collagen fiber

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source connective-tissue mechanics |
| Biology / relations | Higher-level bundle of collagen fibrils in source hierarchy. |
| State variables | fibrils; orientation; tensile state |
| Evidence | [C20 §42](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#42-collagen-fiber-diameter), [C20 §43](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#43-collagen-fibrils-can-be-many-micrometers-long), [C20 §310](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#310-project-rule--collagen-fibers-have-hierarchy) |
| Uncertainty / display limits | Dimension is not that of one triple helix. |

<a id="e-fibronectin"></a>

### E.fibronectin — Fibronectin

| Field | Record |
|---|---|
| Kind / scoped aliases | type/ECM protein |
| Exists in / context | Source cell–matrix adhesion |
| Biology / relations | Connects collagen-associated matrix to integrins in the cited linkage. |
| State variables | matrix binding; integrin binding; tension |
| Evidence | [C20 §59](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#59-fibronectin), [C20 §60](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#60-integrinfibronectinactin-linkage) |
| Uncertainty / display limits | Not an integrin or a cell membrane protein. |

<a id="e-laminin"></a>

### E.laminin — Laminin

| Field | Record |
|---|---|
| Kind / scoped aliases | family/ECM protein |
| Exists in / context | Basal lamina |
| Biology / relations | Matrix protein supplying integrin adhesive sites. |
| State variables | matrix assembly; integrin interaction |
| Evidence | [C20 §93](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#93-basal-lamina-composition), [C20 §94](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#94-laminin), [C20 §118](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#118-hemidesmosome-linkage) |
| Uncertainty / display limits | Not nuclear lamin. |

<a id="e-integrin"></a>

### E.integrin — Integrin

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; α/β heterodimer |
| Exists in / context | Source cell–matrix interfaces; subtype/cell context |
| Biology / relations | Membrane receptor linking extracellular ligands to cytoskeleton and signaling; intracellular partner varies. |
| State variables | subtype; affinity/conformation; ligand; adaptor; force |
| Evidence | [C20 §57](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#57-integrin), [C20 §58](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#58-integrin-dimer), [C20 §60](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#60-integrinfibronectinactin-linkage), [C20 §61](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#61-integrin-can-also-connect-to-intermediate-filaments), [C20 §63](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#63-integrin-activation-is-bidirectional), [C20 §64](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#64-integrins-are-signaling-receptors) |
| Uncertainty / display limits | Not every integrin links actin; hemidesmosome context links keratin. |

<a id="e-cadherin"></a>

### E.cadherin — Cadherin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source cell–cell adhesion |
| Biology / relations | Calcium-dependent adhesion proteins connecting neighboring cells through source junction architectures. |
| State variables | subtype; calcium; binding; junction; linkers |
| Evidence | [C20 §105](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#105-cadherin), [C20 §106](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#106-cadherin-homophilic-binding), [C20 §107](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#107-adherens-junction-architecture), [C20 §114](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#114-desmosome-architecture) |
| Uncertainty / display limits | Not the hemidesmosome matrix receptor. |

<a id="e-gag"></a>

### E.gag — Glycosaminoglycan

| Field | Record |
|---|---|
| Kind / scoped aliases | family; GAG |
| Exists in / context | Source extracellular hydrated matrix |
| Biology / relations | Negatively charged polysaccharide class attracting counterions/water. |
| State variables | species; charge; hydration; protein association |
| Evidence | [C20 §69](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#69-glycosaminoglycan), [C20 §72](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#72-gag-negative-charge), [C20 §79](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#79-gags-attract-cations-and-water), [C20 §80](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#80-gag-swelling-pressure) |
| Uncertainty / display limits | Compression resistance does not come from rigid rods. |

<a id="e-hyaluronan"></a>

### E.hyaluronan — Hyaluronan

| Field | Record |
|---|---|
| Kind / scoped aliases | type/polymer family |
| Exists in / context | Source extracellular matrix |
| Biology / relations | Long GAG chain associated with source large proteoglycan aggregates. |
| State variables | chain length; binding; hydration |
| Evidence | [C20 §70](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#70-hyaluronan), [C20 §76](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#76-aggrecanhyaluronan-aggregate) |
| Uncertainty / display limits | No fixed repeat count or aggregate occupancy. |

<a id="e-proteoglycan"></a>

### E.proteoglycan — Proteoglycan

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source extracellular matrix and surface glycocalyx |
| Biology / relations | Core protein with covalently attached long GAG chains. |
| State variables | core; GAGs; hydration; bound signals |
| Evidence | [C11 §294](../chapters/11_membrane_structure.md#294-proteoglycan), [C20 §73](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#73-proteoglycan), [C20 §84](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#84-proteoglycans-bind-signals) |
| Uncertainty / display limits | Distinct from short-oligosaccharide glycoprotein terminology. |

<a id="e-aggrecan"></a>

### E.aggrecan — Aggrecan

| Field | Record |
|---|---|
| Kind / scoped aliases | type/assembly |
| Exists in / context | Source cartilage |
| Biology / relations | Large GAG-bearing proteoglycan joining hyaluronan/link-protein assemblies. |
| State variables | core; GAGs; aggregate association; hydration |
| Evidence | [C20 §74](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#74-aggrecan), [C20 §75](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#75-aggrecan-gag-count), [C20 §76](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#76-aggrecanhyaluronan-aggregate) |
| Uncertainty / display limits | An aggregate is not one aggrecan molecule. |

<a id="e-glycocalyx"></a>

### E.glycocalyx — Glycocalyx

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/material |
| Exists in / context | Source extracellular/noncytosolic cell surface |
| Biology / relations | Carbohydrate-rich layer from glycoproteins, proteoglycans and glycolipids. |
| State variables | glycan composition; hydration; surface membership |
| Evidence | [C11 §292](../chapters/11_membrane_structure.md#292-carbohydrate-coat), [C11 §293](../chapters/11_membrane_structure.md#293-glycoprotein), [C11 §294](../chapters/11_membrane_structure.md#294-proteoglycan), [C11 §295](../chapters/11_membrane_structure.md#295-glycolipid-carbohydrate), [C11 §296](../chapters/11_membrane_structure.md#296-extracellular-only-carbohydrate-orientation) |
| Uncertainty / display limits | No corresponding universal cytosolic sugar coat. |

<a id="e-plant_cell_wall"></a>

### E.plant_cell_wall — Plant cell wall

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/material |
| Exists in / context | Source plant growth/tissue context |
| Biology / relations | Extracellular cellulose/polysaccharide support with primary/secondary states. |
| State variables | composition; layers; microfibril orientation; tension |
| Evidence | [C20 §8](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#8-plant-cell-wall), [C20 §11](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#11-primary-cell-wall), [C20 §13](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#13-secondary-cell-wall), [C20 §16](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#16-cellulose), [C20 §23](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#23-cross-linking-polysaccharides) |
| Uncertainty / display limits | Wall resists turgor; it does not create osmotic pressure. |

<a id="e-cellulose_microfibril"></a>

### E.cellulose_microfibril — Cellulose microfibril

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source plant wall |
| Biology / relations | Aligned cellulose-chain assembly supporting anisotropic tensile mechanics. |
| State variables | chains; orientation; wall membership |
| Evidence | [C20 §18](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#18-cellulose-microfibril), [C20 §19](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#19-cellulose-chain-count-source-model), [C20 §20](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#20-cellulose-provides-tensile-strength), [C20 §25](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#25-cell-growth-direction-follows-wall-anisotropy) |
| Uncertainty / display limits | Source chain stoichiometry is a model, not a universal measured count. |

<a id="e-pectin"></a>

### E.pectin — Pectin

| Field | Record |
|---|---|
| Kind / scoped aliases | polysaccharide family |
| Exists in / context | Source plant wall/middle lamella |
| Biology / relations | Matrix polysaccharide contributing compression behavior and intercellular cementing. |
| State variables | composition; hydration; wall location |
| Evidence | [C20 §21](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#21-pectin), [C20 §22](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#22-middle-lamella) |
| Uncertainty / display limits | Not cellulose or lignin. |

<a id="e-lignin"></a>

### E.lignin — Lignin

| Field | Record |
|---|---|
| Kind / scoped aliases | polymer family |
| Exists in / context | Source woody secondary-wall context |
| Biology / relations | Cross-linked polymer contributing rigidity and waterproofing. |
| State variables | deposition; crosslinking; wall membership |
| Evidence | [C20 §24](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#24-lignin) |
| Uncertainty / display limits | Not required at one fixed fraction in every plant wall. |

<a id="e-basal_lamina"></a>

### E.basal_lamina — Basal lamina

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/material |
| Exists in / context | Beneath source epithelia |
| Biology / relations | Specialized matrix with type IV collagen and laminin. |
| State variables | composition; epithelial attachment; integrity |
| Evidence | [C20 §92](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#92-basal-lamina), [C20 §93](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#93-basal-lamina-composition), [C20 §94](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#94-laminin) |
| Uncertainty / display limits | Not any generic connective tissue or a lipid membrane. |

<a id="e-tight_junction"></a>

### E.tight_junction — Tight junction

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source epithelial cell contacts |
| Biology / relations | Paracellular seal and lateral membrane-diffusion fence with source claudin/occludin strands. |
| State variables | neighbors; seal/permeability; domain fence |
| Evidence | [C20 §99](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#99-tight-junction), [C20 §100](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#100-claudins), [C20 §101](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#101-occludins), [C20 §102](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#102-tight-junction-preserves-apicalbasolateral-membrane-identity) |
| Uncertainty / display limits | Not membrane fusion or a desmosome. |

<a id="e-adherens_junction"></a>

### E.adherens_junction — Adherens junction

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source neighboring epithelial cells |
| Biology / relations | Cadherin/linker connection to actin that can transmit tissue-scale force. |
| State variables | neighbors; cadherin; actin links; tension |
| Evidence | [C20 §104](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#104-adherens-junction), [C20 §107](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#107-adherens-junction-architecture), [C20 §108](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#108-adhesion-belt), [C20 §109](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#109-adherens-belts-can-generate-tissue-scale-force) |
| Uncertainty / display limits | Not keratin-linked desmosome; β-catenin role shares protein identity. |

<a id="e-desmosome"></a>

### E.desmosome — Desmosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source epithelial cell–cell contacts |
| Biology / relations | Cadherin/plaque connection to keratin intermediate filaments. |
| State variables | neighbors; plaque; keratin; tension |
| Evidence | [C20 §113](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#113-desmosome), [C20 §114](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#114-desmosome-architecture), [C20 §115](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#115-desmosomes-distribute-tensile-stress) |
| Uncertainty / display limits | Not actin-linked adherens junction. |

<a id="e-hemidesmosome"></a>

### E.hemidesmosome — Hemidesmosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source epithelial cell–basal-lamina contact |
| Biology / relations | Integrin-based connection between keratin and laminin/basal lamina. |
| State variables | cell; matrix; integrin; plaque; force |
| Evidence | [C20 §116](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#116-hemidesmosome), [C20 §117](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#117-hemidesmosome-uses-integrins-not-cadherins), [C20 §118](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#118-hemidesmosome-linkage) |
| Uncertainty / display limits | Not half a cell–cell desmosome or cadherin matrix link. |

<a id="e-focal_contact"></a>

### E.focal_contact — Focal contact

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; source dynamic traction contact |
| Exists in / context | Source migrating cell–matrix interfaces |
| Biology / relations | Actin-linked integrin contact contributing traction and turnover. |
| State variables | ligand; actin links; formation/release; force |
| Evidence | [C17 §188](../chapters/17_cytoskeleton.md#188-integrins-create-traction-points), [C17 §190](../chapters/17_cytoskeleton.md#190-frontback-attachment-turnover), [C20 §119](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#119-focal-contact-versus-hemidesmosome) |
| Uncertainty / display limits | Distinct from stable keratin-linked hemidesmosome. |

<a id="e-gap_junction"></a>

### E.gap_junction — Gap junction

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Neighboring source animal cells |
| Biology / relations | Paired connexon channels permitting regulated small-molecule/ion communication. |
| State variables | neighbors; paired pores; gating; permeant species |
| Evidence | [C20 §120](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#120-gap-junction), [C20 §124](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#124-complete-gap-junction-channel), [C20 §126](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#126-gap-junction-permeability-source-limit), [C20 §130](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#130-gap-junctions-are-gated) |
| Uncertainty / display limits | Not a mechanical actin link, membrane fusion or unrestricted cytoplasmic merger. |

<a id="e-plasmodesma"></a>

### E.plasmodesma — Plasmodesma

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/connection |
| Exists in / context | Neighboring source plant cells |
| Biology / relations | Membrane-lined channel through wall with source ER-derived desmotubule continuity. |
| State variables | cells; PM continuity; desmotubule; gating; cargo |
| Evidence | [C20 §133](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#133-plasmodesma), [C20 §134](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#134-plasmodesmata-are-not-plant-gap-junctions-structurally), [C20 §135](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#135-plasma-membrane-continuity-through-plasmodesmata), [C20 §136](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#136-desmotubule), [C20 §137](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#137-plasmodesmata-can-pass-macromolecules) |
| Uncertainty / display limits | Structurally distinct from connexon-based gap junction. |

<a id="e-synapse"></a>

### E.synapse — Chemical synapse

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/connection |
| Exists in / context | Neuron–neuron or neuron–target source context |
| Biology / relations | Presynaptic release machinery, cleft and postsynaptic receptors connect electrical/chemical signaling. |
| State variables | pre/post cells; vesicles; transmitter; receptors; clearance |
| Evidence | [C12 §325](../chapters/12_transport_across_cell_membranes.md#325-synapse), [C12 §326](../chapters/12_transport_across_cell_membranes.md#326-presynaptic-cell), [C12 §327](../chapters/12_transport_across_cell_membranes.md#327-postsynaptic-cell), [C12 §338](../chapters/12_transport_across_cell_membranes.md#338-synaptic-conversion-sequence), [C12 §344](../chapters/12_transport_across_cell_membranes.md#344-chemical-to-electrical-conversion) |
| Uncertainty / display limits | Chemical and electrical coupling are different mechanisms. |

<a id="e-crypt"></a>

### E.crypt — Intestinal crypt

| Field | Record |
|---|---|
| Kind / scoped aliases | tissue region |
| Exists in / context | Source renewing intestinal epithelium |
| Biology / relations | Invagination containing niche, stem/precursor populations and differentiated Paneth cells. |
| State variables | spatial domains; populations; Wnt; production/loss |
| Evidence | [C20 §165](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#165-intestinal-crypt), [C20 §169](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#169-paneth-cells), [C20 §179](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#179-stem-cell-niche), [C20 §181](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#181-wnt-proteins) |
| Uncertainty / display limits | Not all inhabitants are proliferative stem cells. |

<a id="e-villus"></a>

### E.villus — Intestinal villus

| Field | Record |
|---|---|
| Kind / scoped aliases | tissue region |
| Exists in / context | Source gut epithelium |
| Biology / relations | Projection supporting differentiated epithelium and tip shedding. |
| State variables | cells; migration; differentiation; shedding |
| Evidence | [C20 §166](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#166-villus), [C20 §167](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#167-gut-cell-migration), [C20 §168](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#168-villus-tip-shedding) |
| Uncertainty / display limits | Tissue geometry must not replace cell lineage tracking. |

<a id="e-stem_cell_niche"></a>

### E.stem_cell_niche — Stem-cell niche

| Field | Record |
|---|---|
| Kind / scoped aliases | tissue microenvironment/relations |
| Exists in / context | Named tissue/lineage |
| Biology / relations | Source-derived spatial environment maintaining stem-cell behavior through signals/interactions. |
| State variables | supporting cells; signals; matrix; occupant lineages |
| Evidence | [C20 §170](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#170-paneth-cell-functions), [C20 §179](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#179-stem-cell-niche), [C20 §180](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#180-stem-cell-systems-require-feedback-control), [C20 §320](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#320-project-rule--stem-cell-identity-depends-on-niche) |
| Uncertainty / display limits | Not a universal visible shell around every stem cell. |

<a id="e-organoid"></a>

### E.organoid — Organoid

| Field | Record |
|---|---|
| Kind / scoped aliases | experimental tissue assembly |
| Exists in / context | Defined culture and donor context |
| Biology / relations | Self-organized multicellular structure resembling aspects of organ development. |
| State variables | donor; culture; cell types; organization; limitations |
| Evidence | [C20 §198](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#198-organoid), [C20 §199](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#199-organoid-self-organization), [C20 §200](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#200-optic-cup-source-example), [C20 §201](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#201-brain-organoid-source-example) |
| Uncertainty / display limits | Not a complete normal organ or an exact patient replica. |

<a id="e-tumor"></a>

### E.tumor — Tumor

| Field | Record |
|---|---|
| Kind / scoped aliases | tissue/lineage assembly |
| Exists in / context | Named clone and tissue context |
| Biology / relations | Abnormal proliferative mass; benign/malignant states distinguished by source behaviors. |
| State variables | clones; invasion; matrix; vascular support; growth/loss |
| Evidence | [C20 §206](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#206-tumor), [C20 §207](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#207-benign-tumor), [C20 §208](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#208-malignant-tumor), [C20 §247](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#247-tumor-microenvironment), [C20 §248](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#248-angiogenic-support) |
| Uncertainty / display limits | Not every tumor is malignant; diameter is not a cell-cycle duration. |

<a id="e-tumor_clone"></a>

### E.tumor_clone — Tumor clone

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage collection |
| Exists in / context | Source tumor evolution |
| Biology / relations | Related descendants sharing a founder and mutation history; subclones retain ancestry. |
| State variables | founder; mutations; descendants; selection; spatial distribution |
| Evidence | [C20 §235](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#235-cancer-evolves-clonally), [C20 §236](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#236-tumor-subclones), [C20 §280](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#280-intratumor-heterogeneity), [C20 §324](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#324-project-rule--cancer-evolution-requires-clone-identity) |
| Uncertainty / display limits | Not one uniform genotype across every tumor cell. |
