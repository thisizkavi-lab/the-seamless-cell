# Canonical process schema

Status: `SOURCE_DERIVED` synthesis draft; schema decisions are `PROJECT_CONSTRAINT`. Source baseline: `48c8bb9`. A process defines a change in biological WorldState, not a renderer instruction. Mechanisms lacking evidence remain incomplete and cannot be executed by guessing missing parameters.

| Field | Meaning and constraints |
|---|---|
| `id`, `canonical_name`, `aliases` | Stable `P.<snake_case>` ID. A pathway may compose canonical subprocesses; the same reaction must not execute twice because both pathway and step are selected. |
| `process_kind` | `primitive`, `composite`, `regulatory`, `lineage`, or `experimental_material`. This is a synthesis organization choice, not a source classification. |
| `participants`, `location` | Entity types plus participant roles and actual future instance IDs, compartment/membrane sides, organism, cell type/state and phase. An empty scope is unknown. |
| `required_state`, `inputs`, `outputs` | Preconditions and material/state inputs; material/state outputs. Enzymes, templates and scaffolds are generally participants, not automatically consumed. Explicit stoichiometry needs source support. |
| `state_transitions` | Before → event → after; indicate changes to sequence, chemistry, membership, location, quantity, topology, activity or lineage. Transport updates both source and destination. |
| `trigger`, `termination_condition` | Conditions enabling initiation and ending/stalling/reversing activity. A source that describes an event without kinetics does not authorize a timer. |
| `biological_time`, `quantitative_rates` | Refer to bindings with units, event definition and context. Rates, delays, lifetimes and cycle periods are different quantities. Playback/camera time cannot substitute for them. |
| `energy_source` | ATP/GTP hydrolysis, redox/gradient coupling, light, thermal motion, or `not_specified`. Include carrier regeneration and gradient depletion when supported. Do not invent per-event ATP costs. |
| `stochasticity` | Source-supported qualitative randomness or measured distribution with context. Unknown probability is not 0.5. A schematic switch is not evidence of deterministic kinetics. |
| `dependencies`, `inhibitors`, `regulators` | Typed graph edges with activation/inhibition/mechanical/material/logical distinctions. Necessary is not sufficient. Not every dependency is a separate chronological phase. |
| `source_chapters`, `quantitative_sources`, `provenance` | Claim-level source locators and inherited tags, separate synthesis/approval status; retain source-era and source-model restrictions. |
| `uncertainty`, `visualization_constraints`, `do_not_infer` | Missing mechanism, alternative model and verification holds; representation must show the biological transition faithfully without adding unsupported events. |

## Compact Markdown serialization

Each `### P.id — Name` has fields for kind/aliases, participants/location, requirements/input, WorldState change/output, trigger/end, energy/time/noise, and evidence/limits. Each row is an inspectable claim bundle; a later converter must split clauses into separately qualified claims. Citation numbers identify chapter sections, not original textbook page numbers.

Inherited fields: quantitative rates, exact durations, spatial coordinates, stochastic distributions, inhibitors and regulator lists are `unspecified` unless explicitly supplied. Named regulators are partial source inventories. `not_specified` is never a claim that energy, regulation or noise is absent. All summaries are `SOURCE_DERIVED`, with source `SOURCE_MODEL`, `SOURCE_SCALE`, `VERIFY_QUANT`, `SOURCE_ERA_STATEMENT` and other restrictions retained. Approval is `not_promoted_by_synthesis`.

Material transitions require a conservation ledger at implementation: reactants/products, compartment transfers, template-to-copy lineage, assembly membership and relevant carbon/electron/phosphate provenance. These documents do not provide a fully balanced reaction database; abbreviated pathway summaries must not be executed as complete mass-balanced chemical equations. Proton/water conventions require the source reaction context.

## Composition and concurrency

`P.translation` and ER insertion can overlap on the same nascent chain. A pathway dependency is not permission to run them as two disconnected copies. A composite activates/references its subprocess events; only leaf events commit material changes. Primitive here means the registry's chosen resolution, not an assertion that a molecular event is physically indivisible.

For motor transport, the supported pattern is cargo bound through a motor/adaptor to a polarized filament; ATP-linked stepping changes cargo position along that filament. “Move a vesicle mesh toward nucleus” contains neither a track-relative direction nor a biological mechanism and is invalid.

Experimental material transformations have a distinct specimen/assay branch. PCR changes reaction-tube DNA; it does not change the original cell's genome. Sequencing base calls, read coverage, alignments, phylogenetic trees and GWAS associations are AnalysisState outputs and are not registered as native cell processes. Their underlying extraction, binding, synthesis and perturbations can use the same canonical biological mechanisms.

BiologicalTime describes living events. ExperimentalTime may track specimen preparation and chemical cycles; AnalysisTime tracks computation. PlaybackTime controls presentation, and CameraTime controls observation. None advances another clock implicitly. See [guardrails](../synthesis/implementation_guardrails.md).
