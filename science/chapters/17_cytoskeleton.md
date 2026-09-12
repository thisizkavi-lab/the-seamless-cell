---
title: "The Seamless Cell — Science Canon — Chapter 17"
subtitle: "Cytoskeleton"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 17, printed pages 595–634 (PDF pages 630–669)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 17 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 17 gives the cell a mechanical architecture. It explains how eukaryotic cells maintain shape, withstand tension, organize their interior, move organelles, extend protrusions, crawl, beat cilia and flagella, and generate contractile force.

The chapter is organized around three filament systems:

```text
intermediate filaments
microtubules
actin filaments
```

and three corresponding mechanical ideas:

```text
mechanical reinforcement
directional tracks + dynamic spatial organization
surface deformation + force generation
```

The central implementation rule is:

```text
THE CYTOSKELETON IS NOT A STATIC SCAFFOLD.

It is a dynamic material system whose mechanical behavior emerges from:
- polymer structure
- filament polarity
- nucleotide state
- filament turnover
- cross-linking
- motor-protein activity
- spatial anchoring
- signaling control
```

For The Seamless Cell, an accurate cytoskeletal visualization must preserve:

```text
filament identity
polymer polarity
plus/minus-end state
nucleotide state
nucleation site
polymerization/depolymerization state
cross-links
motor directionality
cargo attachment
force direction
mechanical anchorage
```

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 17.
- `SOURCE_SCALE` — explicit numerical value or range from the source.
- `SOURCE_MODEL` — source mechanism, interpretation, or pedagogical model.
- `SOURCE_DERIVED` — direct inference/calculation from source facts.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — source statement that may vary with species, method, or current literature and should not become a universal runtime constant without verification.
- `SOURCE_HYPOTHESIS` — evolutionary/mechanistic interpretation explicitly framed as tentative.
- `PROJECT_CONSTRAINT` — implementation rule for The Seamless Cell.
- `VERIFY_QUANT` — quantitative source value retained pending external validation.
- `LATER_CHAPTER_REFINEMENT` — detail belongs to a later chapter or future verification.
- `DO_NOT_INFER` — hard guardrail against unsupported generalization.

## Chapter map

```text
INTERMEDIATE FILAMENTS

MICROTUBULES

ACTIN FILAMENTS

MUSCLE CONTRACTION
```

Supporting material:

```text
Figures 17–1 through 17–46
Table 17–1: Drugs That Affect Microtubules
Table 17–2: Drugs That Affect Filaments
How We Know: Pursuing Microtubule-associated Motor Proteins
Essential Concepts
Why Trust Science?
Questions 17–1 through 17–24
Official textbook answers to Questions 17–1 through 17–24
```

# 1. Cytoskeleton

The cytoskeleton is an interconnected system of protein filaments that:
- organizes the cell interior
- supports cell shape
- positions organelles
- enables intracellular transport
- powers cell movement
- contributes to cell division
- generates and resists mechanical force

# 2. The cytoskeleton is dynamic

Unlike a rigid anatomical skeleton, cytoskeletal structures continuously assemble, disassemble, move, and reorganize in response to cell state.

# 3. Three filament systems

```text
intermediate filaments
microtubules
actin filaments
```
are structurally and mechanically distinct.

# 4. Intermediate-filament primary role

Intermediate filaments provide mechanical strength and tensile resistance.

# 5. Microtubule primary role

Microtubules organize the cell interior, provide polarized transport tracks, contribute to mitotic spindle formation, and form the structural core of cilia and flagella.

# 6. Actin-filament primary role

Actin filaments support the cell surface and generate many forms of cell movement, including crawling, phagocytosis, cytokinesis, and muscle contraction.

# 7. Filament-system cooperation

The three filament systems are not independent. Linker proteins physically connect them, and actin and microtubules frequently cooperate in cell polarity, transport, migration, and division.

# 8. Filament diameters

`SOURCE_SCALE`:

```text
intermediate filament ≈ 10 nm
microtubule outer diameter ≈ 25 nm
actin filament ≈ 7 nm
```

# 9. Mechanical-property contrast

The source characterizes:
```text
intermediate filaments:
very flexible, high tensile strength, resist rupture

microtubules:
long, straight, stiff hollow tubes

actin filaments:
thin, flexible, usually organized into bundles/networks
```

# 10. Intermediate filaments withstand mechanical stress

Their main function is to allow cells to tolerate twisting, stretching, shear, and deformation without tearing.

# 11. Intermediate filaments are exceptionally durable

The source emphasizes that intermediate filaments can survive harsh treatments that destroy many other cellular structures.

# 12. Hair and nails source example

Specialized intermediate-filament proteins contribute to durable structures such as hair and nails.

# 13. Cytoplasmic intermediate-filament network

In many animal cells, intermediate filaments:
```text
surround nucleus
→ extend through cytoplasm
→ connect toward cell periphery
```

# 14. Desmosome anchoring

Intermediate filaments often terminate at desmosomes, creating mechanical continuity between neighboring epithelial cells.

# 15. Nuclear lamina

Nuclear intermediate filaments form a two-dimensional meshwork underneath the inner nuclear membrane.

# 16. Intermediate-filament monomer architecture

Each intermediate-filament protein contains:
```text
central elongated α-helical rod domain
+
unstructured N- and C-terminal regions
```

# 17. Coiled-coil dimer formation

Two monomers wrap around each other through their α-helical rod domains to form a coiled-coil dimer.

# 18. Antiparallel tetramer formation

Two coiled-coil dimers align in opposite directions and in staggered arrangement to form a tetramer.

# 19. Intermediate-filament tetramer is symmetrical

Because the dimers are antiparallel:
```text
tetramer end A ≈ tetramer end B
```
with respect to filament polarity.

# 20. Intermediate filaments are nonpolar

Unlike actin filaments and microtubules:
```text
intermediate filaments do not have chemically distinct plus/minus ends
```

# 21. Tetramers assemble laterally

Tetramers associate side-by-side into larger arrays before incorporation into the final ropelike filament.

# 22. Eight-tetramer-array source model

Figure 17–4 depicts:
```text
lateral array of 8 tetramers
```
as a structural assembly step.

# 23. Intermediate filament elongation

Tetramer arrays can add to either filament end because the filament lacks structural polarity.

# 24. Intermediate-filament tensile strength

Strength arises from large numbers of overlapping lateral noncovalent interactions rather than a few exceptionally strong bonds.

# 25. Variable terminal domains

Different intermediate-filament proteins share similar rod domains but differ strongly in head/tail regions, allowing distinct binding interactions and functions.

# 26. Four intermediate-filament classes

The source groups them into:
```text
1. keratin filaments
2. vimentin and vimentin-related filaments
3. neurofilaments
4. nuclear lamins
```

# 27. Keratin filaments

Prominent in epithelial cells and mechanically connected between cells through desmosomes.

# 28. Keratin diversity

`SOURCE_ERA_STATEMENT`: the source notes humans have more than:
```text
50 keratin genes
```

# 29. Vimentin-related filaments

Found in connective-tissue cells, muscle cells, and supportive glial cells in the source classification.

# 30. Neurofilaments

Provide internal reinforcement along long neuronal axons.

# 31. Nuclear lamins

Intermediate-filament proteins that form the nuclear lamina and strengthen the nuclear envelope.

# 32. Keratin mechanical-continuity model

In epithelial sheets:
```text
keratin network in cell A
→ desmosome
→ keratin network in cell B
```
creates tissue-scale stress distribution.

# 33. Epidermolysis bullosa simplex source example

`SOURCE_ERA_STATEMENT`: keratin mutations are used to show that defective intermediate-filament networks make epidermal cells mechanically fragile and prone to rupture/blistering.

# 34. Neurofilament disease source example

`SOURCE_ERA_STATEMENT`: abnormal neurofilament accumulation is discussed in connection with ALS.

# 35. Nuclear-lamina organization

The nuclear lamina is a two-dimensional intermediate-filament network rather than a bundle of long cytoplasmic cables.

# 36. Lamin phosphorylation disassembles lamina

During mitosis:
```text
lamin phosphorylation
→ weakened tetramer interactions
→ lamina disassembly
```

# 37. Lamin dephosphorylation reassembles lamina

At mitotic exit:
```text
lamin dephosphorylation
→ lamin interactions restored
→ nuclear lamina re-forms
```

# 38. Progeria source example

`SOURCE_ERA_STATEMENT`: defects in lamin A are discussed as a cause of rare premature-aging disorders; the source states the connection between lamina defects and systemic aging-like pathology is not fully understood.

# 39. Chromatin–lamina interaction

The source notes that the nuclear lamina interacts with chromatin at the nuclear periphery and may influence chromosome-domain positioning.

# 40. Plectin

A linker protein that:
- cross-links intermediate filaments
- connects them to microtubules
- connects them to actin
- connects them to adhesive structures

# 41. Plectin mechanical role

The source uses plectin deficiency to emphasize that filament cross-linking is required for full tissue mechanical strength even if basic filament polymerization can still occur.

# 42. Nuclear-envelope cytoskeletal bridges

Protein complexes physically connect the cytoplasmic cytoskeleton to the nuclear lamina/chromosomes across the nuclear envelope.

# 43. SUN-domain proteins

Source Figure 17–10 places SUN-family linker proteins in the nuclear-envelope bridge.

# 44. KASH-domain proteins

Source Figure 17–10 places KASH-family linker proteins as complementary nuclear-envelope bridge components.

# 45. Nuclear positioning

Cytoskeleton–nuclear-envelope linkers contribute to positioning the nucleus within the cell.

# 46. Microtubules organize eukaryotic cytoplasm

They provide:
- spatial organization
- organelle positioning
- polarized tracks
- mitotic spindle components
- ciliary/flagellar structural support

# 47. Microtubule subunit

A tubulin subunit is an:
```text
α-tubulin / β-tubulin heterodimer
```

# 48. Microtubule wall

Tubulin dimers polymerize into protofilaments that associate laterally to form a hollow cylinder.

# 49. Protofilament count

`SOURCE_SCALE`:
```text
13 parallel protofilaments
```
in the canonical source microtubule.

# 50. Tubulin orientation

Within each protofilament:
```text
αβ
αβ
αβ
...
```
with every dimer oriented the same way.

# 51. Microtubule polarity

All protofilaments share the same orientation, making the complete microtubule polar.

# 52. Microtubule plus end

End at which β-tubulin is exposed in the source description.

# 53. Microtubule minus end

End at which α-tubulin is exposed in the source description.

# 54. Plus/minus terminology is not electrical charge

The plus end is named because purified tubulin adds there faster than at the minus end, not because the ends carry opposite electric charges.

# 55. Polarity enables directional transport

Motor proteins can distinguish filament direction because microtubule structure is asymmetric.

# 56. Microtubule nucleation is difficult

Spontaneous assembly of the first stable microtubule seed is unfavorable at normal cellular free-tubulin concentrations.

# 57. Microtubule-organizing center

A cellular site that determines:
- where microtubules nucleate
- how many form
- their orientation

# 58. Centrosome

The major MTOC in many animal cells, usually located near the nucleus in a nondividing cell.

# 59. Centrosome composition

Source model:
```text
pair of centrioles
+
surrounding protein matrix
+
hundreds of γ-tubulin ring complexes
```

# 60. γ-tubulin ring complex

A preassembled ring-like nucleation structure that provides a template for αβ-tubulin addition.

# 61. Centrosomal minus-end anchoring

For centrosome-nucleated microtubules:
```text
minus end embedded at centrosome
plus end extends outward
```

# 62. Plus-end growth at centrosome

With the minus end anchored/capped at the γ-tubulin ring, most elongation occurs at the free plus end.

# 63. Centrioles do not nucleate centrosomal microtubules directly

The source explicitly states that γ-tubulin ring complexes are sufficient for nucleation; centrioles instead likely contribute to centrosome duplication fidelity.

# 64. Basal bodies differ functionally from centrosomal centrioles

Centrioles used as basal bodies can nucleate microtubules of cilia/flagella.

# 65. Yeast spindle-pole body

Budding yeast uses a nuclear-envelope-embedded MTOC rather than a conventional animal-cell centrosome.

# 66. Plant microtubule organization

Plant cells lack centrosomes in the source description and nucleate microtubules from multiple organizing centers at the nuclear envelope and cell cortex.

# 67. Specialized cells reorganize microtubules

Neurons and epithelial cells can adopt microtubule arrangements very different from the radial fibroblast array.

# 68. Dynamic instability

A microtubule can stochastically switch between:
```text
rapid growth
rapid shrinkage
```

# 69. Dynamic instability enables exploration

Growing/shrinking microtubules repeatedly probe different regions of the cell interior.

# 70. Tubulin GTP state

Free αβ-tubulin dimers carry GTP tightly bound to β-tubulin in the source mechanism.

# 71. GTP hydrolysis after polymerization

β-tubulin hydrolyzes GTP to GDP shortly after incorporation into the microtubule.

# 72. GTP cap

When tubulin addition outruns GTP hydrolysis, the growing end contains a terminal region of GTP-tubulin.

# 73. GTP-tubulin stabilizes the growing end

The source states GTP-bearing tubulin dimers interact more strongly and pack more efficiently than GDP-bearing dimers.

# 74. Catastrophe

If GTP hydrolysis catches up with subunit addition:
```text
GTP cap lost
→ GDP-tubulin exposed
→ protofilaments peel outward
→ rapid depolymerization
```

# 75. Rescue

A shrinking microtubule can resume growth if enough GTP-loaded tubulin adds quickly enough to rebuild a stable GTP cap.

# 76. GDP-tubulin recycling

Released GDP-tubulin returns to the cytoplasmic pool and exchanges GDP for GTP before reuse.

# 77. Fibroblast polymer/free tubulin ratio

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~half of tubulin polymerized
~half free in cytoplasm
```
in a typical fibroblast source example.

# 78. Mitosis increases microtubule dynamics

Before/during mitosis the cell increases microtubule switching, enabling rapid dismantling of the interphase array and construction of the spindle.

# 79. Differentiated cells can stabilize microtubules

Accessory proteins can suppress dynamic instability when long-lived microtubule architecture is needed.

# 80. Cell polarity and microtubules

A polarized microtubule array helps specify directional trafficking and organelle placement.

# 81. Axonal microtubule orientation

In the source model:
```text
plus ends → axon terminal
```
for axonal microtubules.

# 82. Epithelial microtubule orientation

In the source epithelial example:
```text
plus ends → basal membrane
```
helping polarized secretion.

# 83. Axonal transport

Cargo can move in both directions along the same oriented microtubule system by using motors with opposite directionality.

# 84. Axonal transport source speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
>10 cm/day
```
for some transported material.

# 85. Shoulder-axon journey source example

The source describes transport from spinal cord to a shoulder muscle terminal taking about:
```text
~2 days
```

# 86. Very long axonal journeys

For some limb axons, transport can take:
```text
a week or more
```
despite active transport.

# 87. Microtubule-associated proteins

Accessory proteins can:
- nucleate
- stabilize
- destabilize
- sever
- branch
- link plus ends to targets
- regulate polymerization

# 88. Augmin

A branch-nucleating complex that binds the side of an existing microtubule, recruits γ-tubulin machinery, and nucleates a new branch.

# 89. Augmin in plants

The source emphasizes augmin as particularly important for dense microtubule arrays in plant cells lacking centrosomes.

# 90. Plus-end tracking proteins

Some proteins ride the growing plus end and can capture the microtubule at the cortex or chromosome-associated structures.

# 91. Katanin

A microtubule-severing protein complex used by the source as an example of regulated microtubule destruction.

# 92. Kinesin-13 source category

Figure 17–19 gives kinesin-13 as an example of a catastrophe-inducing microtubule-associated motor.

# 93. Table 17–1 — Taxol

```text
binds microtubules
→ prevents depolymerization
```

# 94. Table 17–1 — colchicine/colcemid

```text
bind tubulin dimers
→ complex associates with microtubule end
→ further polymerization inhibited
```

# 95. Table 17–1 — nocodazole

```text
binds tubulin dimers
→ prevents polymerization
```

# 96. Antimitotic drug principle

Both excessive stabilization and excessive destabilization can block cell division because spindle function depends on microtubule dynamics.

# 97. Motor proteins convert ATP into directed motion

Motor proteins use repeated ATP hydrolysis cycles to generate directional movement along polarized cytoskeletal filaments.

# 98. Motor-driven motion differs from Brownian motion

Saltatory organelle movement is sustained/directional and therefore mechanistically distinct from random thermal diffusion.

# 99. Microtubule motor families

Two major families:
```text
kinesins
dyneins
```

# 100. Kinesin direction

Most kinesins move:
```text
toward microtubule plus end
```

# 101. Cytoplasmic dynein direction

Cytoplasmic dynein moves:
```text
toward microtubule minus end
```

# 102. Motor architecture

Most kinesins and cytoplasmic dyneins are dimers with:
- two ATP-binding motor heads
- cargo-binding tail

# 103. Motor stereospecificity

Motor heads interact with the microtubule in a structurally defined orientation, enabling unidirectional stepping.

# 104. Motor tail controls cargo specificity

Cargo specificity can arise through direct tail binding or adaptor proteins.

# 105. Dynein adaptor dependence

The source states cytoplasmic dynein uses adaptor proteins to interact with selected cargo.

# 106. Kinesin hand-over-hand model

ATP-dependent conformational changes alternately detach and advance the two motor heads along the microtubule.

# 107. ER positioning by kinesin

Kinesins pull ER membrane outward toward microtubule plus ends, helping spread the ER network toward the cell periphery.

# 108. Golgi positioning by dynein

Cytoplasmic dynein pulls Golgi membranes toward microtubule minus ends near the centrosome/nucleus.

# 109. Microtubule depolymerization redistributes organelles

After colchicine treatment:
```text
ER collapses around nucleus
Golgi fragments and disperses
```
in the source experiment.

# 110. Organelle positions recover when microtubules return

After drug removal, reassembled microtubules and motor proteins restore the characteristic ER/Golgi distributions.

# 111. How We Know — squid giant axon

The squid giant axon provided a preparation in which axoplasm could be extruded and intracellular transport directly observed.

# 112. Video-enhanced microscopy

The technique increased contrast sufficiently to visualize structures below the ordinary ~0.2 μm resolution limit of conventional light microscopy.

# 113. Extruded axoplasm vesicle size

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~30–50 nm diameter
```
for some observed vesicles.

# 114. Extruded axoplasm mitochondria length

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~5000 nm
```
in the source example.

# 115. Axoplasm transport speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~5 μm/s
```

# 116. ATP requirement for axonal movement

Substitution of nonhydrolyzable ATP analog AMP-PNP blocks transport in the source experiments.

# 117. AMP-PNP motor-trapping logic

AMP-PNP allows motors/cargo to remain attached to microtubules but prevents productive movement, enabling motor proteins to be isolated.

# 118. Kinesin discovery source mass

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~110 kDa polypeptide
```
identified in the source purification.

# 119. In-vitro microtubule gliding

Kinesin attached to glass can propel microtubules over the surface when ATP is supplied.

# 120. Gliding speed source value

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1–2 μm/s
```
in Figure 17–23.

# 121. Single kinesin source speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~0.3 μm/s
```
in Figure 17–24A.

# 122. Kinesin processivity

A single kinesin can take many steps before detaching.

# 123. Kinesin processive run source estimate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~100 steps before falling off
```
in the source discussion.

# 124. Kinesin step size

`SOURCE_SCALE`:
```text
8 nm per step
```

# 125. Kinesin ATP stoichiometry

`SOURCE_SCALE`:
```text
~1 ATP hydrolyzed per 8-nm step
```
in the source model.

# 126. Cilia

Membrane-covered hairlike projections built around stable microtubules.

# 127. Cilium diameter

`SOURCE_SCALE`:
```text
~0.25 μm
```

# 128. Basal body

MTOC at the base of a cilium/flagellum that organizes its microtubule bundle.

# 129. Motile cilia function

Can:
- propel cells
- move extracellular fluid over cell surfaces

# 130. Respiratory-cilium density

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
>10^9 cilia per cm²
```
in the source respiratory-epithelium statement.

# 131. Ciliary beat cycle

The source divides a beat into:
```text
power stroke
recovery stroke
```

# 132. Ciliary-cycle time

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~0.1–0.2 s per cycle
```

# 133. Flagella

Usually longer than cilia and used primarily to propel an entire cell through fluid.

# 134. Eukaryotic 9+2 axoneme

Motile cilia/flagella in the source contain:
```text
9 outer doublet microtubules
+
2 central singlet microtubules
```

# 135. Bacterial flagella are different

The source explicitly states bacterial flagella have a fundamentally different structure and mechanism from eukaryotic cilia/flagella.

# 136. Ciliary dynein

A specialized dynein attached to one microtubule doublet moves relative to the neighboring doublet.

# 137. Dynein sliding

With isolated doublets:
```text
ATP + dynein
→ doublets slide past each other
```

# 138. Sliding-to-bending conversion

In an intact axoneme:
```text
cross-links constrain sliding
→ sliding force becomes bending
```

# 139. Dynein activation must be asymmetric

If all dynein arms around the axoneme generated equal sliding simultaneously, directional bending would cancel. Coordinated activation on selected sides is required.

# 140. Ciliary waveform control

The source attributes complex beating patterns to regulated dynein activity coordinated with structures such as radial spokes, the central pair, and associated components.

# 141. Kartagener syndrome source example

`SOURCE_ERA_STATEMENT`: hereditary defects in ciliary dynein are used to illustrate consequences of immotile cilia/flagella, including respiratory and fertility problems.

# 142. Primary cilium

Many animal cells contain a single nonmotile primary cilium that functions as a sensory antenna for extracellular signals.

# 143. Actin is highly abundant

The source describes actin as one of the most abundant proteins in nearly all cell types.

# 144. Actin-filament functions

Actin is required for:
- cell shape
- crawling
- phagocytosis
- cytokinesis
- microvilli
- cytoplasmic streaming
- contractile structures

# 145. Actin-filament diameter

`SOURCE_SCALE`:
```text
~7 nm
```

# 146. Actin-filament architecture

An actin filament is a twisted helical polymer of identical globular actin monomers.

# 147. Actin polarity

Actin monomers all orient in the same direction, giving the filament:
```text
plus end
minus end
```

# 148. Actin helical repeat

`SOURCE_SCALE`:
```text
~37 nm
```
for the structural repeat shown in Figure 17–30.

# 149. Actin is more flexible than microtubules

Individual actin filaments are thinner, more flexible, and usually shorter than microtubules.

# 150. Actin commonly forms networks/bundles

In cells, actin filaments are usually cross-linked into higher-order structures rather than left isolated.

# 151. Actin polymerizes at both ends

Free actin monomers can add to either filament end, but addition is faster at the plus end.

# 152. Actin nucleotide

Free actin monomers carry ATP.

# 153. Actin ATP hydrolysis

Actin hydrolyzes its bound ATP to ADP soon after polymerization.

# 154. ADP-actin destabilization

ADP-bound actin interacts less strongly in the filament than ATP-actin in the source mechanism.

# 155. Actin treadmilling

At intermediate free-actin concentration:
```text
ATP-actin adds at plus end
ADP-actin leaves minus end
```
simultaneously.

# 156. Constant-length treadmilling

If plus-end addition equals minus-end loss:
```text
filament length remains constant
but subunits move through the polymer
```

# 157. Table 17–2 — phalloidin

```text
binds actin filaments
→ prevents depolymerization
```

# 158. Table 17–2 — cytochalasin

```text
caps plus ends
→ prevents polymerization
→ minus-end depolymerization continues
```

# 159. Table 17–2 — latrunculin

```text
binds actin monomers
→ prevents polymerization
```

# 160. Actin fraction of total protein

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~5% of total protein
```
in a typical animal cell source example.

# 161. Actin polymer/free pool

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~half filamentous
~half free monomer
```
in the source example.

# 162. Actin-binding proteins control polymerization

Actin polymerization is not governed solely by bulk monomer concentration. Cells regulate nucleation, elongation, capping, cross-linking, severing, and sequestration.

# 163. Thymosin

Source example of a monomer-sequestering protein that prevents free actin from adding to filament ends.

# 164. Formin

Nucleates/promotes long straight unbranched actin filaments and remains associated with the growing plus end in the source description.

# 165. ARP complex

Actin-related protein complex that binds an existing filament and nucleates a new branch.

# 166. Bundling proteins

Cross-link parallel actin filaments into stiff bundles such as those in filopodia/microvilli.

# 167. Cross-linking proteins

Generate meshworks such as the cortical actin network.

# 168. Severing proteins

Break actin filaments into shorter pieces and can promote turnover/remodeling.

# 169. Capping proteins

Bind plus ends and stop further elongation.

# 170. Tropomyosin as side-binding protein

The source includes tropomyosin as an actin side-binding protein and later uses it as a regulator in muscle.

# 171. Myosin

Family of ATP-driven actin-based motor proteins.

# 172. Myosin direction

The chapter's main myosin examples move toward:
```text
actin plus end
```

# 173. Myosin I

Single-headed motor with:
```text
motor head
+
cargo/membrane-binding tail
```

# 174. Myosin I functions

Can:
- move vesicles along actin
- move membrane relative to cortical actin
- contribute to cell-surface deformation

# 175. Myosin II

Two-headed motor protein able to assemble into bipolar filaments and generate contractile sliding between oppositely oriented actin filaments.

# 176. Cell cortex

Dense actin-rich layer immediately beneath the plasma membrane that supports the membrane and enables shape change.

# 177. Red-blood-cell cortex source example

A spectrin/actin network mechanically supports the red-blood-cell plasma membrane.

# 178. Three stages of cell crawling

```text
1. protrusion
2. attachment
3. traction/contraction
```

# 179. Leading-edge protrusion

Rapid actin polymerization at the front pushes the plasma membrane outward.

# 180. Lamellipodium

Broad, flattened leading-edge protrusion containing a dense branched actin network.

# 181. Filopodium

Thin fingerlike protrusion containing bundled, straight actin filaments.

# 182. Filopodium width

`SOURCE_SCALE`:
```text
~0.1 μm
```

# 183. Filopodium length

`SOURCE_SCALE`:
```text
~5–10 μm
```
typical source description.

# 184. Filopodium filament count

`SOURCE_SCALE`:
```text
~10–20 actin filaments
```
per source example.

# 185. Growth-cone filopodium length

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~50 μm
```
in the developing-neuron source example.

# 186. Protrusion speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1 μm/s
```
for rapid extension/retraction of lamellipodia and filopodia in the source.

# 187. Actin orientation at leading edge

Most growing filaments orient:
```text
plus ends → plasma membrane
```

# 188. Integrins create traction points

At favorable surfaces:
```text
integrin extracellular binding
+
integrin linkage to cortical actin
→ mechanical anchorage
```

# 189. Rear contraction

Myosin II contraction of cortical actin helps pull the cell body forward after new front attachments are established.

# 190. Front/back attachment turnover

Crawling requires formation of new attachments at the front and release of old attachments at the rear.

# 191. Fibroblast crawling

Source example of slower migration with relatively strong adhesions.

# 192. Neutrophil crawling

Source example of rapid amoeboid-like migration with transient adhesions and pseudopod extension.

# 193. ARP-built lamellipodium

ARP complexes branch new actin filaments from existing filaments, creating a dense dendritic network that pushes the membrane.

# 194. Lamellipodial treadmilling

Source Figure 17–36:
```text
polymerization at front
+
capping
+
depolymerization farther back
→ continuous network turnover
```

# 195. Formin-built filopodium

Formin promotes straight, unbranched actin filaments suitable for parallel bundles.

# 196. Formin in contractile ring

The source also gives formin as a nucleator of unbranched actin used in the cytokinetic contractile ring.

# 197. Extracellular signals control actin organization

Cell-surface signaling pathways alter actin-binding proteins and thereby change cytoskeletal structure.

# 198. Rho-family monomeric GTPases

The source connects actin reorganization to membrane-associated Rho-family GTPase switches.

# 199. Rho activation source phenotype

Activated Rho promotes:
```text
long unbranched actin bundles
+
myosin-associated contractile fibers
```

# 200. Rac activation source phenotype

Activated Rac promotes a broad lamellipodium/ruffling response.

# 201. Cdc42 activation source phenotype

Activated Cdc42 promotes numerous filopodia.

# 202. Spatial Rho-family activation establishes migration direction

Different GTPase activities at front and rear polarize the motility machinery.

# 203. Actin–microtubule cooperation in polarity

Actin dominates cortical mechanics while microtubules organize the interior; coordinated asymmetry of both systems establishes stable cell polarity.

# 204. Intestinal-epithelial polarity source example

Apical and basal membrane domains use different transport proteins and depend on polarized cytoskeletal architecture for spatial organization.

# 205. Budding-yeast polarity source example

Local Rho-family activity organizes actin at the budding site, with microtubules contributing to material transport during growth.

# 206. Embryonic polarity source example

The source describes asymmetric Rho-family activity after fertilization as one mechanism contributing to early body-axis organization in some animals.

# 207. Muscle contraction

A specialized use of actin/myosin force generation in which highly ordered arrays convert many molecular motor cycles into macroscopic force.

# 208. Muscle myosin II

Dimer with:
```text
2 globular ATPase heads
1 long coiled-coil tail
```

# 209. Myosin II molecule length source scale

`SOURCE_SCALE`:
```text
~150 nm
```
in Figure 17–38.

# 210. Bipolar myosin filament

Myosin II tails associate so that motor heads project outward in opposite directions from the two halves of the filament.

# 211. Bipolar contractile logic

Opposite sets of myosin heads walk toward plus ends of oppositely oriented actin filaments, sliding the actin filaments toward the center.

# 212. Nonmuscle contractile bundles

The same actin–myosin II sliding principle powers smaller contractile structures outside muscle, including the cytokinetic ring.

# 213. Skeletal muscle fiber

A giant multinucleated cell formed by fusion of precursor cells.

# 214. Adult skeletal muscle-fiber diameter

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~50 μm
```
in the source example.

# 215. Skeletal muscle-fiber length

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to several centimeters
```

# 216. Myofibril

Cylindrical contractile structure that fills much of skeletal-muscle cytoplasm.

# 217. Myofibril diameter

`SOURCE_SCALE`:
```text
~1–2 μm
```

# 218. Sarcomere

Repeating contractile unit within a myofibril.

# 219. Sarcomere resting source length

`SOURCE_SCALE`:
```text
~2.5 μm
```
in the general source description.

# 220. Thin filament

Actin filament extending inward from the Z disc.

# 221. Thick filament

Central myosin-II filament.

# 222. Z disc

Boundary structure that anchors actin-filament plus ends.

# 223. Sliding-filament mechanism

During contraction:
```text
actin and myosin filaments retain their lengths
sarcomere shortens because filaments slide past each other
```

# 224. Myosin stepping direction in sarcomere

Myosin heads walk toward actin-filament plus ends, pulling thin filaments toward the sarcomere center.

# 225. Myosin ATP cycle — rigor state

Without bound nucleotide, myosin binds tightly to actin.

# 226. Myosin ATP cycle — ATP binding

ATP binding lowers myosin affinity for actin and releases the motor head.

# 227. Myosin ATP cycle — cocking

ATP hydrolysis is associated with a large conformational change that positions the head for the next interaction.

# 228. Myosin ATP cycle — rebinding

The myosin head weakly binds a new actin site while retaining ADP + Pi.

# 229. Myosin ATP cycle — phosphate release

Pi release strengthens actin binding and triggers the power stroke.

# 230. Myosin ATP cycle — ADP release

ADP release returns myosin to the tightly bound state at a new actin position.

# 231. Myosin step displacement

`SOURCE_SCALE`:
```text
~5 nm
```
per ATP-driven conformational cycle in the source model.

# 232. ATP per myosin cycle

`SOURCE_SCALE`:
```text
1 ATP per cycle
```
for the source skeletal-muscle myosin mechanism.

# 233. Myosin heads per thick filament

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~300 myosin heads
```

# 234. Myosin attachment frequency

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~5 attachment/detachment cycles per second per head
```
in the source description.

# 235. Maximum filament-sliding speed

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
up to ~15 μm/s
```

# 236. Sarcomere rapid-shortening example

`SOURCE_SCALE`:
```text
~3 μm → ~2 μm
in <0.1 s
```
in the source example.

# 237. Motor-neuron signal initiates skeletal contraction

Neurotransmitter release at the neuromuscular junction triggers an action potential in the muscle-cell plasma membrane.

# 238. T tubules

Invaginations of the plasma membrane that carry electrical excitation deep into the muscle fiber.

# 239. Sarcoplasmic reticulum

Specialized ER surrounding myofibrils and storing high concentrations of Ca2+.

# 240. Excitation reaches myofibrils rapidly

The source states plasma-membrane excitation spreads through T tubules and associated sarcoplasmic-reticulum signaling within milliseconds.

# 241. Sarcoplasmic Ca2+ release

Electrical excitation opens/activates Ca2+-release channels in the sarcoplasmic-reticulum membrane.

# 242. Skeletal source linkage model

Figure 17–45 depicts physical coupling between a T-tubule voltage-gated Ca2+ channel and a sarcoplasmic-reticulum Ca2+-release channel.

# 243. Tropomyosin

Rod-shaped actin-associated protein that, at low cytosolic Ca2+, blocks myosin-binding sites on actin.

# 244. Troponin

Protein complex containing a Ca2+-sensitive component associated with tropomyosin.

# 245. Ca2+ activation of skeletal muscle

```text
Ca2+ binds troponin
→ troponin changes conformation
→ tropomyosin shifts
→ myosin-binding sites exposed
→ myosin binds actin
→ contraction
```

# 246. Ca2+ removal terminates contraction

When stimulation stops:
```text
Ca2+ pumps return Ca2+ to sarcoplasmic reticulum
→ cytosolic Ca2+ falls
→ troponin/tropomyosin return to blocking state
→ contraction ends
```

# 247. Tropomyosin repeat source fact

Figure 17–46 states one tropomyosin molecule spans:
```text
7 actin monomers
```
and thereby positions troponin complexes at regular intervals.

# 248. Nonmuscle myosin-II activation

The source states a rise in Ca2+ can trigger phosphorylation of nonmuscle myosin II, changing conformation and permitting actin interaction.

# 249. Smooth-muscle activation

Smooth muscle uses a related Ca2+-dependent phosphorylation mechanism rather than skeletal-muscle troponin/tropomyosin switching.

# 250. Smooth muscle is slower

The source attributes slower activation to the time required for kinase/phosphatase enzymes to diffuse and modify myosin.

# 251. Smooth muscle integrates diverse signals

Source examples include epinephrine, serotonin, prostaglandins, and other extracellular signals.

# 252. Cardiac muscle source lifetime count

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~3 × 10^9 contractions
```
in an average human lifetime source estimate.

# 253. Hypertrophic-cardiomyopathy source example

`SOURCE_ERA_STATEMENT`: mutations in cardiac myosin II or other sarcomeric proteins are discussed as causes of familial hypertrophic cardiomyopathy.

# 254. Filament WorldState schema

```yaml
cytoskeletal_filament:
  id:
  type: intermediate | microtubule | actin
  subunits:
  endpoints:
  polarity:
  nucleotide_state:
  polymerization_state:
  bound_accessory_proteins:
  mechanical_anchors:
  geometry:
```

# 255. Intermediate-filament schema

```yaml
intermediate_filament:
  monomer_class:
  dimer_state:
  tetramer_state:
  polar: false
  cross_links:
  anchorage:
  tension_state:
```

# 256. Microtubule schema

```yaml
microtubule:
  protofilament_count: 13
  minus_end:
  plus_end:
  nucleation_site:
  GTP_cap_size:
  growth_state: grow | shrink | paused
  tubulin_pool_exchange:
  bound_MAPs:
```

# 257. Actin-filament schema

```yaml
actin_filament:
  plus_end:
  minus_end:
  ATP_ADP_profile:
  growth_rate_plus:
  growth_rate_minus:
  treadmilling_state:
  branching_points:
  cross_links:
  myosin_interactions:
```

# 258. Motor schema

```yaml
motor:
  family: kinesin | dynein | myosin
  filament_type:
  preferred_direction:
  nucleotide_state:
  head_binding_state:
  cargo:
  adaptor:
  step_size:
  force_state:
```

# 259. Cargo-transport schema

```yaml
motor_transport:
  cargo_id:
  filament_id:
  motor_id:
  start_position:
  destination:
  direction:
  velocity:
  run_length:
  pause_state:
```

# 260. Cilium/flagellum schema

```yaml
axoneme:
  outer_doublets: 9
  central_singlets: 2
  dynein_activity_pattern:
  cross_links:
  bend_profile:
  beat_phase:
```

# 261. Cell-crawling schema

```yaml
cell_migration:
  front_identity:
  rear_identity:
  protrusion_state:
  adhesion_sites:
  actin_polymerization:
  myosin_contraction:
  Rho_state:
  Rac_state:
  Cdc42_state:
  migration_vector:
```

# 262. Sarcomere schema

```yaml
sarcomere:
  Z_disc_positions:
  actin_lengths:
  myosin_length:
  overlap_length:
  myosin_head_states:
  Ca2_state:
  troponin_state:
  tropomyosin_position:
  contraction_state:
```

# 263. ExperimentState — cytoskeletal drugs

Drug perturbations belong to ExperimentState:
```yaml
Taxol:
  microtubule_depolymerization: inhibited

colchicine/nocodazole:
  microtubule_polymerization: inhibited

phalloidin:
  actin_depolymerization: inhibited

cytochalasin:
  actin_plus_end_growth: blocked

latrunculin:
  actin_monomer_polymerization: inhibited
```

# 264. Project rule — filament polarity must be persistent

For actin and microtubules, plus/minus identity is part of WorldState. Camera rotation must never invert biological polarity.

# 265. Project rule — intermediate filaments are nonpolar

Do not arbitrarily assign plus/minus ends to intermediate filaments.

# 266. Project rule — microtubule dynamics are stochastic state transitions

Growth → catastrophe → shrinkage → rescue should emerge from nucleotide/end-state dynamics, not a canned back-and-forth animation.

# 267. Project rule — GTP cap is chemical state, not glowing hat

The GTP cap should encode terminal nucleotide state and stability, not be treated as an independent object.

# 268. Project rule — filament growth changes geometry causally

Polymerization adds subunits at defined filament ends and therefore changes filament length/position.

# 269. Project rule — motor motion is coupled to ATP cycling

Kinesin, dynein, and myosin movement must be tied to nucleotide/mechanical states rather than arbitrary translation of a mesh.

# 270. Project rule — cargo movement is not the same as cytoplasmic flow

A vesicle on a motor track should have a motor, filament, direction, and attachment state.

# 271. Project rule — ciliary bending is not whole-filament rotation

The source mechanism is:
```text
dynein-generated sliding
+ constrained doublets
→ bending
```

# 272. Project rule — actin treadmilling is not filament translocation

Subunits move through the polymer while filament ends add/lose monomers. The polymer can stay nearly constant in length.

# 273. Project rule — lamellipodium and filopodium are different architectures

```text
lamellipodium → branched ARP-rich network
filopodium → straight bundled formin-associated filaments
```

# 274. Project rule — cell migration requires traction

Polymerization alone is insufficient for net crawling. Adhesion and rearward contractility are required.

# 275. Project rule — microtubules contribute directionality to migration

The source experiments indicate actin can generate protrusions without microtubules, but microtubules help maintain persistent internal polarity/direction.

# 276. Project rule — sarcomeres shorten; filaments do not

Do not animate actin or myosin filaments compressing. The contractile unit shortens by sliding.

# 277. Project rule — Ca2+ controls accessibility, not ATP chemistry directly

In skeletal muscle, Ca2+ exposes myosin-binding sites through troponin/tropomyosin. ATP still powers myosin detachment/cycling.

# 278. Project rule — muscle contraction requires distributed motor ensembles

Macroscopic force emerges from many actin/myosin filaments and many asynchronous motor heads, not one synchronized giant power stroke.

# 279. Question 17–1 — cells rich in intermediate filaments

Official answer:
- epithelial cells: high
- smooth muscle cells: high
- long spinal-cord neurons: high

Amoebae and sperm generally do not need dense cytoplasmic intermediate-filament networks for tensile resistance. Plant cells use cell walls for much of this mechanical role. *E. coli* lacks these animal-type intermediate filaments. All listed eukaryotic cells can still possess nuclear lamins.

# 280. Question 17–2 — why nucleation is hard

Official answer: an isolated tubulin–tubulin contact provides too few stabilizing interactions. At the end of an existing microtubule, a new dimer can interact both longitudinally and laterally. γ-tubulin rings provide a preassembled template that bypasses the rare, unfavorable initial nucleation step.

# 281. Question 17–3A — rescue from shrinkage

A shrinking microtubule has lost its GTP cap. Rescue occurs if GTP-loaded tubulin adds rapidly enough to rebuild a stabilizing terminal cap before the newly added dimers are lost.

# 282. Question 17–3B — tubulin concentration

Higher free-tubulin concentration increases GTP-tubulin addition and therefore increases rescue frequency. Growth lowers free-tubulin concentration and eventually makes catastrophe more likely, giving the system a self-balancing character.

# 283. Question 17–3C — GDP only

Official answer:
```text
microtubules continue shrinking
→ eventually disappear
```
because GDP-tubulin cannot add stably.

# 284. Question 17–3D — nonhydrolyzable GTP

Official answer:
```text
microtubules continue growing
until free tubulin is depleted
```
because cap-destabilizing GTP hydrolysis cannot occur.

# 285. Question 17–4 — why not all ciliary dyneins at once

Official answer: uniform activation around all nine doublets would generate opposing sliding forces with little net directional bend. Selective dynein activation on one side causes the axoneme to bend away from that active side.

# 286. Question 17–5 — actin nucleation protein

Official answer: a protein that stabilizes an initial complex of two or more actin monomers without blocking future filament ends lowers the nucleation barrier.

# 287. Question 17–6 — anchoring leading-edge actin

Official answer: bundling/cross-linking proteins anchor growing actin filaments into the cortical meshwork so polymerization force deforms the membrane instead of simply pushing the filament backward into the cytoplasm.

# 288. Question 17–7 — speckle microscopy

Official answer:
- unpolymerized labeled actin diffuses rapidly and produces dim background
- sparsely labeled filamentous actin appears as random fluorescent speckles
- individual speckles move rearward from the leading edge as subunits treadmill through actin networks

# 289. Question 17–8 — weak bonds and strong muscle

Official answer: individual noncovalent interactions are weak, but enormous numbers of interactions distributed across enormous numbers of filaments collectively support large forces.

# 290. Question 17–9 — intermediate versus myosin II filaments

Official answer:
Similarities:
- subunits contain coiled-coil dimers
- dimers assemble into larger filaments

Difference:
- intermediate-filament assembly is antiparallel/symmetrical and nonpolar
- myosin filaments are bipolar, with motor heads in each half oriented coherently

The polarity of myosin filaments is required for contraction.

# 291. Question 17–10A — why troponin every seventh actin

Official answer: tropomyosin spans seven actin monomers and therefore acts as a molecular ruler. Troponin binds the regularly spaced ends of tropomyosin molecules rather than directly 'counting' every seventh actin.

# 292. Question 17–10B — actin + regulatory proteins + myosin

Official answer:
```text
troponin alone:
does not bind actin properly without tropomyosin
→ myosin access remains unregulated

tropomyosin alone:
blocks myosin
→ permanently inhibited regardless of Ca2+

troponin + tropomyosin:
Ca2+-regulated contraction possible
```

# 293. Question 17–11A

`TRUE`: kinesin-driven outward ER movement helps maintain the extended ER network.

# 294. Question 17–11B

`TRUE`: microtubules can segregate chromosomes, but actin is required for the contractile ring that physically cleaves the animal cell.

# 295. Question 17–11C

`TRUE`: lamellipodia and filopodia help explore and form new adhesion sites.

# 296. Question 17–11D

`FALSE`: ciliary bending is driven by ATP hydrolysis by axonemal dynein, not by tubulin GTP hydrolysis.

# 297. Question 17–11E

`FALSE`: some long-lived differentiated cells maintain very stable intermediate filaments; the inability to depolymerize is not universally lethal.

# 298. Question 17–11F

`FALSE`: faster plus-end growth reflects structural differences in subunit-binding kinetics at the two ends, not simply a larger GTP cap.

# 299. Question 17–11G

`TRUE`: T tubules are continuous specializations of plasma membrane; sarcoplasmic reticulum is a specialization of ER.

# 300. Question 17–11H

`FALSE`: source answer distinguishes:
```text
nonmuscle/smooth contexts → myosin phosphorylation
skeletal muscle → Ca2+ binding to troponin
```
not troponin phosphorylation.

# 301. Question 17–12 — diffusion versus motor transport

Official source calculation for 10 μm:
```text
small molecule: ~0.1 s
protein: ~1 s
vesicle: ~10 s
```

For a 10-cm axon:
```text
vesicle diffusion: ~10^9 s (>30 years)
motor transport at 1 μm/s: ~10^5 s (~28 h)
```

# 302. Question 17–13 — why eukaryotes need large cytoskeletons

Official answer emphasizes:
1. animal cells are large and lack rigid cell walls
2. nucleus requires structural support/positioning
3. shape-changing movement requires actin/myosin
4. multiple chromosomes require a microtubule spindle for accurate segregation
5. internal organelles require long-range motor-based transport

# 303. Question 17–14 — intermediate-filament polarity

Official answer:
```text
no unique polarity
```
because symmetrical tetramers assemble from antiparallel coiled-coil dimers.

# 304. Question 17–15 — why no intermediate-filament motors

Official answer: because intermediate filaments are nonpolar, a motor binding in the middle of the filament would lack a consistent structural cue defining one direction.

# 305. Question 17–16 — katanin fragments

Official answer:
```text
katanin cuts away from GTP cap
→ newly exposed ends contain GDP-tubulin
→ fragments rapidly depolymerize
```
providing rapid microtubule destruction.

# 306. Question 17–17 — why both Taxol and colchicine block division

Official answer: mitosis requires both microtubule polymerization and depolymerization. Taxol prevents needed disassembly/dynamics; colchicine prevents needed assembly. Both disrupt spindle formation/function.

# 307. Question 17–18 — motors fixed randomly to glass

Official answer: motor heads bind microtubules stereospecifically, so only correctly oriented motors engage productively. Because kinesin heads walk toward the plus end, a free microtubule glides across kinesin-coated glass:
```text
minus-end first
```

# 308. Question 17–19A — tubulin polymerization curve

Official answer:
```text
A: nucleation lag
B: rapid elongation
C: dynamic equilibrium / plateau
```
At the plateau, some microtubules grow while others shrink, keeping free-tubulin concentration approximately constant.

# 309. Question 17–19B — adding centrosomes

Official answer:
- removes/reduces nucleation lag
- does not change elongation slope
- does not change final equilibrium level
because centrosomes supply nucleation sites but do not change polymerization/depolymerization rate constants.

# 310. Question 17–20 — growing versus shrinking microtubule ends

Official answer: shrinking microtubules show visibly frayed, curling protofilaments. The source interprets this as evidence that the GTP cap helps keep protofilaments aligned, likely by strengthening lateral interactions.

# 311. Question 17–21 — fibroblast migration and three filament systems

Official answer:
- latrunculin stops movement → actin is required for motility
- nocodazole randomizes protrusion direction → microtubules are required for persistent polarity/direction
- blocking vimentin has no obvious migration effect → intermediate filaments are not essential to the motile machinery or polarity in this experiment

# 312. Question 17–22 — role of Ca2+ in skeletal-muscle contraction

Official answer accepts **B or C** in the way the question is framed:
- Ca2+ is the immediate cytosolic signal released after the action potential reaches internal membrane systems
- Ca2+ binds troponin, moves tropomyosin, and exposes myosin-binding sites

A and D are rejected.

# 313. Question 17–23 — what shortens

Official answer:
```text
D. sarcomeres become shorter
```
while:
```text
Z discs move closer together
actin filament length unchanged
myosin filament length unchanged
```

# 314. Question 17–24 — rigor mortis

Official answer:
```text
death
→ ATP production stops
→ Ca2+ pumps fail
→ cytosolic Ca2+ remains elevated
→ contraction signal persists
+
ATP unavailable for myosin detachment
→ myosin heads remain tightly bound to actin
→ rigor
```
Rigor ends only as cellular components decompose.

# 315. Source quantitative register

| Quantity | Chapter 17 source value/context |
|---|---:|
| intermediate-filament diameter | ~10 nm |
| microtubule outer diameter | 25 nm |
| actin-filament diameter | ~7 nm |
| IF monomer rod example | ~48 nm in Fig. 17–4 |
| human keratin genes | >50 source-era statement |
| microtubule protofilaments | 13 |
| fibroblast tubulin polymerized/free | ~50% / ~50% |
| axonal transport | >10 cm/day |
| shoulder-axon source journey | ~2 days |
| video microscope conventional resolution comparison | ~0.2 μm / 200 nm |
| squid axoplasm vesicles | 30–50 nm |
| squid axoplasm mitochondria length | ~5000 nm |
| squid axoplasm movement | up to ~5 μm/s |
| kinesin source polypeptide | ~110 kDa |
| kinesin gliding assay | ~1–2 μm/s |
| single kinesin source speed | ~0.3 μm/s |
| kinesin step | 8 nm |
| kinesin run | ~100 steps |
| ATP per kinesin step | 1 |
| cilium diameter | ~0.25 μm |
| respiratory cilia density | >10^9/cm² |
| ciliary beat cycle | ~0.1–0.2 s |
| actin helix repeat | ~37 nm |
| cellular protein that is actin | ~5% |
| actin filament/free pool | ~50% / ~50% |
| filopodium width | ~0.1 μm |
| filopodium length | ~5–10 μm |
| filopodium actin filaments | ~10–20 |
| growth-cone protrusion | up to ~50 μm |
| leading-edge protrusion speed | ~1 μm/s |
| myosin II molecule | ~150 nm |
| myofibril diameter | ~1–2 μm |
| sarcomere | ~2.5 μm |
| adult skeletal-muscle fiber diameter | ~50 μm |
| muscle fiber length | several cm |
| myosin displacement/cycle | ~5 nm |
| myosin heads/thick filament | ~300 |
| head cycling frequency | ~5/s |
| actin–myosin sliding | up to ~15 μm/s |
| sarcomere contraction example | 3→2 μm in <0.1 s |
| tropomyosin span | 7 actin monomers |
| cardiac lifetime contractions | ~3×10^9 source estimate |
| Q17–12 small molecule diffusion, 10 μm | ~0.1 s |
| Q17–12 protein diffusion, 10 μm | ~1 s |
| Q17–12 vesicle diffusion, 10 μm | ~10 s |
| Q17–12 vesicle diffusion, 10 cm | ~10^9 s / >30 y |
| Q17–12 motor transport, 10 cm @1 μm/s | ~10^5 s / 28 h |

# 316. Quantitative verification queue

Before promoting source numbers into runtime truth, externally verify:
- filament diameters and structural heterogeneity
- intermediate-filament subunit geometry
- microtubule protofilament-number variation
- cellular polymer/free tubulin fractions
- axonal transport speeds by cargo/motor type
- kinesin processivity/step kinetics by kinesin family
- dynein stepping/force behavior
- ciliary beat frequencies by cell type
- actin monomer/polymer fractions by cell state
- filament-branch geometry in lamellipodia
- filopodium dimensions by cell type
- myosin-II filament composition and step kinetics
- sarcomere lengths across muscle type/state
- Ca2+-handling kinetics in skeletal versus cardiac versus smooth muscle

# 317. Do-not-overinterpret register

Do not infer:

```text
cytoskeleton = static scaffold
FALSE

all three filament systems have polarity
FALSE; intermediate filaments do not

plus/minus = electrical charge
FALSE

centrioles directly nucleate all centrosomal microtubules
FALSE in source model

all microtubules grow continuously
FALSE

GTP hydrolysis powers kinesin stepping
FALSE; ATP powers kinesin

GTP hydrolysis bends cilia
FALSE; ATP-powered dynein does

all kinesins move plus-endward
NOT UNIVERSAL; source says most

all dynein is structurally/functionally identical
FALSE; ciliary and cytoplasmic classes differ

cargo transport = diffusion
FALSE

microtubule motion is Brownian
FALSE

motile eukaryotic flagella = bacterial flagella
FALSE

ciliary sliding means doublets freely telescope in intact cilia
FALSE; links convert sliding into bending

actin filament itself walks forward during treadmilling
FALSE

all actin is filamentous
FALSE

lamellipodia and filopodia have the same filament architecture
FALSE

actin polymerization alone produces whole-cell crawling
FALSE

microtubules are unnecessary for migration direction
FALSE in source fibroblast experiment

Rho, Rac, and Cdc42 are interchangeable
FALSE in source examples

muscle contraction shortens actin
FALSE

muscle contraction shortens myosin filaments
FALSE

Ca2+ directly supplies mechanical energy to myosin
FALSE

ATP binding strengthens myosin attachment
FALSE; ATP binding releases myosin from actin

ATP hydrolysis alone is the power stroke
OVER-SIMPLIFIED; source distinguishes cocking, rebinding, Pi release, power stroke

troponin alone regulates actin
FALSE; tropomyosin is required

skeletal and smooth muscle activate myosin by identical mechanisms
FALSE
```

# 318. Cross-chapter dependencies

```text
Chapter 3:
ATP/GTP hydrolysis and energetic coupling

Chapter 4:
coiled coils, motor proteins, phosphorylation, GTPases

Chapter 11:
plasma membrane, membrane–cytoskeleton interactions

Chapter 12:
membrane potential, action potentials, ion gradients

Chapter 15:
organelle positioning and vesicle trafficking

Chapter 16:
Ca2+ signaling, Rho-family GTPase logic

Chapter 18:
mitotic spindle, cytokinesis, cell division

Chapter 20:
desmosomes, hemidesmosomes, integrins, ECM
```

# 319. Chapter 17 core causal model

```text
INTERMEDIATE FILAMENT
fibrous monomer
→ coiled-coil dimer
→ antiparallel tetramer
→ lateral assembly
→ nonpolar tensile cable
→ tissue/nuclear mechanical strength

MICROTUBULE
αβ-tubulin + GTP
→ γ-tubulin-mediated nucleation
→ polarized microtubule
→ GTP cap
→ growth
→ cap loss
→ catastrophe
→ shrinkage/rescue
→ polarized transport tracks

ATP + KINESIN/DYNEIN
→ directed movement on microtubules
→ organelle/cargo positioning

CILIARY DYNEIN
→ doublet sliding
+ cross-link constraints
→ axoneme bending
→ beat

ACTIN
ATP-actin
→ polarized filament
→ treadmilling
→ cortex / bundles / branched networks

ARP
→ branched actin
→ lamellipodium

FORMIN
→ unbranched actin
→ filopodium / contractile ring

ACTIN + INTEGRIN + MYOSIN II
→ protrusion + adhesion + traction
→ cell crawling

SKELETAL MUSCLE
action potential
→ T tubule
→ sarcoplasmic-reticulum Ca2+ release
→ troponin
→ tropomyosin movement
→ actin exposed
→ myosin ATP cycle
→ filament sliding
→ sarcomere shortening
→ contraction
```

# 320. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 17: “Cytoskeleton.”**

Printed pages:
```text
595–634
```

PDF pages reviewed:
```text
630–669
```

Official answer section reviewed:
```text
PDF pages 840–844
```

Reviewed:
- all four major chapter sections
- Figures 17–1 through 17–46
- Table 17–1
- Table 17–2
- How We Know: *Pursuing Microtubule-associated Motor Proteins*
- Essential Concepts
- Why Trust Science?
- Questions 17–1 through 17–24
- official textbook answers for Questions 17–1 through 17–24

# 321. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- three filament systems and diameters
- intermediate-filament tensile role
- monomer → coiled-coil dimer → antiparallel tetramer → filament
- lack of IF polarity
- four IF classes
- desmosomal keratin network
- nuclear lamina
- lamin phosphorylation/dephosphorylation
- plectin
- SUN/KASH nuclear-envelope bridges
- αβ-tubulin dimer
- 13-protofilament microtubule
- plus/minus-end definitions
- γ-tubulin nucleation
- centrosome organization
- centriole source role
- dynamic instability
- GTP cap
- catastrophe/rescue
- polymer/free tubulin source ratio
- cell-type-specific microtubule organization
- augmin branching
- Table 17–1 drugs
- kinesin/dynein directions
- ATP-driven motor stepping
- ER/Golgi positioning
- How We Know kinesin discovery
- all kinesin quantitative source values
- cilia/flagella 9+2 structure
- dynein sliding→bending
- primary cilium
- actin structure/polarity
- ATP hydrolysis and treadmilling
- Table 17–2 drugs
- ~5% actin source value
- actin-binding protein categories
- myosin I
- myosin II
- cell cortex
- crawling cycle
- integrin anchorage
- lamellipodia/filopodia source dimensions
- ARP branching
- formin
- Rho/Rac/Cdc42 source phenotypes
- actin/microtubule polarity cooperation
- muscle myosin-II filament
- myofibril/sarcomere geometry
- sliding-filament mechanism
- myosin ATP cycle
- all source motor numbers
- T tubules / sarcoplasmic reticulum
- troponin/tropomyosin
- Ca2+ shutoff
- smooth/nonmuscle myosin activation
- all Questions 17–1 through 17–24
- official answer consistency
- all schemas
- all DO_NOT_INFER rules
- source trace

# END OF CHAPTER 17 CANON

Recommended repository destination:

```text
science/chapters/17_cytoskeleton.md
```

Recommended commit message:

```text
science: add Chapter 17 cytoskeleton canon
```

Do not begin Chapter 18 merely because this file exists.

Chapter 18 will connect cytoskeletal mechanics to the cell-cycle control system: cyclins/CDKs, checkpoints, DNA replication control, mitosis, kinetochore attachment, spindle dynamics, chromosome segregation, cytokinesis, and apoptosis.
