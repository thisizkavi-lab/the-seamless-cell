# Chromosomes genome

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 29 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-genome"></a>

### E.genome — Genome

| Field | Record |
|---|---|
| Kind / scoped aliases | collection/region |
| Exists in / context | Named organism, cell, organelle or virus context |
| Biology / relations | Complete sequence collection in the source definition; nuclear and organelle inventories distinguished. |
| State variables | sequence set; ploidy; copies; variants; lineage |
| Evidence | [C19 §107](../chapters/19_sexual_reproduction_genetics.md#107-genome), [C19 §225](../chapters/19_sexual_reproduction_genetics.md#225-ploidy-schema), [C05 §42](../chapters/05_dna_chromosomes.md#42-eukaryotic-chromosome-definition), [C14 §10](../chapters/14_energy_generation_mitochondria_chloroplasts.md#10-organelle-genes-moved-to-nucleus) |
| Uncertainty / display limits | Not synonymous with a protein-coding gene list or one nucleus. |

<a id="e-chromosome"></a>

### E.chromosome — Chromosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Eukaryotic/bacterial and phase-specific contexts |
| Biology / relations | DNA-associated organization with persistent sequence/lineage identity across interphase and division. |
| State variables | DNA members; replication; condensation; ancestry; segregation |
| Evidence | [C05 §42](../chapters/05_dna_chromosomes.md#42-eukaryotic-chromosome-definition), [C05 §43](../chapters/05_dna_chromosomes.md#43-chromatin), [C05 §44](../chapters/05_dna_chromosomes.md#44-bacterial-chromosome-distinction), [C05 §76](../chapters/05_dna_chromosomes.md#76-x-shape-interpretation), [C18 §112](../chapters/18_cell_cycle.md#112-sister-chromatids) |
| Uncertainty / display limits | Not always X-shaped; replicated chromosome counts differ from DNA-copy counts. |

<a id="e-chromatin"></a>

### E.chromatin — Chromatin

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/material |
| Exists in / context | Source eukaryotic chromosomes |
| Biology / relations | DNA with histones and other associated proteins; accessibility and organization vary. |
| State variables | nucleosomes; loops; marks; accessibility; compaction |
| Evidence | [C05 §43](../chapters/05_dna_chromosomes.md#43-chromatin), [C05 §94](../chapters/05_dna_chromosomes.md#94-histones-and-non-histone-proteins), [C05 §97](../chapters/05_dna_chromosomes.md#97-non-histone-chromosomal-proteins-are-diverse), [C05 §168](../chapters/05_dna_chromosomes.md#168-interphase-chromatin-is-heterogeneous), [C05 §179](../chapters/05_dna_chromosomes.md#179-chromatin-exists-as-a-continuum-of-structural-states) |
| Uncertainty / display limits | No universal regular 30-nm fiber or binary active/inactive structure. |

<a id="e-chromosome_territory"></a>

### E.chromosome_territory — Chromosome territory

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source interphase nucleus |
| Biology / relations | Spatial organization associated with a chromosome, represented as an occupancy region rather than a new membrane. |
| State variables | chromosome membership; spatial occupancy |
| Evidence | [C05 §77](../chapters/05_dna_chromosomes.md#77-chromosome-territories), [C05 §78](../chapters/05_dna_chromosomes.md#78-territories-are-dynamic-not-sealed-compartments), [C05 §318](../chapters/05_dna_chromosomes.md#318-chromosome-territory-visual-language), [C05 §351](../chapters/05_dna_chromosomes.md#351-tier-b--chromosome-territory) |
| Uncertainty / display limits | Not a membrane compartment or additional chromosome. |

<a id="e-sister_chromatid"></a>

### E.sister_chromatid — Sister chromatid

| Field | Record |
|---|---|
| Kind / scoped aliases | relational role/state profile |
| Exists in / context | After replication and during source mitotic/meiotic handling |
| Biology / relations | One replicated chromosome copy related to its sister through common template ancestry and cohesion context. |
| State variables | sister ID; DNA copy; ancestry; cohesion; segregation |
| Evidence | [C18 §112](../chapters/18_cell_cycle.md#112-sister-chromatids), [C18 §113](../chapters/18_cell_cycle.md#113-cohesin), [C19 §32](../chapters/19_sexual_reproduction_genetics.md#32-sister-chromatids), [C19 §55](../chapters/19_sexual_reproduction_genetics.md#55-crossovers-create-recombinant-chromatids), [C19 §237](../chapters/19_sexual_reproduction_genetics.md#237-project-rule--homolog-and-sister-identities-are-persistent) |
| Uncertainty / display limits | Sisters are not homologs; mutation/recombination prevents unconditional sequence identity assumptions. |

<a id="e-homolog"></a>

### E.homolog — Homologous chromosome

| Field | Record |
|---|---|
| Kind / scoped aliases | relational role |
| Exists in / context | Diploid source chromosome sets |
| Biology / relations | Chromosome related to its counterpart by gene/locus correspondence; may carry different alleles. |
| State variables | counterpart; parental origin; alleles; pairing |
| Evidence | [C19 §5](../chapters/19_sexual_reproduction_genetics.md#5-diploid), [C19 §6](../chapters/19_sexual_reproduction_genetics.md#6-homologous-chromosomes), [C19 §108](../chapters/19_sexual_reproduction_genetics.md#108-allele-definition) |
| Uncertainty / display limits | Maternal/paternal and sister relationships are distinct. |

<a id="e-gene"></a>

### E.gene — Gene

| Field | Record |
|---|---|
| Kind / scoped aliases | region/functional role on DNA |
| Exists in / context | Named organism/locus/annotation context |
| Biology / relations | Source DNA unit specifying protein or functional RNA; coordinate interval remains part of a larger DNA molecule. |
| State variables | sequence interval; allele; regulatory context; transcription |
| Evidence | [C05 §56](../chapters/05_dna_chromosomes.md#56-gene-definition), [C10 §7](../chapters/10_analyzing_gene_structure_and_function.md#7-a-gene-is-not-normally-a-physically-separate-object), [C19 §106](../chapters/19_sexual_reproduction_genetics.md#106-gene) |
| Uncertainty / display limits | Not a free DNA object; protein-coding count is not total gene count. |

<a id="e-allele"></a>

### E.allele — Allele

| Field | Record |
|---|---|
| Kind / scoped aliases | sequence-version/relational record |
| Exists in / context | Locus and lineage/population context |
| Biology / relations | Alternative sequence version of a gene. |
| State variables | locus; sequence; inheritance; phenotype relation |
| Evidence | [C19 §18](../chapters/19_sexual_reproduction_genetics.md#18-gene-pool), [C19 §108](../chapters/19_sexual_reproduction_genetics.md#108-allele-definition), [C19 §249](../chapters/19_sexual_reproduction_genetics.md#249-project-rule--dominance-is-relational) |
| Uncertainty / display limits | Dominance is relational to another allele and phenotype. |

<a id="e-centromere"></a>

### E.centromere — Centromere

| Field | Record |
|---|---|
| Kind / scoped aliases | chromosome region |
| Exists in / context | Source dividing chromosomes |
| Biology / relations | Chromosomal region associated with kinetochore assembly. |
| State variables | genomic region; kinetochore; cohesion context |
| Evidence | [C18 §138](../chapters/18_cell_cycle.md#138-kinetochore), [C18 §139](../chapters/18_cell_cycle.md#139-centromere-versus-centrosome) |
| Uncertainty / display limits | Not centrosome or kinetochore protein itself. |

<a id="e-telomere"></a>

### E.telomere — Telomere

| Field | Record |
|---|---|
| Kind / scoped aliases | chromosome-end region |
| Exists in / context | Source linear chromosome contexts |
| Biology / relations | End region maintained by source chromosome-end mechanisms. |
| State variables | chromosome end; sequence; length; protection/maintenance |
| Evidence | [C05 §69](../chapters/05_dna_chromosomes.md#69-telomeres), [C20 §243](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#243-telomerase-reactivation) |
| Uncertainty / display limits | Not telomerase enzyme; no automatic constant length. |

<a id="e-replication_origin"></a>

### E.replication_origin — Replication origin

| Field | Record |
|---|---|
| Kind / scoped aliases | DNA region |
| Exists in / context | Bacterial/eukaryotic contexts qualified |
| Biology / relations | Region where replication initiates; eukaryotic loading/firing/relicensing are distinct states. |
| State variables | licensed; fired; helicase; ORC/Cdc6; timing |
| Evidence | [C06 §14](../chapters/06_dna_replication_repair.md#14-dna-synthesis-begins-at-replication-origins), [C06 §19](../chapters/06_dna_replication_repair.md#19-bacterial-origin-example), [C06 §21](../chapters/06_dna_replication_repair.md#21-many-origins-reduce-replication-time), [C06 §22](../chapters/06_dna_replication_repair.md#22-origin-firing-must-be-controlled), [C18 §98](../chapters/18_cell_cycle.md#98-replication-origins), [C18 §101](../chapters/18_cell_cycle.md#101-origin-loading), [C18 §102](../chapters/18_cell_cycle.md#102-origin-firing) |
| Uncertainty / display limits | Not every origin fires simultaneously or uses identical recognition machinery. |

<a id="e-replication_fork"></a>

### E.replication_fork — Replication fork

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/region |
| Exists in / context | Active DNA replication |
| Biology / relations | Local DNA-opening/synthesis organization with fork-relative leading/lagging assignments. |
| State variables | template strands; direction; nascent strands; stalled state |
| Evidence | [C06 §23](../chapters/06_dna_replication_repair.md#23-replication-fork), [C06 §24](../chapters/06_dna_replication_repair.md#24-two-forks-form-at-each-origin), [C06 §25](../chapters/06_dna_replication_repair.md#25-bidirectional-replication), [C06 §43](../chapters/06_dna_replication_repair.md#43-replication-fork-asymmetry) |
| Uncertainty / display limits | Leading/lagging is not a fixed left/right property of the chromosome. |

<a id="e-promoter"></a>

### E.promoter — Promoter

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory DNA region |
| Exists in / context | Source transcription systems |
| Biology / relations | DNA region associated with transcription initiation machinery and regulation. |
| State variables | sequence interval; bound factors; accessibility |
| Evidence | [C07 §57](../chapters/07_from_dna_to_protein.md#57-promoter), [C07 §62](../chapters/07_from_dna_to_protein.md#62-sigma-factor), [C07 §68](../chapters/07_from_dna_to_protein.md#68-promoter-polarity), [C07 §79](../chapters/07_from_dna_to_protein.md#79-eukaryotic-transcription-initiation-requires-general-transcription-factors), [C07 §85](../chapters/07_from_dna_to_protein.md#85-not-all-pol-ii-promoters-require-all-source-promoter-elements), [C08 §106](../chapters/08_control_of_gene_expression.md#106-eukaryotic-activation-sequence), [C08 §109](../chapters/08_control_of_gene_expression.md#109-chromatin-can-block-promoter-access) |
| Uncertainty / display limits | Not every promoter has one universal sequence or transcription-factor set. |

<a id="e-enhancer"></a>

### E.enhancer — Enhancer

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory DNA region |
| Exists in / context | Source eukaryotic transcription regulation |
| Biology / relations | Regulator-bound DNA can influence promoter activity through source contact/loop models. |
| State variables | interval; bound regulators; promoter contacts |
| Evidence | [C08 §106](../chapters/08_control_of_gene_expression.md#106-eukaryotic-activation-sequence), [C08 §108](../chapters/08_control_of_gene_expression.md#108-enhancerpromoter-loop-is-dynamic-representation) |
| Uncertainty / display limits | A DNA element is not an activator protein or an absolute spatial arrow. |

<a id="e-operon"></a>

### E.operon — Operon

| Field | Record |
|---|---|
| Kind / scoped aliases | genomic organization |
| Exists in / context | Source bacterial regulation |
| Biology / relations | Related gene arrangement producing coordinated transcription in cited bacterial examples. |
| State variables | genes; promoter/operator; transcript; regulator state |
| Evidence | [C08 §71](../chapters/08_control_of_gene_expression.md#71-trp-operon-transcription-output), [C08 §73](../chapters/08_control_of_gene_expression.md#73-trp-operator-location), [C08 §90](../chapters/08_control_of_gene_expression.md#90-lactose-absent-condition), [C08 §99](../chapters/08_control_of_gene_expression.md#99-gene-regulatory-circuits-can-perform-logical-integration) |
| Uncertainty / display limits | Do not impose bacterial operon architecture on coordinated eukaryotic genes. |

<a id="e-exon"></a>

### E.exon — Exon

| Field | Record |
|---|---|
| Kind / scoped aliases | sequence region |
| Exists in / context | Gene/transcript-specific processing context |
| Biology / relations | Region retained in a particular processed RNA isoform; gene-level regions and transcript products are distinguished. |
| State variables | genomic/transcript coordinates; isoform; splice state |
| Evidence | [C07 §124](../chapters/07_from_dna_to_protein.md#124-exons), [C07 §125](../chapters/07_from_dna_to_protein.md#125-exonintron-terminology-applies-to-dna-and-corresponding-rna), [C07 §159](../chapters/07_from_dna_to_protein.md#159-alternative-splicing), [C07 §162](../chapters/07_from_dna_to_protein.md#162-exons-may-be-included-or-excluded), [C07 §163](../chapters/07_from_dna_to_protein.md#163-exon-order-cannot-be-arbitrarily-rearranged-by-ordinary-alternative-splicing), [C08 §223](../chapters/08_control_of_gene_expression.md#223-alternative-splicing-is-a-post-transcriptional-control), [C10 §76](../chapters/10_analyzing_gene_structure_and_function.md#76-cdna-predominantly-contains-codingtranscribed-sequence) |
| Uncertainty / display limits | DNA exon shuffling differs from RNA alternative splicing. |

<a id="e-intron"></a>

### E.intron — Intron

| Field | Record |
|---|---|
| Kind / scoped aliases | sequence region |
| Exists in / context | Source intron-containing genes/pre-RNA |
| Biology / relations | Region removed in the specified RNA processing context; remains in genomic DNA. |
| State variables | genomic coordinates; transcript association; splice state |
| Evidence | [C07 §123](../chapters/07_from_dna_to_protein.md#123-introns), [C07 §125](../chapters/07_from_dna_to_protein.md#125-exonintron-terminology-applies-to-dna-and-corresponding-rna), [C07 §127](../chapters/07_from_dna_to_protein.md#127-gene-to-gene-intron-count-varies), [C07 §132](../chapters/07_from_dna_to_protein.md#132-rna-splicing), [C07 §135](../chapters/07_from_dna_to_protein.md#135-introns-contain-short-splicing-signals), [C08 §223](../chapters/08_control_of_gene_expression.md#223-alternative-splicing-is-a-post-transcriptional-control), [C10 §76](../chapters/10_analyzing_gene_structure_and_function.md#76-cdna-predominantly-contains-codingtranscribed-sequence) |
| Uncertainty / display limits | Not all introns are functionless or physically cut from chromosome during splicing. |

<a id="e-linker_dna"></a>

### E.linker_dna — Linker DNA

| Field | Record |
|---|---|
| Kind / scoped aliases | DNA interval/role |
| Exists in / context | Source nucleosomal chromatin |
| Biology / relations | DNA between nucleosome cores; length and H1 occupancy vary. |
| State variables | interval; adjacent cores; H1; length binding |
| Evidence | [C05 §107](../chapters/05_dna_chromosomes.md#107-linker-dna), [C05 §109](../chapters/05_dna_chromosomes.md#109-terminological-distinction-core-particle-versus-nucleosome), [C05 §120](../chapters/05_dna_chromosomes.md#120-histone-h1), [C05 §121](../chapters/05_dna_chromosomes.md#121-histone-h1-is-context-dependent-not-one-universal-occupancy-state) |
| Uncertainty / display limits | Not a second strand pool; core DNA length is not repeat length. |

<a id="e-chromatin_loop"></a>

### E.chromatin_loop — Chromatin loop

| Field | Record |
|---|---|
| Kind / scoped aliases | structural relation/region |
| Exists in / context | Source interphase/mitotic chromatin models |
| Biology / relations | Contact-constrained chromatin segment organized by source looping machinery. |
| State variables | anchors; extrusion/contacts; constituent intervals |
| Evidence | [C05 §128](../chapters/05_dna_chromosomes.md#128-loop-extrusion), [C05 §132](../chapters/05_dna_chromosomes.md#132-cohesin), [C05 §138](../chapters/05_dna_chromosomes.md#138-condensin), [C08 §108](../chapters/08_control_of_gene_expression.md#108-enhancerpromoter-loop-is-dynamic-representation) |
| Uncertainty / display limits | Exact extrusion geometry is unresolved; loop is not a membrane ring. |

<a id="e-tad"></a>

### E.tad — Chromatin loop domain

| Field | Record |
|---|---|
| Kind / scoped aliases | region/model; source TAD terminology retained |
| Exists in / context | Source interphase regulatory context |
| Biology / relations | Regulatory contact domain associated with source chromosome-loop organization. |
| State variables | boundary intervals; contacts; regulatory context |
| Evidence | [C08 §123](../chapters/08_control_of_gene_expression.md#123-loop-domain-function), [C08 §128](../chapters/08_control_of_gene_expression.md#128-loop-boundary-defects-can-cause-misexpression) |
| Uncertainty / display limits | Not a membrane compartment; unnamed boundary proteins remain unnamed. |

<a id="e-heterochromatin"></a>

### E.heterochromatin — Heterochromatin

| Field | Record |
|---|---|
| Kind / scoped aliases | chromatin state profile |
| Exists in / context | Source chromosome-region context |
| Biology / relations | Relatively compact state associated with silencing and specific chromatin proteins; can spread/reverse. |
| State variables | marks; accessibility; region; inheritance |
| Evidence | [C05 §172](../chapters/05_dna_chromosomes.md#172-heterochromatin), [C05 §174](../chapters/05_dna_chromosomes.md#174-constitutive-heterochromatin), [C05 §175](../chapters/05_dna_chromosomes.md#175-facultative-heterochromatin), [C05 §180](../chapters/05_dna_chromosomes.md#180-heterochromatin-can-spread), [C05 §183](../chapters/05_dna_chromosomes.md#183-heterochromatin-spreading-is-reversible) |
| Uncertainty / display limits | Not always permanently silent or a separate substance from chromatin. |

<a id="e-euchromatin"></a>

### E.euchromatin — Euchromatin

| Field | Record |
|---|---|
| Kind / scoped aliases | chromatin state profile |
| Exists in / context | Source chromosome-region context |
| Biology / relations | Relatively less condensed chromatin with heterogeneous activity. |
| State variables | accessibility; marks; transcription context |
| Evidence | [C05 §176](../chapters/05_dna_chromosomes.md#176-euchromatin), [C05 §177](../chapters/05_dna_chromosomes.md#177-euchromatin-is-not-uniformly-active), [C05 §179](../chapters/05_dna_chromosomes.md#179-chromatin-exists-as-a-continuum-of-structural-states) |
| Uncertainty / display limits | Not all euchromatin is actively transcribed. |

<a id="e-barr_body"></a>

### E.barr_body — Inactive X chromatin

| Field | Record |
|---|---|
| Kind / scoped aliases | chromosome state profile; Barr body |
| Exists in / context | Source mammalian X-inactivation example |
| Biology / relations | Persisting X chromosome in an inactivated chromatin state. |
| State variables | X identity; Xist; silencing; clonal history |
| Evidence | [C05 §189](../chapters/05_dna_chromosomes.md#189-x-inactivation), [C05 §191](../chapters/05_dna_chromosomes.md#191-x-inactivation-state-is-clonally-inherited), [C05 §195](../chapters/05_dna_chromosomes.md#195-barr-body-is-a-chromatin-state-not-an-extra-chromosome), [C08 §296](../chapters/08_control_of_gene_expression.md#296-xist-and-x-inactivation) |
| Uncertainty / display limits | Not an extra chromosome or deletion of an X. |

<a id="e-bivalent"></a>

### E.bivalent — Bivalent

| Field | Record |
|---|---|
| Kind / scoped aliases | relational assembly |
| Exists in / context | Meiotic prophase/metaphase I |
| Biology / relations | Paired duplicated homologs with four chromatids in the source scheme. |
| State variables | homologs; synaptonemal complex; chiasmata; orientation |
| Evidence | [C19 §37](../chapters/19_sexual_reproduction_genetics.md#37-bivalent), [C19 §48](../chapters/19_sexual_reproduction_genetics.md#48-synaptonemal-complex), [C19 §238](../chapters/19_sexual_reproduction_genetics.md#238-project-rule--bivalent-is-a-relationship-not-a-new-chromosome) |
| Uncertainty / display limits | Not one newly created chromosome. |

<a id="e-chiasma"></a>

### E.chiasma — Chiasma

| Field | Record |
|---|---|
| Kind / scoped aliases | structural relation |
| Exists in / context | Source meiotic crossover context |
| Biology / relations | Physical connection corresponding to nonsister crossover and retained cohesion context. |
| State variables | crossover; chromatids; cohesion; tension |
| Evidence | [C19 §53](../chapters/19_sexual_reproduction_genetics.md#53-chiasma), [C19 §58](../chapters/19_sexual_reproduction_genetics.md#58-chiasmata-mechanically-link-homologs), [C19 §59](../chapters/19_sexual_reproduction_genetics.md#59-chiasmata-resist-spindle-pulling), [C19 §63](../chapters/19_sexual_reproduction_genetics.md#63-anaphase-i-releases-chromosome-arms) |
| Uncertainty / display limits | Not a decorative X-shaped connector. |

<a id="e-plasmid"></a>

### E.plasmid — Plasmid

| Field | Record |
|---|---|
| Kind / scoped aliases | DNA assembly/type |
| Exists in / context | Source bacterial/experimental contexts |
| Biology / relations | Replicating DNA molecule distinct from bacterial chromosome; source cloning examples are circular duplexes. |
| State variables | sequence; origin; copy count; host; engineered insert |
| Evidence | [C10 §50](../chapters/10_analyzing_gene_structure_and_function.md#50-plasmid), [C10 §51](../chapters/10_analyzing_gene_structure_and_function.md#51-plasmid-replication-origin), [C10 §56](../chapters/10_analyzing_gene_structure_and_function.md#56-natural-plasmids-can-carry-antibiotic-resistance-genes) |
| Uncertainty / display limits | Source plasmid definition must not be extended to every possible plasmid form without evidence. |

<a id="e-mobile_element"></a>

### E.mobile_element — Mobile genetic element

| Field | Record |
|---|---|
| Kind / scoped aliases | family/sequence region |
| Exists in / context | Named source transposon contexts |
| Biology / relations | Genomic sequence capable of or derived from transposition; active/fossil state and mechanism remain distinct. |
| State variables | locus; class; activity; donor/target; copy history |
| Evidence | [C09 §17](../chapters/09_how_genes_and_genomes_evolve.md#17-mobile-genetic-element-transposition), [C09 §212](../chapters/09_how_genes_and_genomes_evolve.md#212-dna-only-transposon), [C09 §213](../chapters/09_how_genes_and_genomes_evolve.md#213-cut-and-paste-transposition), [C09 §214](../chapters/09_how_genes_and_genomes_evolve.md#214-replicative-transposition), [C09 §228](../chapters/09_how_genes_and_genomes_evolve.md#228-retrotransposition-information-flow), [C09 §459](../chapters/09_how_genes_and_genomes_evolve.md#459-mobile-element-fossils-retain-evolutionary-provenance) |
| Uncertainty / display limits | Virus is not an alias; transposition changes sequence coordinates, not only 3D position. |

<a id="e-provirus"></a>

### E.provirus — Provirus

| Field | Record |
|---|---|
| Kind / scoped aliases | integrated DNA region/state |
| Exists in / context | Source retroviral host genome |
| Biology / relations | Reverse-transcribed viral DNA integrated into host chromosome; lineage links it to incoming RNA. |
| State variables | integration site; sequence; latency; transcription |
| Evidence | [C09 §465](../chapters/09_how_genes_and_genomes_evolve.md#465-retrovirus-rna-and-proviral-dna-are-different-material-representations-of-one-viral-lineage), [C09 §466](../chapters/09_how_genes_and_genomes_evolve.md#466-provirus-integration-changes-host-genome-worldstate), [C09 §467](../chapters/09_how_genes_and_genomes_evolve.md#467-latency-is-not-absence) |
| Uncertainty / display limits | Latency is not absence; RNA is not directly integrated. |

<a id="e-pseudogene"></a>

### E.pseudogene — Pseudogene

| Field | Record |
|---|---|
| Kind / scoped aliases | genomic region/annotation |
| Exists in / context | Source gene-family evolution |
| Biology / relations | Disabled gene-derived sequence retained in genomic DNA. |
| State variables | ancestral gene; sequence; disabling changes; locus |
| Evidence | [C09 §444](../chapters/09_how_genes_and_genomes_evolve.md#444-pseudogene-remains-genomic-dna) |
| Uncertainty / display limits | Nonfunctional product does not imply genomic deletion. |
