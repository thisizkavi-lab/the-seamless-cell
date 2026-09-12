---
title: "The Seamless Cell — Science Canon — Chapter 10"
subtitle: "Analyzing the Structure and Function of Genes"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 10, printed pages 345–380 (PDF approximately pages 380–415)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 10 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 10 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapters 1–9 established:

```text
what cells contain
how DNA is organized
how DNA is copied
how genes are expressed
how gene expression is regulated
how genomes evolve
```

Chapter 10 introduces the **experimental interface**:

```text
biological reality
→ experimental perturbation
→ measurement
→ inference
```

The chapter's deepest project rule is:

> **An experimental readout is not identical to the biological state itself. Every technique measures, enriches, labels, amplifies, perturbs, or reconstructs some aspect of biology. The Seamless Cell must keep the underlying biological WorldState distinct from the Experimental/Measurement State used to observe it.**

This chapter must eventually control how The Seamless Cell represents:

- restriction enzymes
- restriction sites
- blunt ends
- sticky ends
- agarose/polyacrylamide gels
- electrophoresis
- fluorescent DNA staining
- DNA ligase
- recombinant DNA
- cloning vectors
- plasmids
- plasmid replication origins
- bacterial transformation
- DNA cloning
- genomic libraries
- cDNA libraries
- mRNA purification
- poly-T priming
- reverse transcription
- RNase treatment
- DNA polymerase
- nucleic-acid hybridization
- DNA/RNA probes
- denaturation
- renaturation
- PCR
- primer design
- thermostable DNA polymerase
- genomic PCR
- RT-PCR/cDNA amplification
- diagnostic PCR
- forensic DNA fingerprinting
- STR loci
- Sanger sequencing
- ddNTPs
- fluorescent capillary sequencing
- shotgun sequencing
- repetitive-sequence assembly problems
- BACs
- clone-by-clone genome sequencing
- restriction maps
- Illumina sequencing
- sequencing-by-synthesis
- reversible terminators
- DNA clusters
- SMRT sequencing
- nanopore-like single-molecule sequencing
- comparative sequence analysis
- RNA-Seq
- transcriptome
- single-cell RNA-Seq
- cellular barcodes
- expression clustering
- in situ hybridization
- FISH
- ribosome profiling
- reporter genes
- β-galactosidase reporters
- GFP
- GFP fusion proteins
- classical genetics
- random mutagenesis
- reverse genetics
- RNAi
- gene knockdown
- transgenic organisms
- gene replacement
- knock-in mice
- knockout mice
- conditional knockouts
- Cre recombinase
- LoxP sites
- CRISPR-Cas9 editing
- guide RNA
- homologous recombination donor templates
- catalytically inactive Cas9
- CRISPR activation/repression
- disease models
- plant callus
- Agrobacterium-mediated transformation
- golden rice
- expression vectors
- recombinant protein production
- recombinant vaccines
- mRNA vaccines
- gene-to-protein and protein-to-gene workflows

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 10.

## `SOURCE_SCALE`

A numerical value, count, length, concentration, time, frequency, or scale explicitly supplied by Chapter 10.

## `SOURCE_MODEL`

A schematic or mechanistic model presented by the chapter.

## `SOURCE_DERIVED`

A direct calculation or inference based only on chapter-supported facts.

## `SOURCE_TERMINOLOGY`

Terminology used by the source and retained in this canon.

## `SOURCE_ERA_STATEMENT`

A statement likely to depend on the textbook's publication period and requiring modern verification before use as a current empirical constant.

## `SOURCE_HYPOTHESIS`

A proposal or interpretation presented with uncertainty.

## `PROJECT_CONSTRAINT`

A rule for The Seamless Cell's architecture, visualization, or educational behavior.

## `VERIFY_QUANT`

A numerical source statement retained but not yet promoted to an exact simulation constant.

## `LATER_CHAPTER_REFINEMENT`

A concept introduced here whose deeper biological treatment occurs elsewhere.

## `DO_NOT_INFER`

A hard guardrail against silently extending a technique beyond what the chapter supports.

---

# 1. Chapter structure

Chapter 10 contains three major sections:

```text
1. ISOLATING AND CLONING DNA MOLECULES

2. SEQUENCING DNA

3. EXPLORING GENE FUNCTION
```

The main subsection flow is:

```text
ISOLATING AND CLONING DNA MOLECULES

- Restriction Enzymes Cut DNA Molecules at Specific Sites
- Gel Electrophoresis Separates DNA Fragments of Different Sizes
- DNA Cloning Begins with the Production of Recombinant DNA
- Recombinant DNA Can Be Copied Inside Bacterial Cells
- An Entire Genome Can Be Represented in a DNA Library
- Hybridization Provides a Sensitive Way to Detect Specific Nucleotide Sequences
- PCR Can Be Used to Produce Specific DNA Fragments in a Test Tube
- PCR Can Be Used for Diagnostic and Forensic Applications

SEQUENCING DNA

- Dideoxy Sequencing Depends on the Analysis of DNA Chains Terminated at Every Position
- Next-Generation Sequencing Techniques Make Genome Sequencing Faster and Cheaper
- Comparative Genome Analyses Can Identify Genes and Predict Their Function

EXPLORING GENE FUNCTION

- Analysis of mRNAs Provides a Snapshot of Gene Expression
- In Situ Hybridization Reveals When and Where a Gene Is Expressed
- Ribosome Profiling Reveals Which mRNAs in a Cell Are Being Translated into Proteins
- Reporter Genes Allow Specific Proteins to Be Tracked in Living Cells
- The Study of Mutants Can Help Reveal the Function of a Gene
- RNA Interference (RNAi) Inhibits the Activity of Specific Genes
- A Known Gene Can Be Deleted or Replaced with an Altered Version
- Genes Can Be Edited with Great Precision Using the Bacterial CRISPR System
- Mutant Organisms Provide Useful Models of Human Disease
- Transgenic Plants Are Important for Both Cell Biology and Agriculture
- DNA Cloning Allows Any Protein to Be Produced in Large Amounts
```

Supporting material includes:

```text
Figures 10–1 through 10–37

How We Know:
Sequencing the Human Genome

Essential Concepts

Questions 10–1 through 10–13
```

---

# 2. Experimental biology changes what can be known

The source begins from the technological fact that whole genomes can now be:

- isolated
- sequenced
- compared
- manipulated
- introduced into cells and organisms

---

# 3. DNA technology links sequence to function

The chapter treats DNA technology as the route from:

```text
gene sequence
→ gene manipulation
→ biological phenotype
```

and also:

```text
protein
→ partial amino-acid sequence
→ DNA database
→ gene
```

---

# 4. DNA technologies affect medicine

The source lists applications including:

- detecting inherited mutations
- identifying disease-risk variants
- producing insulin
- producing blood-clotting proteins
- producing vaccines

---

# 5. Selective breeding is a form of genetic manipulation

Figure 10–1 connects older selective breeding to modern deliberate genetic engineering.

### `SOURCE_MODEL`

The chapter's point is continuity of selection/manipulation, not molecular equivalence between breeding and recombinant DNA editing.

---

# 6. Dog domestication source time

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The figure gives:

```text
~10,000–15,000 years ago
```

for domestication from gray wolf ancestry.

---

# 7. A gene is not normally a physically separate object

In a cell, a gene is:

```text
a sequence embedded in a much larger DNA molecule
```

---

# 8. E. coli genome scale

**Status: `SOURCE_SCALE`**

The source repeats:

```text
4.6 million nucleotide pairs
```

---

# 9. DNA cloning

```text
DNA cloning
=
production of many identical copies
of a selected DNA sequence
```

---

# 10. Classical versus PCR cloning

The chapter contrasts:

```text
classical cloning:
DNA inserted into replicating vector
→ copied in living host cells

PCR:
DNA amplified directly in a test tube
```

---

# 11. Restriction enzyme

```text
restriction enzyme
=
bacterial nuclease that cleaves double-stranded DNA
at a specific nucleotide sequence
```

---

# 12. Restriction enzyme biological origin

The enzymes were discovered through bacterial systems that degrade foreign DNA.

---

# 13. "Restriction" source meaning

The enzymes restrict transfer of DNA among bacterial strains.

---

# 14. Host bacterial DNA is protected

The source states bacteria chemically modify their own DNA at relevant sites so their restriction enzymes do not cleave it.

### `LATER_CHAPTER_REFINEMENT`

The exact methylation/protection mechanisms are not developed here.

---

# 15. Restriction-site length

**Status: `SOURCE_SCALE`**

Typical recognition sequences:

```text
4–8 nucleotide pairs
```

---

# 16. Restriction sites occur statistically throughout long DNA

For random sequence, short recognition motifs appear by chance.

---

# 17. Four-base-site expected frequency

For an unbiased random sequence:

```text
4^4 = 256
```

so a particular 4-bp sequence is expected approximately:

```text
once per 256 bp
```

---

# 18. Eight-base-site expected frequency

```text
4^8 = 65,536
```

so a particular 8-bp sequence is expected approximately:

```text
once per 65,536 bp
```

---

# 19. HaeIII

Figure 10–2 uses:

```text
HaeIII
```

as a restriction enzyme recognizing a 4-bp target.

---

# 20. EcoRI

Figure 10–2 uses:

```text
EcoRI
```

as a restriction enzyme producing staggered cuts.

---

# 21. HindIII

Figure 10–2 uses:

```text
HindIII
```

as another staggered-cut restriction enzyme.

---

# 22. Restriction sites are often palindromic

The chapter notes many recognition sequences are symmetrical around a central point.

---

# 23. Blunt ends

A cut straight across both strands produces:

```text
blunt-ended DNA
```

---

# 24. Sticky ends

Staggered cutting produces:

```text
short single-stranded overhangs
```

called:

```text
sticky ends
```

---

# 25. Sticky-end base pairing

Complementary sticky ends can base-pair, aligning DNA fragments before covalent ligation.

---

# 26. Restriction digest is reproducible

For the same DNA molecule and same restriction enzyme:

```text
same cleavage sites
→ same fragment set
```

---

# 27. Restriction enzymes do not know where genes are

### `DO_NOT_INFER`

They cleave recognition sequences wherever those sequences occur.

They do not preferentially cut between genes.

---

# 28. Gel electrophoresis

```text
gel electrophoresis
=
separation of DNA fragments by migration through a porous gel
under an electric field
```

---

# 29. Gel materials

The source names:

- agarose
- polyacrylamide

---

# 30. DNA charge

DNA is negatively charged.

---

# 31. Electrophoretic direction

DNA migrates toward the:

```text
positive electrode
```

---

# 32. Size-dependent mobility

Smaller fragments move faster/farther through the gel matrix than larger fragments.

---

# 33. Why large fragments migrate slowly

Large DNA molecules are hindered more strongly by the gel's pore network.

---

# 34. DNA bands

DNA fragments of equal length accumulate at similar positions, creating visible bands after staining.

---

# 35. Gel band is a population

A gel band contains:

```text
many DNA molecules
of approximately the same length
```

not a single molecule.

---

# 36. DNA size markers

Fragments of known length are run in parallel to estimate unknown fragment sizes.

---

# 37. Source marker sizes in Figure 10–3

The displayed ladder includes values such as:

```text
2 kb
2.3 kb
4.3 kb
6.5 kb
9 kb
23 kb
```

---

# 38. Fluorescent DNA staining

Separated DNA can be visualized using a dye that fluoresces when bound to DNA.

---

# 39. UV illumination

The source describes viewing labeled DNA bands under ultraviolet illumination.

---

# 40. Gel extraction

A desired band can be:

```text
excised from gel
→ DNA extracted
```

---

# 41. Recombinant DNA

```text
recombinant DNA
=
DNA molecule assembled experimentally
from DNA fragments originating from different sources
```

---

# 42. Vector

```text
vector
=
DNA carrier capable of being replicated
and used to carry an inserted sequence
```

---

# 43. DNA ligase

```text
DNA ligase
=
enzyme that covalently joins DNA backbones
```

---

# 44. Cellular origin of DNA ligase function

In cells DNA ligase seals nicks arising during:

- DNA replication
- DNA repair

---

# 45. In vitro ligation

The same chemistry can join DNA fragments in a test tube.

---

# 46. ATP requirement for ligation

Figure 10–4 states ATP provides energy for resealing the sugar–phosphate backbone.

---

# 47. Same-enzyme sticky-end ligation

Fragments cut with the same staggered-cut enzyme often have complementary overhangs and can align by base pairing.

---

# 48. Different-end ligation

The source shows DNA fragments produced by different enzymes can still be joined after end modification.

---

# 49. Fill-in reaction

Figure 10–4 shows a staggered end can be filled in using:

```text
DNA polymerase + dNTPs
```

before ligation.

---

# 50. Plasmid

```text
plasmid
=
small circular double-stranded DNA molecule
capable of replication independently of the bacterial chromosome
```

---

# 51. Plasmid replication origin

A cloning plasmid contains its own:

```text
origin of replication
```

---

# 52. Restriction site in vector

Cloning vectors contain convenient cleavage sites for inserting foreign DNA.

---

# 53. First cloning-plasmid figure size

**Status: `SOURCE_SCALE`**

Figure 10–5 describes an early plasmid with approximately:

```text
9000 nucleotide pairs
```

---

# 54. Electron-micrograph scale

**Status: `SOURCE_SCALE`**

Figure 10–5:

```text
0.5 µm
```

---

# 55. DNA appearance in EM is exaggerated by staining

The source warns staining makes DNA appear thicker than it physically is.

### `PROJECT_CONSTRAINT`

Visualizations must not infer actual DNA diameter from that micrograph.

---

# 56. Natural plasmids can carry antibiotic-resistance genes

The source connects plasmids to horizontal spread of antibiotic resistance.

---

# 57. Classical cloning workflow

```text
purify plasmid
→ cut plasmid at one site
→ prepare DNA insert
→ ligate insert into plasmid
→ recombinant plasmid
→ introduce into bacterium
→ bacterial growth
→ many plasmid copies
→ purify plasmid
```

---

# 58. Transformation

```text
transformation
=
uptake of extracellular DNA by a bacterial cell
```

in this chapter.

---

# 59. Natural transformation

Some bacteria naturally take up DNA released by dead cells.

---

# 60. Laboratory transformation

E. coli can be experimentally induced to take up recombinant DNA.

---

# 61. Transformation is distinct from conjugation

### Hard distinction

```text
transformation:
uptake of free DNA

conjugation:
direct cell-to-cell DNA transfer
```

---

# 62. Source bacterial doubling time in cloning example

**Status: `SOURCE_SCALE`**

The chapter uses:

```text
~30 minutes
```

for the growing cloning culture.

---

# 63. One-day plasmid amplification

The source states that in about:

```text
24 hours
```

engineered bacteria can generate:

```text
hundreds of millions of plasmid copies
```

---

# 64. Bacterial lysis

After amplification, bacteria are broken open to recover recombinant plasmid DNA.

---

# 65. Insert recovery

The insert can be cut back out with restriction enzyme and separated from vector by gel electrophoresis.

---

# 66. Genomic library

```text
genomic library
=
collection of cloned DNA fragments
that collectively represent an organism's genome
```

---

# 67. Genomic-library construction

Source workflow:

```text
genomic DNA
→ restriction digestion
→ millions of DNA fragments
→ ligate fragments into vectors
→ transform bacteria
→ collection of clones
```

---

# 68. Library clone identity

Each bacterial clone ideally carries:

```text
a different genomic fragment
```

---

# 69. Genomic library represents genome regardless of tissue

With rare exceptions, genomic DNA sequence is essentially the same across cell types of one organism.

---

# 70. Eukaryotic genomic library contains much noncoding DNA

It includes:

- introns
- regulatory DNA
- repetitive DNA
- spacer/intergenic DNA
- exons

---

# 71. cDNA

```text
cDNA
=
complementary DNA copied from RNA
```

---

# 72. cDNA library

```text
cDNA library
=
collection of DNA copies of the mRNAs
present in a particular cell/tissue/condition
```

---

# 73. cDNA library is expression-state dependent

Different cell types produce different cDNA libraries because they express different mRNAs.

---

# 74. Developmental state changes cDNA library

Different developmental times can produce different transcript sets.

---

# 75. Genomic versus cDNA library

```text
genomic library:
represents genome

cDNA library:
represents expressed mRNAs
```

---

# 76. cDNA predominantly contains coding/transcribed sequence

Compared with genomic clones, cDNA lacks:

- introns
- promoters
- most regulatory DNA

---

# 77. Why cDNA is useful for bacterial expression

Bacteria generally cannot splice mammalian introns correctly.

Therefore mammalian protein production in bacteria often requires:

```text
intron-free cDNA
```

---

# 78. mRNA purification

Figure 10–9 begins by isolating mRNA from cells.

---

# 79. Poly-A tail enables poly-T priming

The source figure uses:

```text
poly-T primer
```

that hybridizes to the mRNA poly-A tail.

---

# 80. Reverse transcriptase in cDNA synthesis

Reverse transcriptase makes the first DNA strand using mRNA as template.

---

# 81. RNA/DNA hybrid

The first cDNA step produces:

```text
RNA/DNA hybrid
```

---

# 82. RNase treatment

RNA is partially degraded.

---

# 83. Residual RNA fragments can prime second-strand synthesis

The source figure shows a remaining RNA fragment acting as primer for DNA polymerase.

---

# 84. DNA polymerase makes second cDNA strand

The final product is:

```text
double-stranded cDNA
```

---

# 85. cDNA 5′-end loss

The source warns extreme 5′ ends of original mRNAs may be missing from cDNA libraries.

---

# 86. Hybridization

```text
hybridization
=
base-pairing between complementary nucleic-acid strands
```

---

# 87. DNA denaturation

Heating weakens/disrupts hydrogen bonding between complementary bases and separates strands.

---

# 88. Source denaturation temperature

**Status: `SOURCE_SCALE`**

The source gives roughly:

```text
90°C
```

as an example for heat denaturation.

---

# 89. Alkali denaturation

The source also notes DNA can be denatured by alkaline treatment.

---

# 90. Renaturation

When conditions are restored, complementary strands can re-form a double helix.

---

# 91. DNA–DNA hybridization

Complementary DNA strands can hybridize.

---

# 92. DNA–RNA hybridization

Complementary DNA and RNA can hybridize.

---

# 93. RNA–RNA hybridization

Complementary RNAs can hybridize.

---

# 94. Probe

```text
probe
=
labeled single-stranded nucleic acid
designed to hybridize to a complementary target sequence
```

---

# 95. Probe labels

The chapter mentions:

- fluorescent labels
- radioactive labels

---

# 96. Probe specificity arises from base complementarity

The probe does not "recognize a gene name."

It recognizes nucleotide sequence.

---

# 97. PCR

```text
PCR
=
polymerase chain reaction
```

---

# 98. PCR is cell-free amplification

PCR takes place entirely in a test tube.

---

# 99. PCR combines hybridization and DNA synthesis

Its specificity depends on:

- primer–template complementarity
- DNA polymerase extension

---

# 100. PCR primer

```text
primer
=
short DNA sequence providing a free 3′ end
for DNA polymerase
```

---

# 101. Primers define target boundaries

A primer pair brackets the region to be amplified.

---

# 102. Primer design requires target sequence knowledge

The experimenter chooses primers based on known sequence around the region of interest.

---

# 103. PCR cycle — step 1

```text
heat
→ separate DNA strands
```

---

# 104. PCR cycle — step 2

```text
cool
→ primers anneal to complementary target sites
```

---

# 105. PCR cycle — step 3

```text
DNA polymerase + dATP + dGTP + dCTP + dTTP
→ extend primers
→ synthesize new DNA
```

---

# 106. Thermostable DNA polymerase

PCR requires a polymerase that survives repeated high-temperature denaturation.

---

# 107. Source enzyme origin

The chapter states such polymerase is isolated from a:

```text
thermophilic bacterium
```

---

# 108. Why polymerase is not re-added every cycle

Its heat stability allows repeated cycles in the same tube.

---

# 109. PCR amplification is exponential in idealized model

Each completed double-stranded target molecule can become template in the next cycle.

---

# 110. Ideal amplification relation

For one starting double-stranded molecule:

```text
N ≈ 2^cycles
```

before reagent limitations and nonideal efficiency.

---

# 111. Source cycle range

**Status: `SOURCE_SCALE`**

The chapter states billions of copies can be produced after approximately:

```text
20–30 cycles
```

---

# 112. PCR target purity improves over cycles

Early products include fragments extending beyond exact target ends.

Later cycles increasingly produce fragments defined exactly by both primers.

---

# 113. Figure 10–12 after 3 cycles

The source states:

```text
16 DNA chains
```

are present, of which:

```text
8
```

match one or the other exact target-length strand.

---

# 114. Figure 10–12 after 7 total cycles

The source states:

```text
240 of 256 DNA chains
```

have the exact bracketed target length.

---

# 115. Genomic PCR

PCR from purified chromosomal DNA amplifies the selected genomic region including introns if present.

---

# 116. cDNA PCR

RNA can first be reverse-transcribed and then amplified as DNA.

---

# 117. RT-PCR source logic

For an RNA template:

```text
RNA
→ reverse transcription
→ cDNA
→ PCR
```

---

# 118. PCR can bypass library construction

If the target sequence is known sufficiently to design primers, PCR can directly amplify it from complex nucleic-acid samples.

---

# 119. Synthetic DNA source capability

**Status: `SOURCE_ERA_STATEMENT`**

The chapter states double-stranded DNA of:

```text
up to a few thousand base pairs
```

can be ordered/synthesized chemically.

---

# 120. Diagnostic PCR

PCR can detect trace pathogen nucleic acid.

---

# 121. SARS-CoV-2 diagnostic example

Source sequence:

```text
nasal swab
→ extract RNA
→ reverse transcription
→ PCR amplification
→ gel/readout
```

---

# 122. PCR detects nucleic acid, not necessarily viable pathogen

### `PROJECT_CONSTRAINT`

The chapter's method is sequence detection.

Do not equate positive nucleic-acid amplification automatically with active infectious particle count.

---

# 123. Forensic PCR

PCR can amplify trace human DNA from:

- blood
- tissue
- hair-associated material

for identification.

---

# 124. DNA fingerprinting

```text
DNA fingerprint
=
pattern of variable DNA markers
used to distinguish individuals
```

---

# 125. STR

```text
STR
=
short tandem repeat
```

---

# 126. STR examples

The source gives repeats such as:

```text
CACA...
GTGT...
```

---

# 127. STR repeat-count range

**Status: `SOURCE_SCALE`**

At an STR locus the source gives approximately:

```text
4–40 repeats
```

among individuals.

---

# 128. Diploid STR pattern

A person usually carries:

```text
maternal allele
+
paternal allele
```

at one STR locus.

---

# 129. PCR fragment length reports STR repeat count

More repeats:

```text
longer amplicon
→ slower gel migration
```

---

# 130. Multi-locus fingerprint

Combining several STR loci creates a much more distinctive pattern than using one locus.

---

# 131. Source STR matching probability

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Using approximately:

```text
5–10 STR loci
```

the source says chance matching can be about:

```text
1 in 10 billion
```

---

# 132. DNA fingerprint is probabilistic evidence

### Hard project rule

A match is not visual proof of guilt.

It is genetic-evidence likelihood that must be interpreted in context.

---

# 133. Sanger sequencing

```text
dideoxy sequencing
=
Sanger sequencing
```

---

# 134. Core Sanger mechanism

DNA polymerase synthesizes partial copies terminated at many positions by:

```text
ddNTPs
```

---

# 135. ddNTP

```text
dideoxyribonucleoside triphosphate
```

---

# 136. ddNTP lacks 3′-OH

The source emphasizes:

```text
3′ H
instead of
3′ OH
```

---

# 137. Why ddNTP terminates synthesis

Without a 3′ hydroxyl:

```text
next phosphodiester bond cannot form
```

---

# 138. Sanger reaction contains mostly dNTPs

Normal dNTPs permit extension.

Small amounts of fluorescent ddNTPs terminate some chains.

---

# 139. Four ddNTP colors

Each base-specific ddNTP carries a different fluorescent tag.

---

# 140. Product mixture

Sanger sequencing generates DNA products ending at every possible position.

---

# 141. Capillary electrophoresis

Products are separated by length in a thin capillary gel.

---

# 142. Detector reads sequence

As fragments pass the detector:

```text
size order + fluorescent color
→ nucleotide sequence
```

---

# 143. Read is complementary to template

The synthesized strand sequence is complementary to the original template strand.

---

# 144. Sequencing requires primer

Like ordinary DNA polymerization, Sanger sequencing begins from a primer.

---

# 145. Human-genome sequencing relied historically on automated Sanger methods

The chapter connects automated dideoxy sequencing to early genome projects.

---

# 146. Next-generation sequencing

The source groups newer massively parallel methods under next-generation sequencing.

---

# 147. Parallelism is a key advantage

Many DNA fragments are sequenced simultaneously.

---

# 148. Library fragments can be attached to solid support

Examples:

- glass slide
- bead

---

# 149. DNA cluster

PCR amplification on/near a surface can produce a cluster of identical copies derived from one original fragment.

---

# 150. Source cluster copy number

**Status: `SOURCE_SCALE`**

Approximately:

```text
~1000 identical copies
```

per cluster.

---

# 151. Illumina sequencing

The source's main short-read next-generation example is:

```text
Illumina sequencing
```

---

# 152. Illumina uses sequencing by synthesis

DNA polymerase adds one identifiable nucleotide per cycle.

---

# 153. Illumina reversible terminators

Each nucleotide includes:

- base-specific fluorescent label
- temporary 3′ blocking group

---

# 154. One-base-per-cycle logic

After one nucleotide is added:

```text
extension stops
→ image acquired
→ base identity recorded
→ fluorescent tag removed
→ blocking group removed
→ next cycle
```

---

# 155. No normal dNTPs in source Illumina cycle

Figure 10–21 explicitly states only reversible terminator nucleotides are present in the cycle.

---

# 156. Image-based base calling

A digital camera records fluorescence at every cluster after each cycle.

---

# 157. Computational reconstruction

Many overlapping short fragment sequences are assembled into the larger target/genome sequence.

---

# 158. Figure 10–21 slide scale

**Status: `SOURCE_SCALE`**

```text
100 µm
```

---

# 159. Single-molecule real-time sequencing

The chapter names:

```text
SMRT sequencing
```

---

# 160. SMRT source model

A single DNA polymerase and template are positioned in a very small compartment.

Fluorescent nucleotide incorporation is observed in real time.

---

# 161. Nanopore-like single-molecule sequencing

The chapter also describes pulling one DNA molecule through a tiny channel/pore.

---

# 162. Pore signal depends on nucleotide chemistry

Different bases alter current/obstruction differently, allowing sequence inference.

---

# 163. Sequencing readout is an inference from physical signal

### Deep project rule

A sequencing instrument does not "see letters A/T/G/C."

It measures a physical signal:

- fluorescence
- current obstruction
- other chemistry

and software converts that signal into a base call.

---

# 164. Shotgun sequencing

```text
shotgun sequencing
=
randomly fragment genome
→ sequence many fragments
→ reconstruct genome using overlaps
```

---

# 165. Multiple genome copies provide coverage

Overlapping fragments are necessary to reconstruct the original sequence.

---

# 166. Small-genome suitability

The chapter presents shotgun sequencing as particularly straightforward for small genomes.

---

# 167. Haemophilus influenzae source milestone

**Status: `SOURCE_ERA_STATEMENT`**

The source states in:

```text
1995
```

H. influenzae became the first organism whose complete genome was determined by this strategy.

---

# 168. Repeats cause assembly ambiguity

If identical repetitive sequence appears in multiple genomic locations:

```text
short reads may map equally well to several positions
```

---

# 169. Incorrect repeat assembly can delete intervening sequence

Figure 10–19 shows two fragments from different repeat copies appearing to overlap, causing false adjacency.

---

# 170. Repetitive DNA is a computational problem, not just a wet-lab problem

Sequencing chemistry can work correctly while genome assembly is still wrong.

---

# 171. Clone-by-clone sequencing

To reduce repeat ambiguity, the Human Genome Project used a hierarchical strategy.

---

# 172. BAC

```text
BAC
=
bacterial artificial chromosome
```

---

# 173. BAC insert size

**Status: `SOURCE_SCALE`**

The chapter gives:

```text
100–200 kilobase pairs
```

---

# 174. BACs can carry much larger DNA than ordinary plasmids

That allows genomic regions to be separated into manageable long-range pieces.

---

# 175. BAC library construction

Source logic:

```text
human genome
→ overlapping 100–200 kb fragments
→ insert into BACs
→ propagate in E. coli
```

---

# 176. Restriction-site signature

Each BAC can be digested with restriction enzymes to generate a characteristic cleavage pattern.

---

# 177. Restriction map

```text
restriction map
=
ordered positions of restriction-enzyme cleavage sites
along a DNA molecule
```

---

# 178. BAC mapping

Restriction-site signatures allow each BAC to be assigned to a known genomic region.

---

# 179. Source BAC count for human sequencing

**Status: `SOURCE_SCALE`**

The chapter states approximately:

```text
30,000 BACs
```

were selected for sequencing.

---

# 180. BACs were individually shotgun-sequenced

Each mapped BAC was:

```text
sheared
→ sequenced
→ assembled locally
```

---

# 181. Hierarchical assembly reduces chromosome-mixing errors

Because each BAC already has a known map location, repeat-containing reads are less likely to be placed on the wrong chromosome.

---

# 182. Human genome source timeline in How We Know

The chapter says:

```text
2000:
first draft

2004:
completed sequence
```

in the historical project narrative.

### `SOURCE_ERA_STATEMENT`

---

# 183. Later Chapter 9 sequence-completion date differs

Chapter 9 also discussed a 2021 "complete sequence" milestone.

### `PROJECT_CONSTRAINT`

Do not silently erase either source statement.

They refer to different historical completion standards/eras.

---

# 184. Comparative genome analysis

Known sequences can be searched against sequence databases.

---

# 185. Sequence similarity can suggest gene function

If a new sequence is homologous to a characterized gene, its function may be inferred.

---

# 186. Sequence similarity is not proof of identical function

### `DO_NOT_INFER`

Similarity provides evidence/hypothesis.

Experimental validation may still be needed.

---

# 187. Sequence comparison can identify organismal origin

Unknown environmental or clinical DNA can be matched to known species.

---

# 188. Coding regions tend to be more conserved than many noncoding regions

The source refers back to Chapter 9.

---

# 189. Gene-function study requires more than sequence

Knowing a gene encodes a transcription regulator does not tell:

- when it is expressed
- where it is expressed
- which genes it regulates

---

# 190. Transcriptome

```text
transcriptome
=
complete collection of RNAs produced
by a cell under a particular condition
```

---

# 191. RNA-Seq

```text
RNA-Seq
=
deep sequencing of RNAs, commonly after conversion to cDNA
```

---

# 192. RNA-Seq workflow

```text
isolate RNA
→ reverse-transcribe to cDNA
→ sequence cDNA
→ map/quantify reads
```

---

# 193. RNA-Seq is quantitative in the source model

Read abundance can estimate relative transcript abundance.

---

# 194. RNA-Seq detects rare transcripts

Deep sequencing can detect low-abundance RNAs.

---

# 195. RNA-Seq detects alternative splicing

Reads can distinguish transcript isoforms.

---

# 196. RNA-Seq detects sequence variants in transcripts

mRNA sequence variation can be observed.

---

# 197. RNA-Seq detects noncoding RNA

It is not restricted to protein-coding mRNA.

---

# 198. RNA-Seq changes with biological condition

The source lists examples:

- development
- cell-cycle stage
- drug treatment
- mutation

---

# 199. Single-cell RNA-Seq

The chapter describes adapting RNA-Seq to individual cells.

---

# 200. Tissue dissociation

Source workflow can begin by breaking a tissue/embryo/organism into separate cells.

---

# 201. Cell-specific barcode

Each cell's cDNAs receive a unique short DNA barcode.

---

# 202. Barcode identifies cell of origin

After pooling/sequencing:

```text
barcode
→ assign transcript read to original cell
```

---

# 203. Computational clustering

Cells with similar expression patterns can be grouped computationally.

---

# 204. Expression cluster is analytical, not a literal cell compartment

### `PROJECT_CONSTRAINT`

A UMAP/t-SNE-like cluster is an analysis-space representation, not physical WorldState.

---

# 205. Coordinately regulated genes

Single-cell expression correlations can suggest genes participate in:

- same process
- same multiprotein machine
- related state

---

# 206. Planarian model organism

The chapter discusses:

```text
Schmidtea mediterranea
```

---

# 207. Planarian length

**Status: `SOURCE_SCALE`**

```text
3–5 mm
```

---

# 208. Planarian regeneration

The source states small tissue fragments can regenerate:

- tail
- head
- entire body

---

# 209. Planarian single-cell dataset size

**Status: `SOURCE_SCALE`**

The figure reports approximately:

```text
67,000 cells
```

---

# 210. Planarian cell-type clusters

**Status: `SOURCE_SCALE`**

Approximately:

```text
40 distinct types
```

in that analysis.

---

# 211. In situ hybridization

```text
in situ hybridization
=
use of labeled nucleic-acid probes
to visualize complementary DNA or RNA
in its spatial location
```

---

# 212. "In situ" source meaning

```text
in place
```

---

# 213. In situ hybridization preserves spatial information

Unlike bulk RNA-Seq, it can show exactly where a transcript occurs in a tissue.

---

# 214. Eve/Ftz example

Figure 10–23 uses differently colored probes to detect:

- Eve mRNA
- Ftz mRNA

in a developing Drosophila embryo.

---

# 215. Figure 10–23 scale

**Status: `SOURCE_SCALE`**

```text
0.2 mm
```

---

# 216. In situ hybridization can also target DNA

The method is not only for RNA.

---

# 217. FISH

```text
FISH
=
fluorescence in situ hybridization
```

---

# 218. Chromosome-5 example

Figure 10–24 uses six different probes on human chromosome 5.

---

# 219. Maternal and paternal homologs

Both copies of chromosome 5 are shown.

---

# 220. Two dots per probe per chromosome in metaphase

Because replicated metaphase chromosomes contain two sister DNA molecules, each locus appears twice per chromosome.

---

# 221. Figure 10–24 scale

**Status: `SOURCE_SCALE`**

```text
2 µm
```

---

# 222. FISH can diagnose chromosomal/genetic abnormalities

The source mentions clinical diagnostic use.

---

# 223. Ribosome profiling

```text
ribosome profiling
=
sequencing RNA fragments protected by translating ribosomes
```

---

# 224. RNase digestion step

Cell lysate is exposed to ribonuclease.

---

# 225. Ribosome-protected fragments survive

RNA physically covered by ribosome is protected from RNase digestion.

---

# 226. Protected fragment length

**Status: `SOURCE_SCALE`**

The source figure gives approximately:

```text
20 nucleotides
```

---

# 227. Protected RNA is converted to cDNA and sequenced

The sequence is mapped back to genome/transcript.

---

# 228. Ribosome-profiling read density estimates translation

More protected reads:

```text
more ribosome occupancy
→ more active translation
```

in the simplified source interpretation.

---

# 229. Translation differs from transcript abundance

An abundant mRNA can be poorly translated.

Thus:

```text
RNA abundance
≠
protein synthesis rate
```

---

# 230. Ribosome profiling can reveal small proteins

The source states it uncovered genes encoding very small proteins missed by earlier annotation approaches.

---

# 231. Reporter gene

```text
reporter gene
=
gene encoding an easily monitored product
used to report activity of another gene/regulatory region
```

---

# 232. Reporter expression driven by target regulatory DNA

If reporter coding sequence is placed under the original gene's regulatory sequences:

```text
reporter expression pattern
approximates target gene expression pattern
```

---

# 233. Reporter is a proxy

### Hard project rule

Reporter fluorescence is not the native protein itself unless a fusion construct is used.

---

# 234. β-galactosidase reporter

The chapter lists:

```text
β-galactosidase
```

as a common reporter.

---

# 235. GFP

```text
GFP
=
green fluorescent protein
```

---

# 236. GFP biological source

The source states GFP gives luminous jellyfish their green glow.

---

# 237. GFP transcriptional reporter

GFP coding sequence can be placed under a gene's regulatory elements.

---

# 238. GFP fusion protein

GFP DNA can also be fused directly to a protein-coding region.

---

# 239. Fusion protein tracks location and movement

If the fusion behaves sufficiently like native protein:

```text
GFP signal
→ approximate protein localization/dynamics
```

---

# 240. Fusion may perturb native protein

### `PROJECT_CONSTRAINT`

The source says fusion proteins "often" behave like normal protein.

Do not make equivalence universal.

---

# 241. Multiple GFP colors

Different spectral variants can label multiple cells/proteins.

---

# 242. Brainbow source example

Figure 10–28 shows differently colored neurons in mouse hippocampus.

---

# 243. Figure 10–27 scale

**Status: `SOURCE_SCALE`**

```text
200 µm
```

---

# 244. Figure 10–28 scale

**Status: `SOURCE_SCALE`**

```text
100 µm
```

---

# 245. Classical genetics

Historically, researchers began with random mutant phenotypes and worked backward to identify responsible genes.

---

# 246. Mutant phenotype can reveal normal gene function

If disabling a gene alters a process, the normal gene likely contributes to that process.

---

# 247. Random mutagenesis

Mutation frequency can be increased using:

- radiation
- chemical mutagens

---

# 248. Random mutagenesis is not targeted

It creates many mutations throughout the genome.

---

# 249. Suitable classical-genetic organisms

The source lists:

- bacteria
- yeast
- C. elegans
- Drosophila
- zebrafish
- mice

---

# 250. Reverse genetics

```text
reverse genetics
=
start with a known gene
→ deliberately alter/silence it
→ observe phenotype
```

---

# 251. RNAi as reverse-genetics tool

The chapter uses RNA interference to reduce gene activity deliberately.

---

# 252. RNAi introduction

The source describes introducing:

```text
double-stranded RNA
```

matching the target gene.

---

# 253. dsRNA processing

RNAi machinery processes the dsRNA into:

```text
siRNAs
```

---

# 254. siRNA guide

One strand hybridizes to complementary target mRNA.

---

# 255. Target-mRNA destruction

The RNAi machinery directs degradation of matching mRNA.

---

# 256. Some organisms amplify RNAi

The chapter states target-related fragments can trigger production of additional siRNAs in some organisms.

---

# 257. RNAi experimental organisms

The source lists common use in:

- cultured mammalian cells
- Drosophila
- C. elegans

---

# 258. Feeding RNAi in C. elegans

Source workflow:

```text
engineer E. coli to produce dsRNA
→ feed bacteria to worm
→ dsRNA enters RNAi pathway
→ target gene silenced
```

---

# 259. RNAi can spread through C. elegans tissues

The source states siRNA-related silencing can reach multiple tissues.

---

# 260. RNAi phenotype example

Figure 10–29 shows a gene whose knockdown causes pronuclei to fail to migrate properly after fertilization.

---

# 261. Figure 10–29 scale

**Status: `SOURCE_SCALE`**

```text
20 µm
```

---

# 262. RNAi limitation — off-target effects

Non-target genes may also be inhibited.

---

# 263. RNAi limitation — resistant cell types

Some cells do not respond effectively to RNAi.

---

# 264. RNAi limitation — temporary effect

The source emphasizes RNAi often causes transient:

```text
gene knockdown
```

rather than permanent genomic deletion.

---

# 265. Knockdown versus knockout

```text
knockdown:
reduced expression/activity
often temporary

knockout:
gene function eliminated genetically
```

---

# 266. Transgenic organism

```text
transgenic organism
=
organism whose genome has been experimentally altered
by introducing engineered DNA
```

---

# 267. Transgene

```text
transgene
=
introduced engineered gene/DNA
```

---

# 268. Alter coding sequence

A cloned gene can be mutated in vitro to change protein properties.

---

# 269. Alter regulatory sequence

A cloned gene can also be modified so it is expressed:

- more/less strongly
- in different cell type
- at different developmental time

---

# 270. Germ-line integration makes alteration heritable

For stable organismal inheritance:

```text
engineered DNA
must enter germ-line lineage
```

---

# 271. Gene replacement in mouse ES cells

The source describes targeted replacement using embryonic stem cells.

---

# 272. Homologous recombination in ES cells

An altered gene can replace the endogenous copy by homologous recombination.

---

# 273. Rare replacement colonies must be identified

Targeted replacement is not automatic in every cell.

---

# 274. Altered ES cells are expanded

A selected ES cell is clonally propagated.

---

# 275. Altered ES cells are injected into early embryo

They contribute to the developing mouse.

---

# 276. Chimeric/hybrid embryo source model

Some cells in the resulting organism derive from altered ES cells.

---

# 277. Germ-line contribution is necessary

Only if altered ES cells contribute to germ cells can the mutation be inherited.

---

# 278. Knock-in mouse

The source calls offspring containing the altered gene in every cell:

```text
knock-in mouse
```

---

# 279. Homozygous knock-in

Breeding heterozygous knock-in animals can yield offspring with altered copies on both homologous chromosomes.

---

# 280. Gene knockout

```text
gene knockout
=
complete genetic elimination of gene function
```

---

# 281. Knockout can be made by inactive replacement or deletion

The source lists both strategies.

---

# 282. Leptin knockout source phenotype

Figure 10–31:

```text
leptin-deficient mice
→ severe obesity
```

---

# 283. Leptin source function

The source states leptin is made by fat cells and normally inhibits hunger.

---

# 284. Leptin-knockout body-mass source statement

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

At:

```text
4 months
```

mutant mice are described as approximately:

```text
2× wild-type mass
```

---

# 285. Conditional knockout

```text
conditional knockout
=
gene disrupted only in selected tissue
or selected time/state
```

---

# 286. Why conditional knockout is useful

Genes essential early in development may cause embryonic death if removed everywhere.

Conditional deletion allows later/tissue-specific study.

---

# 287. Cre recombinase

Figure 10–32 uses:

```text
Cre recombinase
```

---

# 288. LoxP

```text
LoxP
=
DNA recombination site recognized by Cre
```

---

# 289. Tissue-specific promoter

Cre expression can be restricted to a target tissue using a tissue-specific promoter.

---

# 290. Conditional-deletion logic

```text
non-target tissue:
promoter inactive
→ no Cre
→ gene remains

target tissue:
promoter active
→ Cre produced
→ Cre binds LoxP sites
→ recombination
→ intervening gene excised
```

---

# 291. Excised DNA is not the same as transcriptional repression

The source figure depicts physical chromosomal deletion.

---

# 292. CRISPR

The chapter moves from the generic bacterial CRISPR defense of Chapter 8 to the engineered:

```text
CRISPR-Cas9
```

gene-editing system.

---

# 293. Cas9

```text
Cas9
=
RNA-guided DNA nuclease
```

in this chapter's engineering framework.

---

# 294. Cas9 itself is not sequence-specific in the same way as a restriction enzyme

The source emphasizes target choice comes from:

```text
guide RNA
```

---

# 295. Guide RNA

```text
guide RNA
=
engineered RNA containing sequence complementary to target DNA
and a region that associates with Cas9
```

---

# 296. CRISPR target search

Guide RNA directs Cas9 toward complementary genomic sequence.

---

# 297. Cas9 cleavage

Cas9 creates:

```text
double-strand DNA break
```

at target.

---

# 298. Donor-template replacement

If an altered DNA copy is supplied:

```text
Cas9 break
→ homologous recombination
→ altered sequence replaces target
```

---

# 299. CRISPR editing depends on host DNA-repair pathways

Cas9 performs cleavage.

Cellular repair machinery performs the repair/replacement.

---

# 300. CRISPR does not "write" arbitrary DNA by itself

### Hard project rule

Keep distinct:

```text
target recognition
Cas9 cleavage
repair template
host DNA repair
```

---

# 301. CRISPR can target multiple genes

The source says different guide RNAs can direct Cas9 to one or several targets.

---

# 302. Catalytically inactive Cas9

A mutant Cas9 can bind target DNA without cutting.

---

# 303. dCas9 activation

Inactive Cas9 fused to a transcription activator can turn a target gene on.

---

# 304. dCas9 repression

Inactive Cas9 fused to a transcription repressor can turn a target gene off.

---

# 305. CRISPR source organism list

The source mentions use in:

- mice
- zebrafish
- worms
- flies
- rice
- wheat

---

# 306. Basic research origin of CRISPR

The chapter emphasizes CRISPR gene editing emerged from study of bacterial antiviral biology.

---

# 307. Human somatic editing source framing

The chapter says CRISPR-based alteration of human somatic cells is being explored for disease treatment.

---

# 308. Sickle-cell example

The source names:

```text
sickle-cell anemia
```

as an experimental gene-editing context.

### `SOURCE_ERA_STATEMENT`

Do not use the chapter for current clinical guidance.

---

# 309. Ethical caution

The source explicitly says more discussion is needed to ensure ethical application.

---

# 310. Animal disease models

Human disease-associated mutations can be introduced into animals.

---

# 311. Disease-model purpose

Such animals can be used to investigate:

- molecular mechanism
- cellular phenotype
- candidate therapeutics

---

# 312. Disease model is not identical to human disease

### `PROJECT_CONSTRAINT`

The source says animal models often mimic **some** phenotypic characteristics.

Do not imply exact equivalence.

---

# 313. Fragile X source example

The chapter describes a mouse model carrying a mutation related to fragile X syndrome.

---

# 314. Fragile X source phenotype

The disease is described as involving:

- intellectual impairment
- neurological abnormalities
- often autism

---

# 315. Source mechanistic description

The chapter states the mutation causes excessive production of numerous proteins at synapses.

### `SOURCE_ERA_STATEMENT`

Preserve this as the book's summary.

---

# 316. Callus

```text
callus
=
disorganized mass of relatively undifferentiated plant cells
grown in culture
```

---

# 317. Plant regeneration

Appropriate nutrients and growth regulators can induce:

```text
callus
→ shoot
→ root
→ whole plant
```

---

# 318. Source plant examples

The chapter lists:

- tobacco
- petunia
- carrot
- potato
- Arabidopsis

---

# 319. Some plants can regenerate from a single cultured cell

This enables efficient transgenic-plant production.

---

# 320. Agrobacterium

Figure 10–34 uses:

```text
Agrobacterium
```

to transfer engineered DNA into plant cells.

---

# 321. Leaf-disc method

Source workflow:

```text
cut leaf discs
→ incubate with engineered Agrobacterium
→ bacterial DNA transfer
→ select transformed plant cells
→ callus
→ induce shoots
→ root shoots
→ adult transgenic plant
```

---

# 322. Agrobacterium incubation time

**Status: `SOURCE_SCALE`**

The figure gives:

```text
24 h
```

---

# 323. Selectable marker

Only plant cells expressing the selectable marker survive on selection medium.

---

# 324. Plant transgene becomes heritable in regenerated plant

The adult plant carries the engineered DNA that originated in the bacterial plasmid.

---

# 325. Agricultural applications listed

The source describes engineered traits including:

- altered seed lipid/starch/protein ratios
- pest resistance
- virus resistance
- salt tolerance
- water-stress tolerance

---

# 326. Golden rice

The chapter uses genetically engineered:

```text
golden rice
```

as a nutritional example.

---

# 327. Golden rice phenotype

Endosperm accumulates:

```text
β-carotene
```

giving yellow/orange grain.

---

# 328. β-carotene relationship to vitamin A

The source states β-carotene is converted in the human gut to vitamin A.

---

# 329. Wild-type rice source limitation

Rice can synthesize β-carotene in leaves, but key early-pathway enzymes are not expressed in endosperm.

---

# 330. Golden-rice engineering logic

Two enzyme genes are introduced and driven by an endosperm-active promoter.

---

# 331. Source origin of engineered enzyme genes

The source says:

```text
one gene from maize
one gene from a bacterium
```

---

# 332. Golden-rice pathway molecules shown

Figure 10–35 includes:

```text
geranylgeranyl pyrophosphate
→ phytoene
→ lycopene
→ β-carotene
```

---

# 333. Figure 10–35 scale

**Status: `SOURCE_SCALE`**

```text
10 mm
```

---

# 334. Source public-health claim

The chapter frames golden rice as potentially helping alleviate vitamin A deficiency.

### `SOURCE_ERA_STATEMENT`

Do not turn that statement into a current policy claim without external verification.

---

# 335. Expression vector

```text
expression vector
=
vector engineered with regulatory sequences
that drive high-level expression of inserted protein-coding DNA
```

---

# 336. Expression-vector host types

The source lists vectors optimized for:

- bacteria
- yeast
- insect cells
- mammalian cells

---

# 337. Host-specific regulatory sequences matter

A promoter that functions strongly in one host may not work appropriately in another.

---

# 338. Expression-vector amplification

The vector is replicated as host cells divide.

---

# 339. Protein overexpression source level

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The source states recombinant protein can sometimes comprise:

```text
1–10% of total cell protein
```

---

# 340. Recombinant protein can be purified

High expression facilitates biochemical and structural study.

---

# 341. Recombinant medical proteins

The source lists:

- insulin
- growth factors
- therapeutic antibodies

---

# 342. Recombinant subunit vaccines

The source states some vaccines contain purified viral coat proteins made by recombinant expression.

---

# 343. Source vaccine examples

- HPV
- hepatitis B
- shingles

---

# 344. Antigen

```text
antigen
=
molecule capable of eliciting an immune response
```

in the chapter's simplified vaccine context.

---

# 345. mRNA vaccine principle

The source describes vaccines containing mRNA encoding the SARS-CoV-2 spike protein.

---

# 346. mRNA-vaccine cellular logic

```text
vaccine mRNA enters cells
→ host ribosomes translate spike protein
→ immune response
→ mRNA eventually degraded
```

---

# 347. Vaccine mRNA is transient

The source explicitly states it is degraded like other cellular mRNAs.

---

# 348. Source global-dose statement

**Status: `SOURCE_ERA_STATEMENT`**

The chapter says more than:

```text
10 billion doses
```

of SARS-CoV-2 mRNA vaccines had been administered worldwide.

---

# 349. Protein-to-gene workflow

Figure 10–37:

```text
purified protein/peptide
→ partial amino-acid sequence
→ search DNA database
→ identify candidate gene
→ synthesize primers
→ PCR clone
```

---

# 350. Gene-to-protein workflow

```text
gene/cDNA
→ insert coding region into expression vector
→ host cell
→ overexpress protein
→ purify
→ biochemical/structural analysis
```

---

# 351. Experimental cycle is bidirectional

Chapter 10 establishes an iterative loop:

```text
sequence
→ perturb
→ phenotype
→ inference
→ further perturbation
```

---

# 352. WorldState versus ExperimentState

The Seamless Cell should add an explicit experimental layer:

```yaml
WorldState:
  actual_cell_biology

ExperimentState:
  sample_preparation
  reagent_addition
  engineered_constructs
  measurement_method
  raw_signal
  inferred_result
```

---

# 353. Sample preparation can destroy the original cell

Examples:

- cell lysis for RNA-Seq
- lysate preparation for ribosome profiling
- chromosome isolation for FISH

### Hard project rule

Do not continue showing the same intact living cell after a destructive sample-preparation step unless the experience explicitly branches into an experimental duplicate.

---

# 354. Measurement changes scale and context

A gel band exists in an experimental apparatus, not inside the cell.

---

# 355. PCR amplicons are experimental copies

PCR does not increase the target gene copy number inside the source organism.

It creates many copies in the reaction tube.

---

# 356. cDNA is derived material

cDNA is not normally a genomic locus in the source cell.

---

# 357. Reporter constructs are engineered biology

A reporter gene should be tagged as:

```text
ENGINEERED
```

not native.

---

# 358. CRISPR-edited sequence becomes true WorldState after repair

Once host DNA repair has changed the genomic sequence, the altered chromosome is part of biological WorldState.

---

# 359. Fluorescence is measurement ViewState

A GFP protein genuinely fluoresces, but pseudocoloring and display intensity belong to ViewState.

---

# 360. Sequencing letters are analytical representation

A/T/G/C text is a symbolic rendering of molecular identity.

---

# 361. Read depth is not molecule size

RNA-Seq read height/coverage reflects read abundance, not physical transcript thickness.

---

# 362. FISH dots are probe-generated signal

They report locus position.

They are not permanent fluorescent beads attached to native chromosomes.

---

# 363. Reporter abundance may not perfectly match native protein abundance

Regulatory reporters mimic expression only to the extent the construct preserves relevant regulatory logic.

---

# 364. GFP fusion can alter protein behavior

The source says fusion often behaves normally, not always.

---

# 365. Knockdown and knockout must remain separate states

Suggested:

```yaml
gene_perturbation:
  type:
    - knockdown
    - knockout
    - knockin
    - conditional_knockout
    - CRISPR_replacement
    - CRISPRa
    - CRISPRi
```

---

# 366. Restriction-enzyme schema

```yaml
restriction_enzyme:
  id:
  source_organism:
  recognition_sequence:
  recognition_length_bp:
  cut_pattern:
    - blunt
    - staggered
  overhang_sequence:
  cleavage_sites:
  provenance:
```

---

# 367. Gel-electrophoresis schema

```yaml
gel_experiment:
  gel_type:
    - agarose
    - polyacrylamide
  wells:
  samples:
  size_marker:
  electric_field:
  negative_electrode:
  positive_electrode:
  fragment_positions:
  stain:
  imaging_method:
```

---

# 368. Recombinant-DNA schema

```yaml
recombinant_DNA:
  vector:
  insert:
  restriction_sites:
  sticky_or_blunt_ends:
  ligase_used:
  ATP_available:
  ligation_complete:
  engineered_status: true
```

---

# 369. Plasmid schema

```yaml
plasmid:
  id:
  circular: true
  double_stranded: true
  length_bp:
  origin_of_replication:
  selectable_marker:
  cloning_site:
  insert:
  host_cell:
  copy_number:
```

---

# 370. Library schema

```yaml
DNA_library:
  type:
    - genomic
    - cDNA
  source_organism:
  source_cell_type:
  source_condition:
  clone_count:
  vector_type:
  inserts:
  genome_coverage:
  expressed_transcripts_only:
```

---

# 371. Probe schema

```yaml
nucleic_acid_probe:
  sequence:
  molecule_type:
    - DNA
    - RNA
  target_sequence:
  label:
    - fluorescent
    - radioactive
  hybridized:
  location:
```

---

# 372. PCR schema

```yaml
PCR_reaction:
  template_type:
    - genomic_DNA
    - cDNA
  forward_primer:
  reverse_primer:
  dNTPs:
  polymerase:
  thermostable:
  cycle_number:
  denaturation:
  annealing:
  extension:
  amplicon_length:
  copy_number:
```

---

# 373. STR schema

```yaml
STR_locus:
  chromosome:
  flank_sequences:
  repeat_unit:
  maternal_repeat_count:
  paternal_repeat_count:
  PCR_product_lengths:
```

---

# 374. Sanger schema

```yaml
Sanger_reaction:
  template:
  primer:
  polymerase:
  dNTPs:
  ddATP:
  ddCTP:
  ddGTP:
  ddTTP:
  terminated_fragments:
  capillary_order:
  fluorescence_trace:
  inferred_sequence:
```

---

# 375. Illumina schema

```yaml
Illumina_run:
  fragments:
  solid_support:
  clusters:
  copies_per_cluster:
  sequencing_cycles:
  reversible_terminators:
  fluorescence_images:
  base_calls:
  reads:
  assembled_sequence:
```

---

# 376. RNA-Seq schema

```yaml
RNASeq_experiment:
  source_cell_population:
  condition:
  extracted_RNAs:
  cDNAs:
  reads:
  mapping:
  transcript_abundance:
  isoforms:
  noncoding_RNAs:
```

---

# 377. Single-cell RNA-Seq schema

```yaml
scRNASeq_experiment:
  source_tissue:
  dissociated_cells:
  cell_barcodes:
  cDNA_molecules:
  reads:
  cell_by_gene_matrix:
  clusters:
  inferred_cell_types:
```

---

# 378. In-situ schema

```yaml
in_situ_hybridization:
  sample:
  fixed_or_live:
  probe:
  target:
    - DNA
    - RNA
  target_sequence:
  signal_location:
  imaging_method:
```

---

# 379. Ribosome-profiling schema

```yaml
ribosome_profile:
  source_cells:
  lysate:
  RNase_treatment:
  protected_RNA_fragments:
  fragment_length_nt:
  cDNA_reads:
  mapped_positions:
  translation_density:
```

---

# 380. Reporter schema

```yaml
reporter_construct:
  target_gene:
  retained_regulatory_DNA:
  reporter:
    - GFP
    - beta_galactosidase
  fusion_or_replacement:
  genomic_or_transient:
  expression_pattern:
  caveats:
```

---

# 381. RNAi schema

```yaml
RNAi_experiment:
  target_gene:
  introduced_dsRNA:
  siRNAs:
  target_mRNA:
  off_targets:
  knockdown_strength:
  duration:
  phenotype:
```

---

# 382. Knock-in/knockout schema

```yaml
genetic_replacement:
  organism:
  cell_type_used:
  target_gene:
  donor_construct:
  homologous_recombination:
  allele_state:
  germline_transmitted:
  phenotype:
```

---

# 383. Conditional-knockout schema

```yaml
conditional_knockout:
  target_gene:
  LoxP_sites:
  Cre_gene:
  tissue_specific_promoter:
  target_tissue:
  Cre_expression:
  recombination:
  gene_deleted:
```

---

# 384. CRISPR schema

```yaml
CRISPR_edit:
  Cas9:
  guide_RNA:
  target_DNA:
  cleavage_site:
  double_strand_break:
  donor_template:
  repair_pathway:
  final_sequence:
  on_target_result:
  off_target_assessment:
```

---

# 385. dCas9 regulation schema

```yaml
CRISPR_regulation:
  dCas9:
  guide_RNA:
  target_locus:
  effector:
    - transcription_activator
    - transcription_repressor
  DNA_cleavage: false
  expression_change:
```

---

# 386. Transgenic-plant schema

```yaml
plant_transformation:
  source_tissue:
  Agrobacterium:
  recombinant_plasmid:
  selectable_marker:
  transferred_DNA:
  callus:
  shoot_induction:
  root_induction:
  regenerated_plant:
  transgene:
```

---

# 387. Expression-vector schema

```yaml
expression_vector:
  host_system:
  promoter:
  translation_signals:
  protein_coding_insert:
  selectable_marker:
  replication_origin:
  expression_level:
  recombinant_protein:
```

---

# 388. BiologicalTime versus ExperimentalTime

Add:

```text
BiologicalTime:
events in living system

ExperimentalTime:
sampling, incubation, PCR cycles, sequencing cycles, culture time
```

---

# 389. PCR cycles are ExperimentalTime

A cycle counter must not advance the original cell's biology.

---

# 390. Cell culture expansion is both biological and experimental

Engineered bacteria genuinely divide biologically while serving an experimental purpose.

---

# 391. Sequencing assembly is computational time

Read assembly is neither biological nor chemical state.

Recommended:

```text
AnalysisTime
```

for computational processing.

---

# 392. Experimental branching

When destructive assays are performed, the UI should support:

```text
original biological specimen
→ sampled branch
→ assay branch
```

rather than pretending the untouched original is the same physical material.

---

# 393. Question 10–1 — β-globin mutation risk

Finding one mutation in one β-globin allele is not enough to conclude disease risk.

Needed information includes:

- exact nucleotide change
- coding/regulatory location
- amino-acid consequence
- known pathogenicity
- effect on splicing
- allele frequency
- second β-globin allele
- inheritance pattern
- family history
- whether mutation is germ-line

### `SOURCE_DERIVED`

---

# 394. Question 10–2 — restriction digest method

The source provides a specific double-stranded DNA sequence and asks for products after:

- EcoRI
- HaeIII
- HindIII
- all three

### `SOURCE_DERIVED`

Correct solution procedure:

```text
1. identify every recognition site on both strands
2. place cleavage positions using Figure 10–2 cut geometry
3. sort fragments by genomic order
4. preserve sticky/blunt ends
```

### `DO_NOT_INFER`

This canon does not invent a fragment list without independently re-parsing every recognition position from the printed sequence.

---

# 395. Question 10–3 — cDNA does not replace protein biochemistry

False.

cDNA sequence predicts primary amino-acid sequence, but not necessarily:

- folding state
- oligomeric state
- post-translational modifications
- ligand binding
- catalytic rate
- localization
- conformational dynamics
- interaction partners

Thus protein biochemistry remains necessary.

---

# 396. Question 10–4A — two additional PCR cycles

Figure 10–12 shows 3 cycles produce:

```text
8 double-stranded molecules
=
16 strands
```

Two additional cycles:

```text
8 × 2²
=
32 double-stranded molecules
```

The exact target-length products increasingly dominate.

---

# 397. Question 10–4B — mass per 500-bp molecule

Given:

```text
500 bp
=
1000 nucleotides

330 g/mol per nucleotide
```

molar mass:

```text
330,000 g/mol
```

---

# 398. Question 10–4B — molecules required for 100 ng

```text
100 ng
=
1×10^-7 g
```

moles:

```text
1×10^-7 / 3.3×10^5
≈ 3.03×10^-13 mol
```

molecules:

```text
3.03×10^-13 × 6.022×10^23
≈ 1.83×10^11 molecules
```

---

# 399. Question 10–4B — PCR cycles required

Starting from one double-stranded target:

```text
2^n ≈ 1.83×10^11
```

Therefore:

```text
n ≈ log2(1.83×10^11)
≈ 37.4
```

So approximately:

```text
38 ideal cycles
```

would be needed.

### `SOURCE_DERIVED`

Real PCR efficiency is less than ideal.

---

# 400. Question 10–5 — increase ddNTP:dNTP ratio

More ddNTP incorporation causes earlier termination.

Expected result:

```text
shorter average fragments
more very-short products
fewer long reads
```

---

# 401. Question 10–5 — decrease ddNTP:dNTP ratio

Less frequent termination gives:

```text
longer average fragments
fewer short terminated products
```

If too low, some positions may be underrepresented.

---

# 402. Question 10–6 — variable DNA FISH signal despite identical genomes

Possible source-consistent explanations include:

- some cells are at different cell-cycle stages
- replicated cells contain twice the target DNA
- chromosome ploidy differs
- target region is amplified/deleted in a subset
- accessibility/fixation/probe penetration differs

### Primary chapter-linked explanation

Cells that have replicated their DNA contain more target copies, as illustrated by replicated metaphase chromosomes in Figure 10–24.

---

# 403. Question 10–7 — genomic mammalian clone fails in E. coli

Likely explanation:

```text
genomic clone contains introns
```

E. coli cannot perform mammalian pre-mRNA splicing.

Thus no correct protein is produced even with a strong bacterial promoter.

Correct approach:

```text
use intron-free cDNA
```

---

# 404. Question 10–8A

"Restriction enzymes cut only between genes."

```text
FALSE
```

They cut wherever recognition sequence occurs.

---

# 405. Question 10–8B

"DNA migrates toward positive electrode."

```text
TRUE
```

---

# 406. Question 10–8C

"cDNA clones contain promoter sequences."

```text
FALSE
```

cDNA derives from mature RNA, not upstream genomic promoter DNA.

---

# 407. Question 10–8D

"PCR needs heat-stable polymerase because DNA is repeatedly heat-denatured."

```text
TRUE
```

---

# 408. Question 10–8E

"AluI 4-bp enzyme produces fragments exactly 256 bp long."

```text
FALSE
```

256 bp is a statistical average expectation for random sequence, not exact spacing.

---

# 409. Question 10–8F

"cDNA library uses reverse transcriptase and DNA polymerase."

```text
TRUE
```

---

# 410. Question 10–8G

"PCR fingerprinting relies on variable STR repeat number."

```text
TRUE
```

---

# 411. Question 10–8H

"A coding region can be in genomic library but absent from cDNA library from same tissue."

```text
TRUE
```

if the gene is not expressed in that tissue/condition.

---

# 412. Question 10–9

The exact Sanger sequence requires reading the band order from Figure Q10–9.

The parsed textbook text does not preserve the autoradiograph geometry.

### `DO_NOT_INFER`

Do not fabricate the nucleotide sequence or amino-acid translation without the rendered figure.

---

# 413. Question 10–10A — expected HaeIII fragment number

Human haploid genome:

```text
3×10^9 bp
```

4-bp recognition expected every:

```text
256 bp
```

Approximate number of cleavage intervals/fragments:

```text
3×10^9 / 256
≈ 1.17×10^7
```

or about:

```text
11.7 million fragments
```

---

# 414. Question 10–10A — expected EcoRI fragment number

EcoRI recognizes a 6-bp sequence.

Random expectation:

```text
4^6 = 4096 bp/site
```

Then:

```text
3×10^9 / 4096
≈ 7.32×10^5
```

or approximately:

```text
732,000 fragments
```

### `SOURCE_DERIVED`

This assumes unbiased random sequence.

---

# 415. Question 10–10B — why partial HaeIII digestion?

Complete digestion would generate many very small fragments.

Partial digestion:

```text
leaves some HaeIII sites uncut
→ produces larger overlapping fragments
```

which are easier to clone/map and provide better genome coverage.

---

# 416. Question 10–11

The restriction-map answer depends on exact band positions in Figure Q10–11.

Parsed text provides marker labels but not reliable lane geometry.

### `DO_NOT_INFER`

Do not invent fragment sizes or linear/circular restriction map without inspecting the rendered figure.

---

# 417. Question 10–12

Twin matching depends on exact STR-band patterns in Figure Q10–12.

Parsed text does not retain reliable band geometry.

### `DO_NOT_INFER`

Do not guess twin identities.

---

# 418. Question 10–12B — general parent-matching logic

To match twins to parents:

```text
each child's STR alleles
must be explainable as
one allele inherited from mother
+
one from father
at each locus
```

---

# 419. Question 10–13 — could ice-protein-negative bacteria arise without recombinant DNA?

Yes.

Random natural mutation can disrupt a gene.

Classical mutagenesis/selection could also identify mutants.

---

# 420. Question 10–13 — likely natural occurrence

Loss-of-function mutations in the ice-protein gene are biologically plausible in natural populations.

---

# 421. Question 10–13 — natural versus engineered risk

A naturally occurring mutant and engineered mutant can have similar phenotypes/genotypes.

Risk should be assessed from:

- organism
- altered trait
- ecological behavior
- gene flow
- fitness
- environmental persistence

not solely from whether engineering was used.

---

# 422. Question 10–13 — risk-benefit framing

The chapter intentionally presents this as a discussion question.

### `SOURCE_MODEL`

No single textbook-mandated yes/no answer is supplied.

---

# 423. Technique-to-question map

```text
What DNA sequence is present?
→ sequencing

Where is a gene on chromosome?
→ DNA FISH

Where is RNA expressed?
→ RNA in situ hybridization

Which RNAs are present?
→ RNA-Seq

Which RNAs are being translated?
→ ribosome profiling

Where is protein located?
→ GFP fusion / antibody

What happens if gene activity is reduced?
→ RNAi

What happens if gene is deleted?
→ knockout

What happens if gene is altered precisely?
→ knock-in / CRISPR replacement

What regulatory DNA controls expression?
→ reporter constructs

Can sequence be amplified?
→ PCR

Can DNA be cloned?
→ plasmid or PCR
```

---

# 424. Measurement hierarchy

```text
DNA sequence
≠
RNA abundance
≠
translation rate
≠
protein abundance
≠
protein activity
≠
phenotype
```

Chapter 10 introduces tools measuring different layers.

---

# 425. Experimental causality principle

A perturbation can create phenotype, but interpretation requires controls.

### `PROJECT_CONSTRAINT`

Future experimental mode should support:

- untreated control
- negative control
- positive control
- replicate samples
- off-target caveats

even if Chapter 10 only introduces these implicitly.

---

# 426. DNA technology is not one technique

It is a pipeline of modular operations:

```text
cut
separate
join
amplify
detect
sequence
compare
perturb
express
measure
```

---

# 427. Chapter 10 core causal map

```text
RESTRICTION ENZYME
specific DNA cleavage

GEL ELECTROPHORESIS
fragment-size separation

DNA LIGASE
fragment joining

PLASMID
replicating carrier

TRANSFORMATION
DNA uptake by bacteria

DNA LIBRARY
organized clone collection

cDNA
DNA copy of expressed RNA

HYBRIDIZATION
complementary sequence detection

PCR
targeted exponential amplification

SANGER
chain termination + size separation

ILLUMINA
massively parallel sequencing-by-synthesis

RNA-SEQ
transcriptome measurement

IN SITU
spatial nucleic-acid localization

RIBOSOME PROFILING
translation measurement

REPORTER
engineered expression proxy

RNAi
temporary target-gene knockdown

KNOCK-IN / KNOCKOUT
stable genomic perturbation

CRISPR-Cas9
RNA-guided targeted DNA cleavage

dCas9
targeted transcriptional regulation

EXPRESSION VECTOR
high-level recombinant protein production
```

---

# 428. Chapter 10's deepest project lesson

The Seamless Cell should eventually allow a learner to move seamlessly from:

```text
cell
→ genome
→ target gene
→ experimental design
→ molecular manipulation
→ raw measurement
→ computational analysis
→ biological inference
```

while never confusing:

```text
the thing itself
with
the method used to observe it
```

---

# 429. Source quantitative register

| Quantity | Chapter 10 value/context | Status |
|---|---:|---|
| E. coli genome | 4.6 × 10^6 bp | source |
| restriction site length | 4–8 bp | source |
| 4-bp site expectation | 1 / 256 bp | derived/source |
| 8-bp site expectation | 1 / 65,536 bp | derived/source |
| first cloning plasmid | ~9000 bp | source |
| plasmid EM scale | 0.5 µm | source image |
| bacterial doubling in cloning example | ~30 min | source |
| cloning amplification | hundreds of millions copies / 24 h | source |
| DNA denaturation example | ~90°C | source |
| PCR amplification | billions of copies in ~20–30 cycles | source |
| chemical DNA synthesis | few thousand bp | source-era |
| STR repeat range | ~4–40 | source |
| STR loci for ~1-in-10-billion match | ~5–10 | source-era |
| Illumina cluster | ~1000 copies | source |
| BAC insert | 100–200 kb | source |
| human sequencing BACs | ~30,000 | source |
| Planarian length | 3–5 mm | source |
| Planarian cells analyzed | ~67,000 | source |
| Planarian clusters | ~40 cell types | source analysis |
| ribosome footprint | ~20 nt | source |
| GFP fly image | 200 µm | source image |
| Brainbow image | 100 µm | source image |
| RNAi embryo image | 20 µm | source image |
| leptin KO phenotype | ~2× mass at 4 months | source-era |
| Agrobacterium incubation | 24 h | source |
| golden-rice image | 10 mm | source image |
| recombinant protein | 1–10% total cell protein | source-era |
| mRNA vaccine doses | >10 billion | source-era |

---

# 430. Quantitative verification queue

Before using source values as 2026 constants, externally verify:

## Sequencing

- current read lengths
- cluster sizes
- error profiles
- sequencing throughput
- SMRT chemistry
- nanopore pore models
- contemporary costs

## PCR

- modern enzyme fidelity
- typical amplification efficiency
- quantitative PCR distinctions
- RT-PCR terminology
- diagnostic interpretation

## RNA-Seq

- read lengths
- capture efficiencies
- single-cell dropout
- barcode error rates
- UMI usage
- current planarian atlas counts

## CRISPR

- target-recognition rules
- PAM requirement
- repair-pathway frequencies
- off-target rates
- base/prime editing
- current clinical use

## Recombinant expression

- host-specific yield ranges
- folding limitations
- post-translational modification dependence

---

# 431. Source-era caution register

Retain but do not silently modernize:

```text
sequencing costs
human-genome completion wording
STR forensic probability
"next-generation" sequencing labels
single-cell dataset sizes
CRISPR clinical-development status
mRNA-vaccine global-dose count
golden-rice public-health framing
```

---

# 432. Do-not-overinterpret register

Do not infer:

```text
restriction enzymes cut only at gene boundaries
FALSE

all restriction enzymes produce sticky ends
FALSE

all restriction sites are palindromic
OVERGENERALIZATION

gel band = one DNA molecule
FALSE

larger DNA runs faster
FALSE

plasmid and bacterial chromosome are the same molecule
FALSE

transformation = conjugation
FALSE

cDNA contains introns
FALSE

cDNA contains native promoter DNA
FALSE

all mRNAs are represented equally in a cDNA library
FALSE

hybridization can occur without sequence complementarity
FALSE

PCR copies the whole genome by default
FALSE

PCR amplification happens inside the original organism
FALSE

PCR proves a pathogen is alive
FALSE

STR match alone proves guilt
FALSE

ddNTP supports continued strand elongation
FALSE

sequencing machine directly sees abstract A/T/G/C letters
FALSE

short-read sequencing assembly cannot be wrong
FALSE

repetitive DNA is trivial to assemble
FALSE

sequence homology proves identical function
FALSE

RNA-Seq measures protein directly
FALSE

single-cell expression clusters are physical structures
FALSE

in situ fluorescence is the native molecule itself
FALSE

ribosome profiling equals total mRNA abundance
FALSE

reporter fluorescence is always native-protein abundance
FALSE

GFP fusion is guaranteed not to perturb protein
FALSE

RNAi permanently deletes target gene
FALSE

knockdown = knockout
FALSE

transgene must always replace endogenous gene
FALSE

CRISPR-Cas9 independently writes replacement DNA
FALSE

Cas9 target selection is encoded entirely by Cas9 protein
FALSE

dCas9 cuts DNA
FALSE

animal disease models reproduce human disease perfectly
FALSE

all plant cells can regenerate equally
FALSE

expression vectors work identically across hosts
FALSE

mRNA vaccine permanently alters genomic DNA
FALSE
```

---

# 433. Cross-chapter dependencies

## Chapter 2

Provides:

- nucleic-acid chemistry
- hydrogen bonding
- nucleotide interactions

## Chapter 3

Provides:

- ATP-dependent ligation chemistry
- enzyme catalysis

## Chapter 4

Provides:

- protein purification
- antibodies
- mass spectrometry
- protein structure

## Chapter 5

Provides:

- chromosomes
- DNA organization
- chromatin
- FISH interpretation

## Chapter 6

Provides:

- DNA polymerase
- DNA ligase
- homologous recombination
- double-strand-break repair

## Chapter 7

Provides:

- mRNA
- splicing
- translation
- genetic code
- ribosome

## Chapter 8

Provides:

- reporter regulation
- RNAi biology
- CRISPR immune-system origin
- transcriptional control

## Chapter 9

Provides:

- genome sequencing context
- variation
- STR/SNP interpretation
- comparative genomics

## Chapter 11 onward

Will refine:

- membrane delivery
- organelle targeting
- trafficking of engineered proteins

## Chapter 19

Will refine:

- classical genetics
- inheritance
- mutant analysis
- disease genetics

## Chapter 20

Will refine:

- ES cells
- stem cells
- cancer
- regenerative medicine
```

---

# 434. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 10: “Analyzing the Structure and Function of Genes.”**

Printed pages:

```text
345–380
```

PDF pages reviewed:

```text
380–415
```

Major sections:

```text
ISOLATING AND CLONING DNA MOLECULES

SEQUENCING DNA

EXPLORING GENE FUNCTION
```

Supporting material reviewed:

```text
Figures 10–1 through 10–37

How We Know:
Sequencing the Human Genome

Essential Concepts

Questions 10–1 through 10–13
```

Rendered images for the question figures on printed pp. 378–379 were not available through the parsed file interface during this pass.

Therefore exact visual answers for:

```text
Q10–9
Q10–11
Q10–12
```

are deliberately not invented.

---

# 435. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- selective-breeding framing
- restriction-enzyme origin
- recognition sequences
- HaeIII/EcoRI/HindIII
- palindromic-site statement
- blunt versus sticky ends
- 4-bp/8-bp frequency calculations
- gel electrophoresis
- DNA migration direction
- agarose/polyacrylamide
- fluorescence staining
- recombinant DNA
- DNA ligase
- ATP-dependent ligation
- plasmid definition
- replication origin
- bacterial transformation
- cloning culture timing
- insert recovery
- genomic-library definition
- cDNA-library definition
- genomic versus cDNA distinction
- poly-T priming
- reverse transcription
- RNase treatment
- cDNA 5′-end caveat
- denaturation/hybridization
- ~90°C source example
- DNA/RNA hybridization
- probe definition
- PCR 3-step cycle
- thermostable polymerase
- exponential amplification
- 20–30 cycle source statement
- genomic PCR
- cDNA PCR
- synthetic DNA source statement
- diagnostic PCR
- SARS-CoV-2 source example
- forensic STR logic
- 4–40 repeat range
- 5–10-locus probability source statement
- Sanger sequencing
- ddNTP 3′-OH absence
- capillary electrophoresis
- next-generation sequencing
- Illumina clusters
- reversible terminators
- ~1000-copy cluster source value
- SMRT sequencing
- nanopore-like sequencing
- shotgun sequencing
- repeat assembly problem
- BAC clone-by-clone strategy
- 100–200-kb BAC range
- ~30,000 BAC source statement
- restriction maps
- comparative sequence analysis
- RNA-Seq
- transcriptome
- alternative-splice detection
- single-cell RNA-Seq
- barcodes
- planarian source values
- in situ hybridization
- FISH
- replicated-chromosome probe interpretation
- ribosome profiling
- ~20-nt protected fragment
- reporter genes
- β-galactosidase
- GFP
- GFP fusion
- Brainbow example
- classical genetics
- random mutagenesis
- reverse genetics
- RNAi
- dsRNA→siRNA pathway
- C. elegans feeding experiment
- knockdown limitations
- transgenic-organism definition
- transgene
- ES-cell gene replacement
- knock-in
- knockout
- conditional knockout
- Cre
- LoxP
- leptin source phenotype
- CRISPR-Cas9
- guide RNA
- double-strand break
- donor-template homologous repair
- dCas9 activation
- dCas9 repression
- animal disease models
- fragile-X source example
- plant callus
- Agrobacterium transformation
- selectable marker
- golden-rice pathway
- expression vectors
- host-specific expression
- 1–10% protein source statement
- recombinant medical proteins
- recombinant protein vaccines
- mRNA-vaccine source description
- Figure 10–37 gene↔protein workflow
- all question-derived calculations
- exact caveats for Q10–9/Q10–11/Q10–12
- all schemas
- all WorldState/ExperimentState separation rules
- all quantitative-register entries
- all `DO_NOT_INFER` rules
- source trace

---

# END OF CHAPTER 10 CANON

Recommended repository destination:

```text
science/chapters/10_analyzing_gene_structure_and_function.md
```

Recommended commit message:

```text
science: add Chapter 10 gene analysis canon
```

Do not begin Chapter 11 merely because this file exists.

Chapter 11 begins the membrane half of the book and will require a major shift in the Seamless Cell's physical-world model: lipid bilayers, membrane asymmetry, membrane proteins, fluidity, diffusion, membrane domains, and the mechanical relationship between membranes and the cytoskeleton.
