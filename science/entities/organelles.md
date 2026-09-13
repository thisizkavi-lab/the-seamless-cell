# Organelles

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 19 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-nucleus"></a>

### E.nucleus — Nucleus

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle |
| Exists in / context | Nucleated eukaryotic cells; phase-specific |
| Biology / relations | Envelope, pores, chromatin and nuclear interior form one organelle identity. |
| State variables | envelope integrity; genome; transport; number; phase |
| Evidence | [C15 §7](../chapters/15_intracellular_compartments_protein_transport.md#7-nucleus), [C15 §8](../chapters/15_intracellular_compartments_protein_transport.md#8-nuclear-envelope), [C15 §59](../chapters/15_intracellular_compartments_protein_transport.md#59-nuclear-lamina), [C18 §137](../chapters/18_cell_cycle.md#137-nuclear-envelope-breakdown-mechanism), [C18 §172](../chapters/18_cell_cycle.md#172-nuclear-envelope-reassembly), [C20 §176](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#176-red-blood-cells-lack-nuclei) |
| Uncertainty / display limits | Enucleated mature erythrocytes are a source exception; no all-cell nucleus rule. |

<a id="e-nucleolus"></a>

### E.nucleolus — Nucleolus

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/condensate |
| Exists in / context | Source eukaryotic nucleus |
| Biology / relations | Membraneless DNA/RNA/protein organization associated with rRNA-gene regions and ribosome production. |
| State variables | rDNA association; RNA/protein exchange; assembly |
| Evidence | [C05 §83](../chapters/05_dna_chromosomes.md#83-nucleolus-is-assembled-from-multiple-chromosome-regions), [C05 §84](../chapters/05_dna_chromosomes.md#84-human-rrna-gene-cluster-topology), [C05 §86](../chapters/05_dna_chromosomes.md#86-nucleolus-contains-dna-rna-and-protein), [C04 §183](../chapters/04_protein_structure_function.md#183-rna-can-be-a-scaffold) |
| Uncertainty / display limits | Not membrane enclosed or a nucleosome. |

<a id="e-er"></a>

### E.er — Endoplasmic reticulum

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle; ER |
| Exists in / context | Source eukaryotic secretory system |
| Biology / relations | Connected membrane/lumen network; rough/smooth domains depend on ribosome attachment and cell specialization. |
| State variables | topology; domains; resident proteins; stress; growth |
| Evidence | [C15 §9](../chapters/15_intracellular_compartments_protein_transport.md#9-outer-nuclear-membrane-continuity), [C15 §10](../chapters/15_intracellular_compartments_protein_transport.md#10-endoplasmic-reticulum), [C15 §11](../chapters/15_intracellular_compartments_protein_transport.md#11-rough-er), [C15 §13](../chapters/15_intracellular_compartments_protein_transport.md#13-smooth-er), [C15 §99](../chapters/15_intracellular_compartments_protein_transport.md#99-rough-er-ribosomes-are-not-a-special-class) |
| Uncertainty / display limits | One canonical ER, with source cell-specific geometry; no obligatory detached tube collection. |

<a id="e-golgi"></a>

### E.golgi — Golgi apparatus

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle |
| Exists in / context | Source eukaryotic traffic |
| Biology / relations | Cisternae/networks receiving, modifying and sorting cargo; multiple progression models retained. |
| State variables | cis/trans organization; cisternae; traffic; mitotic fragmentation |
| Evidence | [C15 §14](../chapters/15_intracellular_compartments_protein_transport.md#14-golgi-apparatus), [C15 §170](../chapters/15_intracellular_compartments_protein_transport.md#170-golgi-cisternae), [C15 §172](../chapters/15_intracellular_compartments_protein_transport.md#172-golgi-stack-number-varies), [C15 §176](../chapters/15_intracellular_compartments_protein_transport.md#176-two-models-of-golgi-progression-in-source), [C18 §202](../chapters/18_cell_cycle.md#202-golgi-during-mitosis) |
| Uncertainty / display limits | Neither one homogeneous sac nor a fixed universal number of stacks. |

<a id="e-endosome"></a>

### E.endosome — Endosome

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Source endocytic system |
| Biology / relations | Sorting organelle whose early/late states include composition, pH and position changes. |
| State variables | early/late maturation; cargo; receptors; pH; traffic |
| Evidence | [C15 §16](../chapters/15_intracellular_compartments_protein_transport.md#16-endosomes), [C15 §217](../chapters/15_intracellular_compartments_protein_transport.md#217-early-endosomes), [C15 §218](../chapters/15_intracellular_compartments_protein_transport.md#218-late-endosomes), [C15 §227](../chapters/15_intracellular_compartments_protein_transport.md#227-late-endosome-to-lysosome-continuum), [C15 §261](../chapters/15_intracellular_compartments_protein_transport.md#261-project-rule--endosome-maturation-is-state-change) |
| Uncertainty / display limits | Early and late states do not require unrelated replacement identities. |

<a id="e-lysosome"></a>

### E.lysosome — Lysosome

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Source eukaryotic degradation contexts |
| Biology / relations | Acidic membrane-enclosed digestive system receiving endocytic, phagocytic and autophagic cargo. |
| State variables | pH; hydrolases; cargo; maturation; transport |
| Evidence | [C15 §15](../chapters/15_intracellular_compartments_protein_transport.md#15-lysosomes), [C15 §228](../chapters/15_intracellular_compartments_protein_transport.md#228-lysosomal-hydrolase-classes), [C15 §239](../chapters/15_intracellular_compartments_protein_transport.md#239-autophagy) |
| Uncertainty / display limits | Late-endosome/lysosome continuum is retained; not every endocytosed cargo is degraded. |

<a id="e-peroxisome"></a>

### E.peroxisome — Peroxisome

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Source eukaryotic oxidative/lipid functions |
| Biology / relations | Oxidative organelle with selective folded-protein import and ER membrane contribution. |
| State variables | enzyme inventory; import; growth; membrane lineage |
| Evidence | [C15 §17](../chapters/15_intracellular_compartments_protein_transport.md#17-peroxisomes), [C15 §87](../chapters/15_intracellular_compartments_protein_transport.md#87-peroxisomal-protein-import), [C15 §90](../chapters/15_intracellular_compartments_protein_transport.md#90-peroxisomal-cargo-can-remain-folded), [C15 §91](../chapters/15_intracellular_compartments_protein_transport.md#91-peroxisome-import-mechanism-remains-incomplete), [C15 §92](../chapters/15_intracellular_compartments_protein_transport.md#92-er-contribution-to-peroxisomal-membrane) |
| Uncertainty / display limits | Detailed import mechanism remains incomplete. |

<a id="e-mitochondrion"></a>

### E.mitochondrion — Mitochondrion

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Source eukaryotic cells retaining mitochondria |
| Biology / relations | Dynamic outer/inner membrane, matrix and IMS system with energy, biosynthetic and apoptotic roles. |
| State variables | fission/fusion lineage; network; location; volume; PMF; respiratory state |
| Evidence | [C14 §16](../chapters/14_energy_generation_mitochondria_chloroplasts.md#16-mitochondria-are-dynamic), [C14 §18](../chapters/14_energy_generation_mitochondria_chloroplasts.md#18-mitochondrial-networks), [C14 §24](../chapters/14_energy_generation_mitochondria_chloroplasts.md#24-table-141-heme-and-fes-synthesis), [C14 §27](../chapters/14_energy_generation_mitochondria_chloroplasts.md#27-table-141-apoptosis), [C14 §28](../chapters/14_energy_generation_mitochondria_chloroplasts.md#28-four-mitochondrial-compartments), [C18 §200](../chapters/18_cell_cycle.md#200-mitochondriachloroplasts) |
| Uncertainty / display limits | Object count depends on connectivity and cell state; no universal bean shape or count. |

<a id="e-chloroplast"></a>

### E.chloroplast — Chloroplast

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Photosynthetic plant/algal cells in source |
| Biology / relations | Envelope, stroma and thylakoid system supporting photosynthesis and biosynthesis. |
| State variables | thylakoids; imported proteins; photosynthetic state; storage |
| Evidence | [C14 §143](../chapters/14_energy_generation_mitochondria_chloroplasts.md#143-chloroplast-envelope), [C14 §145](../chapters/14_energy_generation_mitochondria_chloroplasts.md#145-thylakoid-membrane), [C14 §149](../chapters/14_energy_generation_mitochondria_chloroplasts.md#149-photosynthetic-machinery-location), [C14 §150](../chapters/14_energy_generation_mitochondria_chloroplasts.md#150-chloroplast-biosynthetic-functions) |
| Uncertainty / display limits | Not every plant cell has an active chloroplast; plants also use mitochondria. |

<a id="e-transport_vesicle"></a>

### E.transport_vesicle — Transport vesicle

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source endomembrane routes |
| Biology / relations | Membrane plus luminal cargo, coat and targeting states, with origin/product lineage through budding/fusion. |
| State variables | cargo; origin/destination; coat; motor; docking; fusion |
| Evidence | [C15 §4](../chapters/15_intracellular_compartments_protein_transport.md#4-vesicular-transport), [C15 §125](../chapters/15_intracellular_compartments_protein_transport.md#125-coated-vesicles), [C15 §127](../chapters/15_intracellular_compartments_protein_transport.md#127-uncoating), [C15 §140](../chapters/15_intracellular_compartments_protein_transport.md#140-rab-proteins), [C15 §149](../chapters/15_intracellular_compartments_protein_transport.md#149-fusion-changes-membrane-inventory) |
| Uncertainty / display limits | Not a mesh moving toward an arbitrary coordinate. |

<a id="e-synaptic_vesicle"></a>

### E.synaptic_vesicle — Synaptic vesicle

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype of transport vesicle |
| Exists in / context | Presynaptic nerve terminal |
| Biology / relations | Neurotransmitter-containing vesicle participating in calcium-triggered exocytosis. |
| State variables | transmitter; docked/ready/released; calcium context |
| Evidence | [C12 §332](../chapters/12_transport_across_cell_membranes.md#332-synaptic-vesicle), [C12 §336](../chapters/12_transport_across_cell_membranes.md#336-ca2-influx-triggers-vesicle-fusion), [C15 §148](../chapters/15_intracellular_compartments_protein_transport.md#148-triggered-fusion) |
| Uncertainty / display limits | Subtype membership does not double-count vesicles. |

<a id="e-phagosome"></a>

### E.phagosome — Phagosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle |
| Exists in / context | Source phagocytic cells |
| Biology / relations | Membrane-enclosed ingested particle compartment that can fuse with lysosome. |
| State variables | particle; formation; maturation; fusion |
| Evidence | [C15 §198](../chapters/15_intracellular_compartments_protein_transport.md#198-phagocytosis), [C15 §202](../chapters/15_intracellular_compartments_protein_transport.md#202-pseudopods), [C15 §203](../chapters/15_intracellular_compartments_protein_transport.md#203-phagosomelysosome-fusion) |
| Uncertainty / display limits | Not every phagosome follows an unperturbed degradative route. |

<a id="e-autophagosome"></a>

### E.autophagosome — Autophagosome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle |
| Exists in / context | Source starvation/remodeling/autophagy contexts |
| Biology / relations | Double-membrane enclosure delivering cytoplasmic/organelle cargo toward degradation. |
| State variables | enclosed cargo; membrane assembly; fusion; lineage |
| Evidence | [C15 §239](../chapters/15_intracellular_compartments_protein_transport.md#239-autophagy), [C15 §240](../chapters/15_intracellular_compartments_protein_transport.md#240-autophagosome), [C15 §241](../chapters/15_intracellular_compartments_protein_transport.md#241-autophagy-increases-in-starvationremodeling), [C15 §243](../chapters/15_intracellular_compartments_protein_transport.md#243-autophagosome-membrane-origin-uncertainty) |
| Uncertainty / display limits | Membrane origin is unresolved in this source; do not assign one by default. |

<a id="e-lipid_droplet"></a>

### E.lipid_droplet — Lipid droplet

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source intracellular fat storage |
| Biology / relations | Assembly of hydrophobic storage lipids; compartment and cell context remain named. |
| State variables | storage-lipid amount; growth; mobilization; location |
| Evidence | [C11 §60](../chapters/11_membrane_structure.md#60-fat-droplets), [C13 §78](../chapters/13_how_cells_obtain_energy_from_food.md#78-fat-droplets), [C14 §208](../chapters/14_energy_generation_mitochondria_chloroplasts.md#208-fat-storage-in-chloroplast-source-figure) |
| Uncertainty / display limits | Not one huge triacylglycerol molecule; envelope details not inferred from memory. |

<a id="e-contractile_vacuole"></a>

### E.contractile_vacuole — Contractile vacuole

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/organelle |
| Exists in / context | Freshwater protozoan source example |
| Biology / relations | Osmoregulatory compartment with filling, solute recovery and water discharge. |
| State variables | filling; solute transport; water; discharge |
| Evidence | [C12 §91](../chapters/12_transport_across_cell_membranes.md#91-freshwater-protozoan-strategy), [C12 §92](../chapters/12_transport_across_cell_membranes.md#92-contractile-vacuole-cycle) |
| Uncertainty / display limits | Not a static water reservoir or universal organelle. |

<a id="e-plant_vacuole"></a>

### E.plant_vacuole — Plant/fungal vacuole

| Field | Record |
|---|---|
| Kind / scoped aliases | family/organelle |
| Exists in / context | Named source plant/fungal acidified-vacuole context |
| Biology / relations | ATP-driven H+ pumping establishes acidic interior. |
| State variables | pH; transport; volume; contents |
| Evidence | [C12 §176](../chapters/12_transport_across_cell_membranes.md#176-organelle-h-pumps), [C12 §177](../chapters/12_transport_across_cell_membranes.md#177-organelle-acidification) |
| Uncertainty / display limits | No universal size or complete function inventory supplied here. |

<a id="e-pyrenoid"></a>

### E.pyrenoid — Pyrenoid

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/condensate |
| Exists in / context | Some photosynthetic algae; Chlamydomonas source example |
| Biology / relations | Rubisco-rich organization associated with carbon concentration and source starch sheath. |
| State variables | Rubisco/scaffold; local CO2; thylakoid association |
| Evidence | [C14 §194](../chapters/14_energy_generation_mitochondria_chloroplasts.md#194-pyrenoid), [C14 §195](../chapters/14_energy_generation_mitochondria_chloroplasts.md#195-pyrenoid-carbon-concentration), [C14 §196](../chapters/14_energy_generation_mitochondria_chloroplasts.md#196-pyrenoid-structure-source-example) |
| Uncertainty / display limits | Not a universal chloroplast component or membrane organelle. |

<a id="e-liposome"></a>

### E.liposome — Liposome

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly; experimental model |
| Exists in / context | Artificial phospholipid systems |
| Biology / relations | Closed bilayer vesicle used to study membrane/chemiosmotic functions. |
| State variables | composition; introduced proteins; gradient; integrity |
| Evidence | [C11 §85](../chapters/11_membrane_structure.md#85-liposome), [C11 §86](../chapters/11_membrane_structure.md#86-liposomes-form-spontaneously-from-phospholipids-in-water), [C14 §134](../chapters/14_energy_generation_mitochondria_chloroplasts.md#134-rackerstoeckenius-reconstitution) |
| Uncertainty / display limits | Not a native living organelle; assay branch remains explicit. |

<a id="e-virion"></a>

### E.virion — Virus particle

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly; virion |
| Exists in / context | Named virus/host context |
| Biology / relations | Packaged viral genome with protein shell and source-dependent envelope/enzymes. |
| State variables | genome type; capsid; envelope; entry/assembly state |
| Evidence | [C09 §243](../chapters/09_how_genes_and_genomes_evolve.md#243-viruses-can-move-between-cells), [C09 §244](../chapters/09_how_genes_and_genomes_evolve.md#244-virus), [C09 §245](../chapters/09_how_genes_and_genomes_evolve.md#245-viruses-require-host-machinery), [C09 §249](../chapters/09_how_genes_and_genomes_evolve.md#249-viral-genome-types), [C09 §253](../chapters/09_how_genes_and_genomes_evolve.md#253-viral-coat-architecture-varies), [C09 §275](../chapters/09_how_genes_and_genomes_evolve.md#275-retrovirus-carries-reverse-transcriptase-in-the-virion), [C09 §431](../chapters/09_how_genes_and_genomes_evolve.md#431-viral-particle-schema), [C09 §460](../chapters/09_how_genes_and_genomes_evolve.md#460-virus-and-mobile-element-must-not-be-merged), [C09 §461](../chapters/09_how_genes_and_genomes_evolve.md#461-viral-lipid-envelope-is-not-universal), [C09 §465](../chapters/09_how_genes_and_genomes_evolve.md#465-retrovirus-rna-and-proviral-dna-are-different-material-representations-of-one-viral-lineage) |
| Uncertainty / display limits | Not a cell or a mobile genomic element; no autonomous reproduction outside host. |
