# Cells cell states

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 35 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-cell"></a>

### E.cell — Cell

| Field | Record |
|---|---|
| Kind / scoped aliases | family/type |
| Exists in / context | Named organism/cell context required |
| Biology / relations | Membrane-bounded biological unit with context-specific genome, contents, behavior and lineage. |
| State variables | type; state; volume; compartments; lineage; viability |
| Evidence | [C01 §48.1](../chapters/01_cells_fundamental_units.md#481-cell-boundary), [C11 §3](../chapters/11_membrane_structure.md#3-membranes-are-universal-cellular-structures), [C18 §1](../chapters/18_cell_cycle.md#1-cell-cycle) |
| Uncertainty / display limits | No generic dimensions, organelle inventory or universal diploidy. |

<a id="e-ecoli_cell"></a>

### E.ecoli_cell — Escherichia coli cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Strain, medium, growth state and temperature must be supplied |
| Biology / relations | Reference organism used in source replication, metabolism and experimental cloning examples. |
| State variables | growth condition; chromosome; plasmids; division |
| Evidence | [C06 §19](../chapters/06_dna_replication_repair.md#19-bacterial-origin-example), [C10 §8](../chapters/10_analyzing_gene_structure_and_function.md#8-e-coli-genome-scale), [C10 §59](../chapters/10_analyzing_gene_structure_and_function.md#59-natural-transformation), [C10 §62](../chapters/10_analyzing_gene_structure_and_function.md#62-source-bacterial-doubling-time-in-cloning-example) |
| Uncertainty / display limits | Rapid-growth textbook doubling times are not one species constant. |

<a id="e-yeast_cell"></a>

### E.yeast_cell — Budding yeast cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source budding-yeast context; ploidy/growth state qualified |
| Biology / relations | Eukaryotic reference with spindle-pole-body and budding polarity examples. |
| State variables | ploidy; growth; bud; MTOC |
| Evidence | [C17 §65](../chapters/17_cytoskeleton.md#65-yeast-spindle-pole-body), [C17 §205](../chapters/17_cytoskeleton.md#205-budding-yeast-polarity-source-example) |
| Uncertainty / display limits | Haploid/diploid sizes and generation times must not be collapsed. |

<a id="e-hepatocyte"></a>

### E.hepatocyte — Hepatocyte

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type; liver cell |
| Exists in / context | Source mammalian liver examples |
| Biology / relations | Cell context for organelle fractions/counts, metabolism and G0 re-entry. |
| State variables | organelle inventory; metabolic state; cycle; injury context |
| Evidence | [C14 §19](../chapters/14_energy_generation_mitochondria_chloroplasts.md#19-liver-cell-mitochondrial-number), [C15 §22](../chapters/15_intracellular_compartments_protein_transport.md#22-table-152-hepatocyte-cytosol), [C15 §23](../chapters/15_intracellular_compartments_protein_transport.md#23-table-152-hepatocyte-mitochondria), [C15 §24](../chapters/15_intracellular_compartments_protein_transport.md#24-table-152-hepatocyte-er), [C15 §25](../chapters/15_intracellular_compartments_protein_transport.md#25-table-152-hepatocyte-nucleus), [C18 §83](../chapters/18_cell_cycle.md#83-liver-cell-g0-source-example) |
| Uncertainty / display limits | Source hepatocyte inventory is not a universal mammalian cell template. |

<a id="e-fibroblast"></a>

### E.fibroblast — Fibroblast

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source cultured/connective-tissue examples |
| Biology / relations | Matrix-producing and migrating cell used for cytoskeletal/cycle reference contexts. |
| State variables | adhesion; matrix secretion; migration; cycle |
| Evidence | [C20 §44](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#44-fibroblast), [C20 §53](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#53-cells-organize-the-matrix-they-secrete), [C17 §191](../chapters/17_cytoskeleton.md#191-fibroblast-crawling) |
| Uncertainty / display limits | Cultured size/duration values require assay conditions. |

<a id="e-neuron"></a>

### E.neuron — Neuron

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell family |
| Exists in / context | Named neuronal subtype, species and state |
| Biology / relations | Signal-receiving/integrating/transmitting cell; axons and dendrites are cell regions. |
| State variables | channels; synapses; voltage; projections; survival |
| Evidence | [C12 §274](../chapters/12_transport_across_cell_membranes.md#274-neuron), [C12 §275](../chapters/12_transport_across_cell_membranes.md#275-neuron-cell-body), [C12 §276](../chapters/12_transport_across_cell_membranes.md#276-axon), [C12 §277](../chapters/12_transport_across_cell_membranes.md#277-dendrite), [C18 §81](../chapters/18_cell_cycle.md#81-terminal-differentiation), [C18 §244](../chapters/18_cell_cycle.md#244-developing-neuron-competition) |
| Uncertainty / display limits | No universal conduction velocity, firing rate or lifespan. |

<a id="e-erythrocyte"></a>

### E.erythrocyte — Mature human erythrocyte

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type; red blood cell; RBC |
| Exists in / context | Mature human red-cell source context |
| Biology / relations | Biconcave membrane/cortex system lacking nucleus and typical internal organelles in source examples. |
| State variables | membrane/cortex; shape; age; clearance |
| Evidence | [C11 §247](../chapters/11_membrane_structure.md#247-red-blood-cell-shape), [C11 §248](../chapters/11_membrane_structure.md#248-red-blood-cells-lack-nucleus), [C11 §249](../chapters/11_membrane_structure.md#249-red-blood-cells-lack-other-intracellular-organelles), [C20 §151](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#151-red-blood-cell-lifetime), [C20 §176](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#176-red-blood-cells-lack-nuclei) |
| Uncertainty / display limits | Do not infer this inventory for every organism's erythrocytes. |

<a id="e-skeletal_muscle_cell"></a>

### E.skeletal_muscle_cell — Skeletal muscle fiber

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type; myofiber |
| Exists in / context | Source skeletal muscle |
| Biology / relations | Multinucleated cell from precursor fusion, containing myofibrils and excitation/contraction machinery. |
| State variables | nuclei; myofibrils; SR; voltage; contraction; growth |
| Evidence | [C17 §213](../chapters/17_cytoskeleton.md#213-skeletal-muscle-fiber), [C17 §216](../chapters/17_cytoskeleton.md#216-myofibril), [C17 §238](../chapters/17_cytoskeleton.md#238-t-tubules), [C17 §239](../chapters/17_cytoskeleton.md#239-sarcoplasmic-reticulum) |
| Uncertainty / display limits | One cell is not one sarcomere; size varies. |

<a id="e-smooth_muscle_cell"></a>

### E.smooth_muscle_cell — Smooth muscle cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source smooth-muscle contraction context |
| Biology / relations | Uses source calcium-dependent myosin phosphorylation regulation. |
| State variables | calcium; myosin phosphorylation; contractile state |
| Evidence | [C17 §249](../chapters/17_cytoskeleton.md#249-smooth-muscle-activation), [C17 §250](../chapters/17_cytoskeleton.md#250-smooth-muscle-is-slower), [C17 §251](../chapters/17_cytoskeleton.md#251-smooth-muscle-integrates-diverse-signals) |
| Uncertainty / display limits | Do not apply skeletal troponin activation unchanged. |

<a id="e-cardiac_muscle_cell"></a>

### E.cardiac_muscle_cell — Cardiac muscle cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source cardiac tissue |
| Biology / relations | Contractile cell with tissue electrical coupling and source high-energy-demand mitochondrial context. |
| State variables | gap junctions; excitation; contraction; mitochondria |
| Evidence | [C14 §17](../chapters/14_energy_generation_mitochondria_chloroplasts.md#17-mitochondria-localize-near-high-atp-demand), [C14 §38](../chapters/14_energy_generation_mitochondria_chloroplasts.md#38-heart-muscle-cristae-density), [C20 §129](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#129-cardiac-coupling) |
| Uncertainty / display limits | Tissue synchrony does not imply synchronous molecular motor strokes. |

<a id="e-epithelial_cell"></a>

### E.epithelial_cell — Epithelial cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell family |
| Exists in / context | Named tissue and layer |
| Biology / relations | Polarized/junction-linked cell family forming barriers and directed exchange. |
| State variables | apical/basal domains; junctions; fate; turnover |
| Evidence | [C20 §87](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#87-simple-epithelium), [C20 §89](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#89-epithelial-cell-shapes), [C20 §91](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#91-epithelial-polarity), [C20 §95](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#95-intestinal-epithelial-polarity) |
| Uncertainty / display limits | Cell shape or tissue location alone does not fix molecular identity. |

<a id="e-intestinal_crypt_cell"></a>

### E.intestinal_crypt_cell — Intestinal crypt cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual role/state |
| Exists in / context | Source crypt niche; stem/precursor/differentiated roles distinguished |
| Biology / relations | Cell occupying crypt context with Wnt-dependent proliferation and differentiation constraints. |
| State variables | niche position; lineage; Wnt response; cycle |
| Evidence | [C20 §165](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#165-intestinal-crypt), [C20 §181](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#181-wnt-proteins), [C20 §182](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#182-wnt-signal-is-spatially-restricted), [C20 §183](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#183-differentiation-requires-additional-signals) |
| Uncertainty / display limits | Location is not sufficient to make every crypt cell a stem cell. |

<a id="e-paneth_cell"></a>

### E.paneth_cell — Paneth cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual differentiated cell type |
| Exists in / context | Source intestinal crypt |
| Biology / relations | Differentiated secretory cell migrating toward crypt base and supporting niche/antimicrobial function. |
| State variables | position; secretion; niche interactions |
| Evidence | [C20 §169](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#169-paneth-cells), [C20 §170](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#170-paneth-cell-functions) |
| Uncertainty / display limits | Exception to blanket upward crypt-to-villus migration. |

<a id="e-goblet_cell"></a>

### E.goblet_cell — Goblet cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual differentiated cell type |
| Exists in / context | Source gut epithelium |
| Biology / relations | Polarized mucus-secreting cell. |
| State variables | apical secretion; secretory organelles |
| Evidence | [C20 §96](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#96-goblet-cell-polarity) |
| Uncertainty / display limits | No generic secretory-vesicle count. |

<a id="e-adipocyte"></a>

### E.adipocyte — Adipocyte

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell family |
| Exists in / context | Source animal storage; brown-fat context separately qualified |
| Biology / relations | Fat-storage cell; brown-fat heat production is a specialized mitochondrial context. |
| State variables | lipid stores; metabolic state; subtype |
| Evidence | [C13 §79](../chapters/13_how_cells_obtain_energy_from_food.md#79-adipocytes), [C14 §131](../chapters/14_energy_generation_mitochondria_chloroplasts.md#131-brown-fat-uncoupling), [C14 §132](../chapters/14_energy_generation_mitochondria_chloroplasts.md#132-brown-fat-source-examples) |
| Uncertainty / display limits | Not every adipocyte is uncoupling brown fat. |

<a id="e-macrophage"></a>

### E.macrophage — Macrophage

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source phagocytosis/tissue contexts |
| Biology / relations | Phagocytic cell involved in ingestion, recycling and tissue interactions. |
| State variables | receptors; phagosomes; uptake; activation |
| Evidence | [C15 §200](../chapters/15_intracellular_compartments_protein_transport.md#200-phagocytic-immune-cells), [C15 §205](../chapters/15_intracellular_compartments_protein_transport.md#205-macrophage-red-cell-clearance), [C15 §206](../chapters/15_intracellular_compartments_protein_transport.md#206-macrophage-fluid-uptake), [C20 §177](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#177-monocyte-lineage) |
| Uncertainty / display limits | Whole-body clearance and per-cell uptake are different rates. |

<a id="e-neutrophil"></a>

### E.neutrophil — Neutrophil

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source immune-cell migration/phagocytosis |
| Biology / relations | Motile cell with phagocytic and endothelial-exit contexts. |
| State variables | adhesion; migration; engulfment; activation |
| Evidence | [C11 §312](../chapters/11_membrane_structure.md#312-neutrophil-endothelium-recognition), [C11 §316](../chapters/11_membrane_structure.md#316-neutrophil-exits-bloodstream), [C15 §200](../chapters/15_intracellular_compartments_protein_transport.md#200-phagocytic-immune-cells), [C17 §192](../chapters/17_cytoskeleton.md#192-neutrophil-crawling) |
| Uncertainty / display limits | Labeling or a migration arrow does not imply activation. |

<a id="e-osteoblast"></a>

### E.osteoblast — Osteoblast

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source bone renewal |
| Biology / relations | Matrix-depositing cell participating in bone formation. |
| State variables | matrix synthesis; lineage; location |
| Evidence | [C20 §45](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#45-osteoblast), [C20 §155](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#155-osteoblast-renews-bone-matrix) |
| Uncertainty / display limits | Distinct from bone-resorbing osteoclast. |

<a id="e-osteoclast"></a>

### E.osteoclast — Osteoclast

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source bone renewal |
| Biology / relations | Bone-matrix-resorbing cell with source monocyte-lineage relationship. |
| State variables | resorption; lineage; location |
| Evidence | [C20 §154](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#154-osteoclast), [C20 §177](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#177-monocyte-lineage) |
| Uncertainty / display limits | Do not collapse with osteoblast despite same tissue. |

<a id="e-megakaryocyte"></a>

### E.megakaryocyte — Megakaryocyte

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source blood-cell lineage |
| Biology / relations | Large precursor that releases platelets as cellular fragments. |
| State variables | maturation; fragment production; lineage |
| Evidence | [C20 §178](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#178-megakaryocyte) |
| Uncertainty / display limits | Platelets are not complete daughter cells created by ordinary mitosis. |

<a id="e-plant_cell"></a>

### E.plant_cell — Plant cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell family |
| Exists in / context | Source tissue, growth and photosynthetic context specified |
| Biology / relations | Cell with wall/turgor and plant-specific intercellular/cytokinetic contexts. |
| State variables | wall; turgor; plastids; differentiation; cycle |
| Evidence | [C20 §8](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#8-plant-cell-wall), [C20 §14](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#14-turgor-pressure), [C20 §133](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#133-plasmodesma), [C18 §192](../chapters/18_cell_cycle.md#192-plant-cytokinesis-differs-fundamentally) |
| Uncertainty / display limits | Do not require chloroplasts, animal centrosomes or contractile-ring cytokinesis universally. |

<a id="e-stem_cell"></a>

### E.stem_cell — Stem cell

| Field | Record |
|---|---|
| Kind / scoped aliases | functional cell state/type family |
| Exists in / context | Named tissue/niche or culture context |
| Biology / relations | Self-renewing cell able to generate appropriate differentiated progeny. |
| State variables | lineage potential; niche; renewal; fate; cycle |
| Evidence | [C20 §160](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#160-stem-cell), [C20 §161](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#161-stem-cell-self-renewal), [C20 §162](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#162-stem-cell-differentiation-output), [C20 §164](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#164-adult-tissue-stem-cells-are-restricted) |
| Uncertainty / display limits | Not any dividing cell and not necessarily pluripotent. |

<a id="e-precursor_cell"></a>

### E.precursor_cell — Proliferating precursor

| Field | Record |
|---|---|
| Kind / scoped aliases | functional cell state; progenitor; transit-amplifying in source |
| Exists in / context | Named tissue lineage |
| Biology / relations | Amplifies cell number before differentiation in source renewal models. |
| State variables | divisions; lineage; differentiation potential |
| Evidence | [C20 §158](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#158-proliferating-precursor-cell), [C20 §159](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#159-transit-amplifying-cell) |
| Uncertainty / display limits | Not automatically self-renewing stem cell. |

<a id="e-differentiated_cell"></a>

### E.differentiated_cell — Differentiated cell

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state profile |
| Exists in / context | Named lineage/type; terminal status separate |
| Biology / relations | Specialized expression/function state; terminal differentiation can end normal proliferative capacity. |
| State variables | expression program; function; cycle competence |
| Evidence | [C08 §9](../chapters/08_control_of_gene_expression.md#9-cell-differentiation), [C08 §172](../chapters/08_control_of_gene_expression.md#172-cell-differentiation-changes-thousands-of-genes), [C20 §157](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#157-terminally-differentiated-cell) |
| Uncertainty / display limits | Differentiated is not synonymous with dead or universally incapable of division. |

<a id="e-embryonic_stem_cell"></a>

### E.embryonic_stem_cell — Embryonic stem cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type; ES cell |
| Exists in / context | Source early-embryo-derived culture conditions |
| Biology / relations | Pluripotent cultured cell with appropriate proliferative/differentiation potential. |
| State variables | derivation; culture; pluripotency; fate |
| Evidence | [C20 §187](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#187-embryonic-stem-cell), [C20 §188](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#188-pluripotency), [C20 §189](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#189-es-cells-can-be-directed-by-extracellular-signals) |
| Uncertainty / display limits | Origin differs from iPS cells; pluripotency is not totipotency. |

<a id="e-ips_cell"></a>

### E.ips_cell — Induced pluripotent stem cell

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell state/type; iPS cell |
| Exists in / context | Reprogrammed differentiated-cell culture |
| Biology / relations | Pluripotent-like state with donor genomic provenance. |
| State variables | donor lineage; reprogramming; culture; genotype |
| Evidence | [C20 §192](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#192-induced-pluripotent-stem-cell), [C20 §193](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#193-source-ips-transcription-factors), [C20 §194](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#194-reprogramming-changes-stable-cell-identity), [C20 §195](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#195-patient-specific-ips-cells) |
| Uncertainty / display limits | Source three-factor set must not be expanded from memory. |

<a id="e-germline_cell"></a>

### E.germline_cell — Germ-line cell

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage role |
| Exists in / context | Source sexual-life-cycle context |
| Biology / relations | Member of lineage producing gametes and transmitting information between generations. |
| State variables | lineage; meiotic competence; ploidy; genotype |
| Evidence | [C19 §13](../chapters/19_sexual_reproduction_genetics.md#13-germ-line), [C19 §15](../chapters/19_sexual_reproduction_genetics.md#15-sexual-life-cycle-alternates-ploidy) |
| Uncertainty / display limits | Somatic mutation does not automatically enter this lineage. |

<a id="e-gamete"></a>

### E.gamete — Gamete

| Field | Record |
|---|---|
| Kind / scoped aliases | cell family/role |
| Exists in / context | Named sexual reproductive system |
| Biology / relations | Specialized cell contributing a haploid genome in source animal scheme. |
| State variables | chromosome set; recombination; aneuploidy; fusion |
| Evidence | [C19 §8](../chapters/19_sexual_reproduction_genetics.md#8-gametes-are-haploid), [C19 §9](../chapters/19_sexual_reproduction_genetics.md#9-egg-and-sperm), [C19 §230](../chapters/19_sexual_reproduction_genetics.md#230-gamete-schema) |
| Uncertainty / display limits | Gamete type is not an assertion of a universal cytoplasm size. |

<a id="e-oocyte"></a>

### E.oocyte — Egg/oocyte

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type/state |
| Exists in / context | Source animal/mammalian examples; meiotic stage explicit |
| Biology / relations | Female gamete/precursor context with prolonged meiotic stages and fertilization responses. |
| State variables | meiotic arrest/stage; genome; calcium; zona |
| Evidence | [C19 §43](../chapters/19_sexual_reproduction_genetics.md#43-meiosis-i-can-be-much-longer-than-mitosismeiosis-ii), [C19 §83](../chapters/19_sexual_reproduction_genetics.md#83-female-meiotic-prophase-duration-hypothesis), [C19 §88](../chapters/19_sexual_reproduction_genetics.md#88-zona-pellucida), [C19 §92](../chapters/19_sexual_reproduction_genetics.md#92-fertilization-ca2-wave) |
| Uncertainty / display limits | Oocyte stage matters; no fixed size or nondisjunction probability. |

<a id="e-sperm"></a>

### E.sperm — Sperm

| Field | Record |
|---|---|
| Kind / scoped aliases | contextual cell type |
| Exists in / context | Source animal/mammalian fertilization |
| Biology / relations | Small motile gamete contributing haploid genome in the source account. |
| State variables | motility; binding; genome; fusion |
| Evidence | [C19 §9](../chapters/19_sexual_reproduction_genetics.md#9-egg-and-sperm), [C19 §86](../chapters/19_sexual_reproduction_genetics.md#86-human-sperm-number-source-example), [C19 §89](../chapters/19_sexual_reproduction_genetics.md#89-fertilization-sequence) |
| Uncertainty / display limits | Ejaculate counts and successful fertilization events are different observations. |

<a id="e-zygote"></a>

### E.zygote — Zygote

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state/type |
| Exists in / context | Source fertilization product |
| Biology / relations | Cell containing reunited parental nuclear contributions in source diploid scheme. |
| State variables | parental genomes; pronuclei; calcium; developmental state |
| Evidence | [C19 §11](../chapters/19_sexual_reproduction_genetics.md#11-zygote), [C19 §95](../chapters/19_sexual_reproduction_genetics.md#95-pronuclei), [C19 §96](../chapters/19_sexual_reproduction_genetics.md#96-pronuclear-union-completes-the-genome-merger) |
| Uncertainty / display limits | Diploidy is not completed merely by visual genome proximity. |

<a id="e-quiescent_cell"></a>

### E.quiescent_cell — Quiescent cell

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state profile; G0 |
| Exists in / context | Source nonproliferating cells; re-entry depends on cell type |
| Biology / relations | Withdrawal from active cycling with source-specific reversibility. |
| State variables | cycle competence; signals; duration; growth |
| Evidence | [C18 §27](../chapters/18_cell_cycle.md#27-g0), [C18 §80](../chapters/18_cell_cycle.md#80-g0-duration), [C18 §81](../chapters/18_cell_cycle.md#81-terminal-differentiation), [C18 §83](../chapters/18_cell_cycle.md#83-liver-cell-g0-source-example) |
| Uncertainty / display limits | G0 is not simply long G1 or death. |

<a id="e-senescent_cell"></a>

### E.senescent_cell — Senescent cell

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state profile |
| Exists in / context | Source normal somatic stress/division context |
| Biology / relations | Persistent cessation of proliferation in source model. |
| State variables | proliferation competence; stress; lineage |
| Evidence | [C20 §241](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#241-replicative-immortality), [C20 §242](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#242-cell-senescence) |
| Uncertainty / display limits | Not identical to G0 or an apoptotic cell. |

<a id="e-apoptotic_cell"></a>

### E.apoptotic_cell — Apoptotic cell

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state profile |
| Exists in / context | Source animal cell death |
| Biology / relations | Existing cell undergoing active caspase-driven dismantling and clearance. |
| State variables | caspases; integrity; DNA fragmentation; clearance |
| Evidence | [C18 §218](../chapters/18_cell_cycle.md#218-apoptosis-contributes-to-development), [C18 §223](../chapters/18_cell_cycle.md#223-apoptotic-morphology), [C18 §224](../chapters/18_cell_cycle.md#224-apoptosis-usually-preserves-membrane-integrity-long-enough-for-clearance), [C18 §229](../chapters/18_cell_cycle.md#229-caspase-cascade) |
| Uncertainty / display limits | Fading a display is not death; apoptosis is not necrosis. |

<a id="e-cancer_cell"></a>

### E.cancer_cell — Cancer cell

| Field | Record |
|---|---|
| Kind / scoped aliases | cell state/lineage role |
| Exists in / context | Named tumor/clone/tissue context |
| Biology / relations | Mutant lineage escaping normal constraints with source malignant behaviors. |
| State variables | drivers/passengers; growth; survival; adhesion; invasion |
| Evidence | [C20 §203](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#203-cancer), [C20 §205](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#205-cancers-two-defining-heritable-cell-behaviors), [C20 §235](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#235-cancer-evolves-clonally), [C20 §236](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#236-tumor-subclones) |
| Uncertainty / display limits | Fast proliferation alone is insufficient; every mutation is not a driver. |
