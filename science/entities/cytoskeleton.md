# Cytoskeleton

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 37 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-cytoskeleton"></a>

### E.cytoskeleton — Cytoskeleton

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/network |
| Exists in / context | Source eukaryotic cell contexts |
| Biology / relations | Cooperative filament/accessory system organizing mechanics, intracellular transport and shape. |
| State variables | filament membership; links; tension; polarity organization |
| Evidence | [C17 §1](../chapters/17_cytoskeleton.md#1-cytoskeleton), [C17 §2](../chapters/17_cytoskeleton.md#2-the-cytoskeleton-is-dynamic), [C17 §3](../chapters/17_cytoskeleton.md#3-three-filament-systems), [C17 §7](../chapters/17_cytoskeleton.md#7-filament-system-cooperation) |
| Uncertainty / display limits | Not static scaffolding; filament systems differ. |

<a id="e-actin"></a>

### E.actin — Actin

| Field | Record |
|---|---|
| Kind / scoped aliases | family; G-actin/free and polymer-bound forms |
| Exists in / context | Source actin systems |
| Biology / relations | Globular subunit with nucleotide state; incorporated subunits belong to filaments without duplication. |
| State variables | ATP/ADP; free/polymer-bound; binding proteins |
| Evidence | [C17 §146](../chapters/17_cytoskeleton.md#146-actin-filament-architecture), [C17 §151](../chapters/17_cytoskeleton.md#151-actin-polymerizes-at-both-ends), [C17 §152](../chapters/17_cytoskeleton.md#152-actin-nucleotide), [C17 §153](../chapters/17_cytoskeleton.md#153-actin-atp-hydrolysis) |
| Uncertainty / display limits | Polymer fraction is contextual; not all cellular actin is filamentous. |

<a id="e-actin_filament"></a>

### E.actin_filament — Actin filament

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; F-actin |
| Exists in / context | Cortex, protrusions, contraction and division contexts |
| Biology / relations | Polar helical actin polymer; ends, subunit turnover and anchors remain persistent. |
| State variables | plus/minus; nucleotide profile; length; branches; anchors |
| Evidence | [C17 §146](../chapters/17_cytoskeleton.md#146-actin-filament-architecture), [C17 §147](../chapters/17_cytoskeleton.md#147-actin-polarity), [C17 §151](../chapters/17_cytoskeleton.md#151-actin-polymerizes-at-both-ends), [C17 §155](../chapters/17_cytoskeleton.md#155-actin-treadmilling), [C17 §156](../chapters/17_cytoskeleton.md#156-constant-length-treadmilling) |
| Uncertainty / display limits | Treadmilling is not whole-filament translation. |

<a id="e-tubulin"></a>

### E.tubulin — αβ-tubulin heterodimer

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family; alpha/beta tubulin |
| Exists in / context | Microtubule assembly context |
| Biology / relations | Oriented heterodimer forms protofilaments; β-tubulin nucleotide state affects source end dynamics. |
| State variables | nucleotide; free/polymer-bound; orientation |
| Evidence | [C17 §47](../chapters/17_cytoskeleton.md#47-microtubule-subunit), [C17 §48](../chapters/17_cytoskeleton.md#48-microtubule-wall), [C17 §50](../chapters/17_cytoskeleton.md#50-tubulin-orientation), [C17 §70](../chapters/17_cytoskeleton.md#70-tubulin-gtp-state), [C17 §71](../chapters/17_cytoskeleton.md#71-gtp-hydrolysis-after-polymerization) |
| Uncertainty / display limits | α/β heterodimer is not γ-tubulin nucleation machinery. |

<a id="e-microtubule"></a>

### E.microtubule — Microtubule

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Cytoplasmic, spindle and ciliary contexts qualified |
| Biology / relations | Polar hollow polymer of oriented tubulin protofilaments. |
| State variables | ends; length; cap-state profile; growth/shrinkage; anchors |
| Evidence | [C17 §48](../chapters/17_cytoskeleton.md#48-microtubule-wall), [C17 §49](../chapters/17_cytoskeleton.md#49-protofilament-count), [C17 §51](../chapters/17_cytoskeleton.md#51-microtubule-polarity), [C17 §52](../chapters/17_cytoskeleton.md#52-microtubule-plus-end), [C17 §53](../chapters/17_cytoskeleton.md#53-microtubule-minus-end), [C17 §68](../chapters/17_cytoskeleton.md#68-dynamic-instability) |
| Uncertainty / display limits | Source protofilament count is contextual; GTP cap is terminal chemistry, not a separate object. |

<a id="e-intermediate_filament"></a>

### E.intermediate_filament — Intermediate filament

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family |
| Exists in / context | Source animal cytoplasmic and nuclear systems |
| Biology / relations | Nonpolar tensile polymer assembled through coiled-coil dimers and antiparallel tetramers. |
| State variables | subtype; assembly; crosslinks; strain |
| Evidence | [C17 §16](../chapters/17_cytoskeleton.md#16-intermediate-filament-monomer-architecture), [C17 §17](../chapters/17_cytoskeleton.md#17-coiled-coil-dimer-formation), [C17 §18](../chapters/17_cytoskeleton.md#18-antiparallel-tetramer-formation), [C17 §20](../chapters/17_cytoskeleton.md#20-intermediate-filaments-are-nonpolar), [C17 §26](../chapters/17_cytoskeleton.md#26-four-intermediate-filament-classes) |
| Uncertainty / display limits | No invented plus/minus direction or motor track behavior. |

<a id="e-lamin"></a>

### E.lamin — Nuclear lamin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source nuclear lamina |
| Biology / relations | Intermediate-filament protein whose assembly changes with mitotic phosphorylation or apoptotic cleavage. |
| State variables | phosphorylation; cleavage; assembly |
| Evidence | [C17 §31](../chapters/17_cytoskeleton.md#31-nuclear-lamins), [C17 §36](../chapters/17_cytoskeleton.md#36-lamin-phosphorylation-disassembles-lamina), [C17 §37](../chapters/17_cytoskeleton.md#37-lamin-dephosphorylation-reassembles-lamina), [C18 §230](../chapters/18_cell_cycle.md#230-lamin-cleavage) |
| Uncertainty / display limits | Mitotic disassembly and irreversible apoptotic cleavage are different processes. |

<a id="e-nuclear_lamina"></a>

### E.nuclear_lamina — Nuclear lamina

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/network |
| Exists in / context | Under inner nuclear membrane |
| Biology / relations | Lamin meshwork supporting envelope and chromatin interactions. |
| State variables | lamin membership; links; integrity; phase |
| Evidence | [C15 §59](../chapters/15_intracellular_compartments_protein_transport.md#59-nuclear-lamina), [C17 §15](../chapters/17_cytoskeleton.md#15-nuclear-lamina), [C17 §35](../chapters/17_cytoskeleton.md#35-nuclear-lamina-organization), [C17 §39](../chapters/17_cytoskeleton.md#39-chromatinlamina-interaction) |
| Uncertainty / display limits | Not another membrane bilayer. |

<a id="e-keratin"></a>

### E.keratin — Keratin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source epithelial intermediate filaments |
| Biology / relations | Intermediate-filament proteins supporting epithelial mechanics through desmosomes. |
| State variables | subtype; polymer membership; anchorage |
| Evidence | [C17 §27](../chapters/17_cytoskeleton.md#27-keratin-filaments), [C17 §28](../chapters/17_cytoskeleton.md#28-keratin-diversity), [C17 §32](../chapters/17_cytoskeleton.md#32-keratin-mechanical-continuity-model), [C20 §114](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#114-desmosome-architecture) |
| Uncertainty / display limits | Not all intermediate filaments are keratin. |

<a id="e-vimentin_related"></a>

### E.vimentin_related — Vimentin and related proteins

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source connective-tissue, muscle and glial classification |
| Biology / relations | Intermediate-filament family with cell-type-dependent members. |
| State variables | member; polymer membership; cell type |
| Evidence | [C17 §26](../chapters/17_cytoskeleton.md#26-four-intermediate-filament-classes), [C17 §29](../chapters/17_cytoskeleton.md#29-vimentin-related-filaments) |
| Uncertainty / display limits | Family does not mean identical proteins across all listed cells. |

<a id="e-neurofilament"></a>

### E.neurofilament — Neurofilament

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source neuronal axons |
| Biology / relations | Intermediate-filament system reinforcing axons. |
| State variables | subunit composition; assembly; distribution |
| Evidence | [C17 §30](../chapters/17_cytoskeleton.md#30-neurofilaments) |
| Uncertainty / display limits | Not an axonal microtubule. |

<a id="e-kinesin"></a>

### E.kinesin — Kinesin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Microtubule-dependent transport and dynamics |
| Biology / relations | ATP-dependent family; most source transport kinesins move plus-endward; kinesin-13 is a dynamics example. |
| State variables | subtype; head binding; ATP; cargo/adaptor; direction |
| Evidence | [C17 §92](../chapters/17_cytoskeleton.md#92-kinesin-13-source-category), [C17 §100](../chapters/17_cytoskeleton.md#100-kinesin-direction), [C17 §102](../chapters/17_cytoskeleton.md#102-motor-architecture), [C17 §104](../chapters/17_cytoskeleton.md#104-motor-tail-controls-cargo-specificity), [C17 §107](../chapters/17_cytoskeleton.md#107-er-positioning-by-kinesin) |
| Uncertainty / display limits | Do not universalize direction, speed, step or processivity to every family member. |

<a id="e-cytoplasmic_dynein"></a>

### E.cytoplasmic_dynein — Cytoplasmic dynein

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source cytoplasmic cargo/spindle mechanics |
| Biology / relations | ATP-dependent minus-end-directed motor with cargo-adaptor relationships. |
| State variables | head/nucleotide; adaptor; cargo; track; force |
| Evidence | [C17 §101](../chapters/17_cytoskeleton.md#101-cytoplasmic-dynein-direction), [C17 §105](../chapters/17_cytoskeleton.md#105-dynein-adaptor-dependence), [C17 §108](../chapters/17_cytoskeleton.md#108-golgi-positioning-by-dynein), [C18 §168](../chapters/18_cell_cycle.md#168-anaphase-b-cortical-pulling) |
| Uncertainty / display limits | Direction is track-relative, not always toward nucleus. |

<a id="e-ciliary_dynein"></a>

### E.ciliary_dynein — Ciliary dynein

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Motile eukaryotic axonemes |
| Biology / relations | Specialized dynein generates relative doublet sliding that constraints convert into bending. |
| State variables | ATP; doublet binding; side-specific activation |
| Evidence | [C17 §136](../chapters/17_cytoskeleton.md#136-ciliary-dynein), [C17 §137](../chapters/17_cytoskeleton.md#137-dynein-sliding), [C17 §138](../chapters/17_cytoskeleton.md#138-sliding-to-bending-conversion), [C17 §139](../chapters/17_cytoskeleton.md#139-dynein-activation-must-be-asymmetric) |
| Uncertainty / display limits | Distinct from cytoplasmic dynein; microtubules do not contract. |

<a id="e-myosin"></a>

### E.myosin — Myosin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Actin-based source transport/contraction |
| Biology / relations | ATP-driven actin motor family with subtype-specific assemblies and cargo roles. |
| State variables | subtype; nucleotide; actin; cargo/filament |
| Evidence | [C17 §171](../chapters/17_cytoskeleton.md#171-myosin), [C17 §172](../chapters/17_cytoskeleton.md#172-myosin-direction), [C17 §173](../chapters/17_cytoskeleton.md#173-myosin-i), [C17 §175](../chapters/17_cytoskeleton.md#175-myosin-ii) |
| Uncertainty / display limits | Source plus-end direction applies to main examples, not every possible myosin. |

<a id="e-myosin_ii_filament"></a>

### E.myosin_ii_filament — Bipolar myosin-II filament

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; thick filament in muscle |
| Exists in / context | Source muscle/nonmuscle contraction |
| Biology / relations | Opposed arrays of myosin-II heads pull oppositely oriented actin. |
| State variables | heads; ATP states; actin overlap; force |
| Evidence | [C17 §175](../chapters/17_cytoskeleton.md#175-myosin-ii), [C17 §210](../chapters/17_cytoskeleton.md#210-bipolar-myosin-filament), [C17 §211](../chapters/17_cytoskeleton.md#211-bipolar-contractile-logic), [C17 §212](../chapters/17_cytoskeleton.md#212-nonmuscle-contractile-bundles), [C17 §222](../chapters/17_cytoskeleton.md#222-z-disc) |
| Uncertainty / display limits | Molecule, thick filament and sarcomere are different counts. |

<a id="e-spectrin"></a>

### E.spectrin — Spectrin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source erythrocyte cortex |
| Biology / relations | Flexible protein dimers/tetramers linked through actin and membrane attachments. |
| State variables | oligomerization; cortical links; deformation |
| Evidence | [C11 §250](../chapters/11_membrane_structure.md#250-spectrin), [C11 §251](../chapters/11_membrane_structure.md#251-spectrin-dimer), [C11 §253](../chapters/11_membrane_structure.md#253-spectrin-tetramers), [C11 §254](../chapters/11_membrane_structure.md#254-actin-in-rbc-cortex), [C11 §256](../chapters/11_membrane_structure.md#256-cortex-to-membrane-anchoring) |
| Uncertainty / display limits | RBC cortex is not just a lipid shape. |

<a id="e-cell_cortex"></a>

### E.cell_cortex — Cell cortex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/network |
| Exists in / context | Beneath source animal plasma membrane |
| Biology / relations | Actin-rich supporting/contractile network; erythrocyte spectrin context distinguished. |
| State variables | membrane links; actin/myosin; tension; remodeling |
| Evidence | [C11 §245](../chapters/11_membrane_structure.md#245-cell-cortex), [C11 §254](../chapters/11_membrane_structure.md#254-actin-in-rbc-cortex), [C17 §176](../chapters/17_cytoskeleton.md#176-cell-cortex), [C17 §177](../chapters/17_cytoskeleton.md#177-red-blood-cell-cortex-source-example) |
| Uncertainty / display limits | Not extracellular cell wall. |

<a id="e-centrosome"></a>

### E.centrosome — Centrosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; source animal MTOC |
| Exists in / context | Many animal cells; cycle stage matters |
| Biology / relations | Centrioles plus surrounding nucleation matrix organizing microtubules. |
| State variables | duplication; position; γ-tubulin complexes; asters |
| Evidence | [C17 §58](../chapters/17_cytoskeleton.md#58-centrosome), [C17 §59](../chapters/17_cytoskeleton.md#59-centrosome-composition), [C17 §63](../chapters/17_cytoskeleton.md#63-centrioles-do-not-nucleate-centrosomal-microtubules-directly), [C18 §125](../chapters/18_cell_cycle.md#125-centrosome-duplication) |
| Uncertainty / display limits | Not centromere; not universally required for a bipolar spindle. |

<a id="e-centriole"></a>

### E.centriole — Centriole

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source centrosome/basal-body contexts |
| Biology / relations | Structural member of centrosome; basal-body use has a distinct functional context. |
| State variables | pair membership; duplication; basal-body role |
| Evidence | [C17 §59](../chapters/17_cytoskeleton.md#59-centrosome-composition), [C17 §63](../chapters/17_cytoskeleton.md#63-centrioles-do-not-nucleate-centrosomal-microtubules-directly), [C17 §64](../chapters/17_cytoskeleton.md#64-basal-bodies-differ-functionally-from-centrosomal-centrioles) |
| Uncertainty / display limits | Does not directly nucleate all centrosomal microtubules. |

<a id="e-spindle_pole_body"></a>

### E.spindle_pole_body — Spindle-pole body

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; yeast MTOC |
| Exists in / context | Source budding yeast |
| Biology / relations | Nuclear-envelope-embedded organizing center. |
| State variables | envelope association; nucleation; cycle state |
| Evidence | [C17 §65](../chapters/17_cytoskeleton.md#65-yeast-spindle-pole-body) |
| Uncertainty / display limits | Do not substitute animal centrosome architecture. |

<a id="e-spindle"></a>

### E.spindle — Mitotic/meiotic spindle

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/network |
| Exists in / context | Dividing source eukaryotic cells |
| Biology / relations | Dynamic microtubule/motor machinery; kinetochore, interpolar and astral roles depend on context. |
| State variables | poles; filaments; attachments; length; forces; checkpoint |
| Evidence | [C18 §129](../chapters/18_cell_cycle.md#129-mitotic-spindle), [C18 §130](../chapters/18_cell_cycle.md#130-mitotic-microtubules-are-unusually-dynamic), [C18 §134](../chapters/18_cell_cycle.md#134-spindle-is-a-dynamic-meshwork), [C19 §61](../chapters/19_sexual_reproduction_genetics.md#61-sister-kinetochores-function-together-in-meiosis-i), [C19 §67](../chapters/19_sexual_reproduction_genetics.md#67-meiosis-ii-kinetochore-logic) |
| Uncertainty / display limits | Meiotic attachment rules differ from mitosis; no fixed rigid rods. |

<a id="e-basal_body"></a>

### E.basal_body — Basal body

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/role |
| Exists in / context | Ciliary/flagellar base |
| Biology / relations | Organizing structure for source eukaryotic cilium/flagellum microtubules. |
| State variables | cilium association; nucleation; anchorage |
| Evidence | [C17 §64](../chapters/17_cytoskeleton.md#64-basal-bodies-differ-functionally-from-centrosomal-centrioles), [C17 §128](../chapters/17_cytoskeleton.md#128-basal-body) |
| Uncertainty / display limits | Functional role can be related to a centriole; do not double-count the same structure. |

<a id="e-cilium"></a>

### E.cilium — Cilium

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Motile or primary sensory contexts |
| Biology / relations | Membrane-covered microtubule projection; motile and sensory states/types require context. |
| State variables | axoneme; basal body; sensory/motile role; beat |
| Evidence | [C17 §126](../chapters/17_cytoskeleton.md#126-cilia), [C17 §129](../chapters/17_cytoskeleton.md#129-motile-cilia-function), [C17 §142](../chapters/17_cytoskeleton.md#142-primary-cilium) |
| Uncertainty / display limits | Source 9+2 motile architecture is not a default for every primary cilium. |

<a id="e-axoneme"></a>

### E.axoneme — Motile axoneme

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source eukaryotic motile cilia/flagella |
| Biology / relations | Doublets, central pair, dyneins and constraints produce regulated bending. |
| State variables | doublet links; dynein activity; bend; beat phase |
| Evidence | [C17 §134](../chapters/17_cytoskeleton.md#134-eukaryotic-92-axoneme), [C17 §136](../chapters/17_cytoskeleton.md#136-ciliary-dynein), [C17 §138](../chapters/17_cytoskeleton.md#138-sliding-to-bending-conversion), [C17 §140](../chapters/17_cytoskeleton.md#140-ciliary-waveform-control) |
| Uncertainty / display limits | Not bacterial flagellum or all sensory-cilium architecture. |

<a id="e-bacterial_flagellum"></a>

### E.bacterial_flagellum — Bacterial flagellum

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source prokaryotic motility context |
| Biology / relations | Structurally distinct motility machinery with proton-gradient-powered rotation in the cited example. |
| State variables | gradient coupling; rotation; cell attachment |
| Evidence | [C14 §71](../chapters/14_energy_generation_mitochondria_chloroplasts.md#71-bacterial-flagellar-work), [C17 §135](../chapters/17_cytoskeleton.md#135-bacterial-flagella-are-different) |
| Uncertainty / display limits | Not actomyosin or eukaryotic axoneme sliding. |

<a id="e-formin"></a>

### E.formin — Formin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source actin nucleation contexts |
| Biology / relations | Promotes unbranched filaments for filopodia and contractile ring examples. |
| State variables | nucleation; plus-end association; activity |
| Evidence | [C17 §164](../chapters/17_cytoskeleton.md#164-formin), [C17 §195](../chapters/17_cytoskeleton.md#195-formin-built-filopodium), [C17 §196](../chapters/17_cytoskeleton.md#196-formin-in-contractile-ring) |
| Uncertainty / display limits | Not the branched ARP-complex architecture. |

<a id="e-lamellipodium"></a>

### E.lamellipodium — Lamellipodium

| Field | Record |
|---|---|
| Kind / scoped aliases | region/assembly |
| Exists in / context | Migrating source cells |
| Biology / relations | Broad protrusion supported by branched actin network. |
| State variables | front location; branches; turnover; adhesion |
| Evidence | [C17 §180](../chapters/17_cytoskeleton.md#180-lamellipodium), [C17 §193](../chapters/17_cytoskeleton.md#193-arp-built-lamellipodium), [C17 §194](../chapters/17_cytoskeleton.md#194-lamellipodial-treadmilling) |
| Uncertainty / display limits | Not a filopodium; protrusion alone is not net migration. |

<a id="e-filopodium"></a>

### E.filopodium — Filopodium

| Field | Record |
|---|---|
| Kind / scoped aliases | region/assembly |
| Exists in / context | Source protrusive cells/growth cones |
| Biology / relations | Narrow protrusion with bundled straight actin. |
| State variables | bundle; length; growth; attachment |
| Evidence | [C17 §181](../chapters/17_cytoskeleton.md#181-filopodium), [C17 §195](../chapters/17_cytoskeleton.md#195-formin-built-filopodium) |
| Uncertainty / display limits | Dimensions and filament count require cell context. |

<a id="e-contractile_ring"></a>

### E.contractile_ring — Contractile ring

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source animal cytokinesis |
| Biology / relations | Transient membrane-associated actin/myosin machinery under spindle/RhoA control. |
| State variables | assembly; attachment; constriction; disassembly |
| Evidence | [C18 §183](../chapters/18_cell_cycle.md#183-rhoa), [C18 §184](../chapters/18_cell_cycle.md#184-contractile-ring-composition), [C18 §185](../chapters/18_cell_cycle.md#185-contractile-ring-is-membrane-associated), [C18 §187](../chapters/18_cell_cycle.md#187-contractile-ring-is-transient) |
| Uncertainty / display limits | Plant cytokinesis uses a different mechanism. |

<a id="e-sarcomere"></a>

### E.sarcomere — Sarcomere

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source striated muscle |
| Biology / relations | Repeating myofibril unit whose filament overlap changes during contraction. |
| State variables | Z-disc positions; thin/thick filaments; overlap; calcium |
| Evidence | [C17 §218](../chapters/17_cytoskeleton.md#218-sarcomere), [C17 §220](../chapters/17_cytoskeleton.md#220-thin-filament), [C17 §221](../chapters/17_cytoskeleton.md#221-thick-filament), [C17 §222](../chapters/17_cytoskeleton.md#222-z-disc), [C17 §223](../chapters/17_cytoskeleton.md#223-sliding-filament-mechanism) |
| Uncertainty / display limits | Sarcomere shortening does not shorten actin or myosin filaments. |

<a id="e-myofibril"></a>

### E.myofibril — Myofibril

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source skeletal muscle fiber |
| Biology / relations | Contractile structure built from repeating sarcomeres. |
| State variables | sarcomere membership; alignment; length |
| Evidence | [C17 §216](../chapters/17_cytoskeleton.md#216-myofibril), [C17 §218](../chapters/17_cytoskeleton.md#218-sarcomere) |
| Uncertainty / display limits | Not a muscle cell or one myosin filament. |

<a id="e-troponin"></a>

### E.troponin — Troponin

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source skeletal-muscle thin-filament regulation |
| Biology / relations | Calcium-responsive complex associated with tropomyosin. |
| State variables | calcium occupancy; tropomyosin association |
| Evidence | [C17 §244](../chapters/17_cytoskeleton.md#244-troponin), [C17 §245](../chapters/17_cytoskeleton.md#245-ca2-activation-of-skeletal-muscle) |
| Uncertainty / display limits | Smooth-muscle activation is not the same mechanism. |

<a id="e-tropomyosin"></a>

### E.tropomyosin — Tropomyosin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source actin side binding and muscle regulation |
| Biology / relations | Actin-associated protein controlling myosin-site access in the skeletal-muscle example. |
| State variables | actin position; troponin association |
| Evidence | [C17 §170](../chapters/17_cytoskeleton.md#170-tropomyosin-as-side-binding-protein), [C17 §243](../chapters/17_cytoskeleton.md#243-tropomyosin), [C17 §245](../chapters/17_cytoskeleton.md#245-ca2-activation-of-skeletal-muscle) |
| Uncertainty / display limits | Calcium does not substitute for ATP motor cycling. |

<a id="e-sarcoplasmic_reticulum"></a>

### E.sarcoplasmic_reticulum — Sarcoplasmic reticulum

| Field | Record |
|---|---|
| Kind / scoped aliases | specialized ER domain; SR |
| Exists in / context | Muscle cells in source |
| Biology / relations | Calcium-storing specialized ER around myofibrils. |
| State variables | calcium; release channels; pumps; connections |
| Evidence | [C12 §142](../chapters/12_transport_across_cell_membranes.md#142-sarcoplasmic-reticulum), [C17 §239](../chapters/17_cytoskeleton.md#239-sarcoplasmic-reticulum), [C17 §241](../chapters/17_cytoskeleton.md#241-sarcoplasmic-ca2-release) |
| Uncertainty / display limits | Specialization of ER, not an independent unrelated membrane lineage. |

<a id="e-t_tubule"></a>

### E.t_tubule — T tubule

| Field | Record |
|---|---|
| Kind / scoped aliases | plasma-membrane region |
| Exists in / context | Source skeletal muscle |
| Biology / relations | Plasma-membrane invagination bringing electrical excitation inward. |
| State variables | membrane continuity; voltage; SR coupling |
| Evidence | [C17 §238](../chapters/17_cytoskeleton.md#238-t-tubules), [C17 §240](../chapters/17_cytoskeleton.md#240-excitation-reaches-myofibrils-rapidly), [C17 §242](../chapters/17_cytoskeleton.md#242-skeletal-source-linkage-model) |
| Uncertainty / display limits | Lumen is not cytosol; source coupling model remains contextual. |

<a id="e-phragmoplast"></a>

### E.phragmoplast — Phragmoplast

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source plant cytokinesis |
| Biology / relations | Microtubule organization guiding Golgi-derived vesicles toward cell-plate formation. |
| State variables | filaments; vesicle delivery; division plane |
| Evidence | [C18 §193](../chapters/18_cell_cycle.md#193-phragmoplast), [C18 §194](../chapters/18_cell_cycle.md#194-golgi-derived-vesicles) |
| Uncertainty / display limits | Not an animal contractile ring. |
