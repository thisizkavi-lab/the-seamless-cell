---
title: "The Seamless Cell — Science Canon — Chapter 19"
subtitle: "Sexual Reproduction and Genetics"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 19, printed pages 677–716 (PDF pages 712–751)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 19 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 19 explains how sexual reproduction alters the logic of chromosome inheritance. The chapter connects chromosome behavior during meiosis to Mendelian inheritance, recombination, genetic mapping, classical genetics, human variation, and disease genetics.

The central chromosome-level causal architecture is:

```text
diploid germ-line cell
→ one round of DNA replication
→ homolog pairing
→ crossing-over
→ meiosis I: homologs separate
→ meiosis II: sister chromatids separate
→ haploid gametes
→ fertilization
→ diploid zygote
```

The central inheritance architecture is:

```text
chromosomes carry genes
genes exist as alleles
meiosis segregates alleles into gametes
crossing-over reshuffles linked alleles
fertilization combines gametes at random
→ genotype of offspring
→ phenotype in a specific biological/environmental context
```

For The Seamless Cell, the key implementation rule is:

```text
MEIOSIS IS NOT "MITOSIS TWICE."

The chromosome identities, pairing relations, kinetochore logic,
cohesin-release pattern, recombination state, and segregation target
all differ between meiosis I, meiosis II, and mitosis.
```

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 19.
- `SOURCE_SCALE` — explicit numerical value/range from the chapter.
- `SOURCE_MODEL` — mechanistic/pedagogical model used by the source.
- `SOURCE_DERIVED` — direct inference/calculation from source information.
- `SOURCE_TERMINOLOGY` — terminology used by the source.
- `SOURCE_ERA_STATEMENT` — statement likely to vary with date, population, technology, cohort, or modern literature.
- `SOURCE_HYPOTHESIS` — explanation presented as incomplete/tentative.
- `PROJECT_CONSTRAINT` — implementation rule for The Seamless Cell.
- `VERIFY_QUANT` — source number retained pending external verification.
- `LATER_CHAPTER_REFINEMENT` — detail belongs elsewhere.
- `DO_NOT_INFER` — hard guardrail.

## Chapter map

```text
THE BENEFITS OF SEX

MEIOSIS AND FERTILIZATION

MENDEL AND THE LAWS OF INHERITANCE

GENETICS AS AN EXPERIMENTAL TOOL

EXPLORING HUMAN GENETICS
```

Supporting material:

```text
Figures 19–1 through 19–37
Panel 19–1: Some Essentials of Classical Genetics
How We Know: Using SNPs to Get a Handle on Human Disease
Essential Concepts
Questions 19–1 through 19–18
Official textbook answers to Questions 19–1 through 19–18
```

# 1. Asexual reproduction

Asexual reproduction can produce offspring without fusion of genomes from two parents. The source examples include simple cell division, plant offshoots, Hydra budding, and parthenogenesis in some animals.

# 2. Genetic consequence of asexual reproduction

The source presents asexual reproduction as producing offspring that are genetically identical to the parent, apart from mutation or other changes not considered in the simplified comparison.

# 3. Sexual reproduction

Sexual reproduction combines DNA from two individuals and generates offspring genetically distinct from either parent.

# 4. Sexual reproduction mixes two genomes

The defining cellular event is fusion of two haploid gametes, merging two independently derived chromosome sets into one diploid zygote.

# 5. Diploid

A diploid cell contains two sets of homologous chromosomes:
```text
one maternal set
+
one paternal set
```

# 6. Homologous chromosomes

Maternal and paternal homologs carry the same sets of genes but can carry different alleles of those genes.

# 7. Haploid

A haploid cell contains one complete chromosome set.

# 8. Gametes are haploid

The specialized reproductive cells that carry genetic information between generations contain a single chromosome set.

# 9. Egg and sperm

In the source animal model:
```text
egg → large, nonmotile gamete
sperm → small, motile gamete
```
Despite their size difference, both contribute a haploid genome.

# 10. Cytoplasm is not the basis of equal genetic inheritance

The source uses the very unequal sizes of sperm and egg to reinforce that the equal parental contribution to hereditary information resides in chromosomes/genomes rather than equal quantities of cytoplasm.

# 11. Zygote

The diploid cell produced by fusion of haploid egg and sperm.

# 12. Human chromosome number

`SOURCE_SCALE`:
```text
haploid human gamete = 23 chromosomes
```

# 13. Germ line

The lineage of cells that gives rise to gametes and therefore transmits genetic information to the next generation.

# 14. Somatic cells

Cells forming the rest of the animal body. In the source framing, somatic cells support reproduction but do not themselves contribute descendants to the next generation.

# 15. Sexual life cycle alternates ploidy

```text
diploid germ line
→ meiosis
→ haploid gametes
→ fertilization
→ diploid zygote
→ mitotic development
```

# 16. Sex generates novel chromosome combinations

Meiosis mixes maternal and paternal homologs into different gametes, and fertilization combines two independently generated gametes.

# 17. Alleles

Alternative DNA-sequence versions of a gene.

# 18. Gene pool

The source uses the term for the collective collection of alleles present in a species/population.

# 19. Individual genetic uniqueness

Different combinations of alleles inherited from maternal and paternal chromosomes contribute to genetic differences among individuals.

# 20. Two major meiotic sources of variation

```text
1. independent assortment of homologs
2. crossing-over / homologous recombination
```

# 21. Evolutionary advantage of sex is not fully resolved

`SOURCE_HYPOTHESIS`: the chapter explicitly says why sex is so broadly favored remains a difficult evolutionary question.

# 22. Changing-environment hypothesis

`SOURCE_HYPOTHESIS`: genetic reshuffling may help populations survive unpredictable environments by generating offspring with many different combinations of traits.

# 23. Parasite/pathogen challenge source idea

The source notes that continually changing pathogens provide one context in which genetically diverse offspring could be advantageous.

# 24. Yeast stress source example

The source states that some yeasts switch to sexual reproduction under harsh/starvation conditions and that strains defective in sexual reproduction show reduced adaptability in such conditions.

# 25. Sex and deleterious mutations

`SOURCE_HYPOTHESIS`: random reassortment may provide additional opportunities for harmful alleles to be separated from favorable combinations and removed by selection.

# 26. Meiosis

A specialized reductive division that generates haploid nuclei from diploid germ-line cells.

# 27. Meiosis begins after DNA replication

Like mitosis, meiosis begins with a round of chromosome duplication.

# 28. One replication, two divisions

Core rule:
```text
1 meiotic S phase
→ meiosis I
→ no additional DNA replication
→ meiosis II
```

# 29. Reduction in chromosome number

Chromosome number is halved because two nuclear divisions follow one DNA-replication round.

# 30. Why meiosis does not simply omit S phase

The source explicitly notes that a one-division/no-replication scheme might seem simpler but states that why meiosis evolved the actual one-replication/two-division architecture is unclear.

# 31. Meiotic germ-line cells begin diploid

Each carries a maternal and paternal homolog for each chromosome type.

# 32. Sister chromatids

After meiotic S phase, every homolog consists of two tightly associated sister chromatids.

# 33. Meiotic prophase / prophase I

A prolonged meiosis-specific phase during which maternal and paternal duplicated homologs locate, pair, and recombine.

# 34. Pairing

The process in which duplicated maternal and paternal homologs become closely associated along their lengths during prophase I.

# 35. Homolog recognition remains incompletely understood

`SOURCE_HYPOTHESIS`: the source says how homologs find one another is still not fully understood.

# 36. Sequence matching in homolog pairing

In many organisms, initial association depends on matching maternal/paternal DNA sequences at many sites distributed along homologs.

# 37. Bivalent

A paired unit composed of:
```text
duplicated maternal homolog
+
duplicated paternal homolog
=
4 chromatids total
```

# 38. Bivalents can persist for long periods

The source states meiotic prophase can last for years in some organisms.

# 39. Meiosis I segregates homologs

Maternal and paternal homologous chromosomes separate from one another during the first meiotic division.

# 40. Meiosis II segregates sisters

Sister chromatids separate during the second meiotic division, in a mechanism broadly similar to mitosis.

# 41. Four haploid nuclei

A single diploid nucleus entering meiosis ultimately produces four genetically nonidentical haploid nuclei in the simplified source scheme.

# 42. Mitosis versus meiosis output

```text
mitosis:
1 replication + 1 division
→ 2 genetically similar diploid nuclei

meiosis:
1 replication + 2 divisions
→ 4 genetically distinct haploid nuclei
```

# 43. Meiosis I can be much longer than mitosis/meiosis II

`SOURCE_SCALE` / `VERIFY_QUANT`: the source notes mitosis and meiosis II are usually completed within hours, while meiosis I can last days, months, or years because of prolonged homolog pairing.

# 44. Homologous recombination during meiosis

Paired homologs exchange genetic information between similar DNA sequences.

# 45. Meiotic recombination occurs between nonsister chromatids

The key exchange is between chromatids belonging to maternal and paternal homologs, not between identical sister chromatids.

# 46. Crossing-over

Physical exchange of homologous chromosome segments between nonsister chromatids.

# 47. Recombination begins with DNA break in source model

Figure 19–7 depicts recombination proteins introducing a double-strand break in one chromatid, followed by strand exchange, DNA synthesis, second-strand capture, resolution, and ligation.

# 48. Synaptonemal complex

An elaborate protein assembly that aligns paired homologs and facilitates meiotic recombination.

# 49. Axial cores

The source depicts each paired duplicated homolog as organized along an axial core associated with cohesin.

# 50. Transverse filaments

Rod-shaped components that connect the two homolog-associated axial cores in zipper-like fashion.

# 51. Synaptonemal complex scale

`SOURCE_SCALE`:
```text
~100 nm
```
is shown for the structure in Figure 19–8.

# 52. Synaptonemal complex disassembles before homolog segregation

By late prophase I it is removed, allowing homologs to separate along most of their length.

# 53. Chiasma

A visible/physical connection corresponding to a crossover between nonsister chromatids.

# 54. Chiasmata

Plural of chiasma; bivalents commonly contain more than one.

# 55. Crossovers create recombinant chromatids

After crossover resolution, individual chromatids can contain both maternal- and paternal-derived segments.

# 56. Human-oocyte crossover source estimate

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~2–3 crossovers per bivalent on average
```
in the source description of human oocytes.

# 57. Crossing-over has two functions in source

```text
1. creates new allele combinations
2. supports correct homolog segregation in meiosis I
```

# 58. Chiasmata mechanically link homologs

After the synaptonemal complex disappears, chiasmata keep homologs connected before anaphase I.

# 59. Chiasmata resist spindle pulling

Opposing spindle forces place paired homologs under tension while chiasmata prevent premature separation.

# 60. Cohesin maintains sister pairing in meiosis I

Sister chromatids stay joined along their arms and centromeres during the first meiotic division.

# 61. Sister kinetochores function together in meiosis I

The source states the two sister kinetochores operate as a single unit and attach toward the same spindle pole.

# 62. Meiosis-I attachment logic

```text
both sister kinetochores of maternal homolog → pole A
both sister kinetochores of paternal homolog → pole B
```
(or the reverse).

# 63. Anaphase I releases chromosome arms

Cohesins along chromosome arms are degraded so recombined homologs can separate.

# 64. Centromeric cohesion persists through meiosis I

Cohesins near centromeres remain, keeping sisters paired after homologs separate.

# 65. Why arm cohesion must be released

Without arm release, crossover-connected homologs would remain tethered and could not segregate.

# 66. No significant interphase between divisions

Meiosis II follows meiosis I without another S phase and without a substantial interphase in the source model.

# 67. Meiosis-II kinetochore logic

Sister kinetochores now function independently and attach to opposite spindle poles.

# 68. Centromeric cohesin is removed at anaphase II

This releases sisters to segregate into different haploid nuclei.

# 69. Meiosis II resembles mitosis mechanically

Both segregate sister chromatids through opposing kinetochore attachments.

# 70. Independent assortment of homologs

Each bivalent's orientation at metaphase I is random relative to the other bivalents.

# 71. Maternal versus paternal choice is probabilistic

For each chromosome pair, which homolog goes toward a given pole is likened by the source to a coin flip.

# 72. Independent assortment gamete count

For haploid chromosome number n:
```text
possible homolog combinations = 2^n
```
ignoring crossing-over.

# 73. Human independent assortment

`SOURCE_SCALE`:
```text
2^23 ≈ 8.4 × 10^6
```
possible chromosome combinations before accounting for crossover.

# 74. Crossover makes the true gamete space far larger

Random crossover positions create novel recombinant versions of individual chromosomes in addition to whole-chromosome assortment.

# 75. Every meiosis generates novel combinations

The source states both independent assortment and crossing-over operate in meiosis and together create enormous gametic diversity.

# 76. Nondisjunction

Failure of homologous chromosomes or sister chromatids to segregate correctly.

# 77. Aneuploid gamete

A gamete with an abnormal number of chromosomes.

# 78. Meiosis-I nondisjunction source diagram

If a homologous pair fails to separate in meiosis I:
```text
2 gametes receive both homolog copies
2 gametes receive none
```
for that chromosome in the simplified diagram.

# 79. Down syndrome source example

The source explains trisomy 21 as a possible result of nondisjunction followed by fertilization with a normal gamete.

# 80. Trisomy logic

```text
abnormal gamete with 2 copies chromosome 21
+
normal gamete with 1
→ zygote with 3
```

# 81. Aneuploid embryos often fail

The chapter states most chromosomally abnormal embryos produced by such gametes die, while some survive.

# 82. Human oocyte nondisjunction source estimate

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT` / `VERIFY_QUANT`:
```text
~10% of meioses in human oocytes
```
in the textbook framing.

# 83. Female meiotic-prophase-duration hypothesis

`SOURCE_HYPOTHESIS`: the chapter suggests the very long female meiotic prophase may provide more opportunity for segregation errors than the shorter male program.

# 84. Nondisjunction and miscarriage

`SOURCE_HYPOTHESIS`: the source identifies nondisjunction as one contributor to spontaneous early pregnancy loss.

# 85. Fertilization

Fusion process that reunites two haploid genomes to produce a diploid zygote.

# 86. Human sperm-number source example

`SOURCE_SCALE` / `VERIFY_QUANT`:
```text
~300 million sperm ejaculated
~200 reach the fertilization site in the oviduct
```
in the source.

# 87. Sperm guidance

The source states sperm are attracted toward the ovulated egg by chemical signals released by the egg and surrounding support cells.

# 88. Zona pellucida

Protective extracellular coat surrounding the mammalian egg in the source description.

# 89. Fertilization sequence

```text
sperm approaches egg
→ traverses surrounding cell layer
→ binds/tunnels through zona pellucida
→ binds egg plasma membrane
→ membranes fuse
→ sperm DNA enters egg
```

# 90. Intracytoplasmic sperm injection source note

The chapter notes sperm can be introduced artificially by direct injection into the egg cytoplasm when natural sperm–egg fusion is problematic.

# 91. Polyspermy must be prevented

Normally only one sperm fuses with the egg, preserving the two-set diploid chromosome complement.

# 92. Fertilization Ca2+ wave

The first successful sperm triggers a wave of cytosolic Ca2+ in the egg.

# 93. Zona hardening

The source states the Ca2+ wave triggers enzyme secretion that hardens the zona pellucida and helps block entry of additional sperm.

# 94. Ca2+ also promotes egg activation

The source says the fertilization-induced Ca2+ wave helps trigger development of the egg.

# 95. Pronuclei

The haploid maternal and paternal nuclei present before their chromosomes are combined into the diploid zygotic nucleus.

# 96. Pronuclear union completes the genome merger

Fertilization is not complete in the source account until the two haploid nuclear contributions come together into a single diploid nuclear state.

# 97. Mendel's genetic strategy

Gregor Mendel tracked simple, discrete traits through controlled breeding experiments in pea plants.

# 98. Why peas were useful

The source emphasizes:
- easy cultivation
- large numbers
- controlled cross-pollination
- multiple true-breeding varieties
- clear discrete traits

# 99. Seven Mendelian pea traits

The source lists:
- pea shape
- pea color
- flower color
- flower position
- pod shape
- pod color
- plant height

# 100. Discrete inheritance

For Mendel's chosen traits, offspring fell into distinct categories rather than continuous intermediates.

# 101. True-breeding

A strain that produces offspring of the same trait when self-fertilized.

# 102. F1 generation

First filial generation produced from a parental cross.

# 103. F2 generation

Generation obtained by selfing or crossing F1 hybrids.

# 104. Mendel's yellow/green pea cross

True-breeding yellow × true-breeding green:
```text
F1 = 100% yellow phenotype
```
in the source example.

# 105. Recessive phenotype reappears in F2

F1 selfing produces:
```text
~3/4 dominant phenotype
~1/4 recessive phenotype
```

# 106. Gene

Source/Panel 19–1 definition: a functional unit of inheritance corresponding to DNA that specifies a protein or functional noncoding RNA.

# 107. Genome

All of an organism's DNA sequences.

# 108. Allele definition

An alternative version of a gene.

# 109. Genotype

The specific set of alleles carried by an individual.

# 110. Phenotype

Observable or functional characteristics of an individual.

# 111. Homozygous

The two alleles at a gene are the same.

# 112. Heterozygous

The two alleles at a gene are different.

# 113. Dominant allele

An allele whose presence in a heterozygote is sufficient to influence the phenotype relative to the alternate homozygous state.

# 114. Recessive allele

An allele whose phenotypic effect is hidden in a heterozygote in the simple source model.

# 115. Codominance source definition

If a heterozygote has a phenotype different from either homozygous state, the source refers to the alleles as codominant.

# 116. Phenotype does not reveal every allele

Recessive alleles can be carried in heterozygotes without appearing in the simple visible phenotype.

# 117. Human protein-coding gene count source statement

`SOURCE_ERA_STATEMENT`:
```text
~20,000 protein-coding genes
```

# 118. Mendel's law of segregation

The two alleles of a gene separate during gamete formation so that each gamete receives one, and alleles from two parents unite at random during fertilization.

# 119. Segregation is explained by meiosis

Homologous chromosomes carrying different alleles separate into different haploid gametes.

# 120. Heterozygote gametes

For genotype Yy:
```text
~1/2 Y gametes
~1/2 y gametes
```
in the ideal Mendelian model.

# 121. Punnett square

A bookkeeping device for enumerating possible allele combinations produced by gamete fusion.

# 122. F2 genotype proportions in monohybrid cross

```text
1/4 YY
1/2 Yy
1/4 yy
```

# 123. F2 phenotype proportions under complete dominance

```text
3/4 dominant phenotype
1/4 recessive phenotype
```

# 124. Type II albinism source example

The chapter uses a recessively inherited form of albinism as a single-gene Mendelian example.

# 125. Albinism source genotype notation

```text
affected = aa
unaffected may be AA or Aa
```
in the simplified example.

# 126. Heterozygote × heterozygote disease risk

For a fully penetrant recessive trait:
```text
Aa × Aa
→ 25% aa
```
per conception in the ideal Mendelian model.

# 127. Pedigree

Diagram showing phenotype and family relationships across generations.

# 128. Consanguineous mating

Mating between genetically related individuals.

# 129. Consanguinity and recessive disease

The source explains that related individuals are more likely to carry the same rare recessive allele inherited from a shared ancestor, increasing homozygosity risk in offspring.

# 130. Monohybrid cross

A cross tracking one trait.

# 131. Dihybrid cross

A cross tracking two traits simultaneously.

# 132. Mendel's second law

`law of independent assortment`:
alleles of different genes can segregate independently during gamete formation.

# 133. Ideal dihybrid source ratio

For two independently assorting loci with complete dominance:
```text
9 : 3 : 3 : 1
```
phenotypic ratio in F2.

# 134. Four gamete classes from YyRr

```text
YR
Yr
yR
yr
```
in roughly equal proportions when the loci assort independently.

# 135. Chromosome basis of independent assortment

Different homolog pairs orient independently at metaphase I, explaining independent assortment for genes on different chromosomes.

# 136. Genes on same chromosome need not be inherited together

Crossing-over can separate alleles at loci on the same chromosome.

# 137. Far-apart genes can appear independently assorting

The larger the interval between loci, the greater the opportunity for crossover events between them.

# 138. Close genes are genetically linked

Loci close together on one chromosome tend to be co-inherited because crossing-over between them is relatively infrequent.

# 139. Source linked human examples

The chapter cites genes associated with red–green colorblindness and hemophilia as examples of closely linked loci.

# 140. Genetic linkage

Nonrandom co-inheritance of loci because they lie on the same chromosome.

# 141. Genetic map

An inferred ordering/relative spacing of loci based on recombination frequencies.

# 142. Map unit / centimorgan

Panel 19–1 states that if two genes are reassorted in x% of gametes, the genetic map distance is x map units (centimorgans), within the pedagogical limits of this classical model.

# 143. Genetic distance is not literal nanometers

`PROJECT_CONSTRAINT`: centimorgans encode recombination frequency, not direct physical distance.

# 144. Mutation

A heritable change in DNA sequence.

# 145. Loss-of-function mutation

Mutation that reduces or eliminates normal activity of a gene or gene product.

# 146. Loss-of-function mutations are often recessive

The source says many heterozygotes retain sufficient wild-type product for near-normal function, making many loss-of-function alleles recessive.

# 147. Fifty-percent product rule is not universal

The source frames recessivity as common, not absolute; some loss-of-function alleles are dominant.

# 148. Dominant loss-of-function source example

The chapter uses a misfolded protein that aggregates and damages the cell as an example of a loss-of-function mutation that can nevertheless behave dominantly.

# 149. Gain-of-function mutation

Mutation that increases activity or causes activity/expression in inappropriate circumstances.

# 150. Gain-of-function mutations are often dominant

One altered copy can be sufficient to add an inappropriate activity.

# 151. Ras source example

`SOURCE_ERA_STATEMENT`: the chapter cites constitutively active Ras as a dominant gain-of-function mutation and repeats the source-era claim that roughly 30% of human cancers contain such Ras alterations.

# 152. Wrinkled-pea molecular source example

The chapter explains Mendel's wrinkled-pea allele as a loss-of-function variant affecting an enzyme involved in converting sugars to branched starch.

# 153. Deleterious recessive alleles can persist

Selection acts inefficiently on alleles hidden in healthy heterozygotes.

# 154. Mutation–selection balance source model

The source describes an equilibrium in which new deleterious recessive mutations arise while homozygous deleterious combinations are removed.

# 155. Hereditary-deafness source frequency

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
affected ≈ 1 in 4000 births
carrier ≈ 1 in 30
```
for one common hereditary-deafness allele in the source.

# 156. Classical genetic approach

Start with a phenotype, identify mutants, analyze inheritance, then work backward to the responsible gene.

# 157. Model organisms

Source examples include:
- bacteria
- yeast
- nematode worms
- zebrafish
- fruit flies

# 158. Mutagenesis

Artificial induction of DNA mutations to increase the frequency of mutant phenotypes.

# 159. Mutagen

An agent that damages DNA and can create mutations.

# 160. Genetic screen

Systematic search through mutant organisms/cells for a phenotype of interest.

# 161. C. elegans feeding-behavior source example

The chapter uses mutagenized worms to show that behavioral phenotypes can be used to discover genes.

# 162. Targeted perturbation is a modern extension

The source notes CRISPR can selectively disable genes and RNA interference can silence genes.

# 163. Genome-wide RNAi screen

Figure 19–30 shows a 96-well C. elegans screening strategy in which different dsRNAs silence different genes.

# 164. Conditional mutant

A mutant phenotype expressed only under particular conditions.

# 165. Temperature-sensitive mutant

Protein functions at a permissive temperature but fails at a nonpermissive temperature.

# 166. Temperature-sensitive replication screen source example

The chapter describes bacterial mutants that replicate DNA at:
```text
30°C
```
but stop after shifting to:
```text
42°C
```
in historical screens.

# 167. Replica plating source example

Figure 19–31 uses paired plates at different temperatures to identify conditional growth mutants.

# 168. Conditional gene deletion

The source notes engineered systems can remove a gene at a chosen developmental time or in a selected tissue, allowing study of otherwise lethal essential genes.

# 169. Complementation test

A genetic test used to ask whether two recessive mutations producing the same phenotype affect the same gene.

# 170. Complementation — different genes

```text
mutant gene A / normal gene B
×
normal gene A / mutant gene B
→ offspring gets a functional copy of both genes
→ wild-type phenotype
```

# 171. Noncomplementation — same gene

If both parents carry recessive defects in the same gene, offspring receive no functional copy of that gene and retain the mutant phenotype.

# 172. Complementation assumes recessive mutations in simple case

The basic textbook test is framed for recessive mutations; dominant or complex interactions require different reasoning.

# 173. Complementation groups define genes genetically

Mutations that fail to complement one another can be grouped as alleles of the same gene in the simple classical framework.

# 174. Humans cannot be mutagenized experimentally

The chapter emphasizes ethical and practical reasons classical forward genetic mutagenesis is not performed in people.

# 175. Natural human variation provides experiments of nature

The large human population contains many spontaneous variants that can be analyzed through families and populations.

# 176. Whole-genome sequencing changes human genetics

The source highlights modern genome sequencing as enabling direct comparison of large numbers of human genomes.

# 177. Human pairwise sequence difference source estimate

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
~1 nucleotide pair per 1000
```
between two randomly selected humans.

# 178. Polymorphism

A relatively common DNA sequence variant in a population.

# 179. SNP

Single-nucleotide polymorphism: a common single-base difference among individuals.

# 180. Indel

Small insertion/deletion variant.

# 181. Copy-number variant

Larger DNA segment present in differing copy numbers.

# 182. Haplotype block

A combination of nearby polymorphisms/DNA markers inherited together as a unit.

# 183. Haplotype blocks arise because recombination is finite

Segments inherited from ancestors can remain intact for many generations when no crossover occurs within them.

# 184. Ancestral-population source model

`SOURCE_ERA_STATEMENT` / `SOURCE_HYPOTHESIS`: the chapter describes modern humans as expanding from an African population of perhaps:
```text
~10,000 individuals
~200,000 years ago
```
and states only about:
```text
~2000 generations
```
separate present populations from that source population in the simplified account.

# 185. Old variants tend to sit in shorter haplotype blocks

More generations provide more opportunities for recombination to break linkage around an ancient variant.

# 186. Recent favorable variants can retain large haplotype blocks

A selected variant that rose recently can remain embedded in a long inherited chromosome segment.

# 187. Sickle-cell haplotype source example

`SOURCE_ERA_STATEMENT`: the chapter states the sickle-cell allele sits in an unusually large haplotype block and suggests an origin roughly:
```text
~2000 years ago
```
in the African gene pool.

# 188. Disease phenotype can be genetic and environmental

The source emphasizes that disease often reflects interaction between genotype and environment.

# 189. Monogenic disorder

Disease caused primarily by mutation in one gene and often showing a Mendelian inheritance pattern.

# 190. Number of monogenic diseases source statement

`SOURCE_ERA_STATEMENT`:
```text
~3000 human diseases
```
are described as single-gene disorders in the textbook.

# 191. Monogenic diseases are often rare

The source says many severe single-gene disorders occur in only a small fraction of the population.

# 192. Tay–Sachs source example

The chapter presents Tay–Sachs as a recessive loss-of-function disease caused by mutation in a hexosaminidase gene.

# 193. Founder effect

A small group separated from a larger population can by chance carry an allele at an unusually high starting frequency, causing the expanded descendant population to show a higher frequency.

# 194. Founder effect does not require positive selection

The source explicitly notes the allele can be neutral or mildly deleterious.

# 195. Tay–Sachs founder-effect source example

The chapter uses increased prevalence in Ashkenazi Jewish populations as an example of founder effects.

# 196. Cystic fibrosis source example

The chapter describes mutations affecting a specialized chloride channel; different mutations can disrupt gating or folding/trafficking.

# 197. Mutation-specific therapy source idea

The source notes that understanding the molecular effect of a mutation can guide therapies that restore trafficking/function of certain mutant channel proteins.

# 198. CCR5 loss-of-function source example

Individuals homozygous for mutations that eliminate CCR5 can be resistant to HIV infection because HIV uses this receptor to enter immune cells.

# 199. Not every loss-of-function allele is harmful

CCR5 is used to demonstrate that fitness effect depends on biological/environmental context.

# 200. Complex multigenic disease

Common disorders can reflect many genetic risk factors plus environmental influences.

# 201. Risk allele is not deterministic

A susceptibility allele may increase probability without being sufficient to cause disease.

# 202. Late-onset risk alleles can remain common

The source notes alleles contributing to late-onset disease may have weak effects on reproductive success and therefore may not be strongly removed by selection.

# 203. Genome-wide association study

Comparison of common genetic markers across many affected and unaffected individuals to identify variants associated statistically with disease risk.

# 204. GWAS marker logic

A disease-associated SNP may:
```text
be causal
OR
be linked to a nearby causal allele
```

# 205. GWAS does not prove mechanism by itself

Association points to a genomic region or candidate biology; follow-up functional work is needed.

# 206. GWAS source disease examples

The chapter mentions:
- diabetes
- coronary artery disease
- rheumatoid arthritis
- depression
among conditions investigated with this strategy.

# 207. Most GWAS effects are modest in source discussion

`SOURCE_ERA_STATEMENT`: the chapter says many common polymorphisms change risk only slightly.

# 208. Common-variant threshold source statement

`SOURCE_ERA_STATEMENT`: the chapter discusses variants present in:
```text
≥1% of population
```
as common enough for the approaches described.

# 209. Common variants and genome differences source statement

`SOURCE_ERA_STATEMENT`: the text states common variants account for about:
```text
~90%
```
of differences between individuals' genomes in the framing used here.

# 210. Common-disease risk source effect size

`SOURCE_ERA_STATEMENT`: most common variants identified in the source discussion confer:
```text
<2-fold
```
risk increases.

# 211. Rare-variant sequencing

The chapter argues that direct sequencing of many genomes is needed to detect rarer, more recent variants that GWAS based on common markers can miss.

# 212. How We Know — SNP linkage maps

Known SNP positions can function as physical markers for locating inherited disease alleles through co-inheritance.

# 213. Linkage-analysis principle

Markers physically close to a causal mutation tend to remain linked because crossover between them is infrequent.

# 214. Figure 19–36 family logic

If affected recessive individuals repeatedly share homozygosity for a nearby SNP variant, that SNP can mark the chromosomal neighborhood containing the disease mutation.

# 215. GWAS versus family linkage

The chapter distinguishes:
```text
family linkage → powerful for strong, simple inherited causes
GWAS → useful for common variants with modest risk effects
```

# 216. AMD GWAS source design

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
>100,000 SNPs
96 AMD cases
50 controls
146 people total
```
in the historical study described.

# 217. Cfh locus

The AMD association study pointed to the complement factor H (`Cfh`) gene.

# 218. Lead SNP was intronic

The first strong association marker was in an intron and was not assumed to be the causal variant itself.

# 219. Resequencing identified protein-altering variants

Follow-up sequencing found variants changing the CFH amino-acid sequence.

# 220. Tyrosine-to-histidine CFH source variant

The source describes one amino-acid substitution associated strongly with AMD.

# 221. AMD source risk estimate

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`:
```text
two copies of risky CFH allele
→ ~5–7× higher AMD risk
```
relative to the alternate allele in the described study.

# 222. Association plus biology strengthens inference

Independent association plus knowledge that complement dysregulation influences inflammation supported the relevance of Cfh to AMD biology.

# 223. Healthy humans can carry many apparent loss-of-function variants

`SOURCE_ERA_STATEMENT`: the source cites a study estimating approximately:
```text
~100 loss-of-function mutations in protein-coding genes per person
```
including some affecting both copies.

# 224. Genotype-to-phenotype prediction remains incomplete

The chapter concludes that extensive human sequence variation can coexist with apparently normal development and that many variant effects remain poorly understood.

# 225. Ploidy schema

```yaml
genome_state:
  ploidy: haploid | diploid
  chromosome_sets:
  homolog_pairs:
  replicated:
  DNA_content_state:
```

# 226. Meiotic chromosome schema

```yaml
meiotic_chromosome:
  homolog_identity: maternal | paternal
  sister_chromatids:
  paired_homolog:
  bivalent_id:
  crossover_sites:
  chiasmata:
  arm_cohesin:
  centromeric_cohesin:
  kinetochore_mode:
```

# 227. Bivalent schema

```yaml
bivalent:
  maternal_homolog:
  paternal_homolog:
  chromatids_total: 4
  synaptonemal_complex:
  chiasmata:
  metaphase_I_orientation:
```

# 228. Crossover schema

```yaml
crossover:
  nonsister_chromatid_A:
  nonsister_chromatid_B:
  genomic_interval:
  break_state:
  strand_exchange_state:
  resolution_state:
  recombinant_products:
  chiasma_present:
```

# 229. Meiosis state schema

```yaml
meiosis:
  stage:
    - premeiotic_S
    - prophase_I
    - metaphase_I
    - anaphase_I
    - meiosis_I_complete
    - metaphase_II
    - anaphase_II
    - meiosis_complete
  homolog_pairing_state:
  recombination_state:
  spindle_state:
  ploidy_state:
```

# 230. Gamete schema

```yaml
gamete:
  chromosome_set:
  recombinant_haplotypes:
  aneuploidy_state:
  parental_origin_segments:
```

# 231. Fertilization schema

```yaml
fertilization:
  sperm_bound:
  zona_state:
  membrane_fusion:
  calcium_wave:
  polyspermy_block:
  paternal_pronucleus:
  maternal_pronucleus:
  zygote_ploidy:
```

# 232. Gene/allele schema

```yaml
locus:
  gene_id:
  chromosome:
  alleles:
  maternal_allele:
  paternal_allele:
  genotype_state:
  phenotype_mapping:
```

# 233. Genetic linkage schema

```yaml
linkage:
  locus_A:
  locus_B:
  same_chromosome:
  recombination_fraction:
  map_distance_cM:
  linked_haplotype:
```

# 234. Mutation schema

```yaml
mutation:
  locus:
  sequence_change:
  functional_class:
    - loss_of_function
    - gain_of_function
    - dominant_negative
  dominance_relation:
  phenotype_effect:
```

# 235. Genetic-screen schema

```yaml
genetic_screen:
  mutagenesis_type:
  population_size:
  phenotype_filter:
  mutants_found:
  mapping_strategy:
  candidate_genes:
```

# 236. Human-association schema

```yaml
association_study:
  cases:
  controls:
  markers:
  associated_region:
  effect_size:
  statistical_threshold:
  candidate_gene:
  causal_variant_confirmed: false
```

# 237. Project rule — homolog and sister identities are persistent

A maternal homolog, paternal homolog, and each sister chromatid must retain distinct entity IDs through replication, recombination, and segregation.

# 238. Project rule — bivalent is a relationship, not a new chromosome

A bivalent is a paired four-chromatid assembly formed from two duplicated homologs.

# 239. Project rule — meiosis I segregates homologs, not sisters

The first division must preserve sister cohesion at centromeres while separating maternal and paternal homologs.

# 240. Project rule — meiosis II segregates sisters

Only the second meiotic division should switch sister kinetochores into opposite-pole behavior and remove remaining centromeric cohesion.

# 241. Project rule — recombination changes chromosome ancestry

After crossing-over, a chromatid is not globally 'maternal' or 'paternal'; it contains segments with different parental origins.

# 242. Project rule — crossover is not visual ribbon swapping

The animation must represent homologous DNA break/exchange/resolution rather than simply exchanging pre-cut colored blocks without mechanism.

# 243. Project rule — chiasma is the physical consequence of crossover linkage

Do not treat chiasmata as independent decorative X-shaped connectors.

# 244. Project rule — synaptonemal complex is temporary

It assembles during homolog pairing and is removed before homologs segregate.

# 245. Project rule — independent assortment is stochastic orientation

The randomness arises from bivalent orientation/capture at metaphase I, not from random chromosome teleportation.

# 246. Project rule — meiosis errors must preserve causal origin

Aneuploidy should be traceable to a specific failed segregation/attachment/cohesion event.

# 247. Project rule — fertilization is more than genome proximity

The state transition includes sperm–egg membrane fusion, Ca2+ signaling, polyspermy prevention, pronuclear handling, and restoration of diploidy.

# 248. Project rule — Mendelian ratios are probabilistic expectations

A 3:1 or 9:3:3:1 ratio is an expectation over many offspring, not a deterministic sequence for every four or sixteen offspring.

# 249. Project rule — dominance is relational

An allele is dominant or recessive relative to another allele and a phenotype; do not store 'dominant' as an intrinsic universal property detached from context.

# 250. Project rule — genotype is not phenotype

Phenotype is an outcome of genotype plus molecular/cellular context and, for many traits, environmental influence.

# 251. Project rule — centimorgan is not physical distance

Genetic map distance should not be rendered as a literal molecular length.

# 252. Project rule — association is not causation

GWAS/SNP markers can identify linked regions; a marker must not be declared causal unless the source/verification layer establishes mechanism.

# 253. Project rule — population-genetic values remain contextual

Human population, disease-frequency, SNP, and historical estimates in this chapter belong in provenance-aware data and must not be treated as universal constants.

# 254. Question 19–1 — why somatic cells do not use meiosis I

Official answer: after meiosis I each daughter nucleus has only one homolog of each chromosome type (although each chromosome still has two sister copies). Somatic cells require both maternal and paternal homologs to preserve the diploid genome and produce genetically equivalent body cells. Gametes benefit from reassortment; somatic lineages generally do not.

# 255. Question 19–2 — how much of 2^23 gamete space is sampled

Official answer:
- typical female produces fewer than 1000 mature eggs in a lifetime, sampling far below 0.1% of the 8.4 million whole-chromosome combinations
- typical male produces billions of sperm and could in principle sample every such combination many times

Crossing-over makes the real gamete space much larger than 2^23.

# 256. Question 19–3 — one forced crossover versus real meiosis

Official answer: if exactly one crossover always occurred on each chromosome, genes at opposite ends would be separated in a highly constrained way. In real meiosis, multiple crossover events mean widely separated loci can behave approximately as though independently assorting, producing the four expected inheritance classes in roughly equal proportions.

# 257. Question 19–4 — hybrid vigor

Official answer: isolated inbred populations become homozygous for different deleterious recessive alleles. Crossing individuals from the two populations restores functional alleles at many loci in heterozygous offspring, masking those recessive defects.

# 258. Question 19–5 — age-dependent SNP-frequency decline

Official answer favors:
```text
C
```
The SNP itself, or a linked neighboring allele, plausibly shortens lifespan. DNA instability large enough to explain the pattern is implausible, and a simple generational difference does not fit well.

# 259. Question 19–6 — can recessive lethal alleles disappear

Official answer: selection alone cannot efficiently remove alleles hidden in healthy heterozygotes. Chance can sometimes eliminate an allele from a lineage/population, but new mutations continually recreate deleterious recessive alleles; in a large population a balance can emerge.

# 260. Question 19–7A

`TRUE`: animal egg and sperm genomes are haploid.

# 261. Question 19–7B

`TRUE`: normal meiosis distributes one copy of each chromosome type to each gamete.

# 262. Question 19–7C

`FALSE`: mutations arising during meiosis can be inherited if they occur in a viable gamete.

# 263. Question 19–8 — nondisjunction in mitosis versus meiosis

Official answer: failed/incorrect spindle attachment can send both copies of a chromosome to one daughter.
- in mitosis, this produces chromosome-copy imbalance in that daughter lineage
- in meiosis, the abnormal gamete can transmit the imbalance to a zygote, and the resulting chromosome-number abnormality can then be present throughout the organism

# 264. Question 19–9 — why sisters stay paired in meiosis I

Official answer: keeping sister chromatids together allows the first division to distribute homolog groups cleanly, then provides an organized pair for the second division to separate. The source's analogy is to fasten matching socks together before washing so pairs are not lost during sorting.

# 265. Question 19–10A — gene versus allele

Official answer:
```text
gene = DNA unit specifying protein or functional RNA
allele = alternative form of that gene
```

# 266. Question 19–10B — homozygous versus heterozygous

```text
homozygous = two same alleles
heterozygous = two different alleles
```

# 267. Question 19–10C — genotype versus phenotype

```text
genotype = allele composition
phenotype = observable/functional characteristics
```

# 268. Question 19–10D — dominant versus recessive

A dominant allele affects the heterozygous phenotype relative to the alternate homozygote; a recessive allele does not in the simple Mendelian definition. The official answer also notes codominance when the heterozygote differs from both homozygotes.

# 269. Question 19–11A — true-breeding wrinkled peas

Because the phenotype is recessive loss-of-function and true-breeding, each plant must be homozygous for a mutant allele at the gene responsible for its phenotype.

# 270. Question 19–11B — same gene or different genes

Perform pairwise complementation tests:
- normal/round F1 → parental mutations are in different genes
- mutant/wrinkled F1 → mutations fail to complement and are in the same gene in the simple test

# 271. Question 19–12A — deafness pedigree dominance

Official answer: the pedigree most plausibly shows a dominant mutation because roughly half the offspring of affected individuals are affected across several matings to unaffected partners.

# 272. Question 19–12B — sex linkage

Official answer: it is unlikely to be X- or Y-linked because both male and female descendants inherit the phenotype in a pattern inconsistent with transmission exclusively through the grandfather's X or Y chromosome.

# 273. Question 19–12C — haplotype around causal gene

The official answer uses chromosome 12 as an example. Across two meioses, with roughly 2–3 crossovers per chromosome per meiosis, the inherited chromosome segment is expected to be divided into roughly six pieces. The affected grandchildren should share an unusually long SNP haplotype block around the causal gene, about one-sixth of the chromosome in this simplified estimate.

# 274. Question 19–13 — most likely genotypes in deafness pedigree

Official answer:
```text
individual 2: -/- affected
individual 3: likely +/- carrier
individuals 1 and 4: could be +/- or +/+,
but most likely +/+ because the mutant allele is rare
```

# 275. Question 19–14 — first-born inheritance pattern

Official answer:
- birth order does not alter Mendelian inheritance probability
- the observed three-generation pattern has probability:
```text
(1/4)^3?  source states 1/4 per generation → 1/64 total
```
- more families/generations would test whether the pattern is chance
- a nonrandom observed birth-order pattern could arise through post-conception selection decisions rather than altered Mendelian segregation

# 276. Question 19–15 — lethal recessive population calculation

Official answer:
```text
carrier frequency = 1/100
carrier × carrier pair = 1/10,000
affected child from carrier pair = 1/4

overall affected probability = 1/40,000

1,000,000 births/year
→ 25 affected babies/year
```

# 277. Question 19–16 — dominant-negative mutation

Official answer: a dominant-negative allele produces a mutant product that interferes with the normal product, creating a loss-of-function phenotype despite one wild-type gene copy. A gain-of-function allele instead adds/increases activity or makes it active in an inappropriate context.

# 278. Question 19–17A — why ruby × white can restore red eyes

The two recessive mutations affect different genes. Each parent supplies a functional wild-type copy of the gene defective in the other parent, restoring both required functions in the offspring.

# 279. Question 19–17B — Drosophila complementation groups

Official answer:
```text
separate genes:
garnet
ruby
vermilion
carnation

same White gene:
white
cherry
coral
apricot
buff
```
Thus the nine eye-color mutant phenotypes define five genes in total.

# 280. Question 19–17C — different alleles, different colors

Different mutations in one gene can reduce its product's function by different amounts or mechanisms. Null alleles can converge on the same phenotype, whereas partial-function alleles can produce distinct phenotypes.

# 281. Question 19–18 — SNP linkage mapping

Official answer: SNPs are common single-nucleotide variants with known genomic positions. By tracking which SNP variants are co-inherited with a mutant phenotype, investigators can narrow the causative mutation to a linked chromosome interval and then inspect candidate genes in that region.

# 282. Source quantitative register

| Quantity | Chapter 19 source value/context |
|---|---:|
| human haploid chromosome number | 23 |
| human independent-assortment combinations | 2^23 ≈ 8.4×10^6 |
| human-oocyte crossovers per bivalent | ~2–3 |
| starting duplicated human meiotic chromosomes/chromatids source wording | 92 chromosome copies/chromatids to track |
| human-oocyte nondisjunction | ~10% of meioses source-era |
| sperm ejaculated | ~300 million |
| sperm reaching fertilization site | ~200 |
| random human sequence difference | ~1/1000 bp |
| hypothetical ancestral population | ~10,000 |
| time since ancestral African population source framing | ~200,000 y |
| generations since that source population | ~2000 |
| sickle-cell allele age source estimate | ~2000 y |
| monogenic human diseases | ~3000 source-era |
| hereditary deafness affected frequency | ~1/4000 births |
| hereditary deafness carrier frequency | ~1/30 |
| common variant threshold in discussion | ≥1% |
| common variants accounting for genome differences | ~90% source-era |
| common-risk effects | often <2× source-era |
| AMD GWAS markers | >100,000 SNPs |
| AMD GWAS participants | 96 cases + 50 controls |
| CFH risk estimate | ~5–7× for two risky alleles |
| loss-of-function variants/person | ~100 source-era |
| Q19–2 female mature eggs/lifetime | <1000 |
| Q19–15 affected recessive births | 25 per 1,000,000 births |
| temperature-sensitive screen | 30°C → 42°C |
| synaptonemal-complex diagram scale | 100 nm |

# 283. Quantitative verification queue

Before runtime or educational promotion, externally verify:
- human oocyte crossover distribution by chromosome/age
- nondisjunction rates by maternal age and chromosome
- sperm counts and fertilization-site numbers
- modern definitions/frequencies of SNPs and common variants
- human demographic timing/population-size estimates
- disease prevalence/carrier frequencies
- number of known monogenic disorders
- current GWAS effect-size distributions
- current CFH/AMD risk estimates
- per-person loss-of-function variant burden

# 284. Do-not-overinterpret register

Do not infer:

```text
sexual reproduction always produces "better" offspring
FALSE

maternal and paternal homologs are identical
FALSE

homolog = sister chromatid
FALSE

meiosis = mitosis twice
FALSE

DNA replicates between meiosis I and II
FALSE

meiosis I separates sister chromatids
FALSE

meiosis II separates homologs
FALSE

bivalent = one chromosome
FALSE

crossing-over occurs between sister chromatids as the normal meiotic event
FALSE

synaptonemal complex remains through anaphase I
FALSE

chiasma = random decorative cross
FALSE

crossing-over only creates diversity
FALSE; it also supports homolog segregation

sister kinetochores point to opposite poles in meiosis I
FALSE in source model

centromeric cohesin is removed at anaphase I
FALSE; it persists until meiosis II

gamete chromosome choice is deterministic
FALSE

2^23 is the full number of possible human gametes
FALSE; it ignores recombination

nondisjunction always produces viable offspring
FALSE

fertilization ends immediately when membranes fuse
FALSE in source account

Mendelian ratios are guaranteed in a small family
FALSE

dominant = common
FALSE

recessive = harmful
FALSE

loss-of-function = always recessive
FALSE

gain-of-function = always dominant
NOT UNIVERSAL; source says usually

independent assortment means all loci are on different chromosomes
FALSE

genes on the same chromosome are always inherited together
FALSE

centimorgan = physical DNA length
FALSE

complementation works unmodified for all mutations
FALSE

SNP association proves causation
FALSE

GWAS identifies only coding mutations
FALSE

human disease is purely genetic
FALSE
```

# 285. Cross-chapter dependencies

```text
Chapter 5:
chromosome architecture, homologs, centromeres, cohesin/condensin

Chapter 6:
homologous recombination, DNA breaks, repair

Chapter 8:
gene regulation and RNA interference

Chapter 9:
mutation, evolution, population variation

Chapter 10:
sequencing, CRISPR, genome analysis

Chapter 12:
Ca2+ gradients/signaling background

Chapter 16:
Ras, signaling, disease susceptibility

Chapter 18:
mitosis, spindle attachment, cohesin, cell cycle

Chapter 20:
tissue organization, gap junctions, cancer
```

# 286. Chapter 19 core causal map

```text
DIPLOID GERM-LINE CELL
→ S phase
→ duplicated maternal + paternal homologs

PROPHASE I
→ homolog recognition
→ pairing
→ bivalent
→ synaptonemal complex
→ homologous recombination
→ crossing-over
→ chiasmata

METAPHASE I
→ random bivalent orientation
→ sister kinetochores act together
→ homologs face opposite poles

ANAPHASE I
→ arm cohesin removed
→ homologs separate
→ centromeric cohesion retained

NO NEW DNA REPLICATION

MEIOSIS II
→ sister kinetochores act independently
→ centromeric cohesin removed
→ sisters separate

→ 4 haploid nuclei / gametes

FERTILIZATION
→ sperm–egg membrane fusion
→ Ca2+ wave
→ polyspermy block
→ pronuclei combine
→ diploid zygote

INHERITANCE
gene → allele
meiosis → allele segregation
crossing-over → linked-allele reshuffling
fertilization → random allele combination
→ genotype
→ phenotype

GENETICS
mutagenesis / perturbation
→ phenotype
→ mapping / complementation
→ gene identification

HUMAN GENETICS
polymorphisms + pedigrees + linkage + GWAS + sequencing
→ associated interval
→ candidate variant
→ functional testing
```

# 287. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 19: “Sexual Reproduction and Genetics.”**

Printed pages:
```text
677–716
```

PDF pages reviewed:
```text
712–751
```

Official answer section reviewed:
```text
PDF pages 848–851
```

Reviewed:
- all five major chapter sections
- Figures 19–1 through 19–37
- Panel 19–1
- How We Know: *Using SNPs to Get a Handle on Human Disease*
- Essential Concepts
- Questions 19–1 through 19–18
- official textbook answers for Questions 19–1 through 19–18

# 288. Approval checklist

Before changing `SOURCE_DERIVED_DRAFT` to `APPROVED`, verify:

- sexual vs asexual reproduction
- diploid/haploid definitions
- homolog definition
- germ line vs soma
- allele/genetic-diversity logic
- one replication + two meiotic divisions
- prophase-I pairing
- bivalent
- homolog recognition uncertainty
- homologous recombination
- crossing-over
- synaptonemal complex
- chiasmata
- human crossover source values
- homolog segregation in meiosis I
- sister-kinetochore co-orientation in meiosis I
- arm versus centromeric cohesin release
- meiosis-II sister segregation
- independent assortment / 2^n
- human 2^23 value
- nondisjunction / aneuploidy
- Down syndrome source example
- oocyte nondisjunction source statement
- fertilization
- sperm-number source values
- zona pellucida / polyspermy block
- fertilization Ca2+ wave
- pronuclei
- all Mendelian terms
- seven pea traits
- F1/F2 logic
- law of segregation
- albinism example
- pedigrees / consanguinity
- law of independent assortment
- 9:3:3:1 ratio
- linkage / genetic mapping
- cM definition
- loss-of-function
- gain-of-function
- harmful recessive reservoir
- classical genetic approach
- mutagenesis / screens
- RNAi / CRISPR source discussion
- conditional mutants
- complementation tests
- human polymorphisms
- SNP / indel / CNV
- haplotype blocks
- founder effects
- monogenic vs multigenic disease
- Tay–Sachs / cystic fibrosis / CCR5 examples
- GWAS
- How We Know AMD/CFH study
- all Questions 19–1 through 19–18
- official answer consistency
- all schemas
- all project constraints
- all DO_NOT_INFER rules
- quantitative register
- source trace

# END OF CHAPTER 19 CANON

Recommended repository destination:

```text
science/chapters/19_sexual_reproduction_genetics.md
```

Recommended commit message:

```text
science: add Chapter 19 sexual reproduction genetics canon
```

Do not begin Chapter 20 merely because this file exists.

Chapter 20 will move from the single cell and inheritance machinery into multicellular organization: extracellular matrix, plant cell walls, collagen and proteoglycans, integrins, cell junctions, epithelial organization, stem cells, tissue renewal, and cancer.
