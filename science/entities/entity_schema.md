# Canonical entity schema

Status: `SOURCE_DERIVED` synthesis draft; schema decisions are `PROJECT_CONSTRAINT`. Source baseline: `48c8bb9`. This schema does not approve source drafts or instantiate a cell.

An entity record defines one reusable biological concept. A future instance has its own persistent `instance_id` and refers to this record by `type_id`. ATP in a nucleus and ATP in cytosol share a type, not an instance or concentration pool. A receptor role and a channel role may belong to the same protein; roles must not duplicate material.

| Field | Meaning and constraints |
|---|---|
| `id`, `canonical_name`, `aliases` | Stable `E.<snake_case>` type ID; one definition across the registry. Aliases are scoped terms, not automatic equivalence between different molecular forms or organisms. |
| `entity_class`, `record_kind` | Class describes chemistry/assembly/region/cell/tissue. Kind is `type`, `family`, `role`, `region`, `assembly`, or `state_profile`. A family is not an assertion that every member is interchangeable. |
| `exists_in` | Evidence-backed organism, cell type, cell state, compartment and biological phase. These are applicability constraints, not an exhaustive species inventory. Unspecified means unknown, never all organisms/cells. |
| `components`, `contains`, `part_of` | Molecular composition, spatial containment and structural membership are separate relations. An organelle, its membrane and its lumen are distinct records but are not three disjoint quantities to sum. |
| `adjacent_to`, `connected_to` | Adjacency alone gives no permeability or continuity. Connections specify `membrane_continuity`, `aqueous_continuity`, `gated_path`, `contact_site`, or `mechanical_link`, with endpoints and evidence. |
| `binds`, `transports`, `catalyzes` | Contextual capacities. Binding does not imply catalysis, transport or a permanent complex. Link transported species to both membrane sides; link catalysis to a process ID. |
| `geometry` | Real dimensions via quantitative bindings; topology, orientation and polarity via claims. Include membrane side, molecular sequence direction, filament ends and domain identity where relevant. No default sphere, diameter or coordinates. |
| `quantity` | Copy number, concentration and density are separate contextual observations. Declare counting unit (molecule, complex, protein species, connected organelle, genome copy), free/bound/total, volume/area basis and time. Never count a component again as an independent pool while it is assembled. |
| `state_variables` | Named biological properties: conformation, nucleotide occupancy, modifications, assembly, activity, compartment, ancestry, integrity, phase. Domain and unknown values must be explicit before execution. |
| `source_chapters`, `quantitative_sources` | File plus numbered section/table row or unique heading; preserve original source tags. Quantitative binding IDs point back to the quantitative canon, without copying its values into entity defaults. |
| `claims[]` | Each claim has `claim_id`, subject/predicate/object, qualifiers, source locator(s), verbatim source-status tag(s) or `not_explicit_in_passage`, synthesis status, uncertainty and conflict IDs. One source citation does not validate every possible attribute of an entity. |
| `provenance_status`, `uncertainty`, `notes` | Preserve source fact/model/scale/era/derived distinctions at claim level. Record incomplete evidence, competing models and verification needs. Approval is a separate field; it cannot be inferred from inclusion here. |
| `visualization` | Available representation tiers, potentially exaggerated attributes, display constraints and `do_not_interpret_as`. Real and display values remain separate. Availability metadata is permitted; active tier belongs only to ViewState. |

## Compact Markdown serialization

Each registry heading is `### E.id — Canonical name`. Its field table provides kind/aliases, context, biological definition and relations, state variables, evidence and limitations. These are compact human-readable claim bundles; a later converter must split independently qualified clauses into `claims[]`, preserving their citations and restrictions. `Relations` prose is an evidence summary, not automatically executable graph data. Explicit causal edges live in the dependency graph.

All records inherit the following **absence rules**, not biological defaults:

- Numeric dimensions, rates, quantities, exact sequences, coordinates and structures are `unspecified` unless a cited binding or source passage supplies them. Absence of a binding is not zero.
- `source_status` is read from each cited source passage, including enclosing conventions. Bare source prose is not silently relabeled `SOURCE_FACT`. The new summary itself is `SOURCE_DERIVED`; an explicit source model/era/verification restriction remains in force.
- `approval_status` is `not_promoted_by_synthesis`. Chapter front matter and quantitative draft status remain authoritative for review state.
- Real geometry is never replaced by a display value. Potential tiers are unresolved density/region, coarse assembly, components, and molecular structure **only when supported structural data exist**. A tier is a view of persistent identity, not a second entity.
- Color, opacity, clipping and visibility carry no biological state unless a separately specified biological variable is being displayed. Exaggeration requires a declared real quantity, display quantity, context and label; none is assigned here.

## Identity and conservation

Transport preserves instance identity. Assembly changes membership; it does not clone its members. Reactions transform material and record reactant/product lineage rather than calling chemically different products the same molecule. Replication creates daughter material with parent/template provenance. Cell division, organelle fission/fusion and cleavage require explicit parent/product lineage. A nucleosome seen as density, a bead, histones plus DNA, or structure retains the same biological instance.

State profiles such as `E.apoptotic_cell` apply to an existing cell. Region records such as a gene or centromere are intervals/roles on DNA; they are not extra free DNA molecules. Sister and homolog relationships require distinct instance IDs even though each relationship is defined once. See [ontology](../synthesis/ontology.md) and [process schema](../processes/process_schema.md).
