# Metabolism energy

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 20 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-glycolysis"></a>

### P.glycolysis — Glycolysis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Glucose, source ten-step enzyme/metabolite sequence, ATP/ADP, NAD+/NADH and Pi in cytosol |
| Required state / input | Glucose and oxidized carrier availability; source regulatory state |
| WorldState change / output | Glucose carbon becomes two pyruvates; source accounting consumes two ATP and produces four gross/two net plus two NADH. |
| Trigger / termination | Metabolic substrate/enzyme context; depletion, regulation or NAD+ shortage |
| Energy / time / noise / limits | Does not directly consume O2; source steps 6–10 run twice per glucose. Not a literal spatial assembly line. |
| Evidence | [C13 §27](../chapters/13_how_cells_obtain_energy_from_food.md#27-glycolysis-definition), [C13 §28](../chapters/13_how_cells_obtain_energy_from_food.md#28-glycolysis-does-not-directly-require-o2), [C13 §31](../chapters/13_how_cells_obtain_energy_from_food.md#31-atp-investment), [C13 §32](../chapters/13_how_cells_obtain_energy_from_food.md#32-atp-payoff), [C13 §33](../chapters/13_how_cells_obtain_energy_from_food.md#33-net-glycolytic-atp), [C13 §34](../chapters/13_how_cells_obtain_energy_from_food.md#34-nadh-output), [C13 §36](../chapters/13_how_cells_obtain_energy_from_food.md#36-glycolysis-step-1), [C13 §37](../chapters/13_how_cells_obtain_energy_from_food.md#37-glycolysis-step-2), [C13 §38](../chapters/13_how_cells_obtain_energy_from_food.md#38-glycolysis-step-3), [C13 §39](../chapters/13_how_cells_obtain_energy_from_food.md#39-glycolysis-step-4), [C13 §40](../chapters/13_how_cells_obtain_energy_from_food.md#40-glycolysis-step-5), [C13 §41](../chapters/13_how_cells_obtain_energy_from_food.md#41-downstream-doubling-rule), [C13 §42](../chapters/13_how_cells_obtain_energy_from_food.md#42-glycolysis-step-6), [C13 §47](../chapters/13_how_cells_obtain_energy_from_food.md#47-glycolysis-step-7), [C13 §49](../chapters/13_how_cells_obtain_energy_from_food.md#49-glycolysis-step-8), [C13 §50](../chapters/13_how_cells_obtain_energy_from_food.md#50-glycolysis-step-9), [C13 §51](../chapters/13_how_cells_obtain_energy_from_food.md#51-glycolysis-step-10), [C13 §55](../chapters/13_how_cells_obtain_energy_from_food.md#55-nad-regeneration-requirement) |

<a id="p-substrate_level_phosphorylation"></a>

### P.substrate_level_phosphorylation — Substrate-level phosphorylation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | High-transfer-potential metabolic substrate and ADP/GDP in source reaction |
| Required state / input | Appropriate substrate/enzyme/context |
| WorldState change / output | Direct phosphate transfer produces ATP/GTP and modified carbon substrate. |
| Trigger / termination | Reaction availability; product release/equilibrium |
| Energy / time / noise / limits | Distinct from chemiosmotic ATP synthesis; TCA nucleotide product differs by organism context. |
| Evidence | [C13 §12](../chapters/13_how_cells_obtain_energy_from_food.md#12-substrate-level-phosphorylation), [C13 §47](../chapters/13_how_cells_obtain_energy_from_food.md#47-glycolysis-step-7), [C13 §51](../chapters/13_how_cells_obtain_energy_from_food.md#51-glycolysis-step-10), [C13 §96](../chapters/13_how_cells_obtain_energy_from_food.md#96-tca-step-5) |

<a id="p-pyruvate_oxidation"></a>

### P.pyruvate_oxidation — Pyruvate oxidation to acetyl CoA

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.pyruvate](../entities/molecular_entities.md#e-pyruvate), [E.pdh](../entities/macromolecular_complexes.md#e-pdh), CoA and NAD+ in source mitochondrial matrix |
| Required state / input | Pyruvate import and compatible enzyme/carrier state |
| WorldState change / output | Acetyl CoA, CO2 and NADH produced; carbon/electron lineage separately tracked. |
| Trigger / termination | Substrate arrival; product release/regulation |
| Energy / time / noise / limits | Source multienzyme intermediate channeling; not a glycolysis step. |
| Evidence | [C13 §19](../chapters/13_how_cells_obtain_energy_from_food.md#19-pyruvate-enters-mitochondria), [C13 §67](../chapters/13_how_cells_obtain_energy_from_food.md#67-pyruvate-dehydrogenase-complex), [C13 §68](../chapters/13_how_cells_obtain_energy_from_food.md#68-pdh-complex-enzymes), [C13 §69](../chapters/13_how_cells_obtain_energy_from_food.md#69-pdh-intermediate-channeling), [C13 §71](../chapters/13_how_cells_obtain_energy_from_food.md#71-acetyl-coa) |

<a id="p-fatty_acid_activation"></a>

### P.fatty_acid_activation — Fatty-acid activation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | Fatty acid, CoA and ATP in source catabolic context |
| Required state / input | Compatible activation machinery/substrate |
| WorldState change / output | Fatty acyl CoA formed with source ATP→AMP accounting. |
| Trigger / termination | Substrate/energy availability; activation completion |
| Energy / time / noise / limits | Full byproduct chemistry requires source-specific balance before execution. |
| Evidence | [C13 §74](../chapters/13_how_cells_obtain_energy_from_food.md#74-fatty-acid-activation), [C13 §75](../chapters/13_how_cells_obtain_energy_from_food.md#75-fatty-acyl-coa) |

<a id="p-fatty_acid_oxidation"></a>

### P.fatty_acid_oxidation — Fatty-acid oxidation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Fatty acyl CoA and source repeating enzyme/carrier cycle |
| Required state / input | Activated substrate in appropriate source organelle context |
| WorldState change / output | Repeated two-carbon removal yields acetyl CoA, NADH and FADH2 in source cycle. |
| Trigger / termination | Substrate availability; chain processing/regulation |
| Energy / time / noise / limits | Chain length and endpoint chemistry must be specified; no one yield for all fatty acids. |
| Evidence | [C13 §76](../chapters/13_how_cells_obtain_energy_from_food.md#76-fatty-acid-oxidation-cycle), [C13 §77](../chapters/13_how_cells_obtain_energy_from_food.md#77-fatty-acid-cycle-outputs), [C14 §39](../chapters/14_energy_generation_mitochondria_chloroplasts.md#39-fuel-entry-into-mitochondria), [C14 §40](../chapters/14_energy_generation_mitochondria_chloroplasts.md#40-acetyl-coa-production-in-matrix) |

<a id="p-citric_acid_cycle"></a>

### P.citric_acid_cycle — Citric acid cycle

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; TCA cycle; Krebs cycle |
| Participants / location | Acetyl CoA, oxaloacetate, carriers and source enzymes; matrix with membrane-bound succinate dehydrogenase |
| Required state / input | Substrates/carriers and context-dependent regenerative flux |
| WorldState change / output | Source eight-step cycle regenerates oxaloacetate and yields CO2/reducing carriers/GTP per acetyl input. |
| Trigger / termination | Metabolic inputs; substrate/carrier limitation or regulation |
| Energy / time / noise / limits | No direct O2 substrate. New acetyl carbons are not necessarily first-turn CO2; cycle is chemical topology. |
| Evidence | [C13 §80](../chapters/13_how_cells_obtain_energy_from_food.md#80-citric-acid-cycle), [C13 §81](../chapters/13_how_cells_obtain_energy_from_food.md#81-alternative-names), [C13 §82](../chapters/13_how_cells_obtain_energy_from_food.md#82-cycle-entry), [C13 §83](../chapters/13_how_cells_obtain_energy_from_food.md#83-one-turn-output), [C13 §86](../chapters/13_how_cells_obtain_energy_from_food.md#86-tca-does-not-directly-consume-o2), [C13 §91](../chapters/13_how_cells_obtain_energy_from_food.md#91-tca-step-1), [C13 §92](../chapters/13_how_cells_obtain_energy_from_food.md#92-tca-step-2), [C13 §93](../chapters/13_how_cells_obtain_energy_from_food.md#93-tca-step-3), [C13 §94](../chapters/13_how_cells_obtain_energy_from_food.md#94-tca-step-4), [C13 §96](../chapters/13_how_cells_obtain_energy_from_food.md#96-tca-step-5), [C13 §97](../chapters/13_how_cells_obtain_energy_from_food.md#97-tca-step-6), [C13 §98](../chapters/13_how_cells_obtain_energy_from_food.md#98-tca-step-7), [C13 §99](../chapters/13_how_cells_obtain_energy_from_food.md#99-tca-step-8), [C13 §100](../chapters/13_how_cells_obtain_energy_from_food.md#100-new-acetyl-carbons-are-not-necessarily-released-in-the-same-turn), [C14 §77](../chapters/14_energy_generation_mitochondria_chloroplasts.md#77-succinate-dehydrogenase-is-membrane-embedded) |

<a id="p-lactate_fermentation"></a>

### P.lactate_fermentation — Lactate fermentation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Pyruvate and NADH in source active-muscle context |
| Required state / input | Source conditions requiring NAD+ regeneration |
| WorldState change / output | Pyruvate becomes lactate while NADH is oxidized to NAD+. |
| Trigger / termination | Carrier-regeneration demand; substrate/state change |
| Energy / time / noise / limits | No ATP added by terminal fermentation beyond glycolytic yield; historical physiological framing retained. |
| Evidence | [C13 §55](../chapters/13_how_cells_obtain_energy_from_food.md#55-nad-regeneration-requirement), [C13 §56](../chapters/13_how_cells_obtain_energy_from_food.md#56-fermentation), [C13 §57](../chapters/13_how_cells_obtain_energy_from_food.md#57-lactate-fermentation), [C13 §59](../chapters/13_how_cells_obtain_energy_from_food.md#59-fermentation-does-not-add-atp-beyond-glycolysis) |

<a id="p-ethanol_fermentation"></a>

### P.ethanol_fermentation — Ethanol fermentation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Pyruvate/NADH in source yeast context |
| Required state / input | Source fermentative/carrier-regeneration state |
| WorldState change / output | Ethanol/CO2 produced and NAD+ regenerated. |
| Trigger / termination | Source metabolic conditions; substrate/state change |
| Energy / time / noise / limits | Different products from lactate route; not anaerobic respiration. |
| Evidence | [C13 §56](../chapters/13_how_cells_obtain_energy_from_food.md#56-fermentation), [C13 §58](../chapters/13_how_cells_obtain_energy_from_food.md#58-yeast-fermentation), [C13 §59](../chapters/13_how_cells_obtain_energy_from_food.md#59-fermentation-does-not-add-atp-beyond-glycolysis), [C13 §60](../chapters/13_how_cells_obtain_energy_from_food.md#60-anaerobic-respiration-is-different) |

<a id="p-gluconeogenesis"></a>

### P.gluconeogenesis — Gluconeogenesis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Smaller carbon precursors and source enzyme/bypass network |
| Required state / input | Biosynthetic conditions and energy inputs |
| WorldState change / output | Glucose synthesized using reversible steps plus specific bypasses rather than reversing all glycolysis reactions. |
| Trigger / termination | Metabolic demand/regulation; product/resource balance |
| Energy / time / noise / limits | Source energy accounting requires ATP and GTP; reciprocal regulation limits futile cycling. |
| Evidence | [C13 §114](../chapters/13_how_cells_obtain_energy_from_food.md#114-gluconeogenesis), [C13 §115](../chapters/13_how_cells_obtain_energy_from_food.md#115-gluconeogenesis-is-not-simply-glycolysis-backward), [C13 §117](../chapters/13_how_cells_obtain_energy_from_food.md#117-gluconeogenic-bypass), [C13 §120](../chapters/13_how_cells_obtain_energy_from_food.md#120-reciprocal-regulation), [C13 §121](../chapters/13_how_cells_obtain_energy_from_food.md#121-gluconeogenesis-energy-cost), [C13 §122](../chapters/13_how_cells_obtain_energy_from_food.md#122-futile-cycle) |

<a id="p-glycogen_metabolism"></a>

### P.glycogen_metabolism — Glycogen synthesis and mobilization

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Glycogen granule, glucose-derived precursors, synthesis/breakdown enzymes |
| Required state / input | Cell/tissue metabolic/hormonal state |
| WorldState change / output | Glycogen storage increases or phosphorylase releases glucose 1-phosphate for downstream metabolism. |
| Trigger / termination | Source metabolites/hormones; reciprocal regulation or substrate limits |
| Energy / time / noise / limits | Store, water-associated mass and free glucose are distinct; no automatic full pathway enzyme inventory. |
| Evidence | [C13 §123](../chapters/13_how_cells_obtain_energy_from_food.md#123-glycogen), [C13 §124](../chapters/13_how_cells_obtain_energy_from_food.md#124-glycogen-storage-sites), [C13 §125](../chapters/13_how_cells_obtain_energy_from_food.md#125-glycogen-granule-composition), [C13 §126](../chapters/13_how_cells_obtain_energy_from_food.md#126-glycogen-phosphorylase), [C13 §127](../chapters/13_how_cells_obtain_energy_from_food.md#127-entry-into-glycolysis), [C13 §128](../chapters/13_how_cells_obtain_energy_from_food.md#128-reciprocal-glycogen-regulation), [C13 §129](../chapters/13_how_cells_obtain_energy_from_food.md#129-hormonal-source-examples) |

<a id="p-storage_lipid_mobilization"></a>

### P.storage_lipid_mobilization — Storage-lipid hydrolysis/mobilization

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Triacylglycerol droplets and lipases |
| Required state / input | Source fuel-mobilization state |
| WorldState change / output | Ester cleavage releases fatty acids/glycerol for subsequent metabolic routes. |
| Trigger / termination | Lipase/substrate context; substrate limitation/regulation |
| Energy / time / noise / limits | Mobilization is separate from activation and oxidation; no universal reserve lifetime. |
| Evidence | [C13 §72](../chapters/13_how_cells_obtain_energy_from_food.md#72-triacylglycerol), [C13 §73](../chapters/13_how_cells_obtain_energy_from_food.md#73-lipases), [C13 §78](../chapters/13_how_cells_obtain_energy_from_food.md#78-fat-droplets), [C13 §130](../chapters/13_how_cells_obtain_energy_from_food.md#130-fat-versus-glycogen-energy-density), [C13 §131](../chapters/13_how_cells_obtain_energy_from_food.md#131-glycogen-hydration-penalty), [C13 §135](../chapters/13_how_cells_obtain_energy_from_food.md#135-fedfasted-source-framing) |

<a id="p-respiratory_electron_transport"></a>

### P.respiratory_electron_transport — Respiratory electron transport and proton pumping

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Matrix NADH or source FAD-linked entry, respiratory complexes, Q/cytochrome c, O2 and inner membrane |
| Required state / input | Donor/acceptor, oriented intact membrane machinery |
| WorldState change / output | Carrier redox states cycle, O2 is reduced to water, and protons are moved matrix→IMS to build PMF. |
| Trigger / termination | Electron donors/O2; inhibition, acceptor shortage or altered drive |
| Energy / time / noise / limits | Electron flow is not proton flow; cytosolic NADH reducing-equivalent delivery is not free NADH passage. |
| Evidence | [C14 §42](../chapters/14_energy_generation_mitochondria_chloroplasts.md#42-nadh-electron-donation-chemistry), [C14 §44](../chapters/14_energy_generation_mitochondria_chloroplasts.md#44-three-major-respiratory-enzyme-complexes), [C14 §46](../chapters/14_energy_generation_mitochondria_chloroplasts.md#46-mobile-electron-carriers), [C14 §48](../chapters/14_energy_generation_mitochondria_chloroplasts.md#48-proton-pumping-direction), [C14 §50](../chapters/14_energy_generation_mitochondria_chloroplasts.md#50-net-nadho2-source-equation), [C14 §77](../chapters/14_energy_generation_mitochondria_chloroplasts.md#77-succinate-dehydrogenase-is-membrane-embedded), [C14 §85](../chapters/14_energy_generation_mitochondria_chloroplasts.md#85-cytosolic-nadh-yields-less-in-source-accounting), [C14 §124](../chapters/14_energy_generation_mitochondria_chloroplasts.md#124-o2-reduction-stoichiometry), [C14 §125](../chapters/14_energy_generation_mitochondria_chloroplasts.md#125-cytochrome-oxidase-proton-pumping) |

<a id="p-atp_synthesis"></a>

### P.atp_synthesis — Chemiosmotic ATP synthesis/reversal

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | [E.atp_synthase](../entities/macromolecular_complexes.md#e-atp_synthase), ADP/Pi and side-specific H+ in named membrane |
| Required state / input | Correct orientation and net energetic conditions |
| WorldState change / output | Downhill proton movement couples to rotor/catalytic changes and ATP formation; reverse mode hydrolyzes ATP and pumps protons. |
| Trigger / termination | PMF and substrates; stall/reverse/stop when energetics change |
| Energy / time / noise / limits | No universal H+/ATP or speed; F1/stator do not rotate as one rigid object. |
| Evidence | [C14 §57](../chapters/14_energy_generation_mitochondria_chloroplasts.md#57-atp-synthase-architecture), [C14 §58](../chapters/14_energy_generation_mitochondria_chloroplasts.md#58-atp-synthase-orientation), [C14 §59](../chapters/14_energy_generation_mitochondria_chloroplasts.md#59-atp-synthase-mechanism), [C14 §63](../chapters/14_energy_generation_mitochondria_chloroplasts.md#63-atp-synthase-is-reversible), [C14 §64](../chapters/14_energy_generation_mitochondria_chloroplasts.md#64-direction-depends-on-net-free-energy), [C14 §65](../chapters/14_energy_generation_mitochondria_chloroplasts.md#65-bacterial-reversal-example), [C14 §173](../chapters/14_energy_generation_mitochondria_chloroplasts.md#173-thylakoid-atp-synthase-direction) |

<a id="p-oxidative_phosphorylation"></a>

### P.oxidative_phosphorylation — Oxidative phosphorylation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Respiratory chain, maintained inner membrane, ATP synthase and transport systems |
| Required state / input | Electron-transfer-supported PMF plus ADP/Pi availability |
| WorldState change / output | Respiratory energy is coupled through gradient to ATP production; carriers and transport budgets interact. |
| Trigger / termination | Aerobic source metabolic state; uncoupling, inhibition or substrate loss |
| Energy / time / noise / limits | Compose ETC/ATP-synthesis once. Approximate yield depends on context and shuttling; not a universal ATP-per-glucose constant. |
| Evidence | [C13 §13](../chapters/13_how_cells_obtain_energy_from_food.md#13-oxidative-phosphorylation), [C14 §4](../chapters/14_energy_generation_mitochondria_chloroplasts.md#4-two-stage-chemiosmotic-architecture), [C14 §68](../chapters/14_energy_generation_mitochondria_chloroplasts.md#68-adpatp-exchange), [C14 §75](../chapters/14_energy_generation_mitochondria_chloroplasts.md#75-nadh-atp-yield), [C14 §76](../chapters/14_energy_generation_mitochondria_chloroplasts.md#76-fadh2-atp-yield), [C14 §78](../chapters/14_energy_generation_mitochondria_chloroplasts.md#78-table-142-glycolysis-nadh-yield), [C14 §79](../chapters/14_energy_generation_mitochondria_chloroplasts.md#79-table-142-glycolysis-direct-atp), [C14 §80](../chapters/14_energy_generation_mitochondria_chloroplasts.md#80-table-142-pyruvate-oxidation), [C14 §81](../chapters/14_energy_generation_mitochondria_chloroplasts.md#81-table-142-tca-nadh), [C14 §82](../chapters/14_energy_generation_mitochondria_chloroplasts.md#82-table-142-tca-fadh2), [C14 §83](../chapters/14_energy_generation_mitochondria_chloroplasts.md#83-table-142-gtp), [C14 §84](../chapters/14_energy_generation_mitochondria_chloroplasts.md#84-table-142-total), [C14 §85](../chapters/14_energy_generation_mitochondria_chloroplasts.md#85-cytosolic-nadh-yields-less-in-source-accounting) |

<a id="p-mitochondrial_nucleotide_exchange"></a>

### P.mitochondrial_nucleotide_exchange — Mitochondrial ADP/ATP exchange

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | ATP/ADP antiporter and nucleotides across inner membrane |
| Required state / input | Source voltage and correctly oriented carrier |
| WorldState change / output | ADP enters matrix and ATP exits toward IMS/cytosolic context with charge bookkeeping. |
| Trigger / termination | Nucleotide/voltage conditions; exchange reset |
| Energy / time / noise / limits | Specific carrier route; not free bilayer diffusion of nucleotides. |
| Evidence | [C14 §68](../chapters/14_energy_generation_mitochondria_chloroplasts.md#68-adpatp-exchange), [C14 §69](../chapters/14_energy_generation_mitochondria_chloroplasts.md#69-charge-difference-in-nucleotide-exchange) |

<a id="p-uncoupling"></a>

### P.uncoupling — Proton-gradient uncoupling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Energy membrane and bypass proton conductance |
| Required state / input | Source physiological brown-fat carrier or named experimental uncoupler |
| WorldState change / output | Proton return dissipates gradient without matching ATP synthesis; heat production increases in source context. |
| Trigger / termination | Bypass conductance; reduced gradient/driver or removal |
| Energy / time / noise / limits | Native brown-fat and experimental DNP contexts distinct; not normal universal mitochondrial default. |
| Evidence | [C14 §129](../chapters/14_energy_generation_mitochondria_chloroplasts.md#129-dnp-uncoupling-source-mechanism), [C14 §130](../chapters/14_energy_generation_mitochondria_chloroplasts.md#130-uncoupling-converts-fuel-energy-to-heat), [C14 §131](../chapters/14_energy_generation_mitochondria_chloroplasts.md#131-brown-fat-uncoupling), [C14 §132](../chapters/14_energy_generation_mitochondria_chloroplasts.md#132-brown-fat-source-examples) |

<a id="p-photosynthetic_light_reactions"></a>

### P.photosynthetic_light_reactions — Photosynthetic light reactions

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | PSII/PSI, pigment/carrier chain, water, NADP+, ATP synthase in source thylakoid |
| Required state / input | Light, donors/acceptors and intact oriented machinery |
| WorldState change / output | Excitation/charge separation supports electron transfer, lumen proton accumulation, ATP/NADPH production and water-derived O2. |
| Trigger / termination | Photon absorption and carrier availability; light/resource/gradient limitations |
| Energy / time / noise / limits | PSII precedes PSI; antenna transfers excitation, not electrons between all pigments. |
| Evidence | [C14 §141](../chapters/14_energy_generation_mitochondria_chloroplasts.md#141-photosynthesis-stage-1), [C14 §162](../chapters/14_energy_generation_mitochondria_chloroplasts.md#162-energy-transfer-in-antenna), [C14 §166](../chapters/14_energy_generation_mitochondria_chloroplasts.md#166-charge-separation), [C14 §167](../chapters/14_energy_generation_mitochondria_chloroplasts.md#167-two-photosystems-in-oxygenic-photosynthesis), [C14 §168](../chapters/14_energy_generation_mitochondria_chloroplasts.md#168-historical-naming-inversion), [C14 §172](../chapters/14_energy_generation_mitochondria_chloroplasts.md#172-chloroplast-proton-pumping-direction), [C14 §173](../chapters/14_energy_generation_mitochondria_chloroplasts.md#173-thylakoid-atp-synthase-direction), [C14 §176](../chapters/14_energy_generation_mitochondria_chloroplasts.md#176-fnr), [C14 §178](../chapters/14_energy_generation_mitochondria_chloroplasts.md#178-water-splitting-complex), [C14 §183](../chapters/14_energy_generation_mitochondria_chloroplasts.md#183-photosystem-i-receives-electrons-from-psii) |

<a id="p-water_oxidation"></a>

### P.water_oxidation — Photosystem-II water oxidation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Water and PSII-associated manganese complex |
| Required state / input | Appropriate source oxidation-equivalent accumulation |
| WorldState change / output | Sequential electron extraction supplies PSII; source net two waters yield O2, four H+ and four electrons. |
| Trigger / termination | Coupled photosynthetic charge separation; completed O2 release |
| Energy / time / noise / limits | Not a single photon cleaving water directly to O2; detailed atomic mechanism unspecified. |
| Evidence | [C14 §178](../chapters/14_energy_generation_mitochondria_chloroplasts.md#178-water-splitting-complex), [C14 §179](../chapters/14_energy_generation_mitochondria_chloroplasts.md#179-water-splitting-electron-count), [C14 §180](../chapters/14_energy_generation_mitochondria_chloroplasts.md#180-water-splitting-net-source-stoichiometry), [C14 §182](../chapters/14_energy_generation_mitochondria_chloroplasts.md#182-water-splitting-safety-principle) |

<a id="p-carbon_fixation"></a>

### P.carbon_fixation — Calvin-cycle carbon fixation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; carbon-fixation cycle |
| Participants / location | CO2, RuBP, Rubisco, ATP/NADPH and source stroma enzymes |
| Required state / input | Activated carbon-fixation conditions and energy/reducing substrates |
| WorldState change / output | Fixed carbon is reduced toward net G3P while RuBP is regenerated in source cycle. |
| Trigger / termination | Metabolic/light-linked regulation; resource exhaustion or regulation |
| Energy / time / noise / limits | Source nine ATP/six NADPH per net G3P context; missing intermediates not invented; not dark-only or reversed TCA. |
| Evidence | [C14 §189](../chapters/14_energy_generation_mitochondria_chloroplasts.md#189-carbon-fixation), [C14 §190](../chapters/14_energy_generation_mitochondria_chloroplasts.md#190-rubisco), [C14 §191](../chapters/14_energy_generation_mitochondria_chloroplasts.md#191-rubisco-reaction), [C14 §199](../chapters/14_energy_generation_mitochondria_chloroplasts.md#199-rubp-is-an-energy-rich-substrate), [C14 §200](../chapters/14_energy_generation_mitochondria_chloroplasts.md#200-calvin-cycle), [C14 §201](../chapters/14_energy_generation_mitochondria_chloroplasts.md#201-calvin-cycle-carbon-stoichiometry), [C14 §202](../chapters/14_energy_generation_mitochondria_chloroplasts.md#202-calvin-cycle-atp-cost), [C14 §203](../chapters/14_energy_generation_mitochondria_chloroplasts.md#203-calvin-cycle-nadph-cost), [C14 §204](../chapters/14_energy_generation_mitochondria_chloroplasts.md#204-rubp-regeneration-stoichiometry), [C14 §205](../chapters/14_energy_generation_mitochondria_chloroplasts.md#205-calvin-cycle-intermediate-simplification), [C14 §253](../chapters/14_energy_generation_mitochondria_chloroplasts.md#253-visual-rule--calvin-cycle-is-not-dark-only) |

<a id="p-metabolic_regulation"></a>

### P.metabolic_regulation — Metabolic feedback and branch allocation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/composite |
| Participants / location | Shared metabolites, enzyme targets and source hormonal/covalent regulation |
| Required state / input | Target-specific substrate/effector availability |
| WorldState change / output | Enzyme activity and competing fluxes change, redistributing metabolic inputs/outputs. |
| Trigger / termination | Energy/metabolite/signal state; feedback balance or changed demand |
| Energy / time / noise / limits | ATP can be substrate and inhibitor at different sites; no universal flux from concentration alone. |
| Evidence | [C13 §102](../chapters/13_how_cells_obtain_energy_from_food.md#102-central-metabolism-feeds-biosynthesis), [C13 §105](../chapters/13_how_cells_obtain_energy_from_food.md#105-metabolism-is-a-network), [C13 §111](../chapters/13_how_cells_obtain_energy_from_food.md#111-metabolic-branch-points), [C13 §113](../chapters/13_how_cells_obtain_energy_from_food.md#113-metabolic-regulation), [C13 §118](../chapters/13_how_cells_obtain_energy_from_food.md#118-pfk-activation), [C13 §119](../chapters/13_how_cells_obtain_energy_from_food.md#119-pfk-inhibition), [C13 §120](../chapters/13_how_cells_obtain_energy_from_food.md#120-reciprocal-regulation), [C13 §128](../chapters/13_how_cells_obtain_energy_from_food.md#128-reciprocal-glycogen-regulation), [C13 §129](../chapters/13_how_cells_obtain_energy_from_food.md#129-hormonal-source-examples) |
