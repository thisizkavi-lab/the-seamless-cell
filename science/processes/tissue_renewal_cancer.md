# Tissue renewal cancer

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 16 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-tissue_renewal"></a>

### P.tissue_renewal — Tissue renewal/homeostasis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Tissue cells, stem/precursor compartments and loss/clearance routes |
| Required state / input | Source tissue-specific renewal context |
| WorldState change / output | Production, differentiation, migration and loss change cell population composition and maintain or alter tissue organization. |
| Trigger / termination | Source turnover/damage/niche signals; context-dependent balance |
| Energy / time / noise / limits | Cell-cycle time, replacement time and individual lifespan are distinct; no single tissue timer. |
| Evidence | [C20 §6](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#6-tissue-maintenance-is-dynamic), [C20 §149](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#149-intestinal-epithelium-turnover), [C20 §150](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#150-bone-turnover), [C20 §151](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#151-red-blood-cell-lifetime), [C20 §152](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#152-epidermal-turnover), [C20 §153](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#153-most-neurons-are-long-lived), [C20 §157](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#157-terminally-differentiated-cell), [C20 §158](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#158-proliferating-precursor-cell), [C20 §159](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#159-transit-amplifying-cell), [C20 §160](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#160-stem-cell), [C20 §161](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#161-stem-cell-self-renewal), [C20 §162](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#162-stem-cell-differentiation-output) |

<a id="p-stem_cell_renewal"></a>

### P.stem_cell_renewal — Stem-cell self-renewal

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Source stem cell and niche |
| Required state / input | Cell/tissue-specific renewal capacity and division state |
| WorldState change / output | Division yields retained stem-cell capacity within the lineage, with source symmetric/asymmetric outcomes as applicable. |
| Trigger / termination | Source niche/program input; daughter-state assignment |
| Energy / time / noise / limits | Do not impose exactly one stem daughter at every division; population balance and individual division differ. |
| Evidence | [C20 §160](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#160-stem-cell), [C20 §161](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#161-stem-cell-self-renewal), [C20 §162](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#162-stem-cell-differentiation-output), [C20 §163](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#163-symmetry-of-stem-cell-divisions-can-vary), [C20 §164](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#164-adult-tissue-stem-cells-are-restricted), [C20 §179](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#179-stem-cell-niche), [C20 §180](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#180-stem-cell-systems-require-feedback-control) |

<a id="p-precursor_amplification"></a>

### P.precursor_amplification — Precursor/transit-amplifying proliferation

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Source precursor population |
| Required state / input | Source restricted proliferative state |
| WorldState change / output | Precursor divisions expand a lineage before terminal differentiation/loss in the cited tissue. |
| Trigger / termination | Source tissue/niche program; differentiation or proliferative exit |
| Energy / time / noise / limits | Precursor and stem cell are not synonymous; number of divisions is unspecified unless sourced. |
| Evidence | [C20 §157](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#157-terminally-differentiated-cell), [C20 §158](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#158-proliferating-precursor-cell), [C20 §159](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#159-transit-amplifying-cell), [C20 §165](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#165-intestinal-crypt), [C20 §166](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#166-villus), [C20 §167](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#167-gut-cell-migration) |

<a id="p-cell_differentiation"></a>

### P.cell_differentiation — Cell differentiation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/lineage |
| Participants / location | Existing cell, gene-regulatory system and source tissue signals |
| Required state / input | Source developmental/renewal competence |
| WorldState change / output | Gene-expression/state changes produce specialized cell characteristics and altered proliferative capacity. |
| Trigger / termination | Source signals/program; stable or evolving specialized state |
| Energy / time / noise / limits | Ordinary differentiation need not change genome sequence. Terminal-state nuclei can be lost in specific lineages, not every differentiated cell. |
| Evidence | [C08 §5](../chapters/08_control_of_gene_expression.md#5-multicellular-organisms-use-gene-expression-to-create-different-cell-types), [C08 §9](../chapters/08_control_of_gene_expression.md#9-cell-differentiation), [C08 §18](../chapters/08_control_of_gene_expression.md#18-nuclear-transplantation-conclusion), [C08 §28](../chapters/08_control_of_gene_expression.md#28-gene-expression-patterns-are-dynamic), [C08 §199](../chapters/08_control_of_gene_expression.md#199-differentiated-cells-usually-maintain-identity), [C08 §200](../chapters/08_control_of_gene_expression.md#200-terminal-differentiation-source-examples), [C20 §157](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#157-terminally-differentiated-cell), [C20 §158](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#158-proliferating-precursor-cell), [C20 §164](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#164-adult-tissue-stem-cells-are-restricted), [C20 §167](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#167-gut-cell-migration), [C20 §173](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#173-epidermal-differentiation-trajectory), [C20 §175](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#175-hematopoietic-stem-cell), [C20 §176](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#176-red-blood-cells-lack-nuclei), [C20 §178](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#178-megakaryocyte) |

<a id="p-intestinal_lineage_turnover"></a>

### P.intestinal_lineage_turnover — Intestinal epithelial lineage movement/turnover

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Crypt stem/precursor cells, differentiated descendants, niche and villus |
| Required state / input | Source gut epithelial architecture |
| WorldState change / output | Dividing descendants generally move upward, differentiate and are shed; Paneth cells follow source downward/local niche route. |
| Trigger / termination | Source renewal program; shedding or lineage-specific residence |
| Energy / time / noise / limits | Paneth exception retained; villus replacement duration is not every crypt cell's division period. |
| Evidence | [C20 §165](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#165-intestinal-crypt), [C20 §166](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#166-villus), [C20 §167](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#167-gut-cell-migration), [C20 §168](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#168-villus-tip-shedding), [C20 §169](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#169-paneth-cells), [C20 §170](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#170-paneth-cell-functions), [C20 §179](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#179-stem-cell-niche), [C20 §181](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#181-wnt-proteins), [C20 §182](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#182-wnt-signal-is-spatially-restricted), [C20 §183](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#183-differentiation-requires-additional-signals) |

<a id="p-hematopoietic_differentiation"></a>

### P.hematopoietic_differentiation — Hematopoietic lineage differentiation

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Source hematopoietic stem/precursor cells |
| Required state / input | Blood-lineage-specific source program |
| WorldState change / output | Distinct blood-cell lineages arise; specific routes include nucleus loss in erythroid maturation, monocyte-derived cells and megakaryocyte fragmentation. |
| Trigger / termination | Source lineage program; mature product state |
| Energy / time / noise / limits | Platelets are fragments, not miniature nucleated cells; source diagram is not a complete branching/probability model. |
| Evidence | [C20 §174](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#174-hematopoiesis), [C20 §175](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#175-hematopoietic-stem-cell), [C20 §176](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#176-red-blood-cells-lack-nuclei), [C20 §177](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#177-monocyte-lineage), [C20 §178](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#178-megakaryocyte) |

<a id="p-somatic_reprogramming"></a>

### P.somatic_reprogramming — Induced pluripotent reprogramming

| Field | Record |
|---|---|
| Kind / scoped aliases | experimental_material/regulatory |
| Participants / location | Source somatic cell and introduced Oct4/Sox2/Klf4 expression |
| Required state / input | Source experimental reprogramming conditions |
| WorldState change / output | Gene-regulatory state shifts toward induced pluripotency while donor genotype remains the source baseline. |
| Trigger / termination | Source factor intervention; validated reprogrammed state or failure |
| Energy / time / noise / limits | Do not add unsupplied factors or promise complete conversion; iPS and embryonic stem-cell origins differ. |
| Evidence | [C20 §187](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#187-embryonic-stem-cell), [C20 §188](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#188-pluripotency), [C20 §192](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#192-induced-pluripotent-stem-cell), [C20 §193](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#193-source-ips-transcription-factors), [C20 §194](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#194-reprogramming-changes-stable-cell-identity), [C20 §195](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#195-patient-specific-ips-cells) |

<a id="p-organoid_self_organization"></a>

### P.organoid_self_organization — Organoid self-organization

| Field | Record |
|---|---|
| Kind / scoped aliases | experimental_material/composite |
| Participants / location | Source cultured stem-cell-derived tissue system |
| Required state / input | Specified culture and differentiation signals |
| WorldState change / output | Cellular differentiation and interactions generate limited tissue-like organization. |
| Trigger / termination | Source culture program; emergent culture state |
| Energy / time / noise / limits | Organoid is not a complete organism or automatically a native organ; omitted environment is not absent biology. |
| Evidence | [C20 §198](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#198-organoid), [C20 §199](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#199-organoid-self-organization) |

<a id="p-extracellular_matrix_deposition"></a>

### P.extracellular_matrix_deposition — Extracellular-matrix synthesis/assembly

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source matrix-producing cells, secretory pathway and extracellular components |
| Required state / input | Cell-type-specific matrix program |
| WorldState change / output | Secreted precursors undergo source processing/assembly into matrix; collagen precursor cleavage precedes extracellular fibril assembly in cited route. |
| Trigger / termination | Source synthesis/secretion; extracellular assembly/remodeling |
| Energy / time / noise / limits | Reuse translation/ER/traffic steps once; collagen molecule, fibril and fiber are distinct organization levels. |
| Evidence | [C20 §34](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#34-collagen), [C20 §38](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#38-collagen-triple-helix), [C20 §39](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#39-glycine-every-third-residue), [C20 §40](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#40-collagen-molecule-diameter), [C20 §41](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#41-collagen-fibril-diameter), [C20 §42](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#42-collagen-fiber-diameter), [C20 §44](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#44-fibroblast), [C20 §45](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#45-osteoblast), [C20 §46](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#46-procollagen), [C20 §47](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#47-procollagen-proteinase), [C20 §48](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#48-collagen-assembly-is-spatially-gated) |

<a id="p-extracellular_matrix_remodeling"></a>

### P.extracellular_matrix_remodeling — Extracellular-matrix remodeling

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Matrix, source proteases and mechanically interacting cells |
| Required state / input | Source growth/repair/turnover context |
| WorldState change / output | Matrix components are degraded/reorganized and new material changes mechanical organization and cell interactions. |
| Trigger / termination | Source protease/traction/deposition state; local balance |
| Energy / time / noise / limits | Degradation, fiber alignment and signaling are distinct events; association is not a complete causal force law. |
| Evidence | [C20 §50](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#50-matrix-degradation-is-necessary), [C20 §51](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#51-matrix-proteases), [C20 §53](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#53-cells-organize-the-matrix-they-secrete), [C20 §56](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#56-reciprocal-cellmatrix-organization), [C20 §63](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#63-integrin-activation-is-bidirectional), [C20 §64](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#64-integrins-are-signaling-receptors), [C20 §84](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#84-proteoglycans-bind-signals), [C20 §85](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#85-matrix-can-guide-cell-migration) |

<a id="p-cellulose_synthesis"></a>

### P.cellulose_synthesis — Cellulose synthesis/deposition

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source plasma-membrane cellulose-synthase complex, UDP-glucose and wall |
| Required state / input | Source plant-cell wall-production context |
| WorldState change / output | Glucan chains are synthesized/extruded and assembled into microfibrils while source cortical organization guides deposition. |
| Trigger / termination | Source synthase/substrate state; substrate/regulatory limit |
| Energy / time / noise / limits | Source complex stoichiometry is a model; extrusion is not vesicular exocytosis of a prebuilt fibril. |
| Evidence | [C20 §16](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#16-cellulose), [C20 §17](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#17-cellulose-linkage), [C20 §18](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#18-cellulose-microfibril), [C20 §19](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#19-cellulose-chain-count-source-model), [C20 §27](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#27-cellulose-synthesis-occurs-at-plasma-membrane), [C20 §28](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#28-udp-glucose), [C20 §29](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#29-cortical-microtubules-guide-cellulose-deposition), [C20 §30](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#30-cellulose-synthase-source-stoichiometry) |

<a id="p-cell_senescence"></a>

### P.cell_senescence — Cellular senescence

| Field | Record |
|---|---|
| Kind / scoped aliases | state transition/profile |
| Participants / location | Existing cell in source proliferative/telomere context |
| Required state / input | Source senescence-triggering state |
| WorldState change / output | Proliferative capacity is persistently arrested in cited context. |
| Trigger / termination | Source cellular history/signals; source-defined arrested state |
| Energy / time / noise / limits | Not identical to quiescence, differentiation or apoptosis; no universal division counter. |
| Evidence | [C20 §241](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#241-replicative-immortality), [C20 §242](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#242-cell-senescence), [C20 §243](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#243-telomerase-reactivation) |

<a id="p-cancer_clonal_evolution"></a>

### P.cancer_clonal_evolution — Tumor clonal evolution

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/composite |
| Participants / location | Cell lineage, heritable genetic/epigenetic changes and tissue environment |
| Required state / input | Source variants and context-dependent selection |
| WorldState change / output | Differential survival/proliferation changes clone frequencies and permits diverse subclones with additional alterations. |
| Trigger / termination | Heritable variation and selection; continuing evolution or lineage extinction |
| Energy / time / noise / limits | Drivers/passengers differ; mutation alone is not a deterministic cancer trigger and fast proliferation alone is insufficient. |
| Evidence | [C20 §203](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#203-cancer), [C20 §205](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#205-cancers-two-defining-heritable-cell-behaviors), [C20 §218](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#218-healthy-living-cannot-reduce-cancer-risk-to-zero), [C20 §219](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#219-cancer-is-genetically-driven-but-usually-not-inherited), [C20 §220](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#220-somatic-mutation), [C20 §221](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#221-germ-line-mutation), [C20 §226](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#226-passenger-mutation), [C20 §227](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#227-driver-mutation), [C20 §228](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#228-minimum-driver-count-source-statement), [C20 §230](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#230-high-turnover-tissues-have-more-opportunities-for-cancer), [C20 §231](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#231-genetic-instability), [C20 §232](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#232-sources-of-genetic-instability), [C20 §233](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#233-aneuploidy-can-feed-back-on-instability), [C20 §235](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#235-cancer-evolves-clonally), [C20 §236](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#236-tumor-subclones), [C20 §239](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#239-apoptosis-resistance), [C20 §249](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#249-proto-oncogene), [C20 §250](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#250-oncogene), [C20 §251](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#251-oncogene-mutations-are-often-dominant-at-cellular-level), [C20 §252](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#252-oncogene-activation-mechanisms), [C20 §253](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#253-tumor-suppressor-gene), [C20 §254](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#254-tumor-suppressor-mutations-are-often-recessive-at-cellular-level), [C20 §255](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#255-tumor-suppressors-can-be-silenced-epigenetically) |

<a id="p-cancer_invasion"></a>

### P.cancer_invasion — Local tumor invasion

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source malignant lineage, surrounding tissue/matrix and cell interactions |
| Required state / input | Acquired invasive behavior in compatible tissue context |
| WorldState change / output | Tumor cells cross normal tissue boundaries and infiltrate neighboring tissue. |
| Trigger / termination | Source tumor/tissue conditions; local progression or loss of invading cells |
| Energy / time / noise / limits | Benign expansion/polyp growth is not invasion; do not invent a universal invasion machinery sequence. |
| Evidence | [C20 §205](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#205-cancers-two-defining-heritable-cell-behaviors), [C20 §206](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#206-tumor), [C20 §207](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#207-benign-tumor), [C20 §208](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#208-malignant-tumor), [C20 §209](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#209-metastasis), [C20 §210](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#210-metastatic-route-source-model), [C20 §244](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#244-reduced-adhesion-contributes-to-invasion), [C20 §247](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#247-tumor-microenvironment), [C20 §277](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#277-polyp-does-not-equal-invasive-cancer) |

<a id="p-metastasis"></a>

### P.metastasis — Metastatic dissemination and colonization

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/lineage |
| Participants / location | Source invasive tumor cells, circulation and distant tissue |
| Required state / input | Source dissemination/colonization capabilities and environment |
| WorldState change / output | Cells leave primary site, enter/exit circulation and establish a secondary population where successful. |
| Trigger / termination | Source invasion/dissemination; colonization or lineage loss |
| Energy / time / noise / limits | Not every circulating cell forms metastasis; probabilities and timing remain unassigned. |
| Evidence | [C20 §209](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#209-metastasis), [C20 §210](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#210-metastatic-route-source-model) |

<a id="p-therapy_selection"></a>

### P.therapy_selection — Therapy-associated clonal selection

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/pattern |
| Participants / location | Heterogeneous tumor and source treatment perturbation |
| Required state / input | Treatment with differential clone response |
| WorldState change / output | Sensitive and resistant lineage abundances change; resistant populations may expand. |
| Trigger / termination | Source therapy exposure; continued selection, response or progression |
| Energy / time / noise / limits | Resistance is not guaranteed newly induced mutation; no treatment efficacy inferred for a patient. |
| Evidence | [C20 §279](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#279-cancer-treatment-is-difficult-because-tumors-evolve), [C20 §280](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#280-intratumor-heterogeneity) |
