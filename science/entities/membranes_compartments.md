# Membranes compartments

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 31 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-lipid_bilayer"></a>

### E.lipid_bilayer — Lipid bilayer

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/family |
| Exists in / context | Specified cell/organelle or artificial membrane |
| Biology / relations | Two molecular leaflets with hydrophobic interior; local composition and orientation define barrier properties. |
| State variables | leaflets; topology; continuity; composition; curvature |
| Evidence | [C11 §22](../chapters/11_membrane_structure.md#22-lipid-bilayer), [C11 §61](../chapters/11_membrane_structure.md#61-bilayer-formation-resolves-amphipathic-conflict), [C11 §67](../chapters/11_membrane_structure.md#67-free-edge-prohibition), [C11 §72](../chapters/11_membrane_structure.md#72-membranes-are-two-dimensional-fluids) |
| Uncertainty / display limits | Thickness is context-specific; a bilayer is not one covalent macromolecule. |

<a id="e-plasma_membrane"></a>

### E.plasma_membrane — Plasma membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Cellular boundary; organism/cell context required |
| Biology / relations | Separates cellular interior from extracellular environment and hosts transport, signaling and anchorage. |
| State variables | composition; permeability; voltage; topology; domains |
| Evidence | [C11 §2](../chapters/11_membrane_structure.md#2-plasma-membrane), [C11 §7](../chapters/11_membrane_structure.md#7-basic-structural-formula), [C11 §8](../chapters/11_membrane_structure.md#8-selective-barrier-function), [C12 §37](../chapters/12_transport_across_cell_membranes.md#37-membrane-identity-is-partly-transport-protein-identity) |
| Uncertainty / display limits | Opacity, clipping and object visibility cannot alter the barrier. |

<a id="e-nuclear_envelope"></a>

### E.nuclear_envelope — Nuclear envelope

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Nucleated eukaryotic cells; source mitotic states qualified |
| Biology / relations | Double-membrane enclosure containing pores; outer membrane continuous with ER. |
| State variables | continuity; pores; lamina association; mitotic state |
| Evidence | [C15 §8](../chapters/15_intracellular_compartments_protein_transport.md#8-nuclear-envelope), [C15 §9](../chapters/15_intracellular_compartments_protein_transport.md#9-outer-nuclear-membrane-continuity), [C18 §137](../chapters/18_cell_cycle.md#137-nuclear-envelope-breakdown-mechanism), [C18 §172](../chapters/18_cell_cycle.md#172-nuclear-envelope-reassembly) |
| Uncertainty / display limits | Breakdown is a biological event; camera sectioning is not breakdown. |

<a id="e-inner_nuclear_membrane"></a>

### E.inner_nuclear_membrane — Inner nuclear membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/region |
| Exists in / context | Nuclear envelope |
| Biology / relations | Inner envelope membrane with lamina/chromosome-associated proteins. |
| State variables | resident proteins; lamina links; continuity |
| Evidence | [C15 §59](../chapters/15_intracellular_compartments_protein_transport.md#59-nuclear-lamina), [C15 §60](../chapters/15_intracellular_compartments_protein_transport.md#60-inner-nuclear-membrane-anchoring) |
| Uncertainty / display limits | Do not equate distinct composition with an unrelated organelle. |

<a id="e-outer_nuclear_membrane"></a>

### E.outer_nuclear_membrane — Outer nuclear membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly/region |
| Exists in / context | Nuclear envelope/ER continuum |
| Biology / relations | Outer envelope membrane is continuous with ER membrane. |
| State variables | continuity; resident proteins; ribosome association context |
| Evidence | [C15 §9](../chapters/15_intracellular_compartments_protein_transport.md#9-outer-nuclear-membrane-continuity), [C15 §10](../chapters/15_intracellular_compartments_protein_transport.md#10-endoplasmic-reticulum) |
| Uncertainty / display limits | Proximity alone does not encode continuity. |

<a id="e-er_membrane"></a>

### E.er_membrane — ER membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source endoplasmic reticulum and nuclear-envelope continuity |
| Biology / relations | Continuous membrane network hosting lipid synthesis, translocation and resident transport proteins. |
| State variables | connectivity; leaflets; resident proteins; rough/smooth region |
| Evidence | [C11 §119](../chapters/11_membrane_structure.md#119-eukaryotic-phospholipid-synthesis-begins-on-er-cytosolic-face), [C11 §125](../chapters/11_membrane_structure.md#125-scramblase-balances-er-leaflets), [C15 §9](../chapters/15_intracellular_compartments_protein_transport.md#9-outer-nuclear-membrane-continuity), [C15 §10](../chapters/15_intracellular_compartments_protein_transport.md#10-endoplasmic-reticulum), [C15 §104](../chapters/15_intracellular_compartments_protein_transport.md#104-srp-receptor) |
| Uncertainty / display limits | Rough and smooth are domains of the ER, not obligatory separate organelles. |

<a id="e-golgi_membrane"></a>

### E.golgi_membrane — Golgi membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Cisternae and networks of source Golgi |
| Biology / relations | Distinct cis/trans contexts within trafficking and glycan-processing organization. |
| State variables | cisterna; face; resident enzymes; traffic |
| Evidence | [C15 §170](../chapters/15_intracellular_compartments_protein_transport.md#170-golgi-cisternae), [C15 §173](../chapters/15_intracellular_compartments_protein_transport.md#173-cis-golgi-face), [C15 §174](../chapters/15_intracellular_compartments_protein_transport.md#174-trans-golgi-face), [C15 §175](../chapters/15_intracellular_compartments_protein_transport.md#175-cis-and-trans-golgi-networks), [C15 §179](../chapters/15_intracellular_compartments_protein_transport.md#179-ordered-golgi-glycan-processing-enzymes) |
| Uncertainty / display limits | Stack adjacency does not imply every cisternal lumen is one continuous lumen. |

<a id="e-endosomal_membrane"></a>

### E.endosomal_membrane — Endosomal membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Early/late endosomal states |
| Biology / relations | Sorting membrane with pumps, receptors and traffic machinery that change during maturation. |
| State variables | composition; pH-coupled transport; recycling; maturation |
| Evidence | [C15 §217](../chapters/15_intracellular_compartments_protein_transport.md#217-early-endosomes), [C15 §218](../chapters/15_intracellular_compartments_protein_transport.md#218-late-endosomes), [C15 §220](../chapters/15_intracellular_compartments_protein_transport.md#220-endosomal-ph), [C15 §221](../chapters/15_intracellular_compartments_protein_transport.md#221-acidification-supports-sorting) |
| Uncertainty / display limits | Endosomal position alone does not define maturation. |

<a id="e-lysosomal_membrane"></a>

### E.lysosomal_membrane — Lysosomal membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source degradative compartments |
| Biology / relations | Acidic-lumen boundary with H+ pumps, metabolite exporters and protected luminal domains. |
| State variables | transport; glycosylation; integrity |
| Evidence | [C15 §230](../chapters/15_intracellular_compartments_protein_transport.md#230-lysosome-ph), [C15 §233](../chapters/15_intracellular_compartments_protein_transport.md#233-lysosomal-metabolite-exporters), [C15 §234](../chapters/15_intracellular_compartments_protein_transport.md#234-lysosomal-proton-pump), [C15 §235](../chapters/15_intracellular_compartments_protein_transport.md#235-lysosomal-membrane-glycosylation) |
| Uncertainty / display limits | Cytosolic pH is not lysosomal pH. |

<a id="e-peroxisomal_membrane"></a>

### E.peroxisomal_membrane — Peroxisomal membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source peroxisomal contexts |
| Biology / relations | Boundary supporting selective protein import and ER-derived membrane contributions. |
| State variables | import; composition; growth/lineage |
| Evidence | [C15 §87](../chapters/15_intracellular_compartments_protein_transport.md#87-peroxisomal-protein-import), [C15 §90](../chapters/15_intracellular_compartments_protein_transport.md#90-peroxisomal-cargo-can-remain-folded), [C15 §92](../chapters/15_intracellular_compartments_protein_transport.md#92-er-contribution-to-peroxisomal-membrane) |
| Uncertainty / display limits | Do not treat all peroxisomal import as unfolded translocation. |

<a id="e-mitochondrial_outer_membrane"></a>

### E.mitochondrial_outer_membrane — Outer mitochondrial membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source mitochondria |
| Biology / relations | Porin-containing boundary distinct from selective inner membrane. |
| State variables | porins; permeability; integrity; contacts |
| Evidence | [C14 §28](../chapters/14_energy_generation_mitochondria_chloroplasts.md#28-four-mitochondrial-compartments), [C14 §29](../chapters/14_energy_generation_mitochondria_chloroplasts.md#29-outer-mitochondrial-membrane-porins), [C14 §30](../chapters/14_energy_generation_mitochondria_chloroplasts.md#30-outer-membrane-permeability-source-cutoff), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release) |
| Uncertainty / display limits | A small-solute permeability approximation is not unrestricted macromolecule passage. |

<a id="e-mitochondrial_inner_membrane"></a>

### E.mitochondrial_inner_membrane — Inner mitochondrial membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source mitochondria |
| Biology / relations | Selective inner boundary with cristae, respiratory complexes, ATP synthase and transporters. |
| State variables | voltage; pH difference; cristae; permeability; proteins |
| Evidence | [C14 §32](../chapters/14_energy_generation_mitochondria_chloroplasts.md#32-inner-mitochondrial-membrane-is-selective), [C14 §34](../chapters/14_energy_generation_mitochondria_chloroplasts.md#34-cristae), [C14 §37](../chapters/14_energy_generation_mitochondria_chloroplasts.md#37-cristae-are-functionally-specialized), [C14 §57](../chapters/14_energy_generation_mitochondria_chloroplasts.md#57-atp-synthase-architecture) |
| Uncertainty / display limits | Not freely permeable to NADH or ions; cristae are folds of this membrane. |

<a id="e-chloroplast_outer_membrane"></a>

### E.chloroplast_outer_membrane — Chloroplast outer membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Photosynthetic plastid context |
| Biology / relations | Outer envelope boundary in source chloroplast architecture. |
| State variables | composition; permeability; continuity |
| Evidence | [C14 §143](../chapters/14_energy_generation_mitochondria_chloroplasts.md#143-chloroplast-envelope) |
| Uncertainty / display limits | Not the site of source photosynthetic electron transport. |

<a id="e-chloroplast_inner_membrane"></a>

### E.chloroplast_inner_membrane — Chloroplast inner membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Photosynthetic plastid context |
| Biology / relations | Selective envelope membrane enclosing stroma. |
| State variables | transport; composition; permeability |
| Evidence | [C14 §143](../chapters/14_energy_generation_mitochondria_chloroplasts.md#143-chloroplast-envelope), [C14 §151](../chapters/14_energy_generation_mitochondria_chloroplasts.md#151-atpnadph-cannot-simply-leave-chloroplast), [C14 §152](../chapters/14_energy_generation_mitochondria_chloroplasts.md#152-photosynthetic-export-form) |
| Uncertainty / display limits | Source ATP/NADPH export restriction remains qualified to its framing. |

<a id="e-thylakoid_membrane"></a>

### E.thylakoid_membrane — Thylakoid membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | assembly |
| Exists in / context | Source chloroplast/cyanobacterial photosynthetic context qualified per organism |
| Biology / relations | Energy-converting membrane separating stroma-side and lumen-side in chloroplasts. |
| State variables | connectivity; photosystems; proton flux; orientation |
| Evidence | [C14 §145](../chapters/14_energy_generation_mitochondria_chloroplasts.md#145-thylakoid-membrane), [C14 §146](../chapters/14_energy_generation_mitochondria_chloroplasts.md#146-thylakoids), [C14 §149](../chapters/14_energy_generation_mitochondria_chloroplasts.md#149-photosynthetic-machinery-location), [C14 §172](../chapters/14_energy_generation_mitochondria_chloroplasts.md#172-chloroplast-proton-pumping-direction), [C14 §173](../chapters/14_energy_generation_mitochondria_chloroplasts.md#173-thylakoid-atp-synthase-direction) |
| Uncertainty / display limits | Not chloroplast inner envelope; do not force mitochondrial side names here. |

<a id="e-vesicle_membrane"></a>

### E.vesicle_membrane — Transport-vesicle membrane

| Field | Record |
|---|---|
| Kind / scoped aliases | family/assembly |
| Exists in / context | Source endomembrane trafficking |
| Biology / relations | Bud-derived bilayer preserves leaflet and protein sidedness through fusion. |
| State variables | origin; destination; coat; Rab/SNARE; topology |
| Evidence | [C15 §123](../chapters/15_intracellular_compartments_protein_transport.md#123-membrane-orientation-is-conserved-through-vesicles), [C15 §125](../chapters/15_intracellular_compartments_protein_transport.md#125-coated-vesicles), [C15 §149](../chapters/15_intracellular_compartments_protein_transport.md#149-fusion-changes-membrane-inventory) |
| Uncertainty / display limits | A vesicle is not its membrane alone. |

<a id="e-cytosol"></a>

### E.cytosol — Cytosol

| Field | Record |
|---|---|
| Kind / scoped aliases | region; aqueous compartment |
| Exists in / context | Source cellular contexts |
| Biology / relations | Aqueous cellular phase distinguished from total cytoplasm; hosts many metabolic/translation reactions. |
| State variables | volume; solute pools; crowding; pH |
| Evidence | [C01 §48.3](../chapters/01_cells_fundamental_units.md#483-cytoplasmcytosol), [C13 §18](../chapters/13_how_cells_obtain_energy_from_food.md#18-stage-2-begins-with-glycolysis), [C15 §41](../chapters/15_intracellular_compartments_protein_transport.md#41-default-destination-is-cytosol) |
| Uncertainty / display limits | Cytosol excludes organelle lumina; cytoplasm is a broader region. |

<a id="e-cytoplasm"></a>

### E.cytoplasm — Cytoplasm

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source eukaryotic terminology |
| Biology / relations | Cell contents outside nucleus including cytosol, organelles, cytoskeleton and complexes. |
| State variables | spatial membership; organelle and cytosolic states |
| Evidence | [C01 §48.2](../chapters/01_cells_fundamental_units.md#482-nucleus), [C01 §48.3](../chapters/01_cells_fundamental_units.md#483-cytoplasmcytosol) |
| Uncertainty / display limits | Not an additional aqueous pool to sum with cytosol. |

<a id="e-nucleoplasm"></a>

### E.nucleoplasm — Nucleoplasm

| Field | Record |
|---|---|
| Kind / scoped aliases | region; nuclear aqueous interior |
| Exists in / context | Source nucleated eukaryotic cells |
| Biology / relations | Nuclear interior separated from cytoplasm by envelope; chromatin/complexes occupy it. |
| State variables | volume; contents; transport; pH context |
| Evidence | [C01 §48.2](../chapters/01_cells_fundamental_units.md#482-nucleus), [C15 §7](../chapters/15_intracellular_compartments_protein_transport.md#7-nucleus), [C15 §8](../chapters/15_intracellular_compartments_protein_transport.md#8-nuclear-envelope), [C15 §69](../chapters/15_intracellular_compartments_protein_transport.md#69-ran-spatial-asymmetry) |
| Uncertainty / display limits | A single nucleus size is not universal. |

<a id="e-er_lumen"></a>

### E.er_lumen — ER lumen

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source ER |
| Biology / relations | Aqueous interior for secretory protein folding/modification and calcium storage contexts. |
| State variables | volume; pH; calcium; cargo; quality control |
| Evidence | [C15 §12](../chapters/15_intracellular_compartments_protein_transport.md#12-er-lumen), [C15 §13](../chapters/15_intracellular_compartments_protein_transport.md#13-smooth-er), [C15 §95](../chapters/15_intracellular_compartments_protein_transport.md#95-er-topology-lock-in), [C15 §152](../chapters/15_intracellular_compartments_protein_transport.md#152-er-disulfide-bonds), [C15 §154](../chapters/15_intracellular_compartments_protein_transport.md#154-er-glycosylation) |
| Uncertainty / display limits | Not cytosol; forward traffic preserves topological side. |

<a id="e-golgi_lumen"></a>

### E.golgi_lumen — Golgi lumen

| Field | Record |
|---|---|
| Kind / scoped aliases | region/family |
| Exists in / context | Individual Golgi cisternae/networks |
| Biology / relations | Luminal compartments with ordered processing and sorting environments. |
| State variables | cisterna; pH; cargo; maturation |
| Evidence | [C15 §170](../chapters/15_intracellular_compartments_protein_transport.md#170-golgi-cisternae), [C15 §175](../chapters/15_intracellular_compartments_protein_transport.md#175-cis-and-trans-golgi-networks), [C15 §179](../chapters/15_intracellular_compartments_protein_transport.md#179-ordered-golgi-glycan-processing-enzymes), [C15 §184](../chapters/15_intracellular_compartments_protein_transport.md#184-trans-golgi-aggregation-conditions) |
| Uncertainty / display limits | Luminal equivalence in traffic is not unrestricted aqueous continuity between cisternae. |

<a id="e-endosomal_lumen"></a>

### E.endosomal_lumen — Endosomal lumen

| Field | Record |
|---|---|
| Kind / scoped aliases | region/family |
| Exists in / context | Source early/late endosomes |
| Biology / relations | Acidifying sorting interior containing endocytosed material. |
| State variables | pH; cargo; maturation; volume |
| Evidence | [C15 §217](../chapters/15_intracellular_compartments_protein_transport.md#217-early-endosomes), [C15 §218](../chapters/15_intracellular_compartments_protein_transport.md#218-late-endosomes), [C15 §220](../chapters/15_intracellular_compartments_protein_transport.md#220-endosomal-ph), [C15 §221](../chapters/15_intracellular_compartments_protein_transport.md#221-acidification-supports-sorting) |
| Uncertainty / display limits | Acidification and cargo fate are biological changes. |

<a id="e-lysosomal_lumen"></a>

### E.lysosomal_lumen — Lysosomal lumen

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source lysosomes |
| Biology / relations | Acidic degradative interior with hydrolases and imported cargo. |
| State variables | pH; hydrolase activity; cargo; products |
| Evidence | [C15 §228](../chapters/15_intracellular_compartments_protein_transport.md#228-lysosomal-hydrolase-classes), [C15 §230](../chapters/15_intracellular_compartments_protein_transport.md#230-lysosome-ph), [C15 §232](../chapters/15_intracellular_compartments_protein_transport.md#232-acid-dependence-is-protective), [C15 §233](../chapters/15_intracellular_compartments_protein_transport.md#233-lysosomal-metabolite-exporters) |
| Uncertainty / display limits | Not an indiscriminate proteasome-equivalent compartment. |

<a id="e-mitochondrial_matrix"></a>

### E.mitochondrial_matrix — Mitochondrial matrix

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source mitochondria |
| Biology / relations | Interior bounded by inner membrane; metabolic enzymes and matrix-facing ATP synthesis context. |
| State variables | volume; pH; pools; imported proteins |
| Evidence | [C14 §28](../chapters/14_energy_generation_mitochondria_chloroplasts.md#28-four-mitochondrial-compartments), [C14 §33](../chapters/14_energy_generation_mitochondria_chloroplasts.md#33-matrix-composition-is-selective), [C14 §40](../chapters/14_energy_generation_mitochondria_chloroplasts.md#40-acetyl-coa-production-in-matrix), [C14 §58](../chapters/14_energy_generation_mitochondria_chloroplasts.md#58-atp-synthase-orientation) |
| Uncertainty / display limits | Do not place all TCA enzymes in soluble matrix; succinate dehydrogenase is membrane embedded. |

<a id="e-mitochondrial_ims"></a>

### E.mitochondrial_ims — Mitochondrial intermembrane space

| Field | Record |
|---|---|
| Kind / scoped aliases | region; IMS |
| Exists in / context | Between mitochondrial membranes; crista lumen topology retained |
| Biology / relations | Source proton-pumping destination and cytochrome-c release origin. |
| State variables | pH; small-solute exchange; cytochrome c; volume |
| Evidence | [C14 §28](../chapters/14_energy_generation_mitochondria_chloroplasts.md#28-four-mitochondrial-compartments), [C14 §31](../chapters/14_energy_generation_mitochondria_chloroplasts.md#31-intermembrane-space-small-solute-equivalence), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction), [C14 §52](../chapters/14_energy_generation_mitochondria_chloroplasts.md#52-intermembrane-space-ph), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release) |
| Uncertainty / display limits | Approximate cytosolic equivalence applies to source small solutes, not every component. |

<a id="e-chloroplast_stroma"></a>

### E.chloroplast_stroma — Chloroplast stroma

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Source chloroplast |
| Biology / relations | Interior surrounding thylakoids, containing carbon-fixation machinery. |
| State variables | pH context; metabolites; Rubisco; volume |
| Evidence | [C14 §144](../chapters/14_energy_generation_mitochondria_chloroplasts.md#144-stroma), [C14 §173](../chapters/14_energy_generation_mitochondria_chloroplasts.md#173-thylakoid-atp-synthase-direction), [C14 §190](../chapters/14_energy_generation_mitochondria_chloroplasts.md#190-rubisco) |
| Uncertainty / display limits | Not the thylakoid lumen or mitochondrial matrix. |

<a id="e-thylakoid_lumen"></a>

### E.thylakoid_lumen — Thylakoid space

| Field | Record |
|---|---|
| Kind / scoped aliases | region; thylakoid lumen |
| Exists in / context | Source chloroplast |
| Biology / relations | Interior of thylakoid sacs; source proposes connected lumen distinct from stroma. |
| State variables | connectivity; proton pool; pH; volume |
| Evidence | [C14 §146](../chapters/14_energy_generation_mitochondria_chloroplasts.md#146-thylakoids), [C14 §148](../chapters/14_energy_generation_mitochondria_chloroplasts.md#148-thylakoid-lumen-connectivity), [C14 §172](../chapters/14_energy_generation_mitochondria_chloroplasts.md#172-chloroplast-proton-pumping-direction) |
| Uncertainty / display limits | Proposed connectivity retains source uncertainty. |

<a id="e-extracellular_space"></a>

### E.extracellular_space — Extracellular space

| Field | Record |
|---|---|
| Kind / scoped aliases | region/family |
| Exists in / context | Tissue-, medium- or lumen-specific context |
| Biology / relations | Environment outside a specified cell, including named extracellular fluids and matrices. |
| State variables | solutes; matrix; volume; neighboring cells |
| Evidence | [C11 §2](../chapters/11_membrane_structure.md#2-plasma-membrane), [C11 §146](../chapters/11_membrane_structure.md#146-plasma-membrane-noncytosolic-face), [C16 §9](../chapters/16_cell_signaling.md#9-endocrine-signaling), [C20 §4](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#4-extracellular-matrix) |
| Uncertainty / display limits | Gut lumen, blood and interstitial fluid must not share one unqualified pool. |

<a id="e-synaptic_cleft"></a>

### E.synaptic_cleft — Synaptic cleft

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Chemical synapse |
| Biology / relations | Extracellular gap between presynaptic and postsynaptic membranes. |
| State variables | geometry; transmitter concentration; clearance |
| Evidence | [C12 §325](../chapters/12_transport_across_cell_membranes.md#325-synapse), [C12 §328](../chapters/12_transport_across_cell_membranes.md#328-synaptic-cleft), [C12 §329](../chapters/12_transport_across_cell_membranes.md#329-synaptic-cleft-width), [C12 §338](../chapters/12_transport_across_cell_membranes.md#338-synaptic-conversion-sequence) |
| Uncertainty / display limits | Electrical signal does not directly jump across a chemical synapse. |

<a id="e-apical_domain"></a>

### E.apical_domain — Apical membrane domain

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Polarized epithelia in source examples |
| Biology / relations | Surface domain facing the specified epithelial lumen with distinct proteins. |
| State variables | parent membrane; facing compartment; composition |
| Evidence | [C11 §283](../chapters/11_membrane_structure.md#283-epithelial-polarity-example), [C11 §284](../chapters/11_membrane_structure.md#284-apical-side), [C20 §91](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#91-epithelial-polarity), [C20 §95](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#95-intestinal-epithelial-polarity) |
| Uncertainty / display limits | Camera orientation cannot define apical identity. |

<a id="e-basolateral_domain"></a>

### E.basolateral_domain — Basolateral membrane domain

| Field | Record |
|---|---|
| Kind / scoped aliases | region |
| Exists in / context | Polarized epithelia in source examples |
| Biology / relations | Basal/lateral regions with source-specific transport and matrix/neighbor contacts. |
| State variables | parent membrane; contacts; composition |
| Evidence | [C12 §164](../chapters/12_transport_across_cell_membranes.md#164-basallateral-membranes), [C12 §166](../chapters/12_transport_across_cell_membranes.md#166-basolateral-na-pumps), [C20 §91](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#91-epithelial-polarity) |
| Uncertainty / display limits | Domain is not a separate organelle or free membrane pool. |
