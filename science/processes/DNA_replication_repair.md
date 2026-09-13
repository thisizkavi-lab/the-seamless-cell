# DNA replication and repair

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 22 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-dna_replication"></a>

### P.dna_replication — DNA replication

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.dna](../entities/molecular_entities.md#e-dna), [E.replisome](../entities/macromolecular_complexes.md#e-replisome), dNTPs/primers at licensed source origins |
| Required state / input | Replication-competent cell state and template/precursor availability |
| WorldState change / output | Semiconservative synthesis creates daughter DNA with template ancestry; fork-relative leading/lagging synthesis and primer replacement/ligation coordinated. |
| Trigger / termination | Origin firing; fork completion or replication stress |
| Energy / time / noise / limits | dNTP incorporation plus machinery-specific nucleotide use; no universal fork speed or simultaneous origin firing. |
| Evidence | [C06 §10](../chapters/06_dna_replication_repair.md#10-semiconservative-replication), [C06 §11](../chapters/06_dna_replication_repair.md#11-replication-preserves-strand-identity), [C06 §23](../chapters/06_dna_replication_repair.md#23-replication-fork), [C06 §30](../chapters/06_dna_replication_repair.md#30-origins-need-not-activate-simultaneously), [C06 §33](../chapters/06_dna_replication_repair.md#33-dna-polymerase-extends-the-3-end), [C06 §38](../chapters/06_dna_replication_repair.md#38-energy-for-nucleotide-addition-comes-from-the-incoming-triphosphate), [C06 §43](../chapters/06_dna_replication_repair.md#43-replication-fork-asymmetry), [C06 §63](../chapters/06_dna_replication_repair.md#63-primase-is-an-rna-polymerase), [C18 §97](../chapters/18_cell_cycle.md#97-s-phase-fidelity-requirement), [C18 §102](../chapters/18_cell_cycle.md#102-origin-firing) |

<a id="p-origin_licensing"></a>

### P.origin_licensing — Replication-origin licensing and firing control

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | [E.replication_origin](../entities/chromosomes_genome.md#e-replication_origin), [E.orc](../entities/macromolecular_complexes.md#e-orc), [E.cdc6](../entities/molecular_entities.md#e-cdc6), helicase and S-Cdk in source eukaryotic context |
| Required state / input | Low-Cdk G1 permits loading; S-phase activation distinct |
| WorldState change / output | Origin progresses unloaded→licensed/loaded; source S-Cdk control prevents inappropriate reloading until a permissive next G1. Origin firing is the subsequent replication-initiation event. |
| Trigger / termination | Phase/regulator context; completion/reset or checkpoint inhibition |
| Energy / time / noise / limits | Source control model; no universal origin-recognition sequence or timer. |
| Evidence | [C18 §98](../chapters/18_cell_cycle.md#98-replication-origins), [C18 §99](../chapters/18_cell_cycle.md#99-orc), [C18 §100](../chapters/18_cell_cycle.md#100-cdc6), [C18 §101](../chapters/18_cell_cycle.md#101-origin-loading), [C18 §102](../chapters/18_cell_cycle.md#102-origin-firing), [C18 §103](../chapters/18_cell_cycle.md#103-s-cdk-blocks-re-replication), [C18 §104](../chapters/18_cell_cycle.md#104-replication-licensing-resets-in-next-g1) |

<a id="p-replication_proofreading"></a>

### P.replication_proofreading — Replication proofreading

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | Proofreading-capable polymerase and newly extended DNA |
| Required state / input | Mismatched terminal addition in source editing context |
| WorldState change / output | Nascent end switches to editing/removal and returns to extension, reducing retained errors. |
| Trigger / termination | Polymerase mismatch/editing state; corrected terminus/extension |
| Energy / time / noise / limits | Not post-replication mismatch repair or the final population mutation rate. |
| Evidence | [C06 §52](../chapters/06_dna_replication_repair.md#52-polymerase-accuracy-with-proofreading), [C06 §55](../chapters/06_dna_replication_repair.md#55-proofreading-occurs-before-continued-extension), [C06 §56](../chapters/06_dna_replication_repair.md#56-polymerization-and-proofreading-use-separate-catalytic-sites), [C06 §57](../chapters/06_dna_replication_repair.md#57-dna-moves-between-polymerizing-and-editing-configurations) |

<a id="p-mismatch_repair"></a>

### P.mismatch_repair — Post-replication mismatch repair

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Mismatched DNA and source strand-discrimination/repair machinery |
| Required state / input | Mismatch escaping polymerase proofreading and appropriate new-strand recognition |
| WorldState change / output | Incorrect new-strand segment replaced using template information and backbone resealed. |
| Trigger / termination | Mismatch detection; repair completion/failure |
| Energy / time / noise / limits | Preserve bacterial methylation context; do not apply it universally to eukaryotes. |
| Evidence | [C06 §155](../chapters/06_dna_replication_repair.md#155-mismatch), [C06 §156](../chapters/06_dna_replication_repair.md#156-mismatch-repair), [C06 §157](../chapters/06_dna_replication_repair.md#157-mismatch-repair-correction-rate), [C06 §161](../chapters/06_dna_replication_repair.md#161-mismatch-repair-must-identify-the-new-strand), [C06 §162](../chapters/06_dna_replication_repair.md#162-bacterial-strand-discrimination-in-the-source), [C06 §163](../chapters/06_dna_replication_repair.md#163-other-cells-use-different-strand-discrimination-strategies), [C06 §164](../chapters/06_dna_replication_repair.md#164-mismatch-repair-process), [C06 §165](../chapters/06_dna_replication_repair.md#165-mismatch-can-become-a-fixed-mutation-after-another-replication-round) |

<a id="p-lesion_repair"></a>

### P.lesion_repair — DNA lesion repair

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; excision/fill/seal route qualified |
| Participants / location | Damaged DNA, repair enzymes, polymerase and ligase |
| Required state / input | Recognized lesion and appropriate template/pathway |
| WorldState change / output | Damaged material removed, missing sequence resynthesized and nicks sealed where source supports route. |
| Trigger / termination | Lesion detection; repair completion or persistent damage |
| Energy / time / noise / limits | Damage, mismatch and fixed mutation are distinct; no complete repair-family taxonomy invented. |
| Evidence | [C06 §128](../chapters/06_dna_replication_repair.md#128-dna-damage-is-continuous), [C06 §131](../chapters/06_dna_replication_repair.md#131-depurination), [C06 §132](../chapters/06_dna_replication_repair.md#132-depurination-does-not-break-the-phosphodiester-backbone), [C06 §135](../chapters/06_dna_replication_repair.md#135-deamination), [C06 §136](../chapters/06_dna_replication_repair.md#136-cytosine-to-uracil-damage-is-recognizable), [C06 §138](../chapters/06_dna_replication_repair.md#138-uv-damage), [C06 §139](../chapters/06_dna_replication_repair.md#139-thymine-dimer), [C06 §147](../chapters/06_dna_replication_repair.md#147-general-three-step-dna-repair-pathway), [C06 §148](../chapters/06_dna_replication_repair.md#148-repair-step-1--damage-recognition-and-excision), [C06 §149](../chapters/06_dna_replication_repair.md#149-repair-step-2--dna-resynthesis), [C06 §153](../chapters/06_dna_replication_repair.md#153-repair-step-3--ligation), [C06 §154](../chapters/06_dna_replication_repair.md#154-damage-specific-nucleases-are-not-one-universal-repair-enzyme), [C06 §195](../chapters/06_dna_replication_repair.md#195-mutation-versus-damage) |

<a id="p-double_strand_break_repair"></a>

### P.double_strand_break_repair — Double-strand-break repair

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; alternative routes |
| Participants / location | Broken DNA and source end-joining or homology-directed machinery |
| Required state / input | Double-strand break; pathway and template availability specified |
| WorldState change / output | DNA continuity restored via selected route, with route-specific sequence outcomes and uncertainty. |
| Trigger / termination | Break recognition; joining/recombination completion or failure |
| Energy / time / noise / limits | Do not treat all repair as error-free or all breaks as deliberate. |
| Evidence | [C06 §168](../chapters/06_dna_replication_repair.md#168-double-strand-break), [C06 §169](../chapters/06_dna_replication_repair.md#169-double-strand-breaks-are-especially-dangerous), [C06 §170](../chapters/06_dna_replication_repair.md#170-single-strand-template-logic-is-insufficient-for-a-double-strand-break), [C06 §171](../chapters/06_dna_replication_repair.md#171-two-broad-double-strand-break-strategies-in-chapter-6), [C10 §297](../chapters/10_analyzing_gene_structure_and_function.md#297-cas9-cleavage), [C10 §299](../chapters/10_analyzing_gene_structure_and_function.md#299-crispr-editing-depends-on-host-dna-repair-pathways), [C20 §263](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#263-brca1brca2--tumor-suppressors) |

<a id="p-homologous_recombination"></a>

### P.homologous_recombination — Homologous recombination

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Homologous DNA templates/ends and context-specific recombination machinery |
| Required state / input | Matching sequence/template and initiating lesion/meiotic context |
| WorldState change / output | Strand exchange, synthesis, resolution and ligation produce repaired/recombined DNA with ancestry tracked. |
| Trigger / termination | Source damage or meiotic initiation; resolved products |
| Energy / time / noise / limits | Repair and crossing-over share mechanisms but are not identical endpoint claims. Source RecA/Rad52 naming is retained. |
| Evidence | [C06 §178](../chapters/06_dna_replication_repair.md#178-homologous-recombination), [C06 §179](../chapters/06_dna_replication_repair.md#179-homologous-template-requirement), [C06 §182](../chapters/06_dna_replication_repair.md#182-hr-step-1--5-end-resection), [C06 §183](../chapters/06_dna_replication_repair.md#183-hr-step-2--strand-invasion), [C06 §184](../chapters/06_dna_replication_repair.md#184-source-named-homologous-recombination-proteins), [C06 §185](../chapters/06_dna_replication_repair.md#185-hr-sequence-matching), [C06 §186](../chapters/06_dna_replication_repair.md#186-hr-step-3--repair-synthesis), [C06 §187](../chapters/06_dna_replication_repair.md#187-hr-step-4--returnreannealing), [C06 §188](../chapters/06_dna_replication_repair.md#188-hr-step-5--completion-synthesis), [C06 §189](../chapters/06_dna_replication_repair.md#189-hr-step-6--ligation), [C06 §190](../chapters/06_dna_replication_repair.md#190-hr-final-state), [C06 §193](../chapters/06_dna_replication_repair.md#193-homologous-recombination-also-contributes-to-meiosis), [C19 §44](../chapters/19_sexual_reproduction_genetics.md#44-homologous-recombination-during-meiosis), [C19 §45](../chapters/19_sexual_reproduction_genetics.md#45-meiotic-recombination-occurs-between-nonsister-chromatids), [C19 §47](../chapters/19_sexual_reproduction_genetics.md#47-recombination-begins-with-dna-break-in-source-model), [C10 §272](../chapters/10_analyzing_gene_structure_and_function.md#272-homologous-recombination-in-es-cells) |

<a id="p-end_joining"></a>

### P.end_joining — Nonhomologous end joining

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; source end-joining route |
| Participants / location | Broken DNA ends and source repair machinery |
| Required state / input | Available ends and appropriate repair context |
| WorldState change / output | Ends joined; possible sequence changes remain part of product provenance. |
| Trigger / termination | DNA break response; ligated product or failed repair |
| Energy / time / noise / limits | No invented accuracy/rate or complete factor inventory. |
| Evidence | [C06 §172](../chapters/06_dna_replication_repair.md#172-nonhomologous-end-joining), [C06 §173](../chapters/06_dna_replication_repair.md#173-nhej-broken-end-processing), [C06 §174](../chapters/06_dna_replication_repair.md#174-nhej-ligation), [C06 §175](../chapters/06_dna_replication_repair.md#175-nhej-is-fast-but-often-sequence-altering-in-the-source-model), [C06 §176](../chapters/06_dna_replication_repair.md#176-nhej-can-delete-dna), [C06 §177](../chapters/06_dna_replication_repair.md#177-nhej-does-not-require-a-homologous-template-in-the-source-model) |

<a id="p-chromosome_end_maintenance"></a>

### P.chromosome_end_maintenance — Telomere extension/maintenance

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.telomere](../entities/chromosomes_genome.md#e-telomere) and [E.telomerase](../entities/macromolecular_complexes.md#e-telomerase) in source active contexts |
| Required state / input | Telomerase-expressing/active state and chromosome-end substrate |
| WorldState change / output | RNA-template-dependent extension contributes to chromosome-end maintenance. |
| Trigger / termination | End-maintenance program; extension completion or inactivity |
| Energy / time / noise / limits | Not every cell expresses telomerase; no automatic immortality claim. |
| Evidence | [C06 §111](../chapters/06_dna_replication_repair.md#111-telomere-end-replication-problem), [C06 §116](../chapters/06_dna_replication_repair.md#116-telomerase), [C06 §117](../chapters/06_dna_replication_repair.md#117-telomerase-carries-its-own-rna-template), [C06 §118](../chapters/06_dna_replication_repair.md#118-telomerase-extends-the-3-end-of-the-lagging-strand-template), [C06 §119](../chapters/06_dna_replication_repair.md#119-conventional-replication-machinery-completes-the-complementary-strand), [C06 §120](../chapters/06_dna_replication_repair.md#120-a-short-single-stranded-chromosome-end-region-remains), [C06 §123](../chapters/06_dna_replication_repair.md#123-telomerase-activity-varies-by-cell-type), [C20 §243](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#243-telomerase-reactivation) |

<a id="p-mutation"></a>

### P.mutation — Mutation occurrence and lineage retention

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/material |
| Participants / location | DNA sequence in a specific cell/germ-line or somatic lineage |
| Required state / input | Source replication/repair/damage context yielding persistent sequence change |
| WorldState change / output | Sequence changes and descendants inherit the relevant changed material; phenotype/fitness may be unknown. |
| Trigger / termination | Event-specific damage/repair/replication; fixation/retention/loss assessed separately |
| Energy / time / noise / limits | Stochastic; mutation is not caused by future environmental need. Error and final lineage mutation rates differ. |
| Evidence | [C06 §4](../chapters/06_dna_replication_repair.md#4-mutation), [C09 §33](../chapters/09_how_genes_and_genomes_evolve.md#33-point-mutation), [C09 §34](../chapters/09_how_genes_and_genomes_evolve.md#34-origin-of-point-mutations), [C09 §45](../chapters/09_how_genes_and_genomes_evolve.md#45-selection-does-not-instruct-the-mutation), [C09 §436](../chapters/09_how_genes_and_genomes_evolve.md#436-evolution-must-be-modeled-as-lineage-history), [C09 §437](../chapters/09_how_genes_and_genomes_evolve.md#437-germ-line-mutation-and-somatic-mutation-require-separate-worldstate-consequences), [C20 §220](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#220-somatic-mutation), [C20 §221](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#221-germ-line-mutation) |

<a id="p-gene_duplication"></a>

### P.gene_duplication — Gene/segment duplication

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Source homologous regions, genome and recombination machinery |
| Required state / input | Source misalignment/duplication mechanism |
| WorldState change / output | Copy-number and genomic structure change; daughter copies retain ancestral-gene links. |
| Trigger / termination | Specific duplication event; completed products with sequence coordinates |
| Energy / time / noise / limits | No automatic useful new function; paired deletion products retained where source mechanism requires. |
| Evidence | [C09 §13](../chapters/09_how_genes_and_genomes_evolve.md#13-gene-duplication-and-divergence), [C09 §71](../chapters/09_how_genes_and_genomes_evolve.md#71-homologous-recombination-can-generate-duplication), [C09 §74](../chapters/09_how_genes_and_genomes_evolve.md#74-repeated-dna-can-promote-misalignment), [C09 §441](../chapters/09_how_genes_and_genomes_evolve.md#441-gene-duplication-preserves-identity-history) |

<a id="p-genome_duplication"></a>

### P.genome_duplication — Whole-genome duplication

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Replicated genome and cell-division/germ-line context |
| Required state / input | Source failed-division/retention event beyond ordinary S phase |
| WorldState change / output | Inherited genome-set/ploidy state changes rather than merely DNA content before normal division. |
| Trigger / termination | Source duplication/failed division; lineage outcome |
| Energy / time / noise / limits | Not routine replication before every mitosis; duplicate retention is not guaranteed. |
| Evidence | [C09 §14](../chapters/09_how_genes_and_genomes_evolve.md#14-whole-genome-duplication), [C09 §103](../chapters/09_how_genes_and_genomes_evolve.md#103-whole-genome-duplication-mechanism), [C09 §425](../chapters/09_how_genes_and_genomes_evolve.md#425-genome-duplication-schema) |

<a id="p-exon_shuffling"></a>

### P.exon_shuffling — Exon shuffling

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Genomic exon/intron regions and recombination context |
| Required state / input | Source DNA recombination between gene regions |
| WorldState change / output | Gene structure/domain-coding organization changes with donor/recipient ancestry. |
| Trigger / termination | DNA recombination event; completed genomic products |
| Energy / time / noise / limits | Not alternative RNA splicing or arbitrary protein-domain invention. |
| Evidence | [C09 §110](../chapters/09_how_genes_and_genomes_evolve.md#110-exon-shuffling-recombination-occurs-in-introns), [C09 §445](../chapters/09_how_genes_and_genomes_evolve.md#445-protein-domain-identity-must-survive-exon-shuffling-visualization) |

<a id="p-transposition"></a>

### P.transposition — DNA-element transposition

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; cut-and-paste/replicative branches |
| Participants / location | [E.mobile_element](../entities/chromosomes_genome.md#e-mobile_element), donor/target DNA and transposase in source context |
| Required state / input | Active element and compatible recognition/machinery |
| WorldState change / output | Donor/target sequences and copy number change according to selected mechanism; coordinate remapping recorded. |
| Trigger / termination | Source transposition initiation; integration/repair completion |
| Energy / time / noise / limits | Replicative retains donor copy; cut-and-paste edits donor. Physical nuclear motion alone is not transposition. |
| Evidence | [C09 §212](../chapters/09_how_genes_and_genomes_evolve.md#212-dna-only-transposon), [C09 §213](../chapters/09_how_genes_and_genomes_evolve.md#213-cut-and-paste-transposition), [C09 §214](../chapters/09_how_genes_and_genomes_evolve.md#214-replicative-transposition), [C09 §218](../chapters/09_how_genes_and_genomes_evolve.md#218-transposase-recognizes-element-specific-terminal-dna), [C09 §447](../chapters/09_how_genes_and_genomes_evolve.md#447-mobile-element-activity-is-not-merely-movement-in-3d-nuclear-space), [C09 §448](../chapters/09_how_genes_and_genomes_evolve.md#448-cut-and-paste-transposition-is-a-dna-editing-event), [C09 §449](../chapters/09_how_genes_and_genomes_evolve.md#449-replicative-transposition-changes-copy-number) |

<a id="p-retrotransposition"></a>

### P.retrotransposition — Retrotransposition

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/lineage |
| Participants / location | Active retroelement DNA, RNA intermediate and reverse-transcription/insertion machinery |
| Required state / input | Source element-specific expression and required machinery |
| WorldState change / output | RNA-derived DNA copy integrates at new locus while ancestry/copy history are retained. |
| Trigger / termination | Element expression; integration or failed intermediate |
| Energy / time / noise / limits | L1 and Alu differ; do not give dependent Alu its own encoded reverse transcriptase. |
| Evidence | [C09 §228](../chapters/09_how_genes_and_genomes_evolve.md#228-retrotransposition-information-flow), [C09 §232](../chapters/09_how_genes_and_genomes_evolve.md#232-l1-transcription), [C09 §450](../chapters/09_how_genes_and_genomes_evolve.md#450-retrotransposition-requires-rna-intermediate) |

<a id="p-horizontal_gene_transfer"></a>

### P.horizontal_gene_transfer — Horizontal gene transfer

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/lineage |
| Participants / location | Donor/recipient cells or extracellular DNA in source context |
| Required state / input | Compatible transfer route and recipient state |
| WorldState change / output | DNA enters another lineage and may integrate/replicate/express; success not presumed. |
| Trigger / termination | Source conjugation or transformation; uptake/establishment or loss |
| Energy / time / noise / limits | Conjugation requires connected cells; transformation is free-DNA uptake, not fertilization. |
| Evidence | [C09 §130](../chapters/09_how_genes_and_genomes_evolve.md#130-bacterial-conjugation), [C09 §451](../chapters/09_how_genes_and_genomes_evolve.md#451-horizontal-transfer-crosses-organism-boundaries), [C09 §452](../chapters/09_how_genes_and_genomes_evolve.md#452-conjugation-requires-two-cells), [C10 §58](../chapters/10_analyzing_gene_structure_and_function.md#58-transformation), [C10 §59](../chapters/10_analyzing_gene_structure_and_function.md#59-natural-transformation), [C10 §61](../chapters/10_analyzing_gene_structure_and_function.md#61-transformation-is-distinct-from-conjugation) |

<a id="p-viral_genome_replication"></a>

### P.viral_genome_replication — Viral genome replication

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Named viral genome and host/machinery context |
| Required state / input | Viral entry/template availability and appropriate polymerase system |
| WorldState change / output | New viral genome material produced via source RNA-replication or retroviral DNA intermediate routes. |
| Trigger / termination | Infection/replication state; assembly, latency or failure |
| Energy / time / noise / limits | Virus classes are not interchangeable; integrated provirus is host-genome material. No universal burst size. |
| Evidence | [C09 §262](../chapters/09_how_genes_and_genomes_evolve.md#262-sars-cov-2-genome-acts-initially-as-mrna), [C09 §273](../chapters/09_how_genes_and_genomes_evolve.md#273-reverse-information-flow), [C09 §275](../chapters/09_how_genes_and_genomes_evolve.md#275-retrovirus-carries-reverse-transcriptase-in-the-virion), [C09 §276](../chapters/09_how_genes_and_genomes_evolve.md#276-retroviral-first-dna-strand), [C09 §277](../chapters/09_how_genes_and_genomes_evolve.md#277-rna-removal-and-second-strand-synthesis), [C09 §282](../chapters/09_how_genes_and_genomes_evolve.md#282-host-rna-polymerase-transcribes-provirus), [C09 §283](../chapters/09_how_genes_and_genomes_evolve.md#283-retroviral-rna-has-dual-roles), [C09 §284](../chapters/09_how_genes_and_genomes_evolve.md#284-retroviral-proteins-produced-by-host-ribosomes), [C09 §463](../chapters/09_how_genes_and_genomes_evolve.md#463-sars-cov-2-genomic-rna-is-a-persistent-biological-entity-across-stages), [C09 §465](../chapters/09_how_genes_and_genomes_evolve.md#465-retrovirus-rna-and-proviral-dna-are-different-material-representations-of-one-viral-lineage) |

<a id="p-crispr_immunity"></a>

### P.crispr_immunity — CRISPR immune memory and targeting

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/lineage |
| Participants / location | Prokaryotic CRISPR locus, acquired sequence, crRNA and Cas machinery |
| Required state / input | Appropriate source immune system and matching target |
| WorldState change / output | Sequence acquisition changes genomic memory; processed guide directs subsequent target attack. |
| Trigger / termination | Source acquisition/recognition; target processing or persistence |
| Energy / time / noise / limits | Immune memory changes DNA and is not histone-based epigenetic inheritance; generic Cas is not automatically Cas9. |
| Evidence | [C08 §274](../chapters/08_control_of_gene_expression.md#274-crispr), [C08 §276](../chapters/08_control_of_gene_expression.md#276-crispr-memory-is-stored-in-dna), [C08 §279](../chapters/08_control_of_gene_expression.md#279-acquisition-step), [C08 §280](../chapters/08_control_of_gene_expression.md#280-crispr-locus-is-inherited), [C08 §281](../chapters/08_control_of_gene_expression.md#281-crispr-transcription), [C08 §282](../chapters/08_control_of_gene_expression.md#282-crrna-processing), [C08 §283](../chapters/08_control_of_gene_expression.md#283-cas-enzyme), [C08 §284](../chapters/08_control_of_gene_expression.md#284-crrna-guides-cas) |

<a id="p-pcr_amplification"></a>

### P.pcr_amplification — PCR amplification

| Field | Record |
|---|---|
| Kind / scoped aliases | experimental_material/composite |
| Participants / location | Extracted DNA/cDNA, DNA primers, dNTPs and thermostable polymerase in reaction tube |
| Required state / input | Specimen branch, complementary primer pair and source cycling conditions |
| WorldState change / output | Denaturation/annealing/extension create assay DNA copies with template provenance. |
| Trigger / termination | Experimental cycles; stopping/reagent/efficiency limits |
| Energy / time / noise / limits | Ideal doubling is a model, not guaranteed yield; original cell copy number stays unchanged. |
| Evidence | [C10 §98](../chapters/10_analyzing_gene_structure_and_function.md#98-pcr-is-cell-free-amplification), [C10 §99](../chapters/10_analyzing_gene_structure_and_function.md#99-pcr-combines-hybridization-and-dna-synthesis), [C10 §100](../chapters/10_analyzing_gene_structure_and_function.md#100-pcr-primer), [C10 §101](../chapters/10_analyzing_gene_structure_and_function.md#101-primers-define-target-boundaries), [C10 §103](../chapters/10_analyzing_gene_structure_and_function.md#103-pcr-cycle--step-1), [C10 §104](../chapters/10_analyzing_gene_structure_and_function.md#104-pcr-cycle--step-2), [C10 §105](../chapters/10_analyzing_gene_structure_and_function.md#105-pcr-cycle--step-3), [C10 §110](../chapters/10_analyzing_gene_structure_and_function.md#110-ideal-amplification-relation), [C10 §355](../chapters/10_analyzing_gene_structure_and_function.md#355-pcr-amplicons-are-experimental-copies) |

<a id="p-reverse_transcription"></a>

### P.reverse_transcription — Reverse transcription

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | RNA template and reverse transcriptase in named assay/viral/retroelement context |
| Required state / input | RNA template, priming and required substrates |
| WorldState change / output | New DNA is derived from RNA sequence; molecular identity differs while lineage is linked. |
| Trigger / termination | Context-specific initiation; DNA synthesis completion |
| Energy / time / noise / limits | Assay cDNA remains in the specimen branch; viral RNA-derived DNA belongs to its biological viral lineage before and after any integration. |
| Evidence | [C10 §71](../chapters/10_analyzing_gene_structure_and_function.md#71-cdna), [C10 §80](../chapters/10_analyzing_gene_structure_and_function.md#80-reverse-transcriptase-in-cdna-synthesis), [C10 §81](../chapters/10_analyzing_gene_structure_and_function.md#81-rnadna-hybrid), [C10 §84](../chapters/10_analyzing_gene_structure_and_function.md#84-dna-polymerase-makes-second-cdna-strand), [C09 §275](../chapters/09_how_genes_and_genomes_evolve.md#275-retrovirus-carries-reverse-transcriptase-in-the-virion), [C09 §276](../chapters/09_how_genes_and_genomes_evolve.md#276-retroviral-first-dna-strand), [C09 §465](../chapters/09_how_genes_and_genomes_evolve.md#465-retrovirus-rna-and-proviral-dna-are-different-material-representations-of-one-viral-lineage) |

<a id="p-crispr_editing"></a>

### P.crispr_editing — CRISPR-Cas9 genomic perturbation

| Field | Record |
|---|---|
| Kind / scoped aliases | experimental_material/composite |
| Participants / location | Engineered Cas9/guide, target DNA, optional donor and host repair machinery |
| Required state / input | Guide-target compatibility and qualified experimental cell context |
| WorldState change / output | Target cleavage produces a break; host repair determines final genomic change. |
| Trigger / termination | Engineered targeting; repair outcome/failure |
| Energy / time / noise / limits | Cas9 does not independently write replacement DNA; PAM/repair frequencies are verification gaps, not invented defaults. |
| Evidence | [C10 §292](../chapters/10_analyzing_gene_structure_and_function.md#292-crispr), [C10 §293](../chapters/10_analyzing_gene_structure_and_function.md#293-cas9), [C10 §295](../chapters/10_analyzing_gene_structure_and_function.md#295-guide-rna), [C10 §297](../chapters/10_analyzing_gene_structure_and_function.md#297-cas9-cleavage), [C10 §298](../chapters/10_analyzing_gene_structure_and_function.md#298-donor-template-replacement), [C10 §299](../chapters/10_analyzing_gene_structure_and_function.md#299-crispr-editing-depends-on-host-dna-repair-pathways), [C10 §300](../chapters/10_analyzing_gene_structure_and_function.md#300-crispr-does-not-write-arbitrary-dna-by-itself), [C10 §430](../chapters/10_analyzing_gene_structure_and_function.md#430-quantitative-verification-queue) |

<a id="p-natural_selection"></a>

### P.natural_selection — Natural selection on heritable variation

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/pattern |
| Participants / location | Source population/lineages and inherited variants in a specified environment |
| Required state / input | Heritable differences with differential reproductive outcomes |
| WorldState change / output | Variant/lineage frequencies change through differential survival and reproduction. |
| Trigger / termination | Source population/environment context; continued selection or changed context |
| Energy / time / noise / limits | Does not direct mutations toward need, guarantee beneficial outcomes or create a genotype from visualization color. Cancer clonal selection uses this pattern with somatic lineage context. |
| Evidence | [C09 §45](../chapters/09_how_genes_and_genomes_evolve.md#45-selection-does-not-instruct-the-mutation), [C09 §142](../chapters/09_how_genes_and_genomes_evolve.md#142-beneficial-mutation), [C09 §143](../chapters/09_how_genes_and_genomes_evolve.md#143-deleterious-mutation), [C09 §144](../chapters/09_how_genes_and_genomes_evolve.md#144-neutral-mutation), [C09 §149](../chapters/09_how_genes_and_genomes_evolve.md#149-conservation-does-not-mean-sequence-never-mutates), [C09 §438](../chapters/09_how_genes_and_genomes_evolve.md#438-selection-operates-on-reproductive-outcomes-not-animation-color), [C09 §439](../chapters/09_how_genes_and_genomes_evolve.md#439-mutation-should-be-stochastic-not-goal-directed), [C09 §440](../chapters/09_how_genes_and_genomes_evolve.md#440-mutation-and-selection-use-different-clocks), [C20 §235](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#235-cancer-evolves-clonally), [C20 §236](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#236-tumor-subclones) |
