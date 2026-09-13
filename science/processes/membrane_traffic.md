# Membrane traffic

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 29 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-protein_sorting"></a>

### P.protein_sorting — Protein sorting

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Newly synthesized protein, encoded signals and destination machinery |
| Required state / input | Source-recognized signal or cytosolic default context |
| WorldState change / output | Cargo is assigned/imported/retained through appropriate nuclear, translocator or vesicular route. |
| Trigger / termination | Signal emergence/availability; destination arrival or quality-control rejection |
| Energy / time / noise / limits | Route-specific energy and fold requirements; cytosolic default is not absence of all regulation. |
| Evidence | [C15 §3](../chapters/15_intracellular_compartments_protein_transport.md#3-protein-sorting), [C15 §40](../chapters/15_intracellular_compartments_protein_transport.md#40-most-proteins-begin-synthesis-on-cytosolic-ribosomes), [C15 §41](../chapters/15_intracellular_compartments_protein_transport.md#41-default-destination-is-cytosol), [C15 §42](../chapters/15_intracellular_compartments_protein_transport.md#42-sorting-signals-are-encoded-in-amino-acid-sequence), [C15 §43](../chapters/15_intracellular_compartments_protein_transport.md#43-three-protein-transport-mechanisms), [C15 §44](../chapters/15_intracellular_compartments_protein_transport.md#44-mechanism-1--nuclear-pore-transport), [C15 §45](../chapters/15_intracellular_compartments_protein_transport.md#45-mechanism-2--translocation-across-membranes), [C15 §46](../chapters/15_intracellular_compartments_protein_transport.md#46-mechanism-3--vesicular-transport), [C15 §48](../chapters/15_intracellular_compartments_protein_transport.md#48-folded-state-distinction) |

<a id="p-nuclear_transport"></a>

### P.nuclear_transport — Receptor-mediated nuclear transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nuclear protein cargo, receptor, [E.nuclear_pore](../entities/macromolecular_complexes.md#e-nuclear_pore), [E.ran](../entities/molecular_entities.md#e-ran) in source nucleus/cytosol |
| Required state / input | Cargo signal/receptor and compartment-biased Ran cycle |
| WorldState change / output | Cargo crosses pore while folded; Ran-dependent binding/release cycles recycle receptors. |
| Trigger / termination | Import/export recognition; cargo release and receptor recycling |
| Energy / time / noise / limits | GTP-linked directionality; pore passage is not transport through lipid bilayer; do not generalize to all mRNA export. |
| Evidence | [C15 §65](../chapters/15_intracellular_compartments_protein_transport.md#65-nuclear-localization-signal), [C15 §66](../chapters/15_intracellular_compartments_protein_transport.md#66-nuclear-import-receptor), [C15 §68](../chapters/15_intracellular_compartments_protein_transport.md#68-ran-gtpase), [C15 §69](../chapters/15_intracellular_compartments_protein_transport.md#69-ran-spatial-asymmetry), [C15 §70](../chapters/15_intracellular_compartments_protein_transport.md#70-ran-gef), [C15 §71](../chapters/15_intracellular_compartments_protein_transport.md#71-ran-gap), [C15 §72](../chapters/15_intracellular_compartments_protein_transport.md#72-nuclear-import-release-step), [C15 §73](../chapters/15_intracellular_compartments_protein_transport.md#73-import-receptor-recycling), [C15 §74](../chapters/15_intracellular_compartments_protein_transport.md#74-nuclear-export), [C15 §75](../chapters/15_intracellular_compartments_protein_transport.md#75-nuclear-cargo-remains-folded) |

<a id="p-mitochondrial_import"></a>

### P.mitochondrial_import — Mitochondrial protein import

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nuclear-encoded precursor, TOM/TIM, chaperones and source membrane system |
| Required state / input | Appropriate targeting signal, unfolding and energy context |
| WorldState change / output | Precursor crosses source membranes, signal can be cleaved and protein refolds/sorts. |
| Trigger / termination | Target recognition; import/refolding or failure |
| Energy / time / noise / limits | Nucleotide-dependent chaperones and PMF contribute; not ordinary vesicle traffic. |
| Evidence | [C15 §76](../chapters/15_intracellular_compartments_protein_transport.md#76-most-mitochondrialchloroplast-proteins-are-nuclear-encoded), [C15 §77](../chapters/15_intracellular_compartments_protein_transport.md#77-typical-mitochondrialchloroplast-signal-location), [C15 §78](../chapters/15_intracellular_compartments_protein_transport.md#78-double-membrane-crossing), [C15 §79](../chapters/15_intracellular_compartments_protein_transport.md#79-membrane-contact-import-sites), [C15 §80](../chapters/15_intracellular_compartments_protein_transport.md#80-mitochondrial-import-requires-unfolding), [C15 §81](../chapters/15_intracellular_compartments_protein_transport.md#81-signal-cleavage-after-import), [C15 §82](../chapters/15_intracellular_compartments_protein_transport.md#82-tom), [C15 §83](../chapters/15_intracellular_compartments_protein_transport.md#83-tim), [C15 §84](../chapters/15_intracellular_compartments_protein_transport.md#84-chaperones-in-mitochondrial-import), [C15 §85](../chapters/15_intracellular_compartments_protein_transport.md#85-nucleotide-hydrolysis-powers-chaperone-work), [C14 §70](../chapters/14_energy_generation_mitochondria_chloroplasts.md#70-protein-import-also-uses-pmf) |

<a id="p-chloroplast_import"></a>

### P.chloroplast_import — Chloroplast protein import

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nuclear-encoded precursor, chloroplast envelope translocators and chaperones |
| Required state / input | Appropriate source targeting signal/import state |
| WorldState change / output | Protein enters stroma with processing/refolding and possible further thylakoid sorting. |
| Trigger / termination | Signal recognition; destination arrival or failure |
| Energy / time / noise / limits | Source nucleotide/import context; exact translocator inventory is not invented. |
| Evidence | [C15 §76](../chapters/15_intracellular_compartments_protein_transport.md#76-most-mitochondrialchloroplast-proteins-are-nuclear-encoded), [C15 §77](../chapters/15_intracellular_compartments_protein_transport.md#77-typical-mitochondrialchloroplast-signal-location), [C15 §78](../chapters/15_intracellular_compartments_protein_transport.md#78-double-membrane-crossing), [C15 §81](../chapters/15_intracellular_compartments_protein_transport.md#81-signal-cleavage-after-import), [C15 §85](../chapters/15_intracellular_compartments_protein_transport.md#85-nucleotide-hydrolysis-powers-chaperone-work), [C15 §86](../chapters/15_intracellular_compartments_protein_transport.md#86-further-intramitochondrialintrachloroplast-sorting) |

<a id="p-peroxisomal_import"></a>

### P.peroxisomal_import — Peroxisomal protein import

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cytosolic cargo, targeting signal/receptor and peroxisome |
| Required state / input | Recognized source signal; import machinery |
| WorldState change / output | Folded protein can enter organelle and change compartment while retaining material identity. |
| Trigger / termination | Receptor recognition; delivery/recycling or failure |
| Energy / time / noise / limits | Source explicitly leaves parts of mechanism unresolved; do not supply a pore/motor model. |
| Evidence | [C15 §87](../chapters/15_intracellular_compartments_protein_transport.md#87-peroxisomal-protein-import), [C15 §88](../chapters/15_intracellular_compartments_protein_transport.md#88-peroxisomal-3-aa-signal), [C15 §89](../chapters/15_intracellular_compartments_protein_transport.md#89-peroxisome-import-receptors), [C15 §90](../chapters/15_intracellular_compartments_protein_transport.md#90-peroxisomal-cargo-can-remain-folded), [C15 §91](../chapters/15_intracellular_compartments_protein_transport.md#91-peroxisome-import-mechanism-remains-incomplete) |

<a id="p-er_translocation"></a>

### P.er_translocation — ER targeting and co-translational translocation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nascent chain/ribosome, SRP, SRP receptor and ER translocator |
| Required state / input | Emerging appropriate ER signal and compatible machinery |
| WorldState change / output | Ribosome engages ER; chain enters lumen during continuing translation; signal processing occurs where specified. |
| Trigger / termination | Signal emergence/handoff; chain completion, cleavage or membrane stop-transfer |
| Energy / time / noise / limits | Source translation-linked thrust; detailed SRP energetics not completed. Free/ER-bound ribosome is one pool. |
| Evidence | [C15 §97](../chapters/15_intracellular_compartments_protein_transport.md#97-er-signal-hydrophobic-core), [C15 §98](../chapters/15_intracellular_compartments_protein_transport.md#98-co-translational-translocation), [C15 §99](../chapters/15_intracellular_compartments_protein_transport.md#99-rough-er-ribosomes-are-not-a-special-class), [C15 §100](../chapters/15_intracellular_compartments_protein_transport.md#100-ribosome-fate-depends-on-current-mrnaprotein), [C15 §102](../chapters/15_intracellular_compartments_protein_transport.md#102-translation-elongation-supplies-translocation-thrust), [C15 §103](../chapters/15_intracellular_compartments_protein_transport.md#103-signal-recognition-particle), [C15 §104](../chapters/15_intracellular_compartments_protein_transport.md#104-srp-receptor), [C15 §105](../chapters/15_intracellular_compartments_protein_transport.md#105-protein-translocator-handoff), [C15 §106](../chapters/15_intracellular_compartments_protein_transport.md#106-soluble-protein-translocation), [C15 §107](../chapters/15_intracellular_compartments_protein_transport.md#107-signal-peptidase), [C15 §108](../chapters/15_intracellular_compartments_protein_transport.md#108-cleaved-signal-fate) |

<a id="p-membrane_protein_insertion"></a>

### P.membrane_protein_insertion — Membrane-protein insertion/topology establishment

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Nascent ER-targeted protein and translocator |
| Required state / input | Source start/stop-transfer sequence arrangement |
| WorldState change / output | Transmembrane segments enter bilayer; cytosolic/luminal domains and termini acquire persistent orientation. |
| Trigger / termination | Start/stop sequence passage; completed insertion |
| Energy / time / noise / limits | Co-translational source route; no spontaneous flipping during onward traffic. |
| Evidence | [C15 §109](../chapters/15_intracellular_compartments_protein_transport.md#109-single-pass-membrane-protein-insertion), [C15 §110](../chapters/15_intracellular_compartments_protein_transport.md#110-single-pass-orientation-source-example), [C15 §111](../chapters/15_intracellular_compartments_protein_transport.md#111-membrane-orientation-is-preserved), [C15 §112](../chapters/15_intracellular_compartments_protein_transport.md#112-luminal-becomes-extracellular), [C15 §113](../chapters/15_intracellular_compartments_protein_transport.md#113-internal-start-transfer-sequence), [C15 §114](../chapters/15_intracellular_compartments_protein_transport.md#114-startstop-sequences-make-multipass-proteins), [C15 §115](../chapters/15_intracellular_compartments_protein_transport.md#115-topology-is-generated-during-biosynthesis) |

<a id="p-glycosylation"></a>

### P.glycosylation — Secretory glycosylation and glycan processing

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | ER/Golgi proteins/lipids, dolichol-linked precursor and source enzymes |
| Required state / input | Accessible lumen-facing substrates and appropriate processing signals |
| WorldState change / output | Covalent glycans added/modified, affecting cargo state and future noncytosolic surface composition. |
| Trigger / termination | Substrate presentation; processing/sorting completion |
| Energy / time / noise / limits | Source N-linked pathway and later Golgi modifications; do not N-glycosylate all cytosolic proteins. |
| Evidence | [C11 §153](../chapters/11_membrane_structure.md#153-glycolipid-sugars-are-added-in-golgi), [C11 §154](../chapters/11_membrane_structure.md#154-glycosylation-enzymes-are-oriented), [C15 §154](../chapters/15_intracellular_compartments_protein_transport.md#154-er-glycosylation), [C15 §155](../chapters/15_intracellular_compartments_protein_transport.md#155-n-linked-oligosaccharide-precursor-size), [C15 §156](../chapters/15_intracellular_compartments_protein_transport.md#156-dolichol), [C15 §157](../chapters/15_intracellular_compartments_protein_transport.md#157-oligosaccharyl-transferase), [C15 §158](../chapters/15_intracellular_compartments_protein_transport.md#158-n-linked-consensus-sequence), [C15 §159](../chapters/15_intracellular_compartments_protein_transport.md#159-why-cytosolic-proteins-are-not-n-glycosylated-this-way), [C15 §160](../chapters/15_intracellular_compartments_protein_transport.md#160-glycan-processing) |

<a id="p-nonvesicular_lipid_transfer"></a>

### P.nonvesicular_lipid_transfer — Nonvesicular lipid transfer

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | Donor/recipient membranes and source lipid-transfer proteins |
| Required state / input | Compatible contact/transfer context |
| WorldState change / output | Lipids move between membranes with hydrophobic groups shielded; membrane inventories change. |
| Trigger / termination | Lipid-transfer interactions; delivery/reset |
| Energy / time / noise / limits | Contact is not membrane fusion or freely mixed lumina; exact rates unspecified. |
| Evidence | [C15 §118](../chapters/15_intracellular_compartments_protein_transport.md#118-nonvesicular-lipid-transfer-proteins), [C15 §119](../chapters/15_intracellular_compartments_protein_transport.md#119-membrane-contact-sites), [C15 §120](../chapters/15_intracellular_compartments_protein_transport.md#120-ermitochondrial-contact-distance), [C15 §121](../chapters/15_intracellular_compartments_protein_transport.md#121-lipid-transfer-protein-geometry) |

<a id="p-vesicle_budding"></a>

### P.vesicle_budding — Vesicle budding and cargo selection

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Donor membrane, cargo/receptors and source coat/adaptins |
| Required state / input | Appropriate route, membrane and cargo selection state |
| WorldState change / output | Cargo-enriched membrane bud forms with preserved leaflet/protein orientation. |
| Trigger / termination | Coat/receptor recruitment; scission or aborted bud |
| Energy / time / noise / limits | Route-specific machinery; cargo selection precedes scission; no arbitrary cargo spawning. |
| Evidence | [C15 §125](../chapters/15_intracellular_compartments_protein_transport.md#125-coated-vesicles), [C15 §126](../chapters/15_intracellular_compartments_protein_transport.md#126-coat-functions), [C15 §128](../chapters/15_intracellular_compartments_protein_transport.md#128-clathrin), [C15 §129](../chapters/15_intracellular_compartments_protein_transport.md#129-clathrin-locations), [C15 §132](../chapters/15_intracellular_compartments_protein_transport.md#132-adaptins), [C15 §133](../chapters/15_intracellular_compartments_protein_transport.md#133-cargo-receptors), [C15 §135](../chapters/15_intracellular_compartments_protein_transport.md#135-table-154-clathrinadaptin-1), [C15 §136](../chapters/15_intracellular_compartments_protein_transport.md#136-table-154-clathrinadaptin-2), [C15 §137](../chapters/15_intracellular_compartments_protein_transport.md#137-table-154-copii), [C15 §138](../chapters/15_intracellular_compartments_protein_transport.md#138-table-154-copi), [C15 §258](../chapters/15_intracellular_compartments_protein_transport.md#258-project-rule--cargo-selection-precedes-scission) |

<a id="p-vesicle_scission"></a>

### P.vesicle_scission — Vesicle scission

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | Bud neck and source scission machinery such as dynamin |
| Required state / input | Mature bud and appropriate machinery |
| WorldState change / output | Bud becomes separate closed vesicle; membrane and cargo lineage recorded. |
| Trigger / termination | Source dynamin/GTP context; neck separation |
| Energy / time / noise / limits | GTP for cited dynamin mechanism; not universal dynamin use for every membrane fission. |
| Evidence | [C15 §130](../chapters/15_intracellular_compartments_protein_transport.md#130-dynamin), [C15 §131](../chapters/15_intracellular_compartments_protein_transport.md#131-dynamin-gtp-hydrolysis), [C15 §255](../chapters/15_intracellular_compartments_protein_transport.md#255-project-rule--vesicles-do-not-teleport-cargo) |

<a id="p-vesicle_uncoating"></a>

### P.vesicle_uncoating — Vesicle uncoating

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | Coated transport vesicle and source uncoating context |
| Required state / input | Released source vesicle carrying temporary coat |
| WorldState change / output | Coat membership decreases/recycles before downstream docking/fusion. |
| Trigger / termination | Post-budding state; coat removal |
| Energy / time / noise / limits | Specific energy/machinery not supplied; do not permanently fuse a coat lattice into target membrane. |
| Evidence | [C15 §127](../chapters/15_intracellular_compartments_protein_transport.md#127-uncoating), [C15 §257](../chapters/15_intracellular_compartments_protein_transport.md#257-project-rule--coat-is-temporary) |

<a id="p-vesicle_docking"></a>

### P.vesicle_docking — Vesicle tethering and docking

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source Rab/tether, complementary SNAREs, vesicle/target membranes |
| Required state / input | Compatible identity/target partners; source coat state |
| WorldState change / output | Tether capture and SNARE pairing bring vesicle into docked state. |
| Trigger / termination | Partner recognition; release or fusion-permissive state |
| Energy / time / noise / limits | Binding/recruitment not sufficient alone for triggered fusion; docking and fusion remain distinct. |
| Evidence | [C15 §140](../chapters/15_intracellular_compartments_protein_transport.md#140-rab-proteins), [C15 §141](../chapters/15_intracellular_compartments_protein_transport.md#141-tethering-proteins), [C15 §142](../chapters/15_intracellular_compartments_protein_transport.md#142-v-snare), [C15 §143](../chapters/15_intracellular_compartments_protein_transport.md#143-t-snare), [C15 §144](../chapters/15_intracellular_compartments_protein_transport.md#144-docking-sequence), [C15 §148](../chapters/15_intracellular_compartments_protein_transport.md#148-triggered-fusion), [C15 §259](../chapters/15_intracellular_compartments_protein_transport.md#259-project-rule--docking-is-not-fusion) |

<a id="p-membrane_fusion"></a>

### P.membrane_fusion — Membrane fusion

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | Compatible vesicle/target bilayers, SNARE machinery and required trigger |
| Required state / input | Docking/close approach, hydration-barrier crossing and trigger where needed |
| WorldState change / output | Bilayers merge and luminal cargo connects to destination; membrane components transfer with sidedness preserved. |
| Trigger / termination | Source fusion-permissive state; connected membrane/cargo state |
| Energy / time / noise / limits | SNARE pairing/mechanochemical context; membranes do not randomly fuse merely because adjacent. |
| Evidence | [C15 §145](../chapters/15_intracellular_compartments_protein_transport.md#145-snares-catalyze-fusion), [C15 §146](../chapters/15_intracellular_compartments_protein_transport.md#146-fusion-distance-source-value), [C15 §147](../chapters/15_intracellular_compartments_protein_transport.md#147-fusion-hydration-barrier), [C15 §148](../chapters/15_intracellular_compartments_protein_transport.md#148-triggered-fusion), [C15 §149](../chapters/15_intracellular_compartments_protein_transport.md#149-fusion-changes-membrane-inventory), [C15 §260](../chapters/15_intracellular_compartments_protein_transport.md#260-project-rule--membrane-fusion-conserves-sidedness) |

<a id="p-endocytosis"></a>

### P.endocytosis — Endocytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; uptake family |
| Participants / location | Plasma membrane, extracellular cargo/fluid and route-specific machinery |
| Required state / input | Permissive uptake/cargo context |
| WorldState change / output | Extracellular material becomes enclosed in internal vesicle/phagosome lumen. |
| Trigger / termination | Source receptor/fluid/particle uptake; delivery to sorting system |
| Energy / time / noise / limits | Uses budding/scission and downstream trafficking; not obligatory degradation. |
| Evidence | [C15 §5](../chapters/15_intracellular_compartments_protein_transport.md#5-exocytosis-and-endocytosis), [C15 §196](../chapters/15_intracellular_compartments_protein_transport.md#196-pinocytosis), [C15 §198](../chapters/15_intracellular_compartments_protein_transport.md#198-phagocytosis), [C15 §209](../chapters/15_intracellular_compartments_protein_transport.md#209-receptor-mediated-endocytosis), [C15 §217](../chapters/15_intracellular_compartments_protein_transport.md#217-early-endosomes) |

<a id="p-pinocytosis"></a>

### P.pinocytosis — Pinocytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/composite |
| Participants / location | Extracellular fluid and source cell membrane |
| Required state / input | Fluid uptake route active |
| WorldState change / output | Fluid/dissolved cargo internalized into small vesicles and endosomal route. |
| Trigger / termination | Uptake machinery; vesicle delivery/recycling |
| Energy / time / noise / limits | Volume/area uptake rates are macrophage/assay-specific, not universal. |
| Evidence | [C15 §196](../chapters/15_intracellular_compartments_protein_transport.md#196-pinocytosis), [C15 §197](../chapters/15_intracellular_compartments_protein_transport.md#197-pinocytic-vesicle-size), [C15 §206](../chapters/15_intracellular_compartments_protein_transport.md#206-macrophage-fluid-uptake), [C15 §207](../chapters/15_intracellular_compartments_protein_transport.md#207-macrophage-membrane-internalization-rate), [C15 §208](../chapters/15_intracellular_compartments_protein_transport.md#208-clathrin-mediated-pinocytosis) |

<a id="p-receptor_mediated_endocytosis"></a>

### P.receptor_mediated_endocytosis — Receptor-mediated endocytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/composite |
| Participants / location | Extracellular ligand, receptor and source coated-pit machinery |
| Required state / input | Ligand binding and cargo-receptor/adaptin capture |
| WorldState change / output | Selected cargo internalized; endosomal pH can separate cargo and receptor for distinct fates. |
| Trigger / termination | Receptor capture; endosomal sorting |
| Energy / time / noise / limits | LDL example is contextual; receptor recycling differs from cargo degradation. |
| Evidence | [C15 §209](../chapters/15_intracellular_compartments_protein_transport.md#209-receptor-mediated-endocytosis), [C15 §211](../chapters/15_intracellular_compartments_protein_transport.md#211-ldl-transport), [C15 §212](../chapters/15_intracellular_compartments_protein_transport.md#212-ldl-receptor-pathway), [C15 §221](../chapters/15_intracellular_compartments_protein_transport.md#221-acidification-supports-sorting), [C15 §225](../chapters/15_intracellular_compartments_protein_transport.md#225-ligand-fate-depends-on-binding-at-low-ph) |

<a id="p-phagocytosis"></a>

### P.phagocytosis — Phagocytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | subtype/composite |
| Participants / location | Particle, phagocytic receptors, cortex and source specialized cell |
| Required state / input | Particle recognition and cytoskeletal response |
| WorldState change / output | Pseudopods enclose particle in phagosome; subsequent lysosomal delivery is a separate event. |
| Trigger / termination | Receptor activation; enclosure and routing |
| Energy / time / noise / limits | Actin/membrane mechanics; perturbed phagosome fusion is possible in source examples. |
| Evidence | [C15 §198](../chapters/15_intracellular_compartments_protein_transport.md#198-phagocytosis), [C15 §200](../chapters/15_intracellular_compartments_protein_transport.md#200-phagocytic-immune-cells), [C15 §201](../chapters/15_intracellular_compartments_protein_transport.md#201-phagocytic-receptor-activation), [C15 §202](../chapters/15_intracellular_compartments_protein_transport.md#202-pseudopods), [C15 §203](../chapters/15_intracellular_compartments_protein_transport.md#203-phagosomelysosome-fusion), [C15 §204](../chapters/15_intracellular_compartments_protein_transport.md#204-mycobacterium-tuberculosis-source-example) |

<a id="p-exocytosis"></a>

### P.exocytosis — Exocytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; constitutive/regulated branches |
| Participants / location | Secretory vesicle, plasma membrane and fusion machinery |
| Required state / input | Constitutive delivery or stored cargo plus source regulated signal |
| WorldState change / output | Vesicle lumen opens to exterior, soluble cargo released and membrane added to cell surface. |
| Trigger / termination | Constitutive traffic or regulated trigger; fusion/release and balancing endocytosis |
| Energy / time / noise / limits | Constitutive and regulated modes reuse fusion; synaptic calcium trigger is contextual, not every secretion event. |
| Evidence | [C15 §180](../chapters/15_intracellular_compartments_protein_transport.md#180-constitutive-exocytosis), [C15 §181](../chapters/15_intracellular_compartments_protein_transport.md#181-default-constitutive-route), [C15 §182](../chapters/15_intracellular_compartments_protein_transport.md#182-regulated-exocytosis), [C15 §183](../chapters/15_intracellular_compartments_protein_transport.md#183-regulated-secretory-cargo-examples), [C15 §187](../chapters/15_intracellular_compartments_protein_transport.md#187-exocytosisendocytosis-surface-area-balance), [C12 §336](../chapters/12_transport_across_cell_membranes.md#336-ca2-influx-triggers-vesicle-fusion), [C12 §337](../chapters/12_transport_across_cell_membranes.md#337-exocytosis) |

<a id="p-endosome_maturation"></a>

### P.endosome_maturation — Endosome maturation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Endosome, resident proteins, cargo, pumps and traffic |
| Required state / input | Source early compartment state |
| WorldState change / output | pH, composition, location and cargo processing change toward late/degradative state. |
| Trigger / termination | Source trafficking/acidification; continued sorting/degradation or alternate route |
| Energy / time / noise / limits | Biological state transition, not coordinate relocation; late-endosome/lysosome continuum retained. |
| Evidence | [C15 §217](../chapters/15_intracellular_compartments_protein_transport.md#217-early-endosomes), [C15 §218](../chapters/15_intracellular_compartments_protein_transport.md#218-late-endosomes), [C15 §219](../chapters/15_intracellular_compartments_protein_transport.md#219-endocytic-timing), [C15 §220](../chapters/15_intracellular_compartments_protein_transport.md#220-endosomal-ph), [C15 §227](../chapters/15_intracellular_compartments_protein_transport.md#227-late-endosome-to-lysosome-continuum), [C15 §261](../chapters/15_intracellular_compartments_protein_transport.md#261-project-rule--endosome-maturation-is-state-change) |

<a id="p-cargo_recycling"></a>

### P.cargo_recycling — Endosomal cargo/receptor recycling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source endosome, receptor/cargo and retrieval vesicles |
| Required state / input | Cargo-specific sorting and pH-dependent binding state |
| WorldState change / output | Selected material returns to appropriate membrane compartment/domain. |
| Trigger / termination | Sorting recognition; return/reinsertion or changed route |
| Energy / time / noise / limits | Uses shared budding/transport/fusion; not all internalized receptors are destroyed. |
| Evidence | [C15 §212](../chapters/15_intracellular_compartments_protein_transport.md#212-ldl-receptor-pathway), [C15 §221](../chapters/15_intracellular_compartments_protein_transport.md#221-acidification-supports-sorting), [C15 §222](../chapters/15_intracellular_compartments_protein_transport.md#222-endosomal-receptor-fate-1--recycling), [C15 §223](../chapters/15_intracellular_compartments_protein_transport.md#223-endosomal-receptor-fate-2--degradation), [C15 §225](../chapters/15_intracellular_compartments_protein_transport.md#225-ligand-fate-depends-on-binding-at-low-ph) |

<a id="p-transcytosis"></a>

### P.transcytosis — Transcytosis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Receptor/cargo and polarized source cell |
| Required state / input | Uptake at one domain with sorting to another |
| WorldState change / output | Cargo/receptor traverses cell in endomembrane route and emerges at another domain. |
| Trigger / termination | Source sorting; destination exocytosis |
| Energy / time / noise / limits | Preserves luminal topology; distinct from passive diffusion through cytosol. |
| Evidence | [C15 §224](../chapters/15_intracellular_compartments_protein_transport.md#224-endosomal-receptor-fate-3--transcytosis), [C15 §225](../chapters/15_intracellular_compartments_protein_transport.md#225-ligand-fate-depends-on-binding-at-low-ph), [C12 §161](../chapters/12_transport_across_cell_membranes.md#161-gut-epithelial-polarity) |

<a id="p-lysosomal_degradation"></a>

### P.lysosomal_degradation — Lysosomal degradation and recycling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Acidic lysosome/late endosome, hydrolases and delivered cargo |
| Required state / input | Cargo arrival and acid-compatible enzymes |
| WorldState change / output | Macromolecules/organelles degraded; products exported toward cytosol for reuse. |
| Trigger / termination | Delivery through endocytosis/phagocytosis/autophagy; substrate digestion/export |
| Energy / time / noise / limits | Proton pumping sustains acidity; source enzyme classes remain partial. |
| Evidence | [C15 §227](../chapters/15_intracellular_compartments_protein_transport.md#227-late-endosome-to-lysosome-continuum), [C15 §228](../chapters/15_intracellular_compartments_protein_transport.md#228-lysosomal-hydrolase-classes), [C15 §230](../chapters/15_intracellular_compartments_protein_transport.md#230-lysosome-ph), [C15 §232](../chapters/15_intracellular_compartments_protein_transport.md#232-acid-dependence-is-protective), [C15 §233](../chapters/15_intracellular_compartments_protein_transport.md#233-lysosomal-metabolite-exporters), [C15 §234](../chapters/15_intracellular_compartments_protein_transport.md#234-lysosomal-proton-pump), [C15 §239](../chapters/15_intracellular_compartments_protein_transport.md#239-autophagy) |

<a id="p-autophagy"></a>

### P.autophagy — Autophagy

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cytoplasmic/organelle cargo, autophagosome and lysosomal system |
| Required state / input | Source starvation/remodeling or cargo-turnover context |
| WorldState change / output | Cargo enclosed by double membrane then delivered for degradation and recycling. |
| Trigger / termination | Source cellular need; fusion/digestion completion |
| Energy / time / noise / limits | Membrane source/complete machinery unresolved; not random deletion of organelles. |
| Evidence | [C15 §239](../chapters/15_intracellular_compartments_protein_transport.md#239-autophagy), [C15 §240](../chapters/15_intracellular_compartments_protein_transport.md#240-autophagosome), [C15 §241](../chapters/15_intracellular_compartments_protein_transport.md#241-autophagy-increases-in-starvationremodeling), [C15 §242](../chapters/15_intracellular_compartments_protein_transport.md#242-autophagy-supplies-recyclable-amino-acids), [C15 §243](../chapters/15_intracellular_compartments_protein_transport.md#243-autophagosome-membrane-origin-uncertainty) |

<a id="p-unfolded_protein_response"></a>

### P.unfolded_protein_response — Unfolded protein response

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite; UPR |
| Participants / location | ER misfolded proteins, ER sensors and cellular expression machinery |
| Required state / input | ER folding load/stress sensed |
| WorldState change / output | Translation load, chaperone capacity and ER state change; unresolved stress can contribute to apoptosis. |
| Trigger / termination | Misfolded-protein accumulation; adaptation or death-pathway activation |
| Energy / time / noise / limits | No arbitrary stress timer or guaranteed apoptosis; branch machinery remains unnamed where source omits it. |
| Evidence | [C15 §163](../chapters/15_intracellular_compartments_protein_transport.md#163-er-chaperone-quality-control), [C15 §164](../chapters/15_intracellular_compartments_protein_transport.md#164-er-associated-disposal-source-model), [C15 §167](../chapters/15_intracellular_compartments_protein_transport.md#167-unfolded-protein-response), [C15 §168](../chapters/15_intracellular_compartments_protein_transport.md#168-upr-sensor-proteins), [C15 §263](../chapters/15_intracellular_compartments_protein_transport.md#263-project-rule--er-stress-changes-cell-state) |

<a id="p-er_associated_degradation"></a>

### P.er_associated_degradation — ER-associated disposal

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Persistently misfolded ER protein and cytosolic proteasome route |
| Required state / input | Failed ER folding/quality control |
| WorldState change / output | Selected substrate returns toward cytosol and undergoes proteasomal degradation. |
| Trigger / termination | Quality-control rejection; degradation |
| Energy / time / noise / limits | Exception to normal forward-secretory luminal retention; not routine cargo leakage. |
| Evidence | [C15 §95](../chapters/15_intracellular_compartments_protein_transport.md#95-er-topology-lock-in), [C15 §163](../chapters/15_intracellular_compartments_protein_transport.md#163-er-chaperone-quality-control), [C15 §164](../chapters/15_intracellular_compartments_protein_transport.md#164-er-associated-disposal-source-model) |

<a id="p-mitochondrial_fission"></a>

### P.mitochondrial_fission — Mitochondrial fission

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Existing mitochondrial network/organelle and membranes |
| Required state / input | Source cell state supporting fission |
| WorldState change / output | Connected mitochondrial material separates into daughter structures with changed connectivity and conserved material lineage. |
| Trigger / termination | Source dynamics; completed separation |
| Energy / time / noise / limits | Source does not supply complete machinery/kinetics here; count depends on segmentation definition. |
| Evidence | [C14 §16](../chapters/14_energy_generation_mitochondria_chloroplasts.md#16-mitochondria-are-dynamic), [C18 §200](../chapters/18_cell_cycle.md#200-mitochondriachloroplasts) |

<a id="p-mitochondrial_fusion"></a>

### P.mitochondrial_fusion — Mitochondrial fusion

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Distinct mitochondrial structures and membranes |
| Required state / input | Source cell state supporting fusion |
| WorldState change / output | Mitochondrial material joins into a connected structure/network with parent lineage retained. |
| Trigger / termination | Source dynamics; completed joining |
| Energy / time / noise / limits | Not merely overlapping meshes; double-membrane topology and missing mechanism must be specified before execution. |
| Evidence | [C14 §16](../chapters/14_energy_generation_mitochondria_chloroplasts.md#16-mitochondria-are-dynamic) |

<a id="p-peroxisome_biogenesis"></a>

### P.peroxisome_biogenesis — ER-associated peroxisome biogenesis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/lineage |
| Participants / location | Source ER-derived membrane vesicles, peroxisomal proteins and existing/new peroxisome |
| Required state / input | Source membrane-protein delivery and import context |
| WorldState change / output | ER-derived carriers contribute to existing peroxisomes or mature toward new peroxisomes after further protein import. |
| Trigger / termination | Source budding/import conditions; organelle maturation |
| Energy / time / noise / limits | Source route does not establish a universal exclusive origin or complete import mechanism. |
| Evidence | [C15 §89](../chapters/15_intracellular_compartments_protein_transport.md#89-peroxisome-import-receptors), [C15 §90](../chapters/15_intracellular_compartments_protein_transport.md#90-peroxisomal-cargo-can-remain-folded), [C15 §91](../chapters/15_intracellular_compartments_protein_transport.md#91-peroxisome-import-mechanism-remains-incomplete), [C15 §92](../chapters/15_intracellular_compartments_protein_transport.md#92-er-contribution-to-peroxisomal-membrane) |
