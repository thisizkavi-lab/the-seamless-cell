# Cell cycle mitosis

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 19 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-cell_cycle_progression"></a>

### P.cell_cycle_progression — Cell-cycle progression

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cycling cell, genome and source cyclin–Cdk/control machinery |
| Required state / input | Organism/cell-specific proliferative state |
| WorldState change / output | Growth, DNA replication, chromosome segregation and division occur in coordinated source phases with checkpoints. |
| Trigger / termination | Source Start/mitogen conditions; division, arrest or exit |
| Energy / time / noise / limits | Compose subprocesses; G1/S/G2/M is not every embryonic cycle and G0 is not a compulsory timed phase. |
| Evidence | [C18 §1](../chapters/18_cell_cycle.md#1-cell-cycle), [C18 §2](../chapters/18_cell_cycle.md#2-genetic-continuity-is-the-central-requirement), [C18 §3](../chapters/18_cell_cycle.md#3-cell-growth-must-accompany-division), [C18 §4](../chapters/18_cell_cycle.md#4-cell-cycle-duration-varies-greatly), [C18 §9](../chapters/18_cell_cycle.md#9-four-canonical-phases), [C18 §10](../chapters/18_cell_cycle.md#10-interphase), [C18 §14](../chapters/18_cell_cycle.md#14-m-phase), [C18 §19](../chapters/18_cell_cycle.md#19-embryonic-cleavage-divisions), [C18 §20](../chapters/18_cell_cycle.md#20-cell-size-during-cleavage), [C18 §22](../chapters/18_cell_cycle.md#22-ordering-constraint), [C18 §23](../chapters/18_cell_cycle.md#23-checkpoint-concept), [C18 §24](../chapters/18_cell_cycle.md#24-three-main-control-transitions), [C18 §25](../chapters/18_cell_cycle.md#25-start-transition), [C18 §27](../chapters/18_cell_cycle.md#27-g0), [C18 §28](../chapters/18_cell_cycle.md#28-g2-to-m-checkpoint-logic), [C18 §29](../chapters/18_cell_cycle.md#29-spindle-assembly-checkpoint-logic) |

<a id="p-start_control"></a>

### P.start_control — G1/Start commitment control

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | Source cyclins/Cdks, Rb and transcriptional machinery |
| Required state / input | Cell-appropriate mitogen and inhibitory state |
| WorldState change / output | Rb-related repression is relieved through phosphorylation in source animal model, allowing proliferation-associated gene expression. |
| Trigger / termination | Source mitogen/control inputs; commitment or arrest/quiescence |
| Energy / time / noise / limits | Source transcription factors remain unnamed where omitted; terminal differentiation and reversible G0 differ. |
| Evidence | [C18 §76](../chapters/18_cell_cycle.md#76-early-g1-is-a-low-cdk-state), [C18 §78](../chapters/18_cell_cycle.md#78-mitogens), [C18 §79](../chapters/18_cell_cycle.md#79-mitogen-deprivation), [C18 §80](../chapters/18_cell_cycle.md#80-g0-duration), [C18 §81](../chapters/18_cell_cycle.md#81-terminal-differentiation), [C18 §83](../chapters/18_cell_cycle.md#83-liver-cell-g0-source-example), [C18 §85](../chapters/18_cell_cycle.md#85-rb-protein), [C18 §86](../chapters/18_cell_cycle.md#86-rb-suppresses-transcription), [C18 §88](../chapters/18_cell_cycle.md#88-rb-phosphorylation), [C18 §89](../chapters/18_cell_cycle.md#89-s-phase-gene-expression) |

<a id="p-dna_damage_checkpoint"></a>

### P.dna_damage_checkpoint — DNA-damage/replication-stress checkpoint

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | Damaged/replicating DNA and source checkpoint proteins including p53/p21 or Cdc25 route |
| Required state / input | Appropriate damage/stress signal and responsive cell |
| WorldState change / output | Cdk activity/progression is inhibited, permitting repair; severe unresolved damage can contribute to apoptosis. |
| Trigger / termination | Damage or replication stress; repair/release, persistent arrest or death |
| Energy / time / noise / limits | Distinct checkpoint branches; no invented damage threshold or guaranteed repair. |
| Evidence | [C18 §28](../chapters/18_cell_cycle.md#28-g2-to-m-checkpoint-logic), [C18 §90](../chapters/18_cell_cycle.md#90-dna-damage-can-arrest-g1), [C18 §91](../chapters/18_cell_cycle.md#91-p53), [C18 §92](../chapters/18_cell_cycle.md#92-p21), [C18 §93](../chapters/18_cell_cycle.md#93-p21-targets), [C18 §94](../chapters/18_cell_cycle.md#94-purpose-of-p53p21-arrest), [C18 §95](../chapters/18_cell_cycle.md#95-severe-dna-damage-can-lead-to-apoptosis), [C18 §105](../chapters/18_cell_cycle.md#105-replication-stress-checkpoint), [C18 §106](../chapters/18_cell_cycle.md#106-cdc25-inhibition-delays-mitosis) |

<a id="p-mitotic_entry"></a>

### P.mitotic_entry — Mitotic entry switch

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | M-cyclin/Cdk, Wee1, Cdc25 and source phosphatase control |
| Required state / input | Source cyclin availability and inhibitory checkpoint state |
| WorldState change / output | Activating/deinhibitory feedback changes M-Cdk activity and mitotic substrate phosphorylation. |
| Trigger / termination | Source control-state transition; regulated exit/inhibition |
| Energy / time / noise / limits | Cyclin abundance alone does not determine Cdk activity; PP2A/B55 target context matters. |
| Evidence | [C18 §31](../chapters/18_cell_cycle.md#31-cdks), [C18 §32](../chapters/18_cell_cycle.md#32-cdk-abundance-versus-activity), [C18 §33](../chapters/18_cell_cycle.md#33-cyclins), [C18 §34](../chapters/18_cell_cycle.md#34-cyclin-abundance-oscillates), [C18 §40](../chapters/18_cell_cycle.md#40-m-cdk), [C18 §51](../chapters/18_cell_cycle.md#51-cdk-activity-requires-more-than-cyclin-binding), [C18 §52](../chapters/18_cell_cycle.md#52-wee1), [C18 §53](../chapters/18_cell_cycle.md#53-cdc25), [C18 §55](../chapters/18_cell_cycle.md#55-m-cdk-positive-feedback), [C18 §56](../chapters/18_cell_cycle.md#56-m-cdk-activation-is-self-reinforcing), [C18 §59](../chapters/18_cell_cycle.md#59-protein-phosphatases-reverse-cdk-effects), [C18 §60](../chapters/18_cell_cycle.md#60-pp2a-family), [C18 §61](../chapters/18_cell_cycle.md#61-pp2a-b55), [C18 §62](../chapters/18_cell_cycle.md#62-m-cdk-suppresses-pp2a-b55-in-early-mitosis) |

<a id="p-chromosome_condensation"></a>

### P.chromosome_condensation — Mitotic chromosome condensation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Chromatin, condensin/cohesin and source mitotic regulators |
| Required state / input | Replicated chromosome and mitotic state |
| WorldState change / output | Chromatin organization becomes more compact while sister relationship and DNA continuity are preserved. |
| Trigger / termination | Source mitotic entry; exit/decondensation |
| Energy / time / noise / limits | Not a universal ladder of obligatory 30-nm fibers; loop-model evidence retains model status. |
| Evidence | [C18 §107](../chapters/18_cell_cycle.md#107-m-phase-reorganizes-almost-the-entire-cell), [C18 §109](../chapters/18_cell_cycle.md#109-m-cdk-prepares-chromosomes), [C18 §112](../chapters/18_cell_cycle.md#112-sister-chromatids), [C18 §113](../chapters/18_cell_cycle.md#113-cohesin), [C18 §114](../chapters/18_cell_cycle.md#114-cohesin-loading), [C18 §116](../chapters/18_cell_cycle.md#116-aneuploidy), [C18 §117](../chapters/18_cell_cycle.md#117-condensin), [C18 §119](../chapters/18_cell_cycle.md#119-condensin-loop-model), [C18 §120](../chapters/18_cell_cycle.md#120-partial-cohesin-removal-from-chromosome-arms), [C05 §122](../chapters/05_dna_chromosomes.md#122-chromatin-beyond-nucleosomes), [C05 §123](../chapters/05_dna_chromosomes.md#123-sources-chromatin-fiber-language), [C05 §124](../chapters/05_dna_chromosomes.md#124-figure-526-includes-a-30-nm-chromatin-fiber-stage), [C05 §125](../chapters/05_dna_chromosomes.md#125-source-scale-dnanucleosomemitotic-hierarchy) |

<a id="p-centrosome_duplication"></a>

### P.centrosome_duplication — Centrosome duplication/separation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Centrosome-bearing cell and source centriole/pericentriolar components |
| Required state / input | Appropriate cell-cycle state |
| WorldState change / output | Organizing material duplicates and separates to contribute spindle poles. |
| Trigger / termination | Source cell-cycle regulation; pole establishment |
| Energy / time / noise / limits | Does not replicate DNA or guarantee every cell has centrosomes; spindle assembly can occur without them. |
| Evidence | [C18 §125](../chapters/18_cell_cycle.md#125-centrosome-duplication), [C18 §126](../chapters/18_cell_cycle.md#126-cell-cycle-trigger-for-centrosome-duplication), [C18 §127](../chapters/18_cell_cycle.md#127-two-centrosomes-form-spindle-poles), [C18 §128](../chapters/18_cell_cycle.md#128-centrosomes-are-helpful-but-not-universally-required-for-bipolar-spindle-formation), [C17 §58](../chapters/17_cytoskeleton.md#58-centrosome), [C17 §59](../chapters/17_cytoskeleton.md#59-centrosome-composition), [C17 §63](../chapters/17_cytoskeleton.md#63-centrioles-do-not-nucleate-centrosomal-microtubules-directly), [C17 §66](../chapters/17_cytoskeleton.md#66-plant-microtubule-organization) |

<a id="p-spindle_assembly"></a>

### P.spindle_assembly — Mitotic spindle assembly

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source microtubules, motors, organizing sites and chromosomes |
| Required state / input | Mitotic state with appropriate nucleation/organization |
| WorldState change / output | Bipolar spindle organization and distinct microtubule interactions emerge. |
| Trigger / termination | Mitotic entry/organization; stable attachment or disassembly |
| Energy / time / noise / limits | Dynamic construction; no prebuilt rigid spindle shell or compulsory centrosome in every system. |
| Evidence | [C18 §110](../chapters/18_cell_cycle.md#110-m-cdk-promotes-spindle-assembly), [C18 §122](../chapters/18_cell_cycle.md#122-two-transient-cytoskeletal-machines), [C18 §125](../chapters/18_cell_cycle.md#125-centrosome-duplication), [C18 §128](../chapters/18_cell_cycle.md#128-centrosomes-are-helpful-but-not-universally-required-for-bipolar-spindle-formation), [C18 §129](../chapters/18_cell_cycle.md#129-mitotic-spindle), [C18 §130](../chapters/18_cell_cycle.md#130-mitotic-microtubules-are-unusually-dynamic), [C18 §135](../chapters/18_cell_cycle.md#135-prophase), [C18 §136](../chapters/18_cell_cycle.md#136-prometaphase-begins-with-nuclear-envelope-breakdown), [C17 §88](../chapters/17_cytoskeleton.md#88-augmin) |

<a id="p-nuclear_envelope_breakdown"></a>

### P.nuclear_envelope_breakdown — Open-mitosis nuclear-envelope breakdown

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nuclear envelope/pore/lamina in source open-mitosis cell |
| Required state / input | Mitotic phosphorylation state |
| WorldState change / output | Envelope barrier/lamina organization changes and spindle gains chromosome access. |
| Trigger / termination | Source mitotic entry; disassembly completion |
| Energy / time / noise / limits | Biological barrier change must be explicit; camera clipping cannot substitute. Do not generalize to every organism's mitosis. |
| Evidence | [C18 §136](../chapters/18_cell_cycle.md#136-prometaphase-begins-with-nuclear-envelope-breakdown), [C18 §137](../chapters/18_cell_cycle.md#137-nuclear-envelope-breakdown-mechanism), [C17 §36](../chapters/17_cytoskeleton.md#36-lamin-phosphorylation-disassembles-lamina) |

<a id="p-kinetochore_attachment"></a>

### P.kinetochore_attachment — Kinetochore attachment and biorientation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Sister kinetochores, spindle microtubules and source error-control machinery |
| Required state / input | Appropriate centromere/kinetochore and spindle state |
| WorldState change / output | Attachments form/remodel; opposite-pole sister attachment with tension is stabilized in source mitosis model. |
| Trigger / termination | Microtubule encounter; corrected biorientation or detachment |
| Energy / time / noise / limits | Kinetochore is not centromere DNA; attachment counts vary between budding yeast and mammals. |
| Evidence | [C18 §138](../chapters/18_cell_cycle.md#138-kinetochore), [C18 §139](../chapters/18_cell_cycle.md#139-centromere-versus-centrosome), [C18 §140](../chapters/18_cell_cycle.md#140-two-kinetochores-per-duplicated-chromosome), [C18 §141](../chapters/18_cell_cycle.md#141-sister-kinetochores-face-opposite-directions), [C18 §142](../chapters/18_cell_cycle.md#142-kinetochore-attachment-remains-dynamic), [C18 §143](../chapters/18_cell_cycle.md#143-mammalian-kinetochore-microtubule-count), [C18 §144](../chapters/18_cell_cycle.md#144-yeast-kinetochore-source-comparison), [C18 §146](../chapters/18_cell_cycle.md#146-bi-orientation), [C18 §147](../chapters/18_cell_cycle.md#147-tension-stabilizes-correct-attachment), [C18 §148](../chapters/18_cell_cycle.md#148-incorrect-same-pole-attachments-are-unstable-without-tension), [C18 §149](../chapters/18_cell_cycle.md#149-metaphase), [C18 §150](../chapters/18_cell_cycle.md#150-metaphase-alignment-is-dynamic) |

<a id="p-spindle_checkpoint"></a>

### P.spindle_checkpoint — Spindle assembly checkpoint

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | Unattached kinetochore signaling and APC/C-regulated anaphase control |
| Required state / input | Source mitotic attachment state |
| WorldState change / output | Unattached kinetochores inhibit anaphase-promoting activity; satisfaction permits source transition. |
| Trigger / termination | Unattached state; checkpoint satisfaction/control release |
| Energy / time / noise / limits | Necessary permission is not alone sufficient for all downstream events; no distance-to-equator trigger. |
| Evidence | [C18 §158](../chapters/18_cell_cycle.md#158-unattached-kinetochore-generates-a-stop-signal), [C18 §159](../chapters/18_cell_cycle.md#159-spindle-assembly-checkpoint), [C18 §160](../chapters/18_cell_cycle.md#160-checkpoint-is-global) |

<a id="p-anaphase_onset"></a>

### P.anaphase_onset — Anaphase onset and cohesion release

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | APC/C, securin, separase, cohesin and sister chromatids |
| Required state / input | Source checkpoint-permissive state |
| WorldState change / output | Securin degradation releases separase; cohesion cleavage permits sister separation while APC/C also drives cyclin destruction. |
| Trigger / termination | Source APC/C activation; substrate cleavage/degradation |
| Energy / time / noise / limits | APC/C has distinct outputs; degradation and cleavage are not interchangeable reactions. |
| Evidence | [C18 §47](../chapters/18_cell_cycle.md#47-apcc), [C18 §48](../chapters/18_cell_cycle.md#48-apcc-destroys-m--and-s-cyclins), [C18 §49](../chapters/18_cell_cycle.md#49-cyclin-destruction-inactivates-cdk), [C18 §153](../chapters/18_cell_cycle.md#153-anaphase-begins-abruptly), [C18 §154](../chapters/18_cell_cycle.md#154-separase), [C18 §155](../chapters/18_cell_cycle.md#155-securin), [C18 §156](../chapters/18_cell_cycle.md#156-apcc-destroys-securin), [C18 §157](../chapters/18_cell_cycle.md#157-apcc-therefore-controls-two-linked-transitions) |

<a id="p-anaphase_a"></a>

### P.anaphase_a — Anaphase A chromosome-to-pole movement

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Attached chromosomes and kinetochore microtubules |
| Required state / input | Released sister cohesion and compatible attachments |
| WorldState change / output | Chromosomes move poleward with kinetochore-microtubule shortening/coupling. |
| Trigger / termination | Anaphase onset; arrival/attachment-state change |
| Energy / time / noise / limits | Do not require an invented motor to explain every depolymerization-coupled force; rate is contextual. |
| Evidence | [C18 §161](../chapters/18_cell_cycle.md#161-chromosome-speed-in-anaphase), [C18 §162](../chapters/18_cell_cycle.md#162-anaphase-a), [C18 §163](../chapters/18_cell_cycle.md#163-anaphase-a-force-source-model), [C18 §164](../chapters/18_cell_cycle.md#164-kinetochore-coupling-during-depolymerization), [C18 §165](../chapters/18_cell_cycle.md#165-anaphase-a-motor-model-is-not-favored-by-source) |

<a id="p-anaphase_b"></a>

### P.anaphase_b — Anaphase B pole separation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Antiparallel spindle microtubules, motors and cortical dynein where specified |
| Required state / input | Source anaphase spindle architecture |
| WorldState change / output | Sliding/pulling separates poles; microtubule growth can maintain overlap. |
| Trigger / termination | Source motor/mitotic state; final spindle extent/exit |
| Energy / time / noise / limits | Different from anaphase A; both can coexist. Pole motion is not chromosome DNA stretching. |
| Evidence | [C18 §166](../chapters/18_cell_cycle.md#166-anaphase-b), [C18 §167](../chapters/18_cell_cycle.md#167-anaphase-b-interpolar-sliding), [C18 §168](../chapters/18_cell_cycle.md#168-anaphase-b-cortical-pulling), [C18 §169](../chapters/18_cell_cycle.md#169-plus-end-growth-contributes-to-spindle-elongation) |

<a id="p-mitotic_exit"></a>

### P.mitotic_exit — Mitotic exit and nuclear reassembly

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cyclin degradation, phosphatases, spindle, chromosomes and nuclear components |
| Required state / input | Source declining mitotic kinase activity |
| WorldState change / output | Spindle disassembles, chromosomes decondense, nuclear envelope/lamina reform and import resumes. |
| Trigger / termination | Source exit control; daughter-nuclear organization |
| Energy / time / noise / limits | Reassembly changes biological barrier state; representation change alone cannot complete mitosis. |
| Evidence | [C18 §48](../chapters/18_cell_cycle.md#48-apcc-destroys-m--and-s-cyclins), [C18 §49](../chapters/18_cell_cycle.md#49-cyclin-destruction-inactivates-cdk), [C18 §50](../chapters/18_cell_cycle.md#50-m-cyclin-destruction-enables-mitotic-exit), [C18 §63](../chapters/18_cell_cycle.md#63-mitotic-exit-reverses-the-balance), [C18 §170](../chapters/18_cell_cycle.md#170-telophase), [C18 §171](../chapters/18_cell_cycle.md#171-spindle-disassembly), [C18 §172](../chapters/18_cell_cycle.md#172-nuclear-envelope-reassembly), [C18 §173](../chapters/18_cell_cycle.md#173-laminpore-dephosphorylation), [C18 §174](../chapters/18_cell_cycle.md#174-chromosome-decondensation), [C18 §175](../chapters/18_cell_cycle.md#175-nuclear-protein-sorting-is-restored), [C17 §37](../chapters/17_cytoskeleton.md#37-lamin-dephosphorylation-reassembles-lamina) |

<a id="p-animal_cytokinesis"></a>

### P.animal_cytokinesis — Animal cytokinesis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cell cortex, RhoA, actin–myosin ring and membrane |
| Required state / input | Source late-mitotic spatial signals and division geometry |
| WorldState change / output | Local contractile ring constriction partitions cytoplasm and yields daughter-cell boundaries/lineage. |
| Trigger / termination | Source anaphase/spindle signal; completed division |
| Energy / time / noise / limits | Ring components turn over; cleavage plane is not set by camera center and unequal division is possible. |
| Evidence | [C18 §176](../chapters/18_cell_cycle.md#176-animal-cell-cytokinesis), [C18 §178](../chapters/18_cell_cycle.md#178-cytokinesis-begins-during-anaphase), [C18 §179](../chapters/18_cell_cycle.md#179-spindle-specifies-cleavage-plane), [C18 §181](../chapters/18_cell_cycle.md#181-late-furrow-becomes-autonomous), [C18 §182](../chapters/18_cell_cycle.md#182-central-spindle-signal), [C18 §183](../chapters/18_cell_cycle.md#183-rhoa), [C18 §184](../chapters/18_cell_cycle.md#184-contractile-ring-composition), [C18 §185](../chapters/18_cell_cycle.md#185-contractile-ring-is-membrane-associated), [C18 §186](../chapters/18_cell_cycle.md#186-contractile-force), [C18 §187](../chapters/18_cell_cycle.md#187-contractile-ring-is-transient), [C18 §191](../chapters/18_cell_cycle.md#191-developmental-asymmetric-division) |

<a id="p-plant_cytokinesis"></a>

### P.plant_cytokinesis — Plant cytokinesis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Phragmoplast, Golgi-derived vesicles, developing cell plate and wall machinery |
| Required state / input | Source plant division context |
| WorldState change / output | Vesicle fusion creates expanding cell plate and daughter membrane/wall partition. |
| Trigger / termination | Source phragmoplast guidance; connection/completion of division |
| Energy / time / noise / limits | Compose canonical traffic/fusion events; not an animal contractile furrow. Membrane sidedness is conserved. |
| Evidence | [C18 §192](../chapters/18_cell_cycle.md#192-plant-cytokinesis-differs-fundamentally), [C18 §193](../chapters/18_cell_cycle.md#193-phragmoplast), [C18 §194](../chapters/18_cell_cycle.md#194-golgi-derived-vesicles), [C18 §195](../chapters/18_cell_cycle.md#195-cell-plate), [C18 §196](../chapters/18_cell_cycle.md#196-plant-cytokinesis-expansion), [C18 §197](../chapters/18_cell_cycle.md#197-cellulose-deposition), [C18 §198](../chapters/18_cell_cycle.md#198-membrane-topology-in-plant-cytokinesis) |

<a id="p-organelle_inheritance"></a>

### P.organelle_inheritance — Organelle inheritance at cell division

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Parent cell and source organelle populations/networks |
| Required state / input | Dividing cell with appropriate organelle states |
| WorldState change / output | Organelle material partitions to daughters with instance lineage; division or redistribution depends on organelle/context. |
| Trigger / termination | Source cell division; daughter inventory assignment |
| Energy / time / noise / limits | Mitochondria/chloroplasts, ER and Golgi have different source inheritance descriptions; random partition is not chromosome segregation. |
| Evidence | [C18 §199](../chapters/18_cell_cycle.md#199-organelle-inheritance), [C18 §200](../chapters/18_cell_cycle.md#200-mitochondriachloroplasts), [C18 §201](../chapters/18_cell_cycle.md#201-er-during-mitosis), [C18 §202](../chapters/18_cell_cycle.md#202-golgi-during-mitosis), [C18 §203](../chapters/18_cell_cycle.md#203-random-inheritance-is-acceptable-for-numerous-equivalent-components), [C18 §204](../chapters/18_cell_cycle.md#204-chromosomes-cannot-be-randomly-inherited) |

<a id="p-mitosis"></a>

### P.mitosis — Mitosis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Replicated chromosomes, source spindle and cell-cycle controls |
| Required state / input | Mitotic competence with replicated sisters and appropriate checkpoint state |
| WorldState change / output | Chromosome organization, attachment and segregation partition sister-derived genomes into daughter nuclear domains. |
| Trigger / termination | Source mitotic entry; mitotic exit |
| Energy / time / noise / limits | Reuses condensation/spindle/attachment/anaphase/exit processes; cytokinesis can overlap but is not the same event. Open-envelope behavior is context-specific. |
| Evidence | [C18 §14](../chapters/18_cell_cycle.md#14-m-phase), [C18 §107](../chapters/18_cell_cycle.md#107-m-phase-reorganizes-almost-the-entire-cell), [C18 §109](../chapters/18_cell_cycle.md#109-m-cdk-prepares-chromosomes), [C18 §110](../chapters/18_cell_cycle.md#110-m-cdk-promotes-spindle-assembly), [C18 §122](../chapters/18_cell_cycle.md#122-two-transient-cytoskeletal-machines), [C18 §123](../chapters/18_cell_cycle.md#123-mitosis-stages), [C18 §124](../chapters/18_cell_cycle.md#124-cytokinesis-overlaps-mitosis), [C18 §135](../chapters/18_cell_cycle.md#135-prophase), [C18 §136](../chapters/18_cell_cycle.md#136-prometaphase-begins-with-nuclear-envelope-breakdown), [C18 §153](../chapters/18_cell_cycle.md#153-anaphase-begins-abruptly), [C18 §170](../chapters/18_cell_cycle.md#170-telophase) |

<a id="p-cytokinesis"></a>

### P.cytokinesis — Cytokinesis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Dividing cell, membrane and source partition machinery |
| Required state / input | Source division geometry and biological phase |
| WorldState change / output | Cytoplasm and cell boundary partition to daughter cells with parent lineage and material allocation. |
| Trigger / termination | Source division program; completed separation |
| Energy / time / noise / limits | Branch to animal contractile-ring or plant cell-plate process; do not execute parent and branch independently. |
| Evidence | [C18 §176](../chapters/18_cell_cycle.md#176-animal-cell-cytokinesis), [C18 §178](../chapters/18_cell_cycle.md#178-cytokinesis-begins-during-anaphase), [C18 §179](../chapters/18_cell_cycle.md#179-spindle-specifies-cleavage-plane), [C18 §191](../chapters/18_cell_cycle.md#191-developmental-asymmetric-division), [C18 §192](../chapters/18_cell_cycle.md#192-plant-cytokinesis-differs-fundamentally), [C18 §193](../chapters/18_cell_cycle.md#193-phragmoplast), [C18 §194](../chapters/18_cell_cycle.md#194-golgi-derived-vesicles), [C18 §195](../chapters/18_cell_cycle.md#195-cell-plate), [C18 §196](../chapters/18_cell_cycle.md#196-plant-cytokinesis-expansion), [C18 §197](../chapters/18_cell_cycle.md#197-cellulose-deposition), [C18 §198](../chapters/18_cell_cycle.md#198-membrane-topology-in-plant-cytokinesis) |
