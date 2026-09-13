---
title: "The Seamless Cell — Science Canon — Chapter 18"
subtitle: "The Cell Cycle"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 18, printed pages 635–676 (PDF pages 670–711)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 18 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 18 links the systems developed in earlier chapters into one ordered reproductive program. DNA replication, chromosome architecture, microtubule dynamics, actomyosin mechanics, membrane remodeling, signaling, proteolysis, organelle inheritance, and programmed cell death are coordinated by a cell-cycle control system that decides **when** each event may happen and **whether** the cell is allowed to continue.

The central causal architecture is:

```text
cell state
+ extracellular conditions
+ internal completion signals
↓
cell-cycle control system
↓
cyclin–Cdk state
+ phosphatases
+ Cdk inhibitors
+ APC/C
↓
ordered transitions
↓
G1 → S → G2 → M
↓
DNA copied once
chromosomes segregated once
cell divided once
```

The project-level principle is:

```text
THE CELL CYCLE IS NOT A CLOCK ANIMATION.

It is a checkpointed state machine whose transitions depend on:
- cyclin abundance
- Cdk activity
- phosphorylation state
- proteolysis
- DNA-replication state
- DNA-damage state
- spindle attachment
- mechanical tension
- extracellular mitogens
- survival/growth signals
```

For The Seamless Cell, **cell-cycle phase must be part of WorldState**, because the physical meaning of nearly every cellular structure changes with phase.

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 18.
- `SOURCE_SCALE` — explicit numerical value/range from the chapter.
- `SOURCE_MODEL` — mechanistic/pedagogical model presented by the chapter.
- `SOURCE_DERIVED` — direct inference or calculation from source information.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — textbook statement likely to vary with date, cohort, cell type, or modern literature.
- `SOURCE_HYPOTHESIS` — interpretation explicitly left uncertain by the source.
- `PROJECT_CONSTRAINT` — implementation rule for The Seamless Cell.
- `VERIFY_QUANT` — source number retained but not promoted to universal runtime truth.
- `LATER_CHAPTER_REFINEMENT` — detail belongs to a later chapter or external layer.
- `DO_NOT_INFER` — hard guardrail.

## Chapter map

```text
OVERVIEW OF THE CELL CYCLE

THE CELL-CYCLE CONTROL SYSTEM

G1 PHASE

S PHASE

M PHASE

MITOSIS

CYTOKINESIS

CONTROL OF CELL GROWTH, CELL DIVISION, AND CELL SURVIVAL
```

Supporting material:

```text
Figures 18–1 through 18–45
Panel 18–1: Principal Stages of M Phase in an Animal Cell
Table 18–1: Some Eukaryotic Cell-Cycle Durations
Table 18–2: Major Cyclins and Cdks of Vertebrates
How We Know: Discovery of Cyclins and Cdks
Essential Concepts
Why Trust Science?
Questions 18–1 through 18–31
Official textbook answers to Questions 18–1 through 18–31
```

# 1. Cell cycle

The cell cycle is the ordered sequence in which a cell:
```text
duplicates its contents
→ segregates duplicated material
→ divides into two daughter cells
```

# 2. Genetic continuity is the central requirement

The fundamental task is to duplicate the genome accurately and give each daughter cell a complete copy.

# 3. Cell growth must accompany division

In most proliferating cells, cell mass and organelles also approximately double before division so daughter cells do not become progressively smaller.

# 4. Cell-cycle duration varies greatly

The chapter emphasizes that phase lengths and total cycle duration depend strongly on organism and cell type.

# 5. Table 18–1 — early fly embryo

`SOURCE_SCALE`:
```text
~8 min per cycle
```

# 6. Table 18–1 — early frog embryo

`SOURCE_SCALE`:
```text
~30 min per cycle
```

# 7. Table 18–1 — mammalian intestinal epithelium

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~12 h
```

# 8. Table 18–1 — cultured mammalian fibroblast

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~20 h
```

# 9. Four canonical phases

```text
G1
S
G2
M
```

# 10. Interphase

```text
G1 + S + G2
```
constitute interphase.

# 11. S phase

DNA replication occurs during S phase.

# 12. G1 phase

Gap phase after M and before S. Cell grows and assesses whether conditions favor another division cycle.

# 13. G2 phase

Gap phase after S and before M. Cell continues growing and verifies that DNA replication is complete and DNA is sufficiently intact for mitosis.

# 14. M phase

```text
mitosis
+
cytokinesis
```

# 15. M-phase duration source example

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1 h
```
in a typical mammalian cell source framing.

# 16. Mitosis

Nuclear division and segregation of duplicated chromosomes.

# 17. Cytokinesis

Physical division of the cytoplasm into two daughter cells.

# 18. Interphase is biologically active

Interphase is not a dormant interval. Cells continue transcription, protein synthesis, metabolism, organelle duplication, growth, and preparation for later phases.

# 19. Embryonic cleavage divisions

Early embryos can run exceptionally rapid cycles that consist mainly of repeated S and M phases, with G1/G2 drastically shortened and little or no cell growth.

# 20. Cell size during cleavage

Because the embryo does not appreciably increase in mass during cleavage, successive daughter cells become progressively smaller.

# 21. Cell-cycle control system

A conserved regulatory network that:
- orders cell-cycle events
- triggers transitions
- checks completion
- pauses progression when conditions are unfavorable

# 22. Ordering constraint

```text
DNA replication must complete before chromosome segregation
```
is a fundamental control-system requirement.

# 23. Checkpoint concept

The source describes molecular brakes/checkpoints that can delay progression at critical transitions.

# 24. Three main control transitions

The chapter emphasizes:
```text
late G1 / Start
G2 → M
metaphase → anaphase
```

# 25. Start transition

Late-G1 decision point at which the cell commits to entering and generally completing another cell cycle.

# 26. Start checks extracellular conditions

Animal-cell proliferation requires suitable nutrient conditions and appropriate extracellular signals.

# 27. G0

A specialized nonproliferating state entered by cells that withdraw from active cycling.

# 28. G2-to-M checkpoint logic

Entry into mitosis is delayed if:
- DNA replication is incomplete
- DNA damage remains

# 29. Spindle-assembly checkpoint logic

Anaphase is delayed until all duplicated chromosomes are properly connected to the mitotic spindle.

# 30. Cell-cycle control is evolutionarily conserved

The source emphasizes strong conservation of core cyclins/Cdks and other cell-cycle regulators across eukaryotes.

# 31. Cdks

Cyclin-dependent protein kinases form the catalytic core of the cell-cycle control system.

# 32. Cdk abundance versus activity

Cdks can be present throughout the cycle while their activity rises and falls.

# 33. Cyclins

Regulatory proteins that bind Cdks and help activate/direct them.

# 34. Cyclin abundance oscillates

Unlike many Cdk proteins, cyclin concentrations rise and fall strongly during the cycle.

# 35. Cyclin–Cdk complexes phosphorylate targets

Active complexes trigger phase-specific events by phosphorylating selected proteins.

# 36. Cyclin also contributes target specificity

The source states that cyclins help direct Cdks toward appropriate target proteins.

# 37. G1-Cdk

Drives progression through G1 toward Start/S.

# 38. G1/S-Cdk

Helps trigger passage through Start and commitment to the cell cycle.

# 39. S-Cdk

Triggers initiation of DNA replication and helps prevent re-replication.

# 40. M-Cdk

Triggers the large-scale structural and biochemical rearrangements of M phase.

# 41. Table 18–2 — G1-Cdk

Source vertebrate pairing:
```text
Cyclin D + Cdk4/Cdk6
```

# 42. Table 18–2 — G1/S-Cdk

```text
Cyclin E + Cdk2
```

# 43. Table 18–2 — S-Cdk

```text
Cyclin A + Cdk2
```

# 44. Table 18–2 — M-Cdk

```text
Cyclin B + Cdk1
```

# 45. Cyclin accumulation

Cyclin concentrations rise gradually through continued transcription/translation.

# 46. Cyclin destruction

Selected cyclins fall abruptly because they are targeted for ubiquitin-dependent proteolysis.

# 47. APC/C

`anaphase-promoting complex / cyclosome` is a large ubiquitin-ligase complex used to destroy key cell-cycle regulators.

# 48. APC/C destroys M- and S-cyclins

Partway through M phase, APC/C promotes ubiquitylation and proteasomal destruction of M- and S-cyclins.

# 49. Cyclin destruction inactivates Cdk

Removing the cyclin returns its Cdk partner to an inactive state.

# 50. M-cyclin destruction enables mitotic exit

Loss of M-Cdk activity is a central trigger for reversing mitotic phosphorylation and returning the cell toward interphase.

# 51. Cdk activity requires more than cyclin binding

Cyclin binding alone is insufficient for full activity; phosphorylation state also matters.

# 52. Wee1

Inhibitory kinase that places inhibitory phosphates on M-Cdk in the source model.

# 53. Cdc25

Activating phosphatase that removes inhibitory phosphates from M-Cdk.

# 54. Abrupt M-Cdk activation

M-cyclin can accumulate gradually while M-Cdk activity remains low until Cdc25 activation removes inhibitory phosphates.

# 55. M-Cdk positive feedback

Activated M-Cdk:
```text
activates more Cdc25
+
inhibits Wee1
→ more M-Cdk activation
```
creating a switch-like transition into mitosis.

# 56. M-Cdk activation is self-reinforcing

The source describes the rise in M-Cdk as explosive/abrupt once the feedback loop passes threshold.

# 57. Cdk inhibitor proteins

Proteins can bind cyclin–Cdk complexes and block their kinase activity.

# 58. p27 source example

Figure 18–11 uses p27 as a Cdk inhibitor that blocks G1/S progression.

# 59. Protein phosphatases reverse Cdk effects

Cell-cycle transitions depend not only on kinase activity but also on selective removal of Cdk-added phosphates.

# 60. PP2A family

The source identifies PP2A phosphatases as important antagonists of Cdk-mediated phosphorylation.

# 61. PP2A-B55

A phosphatase that targets M-Cdk-phosphorylated proteins.

# 62. M-Cdk suppresses PP2A-B55 in early mitosis

This mutual antagonism lets mitotic phosphorylation accumulate rapidly.

# 63. Mitotic exit reverses the balance

When M-Cdk is inactivated, PP2A-B55 becomes active and dephosphorylates M-Cdk targets.

# 64. Kinase/phosphatase timing is ordered

Different targets are phosphorylated/dephosphorylated at different times because of:
- cyclin–Cdk specificity
- target affinity
- enzyme activity level
- phosphatase specificity
- localization

# 65. Hundreds of Cdk targets

`SOURCE_ERA_STATEMENT`: the chapter states Cdks phosphorylate hundreds of target proteins during cell-cycle progression.

# 66. How We Know — Xenopus egg system

Fertilized Xenopus eggs are large and divide synchronously, making stage-specific biochemical extracts possible.

# 67. Xenopus egg diameter

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
just over 1 mm
```

# 68. Early Xenopus cycles

They consist mainly of repeated S and M phases with very short or absent G1/G2 and essentially no new transcription.

# 69. MPF discovery

M-phase egg cytoplasm injected into a Xenopus oocyte drives it into M phase; interphase cytoplasm does not.

# 70. MPF

Historical term:
```text
maturation-promoting factor
```
later identified as M-Cdk.

# 71. MPF oscillation

Activity rises sharply before mitosis and falls rapidly near mitotic exit.

# 72. M-Cyclin discovery

Tim Hunt identified a clam-egg protein whose concentration rose through interphase and fell abruptly during M phase.

# 73. M-Cdk composition

```text
M-cyclin regulatory subunit
+
mitotic Cdk catalytic subunit
```

# 74. Yeast genetics contribution

Cell-cycle mutants in budding/fission yeast revealed genes encoding conserved cell-cycle regulators.

# 75. Cross-species conservation

The source notes that some human cell-cycle control genes can function when transferred into yeast.

# 76. Early G1 is a low-Cdk state

The control system resets after mitosis by:
- destroying cyclins
- suppressing new cyclin synthesis
- deploying Cdk inhibitors

# 77. Stable G1 state

Low Cdk activity provides a stable interval for growth, repair, and environmental assessment.

# 78. Mitogens

Extracellular signals that stimulate cell proliferation primarily by helping overcome the brakes on Start/S-phase entry.

# 79. Mitogen deprivation

Without adequate mitogen signaling, mammalian cells can arrest in G1 and may enter G0.

# 80. G0 duration

The source says cells can remain in G0 for:
```text
days, weeks, months, or lifetime
```
depending on cell type.

# 81. Terminal differentiation

Some differentiated cells permanently exit the cycle and dismantle/shut down major components of the cell-cycle control system.

# 82. Nerve and muscle source example

The chapter gives neurons and muscle cells as examples of cells that can become permanently nondividing after differentiation.

# 83. Liver-cell G0 source example

Many liver cells are normally in G0 but can re-enter proliferation after liver damage.

# 84. Adult division rates vary

Much of the variation in adult cell turnover reflects how long cells remain in G0/G1.

# 85. Rb protein

Retinoblastoma protein is a negative regulator of proliferation in the chapter's Start model.

# 86. Rb suppresses transcription

Dephosphorylated/active Rb binds transcription regulators needed for genes that promote S-phase entry.

# 87. Mitogens release the Rb brake

Mitogen signaling increases G1-Cdk/G1/S-Cdk activity.

# 88. Rb phosphorylation

G1-Cdk and G1/S-Cdk phosphorylate Rb, changing its conformation and releasing the transcription regulators.

# 89. S-phase gene expression

Released transcription regulators activate genes required for cell-cycle entry and DNA replication.

# 90. DNA damage can arrest G1

The cell-cycle control system can prevent replication of damaged DNA by blocking G1/S-Cdk and S-Cdk.

# 91. p53

DNA damage stabilizes/activates p53, a transcription regulator.

# 92. p21

p53 activates transcription of the gene encoding Cdk inhibitor p21.

# 93. p21 targets

p21 binds/inhibits:
```text
G1/S-Cdk
S-Cdk
```

# 94. Purpose of p53–p21 arrest

The pause gives the cell time to repair DNA before replication.

# 95. Severe DNA damage can lead to apoptosis

If damage is too extensive, p53 can contribute to activation of programmed cell death.

# 96. p53 cancer source statement

`SOURCE_ERA_STATEMENT`: the chapter states mutations in p53 occur in:
```text
about half of human cancers
```

# 97. S-phase fidelity requirement

The genome must be copied:
```text
completely
accurately
once—and only once
```
per cell cycle.

# 98. Replication origins

DNA sequences at which replication initiation machinery is assembled.

# 99. ORC

`origin recognition complex` remains associated with replication origins through the cell cycle in the source model.

# 100. Cdc6

Protein whose concentration rises in early G1 and cooperates with ORC to load DNA helicases onto replication origins.

# 101. Origin loading

```text
ORC + Cdc6
→ helicase loading
→ licensed/loaded origin
```

# 102. Origin firing

At S phase:
```text
S-Cdk
→ helicase activation
→ DNA-polymerase/replisome recruitment
→ replication initiation
```

# 103. S-Cdk blocks re-replication

S-Cdk phosphorylates Cdc6 and ORC, preventing helicases from being reloaded at already-fired origins.

# 104. Replication licensing resets in next G1

When Cdk activity falls in the next G1, ORC/Cdc6 can again prepare origins for a new round.

# 105. Replication-stress checkpoint

Stalled replication generates single-stranded DNA and a damage response that inhibits Cdc25.

# 106. Cdc25 inhibition delays mitosis

```text
replication incomplete
→ Cdc25 inhibited
→ inhibitory phosphates remain on M-Cdk
→ M-Cdk inactive
→ M phase delayed
```

# 107. M phase reorganizes almost the entire cell

The cell condenses chromosomes, builds a spindle, dismantles/rebuilds the nuclear envelope, changes cortical architecture, segregates organelles, and divides.

# 108. M-Cdk drives early mitosis

A single regulatory complex coordinates many distinct early mitotic rearrangements by phosphorylating numerous targets.

# 109. M-Cdk prepares chromosomes

M-Cdk contributes to chromosome condensation/segregation readiness.

# 110. M-Cdk promotes spindle assembly

M-Cdk helps reorganize microtubules and associated proteins into the mitotic spindle.

# 111. M-Cdk also prepares mitotic exit

M-Cdk activates APC/C after a delay, ultimately causing M-cyclin destruction and M-Cdk inactivation.

# 112. Sister chromatids

After replication, each duplicated chromosome contains two identical sister chromatids.

# 113. Cohesin

Protein complexes that hold sister chromatids together after DNA replication.

# 114. Cohesin loading

The source states cohesins assemble along chromatids during S phase.

# 115. Sister cohesion is essential

Premature loss of cohesion can cause chromosome-segregation errors.

# 116. Aneuploidy

Abnormal chromosome number caused by segregation errors; source states this often has deleterious or lethal consequences.

# 117. Condensin

Related ring-shaped protein complexes that promote chromosome condensation.

# 118. Chromosome condensation

Condensins help reorganize long replicated chromatids into compact, individually resolvable mitotic chromosomes.

# 119. Condensin loop model

The source depicts condensins helping form/organize DNA loops during mitotic compaction.

# 120. Partial cohesin removal from chromosome arms

During early mitosis, many arm cohesins are removed while strong sister association persists at the centromere until anaphase.

# 121. Classical duplicated chromosome

At mitosis:
```text
two compact sister chromatids
joined most strongly near centromere
```

# 122. Two transient cytoskeletal machines

```text
mitotic spindle:
microtubule-based
→ chromosome segregation

contractile ring:
actin/myosin-based
→ animal-cell cytokinesis
```

# 123. Mitosis stages

```text
prophase
prometaphase
metaphase
anaphase
telophase
```

# 124. Cytokinesis overlaps mitosis

Cytokinesis usually starts during anaphase/telophase before mitosis has fully ended.

# 125. Centrosome duplication

In animal cells, centrosome duplication starts around the onset of S phase and is completed by the end of G2.

# 126. Cell-cycle trigger for centrosome duplication

The source links centrosome duplication to the same G1/S-Cdk and S-Cdk activities that initiate DNA replication.

# 127. Two centrosomes form spindle poles

As M phase begins:
```text
duplicated centrosomes separate
→ each nucleates an aster
→ asters move apart
→ spindle poles form
```

# 128. Centrosomes are helpful but not universally required for bipolar spindle formation

The source shows that chromosomes and motors can organize a bipolar spindle even in cells lacking centrosomes.

# 129. Mitotic spindle

A dynamic microtubule-based machine containing:
- kinetochore microtubules
- non-kinetochore/interpolar microtubules
- astral microtubules
- motors and other MAPs

# 130. Mitotic microtubules are unusually dynamic

M-Cdk-dependent changes in microtubule-associated proteins increase dynamic instability at mitotic entry.

# 131. Kinetochore microtubules

Microtubules whose plus ends attach to chromosome kinetochores.

# 132. Non-kinetochore microtubules

Dynamic microtubules that overlap/cross-link throughout the spindle and help establish bipolar organization.

# 133. Astral microtubules

Microtubules radiating from spindle poles toward the cell cortex.

# 134. Spindle is a dynamic meshwork

The chapter explicitly warns against imagining interpolar microtubules as a few static continuous rods; the spindle contains many short, changing, overlapping filaments.

# 135. Prophase

Key events:
- chromosome condensation
- early spindle assembly
- centrosome separation
- nuclear envelope still intact

# 136. Prometaphase begins with nuclear-envelope breakdown

The source describes this transition as abrupt.

# 137. Nuclear-envelope breakdown mechanism

Mitosis-associated phosphorylation of:
- nuclear pore proteins
- nuclear lamins
promotes disassembly of nuclear-envelope architecture.

# 138. Kinetochore

Protein complex assembled at each chromatid's centromere that mediates attachment to spindle microtubules.

# 139. Centromere versus centrosome

```text
centromere:
chromosomal DNA region

centrosome:
cellular MTOC
```
These are completely different structures.

# 140. Two kinetochores per duplicated chromosome

One kinetochore forms on each sister chromatid.

# 141. Sister kinetochores face opposite directions

This geometry biases attachment toward opposite spindle poles.

# 142. Kinetochore attachment remains dynamic

Kinetochore connector proteins can remain associated with microtubules while plus ends grow or shrink.

# 143. Mammalian kinetochore microtubule count

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~20–40 microtubules / kinetochore
```
in the source comparison.

# 144. Yeast kinetochore source comparison

The source states a yeast kinetochore can bind:
```text
1 microtubule
```

# 145. Non-kinetochore abundance

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: a mature mammalian spindle can contain tens to hundreds of thousands of non-kinetochore microtubules.

# 146. Bi-orientation

Correct attachment state:
```text
sister kinetochore A → pole 1
sister kinetochore B → pole 2
```

# 147. Tension stabilizes correct attachment

Opposing spindle forces generate tension across sister kinetochores; this tension signals/stabilizes proper bi-orientation.

# 148. Incorrect same-pole attachments are unstable without tension

The source experiment with a glass needle shows artificially applied tension can stabilize otherwise incorrect same-pole attachments, supporting a tension-based correction mechanism.

# 149. Metaphase

Chromosomes align near the spindle equator/metaphase plate.

# 150. Metaphase alignment is dynamic

Chromosomes oscillate around the equator rather than being statically deposited there.

# 151. Metaphase tension

Sister chromatids are suspended under opposing forces from the two spindle poles.

# 152. Metaphase requires ongoing microtubule turnover

Blocking tubulin addition with colchicine allows continued loss, causing the metaphase spindle to disappear.

# 153. Anaphase begins abruptly

The trigger is destruction of the remaining sister-chromatid cohesion.

# 154. Separase

Protease that cleaves cohesin to permit sister separation.

# 155. Securin

Inhibitory protein that keeps separase inactive before anaphase.

# 156. APC/C destroys securin

At anaphase onset:
```text
APC/C active
→ securin ubiquitylated/degraded
→ separase released
→ cohesin cleaved
→ sisters separate
```

# 157. APC/C therefore controls two linked transitions

It promotes:
- sister-chromatid separation through securin destruction
- mitotic exit through cyclin destruction

# 158. Unattached kinetochore generates a stop signal

A chromosome not properly attached to spindle microtubules inhibits APC/C activation.

# 159. Spindle assembly checkpoint

Until all chromosomes are properly attached:
```text
APC/C remains inhibited
→ securin persists
→ cohesin persists
→ anaphase blocked
→ M-cyclin persists
→ mitosis prolonged
```

# 160. Checkpoint is global

One unattached chromosome can delay separation of all sister chromatids.

# 161. Chromosome speed in anaphase

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1 μm/min
```
in the source description.

# 162. Anaphase A

```text
kinetochore microtubules shorten
→ chromosomes move toward poles
```

# 163. Anaphase-A force source model

The source favors a model in which depolymerizing microtubules and kinetochore-associated binding proteins generate poleward force.

# 164. Kinetochore coupling during depolymerization

Kinetochore connector proteins can detach/rebind to the sides of a shortening microtubule so the chromosome tracks the retreating plus end.

# 165. Anaphase-A motor model is not favored by source

The official answer explicitly says there is little evidence in this textbook framing that motor proteins are required for the chromosome's anaphase-A movement.

# 166. Anaphase B

```text
spindle poles move apart
```
to further separate chromosome sets.

# 167. Anaphase-B interpolar sliding

Plus-end-directed motors cross-link antiparallel non-kinetochore microtubules and slide them apart, pushing poles apart.

# 168. Anaphase-B cortical pulling

Dynein anchored at the cortex pulls on astral microtubules and helps separate spindle poles.

# 169. Plus-end growth contributes to spindle elongation

The source figure also includes plus-end polymerization of interpolar microtubules as a contributor to pole separation.

# 170. Telophase

Separated chromosomes arrive at opposite spindle poles and two daughter nuclei begin to form.

# 171. Spindle disassembly

Mitotic spindle architecture is dismantled during telophase/mitotic exit.

# 172. Nuclear-envelope reassembly

Nuclear-envelope membranes reform around each chromosome cluster.

# 173. Lamin/pore dephosphorylation

Dephosphorylation reverses the mitotic disassembly of nuclear lamins and nuclear-pore proteins.

# 174. Chromosome decondensation

After nuclear-envelope reformation, condensed mitotic chromosomes return toward interphase chromatin organization.

# 175. Nuclear protein sorting is restored

Reassembled pores selectively import nuclear proteins after the envelope encloses the chromosome mass.

# 176. Animal-cell cytokinesis

Uses a transient actin/myosin contractile ring.

# 177. Cleavage furrow

The first visible surface indentation created by contraction beneath the plasma membrane.

# 178. Cytokinesis begins during anaphase

The process normally starts before telophase is complete.

# 179. Spindle specifies cleavage plane

Cleavage is positioned roughly midway between spindle poles and perpendicular to the long spindle axis.

# 180. Spindle-repositioning experiment

If the spindle is moved early after furrow formation, the original furrow can disappear and a new furrow forms relative to the new spindle position.

# 181. Late furrow becomes autonomous

Once cytokinesis is sufficiently advanced, cleavage can continue even if the spindle is removed/disassembled.

# 182. Central spindle signal

The chapter's model proposes overlapping central-spindle microtubules recruit signaling proteins that activate cortical machinery.

# 183. RhoA

Figure 18–32 identifies RhoA activation at the cortex as a signal promoting contractile-ring assembly/contraction.

# 184. Contractile ring composition

Mainly:
```text
actin filaments
+
myosin filaments
```

# 185. Contractile ring is membrane-associated

The ring is attached to proteins on the cytosolic side of the plasma membrane.

# 186. Contractile force

Myosin-driven sliding of actin filaments contributes strongly to constriction.

# 187. Contractile ring is transient

It:
```text
assembles
→ constricts
→ becomes smaller
→ disassembles after division
```

# 188. Mitotic cell rounding

Cultured animal cells often round up in M phase as adhesions and cortical architecture are reorganized.

# 189. Integrin phosphorylation source model

The source says phosphorylation of some integrins weakens substrate attachment as cells enter M phase.

# 190. Asymmetric spindle position

If the spindle is displaced from the cell center, the cleavage plane can generate daughter cells of unequal size.

# 191. Developmental asymmetric division

The source notes that unequal daughter cells can inherit different molecules and develop into different cell types.

# 192. Plant cytokinesis differs fundamentally

Rigid cell walls prevent animal-style cleavage by a surface contractile ring.

# 193. Phragmoplast

Microtubule-based structure derived from spindle remnants that guides formation of the new cell wall.

# 194. Golgi-derived vesicles

Vesicles carrying cell-wall polysaccharides/glycoproteins are transported along phragmoplast microtubules toward the division plane.

# 195. Cell plate

Vesicles fuse into a disk-like membrane-enclosed structure that grows outward.

# 196. Plant cytokinesis expansion

Further vesicle fusion expands the new partition until it reaches/fuses with the parental plasma membrane/cell wall.

# 197. Cellulose deposition

Cellulose microfibrils are later added to complete the new wall.

# 198. Membrane topology in plant cytokinesis

Golgi-vesicle lumen becomes extracellular/cell-wall-facing space after fusion, preserving endomembrane topology.

# 199. Organelle inheritance

Membrane-enclosed organelles must also be partitioned between daughter cells.

# 200. Mitochondria/chloroplasts

Because they exist in many copies and grow/divide from preexisting organelles, approximately doubling their number is sufficient for both daughters to inherit them.

# 201. ER during mitosis

The source says the ER remains largely intact in most cells and is partitioned during cytokinesis after microtubule reorganization releases its normal interphase architecture.

# 202. Golgi during mitosis

Golgi fragments; fragments associate with spindle microtubules through motors and are distributed to daughters as the spindle elongates.

# 203. Random inheritance is acceptable for numerous equivalent components

Ribosomes, soluble proteins, and many other components can be distributed approximately randomly because large copy numbers make roughly equal partition likely.

# 204. Chromosomes cannot be randomly inherited

There are only two copies of each replicated chromosome, and every daughter needs exactly one; active spindle segregation is therefore essential.

# 205. Three determinants of animal organ/body size

The chapter emphasizes:
```text
cell growth
cell division
cell death
```

# 206. Cell behavior is socially regulated

Animal cells depend heavily on signals from other cells to decide whether to survive, grow, or proliferate.

# 207. Mitogens versus growth factors versus survival factors

The source distinguishes:
```text
mitogen:
stimulates cell-cycle entry/division

growth factor:
increases cell mass

survival factor:
suppresses apoptosis
```

# 208. Categories can overlap

A single extracellular signal protein can have more than one of these functions.

# 209. Cell proliferation versus cell growth

The source explicitly distinguishes:
```text
cell proliferation = increase in cell number
cell growth = increase in size/mass
```

# 210. PDGF

Platelet-derived growth factor is used as a canonical mitogen example.

# 211. PDGF in wound response

Platelets in a clot release PDGF, which activates RTKs on nearby surviving cells and stimulates proliferation during repair.

# 212. Hepatocyte growth factor

Source example of a signal that helps stimulate surviving liver cells to proliferate after liver injury/loss.

# 213. Growth factors increase net macromolecular accumulation

They can:
```text
increase synthesis
+
decrease degradation
```

# 214. RTK–PI3K–Akt–Tor growth pathway

Figure 18–36 connects extracellular growth-factor signaling through:
```text
RTK
→ PI3K
→ Akt
→ Tor
→ protein synthesis ↑
  protein degradation ↓
→ cell growth
```

# 215. Cell growth can continue after permanent cell-cycle exit

The source uses neurons and many muscle cells as examples of cells that can enlarge after terminal differentiation.

# 216. Cell-size control remains incompletely understood

The textbook explicitly says animal-cell size regulation is still poorly understood compared with cell division.

# 217. Apoptosis

A common form of programmed cell death in animals.

# 218. Apoptosis contributes to development

Examples include:
- removal of interdigital tissue
- tadpole-tail elimination during metamorphosis

# 219. Apoptosis contributes to tissue homeostasis

Adult tissues balance cell production with programmed cell death.

# 220. Developing nervous system source statement

`SOURCE_SCALE` / `VERIFY_QUANT`: the source says more than half of some newly generated neuron types can die during normal development.

# 221. Adult-cell-death source statement

`SOURCE_ERA_STATEMENT`: the source states billions of cells in human bone marrow and intestine die every hour.

# 222. Necrosis

Cell death from acute injury characterized in the source by swelling, membrane rupture, content leakage, and inflammatory consequences.

# 223. Apoptotic morphology

Typical source features:
- surface blebbing
- shrinkage/condensation
- cytoskeletal collapse
- nuclear-envelope breakdown
- DNA fragmentation
- rapid phagocytic removal

# 224. Apoptosis usually preserves membrane integrity long enough for clearance

This prevents widespread leakage of intracellular contents into surrounding tissue.

# 225. Caspases

Family of proteases central to apoptotic execution.

# 226. Caspases are synthesized inactive

Apoptotic proteases are made as inactive precursors and activated when death signaling begins.

# 227. Initiator caspases

Upstream caspases that activate downstream executioner caspases.

# 228. Executioner caspases

Proteases that cleave many cellular substrates and physically dismantle the cell.

# 229. Caspase cascade

```text
apoptotic signal
→ initiator caspase activation
→ executioner caspase activation
→ many substrate cleavages
→ apoptosis
```

# 230. Lamin cleavage

One executioner-caspase target is the nuclear lamina; lamin cleavage contributes to irreversible nuclear-envelope breakdown.

# 231. Apoptosis is switch-like

The source describes apoptosis as becoming effectively irreversible after a critical activation point.

# 232. Bcl2 family

Intracellular protein family containing both pro-apoptotic and anti-apoptotic members.

# 233. Bax and Bak

Pro-apoptotic Bcl2-family proteins that promote mitochondrial cytochrome-c release.

# 234. Bcl2

Anti-apoptotic family member that opposes Bax/Bak-mediated cytochrome-c release.

# 235. Mitochondrial cytochrome-c release

In the source intrinsic pathway:
```text
Bax/Bak activation
→ cytochrome c exits mitochondrial intermembrane space
→ cytosolic death machinery activated
```

# 236. Apoptosome

Large seven-armed protein complex assembled in response to cytosolic cytochrome c.

# 237. Apoptosome caspase recruitment

`SOURCE_SCALE` / `SOURCE_MODEL`:
```text
7 caspase-9 molecules recruited
```
in Figure 18–42.

# 238. Caspase-9

Initiator caspase activated in the apoptosome in the source model.

# 239. Extrinsic apoptosis

Apoptotic signals can also originate outside the cell through death receptors.

# 240. Fas

Death receptor on the cell surface used as the source example.

# 241. Fas ligand

Membrane-bound ligand on killer lymphocytes in the source example.

# 242. Death-inducing signaling complex

Fas activation assembles a receptor-associated complex that activates initiator caspases and launches the death cascade.

# 243. Survival factors

Extracellular signals that suppress the intrinsic apoptotic program.

# 244. Developing-neuron competition

The source model:
```text
too many neurons generated
→ limited target-derived survival factor
→ cells receiving enough survive
→ cells receiving too little undergo apoptosis
```

# 245. Survival signaling can raise Bcl2

Figure 18–44 gives a pathway in which survival-factor signaling increases Bcl2 transcription and suppresses apoptosis.

# 246. Some signals inhibit growth/division/survival

Extracellular communication includes negative regulators as well as positive signals.

# 247. Myostatin

Secreted signal that inhibits growth/proliferation of skeletal-muscle precursor cells in the source example.

# 248. Myostatin deletion source phenotype

`SOURCE_ERA_STATEMENT`: deletion/mutation can markedly increase muscle mass through effects on muscle-cell number and size.

# 249. Cancer as loss of social control

The source frames cancer cells as becoming less dependent on normal extracellular controls over proliferation, growth, and survival.

`LATER_CHAPTER_REFINEMENT`: Chapter 20.

# 250. Cell-cycle WorldState schema

```yaml
cell_cycle:
  phase: G0 | G1 | S | G2 | M
  subphase:
    - prophase
    - prometaphase
    - metaphase
    - anaphase
    - telophase
    - cytokinesis
  DNA_replication_state:
  DNA_damage_state:
  centrosome_state:
  spindle_state:
  chromosome_attachment_state:
  APC_C_state:
  cytokinesis_state:
```

# 251. Cyclin–Cdk schema

```yaml
cyclin_Cdk:
  complex_type: G1 | G1_S | S | M
  cyclin_abundance:
  Cdk_abundance:
  cyclin_bound:
  inhibitory_phosphates:
  activating_state:
  inhibitor_bound:
  kinase_activity:
```

# 252. Checkpoint schema

```yaml
checkpoint:
  type: Start | DNA_damage | replication_complete | spindle_assembly
  input_state:
  stop_signal:
  target:
  satisfied:
  transition_allowed:
```

# 253. Replication-origin licensing schema

```yaml
replication_origin:
  ORC_bound:
  Cdc6_bound:
  helicase_loaded:
  fired:
  S_Cdk_state:
  reloading_blocked:
```

# 254. Chromosome mitotic-state schema

```yaml
mitotic_chromosome:
  sister_chromatids:
  cohesin_state:
  condensin_state:
  condensation_level:
  kinetochore_A:
  kinetochore_B:
  bi_oriented:
  tension:
  segregation_state:
```

# 255. Kinetochore attachment schema

```yaml
kinetochore:
  attached_microtubules:
  spindle_pole_identity:
  attachment_stability:
  tension:
  checkpoint_signal:
```

# 256. Spindle schema

```yaml
mitotic_spindle:
  pole_A:
  pole_B:
  kinetochore_microtubules:
  interpolar_microtubules:
  astral_microtubules:
  motors:
  spindle_length:
  metaphase_plate:
  checkpoint_satisfied:
```

# 257. APC/C schema

```yaml
APC_C:
  active:
  securin_ubiquitylation:
  M_cyclin_ubiquitylation:
  S_cyclin_ubiquitylation:
  anaphase_permission:
  mitotic_exit_permission:
```

# 258. Cytokinesis schema

```yaml
cytokinesis:
  cleavage_plane:
  central_spindle_signal:
  RhoA_state:
  actin_ring:
  myosin_ring:
  furrow_depth:
  abscission_state:
```

# 259. Plant-cytokinesis schema

```yaml
plant_cytokinesis:
  phragmoplast:
  Golgi_vesicles:
  cell_plate:
  outward_expansion:
  plasma_membrane_fusion:
  cellulose_deposition:
```

# 260. Apoptosis schema

```yaml
apoptosis:
  trigger:
  Bax_Bak_state:
  Bcl2_state:
  cytochrome_c_release:
  apoptosome_state:
  initiator_caspase_state:
  executioner_caspase_state:
  membrane_integrity:
  phagocytic_clearance:
```

# 261. Growth-control schema

```yaml
growth_control:
  mitogen_signal:
  growth_factor_signal:
  survival_factor_signal:
  Rb_state:
  p53_state:
  p21_state:
  Tor_state:
  proliferation_permission:
  growth_rate:
  survival_state:
```

# 262. Project rule — phase is biological state, not UI chapter

G1/S/G2/M must alter actual WorldState: chromosome copy number, Cdk activity, organelle organization, microtubule behavior, nuclear-envelope state, and more.

# 263. Project rule — checkpoints are conditional gates

A checkpoint should read biological state and block/permit a transition; it must not be a fixed timer.

# 264. Project rule — cyclin abundance and Cdk activity are separate variables

Cyclin can accumulate while Cdk remains inactive due to inhibitory phosphorylation/inhibitors.

# 265. Project rule — mitotic entry is switch-like

M-Cdk positive feedback should generate a sharp transition, not a linear fade between G2 and M.

# 266. Project rule — mitotic exit is actively caused

M-cyclin destruction, Cdk inactivation, and phosphatase reactivation causally reverse mitotic phosphorylation.

# 267. Project rule — chromosome duplication is not chromosome condensation

S phase creates sister chromatids; mitotic condensation later changes their physical organization.

# 268. Project rule — sister chromatids remain distinct identities

A replicated chromosome should become two persistent sister-chromatid entities joined by cohesion, not one object duplicated only at metaphase.

# 269. Project rule — centromere, kinetochore, centrosome are distinct

Never merge these terms or spatial entities.

# 270. Project rule — spindle microtubules are dynamic

Do not model spindle fibers as rigid rods created once and left unchanged.

# 271. Project rule — attachment and stable bi-orientation are different states

Initial microtubule–kinetochore contact can be reversible. Stable correct attachment emerges through opposing-pole tension.

# 272. Project rule — anaphase cannot begin while checkpoint stop signals remain

Unattached/incorrect kinetochores should prevent APC/C-dependent sister separation in the default source-derived model.

# 273. Project rule — anaphase A and B are distinct mechanisms

```text
A:
chromosome-to-pole movement

B:
pole-to-pole spindle elongation
```
They overlap temporally but should not be collapsed.

# 274. Project rule — nuclear-envelope breakdown is a state transition

Prometaphase should alter lamins, pore complexes, membrane organization, and accessibility of spindle microtubules to chromosomes.

# 275. Project rule — nuclear-envelope reformation encloses chromosomes first

This geometry helps prevent random cytosolic proteins from being trapped inside the daughter nucleus before selective import resumes.

# 276. Project rule — cleavage-plane geometry comes from the spindle

Animal cytokinesis must be spatially coordinated with the spindle and chromosome positions.

# 277. Project rule — animal and plant cytokinesis are different mechanisms

Do not reuse a contractile-ring animation for plant cells.

# 278. Project rule — random partition works only for high-copy components

Chromosomes require exact segregation; many small equivalent organelle fragments/components can be partitioned approximately stochastically.

# 279. Project rule — apoptosis is active biological execution

Do not render apoptosis as generic fading/disappearance. It is a caspase-driven state cascade with structural dismantling and clearance.

# 280. Project rule — apoptosis and necrosis are not interchangeable

The source contrasts orderly membrane-preserving apoptotic clearance with injury-associated membrane rupture/leakage in necrosis.

# 281. Project rule — survival is an actively maintained state

For many animal cells, absence of required survival signaling can permit the intrinsic death program to activate.

# 282. Question 18–1 — uninterrupted chain of cell division

Official answer: essentially yes, if 'first cell division' means the successful founder lineage that gave rise to extant life; unsuccessful early lineages may also have existed.

# 283. Question 18–2 — DNA-content flow cytometry

Official answer:
```text
peak A → G1
between peaks → S
peak B → G2 + mitosis
```
The largest population is in G1, so G1 is longest in the measured population.

# 284. Question 18–3 — why G0 instead of indefinitely pausing in G1

Official answer: G0 provides more stable protection from accidental proliferation because much of the control system is dismantled. Re-entry requires rebuilding components rather than simply releasing a temporary G1 pause.

# 285. Question 18–4 — replicating damaged DNA

Official answer: mutations are copied into daughter cells, increasing the chance that descendant cells acquire harmful/cancer-promoting changes.

# 286. Question 18–5 — serial M-phase cytoplasm injection

Official answer: injected active M-Cdk activates the recipient's preexisting inactive M-Cdk through Cdc25-dependent positive feedback. Each recipient therefore generates a full new pool of active M-Cdk, explaining why activity does not dilute away through serial transfer.

# 287. Question 18–6 — kinetochore attachment and tension

Official answer:
- kinetochores are not preassigned to a particular spindle pole
- attachments form with microtubules they encounter
- opposing tension stabilizes correct bi-orientation
- erroneous same-pole attachments tend to be lost if tension is absent

# 288. Question 18–7 — re-sorting nuclear proteins

Official answer: nuclear envelope reassembles closely around chromosomes, excluding bulk cytosol; selective nuclear import through reformed pores then restores the characteristic nuclear protein composition.

# 289. Question 18–8 — membrane topology in plant cell-wall formation

Official answer: Golgi-vesicle membranes become daughter-cell plasma membrane. Vesicle luminal contents become cell-wall matrix, and lumen-facing membrane-protein domains end up facing the new extracellular/cell-wall space.

# 290. Question 18–9 — why chromosomes cannot partition randomly

Official answer: each daughter requires exactly one copy of every chromosome. Random partition of only two copies gives a high risk of missing/extra chromosomes, whereas many equivalent Golgi fragments can distribute approximately equally by chance.

# 291. Question 18–10 — why apoptosis is orderly

Official answer: large-scale programmed cell death must avoid tissue-injury alarms, inflammation, leakage of intracellular molecules, and inappropriate immune/wound-healing responses.

# 292. Question 18–11 — exponential growth calculation

Official calculation:
```text
cell mass after N divisions = 2^N × 10^-9 g
70 kg = 7×10^4 g

2^N = 7×10^13
N ≈ 46
```
At one division/day:
```text
~46 days
```
The real human body takes much longer because exponential proliferation occurs only briefly and many cells later stop dividing or differentiate.

# 293. Question 18–12 — cleavage divisions

Official answer: early eggs contain large stores of cell components. Daughter cells become progressively smaller without net growth. G1 and G2 are nearly absent; G1 is the phase most drastically reduced.

# 294. Question 18–13A — radiation arrests division

DNA damage activates a p53/p21-dependent checkpoint that inhibits cell-cycle progression while repair occurs.

# 295. Question 18–13B — checkpoint-defective irradiated cell

It can replicate damaged DNA and pass mutations into daughter cells.

# 296. Question 18–13C — checkpoint defect without deliberate irradiation

Official answer: cells can still progress normally when undamaged, but are more mutation-prone because endogenous/natural DNA damage occurs continuously.

# 297. Question 18–13D — lethal radiation and adult cell division

Official answer: continuing cell division is essential even in adults because high-turnover populations such as blood and epithelia require continuous replacement.

# 298. Question 18–13 red-blood-cell source estimate

`SOURCE_ERA_STATEMENT`:
```text
~10^11 new red blood cells/day
```
in the official answer.

# 299. Question 18–14A — radioactive thymidine labeling

Only cells in S phase during the short pulse incorporate radioactive thymidine into newly synthesized DNA.

# 300. Question 18–14B — initial absence of labeled mitoses

Mitotic cells are not synthesizing DNA; labeled S-phase cells must first finish S and traverse G2 before reaching mitosis.

# 301. Question 18–14C — rise, fall, rise

The first rise reflects pulse-labeled S-phase cells entering mitosis; the later fall occurs as they exit and unlabeled cells replace them; the second rise around 20 h reflects labeled descendants entering another mitosis.

# 302. Question 18–14D — G2 estimate

Official answer:
```text
~2 h
```
from the initial lag between the pulse and first labeled mitotic cells.

# 303. Question 18–15 — M-cyclin drop

Official answer:
```text
M-cyclin degradation
→ M-Cdk inactivation
→ target dephosphorylation
→ spindle disassembly
→ nuclear-envelope reassembly
→ chromosome decondensation
→ mitotic exit
```
Mechanistically, APC/C ubiquitylates M-cyclin for proteasomal degradation after a delay following M-Cdk activation.

# 304. Question 18–16 — slow cyclin rise, abrupt M-Cdk activation

Official answer: M-cyclin accumulates gradually, but M-Cdk is held inactive by inhibitory phosphorylation. Once Cdc25 crosses the activation threshold, positive feedback rapidly activates the accumulated pool.

# 305. Question 18–17 — mitotic-stage order

Official answer:
```text
prophase
→ prometaphase
→ metaphase
→ anaphase
→ telophase
```
Together these constitute mitosis. Cytokinesis overlaps anaphase/telophase and completes M phase.

# 306. Question 18–18 — mitotic microtubule length

Given:
```text
interphase lifetime = 300 s
mitotic lifetime = 15 s
interphase length = 20 μm
```
same growth rate gives:
```text
20 μm × 15/300 = 1 μm
```

# 307. Question 18–19 — opposing spindle motors

Official answer:
```text
plus-end-directed motors on antiparallel interpolar MTs
→ push poles apart

minus-end-directed motors
→ tend to pull poles together
```
The balance contributes to spindle length.

# 308. Question 18–20 — chromatid commitment

Official answer: initial commitment occurs when a spindle-pole microtubule attaches to the chromatid's kinetochore. The fate remains reversible until the sister kinetochore attaches to the opposite pole and tension stabilizes the pair. Chromatid position/orientation when the nuclear envelope breaks down can influence which pole is encountered first.

# 309. Question 18–21 — shrinking microtubule while retaining chromosome

Official answer says the exact force mechanism is not fully certain. The favored model in this source is that kinetochore-associated microtubule-binding proteins cling to the sides of the depolymerizing microtubule, repeatedly detach/rebind, and allow the kinetochore to move poleward while staying coupled to the shortening end.

# 310. Question 18–22 — both sisters in one daughter

Official answer lists possible failures:
- microtubule/kinetochore breakage during anaphase
- both kinetochores attached to one pole
- failure to remove cohesin
- chromosome never engages spindle

Checkpoint mechanisms normally correct many attachment errors. Consequences include abnormal chromosome dosage: one daughter can receive one copy where the other receives three in the diploid source framing.

# 311. Question 18–23A

`TRUE`: centrosomes duplicate during interphase before M phase.

# 312. Question 18–23B

`TRUE`: sister chromatids arise from DNA replication and remain paired through metaphase until anaphase.

# 313. Question 18–23C

`FALSE`: interpolar microtubules overlap; they are not simply joined end-to-end into one continuous pole-to-pole fiber.

# 314. Question 18–23D

`FALSE`: microtubule dynamics/motors are essential for mitosis, not DNA replication itself.

# 315. Question 18–23E

`FALSE`: the statement confuses centromere and centrosome. Kinetochores assemble at chromosome centromeres; microtubules are nucleated from MTOCs/centrosomes in the animal-cell model.

# 316. Question 18–24 — anti-myosin antibody

Official answer:
- anaphase chromosome movement: little/no effect, because this depends on microtubules and associated machinery
- cytokinesis: blocked, because contractile-ring constriction requires actin–myosin function

# 317. Question 18–25 — necrosis versus apoptosis micrographs

Official answer: necrotic cells show membrane rupture and leakage, whereas apoptotic cells remain membrane-enclosed/condensed until phagocytosed. Apoptotic nuclei show dramatic structural changes consistent with lamina breakdown.

# 318. Question 18–26A

`FALSE`: there is no G1→M transition; the nutrient/environmental commitment discussed applies to G1→S/Start.

# 319. Question 18–26B

`TRUE`: apoptosis is mediated by caspases, including executioner caspases that can cleave lamins.

# 320. Question 18–26C

`TRUE`: developing neurons compete for limited survival factors.

# 321. Question 18–26D

`TRUE`: source emphasizes cross-species conservation of some vertebrate/yeast cell-cycle regulators.

# 322. Question 18–26E

`TRUE`: Cdk activity depends both on cyclin association and Cdk phosphorylation state.

# 323. Question 18–27 — cells versus human social rules

Official answer uses the analogy that cells in a multicellular organism must behave for the organism's benefit; loss of such cooperative control can produce cancer. The source also notes that literal transfer of cellular rules—such as programmed self-destruction—to human society would be unacceptable.

# 324. Question 18–28 — increasing animal size

Official answer favors, at the conceptual level, altering extracellular growth/proliferation/survival signaling rather than blocking apoptosis or p53.

The source warns:
- blocking apoptosis disrupts normal development
- blocking p53 raises mutation/cancer risk
- broad growth-factor/mitogen manipulation is difficult because tissues respond differently

`DO_NOT_INFER`: this textbook thought experiment is not an implementation recipe for engineering animals.

# 325. Question 18–28 growth-hormone source example

`SOURCE_ERA_STATEMENT`: the official answer describes a mouse with very high growth-hormone output reaching nearly twice normal size despite roughly fiftyfold hormone overproduction.

# 326. Question 18–29 — why normal wound PDGF does not cause cancer

Official answer: normal PDGF release is local, temporary, and stops as wound signaling resolves. Oncogenic PDGF expression is uncontrolled/persistent, and mutant cells may also inappropriately express their own PDGF receptor, creating autocrine proliferation.

# 327. Question 18–30A — cannot degrade M-cyclin

Official answer:
```text
cell enters mitosis
but cannot exit mitosis
```

# 328. Question 18–30B — constitutively high p21

Official answer:
```text
permanent G1 arrest
```
because G1/S and S-phase Cdks remain inhibited.

# 329. Question 18–30C — cannot phosphorylate Rb

Official answer: Rb remains inhibitory, required transcription regulators remain blocked, and cell-division genes cannot be activated.

# 330. Question 18–31 — alcoholism versus liver cancer

Official answer:
- chronic alcohol exposure damages/overburdens liver and activates normally regulated regenerative proliferation
- liver cancer involves mutations that remove normal proliferation controls, causing continued autonomous division

The source says noncancerous regenerative enlargement can regress when the damaging stimulus is removed, provided severe scarring/damage has not occurred.

# 331. Source quantitative register

| Quantity | Chapter 18 source value/context |
|---|---:|
| early fly embryo cycle | ~8 min |
| early frog embryo cycle | ~30 min |
| intestinal epithelial cycle | ~12 h |
| cultured fibroblast cycle | ~20 h |
| mammalian M phase | ~1 h |
| Xenopus egg diameter | >1 mm |
| human p53 mutation statement | ~half of cancers |
| mammalian kinetochore MTs | ~20–40 |
| yeast kinetochore MTs | 1 |
| mature spindle non-kinetochore MTs | tens–hundreds of thousands |
| chromosome anaphase speed | ~1 μm/min |
| fertilized mouse/human egg diameter source comparison | ~100 μm |
| apoptosis in some developing neuron classes | >50% |
| apoptosome arms | 7 |
| caspase-9 / apoptosome | 7 |
| Q18–11 exponential divisions to 70 kg | ~46 |
| Q18–13 red cells produced/day | ~10^11 |
| Q18–14 G2 estimate | ~2 h |
| Q18–18 interphase MT lifetime | 5 min |
| Q18–18 mitotic MT lifetime | 15 s |
| Q18–18 derived mitotic MT length | ~1 μm |
| growth-hormone mouse source example | ~50× hormone → nearly 2× size |

# 332. Quantitative verification queue

Before runtime promotion, externally verify:
- phase durations by cell type
- cyclin/Cdk abundance dynamics
- checkpoint response times
- replication-origin licensing timing
- p53 cancer-frequency statistics by cohort
- mammalian kinetochore microtubule counts by species/cell type
- spindle microtubule population estimates
- chromosome velocities
- spindle pole separation rates
- APC/C activation/degradation kinetics
- cleavage-furrow timing and constriction rates
- organelle partition strategies by cell type
- apoptosis timing
- Bax/Bak pore architecture
- apoptosome stoichiometry in current structural literature

# 333. Do-not-overinterpret register

Do not infer:

```text
cell cycle = fixed clock
FALSE

interphase = inactive waiting period
FALSE

all cell cycles contain long G1 and G2
FALSE

cyclin abundance = Cdk activity
FALSE

cyclin binding alone fully activates every Cdk
FALSE

checkpoint = one universal molecular mechanism
FALSE

G0 = merely a long G1
FALSE in source framing

Start occurs after S phase
FALSE

Rb phosphorylation activates Rb
FALSE; phosphorylation releases the Rb brake in this source model

p53 directly inhibits Cdk enzymatically
FALSE; p53 induces p21

S-Cdk starts DNA replication but does not affect re-replication
FALSE; it also helps block relicensing

chromosome replication occurs during mitosis
FALSE

cohesin = condensin
FALSE

sister chromatid = homologous chromosome
FALSE

centromere = centrosome
FALSE

kinetochore = centromere DNA itself
FALSE

spindle = rigid set of permanent fibers
FALSE

centrosomes are absolutely required for bipolar spindle formation
FALSE

metaphase chromosomes are motionless
FALSE

tension is irrelevant once kinetochore binds a microtubule
FALSE

APC/C directly cleaves cohesin
FALSE; it destroys securin, releasing separase

anaphase A = anaphase B
FALSE

chromosome movement in source model requires kinetochore motor stepping
NOT SUPPORTED; source favors depolymerization-coupled model

nuclear envelope simply disappears into nothing
FALSE

animal cytokinesis is positioned independently of spindle
FALSE

plant cytokinesis uses actomyosin cleavage furrow
FALSE

all organelles need exact spindle-like partitioning
FALSE

cell growth = cell proliferation
FALSE

growth factors = mitogens = survival factors
NOT NECESSARILY

apoptosis = necrosis
FALSE

caspases are constitutively active in healthy cells
FALSE

cytochrome c only functions in electron transport
FALSE; release into cytosol has apoptotic signaling role in source

survival factor directly 'creates life'
FALSE; it suppresses death pathways

cancer is simply fast cell division
FALSE; source frames it as loss of normal social control over proliferation/growth/survival
```

# 334. Cross-chapter dependencies

```text
Chapter 5:
chromosomes, cohesin, condensin, centromeres

Chapter 6:
DNA replication, origins, forks, DNA damage/repair

Chapter 7:
ubiquitin/proteasome, transcription/translation

Chapter 8:
transcription regulation

Chapter 14:
mitochondrial cytochrome c

Chapter 15:
nuclear pores, membrane topology, organelle inheritance

Chapter 16:
mitogens, RTKs, PI3K/Akt/Tor, Rho GTPases

Chapter 17:
dynamic microtubules, centrosomes, motors, actin/myosin

Chapter 19:
meiosis and alternative chromosome segregation logic

Chapter 20:
cancer, tissue organization, adhesion, ECM
```

# 335. Chapter 18 core causal map

```text
EARLY G1
low cyclin–Cdk activity
→ growth / environmental assessment

MITOGEN
→ G1 cyclin
→ G1-Cdk / G1-S-Cdk
→ Rb phosphorylation
→ S-phase gene expression
→ START

DNA DAMAGE
→ p53
→ p21
→ G1/S-Cdk + S-Cdk inhibited
→ pause / repair
→ severe damage can promote apoptosis

S PHASE
ORC + Cdc6
→ helicase loading
→ S-Cdk
→ origin firing
→ DNA replication
→ Cdc6/ORC phosphorylation
→ re-replication blocked

G2
M-cyclin accumulates
→ M-Cdk assembled but inhibited

Cdc25
→ inhibitory phosphates removed
→ M-Cdk active

M-Cdk positive feedback
→ rapid mitotic entry

PROPHASE
→ chromosomes condense
→ spindle assembles

PROMETAPHASE
→ nuclear envelope breaks down
→ kinetochores capture microtubules

METAPHASE
→ bi-orientation
→ tension
→ spindle checkpoint satisfied

APC/C
→ securin destroyed
→ separase active
→ cohesin cleaved

ANAPHASE
→ sisters separate
→ kinetochore MTs shorten
→ spindle poles separate

M-cyclin destruction
→ M-Cdk off
→ phosphatases reverse targets

TELOPHASE
→ nuclear envelope reassembles
→ chromosomes decondense

CYTOKINESIS
animal:
central spindle → RhoA → actomyosin ring → cleavage

plant:
phragmoplast → Golgi vesicles → cell plate → new wall

CELL-NUMBER CONTROL
mitogens → division
growth factors → mass
survival factors → apoptosis suppression

APOPTOSIS
intrinsic:
Bax/Bak → cytochrome c → apoptosome → caspase-9 → executioners

extrinsic:
death receptor → initiator caspases → executioners
```

# 336. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 18: “The Cell Cycle.”**

Printed pages:
```text
635–676
```

PDF pages reviewed:
```text
670–711
```

Official answer section reviewed:
```text
PDF pages 844–848
```

Reviewed:
- all eight chapter sections
- Figures 18–1 through 18–45
- Panel 18–1
- Tables 18–1 and 18–2
- How We Know: *Discovery of Cyclins and Cdks*
- Essential Concepts
- Why Trust Science?
- Questions 18–1 through 18–31
- official textbook answers for Questions 18–1 through 18–31

# 337. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- G1/S/G2/M organization
- interphase/M-phase definitions
- all Table 18–1 timings
- Start/G0 logic
- three major checkpoint transitions
- Cdks/cyclins
- G1/G1-S/S/M cyclin–Cdk classes
- Table 18–2 vertebrate pairings
- cyclin synthesis/destruction
- APC/C
- Wee1/Cdc25
- Cdk inhibitors/p27
- PP2A-B55
- ordered Cdk-target phosphorylation
- Xenopus/MPF How We Know section
- Rb
- p53/p21
- terminal differentiation/G0
- ORC/Cdc6/helicase loading
- S-Cdk origin firing
- re-replication block
- replication checkpoint/Cdc25 inhibition
- M-Cdk positive feedback
- cohesin/condensin
- prophase/prometaphase/metaphase/anaphase/telophase
- centrosome duplication
- spindle architecture
- kinetochore attachment
- bi-orientation/tension
- all source microtubule counts
- APC/C–securin–separase
- spindle assembly checkpoint
- anaphase A/B
- favored depolymerization-coupled chromosome movement model
- nuclear-envelope breakdown/reassembly
- animal cytokinesis
- cleavage-plane positioning
- RhoA contractile-ring signal
- plant phragmoplast/cell plate
- organelle inheritance
- mitogen/growth-factor/survival-factor distinctions
- PDGF/HGF
- Tor growth pathway
- apoptosis versus necrosis
- initiator/executioner caspases
- Bcl2/Bax/Bak
- cytochrome-c release
- apoptosome/caspase-9
- Fas/Fas ligand
- survival-factor logic
- myostatin source example
- all Questions 18–1 through 18–31
- official answer consistency
- all schemas
- all project constraints
- all DO_NOT_INFER rules
- quantitative register
- source trace

# END OF CHAPTER 18 CANON

Recommended repository destination:

```text
science/chapters/18_cell_cycle.md
```

Recommended commit message:

```text
science: add Chapter 18 cell cycle canon
```

Do not begin Chapter 19 merely because this file exists.

Chapter 19 will switch from mitotic inheritance to sexual reproduction: diploidy/haploidy, homologous chromosomes, meiosis I and II, synapsis, crossing-over, recombination, independent assortment, gametogenesis, fertilization, Mendelian inheritance, linkage, and genetic variation.
