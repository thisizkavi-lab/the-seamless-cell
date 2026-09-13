# Macromolecular complexes

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 66 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-ribosome"></a>

### E.ribosome — Ribosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family |
| Exists in / context | Organism-specific cytosolic or organelle translation systems |
| Biology / relations | RNA/protein machine with large and small subunits; free and ER-bound cytosolic ribosomes use the same type. |
| State variables | subunit assembly; mRNA; tRNA-site occupancy; nascent chain; ER attachment |
| Evidence | [C07 §244](../chapters/07_from_dna_to_protein.md#244-ribosome), [C07 §247](../chapters/07_from_dna_to_protein.md#247-ribosome-has-large-and-small-subunits), [C07 §257](../chapters/07_from_dna_to_protein.md#257-ribosome-is-a-ribozyme), [C07 §263](../chapters/07_from_dna_to_protein.md#263-three-trna-sites), [C15 §99](../chapters/15_intracellular_compartments_protein_transport.md#99-rough-er-ribosomes-are-not-a-special-class), [C15 §100](../chapters/15_intracellular_compartments_protein_transport.md#100-ribosome-fate-depends-on-current-mrnaprotein) |
| Uncertainty / display limits | Species-specific composition remains qualified; attachment does not define a second ribosome species. |

<a id="e-proteasome"></a>

### E.proteasome — Proteasome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Cytosolic/nuclear protein degradation |
| Biology / relations | Internal protease chamber with regulatory machinery processing selected substrates and recycling ubiquitin. |
| State variables | substrate; unfolding; nucleotide; proteolytic state |
| Evidence | [C07 §326](../chapters/07_from_dna_to_protein.md#326-proteasome), [C07 §327](../chapters/07_from_dna_to_protein.md#327-proteasome-locations), [C07 §328](../chapters/07_from_dna_to_protein.md#328-proteasome-core), [C07 §329](../chapters/07_from_dna_to_protein.md#329-proteasome-end-stoppersregulatory-complexes), [C07 §330](../chapters/07_from_dna_to_protein.md#330-proteasome-uses-atp), [C07 §335](../chapters/07_from_dna_to_protein.md#335-ubiquitin-is-recycled) |
| Uncertainty / display limits | Not a lysosome; detailed stoichiometry remains unassigned. |

<a id="e-nuclear_pore"></a>

### E.nuclear_pore — Nuclear pore complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; NPC; nuclear pore |
| Exists in / context | Nuclear envelope in source eukaryotic context |
| Biology / relations | Gated connection containing repeat-protein meshwork; selective macromolecule traffic and small-molecule passage. |
| State variables | envelope membership; receptor/cargo interaction; assembly state |
| Evidence | [C15 §61](../chapters/15_intracellular_compartments_protein_transport.md#61-nuclear-pore-complex-composition), [C15 §62](../chapters/15_intracellular_compartments_protein_transport.md#62-nuclear-pore-disordered-meshwork), [C15 §63](../chapters/15_intracellular_compartments_protein_transport.md#63-small-molecules-diffuse-through-pores), [C15 §64](../chapters/15_intracellular_compartments_protein_transport.md#64-large-cargo-requires-transport-receptors), [C18 §137](../chapters/18_cell_cycle.md#137-nuclear-envelope-breakdown-mechanism) |
| Uncertainty / display limits | Not a hole cut by the camera; folded cargo can pass. |

<a id="e-nucleosome"></a>

### E.nucleosome — Nucleosome core particle

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; core particle; broader nucleosome usage qualified |
| Exists in / context | Eukaryotic chromatin |
| Biology / relations | Core histone octamer and wrapped DNA; repeat-unit usage additionally includes linker DNA. |
| State variables | DNA interval; histone membership/modifications; occupancy; remodeling |
| Evidence | [C05 §98](../chapters/05_dna_chromosomes.md#98-nucleosome), [C05 §99](../chapters/05_dna_chromosomes.md#99-nucleosome-core-particle), [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §101](../chapters/05_dna_chromosomes.md#101-histone-h1-is-not-a-core-octamer-histone), [C05 §102](../chapters/05_dna_chromosomes.md#102-nucleosomal-dna-length), [C05 §109](../chapters/05_dna_chromosomes.md#109-terminological-distinction-core-particle-versus-nucleosome) |
| Uncertainty / display limits | H1 is outside the core octamer; core length is not universal repeat length. |

<a id="e-cohesin"></a>

### E.cohesin — Cohesin

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Interphase chromatin, replicated sisters and meiotic chromosomes |
| Biology / relations | ATP-dependent SMC machinery with loop and sister-cohesion roles. |
| State variables | chromatin membership; loop/cohesion state; cleavage/release |
| Evidence | [C05 §127](../chapters/05_dna_chromosomes.md#127-smc-ring-complexes-use-atp), [C05 §132](../chapters/05_dna_chromosomes.md#132-cohesin), [C05 §137](../chapters/05_dna_chromosomes.md#137-cohesin-also-contributes-to-sister-chromatid-cohesion), [C18 §113](../chapters/18_cell_cycle.md#113-cohesin), [C19 §60](../chapters/19_sexual_reproduction_genetics.md#60-cohesin-maintains-sister-pairing-in-meiosis-i), [C19 §64](../chapters/19_sexual_reproduction_genetics.md#64-centromeric-cohesion-persists-through-meiosis-i) |
| Uncertainty / display limits | Do not duplicate separate interphase/mitotic types or treat exact extrusion geometry as settled. |

<a id="e-condensin"></a>

### E.condensin — Condensin

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family; condensin I/II qualified subtypes |
| Exists in / context | Source mitotic chromosome organization |
| Biology / relations | ATP-dependent SMC complexes associated with loop organization and compaction. |
| State variables | subtype; binding; ATP state; loops |
| Evidence | [C05 §138](../chapters/05_dna_chromosomes.md#138-condensin), [C05 §140](../chapters/05_dna_chromosomes.md#140-condensins-use-atp-hydrolysis), [C05 §141](../chapters/05_dna_chromosomes.md#141-mammalian-condensin-ii), [C05 §142](../chapters/05_dna_chromosomes.md#142-mammalian-condensin-i), [C18 §117](../chapters/18_cell_cycle.md#117-condensin), [C18 §119](../chapters/18_cell_cycle.md#119-condensin-loop-model) |
| Uncertainty / display limits | Distinct from cohesin; nested-loop model retains SOURCE_MODEL status. |

<a id="e-chromatin_remodeler"></a>

### E.chromatin_remodeler — ATP-dependent chromatin-remodeling complex

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source chromatin-accessibility contexts |
| Biology / relations | Repositions nucleosomal DNA through repeated ATP-dependent interactions. |
| State variables | substrate nucleosome; ATP; remodeling state |
| Evidence | [C05 §149](../chapters/05_dna_chromosomes.md#149-atp-dependent-chromatin-remodeling-complexes), [C05 §151](../chapters/05_dna_chromosomes.md#151-remodelers-can-reposition-nucleosomal-dna), [C05 §152](../chapters/05_dna_chromosomes.md#152-remodeling-uses-repeated-atp-hydrolysis), [C05 §153](../chapters/05_dna_chromosomes.md#153-remodelers-interact-with-histone-core-and-dna), [C08 §115](../chapters/08_control_of_gene_expression.md#115-atp-dependent-chromatin-remodeling-complex) |
| Uncertainty / display limits | Does not automatically turn transcription on. |

<a id="e-rna_polymerase"></a>

### E.rna_polymerase — DNA-dependent RNA polymerase

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; RNAP |
| Exists in / context | Bacterial and eukaryotic transcription systems distinguished |
| Biology / relations | Template-directed RNA synthesis machinery; nuclear I/II/III and bacterial systems are qualified variants. |
| State variables | template; initiation/elongation; nascent RNA; factors |
| Evidence | [C07 §27](../chapters/07_from_dna_to_protein.md#27-rna-polymerase), [C07 §28](../chapters/07_from_dna_to_protein.md#28-rna-polymerase-substrates), [C07 §29](../chapters/07_from_dna_to_protein.md#29-transcription-polymerization-direction), [C07 §74](../chapters/07_from_dna_to_protein.md#74-eukaryotes-use-three-nuclear-rna-polymerases), [C07 §75](../chapters/07_from_dna_to_protein.md#75-rna-polymerase-i), [C07 §76](../chapters/07_from_dna_to_protein.md#76-rna-polymerase-ii), [C07 §77](../chapters/07_from_dna_to_protein.md#77-rna-polymerase-iii), [C07 §78](../chapters/07_from_dna_to_protein.md#78-do-not-collapse-pol-iiiiii-into-one-eukaryotic-polymerase-entity), [C08 §106](../chapters/08_control_of_gene_expression.md#106-eukaryotic-activation-sequence) |
| Uncertainty / display limits | Source-specific variants are not interchangeable; exact subunits require cited context. |

<a id="e-dna_polymerase"></a>

### E.dna_polymerase — DNA polymerase

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Replication, repair and assay synthesis contexts |
| Biology / relations | Template-directed 3′-end extension using dNTPs; proofreading capacities depend on system. |
| State variables | template; primer; polymerizing/editing state; partners |
| Evidence | [C06 §31](../chapters/06_dna_replication_repair.md#31-dna-polymerase), [C06 §33](../chapters/06_dna_replication_repair.md#33-dna-polymerase-extends-the-3-end), [C06 §35](../chapters/06_dna_replication_repair.md#35-incoming-nucleotide-substrate), [C06 §56](../chapters/06_dna_replication_repair.md#56-polymerization-and-proofreading-use-separate-catalytic-sites), [C10 §105](../chapters/10_analyzing_gene_structure_and_function.md#105-pcr-cycle--step-3) |
| Uncertainty / display limits | Cannot initiate an unprimed DNA chain in the source model; bacterial names are not universal. |

<a id="e-replisome"></a>

### E.replisome — Replication machinery

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; replication machine |
| Exists in / context | Active replication forks in named systems |
| Biology / relations | Coordinated polymerase, helicase, primase and associated fork machinery. |
| State variables | fork; leading/lagging assignment; assembly; stalled state |
| Evidence | [C06 §23](../chapters/06_dna_replication_repair.md#23-replication-fork), [C06 §31](../chapters/06_dna_replication_repair.md#31-dna-polymerase), [C06 §63](../chapters/06_dna_replication_repair.md#63-primase-is-an-rna-polymerase), [C18 §102](../chapters/18_cell_cycle.md#102-origin-firing) |
| Uncertainty / display limits | Component list is partial; no guessed exact architecture. |

<a id="e-helicase"></a>

### E.helicase — DNA helicase

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Replication-fork and origin-licensing contexts |
| Biology / relations | DNA-opening machinery loaded before source S-phase activation. |
| State variables | DNA binding; loaded/active; nucleotide coupling |
| Evidence | [C06 §86](../chapters/06_dna_replication_repair.md#86-dna-helicase), [C06 §87](../chapters/06_dna_replication_repair.md#87-helicase-is-a-motor-enzyme), [C18 §101](../chapters/18_cell_cycle.md#101-origin-loading), [C18 §102](../chapters/18_cell_cycle.md#102-origin-firing) |
| Uncertainty / display limits | Helicase loading is not already DNA replication. |

<a id="e-primase"></a>

### E.primase — Primase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; specialized RNA polymerase role |
| Exists in / context | Replication-fork context |
| Biology / relations | Synthesizes RNA primers enabling DNA-polymerase extension. |
| State variables | template; primer; association |
| Evidence | [C06 §61](../chapters/06_dna_replication_repair.md#61-dna-polymerase-cannot-start-a-chain-from-scratch), [C06 §63](../chapters/06_dna_replication_repair.md#63-primase-is-an-rna-polymerase), [C06 §64](../chapters/06_dna_replication_repair.md#64-rna-primer), [C06 §68](../chapters/06_dna_replication_repair.md#68-primase-synthesis-direction) |
| Uncertainty / display limits | Distinct from bulk transcription systems. |

<a id="e-dna_ligase"></a>

### E.dna_ligase — DNA ligase

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Replication, repair and in-vitro DNA joining |
| Biology / relations | Seals DNA-backbone nicks; assay and cellular uses share a chemical mechanism. |
| State variables | nick substrate; energy coupling; activity |
| Evidence | [C10 §43](../chapters/10_analyzing_gene_structure_and_function.md#43-dna-ligase), [C10 §44](../chapters/10_analyzing_gene_structure_and_function.md#44-cellular-origin-of-dna-ligase-function), [C10 §45](../chapters/10_analyzing_gene_structure_and_function.md#45-in-vitro-ligation), [C10 §46](../chapters/10_analyzing_gene_structure_and_function.md#46-atp-requirement-for-ligation) |
| Uncertainty / display limits | Do not equate filling a gap with sealing a nick or universalize assay ATP chemistry. |

<a id="e-telomerase"></a>

### E.telomerase — Telomerase

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; RNA/protein enzyme |
| Exists in / context | Source telomere-maintenance contexts |
| Biology / relations | RNA-template-containing machinery extends chromosome-end DNA in cells where active. |
| State variables | RNA template; telomere binding; activity |
| Evidence | [C06 §116](../chapters/06_dna_replication_repair.md#116-telomerase), [C06 §117](../chapters/06_dna_replication_repair.md#117-telomerase-carries-its-own-rna-template), [C06 §118](../chapters/06_dna_replication_repair.md#118-telomerase-extends-the-3-end-of-the-lagging-strand-template), [C06 §119](../chapters/06_dna_replication_repair.md#119-conventional-replication-machinery-completes-the-complementary-strand), [C06 §123](../chapters/06_dna_replication_repair.md#123-telomerase-activity-varies-by-cell-type), [C06 §127](../chapters/06_dna_replication_repair.md#127-telomerase-and-telomeres-must-remain-distinct), [C08 §293](../chapters/08_control_of_gene_expression.md#293-telomerase-rna-as-lncrna-like-functional-example), [C20 §243](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#243-telomerase-reactivation) |
| Uncertainty / display limits | Not the telomere itself; activity and cell applicability require source context. |

<a id="e-spliceosome"></a>

### E.spliceosome — Spliceosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Eukaryotic pre-mRNA processing |
| Biology / relations | RNA/protein machine coordinating sequence-dependent intron removal and exon joining. |
| State variables | pre-mRNA; snRNP membership; assembly/catalytic state |
| Evidence | [C07 §132](../chapters/07_from_dna_to_protein.md#132-rna-splicing), [C07 §135](../chapters/07_from_dna_to_protein.md#135-introns-contain-short-splicing-signals), [C07 §137](../chapters/07_from_dna_to_protein.md#137-branch-point-adenine), [C07 §145](../chapters/07_from_dna_to_protein.md#145-spliceosome), [C07 §146](../chapters/07_from_dna_to_protein.md#146-five-snrnps-per-source-splicing-machinery), [C07 §147](../chapters/07_from_dna_to_protein.md#147-additional-spliceosomal-proteins), [C07 §152](../chapters/07_from_dna_to_protein.md#152-spliceosome-conformational-transitions), [C07 §153](../chapters/07_from_dna_to_protein.md#153-spliceosome-catalytic-center-is-rna-based), [C07 §154](../chapters/07_from_dna_to_protein.md#154-magnesium-ions-participate-in-splicing-catalysis) |
| Uncertainty / display limits | Not a fixed permanent object that blindly removes any region. |

<a id="e-mediator"></a>

### E.mediator — Mediator

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source eukaryotic transcription regulation |
| Biology / relations | Links regulator-dependent activity to transcription machinery in source model. |
| State variables | regulator association; promoter-complex membership |
| Evidence | [C08 §105](../chapters/08_control_of_gene_expression.md#105-mediator-is-not-dna-sequence), [C08 §106](../chapters/08_control_of_gene_expression.md#106-eukaryotic-activation-sequence) |
| Uncertainty / display limits | Protein complex, not an enhancer DNA sequence. |

<a id="e-risc"></a>

### E.risc — RNA-induced silencing complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; RISC |
| Exists in / context | miRNA/siRNA-guided post-transcriptional regulation |
| Biology / relations | Guide-bearing complex acting on matching RNA; cleavage/repression depends on context. |
| State variables | guide; target pairing; cleavage/repression state |
| Evidence | [C08 §246](../chapters/08_control_of_gene_expression.md#246-extensive-mirna-match), [C08 §247](../chapters/08_control_of_gene_expression.md#247-less-extensive-mirna-match), [C08 §258](../chapters/08_control_of_gene_expression.md#258-sirna-loading-into-risc), [C08 §261](../chapters/08_control_of_gene_expression.md#261-sirna-mediated-target-destruction) |
| Uncertainty / display limits | RNA targeting is not deletion of genomic DNA. |

<a id="e-rits"></a>

### E.rits — RNA-induced transcriptional silencing machinery

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; RITS |
| Exists in / context | Source RNA-guided chromatin-silencing context |
| Biology / relations | RNA-guided recruitment of chromatin-modifying proteins through nascent RNA. |
| State variables | guide; nascent-RNA association; chromatin partners |
| Evidence | [C08 §266](../chapters/08_control_of_gene_expression.md#266-rits-does-not-simply-bind-naked-dna-by-sequence-complementarity), [C08 §267](../chapters/08_control_of_gene_expression.md#267-rits-recruits-chromatin-modifying-machinery), [C08 §269](../chapters/08_control_of_gene_expression.md#269-rna-guided-heterochromatin-formation) |
| Uncertainty / display limits | Does not simply base-pair to naked DNA; distinct from RISC. |

<a id="e-srp"></a>

### E.srp — Signal-recognition particle

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; SRP |
| Exists in / context | Nascent ER-targeted protein on cytosolic ribosome |
| Biology / relations | Recognizes emerging signal/ribosome and engages ER receptor before translocator handoff. |
| State variables | signal/ribosome binding; receptor association |
| Evidence | [C15 §103](../chapters/15_intracellular_compartments_protein_transport.md#103-signal-recognition-particle), [C15 §104](../chapters/15_intracellular_compartments_protein_transport.md#104-srp-receptor), [C15 §105](../chapters/15_intracellular_compartments_protein_transport.md#105-protein-translocator-handoff) |
| Uncertainty / display limits | Not a permanent special class of ER ribosome. |

<a id="e-er_translocator"></a>

### E.er_translocator — ER protein translocator

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | ER membrane |
| Biology / relations | Accepts source nascent chains and supports luminal passage or membrane insertion. |
| State variables | ribosome binding; channel state; signal/start/stop transfer |
| Evidence | [C15 §105](../chapters/15_intracellular_compartments_protein_transport.md#105-protein-translocator-handoff), [C15 §106](../chapters/15_intracellular_compartments_protein_transport.md#106-soluble-protein-translocation), [C15 §109](../chapters/15_intracellular_compartments_protein_transport.md#109-single-pass-membrane-protein-insertion), [C15 §114](../chapters/15_intracellular_compartments_protein_transport.md#114-startstop-sequences-make-multipass-proteins) |
| Uncertainty / display limits | Not a small-solute channel model; protein orientation is retained. |

<a id="e-tom"></a>

### E.tom — TOM

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; translocator of outer mitochondrial membrane |
| Exists in / context | Mitochondrial outer membrane |
| Biology / relations | Recognizes/transports precursor proteins in source mitochondrial import. |
| State variables | precursor binding; translocation; membrane association |
| Evidence | [C15 §82](../chapters/15_intracellular_compartments_protein_transport.md#82-tom), [C15 §79](../chapters/15_intracellular_compartments_protein_transport.md#79-membrane-contact-import-sites) |
| Uncertainty / display limits | No vesicular delivery of the protein to matrix. |

<a id="e-tim"></a>

### E.tim — TIM

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; inner mitochondrial membrane translocator |
| Exists in / context | Mitochondrial inner membrane |
| Biology / relations | Supports passage toward matrix in source import pathway. |
| State variables | precursor; translocation; membrane association |
| Evidence | [C15 §83](../chapters/15_intracellular_compartments_protein_transport.md#83-tim), [C15 §84](../chapters/15_intracellular_compartments_protein_transport.md#84-chaperones-in-mitochondrial-import), [C14 §70](../chapters/14_energy_generation_mitochondria_chloroplasts.md#70-protein-import-also-uses-pmf) |
| Uncertainty / display limits | Exact subtypes and coupling remain source-limited. |

<a id="e-clathrin_coat"></a>

### E.clathrin_coat — Clathrin coat

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source plasma-membrane/Golgi budding |
| Biology / relations | Temporary cytosolic coat shaping buds with adaptin/cargo-receptor selection. |
| State variables | lattice assembly; bud; uncoating |
| Evidence | [C15 §125](../chapters/15_intracellular_compartments_protein_transport.md#125-coated-vesicles), [C15 §126](../chapters/15_intracellular_compartments_protein_transport.md#126-coat-functions), [C15 §128](../chapters/15_intracellular_compartments_protein_transport.md#128-clathrin), [C15 §129](../chapters/15_intracellular_compartments_protein_transport.md#129-clathrin-locations), [C15 §132](../chapters/15_intracellular_compartments_protein_transport.md#132-adaptins) |
| Uncertainty / display limits | Clathrin does not itself select cargo directly; coat removal precedes source fusion. |

<a id="e-copi"></a>

### E.copi — COPI coat

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source Golgi-to-ER retrieval route |
| Biology / relations | Coat associated with source retrieval vesicle formation. |
| State variables | membrane association; cargo; coat state |
| Evidence | [C15 §138](../chapters/15_intracellular_compartments_protein_transport.md#138-table-154-copi) |
| Uncertainty / display limits | Route citation is not a complete COPI inventory or universal direction rule. |

<a id="e-copii"></a>

### E.copii — COPII coat

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source ER-to-Golgi route |
| Biology / relations | Coat associated with ER export vesicle formation. |
| State variables | membrane association; cargo; coat state |
| Evidence | [C15 §137](../chapters/15_intracellular_compartments_protein_transport.md#137-table-154-copii) |
| Uncertainty / display limits | Do not infer exact coat geometry from this route summary. |

<a id="e-dynamin"></a>

### E.dynamin — Dynamin assembly

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source coated-pit neck |
| Biology / relations | GTP-binding machinery participating in membrane scission. |
| State variables | neck association; GTP; assembly/scission state |
| Evidence | [C15 §130](../chapters/15_intracellular_compartments_protein_transport.md#130-dynamin), [C15 §131](../chapters/15_intracellular_compartments_protein_transport.md#131-dynamin-gtp-hydrolysis) |
| Uncertainty / display limits | Not clathrin or an ATP-driven stepping motor. |

<a id="e-snare"></a>

### E.snare — SNARE fusion machinery

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; v-SNARE/t-SNARE are contextual roles |
| Exists in / context | Source vesicle and target membranes |
| Biology / relations | Complementary SNARE pairing brings membranes together for fusion. |
| State variables | membrane side; pairing; docking/fusion state |
| Evidence | [C15 §142](../chapters/15_intracellular_compartments_protein_transport.md#142-v-snare), [C15 §143](../chapters/15_intracellular_compartments_protein_transport.md#143-t-snare), [C15 §145](../chapters/15_intracellular_compartments_protein_transport.md#145-snares-catalyze-fusion), [C15 §147](../chapters/15_intracellular_compartments_protein_transport.md#147-fusion-hydration-barrier) |
| Uncertainty / display limits | v/t role is not a universal molecular identity; docking is not fusion. |

<a id="e-atp_synthase"></a>

### E.atp_synthase — ATP synthase

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family; F0/F1 source architecture |
| Exists in / context | Mitochondrial inner membrane, thylakoid membrane and prokaryotic membrane contexts |
| Biology / relations | Couples proton movement to rotation/conformational changes and ATP chemistry; reversible under appropriate energetics. |
| State variables | orientation; rotor; catalytic sites; synthase/pump/stall mode |
| Evidence | [C14 §6](../chapters/14_energy_generation_mitochondria_chloroplasts.md#6-atp-synthase), [C14 §57](../chapters/14_energy_generation_mitochondria_chloroplasts.md#57-atp-synthase-architecture), [C14 §58](../chapters/14_energy_generation_mitochondria_chloroplasts.md#58-atp-synthase-orientation), [C14 §59](../chapters/14_energy_generation_mitochondria_chloroplasts.md#59-atp-synthase-mechanism), [C14 §63](../chapters/14_energy_generation_mitochondria_chloroplasts.md#63-atp-synthase-is-reversible), [C14 §173](../chapters/14_energy_generation_mitochondria_chloroplasts.md#173-thylakoid-atp-synthase-direction) |
| Uncertainty / display limits | Same functional class, context-specific architecture; entire complex does not rotate. |

<a id="e-nadh_dehydrogenase"></a>

### E.nadh_dehydrogenase — NADH dehydrogenase complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source inner-mitochondrial-membrane respiratory chain |
| Biology / relations | Respiratory entry complex receiving NADH-derived electrons in source sequence. |
| State variables | redox; donor/acceptor; proton coupling |
| Evidence | [C14 §42](../chapters/14_energy_generation_mitochondria_chloroplasts.md#42-nadh-electron-donation-chemistry), [C14 §44](../chapters/14_energy_generation_mitochondria_chloroplasts.md#44-three-major-respiratory-enzyme-complexes), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction) |
| Uncertainty / display limits | Do not import unsupported modern subunit inventories. |

<a id="e-cytochrome_c_reductase"></a>

### E.cytochrome_c_reductase — Cytochrome c reductase complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Inner mitochondrial membrane |
| Biology / relations | Source respiratory complex linked by ubiquinone and cytochrome c. |
| State variables | redox; carriers; proton coupling |
| Evidence | [C14 §44](../chapters/14_energy_generation_mitochondria_chloroplasts.md#44-three-major-respiratory-enzyme-complexes), [C14 §46](../chapters/14_energy_generation_mitochondria_chloroplasts.md#46-mobile-electron-carriers), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction), [C14 §119](../chapters/14_energy_generation_mitochondria_chloroplasts.md#119-cytochrome-c) |
| Uncertainty / display limits | Not mobile cytochrome c itself. |

<a id="e-cytochrome_c_oxidase"></a>

### E.cytochrome_c_oxidase — Cytochrome c oxidase complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Inner mitochondrial membrane |
| Biology / relations | Terminal source respiratory complex reducing oxygen to water and coupling proton pumping. |
| State variables | O2 binding; redox; proton transfer; assembly |
| Evidence | [C14 §120](../chapters/14_energy_generation_mitochondria_chloroplasts.md#120-cytochrome-c-oxidase), [C14 §121](../chapters/14_energy_generation_mitochondria_chloroplasts.md#121-cytochrome-c-oxidase-oxygen-binding-site), [C14 §124](../chapters/14_energy_generation_mitochondria_chloroplasts.md#124-o2-reduction-stoichiometry), [C14 §125](../chapters/14_energy_generation_mitochondria_chloroplasts.md#125-cytochrome-oxidase-proton-pumping) |
| Uncertainty / display limits | Chemically consumed protons and translocated protons are separate. |

<a id="e-succinate_dehydrogenase"></a>

### E.succinate_dehydrogenase — Succinate dehydrogenase

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/enzyme |
| Exists in / context | Inner mitochondrial membrane; source TCA interface |
| Biology / relations | Same enzyme participates in TCA oxidation and electron delivery to ubiquinone. |
| State variables | substrate; FAD redox; membrane membership |
| Evidence | [C13 §97](../chapters/13_how_cells_obtain_energy_from_food.md#97-tca-step-6), [C14 §77](../chapters/14_energy_generation_mitochondria_chloroplasts.md#77-succinate-dehydrogenase-is-membrane-embedded) |
| Uncertainty / display limits | TCA pathway location shorthand does not relocate it into soluble matrix. |

<a id="e-pdh"></a>

### E.pdh — Pyruvate dehydrogenase complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; PDH |
| Exists in / context | Matrix in source aerobic eukaryotic pathway |
| Biology / relations | Multienzyme system converting pyruvate to acetyl CoA, CO2 and NADH. |
| State variables | substrate/intermediates; carrier states; assembly |
| Evidence | [C13 §67](../chapters/13_how_cells_obtain_energy_from_food.md#67-pyruvate-dehydrogenase-complex), [C13 §68](../chapters/13_how_cells_obtain_energy_from_food.md#68-pdh-complex-enzymes), [C13 §69](../chapters/13_how_cells_obtain_energy_from_food.md#69-pdh-intermediate-channeling) |
| Uncertainty / display limits | Larger-than-ribosome comparison is a source model, not fixed geometry. |

<a id="e-photosystem_ii"></a>

### E.photosystem_ii — Photosystem II

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; PSII |
| Exists in / context | Source oxygenic photosynthetic thylakoid membrane |
| Biology / relations | Antenna/reaction-center machinery delivering electrons toward plastoquinone and replenished by water oxidation. |
| State variables | excitation; charge separation; donor/acceptor redox |
| Evidence | [C14 §160](../chapters/14_energy_generation_mitochondria_chloroplasts.md#160-photosystem), [C14 §167](../chapters/14_energy_generation_mitochondria_chloroplasts.md#167-two-photosystems-in-oxygenic-photosynthesis), [C14 §169](../chapters/14_energy_generation_mitochondria_chloroplasts.md#169-photosystem-ii-output-carrier), [C14 §178](../chapters/14_energy_generation_mitochondria_chloroplasts.md#178-water-splitting-complex) |
| Uncertainty / display limits | Acts before PSI; one photon does not yield one O2. |

<a id="e-photosystem_i"></a>

### E.photosystem_i — Photosystem I

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; PSI |
| Exists in / context | Source oxygenic photosynthetic thylakoid membrane |
| Biology / relations | Photosystem delivering excited electrons toward ferredoxin/FNR. |
| State variables | excitation; charge separation; redox partners |
| Evidence | [C14 §167](../chapters/14_energy_generation_mitochondria_chloroplasts.md#167-two-photosystems-in-oxygenic-photosynthesis), [C14 §174](../chapters/14_energy_generation_mitochondria_chloroplasts.md#174-photosystem-i-output-carrier), [C14 §183](../chapters/14_energy_generation_mitochondria_chloroplasts.md#183-photosystem-i-receives-electrons-from-psii) |
| Uncertainty / display limits | Naming order is not electron-flow order. |

<a id="e-cytochrome_b6f"></a>

### E.cytochrome_b6f — Cytochrome b6-f complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source thylakoid membrane |
| Biology / relations | Electron-transfer/proton-pumping complex between plastoquinone and plastocyanin. |
| State variables | redox; carriers; proton coupling |
| Evidence | [C14 §171](../chapters/14_energy_generation_mitochondria_chloroplasts.md#171-cytochrome-b6-f-complex), [C14 §172](../chapters/14_energy_generation_mitochondria_chloroplasts.md#172-chloroplast-proton-pumping-direction), [C14 §183](../chapters/14_energy_generation_mitochondria_chloroplasts.md#183-photosystem-i-receives-electrons-from-psii) |
| Uncertainty / display limits | Proton pumping is stroma-to-lumen in this context. |

<a id="e-fnr"></a>

### E.fnr — Ferredoxin–NADP+ reductase

| Field | Record |
|---|---|
| Kind / scoped aliases | type/enzyme; FNR |
| Exists in / context | Source photosynthetic electron-transfer context |
| Biology / relations | Transfers reducing equivalents toward NADP+ to form NADPH. |
| State variables | donor/acceptor binding; redox |
| Evidence | [C14 §176](../chapters/14_energy_generation_mitochondria_chloroplasts.md#176-fnr) |
| Uncertainty / display limits | No interchangeable NAD+ substrate inferred. |

<a id="e-rubisco"></a>

### E.rubisco — Rubisco

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/enzyme |
| Exists in / context | Chloroplast stroma; algal pyrenoid context |
| Biology / relations | Ribulose 1,5-bisphosphate carboxylase/oxygenase in the source carbon-fixation route. |
| State variables | substrate; activity; assembly; pyrenoid association |
| Evidence | [C14 §190](../chapters/14_energy_generation_mitochondria_chloroplasts.md#190-rubisco), [C14 §191](../chapters/14_energy_generation_mitochondria_chloroplasts.md#191-rubisco-reaction), [C14 §194](../chapters/14_energy_generation_mitochondria_chloroplasts.md#194-pyrenoid) |
| Uncertainty / display limits | Turnover/protein fraction are source examples; omitted chemistry remains unspecified. |

<a id="e-apc_c"></a>

### E.apc_c — Anaphase-promoting complex/cyclosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; APC/C |
| Exists in / context | Cell-cycle anaphase/exit control |
| Biology / relations | Ubiquitin ligase targeting securin and selected cyclins, enabling separase activation and mitotic exit. |
| State variables | checkpoint inhibition; activity; substrate targeting |
| Evidence | [C18 §47](../chapters/18_cell_cycle.md#47-apcc), [C18 §48](../chapters/18_cell_cycle.md#48-apcc-destroys-m--and-s-cyclins), [C18 §156](../chapters/18_cell_cycle.md#156-apcc-destroys-securin), [C18 §157](../chapters/18_cell_cycle.md#157-apcc-therefore-controls-two-linked-transitions), [C20 §264](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#264-apc-gene-is-distinct-from-apcc) |
| Uncertainty / display limits | Not APC tumor-suppressor protein; proteasome performs degradation. |

<a id="e-apoptosome"></a>

### E.apoptosome — Apoptosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Cytosol after mitochondrial cytochrome-c release |
| Biology / relations | Source death-signaling assembly recruiting/activating initiator caspase-9. |
| State variables | cytochrome-c response; assembly; caspase recruitment |
| Evidence | [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release), [C18 §236](../chapters/18_cell_cycle.md#236-apoptosome), [C18 §237](../chapters/18_cell_cycle.md#237-apoptosome-caspase-recruitment), [C18 §238](../chapters/18_cell_cycle.md#238-caspase-9) |
| Uncertainty / display limits | Source stoichiometry/architecture requires verification before structure selection. |

<a id="e-death_signaling_complex"></a>

### E.death_signaling_complex — Death-inducing signaling complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source activated Fas receptor context |
| Biology / relations | Receptor-associated assembly initiating a caspase cascade. |
| State variables | receptor state; assembly; initiator activation |
| Evidence | [C18 §239](../chapters/18_cell_cycle.md#239-extrinsic-apoptosis), [C18 §240](../chapters/18_cell_cycle.md#240-fas), [C18 §241](../chapters/18_cell_cycle.md#241-fas-ligand), [C18 §242](../chapters/18_cell_cycle.md#242-death-inducing-signaling-complex) |
| Uncertainty / display limits | Do not invent omitted subunits. |

<a id="e-orc"></a>

### E.orc — Origin recognition complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; ORC |
| Exists in / context | Eukaryotic replication origins in source licensing model |
| Biology / relations | Origin-associated complex cooperating with Cdc6 to load helicases. |
| State variables | origin binding; phosphorylation; licensing |
| Evidence | [C18 §99](../chapters/18_cell_cycle.md#99-orc), [C18 §101](../chapters/18_cell_cycle.md#101-origin-loading), [C18 §103](../chapters/18_cell_cycle.md#103-s-cdk-blocks-re-replication) |
| Uncertainty / display limits | Source persistence model is not a universal mechanism for every organism. |

<a id="e-gamma_tubulin_ring"></a>

### E.gamma_tubulin_ring — γ-tubulin ring complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source MTOCs |
| Biology / relations | Nucleation template for polarized microtubules. |
| State variables | MTOC association; nucleation; minus-end anchoring |
| Evidence | [C17 §59](../chapters/17_cytoskeleton.md#59-centrosome-composition), [C17 §60](../chapters/17_cytoskeleton.md#60-γ-tubulin-ring-complex), [C17 §61](../chapters/17_cytoskeleton.md#61-centrosomal-minus-end-anchoring), [C17 §63](../chapters/17_cytoskeleton.md#63-centrioles-do-not-nucleate-centrosomal-microtubules-directly) |
| Uncertainty / display limits | Centrosomal centrioles do not directly nucleate all these microtubules. |

<a id="e-arp_complex"></a>

### E.arp_complex — Actin-related protein complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; ARP complex in source |
| Exists in / context | Branched actin networks |
| Biology / relations | Binds an existing actin filament and nucleates a branch. |
| State variables | mother filament; branch; activity |
| Evidence | [C17 §165](../chapters/17_cytoskeleton.md#165-arp-complex), [C17 §193](../chapters/17_cytoskeleton.md#193-arp-built-lamellipodium) |
| Uncertainty / display limits | Preserve source name; no unsupported branch angle or subunit inventory. |

<a id="e-augmin"></a>

### E.augmin — Augmin

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source microtubule branch nucleation |
| Biology / relations | Recruits γ-tubulin machinery to existing microtubules. |
| State variables | mother microtubule; nucleation machinery |
| Evidence | [C17 §88](../chapters/17_cytoskeleton.md#88-augmin), [C17 §89](../chapters/17_cytoskeleton.md#89-augmin-in-plants) |
| Uncertainty / display limits | Plant emphasis is not a universal cell-array geometry. |

<a id="e-kinetochore"></a>

### E.kinetochore — Kinetochore

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Chromatid centromeres in source mitosis/meiosis |
| Biology / relations | Protein attachment machinery coupling chromosomes to dynamic spindle microtubules. |
| State variables | attachment; pole; tension; checkpoint; meiotic mode |
| Evidence | [C18 §138](../chapters/18_cell_cycle.md#138-kinetochore), [C18 §140](../chapters/18_cell_cycle.md#140-two-kinetochores-per-duplicated-chromosome), [C18 §142](../chapters/18_cell_cycle.md#142-kinetochore-attachment-remains-dynamic), [C19 §61](../chapters/19_sexual_reproduction_genetics.md#61-sister-kinetochores-function-together-in-meiosis-i), [C19 §67](../chapters/19_sexual_reproduction_genetics.md#67-meiosis-ii-kinetochore-logic) |
| Uncertainty / display limits | Not centromere DNA or centrosome; attachment count varies by organism. |

<a id="e-synaptonemal_complex"></a>

### E.synaptonemal_complex — Synaptonemal complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Meiotic prophase I |
| Biology / relations | Temporary axial-core/transverse-filament assembly aligning homologs. |
| State variables | paired homologs; assembly; disassembly |
| Evidence | [C19 §48](../chapters/19_sexual_reproduction_genetics.md#48-synaptonemal-complex), [C19 §49](../chapters/19_sexual_reproduction_genetics.md#49-axial-cores), [C19 §50](../chapters/19_sexual_reproduction_genetics.md#50-transverse-filaments), [C19 §52](../chapters/19_sexual_reproduction_genetics.md#52-synaptonemal-complex-disassembles-before-homolog-segregation) |
| Uncertainty / display limits | Not a permanent mitotic chromosome part. |

<a id="e-connexon"></a>

### E.connexon — Connexon

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | One membrane of an animal gap-junction contact |
| Biology / relations | Source six-subunit channel half that pairs with a neighbor's connexon. |
| State variables | membrane; partner; gate |
| Evidence | [C20 §122](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#122-connexon), [C20 §123](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#123-connexon-subunits), [C20 §124](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#124-complete-gap-junction-channel) |
| Uncertainty / display limits | One connexon is not the complete intercellular channel or a plasmodesma. |

<a id="e-cellulose_synthase"></a>

### E.cellulose_synthase — Cellulose-synthase complex

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Plant plasma membrane adjacent to cortical microtubules |
| Biology / relations | Uses cytosolic UDP-glucose to produce extracellular cellulose chains in source model. |
| State variables | activity; trajectory; chain outputs |
| Evidence | [C20 §27](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#27-cellulose-synthesis-occurs-at-plasma-membrane), [C20 §28](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#28-udp-glucose), [C20 §29](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#29-cortical-microtubules-guide-cellulose-deposition), [C20 §30](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#30-cellulose-synthase-source-stoichiometry) |
| Uncertainty / display limits | Source stoichiometry remains SOURCE_MODEL; cellulose is not delivered as preassembled vesicle fibrils. |

<a id="e-rna_polymerase_i"></a>

### E.rna_polymerase_i — Nuclear RNA polymerase I

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/assembly |
| Exists in / context | Source eukaryotic nuclear transcription |
| Biology / relations | Transcribes most source rRNAs; member of RNAP family with distinct targets. |
| State variables | template; factors; nascent RNA |
| Evidence | [C07 §74](../chapters/07_from_dna_to_protein.md#74-eukaryotes-use-three-nuclear-rna-polymerases), [C07 §75](../chapters/07_from_dna_to_protein.md#75-rna-polymerase-i), [C07 §78](../chapters/07_from_dna_to_protein.md#78-do-not-collapse-pol-iiiiii-into-one-eukaryotic-polymerase-entity) |
| Uncertainty / display limits | Not interchangeable with Pol II/III or bacterial polymerase. |

<a id="e-rna_polymerase_ii"></a>

### E.rna_polymerase_ii — Nuclear RNA polymerase II

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/assembly |
| Exists in / context | Source eukaryotic nuclear transcription |
| Biology / relations | Transcribes protein-coding genes and specified regulatory RNAs; tail state coordinates transcription/processing. |
| State variables | template; factors; tail phosphorylation; RNA |
| Evidence | [C07 §74](../chapters/07_from_dna_to_protein.md#74-eukaryotes-use-three-nuclear-rna-polymerases), [C07 §76](../chapters/07_from_dna_to_protein.md#76-rna-polymerase-ii), [C07 §78](../chapters/07_from_dna_to_protein.md#78-do-not-collapse-pol-iiiiii-into-one-eukaryotic-polymerase-entity), [C07 §94](../chapters/07_from_dna_to_protein.md#94-rna-polymerase-ii-tail-phosphorylation), [C07 §95](../chapters/07_from_dna_to_protein.md#95-polymerase-tail-state-is-part-of-transcription-state) |
| Uncertainty / display limits | Not every Pol-II promoter has all schematic elements. |

<a id="e-rna_polymerase_iii"></a>

### E.rna_polymerase_iii — Nuclear RNA polymerase III

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/assembly |
| Exists in / context | Source eukaryotic nuclear transcription |
| Biology / relations | Transcribes tRNAs, 5S rRNA and other source small RNAs. |
| State variables | template; factors; nascent RNA |
| Evidence | [C07 §74](../chapters/07_from_dna_to_protein.md#74-eukaryotes-use-three-nuclear-rna-polymerases), [C07 §77](../chapters/07_from_dna_to_protein.md#77-rna-polymerase-iii), [C07 §78](../chapters/07_from_dna_to_protein.md#78-do-not-collapse-pol-iiiiii-into-one-eukaryotic-polymerase-entity) |
| Uncertainty / display limits | Distinct from other nuclear polymerases. |

<a id="e-bacterial_rna_polymerase"></a>

### E.bacterial_rna_polymerase — Bacterial RNA polymerase

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/family |
| Exists in / context | Source bacterial transcription |
| Biology / relations | Source promoter recognition uses sigma-factor context; shares RNAP chemistry with a distinct initiation system. |
| State variables | sigma; template; initiation/elongation |
| Evidence | [C07 §61](../chapters/07_from_dna_to_protein.md#61-bacterial-rna-polymerase-initially-samples-dna-weakly), [C07 §62](../chapters/07_from_dna_to_protein.md#62-sigma-factor), [C07 §63](../chapters/07_from_dna_to_protein.md#63-sigma-factor-is-released-after-initiation), [C07 §64](../chapters/07_from_dna_to_protein.md#64-bacterial-promoter-recognition-can-occur-without-first-opening-all-dna), [C07 §73](../chapters/07_from_dna_to_protein.md#73-source-bacterial-termination-model) |
| Uncertainty / display limits | Not interchangeable with eukaryotic general-transcription-factor machinery. |

<a id="e-sliding_clamp"></a>

### E.sliding_clamp — Sliding clamp

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family |
| Exists in / context | Source DNA replication |
| Biology / relations | DNA-encircling protein maintaining polymerase processivity. |
| State variables | DNA membership; polymerase; sliding |
| Evidence | [C06 §42](../chapters/06_dna_replication_repair.md#42-processivity-is-reinforced-by-a-sliding-clamp), [C06 §96](../chapters/06_dna_replication_repair.md#96-sliding-clamp), [C06 §97](../chapters/06_dna_replication_repair.md#97-sliding-clamp-increases-effective-polymerase-processivity), [C06 §98](../chapters/06_dna_replication_repair.md#98-clamp-encircles-dna-rather-than-binding-as-a-static-wall) |
| Uncertainty / display limits | Not a stationary barrier or arbitrary DNA-binding blob. |

<a id="e-clamp_loader"></a>

### E.clamp_loader — Clamp loader

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family |
| Exists in / context | Source replication |
| Biology / relations | ATP-dependent clamp-loading machinery. |
| State variables | ATP; clamp; primer-template site |
| Evidence | [C06 §99](../chapters/06_dna_replication_repair.md#99-clamp-loader), [C06 §100](../chapters/06_dna_replication_repair.md#100-clamp-loading-consumes-atp), [C06 §101](../chapters/06_dna_replication_repair.md#101-leading-strand-clamp-loading), [C06 §102](../chapters/06_dna_replication_repair.md#102-lagging-strand-clamp-loading) |
| Uncertainty / display limits | Lagging-strand reuse is context-specific. |

<a id="e-topoisomerase"></a>

### E.topoisomerase — DNA topoisomerase

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source DNA topology management |
| Biology / relations | Controlled break/reseal mechanism relieves replication-associated torsional constraint. |
| State variables | DNA topology; catalytic break; resealing |
| Evidence | [C06 §90](../chapters/06_dna_replication_repair.md#90-dna-topology-creates-a-mechanical-problem), [C06 §93](../chapters/06_dna_replication_repair.md#93-dna-topoisomerase), [C06 §94](../chapters/06_dna_replication_repair.md#94-source-topoisomerase-mechanism-is-a-single-strand-break-model), [C06 §95](../chapters/06_dna_replication_repair.md#95-topoisomerase-break-is-controlled-and-reversible) |
| Uncertainty / display limits | Single-strand-break source model is not every topoisomerase mechanism. |

<a id="e-ssb"></a>

### E.ssb — Single-strand DNA-binding protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family; SSB source role |
| Exists in / context | Replication-exposed ssDNA |
| Biology / relations | Binds transient single-stranded DNA during source replication. |
| State variables | DNA occupancy; binding/release |
| Evidence | [C06 §88](../chapters/06_dna_replication_repair.md#88-single-strand-dna-binding-proteins), [C06 §89](../chapters/06_dna_replication_repair.md#89-single-stranded-dna-is-a-transient-replication-state) |
| Uncertainty / display limits | Not a sequence-specific transcription regulator. |

<a id="e-gpcr"></a>

### E.gpcr — G-protein-coupled receptor

| Field | Record |
|---|---|
| Kind / scoped aliases | family; GPCR |
| Exists in / context | Source plasma-membrane signaling contexts |
| Biology / relations | Seven-transmembrane source receptor class activating heterotrimeric G-protein exchange. |
| State variables | ligand; conformation; G-protein coupling; desensitization |
| Evidence | [C16 §65](../chapters/16_cell_signaling.md#65-gpcr), [C16 §74](../chapters/16_cell_signaling.md#74-gpcr-topology), [C16 §83](../chapters/16_cell_signaling.md#83-gpcr-acts-as-nucleotide-exchange-catalyst) |
| Uncertainty / display limits | Bacteriorhodopsin is not a GPCR despite structural resemblance. |

<a id="e-heterotrimeric_g_protein"></a>

### E.heterotrimeric_g_protein — Heterotrimeric G protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Cytosolic membrane face in source GPCR pathways |
| Biology / relations | α/β/γ complex with nucleotide-regulated α and signaling βγ component. |
| State variables | α nucleotide; α/βγ association; targets |
| Evidence | [C16 §80](../chapters/16_cell_signaling.md#80-heterotrimeric-g-protein-subunits), [C16 §81](../chapters/16_cell_signaling.md#81-g-protein-membrane-anchoring), [C16 §82](../chapters/16_cell_signaling.md#82-inactive-heterotrimer), [C16 §85](../chapters/16_cell_signaling.md#85-g-protein-activation-can-separate-functional-parts), [C16 §86](../chapters/16_cell_signaling.md#86-both-α-and-βγ-can-signal) |
| Uncertainty / display limits | Distinct from Ras/Ran/Rab; βγ is not always passive. |

<a id="e-rtk"></a>

### E.rtk — Receptor tyrosine kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; RTK |
| Exists in / context | Source enzyme-coupled signaling |
| Biology / relations | Receptor class with cytosolic tyrosine-kinase activity and phosphotyrosine docking sites. |
| State variables | ligand; oligomerization; phosphorylation; recruited proteins |
| Evidence | [C16 §167](../chapters/16_cell_signaling.md#167-rtk), [C16 §168](../chapters/16_cell_signaling.md#168-rtks-are-usually-single-pass), [C16 §169](../chapters/16_cell_signaling.md#169-rtk-activation-strategy), [C16 §170](../chapters/16_cell_signaling.md#170-rtk-trans-phosphorylation), [C16 §171](../chapters/16_cell_signaling.md#171-phosphotyrosines-are-docking-sites) |
| Uncertainty / display limits | Many source RTKs associate/dimerize; no one activation rule for all receptors. |

<a id="e-aquaporin"></a>

### E.aquaporin — Aquaporin

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source water-transport membranes |
| Biology / relations | Water-selective channel; source tetramer contains individual subunit pores. |
| State variables | orientation; water flux; assembly |
| Evidence | [C12 §77](../chapters/12_transport_across_cell_membranes.md#77-aquaporin), [C12 §80](../chapters/12_transport_across_cell_membranes.md#80-aquaporin-tetramer), [C12 §81](../chapters/12_transport_across_cell_membranes.md#81-each-aquaporin-monomer-contains-its-own-pore), [C12 §85](../chapters/12_transport_across_cell_membranes.md#85-aquaporin-excludes-ions) |
| Uncertainty / display limits | Does not pump water or freely conduct protons. |

<a id="e-nak_atpase"></a>

### E.nak_atpase — Na+/K+ ATPase

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; sodium pump |
| Exists in / context | Source animal plasma membrane |
| Biology / relations | ATP-linked alternating-access pump exchanges sodium and potassium with electrogenic source stoichiometry. |
| State variables | Na/K binding; phosphorylation; conformation; ATP |
| Evidence | [C12 §117](../chapters/12_transport_across_cell_membranes.md#117-na-pump), [C12 §118](../chapters/12_transport_across_cell_membranes.md#118-na-pump-direction), [C12 §119](../chapters/12_transport_across_cell_membranes.md#119-na-pump-stoichiometry), [C12 §120](../chapters/12_transport_across_cell_membranes.md#120-na-pump-atp-coupling), [C12 §128](../chapters/12_transport_across_cell_membranes.md#128-pump-steps-are-tightly-coupled) |
| Uncertainty / display limits | No universal turnover time or fraction of cellular ATP use. |

<a id="e-calcium_pump"></a>

### E.calcium_pump — Calcium ATPase

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source plasma membrane and ER/SR |
| Biology / relations | ATP-driven calcium transport maintaining low cytosolic calcium. |
| State variables | calcium binding; phosphorylation; orientation |
| Evidence | [C12 §141](../chapters/12_transport_across_cell_membranes.md#141-ca2-pumps-remove-ca2-from-cytosol), [C12 §145](../chapters/12_transport_across_cell_membranes.md#145-ca2-atpase-source-stoichiometry), [C12 §146](../chapters/12_transport_across_cell_membranes.md#146-ca2-pump-phosphorylation) |
| Uncertainty / display limits | SR two-calcium example is not automatically every pump subtype. |

<a id="e-proton_pump"></a>

### E.proton_pump — Proton pump

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role |
| Exists in / context | Source plasma/organelle membranes |
| Biology / relations | H+ translocation machinery with ATP-, electron-transfer- or light-coupled mechanisms distinguished. |
| State variables | energy mechanism; membrane; orientation; activity |
| Evidence | [C12 §172](../chapters/12_transport_across_cell_membranes.md#172-plasma-membrane-h-pump-direction), [C12 §175](../chapters/12_transport_across_cell_membranes.md#175-h-gradient-generation-can-use-atp-or-light), [C12 §176](../chapters/12_transport_across_cell_membranes.md#176-organelle-h-pumps), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction) |
| Uncertainty / display limits | Role family must not duplicate ATP synthase in reverse or respiratory complexes. |

<a id="e-bacteriorhodopsin"></a>

### E.bacteriorhodopsin — Bacteriorhodopsin

| Field | Record |
|---|---|
| Kind / scoped aliases | type; light-driven proton pump |
| Exists in / context | Halobacterium salinarum source membrane |
| Biology / relations | Retinal-dependent light-driven H+ pump. |
| State variables | retinal; illumination; proton-binding; conformation |
| Evidence | [C11 §225](../chapters/11_membrane_structure.md#225-bacteriorhodopsin), [C11 §226](../chapters/11_membrane_structure.md#226-bacteriorhodopsin-organism), [C11 §228](../chapters/11_membrane_structure.md#228-bacteriorhodopsin-chromophore), [C11 §232](../chapters/11_membrane_structure.md#232-proton-pumping), [C11 §233](../chapters/11_membrane_structure.md#233-pump-direction), [C16 §79](../chapters/16_cell_signaling.md#79-bacteriorhodopsin-comparison) |
| Uncertainty / display limits | Not heterotrimeric-G-protein signaling and not mammalian-native protein. |

<a id="e-histone_octamer"></a>

### E.histone_octamer — Histone octamer

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source nucleosome core |
| Biology / relations | Contains two each of H2A, H2B, H3 and H4; wrapped DNA plus this assembly form the core particle. |
| State variables | histone instance membership; modifications; DNA association |
| Evidence | [C05 §99](../chapters/05_dna_chromosomes.md#99-nucleosome-core-particle), [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §101](../chapters/05_dna_chromosomes.md#101-histone-h1-is-not-a-core-octamer-histone), [C05 §106](../chapters/05_dna_chromosomes.md#106-histone-octamer-height-source-model) |
| Uncertainty / display limits | H1 excluded; exercise cylinder dimensions remain SOURCE_MODEL. |
