# Cytoskeletal dynamics

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 8 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-actin_polymerization"></a>

### P.actin_polymerization — Actin assembly and disassembly

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | Actin pool, polarized filament and source nucleation/end regulators |
| Required state / input | End accessibility, local subunit state and regulator context |
| WorldState change / output | Subunits associate/dissociate and filament length/membership change; nucleotide hydrolysis changes bound state after incorporation. |
| Trigger / termination | Source nucleation/end conditions; capping, severing or changed subunit availability |
| Energy / time / noise / limits | Addition need not occur exclusively at plus end; hydrolysis is not an animated pushing stroke by every subunit. |
| Evidence | [C17 §146](../chapters/17_cytoskeleton.md#146-actin-filament-architecture), [C17 §147](../chapters/17_cytoskeleton.md#147-actin-polarity), [C17 §151](../chapters/17_cytoskeleton.md#151-actin-polymerizes-at-both-ends), [C17 §152](../chapters/17_cytoskeleton.md#152-actin-nucleotide), [C17 §153](../chapters/17_cytoskeleton.md#153-actin-atp-hydrolysis), [C17 §154](../chapters/17_cytoskeleton.md#154-adp-actin-destabilization), [C17 §164](../chapters/17_cytoskeleton.md#164-formin), [C17 §165](../chapters/17_cytoskeleton.md#165-arp-complex), [C17 §166](../chapters/17_cytoskeleton.md#166-bundling-proteins), [C17 §167](../chapters/17_cytoskeleton.md#167-cross-linking-proteins), [C17 §168](../chapters/17_cytoskeleton.md#168-severing-proteins), [C17 §169](../chapters/17_cytoskeleton.md#169-capping-proteins) |

<a id="p-actin_treadmilling"></a>

### P.actin_treadmilling — Actin treadmilling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Polar actin filament and subunit pool |
| Required state / input | Source conditions supporting net plus-end gain/minus-end loss |
| WorldState change / output | Subunit flux through filament occurs while mean filament length can remain approximately constant. |
| Trigger / termination | Suitable pool/end conditions; changed flux balance |
| Energy / time / noise / limits | Treadmilling alone does not translate the entire filament; concurrent turnover and motion need separate variables. |
| Evidence | [C17 §151](../chapters/17_cytoskeleton.md#151-actin-polymerizes-at-both-ends), [C17 §152](../chapters/17_cytoskeleton.md#152-actin-nucleotide), [C17 §153](../chapters/17_cytoskeleton.md#153-actin-atp-hydrolysis), [C17 §154](../chapters/17_cytoskeleton.md#154-adp-actin-destabilization), [C17 §155](../chapters/17_cytoskeleton.md#155-actin-treadmilling), [C17 §156](../chapters/17_cytoskeleton.md#156-constant-length-treadmilling), [C17 §194](../chapters/17_cytoskeleton.md#194-lamellipodial-treadmilling) |

<a id="p-microtubule_nucleation"></a>

### P.microtubule_nucleation — Microtubule nucleation and organization

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Tubulin, source nucleators/MTOC or augmin-associated spindle context |
| Required state / input | Source nucleator availability and local organization |
| WorldState change / output | New polarized microtubule assembly is initiated and associated with an organizing site where specified. |
| Trigger / termination | Nucleation conditions; stabilization, release or disassembly |
| Energy / time / noise / limits | Centrosomes are not universal and centrioles do not directly nucleate every microtubule. |
| Evidence | [C17 §57](../chapters/17_cytoskeleton.md#57-microtubule-organizing-center), [C17 §58](../chapters/17_cytoskeleton.md#58-centrosome), [C17 §59](../chapters/17_cytoskeleton.md#59-centrosome-composition), [C17 §60](../chapters/17_cytoskeleton.md#60-γ-tubulin-ring-complex), [C17 §61](../chapters/17_cytoskeleton.md#61-centrosomal-minus-end-anchoring), [C17 §63](../chapters/17_cytoskeleton.md#63-centrioles-do-not-nucleate-centrosomal-microtubules-directly), [C17 §65](../chapters/17_cytoskeleton.md#65-yeast-spindle-pole-body), [C17 §66](../chapters/17_cytoskeleton.md#66-plant-microtubule-organization), [C17 §67](../chapters/17_cytoskeleton.md#67-specialized-cells-reorganize-microtubules), [C17 §88](../chapters/17_cytoskeleton.md#88-augmin) |

<a id="p-microtubule_dynamic_instability"></a>

### P.microtubule_dynamic_instability — Microtubule dynamic instability

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Polar microtubule, tubulin and source regulators |
| Required state / input | Available tubulin and end-state/regulator context |
| WorldState change / output | Stochastic switches between growth and rapid shrinkage alter length/membership; rescue can return a shrinking end to growth. |
| Trigger / termination | Source cap/end conditions; catastrophe/rescue/regulation |
| Energy / time / noise / limits | GTP cap is a biochemical end-state distribution, not a physical glowing hat. No independent invented probabilities. |
| Evidence | [C17 §68](../chapters/17_cytoskeleton.md#68-dynamic-instability), [C17 §69](../chapters/17_cytoskeleton.md#69-dynamic-instability-enables-exploration), [C17 §70](../chapters/17_cytoskeleton.md#70-tubulin-gtp-state), [C17 §71](../chapters/17_cytoskeleton.md#71-gtp-hydrolysis-after-polymerization), [C17 §72](../chapters/17_cytoskeleton.md#72-gtp-cap), [C17 §73](../chapters/17_cytoskeleton.md#73-gtp-tubulin-stabilizes-the-growing-end), [C17 §74](../chapters/17_cytoskeleton.md#74-catastrophe), [C17 §75](../chapters/17_cytoskeleton.md#75-rescue), [C17 §76](../chapters/17_cytoskeleton.md#76-gdp-tubulin-recycling), [C17 §78](../chapters/17_cytoskeleton.md#78-mitosis-increases-microtubule-dynamics), [C17 §79](../chapters/17_cytoskeleton.md#79-differentiated-cells-can-stabilize-microtubules), [C17 §92](../chapters/17_cytoskeleton.md#92-kinesin-13-source-category) |

<a id="p-microtubule_severing"></a>

### P.microtubule_severing — Microtubule severing

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/pattern |
| Participants / location | Microtubule and source severing protein such as katanin |
| Required state / input | Source enzyme/filament context |
| WorldState change / output | Filament continuity changes into daughter segments with new ends and lineage. |
| Trigger / termination | Severing activity; cleavage completion |
| Energy / time / noise / limits | New segments are not duplicated polymer mass; downstream end fate requires context. |
| Evidence | [C17 §91](../chapters/17_cytoskeleton.md#91-katanin) |

<a id="p-motor_transport"></a>

### P.motor_transport — Filament-based motor transport

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Cargo/adaptor, ATP-dependent motor and polarized actin filament or microtubule |
| Required state / input | Motor/cargo/track engagement and usable ATP state |
| WorldState change / output | Motor stepping changes cargo position relative to the filament; detachment changes motor/track binding. |
| Trigger / termination | Binding and motor cycle; detachment, obstacle or limiting substrate/context |
| Energy / time / noise / limits | Most kinesins move toward microtubule plus end; cytoplasmic dynein toward minus end. Family/subtype, load and track orientation matter; no fixed nucleusward direction. |
| Evidence | [C17 §97](../chapters/17_cytoskeleton.md#97-motor-proteins-convert-atp-into-directed-motion), [C17 §100](../chapters/17_cytoskeleton.md#100-kinesin-direction), [C17 §101](../chapters/17_cytoskeleton.md#101-cytoplasmic-dynein-direction), [C17 §104](../chapters/17_cytoskeleton.md#104-motor-tail-controls-cargo-specificity), [C17 §105](../chapters/17_cytoskeleton.md#105-dynein-adaptor-dependence), [C17 §106](../chapters/17_cytoskeleton.md#106-kinesin-hand-over-hand-model), [C17 §107](../chapters/17_cytoskeleton.md#107-er-positioning-by-kinesin), [C17 §108](../chapters/17_cytoskeleton.md#108-golgi-positioning-by-dynein), [C17 §123](../chapters/17_cytoskeleton.md#123-kinesin-processive-run-source-estimate), [C17 §124](../chapters/17_cytoskeleton.md#124-kinesin-step-size), [C17 §125](../chapters/17_cytoskeleton.md#125-kinesin-atp-stoichiometry), [C17 §171](../chapters/17_cytoskeleton.md#171-myosin), [C17 §172](../chapters/17_cytoskeleton.md#172-myosin-direction), [C17 §173](../chapters/17_cytoskeleton.md#173-myosin-i) |

<a id="p-intermediate_filament_assembly"></a>

### P.intermediate_filament_assembly — Intermediate-filament assembly/remodeling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source IF proteins, dimers/tetramers and assemblies |
| Required state / input | Compatible filament family and cellular state |
| WorldState change / output | Antiparallel assemblies create nonpolar filaments; context-specific modification alters assembly. |
| Trigger / termination | Source assembly state; remodeling/disassembly |
| Energy / time / noise / limits | No actin-like polarity or treadmilling kinetics inferred for IFs. |
| Evidence | [C17 §16](../chapters/17_cytoskeleton.md#16-intermediate-filament-monomer-architecture), [C17 §17](../chapters/17_cytoskeleton.md#17-coiled-coil-dimer-formation), [C17 §18](../chapters/17_cytoskeleton.md#18-antiparallel-tetramer-formation), [C17 §20](../chapters/17_cytoskeleton.md#20-intermediate-filaments-are-nonpolar), [C17 §26](../chapters/17_cytoskeleton.md#26-four-intermediate-filament-classes), [C17 §36](../chapters/17_cytoskeleton.md#36-lamin-phosphorylation-disassembles-lamina), [C17 §37](../chapters/17_cytoskeleton.md#37-lamin-dephosphorylation-reassembles-lamina) |

<a id="p-ciliary_bending"></a>

### P.ciliary_bending — Motile ciliary/flagellar bending

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source axoneme doublets, ciliary dynein, links and basal anchorage |
| Required state / input | Motile cilium architecture and regulated motor activity |
| WorldState change / output | Dynein-driven relative sliding is constrained into axoneme bending and coordinated beat. |
| Trigger / termination | Asymmetric source motor activity; reset or motor suppression |
| Energy / time / noise / limits | Microtubules do not contract; motile 9+2 model is not every cilium and bacterial flagella are distinct. |
| Evidence | [C17 §126](../chapters/17_cytoskeleton.md#126-cilia), [C17 §128](../chapters/17_cytoskeleton.md#128-basal-body), [C17 §129](../chapters/17_cytoskeleton.md#129-motile-cilia-function), [C17 §134](../chapters/17_cytoskeleton.md#134-eukaryotic-92-axoneme), [C17 §135](../chapters/17_cytoskeleton.md#135-bacterial-flagella-are-different), [C17 §136](../chapters/17_cytoskeleton.md#136-ciliary-dynein), [C17 §137](../chapters/17_cytoskeleton.md#137-dynein-sliding), [C17 §138](../chapters/17_cytoskeleton.md#138-sliding-to-bending-conversion), [C17 §139](../chapters/17_cytoskeleton.md#139-dynein-activation-must-be-asymmetric), [C17 §140](../chapters/17_cytoskeleton.md#140-ciliary-waveform-control), [C17 §142](../chapters/17_cytoskeleton.md#142-primary-cilium) |
