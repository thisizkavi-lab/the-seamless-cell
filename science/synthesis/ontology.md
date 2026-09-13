# Cross-chapter biological ontology

Status: `SOURCE_DERIVED` synthesis draft. Identity, schema, graph and context conventions below are `PROJECT_CONSTRAINT`; cited source biology retains its original status and approval. Baseline: `48c8bb9`. This is a conceptual data contract, not executable WorldState or a renderer.

## Source and claim boundary

A chapter is a source document, not an entity container. Chapters 01–20 contribute evidence to the same registry. Quantitative files contribute contextual observations on that registry. The relationship is:

```text
source passage + source status + source context
  → independently qualified claim
  → canonical entity/process/relationship
  → quantitative observation binding + dependency predicates
  → future biological instances and events
```

Use the [entity schema](../entities/entity_schema.md), [process schema](../processes/process_schema.md), [quantitative bindings](quantitative_bindings.md), [conflicts](cross_chapter_conflicts.md) and [guardrails](implementation_guardrails.md). A canonical definition is not a claim of complete knowledge. The source canon includes generic summaries, historical statements, exercises and uncertain mechanisms; none becomes more certain through deduplication.

Keep three provenance axes:

| Axis | Required treatment |
|---|---|
| Source assertion | Retain `SOURCE_FACT`, `SOURCE_SCALE`, `SOURCE_MODEL`, `SOURCE_DERIVED`, `SOURCE_ERA_STATEMENT`, `VERIFY_QUANT`, `DO_NOT_INFER` and other exact local tags. Unlabeled prose remains `not_explicit_in_passage`, with enclosing conventions retained. |
| Quantitative assertion | Retain `CBBN_RULE_OF_THUMB`, `CBBN_MEASURED`, `CBBN_DERIVED_ESTIMATE`, `ECB6_CROSSCHECK`, `VERIFY_CONTEXT` and original descriptive wording where a formal tag is absent. |
| Review / synthesis | Chapter `SOURCE_DERIVED_DRAFT` and quantitative `QUANTITATIVE_SOURCE_DRAFT` remain unchanged. New summaries are `SOURCE_DERIVED`; organizational decisions are `PROJECT_CONSTRAINT`. Inclusion never means `APPROVED`, `EXTERNAL_VERIFIED` or `APPROVED_RUNTIME_PARAMETER`. |

`PROJECT_DISPLAY_VALUE` belongs to an explicitly labeled representation. It cannot override a real quantity. A source-model claim stays source-model even if a convenient animation could make it look certain.

## Stable identifiers and kinds

| Namespace | Referent | Identity rule |
|---|---|---|
| `E.*` | Canonical entity concept | One registry definition; multiple biological instances can refer to it. |
| `P.*` | Canonical change pattern | One definition; events carry participant instance IDs, context and biological time. |
| `Q.*` | Quantitative binding | One source locator/observation selection; multiple bindings can constrain the same entity property in different contexts. |
| `CF.*` | Conflict/interpretation hold | Preserves both sources and restricts promotion. |
| `G.*`, `S.*`, `D.*` | Graph gates, state predicates and edges | Logical dependency metadata, not additional physical objects. |
| `GR.*` | Implementation guardrail | Source-backed forbidden inference and required interpretation. |
| `CTX.*` | Explicit reference-context descriptor | Filters observations; not a new cell type or universal parameter bundle. |
| Future `instance_id`, `event_id`, `claim_id` | Material instance, actual event, atomic qualified assertion | Persistent identity/lineage; no instances or simulated events are created in this phase. |

Entity kind is not an exclusive material census. `type` distinguishes a concept, `family` groups noninterchangeable members, `role` describes a capacity, `assembly` organizes components, `region` denotes an interval/domain, and `state_profile` constrains an existing instance. Compact records can state mixed roles/families; a future converter must explicitly encode each relation rather than infer disjoint subclasses from the Markdown filename.

Examples: [E.protein](../entities/molecular_entities.md#e-protein) may have [E.enzyme](../entities/molecular_entities.md#e-enzyme) and [E.receptor](../entities/molecular_entities.md#e-receptor) roles; [E.gpcr](../entities/macromolecular_complexes.md#e-gpcr) is a receptor-family member. [E.nucleosome](../entities/macromolecular_complexes.md#e-nucleosome) contains [E.histone_octamer](../entities/macromolecular_complexes.md#e-histone_octamer) and a region of [E.dna](../entities/molecular_entities.md#e-dna); it does not create extra free DNA. [E.histone_h1](../entities/molecular_entities.md#e-histone_h1) is linker-associated rather than a core-octamer component. [E.mrna](../entities/molecular_entities.md#e-mrna) is an RNA subtype, not an additional quantity to add to the same RNA molecules again.

## Relations and accounting

| Predicate | Meaning | Required qualification / prohibited inference |
|---|---|---|
| `is_a`, `has_role`, `has_state_profile` | Type/family specialization, function or current state | No duplicate material count; a state change does not replace a cell with a new mesh identity. |
| `components` | Chemical/assembly membership | Distinguish noncovalent assembly from covalent polymerization; retain component instance IDs and lineage. |
| `contains` | Spatial containment | Cytoplasm includes cytosol and contained structures; do not sum parent volume with all contents as disjoint volumes. |
| `part_of`, `region_of` | Structural membership or polymer interval | A gene, centromere or exon is not a detached free molecule. Coordinates require actual sequence/assembly evidence. |
| `adjacent_to` | Spatial neighborhood | Does not imply exchange, fusion, continuity or fixed distance. |
| `connected_to` | Qualified connectivity | Specify aqueous continuity, membrane continuity, gated route, contact site or mechanical link; endpoints and compartment sides required. |
| `binds` | Contextual molecular association | Binding is neither obligatory permanent membership nor proof of catalysis. |
| `transports` | Capacity in a specified route | State solute, membrane/track, source/destination side and driving conditions. |
| `catalyzes`, `regulates` | Effect on a named process | Specify target/site/context; activation of catalysis can shut off a signal, as for a GAP. |
| `template_for`, `derived_from`, `daughter_of` | Copying/transformation/division lineage | New products retain source material/sequence ancestry. No visual copy/paste creating unaccounted mass. |
| `sister_of`, `homolog_of` | Chromosome relationships | Distinct instances and phase/ploidy required; sisters and homologs are not synonyms. |

The nucleus, its envelope, its inner/outer membranes and nucleoplasm are distinct aspects of one organized system. ER, Golgi, endosomes, lysosomes and transport vesicles retain membrane-sidedness through traffic. ER continuity with nuclear envelope differs from gated nuclear-pore transport. ER–mitochondrial contact is not free luminal continuity. Matrix and intermembrane space are distinct; cristae belong to inner-membrane organization. Plant stroma and thylakoid lumen are distinct. Aqueous and membrane phases constrain where carriers act.

These topology claims are summarized from the individual registry citations, particularly Chapters 01, 11, 14 and 15; adjacency alone never supplies missing transport evidence.

## Context is part of a claim

Each observation/event must carry organism, cell type, cell state, compartment, phase and measurement context where applicable. Temperature, medium, developmental stage, assay, genotype, loading conditions and uncertainty remain unknown if absent. “Not specified” does not mean “all.”

| Context descriptor | Intended use | Explicit limit |
|---|---|---|
| `CTX.ecoli_reference` | Source E. coli size/count/rate observations | Strain, medium and growth state must be selected; nested replication can matter. |
| `CTX.yeast_haploid`, `CTX.yeast_diploid` | Ploidy-specific yeast observations | Do not infer exact size doubling; carbon source changes mitochondrial morphology. |
| `CTX.generic_mammalian_traversal` | **PROJECT REFERENCE CONTEXT** for the quantitative spread/confluent-cell traversal example | A traversal distance, not `cell.size`, shape, volume, genome state or organelle inventory. |
| `CTX.hela_adherent`, `CTX.hela_like_volume` | Distinct measured spread geometry and heuristic volume observations | Do not combine into one spherical cell or silently replace another cell type. |
| `CTX.hepatocyte`, `CTX.intestinal_epithelium` | Organelles/renewal observations in named source tissues | Not a generic mammalian parameter set; distinguish crypt cycle from tissue renewal. |
| `CTX.neuron`, `CTX.skeletal_muscle`, `CTX.plant_cell` | Cell-specific mechanism families | Require neuronal subtype/myelination, muscle subtype or plant organ/developmental state before precise parameters. |
| `CTX.assay` | Specimen preparation, reporter or cell-free molecular experiment | Branch material from its biological origin with explicit intervention; do not modify the original cell through an assay display. |

These descriptors index contexts, not completed reference worlds. No numerical parameter bundle or Scale Spine is selected here.

## Deduplication decisions

| Shared concept | Canonical treatment | Source trail |
|---|---|---|
| Water, ions, ATP/ADP/GTP/GDP | One chemical-type registry across chemistry, transport, energy, motors and signaling; separate pools and chemically distinct forms | Molecular entities cite Chapters 02, 03, 12–17. |
| NAD+/NADH versus NADP+/NADPH | Separate redox forms and cofactor families; reducing equivalents are not automatically transported molecules | [E.nadh](../entities/molecular_entities.md#e-nadh), [E.nadph](../entities/molecular_entities.md#e-nadph); Chapters 03, 13, 14. |
| DNA/RNA/protein and gene expression | Polymer types persist through chromosome, expression, evolution, assay and division contexts; transcription/translation each defined once | [E.dna](../entities/molecular_entities.md#e-dna), [E.rna](../entities/molecular_entities.md#e-rna), [E.protein](../entities/molecular_entities.md#e-protein); [P.transcription](../processes/gene_expression.md#p-transcription), [P.translation](../processes/gene_expression.md#p-translation); Chapters 02, 05–10, 18, 19. |
| Ribosome and protein synthesis | One [E.ribosome](../entities/macromolecular_complexes.md#e-ribosome) family; [P.translation](../processes/gene_expression.md#p-translation) includes protein-synthesis alias; free/ER-associated states use source sorting context | Chapters 01, 07, 15. |
| Nucleosome/cohesin/condensin | Packaging and loop/segregation roles share material identity; core, linker and source-model distinctions retained | [E.nucleosome](../entities/macromolecular_complexes.md#e-nucleosome), [E.cohesin](../entities/macromolecular_complexes.md#e-cohesin), [E.condensin](../entities/macromolecular_complexes.md#e-condensin); Chapters 05, 08, 18, 19. |
| Mitochondrion and membranes | One organelle type with discrete/network geometry and separate inner/outer/matrix/IMS organization | Chapters 01, 13–15, 18; CF.04. |
| Microtubule and motors | One [E.microtubule](../entities/cytoskeleton.md#e-microtubule) type across cargo transport, spindle and cilium; motor families and track-relative directions remain distinct | Chapters 15, 17, 18, 19. |
| Receptor/channel/transporter | Roles/families can overlap in source contexts; channel flux and alternating-access transport remain distinct processes | Chapters 11, 12, 16. |
| Exocytosis/fusion | [P.exocytosis](../processes/membrane_traffic.md#p-exocytosis) composes [P.membrane_fusion](../processes/membrane_traffic.md#p-membrane_fusion); secretory, synaptic and egg-activation routes reuse mechanism without duplicate events | Chapters 12, 15, 19. |
| DNA repair versus meiotic exchange | [P.homologous_recombination](../processes/DNA_replication_repair.md#p-homologous_recombination) supplies a reusable mechanism; meiotic crossing-over retains nonsister/homolog and segregation context | Chapters 06, 19. |
| Cell state versus new cell | Stem/precursor/differentiated/quiescent/senescent/apoptotic profiles attach to cell instances and lineage | Chapters 08, 18, 20. |
| β-catenin / cytochrome c | Shared molecules with location/partner-dependent roles; no separate signaling-only copy | Chapters 14, 16, 18, 20. |
| APC / APC/C; centromere / centrosome | Explicitly different canonical concepts, not aliases | [E.apc](../entities/molecular_entities.md#e-apc), [E.apc_c](../entities/macromolecular_complexes.md#e-apc_c), [E.centromere](../entities/chromosomes_genome.md#e-centromere), [E.centrosome](../entities/cytoskeleton.md#e-centrosome); Chapters 18–20. |
| Collagen / ECM / adhesion | Molecule, fibril, fiber, matrix and receptor/junction are different organization/connection levels | Chapters 04, 17, 20. |

The deduplication table points to records whose section-level evidence is authoritative. It is a navigation summary, not a claim that every chapter supplies every listed attribute.

## World, specimen, analysis and view

WorldState records biological material, topology, chemistry, activity, location, quantities, lineage and time-dependent state. ViewState records camera, clipping, visibility, color, opacity, overlays and active representation tier. An observer entering a nucleus does not import a protein or rupture a membrane. A hidden molecule remains in its pool and interactions. Biological lysis/permeabilization requires a source-backed event changing membrane state.

Specimen/ExperimentState records fixation, extraction, labeling, perturbation and assay material. AnalysisState records inferred sequences, alignments, counts, clusters and associations. Some chapters call analytical displays ViewState; here AnalysisState separates derived results from their presentation without claiming new biological content. A sequencing read count, FISH dot, reporter brightness or phylogenetic branch is not native molecular geometry.

| Clock | Meaning | Coupling rule |
|---|---|---|
| BiologicalTime | Actual modeled biological state evolution | Advances only through an explicit biological update. |
| PlaybackTime | Presentation duration and compression | Mapping to BiologicalTime must be declared; no biological rate inferred from playback. |
| CameraTime | Observer movement/interpolation | Cannot advance biology unless coupling is explicitly configured. |
| ExperimentalTime | Specimen/assay events where needed | PCR cycles belong to assay material, not the original organism. |
| AnalysisTime | Computation over observations | Does not mutate the underlying specimen or biological state. |

## Representation preserves identity

The same nucleosome instance can be unresolved chromatin density, a coarse bead, histones with continuous DNA, or a molecular structure. Active tier is ViewState. Physical composition, DNA continuity, wrapped interval, modification state, quantity and lineage do not change on tier selection. Atomic detail requires supported structures and missing-region/provenance metadata; a predicted/static structure does not provide dynamics.

A population/field representation must declare its biological approximation and preserve amount, compartment and supported variability. Switching render representation alone cannot merge chemical species, create material, delete low-copy entities, change membrane permeability or retime a process. Display exaggeration needs separate real/display values and a learner-visible interpretation limit.

## Promotion boundary

The dependency graph is a source-backed causal scaffold with unknowns, not a balanced reaction database or runnable simulation. Before later execution, each selected context must resolve missing participant identities, stoichiometry, boundary conditions, rates, stochastic assumptions and active conflict holds. This phase supplies no renderer, UI, camera code, meshes or app runtime, and does not begin the Scale Spine.
