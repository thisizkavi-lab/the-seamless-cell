# Molecular reactions

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 12 canonical records. Read the [process schema](process_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="p-diffusion"></a>

### P.diffusion — Diffusion

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive; Brownian displacement and population transport |
| Participants / location | Molecules/particles in specified aqueous phase or membrane leaflet; medium/geometry explicit |
| Required state / input | Mobile material; thermal environment and allowed paths |
| WorldState change / output | Positions change stochastically; population distributions can relax while individual motion continues at net equilibrium. |
| Trigger / termination | Thermal motion; confinement/binding changes mobility, not a preset destination |
| Energy / time / noise / limits | Thermal; D/time from contextual bindings only. Curl-noise or coordinated motion is not evidence of diffusion. |
| Evidence | [C03 §104](../chapters/03_energy_catalysis_biosynthesis.md#104-diffusion), [C03 §107](../chapters/03_energy_catalysis_biosynthesis.md#107-protein-diffusion-is-slower-than-small-molecule-diffusion), [C11 §73](../chapters/11_membrane_structure.md#73-lateral-diffusion), [C11 §82](../chapters/11_membrane_structure.md#82-membrane-fluidity-is-biological-not-decorative-motion), [C12 §60](../chapters/12_transport_across_cell_membranes.md#60-passive-transport-is-bidirectional-microscopically), [C12 §61](../chapters/12_transport_across_cell_membranes.md#61-passive-equilibrium) |

<a id="p-molecular_binding"></a>

### P.molecular_binding — Molecular association and dissociation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive; binding |
| Participants / location | Specified partners such as protein/ligand, DNA/regulator or receptor/cargo in compatible locations |
| Required state / input | Accessible matching interaction sites and partner availability |
| WorldState change / output | Bound-complex membership/occupancy changes reversibly while molecular identities persist. |
| Trigger / termination | Encounter and affinity context; dissociation ends each bound state |
| Energy / time / noise / limits | Thermal/interaction free energy; no universal affinity or off-rate. Binding alone is not catalysis. |
| Evidence | [C03 §51](../chapters/03_energy_catalysis_biosynthesis.md#51-complex-association-equilibrium), [C03 §52](../chapters/03_energy_catalysis_biosynthesis.md#52-collision-dependence-of-association), [C04 §91](../chapters/04_protein_structure_function.md#91-all-proteins-function-through-interactions), [C16 §259](../chapters/16_cell_signaling.md#259-project-rule--receptor-occupancy-is-dynamic) |

<a id="p-catalysis"></a>

### P.catalysis — Enzyme catalysis

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive/role pattern |
| Participants / location | Enzyme, substrates/products in cited reaction compartment |
| Required state / input | Active enzyme and compatible substrate state |
| WorldState change / output | Substrate converts to product through a catalytic pathway; catalyst is reusable over the cycle. |
| Trigger / termination | Substrate binding and catalytic conditions; product release/reset or inhibition |
| Energy / time / noise / limits | Activation barrier reduced; overall ΔG/equilibrium is not changed by enzyme. Rate law requires context. |
| Evidence | [C03 §35](../chapters/03_energy_catalysis_biosynthesis.md#35-enzymes-are-catalysts), [C03 §36](../chapters/03_energy_catalysis_biosynthesis.md#36-enzymes-do-not-change-δg), [C03 §37](../chapters/03_energy_catalysis_biosynthesis.md#37-enzymes-accelerate-forward-and-reverse-reactions), [C03 §39](../chapters/03_energy_catalysis_biosynthesis.md#39-enzymes-are-reusable), [C03 §40](../chapters/03_energy_catalysis_biosynthesis.md#40-enzyme-active-site), [C04 §105](../chapters/04_protein_structure_function.md#105-enzymes-bind-substrates-and-convert-them) |

<a id="p-hydrolysis"></a>

### P.hydrolysis — Hydrolysis

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive; reaction family |
| Participants / location | Specified substrate, water and catalyst where applicable |
| Required state / input | Source-defined susceptible linkage and conditions |
| WorldState change / output | Chemical linkage is cleaved with water participating; products and atom provenance change. |
| Trigger / termination | Reaction conditions; completion/product release or equilibrium |
| Energy / time / noise / limits | Full reaction free energy matters; bond breaking alone is not the energy source. |
| Evidence | [C02 §59](../chapters/02_chemical_components.md#59-condensation-and-hydrolysis), [C03 §61](../chapters/03_energy_catalysis_biosynthesis.md#61-hydrolysis), [C03 §94](../chapters/03_energy_catalysis_biosynthesis.md#94-condensation-and-hydrolysis-in-chapter-3), [C13 §66](../chapters/13_how_cells_obtain_energy_from_food.md#66-high-energy-bond-wording) |

<a id="p-condensation"></a>

### P.condensation — Condensation and polymer-linkage formation

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive; reaction family |
| Participants / location | Specified monomers/activated substrates and assembly context |
| Required state / input | Correct reactants and source-supported activation/coupling |
| WorldState change / output | Covalent product/linkage forms with source-specific byproducts; monomer residue membership changes. |
| Trigger / termination | Substrate activation and compatible catalyst; product/chain completion |
| Energy / time / noise / limits | Not every linkage uses identical water/ATP bookkeeping; abbreviated reactions require balancing before execution. |
| Evidence | [C02 §59](../chapters/02_chemical_components.md#59-condensation-and-hydrolysis), [C02 §80](../chapters/02_chemical_components.md#80-peptide-bond), [C02 §91](../chapters/02_chemical_components.md#91-nucleic-acid-polymerization), [C03 §94](../chapters/03_energy_catalysis_biosynthesis.md#94-condensation-and-hydrolysis-in-chapter-3), [C03 §95](../chapters/03_energy_catalysis_biosynthesis.md#95-monomer-activation-precedes-polymer-incorporation) |

<a id="p-redox_transfer"></a>

### P.redox_transfer — Oxidation–reduction transfer

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive; redox |
| Participants / location | Electron donor, acceptor and specified cofactors/compartment |
| Required state / input | Compatible redox states and reaction partners |
| WorldState change / output | Donor oxidizes as acceptor reduces; electron and any coupled proton bookkeeping remain separate. |
| Trigger / termination | Energetic/enzymatic conditions; donor depletion or downstream acceptor state |
| Energy / time / noise / limits | Actual driving force depends on concentrations and environment; oxidation does not require O2 addition. |
| Evidence | [C03 §23](../chapters/03_energy_catalysis_biosynthesis.md#23-oxidation-and-reduction), [C03 §24](../chapters/03_energy_catalysis_biosynthesis.md#24-oxidation-and-reduction-always-occur-together), [C14 §93](../chapters/14_energy_generation_mitochondria_chloroplasts.md#93-redox-reaction), [C14 §95](../chapters/14_energy_generation_mitochondria_chloroplasts.md#95-redox-potential), [C14 §110](../chapters/14_energy_generation_mitochondria_chloroplasts.md#110-concentrations-alter-actual-redox-driving-force) |

<a id="p-atp_hydrolysis"></a>

### P.atp_hydrolysis — ATP hydrolysis

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | [E.atp](../entities/molecular_entities.md#e-atp), water, enzyme/context with [E.adp](../entities/molecular_entities.md#e-adp) and [E.phosphate](../entities/molecular_entities.md#e-phosphate) or explicitly specified AMP/PPi route |
| Required state / input | ATP availability and a specified coupled reaction |
| WorldState change / output | ATP-derived chemical species change; coupled work requires a documented mechanism. |
| Trigger / termination | Catalytic state; substrate depletion/reset |
| Energy / time / noise / limits | Physiological versus standard ΔG separate. ATP→ADP and ATP→AMP routes retain different accounting. |
| Evidence | [C03 §65](../chapters/03_energy_catalysis_biosynthesis.md#65-atp-hydrolysis), [C03 §72](../chapters/03_energy_catalysis_biosynthesis.md#72-coupling-atp-hydrolysis-to-biosynthesis), [C03 §99](../chapters/03_energy_catalysis_biosynthesis.md#99-atp--amp--pyrophosphate-route), [C13 §66](../chapters/13_how_cells_obtain_energy_from_food.md#66-high-energy-bond-wording) |

<a id="p-gtp_hydrolysis"></a>

### P.gtp_hydrolysis — GTP hydrolysis

| Field | Record |
|---|---|
| Kind / scoped aliases | primitive |
| Participants / location | [E.gtp](../entities/molecular_entities.md#e-gtp) bound to specified GTPase/tubulin/machinery |
| Required state / input | Correct nucleotide/catalytic state |
| WorldState change / output | GTP-derived GDP/Pi and protein/polymer state change according to the source mechanism. |
| Trigger / termination | Intrinsic/stimulated hydrolysis; reset via exchange where specified |
| Energy / time / noise / limits | Distinct from ATP motor stepping and covalent protein phosphorylation; no universal timer. |
| Evidence | [C16 §59](../chapters/16_cell_signaling.md#59-gtp-binding-switches), [C16 §60](../chapters/16_cell_signaling.md#60-intrinsic-gtpase-activity), [C16 §62](../chapters/16_cell_signaling.md#62-gap), [C17 §71](../chapters/17_cytoskeleton.md#71-gtp-hydrolysis-after-polymerization), [C15 §131](../chapters/15_intracellular_compartments_protein_transport.md#131-dynamin-gtp-hydrolysis) |

<a id="p-gtpase_exchange"></a>

### P.gtpase_exchange — GTPase nucleotide exchange

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/primitive |
| Participants / location | [E.gtpase](../entities/molecular_entities.md#e-gtpase), [E.gdp](../entities/molecular_entities.md#e-gdp), [E.gtp](../entities/molecular_entities.md#e-gtp) and appropriate [E.gef](../entities/molecular_entities.md#e-gef) |
| Required state / input | GDP-bound switch and available replacement nucleotide |
| WorldState change / output | GDP dissociates and GTP binds; protein switch state changes without phosphorylation of GDP. |
| Trigger / termination | GEF or source GPCR activity; exchange completion and later hydrolysis |
| Energy / time / noise / limits | Nucleotide availability biases occupancy; unknown rates not inferred from schematic. |
| Evidence | [C16 §61](../chapters/16_cell_signaling.md#61-gef), [C16 §83](../chapters/16_cell_signaling.md#83-gpcr-acts-as-nucleotide-exchange-catalyst), [C16 §84](../chapters/16_cell_signaling.md#84-cytosolic-gtp-drives-replacement), [C15 §70](../chapters/15_intracellular_compartments_protein_transport.md#70-ran-gef) |

<a id="p-protein_phosphorylation"></a>

### P.protein_phosphorylation — Protein phosphorylation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/primitive |
| Participants / location | [E.kinase](../entities/molecular_entities.md#e-kinase), target protein/site, ATP in named compartment |
| Required state / input | Active kinase, accessible specified site and donor |
| WorldState change / output | Target covalent phosphate state changes, affecting activity/partner binding according to that site. |
| Trigger / termination | Kinase activity; opposing phosphatase/turnover changes state |
| Energy / time / noise / limits | ATP-linked transfer; phosphorylation can activate or inhibit. No universal on-switch. |
| Evidence | [C04 §157](../chapters/04_protein_structure_function.md#157-protein-phosphorylation), [C04 §160](../chapters/04_protein_structure_function.md#160-phosphorylation-can-activate-or-inhibit), [C04 §164](../chapters/04_protein_structure_function.md#164-phosphorylation-can-create-docking-sites), [C16 §53](../chapters/16_cell_signaling.md#53-phosphorylation-switches), [C16 §54](../chapters/16_cell_signaling.md#54-phosphorylation-can-activate-or-inhibit), [C16 §58](../chapters/16_cell_signaling.md#58-tyrosine-kinases) |

<a id="p-protein_dephosphorylation"></a>

### P.protein_dephosphorylation — Protein dephosphorylation

| Field | Record |
|---|---|
| Kind / scoped aliases | regulatory/primitive |
| Participants / location | [E.phosphatase](../entities/molecular_entities.md#e-phosphatase) and specified phosphorylated target |
| Required state / input | Accessible target/site and active phosphatase |
| WorldState change / output | Target phosphate is removed; activity/assembly outcome remains target-specific. |
| Trigger / termination | Phosphatase activity; target depletion or opposing kinase |
| Energy / time / noise / limits | No universal inhibition sign; Cdc25 activates source M-Cdk through this chemistry. |
| Evidence | [C16 §53](../chapters/16_cell_signaling.md#53-phosphorylation-switches), [C16 §55](../chapters/16_cell_signaling.md#55-kinasephosphatase-balance), [C18 §53](../chapters/18_cell_cycle.md#53-cdc25), [C18 §59](../chapters/18_cell_cycle.md#59-protein-phosphatases-reverse-cdk-effects), [C18 §63](../chapters/18_cell_cycle.md#63-mitotic-exit-reverses-the-balance) |

<a id="p-molecular_self_assembly"></a>

### P.molecular_self_assembly — Molecular self-assembly

| Field | Record |
|---|---|
| Kind / scoped aliases | composite/pattern |
| Participants / location | Matching molecular components in defined solvent/context |
| Required state / input | Compatible interaction surfaces and component availability |
| WorldState change / output | Assembly membership/topology emerges through noncovalent interactions; no duplicate components created. |
| Trigger / termination | Association conditions; disassembly or equilibrium |
| Energy / time / noise / limits | Thermodynamic/kinetic context; fixed-composition complexes and dynamic condensates differ. |
| Evidence | [C04 §76](../chapters/04_protein_structure_function.md#76-self-organization-of-macromolecular-structures), [C04 §187](../chapters/04_protein_structure_function.md#187-phase-separation), [C04 §192](../chapters/04_protein_structure_function.md#192-condensates-and-fixed-composition-machines-are-distinct-concepts), [C11 §61](../chapters/11_membrane_structure.md#61-bilayer-formation-resolves-amphipathic-conflict), [C11 §68](../chapters/11_membrane_structure.md#68-closed-compartment-formation) |
