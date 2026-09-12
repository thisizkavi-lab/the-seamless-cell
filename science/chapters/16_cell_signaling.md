---
title: "The Seamless Cell — Science Canon — Chapter 16"
subtitle: "Cell Signaling"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 16, printed pages 553–594 (PDF pages 588–629)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 16 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 16 turns the cell from a compartmentalized biochemical system into an information-processing system. The chapter explains how cells detect external conditions, convert extracellular information into intracellular state changes, amplify or suppress signals, integrate multiple inputs, and ultimately alter metabolism, movement, secretion, gene expression, survival, growth, or differentiation.

The central causal pattern is:

```text
signal source
→ extracellular signal
→ receptor
→ receptor state change
→ intracellular signaling network
→ effector proteins
→ cell response
```

But the chapter repeatedly emphasizes that this is not a simple one-way chain. Real signaling contains:

```text
branching
amplification
feedback
adaptation
cross-talk
signal integration
spatial localization
temporal control
active shutoff
```

For The Seamless Cell, the key architectural rule is:

```text
A signaling pathway is a dynamic state-transition network,
not a decorative arrow diagram.
```

Every activation event must have a location, state, trigger, lifetime, and shutoff mechanism.

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 16.
- `SOURCE_SCALE` — explicit numerical value, concentration, time, count, or ratio from the source.
- `SOURCE_MODEL` — mechanistic, historical, or pedagogical model presented by the source.
- `SOURCE_DERIVED` — direct inference or calculation from source facts.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — a textbook statement that can date or vary with context and must not be silently treated as a universal modern constant.
- `SOURCE_HYPOTHESIS` — evolutionary or mechanistic interpretation presented as a model.
- `PROJECT_CONSTRAINT` — simulation/visualization architecture rule for The Seamless Cell.
- `VERIFY_QUANT` — source number retained but not promoted to precise runtime truth until externally checked.
- `LATER_CHAPTER_REFINEMENT` — deeper treatment belongs to another chapter or future external verification.
- `DO_NOT_INFER` — hard guardrail against unsupported generalization.

## Chapter map

```text
GENERAL PRINCIPLES OF CELL SIGNALING

G-PROTEIN-COUPLED RECEPTORS

ENZYME-COUPLED RECEPTORS
```

The chapter also covers:
- contact-dependent signaling
- intracellular/nuclear receptors
- plant signaling
- signaling-network integration

Supporting material:

```text
Figures 16–1 through 16–44
Tables 16–1 through 16–4
How We Know: Untangling Cell Signaling Pathways
Essential Concepts
Questions 16–1 through 16–23
Official textbook answers to Questions 16–1 through 16–23
```

# 1. Cells are information-processing systems

Single cells and multicellular organisms must detect environmental and intercellular information and alter behavior appropriately. Signaling therefore links sensing to action.

# 2. Signal transduction

`signal transduction` = conversion of one form of signal into another.

In cell signaling:
```text
extracellular signal
→ receptor
→ intracellular signal
```

# 3. Signaling cell

A cell that produces an extracellular signal molecule.

# 4. Target cell

A cell capable of detecting and responding to a signal because it possesses an appropriate receptor.

# 5. Receptor

A protein that recognizes a particular signal molecule and initiates a response.

# 6. Signal reception is selective

A cell can be surrounded by many signals but respond only to the subset for which it expresses suitable receptors.

# 7. Extracellular signal chemistry is diverse

Signals can include:
- proteins
- peptides
- amino-acid derivatives
- nucleotides
- steroids
- fatty-acid derivatives
- gases

# 8. Four major signaling styles

The source emphasizes:
```text
endocrine
paracrine / autocrine
neuronal
contact-dependent
```

# 9. Endocrine signaling

Hormones are secreted into circulatory fluid and distributed broadly. Target specificity comes primarily from receptor expression, not from restricting the hormone to one destination.

# 10. Insulin as endocrine example

Insulin is produced by pancreatic β cells and acts on multiple tissues to regulate nutrient-related physiology.

# 11. Paracrine signaling

A locally released signal diffuses through extracellular fluid and affects nearby cells.

# 12. Autocrine signaling

A cell responds to a local signal molecule that it itself produces.

# 13. Autocrine cancer source example

`SOURCE_ERA_STATEMENT`: the chapter notes that cancer cells can sometimes use autocrine signaling to support their own survival/proliferation.

# 14. Neuronal signaling

A neuron sends an electrical signal along its axon and converts it to a chemical signal at a synapse by neurotransmitter release.

# 15. Axon length source example

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
>1 meter
```
for axons extending from the spinal cord to the human big toe.

# 16. Action-potential speed source value

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~100 m/s
```
for neuronal electrical signaling.

# 17. Synaptic-gap source value

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
<100 nm
```
for the narrow extracellular gap in the source description.

# 18. Synaptic chemical-transfer time

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
<1 ms
```
for neurotransmitter diffusion across the synaptic gap in the source example.

# 19. Contact-dependent signaling

A membrane-bound signal molecule on one cell binds a receptor on an adjacent cell. No freely secreted mediator is required.

# 20. Delta–Notch is contact-dependent

Later in the chapter, Delta and Notch provide the major mechanistic example of this signaling class.

# 21. Table 16–1 hormone examples

The source examples include epinephrine, cortisol, estradiol, insulin, testosterone, thyroid hormone, and the plant hormone ethylene.

# 22. Table 16–1 local-mediator examples

The source examples include EGF, PDGF, NGF, histamine, and nitric oxide.

# 23. Table 16–1 neurotransmitter examples

The source includes acetylcholine and GABA.

# 24. Table 16–1 contact signal example

Delta is listed as a transmembrane contact-dependent signal involved in preventing adjacent developing cells from adopting the same fate.

# 25. Two broad receptor locations

Extracellular signals fall into two practical classes:
```text
large / hydrophilic
→ cell-surface receptors

small / hydrophobic enough to cross membrane
→ intracellular receptors
```

# 26. Cell-surface receptor requirement

Large or hydrophilic signal molecules cannot freely cross the plasma membrane and therefore rely on transmembrane receptors.

# 27. Intracellular receptor requirement

Small hydrophobic signal molecules can cross the plasma membrane and bind receptors in cytosol or nucleus.

# 28. Signal molecule alone is not the message

A cell's response depends on:
- receptor identity
- intracellular relay machinery
- available effector proteins
- cell state
- other simultaneous signals

# 29. Same signal, different response

Acetylcholine can:
- slow heart pacemaker firing
- stimulate salivary secretion
- trigger skeletal-muscle contraction

depending on receptor/pathway context.

# 30. Different receptors can recognize the same ligand

Acetylcholine acts through a GPCR in heart cells and an ion-channel-coupled receptor in skeletal muscle.

# 31. Receptor abundance source statement

`SOURCE_SCALE` / `VERIFY_QUANT`: the source says a typical cell can express each receptor class in:
```text
tens to hundreds of thousands of copies
```
for many receptors.

# 32. Combinatorial signaling

Cells respond to combinations of signals. The joint response can differ qualitatively from the sum of individual responses because pathways interact.

# 33. Survival signals

The source model states that many animal cells require extracellular survival signals to avoid apoptosis.

# 34. Growth/division signals

Additional signals can be required to stimulate growth and proliferation.

# 35. Differentiation signals

Distinct signal combinations can drive specialized cell differentiation.

# 36. Fast signaling responses

If a pathway modifies proteins already present, responses can occur in milliseconds to minutes.

# 37. Slow signaling responses

If a pathway requires altered gene expression and new protein synthesis, responses can take minutes to hours.

# 38. Acetylcholine contraction timescale

`SOURCE_SCALE` / `VERIFY_QUANT`: skeletal muscle contraction can begin within milliseconds after signaling.

# 39. Salivary secretion timescale

`SOURCE_SCALE` / `VERIFY_QUANT`: source describes secretion occurring within roughly a minute.

# 40. Growth/division timescale

Cell growth/division responses to signaling can require many hours because gene-expression programs must change.

# 41. Intracellular signaling pathway

A chain/network of intracellular molecules that carries information from receptor to effectors.

# 42. Effector protein

A protein whose altered activity directly changes cell behavior—for example a metabolic enzyme, transcription regulator, or cytoskeletal protein.

# 43. Relay

Signaling components pass information from one molecular state to another.

# 44. Amplification

One active component generates or activates many downstream molecules, increasing response magnitude.

# 45. Integration

A signaling molecule can receive inputs from multiple pathways and generate one combined output.

# 46. Distribution

A pathway can branch so one signal affects multiple effectors simultaneously.

# 47. Feedback

Downstream activity can alter upstream signaling components.

# 48. Positive feedback

Downstream signaling increases earlier pathway activity, potentially generating switch-like or explosive responses.

# 49. Negative feedback

Downstream signaling suppresses earlier pathway activity, reducing or reshaping the response.

# 50. Negative feedback can generate oscillation

The source notes delayed negative feedback can lead to repeated rises/falls in signaling activity.

# 51. Scaffold proteins

Scaffolds bring signaling components into proximity, increasing localization, speed, efficiency, and selectivity.

# 52. Signaling must turn off

Every useful activation step requires an inactivation mechanism. Resetting components is essential for repeatable signaling and temporal control.

# 53. Phosphorylation switches

Protein kinases add phosphate groups; protein phosphatases remove them.

# 54. Phosphorylation can activate or inhibit

A phosphate is not intrinsically an 'on' mark. The effect depends on the target protein and site.

# 55. Kinase/phosphatase balance

Moment-to-moment phosphorylation state depends on competing kinase and phosphatase activities.

# 56. Phosphorylation cascades

Protein kinases can phosphorylate and activate other kinases, producing multi-step relays.

# 57. Serine/threonine kinases

Kinases that phosphorylate serine or threonine residues.

# 58. Tyrosine kinases

Kinases that phosphorylate tyrosine residues.

# 59. GTP-binding switches

GTP-bound form is generally active; GDP-bound form is generally inactive in the switch proteins discussed.

# 60. Intrinsic GTPase activity

Many GTP-binding proteins shut themselves off by hydrolyzing bound GTP to GDP.

# 61. GEF

`guanine nucleotide exchange factor` promotes GDP release and GTP binding, switching a monomeric GTPase on.

# 62. GAP

`GTPase-activating protein` accelerates GTP hydrolysis, switching a monomeric GTPase off.

# 63. Three major cell-surface receptor classes

```text
ion-channel-coupled receptors
G-protein-coupled receptors
enzyme-coupled receptors
```

# 64. Ion-channel-coupled receptor

Ligand binding changes membrane permeability to selected ions and therefore can alter membrane potential extremely rapidly.

# 65. GPCR

Ligand binding activates a membrane-associated heterotrimeric G protein, which regulates an enzyme or ion channel.

# 66. Enzyme-coupled receptor

The receptor's cytosolic region either has enzymatic activity or recruits an enzyme when activated.

# 67. Ion-channel signaling timescale

Opening of ligand-gated ion channels can alter membrane voltage within milliseconds.

# 68. Ion-channel ions

Source examples include:
```text
Na+
K+
Ca2+
```
moving according to electrochemical gradients.

# 69. Foreign substances and receptors

Table 16–2 illustrates that drugs/toxins can stimulate or block normal cell-surface receptors.

Examples in the source include compounds acting at:
- GABA receptors
- acetylcholine receptors
- opioid receptors
- glycine receptors
- temperature-sensitive channels

# 70. Table 16–2 is pharmacological context only

`SOURCE_ERA_STATEMENT`: drug names/effects are preserved as source examples, not prescribing guidance.

# 71. GPCR family size in humans

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
>700 GPCRs
```
in the source.

# 72. Mouse olfactory receptor source value

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~1000 GPCRs
```
in mice involved in smell according to the textbook.

# 73. GPCR drug-target source statement

`SOURCE_ERA_STATEMENT`: the source says more than one-third of drugs in use act through GPCRs.

# 74. GPCR topology

Canonical source architecture:
```text
single polypeptide
7 transmembrane α helices
```

# 75. Small-ligand GPCR binding pocket

Small ligands such as acetylcholine/epinephrine can bind deep within a pocket formed by transmembrane helices.

# 76. Protein-ligand GPCR domains

GPCRs recognizing protein signals can use a large extracellular domain in addition to transmembrane regions.

# 77. Rhodopsin

A light-activated GPCR in vertebrate photoreceptors.

# 78. Olfactory GPCRs

Receptors involved in vertebrate smell are members of the GPCR superfamily.

# 79. Bacteriorhodopsin comparison

The source notes structural resemblance between GPCRs and bacterial bacteriorhodopsin but explicitly states bacteriorhodopsin does not signal through heterotrimeric G proteins.

# 80. Heterotrimeric G-protein subunits

```text
α
β
γ
```

# 81. G-protein membrane anchoring

α and γ subunits are shown as lipid-anchored to the cytosolic face of the plasma membrane.

# 82. Inactive heterotrimer

Inactive α carries GDP and is associated with βγ.

# 83. GPCR acts as nucleotide-exchange catalyst

Activated GPCR reduces α-subunit affinity for GDP, allowing GDP release and GTP binding.

# 84. Cytosolic GTP drives replacement

The source notes cytosolic GTP concentration exceeds GDP sufficiently that GTP rapidly occupies the nucleotide-free α subunit.

# 85. G-protein activation can separate functional parts

Activated GTP-bound α and βγ can dissociate or rearrange so that both can regulate target proteins.

# 86. Both α and βγ can signal

Do not depict βγ as passive scaffolding only. Both activated components can regulate membrane targets.

# 87. One active receptor can activate many G proteins

As long as ligand remains bound, one GPCR can repeatedly catalyze G-protein activation, providing amplification.

# 88. Gα intrinsic timer

Gα hydrolyzes GTP to GDP and shuts itself off.

# 89. G-protein shutoff timescale

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
usually within seconds
```
after activation.

# 90. Reassembly

After GTP hydrolysis, GDP-bound α reassociates with βγ to regenerate inactive heterotrimer.

# 91. Cholera toxin source mechanism

`SOURCE_ERA_STATEMENT`: cholera toxin modifies Gsα so it cannot hydrolyze GTP, locking stimulatory signaling on and continuously activating adenylyl cyclase.

# 92. Pertussis toxin source mechanism

`SOURCE_ERA_STATEMENT`: pertussis toxin locks an inhibitory G protein, Gi, in an inactive GDP-bound state, indirectly permitting excessive adenylyl-cyclase activity.

# 93. Project rule — toxins are perturbations

Toxin-modified G-protein states belong in `ExperimentState` or disease/perturbation state, not default normal physiology.

# 94. G proteins can regulate ion channels directly

Not every GPCR uses a diffusible second messenger.

# 95. Heart pacemaker acetylcholine pathway

```text
acetylcholine
→ GPCR
→ Gi activation
→ βγ complex
→ K+ channel opening
→ increased K+ permeability
→ pacemaker membrane harder to activate
→ heart rate slows
```

# 96. Direct channel response shutoff

Gα GTP hydrolysis returns the heterotrimer to inactive state and allows the K+ channel to close.

# 97. G-protein-regulated enzymes

Two major source examples:
```text
adenylyl cyclase
phospholipase C
```

# 98. Second messenger

A small intracellular signaling molecule generated in response to an extracellular 'first messenger.'

# 99. Second-messenger amplification

One activated enzyme can generate many second-messenger molecules, strongly amplifying a receptor signal.

# 100. Second-messenger diffusion

Small messengers can spread the signal away from their site of production, subject to diffusion, degradation, buffering, and compartment boundaries.

# 101. Adenylyl cyclase

Converts ATP into cyclic AMP in response to appropriate G-protein signaling.

# 102. cAMP

Water-soluble intracellular second messenger.

# 103. cAMP phosphodiesterase

Continuously degrades cAMP to AMP, contributing to rapid signal termination.

# 104. Caffeine source example

`SOURCE_ERA_STATEMENT`: the chapter describes caffeine as inhibiting cyclic-AMP phosphodiesterase in nervous tissue, thereby prolonging elevated cAMP.

# 105. Rapid cAMP dynamics

`SOURCE_SCALE` / `VERIFY_QUANT`: source states cytosolic cAMP can rise or fall:
```text
~10-fold within seconds
```

# 106. Serotonin neuron cAMP baseline

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~5 × 10^-8 M
```
resting cAMP in the illustrated cultured nerve cell.

# 107. Serotonin neuron cAMP stimulated

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
>10^-6 M
```
in receptor-rich regions less than one minute after serotonin addition in the source experiment.

# 108. Source cAMP fold increase

`SOURCE_SCALE`:
```text
>20-fold
```
in the Figure 16–20 experiment.

# 109. PKA

`cyclic-AMP-dependent protein kinase` is a major cAMP effector.

# 110. PKA activation

cAMP binds PKA regulatory components, causing conformational change and release/activation of catalytic kinase activity in the source model.

# 111. PKA substrate specificity

PKA phosphorylates selected serine/threonine residues on particular proteins.

# 112. Different cells, different PKA outputs

The same cAMP increase produces different responses because different cell types contain different target proteins and signaling contexts.

# 113. Table 16–3: cAMP response examples

Source examples include:
- epinephrine → increased heart rate/contractility
- epinephrine → skeletal-muscle glycogen breakdown
- epinephrine/glucagon → fat breakdown
- ACTH → cortisol secretion

# 114. Epinephrine skeletal-muscle pathway

```text
epinephrine
→ adrenergic GPCR
→ Gs
→ adenylyl cyclase
→ cAMP
→ PKA
→ kinase cascade
→ glycogen phosphorylase activated
```

# 115. PKA also inhibits glycogen synthesis

PKA phosphorylates glycogen synthase in the source pathway and inhibits it, coordinating:
```text
more breakdown
+
less synthesis
```

# 116. Fast metabolic cAMP response

Glycogen breakdown can occur within seconds because the pathway modifies preexisting enzymes rather than waiting for transcription.

# 117. Slow cAMP response

PKA can enter the nucleus and phosphorylate transcription regulators, producing minutes-to-hours gene-expression responses.

# 118. Gq

A heterotrimeric G protein used by GPCRs that activate phospholipase C.

# 119. Inositol phospholipid pathway

Activated phospholipase C cleaves a membrane inositol phospholipid in the cytosolic leaflet.

# 120. PLC products

```text
IP3
+
DAG
```

# 121. IP3

`inositol 1,4,5-trisphosphate`; water-soluble second messenger released into cytosol.

# 122. DAG

`diacylglycerol`; lipid second messenger that remains in the plasma membrane.

# 123. IP3 receptor action

IP3 binds Ca2+ channels in ER membrane and opens them.

# 124. Ca2+ release direction

```text
ER lumen
→ cytosol
```
down a steep electrochemical gradient.

# 125. DAG + Ca2+ activate PKC

DAG in the membrane and increased cytosolic Ca2+ cooperate to recruit/activate protein kinase C in the source model.

# 126. PKC

Serine/threonine kinase that phosphorylates cell-type-specific target proteins.

# 127. Table 16–4 response examples

Source examples include:
- vasopressin in liver → glycogen breakdown
- acetylcholine in pancreas → amylase secretion
- acetylcholine in skeletal muscle → contraction
- thrombin in platelets → aggregation

# 128. Ca2+ is a broadly used second messenger

Many signaling pathways—not only GPCR pathways—raise cytosolic Ca2+.

# 129. Fertilization Ca2+ wave

The source shows sperm entry triggering a Ca2+ wave across a starfish egg, contributing to prevention of additional sperm entry and initiation of development.

# 130. Muscle Ca2+

A rise in cytosolic Ca2+ triggers contraction in muscle cells.

`LATER_CHAPTER_REFINEMENT`: Chapter 17.

# 131. Secretory Ca2+

A rise in Ca2+ triggers secretion in many secretory cells, including neurons.

# 132. Resting cytosolic Ca2+

`SOURCE_SCALE`:
```text
~10^-7 M
```

# 133. Extracellular Ca2+

`SOURCE_SCALE`:
```text
~10^-3 M
```
in the source comparison.

# 134. Ca2+ concentration difference

`SOURCE_DERIVED`:
```text
~10^4-fold concentration difference
```
between extracellular fluid and resting cytosol from the stated source values.

# 135. Ca2+ pumps maintain low cytosolic Ca2+

ATP-driven pumps remove Ca2+ from cytosol into ER or extracellular space.

# 136. Ca2+ signal termination

The same pumps that maintain low resting Ca2+ help terminate transient Ca2+ signals.

# 137. Why low baseline aids signaling

A small absolute influx/release of Ca2+ can produce a very large relative change when baseline concentration is ~10^-7 M.

# 138. Ca2+ is spatially constrained

Because pumps clear Ca2+ rapidly, Ca2+ does not simply equilibrate across the entire cell. Local release sites and ER distribution matter.

# 139. Calmodulin

Widely conserved Ca2+-responsive protein present across examined eukaryotic groups in the source.

# 140. Calmodulin Ca2+ sites

`SOURCE_SCALE`:
```text
4 Ca2+-binding sites
```
(two on each globular end in the source model).

# 141. Calmodulin conformational change

Ca2+ binding changes calmodulin shape so it can wrap around and regulate target proteins.

# 142. CaM-kinase

Ca2+/calmodulin-dependent serine/threonine kinase activated by Ca2+-bound calmodulin.

# 143. Neuronal CaM-kinase source example

`SOURCE_ERA_STATEMENT`: the chapter associates a neuron-specific CaM-kinase with learning/memory phenotypes.

# 144. Nitric oxide signaling

NO is a small diffusible gas that can move directly from one cell into neighboring cells.

# 145. NO lifetime is short

The source states NO reacts with oxygen/water and is converted to nitrates/nitrites within seconds, limiting signaling range.

# 146. Endothelial NO pathway

```text
acetylcholine
→ endothelial GPCR
→ Gq
→ Ca2+ release
→ nitric oxide synthase
→ NO
→ neighboring smooth muscle
→ relaxation
→ vessel dilation
```

# 147. NO synthase substrate

The source states nitric oxide synthase produces NO from arginine.

# 148. Guanylyl cyclase

NO activates guanylyl cyclase in target cells.

# 149. cGMP

Guanylyl cyclase converts GTP to cyclic GMP, a second messenger.

# 150. Nitroglycerin source example

`SOURCE_ERA_STATEMENT`: nitroglycerin is described as being converted to NO and used to relax blood vessels in angina treatment.

# 151. Viagra source example

`SOURCE_ERA_STATEMENT`: sildenafil is described as prolonging NO/cGMP signaling by inhibiting the enzyme that degrades cGMP.

This is mechanistic textbook context, not prescribing guidance.

# 152. NO safety note

The source explicitly warns that inhaled NO gas is toxic and is not nitrous oxide.

# 153. Cone-response speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~20 ms
```
for the fastest cone photoreceptor response to a flash of light in the source.

# 154. Rod phototransduction

```text
light
→ rhodopsin
→ transducin
→ cGMP phosphodiesterase
→ cGMP decreases
→ cation channels close
→ membrane hyperpolarizes
→ neurotransmitter release decreases
```

# 155. Dark-state rod

In darkness, cGMP is continuously produced and helps keep cation channels open.

# 156. Light-state rod

Rhodopsin activation lowers cGMP, closes channels, reduces Na+ influx, and changes membrane voltage.

# 157. Single-photon amplification source chain

Figure 16–28 gives a dim-light example:

```text
1 rhodopsin absorbs 1 photon
→ ~500 transducin molecules activated
→ ~500 cGMP phosphodiesterases activated
→ ~10^5 cGMP molecules hydrolyzed
→ ~250 cation channels close
→ ~10^6–10^7 Na+ ions/s prevented from entering
for ~1 s
→ ~1 mV membrane-potential change
```

`VERIFY_QUANT`: retain as a source-model example rather than universal photoreceptor constants.

# 158. Extreme visual sensitivity

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: the source states that as few as roughly a dozen photons absorbed across the retina can produce a perceptible signal under very dim conditions.

# 159. Bright-light adaptation

The source says pathway amplification can be reduced by more than:
```text
10,000-fold
```
in bright conditions.

# 160. Adaptation

Adjustment of signaling sensitivity so cells can respond to relative changes over a wide input range.

# 161. Photoreceptor negative feedback

Strong responses lower cytosolic Ca2+, which feeds back to inhibit amplification machinery in the source description.

# 162. Receptor-level adaptation

GPCRs can be:
- inactivated
- temporarily removed/sequestered from surface
- routed to lysosomes for degradation

# 163. Enzyme-coupled receptors

Transmembrane receptors whose cytosolic side is enzymatic or recruits an enzyme.

# 164. Typical enzyme-coupled signals

Many are extracellular signal proteins controlling:
- growth
- proliferation
- differentiation
- survival

# 165. Enzyme-coupled ligand concentration

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10^-9 to 10^-11 M
```
for many local signal proteins in the source.

# 166. Enzyme-coupled response time

`SOURCE_SCALE` / `VERIFY_QUANT`: responses are often on the order of hours because they involve multi-step signaling and altered gene expression.

# 167. RTK

`receptor tyrosine kinase` = major enzyme-coupled receptor class whose cytosolic domain phosphorylates tyrosines.

# 168. RTKs are usually single-pass

The chapter describes enzyme-coupled receptors such as RTKs as generally having one transmembrane α helix.

# 169. RTK activation strategy

Because one transmembrane helix is poorly suited to the same kind of internal rearrangement used by 7TM GPCRs, many RTKs signal through ligand-induced dimerization or receptor association.

# 170. RTK trans-phosphorylation

When two receptor tails come together, each kinase phosphorylates tyrosines on the other receptor.

# 171. Phosphotyrosines are docking sites

Activated RTKs create multiple binding sites for intracellular signaling proteins.

# 172. RTK complex size source estimate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10–20 different intracellular signaling proteins
```
may assemble on activated receptor tails in the textbook framing.

# 173. SH2 domain

Interaction domain that recognizes specific phosphotyrosine-containing docking sites.

# 174. Interaction domains encode network connectivity

Different modular interaction domains allow proteins to recognize phosphoproteins, lipids, and other partners in specific combinations.

# 175. Flexible regions promote multivalent assembly

The source emphasizes that many interaction domains occur in flexible/unstructured regions, allowing multiple simultaneous contacts.

# 176. RTK signaling condensates

Multivalent interactions around activated receptors can create gel-like, cross-linked signaling assemblies described as biomolecular condensates.

# 177. RTK phosphatase shutoff

Tyrosine phosphatases remove activating phosphates from receptors and downstream signaling proteins.

# 178. RTK endocytic shutoff

Some activated RTKs are internalized and degraded in lysosomes, providing stronger termination/downregulation.

# 179. Ras

Small monomeric GTPase attached to the cytosolic face of the plasma membrane by a lipid group.

# 180. Ras activation by RTKs

Activated RTKs recruit adaptor proteins that recruit Ras-GEF.

# 181. Ras-GEF

Promotes:
```text
Ras-GDP → Ras-GTP
```

# 182. Ras-GAP

Accelerates GTP hydrolysis and returns Ras to the GDP-bound inactive state.

# 183. Ras resembles Gα but is not a heterotrimeric G protein

Both use GDP/GTP switching, but Ras is a small monomeric GTPase and is activated through receptor-associated adaptor/GEF machinery rather than directly by a GPCR.

# 184. MAP-kinase module

A three-kinase cascade:
```text
MAP kinase kinase kinase
→ MAP kinase kinase
→ MAP kinase
```

# 185. Ras activates MAPK cascade

Active Ras initiates the kinase cascade that can transmit information from plasma membrane toward nuclear transcription regulators and other effectors.

# 186. MAP kinase outputs

MAP kinase phosphorylates multiple downstream targets, including transcription regulators.

# 187. MAPK response depends on context

The same pathway can contribute to proliferation, survival, or differentiation depending on cell type, gene state, and concurrent signals.

# 188. Ras cancer source statement

`SOURCE_ERA_STATEMENT`: the chapter says activating Ras mutations occur in about:
```text
~30% of human cancers
```
and that many other cancers contain alterations elsewhere in the same signaling network.

# 189. Ras oncogenic mechanism source model

Mutant Ras can lose effective GTPase shutoff and remain persistently GTP-bound, driving inappropriate signaling.

# 190. PI 3-kinase

Phosphoinositide 3-kinase phosphorylates specific inositol phospholipids in the cytosolic leaflet of the plasma membrane.

# 191. Lipid docking sites

The phosphorylated membrane lipids act as recruitment sites for signaling proteins containing suitable lipid-binding interaction domains.

# 192. Akt

Serine/threonine kinase, also called protein kinase B (PKB), recruited to the membrane through PI3K-generated docking sites.

# 193. Akt activation

The source model shows Akt activated by phosphorylation from two other protein kinases; one is recruited by the same phosphorylated lipid and another is membrane-associated.

# 194. Activated Akt leaves membrane

After activation, Akt can leave the membrane and phosphorylate downstream targets.

# 195. Bad

Source example of a pro-apoptotic protein inhibited by Akt phosphorylation.

# 196. Bcl2

In the source diagram, unphosphorylated Bad inhibits Bcl2; Akt-mediated Bad phosphorylation releases Bcl2 activity and supports survival.

# 197. Akt promotes survival

```text
survival signal
→ RTK
→ PI3K
→ Akt
→ Bad inhibited
→ apoptosis suppressed
```

# 198. Tor

Large serine/threonine kinase activated indirectly downstream of Akt and used by the source to connect signaling to cell growth.

# 199. Tor growth outputs

The source states Tor:
- stimulates protein synthesis
- inhibits protein degradation
thereby increasing cell growth.

# 200. Rapamycin source example

`SOURCE_ERA_STATEMENT`: the chapter describes rapamycin as inhibiting Tor and thereby slowing cell growth.

# 201. Figure 16–36 network summary

The source summarizes five pathways:
```text
GPCR → adenylyl cyclase → cAMP → PKA

GPCR → PLC → IP3/DAG → Ca2+/PKC

RTK → PLC

RTK → Ras → MAPK

RTK → PI3K → Akt
```

# 202. Different pathways reuse components

Pathways are not isolated pipelines; they reuse kinases, phospholipases, lipid signals, transcription regulators, and other nodes.

# 203. Cross-talk

Signaling pathways influence one another, allowing a cell to compute context-dependent outputs.

# 204. How We Know — pathways are reconstructed piecewise

The source emphasizes that complete signaling pathways are not discovered in a single experiment. They are assembled from many perturbation, interaction, localization, and genetic experiments.

# 205. Ligand affinity chromatography

A signal molecule can be immobilized as bait to isolate its receptor or binding partners from cell extracts.

# 206. Co-immunoprecipitation

An antibody against one pathway protein can pull down physically associated signaling partners.

# 207. Mutational mapping of docking sites

Individual receptor tyrosines can be replaced to test which phosphotyrosine binds a given signaling protein.

# 208. Tyrosine-to-phenylalanine strategy

The source example substitutes phenylalanine for selected tyrosines to prevent phosphorylation at specific sites and identify docking requirements.

# 209. Constitutively active mutants

A permanently active signaling protein can reveal whether its activation is sufficient to mimic an extracellular signal.

# 210. Ras constitutive activation experiment

Persistently active Ras can stimulate proliferation in some cells even without extracellular mitogen.

# 211. Loss-of-function perturbations

RNA interference, CRISPR, or mutations can remove pathway proteins and reveal whether they are necessary.

# 212. Genetic screens

Large-scale mutant screens in model organisms can identify signaling genes.

# 213. Epistasis/pathway ordering

A constitutively active downstream component can rescue an upstream block but cannot bypass a missing downstream component.

# 214. Pathway ordering rule

```text
active Ras rescues loss of X
→ X acts upstream of Ras

active Ras does not rescue loss of Y
→ Y acts downstream of Ras
```
in the source's hypothetical example.

# 215. Notch

Contact-dependent receptor that provides a comparatively direct route from membrane signal to altered transcription.

# 216. Delta

Membrane-bound ligand on a neighboring cell that binds Notch.

# 217. Notch cleavage

Delta binding triggers proteolytic cleavage of Notch.

# 218. Notch intracellular tail

Cleaved cytosolic Notch fragment enters nucleus and participates in activation of Notch-responsive genes.

# 219. Notch lateral inhibition

The chapter uses developing Drosophila neural tissue to show one differentiating cell inhibiting similar differentiation in neighbors through Delta–Notch contact signaling.

# 220. Nuclear receptor family

Intracellular receptors activated by hydrophobic hormones and functioning as transcription regulators.

# 221. Steroid hormone examples

Source examples:
- cortisol
- estradiol
- testosterone

# 222. Thyroid hormone example

Thyroxine is also included among signals acting through nuclear receptors.

# 223. Hydrophobic ligands cross membrane

These hormones can diffuse through the plasma membrane and bind receptors in cytosol or nucleus.

# 224. Cytosolic nuclear receptor pathway

Source cortisol example:
```text
cortisol crosses membrane
→ cytosolic receptor binds cortisol
→ receptor conformational change
→ receptor–hormone complex enters nucleus
→ binds regulatory DNA
→ transcription altered
```

# 225. Some nuclear receptors are already nuclear

The source notes some steroid/thyroid receptors are DNA-associated in the nucleus even before ligand binding.

# 226. Nuclear receptor output is gene-specific and cell-specific

Each receptor binds particular regulatory DNA sequences, and the regulated gene set varies by cell context.

# 227. Testosterone-receptor source example

`SOURCE_ERA_STATEMENT`: the chapter uses rare androgen-receptor loss as an example demonstrating that hormone effect requires receptor function across multiple tissues.

Preserve as textbook context; avoid turning this into a simplistic modern account of sex development.

# 228. Plant and animal signaling partly diverged

`SOURCE_HYPOTHESIS`: plants and animals evolved multicellularity independently after divergence from a common unicellular eukaryotic ancestor, explaining both differences and shared signaling mechanisms.

# 229. Plant receptor kinases

Arabidopsis contains hundreds of genes encoding receptor serine/threonine kinases in the source description.

# 230. Plant RTK/GPCR/cAMP source statement

`SOURCE_ERA_STATEMENT`: the textbook states plants appear not to use animal-like RTKs, steroid-hormone-type nuclear receptors, or cAMP and appear to use few GPCRs.

This is a source-era summary and must not be generalized beyond the textbook without modern verification.

# 231. Ethylene

Gaseous plant hormone involved in processes including seed germination and fruit ripening.

# 232. Ethylene receptor location

The source Figure 16–43 places the ethylene receptor in the ER membrane.

# 233. Ethylene receptor logic is inverted relative to many animal examples

```text
no ethylene
→ receptor active
→ associated kinase active
→ transcription regulator degraded
→ ethylene-responsive genes OFF

ethylene present
→ receptor/kinase inactive
→ transcription regulator survives
→ target genes ON
```

# 234. Ethylene triple response

The source describes coordinated changes in seedling morphology/growth when shoots encounter obstacles or environmental stress.

# 235. Protein kinases are major network connectors

Kinases can phosphorylate components in multiple pathways and thereby create cross-talk.

# 236. Human kinase-gene fraction source value

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~2% of ~20,000 protein-coding genes
```
are said to encode protein kinases.

# 237. Kinases per mammalian cell source statement

`SOURCE_ERA_STATEMENT`: the source says hundreds of distinct protein kinases can be present in one mammalian cell.

# 238. Multisite phosphorylation supports integration

A protein carrying several independently regulated phosphorylation sites can combine multiple inputs before producing an output.

# 239. Figure 16–44 integration logic

Signals can:
- activate one kinase
- activate another kinase
- activate both
- inhibit one pathway

and a target requiring multiple phosphorylation inputs can behave as an AND-like integrator.

# 240. Signal integration is quantitative

Output depends on both:
- number/concentration of incoming signals
- strength/coupling of pathway interactions

# 241. Signaling network knowledge is incomplete

The chapter explicitly states that pathways and interactions are still being discovered and that identifying all components does not automatically explain network-level behavior.

# 242. Extracellular signal schema

```yaml
extracellular_signal:
  id:
  molecule:
  signaling_mode:
    - endocrine
    - paracrine
    - autocrine
    - neuronal
    - contact_dependent
  source_cell:
  target_scope:
  concentration:
  diffusion_coefficient:
  lifetime:
  extracellular_binding:
```

# 243. Receptor schema

```yaml
receptor:
  id:
  class:
    - ion_channel_coupled
    - GPCR
    - enzyme_coupled
    - intracellular_nuclear
    - Notch_like
  ligand:
  membrane_location:
  copy_number:
  occupancy:
  conformational_state:
  active_state:
  internalization_state:
```

# 244. Molecular switch schema

```yaml
molecular_switch:
  id:
  switch_type:
    - phosphorylation
    - GTPase
  state:
    - inactive
    - active
  activator:
  inactivator:
  activation_time:
  deactivation_time:
```

# 245. Kinase state schema

```yaml
kinase:
  active:
  phosphorylation_sites:
  substrates:
  localization:
  scaffold_or_complex:
  catalytic_rate:
```

# 246. Phosphatase state schema

```yaml
phosphatase:
  active:
  substrates:
  localization:
  dephosphorylation_events:
```

# 247. Heterotrimeric G-protein schema

```yaml
heterotrimeric_G_protein:
  alpha_nucleotide: GDP | GTP
  alpha_active:
  beta_gamma_active:
  assembled_state:
  receptor_partner:
  target_proteins:
  GTP_hydrolysis_timer:
```

# 248. Second-messenger field schema

```yaml
second_messenger:
  type:
    - cAMP
    - cGMP
    - IP3
    - DAG
    - Ca2+
  amount_or_concentration:
  production_location:
  diffusion_state:
  degradation_or_clearance:
  target_binding:
```

# 249. Calcium field schema

```yaml
calcium_state:
  cytosolic_free_Ca:
  ER_lumen_Ca:
  extracellular_Ca:
  open_Ca_channels:
  pump_activity:
  local_microdomains:
  wave_state:
```

# 250. RTK state schema

```yaml
RTK:
  ligand_bound:
  oligomeric_state:
  kinase_active:
  phosphotyrosines:
  docked_proteins:
  signaling_condensate:
  internalization_state:
```

# 251. Ras schema

```yaml
Ras:
  nucleotide: GDP | GTP
  membrane_anchored: true
  GEF_bound:
  GAP_bound:
  active:
  downstream_MAPK_state:
```

# 252. MAPK module schema

```yaml
MAPK_module:
  MAPKKK_state:
  MAPKK_state:
  MAPK_state:
  downstream_targets:
  nuclear_output:
```

# 253. PI3K-Akt schema

```yaml
PI3K_Akt:
  RTK_active:
  PI3K_active:
  phosphoinositide_docking_sites:
  Akt_membrane_recruited:
  Akt_phosphorylation_state:
  Akt_active:
  Bad_state:
  Tor_state:
```

# 254. Notch schema

```yaml
Notch:
  Delta_bound:
  cleavage_state:
  intracellular_tail_released:
  nuclear_localization:
  target_gene_state:
```

# 255. Nuclear receptor schema

```yaml
nuclear_receptor:
  ligand_bound:
  receptor_location:
  conformation:
  DNA_bound:
  target_regulatory_sites:
  transcriptional_effect:
```

# 256. Pathway graph schema

```yaml
signaling_network:
  nodes:
  edges:
  edge_type:
    - activate
    - inhibit
    - recruit
    - phosphorylate
    - dephosphorylate
    - produce
    - degrade
  active_subnetwork:
  feedback_loops:
  cross_talk_edges:
```

# 257. ExperimentState — signaling perturbation

```yaml
experiment_state:
  ligand_added:
  receptor_mutation:
  constitutively_active_nodes:
  inhibited_nodes:
  knocked_out_nodes:
  toxin_modification:
  reporter:
```

# 258. Project rule — signal arrows are not entities

Arrows in textbook diagrams encode causal influence or net flow. They are not physical objects moving through the cell.

# 259. Project rule — receptor occupancy is dynamic

A receptor should transition between unbound/bound/active/desensitized/internalized states rather than simply changing color permanently.

# 260. Project rule — every activation needs an off switch

Do not implement signaling only in the forward direction. Dephosphorylation, GTP hydrolysis, messenger degradation, ion pumping, receptor sequestration, and lysosomal degradation are equally real parts of the pathway.

# 261. Project rule — amplification must conserve causality

If one active receptor produces many downstream molecules, the multiplication must occur through a catalytic or repeated activation step rather than by visually spawning arbitrary particles.

# 262. Project rule — second messengers have fields and lifetimes

cAMP, cGMP, IP3, DAG, and Ca2+ should have explicit production, diffusion/localization, binding, and degradation/clearance behavior.

# 263. Project rule — DAG is membrane-confined

DAG remains in the membrane; do not animate it diffusing freely through cytosol like IP3.

# 264. Project rule — Ca2+ signal is not generic glow

Ca2+ should be represented as concentration/state changes with explicit stores, channels, pumps, diffusion, buffering, and target binding.

# 265. Project rule — kinase activity is site-specific

Do not render phosphorylation as a universal 'active phosphate' badge. Different sites can activate, inhibit, recruit partners, or have no known role.

# 266. Project rule — GPCR and RTK transduction differ

GPCRs use internal rearrangement of a 7TM receptor to catalyze G-protein nucleotide exchange. RTKs commonly use ligand-induced association/dimerization and trans-phosphorylation.

# 267. Project rule — same ligand can produce multiple outcomes

Cell response must be determined by receptor class plus intracellular network context, not by ligand identity alone.

# 268. Project rule — signaling is spatial

Where an interaction occurs matters:
- plasma membrane
- ER membrane
- cytosol
- nucleus
- receptor-associated condensate
- neighboring cell

# 269. Project rule — signaling is temporal

BiologicalTime must represent:
- ligand arrival
- receptor activation
- messenger production
- kinase cascades
- feedback
- adaptation
- shutoff

# 270. Project rule — network integration is stateful

Multiple simultaneous inputs must converge on shared molecular states. Do not simply play independent pathway animations side by side.

# 271. Project rule — pathway diagrams are abstractions

Textbook pathway figures omit many proteins, stoichiometries, diffusion constraints, molecular crowding, spatial boundaries, and kinetic parameters. They are causal maps, not literal spatial layouts.

# 272. Question 16–1 — keeping paracrine signals local

Official answer mechanisms:
- rapid extracellular degradation
- rapid uptake by nearby cells
- immobilization/binding to extracellular matrix

Each limits diffusion range.

# 273. Question 16–2 — how one signaling protein can amplify

Official answer: an activated protein can act catalytically:
- produce many small messenger molecules, or
- modify many downstream target proteins.

# 274. Question 16–3 — Gα mutation with weak GDP affinity

Official answer:
```text
GDP dissociates too easily
→ GTP binds even without activated GPCR
→ high constitutive G-protein activity
```
The phenotype resembles cholera toxin in producing excessive activity, but unlike cholera toxin the mutant still hydrolyzes GTP normally; it repeatedly reactivates because GDP will not remain bound.

# 275. Question 16–4 — why rapid cAMP breakdown improves signaling speed

Official answer: rapid degradation keeps baseline cAMP low, so activation of adenylyl cyclase produces a large relative increase quickly and the signal can also fall rapidly when production stops.

# 276. Question 16–5 — why intracellular Ca2+ stores are useful

Official answer: ER extends throughout much of the cell, so it can release Ca2+ locally throughout the cytoplasm. Rapid Ca2+ pumping prevents long-range free diffusion, making distributed internal stores advantageous.

# 277. Question 16–6 — where phototransduction needs off switches

Official answer: every amplifying step requires shutoff to reset the pathway. No single off switch is dispensable; each is required to return the system to its resting state.

# 278. Question 16–7 — antibodies and receptor activation

Official answer:
- bivalent antibodies can cross-link RTKs and may activate them by clustering/dimerization;
- GPCR activation generally requires a specific ligand-induced conformational change, so ordinary receptor-binding antibodies would not necessarily activate them.

# 279. Question 16–8A

`TRUE`: acetylcholine can produce different effects in different cell types and can bind different receptor classes.

# 280. Question 16–8B

`FALSE`: acetylcholine is short-lived and acts locally rather than circulating throughout the body.

# 281. Question 16–8C

`TRUE` in the source model: active GTP-bound α and activated βγ components can regulate targets; GDP-bound assembled heterotrimer is inactive.

# 282. Question 16–8D

`TRUE`: IP3 is generated by hydrolysis of an already phosphorylated inositol lipid; no extra phosphate must be added during cleavage.

# 283. Question 16–8E

`FALSE`: calmodulin senses/responds to Ca2+; it does not set cytosolic Ca2+ concentration.

# 284. Question 16–8F

`TRUE`: pathways can integrate/cross-talk.

# 285. Question 16–8G

`TRUE`: RTK phosphotyrosines create docking sites for signaling proteins.

# 286. Question 16–9 — loss of Ras GAP

Official answer predicts:
1. elevated background Ras-GTP
2. greater but saturable response to signal
3. slower relative signal-induced rise because baseline is already high
4. prolonged Ras activation because shutoff is impaired

# 287. Question 16–10 — neuronal versus endocrine signaling

Official answer:
```text
neuronal:
long-range electrical delivery
high local neurotransmitter concentration at synapse
fast
private/specific connection

endocrine:
hormone distributed in blood
very dilute ligand
slower
public/broadcast to any receptor-bearing target
```

# 288. Question 16–11A — RTK missing extracellular domain

Official answer: generally inactive because it cannot bind ligand. At extremely high expression, spontaneous dimerization might still cause activation.

# 289. Question 16–11B — RTK missing intracellular domain

Official answer: inactive mutant can act dominant-negatively by forming mixed dimers with normal receptor, preventing proper trans-phosphorylation.

# 290. Question 16–12 — multispan versus single-span receptor mechanics

Official answer says the statement is largely correct:
- multispan receptors such as GPCRs can transmit ligand-induced rearrangements of multiple helices;
- single-pass RTKs commonly require dimerization/oligomerization to bring cytosolic kinase domains together.

# 291. Question 16–13 — G protein versus Ras activation

Official answer:
```text
both:
GDP release + GTP binding activates

heterotrimeric G protein:
activated GPCR directly catalyzes nucleotide exchange on Gα

Ras:
activated RTK assembles adaptor proteins
→ adaptor recruits Ras-GEF
→ GEF catalyzes GDP/GTP exchange
```

# 292. Question 16–14 — why Ca2+ instead of Na+ as a second messenger

Official answer: resting cytosolic Ca2+ is extremely low, so a relatively small number of Ca2+ ions can produce a large fold-change very rapidly. A similar relative change in a millimolar ion such as Na+ would require far more ions.

# 293. Question 16–15 — why survival depends on external signals

Official answer: requiring survival signals helps ensure cells survive only in the correct location and number. Misplaced cells may lack the necessary signals and die; limiting survival factor can also control population size.

# 294. Question 16–16 — Ca2+-activated ryanodine receptors

Official answer: Ca2+ opens channels that release more Ca2+, creating positive feedback:
```text
Ca2+ release
→ more ryanodine receptors open
→ more Ca2+ release
```
This propagates an explosive Ca2+ signal and synchronizes cardiac contraction.

# 295. Question 16–17 — K1/K2 order

Official answer:
```text
K2 → K1
```
because constitutively active K1 produces the response even when K2 is inactive. Therefore K1 must be downstream of K2.

# 296. Question 16–18A — long indirect routes to transcription

Official answers include:
```text
signal → RTK → adaptor → Ras-GEF → Ras
→ MAPKKK → MAPKK → MAPK → transcription regulator
```

or:
```text
signal → GPCR → G protein → PLC → IP3
→ Ca2+ → calmodulin → CaM-kinase → transcription regulator
```

or:
```text
signal → GPCR → G protein → adenylyl cyclase
→ cAMP → PKA → transcription regulator
```

# 297. Question 16–18B — short direct route

Official example:
```text
Delta
→ Notch
→ Notch cleavage
→ intracellular Notch tail
→ nucleus
→ transcription
```

# 298. Question 16–19 — PI3K activation of Akt

Official answer:
```text
RTK activates PI3K
→ PI3K phosphorylates membrane inositol lipid
→ lipid docking site recruits Akt + one activating kinase
→ second membrane-associated kinase also participates
→ Akt becomes phosphorylated/active
```

# 299. Question 16–20 — cholesterol as hypothetical hormone

Official answer: cholesterol is too hydrophobic/insoluble in water to function effectively as a freely circulating extracellular messenger by itself. It would require a carrier protein to move through extracellular fluid.

# 300. Question 16–21 — amplification in simple receptor systems

Official answer:
- steroid/nuclear receptor has little amplification before transcription, but gene expression amplifies because one activated gene produces many mRNAs/protein molecules;
- one open ion channel can pass thousands of ions, providing strong amplification.

# 301. Question 16–22 — why long cascades exist if direct routes are possible

Official answer: additional steps provide more places to:
- regulate
- amplify
- integrate other signals
- branch/distribute information

# 302. Question 16–23 — why plant and animal signaling share some mechanisms but differ in others

Official answer:
- multicellularity evolved independently in plants and animals, favoring distinct solutions;
- both inherited basic signaling machinery from a common eukaryotic ancestor, explaining conserved mechanisms.

# 303. Source quantitative register

| Quantity | Chapter 16 source value/context |
|---|---:|
| long human axon example | >1 m |
| neuronal conduction | up to ~100 m/s |
| synaptic gap | <100 nm |
| synaptic diffusion time | <1 ms |
| receptor copies | tens to hundreds of thousands |
| fast signaling | milliseconds to minutes |
| slow signaling | minutes to hours |
| human GPCRs | >700 |
| mouse olfactory GPCR source statement | ~1000 |
| drugs acting via GPCR source statement | >1/3 |
| G-protein shutoff | usually within seconds |
| resting cAMP example | ~5×10^-8 M |
| stimulated cAMP example | >10^-6 M |
| cAMP rise | >20-fold in <1 min |
| resting cytosolic Ca2+ | ~10^-7 M |
| extracellular Ca2+ | ~10^-3 M |
| calmodulin Ca2+ sites | 4 |
| fastest cone response | ~20 ms |
| rod: G proteins per photon | ~500 |
| rod: PDE molecules per photon | ~500 |
| rod: cGMP hydrolyzed | ~10^5 |
| rod: cation channels closed | ~250 |
| rod: Na+ influx prevented | ~10^6–10^7 ions/s for ~1 s |
| rod membrane change | ~1 mV |
| bright-light amplification change | >10,000-fold |
| enzyme-coupled ligand concentration | ~10^-9–10^-11 M |
| RTK docked proteins | ~10–20 in source framing |
| Ras activating mutations in cancers | ~30% source-era statement |
| kinase genes | ~2% of ~20,000 coding genes |

# 304. Quantitative verification queue

Before runtime promotion, externally verify:
- receptor copy numbers by receptor/cell type
- human and species-specific GPCR counts
- GPCR drug-target fraction
- G-protein activation/shutoff kinetics
- cAMP basal and stimulated ranges
- intracellular Ca2+ concentrations and buffers
- local Ca2+ microdomain dynamics
- phototransduction gain/kinetics by rod/cone type and species
- enzyme-coupled receptor ligand concentrations
- RTK cluster stoichiometry
- receptor-condensate composition
- Ras cancer-frequency values by cancer cohort
- Akt activation stoichiometry
- kinase counts per cell type

# 305. Do-not-overinterpret register

Do not infer:

```text
a signal molecule has one universal meaning
FALSE

all cells respond to every extracellular signal
FALSE

signal range alone defines signaling type
FALSE

all neuronal signals are chemical over the full distance
FALSE

all hydrophobic molecules are hormones
FALSE

all receptors are on the plasma membrane
FALSE

all phosphorylation activates proteins
FALSE

all GTPases are heterotrimeric G proteins
FALSE

βγ is always passive
FALSE

GPCR signaling always uses cAMP
FALSE

all GPCR pathways require diffusible second messengers
FALSE

cAMP is stable unless the signal stops
FALSE

IP3 remains in the membrane
FALSE

DAG diffuses freely through cytosol
FALSE

Ca2+ concentration is high in resting cytosol
FALSE

calmodulin sets Ca2+ concentration
FALSE

NO acts through a cell-surface receptor
FALSE in the source example

RTKs activate by the same mechanism as GPCRs
FALSE

RTK tyrosine phosphorylation is only an on/off switch
FALSE; it also creates docking sites

Ras is a trimeric G protein
FALSE

MAPK is the only RTK output
FALSE

PI3K phosphorylates proteins
FALSE in this pathway; it phosphorylates inositol phospholipids

Akt activation occurs simply because Akt touches the membrane
FALSE

Notch requires a long kinase cascade to reach the nucleus
FALSE

nuclear receptors are necessarily located only in the nucleus before activation
FALSE

plant signaling is simply animal signaling with different ligands
FALSE

every pathway is linear and independent
FALSE

feedback is an optional visual detail
FALSE

the textbook pathway layout is literal spatial geometry
FALSE
```

# 306. Cross-chapter dependencies

```text
Chapter 3:
ATP/GTP, free energy, nucleotide hydrolysis

Chapter 4:
protein phosphorylation, GTPase switches, allostery,
scaffolds, condensates

Chapter 7:
gene expression and protein synthesis

Chapter 8:
transcription regulators and regulatory DNA

Chapter 10:
CRISPR, RNAi, engineered mutants, reporters

Chapter 11:
membrane topology and inositol phospholipids

Chapter 12:
ion gradients, membrane potential, synaptic transmission

Chapter 15:
ER Ca2+ stores, endocytosis, lysosomal receptor downregulation

Chapter 17:
cytoskeletal outputs, muscle contraction, cell movement

Chapter 18:
apoptosis, proliferation, cell-cycle control

Chapter 20:
cancer and oncogenic signaling
```

# 307. Chapter 16 core causal map

```text
SIGNAL
→ RECEPTOR

ION-CHANNEL RECEPTOR
→ ion flux
→ membrane potential / Ca2+
→ response

GPCR
→ heterotrimeric G protein
→ direct ion channel
OR
→ adenylyl cyclase
→ cAMP
→ PKA
OR
→ phospholipase C
→ IP3 + DAG
→ Ca2+ + PKC
→ effectors / transcription

RTK
→ dimerization
→ tyrosine trans-phosphorylation
→ phosphotyrosine docking network
→ Ras/MAPK
OR
→ PI3K/Akt/Tor
OR
→ PLC
→ response

DELTA
→ NOTCH
→ receptor cleavage
→ Notch intracellular fragment
→ nucleus

STEROID / THYROID HORMONE
→ intracellular nuclear receptor
→ regulatory DNA
→ transcription

MULTIPLE PATHWAYS
→ cross-talk + feedback + integration
→ context-dependent cell behavior
```

# 308. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 16: “Cell Signaling.”**

Printed pages:
```text
553–594
```

PDF pages reviewed:
```text
588–629
```

Official answer section reviewed:
```text
PDF pages 838–840
```

Reviewed:
- all chapter sections
- Figures 16–1 through 16–44
- Tables 16–1 through 16–4
- How We Know: *Untangling Cell Signaling Pathways*
- Essential Concepts
- Questions 16–1 through 16–23
- official textbook answers for Questions 16–1 through 16–23

# 309. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- signal-transduction definition
- endocrine/paracrine/autocrine/neuronal/contact signaling
- Table 16–1 examples
- cell-surface vs intracellular receptor logic
- same-ligand/different-cell behavior
- fast vs slow responses
- relay/amplification/integration/distribution/feedback
- phosphorylation and GTPase molecular switches
- GEF/GAP logic
- three receptor classes
- ion-channel signaling
- Table 16–2 pharmacological examples
- GPCR 7TM architecture
- heterotrimeric G-protein cycle
- α and βγ signaling
- GTPase shutoff
- cholera/pertussis source mechanisms
- direct K+ channel regulation
- adenylyl cyclase/cAMP/PDE
- PKA
- Table 16–3
- epinephrine/glycogen pathway
- Gq/PLC/IP3/DAG
- PKC
- Table 16–4
- Ca2+ source values
- calmodulin and CaM-kinase
- NO/cGMP pathway
- phototransduction amplification/adaptation
- Figure 16–28 source values
- RTK dimerization/trans-phosphorylation
- phosphotyrosine docking
- SH2 domains
- signaling condensates
- RTK shutoff
- Ras/GEF/GAP
- MAPK module
- Ras cancer source statement
- PI3K lipid docking
- Akt/Bad/Bcl2/Tor
- Figure 16–36 pathway summary
- How We Know methods
- Delta/Notch
- steroid/thyroid nuclear receptors
- plant/ethylene signaling
- network integration
- all Questions 16–1 through 16–23
- official answer consistency
- all schemas
- all DO_NOT_INFER rules
- source trace

# END OF CHAPTER 16 CANON

Recommended repository destination:

```text
science/chapters/16_cell_signaling.md
```

Recommended commit message:

```text
science: add Chapter 16 cell signaling canon
```

Do not begin Chapter 17 merely because this file exists.

Chapter 17 will add the cell's mechanical architecture: intermediate filaments, microtubules, actin filaments, dynamic instability, motor proteins, cilia/flagella, cell crawling, myosin, and muscle contraction.
