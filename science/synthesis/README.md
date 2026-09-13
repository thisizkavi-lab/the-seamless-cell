# Cross-chapter synthesis layer

Status: `SOURCE_DERIVED` synthesis draft. Source baseline: `48c8bb9` on `main` in `thisizkavi-lab/the-seamless-cell`. Schemas, stable IDs and organizational choices are `PROJECT_CONSTRAINT`. Chapter and quantitative source approval states are unchanged.

The textbook chapters now point into one biological registry: **405 entity concepts in 8 categories**, **203 canonical process definitions in 13 categories**, **172 quantitative bindings**, **132 typed dependency edges**, **30 conflict/interpretation records** and **142 grouped implementation guardrails**. Entity counts include families, roles, regions, assemblies and state profiles; they are not numbers of material objects in a cell. Process counts include composites, patterns, regulatory/lineage changes and experimental material transformations, not independent elementary reactions.

## Reading order

1. [Entity schema](../entities/entity_schema.md) and [process schema](../processes/process_schema.md) define identity, state, provenance, context and absence rules. They were designed before registry population.
2. [Ontology](ontology.md) explains type versus instance, material versus role, lineage, topology, contexts and independent clocks.
3. [Entity index](../entities/README.md) and [process index](../processes/README.md) provide canonical records with chapter-section evidence.
4. [Quantitative bindings](quantitative_bindings.md) point to source values without duplicating their numerical tables.
5. [Dependency graph](dependency_graph.md) supplies typed causal edges, state predicates and explicit AND gates.
6. [Conflict register](cross_chapter_conflicts.md) and [guardrails](implementation_guardrails.md) preserve uncertainties, context differences and forbidden inferences.

## Source audit

The checkout was confirmed as `thisizkavi-lab/the-seamless-cell`, branch `main`, with a clean working tree before changes. `git status --short` returned no entries. The audited five-commit history was:

```text
48c8bb9 science: add quantitative source registry
481fae9 science: add quantitative fidelity and noise canon
d92fb7d science: add quantitative forces and energetics canon
c623b2c science: add quantitative rates and transport canon
fc06a8f science: add quantitative counts and concentrations canon
```

All Chapters 01–20 and all nine required quantitative files were present and read. The source baseline is fixed so later source edits can be reviewed against these claim/binding locators. Delivery review confirmed all 58 pre-existing files byte-for-byte unchanged using baseline SHA-256 comparisons. Source data and runtime/application files are outside this change set. The 31-document structure, unique canonical IDs, table structure, source coverage, graph targets and local links were checked; source-context and forbidden-universal wording were reviewed.

## Chapter evidence coverage

The counts below are unique registry records citing each chapter, not measures of source completeness or evidence strength. One canonical record can cite several chapters, so columns must not be summed to obtain registry totals.

| Source chapter | Entity records citing it | Process records citing it |
|---|---:|---:|
| [Chapter 01](../chapters/01_cells_fundamental_units.md) | 4 | 0 |
| [Chapter 02](../chapters/02_chemical_components.md) | 11 | 2 |
| [Chapter 03](../chapters/03_energy_catalysis_biosynthesis.md) | 9 | 7 |
| [Chapter 04](../chapters/04_protein_structure_function.md) | 6 | 5 |
| [Chapter 05](../chapters/05_dna_chromosomes.md) | 25 | 7 |
| [Chapter 06](../chapters/06_dna_replication_repair.md) | 14 | 10 |
| [Chapter 07](../chapters/07_from_dna_to_protein.md) | 21 | 12 |
| [Chapter 08](../chapters/08_control_of_gene_expression.md) | 23 | 11 |
| [Chapter 09](../chapters/09_how_genes_and_genomes_evolve.md) | 4 | 10 |
| [Chapter 10](../chapters/10_analyzing_gene_structure_and_function.md) | 10 | 8 |
| [Chapter 11](../chapters/11_membrane_structure.md) | 26 | 5 |
| [Chapter 12](../chapters/12_transport_across_cell_membranes.md) | 30 | 16 |
| [Chapter 13](../chapters/13_how_cells_obtain_energy_from_food.md) | 44 | 15 |
| [Chapter 14](../chapters/14_energy_generation_mitochondria_chloroplasts.md) | 55 | 16 |
| [Chapter 15](../chapters/15_intracellular_compartments_protein_transport.md) | 46 | 32 |
| [Chapter 16](../chapters/16_cell_signaling.md) | 37 | 22 |
| [Chapter 17](../chapters/17_cytoskeleton.md) | 47 | 19 |
| [Chapter 18](../chapters/18_cell_cycle.md) | 52 | 32 |
| [Chapter 19](../chapters/19_sexual_reproduction_genetics.md) | 16 | 11 |
| [Chapter 20](../chapters/20_cell_communities_tissues_stem_cells_cancer.md) | 71 | 25 |

The quantitative source set is [README](../quantitative/README.md), [methodology](../quantitative/00_methodology.md), [space](../quantitative/01_space.md), [time](../quantitative/02_time.md), [counts/concentrations](../quantitative/03_counts_concentrations.md), [rates/transport](../quantitative/04_rates_transport.md), [forces/energetics](../quantitative/05_forces_energetics.md), [fidelity/noise](../quantitative/06_fidelity_noise.md) and [source registry](../quantitative/07_sources.md). Their values, source-vignette/BNID references, draft states and verification requirements remain authoritative. Governance/bibliography files apply to all bindings; they are not extra biological measurements.

## Files created

| Directory | New Markdown files |
|---|---|
| `science/entities/` | README, entity_schema, molecular_entities, macromolecular_complexes, membranes_compartments, organelles, cytoskeleton, chromosomes_genome, cells_cell_states, tissues_multicellular |
| `science/processes/` | README, process_schema, molecular_reactions, gene_expression, DNA_replication_repair, membrane_transport, membrane_traffic, metabolism_energy, signaling, cytoskeletal_dynamics, cell_cycle_mitosis, meiosis_fertilization, cell_migration_mechanics, apoptosis, tissue_renewal_cancer |
| `science/synthesis/` | README, ontology, dependency_graph, cross_chapter_conflicts, quantitative_bindings, implementation_guardrails |

There are 31 new files. Every important registry entry has chapter-section evidence; quantitative observations additionally point to quantitative source passages. Missing exact mechanisms, structures, rates, concentrations, stochastic distributions or classifications are marked unspecified or held for verification. The registry is a source-backed synthesis inventory, not an exhaustive list of every molecule named in textbook examples.

## Review and future conversion

Markdown is the reviewable serialization. Future conversion must split independently qualified clauses into claims, preserve source locators/status/context, validate unique IDs and references, and select explicit biological contexts before parameter promotion. No broad source statement is automatically a universal law. Source-era and model statements remain restricted even when multiple chapters repeat them.

Composite processes reuse canonical subprocesses rather than execute the same chemical event twice. Topology distinguishes containment, membrane continuity, aqueous continuity, gated transport and contact sites. State profiles apply to existing cells. Chemical transformations, copying, fission/fusion, cleavage and division carry material lineage.

WorldState describes biology. ViewState describes observation. BiologicalTime, PlaybackTime and CameraTime are independent unless an explicit coupling is selected. No render tier, clipping plane, transparency, hidden flag or camera movement mutates biological identity or permeability.

This phase does not change source canons or application code, resolve external scientific disputes, approve numerical runtime parameters, instantiate a reference world, implement rendering, or build the Scale Spine. The next phase requires a separate instruction.
