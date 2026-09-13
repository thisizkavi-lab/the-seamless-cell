# Cell migration mechanics

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 8 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-cell_migration"></a>

### P.cell_migration — Crawling cell migration

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Actin cortex, source protrusions, integrin adhesions, substrate and contractile machinery |
| Required state / input | Migratory cell with polarity and suitable adhesive context |
| WorldState change / output | Protrusion, attachment and rear contraction/detachment redistribute cell shape and position. |
| Trigger / termination | Source migration/polarity signals; arrest, changed substrate or target context |
| Energy / time / noise / limits | Whole-cell movement emerges from coupled processes; no mesh translation without substrate/force context. |
| Evidence | [C17 §178](../chapters/17_cytoskeleton.md#178-three-stages-of-cell-crawling), [C17 §179](../chapters/17_cytoskeleton.md#179-leading-edge-protrusion), [C17 §180](../chapters/17_cytoskeleton.md#180-lamellipodium), [C17 §181](../chapters/17_cytoskeleton.md#181-filopodium), [C17 §187](../chapters/17_cytoskeleton.md#187-actin-orientation-at-leading-edge), [C17 §188](../chapters/17_cytoskeleton.md#188-integrins-create-traction-points), [C17 §189](../chapters/17_cytoskeleton.md#189-rear-contraction), [C17 §190](../chapters/17_cytoskeleton.md#190-frontback-attachment-turnover), [C17 §198](../chapters/17_cytoskeleton.md#198-rho-family-monomeric-gtpases), [C17 §199](../chapters/17_cytoskeleton.md#199-rho-activation-source-phenotype), [C17 §200](../chapters/17_cytoskeleton.md#200-rac-activation-source-phenotype), [C17 §201](../chapters/17_cytoskeleton.md#201-cdc42-activation-source-phenotype), [C17 §202](../chapters/17_cytoskeleton.md#202-spatial-rho-family-activation-establishes-migration-direction) |

<a id="p-protrusion_formation"></a>

### P.protrusion_formation — Actin-driven protrusion formation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Actin, source Arp2/3/formin regulators and membrane |
| Required state / input | Local actin assembly/polarity state |
| WorldState change / output | Filament growth and organization alter lamellipodial or filopodial membrane contour. |
| Trigger / termination | Local source regulator activation; capping/turnover/regulation |
| Energy / time / noise / limits | Branched lamellipodia and bundled filopodia differ; membrane is displaced, not permeabilized. |
| Evidence | [C17 §164](../chapters/17_cytoskeleton.md#164-formin), [C17 §165](../chapters/17_cytoskeleton.md#165-arp-complex), [C17 §166](../chapters/17_cytoskeleton.md#166-bundling-proteins), [C17 §179](../chapters/17_cytoskeleton.md#179-leading-edge-protrusion), [C17 §180](../chapters/17_cytoskeleton.md#180-lamellipodium), [C17 §181](../chapters/17_cytoskeleton.md#181-filopodium), [C17 §187](../chapters/17_cytoskeleton.md#187-actin-orientation-at-leading-edge), [C17 §193](../chapters/17_cytoskeleton.md#193-arp-built-lamellipodium), [C17 §195](../chapters/17_cytoskeleton.md#195-formin-built-filopodium) |

<a id="p-adhesion_turnover"></a>

### P.adhesion_turnover — Cell–matrix adhesion assembly/turnover

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Integrin, matrix ligand and source cytoskeletal linkers |
| Required state / input | Suitable matrix/contact and intracellular state |
| WorldState change / output | Adhesive/mechanical links form, strengthen or release; source signaling affects local cytoskeletal behavior. |
| Trigger / termination | Contact/regulation/force context; detachment or remodeling |
| Energy / time / noise / limits | Adhesion is not covalent fusion of cell and matrix; hemidesmosomes and focal adhesions couple different filaments. |
| Evidence | [C17 §188](../chapters/17_cytoskeleton.md#188-integrins-create-traction-points), [C17 §189](../chapters/17_cytoskeleton.md#189-rear-contraction), [C17 §190](../chapters/17_cytoskeleton.md#190-frontback-attachment-turnover), [C20 §57](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#57-integrin), [C20 §58](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#58-integrin-dimer), [C20 §59](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#59-fibronectin), [C20 §60](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#60-integrinfibronectinactin-linkage), [C20 §61](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#61-integrin-can-also-connect-to-intermediate-filaments), [C20 §63](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#63-integrin-activation-is-bidirectional), [C20 §64](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#64-integrins-are-signaling-receptors), [C20 §116](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#116-hemidesmosome), [C20 §117](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#117-hemidesmosome-uses-integrins-not-cadherins), [C20 §118](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#118-hemidesmosome-linkage), [C20 §119](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#119-focal-contact-versus-hemidesmosome) |

<a id="p-actomyosin_contractility"></a>

### P.actomyosin_contractility — Actomyosin contractility

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Actin and myosin-II assemblies with ATP |
| Required state / input | Source compatible filament orientation and motor activation |
| WorldState change / output | Relative filament sliding generates tension/shortening of an assembly and changes cell/tissue shape. |
| Trigger / termination | Source motor activation; deactivation/load-dependent outcome |
| Energy / time / noise / limits | Actin and myosin filament lengths remain distinct from shortening/tension of the larger source assembly; no force law is supplied. |
| Evidence | [C17 §207](../chapters/17_cytoskeleton.md#207-muscle-contraction), [C17 §208](../chapters/17_cytoskeleton.md#208-muscle-myosin-ii), [C17 §209](../chapters/17_cytoskeleton.md#209-myosin-ii-molecule-length-source-scale), [C17 §210](../chapters/17_cytoskeleton.md#210-bipolar-myosin-filament), [C17 §211](../chapters/17_cytoskeleton.md#211-bipolar-contractile-logic), [C17 §220](../chapters/17_cytoskeleton.md#220-thin-filament), [C17 §221](../chapters/17_cytoskeleton.md#221-thick-filament), [C17 §223](../chapters/17_cytoskeleton.md#223-sliding-filament-mechanism), [C17 §225](../chapters/17_cytoskeleton.md#225-myosin-atp-cycle--rigor-state), [C17 §226](../chapters/17_cytoskeleton.md#226-myosin-atp-cycle--atp-binding), [C17 §227](../chapters/17_cytoskeleton.md#227-myosin-atp-cycle--cocking), [C17 §228](../chapters/17_cytoskeleton.md#228-myosin-atp-cycle--rebinding), [C17 §229](../chapters/17_cytoskeleton.md#229-myosin-atp-cycle--phosphate-release), [C17 §230](../chapters/17_cytoskeleton.md#230-myosin-atp-cycle--adp-release) |

<a id="p-skeletal_muscle_activation"></a>

### P.skeletal_muscle_activation — Skeletal-muscle excitation–contraction coupling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source T-tubules, SR, Ca2+, troponin/tropomyosin and sarcomeres |
| Required state / input | Skeletal-muscle excitation and loaded SR |
| WorldState change / output | SR calcium release exposes actin binding sites via regulatory proteins; actomyosin cycling contracts sarcomeres; clearance permits relaxation. |
| Trigger / termination | Source electrical excitation; Ca2+ clearance and inhibition restored |
| Energy / time / noise / limits | Skeletal source physical channel coupling is not automatically the cardiac mechanism. Thick and thin filaments retain length in sliding model. |
| Evidence | [C17 §238](../chapters/17_cytoskeleton.md#238-t-tubules), [C17 §239](../chapters/17_cytoskeleton.md#239-sarcoplasmic-reticulum), [C17 §240](../chapters/17_cytoskeleton.md#240-excitation-reaches-myofibrils-rapidly), [C17 §241](../chapters/17_cytoskeleton.md#241-sarcoplasmic-ca2-release), [C17 §242](../chapters/17_cytoskeleton.md#242-skeletal-source-linkage-model), [C17 §243](../chapters/17_cytoskeleton.md#243-tropomyosin), [C17 §244](../chapters/17_cytoskeleton.md#244-troponin), [C17 §245](../chapters/17_cytoskeleton.md#245-ca2-activation-of-skeletal-muscle), [C17 §246](../chapters/17_cytoskeleton.md#246-ca2-removal-terminates-contraction), [C17 §223](../chapters/17_cytoskeleton.md#223-sliding-filament-mechanism) |

<a id="p-smooth_nonmuscle_myosin_control"></a>

### P.smooth_nonmuscle_myosin_control — Smooth/nonmuscle myosin regulation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Myosin-II and source phosphorylation/calcium-dependent regulators |
| Required state / input | Named smooth/nonmuscle context |
| WorldState change / output | Myosin phosphorylation/assembly or motor activity changes contractility. |
| Trigger / termination | Source regulator input; dephosphorylation/deactivation |
| Energy / time / noise / limits | Do not apply skeletal troponin switch to every actomyosin system; source slow cycling differs. |
| Evidence | [C17 §248](../chapters/17_cytoskeleton.md#248-nonmuscle-myosin-ii-activation), [C17 §249](../chapters/17_cytoskeleton.md#249-smooth-muscle-activation), [C17 §250](../chapters/17_cytoskeleton.md#250-smooth-muscle-is-slower) |

<a id="p-epithelial_shape_change"></a>

### P.epithelial_shape_change — Junction-coupled epithelial shape change

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Cadherin/adherens contacts, actin belts and epithelial cells |
| Required state / input | Source connected epithelium and localized contractility |
| WorldState change / output | Coupled tension changes cell shapes and bends/folds an epithelial sheet. |
| Trigger / termination | Source local contractile program; mechanical/state endpoint |
| Energy / time / noise / limits | Junctional connections transmit force; a diagram's arrow is not a quantified morphogenetic force law. |
| Evidence | [C20 §104](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#104-adherens-junction), [C20 §105](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#105-cadherin), [C20 §106](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#106-cadherin-homophilic-binding), [C20 §107](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#107-adherens-junction-architecture), [C20 §108](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#108-adhesion-belt), [C20 §109](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#109-adherens-belts-can-generate-tissue-scale-force), [C20 §110](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#110-epithelial-folding) |

<a id="p-plant_cell_expansion"></a>

### P.plant_cell_expansion — Turgor/wall-constrained plant-cell expansion

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Plant cell water/solute pools, primary wall and oriented cellulose/matrix |
| Required state / input | Source wall-permissive growth and turgor conditions |
| WorldState change / output | Water-driven expansion occurs in directions constrained by wall organization while wall material is remodeled/added. |
| Trigger / termination | Source growth state; changed wall/turgor constraints |
| Energy / time / noise / limits | Turgor alone does not specify growth rate or direction; wall anisotropy and source cell state matter. |
| Evidence | [C20 §11](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#11-primary-cell-wall), [C20 §14](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#14-turgor-pressure), [C20 §16](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#16-cellulose), [C20 §18](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#18-cellulose-microfibril), [C20 §21](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#21-pectin), [C20 §25](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#25-cell-growth-direction-follows-wall-anisotropy), [C20 §27](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#27-cellulose-synthesis-occurs-at-plasma-membrane), [C20 §28](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#28-udp-glucose), [C20 §29](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#29-cortical-microtubules-guide-cellulose-deposition), [C20 §30](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#30-cellulose-synthase-source-stoichiometry) |
