# Molecular entities

Status: `SOURCE_DERIVED` synthesis draft from baseline `48c8bb9`. 154 canonical records. Read the [entity schema](entity_schema.md) for inherited fields, claim-level provenance and absence rules. Source approval is not promoted by this registry.

Quantitative observations are linked through [quantitative bindings](../synthesis/quantitative_bindings.md); no unbound number is a default. [Conflicts](../synthesis/cross_chapter_conflicts.md) and [guardrails](../synthesis/implementation_guardrails.md) restrict interpretation. Unspecified organism, cell state, measurement conditions or kinetics remain unknown.

<a id="e-water"></a>

### E.water — Water

| Field | Record |
|---|---|
| Kind / scoped aliases | type; H2O |
| Exists in / context | Aqueous cellular and extracellular contexts; assay solutions separately scoped |
| Biology / relations | Solvent and reaction participant; transported water changes compartment volume and solute concentrations. |
| State variables | compartment; amount; hydrogen-bond environment |
| Evidence | [C02 §23](../chapters/02_chemical_components.md#23-water-is-the-dominant-chemical-environment), [C02 §24](../chapters/02_chemical_components.md#24-water-polarity), [C02 §32](../chapters/02_chemical_components.md#32-acids-bases-h-hydronium-hydroxyl), [C12 §87](../chapters/12_transport_across_cell_membranes.md#87-osmosis), [C13 §87](../chapters/13_how_cells_obtain_energy_from_food.md#87-oxygen-atoms-in-co2) |
| Uncertainty / display limits | Hydration networks are dynamic; no rigid permanent water cage. |

<a id="e-proton"></a>

### E.proton — Aqueous proton

| Field | Record |
|---|---|
| Kind / scoped aliases | type; H+ |
| Exists in / context | Named aqueous compartments and membrane sides |
| Biology / relations | Proton-transfer accounting in water; participates in pH and coupled reactions. |
| State variables | compartment; free/associated convention; proton-transfer state |
| Evidence | [C02 §32](../chapters/02_chemical_components.md#32-acids-bases-h-hydronium-hydroxyl), [C02 §35](../chapters/02_chemical_components.md#35-ph), [C14 §88](../chapters/14_energy_generation_mitochondria_chloroplasts.md#88-protons-are-unusual-ions), [C14 §89](../chapters/14_energy_generation_mitochondria_chloroplasts.md#89-water-is-a-proton-reservoir) |
| Uncertainty / display limits | H+ shorthand does not imply isolated naked particles or one immutable hydrated species. |

<a id="e-sodium"></a>

### E.sodium — Sodium ion

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Na+ |
| Exists in / context | Cytosol/extracellular fluid in representative mammalian transport; other contexts require sources |
| Biology / relations | Transported by channels and Na+/K+ ATPase; contributes to solute-specific electrochemical state. |
| State variables | free/bound; hydration; compartment; amount |
| Evidence | [C12 §38](../chapters/12_transport_across_cell_membranes.md#38-key-cellular-ions), [C12 §41](../chapters/12_transport_across_cell_membranes.md#41-mammalian-extracellular-cation-hierarchy), [C12 §118](../chapters/12_transport_across_cell_membranes.md#118-na-pump-direction) |
| Uncertainty / display limits | Concentration and current direction are contextual. |

<a id="e-potassium"></a>

### E.potassium — Potassium ion

| Field | Record |
|---|---|
| Kind / scoped aliases | type; K+ |
| Exists in / context | Representative intracellular/extracellular pools |
| Biology / relations | Channel permeation, pump exchange and electrical behavior depend on both chemical and electrical gradients. |
| State variables | hydration; compartment; amount |
| Evidence | [C12 §42](../chapters/12_transport_across_cell_membranes.md#42-mammalian-intracellular-cation-hierarchy), [C12 §73](../chapters/12_transport_across_cell_membranes.md#73-k-gradient-components-oppose-one-another), [C12 §118](../chapters/12_transport_across_cell_membranes.md#118-na-pump-direction) |
| Uncertainty / display limits | A concentration gradient alone does not determine flux. |

<a id="e-calcium"></a>

### E.calcium — Calcium ion

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Ca2+ |
| Exists in / context | Resting/activated cytosol, ER/SR stores and extracellular pools in cited cells |
| Biology / relations | One species reused in transport, signaling, secretion, adhesion and contraction. |
| State variables | free/bound/sequestered; compartment; local concentration |
| Evidence | [C12 §137](../chapters/12_transport_across_cell_membranes.md#137-ca2-is-a-signaling-ion), [C12 §141](../chapters/12_transport_across_cell_membranes.md#141-ca2-pumps-remove-ca2-from-cytosol), [C16 §128](../chapters/16_cell_signaling.md#128-ca2-is-a-broadly-used-second-messenger), [C16 §135](../chapters/16_cell_signaling.md#135-ca2-pumps-maintain-low-cytosolic-ca2), [C17 §245](../chapters/17_cytoskeleton.md#245-ca2-activation-of-skeletal-muscle), [C20 §105](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#105-cadherin) |
| Uncertainty / display limits | Free cytosolic concentration is not total cellular calcium. |

<a id="e-chloride"></a>

### E.chloride — Chloride ion

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Cl- |
| Exists in / context | Representative mammalian transport and synaptic contexts |
| Biology / relations | Charged solute transported through suitable channels; response depends on electrochemical conditions. |
| State variables | hydration; compartment; amount |
| Evidence | [C12 §24](../chapters/12_transport_across_cell_membranes.md#24-charged-substances-cross-protein-free-bilayers-extremely-poorly), [C12 §38](../chapters/12_transport_across_cell_membranes.md#38-key-cellular-ions), [C12 §362](../chapters/12_transport_across_cell_membranes.md#362-inhibitory-receptors) |
| Uncertainty / display limits | Do not assign an intrinsic inhibitory effect independent of receptor and cell context. |

<a id="e-magnesium"></a>

### E.magnesium — Magnesium ion

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Mg2+ |
| Exists in / context | Aqueous and protein/nucleic-acid-associated cellular contexts |
| Biology / relations | Free and bound pools differ; participates in molecular interactions in cited chemistry/transport. |
| State variables | free/bound; hydration; compartment |
| Evidence | [C02 §22](../chapters/02_chemical_components.md#22-ions-in-water), [C12 §24](../chapters/12_transport_across_cell_membranes.md#24-charged-substances-cross-protein-free-bilayers-extremely-poorly), [C12 §49](../chapters/12_transport_across_cell_membranes.md#49-total-cellular-mg2) |
| Uncertainty / display limits | Bare-ion radius, hydrated extent and total concentration are different quantities. |

<a id="e-bicarbonate"></a>

### E.bicarbonate — Bicarbonate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; HCO3- |
| Exists in / context | Transport discussion and algal pyrenoid context |
| Biology / relations | Charged solute; source pyrenoid carbonic anhydrase route supplies local CO2. |
| State variables | compartment; amount; reaction membership |
| Evidence | [C12 §24](../chapters/12_transport_across_cell_membranes.md#24-charged-substances-cross-protein-free-bilayers-extremely-poorly), [C14 §195](../chapters/14_energy_generation_mitochondria_chloroplasts.md#195-pyrenoid-carbon-concentration) |
| Uncertainty / display limits | Do not infer a universal bicarbonate transporter or pH model. |

<a id="e-oxygen"></a>

### E.oxygen — Molecular oxygen

| Field | Record |
|---|---|
| Kind / scoped aliases | type; O2 |
| Exists in / context | Bilayer diffusion; aerobic respiratory endpoint; oxygenic photosynthesis |
| Biology / relations | Distinct molecular species consumed at terminal respiratory reduction and released from water splitting. |
| State variables | compartment; amount; redox reaction membership |
| Evidence | [C12 §4](../chapters/12_transport_across_cell_membranes.md#4-some-small-gases-cross-directly), [C14 §124](../chapters/14_energy_generation_mitochondria_chloroplasts.md#124-o2-reduction-stoichiometry), [C14 §180](../chapters/14_energy_generation_mitochondria_chloroplasts.md#180-water-splitting-net-source-stoichiometry) |
| Uncertainty / display limits | Not an input to every oxidation step; superoxide is distinct. |

<a id="e-carbon_dioxide"></a>

### E.carbon_dioxide — Carbon dioxide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; CO2 |
| Exists in / context | Metabolic production, bilayer diffusion and photosynthetic fixation |
| Biology / relations | Carbon-bearing gas participating in oxidation outputs and carbon fixation. |
| State variables | compartment; carbon provenance; amount |
| Evidence | [C12 §4](../chapters/12_transport_across_cell_membranes.md#4-some-small-gases-cross-directly), [C13 §83](../chapters/13_how_cells_obtain_energy_from_food.md#83-one-turn-output), [C14 §191](../chapters/14_energy_generation_mitochondria_chloroplasts.md#191-rubisco-reaction) |
| Uncertainty / display limits | Photosynthetic oxygen is not derived from this molecule in the source pathway. |

<a id="e-phosphate"></a>

### E.phosphate — Inorganic phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Pi |
| Exists in / context | Named metabolic and aqueous pools |
| Biology / relations | Phosphate input/output in hydrolysis, substrate phosphorylation and ATP synthesis. |
| State variables | protonation convention; compartment; free/bound |
| Evidence | [C03 §65](../chapters/03_energy_catalysis_biosynthesis.md#65-atp-hydrolysis), [C13 §46](../chapters/13_how_cells_obtain_energy_from_food.md#46-step-6-inorganic-phosphate), [C14 §6](../chapters/14_energy_generation_mitochondria_chloroplasts.md#6-atp-synthase) |
| Uncertainty / display limits | No unqualified fixed charge or phosphate-transfer energy. |

<a id="e-pyrophosphate"></a>

### E.pyrophosphate — Inorganic pyrophosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; PPi |
| Exists in / context | Nucleotide polymerization and activation reactions |
| Biology / relations | Product whose hydrolysis contributes directional coupling in cited reactions. |
| State variables | compartment; amount; hydrolysis state |
| Evidence | [C03 §99](../chapters/03_energy_catalysis_biosynthesis.md#99-atp--amp--pyrophosphate-route), [C03 §100](../chapters/03_energy_catalysis_biosynthesis.md#100-pyrophosphate-hydrolysis-provides-directional-drive), [C06 §39](../chapters/06_dna_replication_repair.md#39-pyrophosphate-hydrolysis) |
| Uncertainty / display limits | Distinct from Pi; preserve chemical bookkeeping. |

<a id="e-atp"></a>

### E.atp — Adenosine triphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; ATP |
| Exists in / context | Distinct compartment pools across metabolism, motors, transport and biosynthesis |
| Biology / relations | Nucleotide used in phosphoryl/energy coupling; chemically distinct from ADP and AMP. |
| State variables | compartment; free/bound; complexed state; amount |
| Evidence | [C03 §63](../chapters/03_energy_catalysis_biosynthesis.md#63-atp-as-an-activated-carrier), [C03 §65](../chapters/03_energy_catalysis_biosynthesis.md#65-atp-hydrolysis), [C03 §70](../chapters/03_energy_catalysis_biosynthesis.md#70-atp-powers-more-than-biosynthesis), [C17 §97](../chapters/17_cytoskeleton.md#97-motor-proteins-convert-atp-into-directed-motion) |
| Uncertainty / display limits | No universal pool, charge, hydrolysis energy or display size. |

<a id="e-adp"></a>

### E.adp — Adenosine diphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; ADP |
| Exists in / context | Contextual ATP-regeneration and transport pools |
| Biology / relations | ATP hydrolysis product and phosphorylation substrate; exchanged across mitochondrial inner membrane by a specific carrier. |
| State variables | compartment; free/bound; amount |
| Evidence | [C03 §67](../chapters/03_energy_catalysis_biosynthesis.md#67-atpadp-cycle), [C14 §68](../chapters/14_energy_generation_mitochondria_chloroplasts.md#68-adpatp-exchange) |
| Uncertainty / display limits | Not the same molecular form as ATP. |

<a id="e-amp"></a>

### E.amp — Adenosine monophosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; AMP |
| Exists in / context | Activation reactions and cAMP degradation |
| Biology / relations | Distinct adenine nucleotide in ATP-to-AMP reactions and energy-state regulation. |
| State variables | compartment; amount; binding |
| Evidence | [C03 §99](../chapters/03_energy_catalysis_biosynthesis.md#99-atp--amp--pyrophosphate-route), [C16 §103](../chapters/16_cell_signaling.md#103-camp-phosphodiesterase), [C13 §118](../chapters/13_how_cells_obtain_energy_from_food.md#118-pfk-activation) |
| Uncertainty / display limits | ATP→AMP is not equivalent to ATP→ADP accounting. |

<a id="e-gtp"></a>

### E.gtp — Guanosine triphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; GTP |
| Exists in / context | GTPase switches, tubulin, translation and metabolic contexts |
| Biology / relations | Distinct nucleotide used as substrate/bound switch state; can transfer phosphate to ADP in the cited TCA output route. |
| State variables | free/bound; protein partner; compartment |
| Evidence | [C13 §84](../chapters/13_how_cells_obtain_energy_from_food.md#84-gtp), [C16 §59](../chapters/16_cell_signaling.md#59-gtp-binding-switches), [C17 §70](../chapters/17_cytoskeleton.md#70-tubulin-gtp-state) |
| Uncertainty / display limits | Bound GTP on a protein is not a covalent protein phosphate. |

<a id="e-gdp"></a>

### E.gdp — Guanosine diphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; GDP |
| Exists in / context | GTPase, tubulin and metabolic pools |
| Biology / relations | Distinct nucleotide form released/exchanged during GTPase and tubulin recycling. |
| State variables | free/bound; protein partner; compartment |
| Evidence | [C16 §60](../chapters/16_cell_signaling.md#60-intrinsic-gtpase-activity), [C16 §61](../chapters/16_cell_signaling.md#61-gef), [C17 §76](../chapters/17_cytoskeleton.md#76-gdp-tubulin-recycling), [C13 §96](../chapters/13_how_cells_obtain_energy_from_food.md#96-tca-step-5) |
| Uncertainty / display limits | GEF-mediated exchange does not phosphorylate GDP. |

<a id="e-nad_plus"></a>

### E.nad_plus — Oxidized nicotinamide adenine dinucleotide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; NAD+ |
| Exists in / context | Compartment-specific redox pairs in cited metabolism |
| Biology / relations | Oxidized partner of NADH; required to sustain glycolytic oxidation. |
| State variables | compartment; free/bound; amount |
| Evidence | [C13 §55](../chapters/13_how_cells_obtain_energy_from_food.md#55-nad-regeneration-requirement), [C14 §42](../chapters/14_energy_generation_mitochondria_chloroplasts.md#42-nadh-electron-donation-chemistry) |
| Uncertainty / display limits | Do not merge with NADP+ or infer free inner-membrane passage. |

<a id="e-nadh"></a>

### E.nadh — Reduced nicotinamide adenine dinucleotide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; NADH |
| Exists in / context | Cytosolic and mitochondrial redox pools treated separately |
| Biology / relations | Electron donor in source catabolic routes; reducing-equivalent transfer differs from molecule transport. |
| State variables | compartment; amount; enzyme binding |
| Evidence | [C03 §84](../chapters/03_energy_catalysis_biosynthesis.md#84-nadh-and-nadph-have-different-cellular-roles), [C13 §152](../chapters/13_how_cells_obtain_energy_from_food.md#152-cytosolic-nadh-caveat), [C14 §85](../chapters/14_energy_generation_mitochondria_chloroplasts.md#85-cytosolic-nadh-yields-less-in-source-accounting) |
| Uncertainty / display limits | Inner mitochondrial membrane is not freely permeable to NADH. |

<a id="e-nadp_plus"></a>

### E.nadp_plus — Oxidized nicotinamide adenine dinucleotide phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; NADP+ |
| Exists in / context | Biosynthetic/photosynthetic redox contexts |
| Biology / relations | Oxidized partner reduced by FNR in photosynthesis. |
| State variables | compartment; free/bound; amount |
| Evidence | [C03 §81](../chapters/03_energy_catalysis_biosynthesis.md#81-nadph-cycle), [C03 §83](../chapters/03_energy_catalysis_biosynthesis.md#83-nadh-versus-nadph-structural-difference), [C14 §176](../chapters/14_energy_generation_mitochondria_chloroplasts.md#176-fnr) |
| Uncertainty / display limits | Unqualified quantitative NADP dimensions do not uniquely identify this redox form. |

<a id="e-nadph"></a>

### E.nadph — Reduced nicotinamide adenine dinucleotide phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; NADPH |
| Exists in / context | Biosynthesis and chloroplast stroma in cited contexts |
| Biology / relations | Reducing carrier for source biosynthetic/carbon-fixation reactions. |
| State variables | compartment; enzyme binding; amount |
| Evidence | [C03 §81](../chapters/03_energy_catalysis_biosynthesis.md#81-nadph-cycle), [C03 §82](../chapters/03_energy_catalysis_biosynthesis.md#82-nadph-as-reducing-power-for-biosynthesis), [C03 §84](../chapters/03_energy_catalysis_biosynthesis.md#84-nadh-and-nadph-have-different-cellular-roles), [C14 §177](../chapters/14_energy_generation_mitochondria_chloroplasts.md#177-photosynthetic-nadph-role), [C14 §203](../chapters/14_energy_generation_mitochondria_chloroplasts.md#203-calvin-cycle-nadph-cost) |
| Uncertainty / display limits | Predominant role is not an exclusive universal rule; separate from NADH. |

<a id="e-fad"></a>

### E.fad — Flavin adenine dinucleotide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; FAD |
| Exists in / context | Enzyme-associated metabolic redox contexts |
| Biology / relations | Oxidized partner of FADH2 in source metabolism. |
| State variables | enzyme binding; redox state; compartment |
| Evidence | [C13 §85](../chapters/13_how_cells_obtain_energy_from_food.md#85-fadfadh2), [C13 §97](../chapters/13_how_cells_obtain_energy_from_food.md#97-tca-step-6) |
| Uncertainty / display limits | Do not infer a freely diffusing carrier pool from an abbreviated pathway diagram. |

<a id="e-fadh2"></a>

### E.fadh2 — Reduced flavin adenine dinucleotide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; FADH2 |
| Exists in / context | Fatty-acid/TCA electron-transfer contexts |
| Biology / relations | Distinct reducing form; succinate-dehydrogenase route supplies electrons downstream at ubiquinone. |
| State variables | enzyme binding; compartment; electron transfer |
| Evidence | [C13 §77](../chapters/13_how_cells_obtain_energy_from_food.md#77-fatty-acid-cycle-outputs), [C13 §85](../chapters/13_how_cells_obtain_energy_from_food.md#85-fadfadh2), [C14 §76](../chapters/14_energy_generation_mitochondria_chloroplasts.md#76-fadh2-atp-yield), [C14 §77](../chapters/14_energy_generation_mitochondria_chloroplasts.md#77-succinate-dehydrogenase-is-membrane-embedded) |
| Uncertainty / display limits | Not interchangeable with NADH; no universal ATP yield. |

<a id="e-coa"></a>

### E.coa — Coenzyme A

| Field | Record |
|---|---|
| Kind / scoped aliases | type; CoA |
| Exists in / context | Named metabolic reaction contexts |
| Biology / relations | Carrier receiving acyl groups in pyruvate and fatty-acid metabolism. |
| State variables | free/acylated partner; compartment |
| Evidence | [C13 §67](../chapters/13_how_cells_obtain_energy_from_food.md#67-pyruvate-dehydrogenase-complex), [C13 §71](../chapters/13_how_cells_obtain_energy_from_food.md#71-acetyl-coa), [C13 §74](../chapters/13_how_cells_obtain_energy_from_food.md#74-fatty-acid-activation) |
| Uncertainty / display limits | Acylated derivatives are different chemical species. |

<a id="e-acetyl_coa"></a>

### E.acetyl_coa — Acetyl CoA

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Mitochondrial matrix in source aerobic eukaryotic pathway; other locations need context |
| Biology / relations | Activated two-carbon carrier entering TCA and biosynthetic pathways. |
| State variables | compartment; carbon provenance; enzyme binding |
| Evidence | [C13 §71](../chapters/13_how_cells_obtain_energy_from_food.md#71-acetyl-coa), [C13 §82](../chapters/13_how_cells_obtain_energy_from_food.md#82-cycle-entry), [C13 §91](../chapters/13_how_cells_obtain_energy_from_food.md#91-tca-step-1) |
| Uncertainty / display limits | Carbon atoms need not exit as CO2 in the first TCA turn. |

<a id="e-fatty_acyl_coa"></a>

### E.fatty_acyl_coa — Fatty acyl CoA

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Fatty-acid activation/oxidation context |
| Biology / relations | CoA-linked activated fatty acid; chain identity remains explicit as oxidation shortens it. |
| State variables | chain identity/length; compartment; reaction state |
| Evidence | [C13 §74](../chapters/13_how_cells_obtain_energy_from_food.md#74-fatty-acid-activation), [C13 §75](../chapters/13_how_cells_obtain_energy_from_food.md#75-fatty-acyl-coa), [C13 §76](../chapters/13_how_cells_obtain_energy_from_food.md#76-fatty-acid-oxidation-cycle) |
| Uncertainty / display limits | A family label is insufficient to set a unique molecule or yield. |

<a id="e-glucose"></a>

### E.glucose — Glucose

| Field | Record |
|---|---|
| Kind / scoped aliases | type; D/L form must be qualified |
| Exists in / context | Nutrient, storage and transport contexts |
| Biology / relations | Sugar substrate for glycolysis; transport distinguishes stereoisomers. |
| State variables | stereochemistry; compartment; amount |
| Evidence | [C12 §99](../chapters/12_transport_across_cell_membranes.md#99-passive-glucose-transporter), [C12 §107](../chapters/12_transport_across_cell_membranes.md#107-d-glucose-selectivity), [C13 §27](../chapters/13_how_cells_obtain_energy_from_food.md#27-glycolysis-definition) |
| Uncertainty / display limits | Formula alone does not select D-glucose; do not equate transport with phosphorylation. |

<a id="e-amino_acid"></a>

### E.amino_acid — Amino acid

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Free cellular pool or residues incorporated into proteins |
| Biology / relations | Source protein building-block family; individual side-chain chemistry and free/residue state remain explicit. |
| State variables | species; free/charged-tRNA/residue; compartment |
| Evidence | [C02 §75](../chapters/02_chemical_components.md#75-the-20-amino-acids-used-in-proteins), [C02 §80](../chapters/02_chemical_components.md#80-peptide-bond), [C07 §234](../chapters/07_from_dna_to_protein.md#234-trna-charging) |
| Uncertainty / display limits | A generic amino acid is not one interchangeable chemical species. |

<a id="e-fatty_acid"></a>

### E.fatty_acid — Fatty acid

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Membrane-lipid, storage and catabolic contexts |
| Biology / relations | Hydrocarbon-chain/carboxyl chemistry; chain length and saturation distinguish species. |
| State variables | chain; saturation; free/esterified; compartment |
| Evidence | [C02 §61](../chapters/02_chemical_components.md#61-fatty-acids), [C02 §64](../chapters/02_chemical_components.md#64-fatty-acids-as-energy-reserve), [C11 §95](../chapters/11_membrane_structure.md#95-hydrocarbon-tail-length-source-range), [C11 §97](../chapters/11_membrane_structure.md#97-saturated-tail), [C11 §98](../chapters/11_membrane_structure.md#98-unsaturated-tail), [C13 §74](../chapters/13_how_cells_obtain_energy_from_food.md#74-fatty-acid-activation) |
| Uncertainty / display limits | Do not make all fatty acids identical or confuse dry energy density with hydrated storage mass. |

<a id="e-arginine"></a>

### E.arginine — Arginine

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Amino-acid pool and NO-synthesis context |
| Biology / relations | Source substrate for NO synthase; also a protein residue when incorporated. |
| State variables | free/residue; compartment |
| Evidence | [C02 §75](../chapters/02_chemical_components.md#75-the-20-amino-acids-used-in-proteins), [C16 §147](../chapters/16_cell_signaling.md#147-no-synthase-substrate) |
| Uncertainty / display limits | Free amino acid and covalently incorporated residue are not duplicate pools. |

<a id="e-glutamate"></a>

### E.glutamate — Glutamate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Metabolic precursor and source excitatory synapse examples |
| Biology / relations | Reused chemical species with metabolic and transmitter roles. |
| State variables | free/residue; compartment; receptor binding |
| Evidence | [C13 §104](../chapters/13_how_cells_obtain_energy_from_food.md#104-α-ketoglutarate-as-biosynthetic-precursor), [C12 §358](../chapters/12_transport_across_cell_membranes.md#358-excitatory-neurotransmitter-source-examples) |
| Uncertainty / display limits | Electrical effect requires a receptor context. |

<a id="e-glycine"></a>

### E.glycine — Glycine

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Protein chemistry and source inhibitory synapse examples |
| Biology / relations | Amino acid and transmitter role; collagen packing uses glycine residues. |
| State variables | free/residue; compartment |
| Evidence | [C02 §75](../chapters/02_chemical_components.md#75-the-20-amino-acids-used-in-proteins), [C12 §361](../chapters/12_transport_across_cell_membranes.md#361-inhibitory-neurotransmitter-source-examples), [C20 §39](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#39-glycine-every-third-residue) |
| Uncertainty / display limits | No universal inhibitory label outside the specified receptor context. |

<a id="e-nucleotide"></a>

### E.nucleotide — Nucleotide

| Field | Record |
|---|---|
| Kind / scoped aliases | family; nucleoside mono/di/triphosphates differentiated |
| Exists in / context | DNA/RNA chemistry and activated-carrier contexts |
| Biology / relations | Base, sugar and phosphate combination; base/sugar/phosphate count specify the member. |
| State variables | identity; free/polymer residue; compartment |
| Evidence | [C02 §83](../chapters/02_chemical_components.md#83-nucleotide-sugars), [C02 §87](../chapters/02_chemical_components.md#87-nucleotide-phosphate-states), [C02 §88](../chapters/02_chemical_components.md#88-nucleotide-nomenclature), [C02 §91](../chapters/02_chemical_components.md#91-nucleic-acid-polymerization) |
| Uncertainty / display limits | Nucleoside is not an alias for nucleotide. |

<a id="e-ribonucleoside_triphosphate"></a>

### E.ribonucleoside_triphosphate — Ribonucleoside triphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | family; NTP |
| Exists in / context | RNA synthesis and nucleotide coupling |
| Biology / relations | RNA precursor family includes ATP/GTP with other source RNA bases. |
| State variables | base; compartment; free/incorporated |
| Evidence | [C02 §83](../chapters/02_chemical_components.md#83-nucleotide-sugars), [C02 §87](../chapters/02_chemical_components.md#87-nucleotide-phosphate-states), [C02 §92](../chapters/02_chemical_components.md#92-rna), [C07 §28](../chapters/07_from_dna_to_protein.md#28-rna-polymerase-substrates), [C07 §31](../chapters/07_from_dna_to_protein.md#31-energy-for-rna-synthesis) |
| Uncertainty / display limits | A family aggregate must not be counted alongside its member pools. |

<a id="e-deoxyribonucleoside_triphosphate"></a>

### E.deoxyribonucleoside_triphosphate — Deoxyribonucleoside triphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | family; dNTP |
| Exists in / context | DNA replication and cell-free synthesis |
| Biology / relations | Incoming substrates used to extend DNA at a free 3′ end. |
| State variables | base; compartment; free/incorporated |
| Evidence | [C06 §35](../chapters/06_dna_replication_repair.md#35-incoming-nucleotide-substrate), [C06 §37](../chapters/06_dna_replication_repair.md#37-polymerization-chemistry), [C06 §38](../chapters/06_dna_replication_repair.md#38-energy-for-nucleotide-addition-comes-from-the-incoming-triphosphate), [C10 §105](../chapters/10_analyzing_gene_structure_and_function.md#105-pcr-cycle--step-3) |
| Uncertainty / display limits | No separate ATP molecule powers every DNA nucleotide addition. |

<a id="e-dna"></a>

### E.dna — DNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; deoxyribonucleic acid; duplex/strand forms explicit |
| Exists in / context | Genomic, organelle, plasmid, viral and experimental contexts separately qualified |
| Biology / relations | Sequence-bearing polymer; antiparallel duplex is the source cellular structural model. Genes are regions on DNA. |
| State variables | sequence; strand polarity; duplex pairing; damage; ancestry; compartment |
| Evidence | [C02 §93](../chapters/02_chemical_components.md#93-dna), [C05 §9](../chapters/05_dna_chromosomes.md#9-dna-double-helix--core-entity-definition), [C05 §14](../chapters/05_dna_chromosomes.md#14-dna-strand-polarity), [C05 §24](../chapters/05_dna_chromosomes.md#24-dna-strands-are-antiparallel), [C05 §42](../chapters/05_dna_chromosomes.md#42-eukaryotic-chromosome-definition), [C10 §7](../chapters/10_analyzing_gene_structure_and_function.md#7-a-gene-is-not-normally-a-physically-separate-object) |
| Uncertainty / display limits | Duplex diameter, axial rise and chromosome dimensions are different properties. |

<a id="e-rna"></a>

### E.rna — RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; ribonucleic acid |
| Exists in / context | Nuclear, cytosolic, organelle, viral and assay contexts |
| Biology / relations | Sequence-bearing polymer with functional subtypes; can fold, pair and catalyze. |
| State variables | sequence; polarity; fold; processing; compartment |
| Evidence | [C02 §92](../chapters/02_chemical_components.md#92-rna), [C07 §355](../chapters/07_from_dna_to_protein.md#355-rna-can-fold-into-catalytic-structures), [C07 §357](../chapters/07_from_dna_to_protein.md#357-present-day-catalytic-rna-examples) |
| Uncertainty / display limits | Not uniformly floppy or always destined for translation. |

<a id="e-mrna"></a>

### E.mrna — Messenger RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | type; mRNA; nascent/processed states explicit |
| Exists in / context | Eukaryotic nuclear/cytosolic and bacterial expression contexts |
| Biology / relations | RNA used as translation template; alternative processing can generate different products from one gene. |
| State variables | cap; splice isoform; tail; export; ribosome occupancy; decay |
| Evidence | [C07 §171](../chapters/07_from_dna_to_protein.md#171-mature-mrna-must-be-exported-from-nucleus), [C07 §177](../chapters/07_from_dna_to_protein.md#177-export-decision-is-combinatorial), [C07 §181](../chapters/07_from_dna_to_protein.md#181-mature-mrna-is-not-permanent), [C07 §262](../chapters/07_from_dna_to_protein.md#262-ribosome-binds-mrna), [C08 §223](../chapters/08_control_of_gene_expression.md#223-alternative-splicing-is-a-post-transcriptional-control) |
| Uncertainty / display limits | Abundance is not translation rate or protein abundance. |

<a id="e-trna"></a>

### E.trna — Transfer RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; tRNA |
| Exists in / context | Translation systems with organism-specific repertoire |
| Biology / relations | Adapter linking anticodon recognition to charged amino acid; initiator and elongator roles are distinguished. |
| State variables | sequence; modifications; aminoacylation; anticodon; binding site |
| Evidence | [C07 §222](../chapters/07_from_dna_to_protein.md#222-trna), [C07 §228](../chapters/07_from_dna_to_protein.md#228-modified-bases-in-trna), [C07 §233](../chapters/07_from_dna_to_protein.md#233-aminoacyl-trna-synthetase), [C07 §285](../chapters/07_from_dna_to_protein.md#285-initiator-trna-is-distinct-from-elongator-met-trna) |
| Uncertainty / display limits | Charging specificity and ribosome decoding are separate checks. |

<a id="e-rrna"></a>

### E.rrna — Ribosomal RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; rRNA |
| Exists in / context | Ribosome biogenesis and translation contexts |
| Biology / relations | Structural and catalytic RNA components of ribosomes; exact RNA inventory depends on system. |
| State variables | sequence; processing; ribosomal-subunit membership |
| Evidence | [C07 §245](../chapters/07_from_dna_to_protein.md#245-ribosome-composition), [C07 §256](../chapters/07_from_dna_to_protein.md#256-rrna-forms-the-structural-core), [C07 §257](../chapters/07_from_dna_to_protein.md#257-ribosome-is-a-ribozyme) |
| Uncertainty / display limits | Not merely passive scaffolding. |

<a id="e-snrna"></a>

### E.snrna — Small nuclear RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; snRNA |
| Exists in / context | Eukaryotic RNA-splicing context |
| Biology / relations | RNA participants in spliceosomal ribonucleoproteins. |
| State variables | sequence; partner complex; RNA pairing |
| Evidence | [C07 §143](../chapters/07_from_dna_to_protein.md#143-small-nuclear-rna), [C07 §144](../chapters/07_from_dna_to_protein.md#144-snrnp), [C07 §145](../chapters/07_from_dna_to_protein.md#145-spliceosome), [C07 §153](../chapters/07_from_dna_to_protein.md#153-spliceosome-catalytic-center-is-rna-based) |
| Uncertainty / display limits | Do not merge with miRNA, siRNA or crRNA. |

<a id="e-mirna"></a>

### E.mirna — MicroRNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; miRNA |
| Exists in / context | Eukaryotic post-transcriptional regulation |
| Biology / relations | Processed small RNA guide used by RISC; matching context affects repression or cleavage outcome. |
| State variables | precursor/mature; guide sequence; RISC membership |
| Evidence | [C08 §239](../chapters/08_control_of_gene_expression.md#239-microrna), [C08 §242](../chapters/08_control_of_gene_expression.md#242-mirna-processing), [C08 §246](../chapters/08_control_of_gene_expression.md#246-extensive-mirna-match), [C08 §247](../chapters/08_control_of_gene_expression.md#247-less-extensive-mirna-match) |
| Uncertainty / display limits | Partial matching does not imply obligatory target destruction. |

<a id="e-sirna"></a>

### E.sirna — Small interfering RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; siRNA |
| Exists in / context | Source RNA interference and experimental knockdown |
| Biology / relations | Guide derived from dsRNA and used in sequence-dependent silencing. |
| State variables | duplex/guide; target sequence; RISC membership |
| Evidence | [C08 §253](../chapters/08_control_of_gene_expression.md#253-small-interfering-rna), [C08 §258](../chapters/08_control_of_gene_expression.md#258-sirna-loading-into-risc), [C08 §261](../chapters/08_control_of_gene_expression.md#261-sirna-mediated-target-destruction), [C10 §251](../chapters/10_analyzing_gene_structure_and_function.md#251-rnai-as-reverse-genetics-tool) |
| Uncertainty / display limits | Knockdown does not delete the gene. |

<a id="e-lncrna"></a>

### E.lncrna — Long noncoding RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; lncRNA |
| Exists in / context | Source noncoding-RNA contexts |
| Biology / relations | Operationally defined RNA class with diverse and often uncertain functions. |
| State variables | sequence; localization; partners; function evidence |
| Evidence | [C08 §289](../chapters/08_control_of_gene_expression.md#289-long-noncoding-rna), [C08 §290](../chapters/08_control_of_gene_expression.md#290-lncrna-operational-length-threshold), [C08 §292](../chapters/08_control_of_gene_expression.md#292-lncrna-function-remains-uncertain-for-many-members) |
| Uncertainty / display limits | No invented function for uncharacterized members. |

<a id="e-xist"></a>

### E.xist — Xist RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source X-inactivation context |
| Biology / relations | RNA remaining associated with its chromosome and recruiting silencing machinery. |
| State variables | expressed; chromosome association; partners |
| Evidence | [C08 §296](../chapters/08_control_of_gene_expression.md#296-xist-and-x-inactivation), [C08 §297](../chapters/08_control_of_gene_expression.md#297-xist-production), [C05 §189](../chapters/05_dna_chromosomes.md#189-x-inactivation), [C05 §195](../chapters/05_dna_chromosomes.md#195-barr-body-is-a-chromatin-state-not-an-extra-chromosome) |
| Uncertainty / display limits | Xist is RNA; inactive X is not deleted or an additional chromosome. |

<a id="e-crrna"></a>

### E.crrna — CRISPR RNA

| Field | Record |
|---|---|
| Kind / scoped aliases | family; crRNA |
| Exists in / context | Prokaryotic CRISPR immune context |
| Biology / relations | Processed guide corresponding to stored CRISPR sequence information. |
| State variables | guide sequence; Cas association; target match |
| Evidence | [C08 §281](../chapters/08_control_of_gene_expression.md#281-crispr-transcription), [C08 §282](../chapters/08_control_of_gene_expression.md#282-crrna-processing), [C08 §284](../chapters/08_control_of_gene_expression.md#284-crrna-guides-cas) |
| Uncertainty / display limits | Native immune guides are not automatically engineered Cas9 guides. |

<a id="e-protein"></a>

### E.protein — Protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family; polypeptide chain/assembled protein distinguished |
| Exists in / context | Source organism/cell-specific proteomes |
| Biology / relations | Sequence, folding, modification and assembly support multiple overlapping functional roles. |
| State variables | sequence; fold; modifications; oligomerization; location; activity |
| Evidence | [C04 §3](../chapters/04_protein_structure_function.md#3-protein-function-emerges-from-protein-shape), [C04 §21](../chapters/04_protein_structure_function.md#21-sequence-contains-folding-information), [C04 §53](../chapters/04_protein_structure_function.md#53-unstructured-regions), [C04 §146](../chapters/04_protein_structure_function.md#146-cells-regulate-protein-location), [C07 §339](../chapters/07_from_dna_to_protein.md#339-translation-is-not-the-end-of-protein-production) |
| Uncertainty / display limits | Structure does not determine an observed trajectory; no arbitrary sequence or structure accession. |

<a id="e-enzyme"></a>

### E.enzyme — Enzyme

| Field | Record |
|---|---|
| Kind / scoped aliases | role |
| Exists in / context | A molecular catalyst in a specified reaction/context |
| Biology / relations | Binds substrates and catalyzes reactions without changing their thermodynamic equilibrium. |
| State variables | catalytic state; substrate/product occupancy; regulators |
| Evidence | [C03 §35](../chapters/03_energy_catalysis_biosynthesis.md#35-enzymes-are-catalysts), [C03 §36](../chapters/03_energy_catalysis_biosynthesis.md#36-enzymes-do-not-change-δg), [C03 §37](../chapters/03_energy_catalysis_biosynthesis.md#37-enzymes-accelerate-forward-and-reverse-reactions), [C03 §39](../chapters/03_energy_catalysis_biosynthesis.md#39-enzymes-are-reusable), [C04 §105](../chapters/04_protein_structure_function.md#105-enzymes-bind-substrates-and-convert-them) |
| Uncertainty / display limits | Not a disjoint protein inventory; binding alone is not catalysis. |

<a id="e-receptor"></a>

### E.receptor — Receptor

| Field | Record |
|---|---|
| Kind / scoped aliases | role |
| Exists in / context | Membrane or intracellular signaling context |
| Biology / relations | Recognizes a signal and initiates a context-dependent response. |
| State variables | occupancy; conformation; activity; localization |
| Evidence | [C16 §5](../chapters/16_cell_signaling.md#5-receptor), [C16 §25](../chapters/16_cell_signaling.md#25-two-broad-receptor-locations), [C16 §28](../chapters/16_cell_signaling.md#28-signal-molecule-alone-is-not-the-message) |
| Uncertainty / display limits | Ligand identity alone does not specify the response. |

<a id="e-channel"></a>

### E.channel — Channel

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role |
| Exists in / context | Specified membrane and permitted solute |
| Biology / relations | Hydrophilic pore permits passive flux when available. |
| State variables | selectivity; gate; conductance context; orientation |
| Evidence | [C12 §186](../chapters/12_transport_across_cell_membranes.md#186-channel), [C12 §193](../chapters/12_transport_across_cell_membranes.md#193-selectivity-filter), [C12 §201](../chapters/12_transport_across_cell_membranes.md#201-ion-channels-have-gates) |
| Uncertainty / display limits | Not an alternating-access transporter or active pump. |

<a id="e-transporter"></a>

### E.transporter — Transporter

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role; carrier in membrane-transport context |
| Exists in / context | Specified membrane, two sides and solute set |
| Biology / relations | Alternating access moves selected solute through binding/conformational transitions. |
| State variables | binding; inward/outward/occluded state; energy coupling |
| Evidence | [C12 §9](../chapters/12_transport_across_cell_membranes.md#9-transporter-basic-mechanism), [C12 §101](../chapters/12_transport_across_cell_membranes.md#101-alternating-access-model), [C12 §109](../chapters/12_transport_across_cell_membranes.md#109-three-major-active-pump-energy-classes) |
| Uncertainty / display limits | Not every transporter is a pump; carrier also has unrelated metabolic usage. |

<a id="e-kinase"></a>

### E.kinase — Protein kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role |
| Exists in / context | Specified protein targets/sites and compartment |
| Biology / relations | Transfers phosphate to particular residues; activity effects depend on target/site. |
| State variables | active state; target/site binding; compartment |
| Evidence | [C16 §53](../chapters/16_cell_signaling.md#53-phosphorylation-switches), [C16 §54](../chapters/16_cell_signaling.md#54-phosphorylation-can-activate-or-inhibit), [C16 §57](../chapters/16_cell_signaling.md#57-serinethreonine-kinases), [C16 §58](../chapters/16_cell_signaling.md#58-tyrosine-kinases) |
| Uncertainty / display limits | PI3K in its cited pathway acts on lipid, not protein. |

<a id="e-phosphatase"></a>

### E.phosphatase — Protein phosphatase

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role |
| Exists in / context | Specified phosphorylated protein targets/sites |
| Biology / relations | Removes target phosphates; outcome depends on the regulated target. |
| State variables | activity; substrate specificity; compartment |
| Evidence | [C16 §53](../chapters/16_cell_signaling.md#53-phosphorylation-switches), [C16 §55](../chapters/16_cell_signaling.md#55-kinasephosphatase-balance), [C18 §59](../chapters/18_cell_cycle.md#59-protein-phosphatases-reverse-cdk-effects) |
| Uncertainty / display limits | Dephosphorylation is not universally inhibition. |

<a id="e-gtpase"></a>

### E.gtpase — GTPase switch protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family/role |
| Exists in / context | Source GTP-binding regulatory proteins |
| Biology / relations | Nucleotide occupancy and hydrolysis govern switch behavior; named families remain distinct. |
| State variables | GDP/GTP/empty; GEF/GAP binding; activity |
| Evidence | [C04 §171](../chapters/04_protein_structure_function.md#171-gtpase-reactivation), [C04 §172](../chapters/04_protein_structure_function.md#172-gtp-switch-is-nucleotide-state-regulation), [C16 §59](../chapters/16_cell_signaling.md#59-gtp-binding-switches), [C16 §60](../chapters/16_cell_signaling.md#60-intrinsic-gtpase-activity) |
| Uncertainty / display limits | Small GTPases and heterotrimeric G proteins are not one identical complex. |

<a id="e-gef"></a>

### E.gef — Guanine nucleotide exchange factor

| Field | Record |
|---|---|
| Kind / scoped aliases | role; GEF |
| Exists in / context | Named GTPase/compartment context |
| Biology / relations | Promotes GDP release and GTP binding. |
| State variables | partner; activity; location |
| Evidence | [C16 §61](../chapters/16_cell_signaling.md#61-gef), [C15 §70](../chapters/15_intracellular_compartments_protein_transport.md#70-ran-gef) |
| Uncertainty / display limits | Exchange is not phosphorylation of bound GDP. |

<a id="e-gap"></a>

### E.gap — GTPase-activating protein

| Field | Record |
|---|---|
| Kind / scoped aliases | role; GAP |
| Exists in / context | Named GTPase/compartment context |
| Biology / relations | Accelerates GTP hydrolysis and source switch shutoff. |
| State variables | partner; activity; location |
| Evidence | [C16 §62](../chapters/16_cell_signaling.md#62-gap), [C15 §71](../chapters/15_intracellular_compartments_protein_transport.md#71-ran-gap) |
| Uncertainty / display limits | Activating GTPase catalysis can inactivate signaling. |

<a id="e-chaperone"></a>

### E.chaperone — Molecular chaperone

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Cytosol, ER and import/folding contexts |
| Biology / relations | Assists folding or prevents aggregation; some source systems use ATP. |
| State variables | client; nucleotide; compartment; folding state |
| Evidence | [C04 §22](../chapters/04_protein_structure_function.md#22-chaperone-proteins-assist-folding), [C04 §23](../chapters/04_protein_structure_function.md#23-chaperone-isolation-chambers), [C15 §84](../chapters/15_intracellular_compartments_protein_transport.md#84-chaperones-in-mitochondrial-import), [C15 §163](../chapters/15_intracellular_compartments_protein_transport.md#163-er-chaperone-quality-control) |
| Uncertainty / display limits | Does not encode the client's amino-acid sequence or guarantee correct folding. |

<a id="e-ubiquitin"></a>

### E.ubiquitin — Ubiquitin

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Protein modification/proteasomal targeting contexts |
| Biology / relations | Covalently attached protein tag; specific chain configurations support degradation and ubiquitin is recycled. |
| State variables | free/conjugated; chain; substrate |
| Evidence | [C04 §166](../chapters/04_protein_structure_function.md#166-ubiquitin-size), [C07 §332](../chapters/07_from_dna_to_protein.md#332-ubiquitin), [C07 §334](../chapters/07_from_dna_to_protein.md#334-proteasome-recognizes-specific-polyubiquitin-tagging), [C07 §335](../chapters/07_from_dna_to_protein.md#335-ubiquitin-is-recycled) |
| Uncertainty / display limits | Not itself a protease; not every modification implies degradation. |

<a id="e-phospholipid"></a>

### E.phospholipid — Phospholipid

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Membrane leaflets in named organisms/organelles |
| Biology / relations | Amphipathic membrane-lipid class with head and tail chemistry. |
| State variables | species; leaflet; orientation; chain composition |
| Evidence | [C11 §34](../chapters/11_membrane_structure.md#34-typical-phospholipid-architecture), [C11 §35](../chapters/11_membrane_structure.md#35-phosphate-containing-head), [C11 §119](../chapters/11_membrane_structure.md#119-eukaryotic-phospholipid-synthesis-begins-on-er-cytosolic-face) |
| Uncertainty / display limits | Not cholesterol, glycolipid or an entire membrane. |

<a id="e-phosphatidylcholine"></a>

### E.phosphatidylcholine — Phosphatidylcholine

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PC |
| Exists in / context | Source animal/plant membranes |
| Biology / relations | Phospholipid headgroup class; leaflet enrichment follows source membrane context. |
| State variables | tails; leaflet; amount |
| Evidence | [C11 §36](../chapters/11_membrane_structure.md#36-phosphatidylcholine), [C11 §37](../chapters/11_membrane_structure.md#37-phosphatidylcholine-components), [C11 §139](../chapters/11_membrane_structure.md#139-phosphatidylcholine-distribution) |
| Uncertainty / display limits | Enrichment is not exclusive occupancy in every membrane. |

<a id="e-phosphatidylserine"></a>

### E.phosphatidylserine — Phosphatidylserine

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PS |
| Exists in / context | Source membrane-asymmetry context |
| Biology / relations | Phospholipid enriched cytosolically in source model; flippases select it. |
| State variables | tails; leaflet; translocation state |
| Evidence | [C11 §41](../chapters/11_membrane_structure.md#41-phosphatidylserine), [C11 §135](../chapters/11_membrane_structure.md#135-source-selected-phospholipids), [C11 §137](../chapters/11_membrane_structure.md#137-phosphatidylserine-distribution) |
| Uncertainty / display limits | No universal leaflet composition or source-unsupported apoptosis flip mechanism. |

<a id="e-phosphatidylethanolamine"></a>

### E.phosphatidylethanolamine — Phosphatidylethanolamine

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PE |
| Exists in / context | Source membrane-asymmetry context |
| Biology / relations | Phospholipid selected for cytosolic leaflet enrichment in source scheme. |
| State variables | tails; leaflet; amount |
| Evidence | [C11 §135](../chapters/11_membrane_structure.md#135-source-selected-phospholipids), [C11 §138](../chapters/11_membrane_structure.md#138-phosphatidylethanolamine-distribution) |
| Uncertainty / display limits | Preserve organism/membrane context. |

<a id="e-phosphatidylinositol"></a>

### E.phosphatidylinositol — Phosphatidylinositol and phosphoinositides

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Cytosolic membrane leaflet in source signaling |
| Biology / relations | Related lipid species distinguished by phosphorylation pattern; provide signaling substrates/docking sites. |
| State variables | chemical species; phosphate positions; leaflet; partners |
| Evidence | [C11 §141](../chapters/11_membrane_structure.md#141-phosphatidylinositol-distribution), [C11 §142](../chapters/11_membrane_structure.md#142-phosphatidylinositols-and-signaling), [C16 §119](../chapters/16_cell_signaling.md#119-inositol-phospholipid-pathway), [C16 §190](../chapters/16_cell_signaling.md#190-pi-3-kinase) |
| Uncertainty / display limits | Family is not a single pooled molecule; do not invent exact lipid species absent source support. |

<a id="e-cholesterol"></a>

### E.cholesterol — Cholesterol

| Field | Record |
|---|---|
| Kind / scoped aliases | type; sterol |
| Exists in / context | Source animal-cell membranes and LDL uptake |
| Biology / relations | Sterol lipid with small polar group; distinct from phospholipids. |
| State variables | membrane/free-carrier association; leaflet; amount |
| Evidence | [C11 §42](../chapters/11_membrane_structure.md#42-cholesterol), [C11 §43](../chapters/11_membrane_structure.md#43-cholesterol-amphipathicity), [C11 §111](../chapters/11_membrane_structure.md#111-cholesterol-stiffens-membrane), [C11 §112](../chapters/11_membrane_structure.md#112-cholesterol-reduces-permeability), [C15 §211](../chapters/15_intracellular_compartments_protein_transport.md#211-ldl-transport), [C15 §212](../chapters/15_intracellular_compartments_protein_transport.md#212-ldl-receptor-pathway) |
| Uncertainty / display limits | Composition and permeability effects are contextual. |

<a id="e-glycolipid"></a>

### E.glycolipid — Glycolipid

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Noncytosolic leaflet of source animal membrane model |
| Biology / relations | Carbohydrate-bearing lipid; sugar addition/orientation follows secretory topology. |
| State variables | glycan; lipid species; leaflet |
| Evidence | [C11 §45](../chapters/11_membrane_structure.md#45-glycolipid), [C11 §143](../chapters/11_membrane_structure.md#143-glycolipid-distribution), [C11 §153](../chapters/11_membrane_structure.md#153-glycolipid-sugars-are-added-in-golgi) |
| Uncertainty / display limits | Not glycoprotein; do not coat cytosolic membrane surface with these sugar chains. |

<a id="e-sphingomyelin"></a>

### E.sphingomyelin — Sphingomyelin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source noncytosolic membrane enrichment |
| Biology / relations | Distinct named lipid class in asymmetry model. |
| State variables | species; leaflet; amount |
| Evidence | [C11 §136](../chapters/11_membrane_structure.md#136-noncytosolic-enrichment), [C11 §140](../chapters/11_membrane_structure.md#140-sphingomyelin-distribution) |
| Uncertainty / display limits | No universal fraction assigned. |

<a id="e-triacylglycerol"></a>

### E.triacylglycerol — Triacylglycerol

| Field | Record |
|---|---|
| Kind / scoped aliases | family; triglyceride; TAG |
| Exists in / context | Animal fats, plant oils and cellular lipid-storage contexts |
| Biology / relations | Glycerol esterified to three fatty-acid chains; droplets are assemblies of molecules. |
| State variables | chain identities; amount; droplet membership |
| Evidence | [C11 §58](../chapters/11_membrane_structure.md#58-triacylglycerol), [C11 §59](../chapters/11_membrane_structure.md#59-triacylglycerol-is-entirely-hydrophobic), [C13 §72](../chapters/13_how_cells_obtain_energy_from_food.md#72-triacylglycerol) |
| Uncertainty / display limits | Molecule is not a lipid droplet or bilayer. |

<a id="e-glycogen"></a>

### E.glycogen — Glycogen

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source animal cytoplasmic storage, especially liver/muscle |
| Biology / relations | Branched glucose polymer associated with synthesis/degradation enzymes in granules. |
| State variables | chain/branch structure; granule membership; amount |
| Evidence | [C13 §123](../chapters/13_how_cells_obtain_energy_from_food.md#123-glycogen), [C13 §124](../chapters/13_how_cells_obtain_energy_from_food.md#124-glycogen-storage-sites), [C13 §125](../chapters/13_how_cells_obtain_energy_from_food.md#125-glycogen-granule-composition) |
| Uncertainty / display limits | Polymer, granule and hydrated storage mass are distinct. |

<a id="e-starch"></a>

### E.starch — Starch

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source plant storage/chloroplast context |
| Biology / relations | Glucose storage polymer; granule assembly and tissue state are specified separately. |
| State variables | polymer structure; granule; location |
| Evidence | [C13 §137](../chapters/13_how_cells_obtain_energy_from_food.md#137-plant-storage-carbohydrate), [C14 §207](../chapters/14_energy_generation_mitochondria_chloroplasts.md#207-starch-storage) |
| Uncertainty / display limits | Do not generalize chloroplast storage statements to every plant reserve. |

<a id="e-cellulose"></a>

### E.cellulose — Cellulose

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Higher-plant cell wall |
| Biology / relations | Unbranched glucose polymer assembled into tensile microfibrils. |
| State variables | chain; microfibril membership; orientation |
| Evidence | [C20 §16](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#16-cellulose), [C20 §17](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#17-cellulose-linkage), [C20 §18](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#18-cellulose-microfibril) |
| Uncertainty / display limits | Chain, microfibril and wall are different assembly scales. |

<a id="e-camp"></a>

### E.camp — Cyclic AMP

| Field | Record |
|---|---|
| Kind / scoped aliases | type; cAMP |
| Exists in / context | Source cytosolic signaling contexts |
| Biology / relations | Adenylyl-cyclase product from ATP; phosphodiesterase converts it to AMP. |
| State variables | production; compartment; target binding; clearance |
| Evidence | [C16 §101](../chapters/16_cell_signaling.md#101-adenylyl-cyclase), [C16 §102](../chapters/16_cell_signaling.md#102-camp), [C16 §103](../chapters/16_cell_signaling.md#103-camp-phosphodiesterase) |
| Uncertainty / display limits | Not stable by default and not ATP. |

<a id="e-cgmp"></a>

### E.cgmp — Cyclic GMP

| Field | Record |
|---|---|
| Kind / scoped aliases | type; cGMP |
| Exists in / context | NO signaling and photoreceptor contexts |
| Biology / relations | Guanylyl-cyclase product from GTP; photoreceptor PDE reduces its pool. |
| State variables | production; concentration; channel binding; clearance |
| Evidence | [C16 §148](../chapters/16_cell_signaling.md#148-guanylyl-cyclase), [C16 §149](../chapters/16_cell_signaling.md#149-cgmp), [C16 §154](../chapters/16_cell_signaling.md#154-rod-phototransduction) |
| Uncertainty / display limits | Light lowers cGMP in source rods; not a universal activation rise. |

<a id="e-ip3"></a>

### E.ip3 — Inositol 1,4,5-trisphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; IP3 |
| Exists in / context | Cytosol in source PLC pathway |
| Biology / relations | Soluble messenger that binds ER calcium-release channels. |
| State variables | compartment; amount; receptor binding |
| Evidence | [C16 §120](../chapters/16_cell_signaling.md#120-plc-products), [C16 §121](../chapters/16_cell_signaling.md#121-ip3), [C16 §123](../chapters/16_cell_signaling.md#123-ip3-receptor-action) |
| Uncertainty / display limits | Not membrane-confined DAG. |

<a id="e-dag"></a>

### E.dag — Diacylglycerol

| Field | Record |
|---|---|
| Kind / scoped aliases | family; DAG |
| Exists in / context | Membrane in source PLC pathway |
| Biology / relations | Lipid messenger cooperating with calcium in source PKC activation. |
| State variables | lipid species; leaflet; protein binding |
| Evidence | [C16 §120](../chapters/16_cell_signaling.md#120-plc-products), [C16 §122](../chapters/16_cell_signaling.md#122-dag), [C16 §125](../chapters/16_cell_signaling.md#125-dag--ca2-activate-pkc) |
| Uncertainty / display limits | Not a freely diffusing cytosolic messenger. |

<a id="e-no"></a>

### E.no — Nitric oxide

| Field | Record |
|---|---|
| Kind / scoped aliases | type; NO |
| Exists in / context | Short-range intercellular signaling source examples |
| Biology / relations | Gas produced from arginine; activates guanylyl cyclase in the source pathway. |
| State variables | production; diffusion; lifetime; target interaction |
| Evidence | [C16 §144](../chapters/16_cell_signaling.md#144-nitric-oxide-signaling), [C16 §145](../chapters/16_cell_signaling.md#145-no-lifetime-is-short), [C16 §147](../chapters/16_cell_signaling.md#147-no-synthase-substrate), [C16 §148](../chapters/16_cell_signaling.md#148-guanylyl-cyclase) |
| Uncertainty / display limits | Not nitrous oxide; no inferred universal range. |

<a id="e-acetylcholine"></a>

### E.acetylcholine — Acetylcholine

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Neuromuscular, heart and salivary source examples |
| Biology / relations | One ligand with different receptor-dependent outputs. |
| State variables | release; extracellular concentration; binding; clearance |
| Evidence | [C12 §347](../chapters/12_transport_across_cell_membranes.md#347-acetylcholine), [C16 §29](../chapters/16_cell_signaling.md#29-same-signal-different-response), [C16 §30](../chapters/16_cell_signaling.md#30-different-receptors-can-recognize-the-same-ligand) |
| Uncertainty / display limits | Separate ion-channel and GPCR receptor contexts. |

<a id="e-wnt"></a>

### E.wnt — Wnt protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family; Wingless relation requires organism context |
| Exists in / context | Intestinal crypt niche and source developmental signaling |
| Biology / relations | Extracellular signaling protein family promoting crypt stem/precursor proliferation through the cited network. |
| State variables | source cell; distribution; receptor binding |
| Evidence | [C20 §181](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#181-wnt-proteins), [C20 §182](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#182-wnt-signal-is-spatially-restricted), [C20 §272](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#272-wnt-pathway-with-wnt) |
| Uncertainty / display limits | No named receptor or inhibitor added from memory. |

<a id="e-beta_catenin"></a>

### E.beta_catenin — β-catenin

| Field | Record |
|---|---|
| Kind / scoped aliases | type; beta-catenin; Armadillo in cited fly comparison |
| Exists in / context | Adherens-junction and Wnt-regulatory contexts |
| Biology / relations | Same protein type has junctional and transcriptional roles; stabilization and localization control Wnt output. |
| State variables | junction binding; degradation; nuclear association; TCF binding |
| Evidence | [C20 §269](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#269-β-catenin), [C20 §270](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#270-tcf--lef-transcription-regulators), [C20 §292](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#292-cross-species-genetics-redirected-interpretation) |
| Uncertainty / display limits | Do not duplicate a Wnt copy and an adhesion copy as independent material types. |

<a id="e-apc"></a>

### E.apc — Adenomatous polyposis coli protein

| Field | Record |
|---|---|
| Kind / scoped aliases | type; APC |
| Exists in / context | Source β-catenin degradation machinery |
| Biology / relations | Tumor-suppressor gene product participating in suppression of Wnt output when Wnt absent. |
| State variables | functional state; complex membership |
| Evidence | [C20 §262](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#262-apc--tumor-suppressor), [C20 §264](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#264-apc-gene-is-distinct-from-apcc), [C20 §268](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#268-apc-inhibits-wnt-pathway-output) |
| Uncertainty / display limits | APC is not APC/C; gene locus and protein product have separate kinds. |

<a id="e-tcf"></a>

### E.tcf — TCF/LEF transcription regulator

| Field | Record |
|---|---|
| Kind / scoped aliases | family; TCF4 in source crypt experiment |
| Exists in / context | Nuclear Wnt output in cited tissue |
| Biology / relations | Associates with β-catenin to regulate Wnt-responsive transcription. |
| State variables | DNA binding; β-catenin association; target context |
| Evidence | [C20 §270](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#270-tcf--lef-transcription-regulators), [C20 §274](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#274-tcf4-knockout-source-experiment) |
| Uncertainty / display limits | Source TCF4 name needs identity qualification before external gene mapping. |

<a id="e-ras"></a>

### E.ras — Ras

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Cytosolic plasma-membrane face in source RTK pathway |
| Biology / relations | Lipid-associated small GTPase regulated by GEF/GAP and linked to MAPK. |
| State variables | GDP/GTP; GEF/GAP; membrane attachment; mutation |
| Evidence | [C16 §179](../chapters/16_cell_signaling.md#179-ras), [C16 §180](../chapters/16_cell_signaling.md#180-ras-activation-by-rtks), [C16 §182](../chapters/16_cell_signaling.md#182-ras-gap), [C16 §183](../chapters/16_cell_signaling.md#183-ras-resembles-gα-but-is-not-a-heterotrimeric-g-protein) |
| Uncertainty / display limits | Not a heterotrimeric G protein; no universal cancer frequency. |

<a id="e-ran"></a>

### E.ran — Ran

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Nucleus/cytosol in nuclear transport |
| Biology / relations | Small GTPase with compartment-dependent nucleotide state that provides transport directionality. |
| State variables | GDP/GTP; location; receptor binding |
| Evidence | [C15 §68](../chapters/15_intracellular_compartments_protein_transport.md#68-ran-gtpase), [C15 §69](../chapters/15_intracellular_compartments_protein_transport.md#69-ran-spatial-asymmetry), [C15 §72](../chapters/15_intracellular_compartments_protein_transport.md#72-nuclear-import-release-step), [C15 §73](../chapters/15_intracellular_compartments_protein_transport.md#73-import-receptor-recycling) |
| Uncertainty / display limits | Do not apply Ran-dependent export to every RNA cargo without evidence. |

<a id="e-rab"></a>

### E.rab — Rab protein

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Vesicle and target-organelle membranes |
| Biology / relations | GTPase family participating in membrane identity and tether recognition. |
| State variables | nucleotide; membrane; tether binding |
| Evidence | [C15 §140](../chapters/15_intracellular_compartments_protein_transport.md#140-rab-proteins), [C15 §141](../chapters/15_intracellular_compartments_protein_transport.md#141-tethering-proteins) |
| Uncertainty / display limits | Rab/tether recognition is not fusion. |

<a id="e-rho_family"></a>

### E.rho_family — Rho-family GTPase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; Rho, Rac, Cdc42 are distinct members |
| Exists in / context | Source cortical organization and polarity contexts |
| Biology / relations | Related switches regulate different actin architectures. |
| State variables | member; nucleotide; local activation |
| Evidence | [C17 §198](../chapters/17_cytoskeleton.md#198-rho-family-monomeric-gtpases), [C17 §199](../chapters/17_cytoskeleton.md#199-rho-activation-source-phenotype), [C17 §200](../chapters/17_cytoskeleton.md#200-rac-activation-source-phenotype), [C17 §201](../chapters/17_cytoskeleton.md#201-cdc42-activation-source-phenotype) |
| Uncertainty / display limits | Family members are not interchangeable; RhoA appears specifically in cytokinesis. |

<a id="e-rhoa"></a>

### E.rhoa — RhoA

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Animal cytokinetic cortex |
| Biology / relations | Source signal for contractile-ring assembly and contraction. |
| State variables | local activity; membrane/cortex association |
| Evidence | [C18 §183](../chapters/18_cell_cycle.md#183-rhoa) |
| Uncertainty / display limits | Not every source Rho-family phenotype is automatically RhoA-specific. |

<a id="e-calmodulin"></a>

### E.calmodulin — Calmodulin

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source eukaryotic calcium signaling |
| Biology / relations | Calcium-responsive protein regulating selected targets by binding-dependent conformation. |
| State variables | Ca2+ occupancy; conformation; target binding |
| Evidence | [C16 §139](../chapters/16_cell_signaling.md#139-calmodulin), [C16 §140](../chapters/16_cell_signaling.md#140-calmodulin-ca2-sites), [C16 §141](../chapters/16_cell_signaling.md#141-calmodulin-conformational-change) |
| Uncertainty / display limits | It responds to calcium; it does not itself define the calcium concentration. |

<a id="e-cyclin"></a>

### E.cyclin — Cyclin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Cell-cycle phase and organism-specific complexes |
| Biology / relations | Regulatory subunits controlling Cdk activity and target specificity. |
| State variables | subtype; abundance; Cdk binding; ubiquitination |
| Evidence | [C18 §33](../chapters/18_cell_cycle.md#33-cyclins), [C18 §34](../chapters/18_cell_cycle.md#34-cyclin-abundance-oscillates), [C18 §36](../chapters/18_cell_cycle.md#36-cyclin-also-contributes-target-specificity), [C18 §46](../chapters/18_cell_cycle.md#46-cyclin-destruction) |
| Uncertainty / display limits | Cyclin abundance is not Cdk activity. |

<a id="e-cdk"></a>

### E.cdk — Cyclin-dependent kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; Cdk |
| Exists in / context | Cell-cycle control contexts |
| Biology / relations | Kinase catalytic subunits regulated by cyclin, phosphorylation and inhibitors. |
| State variables | cyclin partner; phosphates; inhibitor; activity |
| Evidence | [C18 §31](../chapters/18_cell_cycle.md#31-cdks), [C18 §32](../chapters/18_cell_cycle.md#32-cdk-abundance-versus-activity), [C18 §51](../chapters/18_cell_cycle.md#51-cdk-activity-requires-more-than-cyclin-binding) |
| Uncertainty / display limits | Presence or cyclin binding alone does not establish full activity. |

<a id="e-rb"></a>

### E.rb — Retinoblastoma protein

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Rb |
| Exists in / context | Source mammalian Start/S-entry model |
| Biology / relations | Suppresses transcription regulators; phosphorylation releases the source brake. |
| State variables | phosphorylation; regulator binding |
| Evidence | [C18 §85](../chapters/18_cell_cycle.md#85-rb-protein), [C18 §86](../chapters/18_cell_cycle.md#86-rb-suppresses-transcription), [C18 §88](../chapters/18_cell_cycle.md#88-rb-phosphorylation) |
| Uncertainty / display limits | Do not invent an unnamed downstream transcription-factor identity. |

<a id="e-p53"></a>

### E.p53 — p53

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | DNA damage, arrest and apoptosis contexts |
| Biology / relations | Transcription regulator stabilized/activated by damage; induces p21 and can contribute to apoptosis. |
| State variables | stability; modifications; activity; targets |
| Evidence | [C18 §91](../chapters/18_cell_cycle.md#91-p53), [C18 §92](../chapters/18_cell_cycle.md#92-p21), [C18 §95](../chapters/18_cell_cycle.md#95-severe-dna-damage-can-lead-to-apoptosis), [C20 §261](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#261-p53--tumor-suppressor) |
| Uncertainty / display limits | Does not directly inhibit Cdk enzymatically in the cited pathway. |

<a id="e-p21"></a>

### E.p21 — p21

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Cdk inhibitor |
| Exists in / context | Source DNA-damage arrest |
| Biology / relations | p53-induced inhibitor of G1/S-Cdk and S-Cdk. |
| State variables | abundance; bound complex |
| Evidence | [C18 §92](../chapters/18_cell_cycle.md#92-p21), [C18 §93](../chapters/18_cell_cycle.md#93-p21-targets) |
| Uncertainty / display limits | Distinct from p27 and p53. |

<a id="e-p27"></a>

### E.p27 — p27

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Cdk inhibitor |
| Exists in / context | Source G1/S regulation example |
| Biology / relations | Binds/inhibits cyclin–Cdk activity. |
| State variables | abundance; binding |
| Evidence | [C18 §57](../chapters/18_cell_cycle.md#57-cdk-inhibitor-proteins), [C18 §58](../chapters/18_cell_cycle.md#58-p27-source-example) |
| Uncertainty / display limits | Not a universal checkpoint mechanism. |

<a id="e-securin"></a>

### E.securin — Securin

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Pre-anaphase cell-cycle control |
| Biology / relations | Inhibits separase until APC/C-dependent destruction. |
| State variables | abundance; separase binding; ubiquitination |
| Evidence | [C18 §155](../chapters/18_cell_cycle.md#155-securin), [C18 §156](../chapters/18_cell_cycle.md#156-apcc-destroys-securin) |
| Uncertainty / display limits | APC/C does not directly cleave cohesin. |

<a id="e-separase"></a>

### E.separase — Separase

| Field | Record |
|---|---|
| Kind / scoped aliases | type; protease |
| Exists in / context | Anaphase sister-separation context |
| Biology / relations | Cleaves cohesin when released from securin inhibition. |
| State variables | inhibition; activity; substrate |
| Evidence | [C18 §154](../chapters/18_cell_cycle.md#154-separase), [C18 §156](../chapters/18_cell_cycle.md#156-apcc-destroys-securin) |
| Uncertainty / display limits | Distinct from ubiquitin ligase and proteasome. |

<a id="e-bcl2_family"></a>

### E.bcl2_family — Bcl2 family

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Intrinsic apoptotic regulation |
| Biology / relations | Contains both pro-apoptotic and anti-apoptotic proteins. |
| State variables | member; partners; activity; compartment |
| Evidence | [C18 §232](../chapters/18_cell_cycle.md#232-bcl2-family) |
| Uncertainty / display limits | Family name is not an invariant survival sign. |

<a id="e-bcl2"></a>

### E.bcl2 — Bcl2

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source survival/apoptosis examples |
| Biology / relations | Anti-apoptotic family member opposing Bax/Bak-mediated cytochrome-c release; affected by Bad context. |
| State variables | expression; inhibitory binding; activity |
| Evidence | [C16 §196](../chapters/16_cell_signaling.md#196-bcl2), [C18 §234](../chapters/18_cell_cycle.md#234-bcl2), [C18 §245](../chapters/18_cell_cycle.md#245-survival-signaling-can-raise-bcl2) |
| Uncertainty / display limits | Not all Bcl2-family members act this way. |

<a id="e-bax"></a>

### E.bax — Bax

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Mitochondrial apoptotic release context |
| Biology / relations | Pro-apoptotic Bcl2-family protein promoting cytochrome-c release. |
| State variables | activation; membrane association |
| Evidence | [C18 §233](../chapters/18_cell_cycle.md#233-bax-and-bak), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release) |
| Uncertainty / display limits | Pore architecture remains a verification item. |

<a id="e-bak"></a>

### E.bak — Bak

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Mitochondrial apoptotic release context |
| Biology / relations | Pro-apoptotic Bcl2-family protein promoting cytochrome-c release. |
| State variables | activation; membrane association |
| Evidence | [C18 §233](../chapters/18_cell_cycle.md#233-bax-and-bak), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release) |
| Uncertainty / display limits | Do not merge molecular identity with Bax. |

<a id="e-bad"></a>

### E.bad — Bad

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source Akt-dependent survival pathway |
| Biology / relations | Pro-apoptotic regulator inhibited by Akt phosphorylation in the source model. |
| State variables | phosphorylation; Bcl2 association |
| Evidence | [C16 §195](../chapters/16_cell_signaling.md#195-bad), [C16 §196](../chapters/16_cell_signaling.md#196-bcl2) |
| Uncertainty / display limits | Effect is target/site/context specific. |

<a id="e-caspase"></a>

### E.caspase — Caspase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; initiator/executioner roles distinguished |
| Exists in / context | Apoptotic animal-cell contexts |
| Biology / relations | Proteases activated from inactive precursors; executioners cleave cellular substrates. |
| State variables | precursor/active; role; substrate |
| Evidence | [C18 §225](../chapters/18_cell_cycle.md#225-caspases), [C18 §226](../chapters/18_cell_cycle.md#226-caspases-are-synthesized-inactive), [C18 §227](../chapters/18_cell_cycle.md#227-initiator-caspases), [C18 §228](../chapters/18_cell_cycle.md#228-executioner-caspases) |
| Uncertainty / display limits | Caspase-9 is a source initiator subtype, not all caspases. |

<a id="e-cytochrome_c"></a>

### E.cytochrome_c — Cytochrome c

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Mitochondrial electron transport; cytosol after apoptotic release |
| Biology / relations | One protein type transfers respiratory electrons and signals apoptosis when released to cytosol. |
| State variables | redox; compartment; partners |
| Evidence | [C14 §119](../chapters/14_energy_generation_mitochondria_chloroplasts.md#119-cytochrome-c), [C18 §235](../chapters/18_cell_cycle.md#235-mitochondrial-cytochrome-c-release), [C18 §236](../chapters/18_cell_cycle.md#236-apoptosome) |
| Uncertainty / display limits | Location change is causal; no second unrelated apoptotic molecule. |

<a id="e-glucose_6_phosphate"></a>

### E.glucose_6_phosphate — Glucose 6-phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; G6P |
| Exists in / context | Source cytosolic glucose metabolism |
| Biology / relations | Product of hexokinase and branch-point metabolite; chemical identity differs from glucose. |
| State variables | compartment; carbon provenance; amount |
| Evidence | [C13 §36](../chapters/13_how_cells_obtain_energy_from_food.md#36-glycolysis-step-1), [C13 §37](../chapters/13_how_cells_obtain_energy_from_food.md#37-glycolysis-step-2), [C13 §128](../chapters/13_how_cells_obtain_energy_from_food.md#128-reciprocal-glycogen-regulation) |
| Uncertainty / display limits | No universal phosphate hydrolysis energy. |

<a id="e-fructose_6_phosphate"></a>

### E.fructose_6_phosphate — Fructose 6-phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; F6P |
| Exists in / context | Source glycolysis/gluconeogenesis |
| Biology / relations | Metabolite interconverted with G6P and phosphorylated by PFK. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §37](../chapters/13_how_cells_obtain_energy_from_food.md#37-glycolysis-step-2), [C13 §38](../chapters/13_how_cells_obtain_energy_from_food.md#38-glycolysis-step-3), [C13 §116](../chapters/13_how_cells_obtain_energy_from_food.md#116-pfk-branch) |
| Uncertainty / display limits | Pathway direction depends on reaction context. |

<a id="e-fructose_1_6_bisphosphate"></a>

### E.fructose_1_6_bisphosphate — Fructose 1,6-bisphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source cytosolic sugar metabolism |
| Biology / relations | PFK product cleaved into two three-carbon intermediates; distinct gluconeogenic bypass substrate. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §38](../chapters/13_how_cells_obtain_energy_from_food.md#38-glycolysis-step-3), [C13 §39](../chapters/13_how_cells_obtain_energy_from_food.md#39-glycolysis-step-4), [C13 §117](../chapters/13_how_cells_obtain_energy_from_food.md#117-gluconeogenic-bypass) |
| Uncertainty / display limits | Not the same chemical species as F6P. |

<a id="e-glyceraldehyde_3_phosphate"></a>

### E.glyceraldehyde_3_phosphate — Glyceraldehyde 3-phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; G3P |
| Exists in / context | Cytosolic glycolysis and chloroplast carbon fixation |
| Biology / relations | One metabolite type reused in two pathways with separate compartment pools. |
| State variables | compartment; carbon provenance; amount |
| Evidence | [C13 §39](../chapters/13_how_cells_obtain_energy_from_food.md#39-glycolysis-step-4), [C13 §40](../chapters/13_how_cells_obtain_energy_from_food.md#40-glycolysis-step-5), [C13 §42](../chapters/13_how_cells_obtain_energy_from_food.md#42-glycolysis-step-6), [C14 §200](../chapters/14_energy_generation_mitochondria_chloroplasts.md#200-calvin-cycle), [C14 §201](../chapters/14_energy_generation_mitochondria_chloroplasts.md#201-calvin-cycle-carbon-stoichiometry) |
| Uncertainty / display limits | Sharing identity does not make the compartments freely permeable. |

<a id="e-dihydroxyacetone_phosphate"></a>

### E.dihydroxyacetone_phosphate — Dihydroxyacetone phosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; DHAP |
| Exists in / context | Cytosolic glycolysis |
| Biology / relations | Aldolase product interconverted with G3P. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §39](../chapters/13_how_cells_obtain_energy_from_food.md#39-glycolysis-step-4), [C13 §40](../chapters/13_how_cells_obtain_energy_from_food.md#40-glycolysis-step-5) |
| Uncertainty / display limits | Distinct from G3P until chemical isomerization. |

<a id="e-bisphosphoglycerate_1_3"></a>

### E.bisphosphoglycerate_1_3 — 1,3-bisphosphoglycerate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; 1,3-BPG |
| Exists in / context | Source glycolysis |
| Biology / relations | Oxidation/Pi incorporation product donating phosphate to ADP in the next step. |
| State variables | enzyme binding; compartment; carbon/phosphate provenance |
| Evidence | [C13 §42](../chapters/13_how_cells_obtain_energy_from_food.md#42-glycolysis-step-6), [C13 §46](../chapters/13_how_cells_obtain_energy_from_food.md#46-step-6-inorganic-phosphate), [C13 §47](../chapters/13_how_cells_obtain_energy_from_food.md#47-glycolysis-step-7) |
| Uncertainty / display limits | The coupled reaction is more than bond breaking. |

<a id="e-phosphoglycerate_3"></a>

### E.phosphoglycerate_3 — 3-phosphoglycerate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; 3-PG |
| Exists in / context | Glycolysis and Calvin-cycle contexts |
| Biology / relations | Metabolite participating in distinct pathways in distinct compartments. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §47](../chapters/13_how_cells_obtain_energy_from_food.md#47-glycolysis-step-7), [C13 §49](../chapters/13_how_cells_obtain_energy_from_food.md#49-glycolysis-step-8), [C14 §191](../chapters/14_energy_generation_mitochondria_chloroplasts.md#191-rubisco-reaction) |
| Uncertainty / display limits | No pooled cell-wide amount without compartment resolution. |

<a id="e-phosphoglycerate_2"></a>

### E.phosphoglycerate_2 — 2-phosphoglycerate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; 2-PG |
| Exists in / context | Source glycolysis |
| Biology / relations | Intermediate converted to phosphoenolpyruvate by dehydration. |
| State variables | compartment; reaction state |
| Evidence | [C13 §49](../chapters/13_how_cells_obtain_energy_from_food.md#49-glycolysis-step-8), [C13 §50](../chapters/13_how_cells_obtain_energy_from_food.md#50-glycolysis-step-9) |
| Uncertainty / display limits | Not an alias of 3-PG. |

<a id="e-phosphoenolpyruvate"></a>

### E.phosphoenolpyruvate — Phosphoenolpyruvate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; PEP |
| Exists in / context | Source glycolysis |
| Biology / relations | Phosphate donor converted to pyruvate in substrate-level phosphorylation. |
| State variables | compartment; carbon/phosphate provenance |
| Evidence | [C13 §50](../chapters/13_how_cells_obtain_energy_from_food.md#50-glycolysis-step-9), [C13 §51](../chapters/13_how_cells_obtain_energy_from_food.md#51-glycolysis-step-10) |
| Uncertainty / display limits | Standard reaction energy and physiological energy are not identical. |

<a id="e-pyruvate"></a>

### E.pyruvate — Pyruvate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Cytosol and mitochondrial matrix in source aerobic eukaryotic pathway |
| Biology / relations | Glycolysis product with fermentation, acetyl-CoA and biosynthetic fates. |
| State variables | compartment; carbon provenance; enzyme binding |
| Evidence | [C13 §19](../chapters/13_how_cells_obtain_energy_from_food.md#19-pyruvate-enters-mitochondria), [C13 §27](../chapters/13_how_cells_obtain_energy_from_food.md#27-glycolysis-definition), [C13 §112](../chapters/13_how_cells_obtain_energy_from_food.md#112-pyruvate-fates) |
| Uncertainty / display limits | Transport preserves identity; PDH reaction creates different products. |

<a id="e-lactate"></a>

### E.lactate — Lactate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source muscle fermentation example |
| Biology / relations | Product of pyruvate reduction coupled to NAD+ regeneration. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §57](../chapters/13_how_cells_obtain_energy_from_food.md#57-lactate-fermentation) |
| Uncertainty / display limits | Preserve source oxygen-context framing; no added modern physiological claims. |

<a id="e-ethanol"></a>

### E.ethanol — Ethanol

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source yeast fermentation and bilayer-permeability example |
| Biology / relations | Fermentation product associated with CO2 output and NAD+ regeneration. |
| State variables | compartment; amount |
| Evidence | [C13 §58](../chapters/13_how_cells_obtain_energy_from_food.md#58-yeast-fermentation), [C12 §18](../chapters/12_transport_across_cell_membranes.md#18-small-uncharged-polar-molecules-cross-more-slowly) |
| Uncertainty / display limits | Not equivalent to lactate fermentation. |

<a id="e-oxaloacetate"></a>

### E.oxaloacetate — Oxaloacetate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA/biosynthetic context |
| Biology / relations | Combines with acetyl CoA; regenerated during the cycle; precursor for other reactions. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §82](../chapters/13_how_cells_obtain_energy_from_food.md#82-cycle-entry), [C13 §99](../chapters/13_how_cells_obtain_energy_from_food.md#99-tca-step-8), [C13 §103](../chapters/13_how_cells_obtain_energy_from_food.md#103-oxaloacetate-as-biosynthetic-precursor) |
| Uncertainty / display limits | Not consumed permanently by a completed source TCA turn. |

<a id="e-citrate"></a>

### E.citrate — Citrate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA context |
| Biology / relations | Product of acetyl-CoA/oxaloacetate condensation. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §91](../chapters/13_how_cells_obtain_energy_from_food.md#91-tca-step-1), [C13 §92](../chapters/13_how_cells_obtain_energy_from_food.md#92-tca-step-2) |
| Uncertainty / display limits | Chemical cycle does not require circular spatial arrangement. |

<a id="e-isocitrate"></a>

### E.isocitrate — Isocitrate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA context |
| Biology / relations | Citrate isomer feeding oxidative decarboxylation. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §92](../chapters/13_how_cells_obtain_energy_from_food.md#92-tca-step-2), [C13 §93](../chapters/13_how_cells_obtain_energy_from_food.md#93-tca-step-3) |
| Uncertainty / display limits | Not an alias for citrate. |

<a id="e-alpha_ketoglutarate"></a>

### E.alpha_ketoglutarate — α-ketoglutarate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; alpha-ketoglutarate |
| Exists in / context | Source TCA and biosynthesis |
| Biology / relations | Carbon intermediate feeding succinyl CoA and glutamate-related biosynthesis. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §93](../chapters/13_how_cells_obtain_energy_from_food.md#93-tca-step-3), [C13 §94](../chapters/13_how_cells_obtain_energy_from_food.md#94-tca-step-4), [C13 §104](../chapters/13_how_cells_obtain_energy_from_food.md#104-α-ketoglutarate-as-biosynthetic-precursor) |
| Uncertainty / display limits | Branch fluxes require context. |

<a id="e-succinyl_coa"></a>

### E.succinyl_coa — Succinyl CoA

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA context |
| Biology / relations | Activated acyl intermediate preceding source GTP/ATP formation. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §94](../chapters/13_how_cells_obtain_energy_from_food.md#94-tca-step-4), [C13 §96](../chapters/13_how_cells_obtain_energy_from_food.md#96-tca-step-5) |
| Uncertainty / display limits | Product nucleotide depends on source organism context. |

<a id="e-succinate"></a>

### E.succinate — Succinate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | TCA/inner-mitochondrial-membrane interface |
| Biology / relations | Succinate-dehydrogenase substrate; source malonate inhibition example. |
| State variables | enzyme binding; compartment; carbon provenance |
| Evidence | [C13 §96](../chapters/13_how_cells_obtain_energy_from_food.md#96-tca-step-5), [C13 §97](../chapters/13_how_cells_obtain_energy_from_food.md#97-tca-step-6), [C13 §143](../chapters/13_how_cells_obtain_energy_from_food.md#143-malonate), [C14 §77](../chapters/14_energy_generation_mitochondria_chloroplasts.md#77-succinate-dehydrogenase-is-membrane-embedded) |
| Uncertainty / display limits | Matrix pathway label does not make its membrane enzyme soluble. |

<a id="e-fumarate"></a>

### E.fumarate — Fumarate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA context |
| Biology / relations | Intermediate hydrated to malate. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §97](../chapters/13_how_cells_obtain_energy_from_food.md#97-tca-step-6), [C13 §98](../chapters/13_how_cells_obtain_energy_from_food.md#98-tca-step-7) |
| Uncertainty / display limits | No invented kinetic constants. |

<a id="e-malate"></a>

### E.malate — Malate

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source TCA context |
| Biology / relations | Oxidation regenerates oxaloacetate with NADH formation. |
| State variables | compartment; carbon provenance |
| Evidence | [C13 §98](../chapters/13_how_cells_obtain_energy_from_food.md#98-tca-step-7), [C13 §99](../chapters/13_how_cells_obtain_energy_from_food.md#99-tca-step-8) |
| Uncertainty / display limits | Complete atom mapping remains unspecified. |

<a id="e-rubp"></a>

### E.rubp — Ribulose 1,5-bisphosphate

| Field | Record |
|---|---|
| Kind / scoped aliases | type; RuBP |
| Exists in / context | Chloroplast stroma in source carbon fixation |
| Biology / relations | Rubisco substrate regenerated through the Calvin cycle. |
| State variables | compartment; carbon provenance; amount |
| Evidence | [C14 §191](../chapters/14_energy_generation_mitochondria_chloroplasts.md#191-rubisco-reaction), [C14 §199](../chapters/14_energy_generation_mitochondria_chloroplasts.md#199-rubp-is-an-energy-rich-substrate), [C14 §204](../chapters/14_energy_generation_mitochondria_chloroplasts.md#204-rubp-regeneration-stoichiometry) |
| Uncertainty / display limits | Omitted regeneration intermediates are not invented. |

<a id="e-quinone_q"></a>

### E.quinone_q — Ubiquinone carrier

| Field | Record |
|---|---|
| Kind / scoped aliases | type; Q; redox forms explicit |
| Exists in / context | Inner mitochondrial membrane |
| Biology / relations | Hydrophobic mobile electron carrier with proton-coupled redox states. |
| State variables | oxidized/reduced; electrons/protons carried; membrane position |
| Evidence | [C14 §115](../chapters/14_energy_generation_mitochondria_chloroplasts.md#115-ubiquinone), [C14 §116](../chapters/14_energy_generation_mitochondria_chloroplasts.md#116-ubiquinone-electron-capacity), [C14 §117](../chapters/14_energy_generation_mitochondria_chloroplasts.md#117-ubiquinone-proton-coupling), [C14 §118](../chapters/14_energy_generation_mitochondria_chloroplasts.md#118-ubiquinone-hydrophobic-tail) |
| Uncertainty / display limits | Not cytochrome c; distinguish phases and chemical forms. |

<a id="e-plastoquinone"></a>

### E.plastoquinone — Plastoquinone carrier

| Field | Record |
|---|---|
| Kind / scoped aliases | type; redox forms explicit |
| Exists in / context | Thylakoid membrane |
| Biology / relations | Mobile quinone linking PSII to cytochrome b6-f. |
| State variables | redox; proton occupancy; membrane position |
| Evidence | [C14 §169](../chapters/14_energy_generation_mitochondria_chloroplasts.md#169-photosystem-ii-output-carrier), [C14 §170](../chapters/14_energy_generation_mitochondria_chloroplasts.md#170-plastoquinone), [C14 §171](../chapters/14_energy_generation_mitochondria_chloroplasts.md#171-cytochrome-b6-f-complex) |
| Uncertainty / display limits | Analogous role does not mean identical to ubiquinone. |

<a id="e-ferredoxin"></a>

### E.ferredoxin — Ferredoxin

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source photosynthetic electron transport |
| Biology / relations | Small Fe–S electron carrier between PSI and FNR. |
| State variables | redox; protein partners; compartment |
| Evidence | [C14 §174](../chapters/14_energy_generation_mitochondria_chloroplasts.md#174-photosystem-i-output-carrier), [C14 §175](../chapters/14_energy_generation_mitochondria_chloroplasts.md#175-ferredoxin), [C14 §176](../chapters/14_energy_generation_mitochondria_chloroplasts.md#176-fnr) |
| Uncertainty / display limits | No unspecified universal subunit structure. |

<a id="e-plastocyanin"></a>

### E.plastocyanin — Plastocyanin

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source thylakoid electron-transfer route |
| Biology / relations | Copper-containing mobile carrier delivering electrons to PSI. |
| State variables | redox; location; partner |
| Evidence | [C14 §183](../chapters/14_energy_generation_mitochondria_chloroplasts.md#183-photosystem-i-receives-electrons-from-psii), [C14 §184](../chapters/14_energy_generation_mitochondria_chloroplasts.md#184-plastocyanin) |
| Uncertainty / display limits | No direct substitution with cytochrome c. |

<a id="e-chlorophyll"></a>

### E.chlorophyll — Chlorophyll

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Photosynthetic pigment/protein complexes |
| Biology / relations | Membrane-anchored pigment with Mg-containing conjugated ring; excitation and redox state are distinct. |
| State variables | pigment subtype; excitation; redox; complex membership |
| Evidence | [C14 §157](../chapters/14_energy_generation_mitochondria_chloroplasts.md#157-chlorophyll-structure), [C14 §158](../chapters/14_energy_generation_mitochondria_chloroplasts.md#158-light-excitation), [C14 §162](../chapters/14_energy_generation_mitochondria_chloroplasts.md#162-energy-transfer-in-antenna) |
| Uncertainty / display limits | Antenna energy transfer is not electron movement between all pigments. |

<a id="e-heme"></a>

### E.heme — Heme

| Field | Record |
|---|---|
| Kind / scoped aliases | family/cofactor |
| Exists in / context | Source electron-transfer and protein contexts |
| Biology / relations | Protein-bound cofactor class with context-dependent electronic properties. |
| State variables | chemical member; protein binding; redox |
| Evidence | [C14 §24](../chapters/14_energy_generation_mitochondria_chloroplasts.md#24-table-141-heme-and-fes-synthesis), [C14 §113](../chapters/14_energy_generation_mitochondria_chloroplasts.md#113-hemecytochrome-carriers), [C14 §114](../chapters/14_energy_generation_mitochondria_chloroplasts.md#114-protein-environment-tunes-redox-potential) |
| Uncertainty / display limits | Cofactor identity alone does not set a universal redox potential. |

<a id="e-iron_sulfur_cluster"></a>

### E.iron_sulfur_cluster — Iron–sulfur cluster

| Field | Record |
|---|---|
| Kind / scoped aliases | family/cofactor; Fe–S center |
| Exists in / context | Source mitochondrial/ferredoxin contexts |
| Biology / relations | Protein-associated electron-transfer cofactor; synthesis and protein environment matter. |
| State variables | composition; protein binding; redox |
| Evidence | [C14 §24](../chapters/14_energy_generation_mitochondria_chloroplasts.md#24-table-141-heme-and-fes-synthesis), [C14 §112](../chapters/14_energy_generation_mitochondria_chloroplasts.md#112-ironsulfur-centers), [C14 §114](../chapters/14_energy_generation_mitochondria_chloroplasts.md#114-protein-environment-tunes-redox-potential), [C14 §175](../chapters/14_energy_generation_mitochondria_chloroplasts.md#175-ferredoxin) |
| Uncertainty / display limits | Exact cluster geometry not supplied by the family label. |

<a id="e-retinal"></a>

### E.retinal — Retinal

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Bacteriorhodopsin chromophore context |
| Biology / relations | Light-absorbing covalently associated nonprotein chromophore whose shape change drives the source proton-pump cycle. |
| State variables | conformation; excitation; protein linkage |
| Evidence | [C11 §228](../chapters/11_membrane_structure.md#228-bacteriorhodopsin-chromophore), [C11 §229](../chapters/11_membrane_structure.md#229-retinal-is-covalently-attached), [C11 §230](../chapters/11_membrane_structure.md#230-light-triggered-conformational-change) |
| Uncertainty / display limits | Seven helices do not make bacteriorhodopsin a GPCR. |

<a id="e-adenylyl_cyclase"></a>

### E.adenylyl_cyclase — Adenylyl cyclase

| Field | Record |
|---|---|
| Kind / scoped aliases | type; enzyme |
| Exists in / context | Source GPCR membrane signaling |
| Biology / relations | Generates cAMP from ATP downstream of appropriate G proteins. |
| State variables | activity; G-protein association; compartment |
| Evidence | [C16 §97](../chapters/16_cell_signaling.md#97-g-protein-regulated-enzymes), [C16 §101](../chapters/16_cell_signaling.md#101-adenylyl-cyclase) |
| Uncertainty / display limits | Not every GPCR activates this route. |

<a id="e-phospholipase_c"></a>

### E.phospholipase_c — Phospholipase C

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PLC |
| Exists in / context | Source cytosolic membrane-face signaling |
| Biology / relations | Cleaves an inositol phospholipid to soluble IP3 and membrane DAG. |
| State variables | activation; substrate; membrane association |
| Evidence | [C16 §118](../chapters/16_cell_signaling.md#118-gq), [C16 §119](../chapters/16_cell_signaling.md#119-inositol-phospholipid-pathway), [C16 §120](../chapters/16_cell_signaling.md#120-plc-products) |
| Uncertainty / display limits | No invented exact substrate composition beyond source specification. |

<a id="e-pka"></a>

### E.pka — Protein kinase A

| Field | Record |
|---|---|
| Kind / scoped aliases | type; cAMP-dependent protein kinase; PKA |
| Exists in / context | Source cAMP effector contexts |
| Biology / relations | cAMP-dependent regulatory/catalytic arrangement controlling selected targets. |
| State variables | cAMP binding; subunit association; kinase activity |
| Evidence | [C16 §109](../chapters/16_cell_signaling.md#109-pka), [C16 §110](../chapters/16_cell_signaling.md#110-pka-activation), [C16 §111](../chapters/16_cell_signaling.md#111-pka-substrate-specificity) |
| Uncertainty / display limits | Same cAMP rise does not force identical cellular output. |

<a id="e-pkc"></a>

### E.pkc — Protein kinase C

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PKC |
| Exists in / context | Source DAG/calcium-responsive pathway |
| Biology / relations | Serine/threonine kinase recruited/activated with DAG and calcium in this source model. |
| State variables | membrane recruitment; cofactors; activity |
| Evidence | [C16 §125](../chapters/16_cell_signaling.md#125-dag--ca2-activate-pkc), [C16 §126](../chapters/16_cell_signaling.md#126-pkc) |
| Uncertainty / display limits | Do not generalize this activation requirement to unspecified family variants. |

<a id="e-mapk"></a>

### E.mapk — MAP kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; MAPK |
| Exists in / context | Source Ras signaling module |
| Biology / relations | Downstream kinase of MAPKKK→MAPKK→MAPK; modifies selected effectors/transcription regulators. |
| State variables | phosphorylation; activity; localization |
| Evidence | [C16 §184](../chapters/16_cell_signaling.md#184-map-kinase-module), [C16 §185](../chapters/16_cell_signaling.md#185-ras-activates-mapk-cascade), [C16 §186](../chapters/16_cell_signaling.md#186-map-kinase-outputs) |
| Uncertainty / display limits | MAPK pathway is not the only RTK output. |

<a id="e-pi3k"></a>

### E.pi3k — Phosphoinositide 3-kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | family; PI3K |
| Exists in / context | Source cytosolic plasma-membrane leaflet |
| Biology / relations | Phosphorylates inositol phospholipids, creating docking sites for signaling proteins. |
| State variables | activation; lipid substrate; localization |
| Evidence | [C16 §190](../chapters/16_cell_signaling.md#190-pi-3-kinase), [C16 §191](../chapters/16_cell_signaling.md#191-lipid-docking-sites) |
| Uncertainty / display limits | Do not use protein-kinase substrate rules for this lipid reaction. |

<a id="e-akt"></a>

### E.akt — Akt

| Field | Record |
|---|---|
| Kind / scoped aliases | type; protein kinase B; PKB |
| Exists in / context | Source PI3K survival/growth pathway |
| Biology / relations | Membrane recruitment and phosphorylation enable downstream activity. |
| State variables | recruitment; phosphorylation; activity; location |
| Evidence | [C16 §192](../chapters/16_cell_signaling.md#192-akt), [C16 §193](../chapters/16_cell_signaling.md#193-akt-activation), [C16 §194](../chapters/16_cell_signaling.md#194-activated-akt-leaves-membrane) |
| Uncertainty / display limits | Touching the membrane alone does not activate Akt. |

<a id="e-tor"></a>

### E.tor — Tor kinase

| Field | Record |
|---|---|
| Kind / scoped aliases | type; source name Tor |
| Exists in / context | Source Akt-linked cell growth |
| Biology / relations | Kinase linked to increased protein synthesis and reduced degradation in the source model. |
| State variables | activity; regulators; targets |
| Evidence | [C16 §198](../chapters/16_cell_signaling.md#198-tor), [C16 §199](../chapters/16_cell_signaling.md#199-tor-growth-outputs), [C18 §214](../chapters/18_cell_cycle.md#214-rtkpi3kakttor-growth-pathway) |
| Uncertainty / display limits | Do not invent exact intervening proteins or modern complex taxonomy. |

<a id="e-notch"></a>

### E.notch — Notch

| Field | Record |
|---|---|
| Kind / scoped aliases | family/type |
| Exists in / context | Adjacent-cell contact signaling |
| Biology / relations | Receptor cleaved after Delta binding; released intracellular fragment participates in nuclear regulation. |
| State variables | ligand; cleavage; fragment lineage; localization |
| Evidence | [C16 §215](../chapters/16_cell_signaling.md#215-notch), [C16 §216](../chapters/16_cell_signaling.md#216-delta), [C16 §217](../chapters/16_cell_signaling.md#217-notch-cleavage), [C16 §218](../chapters/16_cell_signaling.md#218-notch-intracellular-tail) |
| Uncertainty / display limits | Cleaved fragment is related material, not intact receptor teleportation. |

<a id="e-delta"></a>

### E.delta — Delta

| Field | Record |
|---|---|
| Kind / scoped aliases | family/type |
| Exists in / context | Signal-presenting neighboring cell membrane |
| Biology / relations | Membrane-bound ligand for source Notch contact pathway. |
| State variables | membrane association; receptor binding |
| Evidence | [C16 §216](../chapters/16_cell_signaling.md#216-delta), [C16 §219](../chapters/16_cell_signaling.md#219-notch-lateral-inhibition) |
| Uncertainty / display limits | Requires neighboring-cell context. |

<a id="e-wee1"></a>

### E.wee1 — Wee1

| Field | Record |
|---|---|
| Kind / scoped aliases | type; inhibitory kinase |
| Exists in / context | Source M-Cdk control |
| Biology / relations | Adds inhibitory M-Cdk phosphates. |
| State variables | activity; substrate binding |
| Evidence | [C18 §52](../chapters/18_cell_cycle.md#52-wee1), [C18 §55](../chapters/18_cell_cycle.md#55-m-cdk-positive-feedback) |
| Uncertainty / display limits | Kinase action can inhibit its target. |

<a id="e-cdc25"></a>

### E.cdc25 — Cdc25

| Field | Record |
|---|---|
| Kind / scoped aliases | type; phosphatase |
| Exists in / context | Source mitotic-entry control |
| Biology / relations | Removes inhibitory M-Cdk phosphates; suppressed by replication-stress response. |
| State variables | activity; checkpoint inhibition |
| Evidence | [C18 §53](../chapters/18_cell_cycle.md#53-cdc25), [C18 §55](../chapters/18_cell_cycle.md#55-m-cdk-positive-feedback), [C18 §105](../chapters/18_cell_cycle.md#105-replication-stress-checkpoint) |
| Uncertainty / display limits | Phosphatase action can activate its target. |

<a id="e-cdc6"></a>

### E.cdc6 — Cdc6

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source G1 origin licensing |
| Biology / relations | Cooperates with ORC in helicase loading; phosphorylation blocks reloading in source model. |
| State variables | abundance; origin binding; phosphorylation |
| Evidence | [C18 §100](../chapters/18_cell_cycle.md#100-cdc6), [C18 §101](../chapters/18_cell_cycle.md#101-origin-loading), [C18 §103](../chapters/18_cell_cycle.md#103-s-cdk-blocks-re-replication) |
| Uncertainty / display limits | Loading and firing are different states. |

<a id="e-histone"></a>

### E.histone — Histone

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source eukaryotic chromatin |
| Biology / relations | DNA-associated protein family; core histones and linker H1 have distinct assembly roles. |
| State variables | variant; modifications; DNA/complex association |
| Evidence | [C05 §94](../chapters/05_dna_chromosomes.md#94-histones-and-non-histone-proteins), [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §101](../chapters/05_dna_chromosomes.md#101-histone-h1-is-not-a-core-octamer-histone), [C05 §115](../chapters/05_dna_chromosomes.md#115-histone-charge), [C05 §117](../chapters/05_dna_chromosomes.md#117-histone-n-terminal-tails), [C05 §118](../chapters/05_dna_chromosomes.md#118-histone-tails-are-modification-platforms), [C05 §120](../chapters/05_dna_chromosomes.md#120-histone-h1) |
| Uncertainty / display limits | Family inventory is not added to member counts; no universal variant or H1 occupancy. |

<a id="e-histone_h2a"></a>

### E.histone_h2a — Histone H2A

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source nucleosome core |
| Biology / relations | One of the four core histone classes; source core contains two copies. |
| State variables | variant; modifications; octamer membership |
| Evidence | [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §117](../chapters/05_dna_chromosomes.md#117-histone-n-terminal-tails), [C05 §118](../chapters/05_dna_chromosomes.md#118-histone-tails-are-modification-platforms) |
| Uncertainty / display limits | Two copies is the cited core stoichiometry, not all variant-containing assemblies. |

<a id="e-histone_h2b"></a>

### E.histone_h2b — Histone H2B

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source nucleosome core |
| Biology / relations | One of the four core histone classes; source core contains two copies. |
| State variables | variant; modifications; octamer membership |
| Evidence | [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §117](../chapters/05_dna_chromosomes.md#117-histone-n-terminal-tails), [C05 §118](../chapters/05_dna_chromosomes.md#118-histone-tails-are-modification-platforms) |
| Uncertainty / display limits | Do not count assembled histones as an additional free pool. |

<a id="e-histone_h3"></a>

### E.histone_h3 — Histone H3

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source nucleosome core and chromatin inheritance |
| Biology / relations | Core histone class with modification-bearing tail; source core contains two copies. |
| State variables | variant; residue-specific marks; ancestry; octamer membership |
| Evidence | [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §160](../chapters/05_dna_chromosomes.md#160-histone-h3-tail--source-details), [C05 §161](../chapters/05_dna_chromosomes.md#161-histone-modification-sites-shown), [C05 §200](../chapters/05_dna_chromosomes.md#200-histone-inheritance-during-replication--source-model) |
| Uncertainty / display limits | Mark effects require site and context; parental/new histones retain lineage. |

<a id="e-histone_h4"></a>

### E.histone_h4 — Histone H4

| Field | Record |
|---|---|
| Kind / scoped aliases | family |
| Exists in / context | Source nucleosome core and chromatin inheritance |
| Biology / relations | Core histone class; source core contains two copies and source inheritance model distributes parental H3/H4. |
| State variables | variant; marks; ancestry; octamer membership |
| Evidence | [C05 §100](../chapters/05_dna_chromosomes.md#100-histone-octamer-stoichiometry), [C05 §119](../chapters/05_dna_chromosomes.md#119-histone-conservation), [C05 §200](../chapters/05_dna_chromosomes.md#200-histone-inheritance-during-replication--source-model) |
| Uncertainty / display limits | Source conservation comparison is a specific example, not identical sequence in all organisms. |

<a id="e-histone_h1"></a>

### E.histone_h1 — Histone H1

| Field | Record |
|---|---|
| Kind / scoped aliases | family; linker histone |
| Exists in / context | Source linker-associated chromatin contexts |
| Biology / relations | Binds near linker DNA and changes entry/exit packing; outside core octamer. |
| State variables | variant; occupancy; linker association |
| Evidence | [C05 §101](../chapters/05_dna_chromosomes.md#101-histone-h1-is-not-a-core-octamer-histone), [C05 §120](../chapters/05_dna_chromosomes.md#120-histone-h1), [C05 §121](../chapters/05_dna_chromosomes.md#121-histone-h1-is-context-dependent-not-one-universal-occupancy-state) |
| Uncertainty / display limits | Not a ninth core histone or universally bound to every nucleosome. |

<a id="e-udp_glucose"></a>

### E.udp_glucose — UDP-glucose

| Field | Record |
|---|---|
| Kind / scoped aliases | type |
| Exists in / context | Source cytosolic cellulose-synthesis substrate pool |
| Biology / relations | Activated sugar substrate supplied to plasma-membrane cellulose synthase. |
| State variables | compartment; amount; enzyme binding |
| Evidence | [C20 §28](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#28-udp-glucose) |
| Uncertainty / display limits | Not free glucose; complete reaction balance requires the source pathway context. |

<a id="e-procollagen"></a>

### E.procollagen — Procollagen

| Field | Record |
|---|---|
| Kind / scoped aliases | family; collagen precursor |
| Exists in / context | Secretory pathway and extracellular processing in source matrix-producing cells |
| Biology / relations | Terminal extensions inhibit premature fibril assembly; cleavage creates processed collagen products with lineage. |
| State variables | collagen type; extensions; compartment; processing |
| Evidence | [C20 §46](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#46-procollagen), [C20 §47](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#47-procollagen-proteinase), [C20 §48](../chapters/20_cell_communities_tissues_stem_cells_cancer.md#48-collagen-assembly-is-spatially-gated) |
| Uncertainty / display limits | Processing changes chemical species; intracellular precursor is not a mature collagen fibril. |

<a id="e-gaba"></a>

### E.gaba — Gamma-aminobutyric acid

| Field | Record |
|---|---|
| Kind / scoped aliases | type; GABA |
| Exists in / context | Source inhibitory-synapse examples |
| Biology / relations | Neurotransmitter with receptor-context-dependent effects. |
| State variables | compartment; release/clearance; receptor association |
| Evidence | [C12 §361](../chapters/12_transport_across_cell_membranes.md#361-inhibitory-neurotransmitter-source-examples), [C12 §362](../chapters/12_transport_across_cell_membranes.md#362-inhibitory-receptors), [C12 §380](../chapters/12_transport_across_cell_membranes.md#380-neurotransmitter-receptor-diversity) |
| Uncertainty / display limits | Do not assign universal electrical effect independent of receptor and gradients. |

<a id="e-transcription_regulator"></a>

### E.transcription_regulator — Sequence-specific transcription regulator

| Field | Record |
|---|---|
| Kind / scoped aliases | role; transcription factor in scoped usage |
| Exists in / context | Source bacterial/eukaryotic regulatory-DNA contexts |
| Biology / relations | Recognizes particular regulatory sequences and changes transcriptional regulation. |
| State variables | DNA site; occupancy; ligand/modification; partners |
| Evidence | [C08 §39](../chapters/08_control_of_gene_expression.md#39-transcription-regulator), [C08 §40](../chapters/08_control_of_gene_expression.md#40-general-transcription-factor-versus-transcription-regulator), [C08 §49](../chapters/08_control_of_gene_expression.md#49-protein-binding-need-not-break-dna-base-pairs) |
| Uncertainty / display limits | Not automatically a general transcription factor; regulator abundance estimates conflict within source. |

<a id="e-general_transcription_factor"></a>

### E.general_transcription_factor — General transcription factor

| Field | Record |
|---|---|
| Kind / scoped aliases | role/family |
| Exists in / context | Source eukaryotic transcription-initiation machinery |
| Biology / relations | Helps assemble or activate an initiation-competent polymerase complex in source promoter context. |
| State variables | promoter association; assembly membership; activity |
| Evidence | [C07 §79](../chapters/07_from_dna_to_protein.md#79-eukaryotic-transcription-initiation-requires-general-transcription-factors), [C07 §80](../chapters/07_from_dna_to_protein.md#80-general-transcription-factors), [C07 §85](../chapters/07_from_dna_to_protein.md#85-not-all-pol-ii-promoters-require-all-source-promoter-elements), [C07 §89](../chapters/07_from_dna_to_protein.md#89-additional-general-transcription-factors), [C07 §91](../chapters/07_from_dna_to_protein.md#91-assembly-order-is-not-universal), [C08 §40](../chapters/08_control_of_gene_expression.md#40-general-transcription-factor-versus-transcription-regulator) |
| Uncertainty / display limits | Do not merge with every sequence-specific regulator or impose one universal assembly order. |
