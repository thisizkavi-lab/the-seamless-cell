---
title: "The Seamless Cell — Science Canon — Chapter 05"
subtitle: "DNA and Chromosomes"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 5, printed pages 179–208 (PDF approximately pages 214–243)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 05 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 5 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapter 4 established that proteins are chemically specific, conformationally active molecular machines.

Chapter 5 establishes the physical substrate those proteins read, copy, repair, compact, reorganize, and inherit:

```text
nucleotide
→ DNA strand
→ antiparallel double helix
→ gene + noncoding sequence
→ chromosome
→ chromatin
→ nucleosome
→ chromatin fiber/polymer
→ chromatin loop
→ chromosome territory
→ mitotic chromosome
```

The central project principle is:

> **DNA is simultaneously a chemical polymer, an information-bearing sequence, a mechanically constrained double helix, and a dynamically packaged chromosome polymer whose accessibility and three-dimensional organization change in space and time.**

The chapter therefore controls how The Seamless Cell eventually represents:

- DNA chemistry
- strand polarity
- base pairing
- double-helical geometry
- major/minor grooves
- genes
- genomes
- chromosomes
- homologous chromosomes
- karyotypes
- replication origins
- telomeres
- centromeres
- interphase chromosomes
- chromosome territories
- nucleoli
- chromatin
- nucleosomes
- histones
- histone tails
- linker DNA
- histone H1
- chromatin loops
- SMC complexes
- cohesin
- condensin I
- condensin II
- mitotic chromosome condensation
- ATP-dependent chromatin remodeling
- histone modifications
- heterochromatin
- euchromatin
- reader–writer propagation
- barrier sequences
- X-chromosome inactivation
- Barr bodies
- epigenetic chromatin inheritance
- experimental evidence that DNA is genetic material

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 5.

## `SOURCE_SCALE`

A number, dimension, count, range, rate, proportion, or physical scale supplied by the chapter.

## `SOURCE_MODEL`

A source-presented schematic, explanatory model, analogy, proposed mechanism, or historical interpretation.

## `SOURCE_TERMINOLOGY`

Terminology used by Chapter 5 and preserved in the source canon.

## `SOURCE_ERA_STATEMENT`

A statement whose numerical value, terminology, or scientific framing can become dated.

## `PROJECT_CONSTRAINT`

A representation/simulation rule derived from the source and existing project architecture.

## `PROJECT_CONTEXT`

A clearly marked project-level interpretation already established elsewhere in The Seamless Cell; not claimed to come directly from Chapter 5.

## `VERIFY_QUANT`

A number retained from the source but requiring external verification before use as a precise simulation parameter.

## `LATER_CHAPTER_REFINEMENT`

A concept introduced here whose detailed mechanism belongs to later chapters.

## `DO_NOT_INFER`

A guardrail preventing a textbook schematic or convenient implementation shortcut from being mistaken for literal biology.

---

# 1. Chapter structure

Chapter 5 contains three main conceptual blocks:

```text
1. THE STRUCTURE OF DNA

2. THE STRUCTURE OF EUKARYOTIC CHROMOSOMES

3. THE REGULATION OF CHROMOSOME STRUCTURE
```

The source's subsection sequence is:

```text
THE STRUCTURE OF DNA
- A DNA Molecule Consists of Two Complementary Chains of Nucleotides
- The Structure of DNA Provides a Mechanism for Heredity

THE STRUCTURE OF EUKARYOTIC CHROMOSOMES
- Eukaryotic DNA Is Packaged into Multiple Chromosomes
- Chromosomes Organize and Carry Genetic Information
- Specialized DNA Sequences Are Required for DNA Replication and Chromosome Segregation
- Interphase Chromosomes Are Not Randomly Distributed Within the Nucleus
- The DNA in Chromosomes Is Highly Condensed
- Nucleosomes Are the Basic Units of Eukaryotic Chromosome Structure
- Interphase Chromosomes Are Further Organized into Loops by Large Protein Rings
- Chromosomes Undergo an Additional Level of Packing at Mitosis

THE REGULATION OF CHROMOSOME STRUCTURE
- Changes in Nucleosomes Allow Access to DNA
- Interphase Chromosomes Contain Both Highly Condensed and More Extended Forms of Chromatin
- Heterochromatin Can Spread Along a Chromosome to Silence Nearby Genes
- X-Inactivation Represents an Extreme Form of Gene Silencing
- Heterochromatin Can Be Inherited by Subsequent Generations of Cells

HOW WE KNOW
- Genes Are Made of DNA

ESSENTIAL CONCEPTS

QUESTIONS 5–1 through 5–16
```

---

# 2. Genetic information must be stably stored and inherited

**Status: `SOURCE_FACT`**

Life depends on a system that can:

- store biological information
- retrieve that information
- copy it accurately
- transmit it to daughter cells
- transmit it between generations
- use it to direct cell behavior and organismal development

Genes are information-bearing elements of this system.

---

# 3. DNA is the carrier of cellular genetic information

The chapter frames one of the major discoveries of twentieth-century biology:

```text
genetic material
=
DNA
```

The recognition that DNA carries genetic information preceded understanding of the molecular copying and expression mechanisms.

---

# 4. DNA structure explains copying in principle

The 1953 double-helix model immediately suggested how genetic information could be duplicated:

```text
two complementary strands
→ separate
→ each strand can specify the other
```

Detailed DNA replication is deferred to Chapter 6.

---

# 5. DNA structure also provides the basis for information storage

The information is not stored in the generic sugar-phosphate backbone.

It is stored in:

```text
the linear order of A, T, G, and C
```

along the DNA.

---

# 6. Chromosomes were recognized before DNA chemistry was understood

Chromosomes were first visible as stainable, threadlike nuclear structures that become conspicuous during cell division.

The chapter emphasizes that:

```text
chromosome visibility in mitosis
!=
chromosome existence only in mitosis
```

The same chromosomes exist during interphase in a more extended state.

---

# 7. Chromosomes contain DNA and protein

Eukaryotic chromosomes contain:

- DNA
- histones
- non-histone chromosomal proteins
- proteins involved in replication
- proteins involved in repair
- proteins involved in gene expression
- other regulatory factors

### Hard project rule

A chromosome is not "naked DNA."

---

# 8. DNA is chemically simple relative to proteins

DNA is a polymer constructed from four closely related nucleotide types.

This historical simplicity initially made many scientists reluctant to accept DNA as the hereditary material.

---

# 9. DNA double helix — core entity definition

A DNA molecule consists of:

```text
two long polynucleotide strands
held together by base-pairing interactions
and wound around one another
```

---

# 10. DNA nucleotide composition

Each DNA nucleotide contains:

```text
nitrogenous base
+
deoxyribose
+
phosphate
```

### Hard terminology rule

The sugar in DNA is:

```text
2′-deoxyribose / deoxyribose
```

not ribose.

---

# 11. DNA bases

DNA uses four bases:

```text
adenine  A
cytosine C
guanine  G
thymine  T
```

The letters are commonly used as shorthand for the corresponding nucleotides in sequence notation.

---

# 12. Polynucleotide backbone

Nucleotides within one strand are covalently linked into an alternating:

```text
sugar–phosphate–sugar–phosphate
```

backbone.

Bases project from this backbone.

---

# 13. Phosphodiester bonds

Adjacent DNA nucleotides are connected by phosphodiester linkages involving:

```text
3′ position of one sugar
and
5′ position of the next nucleotide unit
```

---

# 14. DNA strand polarity

Because the backbone linkage is chemically directional, each DNA strand has two distinct ends:

```text
5′ end
3′ end
```

The two ends are not distinguished merely by which base happens to occur there.

---

# 15. 3′ end

The source describes the 3′ end as carrying an unlinked:

```text
3′ hydroxyl group
```

on the sugar.

---

# 16. 5′ end

The source depicts the 5′ end with a free:

```text
5′ phosphate
```

in its teaching representation.

### `DO_NOT_INFER`

Chemical end groups can depend on biochemical context and processing.

Preserve the chapter's structural teaching model here.

---

# 17. DNA sequence notation

A DNA sequence is conventionally written:

```text
5′ → 3′
```

unless explicitly labeled otherwise.

### Project constraint

Never display an unlabeled sequence while silently reversing its direction in a mechanistic visualization.

---

# 18. Bases occupy the interior of the double helix

The two sugar-phosphate backbones lie on the exterior.

The paired bases occupy the interior.

---

# 19. Complementary base pairing

The canonical pairings in the chapter are:

```text
A ↔ T
G ↔ C
```

---

# 20. Purines and pyrimidines

Each normal pair combines:

```text
one two-ring purine
+
one single-ring pyrimidine
```

This helps maintain a consistent width of the helix.

---

# 21. A–T hydrogen bonding

**Status: `SOURCE_FACT`**

The source shows:

```text
A–T
→ 2 hydrogen bonds
```

---

# 22. G–C hydrogen bonding

**Status: `SOURCE_FACT`**

The source shows:

```text
G–C
→ 3 hydrogen bonds
```

---

# 23. Complementary pair geometry matters

The chapter emphasizes that canonical bases fit together with correct:

- shape
- hydrogen-bond positioning
- spacing
- geometry

### Hard project rule

Base pairing is not just:

```text
matching letters snap together
```

The chemical geometry is part of the recognition.

---

# 24. DNA strands are antiparallel

Within a double helix:

```text
one strand runs 5′ → 3′
the partner runs 3′ → 5′
```

The opposite polarities are required for canonical base pairing in the helix.

---

# 25. Complementarity

If one DNA strand sequence is known, the sequence of the opposite strand is determined by:

```text
A ↔ T
G ↔ C
+
antiparallel orientation
```

---

# 26. Complementarity is central to heredity

Complementarity provides a molecular mechanism by which each strand can serve as a template for producing its partner.

Detailed copying mechanism belongs to Chapter 6.

---

# 27. DNA helix handedness

**Status: `SOURCE_FACT`**

The chapter depicts canonical cellular DNA as a:

```text
right-handed double helix
```

---

# 28. Base pairs per helical turn

**Status: `SOURCE_SCALE`**

The chapter uses approximately:

```text
10 base pairs per helical turn
```

in its teaching model.

### `PROJECT_CONTEXT`

For high-precision B-DNA rendering, externally verified modern structural parameters may refine the exact value.

Do not silently replace the source value inside this source canon.

---

# 29. Base-pair axial spacing

**Status: `SOURCE_SCALE`**

The source gives approximately:

```text
0.34 nm
```

between successive base-pair planes along the helix axis.

### Hard terminology rule

`0.34 nm` is:

```text
axial rise per base pair
```

not "the physical size of a base pair."

---

# 30. DNA diameter

**Status: `SOURCE_SCALE`**

The source gives the double helix a diameter of approximately:

```text
2 nm
```

---

# 31. Major groove

The wider groove produced by helical winding is the:

```text
major groove
```

---

# 32. Minor groove

The narrower groove is the:

```text
minor groove
```

---

# 33. Groove structure exposes chemical information

Atoms of the base pairs are accessible from major and minor grooves.

### Project implication

A DNA-binding protein need not separate the helix completely in order to recognize sequence-dependent chemical patterns.

### `LATER_CHAPTER_REFINEMENT`

Detailed sequence recognition by DNA-binding proteins belongs especially to Chapter 8.

---

# 34. Base pairs are stacked approximately perpendicular to the helix axis

The chapter's structural figures show base-pair planes arranged roughly perpendicular to the long axis of the helix.

### Project rule

Do not render bases as vertical "ladder rungs" after transitioning to actual helical geometry.

---

# 35. DNA is not literally a straight ladder

A flat ladder is only a pedagogical intermediate representation.

The physical DNA entity must ultimately become:

```text
twisted double helix
```

---

# 36. DNA stores information in sequence

A, C, G, and T constitute a four-symbol molecular alphabet.

Different sequences carry different biological messages.

---

# 37. Genes encode RNA products

A gene is a DNA segment containing instructions to produce a particular RNA molecule.

For many genes, that RNA then specifies a protein.

For other genes:

```text
RNA itself is the final functional product
```

---

# 38. Protein-coding information is indirect

Chapter 5 does not yet define the genetic code in detail.

It establishes:

```text
DNA sequence
→ RNA sequence
→ amino-acid sequence
```

for protein-coding genes.

### `LATER_CHAPTER_REFINEMENT`

The genetic code and transcription/translation mechanisms belong to Chapter 7.

---

# 39. Genetic code

The genetic code is the correspondence between:

```text
4-letter nucleotide alphabet
and
20-amino-acid alphabet
```

The DNA double-helix structure by itself does not reveal the code.

---

# 40. Human DNA amount versus nuclear size

**Status: `SOURCE_SCALE`**

The chapter states approximately:

```text
~2 meters of DNA per human cell
```

packed inside a nucleus only about:

```text
5–8 µm in diameter
```

### `VERIFY_QUANT`

Cell type and cell-cycle state matter.

---

# 41. Packaging is not optional

Eukaryotic DNA must be folded enough to:

- fit inside the nucleus
- avoid catastrophic entanglement
- be duplicated
- be repaired
- be transcribed
- be segregated
- remain selectively accessible

---

# 42. Eukaryotic chromosome definition

Each eukaryotic chromosome contains:

```text
one enormously long linear double-stranded DNA molecule
+
associated proteins
```

during an unreplicated chromosome state.

### `DO_NOT_INFER`

A duplicated mitotic chromosome contains two DNA molecules, one in each sister chromatid.

---

# 43. Chromatin

The complex of:

```text
DNA
+
histones
+
non-histone chromosomal proteins
```

is called:

```text
chromatin
```

---

# 44. Bacterial chromosome distinction

The chapter explicitly restricts its chromosome-packaging discussion to eukaryotes.

Bacterial chromosomes:

- are often a single circular DNA molecule
- are protein-associated
- use packaging systems different from eukaryotic chromatin

### Project rule

Do not reuse the eukaryotic nucleosome model for a generic bacterium.

---

# 45. Human chromosome types

The source states that human nuclear DNA is distributed among:

```text
23 or 24 different chromosome types
```

depending on sex-chromosome composition.

A typical diploid human cell contains:

```text
46 chromosomes
```

---

# 46. Homologous chromosomes

Human somatic cells generally contain two homologs of each autosome:

```text
one maternal
+
one paternal
```

They are related chromosome copies, not identical sister chromatids.

---

# 47. Sex chromosomes

The source uses the conventional simplified human scheme:

```text
female: XX
male: XY
```

and notes that X and Y in males are not homologous in the same sense as autosome pairs.

### `SOURCE_MODEL`

Preserve source framing.

---

# 48. Gametes and DNA-less specialized cells are exceptions to the diploid somatic pattern

The source explicitly notes exceptions including:

- sperm
- eggs
- mature red blood cells

---

# 49. Human haploid genome size

**Status: `SOURCE_SCALE`**

One full human chromosome set contains approximately:

```text
3.1 × 10^9 nucleotide pairs
```

---

# 50. Genome

The total genetic information carried by a complete chromosome set is the:

```text
genome
```

---

# 51. Chromosome painting

Chromosomes can be identified by hybridizing chromosome-specific single-stranded DNA probes labeled with combinations of fluorescent dyes.

The probe:

```text
base-pairs with complementary chromosome DNA
```

after the chromosomal DNA is made accessible/partially strand-separated.

---

# 52. Chromosome painting is sequence-specific labeling

### Project/experimental rule

Color in chromosome-painting images is:

```text
experimental label
```

not intrinsic chromosome color.

---

# 53. Karyotype

A:

```text
karyotype
```

is an ordered display of the chromosome set.

Karyotypes can reveal major chromosome-number and structural abnormalities.

---

# 54. Chromosome banding

Traditional chromosome stains generate reproducible banding patterns related in part to local base composition, including A–T-rich versus G–C-rich regions.

These bands help identify chromosomes.

---

# 55. Reciprocal chromosomal translocation

The source's example shows a reciprocal exchange of segments between two chromosomes.

Chromosome painting can make such rearrangements visible.

The chapter notes that translocations are common events in cancer cells.

---

# 56. Gene definition

Chapter 5 defines a gene as a DNA segment containing instructions to produce a:

```text
particular protein
or
functional RNA molecule
```

---

# 57. Gene count examples

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter gives approximate values:

```text
simplest bacteria: ~500 genes
humans: ~25,000 genes
```

Do not use these as universal or current absolute counts without context.

---

# 58. Compact genomes

Bacteria and some unicellular eukaryotes can have high gene density.

Their chromosomes may consist largely of closely packed genes.

---

# 59. Budding yeast genome example

**Status: `SOURCE_SCALE`**

For *Saccharomyces cerevisiae*, Figure 5–10 gives approximately:

```text
12.5 million nucleotide pairs
6600 genes
16 chromosomes
```

---

# 60. A gene can be encoded on either DNA strand

Within a chromosome region:

- some genes use one strand as the information/coding-oriented strand
- other genes use the opposite strand

### Hard project rule

Do not assign one chromosome strand globally as "the coding strand."

---

# 61. Human genes contain substantial noncoding DNA

The source emphasizes that many eukaryotic genes contain:

- coding segments
- large amounts of noncoding sequence

and that additional noncoding DNA lies between genes.

Detailed exon/intron processing belongs to Chapter 7.

---

# 62. "Junk DNA" is a historical/uncertain label

The chapter notes that DNA without demonstrated function has sometimes been called:

```text
"junk DNA"
```

but also emphasizes that some noncoding DNA has biological functions and that conservation can indicate functional importance.

### Hard project rule

Do not label all noncoding DNA as useless.

---

# 63. Genome size does not map simply to organismal complexity

The source gives examples showing that some plants and amoebae have substantially larger genomes than humans.

---

# 64. Chromosome number does not map simply to genome size

Species with similar genome sizes can have very different chromosome numbers.

---

# 65. Chromosome number does not map simply to complexity

The source contrasts:

```text
humans: 46 chromosomes
small deer species: 7
some carp species: >100
```

### Project rule

Do not use chromosome count as a "complexity meter."

---

# 66. Muntjac chromosome-fusion example

Closely related muntjac deer species have similar genome sizes but very different chromosome numbers due to chromosome fusion events.

This demonstrates that chromosome architecture can evolve without proportionate change in gene number.

---

# 67. A functional eukaryotic chromosome needs specialized sequence elements

A chromosome must do more than carry genes.

It must support:

- efficient replication
- complete replication of ends
- attachment/segregation during mitosis

---

# 68. Replication origins

A replication origin is a DNA site where DNA replication begins.

Eukaryotic chromosomes contain:

```text
many replication origins
```

to allow large chromosomes to be copied efficiently.

### `LATER_CHAPTER_REFINEMENT`

Detailed replication-origin activation belongs to Chapter 6 and cell-cycle control to Chapter 18.

---

# 69. Telomeres

Telomeres are repeated DNA sequences at chromosome ends.

Functions emphasized in Chapter 5:

- permit complete replication of chromosome ends
- protect chromosome tips
- prevent chromosome ends from being treated as broken DNA

---

# 70. Centromere

A centromere is a specialized chromosome region required for accurate segregation of duplicated chromosomes during M phase.

---

# 71. Minimal source chromosome-element topology

For the source's canonical linear eukaryotic chromosome:

```text
multiple replication origins
+
one centromere
+
two telomeres
```

---

# 72. Cell-cycle context

The chapter uses two broad cell-cycle states.

## Interphase

- chromosome DNA relatively extended
- gene expression occurs
- DNA replication occurs during part of interphase

## M phase / mitosis

- duplicated chromosomes condense
- gene expression largely ceases
- nuclear envelope breaks down
- spindle captures condensed chromosomes
- sister copies segregate

Detailed cell-cycle regulation belongs to Chapter 18.

---

# 73. Interphase chromosome

An interphase chromosome is not an X-shaped object.

It is a long chromosome polymer packaged within the nucleus.

### Hard project rule

Do not use an X-shaped chromosome as the default representation of a chromosome in a normal nondividing nucleus.

---

# 74. Mitotic chromosome

A mitotic chromosome is a highly compact state of chromosome organization used during segregation.

When duplicated, it contains:

```text
two sister chromatids
```

---

# 75. Chromatid

Each sister chromatid contains:

```text
one long replicated DNA molecule
+
associated proteins
```

After sisters separate, each is considered an individual chromosome.

---

# 76. X-shape interpretation

The familiar X shape represents:

```text
a duplicated, condensed chromosome
with two sister chromatids
joined near the centromere
```

It is not the shape of an ordinary interphase chromosome.

---

# 77. Chromosome territories

Interphase chromosomes are not randomly intermingled throughout the entire nucleus.

Each tends to occupy a distinct region called a:

```text
chromosome territory
```

---

# 78. Territories are dynamic, not sealed compartments

The chapter states that interphase chromosomes undergo structural and spatial changes.

### Hard project rule

A chromosome territory must not be rendered as:

- a membrane-bounded organelle
- a hard colored blob
- a perfectly non-overlapping volume

It is a preferential occupancy region.

---

# 79. Territories reduce extensive entanglement

The source frames territorial organization as helping prevent interphase chromosomes from becoming extensively entangled.

---

# 80. Homologs need not occupy the same place

Pairs of homologous chromosomes are generally not colocated in the same nuclear position.

### Project rule

Do not automatically stack maternal and paternal homologs together.

---

# 81. Nuclear-envelope and lamina attachments

Some chromosome regions attach to:

- nuclear envelope
- underlying nuclear lamina

These attachments help constrain interphase chromosome position.

Detailed lamina architecture belongs to later chapters.

---

# 82. Nucleolus

The nucleolus is a large, visible interphase nuclear subcompartment involved in ribosome production.

---

# 83. Nucleolus is assembled from multiple chromosome regions

In human cells, rRNA genes from several chromosomes come together spatially to form the nucleolus.

---

# 84. Human rRNA-gene cluster topology

The source states that several hundred copies of rRNA genes are distributed in:

```text
10 clusters
```

near the tips of:

```text
five chromosome pairs
```

---

# 85. Human chromosomes contributing rRNA gene regions in the figure

Figure 5–17 names:

```text
13
14
15
21
22
```

as chromosomes contributing rRNA-gene regions to nucleolar assembly.

---

# 86. Nucleolus contains DNA, RNA, and protein

It contains:

- rRNA genes
- newly synthesized rRNAs
- ribosome-assembly proteins
- many associated macromolecules

---

# 87. Nucleolus as a dynamic biochemical subcompartment

The chapter explicitly connects the nucleolus to the biomolecular-condensate concept introduced in Chapter 4.

### Project rule

Do not give the nucleolus a lipid membrane.

---

# 88. Heterochromatin in nuclear micrographs

The source describes dense-staining chromatin regions, particularly near the nuclear periphery, as heterochromatin.

### `DO_NOT_INFER`

Electron density/staining contrast is an experimental appearance, not intrinsic biological color.

---

# 89. DNA condensation is extreme

Chromosomal packaging compresses DNA enormously while preserving accessibility.

This is a multi-scale mechanical organization problem.

---

# 90. Human chromosome 22 source example

**Status: `SOURCE_SCALE`**

The source gives chromosome 22 approximately:

```text
48 million nucleotide pairs
```

with a fully extended DNA length around:

```text
1.5 cm
```

---

# 91. Mitotic chromosome 22 size example

The same chromosome in mitosis is described as about:

```text
~2 µm long
```

corresponding to nearly:

```text
~10,000-fold linear compaction
```

relative to fully extended DNA.

---

# 92. Interphase compaction relative to mitosis

The source states that interphase chromosome DNA is roughly:

```text
~10× less condensed
```

than mitotic chromosome DNA, while still being highly packed.

### `VERIFY_QUANT`

Treat this as broad textbook-scale comparison.

---

# 93. Chromosome packaging is dynamic

Packaging changes:

- through the cell cycle
- locally during gene expression
- during DNA repair
- during DNA replication
- during chromosome segregation

### Hard project rule

Chromatin compaction cannot be one fixed mesh.

---

# 94. Histones and non-histone proteins

Chromosomal DNA-binding proteins are traditionally separated into:

```text
histones
and
non-histone chromosomal proteins
```

---

# 95. Histone abundance

**Status: `SOURCE_SCALE`**

The source states that a human cell contains:

```text
>60 million histone molecules
```

of several types.

---

# 96. Histone mass versus DNA mass

The chapter states that total histone mass in chromosomes is approximately:

```text
equal to DNA mass
```

---

# 97. Non-histone chromosomal proteins are diverse

The source describes:

```text
hundreds of different types
```

of non-histone chromosomal proteins.

---

# 98. Nucleosome

The nucleosome is the fundamental repeating DNA–histone packaging unit of eukaryotic chromosomes.

---

# 99. Nucleosome core particle

A nucleosome core particle contains:

```text
histone octamer
+
147 bp double-stranded DNA
```

wrapped around the octamer.

---

# 100. Histone octamer stoichiometry

The histone core contains:

```text
2 × H2A
2 × H2B
2 × H3
2 × H4
```

Total:

```text
8 core histone molecules
```

---

# 101. Histone H1 is not a core-octamer histone

### Hard project rule

Core nucleosome:

```text
H2A/H2B/H3/H4
```

Histone H1:

```text
linker-associated histone
```

Do not put H1 inside the canonical core octamer.

---

# 102. Nucleosomal DNA length

**Status: `SOURCE_SCALE`**

Core particle DNA:

```text
147 base pairs
```

---

# 103. DNA wrap around histone octamer

**Status: `SOURCE_SCALE`**

The source describes approximately:

```text
1.7 turns
```

of DNA around the histone octamer.

---

# 104. Nucleosomal DNA handedness

The DNA wraps around the histone core in a:

```text
left-handed coil
```

in the source description.

### Project rule

Do not confuse:

```text
right-handed DNA double helix
```

with:

```text
left-handed superhelical wrapping of the double helix around the histone core
```

Both occur simultaneously at different geometric levels.

---

# 105. Nucleosome diameter

**Status: `SOURCE_SCALE`**

The chapter's figure/question uses approximately:

```text
11 nm
```

for nucleosome core-particle diameter.

---

# 106. Histone-octamer height source model

Question 5–2 asks students to approximate the octamer as a cylinder about:

```text
11 nm diameter
5 nm height
```

### `SOURCE_MODEL`

This is a geometry exercise approximation, not an exact physical boundary.

---

# 107. Linker DNA

DNA between adjacent nucleosome core particles is called:

```text
linker DNA
```

---

# 108. Linker length

**Status: `SOURCE_SCALE`**

The chapter states linker DNA can vary from:

```text
a few base pairs
to
~80 base pairs
```

---

# 109. Terminological distinction: core particle versus nucleosome

Strictly:

```text
nucleosome core particle
=
histone octamer + wrapped 147 bp DNA

nucleosome
=
core particle + an adjacent linker segment
```

The chapter notes that "nucleosome" is often used informally for the core particle itself.

---

# 110. Approximate DNA per nucleosome repeat in Figure 5–20

The source figure labels a nucleosome repeat as approximately:

```text
~200 nucleotide pairs
```

in its schematic example.

### `VERIFY_QUANT`

Repeat length varies among organisms, cell types, and chromatin contexts.

---

# 111. Nuclease experiment revealing nucleosomes

When partially unfolded chromatin is treated briefly with nuclease:

- exposed linker DNA is preferentially cut
- wrapped DNA is relatively protected
- core particles can be isolated

This experimental logic helped establish nucleosome structure.

---

# 112. Beads-on-a-string appearance

Partially unfolded chromatin can appear as:

```text
beads on a string
```

under electron microscopy.

Where:

```text
bead = nucleosome core particle
string = linker DNA
```

---

# 113. Beads-on-a-string is not the normal total in vivo architecture

The source explicitly states that chromatin in living cells rarely exists predominantly as the extended beads-on-a-string preparation seen after experimental unfolding.

### Hard project rule

Do not use evenly spaced isolated nucleosomes as the default whole-chromosome structure.

---

# 114. Nucleosomes shorten DNA

The source says nucleosome formation can reduce linear DNA extent to approximately:

```text
~1/3
```

of the original naked-DNA length in the described level of packing.

### `VERIFY_QUANT`

This is a broad packing statement.

---

# 115. Histone charge

Core histones are rich in positively charged residues, especially:

- lysine
- arginine

These positive charges favor binding to the negatively charged DNA backbone.

---

# 116. DNA-histone interaction is broadly sequence-independent

Many electrostatic contacts involve the backbone rather than requiring one unique base sequence.

This helps explain why a wide variety of DNA sequences can wrap around histones.

### `DO_NOT_INFER`

This does not mean all DNA sequences have identical nucleosome affinity or positioning behavior.

---

# 117. Histone N-terminal tails

Core histones have flexible/unstructured terminal regions that protrude from the nucleosome.

The source emphasizes N-terminal tails.

---

# 118. Histone tails are modification platforms

Histone tails can receive reversible covalent modifications.

These modifications regulate chromatin organization and recruitment of chromatin proteins.

---

# 119. Histone conservation

Core histones are among the most evolutionarily conserved eukaryotic proteins.

The source's example states that pea versus human H4 differs by only two amino acids.

Question 5–3 gives a pea-versus-cow H4 comparison of:

```text
2 differences among 102 amino acids
```

### `SOURCE_MODEL`

These examples emphasize strong evolutionary constraint.

---

# 120. Histone H1

Histone H1 binds linker DNA near the nucleosome and alters the path DNA takes as it exits the core.

This can help adjacent nucleosomes pack more compactly.

---

# 121. Histone H1 is context-dependent, not one universal occupancy state

### Project rule

Do not assume every nucleosome in every chromatin region is permanently H1-bound.

The source describes H1 as aiding additional compaction.

---

# 122. Chromatin beyond nucleosomes

Nucleosomal packaging is only one level of chromosome organization.

Further organization includes:

```text
nucleosome interactions
+
chromatin loops
+
chromosome-scale folding
```

---

# 123. Source's "chromatin fiber" language

The chapter repeatedly refers to compact chromatin fibers formed by nucleosome packing.

### `SOURCE_TERMINOLOGY`

Preserve this terminology in the source canon.

---

# 124. Figure 5–26 includes a 30-nm chromatin-fiber stage

**Status: `SOURCE_MODEL`**

The source schematic labels one intermediate:

```text
30 nm
```

between the 11-nm nucleosome scale and larger chromosome-scale organization.

### `PROJECT_CONTEXT`

The Seamless Cell has already established a stricter architecture rule:

> Do **not** treat a regular 30-nm solenoidal fiber as the universal default organization of chromatin in living cells.

Modern in-situ chromatin is heterogeneous and irregular.

Therefore:

```text
30-nm fiber
=
textbook/source schematic or special-context representation

NOT
mandatory universal in-vivo chromatin state
```

This distinction must remain explicit.

---

# 125. Source-scale DNA/nucleosome/mitotic hierarchy

Figure 5–26 labels approximate scales:

```text
DNA double helix:        2 nm
nucleosome:             11 nm
source chromatin fiber: 30 nm
single chromatid width: ~700 nm
duplicated chromosome: ~1400 nm
```

### `SOURCE_MODEL`

These are schematic levels, not a proof of one uniform hierarchical fiber architecture.

---

# 126. SMC proteins

SMC stands for:

```text
Structural Maintenance of Chromosomes
```

SMC proteins form the structural core of large ring-like chromosome-organizing complexes.

---

# 127. SMC ring complexes use ATP

SMC complexes harness:

```text
ATP binding/hydrolysis
```

to reorganize chromatin and generate loops.

---

# 128. Loop extrusion

The chapter describes SMC complexes moving relative to chromatin and enlarging a DNA/chromatin loop.

This process is:

```text
loop extrusion
```

conceptually, even when the source does not use that phrase as every heading.

---

# 129. Figure 5–23 "inchworm" mechanism is proposed

The source explicitly says the detailed mechanism is uncertain.

It presents an:

```text
"inchworm" model
```

as one proposed mechanism.

### Hard evidence rule

Do not elevate the exact inchworm geometry to `APPROVED` molecular truth.

Label it:

```text
SOURCE_MODEL
```

---

# 130. Source inchworm-model nucleotide cycle

The proposed model describes an SMC complex:

- encircling/attaching to DNA
- hydrolyzing two ATP molecules
- changing ring geometry
- widening its DNA grip
- releasing ADP
- returning toward its original configuration
- advancing relative to DNA
- increasing loop size

### `SOURCE_MODEL`

Detailed coupling geometry remains uncertain in the source.

---

# 131. SMC rings operate on chromatin, not necessarily naked DNA

Figure 5–23 draws naked DNA for simplicity but explicitly notes that actual DNA would be nucleosome-associated chromatin.

### Hard project rule

Do not strip nucleosomes from chromosome loops just because a teaching diagram does.

---

# 132. Cohesin

The SMC complex emphasized for interphase chromosome-loop organization is:

```text
cohesin
```

---

# 133. Cohesin forms many loops along interphase chromosomes

Multiple cohesin complexes can create an extended series of chromatin loops.

These loops help organize interphase chromosome structure.

---

# 134. Loop boundaries are regulated

The source describes sequence-specific clamp proteins that can:

- bind particular DNA sequences
- stall/stop traveling cohesins
- interact with one another
- draw loop-base DNA together

---

# 135. Clamp-protein identity is not named in Chapter 5 text

### `DO_NOT_INFER`

The source calls them:

```text
sequence-specific clamp proteins
```

Do not silently hard-code the protein name from outside knowledge in this source-derived file.

A later verified layer may map this source description to specific factors where appropriate.

---

# 136. Loop size depends on boundary/clamp positions

Spacing and position of sequence-specific clamps help determine:

- loop size
- loop contents
- which genes/regulatory elements share a loop

Detailed gene-regulatory consequences belong to Chapter 8.

---

# 137. Cohesin also contributes to sister-chromatid cohesion

Cohesin at centromeric regions helps hold sister chromatids together through much of mitosis.

Detailed release/segregation control belongs to Chapter 18.

---

# 138. Condensin

Mitotic chromosome condensation uses related SMC complexes called:

```text
condensins
```

---

# 139. Cohesin-to-condensin transition at mitosis

The chapter states that as cells prepare to divide:

```text
most interphase cohesins are replaced
by condensins
```

for the mitotic chromosome-compaction program.

---

# 140. Condensins use ATP hydrolysis

Condensins, like cohesins, are ATP-dependent SMC machines that generate and reorganize loops.

---

# 141. Mammalian condensin II

Figure 5–25 states:

```text
condensin II
forms the initial larger chromatin loops
```

---

# 142. Mammalian condensin I

Figure 5–25 states:

```text
condensin I
forms a second set of loops within those larger loops
```

---

# 143. Loops-within-loops architecture

The source model for a mammalian mitotic chromosome is:

```text
large loops
→ smaller loops within loops
→ increasingly tight winding around chromosome axis
→ compact mitotic chromatid
```

---

# 144. Chromosome axis

Figure 5–25 depicts condensin-organized loops around a central chromosome axis.

### `SOURCE_MODEL`

Do not render the axis as an independent rigid rod unless evidence for the chosen representation supports it.

---

# 145. Mitosis adds roughly another tenfold linear compaction

**Status: `SOURCE_SCALE`**

The source says the transition to mitotic condensation reduces chromosome length by roughly:

```text
~10× further
```

relative to interphase organization.

---

# 146. Condensation facilitates segregation

The highly compact mitotic state makes long chromosome polymers easier to segregate without extensive entanglement.

---

# 147. Chromatin must be selectively accessible

The chapter transitions from packing to access:

```text
DNA must be compact
AND
DNA must remain locally accessible
```

These are simultaneous constraints.

---

# 148. Local chromatin remodeling

Cells can change chromatin locally without globally decondensing the entire chromosome.

---

# 149. ATP-dependent chromatin-remodeling complexes

These are large protein machines that use ATP hydrolysis to alter nucleosome-DNA organization.

---

# 150. Remodeler abundance

**Status: `SOURCE_SCALE`**

The source gives an approximate abundance of:

```text
~1 ATP-dependent chromatin-remodeling complex
per ~5 nucleosomes
```

### `VERIFY_QUANT`

Retain as source-scale context.

---

# 151. Remodelers can reposition nucleosomal DNA

The source describes remodeling complexes pulling/moving DNA relative to the histone core.

Possible outcomes:

- expose DNA sequence
- hide DNA sequence
- increase accessibility
- decrease accessibility

---

# 152. Remodeling uses repeated ATP hydrolysis

Figure 5–27 states that many ATP-hydrolysis cycles can be required to shift DNA position.

### Hard project rule

Do not visualize remodeling as one instantaneous teleportation of a nucleosome.

---

# 153. Remodelers interact with histone core and DNA

Their mechanical action depends on direct molecular interaction with the nucleosome.

---

# 154. Mitotic downregulation of remodeling

The source states many chromatin-remodeling complexes are inactivated during mitosis, which may help maintain compact mitotic chromosomes.

### `SOURCE_FACT` with source-level cautious wording

Preserve:

```text
may help
```

---

# 155. Histone-modifying enzymes

A second chromatin-control system changes histones covalently.

The source emphasizes reversible modification.

---

# 156. Core histone-tail modifications named in Chapter 5

The chapter explicitly includes:

- acetylation
- phosphorylation
- methylation

---

# 157. Histone lysine acetylation can loosen chromatin

The source explains that acetylating lysines can reduce histone-tail affinity for neighboring nucleosomes.

This can promote more open chromatin and DNA access.

---

# 158. Histone modifications also create docking information

The chapter emphasizes that a major function of histone modification is:

```text
recruitment of regulatory proteins
```

that recognize specific modification patterns.

---

# 159. Histone modification patterns can mark different chromatin states

The source gives examples of patterns associated with:

- newly replicated chromatin
- actively expressed genes
- silenced genes
- condensed chromatin

### `DO_NOT_INFER`

A single histone mark should not be treated as a universal one-to-one "command" independent of context.

---

# 160. Histone H3 tail — source details

Figure 5–28 states:

```text
histone H3 length ≈ 135 amino acids
```

and illustrates:

```text
36 N-terminal residues
```

where many modifications occur.

---

# 161. Histone modification sites shown

Figure 5–28 includes residues such as lysines at:

```text
K4
K9
K27
K36
```

among multiple other sites in the H3 tail.

---

# 162. Lysine methylation multiplicity

A lysine can receive:

```text
1
2
or
3 methyl groups
```

in the source description.

---

# 163. Mutually exclusive modification at one lysine

The source notes that a given lysine residue cannot simultaneously carry mutually incompatible states such as:

```text
acetylation
and
methylation
```

at the same chemical site.

---

# 164. Number of cataloged histone modifications

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter states that roughly:

```text
~100 histone modifications
```

had been cataloged.

Only a smaller number had been definitively connected to a particular functional outcome in the source framing.

---

# 165. H3K9 trimethylation

The source specifically links:

```text
H3 lysine 9 trimethylation
```

with a common heterochromatin state and gene silencing.

---

# 166. H3K4 modification in Figure 5–28

The source figure associates trimethylation at histone H3 lysine 4 with:

```text
gene expression
```

in its simplified functional schematic.

### `SOURCE_MODEL`

Do not infer that one mark alone is sufficient to activate every gene.

---

# 167. Chromatin regulators can be targeted to specific regions

Remodeling and histone-modifying complexes can be recruited through interactions with:

- sequence-specific DNA-binding proteins
- RNA transcribed from particular DNA regions
- pre-existing histone modifications

Detailed targeting belongs to Chapter 8.

---

# 168. Interphase chromatin is heterogeneous

Interphase chromosome structure is not uniformly compact.

Different genomic regions occupy different packing states.

---

# 169. Gene activity and compaction correlate broadly

The source states:

```text
actively expressed regions
→ generally more extended

silent regions
→ generally more condensed
```

### `DO_NOT_INFER`

This is not a binary rule that every open region is active and every compact region is permanently silent.

---

# 170. Cell type matters

Chromatin organization differs among cell types.

These differences help establish which genes are active or inactive.

---

# 171. Fraction of genes expressed

**Status: `SOURCE_SCALE`**

The source says most cell types express approximately:

```text
~half of the genes they contain
```

with many expressed at low levels.

### `VERIFY_QUANT`

This is broad teaching-level context.

---

# 172. Heterochromatin

The most highly condensed form of interphase chromatin is called:

```text
heterochromatin
```

---

# 173. Heterochromatin fraction

**Status: `SOURCE_SCALE`**

The chapter states heterochromatin comprises approximately:

```text
~40%
```

of a typical interphase chromosome.

---

# 174. Constitutive heterochromatin

Approximately half of the heterochromatin fraction in the chapter remains persistently condensed.

Examples include regions around:

- centromeres
- telomeres

Figure 5–29 calls this:

```text
constitutive heterochromatin
```

---

# 175. Facultative heterochromatin

Other heterochromatin can be condensed only in particular cellular contexts.

Figure 5–29 calls this:

```text
facultative heterochromatin
```

---

# 176. Euchromatin

Less condensed interphase chromatin is broadly termed:

```text
euchromatin
```

The source estimates about:

```text
~60%
```

of interphase chromatin in this category.

---

# 177. Euchromatin is not uniformly active

Figure 5–29 distinguishes:

- active euchromatin
- quiescent euchromatin

### Hard project rule

```text
euchromatin
!=
all genes ON
```

---

# 178. Actively expressed open euchromatin fraction

**Status: `SOURCE_SCALE`**

The source states only about:

```text
~20% of the human genome
```

is packaged in the relatively extended/open euchromatin associated with actively expressed genes.

### `SOURCE_ERA_STATEMENT` / `VERIFY_QUANT`

Use as source-scale context, not a universal invariant.

---

# 179. Chromatin exists as a continuum of structural states

Figure 5–29 emphasizes that both heterochromatin and euchromatin encompass mixtures of structures with different degrees of condensation.

### Hard project rule

Do not model chromatin with only two uniform materials:

```text
red closed
green open
```

Chromatin state is continuous/multidimensional.

---

# 180. Heterochromatin can spread

Once a heterochromatin state is established, histone marks can recruit enzymes that place similar marks on neighboring nucleosomes.

This can propagate a compact state along a chromosome.

---

# 181. Reader–writer complex

The chapter calls the relevant propagation machinery a:

```text
reader–writer complex
```

Conceptually:

```text
reader
recognizes existing histone mark

writer
recreates the same/similar mark nearby
```

---

# 182. Heterochromatin-specific proteins reinforce condensation

Modified nucleosomes also recruit proteins that help produce or stabilize a compact chromatin state.

---

# 183. Heterochromatin spreading is reversible

The source notes that other histone-modifying complexes can remove heterochromatin-associated marks.

### Project rule

Heterochromatin propagation is a regulated dynamic process, not irreversible crystallization.

---

# 184. Barrier DNA sequences

Heterochromatin spreading can stop at:

```text
barrier DNA sequences
```

---

# 185. Barrier mechanism example

The chapter gives one example:

```text
barrier sequence
→ recruits histone-modifying activity
→ acetylates H3 lysine 9
→ blocks methylation at that lysine
→ prevents propagation of H3K9-methyl heterochromatin through the barrier
```

### `SOURCE_MODEL`

This is one example mechanism, not the only type of chromatin boundary.

---

# 186. Heterochromatin silences genes by packaging context

Genes embedded in sufficiently compact heterochromatin tend to be transcriptionally inactive.

### Hard project rule

Silencing is not represented by "deleting" the gene.

The DNA sequence remains present while accessibility/regulatory state changes.

---

# 187. Barrier deletion disease example

The source describes an inherited deletion near the human β-globin locus that removed a barrier sequence.

Consequence in the source:

```text
heterochromatin spread
→ β-globin gene became inactive
→ severe anemia
```

This demonstrates that genome sequence can affect gene activity through chromatin topology even without changing the β-globin coding sequence itself.

---

# 188. X-chromosome dosage problem in source framing

Female mammals have two X chromosomes whereas males have one in the conventional XX/XY scheme.

The source states that a double dose of X-linked gene products would be harmful and that female mammals inactivate one X chromosome per cell.

---

# 189. X inactivation

Early in female mammalian embryonic development:

```text
one of the two X chromosomes
is selected for inactivation
```

in each cell.

The source describes the choice as:

```text
apparently random
```

between maternal and paternal X.

---

# 190. Inactive X becomes heterochromatic

The selected X chromosome becomes highly condensed and largely inactive.

---

# 191. X-inactivation state is clonally inherited

After the choice is made, daughter cells maintain the same parental X as the inactive X.

This produces stable lineages with different active-X identities.

---

# 192. Female mammals are cellular mosaics

Because different embryonic cells can inactivate different X chromosomes, the adult female is a mosaic of cell populations.

---

# 193. Approximate mosaic proportion in source

The chapter states that in many tissues, roughly half the cells may have one parental X inactive and roughly half the other.

### `SOURCE_MODEL`

Actual proportions can deviate from 50:50.

Do not encode an exact equal split as mandatory.

---

# 194. Barr body

The condensed inactive X can appear as a discrete nuclear chromatin mass called a:

```text
Barr body
```

---

# 195. Barr body is a chromatin state, not an extra chromosome

### Hard project rule

Do not depict a Barr body as an additional object separate from the X chromosome.

It is the highly condensed state of an X chromosome.

---

# 196. Tortoiseshell/calico coat-color example

The source uses X-linked coat-color alleles in cats to demonstrate clonal X-inactivation mosaics.

One patch may express one X-linked allele; another patch may express the alternative allele depending on which X remained active in the founding skin-cell lineage.

---

# 197. Epigenetic inheritance

The chapter defines a form of inheritance in which cells preserve biological state across cell generations without changing the underlying DNA nucleotide sequence.

This is called:

```text
epigenetic inheritance
```

in the chapter's chromatin context.

---

# 198. Cell memory

Stable chromatin states help daughter cells retain gene-expression patterns characteristic of the parent cell type.

This supports:

```text
cell memory
```

during development.

---

# 199. DNA sequence versus epigenetic state

### Hard project rule

Store separately:

```text
DNA sequence state
and
chromatin/epigenetic state
```

A change in gene activity does not imply a DNA sequence mutation.

---

# 200. Histone inheritance during replication — source model

The chapter states that when DNA is replicated:

```text
parent H3 and H4 histones
are passed to daughter DNA molecules
```

so each daughter inherits approximately half of the parental histones carrying pre-existing modifications.

---

# 201. New nucleosomes are initially less marked in the inheritance schematic

The inherited parental histones are interspersed with newly assembled histones/nucleosomes.

Reader–writer complexes then help restore the local modification pattern.

---

# 202. Reader–writer restoration after replication

Source sequence:

```text
parental modified histone inherited
→ reader recognizes mark
→ writer modifies neighboring new nucleosomes
→ chromatin-associated proteins bind
→ parental chromatin state is re-established
```

---

# 203. Epigenetic inheritance is pattern propagation, not perfect molecular copying

### Project rule

Do not animate every individual histone molecule being duplicated with its exact modifications.

The source model instead involves:

- partial retention of parental modified histones
- new histone deposition
- local reconstruction of the pattern

---

# 204. Chromatin inheritance helps preserve cell identity

Because chromatin influences gene expression, restoring chromatin patterns after replication contributes to maintenance of differentiated cell identity.

---

# 205. Figure 5–1 knowledge

Chromosomes become individually visible when condensed for cell division.

The same chromosomes are present during interphase but are less compact and not individually resolved by ordinary light microscopy in the same way.

---

# 206. Figure 5–2 knowledge

DNA consists of:

- nucleotide building blocks
- directional polynucleotide strands
- complementary base pairs
- antiparallel strands
- a double helix

---

# 207. Figure 5–3 knowledge

Phosphodiester linkage creates 5′/3′ polarity.

---

# 208. Figure 5–4 knowledge

Canonical pairing geometry:

```text
A–T
G–C
```

with antiparallel backbone orientation.

The source shows:

```text
2 H bonds for A–T
3 H bonds for G–C
```

---

# 209. Figure 5–5 knowledge

DNA double helix:

- right-handed
- major groove
- minor groove
- about 10 base pairs per turn in source model
- about 2 nm diameter

---

# 210. Figures 5–6 / 5–7 knowledge

DNA sequence is a linear information system.

Genes produce RNA; most RNAs from protein-coding genes then direct protein synthesis, while some RNAs are themselves the final functional product.

---

# 211. Figure 5–8 knowledge

Chromosome painting reveals distinct chromosome identities and supports karyotype construction.

---

# 212. Figure 5–9 knowledge

Large chromosomal rearrangements such as reciprocal translocations can be visualized by chromosome painting.

---

# 213. Figure 5–10 knowledge

Yeast has high gene density and can encode genes on either DNA strand.

---

# 214. Figure 5–11 knowledge

A human gene can contain substantial noncoding sequence between protein-coding segments.

### `LATER_CHAPTER_REFINEMENT`

Exons, introns, RNA splicing, and mature mRNA belong to Chapter 7.

---

# 215. Figure 5–12 knowledge

Genome size and chromosome number can evolve independently through events such as chromosome fusion.

---

# 216. Figure 5–13 knowledge

Cell cycle connects:

```text
interphase
→ chromosome duplication
→ mitotic condensation
→ spindle capture
→ chromosome segregation
→ nuclear reformation
→ cell division
```

---

# 217. Figure 5–14 knowledge

Functional chromosome sequence-element requirements:

```text
many replication origins
one centromere
two telomeres
```

---

# 218. Figure 5–15 knowledge

A duplicated mitotic chromosome:

```text
two sister chromatids
joined near centromere
```

Each chromatid contains one DNA molecule.

---

# 219. Figure 5–16 knowledge

Interphase chromosomes occupy distinct but non-membrane-bounded territories.

Homologous chromosomes need not share the same location.

---

# 220. Figure 5–17 knowledge

The nucleolus forms from rRNA-gene regions on several chromosomes and contains rRNA plus specialized proteins.

---

# 221. Figure 5–18 knowledge

Interphase chromatin is much less compact than a mitotic chromosome at the same displayed scale.

---

# 222. Figure 5–19 knowledge

Experimentally decondensed chromatin can reveal nucleosomes as beads on a string.

Native chromatin can appear far more compact.

---

# 223. Figure 5–20 knowledge

Core nucleosome composition:

```text
147 bp DNA
+
H2A2
H2B2
H3_2
H4_2
```

with variable linker DNA.

---

# 224. Figure 5–21 knowledge

High-resolution nucleosome structure shows DNA wrapping a disk-like histone octamer and histone tails extending outward.

---

# 225. Figure 5–22 knowledge

Histone H1 binds linker DNA and changes DNA trajectory at the nucleosome, favoring compaction.

---

# 226. Figure 5–23 knowledge

SMC loop extrusion is ATP-dependent.

The source's exact inchworm cycle is a proposed mechanism, not settled fact.

---

# 227. Figure 5–24 knowledge

Sequence-specific boundary/clamp proteins regulate loop size by stalling cohesin and associating across the loop base.

---

# 228. Figure 5–25 knowledge

Mammalian mitotic condensation source model:

```text
condensin II
→ larger loops

condensin I
→ loops within loops

progressive winding
→ compact chromosome
```

---

# 229. Figure 5–26 knowledge

The source presents a multilevel compaction schematic from 2-nm DNA to a mitotic chromosome.

### Hard project caveat

Use this as a **scale/teaching map**, not as proof that all living chromatin passes through a regular 30-nm fiber.

---

# 230. Figure 5–27 knowledge

ATP-dependent chromatin remodelers pull/reposition nucleosomal DNA and can expose or occlude DNA-binding sites.

---

# 231. Figure 5–28 knowledge

Histone tails contain many modifiable residues.

Modification combinations can recruit different proteins and correlate with different chromatin outcomes.

---

# 232. Figure 5–29 knowledge

A single chromosome contains multiple chromatin-state classes:

- constitutive heterochromatin
- facultative heterochromatin
- quiescent euchromatin
- active euchromatin

---

# 233. Figure 5–30 knowledge

Reader–writer complexes can propagate a histone-mark pattern along neighboring nucleosomes until a barrier is encountered.

---

# 234. Figure 5–31 knowledge

Random X inactivation early in development produces clonally inherited active-X patterns and female cellular mosaicism.

---

# 235. Figure 5–32 knowledge

Tortoiseshell coat patches visualize clonal X-inactivation states in an organism.

---

# 236. Figure 5–33 knowledge

Epigenetic heterochromatin inheritance combines:

```text
parental H3/H4 retention
+
new histones
+
reader–writer restoration
+
heterochromatin-protein recruitment
```

---

# 237. How We Know — why DNA had to be experimentally established as genetic material

The source emphasizes that the conclusion:

```text
genes are made of DNA
```

was not accepted merely because it now seems obvious.

It emerged from converging experiments.

---

# 238. Griffith experiment — organism

The organism was:

```text
Streptococcus pneumoniae
```

---

# 239. Griffith S strain

The pathogenic S form:

- had a polysaccharide capsule
- formed smooth-looking colonies
- caused lethal infection in the source's mouse experiment

---

# 240. Griffith R strain

The R form:

- lacked the protective capsule
- formed rough colonies
- was nonpathogenic in the source experiment

---

# 241. Heat-killed S strain

Heat-killed pathogenic S bacteria alone did not cause lethal infection.

---

# 242. Transformation result

When Griffith combined:

```text
live R bacteria
+
heat-killed S bacteria
```

mice died and live pathogenic S bacteria could be recovered.

---

# 243. Transformation was heritable

The transformed bacteria maintained the pathogenic phenotype in subsequent growth.

This implied acquisition of heritable biological information.

---

# 244. Avery, MacLeod, and McCarty

They followed Griffith's transformation phenomenon and purified the chemical "transforming principle."

---

# 245. Transforming principle was DNA

Their purified transforming activity behaved chemically as DNA.

Treatments that destroyed:

- protein
- RNA

did not abolish transforming activity.

Treatment that destroyed:

```text
DNA
```

did abolish transforming activity.

---

# 246. Avery–MacLeod–McCarty conclusion

Purified DNA could produce a stable heritable phenotypic change.

Therefore DNA could function as genetic material.

---

# 247. Historical resistance to the DNA conclusion

The chapter emphasizes that many scientists remained skeptical because prevailing assumptions favored proteins as genetic material.

### Scientific-method project lesson

Evidence should override attractive prior assumptions.

---

# 248. Hershey–Chase experiment — system

They used T2 bacteriophage infecting:

```text
E. coli
```

---

# 249. T2 composition in the source

The relevant viral particle contained only:

```text
DNA
and
protein
```

as candidate hereditary material.

---

# 250. T2 infection geometry

The virus attaches to the bacterium and introduces its genetic material into the host while much of the viral protein shell remains outside.

---

# 251. Radioactive labels

Hershey and Chase labeled:

```text
DNA with 32P
protein with 35S
```

The source explains the chemical rationale in terms of phosphorus in DNA and sulfur in protein.

---

# 252. Blender step

After infection, mechanical agitation in a blender sheared viral coats away from bacterial surfaces.

---

# 253. Centrifugation step

Centrifugation separated:

```text
infected bacteria
→ pellet

detached viral coats
→ supernatant
```

---

# 254. Hershey–Chase result

Most:

```text
32P-labeled DNA
```

was associated with infected cells.

Most:

```text
35S-labeled protein
```

remained with spent viral material outside the cells.

---

# 255. DNA entered the next viral generation

Radioactive DNA label was also detected in subsequent viral progeny.

This reinforced DNA's role as heritable information.

---

# 256. How We Know — cumulative evidence logic

The chapter presents:

```text
Griffith
→ transformation exists

Avery/MacLeod/McCarty
→ purified DNA carries transforming activity

Hershey/Chase
→ DNA, not phage protein coat, enters host and is inherited
```

as a progression of evidence.

---

# 257. DNA melting

Question-derived concept:

Heating can separate the two DNA strands by disrupting noncovalent base-pair interactions.

---

# 258. G–C content and melting — source-consistent concept

Because G–C pairs contain three hydrogen bonds in the chapter's model whereas A–T pairs contain two, GC-rich DNA is expected in the source's question logic to require more heat to separate than comparable AT-rich DNA.

### `DO_NOT_INFER`

Actual DNA melting depends on more than simple hydrogen-bond counting, including sequence context and base stacking.

That refinement is outside the explicit Chapter 5 treatment.

---

# 259. DNA information capacity

With four possible nucleotide states at a position:

```text
4 states
=
2 bits of binary information per base-pair position
```

in the idealized information-theory exercise.

---

# 260. Sequence-space growth

For single-stranded DNA of length `N`, the number of possible sequences is:

```text
4^N
```

This makes sequence identity extraordinarily information-rich.

---

# 261. Human haploid DNA contour length in chapter questions

Question 5–9 states:

```text
~1 m DNA
```

for one copy of the human genome.

This is consistent with the text's approximate:

```text
~2 m
```

for a diploid human cell.

---

# 262. Scale conversion: base-pair rise

Using:

```text
0.34 nm / bp
```

a sequence of `N` base pairs has an approximate fully extended B-DNA contour contribution:

```text
L ≈ 0.34 N nm
```

under the chapter's simplified geometry.

---

# 263. 1000-bp gene-length scale exercise

Using source rise:

```text
1000 bp × 0.34 nm/bp
≈ 340 nm
```

of DNA contour length if fully extended as canonical duplex.

### `SOURCE_DERIVED`

This is a calculation from the source's stated geometry.

---

# 264. Nucleosome packing calculation basis

Question 5–16 supplies:

```text
nucleosome diameter = 11 nm
wrapped DNA = 147 bp
rise = 0.34 nm/bp
```

The wrapped DNA contour length is approximately:

```text
147 × 0.34 nm
≈ 50 nm
```

---

# 265. Core-particle first-level packing ratio

Using the question's simple ratio:

```text
~50 nm DNA contour
/
11 nm particle diameter
≈ 4.5-fold
```

for the wrapped core particle.

### `SOURCE_DERIVED`

This is an educational packing-ratio estimate, not a full polymer-density model.

---

# 266. Beads-on-string repeat exercise

Question 5–16 adds an example:

```text
54 bp extended linker
```

to the:

```text
147 bp wrapped DNA
```

for a repeat of:

```text
201 bp
```

---

# 267. Nucleosome count exercise

Question 5–2 asks students to use:

```text
32 million nucleosomes
```

for the human genome in a volume calculation.

### `SOURCE_MODEL` / `VERIFY_QUANT`

Use only as the exercise's assumed value unless externally verified.

---

# 268. Nucleus-size exercise

Question 5–2 uses a spherical nucleus approximately:

```text
6 µm diameter
```

for its packing calculation.

### `SOURCE_MODEL`

This is a geometric exercise assumption, not a universal nucleus size.

---

# 269. DNA Scale Spine — canonical hierarchy

For The Seamless Cell, Chapter 5 supports the following scale spine:

```text
nucleus
↓
chromosome territory
↓
local chromatin region
↓
chromatin loops
↓
irregular nucleosome polymer
↓
nucleosome
↓
DNA double helix
↓
base pair
↓
nucleotide chemistry
↓
atoms/bonds
```

---

# 270. Scale Spine continuity rule

The same DNA molecule must persist conceptually through all zoom levels.

### Hard project rule

Do not instantiate a new unrelated DNA helix at molecular scale.

The DNA shown at the deepest scale must be semantically continuous with the chromatin segment from which the viewer zoomed.

---

# 271. Territory-to-loop transition rule

A chromosome territory should resolve into:

- heterogeneous local density
- loops/contacts
- polymer segments

not into one smooth "chromosome object."

---

# 272. Loop-to-nucleosome transition rule

As scale increases:

```text
chromatin polymer
→ nucleosome-level organization
```

must become explicit without replacing the underlying polymer topology.

---

# 273. Nucleosome-to-DNA transition rule

The DNA entering and exiting a nucleosome must be the same continuous duplex that wraps the histone core.

Do not visually cut and replace it during semantic zoom.

---

# 274. DNA-to-base-pair transition rule

At molecular scale, base-pair detail must emerge from the actual helix geometry.

Do not treat a base pair as a standalone 0.34-nm object.

---

# 275. Atomic transition rule

At atomic scale, element representation should remain chemically standard enough to preserve:

- C
- N
- O
- P
- H where shown/useful

and correct covalent connectivity.

---

# 276. WorldState chromosome identity

Recommended conceptual structure:

```yaml
chromosome_entity:
  chromosome_id:
  homolog_id:
  dna_molecule_id:
  replicated_state:
  sister_chromatids:
  centromere:
  telomeres:
  replication_origins:
  territory:
  chromatin_state_map:
  loop_topology:
  nuclear_attachments:
  cell_cycle_state:
```

---

# 277. DNA molecule schema

```yaml
dna_molecule:
  id:
  topology: linear
  strand_a:
    polarity:
    sequence:
  strand_b:
    polarity:
    sequence:
  base_pairing:
  contour_length:
  helical_form:
  helical_parameters:
  chromosome_id:
  provenance:
```

---

# 278. DNA base-pair schema

```yaml
base_pair:
  index:
  strand_a_base:
  strand_b_base:
  pair_type:
  hydrogen_bond_count_source_model:
  axial_position:
  helical_rotation:
  major_groove_exposure:
  minor_groove_exposure:
  provenance:
```

---

# 279. Nucleosome schema

```yaml
nucleosome:
  id:
  dna_molecule:
  wrapped_bp_start:
  wrapped_bp_end:
  wrapped_bp_count: 147
  histone_octamer:
    H2A: 2
    H2B: 2
    H3: 2
    H4: 2
  histone_tails:
  linker_left:
  linker_right:
  H1_state:
  modification_state:
  remodeler_state:
  provenance:
```

---

# 280. Histone modification schema

```yaml
histone_mark:
  nucleosome_id:
  histone_type:
  histone_copy:
  residue_identity:
  residue_number:
  modification:
  modification_level:
  writer:
  eraser:
  reader:
  functional_association:
  evidence_status:
  provenance:
```

---

# 281. Chromatin-state schema

```yaml
chromatin_region:
  chromosome_id:
  coordinate_start:
  coordinate_end:
  nucleosomes:
  compaction_state:
  accessibility:
  transcriptional_state:
  heterochromatin_class:
  histone_mark_profile:
  bound_nonhistone_proteins:
  loop_id:
  nuclear_location:
  lamina_association:
  condensate_association:
  provenance:
```

---

# 282. Loop schema

```yaml
chromatin_loop:
  id:
  chromosome_id:
  start_coordinate:
  end_coordinate:
  extruder:
  boundary_left:
  boundary_right:
  loop_size_bp:
  extrusion_state:
  ATP_state:
  parent_loop:
  child_loops:
  evidence_status:
  provenance:
```

---

# 283. SMC state schema

```yaml
smc_complex:
  id:
  type:
    - cohesin
    - condensin_I
    - condensin_II
  chromosome:
  dna_contacts:
  ATP_state:
  loop_extrusion_state:
  boundary_interaction:
  sister_cohesion_state:
  conformational_state:
  evidence_status:
```

---

# 284. Chromosome-territory schema

```yaml
chromosome_territory:
  chromosome_id:
  nucleus_id:
  occupancy_field:
  centroid:
  boundary_softness:
  intermingling_regions:
  lamina_contacts:
  nucleolar_contacts:
  dynamic_state:
  provenance:
```

---

# 285. ViewState territory rule

Chromosome painting colors belong to ViewState.

They are not WorldState physical pigments.

```text
WorldState:
chromosome identity

ViewState:
assigned visualization color
```

---

# 286. DNA representation levels

Suggested LODs:

```text
LOD 0
chromatin density field

LOD 1
chromosome polymer/territory representation

LOD 2
looped chromatin polymer

LOD 3
nucleosome-resolved polymer

LOD 4
histone + wrapped DNA

LOD 5
DNA double helix

LOD 6
base-pair/nucleotide chemistry

LOD 7
atomic representation
```

---

# 287. Persistent DNA identity across LOD

The same genomic coordinate should map across representations.

Example:

```text
chrN : coordinate x
```

should refer to the same biological locus whether viewed as:

- territory voxel
- loop segment
- nucleosome segment
- DNA helix
- nucleotide sequence

---

# 288. DNA geometry rule

If a representation claims molecular fidelity, enforce:

- antiparallel strands
- A–T / G–C pairing
- external sugar-phosphate backbone
- interior base pairs
- right-handed helix
- major/minor grooves
- ~2-nm diameter source scale
- ~0.34-nm rise source scale

---

# 289. Nucleosome geometry rule

If a representation claims molecular fidelity, enforce:

- histone octamer stoichiometry
- 147-bp wrapped DNA core
- ~1.7-turn left-handed DNA wrap
- protruding histone tails
- linker DNA continuity
- H1 separate from core octamer

---

# 290. Nucleosome spacing rule

Linker length is variable.

### Forbidden shortcut

```text
perfectly periodic identical bead spacing
```

as a universal default.

---

# 291. Histone-tail dynamics rule

Histone tails are flexible/disordered relative to the core.

Do not model them as rigid spikes.

---

# 292. Chromatin polymer rule

Default in-vivo chromatin should be:

- heterogeneous
- irregular
- locally compact or open
- dynamically interacting
- nucleosome based
- loop organized

### Hard project rule

Avoid clean, repetitive decorative solenoids.

---

# 293. Source 30-nm fiber handling

If the user explicitly enters a chapter-teaching mode explaining Figure 5–26:

```text
the source's 30-nm fiber schematic may be shown
```

but the UI must label it as a textbook/source model.

If displaying a default living-cell chromosome:

```text
do not enforce a regular 30-nm fiber
```

---

# 294. Loop-extrusion animation rule

A loop should grow because:

```text
SMC complex
+
ATP-dependent conformational cycle
+
chromatin movement
```

not because a curve-control point is arbitrarily dragged outward.

---

# 295. Loop-boundary rule

If source-level sequence-specific clamp behavior is shown:

- cohesin extrusion proceeds
- clamp-bound region is encountered
- extrusion stalls/stops
- loop base is stabilized

Do not label the clamp with an external specific protein name unless verified in the external layer.

---

# 296. Condensin-I/II animation rule

In mammalian mitotic condensation:

```text
condensin II
→ establish large loops

condensin I
→ subdivide/create nested loops

collective winding
→ compact chromatid
```

The transition should be temporal, not two static diagrams.

---

# 297. Mitotic chromosome topology rule

A mitotic chromosome should be modeled as:

```text
two sister chromatids
when duplicated

each chromatid
=
one continuous DNA molecule
packaged into compact chromatin
```

not as a solid X-shaped plastic object.

---

# 298. Centromere rule

The centromere is:

```text
a specialized chromosomal region
```

not merely the geometric midpoint of a chromosome.

### `DO_NOT_INFER`

Do not force the centromere to the center of every chromosome.

---

# 299. Telomere rule

Telomeres are chromosome-end structures/sequences.

Do not draw them as decorative caps without continuous DNA connection.

---

# 300. Replication-origin rule

Origins are positions/regions in DNA sequence where replication initiates.

Do not render origins as permanent physical organelles.

---

# 301. Chromatin-accessibility rule

Accessibility is local and dynamic.

A region may be:

- compact
- partially open
- remodeler-bound
- histone-modified
- transcriptionally active
- transcriptionally quiescent

without changing chromosome identity.

---

# 302. Histone-mark rendering rule

Histone marks should be encoded as chemical state of a specific residue.

### Forbidden shortcut

```text
floating "Ac" / "Me" icon
near nucleosome
=
biological state
```

unless explicitly a symbolic learner-view overlay.

---

# 303. Remodeler animation rule

If molecular detail is shown:

```text
ATP-dependent motor
→ DNA translocation relative to histone core
→ changed exposure/position
```

The histone octamer should not simply disappear.

---

# 304. Heterochromatin rendering rule

Heterochromatin should emerge from:

- nucleosome-level states
- bound proteins
- polymer compaction
- nuclear context

not from applying a dark texture to arbitrary DNA.

---

# 305. Euchromatin rendering rule

Euchromatin means less condensed than heterochromatin but includes both active and quiescent regions.

Avoid:

```text
euchromatin = active
heterochromatin = inactive
```

as a binary rule.

---

# 306. Heterochromatin propagation rule

A source-consistent simulation can use:

```text
modified nucleosome
→ reader–writer recruitment
→ neighbor modification
→ additional heterochromatin proteins
→ local compaction
→ continued propagation
```

until boundary/eraser effects intervene.

---

# 307. Barrier rule

Boundary function must have a mechanism.

In the source example:

```text
H3K9 acetylation
blocks H3K9 methylation
```

at a barrier-associated region.

Do not represent a barrier as an invisible wall in space.

---

# 308. X-inactivation simulation state

Recommended model:

```yaml
x_inactivation:
  cell_id:
  maternal_X_state:
  paternal_X_state:
  chosen_inactive_X:
  establishment_time:
  barr_body_state:
  clone_lineage:
  heritable_state:
```

---

# 309. X-inactivation is lineage history

To preserve mosaicism:

```text
parent cell inactive-X choice
→ daughter cells inherit same choice
```

Spatial tissue patches emerge from clonal expansion.

---

# 310. Epigenetic inheritance simulation rule

After replication:

```text
old nucleosomes / histones
+
newly deposited histones
→ mixed state

reader–writer reconstruction
→ local chromatin pattern restored
```

Do not clone every chromatin mark by direct copying with no mechanism.

---

# 311. BiologicalTime requirements

Chromosome structure changes at multiple time scales:

- thermal polymer motion
- chromatin remodeling
- loop extrusion
- transcription-linked opening
- DNA replication
- cell-cycle condensation
- mitosis
- developmental X inactivation
- transgenerational cell-lineage chromatin memory

These must not be tied directly to camera motion.

---

# 312. CameraTime separation

The user must be able to:

```text
pause biological time
and
navigate from nucleus → atom
```

without causing:

- chromosome replication
- loop growth
- nucleosome remodeling
- mitotic condensation

unless playback is explicitly active.

---

# 313. Nuclear entry is ViewState

Entering the nucleus in the Scale Spine should use:

- clipping
- sectioning
- transparency
- semantic zoom

### Hard rule

Do not biologically rupture the nuclear envelope just because the camera passes through it.

---

# 314. DNA clipping rule

Likewise, at very deep zoom:

- clipping a nucleosome surface
- hiding chromatin density
- fading neighboring molecules

is ViewState.

It must not mutate biological state.

---

# 315. Chromosome color rule

Artificial colors may be used to track homologs/territories in learner mode.

They must be clearly understood as visualization aids.

Avoid high-saturation rainbow "chromosome blobs" as default scientific rendering.

---

# 316. Scale-dependent crowding rule

As the camera zooms into chromatin, the environment should become:

- crowded
- polymer-rich
- spatially constrained
- chemically dense

not a clean empty background containing one floating nucleosome.

---

# 317. Nucleosome orientation rule

Nucleosomes in chromatin should not all have identical orientation.

Local orientations depend on:

- linker path
- neighboring nucleosomes
- H1
- chromatin-binding proteins
- loop geometry
- local polymer state

---

# 318. Chromosome territory visual language

Preferred:

```text
irregular occupancy
overlapping/intermingling at boundaries
local density variation
subtle identity cues
```

Avoid:

```text
smooth spherical volumes
uniform translucency
hard borders
organelles-within-nucleus look
```

---

# 319. Nucleolus visual language

Preferred:

```text
dense but dynamic molecular condensate
rRNA-rich
protein-rich
chromosomal rDNA loops feeding into it
no membrane
```

---

# 320. Mitotic chromosome visual language

Preferred:

```text
dense polymeric body
two sister chromatids
structured along axis
chromatin loops packed around axis
```

Avoid:

```text
plastic X icon
cartoon candy chromosome
perfect cylinders
```

---

# 321. DNA atomic visual language

At atomistic scale:

- bases must be chemically distinct
- phosphates must belong to backbone
- deoxyribose must be correctly connected
- covalent bonds must remain continuous
- pair geometry must preserve strand antiparallelism

---

# 322. DNA sequence and structure must be linked

If a learner selects a genomic sequence, zooming to base-pair chemistry should show the corresponding sequence order.

No random replacement sequence should appear merely for aesthetics.

---

# 323. Chromatin topology and gene state must be linked

If a gene is declared:

```text
heterochromatin-silenced
```

the corresponding DNA locus must occupy that chromatin context.

Do not let UI state and 3D world disagree.

---

# 324. Gene expression and chromosome-state rule

Chapter 5 only establishes broad relationships.

Detailed transcription activation belongs to Chapter 8.

### `DO_NOT_INFER`

Do not invent a complete promoter/enhancer mechanism from this chapter alone.

---

# 325. Replication and repair relationship

Chapter 5 identifies:

- replication origins
- telomeres
- need for DNA access

Detailed molecular replication/repair mechanisms belong to Chapter 6.

---

# 326. Cell-cycle relationship

Chapter 5 provides:

```text
interphase chromosome
→ replicated chromosome
→ mitotic chromosome
→ segregated chromosomes
```

Detailed control machinery belongs to Chapter 18.

---

# 327. Quantitative register

| Quantity | Chapter 5 value/context | Status |
|---|---:|---|
| DNA bases | A, T, G, C | structural |
| A–T H bonds | 2 | source model |
| G–C H bonds | 3 | source model |
| DNA diameter | ~2 nm | `SOURCE_SCALE` |
| axial rise per bp | ~0.34 nm | `SOURCE_SCALE` |
| bp per turn | ~10 | source structural model |
| human DNA per diploid cell | ~2 m | `SOURCE_SCALE` |
| human nucleus diameter | ~5–8 µm | broad source scale |
| human haploid genome | ~3.1 × 10^9 bp | source-era |
| human chromosomes/diploid cell | 46 | canonical source |
| human gene count | ~25,000 | source-era |
| simplest bacterial gene count example | ~500 | source-era |
| yeast genome | ~12.5 million bp | example |
| yeast genes | ~6600 | example |
| yeast chromosomes | 16 | example |
| chromosome 22 | ~48 million bp | example |
| extended chr22 length | ~1.5 cm | example |
| mitotic chr22 length | ~2 µm | example |
| total mitotic compaction | ~10,000× | broad example |
| interphase relative compaction | ~10× less than mitotic | broad |
| histones per human cell | >60 million | source-era scale |
| nucleosomal core DNA | 147 bp | structural |
| core histone stoichiometry | 2 each H2A/H2B/H3/H4 | structural |
| DNA wrap around octamer | ~1.7 turns | structural |
| nucleosome diameter | ~11 nm | structural model |
| linker DNA | few bp to ~80 bp | source range |
| example nucleosome repeat | ~200 bp | figure |
| source 30-nm fiber | 30 nm | `SOURCE_MODEL` |
| chromatid scale in Fig. 5–26 | ~700 nm | source schematic |
| duplicated chromosome width in Fig. 5–26 | ~1400 nm | source schematic |
| remodeler abundance | ~1 per 5 nucleosomes | source-era |
| heterochromatin fraction | ~40% | broad |
| euchromatin fraction | ~60% | broad |
| active/open euchromatin associated with expressed genes | ~20% human genome | broad/source-era |
| cataloged histone modifications | ~100 | source-era |
| H3 length | 135 aa | source figure |
| H3 N-tail residues shown | 36 | source figure |
| ubiquitin | not central to Ch.5; see Ch.4/7 | cross-ref |
| rRNA gene clusters in human source | 10 clusters on five chromosome pairs | source example |
| human rDNA chromosomes shown | 13,14,15,21,22 | source figure |
| Question 5–2 assumed nucleosomes | 32 million | exercise assumption |
| Question 5–2 nucleus diameter | 6 µm | exercise assumption |
| Question 5–16 linker | 54 bp | exercise assumption |

---

# 328. Quantitative verification queue

Before quantitative V2 simulation, externally verify:

## DNA

- B-DNA helical repeat under relevant conditions
- base-pair rise
- twist angle
- groove dimensions
- persistence length
- torsional stiffness
- salt dependence
- nucleosome effects on DNA geometry

## Nucleosomes

- nucleosome dimensions
- linker-length distribution
- nucleosome repeat length
- nucleosome occupancy
- histone variant identity
- H1 occupancy
- histone-tail conformational ensembles

## Chromosome polymer

- chromosome territory dimensions
- intermingling
- local chromatin density
- loop-size distributions
- contact-frequency distributions
- lamina-association maps
- nucleolar-association maps

## SMC

- cohesin extrusion speed
- residence time
- ATP turnover
- processivity
- condensin I/II timing
- loop-size distributions
- cellular copy numbers

## Chromatin state

- histone-mark distributions
- remodeler copy numbers
- modification kinetics
- heterochromatin compaction
- euchromatin density
- barrier factors
- cell-type dependence

## Nucleolus

- rDNA copy number
- nucleolar number per cell type
- protein/RNA concentration
- exchange kinetics
- condensate material properties

---

# 329. Source-era caution register

The following source statements should **not** become timeless hard-coded universal numbers without verification:

```text
~25,000 human genes

~40% heterochromatin

~60% euchromatin

~20% active/open euchromatin

>60 million histone molecules per human cell

~1 remodeler per 5 nucleosomes

~100 cataloged histone modifications

specific genome-size comparisons

exact chromosome counts used as comparative examples
```

They remain valid as Chapter 5 source statements.

---

# 330. Science-canon conflict rule

If later high-quality evidence disagrees with a Chapter 5 teaching model:

```text
do not delete the source model
```

Instead preserve:

```text
SOURCE_MODEL
vs
EXTERNAL_VERIFIED
```

and make rendering behavior depend on the selected scientific layer.

---

# 331. 30-nm-fiber conflict rule

This is particularly important.

Store separately:

```yaml
source_model:
  chapter_5:
    chromatin_fiber_stage_nm: 30

project_default_in_vivo_model:
  organization: heterogeneous_irregular_nucleosome_polymer
  regular_30nm_fiber_required: false
```

---

# 332. Chromosome is a polymer, not an icon

The complete chapter implies:

```text
chromosome
=
one continuous DNA polymer
+
proteins
+
dynamic three-dimensional organization
+
cell-cycle-dependent state
```

not:

```text
colored X
```

---

# 333. DNA is information plus mechanics

The same molecule simultaneously has:

- sequence
- polarity
- base-pairing rules
- helical geometry
- stiffness/flexibility
- wrapping
- loop topology
- nuclear location
- regulatory accessibility

### Project rule

Do not create separate unlinked "sequence DNA" and "visual DNA" worlds.

---

# 334. Chromatin state is multiscale

A chromatin change can propagate:

```text
chemical residue state
→ nucleosome interaction state
→ local accessibility
→ polymer compaction
→ gene activity
→ cell identity
```

This is one of the core multiscale causal chains of The Seamless Cell.

---

# 335. Chapter 5 core causal model

```text
DNA SEQUENCE
stores information

COMPLEMENTARY BASE PAIRING
allows reliable copying

DOUBLE-HELIX GEOMETRY
provides stable physical storage

CHROMOSOMES
organize enormous DNA molecules

NUCLEOSOMES
compact DNA at the first major eukaryotic level

CHROMATIN LOOPS
organize interphase chromosomes in 3D

COHESIN
helps extrude/organize interphase loops

CONDENSIN II + CONDENSIN I
reorganize loops for mitotic compaction

CHROMATIN REMODELERS
move DNA/nucleosomes to change accessibility

HISTONE MODIFICATIONS
alter interactions and recruit regulators

HETEROCHROMATIN/EUCHROMATIN
represent families of chromatin states

READER–WRITER SYSTEMS
can propagate chromatin states

X INACTIVATION
shows chromosome-scale stable silencing

EPIGENETIC INHERITANCE
reconstructs chromatin patterns after DNA replication
```

---

# 336. Question-derived consistency tests

A future implementation fails Chapter 5 review if it implies:

```text
DNA contains ribose
FALSE

DNA sequence has no polarity
FALSE

5′ and 3′ ends differ only by terminal base identity
FALSE

DNA strands run parallel in the normal double helix
FALSE

A normally pairs with C
FALSE

G normally pairs with T
FALSE

A–T has three H bonds in this source model
FALSE

G–C has two H bonds in this source model
FALSE

0.34 nm is the overall size of a base pair
FALSE

DNA double helix is left-handed in the source's canonical model
FALSE

DNA diameter is ~11 nm
FALSE

a chromosome is visible as an X throughout interphase
FALSE

a duplicated X-shaped chromosome contains only one DNA molecule
FALSE

homologous chromosomes are the same thing as sister chromatids
FALSE

chromosome territory is membrane-bounded
FALSE

homologous chromosomes must occupy the same nuclear location
FALSE

nucleolus is surrounded by a lipid bilayer
FALSE

nucleosome core contains H1
FALSE

nucleosome core contains one copy each of H2A/H2B/H3/H4
FALSE

core DNA length is ~200 bp exactly
FALSE

147 bp is the complete universal nucleosome repeat length
FALSE

nucleosome DNA wraps around histone core in a right-handed supercoil
FALSE IN SOURCE DESCRIPTION

all linker DNAs have identical length
FALSE

all in-vivo chromatin is beads-on-a-string
FALSE

all in-vivo chromatin is a regular 30-nm solenoid
NOT SUPPORTED AS PROJECT DEFAULT

cohesin loops form without ATP-dependent machinery
FALSE IN SOURCE MODEL

the exact SMC inchworm mechanism is experimentally settled
FALSE

condensin I forms the initial large loops before condensin II in the source model
FALSE

histone acetylation universally means transcription ON
OVERGENERALIZATION

all histone methylation means repression
FALSE

one histone mark alone determines gene activity
OVERGENERALIZATION

all euchromatin is transcriptionally active
FALSE

all heterochromatin is permanently fixed
FALSE

heterochromatin cannot spread
FALSE

heterochromatin spreading is irreversible
FALSE

barrier DNA is a literal physical wall in the nucleus
FALSE

X inactivation deletes one X chromosome
FALSE

Barr body is an extra chromosome
FALSE

every female cell independently re-chooses inactive X after every division
FALSE

epigenetic inheritance changes the DNA sequence
FALSE

daughter chromatin inherits only newly synthesized histones
FALSE

DNA genetic-material conclusion came from one experiment only
FALSE
```

---

# 337. Question 5–1 concept test

Polarity comes from the chemical asymmetry of the sugar-phosphate backbone.

It does **not** arise because the two ends contain different bases.

---

# 338. Question 5–5 complement logic

To construct the complementary strand:

1. replace each base with its partner
2. reverse orientation relative to the original

Example logic:

```text
original:      5′ ... 3′
complement:    3′ ... 5′
```

If the complementary strand is rewritten conventionally 5′→3′, reverse the sequence order.

---

# 339. Chargaff-style composition logic

For ordinary double-stranded DNA:

```text
%A = %T
%G = %C
```

because every A pairs with T and every G pairs with C.

This is a direct consequence of complementary pairing.

---

# 340. Restriction-site sequence-frequency logic from Question 5–5

For a random sequence with equal nucleotide frequencies, a specific sequence of length `n` has idealized frequency:

```text
(1/4)^n
```

and expected occurrence roughly once per:

```text
4^n bases
```

### `SOURCE_DERIVED`

Actual genomes are nonrandom and nucleotide frequencies vary.

---

# 341. Question 5–8 melting logic

For comparable lengths under the chapter's simplified framework:

- more G–C pairing generally favors higher melting temperature
- longer duplexes generally require more total disruption than much shorter comparable duplexes

### `DO_NOT_INFER`

Do not use one rule alone as a quantitative melting-temperature calculator.

---

# 342. Question 5–10 binary information logic

Because one DNA position can encode four alternatives:

```text
A, T, G, C
```

an idealized encoding needs:

```text
2 binary bits
```

per base-pair identity.

---

# 343. Question 5–11 chromosome-element logic

The chapter expects a normal linear eukaryotic chromosome to contain:

- multiple origins
- two telomeres
- one centromere

It explicitly rejects:

```text
nucleosome core particle diameter = 30 nm
```

The source uses approximately:

```text
11 nm
```

for the core particle.

---

# 344. Question 5–12 relationship map

```text
DNA + chromosomal proteins
→ chromatin

chromatin during interphase
→ interphase chromosome

extensively condensed duplicated chromatin
→ mitotic chromosome

histone octamer + wrapped DNA
→ nucleosome core particle

highly compact interphase chromatin
→ heterochromatin
```

---

# 345. Question 5–13 telomeric silencing logic

A gene moved near a strongly condensed telomeric region can become variably silenced.

White/red sectors in a colony can arise because chromatin state can switch and then be inherited through daughter-cell lineages.

### Project implication

Epigenetic state is probabilistic/dynamic yet heritable over clonal lineages.

---

# 346. Question 5–14 microscopy logic

A nucleus with more:

```text
extended / less densely packed chromatin
```

would generally be expected to have more transcriptionally accessible chromatin than one dominated by dense heterochromatin.

### `DO_NOT_INFER`

Microscopic density alone cannot uniquely specify every gene-expression state.

---

# 347. Question 5–15 handedness logic

A right-handed helix preserves handedness when rotated or turned upside down.

Mirror reflection reverses handedness.

This is the same geometric principle introduced for helices in Chapter 4.

---

# 348. Question 5–16 packing logic

The first nucleosome-level packaging contributes only part of the total:

```text
~10,000-fold
```

mitotic chromosome compaction.

Therefore later chromosome organization cannot be omitted.

---

# 349. Cross-chapter dependencies

## Chapter 2

Provides:

- nucleotide chemistry
- covalent bonds
- hydrogen bonds
- electrostatics

## Chapter 3

Provides:

- ATP hydrolysis
- energetics
- enzyme action

## Chapter 4

Provides:

- protein structure
- allostery
- ATP-driven molecular machines
- scaffold/condensate concepts
- histone-tail modification chemistry foundations

## Chapter 6

Will refine:

- DNA replication
- origin activation
- replication forks
- polymerases
- telomere replication
- DNA repair

## Chapter 7

Will refine:

- transcription
- RNA processing
- genetic code
- translation
- rRNA
- nucleolus/ribosome assembly
- protein synthesis

## Chapter 8

Will refine:

- chromatin regulation
- sequence-specific DNA-binding factors
- enhancer/promoter logic
- chromatin opening
- epigenetic control
- X-inactivation mechanisms

## Chapter 9

Will refine:

- chromosome evolution
- genome-size evolution
- duplication
- rearrangement
- translocations
- comparative genomics

## Chapter 10

Will refine:

- DNA hybridization
- chromosome painting technology
- sequence manipulation
- genome engineering

## Chapter 15

Will refine nuclear-envelope related organization.

## Chapter 16

Will provide signaling inputs that trigger gene-regulatory changes.

## Chapter 17

Will refine:

- nuclear lamina
- cytoskeleton
- motor/structural organization

## Chapter 18

Will refine:

- cell cycle
- cohesin regulation
- condensin activation
- chromosome segregation
- mitotic spindle
- centromere/kinetochore function

---

# 350. Scale Spine scientific contract from Chapter 5

## Tier A — Nucleus

Must show:

- nuclear envelope
- nucleoplasm
- nucleolus
- heterogeneous chromatin
- chromosome territories

Must not show:

- 46 cartoon X-shaped chromosomes floating in interphase

---

# 351. Tier B — Chromosome territory

Must show:

- irregular chromosome occupancy
- internal density variation
- polymer organization
- possible lamina/nucleolar contacts

Must not show:

- hard membrane boundary
- perfectly smooth colored blob

---

# 352. Tier C — Local chromatin organization

Must show:

- looped polymer
- heterogeneous compaction
- interactions
- boundary-constrained loop organization where appropriate

Must not show:

- identical repeated circular loops

---

# 353. Tier D — Nucleosome polymer

Must show:

- nucleosomes
- variable linker paths
- uneven orientation
- realistic local crowding
- histone tails when resolution supports them

Must not show:

- perfect bead necklace
- universal 30-nm solenoid

---

# 354. Tier E — Nucleosome

Must show:

```text
2×H2A
2×H2B
2×H3
2×H4
147 bp wrapped DNA
~1.7 left-handed turns
linker DNA
```

H1 only where context specifies.

---

# 355. Tier F — DNA double helix

Must show:

- two antiparallel strands
- right-handed double helix
- deoxyribose-phosphate backbone
- A–T / G–C pairing
- major groove
- minor groove
- ~2-nm diameter source scale

---

# 356. Tier G — base-pair/nucleotide chemistry

Must show:

- correct bases
- deoxyribose
- phosphate
- phosphodiester linkage
- correct pairing geometry
- base-pair plane orientation

---

# 357. Tier H — atomic

Must preserve:

- covalent connectivity
- element identity
- hydrogen-bond donor/acceptor geometry when visualized
- continuous parent molecule identity

---

# 358. Seamlessness test

A scientifically acceptable zoom should satisfy:

```text
the atom belongs to
the nucleotide that belongs to
the base pair that belongs to
the DNA helix that belongs to
the nucleosome that belongs to
the chromatin polymer that belongs to
the loop that belongs to
the chromosome territory that belongs to
the nucleus of the same cell
```

Anything less is a sequence of disconnected illustrations rather than The Seamless Cell.

---

# 359. Temporal chromosome-state test

The same chromosome entity should support:

```text
interphase extended state
→ replication state
→ duplicated sister-chromatid state
→ mitotic condensed state
→ segregated daughter chromosome state
```

without replacing identity with unrelated scene objects.

---

# 360. Chromosome-state versus representation-state

Separate:

```text
WorldState:
interphase vs mitotic biological state

ViewState:
how much of chromosome is visible
which representation tier is active
whether clipping is used
whether chromosome painting colors are enabled
```

---

# 361. Default reference cell for Chapter 5

For V2's persistent home world:

```text
generic mammalian interphase cell
```

is acceptable visually.

However, quantitative values must be labeled as:

- human-specific
- mammalian representative
- textbook exercise
- species-specific
- externally verified

where applicable.

---

# 362. Species-context rule

Never combine:

```text
human chromosome counts
yeast gene density
muntjac chromosome fusion
E. coli gene numbers
```

into one fictional "generic cell."

Each number retains source organism context.

---

# 363. Provenance rule for chromatin facts

Example:

```yaml
claim:
  "nucleosome core wraps 147 bp DNA"
status: SOURCE_FACT
source: Essential Cell Biology Ch.5

claim:
  "regular 30-nm fiber is universal in vivo"
status: DO_NOT_INFER
source_model_present: true
project_default: false
```

---

# 364. Scientific asset rule for DNA/chromatin

When exact structure matters:

```text
canonical molecular data
→ verified structural coordinates / chemical topology

derived render asset
→ mesh, surface, ribbon, reduced representation
```

Never let a Blender/glTF asset become the canonical scientific truth.

---

# 365. Nucleosome canonical-data rule

If a nucleosome structure is eventually loaded from structural databases, verify:

- histone composition
- DNA length
- species
- histone variants
- missing tails
- engineered mutations
- resolution
- experimental method

before marking it `EXTERNAL_VERIFIED`.

---

# 366. Chromatin-loop evidence rule

Loop geometry should be assigned provenance.

Possible categories:

```text
SOURCE_MODEL
EXPERIMENTAL_INFERENCE
CONTACT_MAP_INFERENCE
LIVE_CELL_OBSERVATION
PROJECT_ASSUMPTION
```

Do not turn a contact-map cartoon into a literal 3D trajectory without caveat.

---

# 367. Nucleolus evidence rule

Separate:

```text
known rDNA locus association
known molecular components
observed condensate behavior
```

from:

```text
aesthetic internal droplet pattern
```

---

# 368. Chromosome-territory evidence rule

Territory shape is not fixed.

It varies with:

- cell type
- cell-cycle state
- chromosome
- nuclear geometry
- local interactions

Therefore territory geometry should be generated as a dynamic occupancy organization, not a species-independent template mesh.

---

# 369. Chapter 5's deepest project lesson

The chapter is not merely about "DNA."

It is about how one molecular object has several simultaneously valid descriptions:

```text
chemical polymer
information string
double helix
protein-bound chromatin
3D polymer
looped chromosome
territory
mitotic segregation unit
epigenetic memory substrate
```

The Seamless Cell must preserve all of them without switching to unrelated worlds.

---

# 370. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 5: “DNA and Chromosomes.”**

Printed pages:

```text
179–208
```

PDF pages reviewed:

```text
214–243
```

Major sections reviewed:

```text
THE STRUCTURE OF DNA

THE STRUCTURE OF EUKARYOTIC CHROMOSOMES

THE REGULATION OF CHROMOSOME STRUCTURE
```

Subsections reviewed:

```text
A DNA Molecule Consists of Two Complementary Chains of Nucleotides

The Structure of DNA Provides a Mechanism for Heredity

Eukaryotic DNA Is Packaged into Multiple Chromosomes

Chromosomes Organize and Carry Genetic Information

Specialized DNA Sequences Are Required for DNA Replication and Chromosome Segregation

Interphase Chromosomes Are Not Randomly Distributed Within the Nucleus

The DNA in Chromosomes Is Highly Condensed

Nucleosomes Are the Basic Units of Eukaryotic Chromosome Structure

Interphase Chromosomes Are Further Organized into Loops by Large Protein Rings

Chromosomes Undergo an Additional Level of Packing at Mitosis

Changes in Nucleosomes Allow Access to DNA

Interphase Chromosomes Contain Both Highly Condensed and More Extended Forms of Chromatin

Heterochromatin Can Spread Along a Chromosome to Silence Nearby Genes

X-Inactivation Represents an Extreme Form of Gene Silencing

Heterochromatin Can Be Inherited by Subsequent Generations of Cells
```

Supporting material reviewed:

```text
Figures 5–1 through 5–36
How We Know: Genes Are Made of DNA
Essential Concepts
Questions 5–1 through 5–16
```

---

# 371. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- deoxyribose terminology
- phosphodiester-linkage description
- 5′/3′ polarity
- strand antiparallelism
- A–T / G–C pairing
- hydrogen-bond counts
- right-handed helix
- 0.34-nm axial-rise wording
- 2-nm DNA diameter
- major/minor grooves
- ~10-bp/turn source value
- gene definition
- RNA-final-product exception
- human genome numbers
- homolog terminology
- chromosome-painting description
- karyotype definition
- yeast genome example
- "junk DNA" caution
- replication origin
- telomere
- centromere
- interphase-versus-mitotic chromosome distinction
- chromosome territories
- nuclear-envelope/lamina attachment
- nucleolar rDNA organization
- chromosome-22 compaction example
- histone abundance
- chromatin definition
- core histone stoichiometry
- 147-bp nucleosomal DNA
- 1.7-turn left-handed wrap
- linker-length range
- nucleosome/core-particle terminology
- 11-nm nucleosome scale
- H1 role
- source 30-nm-fiber caveat
- SMC terminology
- cohesin loop organization
- sequence-specific clamp source terminology
- sister-chromatid cohesion
- condensin I versus II order
- loops-within-loops source model
- ATP-dependent chromatin remodeling
- remodeler abundance
- histone acetyl/phosphate/methyl modifications
- H3 tail values
- H3K9me3 heterochromatin link
- H3K4 source figure gene-expression link
- heterochromatin/euchromatin percentages
- active euchromatin ~20% statement
- reader–writer propagation
- barrier sequence example
- β-globin barrier deletion example
- X-inactivation
- Barr body
- tortoiseshell example
- epigenetic inheritance
- H3/H4 parental-histone inheritance source model
- Griffith experiment
- Avery–MacLeod–McCarty experiment
- Hershey–Chase experiment
- all quantitative-table entries
- all `SOURCE_MODEL` labels
- all `PROJECT_CONTEXT` distinctions
- every `DO_NOT_INFER`
- every Scale Spine constraint

---

# END OF CHAPTER 05 CANON

Recommended repository destination:

```text
science/chapters/05_dna_chromosomes.md
```

Recommended commit message:

```text
science: add Chapter 5 DNA chromosomes canon
```

Do not begin Chapter 6 merely because this file exists.

Chapter 6 will take the persistent DNA entities defined here and add the dynamic molecular machinery for replication, proofreading, telomere replication, damage recognition, and DNA repair.
