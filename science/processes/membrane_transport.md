# Membrane transport

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 14 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-passive_transport"></a>

### P.passive_transport — Passive membrane transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Specified solute, membrane and bilayer/channel/carrier route |
| Required state / input | Available permeation path and solute-specific driving force |
| WorldState change / output | Solute distribution changes through bidirectional microscopic passage; net flux follows electrochemical or neutral-solute concentration context. |
| Trigger / termination | Pathway availability; net equilibrium or closure/binding changes |
| Energy / time / noise / limits | No direct transporter energy expenditure; persistent microscopic motion at zero net flux. |
| Evidence | [C12 §59](../chapters/12_transport_across_cell_membranes.md#59-passive-transport), [C12 §60](../chapters/12_transport_across_cell_membranes.md#60-passive-transport-is-bidirectional-microscopically), [C12 §61](../chapters/12_transport_across_cell_membranes.md#61-passive-equilibrium), [C12 §66](../chapters/12_transport_across_cell_membranes.md#66-uncharged-solute-passive-transport), [C12 §67](../chapters/12_transport_across_cell_membranes.md#67-charged-solute-passive-transport), [C12 §68](../chapters/12_transport_across_cell_membranes.md#68-electrochemical-gradient) |

<a id="p-channel_transport"></a>

### P.channel_transport — Channel-mediated transport

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | [E.channel](../entities/molecular_entities.md#e-channel), permitted solutes and named membrane sides |
| Required state / input | Open/available pore, selectivity compatibility and driving force |
| WorldState change / output | Solute/charge crosses through pore; side-specific quantities and possible membrane voltage change. |
| Trigger / termination | Gating/open probability; closure/inactivation or balanced driving force |
| Energy / time / noise / limits | Passive; no whole conformational cycle per ion. Hydration/chemical filter context matters. |
| Evidence | [C12 §190](../chapters/12_transport_across_cell_membranes.md#190-most-plasma-membrane-channels-are-narrow-and-selective), [C12 §193](../chapters/12_transport_across_cell_membranes.md#193-selectivity-filter), [C12 §195](../chapters/12_transport_across_cell_membranes.md#195-partial-dehydration), [C12 §196](../chapters/12_transport_across_cell_membranes.md#196-channel-wall-substitutes-favorable-interactions), [C12 §201](../chapters/12_transport_across_cell_membranes.md#201-ion-channels-have-gates), [C12 §203](../chapters/12_transport_across_cell_membranes.md#203-gating-stimulus-changes-opening-probability), [C12 §204](../chapters/12_transport_across_cell_membranes.md#204-channel-transport-rate), [C12 §206](../chapters/12_transport_across_cell_membranes.md#206-channels-cannot-perform-active-transport), [C12 §448](../chapters/12_transport_across_cell_membranes.md#448-channel-current-direction-depends-on-electrochemical-gradient) |

<a id="p-carrier_transport"></a>

### P.carrier_transport — Carrier-mediated transport

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | [E.transporter](../entities/molecular_entities.md#e-transporter) and bound solute(s) at named membrane |
| Required state / input | Source alternating-access and selectivity conditions |
| WorldState change / output | Binding, occlusion and opposite-side exposure change solute location and occupancy. |
| Trigger / termination | Solute binding/conformational transitions; release/reset or inhibition |
| Energy / time / noise / limits | Passive uniport or energy-coupled subtype must be explicit; not an open tunnel. |
| Evidence | [C12 §99](../chapters/12_transport_across_cell_membranes.md#99-passive-glucose-transporter), [C12 §101](../chapters/12_transport_across_cell_membranes.md#101-alternating-access-model), [C12 §102](../chapters/12_transport_across_cell_membranes.md#102-transporter-transitions-are-reversible), [C12 §106](../chapters/12_transport_across_cell_membranes.md#106-passive-glucose-transport-can-reverse), [C12 §107](../chapters/12_transport_across_cell_membranes.md#107-d-glucose-selectivity), [C12 §149](../chapters/12_transport_across_cell_membranes.md#149-symport), [C12 §150](../chapters/12_transport_across_cell_membranes.md#150-antiport), [C12 §151](../chapters/12_transport_across_cell_membranes.md#151-uniport) |

<a id="p-active_transport"></a>

### P.active_transport — Active membrane transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Pump/coupled transporter, driven solute and energy source |
| Required state / input | Source-defined energy coupling capable of uphill transport |
| WorldState change / output | Driven solute accumulates against its relevant gradient while ATP/light/driving-gradient resource changes. |
| Trigger / termination | Energy/substrate availability; inhibition or loss of drive |
| Energy / time / noise / limits | ATP, light or another gradient must be identified; not all active transport directly hydrolyzes ATP. |
| Evidence | [C12 §62](../chapters/12_transport_across_cell_membranes.md#62-active-transport), [C12 §65](../chapters/12_transport_across_cell_membranes.md#65-atp-is-one-possible-pump-energy-source), [C12 §109](../chapters/12_transport_across_cell_membranes.md#109-three-major-active-pump-energy-classes), [C12 §110](../chapters/12_transport_across_cell_membranes.md#110-gradient-driven-pump), [C12 §111](../chapters/12_transport_across_cell_membranes.md#111-atp-driven-pump), [C12 §112](../chapters/12_transport_across_cell_membranes.md#112-light-driven-pump) |

<a id="p-nak_pumping"></a>

### P.nak_pumping — Na+/K+ pumping

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.nak_atpase](../entities/macromolecular_complexes.md#e-nak_atpase), sodium, potassium and ATP across source animal plasma membrane |
| Required state / input | Required binding/phosphorylation states and both ion reservoirs |
| WorldState change / output | Source cycle moves three Na+ outward and two K+ inward with pump phosphorylation/conformational reset. |
| Trigger / termination | Cytosolic Na/ATP binding; K-dependent reset or obligatory-step blockade |
| Energy / time / noise / limits | Electrogenic and ATP-coupled; turnover and ATP-consumption share require cell context. |
| Evidence | [C12 §118](../chapters/12_transport_across_cell_membranes.md#118-na-pump-direction), [C12 §119](../chapters/12_transport_across_cell_membranes.md#119-na-pump-stoichiometry), [C12 §120](../chapters/12_transport_across_cell_membranes.md#120-na-pump-atp-coupling), [C12 §122](../chapters/12_transport_across_cell_membranes.md#122-na-pump-cycle--cytosolic-na-binding), [C12 §123](../chapters/12_transport_across_cell_membranes.md#123-na-pump-cycle--phosphorylation), [C12 §124](../chapters/12_transport_across_cell_membranes.md#124-na-pump-cycle--outward-transition), [C12 §125](../chapters/12_transport_across_cell_membranes.md#125-na-pump-cycle--k-binding), [C12 §126](../chapters/12_transport_across_cell_membranes.md#126-na-pump-cycle--dephosphorylation), [C12 §127](../chapters/12_transport_across_cell_membranes.md#127-na-pump-cycle--inward-return), [C12 §128](../chapters/12_transport_across_cell_membranes.md#128-pump-steps-are-tightly-coupled), [C12 §411](../chapters/12_transport_across_cell_membranes.md#411-pump-stoichiometry-matters), [C12 §412](../chapters/12_transport_across_cell_membranes.md#412-nak-pump-is-electrogenic) |

<a id="p-calcium_clearance"></a>

### P.calcium_clearance — Calcium pumping and signal clearance

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.calcium](../entities/molecular_entities.md#e-calcium), [E.calcium_pump](../entities/macromolecular_complexes.md#e-calcium_pump) across ER/SR or plasma membrane |
| Required state / input | Functional pumps and source energy/gradient conditions |
| WorldState change / output | Free cytosolic calcium decreases through transfer to named store/exterior; destination amount changes. |
| Trigger / termination | Basal homeostasis or transient signal; balance with influx/release |
| Energy / time / noise / limits | ATP-linked; free/bound/total pools remain distinct. No universal clearance time. |
| Evidence | [C12 §141](../chapters/12_transport_across_cell_membranes.md#141-ca2-pumps-remove-ca2-from-cytosol), [C12 §143](../chapters/12_transport_across_cell_membranes.md#143-muscle-ca2-release), [C12 §144](../chapters/12_transport_across_cell_membranes.md#144-muscle-relaxation-requires-ca2-removal), [C12 §145](../chapters/12_transport_across_cell_membranes.md#145-ca2-atpase-source-stoichiometry), [C16 §135](../chapters/16_cell_signaling.md#135-ca2-pumps-maintain-low-cytosolic-ca2), [C16 §136](../chapters/16_cell_signaling.md#136-ca2-signal-termination) |

<a id="p-proton_gradient_transport"></a>

### P.proton_gradient_transport — Proton pumping/acidification

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Source proton pump and specified membrane sides |
| Required state / input | ATP/light/redox driver and correct protein orientation |
| WorldState change / output | Side-specific proton state and voltage/pH change; source lysosomal pumps acidify lumen. |
| Trigger / termination | Pump drive; loss of energy, inhibition or balancing leak |
| Energy / time / noise / limits | Mechanism-specific energy; do not charge ATP for respiratory pumping automatically. |
| Evidence | [C12 §172](../chapters/12_transport_across_cell_membranes.md#172-plasma-membrane-h-pump-direction), [C12 §175](../chapters/12_transport_across_cell_membranes.md#175-h-gradient-generation-can-use-atp-or-light), [C12 §176](../chapters/12_transport_across_cell_membranes.md#176-organelle-h-pumps), [C12 §177](../chapters/12_transport_across_cell_membranes.md#177-organelle-acidification), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction), [C14 §55](../chapters/14_energy_generation_mitochondria_chloroplasts.md#55-proton-motive-force) |

<a id="p-light_driven_proton_pumping"></a>

### P.light_driven_proton_pumping — Bacteriorhodopsin proton pumping

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.bacteriorhodopsin](../entities/macromolecular_complexes.md#e-bacteriorhodopsin), [E.retinal](../entities/molecular_entities.md#e-retinal), light and H+ in source archaeal/assay membrane |
| Required state / input | Functional oriented protein and light absorption |
| WorldState change / output | Retinal/protein conformations cycle, transferring H+ outward in native source context. |
| Trigger / termination | Photon absorption; cycle reset or light loss |
| Energy / time / noise / limits | Light coupling; artificial liposome orientation must be explicitly defined, not assumed native. |
| Evidence | [C11 §230](../chapters/11_membrane_structure.md#230-light-triggered-conformational-change), [C11 §231](../chapters/11_membrane_structure.md#231-retinal-movement-affects-surrounding-helices), [C11 §232](../chapters/11_membrane_structure.md#232-proton-pumping), [C11 §233](../chapters/11_membrane_structure.md#233-pump-direction), [C11 §237](../chapters/11_membrane_structure.md#237-retinal-regeneration), [C14 §134](../chapters/14_energy_generation_mitochondria_chloroplasts.md#134-rackerstoeckenius-reconstitution) |

<a id="p-secondary_coupled_transport"></a>

### P.secondary_coupled_transport — Gradient-coupled symport/antiport

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | Driving/driven solutes and shared transporter in named membrane |
| Required state / input | Driving electrochemical gradient, cooperative substrate conditions and orientation |
| WorldState change / output | Downhill driver movement enables uphill partner movement through coupled binding/access states. |
| Trigger / termination | Compatible occupancy/gradient; release/reset or gradient depletion |
| Energy / time / noise / limits | Driving gradient is consumed; solutes do not physically drag one another. Symport/antiport describe direction. |
| Evidence | [C12 §148](../chapters/12_transport_across_cell_membranes.md#148-gradient-driven-active-transport), [C12 §149](../chapters/12_transport_across_cell_membranes.md#149-symport), [C12 §150](../chapters/12_transport_across_cell_membranes.md#150-antiport), [C12 §154](../chapters/12_transport_across_cell_membranes.md#154-na-glucose-symport), [C12 §156](../chapters/12_transport_across_cell_membranes.md#156-na-supplies-the-energy), [C12 §157](../chapters/12_transport_across_cell_membranes.md#157-cooperative-naglucose-binding), [C12 §158](../chapters/12_transport_across_cell_membranes.md#158-coupling-prevents-wasteful-na-leak), [C12 §169](../chapters/12_transport_across_cell_membranes.md#169-na-h-exchanger), [C12 §407](../chapters/12_transport_across_cell_membranes.md#407-pump-energy-provenance), [C12 §409](../chapters/12_transport_across_cell_membranes.md#409-gradient-energy-must-be-depletable), [C12 §453](../chapters/12_transport_across_cell_membranes.md#453-gradient-driven-symport-should-not-depict-na-physically-dragging-glucose-by-contact) |

<a id="p-osmosis"></a>

### P.osmosis — Osmosis

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/composite |
| Participants / location | [E.water](../entities/molecular_entities.md#e-water), membrane/aquaporins, non-equilibrating solutes and pressure context |
| Required state / input | Water pathway and osmotic/pressure imbalance |
| WorldState change / output | Net water transfer changes compartment volume, pressure and concentrations of retained solutes. |
| Trigger / termination | Water/solute chemical conditions; balance or limits imposed by membrane/wall |
| Energy / time / noise / limits | Passive; aquaporins do not pump and direction can reverse. |
| Evidence | [C12 §87](../chapters/12_transport_across_cell_membranes.md#87-osmosis), [C12 §89](../chapters/12_transport_across_cell_membranes.md#89-intracellular-osmotic-tendency), [C12 §90](../chapters/12_transport_across_cell_membranes.md#90-uncontrolled-osmosis-can-swell-cells), [C12 §95](../chapters/12_transport_across_cell_membranes.md#95-turgor-pressure), [C12 §428](../chapters/12_transport_across_cell_membranes.md#428-aquaporins-do-not-pump-water), [C12 §429](../chapters/12_transport_across_cell_membranes.md#429-aquaporin-direction-is-reversible), [C12 §549](../chapters/12_transport_across_cell_membranes.md#549-water-volume-coupling-rule), [C12 §550](../chapters/12_transport_across_cell_membranes.md#550-volume-change-feeds-back-on-concentration) |

<a id="p-trans_epithelial_transport"></a>

### P.trans_epithelial_transport — Vectorial epithelial solute transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source gut epithelium, apical Na/glucose symport, basolateral uniport/NaK pump, tight junction |
| Required state / input | Polarized transporter distribution and maintained sodium gradient |
| WorldState change / output | Glucose passes gut-lumen→cell→underlying extracellular context through distinct transport steps. |
| Trigger / termination | Nutrient/gradient availability; loss of polarity/drive or substrate |
| Energy / time / noise / limits | Emergent system property, not one transporter moving solute across the whole tissue. |
| Evidence | [C12 §161](../chapters/12_transport_across_cell_membranes.md#161-gut-epithelial-polarity), [C12 §162](../chapters/12_transport_across_cell_membranes.md#162-apical-membrane), [C12 §163](../chapters/12_transport_across_cell_membranes.md#163-apical-transporter), [C12 §164](../chapters/12_transport_across_cell_membranes.md#164-basallateral-membranes), [C12 §165](../chapters/12_transport_across_cell_membranes.md#165-basolateral-glucose-release), [C12 §166](../chapters/12_transport_across_cell_membranes.md#166-basolateral-na-pumps), [C12 §167](../chapters/12_transport_across_cell_membranes.md#167-tight-junctions-preserve-epithelial-transporter-polarity), [C12 §168](../chapters/12_transport_across_cell_membranes.md#168-directional-transepithelial-glucose-movement-is-an-emergent-system-property) |

<a id="p-contractile_vacuole_cycle"></a>

### P.contractile_vacuole_cycle — Contractile-vacuole water discharge

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.contractile_vacuole](../entities/organelles.md#e-contractile_vacuole) and source freshwater protozoan |
| Required state / input | Source solute accumulation/recovery and membrane discharge machinery |
| WorldState change / output | Vacuole fills osmotically, recovers solute and expels excess water. |
| Trigger / termination | Osmotic loading; discharge and cycle reset |
| Energy / time / noise / limits | Source pump/transport energy; detailed rates and machinery unspecified. |
| Evidence | [C12 §91](../chapters/12_transport_across_cell_membranes.md#91-freshwater-protozoan-strategy), [C12 §92](../chapters/12_transport_across_cell_membranes.md#92-contractile-vacuole-cycle), [C12 §431](../chapters/12_transport_across_cell_membranes.md#431-contractile-vacuole-cycles-are-dynamic) |

<a id="p-lipid_leaflet_transport"></a>

### P.lipid_leaflet_transport — Lipid redistribution between leaflets

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | Phospholipid, bilayer and optional scramblase/flippase |
| Required state / input | Source spontaneous or protein-facilitated pathway and correct lipid specificity |
| WorldState change / output | Lipid leaflet membership changes; asymmetry and leaflet area can change. |
| Trigger / termination | Transfer conditions; balancing or selective enrichment |
| Energy / time / noise / limits | Scramblase random redistribution differs from ATP-dependent selective flippase; spontaneous flip-flop is rare in source context. |
| Evidence | [C11 §76](../chapters/11_membrane_structure.md#76-lipid-flip-flop), [C11 §77](../chapters/11_membrane_structure.md#77-spontaneous-flip-flop-is-rare), [C11 §123](../chapters/11_membrane_structure.md#123-scramblase), [C11 §124](../chapters/11_membrane_structure.md#124-er-scramblase-action), [C11 §125](../chapters/11_membrane_structure.md#125-scramblase-balances-er-leaflets), [C11 §126](../chapters/11_membrane_structure.md#126-scramblase-and-spontaneous-flip-flop-are-different), [C11 §132](../chapters/11_membrane_structure.md#132-flippase), [C11 §133](../chapters/11_membrane_structure.md#133-flippase-specificity), [C11 §134](../chapters/11_membrane_structure.md#134-flippase-energy-source), [C11 §135](../chapters/11_membrane_structure.md#135-source-selected-phospholipids) |

<a id="p-intercellular_channel_transport"></a>

### P.intercellular_channel_transport — Intercellular channel transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Neighboring cells with gap junction or plasmodesma; route explicitly typed |
| Required state / input | Compatible connected/gated channel and permitted cargo |
| WorldState change / output | Solutes/ions or source-regulated macromolecules pass between cells without conflating channel architectures. |
| Trigger / termination | Open/permissive state; gating/gradient change |
| Energy / time / noise / limits | Gap-junction small-solute model differs from plasmodesmal passage. Mechanical adhesion alone provides no path. |
| Evidence | [C20 §120](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#120-gap-junction), [C20 §126](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#126-gap-junction-permeability-source-limit), [C20 §130](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#130-gap-junctions-are-gated), [C20 §132](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#132-ca2-dependent-gap-junction-closure), [C20 §133](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#133-plasmodesma), [C20 §134](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#134-plasmodesmata-are-not-plant-gap-junctions-structurally), [C20 §137](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#137-plasmodesmata-can-pass-macromolecules) |
