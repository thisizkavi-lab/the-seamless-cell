---
title: "The Seamless Cell — Science Canon — Chapter 20"
subtitle: "Cell Communities: Tissues, Stem Cells, and Cancer"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 20, printed pages 717–762 (PDF pages 752–797)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 20 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 20 moves The Seamless Cell beyond an isolated cell. It describes how cells cooperate mechanically, chemically, developmentally, and evolutionarily to make tissues; how extracellular matrix and cell junctions transmit forces; how stem cells maintain tissues over a lifetime; and how cancer emerges when cells escape the normal social constraints of multicellular life.

The central tissue architecture is:

```text
cells
+
extracellular matrix
+
cell–cell junctions
+
cell–matrix junctions
+
intercellular signaling
+
selective adhesion
+
stable gene-expression memory
↓
organized tissue
```

The central renewal architecture is:

```text
stem cell
→ self-renewal
+
proliferating precursor / transit-amplifying cell
→ terminal differentiation
→ tissue function
→ cell loss
→ replacement
```

The central cancer architecture is:

```text
somatic mutation
→ selectable cellular advantage
→ clonal expansion
→ additional driver mutations
→ altered proliferation / survival / genome stability / adhesion
→ invasion
→ metastasis
```

The core project rule is:

```text
MULTICELLULAR BIOLOGY IS NOT "MANY CELLS NEAR EACH OTHER."

Tissue behavior emerges from explicit:
- mechanics
- topology
- extracellular matrix
- adhesion
- polarity
- signaling
- lineage
- turnover
- spatial niches
- clonal competition
```

For The Seamless Cell, Chapter 20 is therefore the bridge from **cell-scale WorldState** to **tissue-scale WorldState**.

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 20.
- `SOURCE_SCALE` — explicit numerical value/range from the source.
- `SOURCE_MODEL` — mechanistic/pedagogical model presented in the source.
- `SOURCE_DERIVED` — direct inference/calculation from source facts.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — value/claim likely to vary with current data, population, method, or clinical practice.
- `SOURCE_HYPOTHESIS` — explanation framed as tentative or incomplete.
- `PROJECT_CONSTRAINT` — implementation rule for The Seamless Cell.
- `VERIFY_QUANT` — source value retained pending external verification.
- `LATER_CHAPTER_REFINEMENT` — detail belongs to another layer or future source.
- `DO_NOT_INFER` — hard guardrail.

## Chapter map

```text
EXTRACELLULAR MATRIX AND CONNECTIVE TISSUES

EPITHELIAL SHEETS AND CELL JUNCTIONS

STEM CELLS AND TISSUE RENEWAL

CANCER
```

Supporting material:

```text
Figures 20–1 through 20–55
Tables 20–1 and 20–2
How We Know: Making Sense of the Genes That Are Critical for Cancer
Essential Concepts
Questions 20–1 through 20–21
Official textbook answers to Questions 20–1 through 20–21
```

# 1. Tissue

A tissue is an organized cooperative assembly of cells and, in many cases, extracellular matrix.

# 2. Organ

An organ is built from multiple tissues arranged to perform integrated functions.

# 3. Cells are not passive bricks

The source emphasizes that cells are deformable, dynamic, signaling, force-generating entities. Tissue architecture therefore requires active attachment, communication, renewal, and mechanical coordination.

# 4. Extracellular matrix

Material secreted around cells that contributes to tissue mechanics, organization, signaling, and cell behavior.

# 5. Mechanical continuity in tissue

Force can be transmitted:
```text
cytoskeleton → cell junction → neighboring cytoskeleton
```
or:
```text
cytoskeleton → cell–matrix junction → extracellular matrix
```

# 6. Tissue maintenance is dynamic

Cells die, move, differentiate, and are replaced while tissue organization must remain functional.

# 7. Cancer is a disorder of tissue organization

The source frames cancer as a failure of the social controls that ordinarily constrain cell survival, proliferation, position, and behavior.

# 8. Plant cell wall

An extracellular matrix surrounding each plant cell that:
- protects
- shapes
- mechanically supports
- limits swelling
- immobilizes cells relative to one another

# 9. Plant wall is essential for osmotic support

A plant cell stripped of its wall is mechanically fragile and can rupture when osmotic conditions drive water influx.

# 10. Plant cells lack animal-type intermediate-filament tensile support

The chapter contrasts plant-cell wall mechanics with the intracellular intermediate-filament system of many animal cells.

# 11. Primary cell wall

A relatively thin, expandable wall produced while a plant cell is growing.

# 12. Primary-wall thickness source value

`SOURCE_SCALE`:
```text
~200 nm
```

# 13. Secondary cell wall

A thicker, more rigid wall often deposited after cell growth stops.

# 14. Turgor pressure

Osmotically generated internal swelling pressure that presses the plasma membrane/cell contents outward against the restraining wall.

# 15. Wilting

Loss of water reduces turgor pressure; cells become less distended and tissue loses rigidity.

# 16. Cellulose

Long unbranched glucose polymer forming the main tensile fibers of higher-plant cell walls.

# 17. Cellulose linkage

The source depicts glucose monomers joined by:
```text
β1,4 glycosidic linkages
```
with alternating orientation of neighboring glucose units.

# 18. Cellulose microfibril

Bundle of aligned cellulose molecules held together substantially through hydrogen bonding.

# 19. Cellulose-chain count source model

`SOURCE_SCALE` / `SOURCE_MODEL`:
```text
18 cellulose molecules per microfibril
```
in Figure 20–4.

# 20. Cellulose provides tensile strength

Cellulose microfibrils resist stretching and therefore mechanically constrain how plant cells expand.

# 21. Pectin

Cell-wall polysaccharide that occupies spaces between cellulose microfibrils and contributes to resistance against compression.

# 22. Middle lamella

Pectin-rich layer that helps cement adjacent plant cell walls together.

# 23. Cross-linking polysaccharides

Polysaccharides that physically connect cellulose microfibrils within the primary wall.

# 24. Lignin

Highly cross-linked polymer deposited in woody tissues that increases rigidity and waterproofing.

# 25. Cell-growth direction follows wall anisotropy

Because cellulose microfibrils resist stretching, cells expand preferentially in directions perpendicular to the dominant microfibril orientation.

# 26. Wall orientation controls tissue shape

By controlling cellulose deposition, plant cells influence their own anisotropic growth and thereby organ morphology.

# 27. Cellulose synthesis occurs at plasma membrane

Unlike many secreted macromolecules, cellulose is synthesized by membrane-embedded enzyme complexes at the outer face of the plasma membrane.

# 28. UDP-glucose

Activated glucose substrate supplied from the cytosol to cellulose-synthase complexes.

# 29. Cortical microtubules guide cellulose deposition

Microtubules aligned beneath the plasma membrane help guide cellulose-synthase trajectories, coupling intracellular cytoskeletal orientation to extracellular wall architecture.

# 30. Cellulose-synthase source stoichiometry

`SOURCE_MODEL`:
```text
6 enzyme trimers
→ 18 cellulose chains
→ one microfibril
```
in Figure 20–7.

# 31. Four major animal tissue classes

The source distinguishes:
```text
connective
epithelial
nervous
muscle
```

# 32. Connective tissue architecture

Extracellular matrix occupies much of the tissue volume and carries much of the mechanical load, with cells embedded sparsely within it.

# 33. Connective-tissue diversity

The same general extracellular-matrix principle can yield tendon, dermis, bone, cartilage, and vitreous humor by varying matrix composition and organization.

# 34. Collagen

Family of fibrous extracellular proteins providing tensile strength in animal connective tissues.

# 35. Human/mammalian collagen genes source statement

`SOURCE_ERA_STATEMENT`:
```text
>40 collagen genes in mammals
```

# 36. Collagen fraction of mammalian protein mass

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~25% of total mammalian protein mass
```

# 37. Type I collagen abundance

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~90% of body's collagen
```
in the source.

# 38. Collagen triple helix

Typical collagen molecule contains three collagen polypeptide chains wound into a long ropelike triple helix.

# 39. Glycine every third residue

The source reiterates that glycine is required at every third position in the collagen polypeptide for proper triple-helical packing.

# 40. Collagen-molecule diameter

`SOURCE_SCALE`:
```text
~1.5 nm
```

# 41. Collagen fibril diameter

`SOURCE_SCALE`:
```text
~10–300 nm
```

# 42. Collagen fiber diameter

`SOURCE_SCALE`:
```text
~0.5–3 μm
```
in Figure 20–9.

# 43. Collagen fibrils can be many micrometers long

The source describes fibrils as long, cable-like polymers that can bundle into still larger fibers.

# 44. Fibroblast

Connective-tissue cell that produces collagen and many other extracellular-matrix macromolecules.

# 45. Osteoblast

Bone-forming matrix-producing cell related functionally to connective-tissue fibroblastic lineages in the source discussion.

# 46. Procollagen

Collagen precursor secreted with terminal peptide extensions that inhibit premature fibril assembly inside the cell.

# 47. Procollagen proteinase

Extracellular enzyme that removes terminal procollagen extensions after secretion.

# 48. Collagen assembly is spatially gated

```text
inside cell:
procollagen → assembly inhibited

outside cell:
terminal cleavage → collagen → fibril self-assembly
```

# 49. Collagen-assembly defects reduce tissue tensile strength

The source uses hyperextensible connective tissue as a consequence of defective procollagen processing/assembly.

# 50. Matrix degradation is necessary

Cells must degrade extracellular matrix during growth, tissue renewal, repair, and migration.

# 51. Matrix proteases

Extracellular proteases that cleave matrix proteins.

# 52. Matrix proteases in disease

The source links excessive or inappropriate matrix proteolysis to cartilage breakdown and tumor invasion.

# 53. Cells organize the matrix they secrete

Fibroblasts mechanically remodel collagen by crawling, pulling, compacting, and aligning fibrils.

# 54. Tendon collagen alignment

Fibrils align roughly parallel to the dominant tensile axis.

# 55. Plywood-like collagen organization

Some tissues arrange successive collagen layers at different orientations to resist stress from multiple directions.

# 56. Reciprocal cell–matrix organization

Fibroblasts align collagen, and aligned collagen in turn guides fibroblast migration and organization.

# 57. Integrin

Transmembrane adhesion receptor that mechanically and biochemically couples extracellular matrix to intracellular cytoskeleton.

# 58. Integrin dimer

The source depicts an integrin as an α/β heterodimer.

# 59. Fibronectin

Extracellular matrix protein that can bind collagen and integrins, thereby providing an indirect mechanical link.

# 60. Integrin–fibronectin–actin linkage

```text
collagen
→ fibronectin
→ integrin
→ intracellular adaptor proteins
→ actin filament
```

# 61. Integrin can also connect to intermediate filaments

The source notes not all integrins are actin-linked; some matrix junctions couple to intermediate filaments.

# 62. Integrins transmit tension across membrane

Mechanical force can pass across the plasma membrane through integrin-based linkages.

# 63. Integrin activation is bidirectional

Binding on either side can stabilize an extended high-affinity state:
```text
inside-out activation
or
outside-in activation
```

# 64. Integrins are signaling receptors

Extracellular binding can activate intracellular protein-kinase signaling and alter cell behavior or survival.

# 65. Human integrin count source statement

`SOURCE_ERA_STATEMENT`:
```text
at least 24 integrin types
```

# 66. Leukocyte integrin source example

Integrins help white blood cells leave blood vessels and migrate into infected tissues.

# 67. Leukocyte adhesion deficiency

Source example in which loss of a leukocyte integrin impairs tissue entry and leads to recurrent bacterial infection.

# 68. Platelet integrin source example

A distinct platelet integrin is required for binding extracellular clotting proteins; deficiency can produce excessive bleeding.

# 69. Glycosaminoglycan

Negatively charged extracellular polysaccharide composed of repeating disaccharide units.

# 70. Hyaluronan

Relatively simple long GAG chain used as the source example.

# 71. Hyaluronan repeat count

`SOURCE_SCALE`:
```text
up to ~25,000 disaccharide repeats
```

# 72. GAG negative charge

Carboxylate and, in many GAGs, sulfate groups produce dense negative charge.

# 73. Proteoglycan

Core protein covalently decorated with one or more GAG chains.

# 74. Aggrecan

Large cartilage proteoglycan containing many GAG chains.

# 75. Aggrecan GAG count

`SOURCE_SCALE`:
```text
>100 GAG chains per core protein
```

# 76. Aggrecan–hyaluronan aggregate

Many aggrecan molecules can associate with one hyaluronan chain through link proteins, creating a giant extracellular assembly.

# 77. Proteoglycan aggregate mass

`SOURCE_SCALE`:
```text
≥10^8 Da
```
for the large aggregate in Figure 20–17.

# 78. Proteoglycan aggregate volume

`SOURCE_SCALE`:
```text
~2 × 10^-12 cm^3
```
described as roughly bacterium-sized in occupied volume.

# 79. GAGs attract cations and water

Negative charges attract counterions such as Na+, which osmotically attract water.

# 80. GAG swelling pressure

Hydration makes GAG-rich matrices resist compression.

# 81. Collagen–GAG composite mechanics

```text
GAG hydration → swelling/compressive resistance
collagen → tensile counterforce
```
Together they create resilient tissue.

# 82. Cartilage pressure source statement

`SOURCE_SCALE` / `VERIFY_QUANT`: knee cartilage matrix can support pressures of:
```text
hundreds of kg/cm²
```
in the source.

# 83. Proteoglycans also regulate molecular traffic

Their hydrated gels can act as size/charge filters and influence diffusion through extracellular space.

# 84. Proteoglycans bind signals

They can bind growth factors and other extracellular signaling proteins.

# 85. Matrix can guide cell migration

ECM composition and organization can promote, inhibit, or spatially direct migration.

# 86. Epithelium

A multicellular sheet in which adjacent animal cells are tightly associated.

# 87. Simple epithelium

One-cell-thick epithelial layer.

# 88. Stratified epithelium

Epithelial sheet composed of multiple cell layers.

# 89. Epithelial cell shapes

Source categories:
```text
columnar
cuboidal
squamous
```

# 90. Epithelia form organismal barriers

They cover external surfaces and line internal cavities, controlling exchange between compartments.

# 91. Epithelial polarity

An epithelial cell has distinct:
```text
apical domain
basolateral/basal domain
```
with different molecular composition and function.

# 92. Basal lamina

Thin specialized extracellular matrix beneath an epithelial sheet.

# 93. Basal-lamina composition

Source emphasizes:
```text
type IV collagen
+
laminin
```

# 94. Laminin

Basal-lamina protein that provides adhesive sites for integrins.

# 95. Intestinal epithelial polarity

Absorptive cells take nutrients up at the apical surface and export them basally toward underlying tissues.

# 96. Goblet-cell polarity

Secretory machinery is oriented so mucus is released apically into the gut lumen.

# 97. Microvilli

Apical protrusions that increase membrane area for absorptive transport.

# 98. Cell-junction functional classes

Chapter 20 distinguishes junctions that:
- seal
- mechanically attach
- communicate

# 99. Tight junction

Cell–cell junction that seals neighboring epithelial cells and restricts paracellular passage of water-soluble molecules.

# 100. Claudins

Transmembrane tight-junction proteins forming sealing strands.

# 101. Occludins

Transmembrane proteins contributing to tight-junction strands in the source model.

# 102. Tight junction preserves apical–basolateral membrane identity

It forms a diffusion barrier within the plasma membrane, restricting mixing of apical and basolateral proteins.

# 103. Tight junction also organizes polarity machinery

Many epithelia assemble intracellular polarity complexes at tight-junction regions.

# 104. Adherens junction

Cadherin-based cell–cell junction mechanically linked to actin.

# 105. Cadherin

Ca2+-dependent transmembrane cell-adhesion protein.

# 106. Cadherin homophilic binding

A cadherin on one cell binds the same cadherin type on an adjacent cell.

# 107. Adherens-junction architecture

```text
actin
→ linker proteins
→ cadherin
↔ cadherin
← linker proteins
← actin
```

# 108. Adhesion belt

Continuous adherens-junction-associated actomyosin belt near the apical end of many epithelial cells.

# 109. Adherens belts can generate tissue-scale force

Actomyosin contraction can narrow cell apices and reshape entire epithelial sheets.

# 110. Epithelial folding

Coordinated apical contraction can bend a sheet into a tube or cup.

# 111. Neural-tube source example

The source uses apical constriction and epithelial folding during neural-tube formation.

# 112. Lens-vesicle source example

Contraction of epithelial cells in multiple directions can help form a hollow epithelial sphere that pinches off.

# 113. Desmosome

Cadherin-based cell–cell junction mechanically linked to keratin intermediate filaments.

# 114. Desmosome architecture

```text
keratin
→ cytoplasmic plaque/linkers
→ cadherin
↔ cadherin
← plaque/linkers
← keratin
```

# 115. Desmosomes distribute tensile stress

They effectively connect intermediate-filament networks across neighboring epithelial cells.

# 116. Hemidesmosome

Cell–matrix junction anchoring an epithelial cell to basal lamina.

# 117. Hemidesmosome uses integrins, not cadherins

Its transmembrane attachment machinery binds basal-lamina proteins extracellularly and keratin intermediate filaments intracellularly.

# 118. Hemidesmosome linkage

```text
keratin
→ linker plaque
→ integrin
→ laminin / basal lamina
```

# 119. Focal contact versus hemidesmosome

Source comparison:
```text
focal contact:
actin-linked, dynamic traction/crawling

hemidesmosome:
intermediate-filament-linked, stable epithelial anchorage
```

# 120. Gap junction

Intercellular channel system directly connecting the cytosol of neighboring animal cells.

# 121. Gap-junction intermembrane spacing

`SOURCE_SCALE`:
```text
~2–4 nm
```

# 122. Connexon

Hexameric transmembrane channel complex in one cell membrane.

# 123. Connexon subunits

`SOURCE_SCALE`:
```text
6 protein subunits per connexon
```

# 124. Complete gap-junction channel

Two connexons align end-to-end across the intercellular gap.

# 125. Gap-junction channel diameter

`SOURCE_SCALE`:
```text
~1.5 nm
```

# 126. Gap-junction permeability source limit

Small water-soluble molecules and ions up to approximately:
```text
~1000 Da
```
can pass in the source model.

# 127. Gap junction creates electrical coupling

Ions can move directly between cells, allowing electrical signals to spread.

# 128. Gap junction creates metabolic coupling

Small metabolites and second messengers can move directly between adjacent cytosols.

# 129. Cardiac coupling

Gap junctions contribute to synchronous electrical excitation and contraction of cardiac muscle.

# 130. Gap junctions are gated

Their permeability can change in response to signals and intracellular state.

# 131. Dopamine retinal source example

Dopamine reduces gap-junction communication among certain retinal neurons in response to increased light.

# 132. Ca2+-dependent gap-junction closure

The official question/answer layer explains that increased intracellular Ca2+ in a damaged cell can close gap junctions and isolate the cell from its neighbors.

# 133. Plasmodesma

Plant intercellular channel traversing the cell wall and connecting adjacent cell cytoplasms.

# 134. Plasmodesmata are not plant gap junctions structurally

They are membrane-lined cytoplasmic channels crossing the cell wall, fundamentally different from paired connexon pores.

# 135. Plasma-membrane continuity through plasmodesmata

The plasma membrane lining the channel is continuous between adjacent cells.

# 136. Desmotubule

Fine tube derived from smooth ER running through many plasmodesmata.

# 137. Plasmodesmata can pass macromolecules

Unlike gap junctions, they can permit regulated passage of some proteins and regulatory RNAs.

# 138. Plant developmental communication

Intercellular movement of transcription regulators and regulatory RNAs through plasmodesmata contributes to plant development.

# 139. Development uses a limited repertoire of cellular behaviors

The source emphasizes repeated use of:
- proliferation
- migration
- adhesion
- force generation
- differentiation
- signaling
- death

# 140. Totipotency

Ability of a fertilized egg to generate a complete organism in the source developmental framing.

# 141. Human cell-count source statement

`SOURCE_ERA_STATEMENT`:
```text
~30,000,000,000,000 cells
```
in a typical human.

# 142. Genome directs developmental potential but does not act alone

The source states the genome is the central information archive, while development also requires appropriate cellular environment, maternal components, spatial organization, and signaling context.

# 143. Tissues contain many cooperating cell types

Examples include fibroblasts, endothelial cells, nerve axons, Schwann cells, macrophages, lymphocytes, and specialized parenchymal cells.

# 144. Three stabilizers of tissue organization

```text
1. cell communication
2. selective cell adhesion
3. cell memory
```

# 145. Cell communication stabilizes cell numbers

Cells adjust proliferation and survival in response to social signals from neighboring or distant cells.

# 146. Selective adhesion stabilizes position

Different adhesion molecules bias cells toward appropriate neighbors and matrix environments.

# 147. Cell memory stabilizes identity

Stable gene-expression programs allow differentiated cells and their progeny to preserve cell-type character.

# 148. Tissue turnover varies enormously

Some cell populations renew in days; others persist for a lifetime.

# 149. Intestinal epithelium turnover

`SOURCE_SCALE`:
```text
~3–6 days
```

# 150. Bone turnover

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10 years
```

# 151. Red blood cell lifetime

`SOURCE_SCALE`:
```text
~120 days
```

# 152. Epidermal turnover

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~2 months
```

# 153. Most neurons are long-lived

The source contrasts rapidly renewed epithelia with many neurons that persist for the organism's lifetime.

# 154. Osteoclast

Cell that resorbs old bone matrix.

# 155. Osteoblast renews bone matrix

New bone matrix is deposited by osteoblasts.

# 156. Radiation sickness illustrates renewal dependence

If ionizing radiation blocks cell proliferation, rapidly renewing tissues such as intestinal epithelium deteriorate quickly.

# 157. Terminally differentiated cell

A specialized cell that has reached the end of its normal differentiation program and usually does not divide further.

# 158. Proliferating precursor cell

Dividing intermediate progenitor that amplifies cell number before terminal differentiation.

# 159. Transit-amplifying cell

Alternative term used in the source for a proliferating precursor.

# 160. Stem cell

Undifferentiated self-renewing cell capable of generating differentiated progeny appropriate to its tissue.

# 161. Stem-cell self-renewal

A stem-cell daughter can retain stem-cell identity.

# 162. Stem-cell differentiation output

Another daughter can enter a precursor/differentiation pathway.

# 163. Symmetry of stem-cell divisions can vary

The source explicitly allows:
- stem + stem
- stem + precursor
- precursor + precursor
as long as the population-level stem-cell pool remains maintained.

# 164. Adult tissue stem cells are restricted

They are undifferentiated but not developmentally unrestricted; stable transcriptional programs constrain the cell types they normally generate.

# 165. Intestinal crypt

Invagination containing stem cells and proliferating precursors at its base.

# 166. Villus

Fingerlike projection covered by differentiated gut epithelium.

# 167. Gut-cell migration

Most newly generated cells move upward from the crypt toward the villus tip while differentiating.

# 168. Villus-tip shedding

Terminally differentiated cells are shed into the gut lumen at the villus tip.

# 169. Paneth cells

Differentiated secretory cells that move downward toward the crypt base rather than upward.

# 170. Paneth-cell functions

The source gives two roles:
```text
antimicrobial peptide secretion
+
supporting the stem-cell niche
```

# 171. Gut transit time

`SOURCE_SCALE`:
```text
~3–6 days
```
from crypt birth to villus loss.

# 172. Epidermal stem cells

Stem and precursor cells are concentrated in the basal layer attached to basal lamina.

# 173. Epidermal differentiation trajectory

Cells move outward, stop dividing, differentiate, lose organelles/nucleus, flatten, accumulate keratin, and are eventually shed.

# 174. Hematopoiesis

Generation of all major blood-cell types from hematopoietic stem cells.

# 175. Hematopoietic stem cell

Shared stem-cell source for erythroid, myeloid, and lymphoid lineages in the source diagram.

# 176. Red blood cells lack nuclei

The source notes mature erythrocytes lack nucleus and DNA.

# 177. Monocyte lineage

Monocytes can differentiate into macrophages and osteoclasts in the source lineage diagram.

# 178. Megakaryocyte

Large precursor producing platelets by shedding cellular fragments.

# 179. Stem-cell niche

`SOURCE_DERIVED`: spatial microenvironment whose cells and extracellular signals maintain stem-cell behavior.

# 180. Stem-cell systems require feedback control

Cell production must match cell loss in the right places and numbers.

# 181. Wnt proteins

Extracellular signaling proteins that promote proliferation of intestinal crypt stem and precursor cells in the source example.

# 182. Wnt signal is spatially restricted

Crypt cells also generate longer-range signals that suppress Wnt-pathway activation outside the crypt.

# 183. Differentiation requires additional signals

Other signals bias precursor cells toward secretory or absorptive fates.

# 184. Disrupted Wnt control alters tissue architecture

The source connects inappropriate Wnt activation to colorectal tumor initiation.

# 185. Hematopoietic stem-cell transplantation

A small number of transplanted blood stem cells can reconstitute blood-cell production after irradiation/ablation in the source experimental/clinical framing.

# 186. Bone-marrow transplantation

Used in leukemia treatment after irradiation or cytotoxic therapy in the source account.

# 187. Embryonic stem cell

Pluripotent cultured cell derived from early embryo and capable of indefinite proliferation under appropriate culture conditions.

# 188. Pluripotency

Ability to generate essentially all body cell types, including germ-line contribution in the mouse ES-cell assay described by the source.

# 189. ES cells can be directed by extracellular signals

Correct signal combinations, sequence, and timing can induce specific differentiation trajectories in culture.

# 190. Human ES-cell transplantation faces immune rejection

Genetic mismatch between donor-derived cells and recipient can trigger immune destruction.

# 191. Human ES-cell use raises ethical issues

The chapter notes ethical concerns around deriving human ES cells from embryos.

# 192. Induced pluripotent stem cell

ES-like pluripotent cell generated by reprogramming a differentiated adult cell.

# 193. Source iPS transcription factors

The chapter specifies:
```text
Oct4
Sox2
Klf4
```
as a three-factor reprogramming set in the version described.

# 194. Reprogramming changes stable cell identity

Forced transcription-regulator expression can reset fibroblast gene-expression state to a pluripotent-like state.

# 195. Patient-specific iPS cells

Can preserve a patient's disease-causing genotype, allowing disease-relevant differentiated cells to be generated in culture.

# 196. Timothy syndrome source example

The source describes a Ca2+-channel mutation studied using patient-derived iPS cells differentiated into neurons and cardiomyocytes.

# 197. Gene-corrected iPS source concept

The chapter depicts correcting a disease mutation in patient-derived iPS cells and producing healthy differentiated cells as a potential future therapeutic route.

# 198. Organoid

Self-organized three-dimensional multicellular structure generated in culture that resembles aspects of a developing organ.

# 199. Organoid self-organization

Pluripotent cells can proliferate, differentiate, and spatially arrange without an external architect when given appropriate culture conditions.

# 200. Optic-cup source example

Human ES cells can form eye-like organoids containing multilayered retinal architecture.

# 201. Brain-organoid source example

The source discusses brain organoids generated from human iPS cells.

# 202. Microcephaly organoid source example

A patient-derived organoid model suggested premature cessation of precursor proliferation/differentiation as a mechanism for reduced brain growth in one case.

# 203. Cancer

A disease in which mutant cell lineages violate normal tissue-level constraints on survival, proliferation, position, and behavior.

# 204. Cancer mortality source statement

`SOURCE_ERA_STATEMENT`: the chapter states at least:
```text
1 in 5
```
people in Europe/North America will die of cancer.

# 205. Cancer's two defining heritable cell behaviors

The source emphasizes:
```text
1. excessive proliferation despite normal constraints
2. invasion/colonization of inappropriate tissue territory
```

# 206. Tumor

Abnormal mass produced by excessive cell proliferation.

# 207. Benign tumor

Abnormal proliferative mass that remains localized and noninvasive.

# 208. Malignant tumor

Tumor whose cells invade neighboring tissue.

# 209. Metastasis

Secondary tumor formed after malignant cells leave the primary tumor, travel, colonize a distant site, survive, and proliferate.

# 210. Metastatic route source model

```text
primary epithelial tumor
→ basal-lamina breach
→ connective-tissue invasion
→ blood/lymph entry
→ transport
→ exit
→ survival at new site
→ secondary growth
```

# 211. Epidemiology

Population-level statistical study used to identify correlations between exposures and cancer incidence.

# 212. Cancer risk depends partly on environment

The source emphasizes strong environmental/lifestyle contributions to cancer incidence.

# 213. Migration studies

Risk often shifts toward the cancer pattern of the environment where people live rather than remaining fixed to birthplace.

# 214. HPV and cervical cancer

The source states most cervical cancers depend on infection with certain human papillomavirus subtypes.

# 215. HPV vaccination

Preventing infection can strongly reduce risk when vaccination occurs before exposure.

# 216. Most cancers are not infectious

The chapter explicitly distinguishes the HPV example from the majority of cancers.

# 217. Tobacco source statement

The source states stopping tobacco use could prevent roughly:
```text
~30% of cancer deaths
```
in its epidemiological framing.

# 218. Healthy living cannot reduce cancer risk to zero

Spontaneous mutation and intrinsic cellular processes remain sources of cancer risk.

# 219. Cancer is genetically driven but usually not inherited

Most cancer-critical mutations arise somatically in individual cell lineages rather than being inherited through the germ line.

# 220. Somatic mutation

Mutation arising in a non-germ-line cell and propagated to descendants of that cell.

# 221. Germ-line mutation

Mutation inherited through gametes and therefore present broadly across the organism derived from the zygote.

# 222. Carcinogen

Agent or condition that promotes cancer occurrence; many carcinogens are mutagens, but not all promote cancer by directly damaging DNA.

# 223. Spontaneous mutation source error rate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~1 error per 10^9–10^10 nucleotides copied
```
after replication/repair in the textbook framing.

# 224. Per-gene mutation rate source estimate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10^-6–10^-7 mutations per gene per cell division
```

# 225. Lifetime human cell divisions

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~10^16 cell divisions
```

# 226. Passenger mutation

Mutation present in cancer lineage but not contributing causally to cancer development.

# 227. Driver mutation

Mutation that actively increases cancer-cell success and contributes causally to tumor progression.

# 228. Minimum driver count source statement

`SOURCE_MODEL` / `SOURCE_ERA_STATEMENT`: the chapter states cancer generally requires:
```text
at least ~3 driver mutations
```
while later emphasizing real cancers are more complex.

# 229. Cancer incidence rises with age

Driver mutations accumulate sequentially over years, so probability of a successful malignant lineage rises strongly with age.

# 230. High-turnover tissues have more opportunities for cancer

Repeated stem/precursor divisions increase opportunities for mutation and clonal selection.

# 231. Genetic instability

Elevated tendency to acquire mutations, chromosome abnormalities, or segregation errors.

# 232. Sources of genetic instability

Table 20–1:
```text
defects in DNA replication
defects in DNA repair
defects in cell-cycle checkpoints
mistakes in mitosis
abnormal chromosome numbers
```

# 233. Aneuploidy can feed back on instability

Abnormal chromosome complements can themselves make later chromosome segregation less reliable.

# 234. Cancer karyotype source example

The chapter compares:
```text
normal human cell = 46 chromosomes
breast cancer example = 51 chromosomes
```
with multiple translocations and copy-number abnormalities.

# 235. Cancer evolves clonally

Random mutation plus differential survival/proliferation produces repeated rounds of selection within a tumor.

# 236. Tumor subclones

A tumor can contain multiple genetically distinct malignant clones descended from a common founder.

# 237. Reduced dependence on extracellular signals

Cancer cells often acquire constitutive pathway activation or otherwise become less dependent on normal mitogens, growth factors, or survival signals.

# 238. Ras source example

Activating Ras can produce an intracellular proliferation signal without the extracellular stimulus normally required.

# 239. Apoptosis resistance

Cancer cells frequently tolerate internal damage/stress that would cause a normal cell to die.

# 240. p53 source statement

`SOURCE_ERA_STATEMENT`:
```text
~50% of human cancers have inactivating p53 mutation
```
in the source.

# 241. Replicative immortality

Many cancer cells bypass normal senescence mechanisms and continue dividing indefinitely.

# 242. Cell senescence

Permanent cessation of proliferation in many normal somatic cells after extensive division/stress.

# 243. Telomerase reactivation

Cancer cells commonly maintain telomeres by reactivating telomerase, bypassing telomere-shortening-associated proliferation limits.

# 244. Reduced adhesion contributes to invasion

Loss or alteration of adhesion molecules such as cadherins can facilitate abnormal cell movement.

# 245. High glucose consumption

The source describes many cancer cells as avid for glucose and able to produce substantial ATP through glycolysis.

# 246. Cancer cells survive in inappropriate locations

Metastatic cells evade location-dependent death mechanisms and can establish growth in foreign tissue environments.

# 247. Tumor microenvironment

Cancer cells modify surrounding stromal/connective-tissue cells through signals; those cells can reciprocally support tumor survival and proliferation.

# 248. Angiogenic support

Successful growing tumors need to attract or otherwise obtain blood supply sufficient for continued growth.

# 249. Proto-oncogene

Normal gene whose gain-of-function mutation can create a cancer-promoting oncogene.

# 250. Oncogene

Mutant or abnormally expressed form of a proto-oncogene that drives cancer-promoting activity.

# 251. Oncogene mutations are often dominant at cellular level

A gain-of-function in one copy can be sufficient to alter behavior.

# 252. Oncogene activation mechanisms

Figure 20–48 includes:
- coding mutation creating hyperactive protein
- gene amplification causing overproduction
- chromosome rearrangement altering regulation
- fusion producing hyperactive protein

# 253. Tumor suppressor gene

Normal gene whose loss promotes cancer.

# 254. Tumor-suppressor mutations are often recessive at cellular level

Both functional copies generally must be lost/inactivated for complete loss of tumor-suppressor activity in the source model.

# 255. Tumor suppressors can be silenced epigenetically

Loss of function can occur through altered gene regulation without DNA-sequence mutation.

# 256. Cancer-critical genes act in diverse cellular systems

Source categories include:
- signaling
- cell cycle
- apoptosis
- DNA repair
- DNA-damage response
- chromatin regulation
- adhesion

# 257. Pathway-level convergence

Different cancers can mutate different genes yet converge on disruption of the same core pathways.

# 258. Three pathway classes emphasized

The source highlights pathways controlling:
```text
cell proliferation
cell-cycle machinery
cell survival / stress response
```

# 259. Ras — proto-oncogene

Activating mutations keep Ras signaling active and promote proliferation.

# 260. β-catenin — proto-oncogene

Activating mutations can make β-catenin resistant to degradation and drive proliferative gene expression.

# 261. p53 — tumor suppressor

Loss allows damaged cells to survive/divide instead of arresting or undergoing apoptosis.

# 262. APC — tumor suppressor

Loss causes excessive intestinal crypt proliferation through Wnt/β-catenin pathway activation.

# 263. Brca1/Brca2 — tumor suppressors

Loss compromises accurate repair of DNA double-strand breaks and increases genomic instability.

# 264. APC gene is distinct from APC/C

Hard terminology rule:
```text
APC = adenomatous polyposis coli tumor suppressor
APC/C = anaphase-promoting complex/cyclosome
```

# 265. Inherited APC predisposition

Individuals inheriting one inactive APC allele require only one additional somatic hit in the remaining copy for complete local loss.

# 266. Familial APC phenotype

The source describes predisposed individuals developing hundreds or thousands of colorectal polyps at relatively young ages.

# 267. Sporadic colorectal APC source statistic

`SOURCE_ERA_STATEMENT`:
```text
>60% of colorectal tumors
```
in the source show loss/inactivation of both APC copies.

# 268. APC inhibits Wnt pathway output

APC participates in a complex that promotes β-catenin degradation when Wnt signaling is absent.

# 269. β-catenin

Protein with dual roles in:
- adherens-junction linkage
- Wnt-responsive gene regulation

# 270. TCF / LEF transcription regulators

Free β-catenin enters the nucleus and associates with TCF-family transcription regulators to activate Wnt-responsive genes.

# 271. Wnt pathway without Wnt

```text
APC complex active
→ β-catenin degradation
→ TCF inactive
→ Wnt-responsive genes off
```

# 272. Wnt pathway with Wnt

```text
Wnt receptor active
→ APC-containing degradation machinery inhibited
→ β-catenin stabilized
→ nuclear β-catenin + TCF
→ Wnt-responsive genes on
→ crypt stem/precursor proliferation
```

# 273. APC loss mimics Wnt stimulation

Without APC, β-catenin accumulates even without extracellular Wnt, causing inappropriate transcription and proliferation.

# 274. TCF4 knockout source experiment

The source says mice lacking TCF4 fail to develop normal intestinal crypts and die soon after birth, supporting a requirement for TCF4 in proliferating gut stem-cell maintenance.

# 275. APC loss creates polyps through niche misregulation

The crypt-cell population expands faster than differentiated progeny can be shed, enlarging crypts and forming polyps.

# 276. β-catenin alternative driver

`SOURCE_ERA_STATEMENT`: among colorectal tumors retaining functional APC, the source states about a quarter have activating β-catenin mutations.

# 277. Polyp does not equal invasive cancer

Additional driver mutations are required for progression from benign proliferative lesion to malignancy.

# 278. Colorectal progression source timescale

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~10–20 years or more
```
for the illustrative sequence in Figure 20–52.

# 279. Cancer treatment is difficult because tumors evolve

Mutation and selection can generate resistant subclones during therapy.

# 280. Intratumor heterogeneity

Cells within one tumor may carry different genetic lesions; one drug may not kill every clone.

# 281. Detection occurs late relative to clonal history

The source states tumors often are not detected until roughly:
```text
~1 cm diameter
```
and hundreds of millions of cells.

# 282. Tumor doubling source example

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~100 days
```
for a typical breast-tumor cell-population doubling in Figure 20–53.

# 283. Radiation/chemotherapy vulnerability source logic

Checkpoint-defective cancer cells may continue dividing with damaged DNA and die from catastrophic chromosome damage, whereas normal cells can pause and repair.

# 284. Synthetic-lethality-like BRCA source logic

BRCA-defective tumor cells depend on alternative repair pathways; inhibiting one of those alternatives can selectively push cancer cells beyond tolerable genome damage while sparing normal cells with intact BRCA-dependent repair.

# 285. Cancer immunotherapy

Antibodies can mark tumor-specific surface antigens or release inhibitory brakes on killer lymphocytes.

# 286. Immune checkpoint inhibitor source example

The chapter describes ipilimumab treatment of metastatic melanoma, with marked tumor regression in the illustrated case.

# 287. Imatinib / Gleevec

Small-molecule inhibitor targeting a hyperactive tyrosine kinase that drives chronic myeloid leukemia.

# 288. Targeted-treatment principle

A molecular abnormality that causes cancer can also create a selective vulnerability if a drug can specifically inhibit the aberrant activity.

# 289. How We Know — APC discovery logic

Inherited colorectal-cancer predisposition families helped identify APC, but finding the gene did not itself reveal its normal molecular function.

# 290. Co-immunoprecipitation

Antibody capture of APC co-isolated a tightly associated partner, β-catenin.

# 291. Initial APC–β-catenin interpretation was misleading

Because β-catenin was known as an adherens-junction protein, researchers initially suspected APC might primarily regulate adhesion.

# 292. Cross-species genetics redirected interpretation

Similarity between vertebrate β-catenin and Drosophila Armadillo linked the protein to the Wnt/Wingless developmental signaling pathway.

# 293. β-catenin binds TCF

Further interaction studies connected β-catenin to TCF transcription regulators.

# 294. Mechanistic synthesis

```text
Wnt
→ β-catenin stabilization
→ nuclear β-catenin–TCF
→ Wnt-responsive transcription

APC
→ promotes β-catenin destruction when Wnt absent
```

# 295. Knockout validates pathway function in tissue

TCF4 knockout demonstrated the requirement of Wnt-pathway transcriptional output for maintenance of intestinal crypt proliferation.

# 296. Cancer biology emerged from converging evidence

Family genetics, protein interaction biochemistry, fly developmental genetics, mammalian cell signaling, and mouse knockout biology converged on the APC–β-catenin–TCF mechanism.

# 297. Tissue WorldState schema

```yaml
tissue:
  cell_population:
  cell_types:
  extracellular_matrix:
  junction_graph:
  vascular_state:
  innervation_state:
  turnover_state:
  spatial_domains:
```

# 298. Extracellular-matrix schema

```yaml
extracellular_matrix:
  collagen_fibrils:
  elastin:
  fibronectin:
  laminin:
  GAGs:
  proteoglycans:
  hydration:
  tension_field:
  compression_field:
  bound_signals:
```

# 299. Plant-wall schema

```yaml
plant_cell_wall:
  primary_wall:
  secondary_wall:
  cellulose_orientation:
  cellulose_synthase_trajectories:
  cortical_microtubules:
  pectin:
  lignin:
  turgor_pressure:
```

# 300. Cell–matrix adhesion schema

```yaml
cell_matrix_adhesion:
  integrin_type:
  extracellular_ligand:
  intracellular_adapter:
  cytoskeletal_target:
  activation_state:
  force:
  signaling_state:
```

# 301. Epithelial polarity schema

```yaml
epithelial_cell:
  apical_domain:
  basolateral_domain:
  basal_lamina_attachment:
  tight_junctions:
  adherens_junctions:
  desmosomes:
  gap_junctions:
```

# 302. Junction schema

```yaml
junction:
  type:
    - tight
    - adherens
    - desmosome
    - hemidesmosome
    - gap
    - plasmodesma
  cell_A:
  cell_B_or_matrix:
  transmembrane_components:
  cytoskeletal_linkage:
  permeability:
  force_state:
```

# 303. Stem-cell lineage schema

```yaml
lineage:
  stem_cells:
  precursors:
  differentiated_states:
  niche_signals:
  self_renewal_probability:
  differentiation_probability:
  turnover_rate:
  migration_path:
```

# 304. Intestinal-crypt schema

```yaml
crypt:
  stem_cell_zone:
  Paneth_cells:
  Wnt_field:
  Wnt_inhibitory_field:
  precursor_population:
  villus_migration:
  shedding_rate:
```

# 305. Cancer-clone schema

```yaml
cancer_clone:
  founder_cell:
  driver_mutations:
  passenger_mutations:
  subclones:
  proliferation_rate:
  apoptosis_resistance:
  genome_instability:
  adhesion_state:
  invasion_state:
  metastatic_sites:
  microenvironment_interactions:
```

# 306. Cancer-gene schema

```yaml
cancer_gene:
  gene:
  normal_class: proto_oncogene | tumor_suppressor
  mutation_class:
  zygosity:
  pathway:
  functional_effect:
  selective_advantage:
```

# 307. Tumor-evolution schema

```yaml
tumor_evolution:
  generation:
  clones:
  mutation_events:
  selection_coefficients:
  spatial_expansion:
  therapy_pressure:
  resistant_subclones:
```

# 308. Project rule — extracellular matrix is WorldState

ECM is not decorative background. Its fibers, hydration, orientation, stiffness, bound signals, and degradation state can causally alter cell behavior.

# 309. Project rule — tissue mechanics must transmit through explicit links

Force should propagate through:
```text
cytoskeleton ↔ junction ↔ cell/ECM
```
rather than through invisible rigid parenting of meshes.

# 310. Project rule — collagen fibers have hierarchy

Do not render 'collagen' as one generic cable. Preserve:
```text
polypeptide → triple helix → fibril → fiber
```
when scale permits.

# 311. Project rule — proteoglycan compression is hydration-based

They resist compression because fixed negative charge recruits ions/water and creates swelling pressure, not because the molecules are rigid rods.

# 312. Project rule — epithelial apical/basal identity is biological

Camera orientation must not redefine which side is apical.

# 313. Project rule — tight junction is both paracellular seal and polarity fence

It should alter solute permeability and membrane-domain diffusion.

# 314. Project rule — adherens and desmosome are not interchangeable

```text
adherens → cadherin → actin
desmosome → cadherin → keratin
```

# 315. Project rule — hemidesmosome is cell–matrix

Do not connect two cells with a hemidesmosome.

# 316. Project rule — gap junction is not mechanical adhesion

Its main modeled function is intercytosolic small-molecule/ion communication.

# 317. Project rule — plasmodesmata preserve membrane topology

Plasma membrane and ER continuity across adjacent plant cells matter physically.

# 318. Project rule — tissue renewal is a flow of cell identities

The simulation should track birth, migration, differentiation, loss, and replacement rather than repeatedly respawning anonymous cells.

# 319. Project rule — stem cell is not synonymous with pluripotent

Most adult tissue stem cells are lineage restricted.

# 320. Project rule — stem-cell identity depends on niche

Spatial signals and cell interactions help maintain self-renewal state.

# 321. Project rule — organoid is self-organized tissue, not miniature rendered organ

The scientific point is emergent multicellular organization under defined developmental signals.

# 322. Project rule — benign tumor is not cancer in source terminology

A localized noninvasive tumor differs from malignant cancer.

# 323. Project rule — metastasis is a multi-step state machine

A cell must invade, enter circulation, survive transit, exit, adapt, and grow. Do not teleport tumor cells from one organ to another.

# 324. Project rule — cancer evolution requires clone identity

Driver mutations should occur in specific persistent cell lineages and create selectable subclones.

# 325. Project rule — driver and passenger mutations are different

Do not treat every cancer-cell mutation as causally important.

# 326. Project rule — oncogene and tumor suppressor logic differ

```text
oncogene:
gain/activation of one copy can be sufficient

tumor suppressor:
loss usually requires inactivation of remaining functional copies
```

# 327. Project rule — APC and APC/C must never be conflated

These are unrelated biological entities despite similar abbreviations.

# 328. Project rule — association and mechanism remain distinct

Mutation catalogs must link to pathway evidence before visualizing causal biological consequences.

# 329. Question 20–1 — horizontal cortical microtubules

Official answer: horizontal cortical microtubules guide horizontal cellulose microfibrils. Because growth occurs preferentially perpendicular to the microfibrils, the stem elongates vertically.

# 330. Question 20–2 — dominant collagen defects

Official answer: because three collagen polypeptides assemble into one triple helix, a defective chain can poison assembly even when normal chains are present. Thus certain collagen mutations can behave dominantly.

# 331. Question 20–3 — reducing proteoglycan negative charge

Official answer: fewer negative charges attract fewer counterions and therefore less water. Proteoglycans would swell less, occupy less volume, and resist compression less effectively.

# 332. Question 20–4 — focal contacts versus hemidesmosomes

Official answer: fibroblasts crawl and exert traction on matrix, favoring dynamic actin-linked focal contacts. Mature epithelial cells are relatively stationary and require durable anchorage, favoring intermediate-filament-linked hemidesmosomes.

# 333. Question 20–5 — Ca2+-induced gap-junction closure

Official answer: membrane damage can cause extracellular Na+ and Ca2+ to enter an injured cell. Elevated Ca2+ rapidly closes gap junctions, isolating the damaged cell and preventing harmful ionic/metabolic disturbance from spreading to neighbors.

# 334. Question 20–6 — why ionizing radiation stops division

Official answer: ionizing radiation creates DNA breaks/damage, activating cell-cycle checkpoints that arrest proliferation for repair. If damage is irreparable, apoptosis commonly follows.

# 335. Question 20–7 — gut turnover versus neurons

Official answer: gut cells face a harsh mutagenic/damaging environment and are regularly discarded, which helps eliminate damaged or abnormal cells. Neurons are protected but depend on intricate long-lived connectivity that is difficult to reconstruct after loss.

# 336. Question 20–8 — 10^16 divisions versus 10^13 cells

Official answer: cell production over a lifetime greatly exceeds final body cell number because cells are continually lost. The source calculates roughly:
```text
~1000 discarded cells for every cell retained
```
from the two order-of-magnitude values.

# 337. Question 20–9A

`FALSE`: gap junctions form communication channels; they are not cytoskeletal mechanical linkages.

# 338. Question 20–9B

`TRUE`: a wilted leaf resembles a deflated tire because loss of turgor removes internal pressure that normally tensions the wall.

# 339. Question 20–9C

`FALSE`: proteoglycans resist compression without being rigid; their water-binding/swelling properties are central.

# 340. Question 20–9D

`TRUE`: basal lamina is specialized ECM supporting epithelial sheets.

# 341. Question 20–9E

`TRUE`: durable tattoo pigment must be deposited beneath the rapidly renewed epidermis.

# 342. Question 20–9F

`TRUE`: tissue stem cells are undifferentiated but developmentally specialized/restricted.

# 343. Question 20–10 — molecules through gap junctions and plasmodesmata

Official answer:
```text
gap junction + plasmodesmata:
glutamic acid
cAMP
Ca2+

plasmodesmata only:
some mRNA
some proteins
plasma-membrane phospholipids
```
The last category is possible because membrane continuity exists through plasmodesmata but not gap junctions.

# 344. Question 20–11 — would intermediate filaments replace plant walls?

Official answer: no. Sparse cytoskeletal attachment points cannot provide the broad surface support needed against large osmotic pressure. The cell wall mechanically contains turgor across the whole cell surface.

# 345. Question 20–12 — why neurons prefer chemical synapses

Official answer: gap junctions can propagate electrical excitation and are used in heart muscle, but chemical synapses provide much richer modulation, integration, and computational control.

# 346. Question 20–13 — why gelatin lacks collagen tensile strength

Official answer: boiling denatures organized collagen. Cooling creates a tangled gel, but tensile strength requires aligned, bundled, cross-linked fibers.

# 347. Question 20–14 — genome as blueprint

Official answer: mutations show that DNA changes can alter organismal structure, supporting genomic specification. But DNA alone is insufficient to execute development: proper maternal cellular environment, molecular machinery, nutrition, spatial asymmetry, and other developmental conditions are required. A human genome placed into a stork egg would therefore not simply yield a human baby.

# 348. Question 20–15 — earlier leukemia onset

Official answer: white blood cells are naturally motile/invasive and already circulate throughout the body. A leukemic lineage therefore needs fewer additional changes to acquire widespread distribution than many solid-tumor cells need for invasion/metastasis.

# 349. Question 20–16 — steep age dependence of cancer

Official answer: multiple driver mutations must accumulate sequentially in the same lineage. The source notes the plotted incidence rises approximately as the fifth power of age, implying substantially more than two rate-limiting driver events in the simplified interpretation.

# 350. Question 20–17 — delayed cancer after carcinogen exposure

Official answer: exposure creates mutations but usually not enough drivers to produce cancer immediately. Predisposed lineages later accumulate additional mutations until one becomes malignant, explaining decade-scale latency.

# 351. Question 20–18 — sex hormones and mutagenicity

Official answer: no. Estrogens/androgens can be carcinogenic without being directly mutagenic because they stimulate proliferation and survival in hormone-sensitive tissues, increasing the number of divisions and cells at risk for spontaneous mutations.

# 352. Question 20–19 — is cancer hereditary?

Official answer: cancer in general is not inherited; most cancers arise from somatic mutations. Some germ-line mutations strongly increase inherited risk, such as inherited loss of one APC tumor-suppressor copy, while weaker inherited predispositions also exist.

# 353. Question 20–20 — reduced cancer incidence in very old age

Official answer: aging stem cells divide less or become senescent. Reduced proliferation harms tissue renewal but also reduces opportunities for replication-associated cancer-driving mutations.

# 354. Question 20–21 — drug targets: oncogene or tumor suppressor?

Official answer: oncogene products are the straightforward small-molecule targets because the cancer cell contains an abnormal active product that can be inhibited. A tumor suppressor contributes to cancer by absence/loss of its product, leaving no hyperactive mutant protein to block with a conventional inhibitor.

# 355. Source quantitative register

| Quantity | Chapter 20 source value/context |
|---|---:|
| primary plant wall thickness | ~200 nm |
| cellulose chains / microfibril | 18 |
| cellulose synthase complex | 6 trimers |
| mammalian collagen genes | >40 |
| collagen fraction mammalian protein | ~25% |
| type I fraction of collagen | ~90% |
| collagen molecule diameter | ~1.5 nm |
| collagen fibril diameter | ~10–300 nm |
| collagen fiber diameter | ~0.5–3 μm |
| hyaluronan repeats | up to ~25,000 disaccharides |
| aggrecan GAG chains | >100 |
| aggrecan–hyaluronan aggregate mass | ≥10^8 Da |
| aggregate occupied volume | ~2×10^-12 cm³ |
| gap-junction gap | ~2–4 nm |
| gap-junction channel diameter | ~1.5 nm |
| connexon subunits | 6 |
| gap-junction permeability cutoff | ~1000 Da |
| typical human total cells | ~3×10^13 source-era |
| gut turnover/transit | ~3–6 d |
| bone turnover | ~10 y |
| RBC lifetime | ~120 d |
| epidermal turnover | ~2 mo |
| lifetime cell divisions | ~10^16 |
| replication residual error | ~1 / 10^9–10^10 nt |
| mutation / gene / division | ~10^-6–10^-7 |
| minimum driver statement | ≥3 |
| normal karyotype | 46 chromosomes |
| source breast-cancer karyotype | 51 chromosomes |
| tobacco-attributable cancer death source claim | ~30% |
| p53-mutant cancer source claim | ~50% |
| sporadic colorectal APC loss source claim | >60% |
| APC-retaining colorectal tumors with β-catenin activation | ~25% of that minority |
| colorectal progression illustration | ~10–20 y+ |
| typical detection size | ~1 cm |
| breast-tumor doubling source example | ~100 d |
| Q20–8 discarded : retained cells | ~1000 : 1 |

# 356. Quantitative verification queue

Before promotion into runtime truth, externally verify:
- current human cell-count estimates
- collagen-gene counts and tissue distributions
- current cellulose-synthase stoichiometry
- GAG/proteoglycan aggregate dimensions
- gap-junction permeability by connexin subtype
- tissue-turnover rates by age/site
- modern stem-cell lineage timing
- cancer-driver counts by tumor type
- modern p53/APC/β-catenin frequencies
- tumor growth/detection distributions
- current cancer-attributable risk statistics

# 357. Do-not-overinterpret register

Do not infer:

```text
tissue = cells only
FALSE

extracellular matrix = inert filler
FALSE

plant wall = rigid dead box in every context
FALSE

turgor pressure = wall-generated pressure
FALSE; osmotic swelling generates pressure resisted by wall

cellulose is secreted in preassembled vesicles
FALSE in source model

collagen = one molecule
FALSE; molecule, fibril, fiber are distinct scales

procollagen assembles into fibrils inside ER/Golgi
FALSE

proteoglycan compression resistance comes from rigidity
FALSE

integrin = purely mechanical hook
FALSE; it also signals

fibronectin = integrin
FALSE

basal lamina = generic connective tissue
FALSE

tight junction = desmosome
FALSE

adherens junction = desmosome
FALSE

cadherin links cells to basal lamina
FALSE; hemidesmosome uses integrin

gap junction connects actin networks
FALSE

plasmodesma = connexon channel
FALSE

all molecules passing plasmodesmata pass gap junctions
FALSE

stem cell = any dividing cell
FALSE

stem cell = pluripotent by definition
FALSE

precursor cell = stem cell
FALSE

terminally differentiated = dead
FALSE

ES cell = iPS cell
FALSE in origin, despite similar properties

organoid = complete normal organ
FALSE

tumor = malignant cancer
FALSE

benign tumor = metastatic
FALSE

cancer = merely fast cell division
FALSE

cancer is generally inherited
FALSE

every tumor mutation is a driver
FALSE

driver mutation alone instantly causes cancer
FALSE

cancer evolution is linear and identical in every patient
FALSE

oncogene = normal growth gene
FALSE; normal counterpart is proto-oncogene

tumor suppressor mutation always acts dominantly
FALSE in source cellular model

APC = APC/C
FALSE

p53 mutation is present in every cancer
FALSE

telomerase reactivation is the sole route to cancer
FALSE

GWAS/association alone proves mechanism
FALSE

hormonal carcinogenesis implies direct DNA mutagenicity
FALSE

metastasis = tumor cells entering blood only
FALSE; successful colonization requires multiple steps
```

# 358. Cross-chapter dependencies

```text
Chapter 5:
chromatin, chromosomes, genome organization

Chapter 6:
DNA repair, mutation, telomeres, BRCA-linked mechanisms

Chapter 8:
cell memory, epigenetics, transcription regulation

Chapter 10:
gene editing, sequencing, cancer-genome analysis

Chapter 11:
membrane organization and polarity

Chapter 12:
electrical coupling / Ca2+ signaling

Chapter 15:
secretion, extracellular matrix production, Golgi vesicles

Chapter 16:
integrin signaling, Wnt logic, Ras, growth/survival pathways

Chapter 17:
actin, keratin, microtubules, migration, force

Chapter 18:
stem-cell proliferation, p53, apoptosis, cell cycle, senescence

Chapter 19:
somatic vs germ-line mutation, inheritance, selection
```

# 359. Chapter 20 core causal map

```text
PLANT TISSUE
cortical microtubules
→ cellulose-synthase trajectories
→ cellulose microfibril orientation
→ anisotropic wall mechanics
+ turgor
→ cell/tissue growth direction

ANIMAL CONNECTIVE TISSUE
fibroblast
→ procollagen secretion
→ extracellular cleavage
→ collagen fibril/fiber
→ tensile strength

GAG negative charge
→ cation attraction
→ water uptake
→ swelling pressure
+ collagen tension
→ compression resistance

CELL–MATRIX
collagen
→ fibronectin
→ integrin
→ adaptor
→ actin

EPITHELIUM
tight junction
→ barrier + polarity fence

cadherin
→ adherens junction
→ actin
→ epithelial tension / morphogenesis

cadherin
→ desmosome
→ keratin
→ tissue tensile strength

integrin
→ hemidesmosome
→ keratin
→ basal-lamina anchorage

connexon + connexon
→ gap junction
→ small molecule / ion coupling

STEM-CELL TISSUE
niche signal
→ stem-cell self-renewal
→ precursor amplification
→ terminal differentiation
→ tissue function
→ cell loss
→ replacement

INTESTINAL CRYPT
Wnt
→ β-catenin stabilization
→ TCF
→ stem/precursor proliferation

CANCER
somatic driver
→ clone advantage
→ expansion
→ more mutation opportunities
→ additional drivers
→ survival + proliferation + instability
→ invasion
→ metastasis

APC loss
→ β-catenin stabilization without Wnt
→ TCF hyperactivation
→ crypt overproliferation
→ polyp
→ additional drivers
→ invasive cancer
```

# 360. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 20: “Cell Communities: Tissues, Stem Cells, and Cancer.”**

Printed pages:
```text
717–762
```

PDF pages reviewed:
```text
752–797
```

Official answer section reviewed:
```text
PDF pages 851–853
```

Reviewed:
- all four major chapter sections
- plant cell walls and tissue mechanics
- animal extracellular matrix
- epithelial polarity and all major junction classes
- stem-cell systems, ES cells, iPS cells, organoids
- cancer initiation, evolution, invasion, and treatment
- Tables 20–1 and 20–2
- How We Know: *Making Sense of the Genes That Are Critical for Cancer*
- Essential Concepts
- Questions 20–1 through 20–21
- official textbook answers to Questions 20–1 through 20–21

# 361. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- tissue / organ / ECM definitions
- plant primary/secondary walls
- turgor
- cellulose / pectin / lignin
- cellulose synthesis and microtubule guidance
- connective-tissue architecture
- collagen hierarchy and all source scales
- procollagen extracellular processing
- fibroblast matrix remodeling
- fibronectin
- integrin bidirectional activation
- GAG / proteoglycan mechanics
- epithelial cell types and polarity
- basal lamina / collagen IV / laminin
- tight junctions / claudins / occludins
- adherens junction / cadherin / actin
- desmosome / cadherin / keratin
- hemidesmosome / integrin / keratin
- gap-junction / connexon / permeability values
- plasmodesmata / membrane topology / desmotubule
- tissue stability through communication, adhesion, memory
- all turnover source values
- stem / precursor / terminally differentiated distinctions
- intestine crypt/villus renewal
- epidermal renewal
- hematopoiesis
- Wnt-controlled stem-cell niche
- ES-cell pluripotency
- iPS Oct4/Sox2/Klf4 source model
- organoids
- benign/malignant/metastatic distinctions
- epidemiology / HPV / tobacco framing
- somatic mutation
- passenger / driver
- genetic instability
- all cancer capabilities
- proto-oncogene / oncogene / tumor suppressor
- Table 20–1
- Table 20–2
- APC vs APC/C guardrail
- Wnt/β-catenin/TCF colorectal mechanism
- How We Know APC investigation
- treatment principles
- all Questions 20–1 through 20–21
- all official answers
- all schemas
- all project constraints
- all DO_NOT_INFER rules
- quantitative register
- source trace

# END OF CHAPTER 20 CANON

Recommended repository destination:

```text
science/chapters/20_cell_communities_tissues_stem_cells_cancer.md
```

Recommended commit message:

```text
science: add Chapter 20 cell communities tissues stem cells cancer canon
```

This completes the chapter-by-chapter canon for all 20 chapters of *Essential Cell Biology*.

Do not begin runtime implementation merely because the chapter canon is complete.

The next phase should be a cross-chapter synthesis pass that builds:

```text
science/entities/
science/processes/
science/quantitative/
science/sources/
```

from Chapters 1–20, resolving duplicate entities, cross-chapter terminology, causal dependencies, scale transitions, and quantitative conflicts before implementation begins.
