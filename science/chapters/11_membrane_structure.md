---
title: "The Seamless Cell — Science Canon — Chapter 11"
subtitle: "Membrane Structure"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 11, printed pages 381–404 (PDF approximately pages 416–439)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 11 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 11 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapters 1–10 established:

```text
cellular organization
→ chemistry
→ proteins
→ DNA/chromatin
→ replication
→ gene expression
→ gene regulation
→ genome evolution
→ experimental manipulation
```

Chapter 11 establishes the physical architecture of **cellular boundaries**:

```text
water
+
amphipathic lipids
→ lipid bilayer
→ closed compartment
+
membrane proteins
→ selective, dynamic, functional membrane
```

The central project principle is:

> **A biological membrane is not a translucent wall, a static shell, or a decorative boundary. It is a ~5-nm-thick, self-sealing, asymmetric, two-dimensional molecular fluid whose lipids and proteins move, interact, bend, segregate into domains, preserve orientation during membrane traffic, and couple mechanically to structures on both sides.**

This chapter must eventually govern how The Seamless Cell represents:

- plasma membranes
- internal organelle membranes
- bilayer thickness
- phospholipids
- cholesterol
- glycolipids
- phosphatidylcholine
- phosphatidylserine
- phosphatidylethanolamine
- sphingomyelin
- phosphatidylinositols
- galactocerebroside
- hydrophilic heads
- hydrophobic tails
- amphipathic molecules
- hydrophobic effect
- spontaneous bilayer assembly
- membrane self-sealing
- closed membrane compartments
- membrane curvature
- liposomes
- lateral lipid diffusion
- lipid rotation
- tail flexion
- rare flip-flop
- membrane fluidity
- saturation and unsaturation
- hydrocarbon-tail length
- temperature adaptation
- cholesterol-mediated stiffening
- ER membrane synthesis
- scramblases
- Golgi flippases
- leaflet asymmetry
- conserved membrane orientation
- glycocalyx
- transmembrane proteins
- monolayer-associated proteins
- lipid-linked proteins
- protein-attached/peripheral proteins
- integral versus peripheral membrane proteins
- single-pass α-helical proteins
- multipass α-helical proteins
- amphipathic transmembrane helices
- β barrels
- porins
- detergents
- micelles
- SDS
- Triton X-100
- membrane-protein solubilization
- bacteriorhodopsin
- retinal
- proton pumping
- cell walls
- cell cortex
- spectrin
- actin
- membrane attachment proteins
- red-blood-cell membrane mechanics
- lateral protein diffusion
- membrane domains
- tight-junction diffusion barriers
- glycoproteins
- proteoglycans
- glycolipids
- lectins
- cell-surface carbohydrates
- FRAP
- single-particle tracking
- artificial membrane reconstitution

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 11.

## `SOURCE_SCALE`

A numerical value, count, rate, thickness, time, length, proportion, or molecular scale explicitly supplied by Chapter 11.

## `SOURCE_MODEL`

A mechanistic or structural model presented by the chapter.

## `SOURCE_DERIVED`

A direct logical consequence or calculation based on source-supported information.

## `SOURCE_TERMINOLOGY`

Terminology used by Chapter 11 and retained here.

## `SOURCE_ERA_STATEMENT`

A statement whose exact empirical value, terminology, or interpretation may need external verification before use as a current 2026 simulation constant.

## `SOURCE_HYPOTHESIS`

A proposed interpretation presented as uncertain.

## `PROJECT_CONSTRAINT`

A visualization, architecture, topology, rendering, or educational rule derived from the source.

## `VERIFY_QUANT`

A quantitative source claim preserved here but not yet approved as an exact runtime constant.

## `LATER_CHAPTER_REFINEMENT`

A topic introduced here whose deeper mechanism is developed in later chapters.

## `DO_NOT_INFER`

A hard guardrail against converting a simplified schematic, experimental image, analogy, or source example into a universal biological rule.

---

# 1. Chapter structure

Chapter 11 has two major sections:

```text
1. THE LIPID BILAYER

2. MEMBRANE PROTEINS
```

Major subsection flow:

```text
THE LIPID BILAYER

- Membrane Lipids Form Bilayers in Water
- The Lipid Bilayer Is a Flexible Two-dimensional Fluid
- The Fluidity of a Lipid Bilayer Depends on Its Composition
- Membrane Assembly Begins in the Endoplasmic Reticulum
- Certain Phospholipids Are Confined to One Side of the Membrane

MEMBRANE PROTEINS

- Membrane Proteins Associate with the Lipid Bilayer in Different Ways
- A Polypeptide Chain Usually Crosses the Lipid Bilayer as an α Helix
- Membrane Proteins Can Be Solubilized in Detergents
- We Know the Complete Structure of Relatively Few Membrane Proteins
- The Plasma Membrane Is Reinforced by the Underlying Cell Cortex
- A Cell Can Restrict the Movement of Its Membrane Proteins
- The Cell Surface Is Coated with Carbohydrate
```

Supporting material:

```text
Figures 11–1 through 11–37

Table 11–1:
Some Examples of Plasma Membrane Proteins and Their Functions

How We Know:
Measuring Membrane Flow

Why Trust Science?

Essential Concepts

Questions 11–1 through 11–20
```

---

# 2. Plasma membrane

```text
plasma membrane
=
membrane that encloses the cell
and separates its internal chemical environment
from the outside environment
```

---

# 3. Membranes are universal cellular structures

The chapter states:

```text
every cell on Earth uses a membrane
```

to separate and protect its chemical components.

---

# 4. Membrane thickness

**Status: `SOURCE_SCALE`**

The plasma membrane is described as approximately:

```text
5 nm thick
```

---

# 5. Atomic-scale comparison

**Status: `SOURCE_SCALE`**

The source also describes the membrane thickness as roughly:

```text
50 atoms
```

across.

---

# 6. A membrane is not visible directly by ordinary light microscopy

Its thickness lies below conventional light-microscope resolution.

---

# 7. Basic structural formula

```text
lipid bilayer
+
embedded/associated proteins
=
cell membrane
```

---

# 8. Selective barrier function

Membranes prevent molecules on opposite sides from freely mixing.

---

# 9. Compartment identity

Because of the membrane barrier:

```text
intracellular composition
can differ
from extracellular composition
```

---

# 10. Membranes are not completely impermeable

Cells require controlled movement of:

- nutrients inward
- waste products outward
- ions
- signaling information

---

# 11. Channels and transporters

The plasma membrane contains selective proteins that permit movement of particular small molecules and ions.

### `LATER_CHAPTER_REFINEMENT`

Detailed transport mechanisms belong to Chapter 12.

---

# 12. Receptors

Membrane proteins can act as receptors that detect environmental information and initiate cellular responses.

### `LATER_CHAPTER_REFINEMENT`

Detailed signaling belongs to Chapter 16.

---

# 13. Membrane growth

A cell can increase its membrane area by adding new membrane while preserving continuity.

---

# 14. Membrane deformation

A membrane can bend and deform without automatically tearing.

---

# 15. Membrane self-healing

Small membrane disruptions can rapidly reseal.

---

# 16. A membrane is not balloon-like

The source explicitly contrasts membranes with an ordinary balloon:

```text
puncture
does not simply cause total collapse
```

---

# 17. Bacterial membrane source model

Some bacteria are represented as having the plasma membrane as their only membrane.

### `DO_NOT_INFER`

Do not generalize this to all bacteria.

---

# 18. Eukaryotic internal membranes

Eukaryotic cells have internal membranes surrounding compartments including:

- ER
- Golgi apparatus
- endosomes
- mitochondria
- nucleus
- lysosomes
- peroxisomes
- transport vesicles

---

# 19. Double-membrane organelles

The source specifically notes:

```text
nucleus
mitochondrion
```

are each enclosed by two membranes.

---

# 20. Common membrane construction principle

Internal membranes follow the same general lipid-bilayer principle as the plasma membrane.

---

# 21. Membrane identity differs by composition

Different membranes contain different:

- lipid compositions
- resident protein sets

which give each membrane specialized functions.

---

# 22. Lipid bilayer

```text
lipid bilayer
=
two closely apposed layers of lipid molecules
```

---

# 23. Bilayer barrier function

The bilayer is a strong barrier to most:

```text
water-soluble molecules
```

---

# 24. Protein functional specialization

Most membrane-specific functions beyond basic barrier formation are executed by membrane proteins.

---

# 25. The membrane is a molecular system, not a material sheet analogy

### `PROJECT_CONSTRAINT`

Avoid rendering a membrane as:

- plastic film
- rigid glass
- rubber skin
- homogeneous translucent surface

unless clearly marked as an abstraction.

---

# 26. Historical 1925 lipid-monolayer experiment

Researchers extracted lipids from purified red blood cells using benzene.

---

# 27. Extracted lipids were spread on water

The lipids formed a surface film.

---

# 28. Monolayer compression experiment

A movable barrier compressed the lipids into a sheet:

```text
one molecule thick
```

---

# 29. Area relationship

**Status: `SOURCE_SCALE`**

The compressed lipid monolayer occupied approximately:

```text
2×
```

the surface area of the original intact red blood cells.

---

# 30. Bilayer deduction

Researchers inferred:

```text
cell membrane
=
two layers of lipid
```

---

# 31. Historical experiment is inferential

### `PROJECT_CONSTRAINT`

The bilayer was not directly "seen" in that experiment.

It was inferred from:

```text
lipid amount
+
surface area
```

---

# 32. Membrane lipid classes

The chapter's major classes are:

```text
phospholipids
sterols
glycolipids
```

---

# 33. Amphipathic

```text
amphipathic
=
containing both hydrophilic and hydrophobic regions
```

---

# 34. Typical phospholipid architecture

A typical membrane phospholipid has:

```text
hydrophilic head
+
two hydrophobic hydrocarbon tails
```

---

# 35. Phosphate-containing head

Phospholipids contain a phosphate-containing hydrophilic head.

---

# 36. Phosphatidylcholine

The chapter calls phosphatidylcholine one of the most abundant phospholipids in animal and plant membranes.

---

# 37. Phosphatidylcholine components

The Figure 11–6 molecule is built from:

```text
choline
phosphate
glycerol
fatty-acid tail 1
fatty-acid tail 2
```

---

# 38. Glycerol connection

Glycerol links the hydrophilic head region to the hydrocarbon tails.

---

# 39. Fatty acid

Each hydrophobic tail is described as a fatty-acid-derived hydrocarbon chain.

---

# 40. Double bond causes kink

A double bond in a hydrocarbon chain introduces a bend/kink.

---

# 41. Phosphatidylserine

The source shows phosphatidylserine as a phospholipid whose hydrophilic head includes:

```text
serine phosphate
```

---

# 42. Cholesterol

Cholesterol is a sterol membrane lipid in animal cells.

---

# 43. Cholesterol amphipathicity

Its hydrophilic region is the:

```text
-OH group
```

while the rest is largely hydrophobic.

---

# 44. Cholesterol shape

The source depicts cholesterol as having:

- a short rigid planar steroid-ring structure
- a nonpolar hydrocarbon tail
- a small polar head

---

# 45. Glycolipid

```text
glycolipid
=
membrane lipid containing carbohydrate
as part of its hydrophilic head
```

---

# 46. Galactocerebroside

The chapter uses galactocerebroside as a glycolipid example.

---

# 47. Galactocerebroside head

Its hydrophilic portion includes:

```text
galactose
+
-OH-containing region
```

---

# 48. Hydrophilic molecular behavior

Hydrophilic molecules can interact favorably with water through:

- electrostatic attractions
- hydrogen bonds

---

# 49. Hydrophobic molecular behavior

Hydrophobic molecules are largely nonpolar and cannot form comparable favorable interactions with water.

---

# 50. Acetone example

The source uses acetone as a polar molecule that dissolves in water.

---

# 51. Partial charges

The source depicts polar atoms with:

```text
δ+
δ-
```

partial charges.

---

# 52. Hydrophobic-effect water ordering

Around a hydrophobic molecule, adjacent water molecules reorganize to maintain hydrogen bonding with one another.

---

# 53. "Cagelike" water structure

The source calls the local ordered water arrangement:

```text
cagelike
```

---

# 54. Cagelike order has a free-energy cost

The highly ordered arrangement is less favorable than unrestricted bulk-water configurations.

---

# 55. Hydrophobic aggregation reduces water exposure

Hydrophobic molecules cluster to reduce the amount of hydrophobic surface contacting water.

---

# 56. Hydrophobic effect is not a literal repulsive force from water

### `PROJECT_CONSTRAINT`

Do not animate water molecules as consciously "pushing away" nonpolar groups.

The source mechanism is thermodynamic reorganization of water and reduction of unfavorable exposure.

---

# 57. 2-methylpropane example

The source uses:

```text
2-methylpropane
```

as an entirely hydrophobic molecule.

---

# 58. Triacylglycerol

The chapter describes triacylglycerol as the principal constituent of:

- animal fats
- plant oils

---

# 59. Triacylglycerol is entirely hydrophobic

Unlike phospholipids, it lacks a large hydrophilic head.

---

# 60. Fat droplets

Purely hydrophobic lipid molecules aggregate into:

```text
fat droplets
```

in aqueous environments.

---

# 61. Bilayer formation resolves amphipathic conflict

In a bilayer:

```text
hydrophilic heads
→ face water

hydrophobic tails
→ face one another inside bilayer
```

---

# 62. Bilayer interior

The bilayer interior is a hydrophobic environment largely excluding water.

---

# 63. Bilayer formation is energetically favorable

The configuration minimizes exposure of hydrocarbon tails to water.

---

# 64. Bilayer self-sealing

A tear creates an exposed hydrophobic edge.

That edge is energetically unfavorable.

---

# 65. Small tears

For a small tear:

```text
lipids rearrange
→ exposed edge disappears
→ bilayer continuity restored
```

---

# 66. Large tears

A sufficiently large disruption can cause a membrane sheet to:

```text
fold
+
break into separate closed vesicles
```

---

# 67. Free-edge prohibition

The source's overriding physical principle:

```text
free bilayer edges are rapidly eliminated
```

---

# 68. Closed-compartment formation

A membrane sheet can eliminate free edges by bending and closing into a sealed compartment.

---

# 69. Membrane compartmentalization emerges from lipid chemistry

The tendency to form closed containers follows from amphipathic molecular structure.

---

# 70. Project topology rule

### `PROJECT_CONSTRAINT`

A stable membrane surface should normally be represented as:

```text
closed
or
topologically connected to another closed membrane surface
```

rather than ending abruptly in exposed hydrophobic edges.

---

# 71. Figure 11–11 scale

**Status: `SOURCE_SCALE`**

The bilayer cross-section schematic includes approximately:

```text
1 nm
```

scale detail.

---

# 72. Membranes are two-dimensional fluids

```text
two-dimensional fluid
=
lipids move freely within the plane of a monolayer
while remaining confined to the bilayer
```

---

# 73. Lateral diffusion

Lipids continually exchange positions with neighboring lipids within the same monolayer.

---

# 74. Lipid flexion

Hydrocarbon tails undergo rapid flexing motions.

---

# 75. Lipid rotation

Individual lipid molecules rotate around their long axes.

---

# 76. Lipid flip-flop

```text
flip-flop
=
movement of a lipid from one monolayer
to the opposite monolayer
```

---

# 77. Spontaneous flip-flop is rare

The hydrophilic head would have to pass through the hydrophobic core.

---

# 78. Spontaneous flip-flop source frequency

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Without facilitating proteins, the source estimates an individual phospholipid flips less than:

```text
once per month
```

under cell-like conditions.

---

# 79. Lateral lipid diffusion source scale

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The main text says an artificial-bilayer lipid may diffuse approximately:

```text
2 µm
```

in about:

```text
1 second
```

---

# 80. Bacterial-cell-length comparison

The source compares:

```text
2 µm
```

to the length of an entire bacterial cell.

---

# 81. Lipid rotation source rate

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Some lipids rotate at speeds up to approximately:

```text
500 revolutions per second
```

---

# 82. Membrane fluidity is biological, not decorative motion

### `PROJECT_CONSTRAINT`

Lipid movement should be modeled as:

- stochastic
- continuous
- constrained to leaflet
- molecular-scale

not as synchronized waves or arbitrary visual wobble.

---

# 83. Membrane flexibility

A bilayer can bend without breaking continuity.

---

# 84. Minimum vesicle size source statement

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Bilayer flexibility is said to set a lower vesicle diameter near:

```text
25 nm
```

---

# 85. Liposome

```text
liposome
=
closed spherical vesicle formed from lipid bilayer
```

---

# 86. Liposomes form spontaneously from phospholipids in water

Pure phospholipids can self-assemble into closed vesicles.

---

# 87. Liposome source-size range

**Status: `SOURCE_SCALE`**

The chapter gives approximately:

```text
25 nm to 1 µm diameter
```

---

# 88. Figure 11–13 scale bars

**Status: `SOURCE_SCALE`**

The figure includes:

```text
25 nm
100 nm
```

scale references.

---

# 89. Artificial bilayers are experimental models

They simplify membrane composition and allow controlled measurement of lipid behavior.

---

# 90. Cell and artificial membranes show similar basic lipid motions

The source states cell-membrane lipids show:

- lateral diffusion
- rotation
- tail flexion
- rare spontaneous flip-flop

as synthetic bilayers do.

---

# 91. Fluidity must stay within limits

Membranes cannot be arbitrarily rigid or arbitrarily fluid and remain functional.

---

# 92. Tail packing determines fluidity

More regular/tight hydrocarbon packing:

```text
→ more viscous
→ less fluid
```

---

# 93. Tail length affects packing

Shorter tails have fewer van der Waals interactions along their length.

---

# 94. Shorter tails increase fluidity

```text
shorter hydrocarbon chains
→ weaker cumulative tail-tail attraction
→ increased membrane fluidity
```

---

# 95. Hydrocarbon-tail length source range

**Status: `SOURCE_SCALE`**

Membrane phospholipid tails:

```text
14–24 carbon atoms
```

---

# 96. Most common tail lengths

**Status: `SOURCE_SCALE`**

The source says:

```text
18 or 20 carbon atoms
```

are especially common.

---

# 97. Saturated tail

```text
saturated
=
contains only single C-C bonds
and the maximum hydrogen complement
```

---

# 98. Unsaturated tail

```text
unsaturated
=
contains one or more C=C double bonds
```

---

# 99. Double bonds disrupt packing

A cis-like kink in the source schematic prevents neighboring tails from packing as closely.

---

# 100. Unsaturation increases fluidity

More unsaturated hydrocarbon tails:

```text
→ looser packing
→ higher fluidity
```

---

# 101. Temperature adaptation

Bacterial and yeast cells adjust membrane-lipid composition in response to temperature.

---

# 102. High-temperature source response

At higher temperatures, the chapter states cells tend to make tails that are:

```text
longer
+
contain fewer double bonds
```

---

# 103. High-temperature purpose

Those changes counter excessive fluidity.

---

# 104. Low-temperature source-derived response

### `SOURCE_DERIVED`

The converse logic predicts:

```text
shorter tails
and/or
more unsaturated tails
```

help maintain fluidity at low temperature.

---

# 105. Vegetable oils

Plant fats are described as generally more unsaturated and liquid at room temperature.

---

# 106. Animal fats

Butter/lard are described as generally more saturated and solid at room temperature.

---

# 107. Hydrogenation

```text
hydrogenation
=
addition of hydrogen across double bonds
```

in the margarine example.

---

# 108. Hydrogenation reduces unsaturation

Removing double bonds makes oils more solid at room temperature.

---

# 109. Cholesterol in animal plasma membrane

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source says cholesterol can constitute about:

```text
20% of membrane lipid by weight
```

in animal plasma membranes.

---

# 110. Cholesterol occupies gaps

Its rigid steroid-ring structure fills spaces created by kinks in unsaturated phospholipid tails.

---

# 111. Cholesterol stiffens membrane

The source states cholesterol can make the bilayer:

```text
less flexible
```

---

# 112. Cholesterol reduces permeability

The source also says cholesterol makes the membrane:

```text
less permeable
```

---

# 113. Cholesterol tail chemistry

Figure 11–15 warns that a differently colored cholesterol hydrocarbon tail is chemically equivalent in hydrophobic character to phospholipid hydrocarbon tails.

---

# 114. Figure 11–15 molecular scale

**Status: `SOURCE_SCALE`**

The figure includes approximately:

```text
6 nm
```

for the rendered bilayer model.

---

# 115. Why fluidity matters — protein interactions

Membrane-protein diffusion allows proteins to encounter and interact.

---

# 116. Why fluidity matters — newly synthesized components

Lipids and proteins inserted at one location can spread laterally through the membrane.

---

# 117. Why fluidity matters — cell division

Membrane molecules can be distributed between daughter cells.

---

# 118. Why fluidity matters — fusion

Fluid membranes can fuse and mix components under appropriate conditions.

### `LATER_CHAPTER_REFINEMENT`

Membrane fusion is developed in Chapter 15.

---

# 119. Eukaryotic phospholipid synthesis begins on ER cytosolic face

New phospholipids are synthesized by enzymes located on the:

```text
cytosolic surface of the ER
```

---

# 120. Fatty-acid substrates

The source states free fatty acids are used as substrates in phospholipid synthesis.

---

# 121. Initial insertion is asymmetric

New phospholipids are initially inserted only into the:

```text
cytosolic monolayer
```

of ER membrane.

---

# 122. Unequal insertion would distort leaflet area if uncorrected

### `SOURCE_DERIVED`

Therefore newly synthesized lipid must be redistributed between leaflets during ER membrane growth.

---

# 123. Scramblase

```text
scramblase
=
membrane transporter that transfers phospholipids
between monolayers with low lipid specificity
```

---

# 124. ER scramblase action

The source describes random transfer of phospholipids from one leaflet to the other.

---

# 125. Scramblase balances ER leaflets

The result is:

```text
approximately symmetric distribution
of newly synthesized ER phospholipids
```

---

# 126. Scramblase and spontaneous flip-flop are different

### Hard distinction

```text
spontaneous flip-flop:
rare

scramblase-mediated transfer:
protein-facilitated
```

---

# 127. Newly made ER membrane has multiple destinations

Some remains in ER.

Some is delivered to:

- Golgi
- plasma membrane
- other compartments

---

# 128. Vesicle budding and fusion preserve membrane material

### `LATER_CHAPTER_REFINEMENT`

Mechanism belongs to Chapter 15.

---

# 129. Most biological membranes are asymmetric

Their two monolayers often contain different lipid species and proportions.

---

# 130. ER membrane begins comparatively symmetric in source model

Scramblase randomization equalizes the leaflets.

---

# 131. Major phospholipid asymmetry begins in Golgi

The chapter states Golgi flippases help establish later leaflet asymmetry.

---

# 132. Flippase

```text
flippase
=
ATP-dependent transporter that transfers
selected phospholipids from one monolayer to the other
```

---

# 133. Flippase specificity

Unlike scramblase, flippase moves specific lipid species.

---

# 134. Flippase energy source

```text
ATP hydrolysis
```

---

# 135. Source-selected phospholipids

Figure 11–17 shows flippases moving:

- phosphatidylserine
- phosphatidylethanolamine

toward the cytosolic monolayer.

---

# 136. Noncytosolic enrichment

As a consequence, the source depicts:

- phosphatidylcholine
- sphingomyelin

as enriched in the noncytosolic monolayer.

---

# 137. Phosphatidylserine distribution

```text
mainly cytosolic leaflet
```

---

# 138. Phosphatidylethanolamine distribution

```text
mainly cytosolic leaflet
```

---

# 139. Phosphatidylcholine distribution

```text
concentrated in noncytosolic leaflet
```

---

# 140. Sphingomyelin distribution

```text
concentrated in noncytosolic leaflet
```

---

# 141. Phosphatidylinositol distribution

The source places phosphatidylinositols mainly in the:

```text
cytosolic monolayer
```

---

# 142. Phosphatidylinositols and signaling

They participate in cell signaling.

### `LATER_CHAPTER_REFINEMENT`

Detailed signaling belongs to Chapter 16.

---

# 143. Glycolipid distribution

Glycolipids are found:

```text
exclusively in the noncytosolic monolayer
```

in the source's animal plasma-membrane model.

---

# 144. Cholesterol leaflet distribution

The source depicts cholesterol as:

```text
approximately equally distributed
between both monolayers
```

---

# 145. Membrane sidedness

All cell membranes possess topologically distinct:

```text
cytosolic face
noncytosolic face
```

---

# 146. Plasma-membrane noncytosolic face

At the plasma membrane, the noncytosolic face becomes:

```text
extracellular face
```

---

# 147. Organelle-membrane noncytosolic face

For organelles, the noncytosolic face faces:

```text
organelle lumen
```

---

# 148. Cytosolic orientation is conserved through membrane traffic

When membranes bud and fuse:

```text
cytosolic leaflet remains cytosolic
```

---

# 149. Noncytosolic orientation is conserved through membrane traffic

```text
Golgi lumen
→ vesicle lumen
→ cell exterior
```

are topologically equivalent noncytosolic spaces in the secretory route.

---

# 150. Membrane topology project rule

### `PROJECT_CONSTRAINT`

The Seamless Cell must encode membrane orientation persistently.

A leaflet cannot be relabeled "inside" or "outside" based solely on camera position.

---

# 151. Orientation applies to membrane proteins too

Protein domains retain their sidedness during vesicle budding and fusion.

---

# 152. Glycoprotein orientation example

A sugar-bearing protein domain facing Golgi lumen continues to face vesicle lumen and eventually extracellular space.

---

# 153. Glycolipid sugars are added in Golgi

The chapter states glycolipids acquire their sugar groups in the Golgi apparatus.

---

# 154. Glycosylation enzymes are oriented

The sugar-adding enzymes act only on lipids in the:

```text
noncytosolic leaflet
```

---

# 155. Glycolipids remain in noncytosolic leaflet

The source says no flippase moves glycolipids to the cytosolic leaflet.

---

# 156. Consequence at plasma membrane

Glycolipid sugars face:

```text
extracellular space
```

---

# 157. Lipid asymmetry can contribute to curvature

The source notes asymmetric lipid addition/distribution can help bend membranes.

---

# 158. Membrane curvature is mechanistically linked to leaflet composition

### `PROJECT_CONSTRAINT`

Curvature should not be treated only as a mesh deformation.

It can arise from molecular asymmetry and protein/lipid organization.

---

# 159. Membrane proteins carry most specialized membrane functions

Examples:

- transport
- anchoring
- receptors
- enzymes

---

# 160. Protein mass fraction of animal plasma membranes

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source gives approximately:

```text
50% of membrane mass
```

as protein for most animal plasma membranes.

---

# 161. Remaining membrane mass

The rest is primarily:

- lipid
- smaller amounts of carbohydrate on glycolipids/glycoproteins

---

# 162. Lipid-to-protein molecule number

**Status: `SOURCE_SCALE`**

Because lipids are much smaller, the chapter says a membrane typically has roughly:

```text
50 lipid molecules
per protein molecule
```

in broad terms.

---

# 163. Table 11–1 — transporter example

```text
Na+ pump
```

Function:

```text
actively pumps Na+ out
and K+ in
```

### `LATER_CHAPTER_REFINEMENT`

Chapter 12.

---

# 164. Table 11–1 — ion-channel example

```text
K+ leak channel
```

Function:

```text
allows K+ to leave cells
and influences excitability
```

---

# 165. Table 11–1 — anchor example

```text
integrins
```

Function:

```text
link intracellular actin
to extracellular matrix proteins
```

### `LATER_CHAPTER_REFINEMENT`

Chapter 20.

---

# 166. Table 11–1 — receptor example

```text
PDGF receptor
```

Function:

```text
binds extracellular platelet-derived growth factor
→ generates intracellular signals
→ promotes growth/division
```

---

# 167. Table 11–1 — enzyme example

```text
adenylyl cyclase
```

Function:

```text
produces cyclic AMP
in response to extracellular signals
```

---

# 168. Different membranes contain different proteins

A membrane's protein composition reflects its specialized function.

---

# 169. Four membrane-protein association modes

Chapter 11 distinguishes:

```text
1. transmembrane
2. monolayer-associated
3. lipid-linked
4. protein-attached
```

---

# 170. Transmembrane protein

```text
transmembrane protein
=
protein that spans the lipid bilayer
```

---

# 171. Transmembrane proteins are amphipathic

Hydrophobic regions sit inside the bilayer.

Hydrophilic regions face aqueous environments.

---

# 172. Monolayer-associated protein

A protein can be anchored to the cytosolic monolayer by an exposed:

```text
amphipathic α helix
```

---

# 173. Lipid-linked protein

A protein can be tethered to the membrane by one or more:

```text
covalently attached lipid groups
```

---

# 174. Protein-attached membrane protein

A protein can associate with the membrane indirectly through noncovalent interaction with another membrane protein.

---

# 175. Integral membrane protein

The chapter classifies proteins directly attached to the lipid bilayer as:

```text
integral membrane proteins
```

including:

- transmembrane
- monolayer-associated
- lipid-linked

---

# 176. Peripheral membrane protein

Proteins bound indirectly through protein-protein interactions are classified as:

```text
peripheral membrane proteins
```

---

# 177. Extraction distinction

Integral proteins generally require disruption of the bilayer, often with detergent, to be removed.

Peripheral proteins can often be released by milder treatments that preserve the bilayer.

---

# 178. Membrane protein orientation is unique

Each membrane protein has a defined orientation in the bilayer.

---

# 179. Orientation is functionally essential

Example:

```text
receptor ligand-binding domain
must face outside

signal-transmitting domain
must face cytosol
```

---

# 180. Orientation arises during synthesis/insertion

### `LATER_CHAPTER_REFINEMENT`

Chapter 15 explains insertion into ER membranes.

---

# 181. Transmembrane segments are hydrophobic

Membrane-spanning polypeptide regions contain many amino acids with hydrophobic side chains.

---

# 182. Hydrophobic side chains contact lipid tails

They are favorable in the bilayer core and unfavorable in bulk water.

---

# 183. Polypeptide backbone is polar

Peptide bonds carry partial charges and are intrinsically hydrophilic.

---

# 184. Backbone hydrogen bonding inside membrane

Because water is absent from the bilayer core, the polar backbone satisfies hydrogen-bonding potential internally.

---

# 185. α helix solves backbone polarity problem

In an α helix:

```text
backbone hydrogen bonds
form internally
```

while hydrophobic side chains can point outward toward lipid tails.

---

# 186. Most transmembrane spans are α helices

The chapter states α helices are the most common membrane-spanning form.

---

# 187. Approximate transmembrane α-helix length

**Status: `SOURCE_SCALE`**

About:

```text
20 amino acids
```

are required to cross the membrane in the source model.

---

# 188. Single-pass transmembrane protein

Some proteins cross the bilayer only once.

---

# 189. Single-pass receptor example

Many single-pass proteins act as receptors for extracellular signals.

---

# 190. Multipass transmembrane protein

Other proteins cross the bilayer many times.

---

# 191. Channels often require multipass structures

A single α helix cannot by itself form a complete aqueous pore.

---

# 192. Amphipathic transmembrane α helix

Some helices have:

```text
hydrophobic side
+
hydrophilic side
```

---

# 193. Helical pore arrangement

Multiple amphipathic helices can pack into a ring.

---

# 194. Pore-facing residues

Hydrophilic side chains face the aqueous channel interior.

---

# 195. Lipid-facing residues

Hydrophobic side chains face surrounding lipid tails.

---

# 196. Figure 11–24 source model

The figure uses:

```text
5 amphipathic transmembrane α helices
```

to form a hydrophilic pore.

---

# 197. β barrel

```text
β barrel
=
β sheet rolled into a cylindrical transmembrane structure
```

---

# 198. β-barrel exterior

Residues facing the lipid bilayer are hydrophobic.

---

# 199. β-barrel interior

Residues lining the water-filled channel are largely hydrophilic.

---

# 200. Porin

```text
porin
=
β-barrel protein forming large water-filled pore
```

---

# 201. Porin locations

The source mentions porins in:

- bacterial outer membranes
- mitochondrial outer membranes

---

# 202. Porin selectivity source framing

Porins permit passage of:

- small nutrients
- metabolites
- inorganic ions

while excluding larger unwanted molecules.

---

# 203. E. coli porin structure

**Status: `SOURCE_SCALE`**

Figure 11–25:

```text
16-stranded β sheet
```

curved into a barrel.

---

# 204. Porin oligomer

The source says three porin proteins associate into a:

```text
trimer
```

with:

```text
3 separate channels
```

---

# 205. Figure 11–25 scale

**Status: `SOURCE_SCALE`**

```text
2 nm
```

---

# 206. Membrane-protein structural biology is technically difficult

Membrane proteins operate in mixed:

- aqueous
- hydrophobic

environments.

---

# 207. Solubilization

To purify many membrane proteins, the lipid bilayer must first be disrupted.

---

# 208. Detergent

```text
detergent
=
small amphipathic lipid-like molecule
often containing one hydrophobic tail
```

---

# 209. Detergent shape

The source contrasts:

```text
detergent:
one tail
→ cone-like

phospholipid:
two tails
→ more cylindrical
```

---

# 210. Micelle

```text
micelle
=
small aggregate of detergent molecules
with hydrophobic regions shielded from water
```

---

# 211. Detergents prefer micelles over bilayers

Their molecular geometry makes micelles favorable.

---

# 212. Detergent solubilization mechanism

Detergent hydrophobic regions bind:

- transmembrane hydrophobic protein regions
- phospholipid tails

---

# 213. Protein-detergent complex

The detergent's hydrophilic region faces water, keeping a membrane protein soluble.

---

# 214. Lipid-detergent micelle

Phospholipids also become solubilized in mixed detergent-lipid aggregates.

---

# 215. SDS

```text
SDS
=
sodium dodecyl sulfate
```

---

# 216. SDS is ionic

Its hydrophilic head carries charge.

---

# 217. SDS is strong

The source says SDS can:

```text
displace lipids
and
unfold proteins
```

---

# 218. Triton X-100

The source presents Triton X-100 as a:

```text
mild nonionic detergent
```

---

# 219. Triton hydrophilic region

It is polar but not ionized.

---

# 220. Triton repeat count

**Status: `SOURCE_SCALE`**

The figure says the bracketed region is repeated:

```text
9 or 10 times
```

in the detergent mixture.

---

# 221. Detergent choice affects protein structure

### `PROJECT_CONSTRAINT`

Solubilization is not neutral.

Strong detergents can destroy native conformation.

---

# 222. Membrane proteins were historically hard to crystallize

Detergent micelles are often heterogeneous and interfere with ordered crystal formation.

---

# 223. X-ray crystallography

The source identifies x-ray crystallography as a standard method for detailed protein structure determination.

---

# 224. Cryo-electron microscopy

The chapter notes cryo-EM as a newer high-resolution method expanding membrane-protein structural knowledge.

---

# 225. Bacteriorhodopsin

```text
bacteriorhodopsin
=
light-driven proton-pumping membrane protein
```

---

# 226. Bacteriorhodopsin organism

The source places it in:

```text
Halobacterium salinarum
```

an archaeon from salt-marsh environments.

---

# 227. Bacteriorhodopsin abundance

It occurs in large amounts in the plasma membrane.

---

# 228. Bacteriorhodopsin chromophore

```text
retinal
=
light-absorbing nonprotein chromophore
```

---

# 229. Retinal is covalently attached

The source states retinal is covalently linked to one transmembrane α helix.

---

# 230. Light-triggered conformational change

Photon absorption changes retinal shape.

---

# 231. Retinal movement affects surrounding helices

The retinal conformational change drives a sequence of small protein conformational changes.

---

# 232. Proton pumping

These conformational changes move:

```text
H+
```

across the membrane.

---

# 233. Pump direction

The source describes H+ being pumped:

```text
out of the cell
```

---

# 234. Bacteriorhodopsin size

**Status: `SOURCE_SCALE`**

Approximately:

```text
250 amino acids
```

---

# 235. Bacteriorhodopsin transmembrane helices

**Status: `SOURCE_SCALE`**

```text
7 α helices
```

---

# 236. Proton path

Strategically placed polar amino-acid side chains provide a hydrophilic route through the hydrophobic membrane interior.

---

# 237. Retinal regeneration

The source states retinal returns to its original state while the system takes up another H+ from the cytosol.

---

# 238. Proton gradient

Many pumps working in sunlight establish:

```text
H+ concentration gradient
```

---

# 239. Proton gradient stores energy

The cell later uses that gradient for ATP production.

### `LATER_CHAPTER_REFINEMENT`

Chapter 14.

---

# 240. Membrane itself is mechanically fragile

The source says a bare membrane is extremely thin and fragile.

---

# 241. Paper-thickness analogy

**Status: `SOURCE_SCALE` / `SOURCE_MODEL`**

The source says approximately:

```text
10,000 membranes
```

stacked would be needed to reach the thickness of the page/paper.

---

# 242. Cell wall

Plants, yeasts, and bacteria obtain major mechanical support from a:

```text
cell wall
```

outside the plasma membrane.

---

# 243. Cell-wall composition source framing

The wall is described broadly as a fibrous layer of:

- proteins
- sugars
- other macromolecules

---

# 244. Animal-cell cortex

Animal plasma membranes are supported by an intracellular:

```text
cell cortex
```

---

# 245. Cell cortex

```text
cell cortex
=
meshwork of filamentous proteins
attached beneath the plasma membrane
```

---

# 246. Red blood cell as cortex model

Human red blood cells are used as a relatively simple, well-studied example.

---

# 247. Red blood cell shape

RBCs have a:

```text
flattened biconcave shape
```

---

# 248. Red blood cells lack nucleus

The source notes mature human RBCs shown lack a nucleus.

---

# 249. Red blood cells lack other intracellular organelles

The source notes they lack typical internal organelles.

---

# 250. Spectrin

```text
spectrin
=
long flexible cortical protein
forming a supporting lattice
```

---

# 251. Spectrin dimer

The main RBC cortex component is a:

```text
spectrin dimer
```

---

# 252. Spectrin length

**Status: `SOURCE_SCALE`**

Approximately:

```text
100 nm
```

---

# 253. Spectrin tetramers

Spectrin dimers join end-to-end into longer tetramers.

---

# 254. Actin in RBC cortex

A smaller number of actin molecules connects the spectrin mesh.

---

# 255. Attachment proteins

Cytosolic attachment proteins link spectrin to selected transmembrane proteins.

---

# 256. Cortex-to-membrane anchoring

The membrane is mechanically coupled to the cytoskeleton through transmembrane protein anchors.

---

# 257. Spectrin maintains RBC shape

The lattice supports the plasma membrane and biconcave morphology.

---

# 258. Spectrin-defect phenotype

Abnormal spectrin can produce:

- spherical red cells
- fragile red cells
- anemia

---

# 259. RBC Figure 11–29 scale

**Status: `SOURCE_SCALE`**

Scanning EM:

```text
5 µm
```

Cortex schematic:

```text
100 nm
```

---

# 260. Figure 11–29 visualization caveat

The spectrin network is deliberately stretched apart for clarity.

The source says the actual network is much denser.

---

# 261. Figure 11–29 density note

The molecules shown would occupy roughly:

```text
one-tenth
```

the illustrated area in a normal RBC cortex.

### `SOURCE_SCALE` / `SOURCE_MODEL`

---

# 262. Other animal cortices

Most animal cells have cortex proteins related to the RBC system but generally more complex.

---

# 263. Actin-rich cortex

The source emphasizes other animal-cell cortices are especially rich in:

```text
actin
```

---

# 264. Myosin

The motor protein:

```text
myosin
```

is also prominent in many cortices.

---

# 265. Cortex functions beyond support

The cortex helps cells:

- change shape
- move
- take up materials
- constrain membrane-protein diffusion

### `LATER_CHAPTER_REFINEMENT`

Chapter 17 for motility.

---

# 266. Membrane proteins can diffuse laterally

Many proteins move within the plane of the membrane.

---

# 267. Mouse-human cell-fusion experiment

Researchers fused:

```text
mouse cell
+
human cell
→ hybrid cell
```

---

# 268. Initial protein distribution after fusion

At first:

```text
mouse membrane proteins
and
human membrane proteins
```

remain in separate halves.

---

# 269. Later redistribution

The proteins later intermix across the hybrid-cell surface.

---

# 270. Main-text mixing timescale

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The main text says:

```text
within about half an hour
```

---

# 271. Figure 11–30 endpoint

**Status: `SOURCE_SCALE`**

The figure labels:

```text
time = 40 minutes
after cell fusion
```

---

# 272. Figure 11–30 incubation temperature

**Status: `SOURCE_SCALE`**

```text
37°C
```

---

# 273. Fluorescent antibody labels

Mouse and human membrane proteins were distinguished with antibodies carrying different fluorescent tags.

---

# 274. Rhodamine and fluorescein

The source examples include:

- rhodamine
- fluorescein

---

# 275. Cell-fusion experiment demonstrates lateral mobility

The observation supports the membrane-as-fluid model.

---

# 276. "Sea of freely floating proteins" is incomplete

The chapter explicitly says the simple fluid-mosaic picture is too simplistic.

---

# 277. Membrane domain

```text
membrane domain
=
localized region of membrane
with restricted or specialized components
```

---

# 278. Four ways protein mobility can be restricted

Figure 11–31 shows:

```text
1. tether to cell cortex
2. tether to extracellular matrix
3. tether to protein on adjacent cell
4. confinement by diffusion barrier
```

---

# 279. Cortex tether

An intracellular attachment can immobilize or corral a membrane protein.

---

# 280. Extracellular-matrix tether

A membrane protein can be fixed through extracellular interactions.

---

# 281. Cell-cell tether

A membrane protein can be attached to a protein on another cell.

---

# 282. Diffusion barrier

A structural boundary can prevent lateral movement into another membrane region.

---

# 283. Epithelial polarity example

Gut epithelial cells need different membrane proteins on:

- apical surface
- lateral surface
- basal surface

---

# 284. Apical side

The apical membrane faces:

```text
gut contents
```

---

# 285. Basal/lateral side

Basal and lateral membranes face tissues and neighboring cells.

---

# 286. Transporter segregation

Nutrient uptake proteins can be confined to the apical side.

---

# 287. Solute-export proteins

Other transport proteins can be confined basally/laterally.

---

# 288. Tight junction

```text
tight junction
=
specialized cell-cell junction forming a diffusion barrier
in the plasma membrane
```

---

# 289. Tight-junction belt

The source describes a continuous belt around epithelial cells at cell-cell contacts.

---

# 290. Tight junction blocks membrane-protein diffusion

Proteins cannot simply diffuse from one membrane domain across the junction.

---

# 291. Domain-local proteins can still diffuse within domain

A barrier restricts long-range location without eliminating local membrane fluidity.

---

# 292. Carbohydrate coat

Cell-surface carbohydrates form:

```text
carbohydrate layer
or
glycocalyx
```

---

# 293. Glycoprotein

```text
glycoprotein
=
protein carrying covalently attached oligosaccharide chains
```

---

# 294. Proteoglycan

```text
proteoglycan
=
protein carrying one or more long polysaccharide chains
```

---

# 295. Glycolipid carbohydrate

Glycolipids contribute sugar groups to the cell surface.

---

# 296. Extracellular-only carbohydrate orientation

The source emphasizes membrane carbohydrate is located on the:

```text
external/noncytosolic surface
```

of the plasma membrane.

---

# 297. Secreted glycoproteins can contribute to glycocalyx

Some secreted proteins can adsorb back onto the cell surface.

---

# 298. Glycocalyx protects mechanically

The carbohydrate layer helps protect the surface from physical damage.

---

# 299. Glycocalyx attracts water

Sugar chains bind/associate strongly with water.

---

# 300. Glycocalyx lubricates surface

The hydrated surface becomes slimy/slippery.

---

# 301. White-blood-cell example

Lubrication helps motile white blood cells move through narrow spaces.

---

# 302. Blood-cell anti-adhesion

The hydrated glycocalyx helps prevent blood cells from sticking nonspecifically to:

- one another
- vessel walls

---

# 303. Cell recognition

Surface carbohydrate also participates in:

```text
cell-cell recognition
```

---

# 304. Cell adhesion

Carbohydrates can contribute to selective adhesion.

---

# 305. Lectin

```text
lectin
=
protein specialized to bind specific carbohydrate structures
```

---

# 306. Lectins in the source are transmembrane proteins in the neutrophil example

Endothelial cells express lectins that recognize neutrophil surface sugars.

---

# 307. Oligosaccharide length

**Status: `SOURCE_SCALE`**

The source says cell-surface oligosaccharide chains are typically:

```text
fewer than 15 sugar units
```

---

# 308. Carbohydrate structural diversity

Sugar chains can branch and use multiple linkage geometries.

---

# 309. Three-sugar combinatorial diversity

The source states even:

```text
3 different sugars
```

can form:

```text
hundreds of different trisaccharides
```

through different linkages/arrangements.

---

# 310. Surface carbohydrate acts like molecular identity clothing

The chapter uses a "uniform" analogy for cell-type-specific carbohydrate patterns.

---

# 311. Egg-sperm recognition

Specific oligosaccharides participate in recognition between:

```text
egg
and
sperm
```

### `LATER_CHAPTER_REFINEMENT`

Chapter 19.

---

# 312. Neutrophil-endothelium recognition

At infection sites:

```text
endothelial lectin
binds neutrophil carbohydrate
```

---

# 313. Infection-site signaling induces endothelial lectin expression

The source states chemical signals from infected tissue stimulate endothelial cells to produce the relevant lectins.

---

# 314. Initial neutrophil adhesion is weak

This first carbohydrate-lectin interaction is not the final strong attachment.

---

# 315. Stronger interactions follow

Subsequent protein-protein interactions strengthen adhesion.

---

# 316. Neutrophil exits bloodstream

The neutrophil can then move between endothelial cells into infected tissue.

---

# 317. Fluidity experimental history

The source notes membrane fluidity was not broadly recognized until the:

```text
early 1970s
```

---

# 318. Measuring membrane movement requires labels

Experimental approaches label membrane molecules and track their movement.

---

# 319. FRAP

```text
FRAP
=
fluorescence recovery after photobleaching
```

---

# 320. FRAP labeling

Membrane proteins/lipids are first made fluorescent.

---

# 321. FRAP labeling methods

The source gives:

- fluorescent antibodies
- GFP fusion proteins

---

# 322. FRAP bleach step

A focused laser irreversibly destroys fluorescence in a small membrane patch.

---

# 323. FRAP bleach area

**Status: `SOURCE_SCALE`**

Typical source value:

```text
~1 µm × 1 µm
```

---

# 324. Photobleaching does not necessarily remove the protein

### `PROJECT_CONSTRAINT`

The fluorophore loses fluorescence; the membrane protein can remain physically present.

---

# 325. FRAP recovery

Unbleached fluorescent proteins diffuse into the bleached region.

---

# 326. FRAP diffusion coefficient

Faster recovery corresponds to higher apparent lateral diffusion.

---

# 327. FRAP population limitation

FRAP measures:

```text
hundreds to thousands of proteins
```

rather than individual molecules.

---

# 328. FRAP can confuse immobility and confinement

A molecule that does not restore fluorescence to the bleached region could be:

- truly immobilized
- confined to a small corral

---

# 329. Membrane viscosity analogy

**Status: `SOURCE_MODEL` / `SOURCE_ERA_STATEMENT`**

The chapter says cell membranes are roughly as viscous as:

```text
olive oil
```

---

# 330. Single-particle tracking

```text
SPT
=
single-particle tracking
```

---

# 331. SPT label

The source describes:

```text
antibody-coated gold nanoparticles
```

---

# 332. Gold particles are optically trackable

They appear as small dark dots by light microscopy.

---

# 333. SPT tracks individual molecules

The movement of tagged proteins can be recorded through time.

---

# 334. Membrane protein motion is heterogeneous

Observed patterns include:

- random diffusion
- confined diffusion
- near-complete immobility

---

# 335. Proteins can switch motion states

A single protein may transition between movement modes.

---

# 336. Figure 11–35 spatial scale

**Status: `SOURCE_SCALE`**

```text
1 µm
```

---

# 337. Figure 11–35 temporal scale

The trajectories represent movement over:

```text
seconds
```

---

# 338. Reconstitution

Purified membrane proteins can be inserted into artificial phospholipid vesicles.

---

# 339. Detergent removal drives reconstitution

Source workflow:

```text
membrane + mild detergent
→ solubilized protein
→ purify protein
→ add phospholipids
→ remove detergent
→ artificial bilayer with functional protein
```

---

# 340. Lipid environment preserves membrane-protein structure

Reconstitution provides a hydrophobic environment resembling the native membrane.

---

# 341. Artificial-bilayer mobility

The source says membrane proteins generally move:

```text
more freely
and
more rapidly
```

in artificial bilayers than in cell membranes.

---

# 342. Native membranes are crowded

Reduced mobility reflects:

- many proteins
- diverse lipids
- extracellular tethers
- cortical anchoring

---

# 343. Membrane diffusion is context-dependent

### `PROJECT_CONSTRAINT`

Do not assign one universal diffusion coefficient to all membrane proteins.

---

# 344. Why Trust Science — conflicting 1925 membrane models

The chapter explicitly notes that careful experiments once supported conflicting models.

---

# 345. 1925 bilayer proposal

One group inferred a lipid bilayer from extracted RBC lipids.

---

# 346. 1925 monolayer proposal

Another investigator concluded RBC membranes were a:

```text
lipid monolayer
```

---

# 347. Triple-layer historical proposal

Another model proposed:

```text
phospholipid bilayer
+
disordered cholesterol-rich oily layer
```

---

# 348. Triple-layer model persistence

The source says that model dominated textbooks into the:

```text
1970s
```

---

# 349. Scientific-model lesson

### `PROJECT_CONSTRAINT`

The Seamless Cell science canon should distinguish:

```text
current source-supported model
from
historical rejected models
```

without pretending science advances without disagreement.

---

# 350. Essential Concept — membrane barrier

Cell membranes create controlled chemical compartments.

---

# 351. Essential Concept — bilayer

Every cell membrane contains a continuous lipid bilayer with embedded proteins.

---

# 352. Essential Concept — amphipathicity

Amphipathic lipids spontaneously form self-sealing bilayers in water.

---

# 353. Essential Concept — major lipid classes

```text
phospholipids
sterols
glycolipids
```

---

# 354. Essential Concept — lateral diffusion

Lipids move rapidly within their own monolayer.

---

# 355. Essential Concept — spontaneous flip-flop is rare

Leaflet identity can persist despite fluidity.

---

# 356. Essential Concept — lipid asymmetry

The two leaflets differ in composition and function.

---

# 357. Essential Concept — temperature adaptation

Cells can adjust lipid composition to maintain membrane fluidity.

---

# 358. Essential Concept — membrane proteins

Proteins carry most specialized membrane activities.

---

# 359. Essential Concept — membrane-spanning structures

Most transmembrane segments are α helices, with some β barrels.

---

# 360. Essential Concept — alternative protein attachment

Membrane proteins can also be:

- monolayer-associated
- lipid-linked
- peripheral/protein-attached

---

# 361. Essential Concept — cortical support

Most membranes are mechanically supported by protein frameworks.

---

# 362. Essential Concept — protein confinement

Cells can immobilize or corral membrane proteins.

---

# 363. Essential Concept — surface carbohydrate

External sugar chains protect, lubricate, and support cell recognition.

---

# 364. Question 11–1 — what does "cagelike water" mean?

### `SOURCE_DERIVED`

Water does not detect a hydrophobic molecule by any active sensing mechanism.

Instead:

```text
hydrophobic solute cannot hydrogen-bond favorably with water
→ adjacent water molecules orient to preserve H-bonds with one another
→ fewer orientations are available
→ local water becomes more ordered
```

---

# 365. Question 11–1 — comparison with ice

The "cage" is not a rigid permanent crystal lattice.

It is:

```text
dynamic liquid water
with increased local orientational order
```

Ice is much more extensively ordered.

---

# 366. Question 11–1 — energetic cost

The ordered arrangement reduces configurational freedom and therefore carries a free-energy cost.

That cost is reduced when hydrophobic surfaces aggregate.

---

# 367. Question 11–2 — why do lipid tails cluster?

The source supports explanation:

```text
B:
water disfavors exposure of hydrophobic tails
```

more directly than:

```text
A:
tails possess some extraordinary mutual attraction
```

---

# 368. Question 11–2 — if direct lipid-lipid attraction dominated instead

### `SOURCE_DERIVED`

One would expect:

- stronger association independent of water
- less fluid behavior
- less dependence on hydrophobic exclusion
- potentially more rigid assemblies

The bilayer's present self-assembling behavior is fundamentally tied to the aqueous environment.

---

# 369. Question 11–3 — how can membrane be fluid yet asymmetric?

Because:

```text
lateral diffusion within leaflet
is fast

but
transverse flip-flop between leaflets
is very slow unless protein-catalyzed
```

Therefore each leaflet can remain compositionally distinct while remaining fluid in two dimensions.

---

# 370. Question 11–4 — why α helix or β barrel?

Both structures satisfy the polar peptide backbone inside the hydrophobic membrane.

For α helices:

```text
backbone H-bonds internally
hydrophobic side chains face lipid
```

For β barrels:

```text
β-sheet backbone H-bonds internally
hydrophobic residues face lipid
hydrophilic residues can face aqueous pore
```

---

# 371. Question 11–5 — detergent hydrophilic versus hydrophobic regions

The dark-gold regions in Figure 11–26 are polar/charged and can interact with water.

The yellow hydrocarbon regions are nonpolar and cannot make equivalent favorable interactions.

---

# 372. Question 11–5 — hydrophobic amino-acid tripeptide

A short peptide made from hydrophobic side-chain residues still contains:

```text
polar peptide backbone
```

capable of hydrogen bonding with water.

The side chains themselves would preferentially avoid water.

---

# 373. Question 11–6 — RBC transmembrane-protein mobility

The transmembrane proteins attached to the spectrin cortex are:

```text
strongly restricted in lateral mobility
```

because they are mechanically tethered.

---

# 374. Question 11–7 — methods cells use to restrict membrane proteins

The source gives:

```text
cortex tether
extracellular-matrix tether
adjacent-cell tether
diffusion barrier
```

---

# 375. Question 11–7 — can such membrane remain fluid?

Yes.

Restriction of selected proteins does not eliminate lateral diffusion of:

- lipids
- untethered proteins
- components within individual membrane domains

---

# 376. Question 11–8A

"Lipids spin rapidly around their long axis."

```text
TRUE
```

---

# 377. Question 11–8B

"Lipids rapidly exchange positions with neighbors in same monolayer."

```text
TRUE
```

---

# 378. Question 11–8C

"Lipids do not readily flip-flop spontaneously."

```text
TRUE
```

---

# 379. Question 11–8D

"Hydrogen bonds between lipid head groups/water continually break and reform."

```text
TRUE
```

### `SOURCE_DERIVED`

This follows from molecular motion in liquid water rather than static bonding.

---

# 380. Question 11–8E

"Glycolipids move through membrane-enclosed compartments but remain in one leaflet."

```text
TRUE
```

Their noncytosolic orientation is preserved during membrane traffic.

---

# 381. Question 11–8F

"Margarine contains more saturated lipid than source vegetable oil."

```text
TRUE
```

because hydrogenation removes double bonds.

---

# 382. Question 11–8G

"Some membrane proteins are enzymes."

```text
TRUE
```

Example:

```text
adenylyl cyclase
```

---

# 383. Question 11–8H

"The sugar layer surrounding all cells makes cells more slippery."

```text
FALSE AS AN ABSOLUTE STATEMENT
```

The source supports lubrication for many eukaryotic cell surfaces, especially examples such as blood cells, but does not establish a universal identical sugar coat/function for every cell.

---

# 384. Question 11–9 — two-dimensional fluid

A component can diffuse in:

```text
x-y directions
within the membrane plane
```

but remains constrained in the:

```text
z direction
```

to its membrane leaflet unless a special transbilayer mechanism acts.

---

# 385. Question 11–10A — phospholipid with one tail

One-tail geometry becomes detergent-like/cone-like.

Expected behavior:

```text
micelle formation favored
rather than stable bilayer
```

---

# 386. Question 11–10B — ~10-carbon tails

Shorter tails:

```text
weaker van der Waals interactions
→ increased fluidity
→ potentially less stable/permeable bilayer
```

---

# 387. Question 11–10C — all tails saturated

Expected:

```text
tighter packing
→ decreased fluidity
→ more rigid membrane
```

---

# 388. Question 11–10D — all tails unsaturated

Expected:

```text
many kinks
→ poorer packing
→ increased fluidity
```

---

# 389. Question 11–10E — saturated + unsaturated lipid mixture

### `SOURCE_DERIVED`

The membrane would have intermediate packing/fluidity compared with either pure extreme.

### `DO_NOT_INFER`

Chapter 11 does not authorize claiming a particular phase-separation or "raft" pattern from this question alone.

---

# 390. Question 11–10F — phospholipids covalently linked across leaflets

### `SOURCE_DERIVED`

Cross-leaflet covalent linkage would reduce:

- independent leaflet motion
- local rearrangement
- flexibility
- ease of curvature
- normal self-sealing behavior

The membrane would be more mechanically constrained.

---

# 391. Question 11–11 — phospholipid versus detergent

Phospholipid:

```text
two hydrophobic tails
more cylindrical
bilayer-forming
```

Detergent:

```text
one hydrophobic tail
more cone-shaped
micelle-forming
```

---

# 392. Question 11–11 — convert phospholipid toward detergent

Removing one hydrocarbon tail from a phospholipid-like molecule would make its shape more detergent-like.

---

# 393. Question 11–12A — exchange rate statement

The question gives:

```text
neighbor exchange every 10^-7 s
```

---

# 394. Question 11–12A — diffusion statement

The question independently gives:

```text
2 µm in ~0.2 s
```

for a lipid moving across a bacterial-cell-length distance.

---

# 395. Question 11–12A — source discrepancy note

The main chapter text earlier says approximately:

```text
2 µm in ~1 s
```

whereas Question 11–12 uses:

```text
~0.2 s
```

### `DO_NOT_INFER`

Preserve both as source statements rather than silently reconciling them.

---

# 396. Question 11–12A — naive directed-step calculation

If every 0.5-nm neighbor exchange were in the same direction:

```text
2 µm / 0.5 nm
= 4000 steps

4000 × 10^-7 s
= 4 × 10^-4 s
```

This is much faster than the stated diffusion time.

---

# 397. Question 11–12A — reason for discrepancy

Diffusion is a random walk:

```text
successive moves occur in many directions
```

so net displacement grows much more slowly than total path length.

---

# 398. Question 11–12B — ping-pong scale analogy

The question maps:

```text
0.5 nm lipid head
→ 4 cm ping-pong ball
```

---

# 399. Question 11–12B — step-equivalent speed

With one 4-cm exchange every:

```text
10^-7 s
```

the local step-equivalent speed is:

```text
0.04 m / 10^-7 s
= 4 × 10^5 m/s
```

or:

```text
1.44 × 10^6 km/h
```

### `SOURCE_DERIVED`

---

# 400. Question 11–12B — straight-line crossing time

If motion were directed rather than diffusive:

```text
6 m / 4×10^5 m/s
≈ 1.5×10^-5 s
```

---

# 401. Question 11–12B — random-walk caution

Actual diffusion across the room analogy would be much slower than the straight-line estimate because successive exchanges are randomly directed.

---

# 402. Question 11–13 — why RBC membrane needs transmembrane proteins

One essential reason in this chapter is mechanical:

```text
spectrin cortex
→ attachment proteins
→ transmembrane proteins
→ membrane
```

Without transmembrane anchors, the cortex could not support the bilayer in the source model.

---

# 403. Question 11–13 — additional functions

RBC transmembrane proteins also support selective transport and membrane organization.

---

# 404. Question 11–14 — five-subunit Na+ channel arrangement

Arrange the five amphipathic α helices in a ring:

```text
hydrophobic faces
→ outward toward lipid tails

hydrophilic faces
→ inward toward central aqueous pore
```

---

# 405. Question 11–14 — ligand activation

The extracellular ligand-binding event changes the channel state so Na+ can pass through the hydrophilic pore.

### `LATER_CHAPTER_REFINEMENT`

Detailed channel gating belongs to Chapter 12.

---

# 406. Question 11–15 — given mass ratio

The question gives protein:phospholipid:cholesterol mass ratio:

```text
2 : 1 : 1
```

---

# 407. Question 11–15 — molecular weights

```text
protein:
50,000

phospholipid:
800

cholesterol:
386
```

---

# 408. Question 11–15 — choose arbitrary mass units

Take:

```text
2 g protein
1 g phospholipid
1 g cholesterol
```

---

# 409. Question 11–15 — moles

```text
protein:
2 / 50,000
= 4.0×10^-5 mol

phospholipid:
1 / 800
= 1.25×10^-3 mol

cholesterol:
1 / 386
≈ 2.59×10^-3 mol
```

---

# 410. Question 11–15 — lipid molecules per protein

Total lipid moles:

```text
1.25×10^-3
+
2.59×10^-3
=
3.84×10^-3 mol
```

Ratio:

```text
3.84×10^-3
/
4.0×10^-5
≈ 96
```

Answer:

```text
~96 lipid molecules per protein molecule
```

### `SOURCE_DERIVED`

---

# 411. Question 11–16 — antibody labels remain extracellular

The fluorescent antibodies bind extracellular protein domains before fusion.

Membrane topology preserves that outside-facing orientation during cell fusion.

---

# 412. Question 11–16 — after protein mixing

At 37°C:

```text
membrane proteins diffuse laterally
→ labels spread over hybrid-cell surface
```

while remaining on the extracellular side.

---

# 413. Question 11–16 — 0°C prediction

### `SOURCE_DERIVED`

Cooling to 0°C should greatly reduce molecular motion and membrane fluidity.

Therefore mixing would be much slower or strongly inhibited.

---

# 414. Question 11–17 — hydrophobic forces in membrane protein versus soluble-protein folding

Same general physical principle:

```text
hydrophobic groups avoid water
```

but geometry differs.

---

# 415. Question 11–17 — soluble globular protein

Hydrophobic side chains tend to be:

```text
buried inside protein
```

away from surrounding water.

---

# 416. Question 11–17 — transmembrane region

Hydrophobic side chains are often:

```text
exposed on protein exterior
```

because the surrounding environment is itself hydrophobic lipid.

---

# 417. Question 11–17 — polar backbone problem

The transmembrane backbone is protected by internal hydrogen bonding in α helices/β sheets.

---

# 418. Question 11–18 — highest unsaturation

Best answer from the source logic:

```text
Antarctic fish
```

---

# 419. Question 11–18 — reasoning

Low environmental/body temperature tends to rigidify membranes.

More unsaturated lipid tails preserve fluidity by preventing tight packing.

---

# 420. Question 11–18 — why not polar bear

A polar bear is a mammal that maintains a relatively high internal body temperature despite cold surroundings.

### `SOURCE_DERIVED`

---

# 421. Question 11–18 — thermophile prediction

A bacterium living near:

```text
100°C
```

should favor membrane chemistry that resists excessive fluidity, not the highest unsaturation.

---

# 422. Question 11–19 — sequence criterion

A membrane-spanning α helix of approximately 20 residues should be rich in:

```text
hydrophobic amino acids
```

and depleted in charged residues.

---

# 423. Question 11–19 — sequence A

```text
ITLIYFGNMSSVTQTILLIS
```

contains several polar residues and is less uniformly hydrophobic.

---

# 424. Question 11–19 — sequence B

```text
LLLIFFGVMALVIVVILLIA
```

is strongly hydrophobic across nearly the entire 20-residue sequence.

---

# 425. Question 11–19 — sequence C

```text
LLKKFFRDMAAVHETILEES
```

contains several charged/polar residues.

---

# 426. Question 11–19 — answer

```text
B
```

is the strongest candidate for a transmembrane α helix.

---

# 427. Question 11–20 — triacylglycerol and bilayer

Triacylglycerol is essentially hydrophobic rather than amphipathic.

Therefore it is not expected to form the structural lipid bilayer in the same way as phospholipids.

---

# 428. Question 11–20 — aqueous environment outcome

Triacylglycerols aggregate into:

```text
fat/oil droplets
```

with hydrophobic molecules clustered away from water.

---

# 429. Lipid entity schema

```yaml
membrane_lipid:
  id:
  class:
    - phospholipid
    - sterol
    - glycolipid
  species:
  head_group:
  tail_count:
  tail_lengths_carbon:
  double_bond_count:
  leaflet:
    - cytosolic
    - noncytosolic
  lateral_position:
  orientation:
  rotation_state:
  flexion_state:
  flip_state:
  provenance:
```

---

# 430. Bilayer schema

```yaml
lipid_bilayer:
  membrane_id:
  thickness_nm:
  cytosolic_leaflet:
  noncytosolic_leaflet:
  hydrophobic_core:
  curvature:
  continuity:
  closed_surface:
  local_fluidity:
  cholesterol_fraction:
  permeability_state:
  topology:
```

---

# 431. Membrane topology schema

```yaml
membrane_topology:
  cytosolic_face:
  noncytosolic_face:
  enclosed_lumen:
  connected_compartment:
  extracellular_equivalence:
  budding_history:
  fusion_history:
  orientation_preserved:
```

---

# 432. Lipid-motion schema

```yaml
lipid_motion:
  lipid_id:
  lateral_diffusion:
  rotation:
  tail_flexion:
  spontaneous_flip_flop:
  scramblase_mediated_transfer:
  flippase_mediated_transfer:
  biological_time:
```

---

# 433. Fluidity schema

```yaml
membrane_fluidity:
  temperature:
  tail_length_distribution:
  saturation_distribution:
  cholesterol_fraction:
  viscosity_proxy:
  diffusion_coefficients:
  provenance:
```

---

# 434. ER membrane-assembly schema

```yaml
ER_membrane_assembly:
  free_fatty_acids:
  synthesis_enzymes:
  insertion_leaflet: cytosolic
  newly_synthesized_phospholipids:
  scramblase:
  leaflet_redistribution:
  membrane_growth:
```

---

# 435. Golgi asymmetry schema

```yaml
Golgi_lipid_asymmetry:
  incoming_ER_membrane:
  flippases:
  ATP_consumption:
  PS_to_cytosolic:
  PE_to_cytosolic:
  PC_noncytosolic_enrichment:
  sphingomyelin_noncytosolic_enrichment:
  glycolipid_glycosylation:
```

---

# 436. Membrane-protein schema

```yaml
membrane_protein:
  id:
  association_mode:
    - transmembrane
    - monolayer_associated
    - lipid_linked
    - protein_attached
  classification:
    - integral
    - peripheral
  orientation:
  cytosolic_domains:
  noncytosolic_domains:
  transmembrane_segments:
  lateral_mobility:
  tether_state:
  membrane_domain:
  function:
```

---

# 437. Transmembrane-segment schema

```yaml
transmembrane_segment:
  protein_id:
  segment_type:
    - alpha_helix
    - beta_barrel
  residue_start:
  residue_end:
  length_residues:
  lipid_facing_residues:
  pore_facing_residues:
  hydrophobicity:
  orientation:
```

---

# 438. Detergent-solubilization schema

```yaml
membrane_solubilization:
  membrane:
  detergent:
  ionic_or_nonionic:
  mild_or_strong:
  bilayer_disrupted:
  protein_detergent_complexes:
  lipid_detergent_micelles:
  protein_native_state_preserved:
```

---

# 439. Cortex schema

```yaml
cell_cortex:
  cell_type:
  actin:
  myosin:
  spectrin:
  attachment_proteins:
  membrane_anchors:
  mechanical_support:
  diffusion_constraints:
```

---

# 440. Membrane-domain schema

```yaml
membrane_domain:
  membrane_id:
  region:
  boundary_type:
    - tight_junction
    - cytoskeletal_corral
    - extracellular_tether
    - cell_cell_tether
  resident_proteins:
  resident_lipids:
  allowed_diffusion:
  excluded_components:
```

---

# 441. Glycocalyx schema

```yaml
glycocalyx:
  glycoproteins:
  proteoglycans:
  glycolipids:
  oligosaccharides:
  polysaccharides:
  hydration:
  mechanical_protection:
  recognition_roles:
  adhesion_roles:
```

---

# 442. FRAP experiment schema

```yaml
FRAP_experiment:
  membrane:
  fluorescent_target:
  label_method:
  bleach_region_um2:
  laser_pulse:
  pre_bleach_intensity:
  post_bleach_intensity:
  recovery_curve:
  inferred_diffusion_coefficient:
  immobile_fraction:
  caveats:
```

---

# 443. Single-particle-tracking schema

```yaml
SPT_experiment:
  target_protein:
  gold_nanoparticle_label:
  trajectory:
  time_resolution:
  diffusion_mode:
    - free
    - confined
    - tethered
    - switching
  inferred_constraints:
```

---

# 444. Reconstitution schema

```yaml
membrane_reconstitution:
  native_membrane:
  mild_detergent:
  solubilized_proteins:
  purified_target_protein:
  added_phospholipids:
  detergent_removed:
  artificial_bilayer:
  recovered_function:
  diffusion_behavior:
```

---

# 445. WorldState versus ViewState — membrane clipping

Viewer clipping through a membrane:

```text
does NOT mean
membrane rupture
```

This remains a critical project rule from Phase 0.

---

# 446. WorldState membrane rupture

A true biological tear should involve:

- discontinuity
- exposed hydrophobic edge
- rapid lipid rearrangement
- resealing or vesiculation

---

# 447. Membrane thickness versus display thickness

Real membrane:

```text
~5 nm
```

Display thickness may need exaggeration at cell scale.

### `PROJECT_CONSTRAINT`

Always preserve:

```text
real_thickness
display_thickness
scale_exaggeration
```

separately.

---

# 448. Lipid head and tail render scale

At whole-cell scale, individual lipids should not be displayed as giant repeated icons.

Use semantic level-of-detail.

---

# 449. Suggested membrane representation tiers

```text
Tier 0:
unresolved boundary surface

Tier 1:
bilayer thickness visible

Tier 2:
leaflet-level lipid density

Tier 3:
individual lipid representations

Tier 4:
chemical-group representation

Tier 5:
atomic representation
```

### `PROJECT_CONSTRAINT`

---

# 450. Leaflet identity must survive LOD changes

A phosphatidylserine molecule remains the same biological lipid entity whether displayed as:

- density
- coarse bead
- chemical structure
- atomistic model

---

# 451. Membrane surface is not perfectly smooth

### `SOURCE_DERIVED`

Molecular motion, proteins, carbohydrates, and the cell cortex make a real membrane structurally heterogeneous.

Avoid flawless CGI soap-bubble surfaces at molecular zoom.

---

# 452. Membrane bending must preserve bilayer topology

When curved:

```text
outer leaflet
and
inner leaflet
```

remain continuous molecular sheets.

---

# 453. Bilayer curvature changes leaflet geometry

A curved membrane changes area relationships between the two leaflets.

### `PROJECT_CONSTRAINT`

Do not simply bend a single infinitely thin plane and call it a bilayer at molecular scale.

---

# 454. Protein orientation is persistent identity

A receptor's extracellular domain cannot spontaneously rotate through the membrane without a biological mechanism.

---

# 455. Lipids are mobile but not freely interchangeable across leaflets

Fluidity is predominantly:

```text
lateral
```

not free 3D diffusion through the membrane.

---

# 456. Glycocalyx belongs only on noncytosolic surface

At plasma membrane:

```text
outside
```

At secretory organelle lumen:

```text
lumen-facing
```

---

# 457. Glycocalyx should not coat cytosolic face

### Hard rendering rule

Do not draw carbohydrate trees on both sides of the plasma membrane.

---

# 458. Membrane carbohydrates are diverse, not uniform sugar brushes

Different glycoproteins and glycolipids carry different branched structures.

---

# 459. Protein crowding matters

Native membranes are crowded molecular environments.

Protein diffusion should not resemble isolated particles on an empty bilayer.

---

# 460. Native membrane motion is heterogeneous

Some proteins:

- move rapidly
- move slowly
- are confined
- are nearly immobile
- switch states

---

# 461. Lipid and protein diffusion are not identical

Individual diffusion constants depend on:

- molecule
- local composition
- tethers
- temperature
- membrane domain

---

# 462. Membrane asymmetry is compatible with fluidity

This is one of the chapter's most important conceptual constraints.

---

# 463. Membrane assembly is directional

New eukaryotic phospholipids are synthesized on the cytosolic face of ER before redistribution.

---

# 464. Membrane traffic preserves sidedness

Golgi lumen does not become cytosol during vesicle transport.

---

# 465. Extracellular surface is topologically equivalent to secretory lumen

### `SOURCE_DERIVED`

This follows from preserved orientation through budding/fusion.

This topology is foundational for later protein-trafficking chapters.

---

# 466. Scramblase and flippase must be distinct agent types

```text
scramblase:
random redistribution

flippase:
selective ATP-driven transfer
```

---

# 467. Cholesterol is not a phospholipid

It is a sterol with very different structure.

---

# 468. Glycolipids are not glycoproteins

```text
glycolipid:
sugar attached to lipid

glycoprotein:
sugar attached to protein
```

---

# 469. Proteoglycan is not ordinary glycoprotein

Proteoglycans contain long polysaccharide chains rather than only short oligosaccharides.

---

# 470. Cell wall and cell cortex are distinct

```text
cell wall:
external rigid/fibrous support

cell cortex:
intracellular protein mesh
under plasma membrane
```

---

# 471. Membrane domain and organelle are distinct

A membrane domain is a specialized region of one continuous membrane, not necessarily a separate membrane-enclosed compartment.

---

# 472. Tight junction is not membrane fusion

It is a specialized cell-cell contact that restricts diffusion and seals adjacent cells.

---

# 473. Detergent micelle is not a membrane vesicle

Micelle:

```text
small detergent aggregate
typically one hydrophobic interior
```

Bilayer vesicle:

```text
closed double-leaflet shell
with aqueous lumen
```

---

# 474. Liposome is not a living organelle

It is a synthetic/self-assembled lipid vesicle used as a membrane model.

---

# 475. FRAP bleach is not protein destruction

Only fluorescence is irreversibly destroyed in the illuminated region.

---

# 476. SPT gold particle is experimental label

The gold nanoparticle is not a native component of the membrane protein.

---

# 477. Antibody labels can perturb mobility

### `PROJECT_CONSTRAINT`

Any visualization of FRAP/SPT should mark labels as experimental additions, not native structures.

---

# 478. Figure-image rendering must distinguish source schematic from physical reality

Many textbook figures enlarge:

- membrane thickness
- lipid head size
- protein spacing
- carbohydrate chains

for comprehension.

---

# 479. Membrane visual style

Target:

```text
structural-biology realism
+
molecular crowding
+
subtle physical motion
+
accurate leaflet topology
```

Avoid:

```text
neon bilayer beads
perfect hexagonal lipid lattices
static repeating phospholipid icons
```

---

# 480. Chapter 11 core causal model

```text
AMPHIPATHIC LIPIDS
+
WATER
→ spontaneous bilayer formation

BILAYER
→ closed self-sealing compartment

LATERAL DIFFUSION
→ 2D fluidity

TAIL LENGTH
+
UNSATURATION
+
CHOLESTEROL
→ tune fluidity/permeability

ER SYNTHESIS
+
SCRAMBLASE
→ new bilayer growth

GOLGI FLIPPASES
→ leaflet asymmetry

VESICLE TRAFFIC
→ orientation preserved

MEMBRANE PROTEINS
→ transport / signaling / adhesion / catalysis

HYDROPHOBIC SEGMENTS
→ transmembrane anchoring

CORTEX / ECM / JUNCTIONS
→ mechanical support + diffusion restriction

GLYCANS
→ protection + lubrication + recognition
```

---

# 481. Source quantitative register

| Quantity | Chapter 11 value/context | Status |
|---|---:|---|
| membrane thickness | ~5 nm | source |
| membrane thickness atom analogy | ~50 atoms | source model |
| RBC lipid monolayer area | ~2× original cell area | source historical inference |
| phospholipid tail length | 14–24 carbons | source |
| common tail lengths | 18 or 20 carbons | source |
| spontaneous flip-flop | <1/month/lipid | verify |
| lateral lipid travel, main text | ~2 µm in ~1 s | verify |
| lateral lipid travel, Q11–12 | ~2 µm in ~0.2 s | source question |
| lipid rotation | up to ~500 rev/s | verify |
| minimum vesicle diameter | ~25 nm | verify |
| liposome diameter | ~25 nm–1 µm | source |
| animal plasma-membrane cholesterol | ~20% of membrane lipid by weight | verify |
| protein fraction of membrane mass | ~50% | verify |
| broad lipid molecules : protein molecules | ~50:1 | source |
| transmembrane α helix | ~20 aa | source |
| E. coli porin β barrel | 16 strands | source |
| porin oligomer | trimer / 3 channels | source |
| Triton repeat region | 9–10 repeats | source |
| bacteriorhodopsin length | ~250 aa | source |
| bacteriorhodopsin TM helices | 7 | source |
| spectrin dimer length | ~100 nm | source |
| protein mixing after cell fusion | ~30–40 min | verify |
| fusion incubation | 37°C | source figure |
| cell-surface oligosaccharides | usually <15 sugar units | source |
| FRAP bleach patch | ~1 µm² | source |
| Q11–15 calculated lipid:protein ratio | ~96:1 | derived |

---

# 482. Quantitative verification queue

Before using Chapter 11 values as runtime constants, externally verify:

## Bilayer geometry

- membrane thickness by membrane type
- area per lipid
- leaflet thickness
- lipid packing densities
- curvature limits

## Lipid dynamics

- lipid diffusion coefficients
- rotation rates
- spontaneous flip-flop rates
- scramblase kinetics
- flippase kinetics

## Composition

- lipid fractions by cell type/organelle
- cholesterol fractions
- phosphatidylserine distributions
- sphingomyelin distributions
- phosphatidylinositol abundance

## Protein mobility

- diffusion coefficients by protein class
- cortical confinement scales
- membrane-domain lifetimes
- FRAP recovery parameters

## Glycocalyx

- thickness
- glycan densities
- cell-type-specific composition

---

# 483. Source-era caution register

Do not silently universalize:

```text
50% protein mass
50 lipids per protein
20% cholesterol by weight
<1 flip/month
500 rotations/s
2 µm diffusion in 1 s
2 µm diffusion in 0.2 s
olive-oil viscosity analogy
```

These are source-scale teaching values, not universal constants for every membrane.

---

# 484. Do-not-overinterpret register

Do not infer:

```text
membrane = rigid wall
FALSE

membrane = infinitely thin surface
FALSE

membrane = static shell
FALSE

all bacteria have exactly one membrane
FALSE

all membranes have identical composition
FALSE

all lipids are phospholipids
FALSE

cholesterol is a phospholipid
FALSE

glycolipid sugars face cytosol
FALSE

lipids diffuse freely between leaflets
FALSE

membrane fluidity means lipids leave the bilayer
FALSE

every membrane protein diffuses freely
FALSE

all transmembrane proteins are α-helical
FALSE

all α-helical membrane proteins are single-pass
FALSE

all membrane proteins are transmembrane
FALSE

peripheral proteins require detergent for extraction
FALSE

porins are α-helical channels
FALSE

detergents always preserve protein structure
FALSE

SDS is a mild nonionic detergent
FALSE

Triton X-100 is a strong ionic denaturant
FALSE

cell cortex = cell wall
FALSE

RBC membrane shape comes from lipid bilayer alone
FALSE

tight junction = membrane fusion
FALSE

glycocalyx exists on cytosolic membrane face
FALSE

FRAP fluorescence recovery means bleached molecules became fluorescent again
FALSE

FRAP measures one protein at a time
FALSE

SPT gold particle is native biology
FALSE

Golgi lumen = cytosol
FALSE

vesicle budding flips leaflet orientation
FALSE

camera clipping = membrane rupture
FALSE
```

---

# 485. Cross-chapter dependencies

## Chapter 2

Provides:

- hydrophobic effect
- hydrogen bonding
- electrostatics
- van der Waals interactions
- lipid chemistry

## Chapter 3

Provides:

- free energy
- ATP hydrolysis
- transport energetics

## Chapter 4

Provides:

- α helices
- β sheets
- protein structure
- hydrophobic folding
- antibodies
- x-ray crystallography
- cryo-EM

## Chapter 5

Provides:

- organelle geometry
- nucleus
- chromosome context

## Chapter 10

Provides:

- fluorescent proteins
- antibody labeling
- experimental readout logic

## Chapter 12

Will refine:

- channels
- transporters
- pumps
- ion gradients
- membrane potential

## Chapter 14

Will refine:

- proton gradients
- ATP synthesis

## Chapter 15

Will refine:

- membrane insertion
- ER/Golgi trafficking
- vesicle budding
- vesicle fusion
- glycosylation topology

## Chapter 16

Will refine:

- receptors
- phosphatidylinositol signaling
- signaling enzymes

## Chapter 17

Will refine:

- actin cortex
- myosin
- cell shape
- motility

## Chapter 20

Will refine:

- cell junctions
- extracellular matrix
- integrins
- epithelial organization
```

---

# 486. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 11: “Membrane Structure.”**

Printed pages:

```text
381–404
```

PDF pages reviewed:

```text
416–439
```

Major sections:

```text
THE LIPID BILAYER

MEMBRANE PROTEINS
```

Supporting material reviewed:

```text
Figures 11–1 through 11–37

Table 11–1:
Some Examples of Plasma Membrane Proteins and Their Functions

How We Know:
Measuring Membrane Flow

Why Trust Science?

Essential Concepts

Questions 11–1 through 11–20
```

The file interface returned the complete chapter text and figure captions but not rendered page images during this pass.

No question answer requiring unrecoverable figure geometry was fabricated.

---

# 487. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- plasma-membrane role
- ~5-nm source thickness
- selective-barrier logic
- internal membranes
- lipid bilayer definition
- 1925 RBC lipid-area experiment
- phospholipid architecture
- phosphatidylcholine
- phosphatidylserine
- cholesterol
- galactocerebroside
- amphipathic definition
- hydrophilic/hydrophobic behavior
- acetone example
- 2-methylpropane example
- water-cage model
- triacylglycerol
- hydrophobic aggregation
- bilayer self-assembly
- self-sealing
- free-edge principle
- closed-compartment topology
- two-dimensional fluidity
- lateral diffusion
- rotation
- tail flexion
- flip-flop
- <1/month source statement
- ~2 µm / 1 s source statement
- 500 rev/s source statement
- flexibility
- 25-nm minimum vesicle statement
- liposome 25 nm–1 µm range
- tail-length 14–24 carbons
- 18/20-carbon common lengths
- saturated/unsaturated distinction
- temperature adaptation
- hydrogenation/margarine analogy
- cholesterol ~20%-by-weight source statement
- cholesterol stiffening/permeability effects
- ER lipid synthesis on cytosolic side
- scramblase
- Golgi flippase
- ATP-driven selective transfer
- PS/PE cytosolic enrichment
- PC/sphingomyelin noncytosolic enrichment
- phosphatidylinositol cytosolic localization
- glycolipid noncytosolic restriction
- cholesterol approximate symmetry
- membrane orientation conservation
- Golgi-lumen→vesicle-lumen→extracellular topology
- membrane-protein functional classes
- Table 11–1 examples
- ~50% protein mass source value
- ~50 lipid molecules/protein source value
- four membrane-protein association modes
- integral versus peripheral
- transmembrane orientation
- ~20-aa α-helix span
- multipass pores
- amphipathic helices
- β barrels
- 16-strand E. coli porin
- porin trimer
- detergent definition
- micelles
- SDS
- Triton X-100
- detergent solubilization
- x-ray/cryo-EM source framing
- bacteriorhodopsin
- retinal
- seven helices
- ~250-aa source length
- H+ pumping
- proton gradient
- cell wall/cell cortex distinction
- RBC biconcave shape
- spectrin
- ~100-nm spectrin length
- actin
- cortex attachment proteins
- abnormal-spectrin anemia phenotype
- membrane lateral protein diffusion
- mouse-human fusion experiment
- ~30–40 min mixing
- membrane-domain restrictions
- tight junction
- epithelial apical/basal segregation
- glycocalyx
- glycoprotein/proteoglycan/glycolipid distinction
- <15-sugar oligosaccharide source statement
- lectins
- neutrophil recognition
- FRAP
- ~1 µm² bleach region
- olive-oil analogy
- SPT
- gold-nanoparticle labeling
- artificial-bilayer reconstitution
- Why Trust Science historical models
- all 20 question-derived analyses
- all schemas
- topology rules
- all quantitative-register entries
- all `DO_NOT_INFER` rules
- source trace

---

# END OF CHAPTER 11 CANON

Recommended repository destination:

```text
science/chapters/11_membrane_structure.md
```

Recommended commit message:

```text
science: add Chapter 11 membrane structure canon
```

Do not begin Chapter 12 merely because this file exists.

Chapter 12 will build directly on this physical membrane model and add the mechanisms that move ions and small molecules across it: passive permeability, channels, transporters, pumps, electrochemical gradients, membrane potential, osmotic balance, action potentials, and ion-channel gating.
