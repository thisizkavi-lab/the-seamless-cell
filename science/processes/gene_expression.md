# Gene expression

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 21 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-gene_expression"></a>

### P.gene_expression — Gene expression

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.gene](../entities/chromosomes_genome.md#e-gene), [E.dna](../entities/molecular_entities.md#e-dna), transcription/processing machinery and functional RNA or protein product |
| Required state / input | Gene accessibility, appropriate regulators and expression machinery in named cell context |
| WorldState change / output | Expression changes RNA production and, for protein-coding output, translation/maturation; abundance also depends on decay. |
| Trigger / termination | Regulatory state; repression/decay/turnover and changing context |
| Energy / time / noise / limits | Compose transcription/processing/translation; functional RNA genes need no translation. No duplicate output events. |
| Evidence | [C05 §37](../chapters/05_dna_chromosomes.md#37-genes-encode-rna-products), [C05 §38](../chapters/05_dna_chromosomes.md#38-protein-coding-information-is-indirect), [C08 §35](../chapters/08_control_of_gene_expression.md#35-seven-control-points-in-eukaryotic-gene-expression), [C08 §36](../chapters/08_control_of_gene_expression.md#36-transcriptional-control-is-generally-dominant), [C08 §38](../chapters/08_control_of_gene_expression.md#38-post-transcriptional-control-remains-important), [C10 §424](../chapters/10_analyzing_gene_structure_and_function.md#424-measurement-hierarchy) |

<a id="p-transcription"></a>

### P.transcription — Transcription

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive at pathway resolution |
| Participants / location | [E.dna](../entities/molecular_entities.md#e-dna) template, [E.rna_polymerase](../entities/macromolecular_complexes.md#e-rna_polymerase), NTPs and source-specific initiation factors |
| Required state / input | Accessible promoter/template; appropriate bacterial or eukaryotic machinery |
| WorldState change / output | Initiation → RNA elongation → termination; new RNA sequence derives from template and DNA remains. |
| Trigger / termination | Promoter recognition/activation; source termination and polymerase release |
| Energy / time / noise / limits | NTP incorporation; rates contextual. RNA grows 5′→3′; transcription is not DNA replication. |
| Evidence | [C07 §22](../chapters/07_from_dna_to_protein.md#22-transcription), [C07 §23](../chapters/07_from_dna_to_protein.md#23-only-one-dna-strand-is-used-as-template-for-a-given-transcription-event), [C07 §27](../chapters/07_from_dna_to_protein.md#27-rna-polymerase), [C07 §28](../chapters/07_from_dna_to_protein.md#28-rna-polymerase-substrates), [C07 §29](../chapters/07_from_dna_to_protein.md#29-transcription-polymerization-direction), [C07 §30](../chapters/07_from_dna_to_protein.md#30-rna-polymerase-movement-relative-to-dna-template), [C07 §31](../chapters/07_from_dna_to_protein.md#31-energy-for-rna-synthesis), [C07 §32](../chapters/07_from_dna_to_protein.md#32-local-dna-opening-during-transcription), [C07 §33](../chapters/07_from_dna_to_protein.md#33-dna-rewinds-behind-rna-polymerase), [C07 §71](../chapters/07_from_dna_to_protein.md#71-terminator), [C07 §74](../chapters/07_from_dna_to_protein.md#74-eukaryotes-use-three-nuclear-rna-polymerases), [C07 §79](../chapters/07_from_dna_to_protein.md#79-eukaryotic-transcription-initiation-requires-general-transcription-factors), [C07 §85](../chapters/07_from_dna_to_protein.md#85-not-all-pol-ii-promoters-require-all-source-promoter-elements), [C08 §106](../chapters/08_control_of_gene_expression.md#106-eukaryotic-activation-sequence) |

<a id="p-rna_capping"></a>

### P.rna_capping — RNA 5′ capping

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | Nascent eukaryotic Pol-II RNA and cap machinery |
| Required state / input | Appropriate nascent RNA context |
| WorldState change / output | 5′ cap modification forms; transcript instance persists and binding/processing state changes. |
| Trigger / termination | Early transcriptional context; cap completion |
| Energy / time / noise / limits | Source-specific chemistry; no universal delay or cap on every RNA family. |
| Evidence | [C07 §108](../chapters/07_from_dna_to_protein.md#108-5-rna-capping), [C07 §109](../chapters/07_from_dna_to_protein.md#109-capping-timing), [C07 §110](../chapters/07_from_dna_to_protein.md#110-cap-nucleotide-identity), [C07 §111](../chapters/07_from_dna_to_protein.md#111-7-methylguanosine), [C07 §112](../chapters/07_from_dna_to_protein.md#112-5-cap-linkage), [C07 §113](../chapters/07_from_dna_to_protein.md#113-additional-cap-methylation), [C07 §114](../chapters/07_from_dna_to_protein.md#114-bacterial-mrna-lacks-the-same-eukaryotic-cap) |

<a id="p-rna_splicing"></a>

### P.rna_splicing — RNA splicing

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite; alternative splicing is a choice of products |
| Participants / location | Pre-mRNA, [E.spliceosome](../entities/macromolecular_complexes.md#e-spliceosome) and source splice-site/branch sequences |
| Required state / input | Compatible splice sites and assembled processing machinery |
| WorldState change / output | Intron RNA removed and exon RNA joined; lariat/product lineage retained; alternative choices yield distinct isoforms. |
| Trigger / termination | Co-/post-transcriptional processing state; selected splicing completion or failure |
| Energy / time / noise / limits | Source ATP-dependent remodeling distinct from RNA catalytic steps; DNA locus remains intact. |
| Evidence | [C07 §132](../chapters/07_from_dna_to_protein.md#132-rna-splicing), [C07 §133](../chapters/07_from_dna_to_protein.md#133-splicing-starts-during-transcription), [C07 §134](../chapters/07_from_dna_to_protein.md#134-complete-all-intronall-exon-pre-mrna-is-often-transient-or-absent), [C07 §135](../chapters/07_from_dna_to_protein.md#135-introns-contain-short-splicing-signals), [C07 §137](../chapters/07_from_dna_to_protein.md#137-branch-point-adenine), [C07 §138](../chapters/07_from_dna_to_protein.md#138-intron-lariat), [C07 §139](../chapters/07_from_dna_to_protein.md#139-first-splicing-chemistry-step), [C07 §140](../chapters/07_from_dna_to_protein.md#140-2-linkage-in-lariat-formation), [C07 §141](../chapters/07_from_dna_to_protein.md#141-second-splicing-chemistry-step), [C07 §145](../chapters/07_from_dna_to_protein.md#145-spliceosome), [C07 §152](../chapters/07_from_dna_to_protein.md#152-spliceosome-conformational-transitions), [C07 §153](../chapters/07_from_dna_to_protein.md#153-spliceosome-catalytic-center-is-rna-based), [C07 §154](../chapters/07_from_dna_to_protein.md#154-magnesium-ions-participate-in-splicing-catalysis), [C07 §159](../chapters/07_from_dna_to_protein.md#159-alternative-splicing), [C07 §163](../chapters/07_from_dna_to_protein.md#163-exon-order-cannot-be-arbitrarily-rearranged-by-ordinary-alternative-splicing) |

<a id="p-rna_polyadenylation"></a>

### P.rna_polyadenylation — RNA 3′ cleavage and polyadenylation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | Appropriate eukaryotic pre-mRNA and processing enzymes |
| Required state / input | Source cleavage/processing context |
| WorldState change / output | RNA cleavage and added poly-A tail modify transcript end and stability/export readiness. |
| Trigger / termination | Processing signals; cleavage/tail completion |
| Energy / time / noise / limits | No template-coded genomic A-run implied; not every RNA uses this pathway. |
| Evidence | [C07 §115](../chapters/07_from_dna_to_protein.md#115-polyadenylation), [C07 §116](../chapters/07_from_dna_to_protein.md#116-3-end-is-first-cleaved), [C07 §117](../chapters/07_from_dna_to_protein.md#117-poly-a-tail-is-added-after-cleavage), [C07 §119](../chapters/07_from_dna_to_protein.md#119-capping-and-polyadenylation-functions) |

<a id="p-mrna_export"></a>

### P.mrna_export — Mature mRNA export

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.mrna](../entities/molecular_entities.md#e-mrna) and processing/export partners through [E.nuclear_pore](../entities/macromolecular_complexes.md#e-nuclear_pore) |
| Required state / input | Source processing/export readiness, including appropriate bound-protein ensemble |
| WorldState change / output | Transcript changes compartment and protein partners; molecular identity retained. |
| Trigger / termination | Export-competent state; cytosolic delivery or rejection/degradation |
| Energy / time / noise / limits | Energy/kinetics not completed here; do not automatically assign all RNA export to Ran mechanism. |
| Evidence | [C07 §171](../chapters/07_from_dna_to_protein.md#171-mature-mrna-must-be-exported-from-nucleus), [C07 §172](../chapters/07_from_dna_to_protein.md#172-nuclear-pore-complexes-selectively-gate-mrna-export), [C07 §176](../chapters/07_from_dna_to_protein.md#176-exon-junction-complexes-contribute-to-export-readiness), [C07 §177](../chapters/07_from_dna_to_protein.md#177-export-decision-is-combinatorial), [C07 §179](../chapters/07_from_dna_to_protein.md#179-mrna-changes-protein-partners-after-export), [C07 §180](../chapters/07_from_dna_to_protein.md#180-nuclear-rna-waste-is-degraded) |

<a id="p-rna_degradation"></a>

### P.rna_degradation — RNA degradation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | RNA substrates and source decay machinery in specified compartment |
| Required state / input | Accessible RNA and degradation context |
| WorldState change / output | RNA material is degraded; abundance and subsequent translation potential change. |
| Trigger / termination | Lifetime/control signals; substrate degradation |
| Energy / time / noise / limits | Lifetimes depend on transcript/context; abundance is production minus loss, not transcription alone. |
| Evidence | [C07 §180](../chapters/07_from_dna_to_protein.md#180-nuclear-rna-waste-is-degraded), [C07 §181](../chapters/07_from_dna_to_protein.md#181-mature-mrna-is-not-permanent), [C07 §182](../chapters/07_from_dna_to_protein.md#182-mrna-lifetime-affects-protein-output), [C07 §184](../chapters/07_from_dna_to_protein.md#184-eukaryotic-mrna-lifetime-examples), [C07 §186](../chapters/07_from_dna_to_protein.md#186-gene-expression-output-depends-on-degradation-as-well-as-synthesis) |

<a id="p-trna_charging"></a>

### P.trna_charging — Aminoacyl-tRNA charging

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | [E.trna](../entities/molecular_entities.md#e-trna), specified amino acid, aminoacyl-tRNA synthetase, ATP |
| Required state / input | Matching amino acid/tRNA and enzyme |
| WorldState change / output | Charged tRNA formed with ATP→AMP/PPi chemistry; subsequent translation transfers amino acid to chain. |
| Trigger / termination | Substrate recognition; charging completion or editing context |
| Energy / time / noise / limits | Energy stored in charged tRNA; ribosome decoding and charging specificity are distinct. |
| Evidence | [C07 §233](../chapters/07_from_dna_to_protein.md#233-aminoacyl-trna-synthetase), [C07 §234](../chapters/07_from_dna_to_protein.md#234-trna-charging), [C07 §236](../chapters/07_from_dna_to_protein.md#236-synthetase-recognizes-both-amino-acid-and-trna), [C07 §238](../chapters/07_from_dna_to_protein.md#238-aminoacyl-trna-synthetase-uses-atp), [C07 §240](../chapters/07_from_dna_to_protein.md#240-charged-trna-stores-chemical-potential), [C07 §241](../chapters/07_from_dna_to_protein.md#241-ppi-hydrolysis-can-drive-charging-forward) |

<a id="p-translation"></a>

### P.translation — Translation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive at pathway resolution; protein synthesis |
| Participants / location | [E.ribosome](../entities/macromolecular_complexes.md#e-ribosome), [E.mrna](../entities/molecular_entities.md#e-mrna), charged tRNAs and source initiation/elongation/release factors |
| Required state / input | Compatible initiation site/frame, assembled subunits and substrates |
| WorldState change / output | Initiation → codon/tRNA selection → peptide transfer/translocation → release; new polypeptide forms N→C along 5′→3′ mRNA. |
| Trigger / termination | Source-specific initiation; stop recognition/release and ribosome recycling |
| Energy / time / noise / limits | Charging and nucleotide-dependent factor cycles separately accounted. Stop uses release factors, not stop tRNA. |
| Evidence | [C07 §263](../chapters/07_from_dna_to_protein.md#263-three-trna-sites), [C07 §269](../chapters/07_from_dna_to_protein.md#269-translation-direction-on-mrna), [C07 §270](../chapters/07_from_dna_to_protein.md#270-polypeptide-synthesis-direction), [C07 §273](../chapters/07_from_dna_to_protein.md#273-translation-cycle-step-1--aminoacyl-trna-selection), [C07 §275](../chapters/07_from_dna_to_protein.md#275-translation-cycle-step-2--peptide-transfer), [C07 §276](../chapters/07_from_dna_to_protein.md#276-translation-cycle-step-3--large-subunit-translocation), [C07 §277](../chapters/07_from_dna_to_protein.md#277-translation-cycle-step-4--small-subunit-translocation), [C07 §295](../chapters/07_from_dna_to_protein.md#295-bacterial-initiation-differs-from-eukaryotic-initiation), [C07 §301](../chapters/07_from_dna_to_protein.md#301-translation-termination), [C07 §302](../chapters/07_from_dna_to_protein.md#302-stop-codons-are-not-recognized-by-normal-trnas), [C07 §307](../chapters/07_from_dna_to_protein.md#307-ribosome-recycling-after-termination) |

<a id="p-protein_folding"></a>

### P.protein_folding — Protein folding and assembly maturation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nascent/completed [E.protein](../entities/molecular_entities.md#e-protein), chaperones/cofactors/partners where supported |
| Required state / input | Sequence and folding environment; modifications/assembly requirements context-specific |
| WorldState change / output | Protein conformation and assembly change while sequence lineage persists; misfolding remains possible. |
| Trigger / termination | Chain emergence or refolding context; functional maturation or quality-control routing |
| Energy / time / noise / limits | Chaperones may use ATP; sequence constrains fold without uniquely specifying a measured trajectory. |
| Evidence | [C04 §18](../chapters/04_protein_structure_function.md#18-proteins-generally-fold-toward-a-low-free-energy-conformation), [C04 §21](../chapters/04_protein_structure_function.md#21-sequence-contains-folding-information), [C04 §22](../chapters/04_protein_structure_function.md#22-chaperone-proteins-assist-folding), [C04 §53](../chapters/04_protein_structure_function.md#53-unstructured-regions), [C07 §339](../chapters/07_from_dna_to_protein.md#339-translation-is-not-the-end-of-protein-production), [C07 §340](../chapters/07_from_dna_to_protein.md#340-co-translational-folding-can-begin-while-chain-emerges), [C07 §341](../chapters/07_from_dna_to_protein.md#341-chaperone-assistance), [C07 §344](../chapters/07_from_dna_to_protein.md#344-protein-maturation-can-require-noncovalent-cofactor-binding), [C07 §345](../chapters/07_from_dna_to_protein.md#345-protein-maturation-can-require-assembly-with-other-protein-subunits) |

<a id="p-ubiquitin_tagging"></a>

### P.ubiquitin_tagging — Ubiquitin tagging

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/regulatory |
| Participants / location | [E.ubiquitin](../entities/molecular_entities.md#e-ubiquitin), target protein and source tagging machinery |
| Required state / input | Appropriate degradation/regulatory signal and enzyme context |
| WorldState change / output | Covalent ubiquitin/chain state changes on target, enabling source-dependent downstream recognition. |
| Trigger / termination | Tagging machinery; deconjugation, recycling or substrate degradation |
| Energy / time / noise / limits | Chain details/ATP cost not universally supplied; not every ubiquitin tag means destruction. |
| Evidence | [C07 §332](../chapters/07_from_dna_to_protein.md#332-ubiquitin), [C07 §333](../chapters/07_from_dna_to_protein.md#333-polyubiquitin-chain), [C07 §334](../chapters/07_from_dna_to_protein.md#334-proteasome-recognizes-specific-polyubiquitin-tagging), [C07 §335](../chapters/07_from_dna_to_protein.md#335-ubiquitin-is-recycled), [C18 §47](../chapters/18_cell_cycle.md#47-apcc), [C18 §156](../chapters/18_cell_cycle.md#156-apcc-destroys-securin) |

<a id="p-protein_degradation"></a>

### P.protein_degradation — Protein degradation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Protein substrate and appropriate proteasomal or lysosomal system |
| Required state / input | Location and targeting compatible with selected route |
| WorldState change / output | Protein abundance/material decreases through proteolysis and product recycling. |
| Trigger / termination | Damage, regulatory targeting or cargo delivery; substrate processing completion |
| Energy / time / noise / limits | Compose route-specific mechanisms; proteasome and lysosome are not interchangeable. |
| Evidence | [C07 §324](../chapters/07_from_dna_to_protein.md#324-protein-degradation-functions), [C07 §326](../chapters/07_from_dna_to_protein.md#326-proteasome), [C07 §338](../chapters/07_from_dna_to_protein.md#338-proteasome-output), [C15 §228](../chapters/15_intracellular_compartments_protein_transport.md#228-lysosomal-hydrolase-classes), [C15 §233](../chapters/15_intracellular_compartments_protein_transport.md#233-lysosomal-metabolite-exporters) |

<a id="p-proteasomal_degradation"></a>

### P.proteasomal_degradation — Proteasomal protein degradation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.proteasome](../entities/macromolecular_complexes.md#e-proteasome), selected ubiquitin-tagged protein, ATP |
| Required state / input | Recognized substrate and accessible regulatory machinery |
| WorldState change / output | Substrate unfolds/threads into protease chamber, yields peptides; ubiquitin recycled. |
| Trigger / termination | Substrate recognition; processing/release |
| Energy / time / noise / limits | ATP supports source unfolding/handling. No external exposed universal protease teeth. |
| Evidence | [C07 §328](../chapters/07_from_dna_to_protein.md#328-proteasome-core), [C07 §329](../chapters/07_from_dna_to_protein.md#329-proteasome-end-stoppersregulatory-complexes), [C07 §330](../chapters/07_from_dna_to_protein.md#330-proteasome-uses-atp), [C07 §334](../chapters/07_from_dna_to_protein.md#334-proteasome-recognizes-specific-polyubiquitin-tagging), [C07 §335](../chapters/07_from_dna_to_protein.md#335-ubiquitin-is-recycled), [C07 §338](../chapters/07_from_dna_to_protein.md#338-proteasome-output) |

<a id="p-chromatin_remodeling"></a>

### P.chromatin_remodeling — ATP-dependent chromatin remodeling

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/primitive |
| Participants / location | [E.chromatin_remodeler](../entities/macromolecular_complexes.md#e-chromatin_remodeler) and [E.nucleosome](../entities/macromolecular_complexes.md#e-nucleosome) at specified DNA region |
| Required state / input | Recruited/active remodeler with ATP and accessible substrate |
| WorldState change / output | Nucleosomal DNA position/accessibility changes without changing genomic sequence. |
| Trigger / termination | Regulator recruitment; remodeling/dissociation or changed conditions |
| Energy / time / noise / limits | Repeated ATP use; increased accessibility alone is not guaranteed transcription. |
| Evidence | [C05 §148](../chapters/05_dna_chromosomes.md#148-local-chromatin-remodeling), [C05 §149](../chapters/05_dna_chromosomes.md#149-atp-dependent-chromatin-remodeling-complexes), [C05 §151](../chapters/05_dna_chromosomes.md#151-remodelers-can-reposition-nucleosomal-dna), [C05 §152](../chapters/05_dna_chromosomes.md#152-remodeling-uses-repeated-atp-hydrolysis), [C05 §153](../chapters/05_dna_chromosomes.md#153-remodelers-interact-with-histone-core-and-dna), [C08 §111](../chapters/08_control_of_gene_expression.md#111-activators-can-recruit-chromatin-modifying-proteins), [C08 §115](../chapters/08_control_of_gene_expression.md#115-atp-dependent-chromatin-remodeling-complex), [C08 §116](../chapters/08_control_of_gene_expression.md#116-chromatin-remodeling-increases-dna-accessibility) |

<a id="p-histone_modification"></a>

### P.histone_modification — Histone modification and removal

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Core/linker histones and source modifying/erasing enzymes at named sites |
| Required state / input | Target residue and enzyme/recruitment context |
| WorldState change / output | Covalent mark patterns change; binding and chromatin state may change contextually. |
| Trigger / termination | Local enzyme balance; erasure, turnover or inheritance |
| Energy / time / noise / limits | Site-specific effects; one lysine cannot simultaneously have mutually exclusive marks. No universal histone code. |
| Evidence | [C05 §155](../chapters/05_dna_chromosomes.md#155-histone-modifying-enzymes), [C05 §156](../chapters/05_dna_chromosomes.md#156-core-histone-tail-modifications-named-in-chapter-5), [C05 §158](../chapters/05_dna_chromosomes.md#158-histone-modifications-also-create-docking-information), [C05 §159](../chapters/05_dna_chromosomes.md#159-histone-modification-patterns-can-mark-different-chromatin-states), [C05 §163](../chapters/05_dna_chromosomes.md#163-mutually-exclusive-modification-at-one-lysine), [C05 §167](../chapters/05_dna_chromosomes.md#167-chromatin-regulators-can-be-targeted-to-specific-regions), [C08 §112](../chapters/08_control_of_gene_expression.md#112-histone-acetyltransferase), [C08 §117](../chapters/08_control_of_gene_expression.md#117-repressors-can-recruit-histone-deacetylases) |

<a id="p-chromatin_loop_extrusion"></a>

### P.chromatin_loop_extrusion — Chromatin loop organization/extrusion

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/model |
| Participants / location | [E.cohesin](../entities/macromolecular_complexes.md#e-cohesin) or [E.condensin](../entities/macromolecular_complexes.md#e-condensin), chromatin and source boundary constraints |
| Required state / input | Correct complex/phase and chromatin association |
| WorldState change / output | Loop contacts/extent and chromosome organization change; DNA identity remains. |
| Trigger / termination | ATP-dependent machinery; boundary/release/reorganization context |
| Energy / time / noise / limits | Source SMC/nested-loop models; exact inchworm mechanism and unnamed clamps remain unresolved. |
| Evidence | [C05 §127](../chapters/05_dna_chromosomes.md#127-smc-ring-complexes-use-atp), [C05 §128](../chapters/05_dna_chromosomes.md#128-loop-extrusion), [C05 §131](../chapters/05_dna_chromosomes.md#131-smc-rings-operate-on-chromatin-not-necessarily-naked-dna), [C05 §132](../chapters/05_dna_chromosomes.md#132-cohesin), [C05 §136](../chapters/05_dna_chromosomes.md#136-loop-size-depends-on-boundaryclamp-positions), [C05 §138](../chapters/05_dna_chromosomes.md#138-condensin), [C05 §140](../chapters/05_dna_chromosomes.md#140-condensins-use-atp-hydrolysis), [C05 §141](../chapters/05_dna_chromosomes.md#141-mammalian-condensin-ii), [C05 §142](../chapters/05_dna_chromosomes.md#142-mammalian-condensin-i) |

<a id="p-chromatin_state_inheritance"></a>

### P.chromatin_state_inheritance — Chromatin-state inheritance

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/regulatory |
| Participants / location | Parent/new DNA and histones, readers/writers and daughter chromatin |
| Required state / input | Replication with inherited marks/proteins and appropriate restoration machinery |
| WorldState change / output | Mixed parental/new components support restoration of region-specific state in daughters. |
| Trigger / termination | Replication and local regulatory state; restoration/turnover |
| Energy / time / noise / limits | Pattern propagation, not perfect molecular copying or DNA-sequence mutation. |
| Evidence | [C05 §199](../chapters/05_dna_chromosomes.md#199-dna-sequence-versus-epigenetic-state), [C05 §202](../chapters/05_dna_chromosomes.md#202-readerwriter-restoration-after-replication), [C05 §203](../chapters/05_dna_chromosomes.md#203-epigenetic-inheritance-is-pattern-propagation-not-perfect-molecular-copying), [C05 §204](../chapters/05_dna_chromosomes.md#204-chromatin-inheritance-helps-preserve-cell-identity), [C08 §216](../chapters/08_control_of_gene_expression.md#216-histone-based-inheritance), [C08 §217](../chapters/08_control_of_gene_expression.md#217-histone-modifying-enzymes-can-propagate-marks), [C08 §218](../chapters/08_control_of_gene_expression.md#218-heterochromatin-maintenance) |

<a id="p-dna_methylation_maintenance"></a>

### P.dna_methylation_maintenance — DNA methylation maintenance

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/lineage |
| Participants / location | Source methylated DNA sites and maintenance machinery |
| Required state / input | Replicated DNA and source parent/new-strand methylation context |
| WorldState change / output | Methylation pattern is maintained on new strand without changing nucleotide sequence identity. |
| Trigger / termination | Replication-coupled recognition; relevant sites restored or modified |
| Energy / time / noise / limits | No methylation of every CpG implied; bacterial strand discrimination is a separate use. |
| Evidence | [C08 §206](../chapters/08_control_of_gene_expression.md#206-dna-methylation), [C08 §209](../chapters/08_control_of_gene_expression.md#209-not-every-cg-is-methylated), [C08 §210](../chapters/08_control_of_gene_expression.md#210-dna-methylation-patterns-change-during-development), [C08 §214](../chapters/08_control_of_gene_expression.md#214-maintenance-methyltransferase-recognition-rule), [C08 §215](../chapters/08_control_of_gene_expression.md#215-methylation-inheritance), [C06 §162](../chapters/06_dna_replication_repair.md#162-bacterial-strand-discrimination-in-the-source), [C06 §163](../chapters/06_dna_replication_repair.md#163-other-cells-use-different-strand-discrimination-strategies) |

<a id="p-rna_interference"></a>

### P.rna_interference — RNA interference

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/regulatory; miRNA/siRNA branches qualified |
| Participants / location | Small-RNA guide, Dicer/RISC and matching target RNA |
| Required state / input | Guide production/loading and appropriate sequence match |
| WorldState change / output | Target RNA is cleaved or translation/repression state changes according to guide/context; complex can be reused. |
| Trigger / termination | Matching RNA; guide/target loss or repression reversal |
| Energy / time / noise / limits | Some source repression is reversible. Do not merge miRNA, siRNA and crRNA or delete genomic DNA. |
| Evidence | [C08 §242](../chapters/08_control_of_gene_expression.md#242-mirna-processing), [C08 §243](../chapters/08_control_of_gene_expression.md#243-dicer-and-mirna-pathway), [C08 §246](../chapters/08_control_of_gene_expression.md#246-extensive-mirna-match), [C08 §247](../chapters/08_control_of_gene_expression.md#247-less-extensive-mirna-match), [C08 §248](../chapters/08_control_of_gene_expression.md#248-sequestered-mrna-can-sometimes-be-reactivated), [C08 §250](../chapters/08_control_of_gene_expression.md#250-one-mirna-can-regulate-many-mrna-molecules-sequentially), [C08 §253](../chapters/08_control_of_gene_expression.md#253-small-interfering-rna), [C08 §258](../chapters/08_control_of_gene_expression.md#258-sirna-loading-into-risc), [C08 §261](../chapters/08_control_of_gene_expression.md#261-sirna-mediated-target-destruction), [C10 §265](../chapters/10_analyzing_gene_structure_and_function.md#265-knockdown-versus-knockout) |

<a id="p-rna_guided_chromatin_silencing"></a>

### P.rna_guided_chromatin_silencing — RNA-guided chromatin silencing

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | [E.rits](../entities/macromolecular_complexes.md#e-rits), guide/nascent RNA and chromatin enzymes |
| Required state / input | Appropriate RNA pairing and recruited machinery |
| WorldState change / output | Local chromatin-modification/silencing state changes. |
| Trigger / termination | Nascent target RNA and guide complex; loss/reversal of silencing context |
| Energy / time / noise / limits | Not naked DNA pairing and not the same event as RISC-mediated RNA cleavage. |
| Evidence | [C08 §266](../chapters/08_control_of_gene_expression.md#266-rits-does-not-simply-bind-naked-dna-by-sequence-complementarity), [C08 §267](../chapters/08_control_of_gene_expression.md#267-rits-recruits-chromatin-modifying-machinery), [C08 §269](../chapters/08_control_of_gene_expression.md#269-rna-guided-heterochromatin-formation), [C08 §270](../chapters/08_control_of_gene_expression.md#270-rnai-directed-heterochromatin-can-restrain-transposable-elements) |

<a id="p-x_inactivation"></a>

### P.x_inactivation — X-chromosome inactivation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/lineage |
| Participants / location | X chromosome, [E.xist](../entities/molecular_entities.md#e-xist) and chromatin regulators in source mammalian context |
| Required state / input | Developmental/lineage-appropriate regulatory program |
| WorldState change / output | Existing X persists with silenced chromatin state maintained in descendants. |
| Trigger / termination | Source initiation context; maintenance rather than a fresh choice each cycle |
| Energy / time / noise / limits | Choice probability/complete mechanism unspecified; Barr body is state, not extra DNA. |
| Evidence | [C05 §189](../chapters/05_dna_chromosomes.md#189-x-inactivation), [C05 §191](../chapters/05_dna_chromosomes.md#191-x-inactivation-state-is-clonally-inherited), [C05 §195](../chapters/05_dna_chromosomes.md#195-barr-body-is-a-chromatin-state-not-an-extra-chromosome), [C08 §296](../chapters/08_control_of_gene_expression.md#296-xist-and-x-inactivation), [C08 §297](../chapters/08_control_of_gene_expression.md#297-xist-production) |
