---
title: "The Seamless Cell — Science Canon — Chapter 14"
subtitle: "Energy Generation in Mitochondria and Chloroplasts"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 14, printed pages 473–514 (PDF pages 508–549)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 14 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 13 established where reduced carbon, NADH, FADH2, ATP, and acetyl CoA come from. Chapter 14 now hard-codes the membrane machinery that converts electron-transfer energy into electrochemical potential and then into ATP, and the related photosynthetic machinery that converts light into ATP, NADPH, and fixed carbon.

The core causal chain is:

```text
electron donor
→ electron-transfer chain
→ free-energy drop
→ H+ translocation
→ electrochemical proton gradient
→ ATP synthase rotation/conformational change
→ ATP
```

For photosynthesis:

```text
light
→ excited chlorophyll
→ charge separation
→ electron transfer
→ H+ gradient + NADPH
→ ATP + reducing power
→ CO2 fixation
→ carbohydrate
```

The project must keep these distinct:

```text
electron flow
≠ proton flow
≠ membrane potential
≠ pH gradient
≠ proton-motive force
≠ mechanical rotation
≠ ATP synthesis
```

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 14.
- `SOURCE_SCALE` — explicit numerical value or stoichiometry from the source.
- `SOURCE_MODEL` — mechanistic, historical, or pedagogical model in the source.
- `SOURCE_DERIVED` — direct calculation/inference from source facts.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — source statement that should not become a modern universal constant without verification.
- `SOURCE_HYPOTHESIS` — evolutionary/mechanistic interpretation presented as a model.
- `PROJECT_CONSTRAINT` — rule for The Seamless Cell.
- `VERIFY_QUANT` — source number retained but not yet promoted to runtime truth.
- `LATER_CHAPTER_REFINEMENT` — detail belongs to later chapters/external verification.
- `DO_NOT_INFER` — hard guardrail against overgeneralization.

## Chapter map

```text
MITOCHONDRIA AND OXIDATIVE PHOSPHORYLATION

MOLECULAR MECHANISMS OF ELECTRON TRANSPORT AND PROTON PUMPING

CHLOROPLASTS AND PHOTOSYNTHESIS

THE EVOLUTION OF ENERGY-GENERATING SYSTEMS
```

Supporting material:

```text
Figures 14–1 through 14–48
Table 14–1: Mitochondrial Functions
Table 14–2: Product Yields from Glucose Oxidation
Panel 14–1: Redox Potentials
How We Know: How Chemiosmotic Coupling Drives ATP Synthesis
Essential Concepts
Why Trust Science?
Questions 14–1 through 14–23
```

# 1. Membrane-based energy generation is ancient

The chapter presents membrane-based electron transport as an ancient mechanism that arose in bacteria more than 3 billion years ago and is retained in modern prokaryotes, mitochondria, and chloroplasts.

`SOURCE_HYPOTHESIS` / `SOURCE_ERA_STATEMENT`: exact evolutionary dates should be externally verified before timeline visualization.

# 2. Early ATP production source model

The source proposes that the earliest cells may have relied on fermentation of geochemically generated organic molecules before efficient membrane-based energy systems evolved.

# 3. Chemiosmotic coupling

`chemiosmotic coupling` = coupling electron-transfer-driven proton pumping to ATP synthesis through an electrochemical proton gradient.

# 4. Two-stage chemiosmotic architecture

```text
STAGE 1
electron transport
→ energy release
→ H+ pumped across membrane
→ electrochemical H+ gradient

STAGE 2
H+ flows back down gradient through ATP synthase
→ ATP made from ADP + Pi
```

# 5. The proton gradient is stored energy

The electrochemical H+ gradient is a depletable energy store, not an annotation. It can drive ATP synthesis, transport, and other work.

# 6. ATP synthase

A membrane protein complex that couples downhill proton movement to the energetically unfavorable synthesis of ATP from ADP and phosphate.

# 7. Electron source can vary

High-energy electrons can derive from:
- reduced food molecules
- light-excited chlorophyll
- inorganic donors used by some bacteria/archaea

# 8. Chemiosmotic mechanism is conserved across domains

The source presents related systems in bacteria, archaea, mitochondria, and chloroplasts.

# 9. Endosymbiotic ancestry

Mitochondria and chloroplasts are presented as descendants of bacteria engulfed by ancestral eukaryotic cells more than a billion years ago.

Evidence cited:
- bacterial-like division/fission
- own DNA genomes
- own RNA/protein-making machinery
- bacterial-like ribosomes
- chloroplast gene similarity to cyanobacteria

# 10. Organelle genes moved to nucleus

Many ancestral bacterial genes were relocated to the eukaryotic nuclear genome. Their proteins are synthesized in the cytosol and imported into mitochondria/chloroplasts.

# 11. Mitochondria make most animal-cell ATP

Without mitochondria, eukaryotic cells would rely much more heavily on glycolysis. The source contrasts ~2 ATP/glucose from glycolysis with ~30 ATP/glucose after mitochondrial oxidation is included.

# 12. Glycolysis captures less than 10% in source framing

`SOURCE_SCALE` / `VERIFY_QUANT`: the chapter says the two ATP produced by glycolysis represent less than 10% of the total free energy potentially available from glucose oxidation.

# 13. MERRF source example

`SOURCE_ERA_STATEMENT`: the chapter uses myoclonic epilepsy with ragged red fibers (MERRF) as an example of inherited mitochondrial dysfunction affecting high-energy tissues such as muscle and nervous tissue.

Do not treat this chapter as medical guidance.

# 14. Mitochondrial inheritance source framing

The source states mitochondria are maternally transmitted because sperm mitochondria are lost after fertilization, and discusses mitochondrial replacement therapy as a source-era example.

# 15. Mitochondrial replacement example

`SOURCE_ERA_STATEMENT`: the chapter mentions a baby born in 2016 after mitochondrial replacement and notes ethical/scientific controversy. Preserve as textbook context; do not use as current clinical guidance.

# 16. Mitochondria are dynamic

Mitochondria can change:
- position
- shape
- network connectivity
- number

They continuously undergo fission and fusion in many cells.

# 17. Mitochondria localize near high ATP demand

Examples:
- cardiac muscle: near contractile apparatus
- sperm: wrapped around ATP-demanding flagellar region

# 18. Mitochondrial networks

In some cells, mitochondria form elongated tubular networks distributed through cytoplasm rather than isolated bean-shaped objects.

`PROJECT_CONSTRAINT`: never make the default mitochondrion universally bean-shaped.

# 19. Liver-cell mitochondrial number

`SOURCE_SCALE` / `VERIFY_QUANT`:

```text
~1000–2000 mitochondria per liver cell
```

as a source example, not a universal constant.

# 20. Exercise-dependent mitochondrial abundance

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: repeatedly stimulated skeletal muscle can increase mitochondrial number ~5–10-fold; marathon runners are described as having about twice the mitochondrial volume in leg muscle compared with sedentary individuals.

# 21. Table 14–1: ATP production

Oxidative phosphorylation in mitochondria produces most ATP used by eukaryotic cells in the chapter's general framing.

# 22. Table 14–1: NAD+ regeneration

Under aerobic conditions, NADH donates electrons to the respiratory chain, regenerating NAD+ needed by glycolysis.

# 23. Table 14–1: biosynthetic precursors

Mitochondrial matrix metabolism provides intermediates used to make amino acids, nucleotides, fatty acids, and other molecules.

# 24. Table 14–1: heme and Fe–S synthesis

Mitochondria participate in synthesis of heme and iron–sulfur clusters used in electron-transfer proteins.

# 25. Table 14–1: Ca2+ signaling

Mitochondria buffer Ca2+ and thereby participate in cellular signaling.

# 26. Table 14–1: reactive oxygen species

Mitochondria can generate reactive oxygen species; the source notes both damaging and signaling roles.

# 27. Table 14–1: apoptosis

Mitochondria release factors that can trigger apoptotic proteolytic cascades.

`LATER_CHAPTER_REFINEMENT`: Chapter 18.

# 28. Four mitochondrial compartments

```text
outer membrane
intermembrane space
inner membrane
matrix
```

Each has a distinct protein composition/function.

# 29. Outer mitochondrial membrane porins

Porins form wide aqueous channels in the outer mitochondrial membrane.

# 30. Outer-membrane permeability source cutoff

`SOURCE_SCALE` / `VERIFY_QUANT`:

```text
permeable to molecules ~5000 Da or smaller
```

in the source description.

# 31. Intermembrane-space small-solute equivalence

Because of outer-membrane porins, the intermembrane space is approximately chemically equivalent to cytosol for small molecules and inorganic ions.

# 32. Inner mitochondrial membrane is selective

The inner membrane is highly impermeable to ions and most small molecules except through specific transport proteins.

# 33. Matrix composition is selective

Only molecules transported across the inner membrane enter the matrix; matrix composition is specialized.

# 34. Cristae

`cristae` = infoldings of the inner mitochondrial membrane projecting into the matrix and increasing membrane surface area.

# 35. Inner mitochondrial membrane area source statement

`SOURCE_SCALE` / `VERIFY_QUANT`: in a liver cell, mitochondrial inner membranes together are said to comprise about one-third of the cell's total membrane.

# 36. Mitochondrial protein-distribution source values

For liver mitochondria, the source estimates:
```text
matrix: ~67%
inner membrane: ~21%
outer membrane: ~6%
intermembrane space: ~6%
```
of total mitochondrial protein.

# 37. Cristae are functionally specialized

Electron-transport proteins are concentrated in cristae; the source notes inner membrane subcompartments can differ in protein composition/function.

# 38. Heart-muscle cristae density

The chapter notes heart-muscle mitochondria have denser cristae than skin-cell mitochondria, consistent with higher oxidative ATP demand.

# 39. Fuel entry into mitochondria

Pyruvate and fatty acids can pass the outer membrane via porins, then require specific transport across the inner membrane into the matrix.

# 40. Acetyl CoA production in matrix

Matrix metabolism converts pyruvate and fatty acids into acetyl CoA, which feeds the citric acid cycle.

# 41. NADH and FADH2 carry high-energy electrons

Their electrons are 'high energy' because transfer to downstream acceptors has a strongly favorable ΔG.

# 42. NADH electron donation chemistry

The source shows NADH donating a hydride equivalent:
```text
H− → H+ + 2e−
```
The electrons enter the respiratory chain while NADH is oxidized to NAD+.

# 43. Respiratory-chain endpoint

Electrons ultimately pass to molecular O2, producing H2O.

# 44. Three major respiratory enzyme complexes

In source order:
```text
1. NADH dehydrogenase complex
2. cytochrome c reductase complex
3. cytochrome c oxidase complex
```

# 45. Respiratory chain protein count

`SOURCE_SCALE` / `VERIFY_QUANT`: each respiratory chain is described as containing more than 40 proteins grouped into the three large respiratory complexes.

# 46. Mobile electron carriers

Two mobile carriers connect the large complexes:
```text
ubiquinone (Q)
cytochrome c
```

# 47. Respiratory supercomplex

The three large respiratory complexes can physically associate into a larger supercomplex, proposed in the source to facilitate electron transfer.

# 48. Proton-pumping direction

In mitochondria:
```text
matrix
→ intermembrane space
```
during electron transport.

# 49. Only terminal electron transfer directly consumes O2

The final transfer to O2 is the oxygen-requiring step of respiration emphasized by the source.

# 50. Net NADH/O2 source equation

Figure 14–13 gives:
```text
2 NADH + O2 + 2H+
→ 2 NAD+ + 2H2O
```
for four electrons transferred from two NADH molecules.

# 51. Matrix pH

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
matrix pH ≈ 7.9
```

# 52. Intermembrane-space pH

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
intermembrane-space pH ≈ 7.2
```
approximately matching cytosolic pH in the source example.

# 53. Mitochondrial ΔpH

`SOURCE_DERIVED`:
```text
ΔpH ≈ 0.7
```
between matrix and intermembrane space in the source example.

# 54. Mitochondrial membrane potential

Proton pumping makes:
```text
matrix side: negative
intermembrane-space side: positive
```
relative to each other.

# 55. Proton-motive force

`proton-motive force` = combined electrical and chemical driving force on H+ across a membrane:
```text
membrane potential (ΔV)
+
pH gradient (ΔpH)
```

# 56. Mitochondrial PMF source emphasis

The source states the membrane-potential component contributes strongly to mitochondrial proton-motive force, while ΔpH is the smaller component in its example.

# 57. ATP synthase architecture

The source divides ATP synthase into:
- stationary F1 ATPase head
- F0 membrane rotor
- H+ carrier/rotor ring
- central stalk
- peripheral stalk/stator

# 58. ATP synthase orientation

In mitochondria, the F1 catalytic head projects into the matrix.

# 59. ATP synthase mechanism

```text
H+ downhill flow
→ F0 rotation
→ central stalk rotation
→ conformational changes in F1 catalytic subunits
→ ATP synthesis
```

# 60. Mechanical-to-chemical energy conversion

The source explicitly frames ATP synthase as converting mechanical deformation/rotation into ATP chemical free energy.

# 61. ATP synthase production rate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
>100 ATP molecules per second
```
in the source description.

# 62. ATP per revolution

`SOURCE_SCALE`:
```text
3 ATP per revolution
```
in the source model.

# 63. ATP synthase is reversible

If proton-motive force is insufficient, ATP synthase can hydrolyze ATP and pump H+ uphill.

# 64. Direction depends on net free energy

Whether ATP synthase runs forward, reverse, or stalls depends on the net ΔG of:
- H+ translocation
- ATP synthesis/hydrolysis

# 65. Bacterial reversal example

The source describes facultative bacteria using glycolytic ATP to run ATP synthase in reverse and pump H+ outward when O2 is absent, preserving a proton gradient for nutrient uptake.

# 66. Proton gradient drives pyruvate import

Pyruvate import is coupled to H+ flow into the mitochondrial matrix in the source model.

# 67. Proton gradient drives phosphate import

Phosphate import is similarly coupled to inward H+ flow.

# 68. ADP/ATP exchange

A special antiporter uses the inner-membrane voltage to:
```text
ADP → matrix
ATP → intermembrane space/cytosol
```

# 69. Charge difference in nucleotide exchange

The source figure depicts ATP as more negatively charged than ADP, allowing the voltage component to bias exchange.

# 70. Protein import also uses PMF

The electrochemical proton gradient contributes to translocation of many mitochondrial proteins across the inner membrane.

`LATER_CHAPTER_REFINEMENT`: Chapter 15.

# 71. Bacterial flagellar work

The source notes bacterial proton gradients can directly power rotation of the bacterial flagellum.

# 72. ATP shuttling source rate

`SOURCE_SCALE` / `VERIFY_QUANT`: a typical ATP molecule in a human cell is said to leave a mitochondrion and return as ADP more than once per minute.

# 73. ATP/ADP ratio

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
cytosolic ATP ≈ 10× ADP
```
in the source's typical-cell framing.

# 74. Cyanide source mechanism

`SOURCE_ERA_STATEMENT`: cyanide is described as blocking mitochondrial electron transport, causing ATP depletion and cell death.

This canon is not toxicology guidance.

# 75. NADH ATP yield

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~2.5 ATP per mitochondrial-matrix NADH
```

# 76. FADH2 ATP yield

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1.5 ATP per FADH2
```
because its electrons enter downstream at ubiquinone and bypass NADH dehydrogenase.

# 77. Succinate dehydrogenase is membrane-embedded

The TCA enzyme succinate dehydrogenase is embedded in the inner mitochondrial membrane and supplies FADH2-derived electrons to ubiquinone.

# 78. Table 14–2 glycolysis NADH yield

Per glucose:
```text
2 cytosolic NADH → ~3 ATP final yield
```
in the source accounting.

# 79. Table 14–2 glycolysis direct ATP

Per glucose:
```text
2 direct ATP
```

# 80. Table 14–2 pyruvate oxidation

Per glucose:
```text
2 matrix NADH → ~5 ATP
```

# 81. Table 14–2 TCA NADH

Per glucose:
```text
6 matrix NADH → ~15 ATP
```

# 82. Table 14–2 TCA FADH2

Per glucose:
```text
2 FADH2 → ~3 ATP
```

# 83. Table 14–2 GTP

Per glucose:
```text
2 GTP → ~2 ATP equivalents
```

# 84. Table 14–2 total

Source total:
```text
~30 ATP per glucose
```

# 85. Cytosolic NADH yields less in source accounting

The source explains that the inner membrane is impermeable to NADH, so transferring its reducing equivalents into mitochondrial metabolism costs energy.

`DO_NOT_INFER`: do not model free NADH as crossing the inner membrane directly.

# 86. Cell-respiration efficiency

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: nearly 50% of available fuel oxidation energy is said to be captured in ATP.

# 87. Nonbiological efficiency comparison

`SOURCE_ERA_STATEMENT`: the source compares electric motors/gasoline engines at roughly 10–20% efficiency.

# 88. Protons are unusual ions

H+ can be transferred rapidly through hydrogen-bonded water networks by repeated dissociation/association.

# 89. Water is a proton reservoir

Cellular water provides abundant proton donors/acceptors for coupled electron/proton-transfer chemistry.

# 90. Reduction often accompanies proton uptake

An electron added to a molecule is often accompanied by H+ uptake from water, effectively transferring a hydrogen atom.

# 91. Oxidation often accompanies proton release

When a hydrogen-associated electron is removed, the remaining proton can be released to water.

# 92. Electron-transfer orientation can move protons

A membrane electron carrier can accept e− + H+ on one side and release H+ on the other when it passes the electron forward.

# 93. Redox reaction

Electron donor becomes oxidized; electron acceptor becomes reduced. Oxidation and reduction are necessarily coupled.

# 94. Redox pair

Example:
```text
NADH ↔ NAD+ + H+ + 2e−
```

# 95. Redox potential

A measure of a redox pair's relative electron affinity.

Lower/more negative redox potential:
```text
weaker electron affinity
stronger donor tendency
```

Higher/more positive redox potential:
```text
stronger electron affinity
stronger acceptor tendency
```

# 96. Standard biological redox potential

The source distinguishes the chemical standard from the biological standard state at pH 7 and denotes the biological standard redox potential as E°′.

# 97. Redox free-energy relation

Panel 14–1 gives:
```text
ΔG°′ = -n(0.096)ΔE°′
```
when ΔE°′ is expressed in mV and ΔG°′ in kJ/mol.

# 98. ΔE calculation

```text
ΔE°′ = E°′(acceptor) - E°′(donor)
```

# 99. NADH/NAD+ redox potential

`SOURCE_SCALE`:
```text
E°′ ≈ -320 mV
```
for the standard 1:1 redox pair.

# 100. Ubiquinone redox potential

`SOURCE_SCALE`:
```text
E°′ ≈ +30 mV
```

# 101. Cytochrome c redox potential

`SOURCE_SCALE`:
```text
E°′ ≈ +230 mV
```

# 102. O2/H2O redox potential

`SOURCE_SCALE`:
```text
E°′ ≈ +820 mV
```

# 103. NADH to O2 redox gap

`SOURCE_SCALE`:
```text
ΔE°′ ≈ 1.14 V = 1140 mV
```

# 104. NADH to O2 free energy per electron

`SOURCE_SCALE`:
```text
ΔG°′ ≈ -109.6 kJ/mol per electron
```

# 105. NADH two-electron free energy

`SOURCE_SCALE`:
```text
≈ -219.2 kJ/mol per NADH pair of electrons
```

# 106. Intracellular ATP synthesis cost source value

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~54 kJ/mol
```
for ATP synthesis under the source's intracellular comparison.

# 107. Why electron transfer is stepwise

Direct NADH → O2 transfer would release a huge free-energy drop at once, mostly as heat. The chain divides the drop into smaller steps that can drive proton pumping.

# 108. Panel 14–1 NADH→ubiquinone example

For one electron:
```text
ΔE°′ = +30 - (-320) = +350 mV
ΔG°′ ≈ -34 kJ/mol
```

# 109. Panel 14–1 ubiquinone→O2 example

The source gives approximately:
```text
ΔG°′ ≈ -76 kJ/mol per electron
```

# 110. Concentrations alter actual redox driving force

The actual ΔG differs from ΔG°′ because redox-pair concentrations matter. Excess NADH makes electron donation more favorable.

# 111. Protein-bound metal electron carriers

Respiratory complexes contain bound metal ions that form sequential electron-transfer stepping stones.

# 112. Iron–sulfur centers

Fe–S centers have relatively low electron affinities in source framing and are prominent toward the early respiratory chain.

# 113. Heme/cytochrome carriers

Heme-bound iron atoms are used extensively in later electron-transfer components.

# 114. Protein environment tunes redox potential

The same general metal/cofactor chemistry can have different electron affinity depending on protein structure/local environment.

# 115. Ubiquinone

A small hydrophobic quinone mobile within the inner mitochondrial membrane.

# 116. Ubiquinone electron capacity

It can accept/donate either one or two electrons.

# 117. Ubiquinone proton coupling

For each electron accepted, ubiquinone picks up one H+ from water; reduced ubiquinone later releases these protons when oxidized.

# 118. Ubiquinone hydrophobic tail

Its long hydrocarbon tail confines it to the lipid bilayer.

# 119. Cytochrome c

A small mobile protein electron carrier that transfers electrons from cytochrome c reductase to cytochrome c oxidase.

# 120. Cytochrome c oxidase

Final large respiratory complex; removes electrons from cytochrome c and transfers them to O2.

# 121. Cytochrome c oxidase oxygen-binding site

Contains a heme group plus a copper atom at the O2-binding/reduction center.

# 122. Cytochrome c oxidase core

`SOURCE_SCALE`: the source describes a dimer; each monomer contains 13 different protein subunits.

# 123. Mitochondrial-genome encoded oxidase core

The source states three functional-core subunits of cytochrome c oxidase are encoded by mitochondrial DNA; remaining subunits are nuclear-encoded.

# 124. O2 reduction stoichiometry

```text
4e− + 4H+ + O2
→ 2H2O
```

# 125. Cytochrome oxidase proton pumping

For four electrons transferred to O2, the source says four additional H+ are pumped across the membrane in addition to the four matrix-side protons chemically consumed to make water.

# 126. Allosteric proton-pump model

Electron transfer drives protein conformational changes that alternate high and low proton affinity:
```text
bind H+ on matrix side
→ electron-driven conformational change
→ release H+ to intermembrane side
```

# 127. O2 partial reduction hazard

One-electron reduction of O2 forms superoxide, a reactive oxygen species capable of damaging macromolecules.

# 128. Oxidase holds O2 until four electrons arrive

The source says cytochrome c oxidase tightly retains O2 until complete four-electron reduction to water, limiting release of partially reduced reactive intermediates.

# 129. DNP uncoupling source mechanism

DNP renders membranes permeable to H+, bypassing ATP synthase and dissipating proton-motive force.

`SOURCE_ERA_STATEMENT`: historical medical use described in the book is unsafe and must not be interpreted as advice.

# 130. Uncoupling converts fuel energy to heat

If the proton gradient is dissipated without ATP synthesis:
```text
electron transport/fuel oxidation can continue
but ATP capture falls
and more energy appears as heat
```

# 131. Brown-fat uncoupling

The source describes specialized brown-fat mitochondria containing a proton carrier that allows H+ to return without ATP synthase, generating heat.

# 132. Brown-fat source examples

The chapter highlights:
- hibernating animals
- newborn human infants
as physiological contexts for heat production.

# 133. Artificial pH gradient can drive ATP synthesis

An imposed proton gradient across an intact energy-transducing membrane can drive ATP synthesis without electron transport occurring at that moment.

# 134. Racker–Stoeckenius reconstitution

The source describes 1974 experiments combining:
- bacteriorhodopsin
- bovine mitochondrial ATP synthase
- artificial lipid vesicles

Light generated a proton gradient through bacteriorhodopsin and ATP synthase then produced ATP.

# 135. Reconstitution control: bacteriorhodopsin only

Light generates a proton gradient but no ATP without ATP synthase.

# 136. Reconstitution control: ATP synthase only

Light alone does not produce ATP without the light-driven proton pump.

# 137. Reconstitution control: uncoupler

Adding an uncoupler abolishes ATP synthesis even when both proteins are present.

# 138. Chemiosmotic hypothesis historical sequence

Peter Mitchell proposed chemiosmotic coupling in 1961; the source says the idea was initially resisted and later supported by membrane-disruption, uncoupler, artificial-gradient, and reconstitution experiments.

# 139. Chloroplast photosynthesis

Photosynthesis uses light energy and electrons from water to generate ATP/NADPH and ultimately fix CO2 into organic molecules.

# 140. Overall photosynthesis source summary

```text
light energy + CO2 + H2O
→ sugars + O2 + heat
```
This omits the crucial intermediate roles of ATP and NADPH.

# 141. Photosynthesis Stage 1

Light reactions:
```text
light
→ photosynthetic electron transport
→ proton gradient
→ ATP
+ NADPH
```

# 142. Photosynthesis Stage 2

Carbon fixation:
```text
ATP + NADPH + CO2
→ carbohydrate precursors
```

# 143. Chloroplast envelope

Chloroplasts have:
- permeable outer membrane
- less permeable inner membrane
- narrow intermembrane space

# 144. Stroma

Large internal chloroplast compartment analogous in broad organizational role to the mitochondrial matrix.

# 145. Thylakoid membrane

Energy-converting machinery is not in the chloroplast inner envelope membrane. It is located in the thylakoid membrane.

# 146. Thylakoids

Flattened membrane sacs whose interiors form the thylakoid space/lumen.

# 147. Grana

Stacks of thylakoids; one stack is a granum.

# 148. Thylakoid lumen connectivity

The source states thylakoid interiors are thought to connect into a common thylakoid-space compartment separate from stroma.

# 149. Photosynthetic machinery location

Thylakoid membrane contains:
- photosystems
- reaction centers
- electron-transport components
- ATP synthase

# 150. Chloroplast biosynthetic functions

The source states chloroplasts synthesize almost all plant amino acids, fatty acids, purines, and pyrimidines in addition to their photosynthetic role.

# 151. ATP/NADPH cannot simply leave chloroplast

The chloroplast inner membrane is described as impermeable to ATP and NADPH; these carriers are therefore used in the stroma rather than directly exported.

# 152. Photosynthetic export form

Three-carbon sugar/metabolites such as glyceraldehyde 3-phosphate are exported through specific carriers and support cytosolic metabolism.

# 153. Sucrose

Exported carbon can be converted to sucrose, the major long-distance transported sugar in plants in the source description.

# 154. Visible-light wavelength range

`SOURCE_SCALE`:
```text
~400 nm (violet) to ~700 nm (deep red)
```

# 155. Chlorophyll absorption

Most chlorophylls absorb strongly in blue and red regions and poorly in green, explaining green reflection.

# 156. Example chlorophyll peaks

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~430 nm blue
~660 nm red
```
for the form illustrated.

# 157. Chlorophyll structure

Chlorophyll contains:
- porphyrin-like ring
- central Mg atom
- conjugated electron system
- long hydrophobic tail anchoring it in membrane

# 158. Light excitation

Photon absorption raises chlorophyll electrons to an unstable excited state.

# 159. Isolated excited chlorophyll

Without photosynthetic reaction-center organization, absorbed excitation energy would mainly be lost as heat or fluorescence.

# 160. Photosystem

A multiprotein complex containing:
- antenna complexes
- reaction center

# 161. Antenna chlorophyll count

`SOURCE_SCALE` / `VERIFY_QUANT`: antenna systems contain hundreds of chlorophyll molecules.

# 162. Energy transfer in antenna

Excitation energy moves from chlorophyll to chlorophyll.

`DO_NOT_INFER`: the source explicitly notes it is excitation energy—not electrons—that moves among antenna chlorophylls.

# 163. Special pair

A chlorophyll dimer in the reaction center whose energy level traps excitation arriving from antenna pigments.

# 164. Reaction center

A transmembrane protein/pigment complex that converts trapped excitation into chemical charge separation.

# 165. Reaction-center age source model

`SOURCE_HYPOTHESIS`: reaction centers are proposed to have arisen more than 3 billion years ago in primitive photosynthetic bacteria.

# 166. Charge separation

Excited special-pair chlorophyll transfers a high-energy electron to an acceptor:
```text
special pair becomes positive
acceptor becomes negative
```
This converts light excitation into a chemically useful separated charge.

# 167. Two photosystems in oxygenic photosynthesis

Plants and cyanobacteria use two serial photosystems:
```text
photosystem II
photosystem I
```

# 168. Historical naming inversion

Photosystem II acts before photosystem I in electron flow despite its name.

# 169. Photosystem II output carrier

PSII transfers excited electrons to plastoquinone.

# 170. Plastoquinone

A quinone analogous in role/chemistry to mitochondrial ubiquinone, mobile within the thylakoid membrane.

# 171. Cytochrome b6-f complex

Receives electrons from plastoquinone and is the source-described active proton pump in the chloroplast electron-transport chain.

# 172. Chloroplast proton-pumping direction

```text
stroma
→ thylakoid space
```

# 173. Thylakoid ATP synthase direction

H+ flows back:
```text
thylakoid space
→ stroma
```
through ATP synthase, producing ATP on the stroma side.

# 174. Photosystem I output carrier

PSI transfers excited electrons to ferredoxin.

# 175. Ferredoxin

A small Fe–S-containing mobile electron carrier.

# 176. FNR

Ferredoxin–NADP+ reductase receives electrons from ferredoxin and reduces NADP+ to NADPH.

# 177. Photosynthetic NADPH role

NADPH supplies reducing power for biosynthetic/carbon-fixation reactions, distinct from NADH's predominantly catabolic role.

# 178. Water-splitting complex

A manganese-containing complex associated with photosystem II replaces electrons lost from PSII by extracting electrons from water.

# 179. Water-splitting electron count

Two water molecules provide four electrons, removed one at a time.

# 180. Water-splitting net source stoichiometry

The source figure encodes:
```text
2H2O
→ O2 + 4H+ + 4e−
```

# 181. Atmospheric O2 source

The source attributes atmospheric oxygen production to water-splitting oxygenic photosynthesis.

# 182. Water-splitting safety principle

The enzyme accumulates four oxidation equivalents before releasing O2, limiting escape of highly reactive partial products.

# 183. Photosystem I receives electrons from PSII

Electron path:
```text
H2O
→ PSII
→ plastoquinone
→ cytochrome b6-f
→ plastocyanin
→ PSI
→ ferredoxin
→ FNR
→ NADPH
```

# 184. Plastocyanin

A copper-containing mobile electron carrier delivering electrons from cytochrome b6-f to photosystem I.

# 185. Two light boosts

Each photosystem supplies a separate photon-driven energy boost, allowing electrons to move from tightly held water electrons toward the strongly reducing NADPH state.

# 186. Water redox potential source value

`SOURCE_SCALE`:
```text
~+820 mV
```
for the relevant H2O/O2 redox pair.

# 187. NADPH redox potential source comparison

The source compares NADPH reducing power to a redox potential around:
```text
~-320 mV
```
in the photosynthetic energy diagram.

# 188. Why two photosystems are useful

The two serial excitations bridge the very large redox-energy gap from water to NADPH while also leaving enough free energy for proton pumping and ATP formation.

# 189. Carbon fixation

Stage 2 of photosynthesis uses ATP and NADPH to convert CO2 into carbohydrate precursors.

# 190. Rubisco

`ribulose 1,5-bisphosphate carboxylase/oxygenase` catalyzes the central carbon-fixation reaction in chloroplast stroma.

# 191. Rubisco reaction

```text
CO2 + ribulose 1,5-bisphosphate + H2O
→ unstable intermediate
→ 2 × 3-phosphoglycerate
```

# 192. Rubisco speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~3 substrate molecules/s
```
versus a source comparison of ~1000/s for a typical enzyme.

# 193. Rubisco abundance

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: Rubisco is described as often >50% of total chloroplast protein and widely claimed to be Earth's most abundant protein.

# 194. Pyrenoid

A Rubisco-rich biomolecular condensate in some photosynthetic algae that concentrates carbon-fixation machinery.

# 195. Pyrenoid carbon concentration

Thylakoid tubules containing carbonic anhydrase convert HCO3− to CO2 near Rubisco, increasing local CO2 availability.

# 196. Pyrenoid structure source example

The source shows a Rubisco-rich gel-like matrix assembled around scaffold proteins and surrounded by a starch sheath in Chlamydomonas.

# 197. Global pyrenoid fixation source statement

`SOURCE_ERA_STATEMENT`: the chapter states roughly one-third of planetary carbon fixation occurs within algal pyrenoids.

# 198. Pyrenoid crop-engineering source example

`SOURCE_ERA_STATEMENT`: scientists are described as attempting to engineer crops such as rice/wheat with pyrenoid-like CO2-concentrating systems.

# 199. RuBP is an energy-rich substrate

Rubisco carboxylation itself is favorable because it consumes energy-rich ribulose 1,5-bisphosphate; ATP/NADPH are needed to regenerate RuBP and reduce carbon products.

# 200. Calvin cycle

Also called the carbon-fixation cycle. It fixes CO2, reduces carbon to glyceraldehyde 3-phosphate, and regenerates RuBP.

# 201. Calvin cycle carbon stoichiometry

For every:
```text
3 CO2
```
the source gives:
```text
1 net glyceraldehyde 3-phosphate (3C)
```

# 202. Calvin cycle ATP cost

`SOURCE_SCALE`:
```text
9 ATP per 3 CO2 / 1 net G3P
```

# 203. Calvin cycle NADPH cost

`SOURCE_SCALE`:
```text
6 NADPH per 3 CO2 / 1 net G3P
```

# 204. RuBP regeneration stoichiometry

Three molecules of ribulose 1,5-bisphosphate are regenerated per three CO2 fixed in the source cycle accounting.

# 205. Calvin cycle intermediate simplification

The source explicitly omits many intermediates between G3P and RuBP from its overview figure.

`DO_NOT_INFER`: do not treat the simplified diagram as the complete enzyme list.

# 206. G3P fates

Glyceraldehyde 3-phosphate from carbon fixation can be:
- exported to cytosol
- converted to glucose/starch
- converted toward fats
- used as precursor for other organic molecules

# 207. Starch storage

Starch accumulates as granules in chloroplast stroma during excess photosynthetic activity.

# 208. Fat storage in chloroplast source figure

The chapter depicts fat droplets accumulating in chloroplast stroma as energy reserve.

`SOURCE_ERA_STATEMENT`: preserve as source framing pending organelle-specific refinement.

# 209. Plant mitochondria remain essential

Chloroplast-fixed carbon is exported and can be oxidized through glycolysis/TCA/oxidative phosphorylation in plant mitochondria, including in nonphotosynthetic tissues and darkness.

# 210. Chloroplast–mitochondrion collaboration

```text
chloroplast:
light + CO2 + H2O
→ carbohydrate + O2

mitochondrion:
carbohydrate + O2
→ CO2 + H2O + ATP
```
These pathways exchange matter but are not simple exact reverses.

# 211. Evolution of proton pumps source model

The source proposes staged evolution:
```text
1. ATP-driven H+ pump for pH homeostasis
2. electron-transport-driven H+ pump
3. coupling the gradient to reverse ATPase function → ATP synthase
```
`SOURCE_HYPOTHESIS`.

# 212. Acidic early-environment source model

Accumulating fermentation acids may have selected for cells able to pump H+ out of cytosol.

# 213. Electron-transport pump evolutionary advantage

Electron-driven proton pumping could generate a large electrochemical gradient without spending ATP directly.

# 214. Photosynthetic reaction centers as evolutionary breakthrough

The source proposes early photochemical reaction centers allowed sunlight to provide strong reducing power for carbon fixation.

# 215. Green sulfur bacteria source example

Present-day green sulfur bacteria are described as using H2S rather than H2O as electron donor.

# 216. Single-photosystem H2S photosynthesis

Because electrons are easier to extract from H2S than H2O, the source says one photosystem can provide enough boost to reduce NADP+.

# 217. Green sulfur by-product

Source example:
```text
H2S electron donor
→ elemental sulfur by-product
```
rather than O2.

# 218. Chlorobaculum tepidum source example

The chapter names *Chlorobaculum tepidum* as a green sulfur bacterium able to live at high temperature and low light.

# 219. Water splitting required second photosystem

`SOURCE_HYPOTHESIS`: evolution of oxygenic photosynthesis required both a water-splitting complex and a second photosystem to bridge the larger redox gap from H2O to NADPH.

# 220. Atmospheric oxygen delay

`SOURCE_ERA_STATEMENT`: the source notes a potentially very long delay—possibly approaching a billion years—between O2-producing photosynthesis and high atmospheric O2 accumulation.

# 221. Ferrous iron sink hypothesis

`SOURCE_HYPOTHESIS`: early O2 may initially have reacted with abundant Fe2+ in oceans before accumulating substantially in the atmosphere.

# 222. Endosymbiotic sequence source model

The source presents:
```text
pre-eukaryote engulfs aerobic bacterium
→ mitochondrion

later descendant engulfs photosynthetic bacterium
→ chloroplast
```

# 223. Methanococcus jannaschii

An archaeal source example from deep-sea hydrothermal vents used to illustrate ancient chemiosmotic lifestyles.

# 224. Hydrothermal-vent temperature range

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~75–95°C
```
for organisms presented as close analogues to ancient hot anaerobic environments.

# 225. Early-life timing source estimate

`SOURCE_ERA_STATEMENT`:
```text
~3.5–3.8 billion years ago
```
for the source discussion of early-cell environmental analogues.

# 226. Methanococcus habitat

Source says it was isolated from a hydrothermal vent more than a mile beneath the ocean surface.

# 227. Methanococcus nutrients

Uses inorganic gases:
```text
H2
CO2
N2
```
in absence of light and gaseous O2.

# 228. Nitrogen fixation

The source describes reduction of N2 to NH3 to provide nitrogen for biosynthesis.

# 229. Methanogenesis energy source

Electron transfer:
```text
H2 → CO2
```
is coupled to methane production and proton pumping.

# 230. Methanococcus ATP generation

Plasma-membrane electron transfer pumps H+, producing a proton gradient that drives ATP synthase.

# 231. Chemiosmosis as deeply ancient source interpretation

The persistence of chemiosmotic coupling in such organisms is used to argue that proton-gradient energy storage is extremely ancient.

# 232. WorldState — electron

Electron-transfer events need explicit:
```yaml
donor:
acceptor:
carrier:
redox_state_before:
redox_state_after:
electron_count:
compartment_or_membrane_side:
```

# 233. WorldState — proton

H+ translocation must update:
- side-specific proton count/concentration
- pH
- membrane charge separation
- proton-motive force

# 234. WorldState — PMF

Recommended state:
```yaml
proton_motive_force:
  membrane:
  delta_pH:
  membrane_potential_mV:
  chemical_component:
  electrical_component:
  total_driving_force:
```

# 235. WorldState — respiratory complex

```yaml
respiratory_complex:
  id:
  type:
    - NADH_dehydrogenase
    - cytochrome_c_reductase
    - cytochrome_c_oxidase
  membrane:
  redox_centers:
  electron_state:
  proton_pumping_state:
  conformational_state:
```

# 236. WorldState — mobile carrier

```yaml
mobile_electron_carrier:
  type:
    - ubiquinone
    - cytochrome_c
    - plastoquinone
    - plastocyanin
    - ferredoxin
  redox_state:
  electrons_carried:
  protons_carried:
  membrane_or_compartment:
  position:
```

# 237. ATP synthase state schema

```yaml
ATP_synthase:
  membrane:
  orientation:
  rotor_angle:
  rotor_direction:
  proton_flux:
  catalytic_site_states:
  ATP_synthesis_rate:
  ATP_hydrolysis_rate:
  operating_mode:
    - synthase
    - pump
    - stalled
```

# 238. Photosystem state schema

```yaml
photosystem:
  type: PSII | PSI
  antenna_excitation_state:
  special_pair_redox_state:
  charge_separated_state:
  electron_acceptor_state:
  donor_replacement_state:
```

# 239. Carbon-fixation state schema

```yaml
calvin_cycle:
  CO2_in:
  RuBP_pool:
  3PG_pool:
  G3P_pool:
  ATP_consumed:
  NADPH_consumed:
  RuBP_regeneration:
  net_G3P_export:
```

# 240. ExperimentState — uncoupler

DNP or other uncoupling conditions are experimental/pathological perturbations, not normal WorldState.

# 241. ExperimentState — artificial liposome

Bacteriorhodopsin + ATP synthase liposomes belong to ExperimentState, not a native cellular compartment.

# 242. ExperimentState — imposed chloroplast pH jump

Artificial pH-step experiments directly test sufficiency of proton gradients and should be represented separately from normal photosynthesis.

# 243. ViewState — redox potential axis

Redox-potential ladders are analytical overlays, not literal vertical locations in a membrane.

# 244. ViewState — proton arrows

Arrows indicate net flux/driving force; they are not biological entities.

# 245. Visual rule — electron and excitation are distinct

In antenna complexes:
```text
excitation energy moves
NOT electrons
```
until the reaction center actually transfers an electron.

# 246. Visual rule — PMF is not simply proton concentration

Mitochondrial PMF has a large electrical component. A rendering showing only 'more protons outside' is incomplete.

# 247. Visual rule — cristae topology

Electron transport and ATP synthase live in a folded inner membrane; do not float the complexes in matrix as detached machinery.

# 248. Visual rule — chloroplast topology

Photosynthetic ETC and ATP synthase belong to the thylakoid membrane, not chloroplast envelope.

# 249. Visual rule — ATP synthase rotation

Do not animate the entire complex spinning. F0 rotor/central stalk rotate while stator/F1 framework remains comparatively stationary in the source model.

# 250. Visual rule — ATP synthase reversibility

Rotation direction and biochemical mode must be dynamically coupled to free-energy conditions, not hard-coded one-way.

# 251. Visual rule — oxygen chemistry

Cytochrome c oxidase should not release one-electron-reduced O2 intermediates in the normal pathway; O2 is held until full reduction.

# 252. Visual rule — photosystem II water splitting

Do not show a single photon directly cleaving water into O2. Four sequential electron withdrawals accumulate before O2 release.

# 253. Visual rule — Calvin cycle is not 'dark only'

Stage 2 does not directly require photons, but the chapter notes light-dependent feedback activates carbon-fixation enzymes. Avoid implying it normally proceeds independently of light-generated ATP/NADPH.

# 254. Question 14–1 — DNP weight loss mechanism

Source-derived logic:
```text
DNP carries H+ across inner membrane
→ PMF collapses
→ ATP synthesis per fuel molecule falls
→ cells oxidize more stored fuel to meet ATP demand
→ more energy dissipated as heat
```
The historical use described by the source was dangerous/toxic.

# 255. Question 14–1 — elevated temperature/sweating

Uncoupling converts more oxidation energy into heat instead of ATP, raising heat production and provoking cooling responses such as sweating.

# 256. Question 14–2 — heart versus skin cristae

Heart muscle has far greater continuous ATP demand. More/dense cristae increase inner-membrane area available for respiratory complexes and ATP synthase.

# 257. Question 14–3A — DNP

DNP directly carries H+ across the inner membrane:
```text
ΔpH collapses
ΔV collapses or is strongly dissipated
total proton-motive force falls
```

# 258. Question 14–3B — nigericin

Making the membrane permeable to K+ allows K+ to redistribute in response to the voltage, dissipating much of the electrical component (ΔV). Continued H+ pumping can increase the chemical ΔpH component. Thus the partition between ΔV and ΔpH changes even if the respiratory chain continues operating.

`SOURCE_DERIVED`: exact steady-state PMF depends on conditions not specified by the question.

# 259. Question 14–4A — reverse turbine analogy

ATP synthase making ATP resembles a turbine driven by downhill water flow. In reverse, it resembles a motor-driven pump using electricity to pump water uphill.

# 260. Question 14–4B — stall condition

Stall occurs when the free-energy gain from H+ moving downhill exactly balances the free-energy cost of ATP synthesis, so net coupled ΔG is ~0.

# 261. Question 14–4C — direction

Direction depends on:
- magnitude/direction of proton-motive force
- ATP/ADP/Pi chemical potential
- resulting net ΔG of the coupled process

# 262. Question 14–5 — ATP yield from proton accounting

Given:
```text
5 H+ pumped per electron
2 electrons from NADH
→ 10 H+ pumped

3 H+ through ATP synthase per ATP
+ 1 H+ equivalent cost for export
= 4 H+ per usable cytosolic ATP
```

Therefore:
```text
10 / 4 = 2.5 ATP
```
per NADH pair of electrons.

# 263. Question 14–6 — why Fe/heme/FeS centers are protein-bound

Protein binding:
- fixes carriers in the correct sequence/geometry
- tunes redox potential through local chemical environment
- prevents cofactors from diffusing away
- limits unwanted side reactions
- positions redox centers for rapid directional electron transfer
- allows electron transfer to be coupled to conformational/proton-pumping changes

`SOURCE_DERIVED` from the chapter's structural/redox discussion.

# 264. Question 14–7 — can one diffusible carrier do both mobile steps?

In principle, a carrier could mediate multiple transfers only if:
- it could physically access the relevant complexes
- its redox potential made both transfers favorable
- its chemistry matched required electron/proton stoichiometry

In mitochondria, Q and cytochrome c are specialized differently: Q is hydrophobic and bilayer-confined and can carry 1–2 e− plus H+, while cytochrome c is a small protein carrier that transfers electrons on the membrane surface. Their distinct chemistry/topology is therefore functionally useful.

# 265. Question 14–8 — why thylakoids can build a larger ΔpH

The thylakoid lumen is a small sealed compartment, so pumping a given number of H+ into it produces a large concentration change. The mitochondrial intermembrane space is effectively connected to the cytosol for small ions through outer-membrane porins, making it a much larger reservoir. Thus chloroplasts can develop a larger pH-gradient component.

# 266. Question 14–9 — why biosynthesis uses NADPH

Keeping NADPH and NADH in separate redox pools permits independent regulation:
- NADPH pool can remain strongly reducing for biosynthesis
- NADH can serve catabolic electron transfer/respiration

This preserves directionality despite similar underlying chemistry.

# 267. Question 14–10A — root cells without chloroplasts

Roots receive organic carbon produced in photosynthetic tissues. They can oxidize imported sugars through glycolysis, the TCA cycle, and mitochondrial oxidative phosphorylation.

# 268. Question 14–10B — cytosolic ATP in plant cells

Plant mitochondria export ATP to the cytosol. Chloroplasts use their internally generated ATP/NADPH mainly for carbon fixation and export reduced carbon compounds rather than ATP.

# 269. Question 14–11A

`TRUE` in the source logic. Oxidized PSII reaction-center chlorophyll must have an exceptionally strong electron affinity—strong enough, via the water-splitting complex, to pull electrons ultimately from water, whose O2/H2O redox pair has very high electron affinity.

# 270. Question 14–11B

`TRUE`. Light excitation raises chlorophyll electron energy, allowing electron transfer to an acceptor that would not accept an electron favorably from ground-state chlorophyll.

# 271. Question 14–11C

`FALSE AS WORDED`. The source says water splitting avoids release of partially oxidized reactive water/oxygen intermediates. Superoxide is instead a partially reduced form of O2 discussed for cytochrome oxidase chemistry.

# 272. Question 14–12A

`TRUE`: many electron-transfer reactions use metals, but not every electron carrier must contain a metal.

# 273. Question 14–12B

`FALSE`: the mitochondrial membrane potential is generated mainly by H+ translocation from matrix to intermembrane space, not by pumping respiratory electrons across the membrane into the matrix.

# 274. Question 14–12C

`TRUE`:
```text
PMF = ΔpH component + electrical ΔV component
```

# 275. Question 14–12D

`TRUE`: ubiquinone and cytochrome c are both mobile electron carriers, though they occupy different physical environments.

# 276. Question 14–12E

`FALSE`: plant cells still require mitochondria for ATP production from stored/exported organic carbon, especially in darkness and nonphotosynthetic tissues.

# 277. Question 14–12F

`TRUE` in the chapter's structural framing: both chlorophyll and heme contain conjugated porphyrin-like electron systems that interact with visible light; their biological functions nevertheless differ.

# 278. Question 14–12G

`FALSE`: chlorophyll's central photosynthetic role is photon absorption and light-driven charge separation; heme primarily functions as a bound redox/electron-transfer cofactor in respiratory proteins.

# 279. Question 14–12H

`FALSE`: most tree dry mass derives largely from carbon fixed from atmospheric CO2, not mineral matter absorbed from soil.

# 280. Question 14–13 — proton count

Given:
```text
19.2 kJ/mol released per H+
ATP synthesis requires 46–54 kJ/mol
```

Ratios:
```text
46/19.2 ≈ 2.40
54/19.2 ≈ 2.81
```

Thus about:
```text
3 H+ per ATP
```
are required under these simplified conditions.

# 281. Question 14–13 — why ATP ΔG is a range

Actual ΔG depends on intracellular concentrations of ATP, ADP, and Pi. The lower ATP-synthesis cost applies when products are less abundant and/or reactants more abundant—for example, a lower ATP/ADP ratio.

# 282. Question 14–14 — no O2

Without O2, the terminal acceptor is unavailable:
```text
downstream carriers remain reduced
→ electron flow backs up
→ respiratory chain accumulates in reduced states
```

# 283. Question 14–14 — O2 restored

Cytochrome c oxidase is closest to O2 and is oxidized first; oxidation then propagates upstream. Thus cytochrome c oxidase carriers become oxidized before those in NADH dehydrogenase.

# 284. Question 14–15 — Q contributes to proton gradient

If Q is reduced on the matrix side:
```text
Q + electrons + H+ from matrix
→ reduced QH2-like state
```
and oxidized on the intermembrane side:
```text
reduced Q
→ electrons donated forward
+ H+ released outside
```
then Q chemically transfers proton equivalents from matrix to intermembrane space while carrying electrons laterally in the membrane, strengthening the H+ gradient.

# 285. Question 14–16 — why water splitting gives O2 but no H2

Photosynthetic cells do not send the extracted electrons back to H+ to make H2. The electrons are captured by the photosynthetic electron-transfer chain and ultimately reduce NADP+; the protons contribute to the proton gradient/aqueous pool. Thus water oxidation yields O2 without hydrogen gas.

# 286. Question 14–17A — artificial chloroplast pH jump

After equilibration at pH 4, transfer to pH 8 rapidly alkalinizes stroma while thylakoid lumen remains acidic:
```text
lumen high H+
→ stroma low H+
```
H+ flows through ATP synthase to stroma and drives a burst of ATP synthesis.

# 287. Question 14–17B — light requirement

No light is required during the ATP burst because the experiment supplies the proton gradient artificially.

# 288. Question 14–17C — reversed pH jump

If lumen is relatively alkaline and stroma acidic, the proton gradient is reversed. It will not drive normal ATP synthesis; with suitable ATP present it would favor reverse ATPase/proton-pumping behavior.

# 289. Question 14–17D — interpretation

The experiment strongly supports chemiosmotic coupling because ATP synthesis occurs when an electrochemical H+ gradient is imposed directly, without requiring electron transport/light at that moment.

# 290. Question 14–18A — bacteriorhodopsin + ATP synthase vesicles

With intact vesicles, appropriate protein orientation, ADP/Pi, and light:
```text
bacteriorhodopsin builds H+ gradient
→ ATP synthase uses gradient
→ ATP appears
```

# 291. Question 14–18B — leaky membrane

Residual detergent that leaves membrane ion-permeable prevents stable PMF formation, so ATP production is greatly reduced or absent.

# 292. Question 14–18C — why cross-species reconstitution is valid

The experiment tests a conserved physical mechanism, not organism-specific signaling. Cross-species compatibility demonstrates that proton-motive force and ATP synthase are modular, evolutionarily conserved energy-conversion principles.

# 293. Question 14–19 — FADH2 electron entry

FADH2 redox potential:
```text
~-220 mV
```
Ubiquinone:
```text
~+30 mV
```

Electron transfer from FADH2 to Q is therefore favorable. Succinate dehydrogenase can pass electrons from its bound FADH2 through internal redox centers to ubiquinone, which then enters the common Q→cytochrome c reductase pathway.

# 294. Question 14–20 — alkaliphilic bacteria

At external pH ~10 while cytosol stays near neutral, the H+ concentration gradient alone favors H+ leaving the cell. Such bacteria can still use a proton-motive force if a sufficiently negative membrane potential creates a stronger inward electrical force on H+ than the opposing chemical gradient.

`SOURCE_DERIVED`: the question's key point is that electrochemical gradient includes both ΔpH and ΔV.

# 295. Question 14–21A

`YES`: chloroplast products such as carbohydrate and O2 can serve as substrates/fuels for mitochondrial respiration.

# 296. Question 14–21B

`YES`: photon absorption boosts electrons sufficiently to move from water toward the strongly reducing NADPH state, opposite the overall downhill electron-energy direction used during mitochondrial respiration.

# 297. Question 14–21C

`NO`: the TCA cycle is not the Calvin cycle in reverse. They use different intermediates, enzymes, energetics, and reaction logic.

# 298. Question 14–22 — mechanically driven ATP synthase

If direct mechanical rotation of ATP synthase generates ATP without an H+ gradient, it implies the gradient's proximate role is to provide torque/conformational cycling; mechanical rotation itself can be sufficient to drive catalytic-state changes.

A rigorously demonstrated result would be highly significant mechanistic evidence and worthy of serious high-level publication consideration.

# 299. Question 14–23 — required conditions for cytochrome c reduction

Under the specified path, net electron transfer to cytochrome c requires:
```text
reduced ubiquinone
+ oxidized cytochrome c
+ cytochrome c reductase complex
```

Therefore condition **E** supports net transfer.

Other combinations fail because:
- oxidized Q has no electrons to donate
- reduced cytochrome c cannot accept another electron in the relevant state
- without cytochrome c reductase, the specified transfer pathway is missing

# 300. Source quantitative register

| Quantity | Chapter 14 source value |
|---|---:|
| membrane-based electron transport origin | >3 billion years ago |
| glycolysis ATP/glucose | 2 |
| full oxidation ATP/glucose | ~30 |
| liver-cell mitochondria | ~1000–2000 |
| exercise-induced mitochondrial increase | ~5–10× |
| marathon-runner muscle mitochondrial volume | ~2× comparison |
| outer membrane permeability cutoff | ~5000 Da |
| inner mito membranes as share of liver-cell membranes | ~1/3 |
| matrix mitochondrial protein | ~67% |
| inner membrane protein | ~21% |
| outer membrane protein | ~6% |
| intermembrane-space protein | ~6% |
| matrix pH | ~7.9 |
| intermembrane pH | ~7.2 |
| source ΔpH | ~0.7 |
| ATP synthase speed | >100 ATP/s |
| ATP/revolution | 3 |
| cytosolic ATP/ADP | ~10 |
| ATP shuttle cycle | >1/min |
| NADH yield | ~2.5 ATP |
| FADH2 yield | ~1.5 ATP |
| complete respiration efficiency | nearly 50% |
| NADH E°′ | -320 mV |
| ubiquinone E°′ | +30 mV |
| cytochrome c E°′ | +230 mV |
| O2/H2O E°′ | +820 mV |
| NADH→O2 ΔE°′ | ~1140 mV |
| NADH→O2 ΔG°′/electron | -109.6 kJ/mol |
| NADH two-electron ΔG°′ | -219.2 kJ/mol |
| ATP synthesis source comparison | ~54 kJ/mol |
| chlorophyll visible range | 400–700 nm |
| example chlorophyll peaks | ~430, ~660 nm |
| Rubisco turnover | ~3 substrate/s |
| typical-enzyme comparison | ~1000 substrate/s |
| Rubisco fraction chloroplast protein | >50% source statement |
| Calvin cycle per 3 CO2 | 9 ATP + 6 NADPH |
| net Calvin product per 3 CO2 | 1 G3P |
| hydrothermal analogue temperatures | ~75–95°C |
| early-life source window | ~3.5–3.8 Ga |
| FADH2 redox in Q14–19 | -220 mV |
| H+ free energy in Q14–13 | 19.2 kJ/mol |

# 301. Verification queue

Before runtime promotion, externally verify:
- exact modern respiratory-complex names/subunit counts and species dependence
- crista architecture and ATP-synthase row organization
- mitochondrial membrane potential values
- proton/ATP stoichiometry by ATP synthase c-ring composition
- proton-pumping stoichiometry of respiratory complexes
- NADH shuttle energetics
- ROS production rates
- chloroplast thylakoid architecture
- photosystem stoichiometries
- chlorophyll spectral variants
- PSII oxygen-evolving complex atomic mechanism
- Rubisco turnover/species variation
- pyrenoid prevalence/global fixation fraction
- Calvin-cycle regulation
- evolutionary dates and atmospheric oxygen chronology

# 302. Do-not-overinterpret register

Do not infer:

```text
electron flow = proton flow
FALSE

proton concentration alone = proton-motive force
FALSE

mitochondrial PMF is only ΔpH
FALSE

all mitochondria are bean-shaped
FALSE

outer and inner mitochondrial membranes have equal permeability
FALSE

NADH freely crosses the inner mitochondrial membrane
FALSE

all ETC components are mobile
FALSE

all ETC components are fixed
FALSE

ubiquinone and cytochrome c occupy the same physical phase
FALSE

ATP synthase entire structure rotates as one rigid body
FALSE

ATP synthase is irreversible
FALSE

oxygen is used in every step of respiration
FALSE

redox potential is the same thing as free energy
FALSE

higher redox potential means stronger electron donor
FALSE

electron transfer from NADH to O2 occurs in one step
FALSE

chlorophyll antenna transport electrons between pigments
FALSE; excitation energy is transferred

chloroplast envelope carries photosynthetic electron transport
FALSE

photosystem I acts before photosystem II
FALSE

O2 produced by photosynthesis comes from CO2
FALSE; source says it comes from water

PSII releases O2 after one photon
FALSE

NADPH and NADH are interchangeable pools
FALSE

Calvin cycle directly requires photons in each reaction
FALSE

Calvin cycle = TCA cycle reversed
FALSE

plants do not need mitochondria
FALSE

chloroplast ATP is simply exported to cytosol
FALSE in source framing

chemiosmosis is unique to eukaryotes
FALSE

proton gradient is merely a visualization convention
FALSE
```

# 303. Cross-chapter dependencies

```text
Chapter 2:
water, H+, pH, electrostatics, pigments, chemical bonds

Chapter 3:
ΔG, ATP, NADH/NADPH, oxidation/reduction

Chapter 4:
protein conformational change, allostery, enzyme catalysis

Chapter 11:
membrane bilayer, transmembrane proteins, porins

Chapter 12:
electrochemical gradients, membrane potential, coupled transport

Chapter 13:
glycolysis, pyruvate, acetyl CoA, TCA, NADH/FADH2

Chapter 15:
mitochondrial/chloroplast protein import and organelle biogenesis

Chapter 16:
ROS and signaling

Chapter 18:
apoptosis
```

# 304. Chapter 14 core causal model

```text
FOOD
→ NADH / FADH2
→ respiratory electron transport
→ H+ pumped matrix→IMS
→ PMF
→ H+ through ATP synthase
→ ATP

LIGHT
→ chlorophyll excitation
→ reaction-center charge separation
→ PSII electron flow
→ H+ pumped stroma→lumen
→ ATP

H2O
→ PSII water splitting
→ electrons + O2

PSI + light
→ high-energy electrons
→ NADP+ → NADPH

ATP + NADPH + CO2
→ Calvin cycle
→ G3P
→ sugars / starch / fats / exported carbon

exported carbon
→ plant mitochondria
→ ATP
```

# 305. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 14: “Energy Generation in Mitochondria and Chloroplasts.”**

Printed pages:
```text
473–514
```

PDF pages reviewed:
```text
508–549
```

Reviewed:
- all four major chapter sections
- Figures 14–1 through 14–48
- Table 14–1
- Table 14–2
- Panel 14–1
- How We Know: *How Chemiosmotic Coupling Drives ATP Synthesis*
- Essential Concepts
- Why Trust Science?
- Questions 14–1 through 14–23

# 306. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- two-stage chemiosmotic mechanism
- organelle endosymbiotic evidence
- mitochondrial dynamics/fission/fusion
- all Table 14–1 functions
- four mitochondrial compartments
- porin ~5000-Da source cutoff
- cristae architecture
- mitochondrial protein-distribution source values
- NADH/FADH2 electron entry
- three respiratory complexes
- Q and cytochrome c
- matrix→IMS proton pumping
- pH 7.9/7.2 example
- ΔV + ΔpH PMF
- ATP synthase F0/F1/stator/rotor architecture
- >100 ATP/s and 3 ATP/revolution source values
- reversible ATP synthase
- pyruvate/phosphate H+ symport
- ADP/ATP antiport
- ATP/ADP ~10 source value
- Table 14–2 complete accounting
- NADH 2.5 ATP / FADH2 1.5 ATP
- redox-potential definitions
- Panel 14–1 equation
- -320/+30/+230/+820 mV source values
- -109.6 and -219.2 kJ/mol source values
- Fe–S, heme, Cu redox chemistry
- cytochrome c oxidase stoichiometry
- ROS/superoxide source discussion
- DNP/uncoupling
- brown-fat uncoupling
- Mitchell chemiosmotic history
- Racker/Stoeckenius liposome experiment
- chloroplast envelope/stroma/thylakoid/grana
- Stage 1/Stage 2 photosynthesis
- chlorophyll spectrum and structure
- antenna/reaction-center distinction
- special-pair charge separation
- PSII → Q → b6-f → plastocyanin → PSI → ferredoxin → FNR
- water splitting and O2 source
- ATP/NADPH production
- Rubisco reaction/rate/abundance source statements
- pyrenoid source section
- Calvin-cycle 3 CO2 / 9 ATP / 6 NADPH / 1 G3P
- starch/fat storage source section
- chloroplast–mitochondrion collaboration
- staged evolution model
- green sulfur bacteria/H2S
- atmospheric oxygen source model
- Methanococcus section
- all Questions 14–1 through 14–23
- all schemas
- all DO_NOT_INFER rules
- source trace

# END OF CHAPTER 14 CANON

Recommended repository destination:

```text
science/chapters/14_energy_generation_mitochondria_chloroplasts.md
```

Recommended commit message:

```text
science: add Chapter 14 bioenergetics canon
```

Do not begin Chapter 15 merely because this file exists.

Chapter 15 will move from bioenergetics to eukaryotic compartmentalization and protein targeting: organelle identity, nuclear transport, peroxisomes, ER targeting/translocation, signal sequences, membrane-protein insertion, lipid transfer, and vesicular transport.
