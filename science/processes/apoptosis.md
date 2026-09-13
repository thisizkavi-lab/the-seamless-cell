# Apoptosis

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 6 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-apoptosis"></a>

### P.apoptosis — Programmed apoptotic cell death

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/state transition |
| Participants / location | Existing cell, source death-control/caspase machinery and clearance context |
| Required state / input | Developmental, homeostatic or damage-associated source trigger |
| WorldState change / output | Cell dismantles, condenses/fragments and packages material for clearance; cell identity follows death/fragment lineage. |
| Trigger / termination | Source pathway initiation; execution/clearance |
| Energy / time / noise / limits | Distinct from necrotic swelling/rupture; membrane containment persists through source apoptotic packaging. Not every cell death is apoptosis. |
| Evidence | [C18 §217](../chapters/18_cell_cycle.md#217-apoptosis), [C18 §218](../chapters/18_cell_cycle.md#218-apoptosis-contributes-to-development), [C18 §219](../chapters/18_cell_cycle.md#219-apoptosis-contributes-to-tissue-homeostasis), [C18 §222](../chapters/18_cell_cycle.md#222-necrosis), [C18 §223](../chapters/18_cell_cycle.md#223-apoptotic-morphology), [C18 §224](../chapters/18_cell_cycle.md#224-apoptosis-usually-preserves-membrane-integrity-long-enough-for-clearance), [C18 §225](../chapters/18_cell_cycle.md#225-caspases), [C18 §229](../chapters/18_cell_cycle.md#229-caspase-cascade), [C18 §231](../chapters/18_cell_cycle.md#231-apoptosis-is-switch-like) |

<a id="p-intrinsic_apoptosis"></a>

### P.intrinsic_apoptosis — Intrinsic mitochondrial apoptosis pathway

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Bcl2-family regulators, mitochondrial outer membrane, cytochrome c and apoptosome |
| Required state / input | Source pro-death/survival balance permitting Bax/Bak action |
| WorldState change / output | Outer-membrane permeabilization releases cytochrome c to cytosol; apoptosome supports initiator-caspase activation. |
| Trigger / termination | Source intrinsic trigger; caspase cascade or inhibition before commitment |
| Energy / time / noise / limits | This is a biological permeability change; cytochrome c is redistributed, not newly created in cytosol. |
| Evidence | [C18 §232](../chapters/18_cell_cycle.md#232-bcl2-family), [C18 §233](../chapters/18_cell_cycle.md#233-bax-and-bak), [C18 §234](../chapters/18_cell_cycle.md#234-bcl2), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release), [C18 §236](../chapters/18_cell_cycle.md#236-apoptosome), [C18 §237](../chapters/18_cell_cycle.md#237-apoptosome-caspase-recruitment), [C18 §238](../chapters/18_cell_cycle.md#238-caspase-9) |

<a id="p-extrinsic_apoptosis"></a>

### P.extrinsic_apoptosis — Death-receptor apoptosis pathway

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source Fas/Fas ligand and DISC/initiator-caspase machinery |
| Required state / input | Compatible ligand/receptor and responsive target cell |
| WorldState change / output | Receptor-associated signaling complex activates source caspase pathway. |
| Trigger / termination | Death-ligand engagement; execution or pathway inhibition |
| Energy / time / noise / limits | Source example does not imply every receptor activation causes death. |
| Evidence | [C18 §239](../chapters/18_cell_cycle.md#239-extrinsic-apoptosis), [C18 §240](../chapters/18_cell_cycle.md#240-fas), [C18 §241](../chapters/18_cell_cycle.md#241-fas-ligand), [C18 §242](../chapters/18_cell_cycle.md#242-death-inducing-signaling-complex) |

<a id="p-caspase_execution"></a>

### P.caspase_execution — Caspase activation/execution cascade

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Initiator/executioner caspases and source cellular substrates |
| Required state / input | Source initiator activation |
| WorldState change / output | Proteolytic activation propagates; cleavage dismantles structural/functional targets including lamins. |
| Trigger / termination | Initiator pathway activation; substrate cleavage/death endpoint |
| Energy / time / noise / limits | Proteolysis is not reversible protein phosphorylation; source effectively irreversible commitment must not be a view toggle. |
| Evidence | [C18 §225](../chapters/18_cell_cycle.md#225-caspases), [C18 §226](../chapters/18_cell_cycle.md#226-caspases-are-synthesized-inactive), [C18 §227](../chapters/18_cell_cycle.md#227-initiator-caspases), [C18 §228](../chapters/18_cell_cycle.md#228-executioner-caspases), [C18 §229](../chapters/18_cell_cycle.md#229-caspase-cascade), [C18 §230](../chapters/18_cell_cycle.md#230-lamin-cleavage), [C18 §231](../chapters/18_cell_cycle.md#231-apoptosis-is-switch-like) |

<a id="p-apoptotic_clearance"></a>

### P.apoptotic_clearance — Apoptotic-cell/fragment clearance

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Apoptotic material and source phagocytic neighbor |
| Required state / input | Recognizable source apoptotic state and available engulfing cell |
| WorldState change / output | Material is engulfed and degraded/recycled through canonical phagocytic/lysosomal routes. |
| Trigger / termination | Source recognition/contact; digestion |
| Energy / time / noise / limits | Visibility loss alone does not remove biological material; clearance tracks recipient and cargo lineage. |
| Evidence | [C18 §223](../chapters/18_cell_cycle.md#223-apoptotic-morphology), [C18 §224](../chapters/18_cell_cycle.md#224-apoptosis-usually-preserves-membrane-integrity-long-enough-for-clearance), [C15 §198](../chapters/15_intracellular_compartments_protein_transport.md#198-phagocytosis), [C15 §200](../chapters/15_intracellular_compartments_protein_transport.md#200-phagocytic-immune-cells), [C15 §201](../chapters/15_intracellular_compartments_protein_transport.md#201-phagocytic-receptor-activation), [C15 §228](../chapters/15_intracellular_compartments_protein_transport.md#228-lysosomal-hydrolase-classes) |

<a id="p-necrotic_cell_death"></a>

### P.necrotic_cell_death — Necrotic cell death in source contrast

| Field | Record |
|---|---|
| Kind / scoped aliases | state transition/pattern |
| Participants / location | Source injured cell |
| Required state / input | Severe damaging context described by source |
| WorldState change / output | Cell swells and ruptures with material release and source inflammatory consequences. |
| Trigger / termination | Source injury; loss of integrity |
| Energy / time / noise / limits | Contrast description is not a complete regulated-necrosis mechanism or a license to equate every rupture with this full outcome. |
| Evidence | [C18 §222](../chapters/18_cell_cycle.md#222-necrosis) |
