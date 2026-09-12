---
title: "The Seamless Cell — Science Canon — Chapter 07"
subtitle: "From DNA to Protein: How Cells Read the Genome"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 7, printed pages 237–276 (PDF approximately pages 272–311)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 07 Science Canon

## Purpose

This file is a **hard-coded scientific canon**, not ordinary study notes.

It converts Chapter 7 of *Essential Cell Biology*, 6th edition into an implementation-facing source of truth for **The Seamless Cell**.

Chapter 5 established how DNA stores information in chromosomes and chromatin.

Chapter 6 established how DNA is copied and repaired.

Chapter 7 establishes how the cell **reads** that information:

```text
DNA
→ transcription
→ RNA
→ RNA processing
→ mature mRNA
→ nuclear export
→ translation
→ polypeptide
→ folding / modification / assembly
→ mature functional protein
```

It also establishes that many RNAs are not merely intermediates:

```text
RNA
→ structural function
→ regulatory function
→ catalytic function
```

and concludes with the source's RNA-world hypothesis for the early evolution of life.

The central project principle is:

> **Gene expression is not a floating arrow from DNA to protein. It is a spatially and temporally organized chain of molecular events in which specific DNA strands, RNA molecules, processing complexes, nuclear compartments, pores, ribosomes, tRNAs, aminoacyl-tRNA synthetases, initiation factors, release factors, proteasomes, and energy-coupled state transitions must remain causally connected.**

This chapter must eventually control how The Seamless Cell represents:

- transcription
- RNA chemistry
- RNA folding
- template and coding strands
- RNA polymerase
- promoter recognition
- bacterial sigma factor
- bacterial transcription termination
- eukaryotic RNA polymerases I, II, and III
- general transcription factors
- TFIID
- TBP
- TATA boxes
- TFIIH
- RNA polymerase II tail phosphorylation
- transcription elongation through nucleosomes
- mRNA capping
- polyadenylation
- introns
- exons
- pre-mRNA
- splice sites
- spliceosome
- snRNAs
- snRNPs
- U1, U2, U6
- branch-point adenine
- intron lariats
- exon junction complexes
- alternative splicing
- transcription/processing condensates
- nuclear export
- mRNA degradation
- the genetic code
- codons
- reading frames
- tRNAs
- anticodons
- wobble pairing
- aminoacyl-tRNA synthetases
- tRNA charging
- ribosomes
- A, P, and E sites
- peptide-bond formation
- rRNA catalysis
- translation initiation
- start and stop codons
- polyribosomes
- bacterial transcription–translation coupling
- translation-targeting antibiotics
- ubiquitin
- proteasomes
- protein turnover
- post-translational maturation
- ribozymes
- the RNA-world hypothesis

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 7.

## `SOURCE_SCALE`

A numerical value, dimension, rate, count, proportion, lifetime, spacing, or other quantity supplied by Chapter 7.

## `SOURCE_MODEL`

A source-presented teaching model, schematic, analogy, historical interpretation, or proposed evolutionary scenario.

## `SOURCE_DERIVED`

A direct calculation or logical consequence using only source-supplied facts.

## `SOURCE_TERMINOLOGY`

Terminology used by Chapter 7 and preserved in this source canon.

## `SOURCE_ERA_STATEMENT`

A statement whose numerical value or scientific framing may later be updated by external evidence.

## `SOURCE_HYPOTHESIS`

A hypothesis presented by the source, not established here as historical fact.

## `PROJECT_CONSTRAINT`

A rendering, simulation, architecture, or educational rule derived from the source.

## `VERIFY_QUANT`

A source number retained here but requiring external verification before use as a precise simulation parameter.

## `LATER_CHAPTER_REFINEMENT`

A concept introduced here whose regulation, transport, evolution, or targeting is treated in more detail later.

## `DO_NOT_INFER`

A guardrail preventing textbook simplifications or convenient animations from becoming false biological claims.

---

# 1. Chapter structure

Chapter 7 contains three major sections:

```text
1. FROM DNA TO RNA

2. FROM RNA TO PROTEIN

3. RNA AND THE ORIGINS OF LIFE
```

Its major subsection flow is:

```text
FROM DNA TO RNA

- Portions of DNA Sequence Are Transcribed into RNA
- Transcription Produces RNA That Is Complementary to One Strand of DNA
- Cells Produce Various Types of RNA
- Signals in the DNA Tell RNA Polymerase Where to Start and Stop Transcription
- Initiation of Eukaryotic Gene Transcription Is a Complex Process
- Eukaryotic RNA Polymerase Requires the Assistance of a Collection of Accessory Proteins
- Eukaryotic mRNAs Are Processed in the Nucleus
- In Eukaryotes, Protein-coding Genes Are Interrupted by Noncoding Sequences Called Introns
- Introns Are Removed from Pre-mRNAs by RNA Splicing
- RNA Synthesis and Processing Take Place in Membraneless Compartments Within the Nucleus
- Mature Eukaryotic mRNAs Are Exported from the Nucleus
- mRNA Molecules Are Eventually Degraded in the Cytosol

FROM RNA TO PROTEIN

- An mRNA Sequence Is Decoded in Sets of Three Nucleotides
- tRNA Molecules Match Amino Acids to Codons in mRNA
- Specific Enzymes Couple tRNAs to the Correct Amino Acid
- The mRNA Message Is Decoded on Ribosomes
- The Ribosome Is a Ribozyme
- Specific Codons in an mRNA Signal the Ribosome Where to Start and to Stop Protein Synthesis
- Proteins Are Produced on Polyribosomes
- Inhibitors of Prokaryotic Protein Synthesis Are Used as Antibiotics
- Controlled Protein Breakdown Helps Regulate the Amount of Each Protein in a Cell
- There Are Many Steps Between DNA and Protein

RNA AND THE ORIGINS OF LIFE

- Life Requires Autocatalysis
- RNA Can Store Information and Catalyze Chemical Reactions
- RNA Is Thought to Predate DNA in Evolution
```

Supporting material includes:

```text
Table 7–1
Types of RNA Produced in Cells

Table 7–2
The Three RNA Polymerases in Eukaryotic Cells

How We Know
Cracking the Genetic Code

Table 7–3
Antibiotics That Inhibit Bacterial Protein or RNA Synthesis

Table 7–4
Biochemical Reactions That Can Be Catalyzed by Ribozymes

Essential Concepts

Questions 7–1 through 7–18
```

---

# 2. The chapter's central information-flow model

The source presents the core flow:

```text
DNA
→ RNA
→ protein
```

with:

```text
DNA → RNA
=
transcription

RNA → protein
=
translation
```

and DNA itself can also be copied by replication.

---

# 3. "Central dogma" is a source term

The chapter calls the DNA→RNA→protein information-flow principle the:

```text
central dogma of molecular biology
```

### `SOURCE_TERMINOLOGY`

Preserve the source term.

### `DO_NOT_INFER`

Do not infer from the slogan that every gene must produce a protein.

The chapter explicitly states that some genes produce functional RNAs as their final products.

---

# 4. Gene expression

The chapter defines gene expression broadly as:

```text
conversion of information encoded in DNA
into a functional RNA or protein product
that affects the cell or organism
```

---

# 5. Protein-coding gene expression

For a protein-coding gene:

```text
DNA
→ transcription
→ RNA
→ translation
→ protein
```

---

# 6. Noncoding-gene expression

For a gene whose RNA itself is functional:

```text
DNA
→ transcription
→ functional RNA
```

Translation is not required.

---

# 7. Successive amplification

The source emphasizes two amplification levels:

```text
one gene
→ many RNA molecules

one mRNA
→ many protein molecules
```

This permits large amounts of protein to be produced from one gene.

---

# 8. Different genes can be expressed at different rates

Cells can vary:

- transcription rate
- translation rate
- RNA lifetime
- protein lifetime

to produce different steady-state protein abundances.

Detailed regulation is deferred mainly to Chapter 8.

---

# 9. RNA chemistry

RNA is a linear polymer of:

```text
ribonucleotides
```

linked by:

```text
phosphodiester bonds
```

---

# 10. RNA sugar

RNA contains:

```text
ribose
```

not deoxyribose.

---

# 11. Ribose versus deoxyribose

The source emphasizes that ribose contains an additional:

```text
2′-OH
```

relative to deoxyribose.

---

# 12. RNA bases

RNA uses:

```text
A
G
C
U
```

where uracil replaces thymine.

---

# 13. Uracil versus thymine

The source depicts uracil as lacking the:

```text
–CH3
```

group found on thymine.

---

# 14. RNA phosphodiester linkage

The covalent linkage between RNA nucleotides is chemically the same general phosphodiester linkage used in DNA.

---

# 15. RNA strand polarity

RNA has:

```text
5′ end
3′ end
```

and is conventionally written:

```text
5′ → 3′
```

---

# 16. A–U base pairing

Uracil can form complementary hydrogen-bonded base pairs with adenine.

Thus:

```text
A ↔ U
```

in RNA follows pairing logic analogous to A↔T in DNA.

---

# 17. RNA is largely single-stranded in cells

The source contrasts:

```text
cellular DNA
→ double-stranded

cellular RNA
→ largely single-stranded
```

---

# 18. Single-stranded RNA can fold

Because RNA is largely single-stranded, distant parts of one RNA molecule can base-pair with one another.

This produces:

- stems
- loops
- internal double-helical regions
- complex three-dimensional shapes

---

# 19. RNA folding is sequence-dependent

RNA structure arises from:

- conventional base pairing
- nonconventional base pairing
- unpaired regions
- tertiary interactions

---

# 20. Source example of nonconventional RNA pairing

Figure 7–5 gives:

```text
A–G
```

as an example of a nonconventional base-pair interaction.

---

# 21. RNA is not merely an information string

The chapter assigns RNA:

- informational roles
- structural roles
- regulatory roles
- catalytic roles

### Hard project rule

Do not render all RNA as featureless flexible thread.

Its structure depends on RNA type and sequence.

---

# 22. Transcription

Transcription copies a limited DNA region into RNA.

---

# 23. Only one DNA strand is used as template for a given transcription event

At a gene:

```text
one strand
=
template

other strand
=
nontemplate/coding strand
```

---

# 24. Template strand

The template DNA strand is the one whose sequence is read by RNA polymerase to produce complementary RNA.

---

# 25. Coding/nontemplate strand

The nontemplate strand is sometimes called the:

```text
coding strand
```

because, apart from U replacing T, its sequence corresponds to the RNA product in the source example.

---

# 26. Template choice varies between genes

One chromosome does not have one universal transcription template strand.

Different genes can be transcribed from opposite DNA strands.

### Hard project rule

Never globally mark one chromosome strand as "the transcribed strand."

---

# 27. RNA polymerase

RNA polymerase catalyzes formation of phosphodiester bonds during transcription.

---

# 28. RNA polymerase substrates

Incoming substrates are:

```text
ATP
CTP
UTP
GTP
```

as ribonucleoside triphosphates.

---

# 29. Transcription polymerization direction

RNA grows:

```text
5′ → 3′
```

through nucleotide addition at its 3′ end.

---

# 30. RNA polymerase movement relative to DNA template

Because RNA grows 5′→3′, RNA polymerase traverses the template strand in the opposite orientation:

```text
template read 3′ → 5′
```

---

# 31. Energy for RNA synthesis

The incoming ribonucleoside triphosphates supply the chemical energy required for chain extension, analogous to activated nucleotide use during DNA synthesis.

### Hard project rule

Do not animate every RNA-addition step as separately ATP-powered.

ATP is only one of the four possible incoming ribonucleoside triphosphates; each activated NTP carries its own triphosphate energy.

---

# 32. Local DNA opening during transcription

RNA polymerase opens a small DNA region ahead of itself to expose the template.

---

# 33. DNA rewinds behind RNA polymerase

As RNA emerges, it is displaced from the DNA and the two DNA strands re-form the double helix behind the enzyme.

---

# 34. Transient DNA–RNA hybrid

**Status: `SOURCE_SCALE`**

Figure 7–7 states that a transient DNA/RNA hybrid of approximately:

```text
~9 nucleotides
```

exists within the moving transcription window.

---

# 35. RNA does not remain paired to the full template

### Hard project rule

Do not animate a complete newly transcribed RNA as remaining permanently hybridized to its DNA gene.

Only a short local hybrid persists during elongation.

---

# 36. RNA transcript

The RNA chain made by RNA polymerase is the:

```text
RNA transcript
```

---

# 37. RNA is usually much shorter than its chromosome

**Status: `SOURCE_SCALE`**

The source gives:

```text
human chromosome DNA molecule:
up to ~250 million nucleotide pairs

most mature RNAs:
≤ a few thousand nucleotides
```

with many RNAs much shorter.

---

# 38. Multiple RNA polymerases can transcribe one gene simultaneously

Because completed RNA is rapidly displaced from the DNA template, another RNA polymerase can begin before an earlier one finishes.

---

# 39. Medium-size gene source example

**Status: `SOURCE_SCALE`**

The source example:

```text
gene length:
~1500 nucleotide pairs

transcription time:
~50 seconds
```

for one RNA polymerase.

---

# 40. High-transcription source example

The source states that dozens of RNA polymerases can occupy one heavily transcribed gene and that in an extreme example:

```text
>1000 transcripts/hour
```

could be generated.

### `VERIFY_QUANT`

This is an upper teaching example, not a universal expression rate.

---

# 41. rRNA-gene electron-micrograph example

Figure 7–8 shows heavily transcribed ribosomal RNA genes.

Each RNA polymerase is associated with a growing rRNA transcript.

Ribosomal proteins begin assembling on the free 5′ ends of the growing rRNA in the source micrograph.

---

# 42. RNA polymerase differs from DNA polymerase

Major source distinctions:

```text
RNA polymerase
→ ribonucleotides
→ can initiate without primer
→ relatively low proofreading fidelity

DNA polymerase
→ deoxyribonucleotides
→ needs primer/base-paired 3′ end
→ much higher fidelity with proofreading
```

---

# 43. RNA polymerase error rate

**Status: `SOURCE_SCALE`**

The source states roughly:

```text
1 transcription error per 10^4 nucleotides
```

---

# 44. DNA polymerase comparison in Chapter 7

The chapter compares this with:

```text
~1 error per 10^7 nucleotides
```

for DNA polymerase in the discussed proofreading context.

---

# 45. Lower transcription fidelity is biologically tolerated

The source argues that an RNA error is transient because RNA is not the permanent genome storage molecule.

### `DO_NOT_INFER`

"More tolerated" does not mean transcription errors are biologically irrelevant.

---

# 46. Messenger RNA

```text
mRNA
=
messenger RNA
```

carries information used to synthesize protein.

---

# 47. Eukaryotic mRNA coding pattern

The source states that a eukaryotic mRNA typically carries information from:

```text
one gene
```

coding for one protein.

### `SOURCE_MODEL`

Treat as the chapter's typical case, not a universal statement with no exceptions.

---

# 48. Bacterial mRNA coding pattern

In bacteria, adjacent genes can be transcribed into one mRNA that carries information for:

```text
several proteins
```

---

# 49. Noncoding RNA

For some genes:

```text
RNA itself
=
final gene product
```

---

# 50. Table 7–1 — messenger RNA

```text
mRNA
function:
codes for proteins
```

---

# 51. Table 7–1 — ribosomal RNA

```text
rRNA
function:
forms structural and catalytic core of ribosomes
and catalyzes protein synthesis
```

---

# 52. Table 7–1 — transfer RNA

```text
tRNA
function:
adaptor between mRNA codons and amino acids
during protein synthesis
```

---

# 53. Table 7–1 — microRNA

```text
miRNA
function:
regulates gene expression
```

Detailed regulation belongs to Chapter 8.

---

# 54. Table 7–1 — small interfering RNA

```text
siRNA
function:
protection from viruses and proliferating transposable elements
```

Detailed mechanisms belong to Chapter 8.

---

# 55. Table 7–1 — long noncoding RNA

```text
lncRNA
function:
scaffold and other diverse functions
```

The source notes many functions remain under investigation.

---

# 56. Table 7–1 — other noncoding RNAs

Other noncoding RNAs contribute to:

- RNA splicing
- gene regulation
- telomere maintenance
- other cellular processes

---

# 57. Promoter

A:

```text
promoter
```

is a gene-associated DNA region that directs transcription initiation.

---

# 58. Bacterial promoter position

The source describes bacterial promoters as lying immediately:

```text
upstream
```

of the transcription start site.

---

# 59. Promoter is not normally transcribed in the source bacterial diagram

Figure 7–10 distinguishes:

```text
promoter
→ upstream recognition DNA

transcribed region
→ begins at +1
```

---

# 60. Transcription start position

The first transcribed nucleotide is designated:

```text
+1
```

---

# 61. Bacterial RNA polymerase initially samples DNA weakly

The source describes bacterial RNA polymerase:

- colliding with DNA
- binding weakly
- sliding rapidly
- binding tightly upon promoter recognition

---

# 62. Sigma factor

Bacterial RNA polymerase uses:

```text
sigma factor
```

for promoter recognition.

---

# 63. Sigma factor is released after initiation

Once bacterial transcription begins:

```text
sigma factor dissociates
```

and RNA polymerase continues elongation.

---

# 64. Bacterial promoter recognition can occur without first opening all DNA

The source explains that bases present recognizable chemical features in the grooves/surface of the double helix.

Sigma factor initially recognizes promoter information in intact duplex DNA.

---

# 65. Source bacterial -35 promoter region

Figure 7–10 places a promoter-recognition sequence around:

```text
−35
```

relative to the +1 start site.

The displayed sequence contains the source motif resembling:

```text
TTGACA
```

in the example.

### `SOURCE_MODEL`

Do not claim every bacterial promoter is sequence-identical.

The source states promoters "closely resemble" common motifs.

---

# 66. Source bacterial -10 promoter region

Figure 7–10 places another promoter element around:

```text
−10
```

with an example motif resembling:

```text
TATAAT
```

---

# 67. Sigma examines opened DNA at the -10 region

The source states sigma can further inspect the -10 sequence after local strand opening begins.

---

# 68. Promoter polarity

Promoters are asymmetric and directional.

Their nucleotide arrangement positions RNA polymerase in one orientation.

---

# 69. Promoter polarity determines template strand

Because RNA polymerase synthesizes 5′→3′:

```text
promoter orientation
→ polymerase orientation
→ which strand runs 3′→5′ through enzyme
→ template choice
```

---

# 70. Genes can face opposite directions on the same chromosome

Figure 7–11 explicitly depicts neighboring genes transcribed in opposite directions using opposite template strands.

---

# 71. Terminator

A bacterial:

```text
terminator
```

is a sequence that signals transcription termination.

---

# 72. Bacterial terminator is transcribed

Unlike the promoter:

```text
terminator sequence
→ included in RNA transcript
```

in the source mechanism.

---

# 73. Source bacterial termination model

After terminator RNA is synthesized:

```text
RNA segment interacts with RNA polymerase
→ polymerase halts
→ RNA released
→ DNA released
```

---

# 74. Eukaryotes use three nuclear RNA polymerases

The source names:

```text
RNA polymerase I
RNA polymerase II
RNA polymerase III
```

---

# 75. RNA polymerase I

Table 7–2:

```text
RNA polymerase I
→ most rRNA genes
```

---

# 76. RNA polymerase II

Table 7–2:

```text
RNA polymerase II
→ all protein-coding genes
→ miRNA genes
→ genes for additional noncoding RNAs
including RNAs of spliceosomal machinery
```

---

# 77. RNA polymerase III

Table 7–2:

```text
RNA polymerase III
→ tRNA genes
→ 5S rRNA gene
→ many other small-RNA genes
```

---

# 78. Do not collapse Pol I/II/III into one eukaryotic polymerase entity

### Hard project rule

Polymerase identity affects:

- gene class
- accessory machinery
- processing context

---

# 79. Eukaryotic transcription initiation requires general transcription factors

RNA polymerase II alone cannot efficiently initiate transcription in the source's purified test-tube context.

It needs:

```text
general transcription factors
```

---

# 80. General transcription factors

These factors:

- assemble at promoters
- position RNA polymerase II
- help open the DNA
- support initiation

---

# 81. Sigma-factor analogy

The chapter says general transcription factors collectively perform a role analogous in broad terms to bacterial sigma factor.

### `DO_NOT_INFER`

Do not imply they are structurally the same molecule or mechanistically identical.

---

# 82. TFIID

Initiation at many RNA polymerase II promoters begins with binding of:

```text
TFIID
```

---

# 83. TATA box

A common source promoter element:

```text
TATA box
```

is rich in T and A.

---

# 84. TATA-box location

**Status: `SOURCE_SCALE`**

The source says a TATA box is typically around:

```text
~30 nucleotides upstream
```

of the transcription start site in promoters that contain it.

---

# 85. Not all Pol II promoters require all source promoter elements

Figure 7–14 states that for most Pol II start sites:

```text
only 2 or 3
of the 4 shown promoter sequences
are needed
```

### Hard project rule

Do not require one universal promoter architecture for every eukaryotic gene.

---

# 86. TATA-binding protein

A subunit of TFIID called:

```text
TBP
=
TATA-binding protein
```

recognizes the TATA box.

---

# 87. TBP bends/distorts DNA

The source emphasizes dramatic local DNA bending/distortion when TBP binds.

### Project rule

Promoter binding can alter DNA shape; DNA should not remain a mathematically rigid rod in an atomic/molecular initiation scene.

---

# 88. TFIIB

After TFIID/TBP engagement, the source initiation scheme recruits:

```text
TFIIB
```

as one of the next general transcription factors.

---

# 89. Additional general transcription factors

Figure 7–12 includes:

```text
TFIIE
TFIIF
TFIIH
```

alongside TFIIB and TFIID.

---

# 90. Complete transcription initiation complex

The source scheme assembles:

```text
promoter DNA
+
TFIID/TBP
+
TFIIB
+
additional general transcription factors
+
RNA polymerase II
```

before productive transcription begins.

---

# 91. Assembly order is not universal

The source explicitly cautions that the exact sequence shown in Figure 7–12 may vary among promoters.

### `DO_NOT_INFER`

Do not hard-code one immutable assembly choreography as universal.

---

# 92. TFIIH opens DNA

Figure 7–12 states that TFIIH uses:

```text
ATP hydrolysis
```

to help open the DNA double helix around the transcription start point.

---

# 93. TFIIH also contains kinase activity

TFIIH includes a protein-kinase subunit.

---

# 94. RNA polymerase II tail phosphorylation

TFIIH phosphorylates the long polypeptide tail of RNA polymerase II.

This promotes polymerase release from promoter-associated general transcription factors and enables transcription to proceed.

---

# 95. Polymerase tail state is part of transcription state

Recommended WorldState distinction:

```text
Pol II tail:
dephosphorylated
→ initiation competent

phosphorylated
→ elongation / processing-associated state
```

### `SOURCE_MODEL`

Detailed phosphorylation patterns are more complex than this binary teaching model.

---

# 96. TFIID can remain at promoter

The source states TFIID often remains bound through multiple rounds of transcription initiation.

---

# 97. Most other general transcription factors dissociate after promoter escape

Once RNA polymerase II proceeds:

```text
most general factors
→ released
```

and elongation factors assemble.

---

# 98. Elongation factors

Elongation factors help RNA polymerase II:

- remain productively engaged
- move through chromatin
- gain access to nucleosomal DNA

---

# 99. Transcription through nucleosomes

Figure 7–15 shows elongation factors helping polymerase move through nucleosomal DNA.

They can form a wedge-like arrangement that locally pries DNA away from the histone core.

---

# 100. Chromatin is not globally removed for transcription

### Hard project rule

At mechanistic scale:

```text
local DNA access
```

should be coordinated with nucleosome context.

Do not strip an entire chromosome into naked DNA to show one transcription event.

---

# 101. Incomplete transcription requires reinitiation

The source states that if polymerase is dislodged before finishing, it must start again from a promoter.

---

# 102. Transcription completion resets Pol II

After RNA polymerase II terminates:

```text
polymerase released
→ tail phosphates removed by protein phosphatases
→ dephosphorylated polymerase can initiate again
```

---

# 103. Bacterial transcription and translation share one compartment

Because bacteria lack a nucleus:

```text
DNA
RNA polymerase
ribosomes
```

can operate in the same cellular compartment.

---

# 104. Coupled bacterial transcription–translation

Ribosomes can begin translating the 5′ end of bacterial mRNA before transcription is complete.

### Project rule

For a bacterial cell, do not enforce nuclear export between transcription and translation.

---

# 105. Eukaryotic transcription and translation are spatially separated

```text
transcription
→ nucleus

translation
→ cytosol / cytosolic face of ER-associated ribosomes
```

---

# 106. Eukaryotic mRNA requires processing before export

The chapter emphasizes:

```text
5′ capping
RNA splicing
3′ polyadenylation
```

---

# 107. Processing is largely co-transcriptional

RNA-processing enzymes associate with phosphorylated RNA polymerase II and act as the RNA emerges.

### Hard project rule

Do not assume the complete full-length unprocessed pre-mRNA first appears and only then processing begins.

---

# 108. 5′ RNA capping

Capping modifies the 5′ end of a nascent RNA polymerase II transcript.

---

# 109. Capping timing

**Status: `SOURCE_SCALE`**

The source states capping begins after roughly:

```text
~25 nucleotides
```

have been transcribed.

---

# 110. Cap nucleotide identity

The 5′ cap contains an atypical:

```text
methylated guanine nucleotide
```

---

# 111. 7-methylguanosine

Figure 7–18 identifies the cap nucleotide as:

```text
7-methylguanosine
```

---

# 112. 5′ cap linkage

The source figure depicts a distinctive:

```text
5′-to-5′ triphosphate bridge
```

connecting the cap to the transcript.

---

# 113. Additional cap methylation

Figure 7–18 notes that many eukaryotic mRNAs also methylate the:

```text
2′-OH
of the second ribose
```

---

# 114. Bacterial mRNA lacks the same eukaryotic cap

The source contrasts eukaryotic capped mRNA with bacterial mRNA, whose 5′ end is essentially the transcript's initial nucleotide/triphosphate state rather than the same cap architecture.

---

# 115. Polyadenylation

Polyadenylation creates a special 3′ end on eukaryotic mRNA.

---

# 116. 3′ end is first cleaved

The initial transcript is cut at a specific RNA sequence by an enzyme.

---

# 117. Poly-A tail is added after cleavage

A second enzyme adds repeated adenines to the new 3′ end.

---

# 118. Poly-A tail length

Main text:

```text
a few hundred nucleotides
```

Figure 7–18 depicts approximately:

```text
150–250 A residues
```

### `SOURCE_SCALE`

Preserve both source phrasings.

---

# 119. Capping and polyadenylation functions

The chapter states that these modifications:

- increase mRNA stability
- aid nuclear export
- help mark RNA as mRNA
- help translation machinery verify message completeness

---

# 120. 5′ untranslated region

Mature mRNA contains a:

```text
5′ UTR
```

before the protein-coding sequence.

---

# 121. 3′ untranslated region

Mature mRNA contains a:

```text
3′ UTR
```

between coding sequence end and poly-A tail.

---

# 122. UTR means untranslated, not unimportant

### Hard project rule

Do not equate:

```text
noncoding
```

with:

```text
functionless
```

The source later links 3′ UTR sequences to mRNA lifetime.

---

# 123. Introns

Most eukaryotic protein-coding genes contain noncoding intervening sequences called:

```text
introns
```

---

# 124. Exons

The source calls the retained expressed sequences:

```text
exons
```

---

# 125. Exon/intron terminology applies to DNA and corresponding RNA

A sequence can be called an intron/exon in:

- genomic DNA
- pre-mRNA

depending on context.

---

# 126. Intron size range

**Status: `SOURCE_SCALE`**

The chapter states introns can range from:

```text
1 nucleotide
to
>10,000 nucleotides
```

---

# 127. Gene-to-gene intron count varies

The source notes:

- some eukaryotic protein-coding genes lack introns
- some have few
- most have many

---

# 128. β-globin gene source example

Figure 7–20:

```text
human β-globin gene
→ 3 exons
```

---

# 129. Factor VIII gene source example

Figure 7–20:

```text
human Factor VIII gene
→ 26 exons
→ ~200,000 nucleotide-pair gene scale
```

The source notes mutations in this large gene can cause a common form of hemophilia.

---

# 130. Whole gene is initially transcribed

Introns and exons are both copied into nascent RNA.

---

# 131. Pre-mRNA

Before processing is completed, the transcript is called:

```text
precursor mRNA
pre-mRNA
```

---

# 132. RNA splicing

RNA splicing:

```text
removes introns
+
joins exons
```

---

# 133. Splicing starts during transcription

The chapter emphasizes that splicing often begins before RNA polymerase II reaches the end of the gene.

---

# 134. Complete all-intron/all-exon pre-mRNA is often transient or absent

Figure 7–25 states that a fully transcribed pre-mRNA containing every intron and exon:

```text
rarely exists as a completed molecule
```

because splicing is co-transcriptional.

---

# 135. Introns contain short splicing signals

Most intronic sequence can vary greatly.

A few short sequences at/near intron boundaries and the branch region are critical.

---

# 136. Source splice-site symbol conventions

Figure 7–21 uses:

```text
R = A or G
Y = C or U
N = any nucleotide
```

---

# 137. Branch-point adenine

A specific intronic:

```text
A
```

acts as the branch-point nucleotide in the source splicing mechanism.

---

# 138. Intron lariat

During splicing, the intron forms a branched:

```text
lariat
```

structure.

---

# 139. First splicing chemistry step

The source describes the branch-point adenine reacting with the:

```text
5′ splice site
```

and cutting the RNA backbone there.

---

# 140. 2′ linkage in lariat formation

The released intron 5′ end becomes covalently linked to the:

```text
2′-OH
```

of the branch-point adenine ribose.

---

# 141. Second splicing chemistry step

The free:

```text
3′-OH
```

of the upstream exon reacts with the start of the downstream exon.

This joins the exons.

---

# 142. Lariat degradation

The excised intron lariat is eventually degraded in the nucleus.

---

# 143. Small nuclear RNA

```text
snRNA
=
small nuclear RNA
```

---

# 144. snRNP

snRNAs associate with proteins to form:

```text
small nuclear ribonucleoproteins
snRNPs
```

pronounced "snurps" in the source.

---

# 145. Spliceosome

snRNPs plus many associated proteins assemble into:

```text
spliceosome
```

which performs pre-mRNA splicing.

---

# 146. Five snRNPs per source splicing machinery

Figure 7–23 states that the full splicing system uses:

```text
5 snRNPs
```

---

# 147. Additional spliceosomal proteins

**Status: `SOURCE_SCALE`**

Figure 7–23 states approximately:

```text
~200 additional proteins
```

participate in each splicing reaction.

---

# 148. U1 snRNP

The source states:

```text
U1
→ recognizes 5′ splice site
```

through RNA base pairing.

---

# 149. U2 snRNP

The source states:

```text
U2
→ recognizes branch-point site
```

through RNA base pairing.

---

# 150. U6 snRNP

U6 displaces U1 and base-pairs with the 5′ splice-site region.

---

# 151. U6 "double-checking" function

The source describes U6's rereading of the 5′ splice site as a fidelity-improving step.

---

# 152. Spliceosome conformational transitions

ATP hydrolysis by spliceosomal proteins drives conformational changes in U2/U6-associated machinery that create the catalytic active site.

---

# 153. Spliceosome catalytic center is RNA-based

The source states U2/U6 snRNA architecture forms the active site.

---

# 154. Magnesium ions participate in splicing catalysis

Figure 7–23 shows:

```text
Mg2+
```

held by RNA in the catalytic center.

---

# 155. RNA catalysis in the spliceosome

Because RNA components form the active catalytic site, the source classifies the spliceosome as an example of RNA-based catalysis.

---

# 156. Ribozyme

An RNA molecule with catalytic activity is called a:

```text
ribozyme
```

---

# 157. Exon junction complex

After successful splicing, the spliceosome deposits an:

```text
exon junction complex
```

on the mRNA near the splice junction.

---

# 158. Exon junction complexes act as processing-history marks

These RNA-bound proteins help indicate that a splice event was completed.

They later contribute to export-readiness recognition in the source model.

---

# 159. Alternative splicing

A single pre-mRNA can be spliced in different patterns to create distinct mature mRNAs.

---

# 160. Alternative splicing expands protein diversity

Different mature mRNAs from the same gene can encode different protein products.

---

# 161. Source statement on human alternative splicing

**Status: `SOURCE_ERA_STATEMENT`**

The chapter states that:

```text
most human genes
```

are thought to undergo alternative splicing.

---

# 162. Exons may be included or excluded

Alternative splicing can change which exons remain in the mature mRNA.

---

# 163. Exon order cannot be arbitrarily rearranged by ordinary alternative splicing

Figure 7–25 explicitly states:

```text
exons can be included or excluded
but their DNA-specified order is not rearranged
```

### Hard project rule

Do not create arbitrary exon permutations when simulating the source's alternative-splicing mechanism.

---

# 164. RNA synthesis/processing condensates

RNA polymerases and processing proteins can form dynamic biomolecular condensates that function as:

```text
RNA-production factories
```

in the source.

---

# 165. Condensates are membraneless

They are maintained by many weak noncovalent interactions rather than by a lipid membrane.

---

# 166. Condensates can organize transcription and processing components

The source describes them as concentrating:

- RNA polymerases
- processing machinery
- actively expressed genes

---

# 167. Nucleolus

The source identifies the nucleolus as a prominent membraneless compartment where:

- rRNA genes cluster
- rRNAs are synthesized
- rRNAs are processed
- ribosomal proteins assemble
- ribosome assembly factors operate

---

# 168. Cajal bodies

Figure 7–26 identifies:

```text
Cajal bodies
```

as nuclear condensates associated with maturation of snRNPs and snRNAs.

---

# 169. Interchromatin granule clusters

Figure 7–26 identifies these as condensates containing stockpiles of:

- snRNPs
- other RNA-processing components

---

# 170. Nuclear-condensate colors are experimental labels

Figure 7–26 states colors were produced by stains.

### Hard project rule

Do not treat those colors as intrinsic biological pigments.

---

# 171. Mature mRNA must be exported from nucleus

Eukaryotic mature mRNA travels:

```text
nucleus
→ nuclear pore
→ cytosol
```

before translation.

---

# 172. Nuclear pore complexes selectively gate mRNA export

The source describes nuclear pore complexes as controlling passage between nucleoplasm and cytosol.

Detailed nuclear transport belongs to Chapter 15.

---

# 173. Export readiness is recognized by bound proteins

The source states a mature export-ready mRNA is associated with an appropriate ensemble of RNA-binding proteins.

---

# 174. Cap-binding protein

The 5′ cap is recognized by a:

```text
cap-binding protein
```

---

# 175. Poly-A-binding protein

The poly-A tail is bound by:

```text
poly-A-binding protein
```

---

# 176. Exon junction complexes contribute to export readiness

Successfully spliced mRNAs carry exon junction complexes.

---

# 177. Export decision is combinatorial

The source emphasizes:

```text
entire set of bound proteins
```

rather than one single marker determines whether mRNA is export-ready.

---

# 178. Nuclear transport receptor

An export-ready mRNA recruits a nuclear transport receptor that guides the mRNP through a nuclear pore.

---

# 179. mRNA changes protein partners after export

In the cytosol, mRNA can shed some nuclear proteins and acquire proteins used for translation initiation.

---

# 180. Nuclear RNA waste is degraded

The source states:

- excised introns
- broken RNAs
- aberrantly spliced transcripts

are retained/degraded in the nucleus rather than exported.

Released nucleotides are reused.

---

# 181. Mature mRNA is not permanent

Cytosolic RNases eventually degrade mRNA into nucleotides.

---

# 182. mRNA lifetime affects protein output

Because one mRNA can be translated repeatedly:

```text
longer mRNA lifetime
→ potentially more protein molecules
```

all else equal.

---

# 183. Bacterial mRNA lifetime

**Status: `SOURCE_SCALE`**

The source gives a typical bacterial mRNA lifetime of approximately:

```text
~3 minutes
```

---

# 184. Eukaryotic mRNA lifetime examples

The source gives:

```text
β-globin mRNA:
>10 hours

some eukaryotic mRNAs:
<30 minutes
```

---

# 185. 3′ UTR can influence mRNA lifetime

The chapter states sequences controlling mRNA stability are often located in the:

```text
3′ UTR
```

---

# 186. Gene-expression output depends on degradation as well as synthesis

Protein abundance depends on:

- transcription
- RNA processing
- RNA export
- translation
- mRNA degradation
- protein degradation
- post-translational maturation

---

# 187. Genetic code

The:

```text
genetic code
```

is the mapping between mRNA nucleotide sequence and protein amino-acid sequence.

---

# 188. Codon

A:

```text
codon
```

is a consecutive group of:

```text
3 RNA nucleotides
```

read during translation.

---

# 189. Number of possible triplet codons

With four RNA nucleotides:

```text
4 × 4 × 4
=
64 codons
```

---

# 190. Sense codons

The standard source table assigns:

```text
61 codons
```

to amino acids.

---

# 191. Stop codons

Three codons do not specify amino acids:

```text
UAA
UAG
UGA
```

They signal translation termination.

---

# 192. Start codon

```text
AUG
```

functions as:

- initiation codon
- methionine codon

---

# 193. Genetic-code redundancy

Most amino acids are specified by more than one codon.

---

# 194. Source statement on code conservation

The chapter states the same basic genetic code is used across modern organisms.

---

# 195. Minor code variations

The source notes small departures occur chiefly in:

- mitochondria
- some fungi
- some protozoa

### `DO_NOT_INFER`

Do not assume the standard cytosolic code is literally universal with no exceptions.

---

# 196. Reading frame

An mRNA can in principle be partitioned into triplets in three possible reading frames.

---

# 197. Only one reading frame normally encodes the intended protein

Start-site selection establishes the correct reading frame.

---

# 198. Frameshift logic

Starting one nucleotide too early or late changes all downstream codon groupings.

This can produce a radically altered protein sequence.

---

# 199. Full codon table — phenylalanine

```text
UUU → Phe (F)
UUC → Phe (F)
```

---

# 200. Full codon table — leucine

```text
UUA → Leu (L)
UUG → Leu (L)
CUU → Leu (L)
CUC → Leu (L)
CUA → Leu (L)
CUG → Leu (L)
```

---

# 201. Full codon table — isoleucine

```text
AUU → Ile (I)
AUC → Ile (I)
AUA → Ile (I)
```

---

# 202. Full codon table — methionine

```text
AUG → Met (M)
```

AUG also serves as the standard initiation codon in the source model.

---

# 203. Full codon table — valine

```text
GUU → Val (V)
GUC → Val (V)
GUA → Val (V)
GUG → Val (V)
```

---

# 204. Full codon table — serine

```text
UCU → Ser (S)
UCC → Ser (S)
UCA → Ser (S)
UCG → Ser (S)
AGU → Ser (S)
AGC → Ser (S)
```

---

# 205. Full codon table — proline

```text
CCU → Pro (P)
CCC → Pro (P)
CCA → Pro (P)
CCG → Pro (P)
```

---

# 206. Full codon table — threonine

```text
ACU → Thr (T)
ACC → Thr (T)
ACA → Thr (T)
ACG → Thr (T)
```

---

# 207. Full codon table — alanine

```text
GCU → Ala (A)
GCC → Ala (A)
GCA → Ala (A)
GCG → Ala (A)
```

---

# 208. Full codon table — tyrosine

```text
UAU → Tyr (Y)
UAC → Tyr (Y)
```

---

# 209. Full codon table — histidine

```text
CAU → His (H)
CAC → His (H)
```

---

# 210. Full codon table — glutamine

```text
CAA → Gln (Q)
CAG → Gln (Q)
```

---

# 211. Full codon table — asparagine

```text
AAU → Asn (N)
AAC → Asn (N)
```

---

# 212. Full codon table — lysine

```text
AAA → Lys (K)
AAG → Lys (K)
```

---

# 213. Full codon table — aspartate

```text
GAU → Asp (D)
GAC → Asp (D)
```

---

# 214. Full codon table — glutamate

```text
GAA → Glu (E)
GAG → Glu (E)
```

---

# 215. Full codon table — cysteine

```text
UGU → Cys (C)
UGC → Cys (C)
```

---

# 216. Full codon table — tryptophan

```text
UGG → Trp (W)
```

---

# 217. Full codon table — arginine

```text
CGU → Arg (R)
CGC → Arg (R)
CGA → Arg (R)
CGG → Arg (R)
AGA → Arg (R)
AGG → Arg (R)
```

---

# 218. Full codon table — glycine

```text
GGU → Gly (G)
GGC → Gly (G)
GGA → Gly (G)
GGG → Gly (G)
```

---

# 219. Full codon table — stops

```text
UAA → stop
UAG → stop
UGA → stop
```

---

# 220. Codons are written 5′→3′

The source convention places the 5′ nucleotide on the left.

---

# 221. Third-position degeneracy

The source notes many synonymous codons share first/second positions and vary at the third nucleotide.

---

# 222. tRNA

```text
tRNA
=
transfer RNA
```

acts as the adaptor connecting:

```text
mRNA codon
to
amino acid
```

---

# 223. tRNA length

**Status: `SOURCE_SCALE`**

The chapter states a typical tRNA is approximately:

```text
~80 nucleotides
```

---

# 224. tRNA secondary structure

A tRNA forms several internal double-helical stems and is conventionally drawn as a:

```text
cloverleaf
```

---

# 225. tRNA tertiary structure

The actual folded molecule is:

```text
compact
L-shaped
```

---

# 226. Anticodon

A:

```text
3-nucleotide anticodon
```

on tRNA base-pairs with a complementary mRNA codon.

---

# 227. Amino-acid attachment site

The corresponding amino acid is covalently attached at the:

```text
3′ end
```

of the tRNA.

---

# 228. Modified bases in tRNA

The source notes tRNAs contain unusual chemically modified bases.

Examples:

```text
pseudouridine
ψ

dihydrouridine
D
```

which are derived from uracil in the example.

---

# 229. Wobble pairing

Some tRNAs tolerate non-standard pairing at the:

```text
third codon position
```

while requiring accurate pairing at the first two positions.

---

# 230. Wobble reduces required tRNA diversity

The source states the 61 sense codons can theoretically be covered with as few as:

```text
31 tRNA types
```

because of wobble.

---

# 231. tRNA repertoire differs by species

The actual number of tRNA species/genes is species-specific.

---

# 232. Human tRNA-gene source example

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

The chapter states humans have approximately:

```text
~500 tRNA genes
```

but only:

```text
48 different anticodons
```

in that collection.

---

# 233. Aminoacyl-tRNA synthetase

An:

```text
aminoacyl-tRNA synthetase
```

covalently attaches the correct amino acid to its corresponding tRNA(s).

---

# 234. tRNA charging

Attachment of an amino acid to tRNA is called:

```text
charging
```

---

# 235. Source synthetase count

The chapter states that in most organisms there is approximately:

```text
1 synthetase per amino acid
=
20 synthetases
```

---

# 236. Synthetase recognizes both amino acid and tRNA

Recognition can include:

- amino acid identity
- anticodon-loop nucleotides
- acceptor-arm nucleotides

---

# 237. aaRS accuracy is part of decoding

The correct amino acid is not chosen by the ribosome directly.

Correct decoding depends on:

```text
aminoacyl-tRNA synthetase
+
tRNA anticodon
+
ribosome
```

---

# 238. Aminoacyl-tRNA synthetase uses ATP

The charging reaction is coupled to ATP hydrolysis.

---

# 239. Source charging equation

Question 7–15 gives:

```text
amino acid
+ tRNA
+ ATP
→ aminoacyl-tRNA
+ AMP
+ pyrophosphate
```

---

# 240. Charged tRNA stores chemical potential

The amino acid is linked to tRNA by a high-transfer-potential covalent linkage.

The energy stored in that bond later contributes to peptide-bond formation.

---

# 241. PPi hydrolysis can drive charging forward

### `SOURCE_DERIVED`

Question 7–15 asks what further step can drive a near-equilibrium charging reaction.

From the Chapter 3 coupling framework:

```text
pyrophosphate
→ hydrolysis to 2 Pi
```

would pull the coupled process forward.

---

# 242. Misacylated-tRNA experiment

Question 7–4 describes a 1962 experiment:

```text
cysteine attached to tRNA
→ chemically converted to alanine
→ hybrid tRNA inserted alanine at cysteine codons
```

---

# 243. Meaning of misacylated-tRNA experiment

### `SOURCE_DERIVED`

The experiment shows:

```text
ribosome reads tRNA anticodon identity
but does not independently verify the amino acid chemically attached to that tRNA
```

Therefore aminoacyl-tRNA synthetases are responsible for matching amino acid identity to the proper tRNA.

---

# 244. Ribosome

The:

```text
ribosome
```

is the molecular machine that translates mRNA into protein.

---

# 245. Ribosome composition

Ribosomes contain:

- ribosomal RNAs
- many ribosomal proteins

---

# 246. Eukaryotic ribosome abundance

**Status: `SOURCE_SCALE`**

The chapter states a typical eukaryotic cell contains:

```text
millions of ribosomes
```

in the cytosol.

---

# 247. Ribosome has large and small subunits

Both bacterial and eukaryotic ribosomes contain:

```text
large subunit
+
small subunit
```

---

# 248. Small ribosomal subunit function

The source assigns the small subunit a central role in:

```text
matching tRNAs to mRNA codons
```

---

# 249. Large ribosomal subunit function

The large subunit catalyzes:

```text
peptide-bond formation
```

---

# 250. Eukaryotic ribosome source composition

Figure 7–37 depicts a eukaryotic ribosome with:

```text
82 different proteins
+
4 different rRNA molecules
```

---

# 251. Eukaryotic small-subunit source composition

Figure 7–37 depicts:

```text
33 ribosomal proteins
+
1 rRNA
```

with molecular mass around:

```text
1.4 × 10^6 Da
```

---

# 252. Eukaryotic large-subunit source composition

Figure 7–37 depicts:

```text
49 ribosomal proteins
+
3 rRNAs
```

with molecular mass around:

```text
2.8 × 10^6 Da
```

---

# 253. Complete eukaryotic ribosome source mass

Figure 7–37 gives approximately:

```text
4.2 × 10^6 Da
```

---

# 254. Source average protein comparison

The chapter gives an average-sized protein mass of approximately:

```text
30,000 Da
```

to illustrate how large ribosomes are.

---

# 255. Ribosome RNA mass predominance

The chapter states ribosomes are approximately:

```text
2/3 RNA
1/3 protein
```

by weight.

---

# 256. rRNA forms the structural core

The source states rRNAs:

- form most of the internal ribosome core
- provide overall shape
- organize tRNA-binding sites

while proteins lie more toward the surface and stabilize/fill gaps.

---

# 257. Ribosome is a ribozyme

The catalytic center for peptide-bond formation is RNA-based.

---

# 258. 23S rRNA catalytic center

In the bacterial large subunit source example:

```text
23S rRNA
```

forms the peptidyl-transferase catalytic center.

---

# 259. Nearby ribosomal protein is too distant to catalyze peptide-bond chemistry in the source structure

This supports the conclusion that rRNA itself is catalytic.

---

# 260. 5S rRNA source figure

Figure 7–40 shows:

```text
23S rRNA
+
5S rRNA
```

as central large-subunit RNA components in the bacterial structure shown.

---

# 261. Ribosomal S values

The source notes rRNAs can be named by:

```text
S values
```

representing sedimentation behavior in ultracentrifugation.

### `DO_NOT_INFER`

S values are sedimentation coefficients and are not simply additive molecular-mass units.

---

# 262. Ribosome binds mRNA

The small subunit contains the source's mRNA-binding site.

---

# 263. Three tRNA sites

A ribosome contains:

```text
A site
P site
E site
```

---

# 264. A site

```text
A
=
aminoacyl-tRNA site
```

where incoming charged tRNA binds.

---

# 265. P site

```text
P
=
peptidyl-tRNA site
```

which holds the tRNA carrying the growing peptide before transfer.

---

# 266. E site

```text
E
=
exit site
```

through which spent tRNA leaves.

---

# 267. Both ribosomal subunits contribute to A/P/E site geometry

Figure 7–38 states the tRNA sites are formed across the subunit interface.

---

# 268. Source occupancy statement

Figure 7–38 notes that although a structural snapshot can contain tRNAs in all three sites, during protein synthesis:

```text
only two tRNA sites are occupied at once
```

in the simplified elongation cycle presented.

---

# 269. Translation direction on mRNA

mRNA is translated:

```text
5′ → 3′
```

---

# 270. Polypeptide synthesis direction

Protein is synthesized:

```text
N-terminus → C-terminus
```

---

# 271. N-terminus is made first

The first amino acid becomes the N-terminal end of the nascent chain.

---

# 272. Each elongation cycle adds one amino acid

The ribosome advances one codon per cycle and extends the C-terminal end by one amino acid.

---

# 273. Translation cycle step 1 — aminoacyl-tRNA selection

A charged tRNA enters the vacant A site and pairs its anticodon with the exposed mRNA codon.

---

# 274. Reading-frame maintenance

The A and P sites position adjacent tRNAs on contiguous codons.

This physical geometry preserves codon register.

---

# 275. Translation cycle step 2 — peptide transfer

The growing polypeptide is transferred from the P-site tRNA to the amino group of the amino acid on the A-site tRNA.

A new peptide bond forms.

---

# 276. Translation cycle step 3 — large-subunit translocation

The large subunit shifts relative to the small subunit, moving bound tRNAs toward:

```text
P → E
A → P
```

in the large-subunit frame.

---

# 277. Translation cycle step 4 — small-subunit translocation

The small subunit then moves exactly:

```text
3 nucleotides
```

along the mRNA.

---

# 278. Spent tRNA exits

This reset ejects the spent tRNA and leaves the A site open for the next aminoacyl-tRNA.

---

# 279. Ribosome movement is not smooth decorative sliding

### Hard project rule

At mechanistic scale translation must be state-coupled:

```text
codon recognition
→ peptide transfer
→ large-subunit motion
→ small-subunit motion
→ tRNA exit
```

---

# 280. Eukaryotic translation speed

**Status: `SOURCE_SCALE`**

Main text gives approximately:

```text
~6 amino acids/second
```

for a eukaryotic ribosome.

---

# 281. Bacterial translation speed

**Status: `SOURCE_SCALE`**

Main text gives approximately:

```text
~20 amino acids/second
```

for bacterial ribosomes.

---

# 282. Translation initiation rate strongly affects protein output

Because elongation proceeds at a fairly steady pace, the frequency of initiation strongly influences how many ribosomes occupy an mRNA and how much protein is produced.

---

# 283. Start codon

Translation normally begins at:

```text
AUG
```

in the source model.

---

# 284. Eukaryotic initiator tRNA

A specialized:

```text
initiator tRNA
```

carries methionine and participates specifically in initiation.

---

# 285. Initiator tRNA is distinct from elongator Met-tRNA

The source explicitly distinguishes:

```text
initiator methionine tRNA
```

from the ordinary tRNA that inserts methionine during elongation.

---

# 286. Bacterial initiator amino acid

The source states bacteria use:

```text
formyl-methionine
```

as a modified initiator methionine.

---

# 287. Initial methionine can be removed later

The source notes the N-terminal initiator methionine is often removed by a specific protease.

---

# 288. Eukaryotic initiation begins with initiator tRNA in P site

The initiator tRNA binds the:

```text
P site
```

of the small subunit before large-subunit joining.

---

# 289. Translation initiation factors

Protein factors called:

```text
translation initiation factors
```

help assemble the initiation complex.

---

# 290. Eukaryotic small-subunit recruitment to 5′ end

The source model has the small subunit/initiator complex bind near the:

```text
5′ cap
```

of the mRNA.

---

# 291. Eukaryotic scanning

The small subunit scans:

```text
5′ → 3′
```

until it encounters the source model's first AUG.

### `SOURCE_MODEL`

Do not automatically promote "first AUG" to a universal rule beyond the source's simplified treatment.

---

# 292. AUG recognition establishes reading frame

Initiator tRNA base-pairs with the start AUG, locking the ribosome into the coding frame.

---

# 293. Large-subunit joining

After start codon recognition:

- several initiation factors leave
- large subunit joins
- A site is available for the next charged tRNA

---

# 294. mRNA end-integrity checking in translation initiation

Figure 7–41 states efficient initiation also uses proteins associated with:

- 5′ cap
- poly-A tail

helping translation machinery verify both ends are intact.

---

# 295. Bacterial initiation differs from eukaryotic initiation

Bacterial mRNA does not use the same 5′ cap-scanning mechanism.

---

# 296. Bacterial ribosome-binding sequence

**Status: `SOURCE_SCALE`**

The source describes a bacterial ribosome-binding sequence approximately:

```text
~6 nucleotides long
```

located a few nucleotides upstream of the AUG.

---

# 297. Internal bacterial translation initiation

A bacterial ribosome can initiate at a start site located internally within a polycistronic mRNA if the appropriate upstream binding sequence is present.

---

# 298. Polycistronic

A:

```text
polycistronic mRNA
```

encodes multiple proteins from one transcript.

---

# 299. Each bacterial coding region can have its own ribosome-binding site

This enables simultaneous translation of multiple coding sequences from one mRNA.

---

# 300. Source bacterial 5′ end

Figure 7–42 shows bacterial mRNA with a simpler:

```text
5′ triphosphate
```

rather than a eukaryotic 5′ cap.

---

# 301. Translation termination

Termination occurs when a stop codon enters the ribosomal A site.

---

# 302. Stop codons are not recognized by normal tRNAs

```text
UAA
UAG
UGA
```

do not specify amino acids in the source genetic code.

---

# 303. Release factor

A:

```text
release factor
```

binds the A site when a stop codon is present.

---

# 304. Release factor changes peptidyl-transferase activity

Instead of adding another amino acid, the ribosome catalyzes addition of:

```text
water
```

to the peptidyl-tRNA linkage.

---

# 305. Hydrolytic release of completed protein

The water-mediated reaction frees the C-terminal end from its tRNA.

---

# 306. Protein chain is immediately released

The peptidyl-tRNA linkage is the attachment retaining the nascent protein on the ribosome in the source model.

Once cleaved:

```text
protein released
```

---

# 307. Ribosome recycling after termination

The ribosome:

- releases mRNA
- dissociates into large and small subunits
- can later assemble on another message

---

# 308. Polyribosome

A:

```text
polyribosome
polysome
```

is one mRNA being translated by multiple ribosomes simultaneously.

---

# 309. Most translating mRNAs are associated with multiple ribosomes in efficient translation

The source describes new ribosomes loading near the 5′ end as earlier ribosomes move away.

---

# 310. Polysome spacing

**Status: `SOURCE_SCALE`**

The source states ribosomes can be spaced as close as approximately:

```text
80 nucleotides
```

along one mRNA.

---

# 311. Typical protein synthesis duration

**Status: `SOURCE_SCALE`**

The chapter states synthesis of most protein molecules takes:

```text
~20 seconds
to
several minutes
```

---

# 312. Bacterial transcription–translation coupling creates linked polysomes

Because ribosomes can translate nascent bacterial RNA before transcription ends, ribosomes can follow behind RNA polymerase on the same newly synthesized transcript.

---

# 313. Antibiotics exploit prokaryote/eukaryote molecular differences

Some antibiotics selectively interfere with bacterial gene expression because bacterial ribosomes/polymerases differ enough from their eukaryotic counterparts.

---

# 314. Tetracycline

Table 7–3:

```text
target/effect:
blocks aminoacyl-tRNA binding to the ribosomal A site
```

---

# 315. Streptomycin

Table 7–3:

```text
prevents transition from initiation complex to elongation
and also causes miscoding
```

---

# 316. Chloramphenicol

Table 7–3:

```text
blocks the peptidyl-transferase reaction
```

---

# 317. Erythromycin

Table 7–3:

```text
binds in the ribosomal exit channel
and inhibits peptide-chain elongation
```

---

# 318. Rifamycin

Table 7–3:

```text
blocks transcription initiation
by binding to and inhibiting bacterial RNA polymerase
```

---

# 319. Antibiotic specificity is not magical

### Project rule

When an antibiotic mechanism is shown, inhibition must be tied to its actual molecular target/process from the source table.

Do not depict "antibiotic" as a generic poison cloud.

---

# 320. Protein abundance also depends on protein degradation

The source compares protein population to a population of organisms:

```text
amount present
=
rate of production
+
rate of loss
```

---

# 321. Protein lifetimes vary enormously

The source gives broad examples:

```text
some structural proteins:
months or years

some metabolic/regulatory proteins:
days, hours, or seconds
```

---

# 322. Proteolysis

```text
proteolysis
=
protein breakdown by peptide-bond hydrolysis
```

---

# 323. Proteases

Proteases hydrolyze peptide bonds and degrade proteins.

---

# 324. Protein degradation functions

Proteolysis helps:

- remove short-lived regulatory proteins
- remove damaged proteins
- remove misfolded proteins
- recycle amino acids

---

# 325. Misfolded proteins are dangerous

The source notes misfolded proteins can aggregate and that aggregates can damage cells or trigger cell death.

---

# 326. Proteasome

In eukaryotes, much regulated protein degradation occurs in:

```text
proteasomes
```

---

# 327. Proteasome locations

The source states proteasomes are present in:

```text
cytosol
and
nucleus
```

---

# 328. Proteasome core

The proteasome contains a central cylindrical proteolytic chamber.

Protease active sites face inward.

---

# 329. Proteasome end stoppers/regulatory complexes

Each end is capped by a large protein complex built from at least:

```text
~10 types of protein subunits
```

in the source description.

---

# 330. Proteasome uses ATP

The cap/stopping machinery uses ATP hydrolysis to:

- unfold target proteins
- thread them into the central proteolytic chamber

---

# 331. Compartmentalized proteolysis prevents uncontrolled protein destruction

By hiding protease active sites inside a chamber, the cell restricts degradation to selected substrates.

---

# 332. Ubiquitin

```text
ubiquitin
```

is a small protein covalently attached to proteins marked for destruction.

---

# 333. Polyubiquitin chain

Proteins targeted for rapid proteasomal degradation are often tagged with:

```text
a short chain of ubiquitin molecules
```

---

# 334. Proteasome recognizes specific polyubiquitin tagging

The proteasome cap recognizes appropriately ubiquitinated target proteins.

---

# 335. Ubiquitin is recycled

Figure 7–46 explicitly shows ubiquitin being released/recycled rather than degraded with the substrate.

---

# 336. Degradation signals

Short-lived proteins can contain short amino-acid sequences that promote ubiquitination.

---

# 337. Damage/misfolding can expose normally buried degradation signals

The source says abnormal conformational motifs or sequences can become exposed when a protein is:

- misfolded
- oxidized
- chemically damaged

and these can promote recognition by ubiquitin-dependent degradation machinery.

---

# 338. Proteasome output

Targets are degraded to short peptides.

Further proteolysis can produce reusable amino acids.

---

# 339. Translation is not the end of protein production

A newly released polypeptide may still require:

- folding
- chaperone assistance
- cofactor binding
- association with other subunits
- covalent modification
- localization

---

# 340. Co-translational folding can begin while chain emerges

The source notes some proteins begin folding as they emerge from the ribosome.

---

# 341. Chaperone assistance

Many nascent proteins encounter chaperones that:

- guide productive folding
- prevent inappropriate aggregation

---

# 342. Post-translational modification

The source names:

- phosphorylation
- glycosylation

as common examples.

---

# 343. Number of known covalent modification types

**Status: `SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`**

Figure 7–47 states:

```text
>100 types
```

of covalent protein modification are known.

---

# 344. Protein maturation can require noncovalent cofactor binding

A completed protein may bind:

```text
small-molecule cofactors
```

before becoming functional.

---

# 345. Protein maturation can require assembly with other protein subunits

A polypeptide may be one subunit of a larger functional complex.

---

# 346. Protein concentration is the result of many rates

Figure 7–48 includes:

- transcription initiation
- elongation
- RNA capping
- splicing
- polyadenylation
- transcription termination
- export
- translation initiation
- translation completion
- protein folding
- post-translational modification
- mRNA degradation
- protein degradation

---

# 347. Transcription initiation is a major regulatory control point

The chapter states transcription initiation is probably the most common point used by cells to regulate gene expression.

Detailed regulation belongs to Chapter 8.

---

# 348. RNA-world hypothesis

The source presents the:

```text
RNA world
```

as a hypothesis for an evolutionary period before modern DNA/protein-dominated cells.

### `SOURCE_HYPOTHESIS`

Do not render this as directly observed historical fact.

---

# 349. Source RNA-world claim

The hypothesis proposes early RNA performed:

- genetic information storage
- catalytic activity
- structural roles
- potentially self-replication-related functions

---

# 350. Autocatalysis

The source argues early life requires a system capable of promoting production of more molecules like itself, directly or indirectly.

---

# 351. Properties of an autocatalytic molecular system

The source describes such a system as able to:

- reproduce
- compete for raw materials
- maintain a nonrandom molecular organization
- decay toward equilibrium when conditions/resources fail

---

# 352. Proteins are powerful catalysts but cannot directly template their own sequence in the source argument

This creates an origin-of-life chicken-and-egg problem if proteins are assumed to precede nucleic-acid templates.

---

# 353. Nucleic acids can template complementary copies

A single RNA sequence can specify:

```text
complementary RNA
```

which can in turn specify the original sequence.

---

# 354. Source theoretical RNA amplification sequence

```text
original RNA
→ complementary RNA
→ copies of original RNA
```

---

# 355. RNA can fold into catalytic structures

Because RNA is single-stranded and sequence-specific, internal base pairing and tertiary interactions can create enzyme-like active surfaces.

---

# 356. Ribozymes were discovered in 1982

**Status: `SOURCE_ERA_STATEMENT` / historical source fact**

The chapter identifies 1982 as the key discovery of catalytic RNA molecules.

---

# 357. Present-day catalytic RNA examples

The chapter emphasizes:

- rRNA catalysis in peptide-bond formation
- snRNA-centered catalysis in RNA splicing

---

# 358. Viroid ribozyme source example

Figure 7–51 shows an RNA catalyst that cleaves another RNA in the context of plant-infecting viroids.

---

# 359. Table 7–4 — peptide-bond formation

```text
reaction:
peptide-bond formation

ribozyme:
ribosomal RNA
```

---

# 360. Table 7–4 — RNA splicing

```text
reaction:
RNA splicing

ribozyme:
small nuclear RNAs
self-splicing RNAs
```

---

# 361. Table 7–4 — DNA ligation

```text
reaction:
DNA ligation

ribozyme:
in-vitro-selected RNA
```

---

# 362. Table 7–4 — RNA polymerization

```text
reaction:
RNA polymerization

ribozyme:
in-vitro-selected RNA
```

---

# 363. Table 7–4 — RNA phosphorylation

```text
reaction:
RNA phosphorylation

ribozyme:
in-vitro-selected RNA
```

---

# 364. Table 7–4 — RNA aminoacylation

```text
reaction:
RNA aminoacylation

ribozyme:
in-vitro-selected RNA
```

---

# 365. Table 7–4 — RNA alkylation

```text
reaction:
RNA alkylation

ribozyme:
in-vitro-selected RNA
```

---

# 366. Table 7–4 — carbon–carbon bond rotation/isomerization

```text
reaction:
C–C bond rotation / isomerization

ribozyme:
in-vitro-selected RNA
```

---

# 367. Self-replicating RNA-system source caution

The chapter states that self-replicating RNA systems had not been found in nature in the source framing, although laboratory progress had been made toward constructing them.

### `SOURCE_ERA_STATEMENT`

---

# 368. RNA-before-DNA source reasoning

The chapter argues RNA may have preceded DNA because:

- ribose can arise relatively readily in primitive-Earth simulation chemistry
- deoxyribose is harder to make
- modern cells derive deoxyribose from ribose using protein enzymes
- RNA can combine information storage with catalysis

### `SOURCE_HYPOTHESIS`

This is evolutionary reasoning, not direct observation.

---

# 369. DNA is more chemically stable than RNA in source argument

The chapter associates greater DNA stability partly with:

```text
deoxyribose backbone
```

allowing longer-lasting information storage.

---

# 370. Double-stranded DNA improves repairability

A damaged DNA strand can be repaired using its intact complementary strand as template.

---

# 371. Thymine rather than uracil helps detect cytosine deamination

Because:

```text
C deamination
→ U
```

and normal DNA uses thymine instead of uracil, U in DNA is recognizable as damage.

---

# 372. RNA cannot use the same U-as-damage signal

Uracil is a normal RNA base.

Thus C→U deamination is harder to identify by simply detecting U in RNA.

---

# 373. Source evolutionary end-state model

The chapter's source model:

```text
early:
RNA provides information + catalysis

later:
DNA specializes in stable information storage
proteins dominate catalysis/structure
RNA remains central intermediary and catalytic participant
```

---

# 374. Figure 7–1 knowledge

The source maps:

```text
DNA → RNA → protein
```

while also retaining DNA replication as DNA→DNA.

---

# 375. Figure 7–2 knowledge

Gene expression output depends on both transcription and translation rates.

---

# 376. Figures 7–3 / 7–4 knowledge

RNA differs from DNA by:

- ribose
- uracil
- A–U pairing

---

# 377. Figure 7–5 knowledge

RNA folds through:

- conventional pairing
- nonconventional pairing
- unpaired regions

into sequence-dependent 3D structures.

---

# 378. Figure 7–6 knowledge

One DNA strand is the transcription template.

The other is the nontemplate/coding strand.

The RNA is complementary to template DNA.

---

# 379. Figure 7–7 knowledge

RNA polymerase:

- opens DNA locally
- synthesizes RNA 5′→3′
- maintains ~9-nt RNA/DNA hybrid
- displaces RNA
- allows DNA to rewind

---

# 380. Figure 7–8 knowledge

Many RNA polymerases can transcribe one gene at once.

Nascent transcripts increase in length along the direction of transcription.

---

# 381. Figures 7–9 / 7–10 knowledge

Bacterial transcription uses:

- promoter
- sigma factor
- +1 start
- -35/-10 promoter elements
- terminator

---

# 382. Figure 7–11 knowledge

Different genes on the same chromosome can use opposite DNA strands as templates.

---

# 383. Figures 7–12 / 7–13 / 7–14 knowledge

Pol II initiation involves:

- TFIID/TBP
- DNA bending
- additional general transcription factors
- TFIIH
- ATP-dependent opening
- Pol II tail phosphorylation
- promoter orientation

---

# 384. Figure 7–15 knowledge

Elongation factors help Pol II transcribe nucleosome-associated DNA.

---

# 385. Figure 7–16 knowledge

Eukaryotic mRNA must cross nuclear pores before cytosolic translation.

---

# 386. Figure 7–17 knowledge

Pol II tail phosphorylation coordinates recruitment of:

- capping factors
- splicing factors
- polyadenylation factors

---

# 387. Figure 7–18 knowledge

Mature eukaryotic mRNA contains:

- 5′ cap
- 5′ UTR
- coding sequence
- 3′ UTR
- poly-A tail

---

# 388. Figures 7–19 / 7–20 knowledge

Most eukaryotic protein-coding genes contain introns and exons.

Gene size can be dominated by intronic sequence.

---

# 389. Figure 7–21 knowledge

Short RNA sequence motifs define splice-site/branch-point recognition.

---

# 390. Figure 7–22 knowledge

Splicing forms a lariat via the branch-point A and then ligates adjacent exons.

---

# 391. Figure 7–23 knowledge

Spliceosome function involves:

- U1
- U2
- U6
- ATP-driven rearrangements
- Mg2+-dependent RNA catalytic center
- exon junction complex deposition

---

# 392. Figure 7–24 knowledge

Splicing can occur while transcription is still ongoing.

---

# 393. Figure 7–25 knowledge

Alternative splicing:

- includes/excludes exons
- preserves exon order
- yields multiple mature mRNAs from one gene

---

# 394. Figure 7–26 knowledge

Nuclear RNA-production/processing components can organize into membraneless condensates.

---

# 395. Figure 7–27 knowledge

Export-ready mRNA carries a combination of processing-associated proteins and recruits a nuclear transport receptor.

---

# 396. Figure 7–28 knowledge

Eukaryotes:

```text
transcription
→ co-transcriptional processing
→ export
→ translation
```

Bacteria:

```text
transcription and translation
can overlap in same compartment
```

---

# 397. Figure 7–29 knowledge

The standard genetic code maps 64 triplets to 20 amino acids plus termination signals.

---

# 398. Figure 7–30 knowledge

One mRNA sequence has three possible reading frames, but only one is normally selected for the intended protein.

---

# 399. Figures 7–31 / 7–32 knowledge

Synthetic-RNA experiments helped decode codon assignments before direct nucleic-acid sequencing methods existed.

---

# 400. Figure 7–33 knowledge

tRNA:

- ~80 nt
- cloverleaf secondary structure
- L-shaped tertiary structure
- anticodon
- amino-acid attachment at 3′ end
- modified bases

---

# 401. Figures 7–34 / 7–35 knowledge

Aminoacyl-tRNA synthetase:

- recognizes tRNA
- recognizes amino acid
- uses ATP
- charges tRNA
- thereby establishes amino-acid meaning of codon/tRNA pairing

---

# 402. Figure 7–36 knowledge

Eukaryotic ribosomes occur:

- free in cytosol
- attached to ER membrane

Detailed targeting to ER belongs to Chapter 15.

---

# 403. Figures 7–37 / 7–38 knowledge

Ribosome:

- large subunit
- small subunit
- A/P/E sites
- RNA-rich structural core

---

# 404. Figure 7–39 knowledge

Translation elongation is a repeated four-step mechanical/chemical cycle.

---

# 405. Figure 7–40 knowledge

rRNA defines ribosome architecture and peptide-bond catalytic chemistry.

---

# 406. Figure 7–41 knowledge

Eukaryotic initiation uses:

- cap-associated recruitment
- small subunit
- initiator Met-tRNA
- initiation factors
- 5′→3′ scanning
- AUG recognition
- large-subunit joining

---

# 407. Figure 7–42 knowledge

Bacterial polycistronic mRNAs can contain several ribosome-binding sites and several coding sequences.

---

# 408. Figure 7–43 knowledge

Release factor recognizes stop codon in A site and promotes hydrolysis/release of the completed chain.

---

# 409. Figure 7–44 knowledge

One mRNA can be translated by many ribosomes simultaneously as a polysome.

---

# 410. Figures 7–45 / 7–46 knowledge

Proteasome:

- recognizes ubiquitin-tagged target
- uses ATP to unfold/translocate target
- degrades protein in internal chamber
- recycles ubiquitin

---

# 411. Figures 7–47 / 7–48 knowledge

Functional protein production includes folding, cofactor binding, subunit assembly, covalent modification, and controlled degradation.

---

# 412. Figures 7–49 through 7–53 knowledge

The source RNA-world model proposes:

```text
RNA-based information/catalysis
→ emergence of protein synthesis
→ DNA becomes long-term genetic store
→ modern RNA intermediary/catalytic roles remain
```

---

# 413. How We Know — cracking the genetic code

The source explains that researchers had to decode codon assignments before practical nucleic-acid sequencing existed.

---

# 414. Cell-free translation system

Researchers broke open:

```text
E. coli
```

and prepared a cell extract containing:

- ribosomes
- tRNAs
- enzymes
- small molecules
- native mRNAs

---

# 415. Radioactive amino acids revealed new protein synthesis

Adding radiolabeled amino acids allowed newly synthesized polypeptides to be detected.

---

# 416. Native mRNA was a confounding variable

Cell extracts initially translated the bacterium's own mRNAs.

---

# 417. Nirenberg removed native mRNA with RNase

Marshall Nirenberg used a small amount of ribonuclease to destroy endogenous mRNA, allowing synthetic RNA messages to control translation.

---

# 418. Polynucleotide phosphorylase

The source describes use of:

```text
polynucleotide phosphorylase
```

to synthesize simple RNAs without a template.

---

# 419. Poly-U experiment

Synthetic:

```text
poly-U
```

directed synthesis of:

```text
polyphenylalanine
```

---

# 420. First codon assignment

From poly-U:

```text
UUU → phenylalanine
```

was established.

---

# 421. Poly-A result

The source states:

```text
AAA → lysine
```

---

# 422. Poly-C result

The source states:

```text
CCC → proline
```

---

# 423. Poly-G complication

Poly-G could not be decoded by the same simple method because the RNA formed an aberrant structure that jammed the system.

---

# 424. Khorana's repeating-sequence RNAs

Gobind Khorana developed methods to produce defined repeating RNA sequences through DNA templates and RNA polymerase.

Examples:

- repeating dinucleotides
- trinucleotides
- tetranucleotides

---

# 425. Poly-UG ambiguity

Repeated:

```text
UGUGUG...
```

produced alternating cysteine/valine in the source experiment.

Possible codons:

```text
UGU
GUG
```

but that experiment alone did not reveal which one encoded which amino acid.

---

# 426. Triplet-binding assay

Nirenberg and Phil Leder found that one synthetic 3-nt codon could bind a ribosome and recruit the matching aminoacyl-tRNA.

---

# 427. UUU triplet assay

```text
UUU
→ ribosome complex
→ Phe-tRNA recruitment
```

confirmed the UUU→phenylalanine assignment.

---

# 428. Complete code was then assigned using all 64 triplets

The source describes rapid completion of the codon table after development of the triplet-binding approach.

---

# 429. Scientific-method lesson from code cracking

The source illustrates:

```text
simplify system
→ control message
→ isolate one variable
→ measure biochemical output
→ infer mapping rule
```

---

# 430. Question 7–1 concept test

The source uses "central dogma" as a historical term for a strongly supported information-flow framework.

### `SOURCE_DERIVED`

The word "dogma" should not be interpreted as meaning the idea is accepted without evidence.

The chapter spends substantial effort describing experimental evidence and mechanistic exceptions/variations in gene products.

---

# 431. Question 7–2 transcript-length logic

In the rRNA transcription micrograph:

```text
shortest transcripts
→ polymerases closest to transcription start

longest transcripts
→ polymerases furthest along gene
```

Direction of polymerase movement can therefore be inferred from transcript-length gradients.

RNA is much shorter than the DNA gene because RNA is a single-stranded copy of one DNA strand rather than both strands and because image geometry differs between the two molecules.

---

# 432. Question 7–3 transcription RNA polymerase versus primase

Both enzymes synthesize RNA from DNA templates and can initiate without a pre-existing primer.

However, the chapter explicitly states they are:

```text
different enzymes
encoded by different genes
```

with distinct biological roles.

### `DO_NOT_INFER`

Similarity of chemistry does not make them interchangeable in vivo.

---

# 433. Question 7–4 mischarged-tRNA logic

A ribosome cannot detect that a chemically wrong amino acid has been attached to an otherwise correct tRNA.

Therefore:

```text
aaRS charging accuracy
is essential to genetic-code fidelity
```

---

# 434. Question 7–5 sequence-direction concept

To translate a DNA-template sequence:

```text
1. construct complementary RNA 5′→3′
2. establish reading frame
3. read RNA codons 5′→3′
4. protein grows N→C
```

### `PROJECT_CONSTRAINT`

Never translate the template DNA directly in the wrong polarity.

---

# 435. Question 7–6 RNA-world nuance

Modern RNA has not "lost all catalytic roles."

The chapter explicitly preserves catalytic RNA in:

- ribosome
- spliceosome
- other ribozymes

---

# 436. Question 7–7 — one ribosome is not protein-specific

An individual ribosome can translate many different mRNAs over its lifetime.

Therefore:

```text
"one ribosome makes only one protein type"
=
false
```

---

# 437. Question 7–7 — mRNA structure statement

RNA molecules can fold, but it is not correct to claim that every mRNA must adopt one unique required 3D structure simply for translation.

### `SOURCE_DERIVED`

---

# 438. Question 7–7 — ribosomal subunits exchange

Large and small subunits dissociate at termination and can reassemble in later rounds.

Therefore:

```text
same large/small pair stays permanently together
=
false
```

---

# 439. Question 7–7 — ribosome is not membrane-bounded

A ribosome is a ribonucleoprotein complex, not a single-membrane organelle.

---

# 440. Question 7–7 — gene template strand is promoter-selected

Complementary DNA strands do not mean either strand can be arbitrarily used for the same gene.

Promoter orientation determines the template.

---

# 441. Question 7–7 — RNA sequence cannot normally contain T

A mature RNA sequence uses:

```text
U
```

not thymine T.

---

# 442. Question 7–7 — protein amount does not depend on catalytic activity directly

The quantity of protein in a cell depends on synthesis and degradation rates.

Catalytic activity affects what each molecule does, not how many protein molecules exist by itself.

---

# 443. Question 7–8 splice-site mutation logic

A single intronic nucleotide substitution can disrupt a splicing signal.

This can cause incorrect splice-site choice and loss of an internal exon/coding segment from mature mRNA.

### `SOURCE_DERIVED`

If the deleted length is:

```text
173 nt
```

which is not divisible by 3, loss of coding sequence would also alter the downstream reading frame.

---

# 444. Question 7–9 codon-sequence logic

Both:

```text
5′-AGA-GGA-GAU-3′
```

and:

```text
5′-CGG-GGU-GAC-3′
```

encode:

```text
Arg-Gly-Asp
```

using the source codon table.

---

# 445. Question 7–10 anticodon/codon bond type

Codon–anticodon pairing uses:

```text
hydrogen bonds
```

not covalent bonds.

---

# 446. Question 7–10 A-site context

An incoming aminoacyl-tRNA pairs to an exposed codon in the A site during elongation.

---

# 447. Question 7–10 translocation

Codon–anticodon interactions must be broken/reorganized as spent tRNAs leave and the ribosome advances.

The physical ribosome cycle, not GTP-derived covalent bonding, controls this progression in the chapter's model.

---

# 448. Question 7–11 terminology mapping

Ordinary-word analogies:

```text
replication
→ making another copy

transcription
→ converting/copying a message into another written form

translation
→ converting a message from one language/system of symbols into another
```

Cell-biological meanings:

```text
DNA replication
→ DNA copied into DNA

transcription
→ DNA sequence copied into RNA

translation
→ mRNA nucleotide code converted into amino-acid sequence
```

---

# 449. Question 7–12 pair-code capacity

If four nucleotide types were read in ordered pairs:

```text
4^2 = 16
```

possible codons would exist.

Thus at most 16 distinct direct codewords are available before assigning stop/start roles or redundancy.

---

# 450. Question 7–12 order-independent triplets

If order within each 3-nucleotide codon did not matter, code capacity would be much lower than 64 because permutations such as:

```text
AUG
UGA
GAU
```

would count as the same composition.

### `SOURCE_DERIVED`

Such a code would make translation/reading-frame discrimination less information-rich.

---

# 451. Question 7–13 codon-chemistry evolutionary pattern

The source question notes that chemically similar amino acids can have related codons.

### `SOURCE_HYPOTHESIS`

A possible source-consistent evolutionary interpretation is that incremental changes to an early code could preserve similar amino-acid chemistry when codons mutate, reducing damage from coding errors.

Do not elevate this speculative explanation to established mechanism.

---

# 452. Question 7–14 suppressor-tRNA logic

To read:

```text
UGA
```

as tryptophan, a tRNA anticodon must mutate so it can base-pair with UGA while still carrying tryptophan.

### `SOURCE_DERIVED`

This would suppress the mutant protein's premature stop but could also cause readthrough of legitimate UGA stop codons elsewhere, disrupting normal termination.

---

# 453. Question 7–15 charging-energy logic

Given:

```text
amino acid + tRNA + ATP
→ aminoacyl-tRNA + AMP + PPi
```

and a near-zero free-energy change for the written step, further hydrolysis of:

```text
PPi → 2 Pi
```

can pull the reaction toward products through coupling.

---

# 454. Question 7–16 average protein length estimate

Source assumptions:

```text
average protein mass = 30,000 Da
average amino acid = 120 Da
```

Therefore:

```text
average protein length
≈ 30,000 / 120
≈ 250 amino acids
```

---

# 455. Question 7–16 titin length estimate

Source assumptions:

```text
titin mass = 3,000,000 Da
average amino acid = 120 Da
```

Therefore:

```text
titin length
≈ 25,000 amino acids
```

---

# 456. Question 7–16 titin translation time using exercise rate

The question specifies:

```text
2 amino acids/s
```

for the calculation.

Thus:

```text
25,000 aa / 2 aa/s
= 12,500 s
≈ 208 min
≈ 3.47 h
```

### Source consistency note

Main text elsewhere gives about:

```text
6 aa/s
```

for a eukaryotic ribosome.

The question intentionally supplies a different rate for its exercise.

Do not silently merge them.

---

# 457. Question 7–16 translation error rate

The source question states:

```text
1 translation error / 10,000 amino acids
```

---

# 458. Question 7–16 average-protein error-free probability

Using:

```text
E = 10^-4
n ≈ 250
P = (1-E)^n
```

gives approximately:

```text
P ≈ 0.975
≈ 97.5%
```

error-free average-sized proteins under the exercise assumptions.

---

# 459. Question 7–16 titin error-free probability

Using:

```text
E = 10^-4
n ≈ 25,000
```

gives approximately:

```text
P ≈ 0.082
≈ 8.2%
```

error-free titin molecules under the exercise assumptions.

---

# 460. Question 7–16 ribosomal-protein combined mass

The question gives a combined eukaryotic ribosomal-protein mass of:

```text
~2.5 × 10^6 Da
```

and asks whether synthesis as one giant protein would be advantageous.

### `SOURCE_DERIVED`

Separate proteins permit:

- independent synthesis
- assembly
- replacement
- lower probability that one translation error invalidates all protein components

The source question is conceptual rather than a direct factual assertion of optimization.

---

# 461. Question 7–16 transcription-rate source assumption

The question states transcription occurs at approximately:

```text
30 nucleotides/s
```

for its exercise.

---

# 462. Titin mRNA transcription time cannot be calculated from protein mass alone

### `SOURCE_DERIVED`

Protein size does not uniquely determine gene/transcript length because eukaryotic genes contain:

- introns
- UTRs
- other noncoding sequence

Thus coding-region length alone is insufficient to calculate total transcription time.

---

# 463. Question 7–17 single-nucleotide insertion near coding-sequence end

Likely causes a frameshift from insertion site onward, but because it is near the end, fewer downstream amino acids may be affected than for an early frameshift.

---

# 464. Question 7–17 single-nucleotide deletion near coding-sequence beginning

Likely causes an early frameshift affecting most downstream codons and is therefore potentially severe.

---

# 465. Question 7–17 deletion of exactly 3 coding nucleotides

A 3-nt deletion removes one codon without shifting the downstream reading frame.

Its effect depends on which amino acid is lost.

---

# 466. Question 7–17 deletion of 4 coding nucleotides

A 4-nt deletion generally shifts the reading frame after the deletion.

---

# 467. Question 7–17 nucleotide substitution

A single substitution may:

- be synonymous
- change one amino acid
- create a stop codon

depending on codon context.

### `SOURCE_DERIVED`

The chapter's genetic-code redundancy supports this logic.

---

# 468. Question 7–18 transcript-end geometry

In a transcription "Christmas-tree" micrograph:

```text
shortest nascent RNAs
→ near gene start

longest nascent RNAs
→ near gene end
```

and each nascent RNA grows:

```text
5′ at free distal end
3′ at polymerase-associated growing end
```

---

# 469. RNA molecule schema

```yaml
rna:
  id:
  type:
    - mRNA
    - pre_mRNA
    - rRNA
    - tRNA
    - snRNA
    - miRNA
    - siRNA
    - lncRNA
    - other
  sequence:
  length_nt:
  five_prime_end:
  three_prime_end:
  modifications:
  folded_structure:
  bound_proteins:
  source_gene:
  compartment:
  synthesis_time:
  degradation_state:
  provenance:
```

---

# 470. Transcription-unit schema

```yaml
transcription_unit:
  gene_id:
  chromosome:
  template_strand:
  coding_strand:
  promoter:
  start_site:
  terminator_or_termination_region:
  polymerase_type:
  active_polymerases:
  nascent_transcripts:
  chromatin_state:
  transcription_rate:
  provenance:
```

---

# 471. RNA polymerase II state schema

```yaml
rna_polymerase_II:
  id:
  promoter_bound:
  tail_phosphorylation_state:
  general_transcription_factors:
  elongation_factors:
  template_coordinate:
  nascent_RNA:
  RNA_DNA_hybrid_length:
  elongation_state:
  termination_state:
  provenance:
```

---

# 472. mRNA-processing schema

```yaml
mRNA_processing:
  transcript_id:
  capped:
  cap_structure:
  cap_binding_protein:
  cleavage_3prime:
  polyA_length:
  polyA_binding_protein:
  introns:
  exons:
  splice_events:
  exon_junction_complexes:
  export_ready:
  nuclear_transport_receptor:
```

---

# 473. Splice-event schema

```yaml
splice_event:
  transcript_id:
  intron_id:
  five_prime_splice_site:
  branch_point_A:
  three_prime_splice_site:
  U1_state:
  U2_state:
  U6_state:
  ATP_dependent_rearrangement:
  Mg2_state:
  lariat_state:
  exon_ligation_state:
  exon_junction_complex:
  completed:
```

---

# 474. Mature-mRNA schema

```yaml
mature_mRNA:
  id:
  five_prime_cap:
  five_prime_UTR:
  coding_sequence:
  three_prime_UTR:
  polyA_tail:
  exon_order:
  export_status:
  ribosome_binding:
  lifetime:
  degradation_state:
```

---

# 475. tRNA schema

```yaml
tRNA:
  id:
  sequence:
  length_nt:
  anticodon:
  amino_acid_identity:
  charged:
  attached_amino_acid:
  acceptor_end:
  modified_bases:
  synthetase:
  conformation:
  ribosome_site:
```

---

# 476. Translation-event schema

```yaml
translation_event:
  mRNA:
  ribosome:
  reading_frame:
  start_codon:
  current_codon:
  A_site_tRNA:
  P_site_tRNA:
  E_site_tRNA:
  nascent_polypeptide:
  peptide_length:
  initiation_state:
  elongation_state:
  termination_state:
  biological_time:
```

---

# 477. Ribosome schema

```yaml
ribosome:
  id:
  organism_context:
  small_subunit:
  large_subunit:
  rRNAs:
  ribosomal_proteins:
  mRNA_binding_state:
  A_site:
  P_site:
  E_site:
  conformation:
  translation_state:
  provenance:
```

---

# 478. Aminoacyl-tRNA synthetase schema

```yaml
aminoacyl_tRNA_synthetase:
  amino_acid:
  recognized_tRNAs:
  tRNA_identity_elements:
  ATP_state:
  aminoacylation_state:
  error_state:
  provenance:
```

---

# 479. Protein-turnover schema

```yaml
protein_turnover:
  protein_id:
  synthesis_time:
  folding_state:
  modifications:
  damage_state:
  ubiquitination_state:
  polyubiquitin_chain:
  proteasome_bound:
  degradation_rate:
  lifetime:
```

---

# 480. Proteasome schema

```yaml
proteasome:
  id:
  central_protease_chamber:
  regulatory_caps:
  ATP_state:
  substrate:
  ubiquitin_recognition:
  unfolding_state:
  translocation_state:
  peptide_products:
  ubiquitin_recycled:
```

---

# 481. Gene-expression BiologicalTime chain

A protein-coding eukaryotic gene can be represented as:

```text
promoter assembly
→ transcription initiation
→ elongation
→ co-transcriptional cap addition
→ co-transcriptional spliceosome cycles
→ 3′ cleavage/polyadenylation
→ transcription termination
→ export-quality control
→ nuclear pore transport
→ translation initiation
→ repeated elongation cycles
→ termination
→ folding
→ maturation
→ degradation
```

---

# 482. CameraTime must remain independent

The user must be able to:

```text
pause transcription
zoom from nucleus to spliceosome
inspect branch-point chemistry
zoom outward to cytosol
inspect a ribosome
```

without BiologicalTime advancing unless explicitly resumed.

---

# 483. DNA-to-RNA semantic zoom continuity

When zooming into an active gene:

```text
chromosome territory
→ local chromatin
→ nucleosome
→ promoter
→ RNA polymerase
→ nascent RNA
```

must remain the same genomic locus.

---

# 484. RNA-to-protein semantic continuity

The mature mRNA exported through the nuclear pore must be the same mRNA later bound by the ribosome.

### Hard project rule

Do not substitute a generic unrelated mRNA in the cytosolic translation scene.

---

# 485. Transcript identity must survive processing

The same RNA entity changes state:

```text
nascent transcript
→ capped transcript
→ partially spliced transcript
→ polyadenylated transcript
→ mature mRNA
→ exported mRNA
→ translating mRNA
→ degrading mRNA
```

---

# 486. Exon identity must survive splicing

Each exon should retain genomic provenance:

```yaml
exon:
  gene:
  genomic_start:
  genomic_end:
  transcript_start:
  transcript_end:
  included_in_isoform:
```

---

# 487. Alternative-splicing world-state rule

Alternative isoforms are different RNA products derived from the same gene.

Do not model them as different DNA genes unless the DNA truly differs.

---

# 488. mRNA cap rendering rule

At molecular scale, the cap is a chemical nucleotide modification.

At learner scale, a cap icon may be used only as a ViewState symbol.

---

# 489. Poly-A rendering rule

Poly-A tail is a real RNA sequence of repeated adenines.

Do not render it as decorative fuzz detached from the RNA.

---

# 490. Spliceosome rendering rule

At mechanistic scale:

```text
snRNA base pairing
+
branch-point geometry
+
ATP-driven rearrangement
+
Mg2+-centered catalysis
+
lariat formation
+
exon ligation
```

must be causally connected.

---

# 491. Co-transcriptional splicing rule

A mature exon junction can form while downstream RNA is still being synthesized.

### Hard project rule

Do not force processing to wait until RNA polymerase reaches the gene end.

---

# 492. Nuclear-condensate rendering rule

Transcription/processing condensates should be:

- dynamic
- membraneless
- compositionally enriched
- exchanging components

not perfect translucent balls.

---

# 493. Nuclear export rule

The nuclear envelope remains intact during ordinary mRNA export.

The mRNA crosses via:

```text
nuclear pore complex
```

### Hard project rule

Do not dissolve or puncture the envelope for export animation.

---

# 494. Translation initiation rendering rule — eukaryote

Required source sequence:

```text
initiator Met-tRNA + small subunit + initiation factors
→ bind 5′ end/cap-associated message
→ scan 5′→3′
→ recognize AUG
→ initiation factors release
→ large subunit joins
→ elongation begins
```

---

# 495. Translation initiation rendering rule — bacterium

Required source sequence:

```text
ribosome-binding sequence
→ small-subunit recruitment
→ nearby AUG
→ initiation
```

No eukaryotic cap-scanning should be imposed.

---

# 496. Translation elongation rendering rule

A correct mechanistic cycle must preserve:

- A/P/E site identities
- codon–anticodon pairing
- peptide transfer
- subunit translocation
- exactly 3-nt frame advance
- N→C protein growth

---

# 497. Release-factor rendering rule

At stop codon:

```text
release factor
≠ tRNA
```

It triggers hydrolysis rather than adding an amino acid.

---

# 498. Polysome rendering rule

All ribosomes on one polysome translate the same mRNA molecule but are located at different codon positions.

Nascent protein length should correlate with ribosome distance from the start codon.

---

# 499. Amino-acid color rule

Amino-acid color can be ViewState aid.

The underlying WorldState must retain actual residue identity.

---

# 500. Codon color rule

Codon grouping must follow the selected reading frame.

### Hard project rule

Do not color arbitrary triplets independently of translation start.

---

# 501. tRNA charging rule

Correct amino acid must be attached by aminoacyl-tRNA synthetase before tRNA participates normally in translation.

---

# 502. Ribosome does not choose amino acid by shape alone

The source experiment demonstrates:

```text
ribosome trusts charged tRNA identity
```

and does not chemically verify the amino acid against the codon.

---

# 503. Ribosome structural LOD rule

The same ribosome entity may appear as:

```text
particle
→ two-subunit complex
→ rRNA/protein architecture
→ A/P/E sites
→ catalytic-center molecular representation
→ atomistic reaction geometry
```

without changing identity.

---

# 504. Ribosome is not a membrane organelle

### Hard project rule

Do not give a ribosome a lipid bilayer.

---

# 505. ER-bound ribosome rule

A ribosome can be physically associated with ER while translating.

Detailed targeting and translocation belong to Chapter 15.

Do not infer from Chapter 7 alone that every ribosome remains permanently ER-bound or permanently free.

---

# 506. Protein-degradation rendering rule

Ubiquitin targeting and proteasomal degradation must be distinct processes:

```text
target marking
→ recognition
→ unfolding
→ translocation
→ proteolysis
→ peptide release
→ ubiquitin recycling
```

---

# 507. Proteasome active sites should remain internal

The source chamber architecture is mechanistically important.

Do not show proteases randomly attacking cytosolic proteins outside the proteasome.

---

# 508. Protein-lifetime world-state rule

Protein concentration should be emergent from:

```text
production rate
and
degradation rate
```

rather than a fixed count that never turns over.

---

# 509. Source quantitative register

| Quantity | Chapter 7 source value/context | Status |
|---|---:|---|
| human chromosome DNA molecule | up to ~250 million bp | source scale |
| mature RNA length | usually ≤ few thousand nt | broad |
| transient RNA/DNA hybrid | ~9 nt | structural |
| medium gene example | 1500 bp | example |
| transcription time for 1500-bp example | ~50 s | example |
| extreme transcription output | >1000 transcripts/h | example |
| RNA polymerase error | ~1/10^4 nt | source |
| DNA polymerase comparison | ~1/10^7 nt | source |
| TATA-box position | ~30 nt upstream | source |
| Pol II cap timing | after ~25 nt | source |
| poly-A tail | few hundred nt; Fig. ~150–250 A | source |
| intron length | 1 to >10,000 nt | source |
| Factor VIII gene | ~200,000 bp, 26 exons | example |
| spliceosome | 5 snRNPs + ~200 proteins | source figure |
| bacterial mRNA lifetime | ~3 min | source |
| β-globin mRNA lifetime | >10 h | source |
| some euk mRNA lifetime | <30 min | source |
| possible codons | 64 | exact combinatorial |
| sense codons | 61 | source code |
| stop codons | 3 | source |
| tRNA length | ~80 nt | source |
| minimum tRNA types with wobble | ~31 | source |
| human tRNA genes | ~500 | source-era |
| human anticodons represented | 48 | source-era |
| aaRS count in most organisms | ~20 | source |
| complete euk ribosome | ~4.2 MDa | figure |
| euk small subunit | ~1.4 MDa | figure |
| euk large subunit | ~2.8 MDa | figure |
| euk ribosome proteins | 82 | figure |
| euk ribosome rRNAs | 4 | figure |
| ribosome composition by mass | ~2/3 RNA, 1/3 protein | source |
| euk translation rate | ~6 aa/s | main text |
| bacterial translation rate | ~20 aa/s | main text |
| bacterial ribosome-binding site | ~6 nt | source |
| protein synthesis duration | ~20 s to several min | source |
| polysome ribosome spacing | as close as ~80 nt | source |
| proteasome cap | ≥10 protein-subunit types | source |
| known covalent protein modifications | >100 | source-era |
| average protein MW Q7–16 | 30,000 Da | exercise |
| titin MW Q7–16 | 3,000,000 Da | exercise |
| mean amino-acid MW Q7–16 | 120 Da | exercise |
| exercise translation rate | 2 aa/s | exercise |
| translation error Q7–16 | 1/10,000 aa | exercise |
| euk ribosomal protein mass Q7–16 | ~2.5 MDa | exercise |
| transcription rate Q7–16 | ~30 nt/s | exercise |

---

# 510. Quantitative verification queue

Before quantitative simulation, externally verify:

## Transcription

- polymerase speed by species/cell type
- pause frequency
- promoter dwell time
- polymerase density
- initiation rate
- termination mechanism
- RNA/DNA hybrid length by polymerase state

## RNA processing

- capping kinetics
- poly-A length distributions
- cleavage-site rules
- intron-length distributions
- spliceosome assembly kinetics
- splice-site fidelity
- alternative-splicing probabilities

## Nuclear export

- export times
- pore transit rates
- mRNP composition
- export-receptor identities

## Translation

- initiation frequency
- elongation rate
- ribosome spacing
- codon-specific pause rates
- tRNA abundances
- aaRS error rates
- translation error spectra

## Ribosomes

- species-specific composition
- structural state
- rRNA modification
- translation-factor identities

## Proteasomes

- substrate-recognition kinetics
- ubiquitin-chain linkage type
- unfolding rate
- ATP cost
- degradation rate

## RNA-world material

- distinguish source hypothesis from modern external evidence
- do not treat origin-of-life narrative as experimentally observed history

---

# 511. Source-era caution register

The following source statements should not become timeless universal constants without verification:

```text
~500 human tRNA genes
48 human anticodons
"most human genes" alternatively spliced
>100 protein modification types
specific transcript lifetimes
specific translation rates
specific ribosome composition counts
RNA-world historical sequence
```

---

# 512. Cross-chapter dependencies

## Chapter 2

Provides:

- nucleotide chemistry
- RNA/DNA chemical differences
- amino-acid chemistry
- hydrogen bonding
- phosphodiester bonds

## Chapter 3

Provides:

- ATP hydrolysis
- activated carriers
- reaction coupling
- free-energy logic

## Chapter 4

Provides:

- protein folding
- domains
- chaperones
- allostery
- ubiquitin
- protein modifications
- biomolecular condensates
- ribozymes as structured RNA analogy

## Chapter 5

Provides:

- genes
- chromosomes
- chromatin
- nucleosomes
- promoter accessibility context
- nucleolus

## Chapter 6

Provides:

- DNA template logic
- 5′/3′ polarity
- DNA polymerase
- primase
- proofreading
- mutation

## Chapter 8

Will refine:

- transcriptional regulation
- enhancers
- activators/repressors
- mediator
- chromatin regulation
- miRNA/siRNA regulation
- post-transcriptional control

## Chapter 9

Will refine:

- evolution of genes
- exon shuffling
- sequence conservation
- origin/evolution of coding systems

## Chapter 10

Will refine:

- recombinant expression
- sequencing
- gene manipulation
- synthetic biology approaches

## Chapter 14

Will refine mitochondrial translation/code differences.

## Chapter 15

Will refine:

- nuclear pore transport
- ER-bound translation
- signal peptides
- co-translational translocation
- protein targeting

## Chapter 18

Will refine rapid proteolysis and cell-cycle protein turnover.

---

# 513. Chapter 7 core causal model

```text
GENE DNA
contains promoter + transcribed sequence

PROMOTER RECOGNITION
positions RNA polymerase

TRANSCRIPTION
creates complementary RNA 5′→3′

RNA FOLDING
gives RNA structural potential

EUKARYOTIC RNA PROCESSING
caps, splices, and polyadenylates transcripts

EXPORT QUALITY CONTROL
selects mature mRNA

NUCLEAR PORE
moves mature mRNA to cytosol

GENETIC CODE
maps codons to amino acids

AMINOACYL-tRNA SYNTHETASES
charge correct tRNAs

tRNAs
pair codons with amino-acid cargo

RIBOSOMES
decode mRNA and catalyze peptide-bond formation

INITIATION
sets reading frame

ELONGATION
cycles through A/P/E sites

TERMINATION
uses release factor at stop codon

POLYSOMES
amplify protein output

FOLDING / MODIFICATION / ASSEMBLY
create functional proteins

UBIQUITIN / PROTEASOME
control protein lifetime

RNA CATALYSIS
remains central in spliceosome and ribosome
```

---

# 514. Chapter 7 consistency tests

A future implementation fails Chapter 7 review if it implies:

```text
RNA contains deoxyribose
FALSE

RNA normally uses thymine instead of uracil
FALSE

RNA polymerase synthesizes RNA 3′→5′
FALSE

RNA polymerase always needs a primer
FALSE

new RNA stays paired to the entire DNA template
FALSE

one chromosome strand is always the transcription template
FALSE

promoter orientation has no relationship to transcription direction
FALSE

bacterial sigma factor is the same as a eukaryotic general transcription factor
FALSE

all eukaryotic promoters require an identical TATA-box architecture
FALSE

TFIIH phosphorylation means all Pol II regulation is a single ON/OFF phosphate
OVERGENERALIZATION

eukaryotic mRNA is translated inside the nucleus
FALSE

all RNA processing happens only after transcription is complete
FALSE

5′ cap is ordinary first nucleotide with no unusual linkage
FALSE

poly-A tail is encoded as a long genomic A-run in the source processing model
FALSE

introns are never transcribed
FALSE

spliceosome is a purely protein enzyme
FALSE

branch-point lariat linkage uses an ordinary 3′–5′ phosphodiester bond
FALSE

alternative splicing can arbitrarily reorder exon sequence
FALSE

nuclear processing condensates have lipid membranes
FALSE

every RNA transcript is exported
FALSE

mRNA lifetime has no effect on protein amount
FALSE

a codon contains two nucleotides
FALSE

codons are normally read 3′→5′
FALSE

each amino acid has only one codon
FALSE

tRNA anticodon directly binds free amino acid
FALSE

ribosome independently verifies the amino acid attached to tRNA
FALSE

all tRNA–codon positions must always use perfect Watson-Crick pairing
FALSE IN SOURCE WOBBLE MODEL

ribosome is mainly a protein enzyme with passive RNA
FALSE

peptide bond is catalyzed by a ribosomal protein in the source model
FALSE

protein grows C→N
FALSE

mRNA moves through ribosome 3′→5′
FALSE

AUG is only a methionine codon and never an initiation signal
FALSE

stop codon is recognized by a tRNA carrying "stop amino acid"
FALSE

release factor adds an amino acid
FALSE

one mRNA can only host one ribosome
FALSE

ribosomes are membrane-bounded organelles
FALSE

all bacterial translation must wait until transcription ends
FALSE

ubiquitin itself is the protease that cuts proteins
FALSE

proteasomal proteases are freely exposed to the cytosol
FALSE

translation alone creates a fully mature protein in every case
FALSE

RNA-world hypothesis is directly observed prebiotic history
FALSE
```

---

# 515. Science-canon architecture rule

Chapter 7 requires persistent identity across:

```text
gene
→ nascent RNA
→ processed RNA
→ exported mRNA
→ translating mRNA
→ degraded RNA

and

codon
→ matched tRNA
→ attached amino acid
→ nascent polypeptide residue
→ mature protein residue
```

The project should be able to trace a residue in a mature protein back to:

```text
its codon
→ mRNA nucleotide coordinates
→ exon
→ genomic DNA coordinates
```

where the mechanism permits.

---

# 516. Gene-to-protein provenance chain

Recommended lineage object:

```yaml
expression_lineage:
  gene_id:
  DNA_coordinates:
  transcript_id:
  splice_isoform:
  mRNA_coordinates:
  codon_index:
  tRNA_id:
  amino_acid:
  protein_id:
  residue_index:
```

---

# 517. Scale Spine extension from Chapter 7

Chapter 7 adds a causal branch to the existing DNA Scale Spine:

```text
nucleus
→ chromosome territory
→ chromatin
→ gene
→ RNA polymerase
→ nascent RNA
→ spliceosome / RNA processing
→ mature mRNA
→ nuclear pore
→ cytosolic mRNA
→ ribosome
→ tRNA
→ codon / anticodon
→ peptide bond
→ nascent protein
→ folded protein
```

---

# 518. Seamlessness test

A valid scene should be able to answer:

```text
Which gene is this?
Which DNA strand is the template?
Which RNA molecule came from it?
Which exons survived splicing?
Which mRNA crossed the pore?
Which ribosome is translating it?
Which codon is currently in the A site?
Which tRNA matches it?
Which amino acid is attached?
Where will that amino acid appear in the protein?
```

If those identities are lost during zoom or scene changes, the experience has become disconnected illustration rather than The Seamless Cell.

---

# 519. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 7: “From DNA to Protein: How Cells Read the Genome.”**

Printed pages:

```text
237–276
```

PDF pages reviewed:

```text
272–311
```

Major sections:

```text
FROM DNA TO RNA

FROM RNA TO PROTEIN

RNA AND THE ORIGINS OF LIFE
```

All chapter subsections listed in Section 1 were reviewed.

Supporting material reviewed:

```text
Figures 7–1 through 7–53

Table 7–1
Types of RNA Produced in Cells

Table 7–2
The Three RNA Polymerases in Eukaryotic Cells

How We Know
Cracking the Genetic Code

Table 7–3
Antibiotics That Inhibit Bacterial Protein or RNA Synthesis

Table 7–4
Biochemical Reactions That Can Be Catalyzed by Ribozymes

Essential Concepts

Questions 7–1 through 7–18
```

---

# 520. Approval checklist

Before changing this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

verify:

- central-dogma source wording
- gene-expression definition
- ribose/deoxyribose distinction
- uracil/thymine distinction
- RNA folding
- conventional/nonconventional base pairing
- transcription template/coding strand distinction
- RNA synthesis direction
- incoming NTP chemistry
- transient ~9-nt RNA/DNA hybrid
- multi-polymerase transcription
- source transcription-rate examples
- RNA polymerase error rate
- all Table 7–1 RNA classes
- bacterial promoter definition
- sigma-factor role
- -35/-10 source promoter motifs
- promoter polarity
- bacterial terminator source model
- Pol I/II/III table
- general transcription factors
- TFIID/TBP
- TATA-box position
- TFIIH ATP and kinase roles
- Pol II tail phosphorylation/dephosphorylation
- elongation through nucleosomes
- nuclear/cytosolic separation
- cap timing
- 7-methylguanosine
- 5′-to-5′ cap linkage
- poly-A cleavage/addition
- source poly-A length
- UTR definitions
- intron length range
- β-globin and Factor VIII examples
- co-transcriptional splicing
- branch-point adenine
- lariat chemistry
- snRNA/snRNP terminology
- five snRNPs / ~200 proteins
- U1/U2/U6 roles
- ATP-dependent spliceosome rearrangements
- Mg2+ catalytic center
- exon junction complexes
- alternative-splicing rules
- nuclear condensates
- nucleolus/Cajal body/interchromatin granule descriptions
- export-readiness protein ensemble
- mRNA lifetime examples
- full codon table
- start and stop codons
- reading-frame logic
- tRNA ~80-nt scale
- cloverleaf versus L shape
- modified tRNA bases
- wobble
- 31-tRNA source statement
- human tRNA gene/anticodon source numbers
- aminoacyl-tRNA synthetase count/role
- ATP-dependent charging
- misacylated-tRNA experiment
- ribosome composition
- euk ribosome masses
- 2/3 RNA and 1/3 protein source ratio
- A/P/E sites
- four-step elongation cycle
- rRNA catalytic role
- 23S rRNA peptidyl transferase
- euk/bacterial translation-rate source values
- initiator tRNA
- methionine/formyl-methionine distinction
- euk cap-scanning model
- bacterial ~6-nt ribosome-binding sequence
- polycistronic translation
- release-factor mechanism
- polysomes / ~80-nt spacing
- Table 7–3 antibiotics
- proteasome architecture
- ATP-dependent unfolding
- ubiquitin/polyubiquitin
- post-translational maturation
- RNA-world hypothesis labels
- Table 7–4 ribozyme reactions
- Meselson-like evidentiary rigor in genetic-code section
- all question-derived calculations
- every `SOURCE_MODEL`
- every `SOURCE_DERIVED`
- every `SOURCE_HYPOTHESIS`
- every `DO_NOT_INFER`
- every project-continuity constraint

---

# END OF CHAPTER 07 CANON

Recommended repository destination:

```text
science/chapters/07_from_dna_to_protein.md
```

Recommended commit message:

```text
science: add Chapter 7 DNA to protein canon
```

Do not begin Chapter 8 merely because this file exists.

Chapter 8 will take the transcription, RNA-processing, translation, and protein-turnover entities defined here and add the regulatory logic that determines when, where, and how strongly genes are expressed.
