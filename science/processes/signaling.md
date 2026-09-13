# Signaling

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 19 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-receptor_activation"></a>

### P.receptor_activation — Receptor activation and response selection

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Signal, receptor and available intracellular effectors in a named cell |
| Required state / input | Compatible ligand/receptor and cell state |
| WorldState change / output | Receptor occupancy/conformation changes the availability or activity of downstream effectors. |
| Trigger / termination | Signal binding or removal; receptor reset/adaptation |
| Energy / time / noise / limits | Response is context-dependent; acetylcholine can elicit different outcomes through distinct receptors/effectors. |
| Evidence | [C16 §5](../chapters/16_cell_signaling.md#5-receptor), [C16 §25](../chapters/16_cell_signaling.md#25-two-broad-receptor-locations), [C16 §28](../chapters/16_cell_signaling.md#28-signal-molecule-alone-is-not-the-message), [C16 §29](../chapters/16_cell_signaling.md#29-same-signal-different-response), [C16 §30](../chapters/16_cell_signaling.md#30-different-receptors-can-recognize-the-same-ligand), [C16 §36](../chapters/16_cell_signaling.md#36-fast-signaling-responses), [C16 §37](../chapters/16_cell_signaling.md#37-slow-signaling-responses) |

<a id="p-protein_signal_integration"></a>

### P.protein_signal_integration — Signal integration and feedback

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Source signaling network and multiple inputs |
| Required state / input | Named coincident inputs and target state |
| WorldState change / output | Output activity depends on integration; positive/negative feedback alters persistence, sensitivity or oscillation where specified. |
| Trigger / termination | Input changes and feedback; source-specific reset or stable state |
| Energy / time / noise / limits | No invented Boolean rule, threshold or oscillation period from a cartoon network. |
| Evidence | [C16 §44](../chapters/16_cell_signaling.md#44-amplification), [C16 §45](../chapters/16_cell_signaling.md#45-integration), [C16 §47](../chapters/16_cell_signaling.md#47-feedback), [C16 §48](../chapters/16_cell_signaling.md#48-positive-feedback), [C16 §49](../chapters/16_cell_signaling.md#49-negative-feedback), [C16 §50](../chapters/16_cell_signaling.md#50-negative-feedback-can-generate-oscillation) |

<a id="p-gpcr_signaling"></a>

### P.gpcr_signaling — GPCR signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.gpcr](../entities/macromolecular_complexes.md#e-gpcr), [E.heterotrimeric_g_protein](../entities/macromolecular_complexes.md#e-heterotrimeric_g_protein) and source effector at membrane |
| Required state / input | Ligand-activated receptor and GDP-bound heterotrimer |
| WorldState change / output | Receptor promotes nucleotide exchange; Gα and/or βγ regulate effectors; hydrolysis/reassociation reset source switch. |
| Trigger / termination | Receptor stimulation; GTP hydrolysis and signal removal/adaptation |
| Energy / time / noise / limits | Reuses exchange/hydrolysis events; Gα and βγ both have effector roles. No universal effector or lifetime. |
| Evidence | [C16 §65](../chapters/16_cell_signaling.md#65-gpcr), [C16 §74](../chapters/16_cell_signaling.md#74-gpcr-topology), [C16 §80](../chapters/16_cell_signaling.md#80-heterotrimeric-g-protein-subunits), [C16 §81](../chapters/16_cell_signaling.md#81-g-protein-membrane-anchoring), [C16 §82](../chapters/16_cell_signaling.md#82-inactive-heterotrimer), [C16 §83](../chapters/16_cell_signaling.md#83-gpcr-acts-as-nucleotide-exchange-catalyst), [C16 §85](../chapters/16_cell_signaling.md#85-g-protein-activation-can-separate-functional-parts), [C16 §86](../chapters/16_cell_signaling.md#86-both-α-and-βγ-can-signal), [C16 §88](../chapters/16_cell_signaling.md#88-gα-intrinsic-timer), [C16 §89](../chapters/16_cell_signaling.md#89-g-protein-shutoff-timescale), [C16 §90](../chapters/16_cell_signaling.md#90-reassembly), [C16 §95](../chapters/16_cell_signaling.md#95-heart-pacemaker-acetylcholine-pathway) |

<a id="p-camp_signaling"></a>

### P.camp_signaling — cAMP–PKA signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Adenylyl cyclase, ATP, cAMP, PKA, phosphodiesterase and source targets |
| Required state / input | Source cyclase-regulating input |
| WorldState change / output | cAMP production activates PKA; target phosphorylation changes metabolic or transcriptional state; cAMP breakdown contributes reset. |
| Trigger / termination | Cyclase input; PDE activity and target dephosphorylation |
| Energy / time / noise / limits | Amplification is conditional; fast metabolic and slower transcriptional outcomes are distinct timescales. |
| Evidence | [C16 §101](../chapters/16_cell_signaling.md#101-adenylyl-cyclase), [C16 §102](../chapters/16_cell_signaling.md#102-camp), [C16 §103](../chapters/16_cell_signaling.md#103-camp-phosphodiesterase), [C16 §109](../chapters/16_cell_signaling.md#109-pka), [C16 §110](../chapters/16_cell_signaling.md#110-pka-activation), [C16 §111](../chapters/16_cell_signaling.md#111-pka-substrate-specificity), [C16 §114](../chapters/16_cell_signaling.md#114-epinephrine-skeletal-muscle-pathway), [C16 §115](../chapters/16_cell_signaling.md#115-pka-also-inhibits-glycogen-synthesis), [C16 §116](../chapters/16_cell_signaling.md#116-fast-metabolic-camp-response), [C16 §117](../chapters/16_cell_signaling.md#117-slow-camp-response) |

<a id="p-phosphoinositide_calcium_signaling"></a>

### P.phosphoinositide_calcium_signaling — Phospholipase-C/IP3/DAG signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source Gq/PLC route, membrane phosphoinositide, IP3, DAG, ER channel, Ca2+ and PKC |
| Required state / input | Source receptor/PLC activation and loaded ER store |
| WorldState change / output | Lipid cleavage produces mobile IP3 and membrane-associated DAG; ER channel opening releases Ca2+ and supports PKC activation. |
| Trigger / termination | Source PLC input; messenger removal, channel reset and Ca2+ clearance |
| Energy / time / noise / limits | IP3 and DAG have different locations; no universal rate or complete metabolite chemistry inferred. |
| Evidence | [C16 §118](../chapters/16_cell_signaling.md#118-gq), [C16 §119](../chapters/16_cell_signaling.md#119-inositol-phospholipid-pathway), [C16 §120](../chapters/16_cell_signaling.md#120-plc-products), [C16 §121](../chapters/16_cell_signaling.md#121-ip3), [C16 §122](../chapters/16_cell_signaling.md#122-dag), [C16 §123](../chapters/16_cell_signaling.md#123-ip3-receptor-action), [C16 §124](../chapters/16_cell_signaling.md#124-ca2-release-direction), [C16 §125](../chapters/16_cell_signaling.md#125-dag--ca2-activate-pkc), [C16 §126](../chapters/16_cell_signaling.md#126-pkc) |

<a id="p-calcium_signaling"></a>

### P.calcium_signaling — Calcium signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | [E.calcium](../entities/molecular_entities.md#e-calcium), source channels/stores/pumps and calcium-binding effectors |
| Required state / input | Named resting pools and stimulus-dependent access |
| WorldState change / output | Local free cytosolic Ca2+ changes alter effector occupancy/activity; clearance restores a context-dependent low state. |
| Trigger / termination | Channel release/influx; pumping and other source clearance |
| Energy / time / noise / limits | Waves, pulses and spatial domains need their own context; free concentration is not total calcium. |
| Evidence | [C16 §128](../chapters/16_cell_signaling.md#128-ca2-is-a-broadly-used-second-messenger), [C16 §129](../chapters/16_cell_signaling.md#129-fertilization-ca2-wave), [C16 §133](../chapters/16_cell_signaling.md#133-extracellular-ca2), [C16 §134](../chapters/16_cell_signaling.md#134-ca2-concentration-difference), [C16 §135](../chapters/16_cell_signaling.md#135-ca2-pumps-maintain-low-cytosolic-ca2), [C16 §136](../chapters/16_cell_signaling.md#136-ca2-signal-termination), [C16 §138](../chapters/16_cell_signaling.md#138-ca2-is-spatially-constrained), [C16 §139](../chapters/16_cell_signaling.md#139-calmodulin), [C16 §140](../chapters/16_cell_signaling.md#140-calmodulin-ca2-sites), [C16 §141](../chapters/16_cell_signaling.md#141-calmodulin-conformational-change), [C16 §142](../chapters/16_cell_signaling.md#142-cam-kinase), [C19 §92](../chapters/19_sexual_reproduction_genetics.md#92-fertilization-ca2-wave), [C19 §93](../chapters/19_sexual_reproduction_genetics.md#93-zona-hardening), [C19 §94](../chapters/19_sexual_reproduction_genetics.md#94-ca2-also-promotes-egg-activation) |

<a id="p-nitric_oxide_signaling"></a>

### P.nitric_oxide_signaling — Nitric-oxide/cGMP signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | NO synthase, arginine, NO, guanylyl cyclase and cGMP in source neighboring cells |
| Required state / input | Source synthesis-triggering state |
| WorldState change / output | NO produced and diffuses to activate guanylyl cyclase; cGMP-dependent response changes target-cell behavior. |
| Trigger / termination | NO production; short-lived signal loss and target reset |
| Energy / time / noise / limits | Not vesicle-mediated transmitter release; lifetime is a source-context scale. |
| Evidence | [C16 §144](../chapters/16_cell_signaling.md#144-nitric-oxide-signaling), [C16 §145](../chapters/16_cell_signaling.md#145-no-lifetime-is-short), [C16 §147](../chapters/16_cell_signaling.md#147-no-synthase-substrate), [C16 §148](../chapters/16_cell_signaling.md#148-guanylyl-cyclase), [C16 §149](../chapters/16_cell_signaling.md#149-cgmp) |

<a id="p-phototransduction"></a>

### P.phototransduction — Rod phototransduction

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Rhodopsin, transducin, phosphodiesterase, cGMP and cation channels in rod |
| Required state / input | Source dark-state signaling apparatus |
| WorldState change / output | Light activation lowers cGMP, closes channels, hyperpolarizes rod and reduces transmitter release. |
| Trigger / termination | Photon absorption; source shutoff and adaptation |
| Energy / time / noise / limits | Source single-photon amplification is contextual; light does not depolarize this rod pathway. |
| Evidence | [C16 §154](../chapters/16_cell_signaling.md#154-rod-phototransduction), [C16 §157](../chapters/16_cell_signaling.md#157-single-photon-amplification-source-chain), [C16 §160](../chapters/16_cell_signaling.md#160-adaptation), [C16 §161](../chapters/16_cell_signaling.md#161-photoreceptor-negative-feedback) |

<a id="p-receptor_adaptation"></a>

### P.receptor_adaptation — Receptor/signaling adaptation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Receptor and source feedback/internalization machinery |
| Required state / input | Sustained stimulus and adaptation-capable context |
| WorldState change / output | Response sensitivity or receptor availability decreases despite continuing stimulus. |
| Trigger / termination | Persistent stimulation; recovery according to specified mechanism |
| Energy / time / noise / limits | Receptor internalization and downstream feedback are alternative/contextual mechanisms, not interchangeable animations. |
| Evidence | [C16 §160](../chapters/16_cell_signaling.md#160-adaptation), [C16 §161](../chapters/16_cell_signaling.md#161-photoreceptor-negative-feedback), [C16 §162](../chapters/16_cell_signaling.md#162-receptor-level-adaptation), [C16 §178](../chapters/16_cell_signaling.md#178-rtk-endocytic-shutoff) |

<a id="p-rtk_signaling"></a>

### P.rtk_signaling — Receptor-tyrosine-kinase signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.rtk](../entities/macromolecular_complexes.md#e-rtk) and source cytosolic docking proteins |
| Required state / input | Ligand-supported receptor association/activity |
| WorldState change / output | Receptor tyrosines become phosphorylated; docking proteins assemble and propagate target-specific signals. |
| Trigger / termination | Ligand/kinase activation; phosphatase action or receptor removal |
| Energy / time / noise / limits | Docking, catalysis and phase-separated assemblies are different descriptions; no mandatory universal condensate. |
| Evidence | [C16 §167](../chapters/16_cell_signaling.md#167-rtk), [C16 §169](../chapters/16_cell_signaling.md#169-rtk-activation-strategy), [C16 §170](../chapters/16_cell_signaling.md#170-rtk-trans-phosphorylation), [C16 §171](../chapters/16_cell_signaling.md#171-phosphotyrosines-are-docking-sites), [C16 §173](../chapters/16_cell_signaling.md#173-sh2-domain), [C16 §176](../chapters/16_cell_signaling.md#176-rtk-signaling-condensates), [C16 §177](../chapters/16_cell_signaling.md#177-rtk-phosphatase-shutoff), [C16 §178](../chapters/16_cell_signaling.md#178-rtk-endocytic-shutoff) |

<a id="p-ras_mapk_signaling"></a>

### P.ras_mapk_signaling — Ras–MAPK signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Ras, adaptor/GEF/GAP and MAP kinase cascade in source cell |
| Required state / input | Source receptor-to-GEF activation and available downstream kinases |
| WorldState change / output | Ras-GTP increases; kinase cascade changes target protein/transcriptional activity; GAP hydrolysis contributes shutoff. |
| Trigger / termination | Source upstream input; nucleotide/cascade reset |
| Energy / time / noise / limits | Ras is a small GTPase, not a heterotrimeric G protein; outcomes depend on target cell. |
| Evidence | [C16 §179](../chapters/16_cell_signaling.md#179-ras), [C16 §180](../chapters/16_cell_signaling.md#180-ras-activation-by-rtks), [C16 §182](../chapters/16_cell_signaling.md#182-ras-gap), [C16 §183](../chapters/16_cell_signaling.md#183-ras-resembles-gα-but-is-not-a-heterotrimeric-g-protein), [C16 §184](../chapters/16_cell_signaling.md#184-map-kinase-module), [C16 §185](../chapters/16_cell_signaling.md#185-ras-activates-mapk-cascade), [C16 §186](../chapters/16_cell_signaling.md#186-map-kinase-outputs), [C16 §187](../chapters/16_cell_signaling.md#187-mapk-response-depends-on-context) |

<a id="p-pi3k_akt_survival"></a>

### P.pi3k_akt_survival — PI3K–Akt survival signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | PI3K, membrane lipid targets, Akt, source activating kinases, Bad and Bcl2 |
| Required state / input | Source receptor/PI3K activation |
| WorldState change / output | Modified lipids recruit pathway proteins; activated Akt phosphorylates Bad, reducing its inhibition of Bcl2-mediated survival. |
| Trigger / termination | Survival input; source deactivation/withdrawal |
| Energy / time / noise / limits | The two Akt-activating kinases are not named here where the source omits them. Survival is not a guarantee against all apoptosis. |
| Evidence | [C16 §190](../chapters/16_cell_signaling.md#190-pi-3-kinase), [C16 §191](../chapters/16_cell_signaling.md#191-lipid-docking-sites), [C16 §192](../chapters/16_cell_signaling.md#192-akt), [C16 §193](../chapters/16_cell_signaling.md#193-akt-activation), [C16 §194](../chapters/16_cell_signaling.md#194-activated-akt-leaves-membrane), [C16 §195](../chapters/16_cell_signaling.md#195-bad), [C16 §196](../chapters/16_cell_signaling.md#196-bcl2), [C16 §197](../chapters/16_cell_signaling.md#197-akt-promotes-survival), [C18 §243](../chapters/18_cell_cycle.md#243-survival-factors), [C18 §244](../chapters/18_cell_cycle.md#244-developing-neuron-competition), [C18 §245](../chapters/18_cell_cycle.md#245-survival-signaling-can-raise-bcl2) |

<a id="p-tor_growth_signaling"></a>

### P.tor_growth_signaling — Tor-linked growth control

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | Tor pathway and protein synthesis/degradation machinery |
| Required state / input | Source growth/nutrient signaling context |
| WorldState change / output | Protein synthesis and degradation balance shifts toward source growth response. |
| Trigger / termination | Source pathway input; regulation or resource change |
| Energy / time / noise / limits | Growth is distinct from division; no universal cell-size controller inferred. |
| Evidence | [C16 §198](../chapters/16_cell_signaling.md#198-tor), [C16 §199](../chapters/16_cell_signaling.md#199-tor-growth-outputs), [C18 §207](../chapters/18_cell_cycle.md#207-mitogens-versus-growth-factors-versus-survival-factors), [C18 §208](../chapters/18_cell_cycle.md#208-categories-can-overlap), [C18 §209](../chapters/18_cell_cycle.md#209-cell-proliferation-versus-cell-growth), [C18 §214](../chapters/18_cell_cycle.md#214-rtkpi3kakttor-growth-pathway), [C18 §216](../chapters/18_cell_cycle.md#216-cell-size-control-remains-incompletely-understood) |

<a id="p-notch_signaling"></a>

### P.notch_signaling — Notch–Delta contact signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Notch receptor and neighboring-cell Delta |
| Required state / input | Appropriate cell contact and receptor/ligand state |
| WorldState change / output | Receptor proteolysis releases intracellular portion that enters nucleus and alters transcriptional regulation. |
| Trigger / termination | Contact-dependent activation; fragment/pathway turnover |
| Energy / time / noise / limits | Lateral inhibition is a multicellular feedback pattern, not literal mutual cell killing. |
| Evidence | [C16 §215](../chapters/16_cell_signaling.md#215-notch), [C16 §216](../chapters/16_cell_signaling.md#216-delta), [C16 §217](../chapters/16_cell_signaling.md#217-notch-cleavage), [C16 §218](../chapters/16_cell_signaling.md#218-notch-intracellular-tail), [C16 §219](../chapters/16_cell_signaling.md#219-notch-lateral-inhibition) |

<a id="p-nuclear_receptor_signaling"></a>

### P.nuclear_receptor_signaling — Intracellular receptor signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source lipid-soluble hormone and intracellular receptor/target genes |
| Required state / input | Compatible ligand, receptor and cell-specific transcriptional context |
| WorldState change / output | Ligand alters receptor activity/localization as appropriate and changes gene-expression regulation. |
| Trigger / termination | Hormone availability; receptor/ligand reset |
| Energy / time / noise / limits | Some receptors are already nuclear; do not force every activated receptor to travel from cytosol. |
| Evidence | [C16 §220](../chapters/16_cell_signaling.md#220-nuclear-receptor-family), [C16 §221](../chapters/16_cell_signaling.md#221-steroid-hormone-examples), [C16 §222](../chapters/16_cell_signaling.md#222-thyroid-hormone-example), [C16 §223](../chapters/16_cell_signaling.md#223-hydrophobic-ligands-cross-membrane), [C16 §224](../chapters/16_cell_signaling.md#224-cytosolic-nuclear-receptor-pathway), [C16 §225](../chapters/16_cell_signaling.md#225-some-nuclear-receptors-are-already-nuclear), [C16 §226](../chapters/16_cell_signaling.md#226-nuclear-receptor-output-is-gene-specific-and-cell-specific) |

<a id="p-ethylene_signaling"></a>

### P.ethylene_signaling — Plant ethylene signaling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Ethylene receptor at ER, source kinase cascade and transcription factor |
| Required state / input | Source plant pathway state |
| WorldState change / output | Ethylene switches off source inhibitory kinase route, allowing transcription factor accumulation and response. |
| Trigger / termination | Ligand binding; pathway reset |
| Energy / time / noise / limits | Source no-ligand state actively promotes transcription-factor degradation; activation cannot be equated with kinase activation. |
| Evidence | [C16 §230](../chapters/16_cell_signaling.md#230-plant-rtkgpcrcamp-source-statement), [C16 §231](../chapters/16_cell_signaling.md#231-ethylene), [C16 §232](../chapters/16_cell_signaling.md#232-ethylene-receptor-location), [C16 §233](../chapters/16_cell_signaling.md#233-ethylene-receptor-logic-is-inverted-relative-to-many-animal-examples) |

<a id="p-wnt_crypt_signaling"></a>

### P.wnt_crypt_signaling — Wnt–β-catenin–TCF regulation in intestinal crypt

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Wnt, APC-containing regulatory system, β-catenin, TCF and crypt cell |
| Required state / input | Source niche/crypt state with named pathway components |
| WorldState change / output | Wnt reduces β-catenin degradation; accumulated β-catenin acts with TCF to support proliferation-associated expression. APC loss can uncouple this source response from Wnt input. |
| Trigger / termination | Niche Wnt or source APC perturbation; degradation/state regulation |
| Energy / time / noise / limits | β-catenin also participates in adhesion. APC is not APC/C; ligand receptor details omitted where not supplied. |
| Evidence | [C20 §179](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#179-stem-cell-niche), [C20 §181](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#181-wnt-proteins), [C20 §182](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#182-wnt-signal-is-spatially-restricted), [C20 §264](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#264-apc-gene-is-distinct-from-apcc), [C20 §268](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#268-apc-inhibits-wnt-pathway-output), [C20 §269](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#269-β-catenin), [C20 §270](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#270-tcf--lef-transcription-regulators), [C20 §271](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#271-wnt-pathway-without-wnt), [C20 §272](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#272-wnt-pathway-with-wnt), [C20 §273](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#273-apc-loss-mimics-wnt-stimulation), [C20 §274](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#274-tcf4-knockout-source-experiment), [C20 §275](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#275-apc-loss-creates-polyps-through-niche-misregulation) |

<a id="p-action_potential"></a>

### P.action_potential — Action-potential initiation and propagation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Excitable membrane, source voltage-gated channels and ion gradients |
| Required state / input | Source depolarizing input and excitable channel state |
| WorldState change / output | Channel gating changes membrane currents/voltage, activating adjacent excitable membrane and subsequently resetting. |
| Trigger / termination | Threshold in specified source context; inactivation/repolarization/refractory recovery |
| Energy / time / noise / limits | Propagation is not one ion traveling the axon length; conduction speed differs from channel event time. |
| Evidence | [C12 §283](../chapters/12_transport_across_cell_membranes.md#283-action-potential), [C12 §284](../chapters/12_transport_across_cell_membranes.md#284-action-potentials-do-not-weaken-with-distance), [C12 §293](../chapters/12_transport_across_cell_membranes.md#293-action-potential-threshold), [C12 §294](../chapters/12_transport_across_cell_membranes.md#294-action-potential-can-experimentally-travel-either-direction), [C12 §300](../chapters/12_transport_across_cell_membranes.md#300-during-action-potential-membrane-becomes-highly-na-permeable), [C12 §311](../chapters/12_transport_across_cell_membranes.md#311-voltage-gated-na-channel-states), [C12 §312](../chapters/12_transport_across_cell_membranes.md#312-na-channel-inactivation), [C12 §315](../chapters/12_transport_across_cell_membranes.md#315-voltage-gated-k-channels-open-more-slowly), [C12 §317](../chapters/12_transport_across_cell_membranes.md#317-voltage-gated-k-channels-accelerate-repolarization), [C12 §318](../chapters/12_transport_across_cell_membranes.md#318-refractory-period), [C12 §319](../chapters/12_transport_across_cell_membranes.md#319-refractory-behavior-enforces-forward-propagation-in-normal-axonal-wave), [C12 §320](../chapters/12_transport_across_cell_membranes.md#320-action-potential-propagation), [C12 §418](../chapters/12_transport_across_cell_membranes.md#418-action-potential-requires-local-positive-feedback), [C12 §419](../chapters/12_transport_across_cell_membranes.md#419-action-potential-propagation-is-not-diffusion-of-voltage-alone) |

<a id="p-synaptic_transmission"></a>

### P.synaptic_transmission — Chemical synaptic transmission

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Presynaptic terminal, Ca2+, transmitter vesicles, cleft and postsynaptic receptors |
| Required state / input | Source presynaptic excitation and release-ready machinery |
| WorldState change / output | Ca2+-linked vesicle fusion releases transmitter; receptor activation changes postsynaptic conductance/state; signal is cleared. |
| Trigger / termination | Presynaptic activation; clearance/receptor reset |
| Energy / time / noise / limits | Electrical outcome depends on receptor/gradient context; compose exocytosis and receptor/channel events once. |
| Evidence | [C12 §333](../chapters/12_transport_across_cell_membranes.md#333-action-potential-opens-presynaptic-voltage-gated-ca2-channels), [C12 §338](../chapters/12_transport_across_cell_membranes.md#338-synaptic-conversion-sequence), [C12 §339](../chapters/12_transport_across_cell_membranes.md#339-neurotransmitter-diffuses-across-cleft), [C12 §340](../chapters/12_transport_across_cell_membranes.md#340-neurotransmitter-signal-is-terminated-rapidly), [C12 §341](../chapters/12_transport_across_cell_membranes.md#341-rapid-clearance-limits-signal-duration-and-spread), [C12 §344](../chapters/12_transport_across_cell_membranes.md#344-chemical-to-electrical-conversion), [C12 §345](../chapters/12_transport_across_cell_membranes.md#345-large-enough-postsynaptic-depolarization-can-trigger-another-action-potential), [C12 §358](../chapters/12_transport_across_cell_membranes.md#358-excitatory-neurotransmitter-source-examples), [C12 §361](../chapters/12_transport_across_cell_membranes.md#361-inhibitory-neurotransmitter-source-examples), [C12 §362](../chapters/12_transport_across_cell_membranes.md#362-inhibitory-receptors), [C15 §260](../chapters/15_intracellular_compartments_protein_transport.md#260-project-rule--membrane-fusion-conserves-sidedness) |
