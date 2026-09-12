---
title: "The Seamless Cell — Science Canon — Chapter 09"
subtitle: "How Genes and Genomes Evolve"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 9, printed pages 307–344 (PDF approximately pages 342–379)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 09 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 9 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapters 5–8 established:

```text
genome organization
→ DNA replication
→ gene expression
→ gene regulation
```

Chapter 9 adds another dimension:

```text
TIME ACROSS GENERATIONS
```

The genome in a living cell is not an immutable design document. Over generations it can change through mutation, recombination, duplication, exon shuffling, movement of mobile genetic elements, horizontal transfer, and viral processes. Natural selection and genetic drift then determine which variants persist.

The central project principle is:

> **Evolution must never be represented as a cell intentionally inventing what it needs. Variation appears first through molecular events; selection acts afterward on organisms and lineages.**

This chapter must eventually control how The Seamless Cell represents:

- point mutation
- neutral, deleterious, and beneficial variation
- germ-line versus somatic mutation
- inheritance
- gametes
- gene duplication
- unequal crossing-over
- gene families
- pseudogenes
- globin-family evolution
- fetal versus adult globin expression
- whole-genome duplication
- ploidy
- exon shuffling
- protein-domain recombination
- mobile genetic elements
- insertion mutations
- transposons
- transposase
- cut-and-paste transposition
- replicative transposition
- retrotransposons
- reverse transcriptase
- L1 elements
- Alu sequences
- horizontal gene transfer
- bacterial conjugation
- antibiotic-resistance transfer
- natural selection
- purifying selection
- neutral sequence divergence
- homologous genes
- phylogenetic trees
- conserved synteny
- comparative genomics
- conserved coding and regulatory DNA
- gain and loss of genomic DNA
- Fugu genome compression
- small-subunit rRNA comparisons
- three domains of life
- viruses
- viral genome types
- viral host dependence
- RNA-virus replication
- coronavirus replicase
- SARS-CoV-2 genome replication
- retroviruses
- provirus
- integrase
- HIV
- human-genome architecture
- ORFs
- gene prediction
- RNA-Seq evidence
- repetitive DNA
- segment duplications
- human regulatory evolution
- Neanderthal admixture
- SNPs
- de novo mutation
- human genomic individuality

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 9.

## `SOURCE_SCALE`

A numerical value, count, rate, range, time, length, copy number, proportion, or other quantity explicitly supplied by Chapter 9.

## `SOURCE_MODEL`

A schematic or mechanistic model presented by the source.

## `SOURCE_DERIVED`

A direct logical consequence or calculation using source-supported information.

## `SOURCE_TERMINOLOGY`

Terminology used by Chapter 9 and preserved in this source canon.

## `SOURCE_ERA_STATEMENT`

A source statement whose exact numerical value or interpretation may need modern verification before use as a current simulation constant.

## `SOURCE_HYPOTHESIS`

A proposed historical or mechanistic interpretation that the source presents with uncertainty.

## `PROJECT_CONSTRAINT`

A simulation, visualization, architecture, or educational rule derived from the source.

## `VERIFY_QUANT`

A source-supplied number retained here but not yet approved as a precise simulation constant.

## `LATER_CHAPTER_REFINEMENT`

A topic introduced here whose experimental or mechanistic treatment belongs primarily to a later chapter.

## `DO_NOT_INFER`

A hard guardrail against converting an example, source-era estimate, simplified evolutionary reconstruction, or schematic into a universal rule.

---

# 1. Chapter structure

Chapter 9 contains four major sections:

```text
1. GENERATING GENETIC VARIATION

2. RECONSTRUCTING LIFE'S FAMILY TREE

3. MOBILE GENETIC ELEMENTS AND VIRUSES

4. EXAMINING THE HUMAN GENOME
```

Major subsections:

```text
GENERATING GENETIC VARIATION

- In Sexually Reproducing Organisms, Only Changes to the Germ Line Are Passed On to Progeny
- Point Mutations Are Caused by Failures of the Normal Mechanisms for Copying and Repairing DNA
- Mutations Can Also Change the Regulation of a Gene
- DNA Duplications Give Rise to Families of Related Genes
- Duplication and Divergence Produced the Globin Gene Family
- Whole-Genome Duplications Have Shaped the Evolutionary History of Many Species
- Novel Genes Can Be Created by Exon Shuffling
- The Evolution of Genomes Has Been Profoundly Influenced by Mobile Genetic Elements
- Genes Can Be Exchanged Between Organisms by Horizontal Gene Transfer

RECONSTRUCTING LIFE'S FAMILY TREE

- Genetic Changes That Provide a Selective Advantage Are Likely to Be Preserved
- Closely Related Organisms Have Genomes That Are Similar in Organization as Well as Sequence
- Functionally Important Genome Regions Show Up as Islands of Conserved DNA Sequence
- Genome Comparisons Show That Vertebrate Genomes Gain and Lose DNA Rapidly
- Sequence Conservation Allows Us to Trace Even the Most Distant Evolutionary Relationships

MOBILE GENETIC ELEMENTS AND VIRUSES

- Mobile Genetic Elements Encode the Components They Need for Movement
- The Human Genome Contains Two Major Families of Transposable Sequences
- Viruses Can Move Between Cells and Organisms
- Coronaviruses Such as SARS-CoV-2 Use a Special Replicase to Copy Their RNA Genomes
- Retroviruses Reverse the Normal Flow of Genetic Information

EXAMINING THE HUMAN GENOME

- The Nucleotide Sequences of Human Genomes Show How Our Genes Are Arranged
- Differences in Gene Regulation Help Explain How Animals with Similar Genomes Can Be So Different
- The Genome of Extinct Neanderthals Reveals Much About What Makes Us Human
- Genome Variation Contributes to Our Individuality—But How?
```

Supporting material:

```text
Figures 9–1 through 9–38

Table 9–1
Viruses That Cause Human Disease

Table 9–2
Some Vital Statistics for the Human Genome

How We Know:
Counting Genes

Essential Concepts

Questions 9–1 through 9–19
```

---

# 2. Individuals within a species do not have perfectly identical genomes

**Status: `SOURCE_FACT`**

The nucleotide sequence is nearly the same among cells of one organism, but genomes differ among different individuals.

Even:

```text
parent
versus
child
```

do not have identical genome sequences.

---

# 3. Sequence differences increase across evolutionary distance

In general:

```text
same individual
→ almost same sequence across cells

different individuals of one species
→ small sequence differences

different species
→ larger accumulated differences
```

---

# 4. DNA sequence variation underlies biological diversity

The source connects genomic differences to variation ranging from:

- hair color
- eye color
- skin color

to the much larger differences among species.

---

# 5. Common ancestry framing

The chapter describes life as having descended from a common cellular ancestor dating to approximately:

```text
3.5 billion years ago
```

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

---

# 6. Evolution uses inherited material

The chapter's central analogy:

```text
evolution
=
tinkerer more than inventor
```

New genomes generally arise by modifying, duplicating, rearranging, and recombining pre-existing sequence.

### `SOURCE_MODEL`

---

# 7. No routine mechanism creates long arbitrary DNA sequences de novo

The chapter states there is no ordinary natural mechanism that simply generates long stretches of completely novel nucleotide sequence from nothing.

### `DO_NOT_INFER`

This should not be converted into the absolute statement that de novo genes can never arise from previously noncoding DNA.

The chapter's emphasis is that the major mechanisms discussed reuse inherited sequence.

---

# 8. Six major sources of genetic change listed by the chapter

```text
1. mutation within a gene
2. mutation within regulatory DNA
3. gene duplication and divergence
4. exon shuffling
5. transposition of mobile genetic elements
6. horizontal gene transfer
```

---

# 9. Mutation within a gene

A mutation can:

- change nucleotides
- delete nucleotides
- duplicate nucleotides

and thereby alter gene function.

---

# 10. Coding-region mutations can affect more than amino-acid identity

The chapter states a mutation within a gene can alter:

- RNA splicing
- protein stability
- protein activity
- protein localization
- protein interactions

---

# 11. Mutation in regulatory DNA

A mutation outside the coding sequence can change:

```text
when
where
how strongly
```

a gene is expressed.

---

# 12. Regulatory evolution is a major evolutionary mechanism

The chapter emphasizes that organisms can share many protein-coding genes while differing strongly because of changes in the regulation of those genes.

---

# 13. Gene duplication and divergence

Source causal model:

```text
existing gene
→ duplication
→ two copies

copy 1 accumulates mutations
copy 2 accumulates mutations
→ copies can diverge in function or regulation
```

---

# 14. Whole-genome duplication

The source extends duplication from one gene to:

```text
the entire genome
```

---

# 15. Exon shuffling

Two or more existing genes can be broken and rejoined so that a hybrid gene contains exons derived from different ancestors.

---

# 16. Introns facilitate exon shuffling

Recombination can occur within introns surrounding coding exons.

Because introns are removed during splicing:

```text
recombination junctions need not fall precisely at coding boundaries
```

to preserve intact exons.

---

# 17. Mobile genetic-element transposition

Mobile DNA can move between chromosomal locations and can alter:

- coding sequences
- regulatory DNA
- gene duplication
- exon organization
- larger genome arrangement

---

# 18. Horizontal gene transfer

```text
horizontal gene transfer
=
DNA transfer between cells/organisms
outside ordinary parent-to-offspring inheritance
```

---

# 19. Vertical versus horizontal transfer

```text
vertical transfer
parent → progeny

horizontal transfer
organism/cell → another organism/cell
```

---

# 20. Horizontal transfer taxonomic source statement

The chapter says horizontal transfer is:

```text
rare among eukaryotes
common among bacteria
```

### `SOURCE_ERA_STATEMENT`

Do not convert this into "eukaryotes never undergo horizontal transfer."

---

# 21. Asexual inheritance

For a unicellular organism reproducing asexually:

```text
genome replication
→ cell division
→ one genome copy to each daughter cell
```

gives a direct lineage tree.

---

# 22. Sexual inheritance is lineage-restricted

In sexually reproducing multicellular organisms, only specialized reproductive lineages transmit genomic information to future organisms.

---

# 23. Gamete

```text
gamete
=
specialized reproductive cell
```

Examples in the source figure:

- egg
- sperm

---

# 24. Germ line

```text
germ line
=
cell lineage that gives rise to gametes
```

---

# 25. Somatic cell

```text
somatic cell
=
non-germ-line body cell
```

---

# 26. Germ-line mutation can be inherited

Source causal rule:

```text
mutation in germ-line lineage
→ can enter gamete
→ can appear in offspring
```

---

# 27. Somatic mutation normally is not inherited by offspring

A mutation in a somatic cell:

```text
affects that cell and its somatic descendants
```

but does not ordinarily enter the next organismal generation.

---

# 28. Somatic mutation can still matter to the individual

The chapter gives:

```text
cancer
```

as an example of a potentially severe consequence.

---

# 29. Evolutionary sequence history in sexual species is germ-line history

When reconstructing inherited evolutionary change:

```text
the relevant mutations occurred in germ-line lineages
```

---

# 30. Gametes contain half the chromosome number in the source model

Figure 9–3 depicts gametes as containing:

```text
half the number of chromosomes
```

of ordinary body cells.

### `LATER_CHAPTER_REFINEMENT`

Meiosis belongs to Chapter 19.

---

# 31. Fertilization restores a full chromosome complement

Source schematic:

```text
gamete
+
gamete
→ zygote
→ full chromosome set
```

---

# 32. Sex also generates genetic diversity

Fertilization combines genomic material from two parents.

The chapter defers detailed mechanisms to Chapter 19.

---

# 33. Point mutation

```text
point mutation
=
change affecting one nucleotide pair
```

in the chapter's usage.

---

# 34. Origin of point mutations

Point mutations generally arise from rare failures in:

- DNA replication
- DNA repair

---

# 35. Genome maintenance is highly accurate but not perfect

Every nucleotide has a small probability of changing during lineage propagation.

---

# 36. E. coli laboratory division time

**Status: `SOURCE_SCALE`**

The source gives approximately:

```text
20–25 minutes per division
```

under laboratory conditions.

---

# 37. Explosive bacterial population growth enables mutation experiments

The source states that within less than a day one E. coli lineage can generate more descendants than the number of humans on Earth.

### `SOURCE_MODEL`

The point is statistical power, not a universal ecological doubling rate.

---

# 38. Mutation selection experiment population scale

**Status: `SOURCE_SCALE`**

The source discusses cultures containing approximately:

```text
10^9 E. coli cells
```

and a plating experiment with approximately:

```text
10^10 cells
```

---

# 39. E. coli mutation frequency

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The source gives approximately:

```text
3 nucleotide changes
per 10^10 nucleotide pairs replicated
```

---

# 40. E. coli genome size used in mutation-rate discussion

**Status: `SOURCE_SCALE`**

```text
4.6 × 10^6 nucleotide pairs
```

---

# 41. Daughter-sequence fidelity statement

The source states that, given its mutation-rate estimate, approximately:

```text
99.99%
```

of E. coli divisions produce daughters inheriting the same genome sequence as the parent.

### `SOURCE_ERA_STATEMENT`

---

# 42. Human germ-line mutation-rate comparison

The source states the human mutation rate estimated from parent–child genome comparison is about:

```text
one-third the E. coli rate
```

in its chosen units/analysis.

### `VERIFY_QUANT`

---

# 43. DNA-maintenance conservation

The chapter interprets broadly similar mutation-rate scales as evidence that genome-integrity mechanisms are deeply conserved.

---

# 44. Selection experiment logic

Random mutations arise:

```text
before
```

the selective environment identifies them.

Example:

```text
large bacterial population
→ random variants already exist
→ antibiotic/nutrient challenge applied
→ rare variants capable of survival expand
```

---

# 45. Selection does not instruct the mutation

### Hard project rule

Never animate:

```text
antibiotic appears
→ bacterium intentionally mutates resistance gene
```

The correct chapter logic is:

```text
mutation first
selection afterward
```

---

# 46. His reversion experiment

The source describes E. coli carrying a disabling point mutation in a:

```text
His gene
```

required for histidine biosynthesis.

---

# 47. Original His mutation

Figure 9–5 source sequence change:

```text
G-C
→ A-T
```

creates a premature stop signal.

---

# 48. Histidine-supplied condition

If histidine is supplied externally:

```text
His mutant bacteria
can still grow and divide
```

---

# 49. Histidine-free selection

When plated without histidine:

```text
most mutant cells fail
rare revertants survive
```

---

# 50. Genetic reversion

The source describes a second mutation restoring:

```text
A-T
→ G-C
```

at the critical site.

---

# 51. Reversion restores enzyme production

The restored gene allows synthesis of the enzyme required for histidine production.

---

# 52. Mutation classification

A point mutation may be:

```text
deleterious
neutral
beneficial
```

with respect to organismal fitness in a given context.

---

# 53. Most point mutations are not necessarily dramatic

The chapter states many mutations have no detectable effect on:

- appearance
- viability
- reproductive capacity

---

# 54. Neutral intronic variation

Much intron sequence can tolerate substitutions without functional consequence.

### `DO_NOT_INFER`

This is not equivalent to:

```text
all intronic sequence is functionless
```

Chapter 9 later discusses conserved noncoding DNA.

---

# 55. Synonymous coding mutation

A third-codon-position change can leave the encoded amino acid unchanged.

---

# 56. Functionally tolerated amino-acid replacement

A coding mutation can sometimes change the amino acid yet still leave protein function effectively unchanged.

---

# 57. Regulatory mutation can cause major phenotype

A single base-pair change in a control element can strongly alter gene output.

---

# 58. Malaria-resistance source example

The chapter describes a point mutation that alters expression of a cell-surface receptor used by:

```text
Plasmodium vivax
```

to bind red blood cells.

---

# 59. Malaria-resistance causal chain

Source model:

```text
regulatory mutation
→ receptor not produced in red blood cells
→ parasite cannot use that receptor normally
→ resistance to infection
```

---

# 60. Lactase persistence

The chapter uses adult lactose digestion as a regulatory-evolution example.

---

# 61. Ancestral source state

The chapter states ancestral adults typically ceased high lactase expression after infancy.

---

# 62. Cattle domestication time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source gives roughly:

```text
10,000 years ago
```

---

# 63. Lactase-persistence mutations

The source says point mutations in regulatory DNA allow:

```text
lactase expression to persist into adulthood
```

---

# 64. Independent lactase-persistence variants

Figure 9–6 describes:

```text
two independent point mutations
```

associated with adult lactase expression in:

- northern Europe
- central Africa

---

# 65. Environmental selection on lactase persistence

Availability of cow's milk gave adult lactose digesters a selective nutritional advantage in some populations.

---

# 66. Regulatory mutation can spread rapidly

The lactase-persistence example demonstrates large population-frequency change in a relatively short evolutionary period.

---

# 67. Gene duplication as a major source of new genes

The source describes gene duplication as perhaps the most important mechanism for generating new genes from old ones.

---

# 68. Redundancy enables divergence

After duplication:

```text
one copy can preserve ancestral function
while another copy accumulates mutations
```

making novel specialization more tolerable.

---

# 69. Gene family

```text
gene family
=
set of related genes derived from ancestral duplication events
```

---

# 70. Bacillus subtilis source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source says nearly:

```text
half
```

of B. subtilis genes have at least one obvious relative elsewhere in the genome.

---

# 71. Homologous recombination can generate duplication

Gene duplication can result from misaligned recombination between similar sequences.

---

# 72. Normal crossover alignment

Ordinary homologous crossover occurs between corresponding homologous chromosome regions and generally preserves gene order.

---

# 73. Unequal crossing-over

If repeated sequences on homologous chromosomes misalign:

```text
crossover occurs at non-equivalent positions
→ one product gains a duplication
→ other product loses the corresponding gene
```

---

# 74. Repeated DNA can promote misalignment

Short similar sequences flanking a gene can provide homologous substrates for unequal crossover.

---

# 75. Mobile-element remnants can provide repeated homology

Figure 9–7 notes repeated sequences can be remnants of abundant mobile genetic elements.

---

# 76. Germ-line unequal crossover can be inherited

If unequal crossover occurs in the germ line:

```text
long and short chromosome variants
can enter gametes
```

---

# 77. Loss of essential gene is strongly selected against

If the shortened chromosome lacks an essential gene, the source states it will ultimately disappear from the population.

---

# 78. Tandem gene arrays

Repeated unequal crossover can produce:

```text
serial arrays of closely related genes
```

---

# 79. Globin family as duplication/divergence example

The source argues modern globins share:

- amino-acid-sequence similarity
- structural similarity

consistent with common ancestry.

---

# 80. Simple single-chain globin source scale

**Status: `SOURCE_SCALE`**

The chapter describes a present-day simple globin of about:

```text
150 amino acids
```

in various marine worms, insects, and primitive fish.

---

# 81. Single-chain globin function

The source example carries oxygen and binds:

```text
one oxygen molecule
```

through its heme group.

---

# 82. Vertebrate adult hemoglobin

Mammalian adult hemoglobin contains:

```text
2 α-globin chains
+
2 β-globin chains
```

---

# 83. α2β2 hemoglobin

The four-chain hemoglobin molecule has:

```text
4 oxygen-binding sites
```

---

# 84. Cooperative oxygen binding

Interactions among subunits permit an allosteric transition that supports cooperative oxygen binding and release.

---

# 85. Globin ancestral duplication time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source estimates the α/β ancestral duplication at approximately:

```text
500 million years ago
```

---

# 86. α- and β-globin divergence

Source model:

```text
ancestral globin gene
→ duplication
→ mutations accumulate independently
→ α-globin lineage
+
β-globin lineage
```

---

# 87. β-like globin duplication

Later duplications within the β family produced distinct β-like genes expressed at different developmental stages.

---

# 88. Fetal hemoglobin

The source states fetal hemoglobin has:

```text
higher oxygen affinity than adult hemoglobin
```

helping oxygen transfer from mother to fetus.

---

# 89. Globin specialization occurs at protein and regulatory levels

Different globin-family members have evolved differences in:

- protein oxygen-binding properties
- developmental expression timing
- expression strength

---

# 90. Pseudogene

```text
pseudogene
=
DNA sequence resembling a functional gene
but disabled by accumulated mutations
```

---

# 91. Globin clusters contain pseudogenes

Not every duplicated globin copy remained functional.

---

# 92. Duplication is usually not automatically beneficial

The source explicitly notes most duplications do not become successful new functional genes.

---

# 93. Human β-globin cluster location

The source places the β-globin genes on:

```text
chromosome 11
```

---

# 94. Human α-globin cluster location

The source places the α-globin genes on:

```text
chromosome 16
```

---

# 95. α/β cluster separation event

**Status: `SOURCE_SCALE` / `SOURCE_HYPOTHESIS`**

The source proposes a chromosome breakage/translocation event approximately:

```text
300 million years ago
```

separated α- and β-globin loci.

---

# 96. γG and γA relationship

The source states fetal γG and γA genes are more similar to one another than either is to adult β, indicating a more recent duplication between them.

---

# 97. δ-globin

The source describes:

```text
δ-globin
```

as encoding a minor adult β-like globin form.

---

# 98. Whole-genome duplication in vertebrate ancestry

The source says early vertebrate evolution appears to include:

```text
two successive whole-genome duplications
```

---

# 99. Four-copy source model

Two successive doublings imply:

```text
1 ancestral copy
→ 2
→ 4
```

for many loci.

---

# 100. Additional duplications in some fish lineages

The source mentions salmon and carp families, including zebrafish, as lineages with evidence for another duplication, producing an:

```text
eightfold multiplicity
```

in the simplified historical model.

### `SOURCE_ERA_STATEMENT`

---

# 101. Ancient WGD history is obscured by gene loss

Following whole-genome duplication:

```text
many extra copies are later deleted/inactivated
```

making ancient events harder to reconstruct.

---

# 102. Xenopus ploidy diversity

The chapter states closely related Xenopus species include:

- diploid
- tetraploid
- octoploid

forms.

---

# 103. Whole-genome duplication mechanism

The source gives a simple mechanism:

```text
genome replicated
+
cell division fails
in germ-line lineage
→ chromosome-set doubling
```

---

# 104. Genome doubling can become heritable

If the doubled germ-line cell proliferates:

```text
polyploid genome
→ germ-line descendants
→ potential offspring
```

---

# 105. Polyploid crops

The source lists examples:

```text
4N:
apple
potato

6N:
wheat
kiwi

8N:
sugarcane
strawberry
```

---

# 106. Seedless grapes

The chapter states whole-genome duplication can cause sterility, contributing to seedless grape cultivation.

---

# 107. Potato chromosome count source example

Figure 9–10 depicts a tetraploid potato with:

```text
4 copies
of each of 12 chromosomes
```

---

# 108. Plant breeding can select polyploid phenotypes

Although genome duplication arises randomly, breeders can propagate variants with desirable agricultural traits.

---

# 109. Exon shuffling operates at domain scale

Protein domains often correspond roughly to individual exons.

Thus exon movement can combine pre-existing functional modules.

---

# 110. Exon-shuffling recombination occurs in introns

Source model:

```text
gene A intron
+
gene B intron
→ recombination
→ hybrid gene
with intact exons from A and B
```

---

# 111. Modern proteins can be mosaics

The source illustrates modern proteins with combinations of domains assembled during evolution.

Examples shown:

- urokinase
- chymotrypsin
- EGF
- factor IX
- plasminogen

---

# 112. Protein-domain source size estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter proposes many reusable protein-domain exons encode roughly:

```text
30–50 amino acids
```

---

# 113. Human protein-coding-gene source estimate in exon-shuffling section

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

```text
~20,000 protein-coding genes
```

---

# 114. "Universal parts list" model

The source proposes much protein structural diversity may derive from recombination of a smaller set of reusable domains.

### `SOURCE_MODEL`

---

# 115. Mobile genetic element

```text
mobile genetic element
=
DNA sequence capable, or ancestrally capable, of moving
to another genomic location
```

---

# 116. Mobile genetic elements can be genomic parasites

The source calls many such elements:

```text
parasitic DNA sequences
```

because they can propagate for their own replication rather than host benefit.

---

# 117. Mobile-element insertion can disrupt coding DNA

If an element inserts into a coding sequence:

```text
open reading frame/protein function
can be destroyed
```

---

# 118. Hemophilia insertion example

The chapter states some human hemophilia mutations arise through mobile-element insertion into a required gene.

---

# 119. Mobile elements can alter regulatory DNA

Insertion into:

- promoter
- enhancer
- other regulatory region

can change gene-expression timing or location.

---

# 120. Mobile elements can carry regulator-binding sites

An inserted element may introduce new transcription-regulator binding sequences near a gene.

---

# 121. Regulatory rewiring by insertion

Source causal model:

```text
mobile element with regulatory sites
→ inserts near host gene
→ host gene becomes responsive to new regulators
→ expression pattern changes
```

---

# 122. Drosophila body-plan source example

Figure 9–12 shows a mobile-element-associated regulatory mutation in which:

```text
antennae are replaced by legs
```

due to inappropriate activation of leg-development genes.

---

# 123. Figure 9–12 image scale

**Status: `SOURCE_SCALE`**

```text
1 mm
```

---

# 124. Teosinte-to-corn source example

The source states modern corn was bred from:

```text
teosinte
```

and that one important change involved insertion of a mobile genetic element near a seed-development gene.

---

# 125. Teosinte phenotype

The source describes:

```text
many ears
small hard seeds
```

---

# 126. Modern corn phenotype

The source contrasts:

```text
fewer cobs
many plump soft/sweet kernels
```

---

# 127. Mobile elements can drive genome rearrangement

Repeated mobile-element copies provide homologous sequences for recombination.

---

# 128. β-globin duplication connection

The source proposes abundant mobile-element copies contributed substrates for crossover events that expanded β-globin clusters.

---

# 129. Horizontal gene transfer between species

DNA can enter an organism from a different species and become part of the recipient genome.

---

# 130. Bacterial conjugation

One mechanism of bacterial horizontal transfer is:

```text
conjugation
```

---

# 131. Sex pilus

Figure 9–14 shows a donor bacterial cell capturing a recipient using a:

```text
sex pilus
```

through which DNA is transferred.

---

# 132. Sex pilus is distinct from flagellum

The source figure explicitly distinguishes:

```text
sex pilus
```

from:

```text
flagellum
```

---

# 133. Conjugation figure scales

**Status: `SOURCE_SCALE`**

Figure 9–14 includes:

```text
2 µm
0.5 µm
```

scale bars.

---

# 134. E. coli acquired-DNA source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter states E. coli acquired about:

```text
one-fifth of its genome
```

from other bacterial species during the past:

```text
~100 million years
```

---

# 135. Horizontal transfer spreads antibiotic resistance

Resistance genes can cross species boundaries and give recipient cells a selective advantage under antibiotic exposure.

---

# 136. Gonorrhea source example

The source states most strains of:

```text
Neisseria gonorrhoeae
```

are resistant to penicillin, which is therefore no longer the primary therapy in the chapter's description.

### `SOURCE_ERA_STATEMENT`

Do not use this file as a clinical-treatment guide.

---

# 137. Homologous gene

```text
homologous genes
=
genes similar in sequence because of shared ancestry
```

---

# 138. Deep homology

Recognizable homologs of many human genes occur in:

- worms
- fruit flies
- yeasts
- bacteria

---

# 139. Human/worm/fly homolog source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter says approximately:

```text
50%
```

of genes in C. elegans, Drosophila, and humans have clear homologs in one or both of the other two species in the stated comparison.

---

# 140. Worm/fly/vertebrate divergence source time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter gives:

```text
>600 million years
```

---

# 141. Natural selection follows variation

The chapter frames molecular evolution as:

```text
random mutation/variation
+
non-random differential survival/reproduction
```

---

# 142. Beneficial mutation

A variant increasing reproductive success is more likely to be perpetuated.

---

# 143. Deleterious mutation

A variant seriously compromising survival or reproduction tends to be removed from the population.

---

# 144. Neutral mutation

A selectively neutral variant may:

- persist
- disappear

depending on population processes and linkage.

---

# 145. Neutral mutation is useful as an evolutionary clock

When sequence is not constrained by selection, substitutions can accumulate more freely.

Their accumulation helps estimate evolutionary divergence.

---

# 146. Conservation indicates functional constraint

A sequence that changes much more slowly than unconstrained DNA is likely to be biologically important.

---

# 147. Purifying selection

```text
purifying selection
=
elimination of variants that damage an important function
```

---

# 148. Highly conserved genes

The source gives examples such as:

- RNA polymerases
- core metabolic enzymes

---

# 149. Conservation does not mean sequence never mutates

Mutations still arise.

Purifying selection removes harmful variants from surviving lineages.

---

# 150. Phylogenetic tree

```text
phylogenetic tree
=
diagram representing inferred evolutionary relationships
among organisms or sequences
```

---

# 151. Phylogenetic proximity

More similar sequences generally imply a more recent common ancestor, when comparing appropriate homologous sequences.

---

# 152. Human–chimp relationship

The chapter identifies chimpanzees as the closest living higher-primate relatives to humans in the source figure.

---

# 153. Human chromosome 2

The source states human chromosome 2 arose by fusion of two chromosomes that remain separate in:

- chimpanzee
- gorilla
- orangutan

---

# 154. Human/chimp genome difference source estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Figure 9–15 gives roughly:

```text
1.2% nucleotide-sequence difference
```

in the comparison used.

---

# 155. Higher-primate ancestor source estimate

The figure describes each lineage as having accumulated roughly:

```text
1.5%
```

sequence change from the common higher-primate ancestor in the displayed reconstruction.

### `SOURCE_MODEL`

---

# 156. Human/orangutan source difference

The source says humans and orangutans differ by slightly more than:

```text
3%
```

in the figure's sequence comparison.

---

# 157. Ancestral sequence reconstruction

If human and chimp sequences agree at a site, the common-ancestor base is inferred to likely match that shared state.

If they differ, an outgroup such as gorilla can be used as a tiebreaker.

---

# 158. Leptin example

Figure 9–16 compares human and chimp sequence encoding mature:

```text
leptin
```

---

# 159. Leptin function

The source identifies leptin as a hormone regulating:

- food intake
- energy utilization

---

# 160. Leptin coding-sequence difference in figure

**Status: `SOURCE_SCALE`**

Among the first:

```text
300 nucleotides
```

shown, only:

```text
5 nucleotides
```

differ between human and chimp sequences.

---

# 161. Leptin amino-acid consequence

The source states only:

```text
1
```

of those shown nucleotide differences changes the amino-acid sequence.

---

# 162. Unshown leptin segment

The last:

```text
141 nucleotides
```

of the mature leptin coding region are stated to be identical between human and chimp in the source example.

---

# 163. Alu positional conservation in human and chimp

The source states each genome contains around:

```text
1 million Alu copies
```

and more than:

```text
99%
```

are in corresponding positions.

---

# 164. Interpretation of shared Alu positions

Most such insertions occurred:

```text
before
human and chimp lineages diverged
```

---

# 165. Human/mouse divergence source time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

```text
~90 million years ago
```

---

# 166. Human and mouse share most genes

The chapter states their genomes contain practically the same genes despite extensive sequence and structural divergence.

---

# 167. Mobile-element locations diverge faster than core genes

Human and mouse contain related mobile-element families, but copies now occupy different positions because movement/proliferation continued independently.

---

# 168. β-globin cluster comparison

Figure 9–17 compares homologous β-globin regions in:

- human
- mouse

---

# 169. Human β-like functional genes in figure

The figure shows:

```text
5 functional β-globin-like genes
```

in the human region.

---

# 170. Mouse β-like functional genes in figure

The figure shows:

```text
4 functional β-globin-like genes
```

in the compared mouse region.

---

# 171. Figure 9–17 genomic scale

**Status: `SOURCE_SCALE`**

```text
10,000 nucleotide pairs
```

scale marker.

---

# 172. Mobile-element depletion from essential coding regions

The figure attributes absence of disruptive insertions inside globin coding regions to:

```text
purifying selection
```

---

# 173. Intron insertion exception

A mobile element can be tolerated inside an intron if it does not disrupt essential gene function.

---

# 174. Chromosome break-and-join source estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter estimates about:

```text
180 chromosome break-and-join events
```

separate human and mouse chromosome organizations across roughly:

```text
75 million years
```

in the cited comparison.

---

# 175. Centromere-position comparison

The source notes:

```text
human:
many centromeres near chromosome middle

mouse:
centromeres near chromosome ends
```

in its broad comparison.

---

# 176. Conserved synteny

```text
conserved synteny
=
corresponding genes remain in the same order/block
in two descendant genomes
```

---

# 177. Human/mouse conserved-synteny source estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

More than:

```text
90%
```

of the mouse and human genomes can be partitioned into corresponding conserved-synteny regions in the source.

---

# 178. Human/mouse nucleotide divergence source estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Within approximately 90 million years:

```text
~50% of nucleotides changed
```

in the alignment framework discussed.

---

# 179. Sequence divergence is highly nonuniform

Some genome segments differ greatly.

Others remain nearly identical because of functional constraint.

---

# 180. Coding exons are often more conserved than adjacent introns

Figure 9–18 shows stronger conservation in leptin-coding sequence than in neighboring intronic DNA.

---

# 181. Conserved noncoding DNA can also be functional

Conserved sequence outside coding exons can represent:

- regulatory DNA
- functional noncoding RNA
- other unknown functions

---

# 182. Mammalian conserved-DNA source estimate

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter says roughly:

```text
4.5% of the human genome
```

is highly conserved across many mammals.

---

# 183. Protein-coding fraction of conserved DNA

The source states less than:

```text
one-quarter
```

of that highly conserved 4.5% encodes protein.

---

# 184. Conserved sequence is evidence, not proof, of function

### Hard project rule

Conservation strongly suggests constraint, but the exact function of many conserved sequences remains unknown.

---

# 185. Fish–mammal divergence time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source gives approximately:

```text
400 million years
```

---

# 186. Human and fish retain recognizable homologs

Despite deep divergence, most human genes can still be matched to fish homologs.

---

# 187. Some regulatory sequences are conserved from fish to mammals

Deeply conserved noncoding sequence can reveal ancient regulatory function.

---

# 188. Vertebrates have broadly similar gene counts but different genome sizes

The source emphasizes:

```text
gene number
≠
genome size
```

---

# 189. Mammalian genome scale

**Status: `SOURCE_SCALE`**

Human, dog, and mouse are described as around:

```text
3 × 10^9 nucleotide pairs
```

---

# 190. Chicken genome size relation

The source says the chicken genome is approximately:

```text
one-third
```

the size of those mammalian genomes.

---

# 191. Fugu genome

Figure 9–19 gives:

```text
400 million nucleotide pairs
```

for Fugu rubripes.

---

# 192. Fugu versus mammal genome size

The source describes Fugu as approximately:

```text
one-tenth
```

the size of mammalian genomes.

---

# 193. Fugu versus zebrafish

Figure 9–19 states Fugu is approximately:

```text
one-quarter
```

the size of the zebrafish genome.

---

# 194. Fugu still has nearly the same genes as zebrafish

Genome compression is largely in:

- introns
- repetitive DNA
- other noncoding sequence

rather than wholesale loss of core genes.

---

# 195. Fugu intron positions are conserved

The source says positions of most Fugu introns align with mammalian intron positions.

---

# 196. Intron architecture is evolutionarily old

The conservation of intron positions implies much vertebrate intron structure existed in the fish–mammal common ancestor.

---

# 197. Genome size is dynamic

Small DNA blocks are:

- inserted
- deleted

at substantial rates over evolutionary time.

---

# 198. Fugu compression source hypothesis

The chapter proposes Fugu became compact because:

```text
DNA loss > DNA gain
```

over long periods.

### `SOURCE_HYPOTHESIS`

---

# 199. Purifying selection leaves essential sequence behind

When sequence loss is tolerated it can disappear; constrained regions remain.

---

# 200. Small-subunit rRNA as deep evolutionary marker

The chapter uses the gene encoding:

```text
small-subunit ribosomal RNA
```

to infer deep relationships.

---

# 201. Why small-subunit rRNA is useful

It is:

- present in all cellular life
- functionally essential
- highly conserved
- old

---

# 202. Figure 9–20 species

The source compares sequence from:

```text
Methanococcus jannaschii
archaeon

Escherichia coli
bacterium

Homo sapiens
eukaryote
```

---

# 203. Three domains

The source's phylogenetic analysis recognizes:

```text
Bacteria
Archaea
Eukaryotes
```

---

# 204. Prokaryotes are not one evolutionary branch

The rRNA tree revealed bacteria and archaea as deeply distinct lineages.

---

# 205. Visible organisms are a small fraction of life's diversity

Animals, plants, and visible fungi occupy only a limited portion of the molecular tree of life.

---

# 206. Microbial biomass source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source states microbes account for about:

```text
20%
```

of Earth's living mass, versus approximately:

```text
0.4%
```

for animals.

---

# 207. Many microbes cannot be cultured conventionally

The chapter notes environmental DNA sequencing reveals diversity inaccessible through laboratory culture alone.

---

# 208. Mobile elements operate near the "edge" of life

The source describes transposable elements and viruses as genetic parasites that can replicate/move yet are not treated as autonomous cellular life.

---

# 209. Most mobile elements in modern genomes are fossils

Many copies have accumulated mutations that prevent further movement.

---

# 210. Human mobile-element fraction

**Status: `SOURCE_SCALE`**

Nearly:

```text
half of the human genome
```

is derived from mobile genetic elements in the source.

---

# 211. Transposon

```text
transposon
=
mobile genetic element
```

in the chapter's broad terminology.

---

# 212. DNA-only transposon

A:

```text
DNA-only transposon
```

moves as DNA rather than through an RNA intermediate.

---

# 213. Cut-and-paste transposition

Source mechanism:

```text
transposon excised from donor DNA
→ donor DNA broken
→ donor repaired
→ transposon inserted into target DNA
```

---

# 214. Replicative transposition

Source mechanism:

```text
transposon copied
→ original remains at donor site
→ copy inserts at target site
```

---

# 215. Donor and target can be the same or different DNA molecules

Figure 9–22 explicitly allows either case.

---

# 216. Individual transposon classes generally use one mechanism

The source says most transposons use:

- cut-and-paste
or
- replicative

though some can use either.

---

# 217. Transposase

```text
transposase
=
enzyme that catalyzes transposon movement
```

---

# 218. Transposase recognizes element-specific terminal DNA

Each transposase acts on characteristic sequences encoded at/within its mobile element.

---

# 219. Transposons can carry accessory genes

Some elements contain genes beyond transposition machinery.

---

# 220. Antibiotic-resistance cargo

Figure 9–23 shows:

```text
AmpR
```

as an example of a resistance gene carried by a bacterial transposon.

---

# 221. IS3 and Tn3 source examples

Figure 9–23 depicts:

```text
IS3
Tn3
```

as bacterial DNA-only transposons.

---

# 222. Tn3 accessory gene

The figure shows Tn3 carrying:

```text
AmpR
```

along with its transposase gene.

---

# 223. Mobile-element length source marker

Figure 9–23 includes an approximate scale:

```text
~2000 nucleotide pairs
```

---

# 224. Misrecognition of transposon ends can mobilize host DNA

If two similar transposons lie near each other:

```text
transposase can pair one end from each element
→ intervening chromosomal DNA is excised
→ host sequence moves with mobile element
```

---

# 225. Exon transposition source model

Figure 9–24 shows this accident transferring:

```text
an exon from gene A
into gene B
```

---

# 226. Mobile elements can create new gene architectures

The inserted host fragment can produce a hybrid gene.

---

# 227. Retrotransposon

```text
retrotransposon
=
mobile element that copies itself through an RNA intermediate
```

---

# 228. Retrotransposition information flow

```text
DNA
→ RNA
→ DNA
→ genomic insertion
```

---

# 229. Reverse transcriptase

```text
reverse transcriptase
=
DNA polymerase capable of using RNA as template
```

---

# 230. Retrotransposon is copied, not simply relocated

Because the donor copy remains:

```text
each successful retrotransposition
can increase copy number
```

---

# 231. L1 element

```text
L1
=
LINE-1
=
long interspersed nuclear element
```

---

# 232. L1 transcription

Host RNA polymerase transcribes L1 into RNA.

---

# 233. L1 encodes reverse transcriptase

The source states the L1 element provides the reverse-transcriptase activity needed for its own propagation.

---

# 234. L1 human-genome fraction

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

```text
~15%
```

of the human genome.

---

# 235. Most L1 copies are inactive

Most have accumulated mutations preventing further transposition.

---

# 236. Some L1 copies remain mobile

A small subset retain transposition capacity.

---

# 237. L1 insertion hemophilia example

The source describes a child whose Factor VIII gene was disrupted by an L1 insertion arising in a parental germ-line cell.

---

# 238. Alu sequence

```text
Alu
=
abundant human retrotransposon-derived sequence
```

---

# 239. Alu copy number

**Status: `SOURCE_SCALE`**

Approximately:

```text
1 million copies
```

---

# 240. Alu human-genome fraction

**Status: `SOURCE_SCALE`**

Approximately:

```text
10%
```

---

# 241. Alu does not encode its own reverse transcriptase

It depends on enzymatic machinery supplied in trans by the cell/other elements.

---

# 242. L1 and Alu are not identical mobile-element types

Keep separate:

```text
L1:
autonomous retrotransposon in source model

Alu:
nonautonomous element dependent on other enzymes
```

---

# 243. Viruses can move between cells

Unlike ordinary chromosomal transposons:

```text
viruses can leave one cell
and enter another
```

---

# 244. Virus

The source's simplified description:

```text
genome
enclosed in protective protein coat
sometimes with lipid envelope
```

that depends on a host cell for reproduction.

---

# 245. Viruses require host machinery

They enter cells and co-opt:

- transcriptional machinery
- translational machinery
- replication machinery

to varying degrees.

---

# 246. Virus host range is broad

The source states viruses infect:

- plants
- animals
- bacteria

and essentially all major forms of cellular life.

---

# 247. Lytic infection

In some viral cycles:

```text
viral replication
→ host-cell lysis
→ progeny virus release
```

---

# 248. Viral disease symptoms can result from cell lysis

Examples:

- herpes simplex cold sores
- chickenpox blisters

---

# 249. Viral genome types

The source states human-disease viruses can have genomes made of:

- double-stranded DNA
- single-stranded RNA
- single-stranded DNA
- double-stranded RNA

---

# 250. Simplest-virus gene count

**Status: `SOURCE_SCALE`**

As few as:

```text
3 genes
```

---

# 251. Complex-virus gene count

**Status: `SOURCE_SCALE`**

The source describes larger viruses with:

```text
several hundred genes
```

---

# 252. Giant-virus gene count

**Status: `SOURCE_SCALE`**

Some giant viruses carry:

```text
>1000 genes
```

and may exceed a typical bacterium in physical size.

---

# 253. Viral-coat architecture varies

Some viruses have surfaces made only of viral proteins.

Others carry a:

```text
lipid-bilayer envelope
```

containing viral proteins.

---

# 254. Figure 9–26 examples

RNA viruses illustrated include:

- influenza virus
- Zika virus
- SARS-CoV-2
- poliovirus
- Ebola virus
- rabies virus
- mumps virus
- HIV

DNA-virus examples include:

- poxvirus
- herpesvirus
- adenovirus
- papillomavirus

---

# 255. Figure 9–26 scale

**Status: `SOURCE_SCALE`**

The figure includes:

```text
100 nm
```

scale markers.

---

# 256. Table 9–1 — human-disease virus register

| Virus | Source genome type | Source disease |
|---|---|---|
| Herpes simplex virus | double-stranded DNA | recurrent cold sores |
| Epstein–Barr virus (EBV) | double-stranded DNA | infectious mononucleosis |
| Varicella-zoster virus | double-stranded DNA | chickenpox and shingles |
| Smallpox virus | double-stranded DNA | smallpox |
| Hepatitis B virus | part single-, part double-stranded DNA | serum hepatitis |
| Human immunodeficiency virus (HIV) | single-stranded RNA | AIDS |
| Influenza virus type A | single-stranded RNA | respiratory disease / flu |
| Poliovirus | single-stranded RNA | poliomyelitis |
| Rhinovirus | single-stranded RNA | common cold |
| Hepatitis A virus | single-stranded RNA | infectious hepatitis |
| Hepatitis C virus | single-stranded RNA | non-A, non-B type hepatitis |
| Yellow fever virus | single-stranded RNA | yellow fever |
| Rabies virus | single-stranded RNA | rabies encephalitis |
| Mumps virus | single-stranded RNA | mumps |
| Measles virus | single-stranded RNA | measles |
| SARS-CoV-2 | single-stranded RNA | COVID-19 |

### `SOURCE_ERA_STATEMENT`

Preserve the table as chapter content; do not use it as a complete modern virology classification.

---

# 257. Viral genome packaging limits favor host dependence

Most viruses cannot package all cellular machinery.

They therefore borrow host biochemical systems.

---

# 258. Hypothetical DNA-virus source model

Figure 9–27:

```text
viral DNA enters cell
→ host machinery replicates viral DNA
→ viral DNA transcribed
→ viral RNA translated
→ coat protein produced
→ genomes + coats assemble
→ cell lyses
→ progeny released
```

---

# 259. Coronavirus genome type

SARS-CoV-2 is described as a:

```text
single-stranded RNA virus
```

---

# 260. Coronavirus RNA-dependent RNA polymerase

The viral genome encodes an:

```text
RNA-dependent RNA polymerase
```

that uses RNA as template.

---

# 261. Host-cell RNA polymerases differ in template

The chapter contrasts:

```text
host transcription:
DNA → RNA

coronavirus replicase core:
RNA → RNA
```

---

# 262. SARS-CoV-2 genome acts initially as mRNA

After entry, the source says the viral RNA genome is translated by host ribosomes.

---

# 263. Viral replicase complex

The RNA-dependent RNA polymerase associates with additional viral and host proteins to form:

```text
replicase complex
```

---

# 264. Coronavirus complementary-RNA intermediate

Source model:

```text
positive-sense viral RNA genome
→ complementary RNA copy
→ templates for viral mRNAs and new genomes
```

---

# 265. SARS-CoV-2 genome length

**Status: `SOURCE_SCALE`**

Figure 9–28:

```text
~30,000 nucleotides
```

---

# 266. SARS-CoV-2 particle components in source figure

Figure 9–28 includes:

- RNA genome
- genome-packaging RNA-binding protein
- lipid-bilayer envelope
- spike protein

---

# 267. Viral replication time source statement

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The chapter states the illustrated SARS-CoV-2 replication process takes about:

```text
10 hours
```

---

# 268. Viral yield source statement

**Status: `SOURCE_SCALE` / `VERIFY_QUANT`**

The chapter states one infected cell can produce as many as:

```text
~1000 virus particles
```

---

# 269. Replicase as antiviral target

Because the source says host cells lack the same RNA-dependent RNA replicase function, it presents viral polymerase as a drug target.

---

# 270. Remdesivir source description

The source describes remdesivir as a nucleotide/nucleoside look-alike that becomes incorporated into viral RNA and blocks further elongation.

### `SOURCE_ERA_STATEMENT`

Do not use this chapter canon for current clinical treatment decisions.

---

# 271. Source 3′-OH explanation

The chapter explains chain termination in the source model by absence of the:

```text
3′-OH
```

needed to add the next nucleotide.

### `SOURCE_MODEL`

Preserve as the book's mechanistic simplification.

---

# 272. Retrovirus

```text
retrovirus
=
RNA virus that uses a DNA intermediate
```

---

# 273. Reverse information flow

Retroviral replication includes:

```text
RNA
→ DNA
```

which reverses the usual transcription direction.

---

# 274. Retrovirus evolutionary source hypothesis

The chapter says retroviruses are thought to have evolved from retrotransposons that acquired genes enabling:

- viral packaging
- cellular exit
- infection of new cells

### `SOURCE_HYPOTHESIS`

---

# 275. Retrovirus carries reverse transcriptase in the virion

A few reverse-transcriptase molecules are packaged with the viral RNA genome.

---

# 276. Retroviral first DNA strand

After entry:

```text
viral RNA
→ complementary DNA
→ RNA/DNA hybrid
```

---

# 277. RNA removal and second-strand synthesis

Reverse transcriptase can continue to produce:

```text
double-stranded DNA
```

from the initial hybrid.

---

# 278. Integrase

```text
integrase
=
viral enzyme that inserts retroviral DNA into host chromosome
```

---

# 279. Provirus

```text
provirus
=
retroviral DNA integrated in host chromosome
```

---

# 280. Integrated provirus is inherited by daughter cells

When the host cell divides:

```text
host DNA replication
also copies provirus
```

---

# 281. Retroviral latency

The source describes the integrated state as potentially:

```text
latent
```

for long periods.

---

# 282. Host RNA polymerase transcribes provirus

Later:

```text
integrated viral DNA
→ host RNA polymerase
→ many viral RNAs
```

---

# 283. Retroviral RNA has dual roles

New viral RNAs can function as:

- genomes for progeny particles
- mRNAs for viral proteins

---

# 284. Retroviral proteins produced by host ribosomes

The chapter lists:

- coat proteins
- envelope proteins
- reverse transcriptase

---

# 285. Retroviral genome size

**Status: `SOURCE_SCALE`**

Figure 9–29:

```text
~7000–12,000 nucleotides
```

---

# 286. HIV

```text
HIV
=
human immunodeficiency virus
```

and is identified as a retrovirus causing AIDS.

---

# 287. HIV latency complicates therapy

Integrated proviral DNA can remain hidden in host chromosomes.

---

# 288. HIV reverse transcriptase as drug target

The chapter identifies reverse transcriptase as a major target for anti-HIV drugs because cells do not ordinarily require it for normal host replication.

### `SOURCE_ERA_STATEMENT`

---

# 289. Human genome total length

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Table 9–2:

```text
3.1 × 10^9 nucleotide pairs
```

---

# 290. Chromosome set source wording

The source describes:

```text
23 chromosomes
22 autosomes
+
sex chromosomes X and Y
```

in the haploid-sequence context and elsewhere refers to 23 chromosome pairs in diploid humans.

### `PROJECT_CONSTRAINT`

Represent haploid versus diploid genome counting explicitly.

Do not conflate 23 chromosomes with 23 pairs.

---

# 291. Human Genome Project source cost

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source says the first sequence effort cost approximately:

```text
$3 billion
```

---

# 292. Human Genome Project duration

The chapter describes the main international effort as lasting:

```text
the better part of a decade
```

---

# 293. Sequencing-cost source statement

**Status: `SOURCE_ERA_STATEMENT`**

The sixth-edition source states a human genome could then be sequenced for approximately:

```text
$200
```

in a few hours.

Do not use this as a timeless current price.

---

# 294. Human chromosome 22 length

**Status: `SOURCE_SCALE`**

```text
48 × 10^6 nucleotide pairs
```

---

# 295. Chromosome 22 fraction of genome

Figure 9–31 gives approximately:

```text
1.5%
```

of the human genome.

---

# 296. Chromosome 22 short arm

The source states much of the short arm consists of repetitive DNA packaged as heterochromatin.

---

# 297. Chromosome 22 gene distribution is uneven

Expanded segments show gene-rich and gene-poor regions.

---

# 298. Figure 9–31 example gene size

**Status: `SOURCE_SCALE`**

One displayed gene:

```text
3.4 × 10^4 nucleotide pairs
```

---

# 299. Human genome historical milestones

The source gives:

```text
1999:
chromosome 22 sequence completed

2001:
first draft human genome

2004:
draft excluding much of the most repetitive sequence

2021:
complete sequence
```

### `SOURCE_ERA_STATEMENT`

---

# 300. Table 9–2 — human genome statistics

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

| Characteristic | Source value |
|---|---:|
| total length | 3.1 × 10^9 nucleotide pairs |
| protein-coding genes | ~20,000 |
| non-protein-coding genes | ~5000 |
| largest protein-coding gene | 2.5 × 10^6 nucleotide pairs |
| median protein-coding-gene size | 26,000 nucleotide pairs |
| smallest exon count per gene | 1 |
| largest exon count per gene | 363 |
| median exon count per gene | 9 |
| largest exon size | 17,106 nucleotide pairs |
| median exon size | 131 nucleotide pairs |
| pseudogenes | >20,000 |
| DNA encoding protein in exons | 0.8% |
| conserved noncoding DNA vs other mammals | 3.5% |
| high-copy repetitive DNA | ~50% |

---

# 301. Table 9–2 sequence-completeness note

The source says:

```text
2.85 billion nucleotide pairs
```

were known precisely at about:

```text
1 error per 100,000 nucleotides
```

in the data summarized by the table.

### `SOURCE_ERA_STATEMENT`

---

# 302. Hard-to-sequence repeats

Highly repetitive tandem DNA can differ in repeat count among individuals and is difficult to sequence accurately.

---

# 303. Human protein-coding exons are a tiny genome fraction

The source states:

```text
<1%
```

and Table 9–2 specifies:

```text
0.8%
```

---

# 304. Human genome contains many functional noncoding genes

The source's ~5000 non-protein-coding genes include RNAs with:

- structural
- catalytic
- regulatory

functions.

---

# 305. Repetitive DNA is not one category

Figure 9–32 separates:

- LINEs
- SINEs
- other retrotransposons
- DNA-only transposons
- simple repeats
- segment duplications

---

# 306. LINE

```text
LINE
=
long interspersed nuclear element
```

Example:

```text
L1
```

---

# 307. SINE

```text
SINE
=
short interspersed nuclear element
```

Example:

```text
Alu
```

---

# 308. Simple repeat

The source defines simple repeats in Figure 9–32 as short nucleotide sequences:

```text
<14 nucleotide pairs
```

repeated many times.

---

# 309. Segment duplication

Figure 9–32 defines large repeated blocks approximately:

```text
1000–200,000 nucleotide pairs
```

present at multiple genomic locations.

---

# 310. Highly repetitive heterochromatic DNA

The source says the most repetitive heterochromatic sequences comprise about:

```text
10%
```

of human DNA and are not represented in the figure's plotted breakdown.

### `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`

---

# 311. Nonrepetitive non-exon/intron DNA includes multiple classes

The chapter lists:

- regulatory DNA
- functional RNA genes
- sequence with unknown function

---

# 312. Human protein-coding gene count surprised biologists

Earlier estimates near:

```text
100,000
```

were much larger than the eventual source estimate near:

```text
20,000
```

---

# 313. Human gene count is similar to other multicellular animals

Source comparison:

```text
C. elegans ~20,000
Drosophila ~14,000
zebrafish ~26,000
human ~20,000 protein-coding
```

### `SOURCE_ERA_STATEMENT`

---

# 314. Gene number does not explain organismal complexity by itself

Human biological complexity cannot be inferred simply from total protein-coding gene count.

---

# 315. Average protein coding requirement

The source says an average human protein of approximately:

```text
430 amino acids
```

requires roughly:

```text
1300 nucleotide pairs
```

of coding sequence.

---

# 316. Median/typical gene span is much larger than coding sequence

The chapter contrasts approximately:

```text
26,000 nucleotide-pair gene span
```

with roughly:

```text
1300 nucleotide pairs of coding sequence
```

because most of the gene span can be intronic.

---

# 317. Regulatory DNA extends over large genomic regions

Human regulatory sequences can be spread across:

```text
tens of thousands of nucleotide pairs
```

---

# 318. Human genome is relatively gene-sparse

Figure 9–33 compares equal ~50-kb stretches:

```text
human:
4 genes

fruit fly:
11 genes

yeast:
26 genes
```

---

# 319. Gene-density figure scale

**Status: `SOURCE_SCALE`**

Each compared segment is approximately:

```text
50,000 nucleotide pairs
```

---

# 320. Conservation plus human variation suggest constrained DNA

The source combines:

```text
~4.5% highly conserved across mammals
+
~5% additional reduced variation within humans
```

to suggest around:

```text
~10%
```

of the human genome contains sequence under significant functional constraint.

### `SOURCE_ERA_STATEMENT`

---

# 321. "Only ~10% matters" is not a license to call the rest useless

The chapter itself says functions of much constrained and unconstrained DNA remain incompletely understood.

### `DO_NOT_INFER`

Never translate the source into:

```text
90% of human DNA is useless junk
```

---

# 322. Regulatory evolution explains species differences

Closely related mammals can have nearly the same protein-coding gene set while differing greatly in anatomy and behavior.

The chapter emphasizes evolution of:

```text
regulatory DNA
```

as a major explanation.

---

# 323. Developmental program

Regulatory DNA controls when cells:

- proliferate
- read positional information
- differentiate
- activate/repress gene networks

---

# 324. Same genes, different regulatory connections

Figure 9–34 shows two hypothetical species containing the same:

```text
genes 1, 2, 3
```

and same regulator proteins, but differing in regulatory DNA.

---

# 325. Small regulatory changes can redirect developmental cascades

In the source model:

```text
gene 1 product
→ activates gene 3 in species A

gene 1 product
→ activates gene 2 in species B
```

leading to different developmental programs.

---

# 326. Human-specific regulatory-loss study

The chapter reports a study identifying more than:

```text
500
```

regulatory sequences conserved in other mammals but altered/absent in humans.

### `SOURCE_ERA_STATEMENT`

---

# 327. Neural-proliferation hypothesis

One missing human regulatory sequence is proposed to normally suppress neuron proliferation.

The source suggests its loss might have contributed to expansion of the human brain.

### `SOURCE_HYPOTHESIS`

Do not present this as a proven single cause of human brain evolution.

---

# 328. How We Know — Counting Genes

The chapter's How We Know section explains why gene counting is difficult.

---

# 329. Historical 100,000-gene estimate

Walter Gilbert proposed an estimate near:

```text
100,000 genes
```

based on:

```text
~3 × 10^9 bp genome
/
~3 × 10^4 bp assumed average gene
```

---

# 330. Why simple genome-size division fails

Human genes are:

- unevenly distributed
- separated by intergenic DNA
- interrupted by introns
- embedded in repetitive DNA

so genome size divided by assumed gene size is not a reliable direct count.

---

# 331. Open reading frame

```text
ORF
=
open reading frame
```

a sequence that can encode a continuous polypeptide without an in-frame stop codon.

---

# 332. Bacterial/yeast ORF search

Protein-coding genes can often be identified by searching for long stop-free reading frames.

---

# 333. Source ORF threshold example

The source uses approximately:

```text
100 codons or more
```

as a statistically suggestive ORF length in simple genomes.

### `SOURCE_MODEL`

Not a universal definition of a gene.

---

# 334. Random-stop expectation

There are:

```text
3 stop codons
of 64 codons
```

so a random frame is expected to encounter stop signals on the order of:

```text
~1 per 20 codons
```

in the chapter's approximation.

---

# 335. Six reading frames

A double-stranded DNA sequence has:

```text
3 reading frames per strand
× 2 strands
= 6 reading frames
```

---

# 336. Start and stop signals in ORF search

Source ORF conventions:

```text
usual start:
ATG

stops:
TAA
TAG
TGA
```

---

# 337. Candida ORF example

Figure 9–35 analyzes:

```text
7500 nucleotide pairs
```

from:

```text
Candida albicans
```

---

# 338. Candida ORFs found

The figure shows:

```text
4 clear ORFs
```

in the six-frame scan.

---

# 339. Human gene prediction is harder because of introns

Coding exons can be short and separated by very long introns.

---

# 340. Human exon source example

The source says exons may contain as few as:

```text
50 codons
=
150 nucleotide pairs
```

---

# 341. Human intron source example

The source says introns may exceed:

```text
10,000 nucleotide pairs
```

---

# 342. Short exons can be confused with random ORF noise

A 50-codon stop-free region can occur by chance in a large noncoding genome.

---

# 343. Additional gene-prediction features

The chapter says computers can use:

- splice-site sequences
- regulatory DNA features
- evolutionary conservation

alongside ORF evidence.

---

# 344. 1992 gene-density estimate example

Researchers found:

```text
2 genes in 58,000 bp of chromosome 4
5 genes in 106,000 bp of chromosome 19
```

---

# 345. Naive extrapolated gene count

The source states these gene-rich samples suggested approximately:

```text
1 gene per 23,000 bp
→ ~130,000 genes genome-wide
```

---

# 346. Gene-rich sampling bias

The analyzed regions had been chosen partly because they appeared gene-rich.

Correcting for gene-poor regions lowered the source-era estimate to approximately:

```text
71,000 genes
```

---

# 347. RNA-Seq as direct expression evidence

The source describes:

```text
isolate RNAs
→ sequence them
→ map RNA sequences back to genome
```

---

# 348. Multiple cell types are required for gene discovery

Different cell types:

- express different genes
- splice transcripts differently

so one cell type cannot reveal the full transcript repertoire.

---

# 349. Exon reads are enriched in mature mRNA

Because introns are usually removed:

```text
exonic sequence
→ high RNA-Seq coverage

intronic sequence
→ much lower coverage
```

in the source figure.

---

# 350. Intronic reads can still occur

They may come from:

- unspliced pre-mRNA
- recently excised introns not yet degraded

---

# 351. Figure 9–36 read length

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source describes RNA sequence reads of approximately:

```text
200 nucleotides
```

---

# 352. Figure 9–36 sampled cell types

The source shows:

- embryonic stem cell
- muscle cell
- blood vessel cell
- blood cell precursor
- skin cell
- lung cell

---

# 353. RNA-Seq also discovers noncoding RNA genes

Transcribed sequence that does not encode protein can reveal functional RNA genes.

---

# 354. Source human total-gene estimate

How We Know states estimates converged around:

```text
~25,000 total genes
```

including approximately:

```text
~20,000 protein-coding
```

### `SOURCE_ERA_STATEMENT`

---

# 355. Exact gene count is less important than network function

The source closes the gene-count discussion by emphasizing:

```text
what genes do
and
how they interact
```

matters more than an exact tally.

---

# 356. Neanderthal genome source date

The chapter states the first Neanderthal genome analysis was completed in:

```text
2010
```

---

# 357. Fossil DNA source

The source describes DNA extracted from a fossilized bone fragment found in a cave in Croatia.

---

# 358. Human-specific rapidly changed regions

The source says comparison identified regions containing genes involved in:

- metabolism
- brain development
- voice box
- skeletal shape
- rib cage
- brow

---

# 359. Neanderthal ancestry fraction

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Many modern humans with European/Asian ancestry are described as carrying approximately:

```text
2% Neanderthal-derived DNA
```

---

# 360. Neanderthal admixture conclusion

Shared DNA indicates ancient:

```text
interbreeding
```

between modern-human ancestors and Neanderthals.

---

# 361. Source language about Neanderthal disappearance

The chapter speculates humans later:

```text
outcompeted or actively exterminated
```

Neanderthals.

### `SOURCE_HYPOTHESIS` / `SOURCE_ERA_STATEMENT`

Do not convert this source phrasing into a settled single-cause history.

---

# 362. Human ancestral population source estimate

Figure 9–37 suggests a source scenario with:

```text
perhaps ~10,000 individuals
```

in Africa around:

```text
~200,000 years ago
```

### `SOURCE_ERA_STATEMENT`

---

# 363. Out-of-Africa route

The source figure depicts human ancestors dispersing from Africa and encountering Neanderthals in western Eurasia.

---

# 364. Interbreeding source time

Figure 9–37 labels an interbreeding event around:

```text
~55,000 years ago
```

---

# 365. Americas source dates

Figure 9–37 source scenario gives:

```text
North America:
~25,000 years ago

southern South America:
~15,000 years ago
```

### `SOURCE_ERA_STATEMENT`

---

# 366. Human pairwise sequence difference

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Two humans typically differ by approximately:

```text
0.1%
```

of nucleotide positions in the source's simple statement.

---

# 367. One difference per 1000 bp

Equivalent source framing:

```text
~1 nucleotide-pair difference
per 1000 nucleotide pairs
```

---

# 368. Total pairwise differences source estimate

The chapter gives roughly:

```text
~3 million genetic differences
```

between two human genomes in the broad comparison.

---

# 369. Much present-day variation is ancient

The source says much human genomic variation predates modern population dispersal and has been reshuffled by recombination.

---

# 370. New mutations per newborn

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter states each newborn genome contains approximately:

```text
70 new mutations
```

not present in either parent's sampled genome.

---

# 371. SNP

```text
SNP
=
single-nucleotide polymorphism
```

---

# 372. SNP population-frequency definition

In the chapter:

```text
single-base variant
present in at least 1% of population
→ SNP
```

---

# 373. Two random human genomes SNP difference

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source states approximately:

```text
2.5 × 10^6 SNPs
```

differ between two randomly selected human genomes.

---

# 374. Most SNPs are silent in the source framework

Most occur in regions where they do not alter gene function.

---

# 375. Functional human variation is a minority subset

Only some genomic differences contribute to inherited phenotype.

---

# 376. Genomic individuality is combinatorial

Each person inherits a unique recombined collection of ancient variation plus newer mutations.

---

# 377. Essential concept — genetic variation is raw material

Evolution requires heritable sequence differences.

---

# 378. Essential concept — selection acts on effects

Beneficial variants tend to persist.

Strongly harmful variants tend to disappear.

Neutral variants are governed more strongly by population processes.

---

# 379. Essential concept — gene duplication

Duplicated genes can diverge into specialized functions.

---

# 380. Essential concept — gene families

Repeated duplication and divergence generate large related gene sets.

---

# 381. Essential concept — exon shuffling

New proteins can evolve by recombining existing coding modules.

---

# 382. Essential concept — human genome composition

The source summarizes:

```text
3.1 × 10^9 bp
23 chromosome pairs in diploid cells
22 autosome pairs
+
sex-chromosome pair
```

and states less than one-tenth is transcribed to produce protein-coding or otherwise functional RNAs.

---

# 383. Essential concept — mobile elements

Nearly half the human genome comes from mobile genetic elements, most now immobilized by mutation.

---

# 384. Essential concept — viruses

Viruses are mobile genetic packages requiring host cells for reproduction.

---

# 385. Essential concept — RNA-virus replication

Some RNA viruses use:

```text
RNA-dependent RNA polymerase
```

while retroviruses use:

```text
reverse transcriptase
```

and a DNA intermediate.

---

# 386. Essential concept — comparative genomics

Cross-species sequence comparison identifies conserved DNA likely to have important function.

---

# 387. Essential concept — regulatory evolution

Closely related species can share most genes while differing through regulatory-sequence evolution.

---

# 388. Essential concept — human variation

Human sequence variation underlies inherited individuality and enables DNA-based identification.

---

# 389. Question 9–1 — why high-fidelity replication if variation is useful?

### `SOURCE_DERIVED`

Most mutations are:

- neutral
- harmful

and only rarely advantageous.

Therefore:

```text
high replication fidelity
preserves organismal function

while
rare residual mutation
still supplies evolutionary variation
```

Evolution benefits from a low but nonzero mutation rate, not rampant genomic damage.

---

# 390. Question 9–2 — why horizontal transfer is more prevalent in unicellular life

### `SOURCE_DERIVED`

For a single-celled organism:

```text
a DNA acquisition changes the entire organism
and can be inherited immediately by descendants
```

For a multicellular organism:

```text
DNA acquired by an arbitrary somatic cell
normally does not reach the germ line
```

Therefore transfer has a much easier path to heritable evolutionary impact in unicellular organisms.

---

# 391. Question 9–3 — were highly conserved genes born perfect?

No.

### `SOURCE_DERIVED`

A better model:

```text
ancestral variants evolved
→ functional sequence became highly constrained
→ harmful later variants repeatedly eliminated
→ surviving modern sequences remain similar
```

Conservation reflects strong purifying selection, not perfect initial design.

---

# 392. Question 9–4 — why replicative transposons do not overrun genomes indefinitely

### `SOURCE_DERIVED`

Constraints include:

- deleterious insertions reduce host fitness
- lineages overloaded with harmful elements are removed by selection
- elements accumulate disabling mutations
- host genomes evolve silencing/defense systems
- insertion/transposition events are individually rare

The chapter explicitly supports the first, second, and disabling-mutation logic; host-defense details are linked to Chapter 8 RNAi/heterochromatin mechanisms.

---

# 393. Question 9–5 — are viruses alive inside cells?

The source frames viruses as:

```text
genetic elements that depend on cellular machinery
```

and says they do not cross the threshold of autonomous cellular life.

### `SOURCE_DERIVED`

The statement is philosophically useful but not a mechanistic yes/no definition.

Inside a cell, viral genomes actively:

- replicate
- express genes
- assemble progeny

but still use host cellular systems.

---

# 394. Question 9–6 — ways an Alu insertion can affect nearby gene

Source-supported possibilities:

```text
insert into coding sequence
→ disrupt protein coding

insert into intron
→ potentially tolerated or alter processing

insert into regulatory DNA
→ change expression

provide repeated homology
→ promote unequal recombination/rearrangement

carry regulatory signals
→ place gene under new transcriptional control
```

---

# 395. Question 9–7 — "mobile elements are always harmful"

False as an absolute claim.

### `SOURCE_DERIVED`

Mobile elements can:

- disrupt genes
- cause disease
- alter regulation
- mobilize exons
- create new genes
- promote gene duplication
- generate developmental innovation

Host fitness determines whether a particular event is deleterious, neutral, or occasionally useful.

---

# 396. Question 9–8 — fraction of average chromosome-22 gene converted into mRNA

Given:

```text
average gene length:
19,000 bp

average exon number:
5.4

average exon size:
266 bp
```

Total exon length:

```text
5.4 × 266
= 1436.4 bp
```

Fraction retained in mature mRNA:

```text
1436.4 / 19,000
≈ 0.0756
≈ 7.6%
```

### `SOURCE_DERIVED`

This calculation assumes all listed average exons contribute to the mature transcript and ignores UTR/coding distinctions not specified by the question.

---

# 397. Question 9–8 — fraction of chromosome occupied by protein-coding gene spans

Given:

```text
700 genes
× 19,000 bp
= 13,300,000 bp
```

Chromosome length:

```text
48,000,000 bp
```

Fraction:

```text
13.3 / 48
≈ 0.277
≈ 27.7%
```

### `SOURCE_DERIVED`

---

# 398. Question 9–9 — "most human DNA is unimportant"

The chapter does not support this as a simple true statement.

It says:

- much sequence can tolerate mutation
- much is repetitive/mobile-element derived
- only a minority shows strong conservation
- some noncoding DNA has known regulatory/RNA function
- much noncoding function remains unknown

### Hard conclusion

```text
"not strongly sequence-constrained"
≠
"proven biologically unimportant"
```

---

# 399. Question 9–10 — why HoxD cluster lacks mobile elements

### `SOURCE_DERIVED`

HoxD regulatory organization is crucial for correct body-plan expression.

Insertions within this region would often disrupt:

- Hox gene coding sequence
- enhancer function
- long-range regulatory logic
- gene-order relationships

Such insertions would be strongly removed by:

```text
purifying selection
```

leaving a modern region depleted of mobile elements.

---

# 400. Question 9–11A — human β-globin cDNA versus genomic DNA diagon plot

The cDNA contains exon sequence but lacks introns.

Thus diagonal similarity appears in separated blocks corresponding to:

```text
exons
```

with gaps corresponding to:

```text
introns
```

---

# 401. Question 9–11B — human versus mouse β-globin exons

The exons should show strong sequence similarity because protein function is conserved.

Differences can occur as:

- synonymous substitutions
- tolerated nonsynonymous substitutions
- small sequence changes

while remaining recognizably homologous.

---

# 402. Question 9–11C — conserved nonexonic similarity

Any nonexonic diagonal similarity indicates constrained noncoding sequence.

Likely explanations within Chapter 9 include:

- regulatory DNA
- splice-related sequence
- other conserved functional sequence

### `DO_NOT_INFER`

The exact feature visible in the printed plot cannot be recovered from parsed text alone.

Do not fabricate its exact coordinates.

---

# 403. Question 9–11D — intron-length change

A change in spacing between matching exon diagonals indicates expansion or contraction of intronic DNA in one lineage.

The plot can reveal which gene has the longer corresponding intron by comparing genomic distances between conserved exon blocks.

### `DO_NOT_INFER`

Without the rendered plot, do not assert which lineage specifically expanded.

---

# 404. Question 9–12 — features useful for predicting coding exons

Source-supported features include:

- ORFs
- start codon
- stop codon
- codon structure
- splice donor/acceptor signals
- exon/intron boundary motifs
- transcript evidence
- cross-species conservation
- regulatory DNA context
- expected protein-domain similarity if available

---

# 405. Question 9–13 — information useful for inferring unknown gene function

Useful information would include:

```text
where gene is expressed
when gene is expressed
which cell types express it
protein subcellular localization
protein abundance
protein-interaction partners
protein domains/structure
phenotype when gene is absent
phenotype when overexpressed
response to signals
co-expression with known pathways
evolutionary conservation
```

### `SOURCE_DERIVED`

These clues narrow biological role even when sequence similarity gives no answer.

---

# 406. Question 9–14 — why ~1 stop every 20 random codons

There are:

```text
3 stop codons / 64 possible codons
```

Probability of a random codon being stop:

```text
3/64
≈ 0.0469
```

Expected spacing:

```text
64/3
≈ 21.3 codons
```

which the source rounds to about:

```text
20 codons
```

---

# 407. Question 9–15 — mechanisms contributing to new protein-coding genes

Source-supported major contributors:

```text
A. gene duplication
YES

B. completely de novo gene formation from noncoding sequence
not a major mechanism emphasized by this chapter

C. horizontal gene transfer
YES

D. mutation of existing genes
YES

E. exon/domain shuffling
YES
```

---

# 408. Question 9–16 source table

Rates are given as nucleotide changes per site per:

```text
10^9 years
```

| Gene | Amino acids | Nonsynonymous | Synonymous |
|---|---:|---:|---:|
| Histone H3 | 135 | 0.0 | 4.5 |
| Hemoglobin α | 141 | 0.6 | 4.4 |
| Interferon γ | 136 | 3.1 | 5.5 |

The source also states an average nonsynonymous rate near:

```text
0.8
```

for several dozen rat/human genes.

---

# 409. Question 9–16A — why synonymous substitutions accumulate faster

### `SOURCE_DERIVED`

Synonymous substitutions often do not alter protein sequence.

Therefore many are tolerated.

Nonsynonymous substitutions alter amino acids and are more likely to damage function, so purifying selection removes many of them.

---

# 410. Question 9–16B — why H3 resists amino-acid change

Mutations occur in the histone H3 gene at roughly ordinary synonymous rates.

But amino-acid-altering variants are strongly selected against.

Thus:

```text
mutation happens
selection removes damaging protein variants
```

---

# 411. Question 9–16C — why H3 is not simply in a low-mutation genomic site

If the locus itself rarely mutated, both:

- synonymous
- nonsynonymous

rates should be unusually low.

Instead:

```text
synonymous rate ~4.5
```

is ordinary, whereas:

```text
nonsynonymous rate = 0.0
```

showing protein-level purifying selection.

---

# 412. Question 9–17 — plant hemoglobin horizontal-transfer hypothesis

The source phylogenetic tree places plant hemoglobins together in a pattern consistent with broader organismal relationships.

### `SOURCE_DERIVED`

That pattern argues against a recent transfer from animals.

---

# 413. Question 9–17B — expected tree under animal/nematode transfer

If plant hemoglobin came recently from a nematode or other animal donor:

```text
plant hemoglobin sequence
would cluster within/near donor-animal hemoglobins
rather than branching with plant homologs
```

---

# 414. Question 9–18 — mutation accumulation setup

The source question gives:

```text
0.6 nucleotide changes
per 6 × 10^9 nucleotides
per germ-line cell division
```

and observed pairwise human difference:

```text
~1 per 1000 nucleotide pairs
```

---

# 415. Question 9–18 — per-nucleotide mutation probability per division

```text
0.6 / 6×10^9
= 1×10^-10
per nucleotide per division
```

---

# 416. Question 9–18 — number of lineage divisions needed

To accumulate:

```text
1×10^-3 difference per nucleotide
```

between two descendant lineages, both lineages accumulate changes.

Thus approximate divergence per shared-ancestor generation:

```text
2 × 10^-10
per nucleotide
per pair of lineage cell divisions
```

Required divisions per lineage:

```text
10^-3 / (2×10^-10)
= 5×10^6 germ-line cell divisions
```

### `SOURCE_DERIVED`

---

# 417. Question 9–18 — convert cell divisions to human generations

Given:

```text
200 germ-line cell divisions
per human generation
```

then:

```text
5×10^6 / 200
= 25,000 human generations
```

---

# 418. Question 9–18 — convert generations to years

Given:

```text
30 years per human generation
```

then:

```text
25,000 × 30
= 750,000 years
```

### `SOURCE_DERIVED`

This is a deliberately simplified textbook calculation based on the assumptions in the question, not a modern population-genetic estimate of human origins.

---

# 419. Question 9–19 — reverse transcriptase lacks proofreading

Source premise:

```text
reverse transcriptase
does not proofread efficiently
```

---

# 420. Question 9–19 — treatment consequence

### `SOURCE_DERIVED`

High replication-error rates generate many HIV variants.

Under drug treatment:

```text
rare resistance-conferring mutations
can already exist or arise
→ drug selects those variants
→ resistant viral population expands
```

Therefore therapy is harder when relying on a single antiviral target.

### `LATER_CHAPTER_REFINEMENT`

Do not turn this into a present-day treatment recommendation.

---

# 421. Mutation schema

```yaml
mutation_event:
  entity_id:
  lineage:
  germline_or_somatic:
  chromosome:
  position:
  original_sequence:
  altered_sequence:
  mutation_type:
    - substitution
    - deletion
    - duplication
    - insertion
  coding_effect:
  regulatory_effect:
  phenotype_effect:
  fitness_effect:
  inherited:
  provenance:
```

---

# 422. Selection schema

```yaml
variant_fitness:
  variant_id:
  environment:
  phenotype:
  survival_effect:
  reproductive_effect:
  classification:
    - beneficial
    - neutral
    - deleterious
  population_frequency:
  generation:
```

---

# 423. Gene-duplication schema

```yaml
gene_duplication:
  ancestral_gene:
  duplication_event:
  duplicate_A:
  duplicate_B:
  mechanism:
    - unequal_crossing_over
    - whole_genome_duplication
    - other
  divergence_events:
  retained_functions:
  novel_functions:
  pseudogene_outcome:
```

---

# 424. Gene-family schema

```yaml
gene_family:
  ancestral_gene:
  members:
  duplication_tree:
  divergence_times:
  protein_functions:
  expression_patterns:
  pseudogenes:
  chromosome_locations:
```

---

# 425. Genome-duplication schema

```yaml
whole_genome_duplication:
  lineage:
  ancestral_ploidy:
  new_ploidy:
  genome_replication_completed:
  cell_division_failed:
  germline_involvement:
  inherited:
  retained_duplicates:
  lost_duplicates:
```

---

# 426. Exon-shuffling schema

```yaml
exon_shuffling_event:
  donor_gene:
  recipient_gene:
  donor_exon:
  recombination_sites:
  intron_context:
  new_gene_structure:
  reading_frame_preserved:
  protein_domain_added:
  functional_outcome:
```

---

# 427. Transposon schema

```yaml
transposon:
  id:
  class:
    - DNA_only
    - retrotransposon
  active_or_fossil:
  sequence:
  transposase:
  reverse_transcriptase:
  donor_location:
  target_location:
  mechanism:
    - cut_and_paste
    - replicative
    - RNA_intermediate
  cargo_genes:
  insertion_effect:
```

---

# 428. Horizontal-transfer schema

```yaml
horizontal_gene_transfer:
  donor_species:
  donor_cell:
  recipient_species:
  recipient_cell:
  DNA_segment:
  transfer_mechanism:
  stable_integration:
  expressed:
  fitness_effect:
  inherited:
```

---

# 429. Phylogeny schema

```yaml
phylogenetic_comparison:
  homologous_sequence:
  taxa:
  aligned_sequences:
  substitutions:
  insertions_deletions:
  conserved_sites:
  inferred_common_ancestors:
  outgroup:
  divergence_estimate:
```

---

# 430. Conserved-synteny schema

```yaml
synteny_block:
  species_A:
  chromosome_A:
  species_B:
  chromosome_B:
  homologous_genes:
  gene_order:
  rearrangement_boundaries:
  conserved:
```

---

# 431. Viral-particle schema

```yaml
virus_particle:
  species:
  genome_type:
  genome_length:
  genome_copy_number:
  capsid:
  lipid_envelope:
  envelope_proteins:
  packaged_enzymes:
  host_cell:
  replication_strategy:
```

---

# 432. Coronavirus replication schema

```yaml
coronavirus_replication:
  RNA_genome:
  translated_on_entry:
  RNA_dependent_RNA_polymerase:
  replicase_complex:
  complementary_RNA:
  viral_mRNAs:
  new_RNA_genomes:
  viral_proteins:
  assembly:
  release:
```

---

# 433. Retroviral replication schema

```yaml
retrovirus_replication:
  incoming_RNA:
  packaged_reverse_transcriptase:
  RNA_DNA_hybrid:
  dsDNA_copy:
  integrase:
  integration_site:
  provirus:
  latency_state:
  host_transcription:
  viral_RNAs:
  viral_proteins:
  new_particles:
```

---

# 434. Human-genome annotation schema

```yaml
human_genome_feature:
  chromosome:
  coordinate:
  feature_type:
    - protein_coding_exon
    - intron
    - noncoding_RNA_gene
    - regulatory_DNA
    - LINE
    - SINE
    - retrotransposon
    - DNA_transposon
    - simple_repeat
    - segment_duplication
    - intergenic_sequence
    - pseudogene
  conservation:
  human_variation:
  provenance:
```

---

# 435. Population-variation schema

```yaml
population_variant:
  chromosome:
  position:
  reference_allele:
  alternate_allele:
  variant_type:
  population_frequency:
  SNP_status:
  functional_effect:
  ancestry_distribution:
  age_estimate:
```

---

# 436. Evolution must be modeled as lineage history

A mutation exists in a particular:

```text
cell
at a particular biological time
within a particular lineage
```

It is not a property of the whole species the instant it occurs.

---

# 437. Germ-line mutation and somatic mutation require separate WorldState consequences

```text
germ-line mutation
→ can become organism-level inherited variant

somatic mutation
→ remains within somatic clone
```

unless special biological mechanisms say otherwise.

---

# 438. Selection operates on reproductive outcomes, not animation color

A "beneficial mutation" cannot be determined merely because the rendered protein looks better.

Its fitness effect depends on:

- environment
- phenotype
- survival
- reproductive success

---

# 439. Mutation should be stochastic, not goal-directed

Project simulation must not make future environmental need influence mutation identity unless a specific biological mechanism is explicitly modeled.

---

# 440. Mutation and selection use different clocks

```text
mutation event:
molecular/cell-generation time

allele frequency change:
population-generation time
```

---

# 441. Gene duplication preserves identity history

After duplication:

```text
copy A
copy B
```

must both retain a pointer to:

```text
shared ancestral gene
```

---

# 442. Homology is ancestry, not merely visual similarity

Two genes can be similar because of common ancestry.

Homology should not be encoded as a percentage variable meaning "more homologous."

---

# 443. Paralogs versus orthologs are not explicitly developed here

### `DO_NOT_INFER`

Do not insert a full ortholog/paralog taxonomy into the Chapter 9 source canon unless another approved source adds it.

---

# 444. Pseudogene remains genomic DNA

A pseudogene does not disappear from the chromosome just because it no longer yields a functional protein.

---

# 445. Protein-domain identity must survive exon-shuffling visualization

A domain moved from one gene to another should remain traceable to its ancestral sequence/domain.

---

# 446. Mobile-element insertion changes genomic coordinates

After insertion:

```text
downstream genomic coordinates shift
```

in sequence-space representation.

Visualization architecture must support coordinate remapping.

---

# 447. Mobile-element activity is not merely movement in 3D nuclear space

True transposition means:

```text
sequence becomes integrated at a new genomic position
```

not merely a particle traveling across the nucleus.

---

# 448. Cut-and-paste transposition is a DNA-editing event

WorldState must update:

- donor sequence
- DNA break/repair state
- target sequence
- element location

---

# 449. Replicative transposition changes copy number

WorldState must update:

```text
element_count + 1
```

while retaining donor element.

---

# 450. Retrotransposition requires RNA intermediate

Do not animate L1 duplication as direct DNA copying from one locus to another.

The source route is:

```text
DNA locus
→ RNA
→ reverse-transcribed DNA
→ insertion
```

---

# 451. Horizontal transfer crosses organism boundaries

This process is topologically distinct from:

```text
duplication within one genome
```

---

# 452. Conjugation requires two cells

A valid source-based conjugation scene must contain:

- donor bacterium
- recipient bacterium
- physical connection
- transferred DNA

---

# 453. Phylogenetic tree is reconstructed evidence

A phylogenetic tree is not a literal branching object inside a cell.

It is a scientific representation inferred from sequence data.

### `PROJECT_CONSTRAINT`

It belongs in an evolutionary-analysis layer, not physical WorldState.

---

# 454. Sequence alignment is analytical ViewState

Aligned DNA strings compare homologous sequence.

The alignment does not alter the underlying biological sequences.

---

# 455. Conservation is population/evolutionary information

A single cell cannot directly "contain" a conservation score as a molecular object.

Conservation is metadata derived from comparison across lineages.

---

# 456. Human genome should not be drawn as uniformly gene-filled

The source strongly emphasizes:

- sparse genes
- large introns
- intergenic DNA
- repetitive elements
- mobile-element fossils

---

# 457. Protein-coding exons are visually tiny at chromosome scale

At whole-genome scale:

```text
0.8%
```

is too small to dominate the visual representation.

---

# 458. Repetitive DNA must not be represented as meaningless blank filler

Different repeat classes have different origins and histories.

---

# 459. Mobile-element fossils retain evolutionary provenance

Even inactive copies should have state:

```yaml
active: false
ancestral_class:
insertion_age:
mutation_burden:
```

where evidence allows.

---

# 460. Virus and mobile element must not be merged

```text
transposon:
normally remains genomic/cellular

virus:
can package genetic material
leave cell
infect another cell
```

---

# 461. Viral lipid envelope is not universal

Some source viruses:

```text
protein shell only
```

Others:

```text
lipid-bilayer envelope
```

---

# 462. Viral envelope is host-derived membrane context plus viral proteins

### `LATER_CHAPTER_REFINEMENT`

Membrane budding/fusion details belong to later membrane/trafficking chapters.

---

# 463. SARS-CoV-2 genomic RNA is a persistent biological entity across stages

Same genome identity can transition:

```text
virion-packaged RNA
→ cytosolic translation template
→ replication template
→ progeny virion genome
```

when tracking individual copies.

---

# 464. Coronavirus complementary RNA is not the incoming genome

Represent polarity/template relationships explicitly.

---

# 465. Retrovirus RNA and proviral DNA are different material representations of one viral lineage

Persistent lineage identity should connect:

```text
incoming RNA
→ reverse-transcribed DNA
→ integrated provirus
→ descendant viral RNA
```

---

# 466. Provirus integration changes host genome WorldState

After integration, host chromosome sequence contains viral DNA.

---

# 467. Latency is not absence

A latent provirus:

```text
exists physically
but has low/no active particle production
```

---

# 468. Human variation should be layered over a reference genome

Architecture suggestion:

```text
reference chromosome sequence
+
individual variant set
→ individual genome
```

---

# 469. SNP is population-defined

A single-nucleotide difference does not become a SNP merely because it exists in one individual.

The source threshold is:

```text
≥1% population frequency
```

---

# 470. De novo mutation and inherited SNP are distinct

```text
de novo mutation
→ new in lineage

SNP
→ established population variant
```

---

# 471. Human ancestry should not be represented as discrete biological races

The chapter describes migration, admixture, and shared variation.

### Hard project rule

Do not turn continuous population history into rigid biological race categories.

---

# 472. Neanderthal-derived sequence is local genomic ancestry

The source's ~2% value does not mean every cell contains a separate 2% "Neanderthal compartment."

It means portions of sequence derive from Neanderthal ancestry.

---

# 473. BiologicalTime spans radically different scales in Chapter 9

```text
milliseconds–seconds:
molecular enzyme events

minutes–hours:
viral replication cycles

cell generations:
mutation/transposition

organism generations:
allele inheritance

thousands of years:
recent human adaptation

millions of years:
gene-family divergence

billions of years:
deep phylogeny
```

---

# 474. EvolutionaryTime should be distinct from ordinary BiologicalTime playback

Recommended architecture:

```text
BiologicalTime:
events within organism/cell

LineageTime:
cell/organism generations

EvolutionaryTime:
long-timescale lineage divergence
```

### `PROJECT_CONSTRAINT`

Do not force a 500-million-year evolutionary process into the same physical playback rate used for molecular diffusion.

---

# 475. Evolutionary visualization should use event compression

For a globin-family scene:

```text
ancestral gene
→ duplication event
→ branches
→ accumulated mutations
→ expression divergence
→ modern family
```

rather than simulating every nucleotide replication over 500 million years.

---

# 476. Compression must remain explicit

Scientific inspector should distinguish:

```text
real elapsed evolutionary time
from
compressed cinematic playback time
```

---

# 477. Scale continuity — gene duplication

A user should be able to move:

```text
chromosome pair
→ repeated flanking sequences
→ misalignment
→ crossover
→ duplicated gene
→ descendant gene family
```

without switching to unrelated cartoons.

---

# 478. Scale continuity — transposon

```text
chromosome
→ transposon locus
→ transposase binding
→ DNA cleavage/copying
→ new insertion
→ regulatory/coding consequence
→ lineage phenotype
```

---

# 479. Scale continuity — retrotransposon

```text
L1 locus
→ transcription
→ RNA
→ reverse transcription
→ dsDNA copy
→ integration
→ increased genomic copy number
```

---

# 480. Scale continuity — virus

```text
virion
→ host-cell entry
→ genome release
→ molecular replication
→ protein synthesis
→ assembly
→ progeny virions
→ spread to next cell
```

---

# 481. Scale continuity — comparative genomics

Analytical zoom:

```text
species tree
→ chromosome
→ synteny block
→ homologous gene
→ exon
→ nucleotide alignment
```

---

# 482. Chapter 9 consistency tests

A future implementation fails Chapter 9 review if it implies:

```text
evolution intentionally creates needed mutations
FALSE

selection causes the correct mutation to appear
FALSE

somatic mutations are routinely inherited by offspring
FALSE

all mutations are harmful
FALSE

all mutations are beneficial
FALSE

all introns are functionless
FALSE

gene duplication automatically produces a useful new gene
FALSE

pseudogenes are deleted immediately
FALSE

whole-genome duplication means every duplicate remains forever
FALSE

exon shuffling requires arbitrary new protein domains
FALSE

mobile elements only move physically through the nucleus
FALSE

all transposons use the same mechanism
FALSE

replicative transposition removes the donor copy
FALSE

cut-and-paste transposition always preserves donor copy
FALSE

Alu encodes its own reverse transcriptase
FALSE

L1 and Alu are identical elements
FALSE

horizontal transfer is ordinary parent-to-child inheritance
FALSE

homologous genes are genes that merely look similar
FALSE

highly conserved genes never mutate
FALSE

purifying selection prevents mutations from arising
FALSE

phylogenetic trees are physical cell structures
FALSE

TADs and phylogenetic branches are the same type of object
FALSE

genome size directly predicts gene number
FALSE

human complexity is explained by having vastly more protein-coding genes
FALSE

all conserved DNA encodes protein
FALSE

all nonconserved DNA is useless
FALSE

virus particles reproduce autonomously outside cells
FALSE

all viruses have DNA genomes
FALSE

all viruses have RNA genomes
FALSE

all viruses have lipid envelopes
FALSE

coronavirus RNA replication uses host DNA-dependent RNA polymerase
FALSE

retrovirus integrates RNA directly into host chromosome
FALSE

reverse transcriptase produces only RNA
FALSE

provirus means viral DNA is no longer present
FALSE

SNP means any private single-base mutation
FALSE

every human carries the same SNP alleles
FALSE

Neanderthal ancestry is a separate organelle-like genomic block
FALSE
```

---

# 483. Cross-chapter dependencies

## Chapter 2

Provides:

- nucleotide chemistry
- base pairing
- DNA/RNA physical structure

## Chapter 3

Provides:

- energetics
- enzyme catalysis

## Chapter 4

Provides:

- protein domains
- allostery
- protein structure/function

## Chapter 5

Provides:

- chromosomes
- chromatin
- heterochromatin
- chromosome organization

## Chapter 6

Provides:

- DNA replication
- mutation sources
- DNA repair
- homologous recombination

## Chapter 7

Provides:

- codons
- ORFs
- transcription
- RNA splicing
- translation

## Chapter 8

Provides:

- regulatory DNA
- transcription regulators
- gene-expression state
- RNAi
- CRISPR introduction
- cell differentiation

## Chapter 10

Will refine:

- DNA sequencing
- RNA-Seq
- genome analysis
- gene cloning
- CRISPR engineering
- experimental gene-function methods

## Chapter 19

Will refine:

- meiosis
- recombination
- gamete formation
- inheritance
- population-genetic consequences

## Chapter 20

Will refine:

- somatic mutation and cancer
- stem-cell lineages
- tissue evolution within organisms

---

# 484. Chapter 9 core causal model

```text
DNA REPLICATION / REPAIR
occasionally produces mutation

GERM-LINE MUTATION
can enter offspring

SOMATIC MUTATION
remains within somatic lineage

GENE DUPLICATION
creates redundant copies

DIVERGENCE
specializes duplicated copies

UNEQUAL CROSSING-OVER
can duplicate/delete genes

WHOLE-GENOME DUPLICATION
changes ploidy

EXON SHUFFLING
recombines protein-domain modules

MOBILE ELEMENTS
insert, duplicate, rearrange, and rewire DNA

HORIZONTAL GENE TRANSFER
moves DNA across organism/species boundaries

NATURAL SELECTION
changes persistence of variants

PURIFYING SELECTION
removes disruptive variation

NEUTRAL VARIATION
accumulates and records lineage history

COMPARATIVE GENOMICS
reconstructs ancestry and functional constraint

VIRUSES
move genetic information between cells

RNA VIRUSES
may use RNA-dependent RNA polymerases

RETROVIRUSES
use reverse transcription and DNA integration

HUMAN GENOMES
contain coding DNA, regulatory DNA, functional RNAs,
repeats, transposon fossils, pseudogenes, and variation
```

---

# 485. Chapter 9's deepest project lesson

A genome should not be represented as a static textbook page.

It has:

```text
current sequence
+
ancestral history
+
duplication history
+
mobile-element history
+
regulatory evolution
+
population variation
+
lineage-specific mutations
```

The genome inside the current cell is a physical record of events that occurred across billions of years.

---

# 486. Source quantitative register

| Quantity | Chapter 9 value/context | Status |
|---|---:|---|
| common cellular ancestry | ~3.5 billion years | source-era |
| E. coli division time in lab | ~20–25 min | source |
| E. coli mutation frequency | ~3 changes / 10^10 bp replicated | verify |
| E. coli genome | 4.6 × 10^6 bp | source-era |
| same-genome daughter probability | ~99.99% | source-era |
| cattle domestication/lactase selection | ~10,000 years | source-era |
| simple globin length | ~150 aa | source |
| ancestral α/β duplication | ~500 million years | source-era |
| α/β chromosomal separation | ~300 million years | source-hypothesis |
| protein-domain size in exon-shuffling proposal | ~30–50 aa | source-era |
| E. coli horizontally acquired genome fraction | ~1/5 | source-era |
| E. coli HGT interval | past ~100 Myr | source-era |
| worm/fly/vertebrate split | >600 Myr | source-era |
| cross-species homolog fraction | ~50% | source-era |
| human–chimp nucleotide difference | ~1.2% | source-era |
| human–orangutan difference | >3% | source-era |
| human/chimp Alu copies | ~1 million | source |
| shared Alu positions | >99% | source |
| human–mouse split | ~90 Myr | source-era |
| human–mouse changed nucleotides | ~50% | source-era |
| conserved human mammalian DNA | ~4.5% | source-era |
| fish–mammal split | ~400 Myr | source-era |
| mammalian genome size | ~3 × 10^9 bp | source |
| Fugu genome | ~400 million bp | source |
| microbial biomass | ~20% | source-era |
| animal biomass | ~0.4% | source-era |
| L1 fraction of human genome | ~15% | source-era |
| Alu copies | ~1 million | source |
| Alu fraction | ~10% | source |
| mobile-element-derived human DNA | nearly half | source |
| simplest viral genome | as few as 3 genes | source |
| giant-virus gene count | >1000 | source |
| SARS-CoV-2 genome | ~30,000 nt | source |
| SARS-CoV-2 replication cycle | ~10 h | verify |
| virions per infected cell | up to ~1000 | verify |
| retrovirus genome | ~7000–12,000 nt | source |
| human genome | 3.1 × 10^9 bp | source-era |
| chromosome 22 | 48 × 10^6 bp | source |
| protein-coding genes | ~20,000 | source-era |
| non-protein-coding genes | ~5000 | source-era |
| median protein-coding gene | 26,000 bp | source-era |
| protein-coding exon fraction | 0.8% | source-era |
| pseudogenes | >20,000 | source-era |
| high-copy repeats | ~50% | source-era |
| simple repeat unit | <14 bp | source |
| segment duplication | 1000–200,000 bp | source |
| highly repetitive heterochromatic DNA | ~10% | source-era |
| average human protein | ~430 aa | source-era |
| coding sequence needed for average protein | ~1300 bp | source |
| human/fly/yeast genes in 50-kb example | 4 / 11 / 26 | source figure |
| human-specific altered/absent conserved regulatory elements | >500 | source-era |
| ORF heuristic | ≥~100 codons | source model |
| random stop spacing | ~20 codons | derived/source |
| small human exon example | ~50 codons / 150 bp | source |
| long intron example | >10,000 bp | source |
| Candida sequence | 7500 bp | source figure |
| RNA-Seq read length in figure | ~200 nt | source-era |
| Neanderthal ancestry | ~2% in many non-African genomes | source-era |
| pairwise human difference | ~0.1% | source-era |
| pairwise human differences | ~3 million | source-era |
| new mutations at birth | ~70 | source-era |
| SNP threshold | ≥1% population | source terminology |
| pairwise SNP differences | ~2.5 × 10^6 | source-era |

---

# 487. Quantitative verification queue

Before promoting Chapter 9 source numbers into 2026 simulation constants, externally verify:

## Mutation

- organism-specific mutation rates
- germ-line mutation rates
- somatic mutation rates
- replication-error spectra
- context dependence

## Human genome

- current genome size definitions
- complete chromosome lengths
- current protein-coding-gene count
- current noncoding-gene count
- pseudogene count
- repeat-class percentages
- current telomere/centromere sequence annotations

## Transposons

- active L1 copy count
- Alu copy number
- insertion rates
- transposition target biases
- host suppression pathways

## Comparative genomics

- current divergence estimates
- human–chimp sequence identity conventions
- human–mouse conserved fraction
- synteny-block statistics

## Human population history

- Neanderthal ancestry distributions
- admixture dates
- out-of-Africa timing
- Americas settlement dates
- de novo mutation counts

## Viruses

- SARS-CoV-2 replication kinetics
- burst size
- polymerase mechanism
- current antiviral mechanism details
- viral genome-classification updates

---

# 488. Source-era caution register

Do not silently modernize or universalize:

```text
human protein-coding gene count
noncoding gene count
human genome completion status
$200 sequencing cost
Neanderthal ancestry fraction
human migration dates
SARS-CoV-2 replication time
SARS-CoV-2 virion yield
human–chimp percent difference
human–mouse divergence statistics
microbial biomass percentage
Alu/L1 percentages
```

Retain them as source statements until external verification.

---

# 489. Provenance/visualization declaration

For each future evolutionary visualization explicitly separate:

```text
REAL BIOLOGY:
what the chapter/source says happened

VISUAL REPRESENTATION:
how the event is compressed or shown

KNOWN EXAGGERATION:
e.g. DNA thickness, mutation visibility, timescale compression

DO NOT INTERPRET AS:
what the visualization must not imply
```

---

# 490. Example — unequal crossing-over declaration

```text
REAL BIOLOGY:
misaligned homologous recombination between similar sequences can generate one duplicated and one deleted product.

VISUAL REPRESENTATION:
two homologous chromosome segments align, repeated sequences pair incorrectly, crossover occurs, products separate.

KNOWN EXAGGERATION:
chromosome spacing and DNA thickness enlarged for visibility.

DO NOT INTERPRET AS:
genes intentionally choosing to duplicate.
```

---

# 491. Example — mobile-element declaration

```text
REAL BIOLOGY:
a mobile element changes genomic position through transposition machinery.

VISUAL REPRESENTATION:
element sequence highlighted, DNA cut/copied, target insertion shown.

KNOWN EXAGGERATION:
movement trajectory slowed and spatially enlarged.

DO NOT INTERPRET AS:
the DNA fragment swimming through the nucleus as a freely moving organism unless an actual intermediate exists.
```

---

# 492. Example — natural-selection declaration

```text
REAL BIOLOGY:
variants arise before selection; environmental conditions alter relative reproductive success.

VISUAL REPRESENTATION:
population of many lineages; rare pre-existing variants; selective environment; lineage frequencies change.

KNOWN EXAGGERATION:
generations compressed.

DO NOT INTERPRET AS:
environment instructing the mutation.
```

---

# 493. Example — phylogeny declaration

```text
REAL BIOLOGY:
modern sequences contain evidence of shared ancestry.

VISUAL REPRESENTATION:
sequence alignment transformed into inferred branching tree.

KNOWN EXAGGERATION:
branch length may be schematic unless quantitatively sourced.

DO NOT INTERPRET AS:
tree branches physically existing inside genomes.
```

---

# 494. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 9: “How Genes and Genomes Evolve.”**

Printed pages:

```text
307–344
```

PDF pages reviewed:

```text
342–379
```

Major sections:

```text
GENERATING GENETIC VARIATION

RECONSTRUCTING LIFE'S FAMILY TREE

MOBILE GENETIC ELEMENTS AND VIRUSES

EXAMINING THE HUMAN GENOME
```

Supporting material reviewed:

```text
Figures 9–1 through 9–38

Table 9–1
Viruses That Cause Human Disease

Table 9–2
Some Vital Statistics for the Human Genome

How We Know:
Counting Genes

Essential Concepts

Questions 9–1 through 9–19
```

---

# 495. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- individual genome variation
- common-ancestry framing
- six major genetic-change mechanisms
- germ-line/somatic distinction
- gamete/zygote lineage
- point-mutation definition
- E. coli mutation-rate source values
- random-before-selection logic
- His-reversion experiment
- neutral/synonymous mutation logic
- malaria regulatory-mutation example
- lactase-persistence example
- independent European/African variants
- gene duplication/divergence
- homologous recombination
- unequal crossing-over
- repeated-sequence misalignment
- gene-family definition
- globin ancestral duplication
- single-chain globin scale
- α2β2 hemoglobin
- cooperative O2 binding
- fetal hemoglobin
- γG/γA/δ/β relationships
- chromosome 11 β cluster
- chromosome 16 α cluster
- pseudogenes
- whole-genome duplication
- Xenopus ploidy
- crop polyploidy
- exon shuffling
- intron-mediated recombination
- protein-domain modularity
- mobile-element definition
- insertion mutation
- Drosophila antenna-to-leg example
- teosinte/corn example
- mobile elements as recombination substrates
- horizontal gene transfer
- conjugation
- sex pilus
- antibiotic resistance
- E. coli acquired-DNA source estimate
- homologous-gene definition
- selection/purifying-selection rules
- neutral molecular divergence
- phylogenetic-tree definition
- chromosome-2 fusion
- human/chimp source comparison
- ancestral leptin reconstruction
- Alu positional conservation
- human/mouse synteny
- break-and-join source values
- human/mouse sequence divergence
- conserved noncoding DNA
- 4.5% mammalian conservation
- fish/mammal comparison
- Fugu genome compression
- small-subunit-rRNA phylogeny
- three domains
- microbial-biomass source statement
- DNA-only transposons
- cut-and-paste transposition
- replicative transposition
- transposase
- IS3/Tn3/AmpR
- accidental exon mobilization
- retrotransposons
- L1
- Alu
- reverse transcriptase
- virus definition
- viral host dependence
- Table 9–1
- Figure 9–26 morphology/envelopes
- hypothetical viral replication cycle
- SARS-CoV-2 RNA-dependent RNA polymerase
- complementary-RNA intermediate
- ~30-kb genome
- source 10-hour / 1000-particle values
- remdesivir source explanation
- retrovirus
- reverse transcription
- integrase
- provirus
- latency
- HIV
- human-genome length
- chromosome 22 organization
- Table 9–2 values
- repetitive-DNA classes
- LINE/SINE definitions
- simple repeats
- segment duplications
- gene density
- regulatory evolution
- Figure 9–34
- human-specific regulatory-loss hypothesis
- How We Know — Counting Genes
- ORF heuristic
- six reading frames
- random stop-codon expectation
- intron/exon gene-prediction problem
- RNA-Seq
- Neanderthal genome
- admixture source values
- human pairwise variation
- de novo mutations
- SNP definition and threshold
- all 19 question-derived analyses
- all `SOURCE_SCALE`
- all `SOURCE_MODEL`
- all `SOURCE_DERIVED`
- all `SOURCE_HYPOTHESIS`
- all `SOURCE_ERA_STATEMENT`
- all `DO_NOT_INFER`
- all architecture schemas
- all timescale rules
- all source trace metadata

---

# END OF CHAPTER 09 CANON

Recommended repository destination:

```text
science/chapters/09_how_genes_and_genomes_evolve.md
```

Recommended commit message:

```text
science: add Chapter 9 genes and genomes evolution canon
```

Do not begin Chapter 10 merely because this file exists.

Chapter 10 will shift from naturally occurring genomes to the experimental toolkit used to read, clone, sequence, perturb, edit, and functionally analyze genes.
