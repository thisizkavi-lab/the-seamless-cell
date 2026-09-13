# Meiosis fertilization

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 9 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-meiosis"></a>

### P.meiosis — Meiosis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Diploid germ-line precursor, homologs, sisters and meiotic apparatus |
| Required state / input | Source sexual-reproduction context with premeiotic S phase |
| WorldState change / output | One replication is followed by two divisions, separating homologs then sisters and producing haploid nuclear products. |
| Trigger / termination | Meiotic developmental program; completion/arrest according to sex/species |
| Energy / time / noise / limits | Four haploid nuclei do not imply four equivalent gametes in every organism or sex. No replication between I and II. |
| Evidence | [C19 §5](../chapters/19_sexual_reproduction_genetics.md#5-diploid), [C19 §6](../chapters/19_sexual_reproduction_genetics.md#6-homologous-chromosomes), [C19 §28](../chapters/19_sexual_reproduction_genetics.md#28-one-replication-two-divisions), [C19 §33](../chapters/19_sexual_reproduction_genetics.md#33-meiotic-prophase--prophase-i), [C19 §39](../chapters/19_sexual_reproduction_genetics.md#39-meiosis-i-segregates-homologs), [C19 §40](../chapters/19_sexual_reproduction_genetics.md#40-meiosis-ii-segregates-sisters), [C19 §41](../chapters/19_sexual_reproduction_genetics.md#41-four-haploid-nuclei), [C19 §43](../chapters/19_sexual_reproduction_genetics.md#43-meiosis-i-can-be-much-longer-than-mitosismeiosis-ii), [C19 §66](../chapters/19_sexual_reproduction_genetics.md#66-no-significant-interphase-between-divisions) |

<a id="p-homolog_pairing"></a>

### P.homolog_pairing — Meiotic homolog pairing/synapsis

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Homologous chromosomes, source axis and synaptonemal-complex components |
| Required state / input | Source meiotic prophase state |
| WorldState change / output | Homologs align and form bivalents; source synaptonemal structure organizes paired homologs. |
| Trigger / termination | Meiotic program/homology-dependent encounter; complex disassembly |
| Energy / time / noise / limits | Homolog recognition is incompletely explained in source; no invented sequence-scanning force. |
| Evidence | [C19 §33](../chapters/19_sexual_reproduction_genetics.md#33-meiotic-prophase--prophase-i), [C19 §34](../chapters/19_sexual_reproduction_genetics.md#34-pairing), [C19 §35](../chapters/19_sexual_reproduction_genetics.md#35-homolog-recognition-remains-incompletely-understood), [C19 §36](../chapters/19_sexual_reproduction_genetics.md#36-sequence-matching-in-homolog-pairing), [C19 §37](../chapters/19_sexual_reproduction_genetics.md#37-bivalent), [C19 §48](../chapters/19_sexual_reproduction_genetics.md#48-synaptonemal-complex), [C19 §49](../chapters/19_sexual_reproduction_genetics.md#49-axial-cores), [C19 §50](../chapters/19_sexual_reproduction_genetics.md#50-transverse-filaments), [C19 §52](../chapters/19_sexual_reproduction_genetics.md#52-synaptonemal-complex-disassembles-before-homolog-segregation) |

<a id="p-meiotic_crossing_over"></a>

### P.meiotic_crossing_over — Meiotic crossing-over

| Field | Record |
|---|---|
| Kind / scoped aliases | composite; specialized homologous recombination |
| Participants / location | Nonsister chromatids of homologous chromosomes and source repair machinery |
| Required state / input | Meiotic prophase with homolog context and initiated break |
| WorldState change / output | Break processing, pairing/synthesis and resolution exchange chromosome segments; chiasmata connect recombinant homologs with cohesion. |
| Trigger / termination | Source meiotic break program; resolved exchange |
| Energy / time / noise / limits | Uses homologous-recombination mechanism with meiotic role; number/location not universal and not exchange between sister chromatids by default. |
| Evidence | [C19 §44](../chapters/19_sexual_reproduction_genetics.md#44-homologous-recombination-during-meiosis), [C19 §45](../chapters/19_sexual_reproduction_genetics.md#45-meiotic-recombination-occurs-between-nonsister-chromatids), [C19 §46](../chapters/19_sexual_reproduction_genetics.md#46-crossing-over), [C19 §47](../chapters/19_sexual_reproduction_genetics.md#47-recombination-begins-with-dna-break-in-source-model), [C19 §52](../chapters/19_sexual_reproduction_genetics.md#52-synaptonemal-complex-disassembles-before-homolog-segregation), [C19 §53](../chapters/19_sexual_reproduction_genetics.md#53-chiasma), [C19 §55](../chapters/19_sexual_reproduction_genetics.md#55-crossovers-create-recombinant-chromatids), [C19 §56](../chapters/19_sexual_reproduction_genetics.md#56-human-oocyte-crossover-source-estimate), [C19 §57](../chapters/19_sexual_reproduction_genetics.md#57-crossing-over-has-two-functions-in-source), [C19 §58](../chapters/19_sexual_reproduction_genetics.md#58-chiasmata-mechanically-link-homologs), [C19 §59](../chapters/19_sexual_reproduction_genetics.md#59-chiasmata-resist-spindle-pulling), [C19 §60](../chapters/19_sexual_reproduction_genetics.md#60-cohesin-maintains-sister-pairing-in-meiosis-i) |

<a id="p-meiotic_orientation"></a>

### P.meiotic_orientation — Independent homolog-pair orientation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/pattern |
| Participants / location | Bivalents and meiosis-I spindle |
| Required state / input | Source biorientation-capable homolog pairs |
| WorldState change / output | Each pair's orientation determines which parental homolog goes to each pole. |
| Trigger / termination | Source spindle attachment; orientation fixed for segregation |
| Energy / time / noise / limits | Source 2^n count ignores crossing-over and depends on independent pair assortment; not physical recombination. |
| Evidence | [C19 §70](../chapters/19_sexual_reproduction_genetics.md#70-independent-assortment-of-homologs), [C19 §71](../chapters/19_sexual_reproduction_genetics.md#71-maternal-versus-paternal-choice-is-probabilistic), [C19 §72](../chapters/19_sexual_reproduction_genetics.md#72-independent-assortment-gamete-count) |

<a id="p-meiosis_i"></a>

### P.meiosis_i — Meiosis I homolog segregation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Bivalents, sister cohesion, sister kinetochore units and meiotic spindle |
| Required state / input | Source aligned homologs and controlled cohesion release |
| WorldState change / output | Arm cohesion is released; homologs separate while centromeric sister cohesion persists. |
| Trigger / termination | Source anaphase-I control; first division completion |
| Energy / time / noise / limits | Sister kinetochores act together in this source division; meiosis I is not mitosis. |
| Evidence | [C19 §39](../chapters/19_sexual_reproduction_genetics.md#39-meiosis-i-segregates-homologs), [C19 §58](../chapters/19_sexual_reproduction_genetics.md#58-chiasmata-mechanically-link-homologs), [C19 §59](../chapters/19_sexual_reproduction_genetics.md#59-chiasmata-resist-spindle-pulling), [C19 §60](../chapters/19_sexual_reproduction_genetics.md#60-cohesin-maintains-sister-pairing-in-meiosis-i), [C19 §61](../chapters/19_sexual_reproduction_genetics.md#61-sister-kinetochores-function-together-in-meiosis-i), [C19 §62](../chapters/19_sexual_reproduction_genetics.md#62-meiosis-i-attachment-logic), [C19 §63](../chapters/19_sexual_reproduction_genetics.md#63-anaphase-i-releases-chromosome-arms), [C19 §64](../chapters/19_sexual_reproduction_genetics.md#64-centromeric-cohesion-persists-through-meiosis-i) |

<a id="p-meiosis_ii"></a>

### P.meiosis_ii — Meiosis II sister segregation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Post-meiosis-I chromosomes and source spindle |
| Required state / input | No intervening S phase; retained sister pairs |
| WorldState change / output | Opposite-pole sister attachment and release of remaining cohesion separate sisters into haploid products. |
| Trigger / termination | Source second-division control; nuclear/cell division endpoint |
| Energy / time / noise / limits | Starting ploidy/ancestry differ from mitosis; no second DNA replication. |
| Evidence | [C19 §40](../chapters/19_sexual_reproduction_genetics.md#40-meiosis-ii-segregates-sisters), [C19 §66](../chapters/19_sexual_reproduction_genetics.md#66-no-significant-interphase-between-divisions), [C19 §67](../chapters/19_sexual_reproduction_genetics.md#67-meiosis-ii-kinetochore-logic), [C19 §68](../chapters/19_sexual_reproduction_genetics.md#68-centromeric-cohesin-is-removed-at-anaphase-ii) |

<a id="p-meiotic_nondisjunction"></a>

### P.meiotic_nondisjunction — Meiotic nondisjunction

| Field | Record |
|---|---|
| Kind / scoped aliases | lineage/failure pattern |
| Participants / location | Homolog or sister pair and meiotic apparatus |
| Required state / input | Source segregation failure |
| WorldState change / output | Chromosome allocation differs from expected haploid complement, with division-specific product patterns. |
| Trigger / termination | Failed segregation; altered gamete nuclear products |
| Energy / time / noise / limits | Not every product is identical or viable; nondisjunction is distinct from crossing-over. |
| Evidence | [C19 §75](../chapters/19_sexual_reproduction_genetics.md#75-every-meiosis-generates-novel-combinations), [C19 §76](../chapters/19_sexual_reproduction_genetics.md#76-nondisjunction), [C19 §78](../chapters/19_sexual_reproduction_genetics.md#78-meiosis-i-nondisjunction-source-diagram) |

<a id="p-fertilization"></a>

### P.fertilization — Fertilization and egg activation

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Source sperm, egg, extracellular coats and membranes |
| Required state / input | Compatible gametes and source species-specific interactions |
| WorldState change / output | Sperm/egg fusion and egg activation initiate zygotic state; parental nuclear material is incorporated with ancestry retained. |
| Trigger / termination | Source gamete interactions; activated zygotic state |
| Energy / time / noise / limits | Source mammalian zona and other species examples cannot be mixed into a universal sequence. |
| Evidence | [C19 §85](../chapters/19_sexual_reproduction_genetics.md#85-fertilization), [C19 §88](../chapters/19_sexual_reproduction_genetics.md#88-zona-pellucida), [C19 §89](../chapters/19_sexual_reproduction_genetics.md#89-fertilization-sequence), [C19 §91](../chapters/19_sexual_reproduction_genetics.md#91-polyspermy-must-be-prevented), [C19 §92](../chapters/19_sexual_reproduction_genetics.md#92-fertilization-ca2-wave), [C19 §93](../chapters/19_sexual_reproduction_genetics.md#93-zona-hardening), [C19 §94](../chapters/19_sexual_reproduction_genetics.md#94-ca2-also-promotes-egg-activation), [C19 §95](../chapters/19_sexual_reproduction_genetics.md#95-pronuclei), [C19 §96](../chapters/19_sexual_reproduction_genetics.md#96-pronuclear-union-completes-the-genome-merger) |

<a id="p-polyspermy_block"></a>

### P.polyspermy_block — Egg activation/polyspermy-block response

| Field | Record |
|---|---|
| Kind / scoped aliases | composite |
| Participants / location | Egg Ca2+ signaling and source cortical secretory machinery |
| Required state / input | Source fertilization-associated activation |
| WorldState change / output | Calcium-linked secretion modifies extracellular coat and reduces additional sperm entry in source example. |
| Trigger / termination | Egg activation; coat response completion |
| Energy / time / noise / limits | Not a universal perfectly effective barrier; reuse calcium signaling and exocytosis mechanisms. |
| Evidence | [C19 §91](../chapters/19_sexual_reproduction_genetics.md#91-polyspermy-must-be-prevented), [C19 §92](../chapters/19_sexual_reproduction_genetics.md#92-fertilization-ca2-wave), [C19 §93](../chapters/19_sexual_reproduction_genetics.md#93-zona-hardening), [C19 §94](../chapters/19_sexual_reproduction_genetics.md#94-ca2-also-promotes-egg-activation) |
