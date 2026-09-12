---
title: "The Seamless Cell — Science Canon — Chapter 12"
subtitle: "Transport Across Cell Membranes"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 12, printed pages 405–444 (PDF approximately pages 440–479)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 12 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 12 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapter 11 established the membrane as:

```text
a ~5-nm-thick
asymmetric
self-sealing
two-dimensional molecular fluid
```

Chapter 12 now turns that membrane into an active traffic-control and electrical system:

```text
lipid bilayer
+
transport proteins
+
ion gradients
+
membrane potential
→ selective transport
→ osmotic control
→ electrical signaling
→ neuronal communication
```

The central project principle is:

> **A membrane does not merely separate two spaces. It stores chemical and electrical potential energy by maintaining unequal solute concentrations, selectively opens or closes molecular pathways, couples downhill and uphill movements, and converts molecular-scale ion flux into cell-scale physiology and information.**

A second project principle is:

> **Concentration gradient, electrical gradient, electrochemical gradient, permeability, and flux are distinct quantities. They must never be collapsed into one visual concept.**

This chapter must eventually govern how The Seamless Cell represents:

- simple diffusion
- facilitated transport
- lipid-bilayer permeability
- transporters
- channels
- ion channels
- selectivity
- transport rates
- intracellular and extracellular ion concentrations
- membrane potential
- resting membrane potential
- passive transport
- active transport
- pumps
- electrochemical gradients
- osmosis
- osmolarity
- aquaporins
- contractile vacuoles
- turgor pressure
- passive glucose transporters
- alternating-access transport
- uniports
- symports
- antiports
- ATP-driven pumps
- gradient-driven pumps
- light-driven pumps
- Na+/K+ ATPase
- Ca2+ ATPases
- H+ pumps
- glucose–Na+ symport
- Na+–H+ antiport
- H+-driven uptake
- organelle acidification
- K+ leak channels
- ion-channel selectivity filters
- hydrated and dehydrated ions
- channel gating
- mechanically gated channels
- ligand-gated channels
- voltage-gated channels
- Piezo channels
- auditory hair-cell mechanotransduction
- Venus-flytrap and Mimosa electrical responses
- Nernst equilibrium potential
- patch-clamp recording
- stochastic ion-channel opening
- action potentials
- voltage-gated Na+ channels
- voltage-gated K+ channels
- channel inactivation
- refractory period
- axonal propagation
- squid giant axon experiments
- synaptic transmission
- synaptic cleft
- voltage-gated Ca2+ channels
- synaptic vesicles
- neurotransmitter release
- transmitter-gated ion channels
- acetylcholine receptors
- excitatory signaling
- inhibitory signaling
- GABA and glycine receptors
- neurotransmitter reuptake
- receptor-targeting drugs as source examples
- neural integration
- channelrhodopsin
- optogenetics

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 12.

## `SOURCE_SCALE`

A numerical value, concentration, voltage, rate, distance, time, copy number, or molecular scale explicitly given by Chapter 12.

## `SOURCE_MODEL`

A structural, mechanistic, or experimental model presented by the source.

## `SOURCE_DERIVED`

A calculation or direct inference using only source-supported facts plus ordinary arithmetic/physics.

## `SOURCE_TERMINOLOGY`

Terminology used by Chapter 12 and preserved here.

## `SOURCE_ERA_STATEMENT`

A source statement whose exact numerical value, medical framing, clinical relevance, or historical interpretation may need current verification before being used outside this canon.

## `SOURCE_HYPOTHESIS`

A source interpretation presented as uncertain.

## `PROJECT_CONSTRAINT`

A rule for The Seamless Cell's simulation, representation, architecture, or pedagogy.

## `VERIFY_QUANT`

A source-supplied number retained for provenance but not yet promoted to a precise runtime constant.

## `LATER_CHAPTER_REFINEMENT`

A mechanism introduced here whose deeper treatment belongs to later chapters.

## `DO_NOT_INFER`

A hard guardrail against silently extending a schematic, analogy, or textbook simplification into a universal biological statement.

---

# 1. Chapter structure

Chapter 12 has four major sections:

```text
1. PRINCIPLES OF TRANSMEMBRANE TRANSPORT

2. TRANSPORTERS AND THEIR FUNCTIONS

3. ION CHANNELS AND THE MEMBRANE POTENTIAL

4. ION CHANNELS AND NERVE CELL SIGNALING
```

Major subsection flow:

```text
PRINCIPLES OF TRANSMEMBRANE TRANSPORT

- Lipid Bilayers Are Impermeable to Ions and Most Uncharged Polar Molecules
- Membrane Transport Proteins Facilitate the Movement of Select Substances Across Cell Membranes
- The Ion Concentrations Inside a Cell Are Very Different from Those Outside
- Differences in the Concentration of Inorganic Ions Across a Cell Membrane Create a Membrane Potential
- Solutes Cross Membranes by Either Passive or Active Transport
- Both the Concentration Gradient and Membrane Potential Influence the Passive Transport of Charged Solutes
- Water Moves Across Cell Membranes Down Its Concentration Gradient—a Process Called Osmosis

TRANSPORTERS AND THEIR FUNCTIONS

- Passive Transporters Move a Solute Along Its Electrochemical Gradient
- Pumps Actively Transport a Solute Against Its Electrochemical Gradient
- The Na+ Pump in Animal Cells Uses Energy Supplied by ATP to Expel Na+ and Bring in K+
- The Na+ Pump Generates a Steep Concentration Gradient of Na+ Across the Plasma Membrane
- Ca2+ Pumps Keep the Cytosolic Ca2+ Concentration Low
- Gradient-driven Pumps Exploit Solute Gradients to Mediate Active Transport
- The Electrochemical Na+ Gradient Drives the Transport of Glucose Across the Plasma Membrane of Animal Cells
- Electrochemical H+ Gradients Drive the Transport of Solutes in Plants, Fungi, and Bacteria

ION CHANNELS AND THE MEMBRANE POTENTIAL

- Ion Channels Are Ion-selective and Gated
- Membrane Potential Is Governed by the Permeability of a Membrane to Specific Ions
- Ion Channels Randomly Snap Between Open and Closed States
- Different Types of Stimuli Influence the Opening and Closing of Ion Channels
- Voltage-gated Ion Channels Respond to the Membrane Potential

ION CHANNELS AND NERVE CELL SIGNALING

- Action Potentials Allow Rapid Long-Distance Communication Along Axons
- Action Potentials Are Mediated by Voltage-gated Cation Channels
- Voltage-gated Ca2+ Channels in Nerve Terminals Convert an Electrical Signal into a Chemical Signal
- Transmitter-gated Ion Channels in the Postsynaptic Membrane Convert the Chemical Signal Back into an Electrical Signal
- Neurotransmitters Can Be Excitatory or Inhibitory
- Most Psychoactive Drugs Alter the Activity of Neurotransmitter Receptors
- The Complexity of Synaptic Signaling Enables Us to Think, Act, Learn, and Remember
- Light-gated Ion Channels Can Be Used to Transiently Activate or Inactivate Neurons in Living Animals
```

Supporting material:

```text
Figures 12–1 through 12–46

Table 12–1:
A Comparison of Ion Concentrations Inside and Outside a Typical Mammalian Cell

Table 12–2:
Some Examples of Transmembrane Pumps

Table 12–3:
Some Examples of Ion Channels

How We Know:
Squid Reveal Secrets of Membrane Excitability

Essential Concepts

Questions 12–1 through 12–22
```

---

# 2. Cells must exchange matter with their environment

Cells import:

- sugars
- amino acids
- other nutrients

and export:

- metabolic waste products

---

# 3. Cells regulate inorganic-ion concentrations

The cytosol and membrane-enclosed organelles maintain controlled concentrations of inorganic ions rather than simply matching their surroundings.

---

# 4. Some small gases cross directly

The source uses:

```text
O2
CO2
```

as molecules that can diffuse directly through the lipid bilayer.

---

# 5. Most biologically important solutes cannot cross freely

The majority of:

- ions
- sugars
- amino acids
- nucleotides
- many metabolites

require membrane transport proteins.

---

# 6. Membrane transport protein

```text
membrane transport protein
=
transmembrane protein that provides
a selective hydrophilic pathway
for a solute across a membrane
```

---

# 7. Macromolecule transport is not Chapter 12 transport

Large proteins and other macromolecules can cross membranes, but their machinery is deferred to Chapter 15.

### `DO_NOT_INFER`

Do not apply Chapter 12 transporter/channel logic to all protein translocation.

---

# 8. Two main classes of small-solute transport proteins

```text
transporters
channels
```

---

# 9. Transporter basic mechanism

A transporter moves solute by undergoing conformational changes.

---

# 10. Channel basic mechanism

A channel forms a hydrophilic pore through which a permitted solute diffuses.

---

# 11. Most channels discussed are ion channels

The chapter focuses on channels selective for inorganic ions.

---

# 12. Ion movement can create voltage

Moving charged ions unequally across a membrane changes electrical potential across that membrane.

---

# 13. Facilitated transport

```text
facilitated transport
=
movement across a membrane accelerated
by a membrane transport protein
```

---

# 14. Bilayer permeability depends on chemistry and size

General source rule:

```text
smaller
+
more hydrophobic/nonpolar
→ faster simple diffusion
```

---

# 15. Small nonpolar molecules cross rapidly

Examples:

```text
O2
CO2
N2
steroid hormones
```

---

# 16. O2 molecular mass

**Status: `SOURCE_SCALE`**

```text
32 Da
```

---

# 17. CO2 molecular mass

**Status: `SOURCE_SCALE`**

```text
44 Da
```

---

# 18. Small uncharged polar molecules cross more slowly

Examples:

- water
- ethanol

---

# 19. Water molecular mass

**Status: `SOURCE_SCALE`**

```text
18 Da
```

---

# 20. Ethanol molecular mass

**Status: `SOURCE_SCALE`**

```text
46 Da
```

---

# 21. Glycerol crosses less rapidly

**Status: `SOURCE_SCALE`**

Glycerol mass:

```text
92 Da
```

---

# 22. Larger uncharged polar molecules cross poorly

Example:

```text
glucose
```

---

# 23. Glucose molecular mass

**Status: `SOURCE_SCALE`**

```text
180 Da
```

---

# 24. Charged substances cross protein-free bilayers extremely poorly

This includes:

```text
H+
Na+
K+
Ca2+
Cl-
Mg2+
HCO3-
```

---

# 25. Ion size alone does not rescue permeability

Even tiny ions remain strongly excluded because charge is unfavorable in the hydrocarbon interior.

---

# 26. Hydration contributes to ion exclusion

Charged solutes interact strongly with surrounding water.

Entering the hydrophobic bilayer would require losing these favorable interactions.

---

# 27. Water versus ion permeability source comparison

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source states a protein-free bilayer is approximately:

```text
10^9 times
```

more permeable to water than to small ions such as Na+ or K+.

---

# 28. Permeability is not identical to biological flux

### `PROJECT_CONSTRAINT`

Flux depends on at least:

- permeability
- available pathway
- concentration gradient
- electrical gradient for charged solutes

Do not represent a single permeability value as the complete transport behavior.

---

# 29. Transport proteins are selective

Each membrane has many transport proteins, each usually permitting only selected solutes.

---

# 30. Na+ and K+ selectivity can differ

A protein may pass:

```text
Na+
but not K+
```

or vice versa.

---

# 31. Transport proteins are multipass transmembrane proteins in the chapter

The chapter states all studied transport proteins discussed traverse the membrane multiple times.

### `SOURCE_ERA_STATEMENT`

Retain as source wording; do not silently universalize beyond source scope.

---

# 32. Multipass segments form hydrophilic pathways

Clustered transmembrane segments create protein-lined routes through the hydrophobic bilayer.

---

# 33. Channel selectivity principle

Channels discriminate mainly by:

- ion/molecule size
- electrical charge

---

# 34. Transporter selectivity principle

Transporters possess specific solute-binding sites.

---

# 35. Transporter analogy to enzyme

A transporter binds a selected solute much as an enzyme binds a selected substrate.

---

# 36. Channel versus transporter speed

Channels transfer solutes far faster because they do not require a full conformational cycle for every individual ion.

---

# 37. Membrane identity is partly transport-protein identity

Different organelles/cells maintain different internal environments because their membranes express distinct sets of channels and transporters.

---

# 38. Key cellular ions

The chapter emphasizes:

```text
Na+
K+
Ca2+
Cl-
H+
```

---

# 39. Ion gradients participate in ATP generation

### `LATER_CHAPTER_REFINEMENT`

Detailed bioenergetics belongs to Chapter 14.

---

# 40. Ion gradients participate in electrical signaling

The chapter later develops neuronal electrical signaling.

---

# 41. Mammalian extracellular cation hierarchy

The source identifies:

```text
Na+
```

as the most abundant extracellular cation.

---

# 42. Mammalian intracellular cation hierarchy

The source identifies:

```text
K+
```

as the most abundant intracellular cation.

---

# 43. Bulk electroneutrality

The total positive and negative charge in bulk cytosol is approximately balanced.

The same is true of extracellular fluid.

---

# 44. Extracellular Na+ charge balance

High extracellular Na+ is balanced mainly by:

```text
Cl-
```

---

# 45. Intracellular K+ charge balance

High intracellular K+ is balanced by many anions including:

- proteins
- nucleic acids
- phosphate-containing metabolites
- other inorganic/organic anions

---

# 46. Table 12–1 — Na+

**Status: `SOURCE_SCALE`**

```text
intracellular:
5–15 mM

extracellular:
145 mM
```

---

# 47. Table 12–1 — K+

**Status: `SOURCE_SCALE`**

```text
intracellular:
140 mM

extracellular:
5 mM
```

---

# 48. Table 12–1 — free Mg2+

**Status: `SOURCE_SCALE`**

```text
intracellular free Mg2+:
0.5 mM

extracellular:
1–2 mM
```

---

# 49. Total cellular Mg2+

**Status: `SOURCE_SCALE`**

The source notes total Mg2+ is roughly:

```text
20 mM
```

because most is bound.

---

# 50. Table 12–1 — free Ca2+

**Status: `SOURCE_SCALE`**

```text
intracellular free Ca2+:
10^-4 mM

extracellular:
1–2 mM
```

---

# 51. Total cellular Ca2+

**Status: `SOURCE_SCALE`**

The source states total Ca2+ is roughly:

```text
1–2 mM
```

because much is bound or sequestered in organelles.

---

# 52. Table 12–1 — H+

**Status: `SOURCE_SCALE`**

```text
intracellular:
7 × 10^-5 mM
= 10^-7.2 M
≈ pH 7.2

extracellular:
4 × 10^-5 mM
= 10^-7.4 M
≈ pH 7.4
```

---

# 53. Table 12–1 — Cl-

**Status: `SOURCE_SCALE`**

```text
intracellular:
5–15 mM

extracellular:
110 mM
```

---

# 54. Membrane potential

```text
membrane potential
=
voltage difference across a membrane
caused by a very small separation of charge
near the two membrane surfaces
```

---

# 55. Membrane potential does not require bulk charge imbalance

The bulk solutions remain nearly electrically neutral.

Only a tiny fraction of ions near the membrane needs to redistribute.

---

# 56. Resting membrane potential

```text
resting membrane potential
=
steady voltage across the plasma membrane
of an unstimulated cell
```

---

# 57. Resting animal-cell voltage range

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source gives approximately:

```text
-20 to -200 mV
```

depending on cell type and organism.

---

# 58. Negative sign meaning

```text
negative membrane potential
=
cell interior electrically negative
relative to exterior
```

---

# 59. Passive transport

```text
passive transport
=
net movement down a concentration
or electrochemical gradient
without direct energy expenditure by the transport protein
```

---

# 60. Passive transport is bidirectional microscopically

Solute can cross both ways.

Net movement results from unequal probabilities/amounts in the two directions.

---

# 61. Passive equilibrium

Net flux declines to zero when the relevant driving force is balanced.

---

# 62. Active transport

```text
active transport
=
movement against a concentration
or electrochemical gradient
using an energy input
```

---

# 63. Pump

```text
pump
=
transporter capable of active transport
```

---

# 64. Channels do not actively pump solutes uphill

Channels only provide passive pathways.

---

# 65. ATP is one possible pump energy source

Other sources include:

- downhill solute gradients
- light

---

# 66. Uncharged-solute passive transport

For an uncharged solute:

```text
direction
determined by concentration gradient
```

---

# 67. Charged-solute passive transport

For a charged solute:

```text
direction
determined by electrochemical gradient
```

---

# 68. Electrochemical gradient

```text
electrochemical gradient
=
combined effect of
concentration gradient
+
membrane electrical potential
on a charged solute
```

---

# 69. Cytosolic negativity attracts cations

A negative interior tends to drive positively charged solutes inward.

---

# 70. Cytosolic negativity repels anions

A negative interior tends to oppose inward movement of negative ions and can favor outward movement.

---

# 71. Na+ gradient components reinforce one another in a resting animal cell

Na+ is:

- more concentrated outside
- positively charged
- attracted to the negative interior

Therefore both components favor inward Na+ movement.

---

# 72. Na+ electrochemical gradient is steep

Opening a Na+-permeable pathway generally produces strong Na+ influx under resting conditions.

---

# 73. K+ gradient components oppose one another

K+ is:

- more concentrated inside
- positively charged
- attracted inward by negative membrane potential

Therefore:

```text
concentration force:
outward

electrical force:
inward
```

---

# 74. Resting K+ electrochemical driving force can be small

When these two effects nearly balance, opening K+ channels produces relatively little net K+ movement.

---

# 75. Water constitutes most cell mass

**Status: `SOURCE_SCALE`**

The chapter says cells are generally about:

```text
70% water by weight
```

---

# 76. Water crosses directly through lipid bilayer

Because water is small and uncharged, it can diffuse through the membrane, though not extremely rapidly.

---

# 77. Aquaporin

```text
aquaporin
=
selective water channel
```

---

# 78. Aquaporins accelerate water transport

They are especially important in cells moving large volumes of water.

---

# 79. Source aquaporin examples

The source highlights:

- kidney cells
- secretory-gland cells

---

# 80. Aquaporin tetramer

Figure 12–6 depicts the active assembly as:

```text
4 aquaporin subunits
```

---

# 81. Each aquaporin monomer contains its own pore

The figure shows four parallel water columns through a tetramer.

---

# 82. Aquaporin pore geometry

The source describes an:

```text
hourglass-like channel
```

---

# 83. Aquaporin water movement

Water molecules pass:

```text
single file
```

through the narrow region of each pore.

---

# 84. Hydrophilic pore residues transiently hydrogen-bond to water

This supports movement through the channel without exposing water to the bilayer's hydrocarbon interior.

---

# 85. Aquaporin excludes ions

The source emphasizes exclusion even of:

```text
H+
```

despite allowing water.

---

# 86. Osmolarity

```text
osmolarity
=
total concentration of dissolved solute particles
```

---

# 87. Osmosis

```text
osmosis
=
net movement of water down its water-concentration gradient,
equivalently toward the side with higher solute-particle concentration
when the relevant solutes cannot equilibrate freely
```

---

# 88. Water-direction framing

Source wording can be represented as:

```text
low solute / high water
→ high solute / low water
```

---

# 89. Intracellular osmotic tendency

Cells contain many solutes, creating a tendency for water to enter.

---

# 90. Uncontrolled osmosis can swell cells

If water influx is not balanced, cell volume increases.

---

# 91. Freshwater protozoan strategy

Paramecia use:

```text
contractile vacuoles
```

to expel excess water.

---

# 92. Contractile-vacuole cycle

Source model:

```text
accumulate solutes
→ water enters vacuole osmotically
→ solutes pumped back to cytosol
→ vacuole discharges water outside
```

---

# 93. Animal-cell osmotic strategy

Animal cells reduce osmotic water entry by pumping osmotically active solutes such as Na+ out.

---

# 94. Plant-cell osmotic strategy

Plant cells possess rigid cell walls that resist swelling.

---

# 95. Turgor pressure

```text
turgor pressure
=
pressure produced when osmotic water uptake
pushes the plasma membrane/cell contents
against the plant cell wall
```

---

# 96. Turgor prevents wilting

The source links turgor to plant rigidity.

---

# 97. Turgor can power movement

Examples include:

- carnivorous-plant movements
- explosive seed dispersal

---

# 98. Transporter sets differ among membranes

Examples:

```text
plasma membrane:
nutrient import

lysosome:
H+ import + digestion-product export

inner mitochondrial membrane:
pyruvate import + ATP export
```

---

# 99. Passive glucose transporter

In many mammalian cells, glucose crosses the plasma membrane through a passive transporter.

---

# 100. Glucose transporter topology

**Status: `SOURCE_SCALE`**

The source says the transporter crosses the membrane:

```text
at least 12 times
```

---

# 101. Alternating-access model

The glucose transporter samples conformations including:

```text
outward-open
occluded
inward-open
```

---

# 102. Transporter transitions are reversible

The source emphasizes spontaneous random transitions between conformations for the passive transporter.

---

# 103. Passive glucose transporter does not choose direction

Net direction follows the glucose concentration gradient.

---

# 104. External high glucose

After a meal:

```text
external glucose high
→ more binding outward
→ net glucose influx
```

---

# 105. Liver glucose export source scenario

During fasting, the source says glucagon promotes hepatic glycogen breakdown, making intracellular glucose high enough to favor export.

### `SOURCE_ERA_STATEMENT`

This is the chapter's simplified physiological framing.

---

# 106. Passive glucose transport can reverse

Same transporter can support either:

- influx
- efflux

depending on concentration gradient.

---

# 107. D-glucose selectivity

The source says the transporter binds:

```text
D-glucose
```

but not mirror-image:

```text
L-glucose
```

---

# 108. Transporter stereospecificity

Selectivity can therefore distinguish molecules with identical atomic composition but different stereochemistry.

---

# 109. Three major active-pump energy classes

```text
1. gradient-driven pumps
2. ATP-driven pumps
3. light-driven pumps
```

---

# 110. Gradient-driven pump

Uses downhill movement of one solute to drive uphill movement of another.

---

# 111. ATP-driven pump

Uses energy from ATP hydrolysis.

---

# 112. Light-driven pump

Uses absorbed light energy.

---

# 113. Bacteriorhodopsin is the chapter's light-driven example

It pumps H+ using light energy.

---

# 114. Energy coupling among pump systems

Primary ATP-driven gradients can later power secondary gradient-driven transport.

---

# 115. Animal-cell Na+ pump is foundational

The Na+ pump creates a Na+ electrochemical gradient that powers many secondary transport systems.

---

# 116. Plant/fungal/bacterial H+ gradients play an analogous role

The source contrasts animal Na+-based secondary transport with H+-based systems in plants, fungi, and many bacteria.

---

# 117. Na+ pump

```text
Na+ pump
=
Na+-K+ ATPase
```

---

# 118. Na+ pump direction

Per full cycle:

```text
Na+:
cytosol → extracellular space

K+:
extracellular space → cytosol
```

---

# 119. Na+ pump stoichiometry

**Status: `SOURCE_SCALE`**

One cycle transports:

```text
3 Na+ out
2 K+ in
```

---

# 120. Na+ pump ATP coupling

ATP hydrolysis leads to transient phosphorylation of the pump.

---

# 121. Phosphorylation drives conformational change

The phosphate forms a high-energy linkage on the protein and biases the transport cycle.

---

# 122. Na+ pump cycle — cytosolic Na+ binding

```text
3 Na+ bind on cytosolic side
```

---

# 123. Na+ pump cycle — phosphorylation

ATP transfers phosphate to the pump.

---

# 124. Na+ pump cycle — outward transition

Phosphorylation promotes a conformation that releases Na+ extracellularly.

---

# 125. Na+ pump cycle — K+ binding

```text
2 K+
```

bind from extracellular space.

---

# 126. Na+ pump cycle — dephosphorylation

K+ binding permits/induces dephosphorylation in the source cycle.

---

# 127. Na+ pump cycle — inward return

The pump returns to cytosol-facing state and releases K+ inside.

---

# 128. Pump steps are tightly coupled

If a required step cannot occur, the full cycle stops.

---

# 129. Ouabain source mechanism

The source says ouabain blocks the pump by preventing extracellular K+ binding.

### `SOURCE_ERA_STATEMENT`

Preserve as chapter mechanism.

---

# 130. Na+ pump cycle time

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Approximately:

```text
10 ms per cycle
```

---

# 131. Na+ pump ATP consumption

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source says Na+ pumping typically uses:

```text
30% or more
```

of total ATP consumption in animal cells.

---

# 132. Na+ gradient maintained against leaks

Na+ continuously leaks inward through other transport proteins/channels.

The pump continually restores the gradient.

---

# 133. Na+ concentration ratio

**Status: `SOURCE_SCALE`**

The source summarizes cytosolic Na+ as roughly:

```text
10–30× lower
```

than extracellular Na+.

---

# 134. K+ concentration ratio

**Status: `SOURCE_SCALE`**

Cytosolic K+ is roughly:

```text
10–30× higher
```

than extracellular K+.

---

# 135. Na+ gradient stores potential energy

The chapter compares it to water stored behind a dam.

### `SOURCE_MODEL`

---

# 136. Gradient energy persists temporarily after pump inhibition

The source says an existing Na+ gradient can drive secondary transport for many minutes after the Na+ pump is halted.

---

# 137. Ca2+ is a signaling ion

A rise in cytosolic Ca2+ can alter protein activity and trigger cellular responses.

---

# 138. Source Ca2+-dependent examples

- muscle contraction
- fertilization
- nerve-cell signaling

---

# 139. Low resting cytosolic Ca2+ increases sensitivity

Because baseline free Ca2+ is extremely low, modest absolute influx produces a large fold-change.

---

# 140. Free cytosolic versus extracellular Ca2+

**Status: `SOURCE_SCALE`**

```text
cytosol:
~10^-4 mM

outside:
~1–2 mM
```

---

# 141. Ca2+ pumps remove Ca2+ from cytosol

Major locations:

- plasma membrane
- ER membrane

---

# 142. Sarcoplasmic reticulum

```text
sarcoplasmic reticulum
=
specialized ER in muscle
```

---

# 143. Muscle Ca2+ release

Stimulation allows stored Ca2+ to enter cytosol, promoting contraction.

---

# 144. Muscle relaxation requires Ca2+ removal

Ca2+ is pumped back into the sarcoplasmic reticulum.

---

# 145. Ca2+ ATPase source stoichiometry

Figure 12–14 shows:

```text
2 Ca2+
```

transported into the sarcoplasmic-reticulum lumen per depicted cycle.

---

# 146. Ca2+ pump phosphorylation

The source depicts phosphorylation of an:

```text
aspartic acid
```

within the pump.

---

# 147. Ca2+ and Na+ pumps are evolutionarily related

The source cites sequence/structural similarity as evidence of common origin.

---

# 148. Gradient-driven active transport

A downhill solute flow supplies free energy for uphill transport of another solute.

---

# 149. Symport

```text
symport
=
coupled transport of two solutes
in the same membrane-crossing direction
```

---

# 150. Antiport

```text
antiport
=
coupled transport of two solutes
in opposite directions
```

---

# 151. Uniport

```text
uniport
=
transport of one solute down its gradient
without coupling to a second solute
```

---

# 152. Uniports are not pumps

They mediate passive transport.

---

# 153. Passive glucose transporter is a uniport

---

# 154. Na+-glucose symport

Gut epithelial cells use an inward Na+ gradient to import glucose uphill.

---

# 155. Active glucose uptake can occur against glucose concentration gradient

Glucose can enter even when cytosolic glucose concentration exceeds that in gut lumen.

---

# 156. Na+ supplies the energy

The glucose itself is not hydrolyzed or chemically modified in this transport step.

---

# 157. Cooperative Na+/glucose binding

The source states binding of one enhances binding of the other.

---

# 158. Coupling prevents wasteful Na+ leak

In the source model:

```text
Na+ alone:
does not complete productive cycle

glucose alone:
does not complete productive cycle
```

Both are required.

---

# 159. Na+-glucose symport states

The source depicts:

```text
outward-open
occluded-occupied
inward-open
occluded-empty
```

---

# 160. The symporter still samples conformations stochastically

The energy bias arises from unequal solute concentrations and coupled binding, not a tiny deterministic motor making one-way rotations.

---

# 161. Gut epithelial polarity

Apical and basolateral membranes have distinct transporters.

---

# 162. Apical membrane

Faces:

```text
gut lumen
```

---

# 163. Apical transporter

Contains:

```text
Na+-glucose symport
```

---

# 164. Basal/lateral membranes

Contain:

```text
passive glucose uniports
```

---

# 165. Basolateral glucose release

Glucose exits down its concentration gradient toward extracellular fluid/blood.

---

# 166. Basolateral Na+ pumps

Na+/K+ ATPases maintain low cytosolic Na+ and therefore sustain the Na+ gradient.

---

# 167. Tight junctions preserve epithelial transporter polarity

They prevent apical and basolateral proteins from intermixing.

---

# 168. Directional transepithelial glucose movement is an emergent system property

### `SOURCE_DERIVED`

It requires:

```text
apical active uptake
+
basolateral passive release
+
Na+ pump
+
membrane-domain segregation
```

No single transporter alone performs the complete tissue-level transfer.

---

# 169. Na+-H+ exchanger

Animal-cell antiport:

```text
Na+ inward
H+ outward
```

---

# 170. Na+-H+ exchanger supports cytosolic pH control

By exporting H+, it helps prevent excessive cytosolic acidification.

---

# 171. Plants, fungi, and many bacteria use H+ gradients

The chapter states they do not rely on plasma-membrane Na+ pumps in the same way as animal cells.

---

# 172. Plasma-membrane H+ pump direction

```text
cytosol → outside
```

---

# 173. H+ export acidifies the external medium

This generates both:

- H+ concentration gradient
- electrical gradient

---

# 174. H+-driven symports

Sugars and amino acids can be imported together with H+ moving downhill.

---

# 175. H+ gradient generation can use ATP or light

Examples:

- ATP-driven H+ pumps
- bacteriorhodopsin

---

# 176. Organelle H+ pumps

Lysosomes and plant/fungal vacuoles contain ATP-driven H+ pumps that move H+:

```text
cytosol → organelle lumen
```

---

# 177. Organelle acidification

H+ pumps maintain an acidic lumen while helping keep cytosolic pH near neutral.

---

# 178. Table 12–2 — Na+-driven glucose pump

```text
location:
apical plasma membrane of kidney/intestine

energy:
Na+ gradient

function:
active glucose import
```

---

# 179. Table 12–2 — Na+-H+ exchanger

```text
location:
animal plasma membrane

energy:
Na+ gradient

function:
H+ export / pH regulation
```

---

# 180. Table 12–2 — Na+ pump

```text
location:
most animal plasma membranes

energy:
ATP hydrolysis

function:
Na+ export
K+ import
```

---

# 181. Table 12–2 — plasma-membrane Ca2+ pump

```text
energy:
ATP hydrolysis

function:
Ca2+ export
```

---

# 182. Table 12–2 — ER/sarcoplasmic-reticulum Ca2+ pump

```text
energy:
ATP hydrolysis

function:
Ca2+ import into organelle lumen
```

---

# 183. Table 12–2 — plasma-membrane H+ pump

```text
location:
plants
fungi
some bacteria

energy:
ATP hydrolysis

function:
H+ export
```

---

# 184. Table 12–2 — organelle H+ pump

```text
location:
animal lysosomes
plant/fungal vacuoles

energy:
ATP hydrolysis

function:
H+ transport from cytosol into lumen
```

---

# 185. Table 12–2 — bacteriorhodopsin

```text
energy:
light

function:
H+ export
```

---

# 186. Channel

```text
channel
=
transmembrane protein forming
a hydrophilic pore that supports passive diffusion
```

---

# 187. Large nonselective pores would be dangerous at the plasma membrane

They would allow uncontrolled leakage between cytosol and environment.

---

# 188. Gap-junction channels are an exception in specialized cell-cell connections

### `LATER_CHAPTER_REFINEMENT`

Chapter 20.

---

# 189. Porins are large pores in outer membranes

### `LATER_CHAPTER_REFINEMENT`

Chapter 11 established porins in bacterial/mitochondrial outer membranes.

---

# 190. Most plasma-membrane channels are narrow and selective

---

# 191. Ion channel

```text
ion channel
=
channel selective for inorganic ions
```

---

# 192. Two defining ion-channel properties

```text
1. ion selectivity
2. gating
```

---

# 193. Selectivity filter

```text
selectivity filter
=
narrow channel region
whose geometry and chemical groups
determine which ions can pass
```

---

# 194. Hydrated ions

In water, ions carry a surrounding shell of water molecules.

---

# 195. Partial dehydration

Most hydration water must be shed before passage through the narrow selectivity filter.

---

# 196. Channel wall substitutes favorable interactions

Polar groups in the filter can transiently coordinate a dehydrated ion.

---

# 197. Size and charge matter together

An ion must match:

- pore diameter
- filter charge/chemistry

---

# 198. K+ channel structural example

Figure 12–19 shows a bacterial K+ channel.

---

# 199. K+ channel vestibule

A wider aqueous vestibule sits inside the membrane before the narrow filter.

---

# 200. Ions remain partially hydrated in vestibule

Dehydration becomes most important in the selectivity filter.

---

# 201. Ion channels have gates

They switch between:

```text
closed
open
```

conformations.

---

# 202. Channels are not continuously open

Persistent opening would dissipate ion gradients.

---

# 203. Gating stimulus changes opening probability

A stimulus does not generally "hold" every channel permanently open.

---

# 204. Channel transport rate

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source says more than:

```text
10^6 ions per second
```

can pass through one open channel.

---

# 205. Channel-versus-transporter rate

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source says this can be approximately:

```text
1000× faster
```

than the fastest known transporter.

---

# 206. Channels cannot perform active transport

They cannot couple each transported ion to ATP/light/another gradient in the pump sense.

---

# 207. Major channel ions in source discussion

```text
Na+
K+
Ca2+
Cl-
```

---

# 208. Ion-channel opening changes membrane potential

Because gradients are already far from equilibrium, opening a channel rapidly redistributes charge.

---

# 209. Resting K+ leak channels

In many resting animal cells, K+ leak channels are the main open ion channels.

---

# 210. K+ leak

K+ moves outward down its concentration gradient.

---

# 211. Charge separation follows K+ efflux

Negative intracellular macromolecules cannot follow rapidly, leaving the inside relatively negative.

---

# 212. Electrical force opposes further K+ loss

As the interior becomes negative, K+ is pulled back inward electrically.

---

# 213. K+ equilibrium

Eventually:

```text
outward concentration force
=
inward electrical force
```

---

# 214. K+ electrochemical gradient becomes zero at equilibrium

Concentration difference remains, but net driving force vanishes.

---

# 215. Resting membrane potential mainly reflects K+ permeability in the source model

Because K+ leak channels dominate resting permeability.

---

# 216. Na+ pump contributes indirectly and directly

Indirectly:

```text
creates K+ gradient
```

Directly:

```text
3 Na+ out / 2 K+ in
→ one net positive charge moved outward per cycle
```

---

# 217. Charge layer is extremely thin

**Status: `SOURCE_SCALE`**

Figure 12–22 describes the charge separation as concentrated within approximately:

```text
<1 nm
```

of the membrane.

---

# 218. Tiny fraction of ions establishes voltage

Bulk cytosolic ion concentrations barely change during ordinary voltage shifts.

---

# 219. Source charge-count example

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Approximately:

```text
6000 K+ ions
crossing 1 µm²
```

can change membrane potential by about:

```text
100 mV
```

---

# 220. Source volume comparison

The number of K+ ions in:

```text
1 µm³ cytosol
```

is stated to be about:

```text
70,000× greater
```

than the number needed for that voltage shift.

---

# 221. Nernst equation

For a monovalent positive ion at 37°C, the source gives:

```text
V = 62 log10(Co / Ci)
```

where:

```text
V:
equilibrium membrane potential in mV

Co:
outside ion concentration

Ci:
inside ion concentration
```

---

# 222. Nernst equation condition

This source form assumes:

- one positive charge
- 37°C
- equilibrium for that ion

---

# 223. Tenfold concentration-ratio change

**Status: `SOURCE_SCALE`**

Each 10-fold change in:

```text
Co/Ci
```

changes equilibrium potential by:

```text
62 mV
```

---

# 224. Real resting potential depends on multiple ions

The source states contributions must be combined with relative membrane permeabilities.

### `DO_NOT_INFER`

Do not treat a single-ion Nernst potential as automatically equal to a real cell's membrane potential.

---

# 225. Rapid voltage signals arise from channel state changes

Whole-cell ion concentrations cannot change substantially on millisecond timescales.

Opening and closing of channels changes permeability instead.

---

# 226. Patch-clamp recording

```text
patch clamp
=
electrical recording technique
that can measure current through
one or a few ion channels in a membrane patch
```

---

# 227. Patch electrode

A fine glass microelectrode contacts a tiny membrane region.

---

# 228. Tight seal

Gentle suction forms a high-resistance seal around the membrane patch.

---

# 229. Cell-attached patch

The membrane patch remains part of the intact cell.

---

# 230. Detached patch

The patch can be torn free, exposing its cytosolic face to controlled solution.

---

# 231. Patch-clamp current scale

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

Single-channel currents can be around:

```text
10^-12 A
=
1 pA
```

---

# 232. Channel openings appear as discrete current steps

Open-state current is measurably distinct from closed-state current.

---

# 233. Ion-channel behavior is stochastic

Even under constant conditions, channels randomly switch between open and closed conformations.

---

# 234. Thermal motion drives conformational fluctuation

The chapter frames channel flicker as a molecular machine buffeted by random thermal movement.

---

# 235. Channel opening is all-or-none at the single-channel level

Source framing:

```text
open:
fully open

closed:
fully closed
```

---

# 236. Stimuli bias probabilities

Activation changes:

```text
fraction of time spent open
```

rather than converting stochastic behavior into deterministic permanent opening.

---

# 237. Channel-open duration varies

Even with ligand bound, individual openings vary in duration.

---

# 238. Human K+ channel gene count

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source says the human genome contains approximately:

```text
80 related K+ channel genes
```

---

# 239. Three major gating classes

```text
mechanically gated
ligand gated
voltage gated
```

---

# 240. Mechanically gated channel

Physical force changes channel conformation/open probability.

---

# 241. Extracellular ligand-gated channel

Binding on the extracellular side influences opening.

---

# 242. Intracellular ligand-gated channel

Binding on the cytosolic side can also influence opening.

---

# 243. Voltage-gated channel

Membrane potential controls opening probability.

---

# 244. Voltage sensor

Voltage-gated channels contain charged structural domains sensitive to the membrane electric field.

---

# 245. Depolarization

```text
depolarization
=
membrane potential becomes less negative
```

---

# 246. Voltage-sensor movement

The source depicts positively charged residues changing position/orientation as membrane voltage changes.

---

# 247. Mechanically gated auditory channels

Sound-induced hair-bundle movement mechanically opens channels in auditory hair cells.

---

# 248. Organ of Corti

The source describes auditory hair cells within the organ of Corti in the cochlea.

---

# 249. Stereocilia

Hair cells carry arrays of:

```text
stereocilia
```

on their apical surface.

---

# 250. Tip/linking filaments

Neighboring stereocilia are connected by fine filaments in the source model.

---

# 251. Sound-induced deflection

Movement of the basilar membrane tilts stereocilia.

---

# 252. Mechanical tension opens channels

Stretching the linking filaments pulls open mechanically gated channels.

---

# 253. Positive-ion influx activates hair cell

This creates an electrical signal that is conveyed to the auditory nerve.

---

# 254. Auditory sensitivity source displacement

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The faintest audible sounds are said to stretch the filaments by about:

```text
0.04 nm
```

on average.

---

# 255. Source comparison

That displacement is described as smaller than the diameter of a hydrogen ion.

### `SOURCE_MODEL`

---

# 256. Piezo channel

```text
Piezo channel
=
mechanically gated cation channel
responsive to membrane stretch/pressure
```

---

# 257. Piezo trimer

**Status: `SOURCE_SCALE`**

The source depicts:

```text
3 subunits
```

---

# 258. Piezo transmembrane helices per subunit

**Status: `SOURCE_SCALE`**

Each subunit is described as containing:

```text
36 transmembrane helices
```

---

# 259. Piezo architecture

The three subunits radiate like a pinwheel from a central ion-conducting pore.

---

# 260. Piezo induces membrane curvature

The arms create a cuplike membrane depression.

---

# 261. Stretch opens Piezo

Membrane stretching flattens the depression and mechanically opens the pore.

---

# 262. Piezo tissue examples

The source gives:

- skin touch sensing
- bladder fullness sensing

---

# 263. Piezo developmental importance

The source states severe disruption can cause embryonic lethality in animal models because development uses mechanical signals.

---

# 264. Venus flytrap electrical signaling

Trigger-hair stimulation opens channels and generates an electrical signal.

---

# 265. Venus flytrap closure time

**Status: `SOURCE_SCALE`**

Leaves close in:

```text
<0.5 s
```

---

# 266. Venus flytrap trigger condition

The source says touching:

```text
two of three trigger hairs in succession
```

initiates closure.

---

# 267. Mimosa pudica response

Touch activates mechanically gated channels, then voltage-gated signaling propagates through the plant.

---

# 268. Mimosa turgor response

Electrical signaling ultimately causes rapid water loss from hinge cells, collapsing turgor and folding leaflets.

---

# 269. Voltage-gated channels occur beyond neurons

Examples:

- muscle cells
- egg cells
- protozoans
- plant cells

---

# 270. Threshold behavior

A voltage-gated channel becomes much more likely to open when membrane potential crosses a relevant threshold.

---

# 271. Voltage changes opening probability

Source example:

```text
10% open at one potential
90% open at another
```

---

# 272. Voltage-gated channel feedback

Opening one channel population can alter voltage enough to control additional voltage-gated channels.

---

# 273. Channelopathy

```text
channelopathy
=
disease caused by defective ion-channel function
```

in the source's general framing.

---

# 274. Neuron

```text
neuron
=
cell specialized to receive,
integrate,
and transmit signals
```

---

# 275. Neuron cell body

Contains nucleus and major cellular machinery.

---

# 276. Axon

```text
axon
=
typically one long neuronal process
conducting electrical signals away from cell body
```

---

# 277. Dendrite

```text
dendrite
=
branching neuronal process
specialized for receiving inputs
```

---

# 278. Nerve terminal

Terminal axon branches end in specialized sites that communicate with target cells.

---

# 279. Axon length source range

**Status: `SOURCE_SCALE`**

Human axons can range from:

```text
<1 mm
to
>1 m
```

---

# 280. Dendritic input source maximum

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Some neurons are described as receiving up to:

```text
100,000 inputs
```

---

# 281. Passive voltage spread decays with distance

A local voltage perturbation spreads along membrane but weakens.

---

# 282. Long-distance neuronal signaling requires regeneration

Neurons repeatedly regenerate the signal using voltage-gated channels.

---

# 283. Action potential

```text
action potential
=
self-regenerating traveling wave
of membrane depolarization/repolarization
along excitable membrane
```

---

# 284. Action potentials do not weaken with distance

Unlike passive voltage spread, they are actively renewed.

---

# 285. Action-potential source speed

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source gives speeds up to:

```text
100 m/s
```

---

# 286. Squid giant axon

The giant squid axon historically enabled direct electrophysiological recording.

---

# 287. Squid giant-axon diameter

**Status: `SOURCE_SCALE`**

Approximately:

```text
1 mm
```

---

# 288. Squid giant-axon length

**Status: `SOURCE_SCALE`**

How We Know says giant axons can reach about:

```text
10 cm
```

---

# 289. Relative diameter

The source states they can be:

```text
>100× thicker
```

than a typical mammalian axon.

---

# 290. Larger axon diameter supports faster signaling

This is the source's general physiological statement.

---

# 291. Direct intracellular electrode

The squid axon is large enough to insert an electrode into axoplasm.

---

# 292. Experimental stimulation

A brief electrical stimulus can trigger an action potential.

---

# 293. Action potential threshold

Subthreshold depolarization does not trigger a full action potential.

Above threshold:

```text
all-or-none action potential
```

is produced.

---

# 294. Action potential can experimentally travel either direction

If a squid axon is stimulated artificially at either end, the excitation can propagate away from that site in either direction.

### `PROJECT_CONSTRAINT`

Do not confuse this with normal one-way propagation from initiation site along an intact neuron.

---

# 295. Axoplasm replacement experiment

Researchers could remove squid axoplasm and refill the axon with controlled ion solutions.

---

# 296. Na+ and K+ are sufficient for core action-potential behavior in that preparation

The source says a normal action potential required approximately physiological Na+ and K+ gradients.

---

# 297. Resting potential tracks K+ equilibrium

Changing external K+ shifts resting potential roughly according to the Nernst equation.

---

# 298. External Na+ has little effect on resting potential in the experiment

This supports low resting Na+ permeability.

---

# 299. Action-potential peak depends on external Na+

Reducing external Na+ reduces the peak.

---

# 300. During action potential, membrane becomes highly Na+-permeable

This led to the inference of voltage-gated Na+ channels.

---

# 301. Afterward, K+ permeability increases

Additional K+ channels accelerate return to negative resting voltage.

---

# 302. Hodgkin and Huxley source history

The source credits work from the 1940s–1950s and notes a 1963 Nobel Prize.

### `SOURCE_ERA_STATEMENT`

---

# 303. Action-potential initiation

A sufficient depolarization opens voltage-gated Na+ channels.

---

# 304. Na+ influx

Na+ enters down its steep electrochemical gradient.

---

# 305. Positive feedback

```text
Na+ entry
→ further depolarization
→ more Na+ channels open
→ more Na+ entry
```

---

# 306. Local depolarization rises within roughly a millisecond

**Status: `SOURCE_SCALE`**

The source describes the explosive phase as occurring within:

```text
~1 ms
```

---

# 307. Example resting potential in action-potential figure

**Status: `SOURCE_SCALE`**

```text
-60 mV
```

---

# 308. Example threshold potential

**Status: `SOURCE_SCALE`**

```text
~ -40 mV
```

---

# 309. Example action-potential peak

**Status: `SOURCE_SCALE`**

```text
~ +40 mV
```

---

# 310. Na+ equilibrium relation

The +40 mV peak is described as approaching the voltage where Na+ inward chemical force and outward electrical force balance in that example.

---

# 311. Voltage-gated Na+ channel states

```text
closed
open
inactivated
```

---

# 312. Na+ channel inactivation

Depolarization eventually favors an inactivated state even while the membrane remains depolarized.

---

# 313. Inactivation timescale

**Status: `SOURCE_SCALE`**

The source says approximately:

```text
within ~1 ms
```

---

# 314. Inactivated channel cannot immediately reopen

It must recover after membrane repolarization.

---

# 315. Voltage-gated K+ channels open more slowly

They respond to depolarization later than voltage-gated Na+ channels.

---

# 316. K+ efflux repolarizes membrane

K+ flows out down its electrochemical gradient once these channels open.

---

# 317. Voltage-gated K+ channels accelerate repolarization

They return the membrane toward resting potential faster than leak channels alone.

---

# 318. Refractory period

```text
refractory period
=
period after an action potential
during which Na+ channel inactivation
makes the membrane resistant to immediate re-excitation
```

---

# 319. Refractory behavior enforces forward propagation in normal axonal wave

The region behind the action-potential front is temporarily unable to regenerate the wave.

---

# 320. Action-potential propagation

Local Na+ influx depolarizes adjacent membrane, triggering neighboring voltage-gated Na+ channels.

---

# 321. The signal is regenerated continuously

The moving front is not the physical same Na+ ions traveling down the whole axon.

### `PROJECT_CONSTRAINT`

Visualize:

```text
local ion flux
→ local voltage change
→ next local channel opening
```

not "a stream of Na+ ions racing from soma to terminal."

---

# 322. Na+/K+ gradients are restored after signaling

The Na+ pump consumes ATP to re-establish long-term gradients.

---

# 323. Brain energy source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source says the brain uses about:

```text
20% of total energy generated from food
```

with much of that supporting ion-pump activity.

---

# 324. Metabolic brain imaging source example

The chapter shows a radioactive tracer used to map glucose metabolism during:

- seeing
- thinking
- hearing

### `SOURCE_ERA_STATEMENT`

---

# 325. Synapse

```text
synapse
=
specialized junction where a neuron communicates
with another neuron, muscle, or other target cell
```

---

# 326. Presynaptic cell

Cell transmitting the signal.

---

# 327. Postsynaptic cell

Cell receiving the signal.

---

# 328. Synaptic cleft

```text
synaptic cleft
=
narrow extracellular gap
between pre- and postsynaptic membranes
```

---

# 329. Synaptic-cleft width

**Status: `SOURCE_SCALE`**

Typically:

```text
~20 nm
```

---

# 330. Electrical signal does not directly cross chemical synaptic cleft

It is converted into a chemical signal.

---

# 331. Neurotransmitter

```text
neurotransmitter
=
small secreted signaling molecule
released by a presynaptic neuron
```

---

# 332. Synaptic vesicle

Neurotransmitters are stored in small membrane-enclosed vesicles in nerve terminals.

---

# 333. Action potential opens presynaptic voltage-gated Ca2+ channels

---

# 334. Ca2+ electrochemical gradient is steep inward

The source emphasizes extracellular Ca2+ greatly exceeds cytosolic free Ca2+.

---

# 335. Ca2+ concentration ratio at nerve terminal

**Status: `SOURCE_SCALE`**

The source says outside concentration is more than:

```text
1000×
```

the free cytosolic concentration.

---

# 336. Ca2+ influx triggers vesicle fusion

A rise in terminal cytosolic Ca2+ causes synaptic vesicles to fuse with the plasma membrane.

---

# 337. Exocytosis

```text
exocytosis
=
fusion of a vesicle with plasma membrane
to release contents outside
```

### `LATER_CHAPTER_REFINEMENT`

Detailed mechanism belongs to Chapter 15.

---

# 338. Synaptic conversion sequence

```text
electrical signal
→ Ca2+ influx
→ vesicle fusion
→ neurotransmitter release
→ chemical signal
```

---

# 339. Neurotransmitter diffuses across cleft

It reaches receptors concentrated in postsynaptic membrane.

---

# 340. Neurotransmitter signal is terminated rapidly

The source describes:

- enzymatic degradation
- transporter-mediated reuptake into nerve terminal
- uptake by neighboring non-neuronal cells

---

# 341. Rapid clearance limits signal duration and spread

---

# 342. Transmitter-gated ion channel

```text
transmitter-gated ion channel
=
ligand-gated ion channel
opened by neurotransmitter binding
```

---

# 343. Transmitter-gated receptors can operate on millisecond timescales

---

# 344. Chemical-to-electrical conversion

```text
neurotransmitter binding
→ channel opens
→ ion permeability changes
→ membrane potential changes
```

---

# 345. Large enough postsynaptic depolarization can trigger another action potential

---

# 346. Neuromuscular junction

```text
neuromuscular junction
=
synapse between motor neuron
and skeletal muscle cell
```

---

# 347. Acetylcholine

At vertebrate neuromuscular junctions:

```text
acetylcholine
```

acts as the source example neurotransmitter.

---

# 348. Acetylcholine receptor

```text
acetylcholine receptor
=
transmitter-gated cation channel
```

---

# 349. Acetylcholine receptor subunit count

**Status: `SOURCE_SCALE`**

Figure 12–44 shows:

```text
5 transmembrane subunits
```

---

# 350. Two subunits are identical in source figure

---

# 351. Two acetylcholine-binding sites

**Status: `SOURCE_SCALE`**

The receptor contains:

```text
2 acetylcholine-binding sites
```

---

# 352. Closed acetylcholine-receptor gate

Hydrophobic side chains occlude the pore in the closed state.

---

# 353. Open acetylcholine-receptor gate

Ligand binding rearranges the gate and allows cations through.

---

# 354. Negative pore-mouth charges favor cations

The source depicts negatively charged residues at pore ends.

---

# 355. Main permeant ions in source description

The receptor permits mainly:

```text
Na+
K+
```

and Question 12–21 also explicitly includes:

```text
Ca2+
```

as permeable.

---

# 356. Na+ influx depolarizes muscle membrane

This links motor-neuron signaling to muscle excitation.

---

# 357. Ligand binding still does not eliminate stochastic flicker

Even with acetylcholine bound, the channel moves randomly between open and closed states.

---

# 358. Excitatory neurotransmitter source examples

```text
acetylcholine
glutamate
```

---

# 359. Excitatory receptors

The source's chief excitatory receptors are:

```text
ligand-gated cation channels
```

---

# 360. Excitatory effect

Na+ influx depolarizes the postsynaptic membrane and increases probability of firing.

---

# 361. Inhibitory neurotransmitter source examples

```text
GABA
glycine
```

---

# 362. Inhibitory receptors

The source's major inhibitory receptor class here:

```text
ligand-gated Cl- channels
```

---

# 363. Inhibitory effect

Cl- entry makes depolarization harder.

---

# 364. Receptor determines effect

The same broad category "neurotransmitter" does not encode excitatory/inhibitory behavior by itself.

The receptor and resulting ion flow determine the electrical consequence.

---

# 365. Curare source example

The source says curare blocks excitatory acetylcholine receptors and causes muscle paralysis.

### `SOURCE_ERA_STATEMENT`

This canon is not clinical guidance.

---

# 366. Strychnine source example

The source says strychnine blocks inhibitory glycine receptors and can cause spasms/convulsions.

### `SOURCE_ERA_STATEMENT`

---

# 367. Table 12–3 — K+ leak channel

```text
location:
most animal plasma membranes

function:
resting membrane potential
```

---

# 368. Table 12–3 — voltage-gated Na+ channel

```text
location:
axon membrane

function:
action-potential generation
```

---

# 369. Table 12–3 — voltage-gated K+ channel

```text
location:
axon membrane

function:
return toward resting potential
```

---

# 370. Table 12–3 — voltage-gated Ca2+ channel

```text
location:
nerve terminal

function:
trigger neurotransmitter release
```

---

# 371. Table 12–3 — acetylcholine-gated cation channel

```text
location:
skeletal-muscle postsynaptic membrane

function:
excitatory synaptic signaling
```

---

# 372. Table 12–3 — glutamate-gated cation channel

```text
location:
many neuronal synapses

function:
excitatory signaling
```

---

# 373. Table 12–3 — GABA-gated Cl- channel

```text
location:
many neuronal synapses

function:
inhibitory signaling
```

---

# 374. Table 12–3 — glycine-gated Cl- channel

```text
location:
many neuronal synapses

function:
inhibitory signaling
```

---

# 375. Table 12–3 — mechanically gated cation channel

```text
location:
auditory hair cells

function:
detect sound vibrations
```

---

# 376. Source psychoactive-drug framing

The chapter gives several drugs as examples of changing synaptic transmission by acting on receptors or transporters.

### `SOURCE_ERA_STATEMENT`

Do not use these textbook descriptions as medical treatment advice.

---

# 377. Barbiturates / Valium / Ambien / Restoril source statement

The source says these enhance GABA-gated Cl- channel responses.

---

# 378. Prozac source statement

The source describes Prozac as inhibiting a Na+-driven serotonin-reuptake symport, increasing serotonin in the synaptic space.

---

# 379. Ritalin source statement

The source describes Ritalin as inhibiting Na+-driven dopamine/norepinephrine reuptake symports.

---

# 380. Neurotransmitter receptor diversity

There are many receptor subtypes within families such as:

- acetylcholine
- glutamate
- GABA
- glycine
- serotonin

---

# 381. Receptor subtypes differ subtly

They can differ in:

- affinity
- conductance
- opening/closing kinetics
- neuronal distribution

---

# 382. Mental-disorder prevalence values are source-era claims

The chapter quotes approximate prevalence values around 1% for several disorders.

### `SOURCE_ERA_STATEMENT`

Do not promote them into a 2026 epidemiology layer without verification.

---

# 383. Chemical synapses permit computation

Neurons integrate many excitatory and inhibitory inputs rather than merely relaying signals unchanged.

---

# 384. Motor-neuron input scale

The source says a motor neuron can receive:

```text
hundreds or thousands
```

of synaptic inputs.

---

# 385. Neuronal computation depends on ion-channel composition

Different neuron classes have distinct channel/receptor sets and therefore distinct input-output behavior.

---

# 386. Channelrhodopsin

```text
channelrhodopsin
=
blue-light-gated cation channel
from unicellular green algae
```

---

# 387. Channelrhodopsin natural role

The source says algae use light-gated channels to sense/navigate toward light.

---

# 388. Channelrhodopsin ion flow

Blue light allows:

```text
Na+
```

influx in the source example.

---

# 389. Channelrhodopsin depolarizes membrane

Na+ influx makes membrane potential less negative.

---

# 390. Heterologous expression works in neurons

The source states channelrhodopsin can function after genetic transfer into other cell types.

---

# 391. Optogenetics

```text
optogenetics
=
genetic introduction of light-responsive proteins
to control selected cells with light
```

in this chapter's usage.

---

# 392. Mouse hypothalamus source experiment

Channelrhodopsin was expressed in a selected neuronal subpopulation.

---

# 393. Fiber-optic stimulation

Blue light was delivered through an implanted fiber-optic cable.

---

# 394. Source behavioral result

Illumination activated the selected neurons and triggered aggressive behavior in the experimental mice.

### `SOURCE_MODEL` / `SOURCE_ERA_STATEMENT`

Do not infer that a single "aggression center" fully explains behavior.

---

# 395. Light-off reversibility

When illumination stopped, the immediate channel-driven activation ceased and behavior returned toward baseline in the source experiment.

---

# 396. Optogenetics is an experimental perturbation layer

### `PROJECT_CONSTRAINT`

Channelrhodopsin is engineered into the cell.

Mark it:

```text
ENGINEERED
```

not native to mammalian neurons.

---

# 397. Transporter versus channel WorldState distinction

A transporter exposes a binding site alternately to opposite sides.

A channel creates an aqueous pore when open.

---

# 398. A transporter is not a permanently open tunnel

### Hard rendering rule

Do not visualize passive transporters as channels.

---

# 399. A channel does not shuttle one ion at a time by alternating access

### Hard rendering rule

Do not animate every passing ion as requiring a full channel conformational flip.

---

# 400. Pumps are transporters, not channels

All active transport in the chapter is transporter-mediated.

---

# 401. Concentration and flux are separate fields

Recommended runtime distinction:

```yaml
solute_state:
  concentration_inside:
  concentration_outside:
  permeability:
  net_flux:
```

---

# 402. Membrane voltage is a field, not a row of giant plus/minus icons

### `PROJECT_CONSTRAINT`

Charge symbols may be used pedagogically but must not imply macroscopic charge imbalance throughout the entire cytosol.

---

# 403. Charge separation occurs near membrane surfaces

The source explicitly localizes most excess charge to a nanometer-scale layer.

---

# 404. Bulk cytosol remains almost electrically neutral during an action potential

---

# 405. Electrochemical-gradient vector

Suggested conceptual schema:

```yaml
electrochemical_gradient:
  solute:
  concentration_component:
    magnitude:
    preferred_direction:
  electrical_component:
    magnitude:
    preferred_direction:
  net_direction:
  net_driving_force:
```

---

# 406. Solute-specific gradients

There is no single universal "membrane gradient."

Each ion/solute has its own:

- concentration difference
- charge
- electrochemical driving force

---

# 407. Pump energy provenance

A gradient-driven pump should retain provenance of the gradient that powers it.

Example:

```text
ATP
→ Na+ pump
→ Na+ gradient
→ glucose-Na+ symport
→ glucose accumulation
```

---

# 408. Secondary active transport is still ultimately energy-dependent

The symporter may not hydrolyze ATP directly, but the gradient it consumes was created by an energy-consuming process.

---

# 409. Gradient energy must be depletable

If the primary Na+ pump stops:

```text
Na+ gradient runs down
→ Na+-driven secondary transport fails
```

---

# 410. No infinite gradients

### `PROJECT_CONSTRAINT`

A simulation must conserve transported particles and allow gradients to decay if maintenance stops.

---

# 411. Pump stoichiometry matters

For Na+/K+ ATPase:

```text
3 Na+ out
2 K+ in
```

must affect both concentrations and charge transfer.

---

# 412. Na+/K+ pump is electrogenic

One net positive charge leaves per cycle.

---

# 413. Pumps operate through cyclic state machines

Suggested conceptual implementation:

```text
bind
→ chemical modification / energy-coupling state
→ conformational transition
→ release
→ reset
```

---

# 414. Pump cycle cannot skip obligatory states

The source explicitly states blocking one required Na+/K+ pump step halts the cycle.

---

# 415. Channel gating should be probabilistic

Even "activated" channels continue to flicker.

---

# 416. Channel open probability is state-dependent

Suggested field:

```yaml
channel:
  gating_stimulus:
  open_probability:
  current_state:
    - open
    - closed
    - inactivated
```

---

# 417. Inactivation is distinct from closure

For voltage-gated Na+ channels:

```text
closed:
available to open

inactivated:
temporarily unavailable
```

---

# 418. Action potential requires local positive feedback

A simple traveling animation is insufficient unless channel opening is causally linked to local voltage.

---

# 419. Action-potential propagation is not diffusion of voltage alone

Passive voltage spread initiates the next active regenerative event.

---

# 420. Refractory state gives directionality

The just-activated region cannot immediately support another Na+-driven spike.

---

# 421. Action-potential speed and shape are not universal

The source's 100 m/s is an upper example, not a universal neuron constant.

---

# 422. Synaptic signal conversion has three representational states

```text
axon electrical
→ synaptic chemical
→ postsynaptic electrical
```

---

# 423. Synaptic vesicle release changes membrane topology

### `LATER_CHAPTER_REFINEMENT`

Vesicle fusion belongs physically to Chapter 15.

---

# 424. Neurotransmitter concentration is local and transient

Release creates a short-lived extracellular concentration pulse in the cleft.

---

# 425. Neurotransmitter removal must be represented

Otherwise a simulated synapse would remain permanently activated.

---

# 426. Excitation and inhibition are receptor-context dependent

Do not color a neurotransmitter permanently "excitatory" or "inhibitory" without its receptor context.

---

# 427. Osmosis is water movement, not solute pumping

Keep visually separate:

```text
solute gradient
→ osmotic driving force
→ water flow
```

---

# 428. Aquaporins do not pump water

They facilitate passive movement.

---

# 429. Aquaporin direction is reversible

Net water direction depends on water/solute gradient.

---

# 430. Turgor is a mechanical consequence of osmotic state

Couple:

```text
water volume
→ membrane pressure
→ cell-wall resistance
```

for plant-cell modeling.

---

# 431. Contractile-vacuole cycles are dynamic

They alternate:

```text
fill
→ solute recovery
→ discharge
```

not act as static water reservoirs.

---

# 432. Ion selectivity is not merely pore diameter

Channel chemistry/charge distribution also matters.

---

# 433. Ion hydration state changes during channel passage

A realistic molecular representation should distinguish:

```text
hydrated ion in solution
partially dehydrated ion in filter
rehydrated ion after exit
```

---

# 434. Ion current is particle movement plus charge

Electrical current through a channel corresponds to net charge crossing per unit time.

---

# 435. Patch-clamp current is ExperimentalState

The current trace is a measurement of biological channel behavior, not part of the membrane itself.

---

# 436. Patch-clamp trace is discrete at single-channel scale

Each opening produces a step-like current.

---

# 437. Nernst potential is an equilibrium prediction

It is analytical metadata computed from concentration ratio and charge.

---

# 438. Nernst potential is not a physical object

### `PROJECT_CONSTRAINT`

Do not draw it as a particle or separate membrane component.

---

# 439. Membrane potential can change without large concentration changes

This is a crucial simulation performance opportunity:

```text
small ion-number redistribution
→ large voltage change
```

---

# 440. Ion-concentration reservoirs can be treated as approximately constant during a single action potential

The source explicitly supports this simplification in Question 12–4.

---

# 441. Long-term activity still requires gradient restoration

Over repeated firing, pumps restore gradients.

---

# 442. BiologicalTime range in Chapter 12

```text
microseconds–milliseconds:
channel flicker / voltage changes

milliseconds:
pump cycles / action potentials

seconds:
plant electrical responses

minutes:
gradient decay after pump inhibition

longer:
osmotic adaptation / homeostasis
```

---

# 443. Molecular and cellular scales must remain coupled

The same Na+ ion class participates at multiple levels:

```text
atomic ion
→ channel permeation
→ local current
→ membrane voltage
→ action potential
→ neuronal signal
```

---

# 444. Representation ladder — membrane transport

```text
cell scale:
flux arrows / gradients

membrane scale:
transporters/channels

protein scale:
conformational states

pore scale:
selectivity filter

molecular scale:
hydrated ions / binding sites

atomic scale:
electrostatic contacts
```

---

# 445. Representation ladder — action potential

```text
whole neuron
→ moving voltage front

axon segment
→ membrane potential map

membrane patch
→ Na+/K+ channel populations

single channel
→ gating conformations

pore
→ ion passage
```

---

# 446. Do not render concentration gradients as fixed arrows in WorldState

Arrows are ViewState annotations.

WorldState should store actual concentrations.

---

# 447. Do not render electric field as literal colored fluid

Use field visualization only as an explanatory overlay.

---

# 448. Channel current direction depends on electrochemical gradient

The same open channel can support opposite flux if the driving force reverses.

---

# 449. Open does not mean active transport

A channel opening simply permits passive flow.

---

# 450. Pump direction can be mechanistically coupled and biased

Unlike passive transporter random exchange, energy input forces a useful cycle.

---

# 451. Passive transporter does not burn ATP

Do not add ATP icons to ordinary glucose uniport.

---

# 452. ATP-driven Na+ pump should not be animated as ATP "pushing" ions mechanically

ATP hydrolysis changes the pump's conformational energy landscape via phosphorylation.

---

# 453. Gradient-driven symport should not depict Na+ physically dragging glucose by contact

The source's "dragged" wording is conceptual.

Actual coupling occurs through shared transporter-binding/conformational states.

---

# 454. Ion pumps and channels are crowded among many membrane proteins

Avoid isolated textbook-protein-in-empty-bilayer visuals at native membrane scale.

---

# 455. Organelle lumen orientation remains Chapter 11 topology

An H+ pump in lysosome membrane must move protons toward the lumen according to its fixed protein orientation.

---

# 456. Cell polarity affects transport direction

The same epithelial cell performs uptake and release at different membrane domains.

---

# 457. Tight-junction barrier is required for vectorial epithelial transport

If apical and basolateral transporters intermix, directional tissue transport would be compromised.

---

# 458. Table 12–1 values are representative

Do not treat them as universal for every mammalian cell.

---

# 459. Resting membrane potential values are cell-type dependent

The source range is broad.

---

# 460. Channel subtype diversity must be data-driven

Do not collapse every K+ channel into a single universal protein entity.

---

# 461. Question 12–1A — transporter equation

A minimal transporter analogue of the enzyme equation is:

```text
T_out + S_out
↔
T-S
↔
T_in + S_in
```

with the transporter cycling between outward- and inward-facing conformations.

---

# 462. Question 12–1B — transporter/enzyme similarities

Both:

- bind selected molecules specifically
- form transient bound complexes
- are not consumed by one cycle
- can saturate when binding sites are occupied

---

# 463. Question 12–1C — why channel cannot use same ferry-like equation

A channel does not need to bind one ion and then undergo a complete alternating-access conformational cycle for each ion.

Once open, many ions can pass continuously through the pore.

---

# 464. Question 12–2 — partial Na+ pump inhibition in heart

Source logic:

```text
Na+ pump partially inhibited
→ intracellular Na+ rises / Na+ gradient weakens
→ Na+-Ca2+ antiport has less driving force for Ca2+ export
→ more Ca2+ remains available in cytosol
→ stronger contraction
```

---

# 465. Question 12–2 — excessive inhibition

Too much inhibition would severely compromise:

- Na+ gradient
- K+ gradient
- membrane electrical stability
- secondary transport

and therefore become dangerous/toxic.

### `SOURCE_DERIVED`

Do not turn this into dosing advice.

---

# 466. Question 12–3 — what can be learned from patch trace

From a single-channel or few-channel trace one can estimate:

- discrete current amplitude
- opening frequency
- open duration
- closed duration
- number of simultaneously open channels if multiple current levels appear

### `DO_NOT_INFER`

Exact channel count from Figure Q12–3 is not reconstructed here because the parsed source does not preserve the trace geometry reliably.

---

# 467. Question 12–3 — acetylcholine omitted

The source says the acetylcholine receptor opens only rarely without acetylcholine.

Therefore openings would become rare.

---

# 468. Question 12–3 — acetylcholine added only to cytosolic side

In the detached-patch geometry, the receptor's extracellular ligand-binding face remains inside the microelectrode.

Adding acetylcholine only to the exposed cytosolic bath should therefore not efficiently activate the receptor.

---

# 469. Question 12–4 — K+ equilibrium potential

Using:

```text
Co(K+) = 5 mM
Ci(K+) = 140 mM
```

and:

```text
V = 62 log10(Co/Ci)
```

gives:

```text
V_K
≈ -89.7 mV
≈ -90 mV
```

### `SOURCE_DERIVED`

---

# 470. Question 12–4 — Na+ equilibrium potential

Using:

```text
Co(Na+) = 145 mM
Ci(Na+) = 10 mM
```

gives:

```text
V_Na
≈ +72.0 mV
≈ +72 mV
```

---

# 471. Question 12–4 — predicted resting membrane potential

Because resting animal plasma membrane is much more permeable to K+ than Na+:

```text
V_rest
should lie much closer to V_K
than to V_Na
```

The chapter's example uses values near:

```text
-60 to -70 mV
```

for neurons/typical animal cells.

---

# 472. Question 12–4 — suddenly opening many Na+ channels

Membrane permeability shifts strongly toward Na+.

Therefore membrane potential moves rapidly toward:

```text
V_Na
```

and becomes much less negative / positive.

---

# 473. Question 12–4 — closing Na+ channels again

K+ permeability again dominates.

The membrane potential returns toward the negative resting/K+ equilibrium range.

---

# 474. Question 12–5 — action-potential answer under 100 words

```text
At rest, K+ leak channels make the axon interior negative. A sufficient depolarization opens voltage-gated Na+ channels, and Na+ enters down its electrochemical gradient, causing further depolarization and opening nearby Na+ channels. Na+ channels then inactivate while slower voltage-gated K+ channels open. K+ exits, repolarizing the membrane. Local Na+ entry depolarizes the next axon segment, regenerating the action potential. Na+ channel inactivation behind the wave prevents immediate backward propagation. Na+/K+ pumps later restore the long-term ion gradients.
```

---

# 475. Question 12–6 — myasthenia gravis source mechanism

The source states antibodies bind and inactivate muscle acetylcholine receptors.

Thus:

```text
motor neuron releases acetylcholine
but
postsynaptic cation channels fail to open adequately
→ muscle membrane depolarization is insufficient
→ muscle activation/contraction weakens
```

---

# 476. Question 12–7 — inhibitory Cl- channel

Opening GABA-gated Cl- channels permits negative charge to enter.

This opposes depolarization and therefore makes excitatory input less able to reach action-potential threshold.

---

# 477. Question 12–8 — converting passive transporter into ATP pump

Required conceptual modifications:

```text
1. add ATP-binding/hydrolysis step
2. couple ATP energy to transporter state transition
3. make outward/inward transitions chemically biased rather than freely symmetric
4. ensure solute binding/release occurs in an ordered cycle
5. reset transporter after product/ion release
```

---

# 478. Question 12–8 — why energy coupling is necessary

Without an energy-dependent bias:

```text
the transporter obeys equilibrium
and cannot sustain net uphill transport
```

---

# 479. Question 12–8 — phosphorylation caveat

Na+ and Ca2+ pumps use a phosphorylated intermediate in the source.

### `DO_NOT_INFER`

Do not claim every ATP-driven membrane pump universally uses the identical phosphoenzyme mechanism.

---

# 480. Question 12–9A

"The plasma membrane is highly impermeable to all charged molecules."

```text
FALSE AS WRITTEN
```

The lipid bilayer itself is highly impermeable, but the biological plasma membrane contains channels/transporters that allow selected charged solutes to cross.

---

# 481. Question 12–9B

"Channels have specific binding pockets like transporters."

```text
FALSE
```

The source distinguishes channel selectivity filters from transporter-style specific binding sites.

---

# 482. Question 12–9C

"Transporters are much faster than channels."

```text
FALSE
```

Channels can pass >10^6 ions/s and are much faster.

---

# 483. Question 12–9D

"Some H+ pumps are light-driven."

```text
TRUE
```

Example:

```text
bacteriorhodopsin
```

---

# 484. Question 12–9E

"Animal cells can contain open K+ channels while maintaining high cytosolic K+."

```text
TRUE
```

The electrical gradient can balance the concentration gradient, while Na+/K+ ATPase maintains the K+ concentration difference.

---

# 485. Question 12–9F

"Reversing a symport in the membrane turns it into an antiport."

```text
FALSE
```

Reversing orientation reverses both coupled solute directions together; they still move in the same relative direction.

---

# 486. Question 12–9G

"An action potential makes the axon membrane more negative."

```text
FALSE
```

The initial event is depolarization: membrane potential becomes less negative and can transiently become positive.

---

# 487. Question 12–10 — decreasing bilayer permeability

Source-supported ranking:

```text
N2
>
ethanol
>
water
>
glucose
>
Ca2+
>
RNA
```

### `SOURCE_DERIVED`

Ca2+ and RNA are both extremely poorly permeant without proteins; RNA is additionally very large and highly charged.

---

# 488. Question 12–11A — symport versus antiport

Similarity:

```text
both are coupled transporters
using one solute's gradient to move another
```

Difference:

```text
symport:
same direction

antiport:
opposite directions
```

---

# 489. Question 12–11B — active versus passive transport

Similarity:

```text
both move solutes across membranes
```

Difference:

```text
passive:
down electrochemical gradient

active:
against gradient using energy
```

---

# 490. Question 12–11C — membrane potential versus electrochemical gradient

Similarity:

```text
both influence charged-solute movement
```

Difference:

```text
membrane potential:
electrical voltage across membrane

electrochemical gradient:
net driving force on a particular charged solute,
combining voltage and concentration
```

---

# 491. Question 12–11D — pump versus transporter

Similarity:

```text
a pump is a transporter
```

Difference:

```text
not every transporter is a pump;
pumps perform active transport
```

---

# 492. Question 12–11E — axon versus telephone wire

Similarity:

```text
both transmit information over distance
```

Difference:

```text
axon signal is regenerated by ion-channel state changes
in a living membrane;
it is not simply electron conduction through metal
```

---

# 493. Question 12–11F — solute versus ion

Similarity:

```text
an ion can be a dissolved solute
```

Difference:

```text
solute:
any dissolved substance

ion:
electrically charged atom/molecule
```

---

# 494. Question 12–12 — bridge versus ferry analogy

```text
channel ≈ bridge:
continuous pathway exists while open;
many travelers can cross without the bridge moving

transporter ≈ ferry:
cargo binds;
carrier changes orientation;
cargo is released;
carrier resets
```

The analogy also explains why channels are usually much faster.

---

# 495. Question 12–13 — acetylcholine uptake into synaptic vesicles

The observations imply an ATP-created H+ gradient.

Likely source-consistent mechanism:

```text
ATP-driven H+ pump
→ pumps H+ into vesicle
→ vesicle lumen becomes H+-rich

H+-acetylcholine antiport
→ H+ moves out downhill
→ acetylcholine moves in uphill
```

---

# 496. Question 12–13 — why ATP is required

ATP powers formation of the proton gradient.

It need not be hydrolyzed directly by the acetylcholine transporter.

---

# 497. Question 12–13 — why Na+ is unnecessary

The coupled driving ion is H+, not Na+.

---

# 498. Question 12–13 — why raising external pH increases uptake

Higher external pH means fewer H+ outside the vesicle.

That steepens the outward H+ gradient from lumen to external solution and increases the energy available to drive acetylcholine inward.

---

# 499. Question 12–13 — why H+ ionophore/permeability inhibits uptake

If H+ can leak freely across the membrane:

```text
proton gradient collapses
→ stored energy disappears
→ active acetylcholine accumulation fails
```

---

# 500. Question 12–14 — membrane electric-field strength

Given:

```text
ΔV = 70 mV = 0.070 V

membrane thickness = 4.5 nm
= 4.5 × 10^-9 m
```

Field:

```text
E = V/d
≈ 1.56 × 10^7 V/m
≈ 1.56 × 10^5 V/cm
```

### `SOURCE_DERIVED`

---

# 501. Question 12–14 — one-centimeter air-gap analogy

Applying:

```text
~1.56 × 10^5 V/cm
```

across a 1-cm gap corresponds to about:

```text
156,000 V
```

The field would be extraordinarily large and would be expected to cause electrical breakdown/arcing of air rather than remain quietly supported.

### `SOURCE_DERIVED`

---

# 502. Question 12–15 setup — pump orientation

All pumps initially have their normally cytosolic side facing:

```text
outside the vesicle
```

Therefore the source-normal directions are inverted relative to the vesicle:

```text
Na+:
outside solution → vesicle lumen

K+:
vesicle lumen → outside solution
```

---

# 503. Question 12–15A — Na+ and K+, no ATP

Without ATP:

```text
active pumping does not proceed
```

No sustained gradient is created.

---

# 504. Question 12–15B — add ATP

ATP on the side facing the pump's cytosolic domain enables cycles.

Result:

```text
Na+ accumulates inside vesicle
K+ is depleted from vesicle / accumulates outside
```

under the question's simplified 1:1 stoichiometry.

---

# 505. Question 12–15C — Na+ only, no K+

The pump cycle cannot complete normally because K+ binding is an obligatory step.

It stalls rather than continually hydrolyzing ATP and moving Na+ indefinitely.

---

# 506. Question 12–15D — half pumps reversed

Equal populations oriented in opposite directions generate opposing Na+/K+ fluxes.

With symmetric starting solutions, their net gradient-building effects approximately cancel, although pumps can still consume ATP.

---

# 507. Question 12–15E — K+ leak channels added

The pump-generated K+ concentration gradient is dissipated by passive K+ leakage.

A membrane potential can also develop as charge moves.

The K+ gradient therefore cannot be maintained as strongly as in a K+-impermeable vesicle.

---

# 508. Question 12–16 — three gating mechanisms

```text
1. mechanical force
2. ligand binding
3. membrane voltage
```

---

# 509. Question 12–17 — volume conversion

Cell volume:

```text
1000 µm³
=
10^-12 L
```

---

# 510. Question 12–17 — required concentration increase

```text
5 µM - 0.1 µM
=
4.9 µM
```

---

# 511. Question 12–17 — Ca2+ ions required

Moles required:

```text
4.9 × 10^-6 mol/L
×
10^-12 L
=
4.9 × 10^-18 mol
```

Number of ions:

```text
≈ 2.95 × 10^6 Ca2+ ions
```

---

# 512. Question 12–17 — total influx rate

```text
1000 channels
×
10^6 ions/channel/s
=
10^9 ions/s
```

---

# 513. Question 12–17 — open time

```text
2.95 × 10^6 ions
/
10^9 ions/s
≈ 2.95 × 10^-3 s
```

Answer:

```text
~3 ms
```

### `SOURCE_DERIVED`

This ignores Ca2+ buffering, pumping, sequestration, and nonuniform spatial concentration because the question instructs a simplified calculation.

---

# 514. Question 12–18 — likely driving ion for amino-acid symport

In animal plasma membrane:

```text
Na+
```

is the most likely coupling ion.

---

# 515. Question 12–18 — does symport directly hydrolyze ATP?

```text
No
```

The symporter consumes energy stored in the Na+ electrochemical gradient.

---

# 516. Question 12–18 — is ATP ultimately consumed?

```text
Yes, indirectly
```

The Na+/K+ ATPase hydrolyzes ATP to maintain the Na+ gradient.

---

# 517. Question 12–19A — why Cl- channel supports endosomal acidification

H+ pumping into the lumen moves positive charge inward.

Without compensating charge movement:

```text
lumen becomes increasingly positive
→ electrical potential opposes additional H+ entry
```

Cl- entry supplies balancing negative charge, allowing continued H+ accumulation.

---

# 518. Question 12–19B — are Cl- channels absolutely required?

Not specifically, if another ion pathway can provide equivalent charge compensation.

What is required is relief of the opposing membrane potential, not necessarily Cl- itself.

---

# 519. Question 12–20 — source data

| Carbon source concentration (mM) | Compound A transport | Compound B transport |
|---:|---:|---:|
| 0.1 | 2.0 | 18 |
| 0.3 | 6.0 | 46 |
| 1.0 | 20 | 100 |
| 3.0 | 60 | 150 |
| 10.0 | 200 | 182 |

Units:

```text
µmol/min
```

---

# 520. Question 12–20A — pattern of Compound A

Compound A is nearly linear:

```text
rate ∝ concentration
```

across the table.

---

# 521. Question 12–20A — pattern of Compound B

Compound B approaches a plateau:

```text
transport becomes saturable
```

---

# 522. Question 12–20B — Compound A identity

Best source-consistent assignment:

```text
Compound A = ethanol
```

because ethanol is small and uncharged enough to diffuse directly through lipid bilayer, producing a roughly linear concentration-dependent flux.

---

# 523. Question 12–20B — Compound B identity

```text
Compound B = acetate
```

because acetate is charged and therefore requires a transport protein; transporter binding sites can saturate.

---

# 524. Question 12–20 — Dr. Schwips inhalation joke

The compound whose excessive inhalation would plausibly impair labeling is:

```text
ethanol
```

This is the source's humorous framing.

---

# 525. Question 12–21 — why acetylcholine channel yields mainly Na+ influx

At resting membrane potential:

```text
Na+:
steep inward concentration gradient
+
electrical attraction inward
→ strong inward electrochemical force

K+:
outward concentration gradient
opposed by inward electrical force
→ much smaller net force

Ca2+:
strong inward gradient but far lower extracellular abundance than Na+
```

Therefore the largest net current through the nonselective cation channel is primarily Na+ influx in the source context.

---

# 526. Question 12–22 — receptor subtype diversity and pharmaceuticals

The diversity is potentially valuable because:

```text
different subtypes
→ different affinities/kinetics/distributions
→ possibility of subtype-selective drugs
→ potentially more targeted effects
```

It also makes drug design more complex.

The chapter emphasizes the opportunity for selectivity.

---

# 527. Transport-protein schema

```yaml
membrane_transport_protein:
  id:
  membrane:
  class:
    - transporter
    - channel
  solutes:
  selectivity:
  orientation:
  passive_or_active:
  maximum_rate:
  current_state:
  provenance:
```

---

# 528. Solute-compartment schema

```yaml
solute_compartment_state:
  solute:
  compartment:
  concentration:
  free_or_bound:
  charge:
  osmotic_particle_count:
  biological_time:
```

---

# 529. Passive-transport schema

```yaml
passive_transport:
  solute:
  membrane:
  pathway:
    - lipid_bilayer
    - transporter
    - channel
  concentration_gradient:
  electrical_gradient:
  electrochemical_gradient:
  permeability:
  net_flux:
```

---

# 530. Pump schema

```yaml
pump:
  id:
  membrane:
  pump_class:
    - ATP_driven
    - gradient_driven
    - light_driven
  transported_solutes:
  stoichiometry:
  orientation:
  energy_source:
  cycle_state:
  turnover_time:
```

---

# 531. Na-K ATPase state schema

```yaml
NaK_ATPase:
  cytosolic_Na_bound:
  ATP_bound:
  phosphorylation_state:
  outward_open:
  extracellular_K_bound:
  dephosphorylation_state:
  inward_open:
  Na_out_per_cycle: 3
  K_in_per_cycle: 2
```

---

# 532. Gradient-coupled transporter schema

```yaml
coupled_transporter:
  coupling_type:
    - symport
    - antiport
  driving_solute:
  driven_solute:
  binding_cooperativity:
  driving_gradient:
  net_stoichiometry:
  cycle_state:
```

---

# 533. Osmosis schema

```yaml
osmosis:
  membrane:
  water_permeability:
  aquaporin_density:
  osmolarity_side_A:
  osmolarity_side_B:
  water_flux:
  cell_volume:
  pressure:
```

---

# 534. Aquaporin schema

```yaml
aquaporin:
  membrane:
  tetramer:
  monomer_pores: 4
  water_selective: true
  ion_permeability: low
  current_water_flux:
```

---

# 535. Ion-channel schema

```yaml
ion_channel:
  id:
  membrane:
  ion_selectivity:
  pore_geometry:
  selectivity_filter:
  gating_type:
    - leak
    - mechanical
    - ligand
    - voltage
    - light
  state:
    - closed
    - open
    - inactivated
  open_probability:
  conductance:
  current:
```

---

# 536. Selectivity-filter schema

```yaml
selectivity_filter:
  channel:
  diameter:
  lining_groups:
  ion:
  hydration_shell_before:
  dehydration_required:
  transient_coordination:
  permeation_allowed:
```

---

# 537. Membrane-potential schema

```yaml
membrane_potential:
  membrane:
  voltage_mV:
  inside_relative_to_outside:
  surface_charge_separation:
  ion_permeabilities:
  ion_concentrations:
  biological_time:
```

---

# 538. Nernst-analysis schema

```yaml
nernst_equilibrium:
  ion:
  charge:
  temperature_C:
  Co:
  Ci:
  equilibrium_potential_mV:
  assumptions:
```

---

# 539. Patch-clamp experiment schema

```yaml
patch_clamp:
  membrane_patch:
  configuration:
    - cell_attached
    - detached
  controlled_voltage:
  bath_composition:
  pipette_composition:
  channels_present:
  current_trace:
  current_pA:
  opening_events:
```

---

# 540. Action-potential schema

```yaml
action_potential:
  membrane_segment:
  resting_voltage:
  threshold_voltage:
  Na_channel_state:
  K_channel_state:
  membrane_voltage:
  Na_flux:
  K_flux:
  refractory_state:
  propagation_position:
  biological_time:
```

---

# 541. Synapse schema

```yaml
chemical_synapse:
  presynaptic_terminal:
  postsynaptic_cell:
  cleft_width_nm:
  voltage_gated_Ca_channels:
  synaptic_vesicles:
  neurotransmitter:
  postsynaptic_receptors:
  clearance_mechanism:
```

---

# 542. Optogenetic schema

```yaml
optogenetic_perturbation:
  engineered_channel:
  expressed_cell_population:
  light_wavelength_or_color:
  illumination_state:
  ion_flux:
  membrane_voltage_change:
  cell_activity_change:
  engineered_status: true
```

---

# 543. WorldState versus AnalysisState — electrochemical gradient

Concentrations and membrane voltage belong to WorldState.

The calculated electrochemical gradient is an analytical property derived from them.

---

# 544. WorldState versus ViewState — arrows

Direction arrows representing "downhill" transport belong to ViewState.

The underlying driving force belongs to quantitative state.

---

# 545. WorldState versus ExperimentState — patch clamp

The channel and membrane are biological.

The glass electrode, voltage clamp, current trace, and controlled solutions are experimental.

---

# 546. WorldState versus ExperimentState — squid perfusion

Removing axoplasm and replacing it with synthetic ion solution creates an experimental system, not a native neuron state.

---

# 547. WorldState versus ExperimentState — optogenetics

Native mammalian neurons do not normally contain channelrhodopsin.

The engineered channel must remain tagged as experimental.

---

# 548. Charge-conservation rule

Ion movement across a membrane changes:

- particle number
- compartment concentration
- local charge balance
- possibly membrane potential

A transport animation that moves ions without updating these variables is scientifically incomplete.

---

# 549. Water-volume coupling rule

Osmosis changes:

- compartment water content
- volume
- pressure
- concentration of solutes

---

# 550. Volume change feeds back on concentration

If a cell swells while solute amount remains fixed:

```text
concentration decreases
```

This feedback should eventually be represented.

---

# 551. Gradient-driven transport consumes stored free energy

A gradient is not a decorative arrow; it is a depletable thermodynamic resource.

---

# 552. Ion channels expose existing gradient energy

An open channel does not create the gradient it uses.

---

# 553. Primary active transport establishes nonequilibrium

Pumps continuously spend energy to maintain concentrations away from equilibrium.

---

# 554. Cell transport is a steady-state system

At rest:

```text
leaks continue
+
pumps continue
+
net concentrations stay approximately stable
```

---

# 555. "Resting" does not mean molecular inactivity

Pumps and leak channels remain active.

---

# 556. Membrane potential is maintained dynamically

It is a steady-state electrical property arising from ion gradients and selective permeability.

---

# 557. Neuronal signaling is nonequilibrium

The ability to fire repeatedly depends on metabolically maintained ion gradients.

---

# 558. Source quantitative register

| Quantity | Chapter 12 value/context | Status |
|---|---:|---|
| protein-free bilayer water:ion permeability ratio | ~10^9 | verify |
| Na+ inside | 5–15 mM | source representative |
| Na+ outside | 145 mM | source representative |
| K+ inside | 140 mM | source representative |
| K+ outside | 5 mM | source representative |
| free Mg2+ inside | 0.5 mM | source representative |
| Mg2+ outside | 1–2 mM | source representative |
| total cellular Mg2+ | ~20 mM | source |
| free Ca2+ inside | 10^-4 mM | source representative |
| Ca2+ outside | 1–2 mM | source representative |
| total cellular Ca2+ | 1–2 mM | source |
| intracellular pH | ~7.2 | source representative |
| extracellular pH | ~7.4 | source representative |
| Cl- inside | 5–15 mM | source representative |
| Cl- outside | 110 mM | source representative |
| animal resting potential range | -20 to -200 mV | verify |
| cell water content | ~70% by weight | source |
| Na+/K+ ATPase stoichiometry | 3 Na+ out / 2 K+ in | source |
| Na+ pump cycle | ~10 ms | verify |
| Na+ pump ATP use | ≥~30% animal-cell ATP | verify |
| Na+ gradient | ~10–30× outside>inside | source |
| K+ gradient | ~10–30× inside>outside | source |
| channel ion flux | >10^6 ions/s | verify |
| channel vs transporter speed | ~1000× | verify |
| membrane surface charge layer | <1 nm | source |
| 6000 K+/µm² voltage example | ~100 mV | verify |
| K+ abundance comparison | ~70,000× larger pool | verify |
| Nernst coefficient at 37°C | 62 mV/decade | source |
| single-channel current | ~1 pA | verify |
| human K+ channel genes | ~80 | source-era |
| hair-link displacement | ~0.04 nm | verify |
| Piezo subunits | 3 | source |
| Piezo helices/subunit | 36 | source |
| Venus-flytrap closure | <0.5 s | source |
| axon length | <1 mm to >1 m | source |
| max dendritic inputs | ~100,000 | source-era |
| action-potential speed | up to 100 m/s | verify |
| squid giant-axon diameter | ~1 mm | source |
| squid giant-axon length | up to ~10 cm | source |
| sample resting voltage | -60 mV | source figure |
| sample threshold | ~-40 mV | source figure |
| sample AP peak | ~+40 mV | source figure |
| Na+ inactivation | ~1 ms | source |
| brain energy fraction | ~20% | source-era |
| synaptic cleft | ~20 nm | source |
| external:cytosolic Ca2+ at terminal | >1000× | source |
| acetylcholine receptor subunits | 5 | source |
| acetylcholine binding sites | 2 | source |
| Q12–4 K+ equilibrium potential | ~-90 mV | derived |
| Q12–4 Na+ equilibrium potential | ~+72 mV | derived |
| Q12–14 membrane electric field | ~1.56×10^5 V/cm | derived |
| Q12–17 Ca2+ channel open time | ~3 ms | derived |

---

# 559. Quantitative verification queue

Before promoting values into runtime constants, verify externally:

## Ion concentrations

- cell-type-specific Na+/K+/Cl-/Ca2+ concentrations
- organelle ion concentrations
- free versus total Ca2+/Mg2+
- pH by compartment

## Transporter kinetics

- Na+/K+ pump turnover
- ATP consumption fractions
- glucose transporter rates
- symporter stoichiometries
- Ca2+ pump turnover

## Channel physics

- single-channel conductance
- open probabilities
- gating rates
- filter geometry
- hydration energetics

## Neuronal electrophysiology

- resting potentials by neuron type
- threshold voltages
- action-potential speeds
- synaptic-cleft dimensions
- refractory times

## Osmosis

- aquaporin permeability
- cell osmolarity
- turgor pressure
- contractile-vacuole rates

---

# 560. Source-era caution register

Do not silently universalize:

```text
-20 to -200 mV resting range
30%+ ATP for Na+ pump
20% brain-energy statement
80 human K+ channel genes
0.04-nm auditory displacement
100 m/s conduction speed
100,000 synaptic inputs
drug descriptions
disorder prevalence statements
```

---

# 561. Do-not-overinterpret register

Do not infer:

```text
all molecules cross membranes at the same rate
FALSE

all polar molecules are completely impermeable
FALSE

all charged solutes cross freely if small enough
FALSE

membrane potential means whole cytosol carries net negative charge
FALSE

passive transport means no molecular motion in reverse direction
FALSE

active transport always hydrolyzes ATP directly
FALSE

all transporters are pumps
FALSE

all pumps are ATPases
FALSE

channels perform active transport
FALSE

a transporter is an open pore
FALSE

a channel must flip conformation for every ion
FALSE

Na+ concentration alone determines Na+ flux
FALSE

K+ concentration gradient alone determines K+ flux
FALSE

osmosis is movement of solute
FALSE

aquaporin pumps water
FALSE

Na+/K+ ATPase transports equal Na+ and K+
FALSE

symport means both solutes move downhill
FALSE

antiport means active transport in every case by definition
OVERGENERALIZATION

ion channels are continuously open
FALSE

selectivity depends only on ion size
FALSE

all gated channels open deterministically when stimulated
FALSE

open probability = pore diameter
FALSE

depolarization means membrane becomes more negative
FALSE

action potential = one packet of Na+ traveling down axon
FALSE

action-potential propagation is passive diffusion only
FALSE

voltage-gated Na+ channel closed state = inactivated state
FALSE

refractory period is caused only by K+ concentration depletion
FALSE

synaptic electrical signal jumps directly across cleft
FALSE

neurotransmitter itself is intrinsically excitatory/inhibitory independent of receptor
FALSE

GFP/channelrhodopsin experimental proteins are native neuronal components
FALSE

membrane voltage arrows are literal objects in WorldState
FALSE
```

---

# 562. Cross-chapter dependencies

## Chapter 2

Provides:

- diffusion
- water
- ions
- polarity
- hydrophobicity
- electrostatics

## Chapter 3

Provides:

- free-energy coupling
- ATP hydrolysis
- nonequilibrium steady state

## Chapter 4

Provides:

- protein conformational change
- ligand binding
- allostery

## Chapter 11

Provides:

- membrane bilayer
- transmembrane proteins
- membrane asymmetry
- membrane domains
- tight junctions

## Chapter 14

Will refine:

- proton gradients
- chemiosmosis
- ATP synthase
- mitochondrial/chloroplast energetics

## Chapter 15

Will refine:

- synaptic-vesicle exocytosis
- organelle acidification context
- membrane trafficking

## Chapter 16

Will refine:

- Ca2+ signaling
- receptor signaling
- intracellular second messengers

## Chapter 17

Will refine:

- muscle contraction
- cytoskeletal force generation

## Chapter 19

Will refine:

- fertilization-associated Ca2+ signaling

## Chapter 20

Will refine:

- gap junctions
- epithelial junctions
- tissue organization
```

---

# 563. Chapter 12 core causal model

```text
LIPID BILAYER
blocks most hydrophilic solutes

TRANSPORT PROTEINS
create selective pathways

PASSIVE TRANSPORT
uses existing gradients

ACTIVE TRANSPORT
uses energy to build gradients

ATP PUMPS
create nonequilibrium ion distributions

ION GRADIENTS
store free energy

GRADIENT-DRIVEN PUMPS
spend one gradient to move another solute uphill

AQUAPORINS
allow water to respond rapidly to osmotic gradients

K+ LEAK CHANNELS
make resting membrane chiefly K+-permeable

K+ GRADIENT + SELECTIVE PERMEABILITY
generate negative resting potential

VOLTAGE-GATED Na+ CHANNELS
produce regenerative depolarization

VOLTAGE-GATED K+ CHANNELS
repolarize membrane

VOLTAGE-GATED Ca2+ CHANNELS
link electrical signal to neurotransmitter release

TRANSMITTER-GATED CHANNELS
convert chemical signal back into voltage change
```

---

# 564. Chapter 12's deepest project lesson

The cell membrane is simultaneously:

```text
a chemical separator
a selective gate
an energy-storage device
an electrical capacitor-like boundary
a signaling surface
a mechanical sensor
a computational interface
```

The same physical bilayer that blocks ions also makes ion gradients and membrane voltage possible.

That is the chapter's central continuity:

```text
barrier
→ gradient
→ stored energy
→ selective channel opening
→ electrical signal
→ behavior
```

---

# 565. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 12: “Transport Across Cell Membranes.”**

Printed pages:

```text
405–444
```

PDF pages reviewed:

```text
440–479
```

Major sections:

```text
PRINCIPLES OF TRANSMEMBRANE TRANSPORT

TRANSPORTERS AND THEIR FUNCTIONS

ION CHANNELS AND THE MEMBRANE POTENTIAL

ION CHANNELS AND NERVE CELL SIGNALING
```

Supporting material reviewed:

```text
Figures 12–1 through 12–46

Table 12–1:
A Comparison of Ion Concentrations Inside and Outside a Typical Mammalian Cell

Table 12–2:
Some Examples of Transmembrane Pumps

Table 12–3:
Some Examples of Ion Channels

How We Know:
Squid Reveal Secrets of Membrane Excitability

Essential Concepts

Questions 12–1 through 12–22
```

---

# 566. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- O2/CO2 simple diffusion
- facilitated transport definition
- permeability ordering
- O2/CO2/H2O/ethanol/glycerol/glucose molecular masses
- 10^9 water:ion permeability comparison
- transporter versus channel distinction
- channel size/charge selectivity
- transporter binding-site selectivity
- all Table 12–1 ion concentrations
- bulk electroneutrality
- membrane-potential definition
- resting-potential source range
- passive transport
- active transport
- pump definition
- electrochemical gradient
- Na+ versus K+ gradient logic
- 70%-water source statement
- aquaporin tetramer
- single-file water
- H+ exclusion
- osmolarity
- osmosis
- contractile vacuole
- animal osmotic control
- turgor pressure
- passive glucose transporter
- >=12 membrane spans
- outward-open / occluded / inward-open states
- D- versus L-glucose selectivity
- three pump-energy classes
- Na+/K+ ATPase
- 3 Na+ out / 2 K+ in
- phosphorylation cycle
- ouabain source mechanism
- ~10-ms cycle
- ≥30% ATP source value
- Na+/K+ 10–30× gradients
- Ca2+ source concentrations
- plasma-membrane and ER Ca2+ pumps
- sarcoplasmic reticulum
- two-Ca2+ source model
- symport
- antiport
- uniport
- Na+-glucose symport
- cooperative binding
- epithelial polarity
- tight-junction barrier
- Na+-H+ antiport
- plant/fungal/bacterial H+ gradients
- organelle H+ pumps
- all Table 12–2 entries
- ion-channel selectivity filter
- hydration-shell shedding
- >10^6 ions/s source statement
- 1000× source rate comparison
- K+ leak channels
- thin charge layer
- 6000 K+/µm² source example
- Nernst equation
- 62 mV per tenfold ratio
- patch clamp
- ~1-pA source current
- stochastic channel flicker
- all-or-none single-channel opening
- ~80 K+ channel genes source statement
- mechanical / ligand / voltage gating
- auditory stereocilia
- ~0.04-nm source displacement
- Piezo trimer
- 36 TM helices/subunit
- Venus flytrap
- Mimosa
- neuron anatomy
- axon-length range
- dendritic input source value
- action-potential regeneration
- ~100-m/s source maximum
- squid giant axon
- 1-mm diameter
- 10-cm source length
- axoplasm replacement experiment
- Hodgkin/Huxley source history
- voltage-gated Na+ positive feedback
- -60 / -40 / +40-mV example values
- Na+ channel inactivation
- delayed voltage-gated K+ opening
- refractory period
- forward propagation logic
- brain-energy source statement
- synapse definition
- ~20-nm synaptic cleft
- synaptic vesicle
- presynaptic Ca2+ influx
- >1000× Ca2+ source ratio
- neurotransmitter clearance
- transmitter-gated ion channels
- acetylcholine receptor structure
- five subunits
- two ACh binding sites
- excitatory cation channels
- inhibitory Cl- channels
- curare/strychnine source examples
- all Table 12–3 entries
- source drug examples and era caveats
- synaptic integration
- channelrhodopsin
- optogenetics
- all 22 question-derived answers/calculations
- all schemas
- all WorldState/ViewState/ExperimentState distinctions
- all quantitative-register values
- all `DO_NOT_INFER` rules
- source trace

---

# END OF CHAPTER 12 CANON

Recommended repository destination:

```text
science/chapters/12_transport_across_cell_membranes.md
```

Recommended commit message:

```text
science: add Chapter 12 membrane transport canon
```

Do not begin Chapter 13 merely because this file exists.

Chapter 13 will move from membrane transport to how cells obtain usable chemical energy from food molecules, including glycolysis, pyruvate oxidation, the citric acid cycle, activated carriers, electron transfer, fermentation, and the metabolic logic that eventually feeds the membrane-based energy systems developed further in Chapter 14.
