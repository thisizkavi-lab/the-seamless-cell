---
title: "The Seamless Cell — Science Canon — Chapter 15"
subtitle: "Intracellular Compartments and Protein Transport"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 15, printed pages 515–552 (PDF pages 550–587)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 15 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 15 establishes the spatial logistics of the eukaryotic cell: how membrane-enclosed compartments remain chemically distinct, how proteins are directed to the correct compartment, how membrane topology is preserved, and how vesicles move cargo between organelles and the cell surface.

The chapter's central causal logic is:

```text
protein sequence
→ sorting signal
→ recognition machinery
→ correct membrane/compartment
→ maintained organelle identity
```

and, for the endomembrane system:

```text
ER entry
→ folding / modification / quality control
→ coated-vesicle budding
→ Rab/tether recognition
→ SNARE docking/fusion
→ Golgi sorting
→ secretion / plasma membrane / endosome / lysosome
```

The most important project-level distinction is:

```text
LOCATION
≠
TOPOLOGY
≠
ORIENTATION
≠
TRAFFICKING ROUTE
≠
COMPARTMENT IDENTITY
```

A protein can move between organelles while preserving which side of a membrane faces the cytosol and which side faces a lumen.

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 15.
- `SOURCE_SCALE` — explicit quantitative value or stoichiometry from the source.
- `SOURCE_MODEL` — mechanism, historical framing, or pedagogical model in the source.
- `SOURCE_DERIVED` — direct inference/calculation based on source facts.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — textbook statement that should not silently become a current universal fact.
- `SOURCE_HYPOTHESIS` — evolutionary or mechanistic interpretation presented as a model.
- `PROJECT_CONSTRAINT` — simulation/visualization architecture rule for The Seamless Cell.
- `VERIFY_QUANT` — source number retained but not promoted to precise runtime truth.
- `LATER_CHAPTER_REFINEMENT` — deeper treatment belongs to another chapter or external verification.
- `DO_NOT_INFER` — hard guardrail against unsupported generalization.

## Chapter map

```text
MEMBRANE-ENCLOSED ORGANELLES

PROTEIN SORTING

VESICULAR TRANSPORT

SECRETORY PATHWAYS

ENDOCYTIC PATHWAYS
```

Supporting material:

```text
Figures 15–1 through 15–37
Tables 15–1 through 15–4
How We Know: Tracking Protein and Vesicle Transport
Essential Concepts
Questions 15–1 through 15–23
```

# 1. Compartmentalization prevents chemical chaos

Thousands of reactions occur simultaneously in a eukaryotic cell, including reactions that would interfere with one another if mixed indiscriminately. Membranes segregate incompatible processes and allow local chemical conditions to differ.

# 2. Membraneless and membrane-enclosed strategies are distinct

The source contrasts:
```text
biomolecular condensates / membraneless organelles
```
with:
```text
membrane-enclosed organelles
```
Condensates are dynamic assemblies held together by fluctuating noncovalent interactions; Chapter 15 focuses mainly on membrane-dependent compartmentalization.

# 3. Protein sorting

`protein sorting` = selective delivery of newly synthesized proteins from the cytosol to the compartment in which they will function.

# 4. Vesicular transport

`vesicular transport` = movement of proteins/lipids between endomembrane compartments by vesicles that bud from one membrane and fuse with another.

# 5. Exocytosis and endocytosis

```text
exocytosis:
vesicle → plasma membrane → cargo released outward

endocytosis:
plasma membrane → inward bud → cargo internalized
```

# 6. Basic organelle set

The chapter identifies:
- nucleus
- ER
- Golgi apparatus
- lysosomes
- endosomes
- mitochondria
- peroxisomes
- chloroplasts in photosynthetic cells

# 7. Nucleus

The nucleus contains the main genome and is the major compartment for DNA and RNA synthesis in the source summary.

# 8. Nuclear envelope

The nucleus is enclosed by a double membrane, the nuclear envelope, penetrated by nuclear pores.

# 9. Outer nuclear membrane continuity

The outer nuclear membrane is continuous with the ER membrane.

# 10. Endoplasmic reticulum

The ER is an interconnected network of membrane sheets/sacs/tubes and is the major site of new membrane synthesis.

# 11. Rough ER

ER regions with ribosomes attached to the cytosolic surface are called rough ER. These ribosomes synthesize proteins entering the ER lumen or membrane.

# 12. ER lumen

The interior aqueous compartment enclosed by ER membrane is the ER lumen.

# 13. Smooth ER

Smooth ER lacks bound ribosomes and can be specialized for functions such as steroid synthesis, detoxification, and Ca2+ storage depending on cell type.

# 14. Golgi apparatus

Receives proteins/lipids from ER, modifies them, sorts them, and dispatches them to downstream destinations.

# 15. Lysosomes

Membrane-enclosed compartments containing acid-dependent hydrolytic enzymes for controlled intracellular digestion.

# 16. Endosomes

Compartments that receive endocytosed material, sort receptors/cargo, recycle some components, and deliver other material toward lysosomal degradation.

# 17. Peroxisomes

Small organelles containing oxidative enzymes involved in breakdown of lipids/toxic compounds and in synthesis of some specialized lipids.

# 18. Mitochondria and chloroplasts

Double-membrane organelles specialized for oxidative phosphorylation and photosynthesis, respectively. Their relationship to the endomembrane system differs from ER/Golgi/endosome/lysosome trafficking.

# 19. Organelle positioning

ER, Golgi, mitochondria, chloroplasts, and vesicles can be positioned/moved using the cytoskeleton, especially microtubules and ATP-driven motor proteins.

`LATER_CHAPTER_REFINEMENT`: Chapter 17.

# 20. Total organelle volume

`SOURCE_SCALE` / `VERIFY_QUANT`: membrane-enclosed organelles together occupy nearly half of a typical eukaryotic cell's volume in the source framing.

# 21. ER membrane area

`SOURCE_SCALE` / `VERIFY_QUANT`: in a typical mammalian cell, ER membrane area is stated to be about:
```text
20–30 × plasma-membrane area
```

# 22. Table 15–2: hepatocyte cytosol

Source example:
```text
cytosol: 54% of cell volume
```

# 23. Table 15–2: hepatocyte mitochondria

Source example:
```text
mitochondria: 22% volume
~1700 per cell
```

# 24. Table 15–2: hepatocyte ER

Source example:
```text
ER: 12% volume
treated as one connected compartment
```

# 25. Table 15–2: hepatocyte nucleus

Source example:
```text
nucleus: 6% volume
~1 per cell
```

# 26. Table 15–2: hepatocyte Golgi

Source example:
```text
Golgi apparatus: 3% volume
```

# 27. Table 15–2: hepatocyte peroxisomes

Source example:
```text
peroxisomes: 1% volume
~400 per cell
```

# 28. Table 15–2: hepatocyte lysosomes

Source example:
```text
lysosomes: 1% volume
~300 per cell
```

# 29. Table 15–2: hepatocyte endosomes

Source example:
```text
endosomes: 1% volume
~200 per cell
```

# 30. Organelle isolation

Differential centrifugation can separate organelles, allowing their proteins/functions to be studied in purified preparations.

# 31. Isolated mitochondrion source test

The source notes purified mitochondria can oxidize pyruvate and produce ATP when supplied appropriately with ADP, phosphate, and O2.

# 32. Internal membranes and cell size

`SOURCE_HYPOTHESIS`: ancestral prokaryote-like cells could rely on plasma membrane for membrane-dependent functions because of high surface-area-to-volume ratio; larger eukaryotic cells likely required extensive internal membrane.

# 33. Eukaryotic volume comparison

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: present-day eukaryotic cells are described as having volumes about:
```text
1000–10,000 ×
```
those of small prokaryotic ancestors.

# 34. Endomembrane evolutionary model

The source proposes plasma-membrane protrusions/invaginations eventually produced internal membranes, the nuclear envelope, and components of the endomembrane system.

# 35. Endomembrane system in source

The source groups:
```text
ER
Golgi
peroxisomes
endosomes
lysosomes
```
as the endomembrane system.

# 36. Nuclear-envelope evolutionary model

Invaginating plasma membrane is proposed to have enclosed ancestral DNA and formed the double-membrane nuclear envelope.

# 37. Mitochondrial endosymbiosis in Figure 15–3

An aerobic bacterium is shown becoming engulfed and ultimately evolving into a mitochondrion.

# 38. Mitochondria/chloroplasts separate from vesicular traffic

Because these organelles arose separately by endosymbiosis, the source emphasizes that they do not participate in the routine vesicle traffic connecting ER, Golgi, endosomes, lysosomes, and plasma membrane.

# 39. Organelle growth requires membrane and proteins

To enlarge/duplicate organelles, cells must supply both:
- new lipids
- correctly targeted soluble and membrane proteins

# 40. Most proteins begin synthesis on cytosolic ribosomes

Virtually all nuclear-encoded protein synthesis begins on ribosomes in the cytosol. A small set of mitochondrially/chloroplast-encoded proteins is synthesized inside those organelles.

# 41. Default destination is cytosol

Proteins lacking sorting signals remain in the cytosol.

# 42. Sorting signals are encoded in amino-acid sequence

A sorting signal directs a protein to a specific organelle.

# 43. Three protein-transport mechanisms

```text
1. nuclear pores
2. membrane translocators
3. vesicular transport
```

# 44. Mechanism 1 — nuclear pore transport

Nuclear proteins move through gated nuclear pores. Large cargo requires sorting signals/receptors; small water-soluble molecules can diffuse.

# 45. Mechanism 2 — translocation across membranes

Proteins entering ER, mitochondria, or chloroplasts cross membranes through protein translocators and usually must be unfolded or still growing.

# 46. Mechanism 3 — vesicular transport

Proteins moving between endomembrane compartments remain on the same topological side of membrane while vesicles bud and fuse.

# 47. Energy requirement

Figure 15–4 states all three mechanisms require energy, although the immediate source/mechanical coupling differs.

# 48. Folded-state distinction

```text
nuclear-pore transport: folded cargo can pass

vesicle transport: cargo remains folded

most translocator-mediated import: protein usually unfolds
```

# 49. Signal-sequence length

`SOURCE_SCALE`:
```text
typically ~15–60 amino acids
```
for many sorting signals.

# 50. Signal sequences are necessary and sufficient

Removing a signal can prevent targeting; adding it to another protein can redirect that protein.

# 51. Signal chemistry can matter more than exact sequence

Hydrophobicity and placement of charged residues can be more important than exact amino-acid identity.

# 52. Table 15–3: ER import signal

The table gives an N-terminal hydrophobic example beginning:
```text
+H3N-Met-Met-Ser-Phe-Val-Ser-Leu-Leu-Leu-Val-Gly-Ile-Leu-Phe-Trp-Ala...
```
The chapter later summarizes ER signals as containing a core of eight or more hydrophobic amino acids.

# 53. Table 15–3: ER retention signal

Example:
```text
-Lys-Asp-Glu-Leu-COO−
```
a C-terminal four-residue retention/retrieval signal.

# 54. Table 15–3: mitochondrial import signal

The example is N-terminal and enriched in Arg and other characteristic residues rather than a long hydrophobic core.

# 55. Table 15–3: nuclear localization signal

Example:
```text
-Pro-Pro-Lys-Lys-Lys-Arg-Lys-Val-
```
rich in positively charged Lys/Arg.

# 56. Table 15–3: nuclear export signal

Example:
```text
-Met-Glu-Glu-Leu-Ser-Gln-Ala-Leu-Ala-Ser-Ser-Phe-
```

# 57. Table 15–3: peroxisomal import signal

Example:
```text
-Ser-Lys-Leu
```
a three-residue signal used by many peroxisomal proteins.

# 58. Signals may be cleaved or retained

Some targeting peptides are removed after arrival; nuclear localization signals are generally retained.

# 59. Nuclear lamina

Protein-filament meshwork lining the inner nuclear membrane and contributing structural support.

# 60. Inner nuclear membrane anchoring

Some inner-membrane proteins bind chromosomes or nuclear lamina, helping retain a composition distinct from the outer nuclear membrane.

# 61. Nuclear pore complex composition

`SOURCE_SCALE` / `VERIFY_QUANT`: a nuclear pore is described as containing:
```text
~30 different proteins
```
each present in multiple copies.

# 62. Nuclear-pore disordered meshwork

Many pore proteins contain extensive unstructured regions that form a soft, tangled, gel-like meshwork in the central channel.

# 63. Small molecules diffuse through pores

Small water-soluble molecules pass relatively freely/nonselectively.

# 64. Large cargo requires transport receptors

Macromolecules and complexes require sorting signals and nuclear transport receptors.

# 65. Nuclear localization signal

Typically one or two short clusters enriched in Lys/Arg.

# 66. Nuclear import receptor

Cytosolic receptor that binds NLS-containing cargo, interacts with pore fibrils/repeats, and escorts cargo through the pore.

# 67. Pore traversal model

Import receptors transiently disrupt interactions within the gel-like repeat meshwork and create a passage through the pore.

# 68. Ran GTPase

Monomeric GTPase providing directionality to nuclear transport.

# 69. Ran spatial asymmetry

```text
nucleus: high Ran-GTP
cytosol: mostly Ran-GDP
```

# 70. Ran-GEF

Located in nucleus in the source model; promotes GDP release/GTP binding on Ran.

# 71. Ran-GAP

Located in cytosol in the source model; stimulates Ran-GTP hydrolysis.

# 72. Nuclear import release step

In nucleus:
```text
Ran-GTP binds import receptor
→ cargo released
```

# 73. Import-receptor recycling

Import receptor + Ran-GTP returns to cytosol, GTP is hydrolyzed, Ran-GDP dissociates, receptor becomes available again.

# 74. Nuclear export

Export receptors recognize nuclear export signals and also use Ran-dependent directionality.

# 75. Nuclear cargo remains folded

Proteins are imported in folded state; large assembled complexes such as ribosomal subunits can traverse nuclear pores.

# 76. Most mitochondrial/chloroplast proteins are nuclear-encoded

They are synthesized in cytosol and imported after synthesis.

# 77. Typical mitochondrial/chloroplast signal location

Often an N-terminal signal sequence.

# 78. Double-membrane crossing

Matrix/stroma-targeted proteins must cross both outer and inner membranes.

# 79. Membrane contact import sites

The source describes specialized regions where outer and inner membranes are held close so translocation can occur across both.

# 80. Mitochondrial import requires unfolding

Precursor proteins unfold as they are translocated.

# 81. Signal cleavage after import

The targeting sequence is removed after successful import into matrix/stroma in the source model.

# 82. TOM

`translocator of the outer membrane` recognizes/transports mitochondrial precursor proteins across the outer mitochondrial membrane.

# 83. TIM

Inner-membrane translocator participating in protein passage into mitochondrial matrix.

# 84. Chaperones in mitochondrial import

Chaperone proteins help pull precursor proteins through and refold them after import.

# 85. Nucleotide hydrolysis powers chaperone work

The source notes ATP or another nucleoside triphosphate supplies part of the energy required for translocation.

# 86. Further intramitochondrial/intrachloroplast sorting

Additional signals can direct imported proteins to inner/outer membranes or thylakoid membranes after initial entry.

# 87. Peroxisomal protein import

Most peroxisomal proteins are imported selectively from cytosol.

# 88. Peroxisomal 3-aa signal

A short three-amino-acid sequence serves as an import signal for many peroxisomal proteins.

# 89. Peroxisome import receptors

Cytosolic receptor proteins recognize peroxisomal targeting signals and escort cargo toward/into the organelle.

# 90. Peroxisomal cargo can remain folded

Unlike mitochondrial/chloroplast import, proteins do not need to unfold to enter peroxisomes in the source description.

# 91. Peroxisome import mechanism remains incomplete

The chapter explicitly says aspects of the mechanism remain mysterious.

# 92. ER contribution to peroxisomal membrane

Some peroxisomal membrane proteins arrive in vesicles budding from ER; such vesicles may fuse with existing peroxisomes or mature into new peroxisomes after importing additional proteins.

# 93. Zellweger syndrome source example

`SOURCE_ERA_STATEMENT`: the chapter uses Zellweger syndrome to illustrate severe consequences of failed peroxisomal protein import.

This is source context, not medical guidance.

# 94. ER is entry point to secretory/endosomal system

Proteins destined for:
- ER
- Golgi
- endosomes
- lysosomes
- plasma membrane
- secretion
first enter the ER.

# 95. ER topology lock-in

Once a soluble protein enters the ER lumen, it does not return to the cytosol during normal onward traffic through the endomembrane system.

# 96. Two ER protein classes

```text
soluble proteins:
fully translocated into ER lumen

transmembrane proteins:
partly translocated and embedded in ER membrane
```

# 97. ER signal hydrophobic core

The source summarizes ER targeting signals as containing:
```text
8 or more hydrophobic amino acids
```

# 98. Co-translational translocation

Most ER proteins begin crossing/entering the ER while the ribosome is still translating them.

# 99. Rough ER ribosomes are not a special class

Free and membrane-bound ribosomes are structurally/functionally identical and belong to one common cytosolic pool.

# 100. Ribosome fate depends on current mRNA/protein

A ribosome becomes ER-bound only when it translates a polypeptide bearing an ER signal sequence.

# 101. Polyribosome ER attachment

Multiple ribosomes translating one ER-targeted mRNA can tether that mRNA to ER simultaneously.

# 102. Translation elongation supplies translocation thrust

The source states that because translocation is co-translational, elongation of the growing chain provides the thrust and no additional import energy is required for this step.

# 103. Signal-recognition particle

SRP binds:
- the emerging ER signal sequence
- the ribosome
and transiently slows translation.

# 104. SRP receptor

ER membrane protein that binds the SRP-ribosome complex.

# 105. Protein translocator handoff

SRP is released, ribosome is transferred to an ER translocator, and translation resumes.

# 106. Soluble-protein translocation

The ER signal opens the translocator and the growing chain is threaded through as a loop into the lumen.

# 107. Signal peptidase

Lumen-facing enzyme that cleaves most N-terminal ER signal peptides from soluble proteins.

# 108. Cleaved signal fate

Cleaved signal peptide is released into the bilayer and rapidly degraded in the source model.

# 109. Single-pass membrane protein insertion

An N-terminal ER signal begins translocation; a later hydrophobic stop-transfer sequence halts transfer and is released sideways into the bilayer.

# 110. Single-pass orientation source example

After N-terminal signal cleavage:
```text
N-terminus → ER lumen
C-terminus → cytosol
```

# 111. Membrane orientation is preserved

Once inserted, a membrane protein does not flip orientation during vesicular transport.

# 112. Luminal becomes extracellular

For plasma-membrane proteins:
```text
ER-lumen-facing domain
→ organelle-lumen-facing domain during traffic
→ extracellular-facing domain after exocytosis
```

# 113. Internal start-transfer sequence

An internal hydrophobic sequence can initiate ER translocation and remain in the mature membrane protein.

# 114. Start/stop sequences make multipass proteins

Alternating start-transfer and stop-transfer sequences stitch multipass proteins into the bilayer during synthesis.

# 115. Topology is generated during biosynthesis

`PROJECT_CONSTRAINT`: membrane-protein topology is a historical state set during insertion, not something inferred anew from final position.

# 116. ER phospholipid synthesis

New phospholipids are synthesized by enzymes on the cytosolic surface of ER.

# 117. Vesicular lipid delivery

Endomembrane-system organelles can receive ER-derived lipids via transport vesicles.

# 118. Nonvesicular lipid-transfer proteins

Mitochondria and some other destinations receive phospholipids through proteins that extract lipid from one membrane and deliver it to another.

# 119. Membrane contact sites

Lipid transfer often occurs where membranes of two organelles are held close together.

# 120. ER–mitochondrial contact distance

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10–30 nm
```
between membranes in the source example.

# 121. Lipid-transfer protein geometry

Source example describes trough-like hydrophobic channels/proteins that shield lipid tails while moving lipids between nearby membranes.

# 122. Secretory and endocytic traffic form a network

Outward:
```text
ER → Golgi → plasma membrane
                 ↘ endosome → lysosome
```

Inward:
```text
plasma membrane → endosome → lysosome
```

Retrieval pathways move selected material in the opposite direction.

# 123. Membrane orientation is conserved through vesicles

Cytosolic membrane surfaces stay cytosolic; noncytosolic/luminal surfaces remain luminal and can become extracellular after fusion with the plasma membrane.

# 124. Organelle identity must survive membrane flow

Each organelle maintains a distinctive protein/lipid composition despite continual budding/fusion.

# 125. Coated vesicles

Transport vesicles generally bud with a protein coat on their cytosolic surface.

# 126. Coat functions

The source assigns at least two functions:
```text
shape membrane into bud
capture/select cargo
```

# 127. Uncoating

After budding, vesicles rapidly shed the coat before docking/fusion.

# 128. Clathrin

Clathrin forms a basket-like lattice that helps curve membranes into coated pits/vesicles.

# 129. Clathrin locations

Clathrin-coated vesicles bud from:
- plasma membrane
- Golgi apparatus
in the pathways described.

# 130. Dynamin

A GTP-binding protein assembling around the neck of deeply invaginated coated pits and participating in membrane scission.

# 131. Dynamin GTP hydrolysis

Dynamin hydrolyzes bound GTP during vesicle pinch-off in the source mechanism.

# 132. Adaptins

Adaptor coat proteins that link clathrin to membrane and help select cargo through cargo receptors.

# 133. Cargo receptors

Bind particular cargo molecules on the noncytosolic/luminal side and are captured by adaptins on the cytosolic side.

# 134. Adaptin specificity

Different adaptins operate at plasma membrane versus Golgi, reflecting different cargo/receptor sets.

# 135. Table 15–4: clathrin/adaptin 1

```text
origin: Golgi apparatus
destination: lysosome via endosomes
coat: clathrin + adaptin 1
```

# 136. Table 15–4: clathrin/adaptin 2

```text
origin: plasma membrane
destination: endosome
coat: clathrin + adaptin 2
```

# 137. Table 15–4: COPII

```text
origin: ER
destination: Golgi cisterna
coat: COPII
```

# 138. Table 15–4: COPI

```text
origin: Golgi cisterna
destination: ER
coat: COPI
```

# 139. Vesicle movement can use cytoskeletal motors

Motor proteins can carry transport vesicles along cytoskeletal fibers.

`LATER_CHAPTER_REFINEMENT`: Chapter 17.

# 140. Rab proteins

Monomeric GTPases acting as membrane identity/targeting markers on vesicles and organelles.

# 141. Tethering proteins

Target-membrane proteins that recognize appropriate Rab proteins and perform initial vesicle capture.

# 142. v-SNARE

SNARE carried on vesicle membrane.

# 143. t-SNARE

Complementary SNARE on target membrane.

# 144. Docking sequence

```text
Rab ↔ tether
→ vesicle captured
→ v-SNARE ↔ t-SNARE
→ firm docking
```

# 145. SNAREs catalyze fusion

Tightly pairing v- and t-SNAREs pull bilayers together like a winch.

# 146. Fusion-distance source value

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1.5 nm
```
required for bilayers to approach closely enough for lipid mixing in the source description.

# 147. Fusion hydration barrier

Water between hydrophilic membrane surfaces must be displaced; this energetic barrier prevents spontaneous random fusion.

# 148. Triggered fusion

Some docked vesicles require an additional signal before fusion, as in synaptic vesicle exocytosis.

# 149. Fusion changes membrane inventory

Vesicle fusion delivers soluble lumenal cargo and also adds vesicle membrane proteins/lipids to the target membrane.

# 150. Secretory pathway sequence

```text
ER
→ Golgi
→ plasma membrane / extracellular space
```
with branches to endosomes/lysosomes and retrieval routes.

# 151. Secretory quality control

Proteins are checked for correct folding/assembly as they progress; incorrect products are retained/degraded.

# 152. ER disulfide bonds

Pairs of cysteine side chains can be oxidized in the ER lumen to form disulfide bonds.

# 153. Cytosol is reducing

The source emphasizes disulfide bonds generally do not form in cytosol because the cytosolic environment is reducing.

# 154. ER glycosylation

Many proteins entering ER lumen or membrane become glycoproteins by covalent attachment of oligosaccharide chains.

# 155. N-linked oligosaccharide precursor size

`SOURCE_SCALE`:
```text
14 sugars
```
in the preassembled ER precursor.

# 156. Dolichol

Specialized membrane lipid carrying the preassembled oligosaccharide before transfer to protein.

# 157. Oligosaccharyl transferase

Lumen-facing, membrane-associated enzyme that transfers the intact oligosaccharide to suitable asparagine residues during translocation.

# 158. N-linked consensus sequence

The source gives:
```text
Asn-X-Ser
or
Asn-X-Thr
```
where X can be almost any amino acid.

# 159. Why cytosolic proteins are not N-glycosylated this way

The oligosaccharyl-transferase active site faces the ER lumen.

# 160. Glycan processing

The common precursor oligosaccharide is subsequently modified in ER and Golgi, producing diverse mature N-linked glycans.

# 161. Glycocalyx

Cell-surface oligosaccharides contribute to the carbohydrate-rich outer layer and can participate in cell recognition.

# 162. ER retention/retrieval

Some ER-resident proteins contain the four-residue C-terminal retention signal and are returned from Golgi if they escape.

# 163. ER chaperone quality control

Misfolded/unassembled proteins bind ER chaperones, which prevent aggregation and promote correct folding/assembly.

# 164. ER-associated disposal source model

If folding fails, proteins can be exported back to cytosol and degraded by proteasomes.

# 165. Antibody assembly example

Antibody heavy/light chains assemble in ER; incomplete assemblies are retained until complete or degraded.

# 166. Cystic-fibrosis source example

`SOURCE_ERA_STATEMENT`: the chapter uses a common CF mutation as an example in which a partially functional but misfolded membrane protein is retained/degraded by ER quality control.

# 167. Unfolded protein response

Accumulation of misfolded ER proteins activates a program that:
- reduces incoming protein load
- increases chaperone/quality-control capacity
- expands ER
- can trigger apoptosis if stress cannot be resolved

# 168. UPR sensor proteins

Transmembrane ER sensors respond to misfolded proteins and activate different branches of the response.

# 169. Adult-onset diabetes source example

`SOURCE_ERA_STATEMENT`: the chapter uses insulin-secreting pancreatic cells under chronic secretory demand as a source example linking ER stress/UPR to cell death.

# 170. Golgi cisternae

Flattened membrane-enclosed sacs stacked together.

# 171. Golgi cisternae per stack

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~3–20 cisternae per stack
```

# 172. Golgi stack number varies

Some cells have one large stack; others have hundreds of smaller stacks.

# 173. Cis Golgi face

Entry face adjacent to ER.

# 174. Trans Golgi face

Exit face oriented toward downstream secretory destinations/plasma membrane in the source schematic.

# 175. Cis and trans Golgi networks

Tubular/vesicular networks associated with the outermost cisternae at each side and important for sorting.

# 176. Two models of Golgi progression in source

Proteins can progress through the stack by:
```text
vesicular transport between cisternae
+
cisternal maturation
```

# 177. ER retrieval from cis Golgi

Proteins bearing ER-retention signals can be returned to ER.

# 178. Trans Golgi sorting

Cargo is sorted toward:
- cell surface
- lysosomes via endosomes
- regulated secretory vesicles

# 179. Ordered Golgi glycan-processing enzymes

Early processing enzymes reside closer to cis face; later processing enzymes closer to trans face.

# 180. Constitutive exocytosis

Operates continually in all eukaryotic cells and:
- adds newly synthesized lipids/proteins to plasma membrane
- releases soluble proteins outside the cell

# 181. Default constitutive route

The source states entry into constitutive secretion does not require a special sorting signal of the type needed for lysosomal targeting or ER retrieval.

# 182. Regulated exocytosis

Specialized secretory cells store selected products in secretory vesicles and release them only in response to an extracellular signal.

# 183. Regulated secretory cargo examples

Source examples include:
- hormones
- mucus
- digestive enzymes

# 184. Trans-Golgi aggregation conditions

Regulated secretory proteins can aggregate under:
```text
acidic pH
high Ca2+
```
conditions of the trans Golgi network.

# 185. Secretory concentration factor

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~200-fold concentration
```
of selected secretory proteins in secretory vesicles.

# 186. Insulin secretion source example

An increase in blood glucose signals pancreatic β cells to release stored insulin by regulated exocytosis.

# 187. Exocytosis/endocytosis surface-area balance

Membrane added to plasma membrane by exocytosis is removed by endocytosis at roughly balancing rates in steady cells.

# 188. How We Know — in vitro import

Radiolabeled proteins produced by cell-free translation can be incubated with isolated organelles to test signal-dependent import.

# 189. Co-sedimentation import test

Imported protein co-fractionates with organelles after centrifugation.

# 190. Protease-protection assay

Protein imported into an intact organelle is protected from externally added protease; detergent disruption removes the protection.

# 191. Temperature-sensitive yeast mutants

Mutations that block different secretory steps cause cargo accumulation in ER, Golgi, or transport vesicles, revealing pathway order.

# 192. Secretory-mutant temperatures

`SOURCE_SCALE` / `SOURCE_MODEL`:
```text
~25°C permissive
~35°C restrictive
```
in the yeast example.

# 193. GFP tracking

Fusion to GFP can allow live-cell tracking of protein location and movement through nuclear/secretory pathways.

# 194. GFP caveat

The source notes tags often do not perturb function, but this is an empirical assumption that must be checked for each protein.

# 195. Endocytosis

Plasma membrane invaginates and pinches off to internalize extracellular fluid, molecules, particles, and membrane components.

# 196. Pinocytosis

`cellular drinking`: uptake of extracellular fluid and dissolved molecules in small vesicles.

# 197. Pinocytic vesicle size

`SOURCE_SCALE`:
```text
<150 nm diameter
```

# 198. Phagocytosis

`cellular eating`: ingestion of large particles into phagosomes, mainly by specialized cells in multicellular animals.

# 199. Phagosome size

`SOURCE_SCALE`:
```text
generally >250 nm diameter
```

# 200. Phagocytic immune cells

Source examples:
- macrophages
- neutrophils

# 201. Phagocytic receptor activation

Particles bind surface receptors and trigger cytoskeletal rearrangements/pseudopod extension.

# 202. Pseudopods

Sheetlike plasma-membrane projections that surround particles and fuse to enclose a phagosome.

# 203. Phagosome–lysosome fusion

Normally delivers engulfed microbes/particles to degradative enzymes.

# 204. Mycobacterium tuberculosis source example

`SOURCE_ERA_STATEMENT`: the chapter says *M. tuberculosis* can interfere with phagosome–lysosome fusion and survive inside macrophages.

# 205. Macrophage red-cell clearance

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
>10^11 worn-out red blood cells/day
```
are said to be ingested by macrophages in the human body.

# 206. Macrophage fluid uptake

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~25% of own volume/hour
```
by pinocytosis.

# 207. Macrophage membrane internalization rate

Source example:
```text
~3% plasma membrane/min
~100% in ~30 min
```
requiring rapid membrane recycling.

# 208. Clathrin-mediated pinocytosis

A major pinocytic route uses clathrin-coated pits/vesicles that uncoat and fuse with endosomes.

# 209. Receptor-mediated endocytosis

Selective uptake in which extracellular macromolecules bind specific cell-surface receptors concentrated into coated pits.

# 210. Concentration advantage

`SOURCE_SCALE` / `VERIFY_QUANT`: receptor-mediated endocytosis can increase uptake efficiency by:
```text
>1000-fold
```
relative to ordinary pinocytosis for selected macromolecules.

# 211. LDL transport

Low-density lipoprotein particles carry cholesterol through blood in the source example.

# 212. LDL receptor pathway

```text
LDL binds receptor at surface
→ clathrin-mediated endocytosis
→ endosome
→ acidic pH causes LDL/receptor dissociation
→ receptor recycled
→ LDL sent to lysosome
→ cholesterol released
```

# 213. LDL-receptor recycling period

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1 round trip every 10 min
```

# 214. LDL-receptor lifespan

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~20 h
```
with several hundred recycling trips in source figure.

# 215. Familial LDL-receptor defect source example

`SOURCE_ERA_STATEMENT`: inherited LDL-receptor defects are used to illustrate failure of receptor-mediated cholesterol uptake.

Do not use this chapter as clinical advice.

# 216. Other receptor-mediated cargo

The source names:
- vitamin B12
- iron
as important substances taken up through receptor-mediated mechanisms.

# 217. Early endosomes

First major sorting station for much endocytosed material, often located just beneath the plasma membrane.

# 218. Late endosomes

Later, more internal compartment closer to nucleus in source description; early endosomes mature toward late endosomes.

# 219. Endocytic timing

`SOURCE_SCALE` / `VERIFY_QUANT`: fluorescent fluid markers appear:
```text
early endosomes: first
late endosomes: ~5–15 min later
```
in the source experiment.

# 220. Endosomal pH

`SOURCE_SCALE`:
```text
pH ~5–6
```
maintained by ATP-driven H+ pumps.

# 221. Acidification supports sorting

Low pH causes many receptor–cargo complexes to dissociate, enabling receptor recycling and cargo degradation routes.

# 222. Endosomal receptor fate 1 — recycling

Most source examples return receptor to same plasma-membrane domain.

# 223. Endosomal receptor fate 2 — degradation

Some receptors proceed to lysosomes and are degraded.

# 224. Endosomal receptor fate 3 — transcytosis

Some receptors/cargo cross polarized cells and emerge at a different plasma-membrane domain.

# 225. Ligand fate depends on binding at low pH

If ligand remains bound to receptor in acidic endosome, it follows receptor route; if it dissociates, it generally proceeds toward lysosomal degradation in the source scheme.

# 226. Virus entry source example

The chapter notes some viruses exploit receptor-mediated endocytosis and low-pH compartments to enter cells.

This is descriptive biology, not procedural virology.

# 227. Late endosome to lysosome continuum

Digestion can begin in late endosomes, and mature acidic degradative compartments acquire classical lysosomal appearance.

# 228. Lysosomal hydrolase classes

The source lists approximately 40 types of hydrolytic enzymes, including:
- nucleases
- proteases
- glycosidases
- lipases
- phosphatases
- sulfatases
- phospholipases

# 229. Lysosomal enzyme number

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~40 types of hydrolytic enzymes
```

# 230. Lysosome pH

`SOURCE_SCALE`:
```text
~pH 5
```

# 231. Cytosolic pH comparison

`SOURCE_SCALE`:
```text
cytosol ~pH 7.2
```
in the source comparison.

# 232. Acid dependence is protective

Escaped lysosomal enzymes are less active in near-neutral cytosol than in acidic lysosomal lumen.

# 233. Lysosomal metabolite exporters

Transporters move digestion products such as amino acids, sugars, and nucleotides from lysosome to cytosol.

# 234. Lysosomal proton pump

ATP-driven H+ pump acidifies lysosomal lumen.

# 235. Lysosomal membrane glycosylation

Lumen-facing domains of lysosomal membrane proteins are highly glycosylated, helping protect them from lysosomal proteases.

# 236. Lysosomal enzyme targeting

Lysosomal enzymes are synthesized in ER, pass through Golgi, and are tagged for lysosomal delivery.

# 237. Mannose 6-phosphate

A phosphorylated sugar marker attached to lysosomal enzymes in ER/cis-Golgi source description.

# 238. Mannose 6-phosphate receptor

Recognizes tagged lysosomal enzymes in trans Golgi and packages them into vesicles routed through endosomes.

# 239. Autophagy

Pathway delivering obsolete organelles and cytosolic material to lysosomes for degradation/recycling.

# 240. Autophagosome

Double-membrane compartment enclosing cytoplasmic/organelle material before fusion with late endosome/lysosome.

# 241. Autophagy increases in starvation/remodeling

Source states autophagy increases during starvation and extensive developmental remodeling.

# 242. Autophagy supplies recyclable amino acids

Degradation products can support continued biosynthesis under nutrient limitation.

# 243. Autophagosome membrane origin uncertainty

The chapter explicitly notes the origin of the membrane fragments forming autophagosomes remains actively investigated.

`DO_NOT_INFER`: do not hard-code one membrane source from this chapter.

# 244. Compartment schema

```yaml
compartment:
  id:
  type:
  membrane_count:
  lumen_or_interior:
  pH:
  resident_proteins:
  resident_lipids:
  connected_to:
  topology_class:
```

# 245. Protein sorting schema

```yaml
protein:
  id:
  sequence:
  sorting_signals:
  folded_state:
  oligomeric_state:
  current_compartment:
  membrane_topology:
  modification_state:
  quality_control_state:
```

# 246. Sorting-signal schema

```yaml
sorting_signal:
  type:
    - ER_import
    - ER_retention
    - nuclear_import
    - nuclear_export
    - mitochondrial_import
    - peroxisomal_import
    - start_transfer
    - stop_transfer
  sequence_or_property:
  location_in_protein:
  cleaved_after_use:
```

# 247. Membrane topology schema

```yaml
membrane_protein_topology:
  transmembrane_segments:
  N_terminal_side:
  C_terminal_side:
  cytosolic_loops:
  luminal_loops:
  orientation_locked: true
```

# 248. Nuclear transport schema

```yaml
nuclear_transport:
  cargo:
  receptor:
  direction: import | export
  Ran_state:
  Ran_GTP_nucleus_high: true
  cargo_folded: true
  pore_state:
```

# 249. ER translocation schema

```yaml
ER_translocation:
  ribosome:
  SRP_bound:
  SRP_receptor:
  translocator:
  nascent_chain_length:
  signal_sequence:
  signal_peptidase:
  lumenal_fraction:
  cytosolic_fraction:
```

# 250. Vesicle schema

```yaml
transport_vesicle:
  origin:
  destination:
  coat:
  cargo:
  cargo_receptors:
  Rab:
  v_SNAREs:
  membrane_orientation:
  coat_state:
  docking_state:
  fusion_state:
```

# 251. Fusion schema

```yaml
membrane_fusion:
  Rab_tether_match:
  v_SNARE_t_SNARE_match:
  trigger_required:
  membrane_distance_nm:
  hydration_barrier:
  fusion_complete:
```

# 252. Endosome schema

```yaml
endosome:
  stage: early | late
  lumen_pH:
  cargo:
  receptors:
  routes:
    - recycle
    - degrade
    - transcytose
```

# 253. Lysosome schema

```yaml
lysosome:
  lumen_pH:
  hydrolase_set:
  proton_pump_activity:
  metabolite_exporters:
  cargo_sources:
    - endosome
    - phagosome
    - autophagosome
```

# 254. Project rule — luminal topology is persistent

A domain facing ER lumen remains on the noncytosolic/luminal side during Golgi/endosome/vesicle traffic and becomes extracellular if delivered to plasma membrane.

# 255. Project rule — vesicles do not teleport cargo

Budding, motion, docking, fusion, and cargo transfer must be represented as distinct causal events.

# 256. Project rule — organelle identity is molecular

An organelle is not defined merely by its 3D mesh. Identity includes membrane/lumen composition, resident proteins, pH, trafficking machinery, and topology.

# 257. Project rule — coat is temporary

Coated vesicles should shed coat before final membrane fusion in the source pathway.

# 258. Project rule — cargo selection precedes scission

Receptor/adaptin-dependent selection occurs during budding, not after vesicle release.

# 259. Project rule — docking is not fusion

Rab/tether capture and SNARE docking are distinct from final bilayer fusion.

# 260. Project rule — membrane fusion conserves sidedness

Cytosolic leaflet remains cytosolic; luminal leaflet remains luminal/extracellular.

# 261. Project rule — endosome maturation is state change

Early-to-late endosome progression should not be modeled only as instantaneous movement to a different coordinate. It includes compositional, positional, and pH changes.

# 262. Project rule — lysosomal acidity is WorldState

Lumenal pH is part of biological state and directly controls hydrolase activity.

# 263. Project rule — ER stress changes cell state

UPR changes gene expression, translation load, ER size, chaperone abundance, and potentially cell fate. It is not a decorative 'stress' icon.

# 264. Question 15–1 — inner versus outer nuclear membrane composition

Source answer: membrane proteins can diffuse through continuous nuclear-envelope membrane around pores, but proteins specialized for the inner membrane are retained there by interactions with chromosomes and the nuclear lamina.

# 265. Question 15–2 — why a nucleus is useful

Source answer: eukaryotic primary RNA transcripts often require processing/splicing before translation. The nuclear envelope separates transcription/RNA processing from cytosolic translation in space and time.

# 266. Question 15–3 — ER-associated mRNA persistence

Source answer: individual ribosomes finish and dissociate from the 3' end, while other ribosomes translating the same mRNA remain ER-bound and new ribosomes join near the 5' end. The source says a membrane-bound mRNA can have about:
```text
10–20 ribosomes
```
depending on its length.

# 267. Question 15–4A — internal start-transfer only

Source answer:
```text
N-terminus: cytosol
C-terminus: ER lumen
```
The uncleaved internal signal remains a membrane anchor; without a stop-transfer sequence, the downstream C-terminal region continues through the translocator.

# 268. Question 15–4B — cleaved N signal + stop + start

Source answer: mature protein spans membrane twice:
```text
N-terminus: ER lumen
middle loop: cytosol
C-terminus: ER lumen
```

# 269. Question 15–4C — odd number of membrane spans

Source answer: use a cleaved signal sequence followed by one stop-transfer sequence and then additional start/stop pairs, yielding an odd number of retained transmembrane segments.

# 270. Question 15–5A — omit adaptins

Source answer: clathrin cannot assemble onto the membrane because adaptins link clathrin to membrane. Free clathrin can self-assemble into empty cages under suitable conditions, but these contain no membrane/cargo.

# 271. Question 15–5B — omit clathrin

Adaptins can still bind receptors, but no clathrin-coated pits/vesicles form.

# 272. Question 15–5C — omit dynamin

Deeply invaginated coated pits form but fail to pinch off as closed vesicles.

# 273. Question 15–5D — prokaryotic membrane fragments

Source answer: no clathrin coating is expected because prokaryotic cells do not perform this endocytic process and lack suitable receptor cytosolic tails for adaptin recruitment.

`DO_NOT_INFER`: interpret the source's broader wording about protein uptake in context of endocytosis, not as a universal statement about every prokaryotic protein-transport phenomenon.

# 274. Question 15–6 — why attach a preassembled 14-sugar block

Source answer: preassembly supports quality control. Errors can be detected/discarded at the oligosaccharide level before attaching the chain to an energetically expensive protein. Stepwise processing on protein surfaces is also less reliable because enzyme access can be restricted.

# 275. Question 15–7 — ER given trans-Golgi ionic conditions

Source answer: regulated-secretory proteins would aggregate prematurely in the ER, excluding ER-resident proteins. These aggregates would eventually be degraded.

# 276. Question 15–8 — transferrin cycle

Source answer:
```text
neutral blood:
Fe binds transferrin
→ Fe-transferrin binds receptor
→ endocytosis

acidic endosome:
Fe dissociates
apo-transferrin stays receptor-bound
→ receptor + transferrin recycle

neutral surface:
apo-transferrin dissociates
→ returns to blood
```
This concentrates scarce iron efficiently while recycling both receptor and carrier.

# 277. Question 15–9A

`TRUE`: ribosomes on one mRNA form a polyribosome.

# 278. Question 15–9B

`FALSE`: the proposed sequence lacks the extended hydrophobic core characteristic of ER signal sequences.

# 279. Question 15–9C

`TRUE` in the chapter model: transport vesicles require v-SNAREs for correct docking/fusion.

# 280. Question 15–9D

`TRUE`: vesicles deliver proteins and lipids to cell surface.

# 281. Question 15–9E

`TRUE`: if lysosomal cargo is not selected at the trans Golgi network, source answer says it enters default constitutive traffic toward the cell surface.

# 282. Question 15–9F

`FALSE`: lysosomes also digest intracellular components delivered by autophagy.

# 283. Question 15–9G

`FALSE`: ER-derived N-linked glycoproteins can face cell surface and endomembrane lumens, but mitochondria do not participate in ER/Golgi vesicular transport.

# 284. Question 15–9H

`FALSE`: ribosomes on outer nuclear membrane feed proteins into the ER-continuous lumen/endomembrane route rather than generally inserting all products 'into the membrane.'

# 285. Question 15–10 — proteins that shuttle nucleus↔cytosol

Source answer: they require both nuclear export information and a nuclear localization signal for re-entry.

# 286. Question 15–11 — influenza and NH3 source reasoning

Source answer:
```text
virus endocytosed
→ acidic endosome activates viral fusion protein
→ viral/endosomal membranes fuse
→ genome released to cytosol
```

NH3 can diffuse into acidic endosomes and bind H+ to form membrane-impermeant NH4+, raising endosomal pH. This would prevent activation of the low-pH-dependent fusion protein.

This is historical textbook reasoning, not health advice.

# 287. Question 15–12A — multiple v-SNAREs in ER-derived vesicle

Problem: one vesicle carrying different v-SNAREs could in principle dock to more than one target membrane.

# 288. Question 15–12B — possible solution

Source answer says the exact solution is not known in this framing, but predicts that cells regulate SNARE docking competence, potentially with additional proteins that activate the correct v-SNARE interaction at the appropriate target.

# 289. Question 15–13 — dynamin and synaptic transmission

Synaptic vesicles fuse with plasma membrane during neurotransmitter release. Membrane must then be retrieved by endocytosis to regenerate synaptic vesicles. Without dynamin-mediated scission, vesicle recycling fails and transmission eventually stops.

# 290. Question 15–14 — NLS versus ER signal after mitosis

Source answer:
- nuclear-localization signals are retained and can be reused after mitosis;
- most cleaved ER signals cannot be reused;
- but the conclusion that ER proteins must be degraded/resynthesized is wrong because ER/secretory-pathway lumens never mix with cytosol during mitosis, so these proteins do not need to be re-imported.

# 291. Question 15–15 — ER signal plus NLS

The N-terminal ER signal is recognized first as it emerges from ribosome. Translation is redirected to ER, and the later NLS is never exposed to cytosolic nuclear import receptors. The protein enters the ER rather than nucleus.

# 292. Question 15–16 — ER versus nuclear import

Source answer highlights three major differences:

```text
NUCLEUS
post-translational
folded/assembled cargo
pore is open to small solutes
NLS usually retained

ER
co-translational
unfolded/growing chain
translocator normally closed/sealed
ER signal usually cleaved
```

These different mechanisms match different physical requirements of the two compartments.

# 293. Question 15–17 — mitotic nuclear-envelope breakdown

Source answer: transient mixing of nuclear and cytosolic contents supports the evolutionary idea that the nucleus is a specialized subcompartment of the cytosol enclosed by a membrane system.

# 294. Question 15–18 — mutant antitrypsin

Official source explanation: the mutation causes slight misfolding, ER chaperone retention, accumulation, and eventual degradation despite preserved protease-inhibitor activity in vitro.

Alternative hypotheses the source asks students to consider:
- abnormal extracellular instability
- defective ER signal sequence
- creation of an ER-retention signal

Distinguish using localization/transport assays, antibodies, or GFP fusion tracking.

# 295. Question 15–19 — C-terminal ER signal proposal

Source critique: SRP-dependent targeting requires an ER signal to emerge while translation is ongoing. A C-terminal hydrophobic sequence appears only near/after completion, so it cannot drive the Figure 15–13 mechanism as proposed. The source predicts the protein would more likely remain cytosolic.

# 296. Question 15–20 — possible Golgi evolution

Source answer: Golgi could have evolved from specialized ER membrane regions that pinched off into a distinct compartment while maintaining communication with ER through vesicular transport. Functional vesicle-trafficking machinery would also have to evolve.

# 297. Question 15–21 — how the first ER translocators arise

Source answer: present-day ER is never made de novo; it grows from preexisting ER carrying translocators. Over evolutionary history, ER translocation channels can be traced to structurally related prokaryotic plasma-membrane translocators. Organelle inheritance is therefore required in addition to genome inheritance.

# 298. Question 15–22 — figure labels

Official answer:
```text
A. extracellular space
B. cytosol
C. plasma membrane
D. clathrin coat
E. membrane of deeply invaginated clathrin-coated pit
F. captured cargo particles
G. lumen of deeply invaginated clathrin-coated pit
```

# 299. Question 15–23 — insufficient energy for nuclear import

Source answer: one incomplete import round could occur until GTP is depleted. Without sufficient Ran-GTP in nucleus, cargo cannot be released from import receptor; receptor/cargo becomes stuck at/near pore, receptor cannot recycle, and further import stops.

# 300. Source quantitative register

| Quantity | Chapter 15 source value/context |
|---|---:|
| organelle volume fraction, broad | nearly half of cell |
| ER area vs plasma membrane | ~20–30× |
| hepatocyte cytosol volume | 54% |
| hepatocyte mitochondria | 22%, ~1700 |
| hepatocyte ER | 12% |
| hepatocyte nucleus | 6% |
| hepatocyte Golgi | 3% |
| hepatocyte peroxisomes | 1%, ~400 |
| hepatocyte lysosomes | 1%, ~300 |
| hepatocyte endosomes | 1%, ~200 |
| eukaryote volume vs small prokaryote | ~1000–10,000× |
| typical signal sequence | ~15–60 aa |
| nuclear pore proteins | ~30 different types |
| ER signal hydrophobic core | ≥8 hydrophobic aa |
| ER–mitochondria contact gap | ~10–30 nm |
| fusion membrane separation | ~1.5 nm |
| ER glycan precursor | 14 sugars |
| Golgi cisternae/stack | ~3–20 |
| regulated secretory concentration | up to ~200× |
| yeast secretory mutant temperatures | ~25°C / ~35°C |
| pinocytic vesicle diameter | <150 nm |
| phagosome diameter | generally >250 nm |
| macrophage RBC clearance | >10^11/day |
| macrophage fluid uptake | ~25% cell volume/hour |
| macrophage PM internalization | ~3%/min; ~100%/30 min |
| receptor-mediated uptake advantage | >1000× |
| LDL receptor cycle | ~10 min |
| LDL receptor lifespan | ~20 h |
| late-endosome marker appearance | ~5–15 min after early |
| endosome pH | ~5–6 |
| lysosome pH | ~5 |
| cytosol pH | ~7.2 |
| lysosomal hydrolase types | ~40 |
| ribosomes per ER-bound mRNA in answer | ~10–20 |

# 301. Quantitative verification queue

Before runtime promotion, verify externally:
- organelle volumes and counts by cell type
- membrane-area ratios
- nuclear-pore subunit counts/modern NPC architecture
- signal-sequence statistical distributions
- ER–organelle contact distances by contact type
- membrane-fusion distance/energy landscape
- Golgi stack organization by species/cell
- endosomal maturation times
- endosome/lysosome pH distributions
- lysosomal enzyme inventory
- pinocytosis and receptor-recycling rates
- autophagosome membrane sources and dynamics

# 302. Do-not-overinterpret register

Do not infer:

```text
all organelles are static bags
FALSE

organelle identity is just spatial position
FALSE

all proteins are made on permanently distinct 'ER ribosomes'
FALSE

all proteins contain sorting signals
FALSE; cytosolic proteins may lack them

all sorting signals have one exact sequence
FALSE

all organelle import unfolds cargo
FALSE; nuclear and peroxisomal cargo can remain folded

nuclear import crosses a lipid bilayer directly
FALSE; it passes through pores

mitochondrial proteins enter by vesicles
FALSE in source model

ER cargo normally returns to cytosol during forward secretory traffic
FALSE

membrane proteins can flip orientation during vesicle transport
FALSE

ER lumen and extracellular space are unrelated topologically
FALSE; lumen-facing domains become extracellular after exocytosis

clathrin selects cargo directly
FALSE; adaptins/cargo receptors mediate selection

dynamin makes the clathrin coat
FALSE

docking = fusion
FALSE

Rab/tether interaction alone completes fusion
FALSE

SNAREs are simply address labels with no mechanical role
FALSE

Golgi is one homogeneous sac
FALSE

constitutive secretion requires a special positive sorting signal
FALSE in source framing

endocytosis necessarily means degradation
FALSE

all endocytosed receptors go to lysosomes
FALSE

lysosomes digest only extracellular material
FALSE

endosomal pH is just a visual effect
FALSE

lysosomal enzymes are equally active at cytosolic pH
FALSE

autophagosomes are single-membrane vesicles
FALSE

autophagosome membrane origin is settled by this chapter
FALSE

mitochondria receive ER glycoproteins by vesicles
FALSE

a C-terminal ER signal can automatically use the co-translational SRP mechanism
NOT SUPPORTED BY SOURCE
```

# 303. Cross-chapter dependencies

```text
Chapter 4:
protein folding, chaperones, disulfides, domains, condensates

Chapter 5:
nuclear lamina/chromatin interactions

Chapter 7:
translation, ribosomes, RNA export, proteasomes

Chapter 10:
genetic engineering and GFP fusions

Chapter 11:
membrane topology, bilayers, porins, glycocalyx, lipid synthesis

Chapter 12:
transporters, proton pumps, synaptic vesicles

Chapter 14:
mitochondrial/chloroplast structure and energy

Chapter 16:
Ca2+ signaling and signaling control of secretion

Chapter 17:
cytoskeleton/motor transport and phagocytic rearrangements

Chapter 18:
apoptosis
```

# 304. Chapter 15 core causal model

```text
NUCLEAR-ENCODED PROTEIN
→ sequence contains / lacks sorting signal

NO SIGNAL
→ cytosol

NLS
→ import receptor
→ nuclear pore
→ Ran cycle
→ nucleus

MITO/CHLORO SIGNAL
→ receptor/translocator
→ unfolding
→ import
→ refolding

PEROXISOMAL SIGNAL
→ receptor
→ folded import

ER SIGNAL
→ SRP
→ SRP receptor
→ ER translocator
→ soluble lumenal protein
   OR
→ start/stop transfer topology
→ membrane protein

ER
→ folding + disulfide + N-glycosylation + quality control
→ coated vesicle
→ Golgi
→ sorting
→ constitutive secretion
   OR regulated secretion
   OR endosome/lysosome route

PLASMA MEMBRANE
→ endocytosis
→ early endosome
→ recycling / transcytosis / degradation
→ late endosome
→ lysosome

CYTOSOLIC/ORGANELLE DAMAGE
→ autophagosome
→ lysosome
```

# 305. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 15: “Intracellular Compartments and Protein Transport.”**

Printed pages:
```text
515–552
```

PDF pages reviewed:
```text
550–587
```

Official answer section consulted:
```text
PDF pages 835–838
```

Reviewed:
- all five major chapter sections
- Figures 15–1 through 15–37
- Tables 15–1 through 15–4
- How We Know: *Tracking Protein and Vesicle Transport*
- Essential Concepts
- Questions 15–1 through 15–23
- official textbook answers for Questions 15–1 through 15–23

# 306. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- compartmentalization rationale
- Table 15–1 organelle functions
- Table 15–2 hepatocyte values
- endomembrane evolutionary model
- endosymbiotic separation of mitochondria/chloroplasts
- all three protein transport mechanisms
- folded/unfolded distinctions
- signal-sequence rules and Table 15–3
- nuclear pore / NLS / import receptor / Ran-GTP cycle
- TOM/TIM mitochondrial import
- peroxisomal folded-protein import
- ER co-translational import
- common ribosome pool
- SRP / SRP receptor / translocator
- signal peptidase
- start-/stop-transfer topology
- membrane-orientation preservation
- ER–organelle lipid transfer
- ~10–30 nm contact source value
- endomembrane vesicle topology
- clathrin/adaptin/dynamin
- COPI/COPII
- Rab/tethers/SNAREs
- ~1.5-nm fusion source value
- disulfide formation
- 14-sugar N-linked glycan precursor
- Asn-X-Ser/Thr motif
- ER retention/retrieval
- ER quality control
- UPR
- Golgi cis/trans organization
- constitutive vs regulated secretion
- ~200-fold concentration source value
- all How We Know methods
- pinocytosis/phagocytosis size thresholds
- receptor-mediated endocytosis
- LDL cycle source values
- endosomal pH/timing
- recycling/degradation/transcytosis
- lysosome pH and hydrolase classes
- mannose 6-phosphate targeting
- autophagy/autophagosome
- all Questions 15–1 through 15–23
- official Q15–22 labels
- all schemas
- all DO_NOT_INFER rules
- source trace

# END OF CHAPTER 15 CANON

Recommended repository destination:

```text
science/chapters/15_intracellular_compartments_protein_transport.md
```

Recommended commit message:

```text
science: add Chapter 15 intracellular transport canon
```

Do not begin Chapter 16 merely because this file exists.

Chapter 16 will turn the cell from a compartmentalized logistics system into an information-processing system: extracellular signals, receptors, molecular switches, GPCRs, cyclic AMP, Ca2+, phospholipase C, receptor tyrosine kinases, Ras/MAPK signaling, and pathway integration.
