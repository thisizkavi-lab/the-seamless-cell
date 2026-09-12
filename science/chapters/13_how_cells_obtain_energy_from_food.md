---
title: "The Seamless Cell — Science Canon — Chapter 13"
subtitle: "How Cells Obtain Energy from Food"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 13, printed pages 445–472 (PDF approximately pages 480–507)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-13"
---

# The Seamless Cell — Chapter 13 Science Canon

## Purpose

This is an implementation-facing scientific canon, not ordinary study notes.

Chapter 13 establishes the chemical-energy backbone of the cell:

```text
food molecules
→ controlled oxidation
→ activated carriers
→ ATP / NADH / FADH2 / acetyl CoA
→ electron transport
→ proton-gradient energy
→ large-scale ATP production
```

The project must track carbon flow, electron flow, phosphate transfer, activated-carrier state, reaction compartment, and regulation as separate but coupled layers.

## Evidence/status conventions

- `SOURCE_FACT` — directly supported by Chapter 13.
- `SOURCE_SCALE` — explicit quantitative value from the source.
- `SOURCE_MODEL` — model or schematic used by the source.
- `SOURCE_DERIVED` — calculation/inference from source facts.
- `SOURCE_TERMINOLOGY` — source wording retained.
- `SOURCE_ERA_STATEMENT` — source statement requiring modern verification before universal use.
- `SOURCE_HYPOTHESIS` — source interpretation presented as uncertain.
- `PROJECT_CONSTRAINT` — Seamless Cell architecture/visualization rule.
- `VERIFY_QUANT` — source number not yet promoted to runtime constant.
- `LATER_CHAPTER_REFINEMENT` — deeper mechanism belongs later.
- `DO_NOT_INFER` — explicit prohibition against overgeneralization.

## Chapter map

```text
THE BREAKDOWN AND UTILIZATION OF SUGARS AND FATS
- three stages of food breakdown
- glycolysis
- ATP and NADH production
- fermentation
- coupled oxidation and substrate-level phosphorylation
- pyruvate → acetyl CoA
- fatty-acid oxidation
- citric acid cycle
- biosynthetic branch points
- oxidative phosphorylation overview

REGULATION OF METABOLISM
- pathway organization
- feedback regulation
- gluconeogenesis
- glycogen storage
- fat storage
- plant reserves
```

Supporting material:
Figures 13–1 through 13–25, Table 13–1, Panel 13–1, Panel 13–2, How We Know: *Unraveling the Citric Acid Cycle*, Essential Concepts, Questions 13–1 through 13–16.

# 1. Cells require continuous energy input

Cells spend energy on growth, division, movement, biosynthesis, transport, repair, and maintenance. Energy supply therefore has to be continuously replenished.

# 2. Food molecules contain chemical free energy

The chapter treats food-derived organic molecules—especially sugars—as reduced carbon compounds whose controlled oxidation can release usable free energy.

# 3. Plants and animals obtain sugars differently

Plants synthesize sugars from CO2 by photosynthesis. Animals obtain sugars and other organic molecules by eating plants or other organisms. The downstream logic of sugar oxidation is fundamentally similar.

# 4. Cell respiration

`cell respiration` = controlled oxidative breakdown of food molecules in which released free energy is captured in useful forms.

# 5. Overall glucose oxidation

Source-level overall reaction:

```text
glucose + O2
→ CO2 + H2O + released free energy
```

# 6. Activated carriers

Major Chapter 13 carriers include ATP, NADH, FADH2, GTP, and acetyl CoA. They are chemical entities that carry energy, electrons, phosphoryl groups, or activated carbon groups between reactions.

# 7. Direct burning versus cellular oxidation

Direct burning releases energy in one large burst, largely as heat. Cells instead use many enzyme-catalyzed steps, allowing portions of the same total free-energy drop to be captured in activated carriers.

# 8. Complete oxidation free-energy source value

`SOURCE_SCALE` / `VERIFY_QUANT`:

```text
~2880 kJ/mol glucose
```

for complete oxidation to CO2 and H2O in Figure 13–1.

# 9. Enzymes do not create energy

`PROJECT_CONSTRAINT`: enzymes lower activation-energy barriers and control reaction paths/rates; they do not change the overall thermodynamic free-energy difference of the full reaction.

# 10. Coupled reactions capture energy

Energetically favorable oxidation reactions can drive unfavorable formation of activated carriers. Energy flow must be represented as coupling, not as vague “energy release.”

# 11. Two ATP-production modes

The source distinguishes:

```text
substrate-level phosphorylation
oxidative phosphorylation
```

# 12. Substrate-level phosphorylation

Direct transfer of a high-transfer-potential phosphate group from a metabolic intermediate to ADP to form ATP.

# 13. Oxidative phosphorylation

ATP synthesis driven indirectly by electron-transfer energy through a membrane-based system. In eukaryotes it occurs on the inner mitochondrial membrane; in aerobic prokaryotes, on the plasma membrane. Detailed mechanism is deferred to Chapter 14.

# 14. Three stages of catabolism

```text
Stage 1:
large food molecules → small subunits

Stage 2:
small subunits → acetyl CoA
+ limited ATP/NADH

Stage 3:
acetyl groups → CO2
+ large activated-carrier output
→ oxidative phosphorylation
```

# 15. Catabolism

`catabolism` = enzyme-catalyzed breakdown of complex organic molecules into simpler products, often with capture of released free energy.

# 16. Stage 1 products

```text
proteins → amino acids
polysaccharides → simple sugars
fats → fatty acids + glycerol
nucleic acids → small reusable components
```

# 17. Stage 1 location

In animals, digestion occurs largely outside cells in the digestive tract, but lysosomes can also digest large molecules intracellularly.

# 18. Stage 2 begins with glycolysis

Glycolysis occurs in the cytosol and converts glucose into pyruvate while producing ATP and NADH.

# 19. Pyruvate enters mitochondria

In aerobic eukaryotic metabolism, cytosolic pyruvate is transported into the mitochondrial matrix before conversion to acetyl CoA.

# 20. Stage 3

Acetyl CoA feeds the citric acid cycle in the mitochondrial matrix. NADH/FADH2 then feed the inner-membrane electron-transport system.

# 21. Energy-capture efficiency source statement

`SOURCE_SCALE` / `SOURCE_ERA_STATEMENT`: the source says nearly 50% of the theoretical energy available from complete oxidation of glucose or fatty acids can be captured in ATP.

# 22. Heat

The remainder of the released energy is largely dissipated as heat. In animals, this contributes to body warming.

# 23. ATP pool source value

`SOURCE_SCALE` / `VERIFY_QUANT`: a typical cell is said to contain roughly `10^9 ATP molecules` at an instant.

# 24. ATP turnover source value

`SOURCE_SCALE` / `VERIFY_QUANT`: in many cells the ATP pool can turn over every `1–2 minutes`.

# 25. Human ATP-turnover analogy

`SOURCE_ERA_STATEMENT`: an average resting person is described as hydrolyzing roughly their own body weight in ATP over 24 hours.

# 26. ATP is dynamic

`PROJECT_CONSTRAINT`: ATP must not be represented as a static battery pile. It is continuously consumed and regenerated.

# 27. Glycolysis definition

Glycolysis is a 10-reaction cytosolic pathway converting one 6-carbon glucose to two 3-carbon pyruvates while producing ATP and NADH.

# 28. Glycolysis does not directly require O2

No molecular oxygen is a substrate of the 10 glycolytic reactions. Oxidation still occurs because electrons are transferred to NAD+.

# 29. Evolutionary source interpretation

`SOURCE_HYPOTHESIS`: because glycolysis functions without O2 and is widespread, the chapter suggests it likely evolved early, before oxygen became abundant in Earth’s atmosphere.

# 30. Glycolysis carbon balance

```text
1 glucose (6C)
→
2 pyruvate (3C + 3C)
```

# 31. ATP investment

Per glucose:

```text
2 ATP consumed
```

in the early preparatory phase.

# 32. ATP payoff

Per glucose:

```text
4 ATP produced gross
```

later in glycolysis.

# 33. Net glycolytic ATP

```text
4 produced - 2 consumed = 2 ATP net
```

# 34. NADH output

Per glucose:

```text
2 NADH
```

# 35. Overall glycolysis source summary

```text
1 glucose
→ 2 pyruvate
+ 2 ATP net
+ 2 NADH
```

# 36. Glycolysis Step 1

```text
glucose
→ glucose 6-phosphate

enzyme: hexokinase
ATP → ADP
```

The phosphate’s negative charge helps trap glucose-derived carbon inside the cell.

# 37. Glycolysis Step 2

```text
glucose 6-phosphate
↔ fructose 6-phosphate

enzyme: phosphoglucose isomerase
```

An aldose is rearranged to a ketose.

# 38. Glycolysis Step 3

```text
fructose 6-phosphate
→ fructose 1,6-bisphosphate

enzyme: phosphofructokinase
ATP → ADP
```

This is a major regulated, effectively irreversible step.

# 39. Glycolysis Step 4

```text
fructose 1,6-bisphosphate
→ glyceraldehyde 3-phosphate
+ dihydroxyacetone phosphate

enzyme: aldolase
```

# 40. Glycolysis Step 5

```text
dihydroxyacetone phosphate
↔ glyceraldehyde 3-phosphate

enzyme: triose phosphate isomerase
```

After this step, two glyceraldehyde 3-phosphate molecules proceed per starting glucose.

# 41. Downstream doubling rule

`PROJECT_CONSTRAINT`: Steps 6–10 happen twice per glucose because the 6-carbon molecule has been split into two 3-carbon streams.

# 42. Glycolysis Step 6

```text
glyceraldehyde 3-phosphate
→ 1,3-bisphosphoglycerate

enzyme: glyceraldehyde 3-phosphate dehydrogenase
NAD+ → NADH
Pi incorporated
```

# 43. Step 6 oxidation

The aldehyde is oxidized. Reducing equivalents are transferred to NAD+, forming NADH.

# 44. Step 6 enzyme intermediate

A short-lived covalent bond forms between substrate and a cysteine –SH group in glyceraldehyde 3-phosphate dehydrogenase.

# 45. Step 6 thioester

Part of the oxidation energy is temporarily captured in a high-energy thioester linkage to the enzyme.

# 46. Step 6 inorganic phosphate

Free inorganic phosphate displaces the thioester and generates 1,3-bisphosphoglycerate with a high-transfer-potential phosphate linkage.

# 47. Glycolysis Step 7

```text
1,3-bisphosphoglycerate
→ 3-phosphoglycerate

enzyme: phosphoglycerate kinase
ADP → ATP
```

This is substrate-level phosphorylation.

# 48. Steps 6+7 coupled free energy

`SOURCE_SCALE`:

```text
ΔG° ≈ -12.5 kJ/mol
```

for the coupled sequence shown in Figure 13–7.

# 49. Glycolysis Step 8

```text
3-phosphoglycerate
↔ 2-phosphoglycerate

enzyme: phosphoglycerate mutase
```

# 50. Glycolysis Step 9

```text
2-phosphoglycerate
→ phosphoenolpyruvate + H2O

enzyme: enolase
```

Dehydration creates a high-energy enol phosphate.

# 51. Glycolysis Step 10

```text
phosphoenolpyruvate
→ pyruvate

enzyme: pyruvate kinase
ADP → ATP
```

This is another substrate-level phosphorylation.

# 52. Effectively irreversible glycolytic steps

The chapter identifies:

```text
1, 3, 10
```

as strongly favoring glycolysis under cellular conditions.

# 53. Table 13–1 enzyme classes

- Kinase: transfers phosphate groups.
- Isomerase: rearranges bonds within one molecule.
- Dehydrogenase: catalyzes oxidation/reduction by transferring reducing equivalents.
- Mutase: moves a group to a different position within the same molecule.

# 54. Oxidation is electron loss

`PROJECT_CONSTRAINT`: do not define oxidation as “adding oxygen.” Glycolysis contains oxidation without any O2 substrate.

# 55. NAD+ regeneration requirement

Glycolysis requires NAD+ at Step 6. NADH therefore has to be reoxidized to NAD+ for sustained flux.

# 56. Fermentation

`fermentation` = anaerobic pathway that regenerates NAD+ from NADH, thereby permitting glycolysis to continue.

# 57. Lactate fermentation

Source example:

```text
pyruvate + NADH
→ lactate + NAD+
```

in vigorously active muscle under inadequate oxygen.

# 58. Yeast fermentation

Source example:

```text
pyruvate
→ ethanol + CO2

NADH → NAD+
```

# 59. Fermentation does not add ATP beyond glycolysis

The terminal conversion of pyruvate to lactate/ethanol is valuable mainly because it regenerates NAD+, not because it directly generates additional ATP.

# 60. Anaerobic respiration is different

Some bacteria/archaea perform anaerobic respiration using a membrane electron-transport chain with a final electron acceptor other than O2. This is mechanistically distinct from fermentation.

# 61. Phosphate-transfer potentials differ

Different phosphate compounds have different standard free energies of hydrolysis; this determines favorable phosphate-transfer direction.

# 62. Figure 13–8 phosphoenolpyruvate

`SOURCE_SCALE`:

```text
ΔG° hydrolysis ≈ -61.9 kJ/mol
```

# 63. Figure 13–8 1,3-BPG

`SOURCE_SCALE`:

```text
ΔG° hydrolysis ≈ -49.0 kJ/mol
```

# 64. Figure 13–8 ATP

`SOURCE_SCALE`:

```text
ΔG° hydrolysis ≈ -30.6 kJ/mol
```

# 65. Figure 13–8 glucose 6-phosphate

`SOURCE_SCALE`:

```text
ΔG° hydrolysis ≈ -17.5 kJ/mol
```

# 66. High-energy bond wording

`PROJECT_CONSTRAINT`: never explain ATP by saying “breaking the bond releases energy.” Favorability comes from the complete hydrolysis reaction and its products.

# 67. Pyruvate dehydrogenase complex

A giant multienzyme complex in the mitochondrial matrix converts:

```text
pyruvate + CoA + NAD+
→ acetyl CoA + CO2 + NADH
```

# 68. PDH complex enzymes

The source names three enzyme types present in multiple copies:

```text
pyruvate dehydrogenase
dihydrolipoyl transacetylase
dihydrolipoyl dehydrogenase
```

# 69. PDH intermediate channeling

Reaction intermediates are passed directly between enzyme components inside the complex.

# 70. PDH size comparison

`SOURCE_SCALE` / `SOURCE_MODEL`: one pyruvate dehydrogenase complex is described as larger than a ribosome.

# 71. Acetyl CoA

Acetyl CoA carries a 2-carbon acetyl group linked to coenzyme A. It is an activated carbon carrier and a major metabolic convergence point.

# 72. Triacylglycerol

```text
glycerol + 3 fatty-acid chains
```

joined by ester linkages.

# 73. Lipases

Lipases hydrolyze triacylglycerol ester bonds to release fatty acids for use.

# 74. Fatty-acid activation

Fatty acids are linked to CoA before oxidation. Figure 13–11 shows ATP being converted to AMP during this activation.

# 75. Fatty acyl CoA

The activated fatty-acid form is `fatty acyl CoA`.

# 76. Fatty-acid oxidation cycle

The source shows a repeating four-enzyme cycle that removes two carbons at a time from the fatty acyl CoA.

# 77. Fatty-acid cycle outputs

Per turn:

```text
1 acetyl CoA
1 NADH
1 FADH2
```

while the fatty acyl chain shortens by 2 carbons.

# 78. Fat droplets

Because triacylglycerols are water-insoluble, they form intracellular lipid droplets.

# 79. Adipocytes

Specialized animal fat-storage cells are called adipocytes.

# 80. Citric acid cycle

An 8-reaction cyclic pathway in the mitochondrial matrix that oxidizes acetyl-derived carbon and regenerates oxaloacetate.

# 81. Alternative names

```text
citric acid cycle
tricarboxylic acid cycle
TCA cycle
Krebs cycle
```

# 82. Cycle entry

```text
acetyl CoA (2C)
+ oxaloacetate (4C)
→ citrate (6C)
```

# 83. One-turn output

Per acetyl group:

```text
3 NADH
1 FADH2
1 GTP
2 CO2
```

# 84. GTP

GTP is guanosine triphosphate. Its terminal phosphate can be transferred to ADP to form ATP.

# 85. FAD/FADH2

FAD accepts reducing equivalents to form FADH2. Like NADH, FADH2 later donates high-energy electrons to electron transport.

# 86. TCA does not directly consume O2

`DO_NOT_INFER`: no step of the citric acid cycle uses molecular oxygen as a substrate.

# 87. Oxygen atoms in CO2

The source states the oxygen atoms incorporated into citric-acid-cycle CO2 come from water, not directly from atmospheric O2.

# 88. Water input source statement

`SOURCE_SCALE`: Panel 13–2 describes three H2O molecules entering/splitting during each turn.

# 89. Why O2 is still indirectly required

NADH/FADH2 must be reoxidized by electron transport. In aerobic respiration O2 is the terminal electron acceptor, allowing NAD+/FAD regeneration.

# 90. Atmospheric O2 becomes water

At the end of electron transport:

```text
O2 + electrons + H+
→ H2O
```

# 91. TCA Step 1

```text
acetyl CoA + oxaloacetate
→ citrate + CoA

enzyme: citrate synthase
```

Thioester hydrolysis helps drive the reaction strongly forward.

# 92. TCA Step 2

```text
citrate
↔ isocitrate

enzyme: aconitase
```

Water is removed and added back, moving the hydroxyl group.

# 93. TCA Step 3

```text
isocitrate
→ α-ketoglutarate + CO2 + NADH

enzyme: isocitrate dehydrogenase
```

# 94. TCA Step 4

```text
α-ketoglutarate
→ succinyl CoA + CO2 + NADH

enzyme: α-ketoglutarate dehydrogenase complex
```

# 95. α-KGDH relation to PDH

The source emphasizes that α-ketoglutarate dehydrogenase closely resembles pyruvate dehydrogenase and also forms a high-energy thioester with CoA.

# 96. TCA Step 5

```text
succinyl CoA
→ succinate

enzyme: succinyl CoA synthetase
GDP → GTP
```

The source notes ATP is formed instead in bacteria and plants.

# 97. TCA Step 6

```text
succinate
→ fumarate

enzyme: succinate dehydrogenase
FAD → FADH2
```

# 98. TCA Step 7

```text
fumarate
→ malate

enzyme: fumarase
H2O added
```

# 99. TCA Step 8

```text
malate
→ oxaloacetate

enzyme: malate dehydrogenase
NAD+ → NADH
```

Oxaloacetate is regenerated.

# 100. New acetyl carbons are not necessarily released in the same turn

Panel 13–2 explicitly tracks the two carbons entering with acetyl CoA into later turns rather than depicting them as the two CO2 molecules immediately lost in that same turn.

# 101. Carbon identity matters

`PROJECT_CONSTRAINT`: if isotope tracing is enabled, individual carbon atoms must retain persistent identity through reactions.

# 102. Central metabolism feeds biosynthesis

Glycolysis and TCA intermediates are precursors for amino acids, nucleotides, fatty acids, cholesterol, heme, chlorophyll, amino sugars, glycolipids, glycoproteins, and other molecules.

# 103. Oxaloacetate as biosynthetic precursor

The source gives oxaloacetate as a precursor for aspartate and related products.

# 104. α-Ketoglutarate as biosynthetic precursor

The source gives α-ketoglutarate as a precursor for glutamate and related products.

# 105. Metabolism is a network

`PROJECT_CONSTRAINT`: central metabolism must not be implemented as isolated linear pathways. Intermediates enter and leave many connected reactions.

# 106. Electron transport overview

NADH and FADH2 donate electrons to the inner-membrane electron-transport chain. Electrons move through progressively lower-energy states.

# 107. Proton pumping

Energy released by electron transfer is used to pump H+:

```text
mitochondrial matrix
→ intermembrane space
```

# 108. Proton gradient

The resulting proton gradient stores free energy and is compared to a battery.

# 109. ATP synthesis

The proton gradient is used to drive phosphorylation of ADP on the matrix side of the inner membrane. Detailed mechanism belongs to Chapter 14.

# 110. Approximate ATP per glucose

`SOURCE_SCALE` / `VERIFY_QUANT`: complete glucose oxidation is said to produce about `30 ATP`, versus only `2 ATP net` from glycolysis alone.

# 111. Metabolic branch points

The same metabolite can be substrate for multiple enzymes. Pyruvate is the source example.

# 112. Pyruvate fates

Source examples:

```text
pyruvate → acetyl CoA
pyruvate → lactate
pyruvate → alanine
pyruvate → oxaloacetate
```

# 113. Metabolic regulation

Enzyme activity can be altered by covalent modification or binding of regulatory metabolites, with either positive or negative effects.

# 114. Gluconeogenesis

A biosynthetic pathway making glucose from smaller precursors such as pyruvate.

# 115. Gluconeogenesis is not simply glycolysis backward

Most reversible steps can run in reverse, but glycolytic Steps 1, 3, and 10 require bypass reactions because they are strongly favorable in the glycolytic direction.

# 116. PFK branch

```text
glycolysis:
fructose 6-phosphate + ATP
→ fructose 1,6-bisphosphate + ADP

enzyme:
phosphofructokinase
```

# 117. Gluconeogenic bypass

```text
fructose 1,6-bisphosphate + H2O
→ fructose 6-phosphate + Pi

enzyme:
fructose 1,6-bisphosphatase
```

# 118. PFK activation

Source regulators that activate phosphofructokinase include:

```text
ADP
AMP
phosphate
```

# 119. PFK inhibition

High ATP inhibits phosphofructokinase in the source regulatory example.

# 120. Reciprocal regulation

Fructose 1,6-bisphosphatase is regulated by the same energy-state metabolites in the opposite direction, coordinating glucose breakdown versus synthesis.

# 121. Gluconeogenesis energy cost

`SOURCE_SCALE`:

```text
4 ATP + 2 GTP
```

per glucose synthesized.

# 122. Futile cycle

Simultaneous high glycolytic and gluconeogenic flux would shuttle metabolites back and forth while wasting ATP/GTP as heat.

# 123. Glycogen

A branched glucose polymer used as an animal carbohydrate reserve.

# 124. Glycogen storage sites

Stored as cytoplasmic granules in many animal cells, especially liver and muscle.

# 125. Glycogen granule composition

Source figure notes glycogen granules contain both the polymer and enzymes for synthesis/breakdown.

# 126. Glycogen phosphorylase

```text
glycogen
→ glucose 1-phosphate
```

when glucose is mobilized.

# 127. Entry into glycolysis

```text
glucose 1-phosphate
→ glucose 6-phosphate
→ glycolytic pathway
```

# 128. Reciprocal glycogen regulation

Source states:

```text
glucose 6-phosphate activates glycogen synthesis
glucose 6-phosphate inhibits glycogen phosphorylase
ATP inhibits glycogen phosphorylase
```

# 129. Hormonal source examples

The chapter names glucagon, insulin, and epinephrine as hormonal regulators of glycogen metabolism. Detailed signaling belongs to Chapter 16.

# 130. Fat versus glycogen energy density

`SOURCE_SCALE` / `VERIFY_QUANT`: oxidation of a gram of fat is said to release about twice the energy of a gram of glycogen.

# 131. Glycogen hydration penalty

Because glycogen binds substantial water, the source says the actual mass required to store the same energy is roughly sixfold greater than fat.

# 132. Human glycogen reserve source statement

`SOURCE_ERA_STATEMENT`: roughly one day of normal activity.

# 133. Human fat reserve source statement

`SOURCE_ERA_STATEMENT`: nearly one month.

# 134. Hypothetical glycogen-only reserve

`SOURCE_MODEL`: if major fuel reserves were glycogen instead of fat, average body mass would be about 60 lb (~30 kg) greater.

# 135. Fed/fasted source framing

After an overnight fast, the source says much acetyl CoA entering the TCA cycle comes from fatty acids. After a meal, much comes from glucose, and excess glucose can be stored as glycogen or converted to fat.

# 136. Sugar-to-fat versus fatty-acid-to-sugar source rule

The source explicitly says animal cells can readily convert sugars to fats but cannot convert fatty acids to sugars.

# 137. Plant storage carbohydrate

Plants store glucose as starch, a branched glucose polymer related to glycogen but with fewer branch points in the source description.

# 138. Plant fat stores

Plant storage fats are also triacylglycerols.

# 139. Seed reserves

Seeds often contain abundant starch and fat, supplying energy and biosynthetic building blocks until seedlings can photosynthesize.

# 140. Chloroplast storage source statement

`SOURCE_ERA_STATEMENT`: the chapter states that plant cells store fats and starch in chloroplasts. Preserve this source statement pending later/external compartment-level refinement.

# 141. Krebs discovery — key observation

Small additions of certain organic acids to oxygenated tissue preparations stimulated much more O2 consumption than would be needed to oxidize only the added molecules.

# 142. Initially known linear sequences

```text
citrate → α-ketoglutarate → succinate

succinate → fumarate → malate → oxaloacetate
```

# 143. Malonate

A structural analog of succinate that competitively inhibits succinate dehydrogenase.

# 144. Malonate accumulation logic

Blocking succinate dehydrogenase caused succinate to accumulate after addition of both upstream and apparently downstream intermediates, suggesting hidden cyclic connectivity.

# 145. Closing the cycle

Observation that pyruvate + oxaloacetate could produce citrate allowed Krebs to connect the linear sequences into a cycle.

# 146. Catalytic intermediate logic

Because cycle intermediates are regenerated, adding a small amount can support oxidation of many pyruvate molecules, explaining disproportionate O2 uptake.

# 147. Historical science rule

`PROJECT_CONSTRAINT`: pathway topology can be inferred from perturbation and accumulation patterns before every enzyme/protein structure is known.

# 148. Compartment labels are mandatory

Every metabolic reaction must carry its compartment. At minimum:

```text
cytosol
mitochondrial matrix
inner mitochondrial membrane
extracellular/gut
lysosome
```

# 149. Persistent molecule identity

A pyruvate molecule should persist as the same entity during transport into mitochondria until a chemical reaction transforms it.

# 150. Reaction creates chemical-state transition

Example:

```text
pyruvate
≠
acetyl CoA
```

The transition must be a reaction event with atom mapping.

# 151. Carbon, electron, and phosphate provenance are separate

A carbon skeleton may continue into one product while electrons move to NADH and phosphate moves to ATP. These are separate state transitions.

# 152. Cytosolic NADH caveat

The source says glycolytic NADH is transported into mitochondria. `DO_NOT_INFER`: do not hard-code direct NADH molecule passage through the inner membrane without later verification; Chapter 14/modern sources must refine this.

# 153. NADH versus NADPH

Cross-chapter rule: NADH is treated mainly as catabolic reducing power; NADPH mainly supports biosynthesis/antioxidant chemistry. Never merge them.

# 154. FADH2 versus NADH

Both are electron carriers but are chemically distinct and feed electron transport differently. Chapter 14 must refine the difference.

# 155. GTP versus ATP

Both are nucleoside triphosphates with similar phosphoryl-transfer potential, but they are distinct molecules.

# 156. Metabolism is asynchronous

`PROJECT_CONSTRAINT`: never animate every metabolite moving in lockstep through a pathway. Individual reaction events are stochastic; pathway flux is a population-level property.

# 157. TCA cycle is not a literal geometric ring

The pathway is chemically cyclic. Enzymes do not need to be spatially arranged in a visible circle.

# 158. Energy diagrams are AnalysisState

Free-energy plots are explanatory representations, not literal spatial height or glowing energy objects inside cells.

# 159. Activated carriers are WorldState molecules

ATP, NADH, FADH2, GTP, and acetyl CoA are real molecular entities and may be rendered structurally at suitable LOD.

# 160. Heat is not a metabolite

Heat is dispersed energy transfer to molecular motion; do not render it as a discrete molecule.

# 161. Question 13–1 — why fermentation is required

Without fermentation under anaerobic conditions:

```text
NADH accumulates
NAD+ falls
Step 6 of glycolysis stops
glycolytic ATP production stops
```

Thus pyruvate cannot simply be discarded; it must help regenerate NAD+.

# 162. Question 13–1 — expected accumulation

Source-derived expectation:

```text
pyruvate ↑
NADH ↑
NAD+ ↓
```

followed by upstream pathway stalling.

# 163. Question 13–2 — arsenate

Arsenate can substitute for phosphate in the Step-6 chemistry, but its carbon-arsenate anhydride is hydrolytically unstable. Oxidation can proceed while the high-energy intermediate collapses before useful ATP formation.

# 164. Question 13–2 — energetic consequence

Arsenate therefore uncouples substrate oxidation from ATP capture, wasting free energy and reducing ATP yield.

# 165. Question 13–3 — fatty-acid carbon parity

Because breakdown removes 2-carbon acetyl units and synthesis uses related reverse logic, common cellular fatty acids are expected to have even numbers of carbon atoms.

# 166. Question 13–4 — why attach acetyl to oxaloacetate

Joining a 2-carbon acetyl group to a larger carbon skeleton creates intermediates with functional groups that can be successively rearranged, oxidized, and decarboxylated while the oxaloacetate scaffold is regenerated.

# 167. Question 13–5 — oxygen misconception

The statement that consumed O2 returns to the atmosphere as CO2 is wrong. In the source model, atmospheric O2 is reduced to water at the electron-transport chain; CO2 oxygen atoms come from water.

# 168. Question 13–5 — isotope test

Use isotope-labeled oxygen:

```text
18O2 supplied
→ trace label
```

Prediction: label appears primarily in newly formed water rather than directly in TCA-derived CO2. Conversely, labeled water can be traced into CO2.

# 169. Question 13–6 — why TCA does not halt after siphoning

Cells replenish withdrawn TCA intermediates using other metabolic reactions. The chapter explicitly mentions pyruvate being converted to oxaloacetate.

# 170. Question 13–7 — why fat gives more energy

Fatty acids are more reduced: many C–H bonds and relatively little oxygen. Sugars already contain many C–O bonds and are therefore partly oxidized. More electrons remain available from fatty acids for transfer to oxygen.

# 171. Question 13–8A

“All energy becomes heat.” `FALSE` — substantial energy is captured in activated carriers/ATP.

# 172. Question 13–8B

“No energy becomes heat.” `FALSE` — some released free energy is dissipated as heat.

# 173. Question 13–8C

“Energy production involves oxidation of carbon.” `TRUE`.

# 174. Question 13–8D

“The reaction supplies essential water.” Misleading as a general cellular claim. Metabolic water is produced, but Chapter 13 does not frame cellular water supply as dependent on glucose oxidation.

# 175. Question 13–8E

“In cells the reaction takes place in more than one step.” `TRUE`.

# 176. Question 13–8F

“Many steps directly react with O2.” `FALSE`. O2 is used directly at the terminal electron-transport stage in the source pathway.

# 177. Question 13–8G

“Some organisms carry out the reverse reaction.” Broadly `TRUE` for photosynthetic carbon fixation using external energy, but `DO_NOT_INFER` that photosynthesis is literally respiration run backward step-by-step.

# 178. Question 13–8H

“Some cells growing without O2 produce CO2.” `TRUE`, as in yeast ethanol fermentation.

# 179. Question 13–9 — carbon journey

Plausible route:

```text
exhaled CO2
→ atmospheric mixing
→ photosynthetic fixation
→ plant carbohydrate
→ food
→ digestion
→ central metabolism
→ amino acid and/or heme precursor
→ hemoglobin
```

# 180. Question 13–10 — yeast aerobic versus anaerobic growth

Aerobic conditions generally permit much larger ATP yield per glucose because fermentation gives only glycolytic ATP whereas aerobic respiration adds oxidative phosphorylation. All else equal, aerobic proliferation should be more energetically efficient.

# 181. Question 13–11 — creatine phosphate

Given:

```text
ΔG° hydrolysis ≈ -43 kJ/mol
```

which is more negative than ATP hydrolysis (~-30.6 kJ/mol in Figure 13–8), phosphate transfer from creatine phosphate to ADP can favor rapid ATP regeneration.

# 182. Question 13–12 — conserved glycolysis

Near-universal conservation of the same pathway across bacteria and humans supports an ancient origin inherited from common ancestry. Once deeply integrated with the metabolic network, wholesale replacement would be strongly constrained.

# 183. Question 13–13 — glucose oxidation rate

Given:

```text
10^9 ATP/min
30 ATP/glucose
```

then:

```text
glucose/min ≈ 3.33 × 10^7
```

# 184. Question 13–13 — O2 consumption

Each glucose uses 6 O2:

```text
3.33 × 10^7 × 6
≈ 2.0 × 10^8 O2 molecules/min
```

# 185. Question 13–13 — O2 gas volume

```text
2.0×10^8 / 6.022×10^23
≈ 3.32×10^-16 mol/min

× 22.4 L/mol
≈ 7.44×10^-15 L/min
```

# 186. Question 13–13 — cell volume

A 10-µm cube has:

```text
1000 µm³
= 10^-12 L
```

# 187. Question 13–13 — own-volume O2 time

```text
10^-12 / 7.44×10^-15
≈ 134 min
≈ 2.2 h
```

# 188. Question 13–14 — first four glycolysis ΔG values

```text
Step 1: -33.5 kJ/mol
Step 2: -2.5
Step 3: -22.2
Step 4: -1.3
```

All are favorable under the stated cellular conditions.

# 189. Question 13–14 — total ΔG

```text
-33.5 - 2.5 - 22.2 - 1.3
= -59.5 kJ/mol
```

# 190. Question 13–14 — cumulative energy levels

With initial level 0:

```text
after Step 1: -33.5
after Step 2: -36.0
after Step 3: -58.2
after Step 4: -59.5 kJ/mol
```

# 191. Question 13–15A — labeled pyruvate carboxyl carbon

Pyruvate dehydrogenase removes the carboxyl carbon as CO2. Therefore the great majority of that 14C label should appear rapidly in CO2.

# 192. Question 13–15B — labeled oxaloacetate keto carbon

`DO_NOT_INFER`: the exact atom destination after precisely one turn depends on atom-by-atom mapping in Panel 13–2. The parsed text does not preserve that geometry unambiguously, so this canon does not fabricate the answer.

# 193. Question 13–16 — why O2 suppresses fermentation

With O2 available, electron transport efficiently reoxidizes NADH to NAD+ and oxidative phosphorylation captures much more energy. Less pyruvate therefore needs to be diverted into fermentation merely to regenerate NAD+.

# 194. Per-glucose carbon accounting

```text
glucose 6C
→ 2 pyruvate 3C
→ 2 CO2 + 2 acetyl CoA 2C
→ 4 additional CO2 via two TCA turns
= 6 CO2 total
```

# 195. Per-glucose reducing-carrier accounting

From source stoichiometry:

```text
glycolysis: 2 NADH
pyruvate dehydrogenase: 2 NADH
two TCA turns: 6 NADH + 2 FADH2

TOTAL:
10 NADH + 2 FADH2
```

`SOURCE_DERIVED`.

# 196. Direct ATP/GTP accounting before oxidative phosphorylation

```text
glycolysis: 2 ATP net
two TCA turns: 2 GTP ≈ 2 ATP equivalents
```

`SOURCE_DERIVED`.

# 197. Do not derive fixed NADH→ATP conversion yet

`DO_NOT_INFER`: Chapter 13 gives an approximate full yield (~30 ATP/glucose) but does not authorize a fixed per-NADH/FADH2 conversion constant. Chapter 14 must refine this.

# 198. Activated-carrier schema

```yaml
activated_carrier:
  id:
  type: ATP | NADH | FADH2 | GTP | acetyl_CoA
  compartment:
  redox_state:
  phosphoryl_state:
  acyl_cargo:
  provenance:
```

# 199. Metabolic reaction schema

```yaml
metabolic_reaction:
  id:
  enzyme:
  compartment:
  substrates:
  products:
  reversible:
  carbon_mapping:
  redox_transfer:
  phosphate_transfer:
  carrier_changes:
  delta_G:
```

# 200. Glycolysis schema

```yaml
glycolysis:
  compartment: cytosol
  glucose_in: 1
  steps: 10
  ATP_investment: 2
  ATP_gross: 4
  ATP_net: 2
  NADH_out: 2
  pyruvate_out: 2
```

# 201. Fermentation schema

```yaml
fermentation:
  pyruvate_source: glycolysis
  NADH_consumed:
  NAD_plus_regenerated:
  product: lactate | ethanol
  CO2_output:
  extra_ATP_after_glycolysis: 0
```

# 202. PDH schema

```yaml
pyruvate_dehydrogenase:
  compartment: mitochondrial_matrix
  pyruvate_in:
  CoA_in:
  NAD_plus_in:
  acetyl_CoA_out:
  CO2_out:
  NADH_out:
```

# 203. Fatty-acid catabolism schema

```yaml
fatty_acid_catabolism:
  activation:
    CoA_required: true
    ATP_to_AMP: true
  carbons_removed_per_turn: 2
  acetyl_CoA_per_turn: 1
  NADH_per_turn: 1
  FADH2_per_turn: 1
```

# 204. Citric-acid-cycle schema

```yaml
citric_acid_cycle:
  compartment: mitochondrial_matrix
  acetyl_CoA_in: 1
  oxaloacetate_regenerated: 1
  steps: 8
  CO2_out: 2
  NADH_out: 3
  FADH2_out: 1
  GTP_out: 1
```

# 205. Carbon-tracing schema

```yaml
carbon_atom:
  isotope: C12 | C13 | C14
  molecule_id:
  atom_index:
  source:
  current_metabolite:
  reaction_history:
```

# 206. Metabolic regulation schema

```yaml
metabolic_regulation:
  enzyme:
  regulator:
  effect: activate | inhibit
  mechanism: allosteric | covalent_modification
  pathway_flux_effect:
```

# 207. Energy-state schema

```yaml
cell_energy_state:
  ATP:
  ADP:
  AMP:
  Pi:
  NAD_plus:
  NADH:
  FAD:
  FADH2:
```

# 208. Storage schema

```yaml
energy_store:
  type: glycogen | triacylglycerol | starch
  compartment:
  amount:
  associated_enzymes:
  mobilization_state:
```

# 209. WorldState versus ViewState

Pathway arrows, energy diagrams, and carbon-flow maps are View/Analysis overlays. WorldState stores actual molecules, reaction events, enzyme states, compartments, and concentrations.

# 210. ExperimentState — isotope tracing

Radiolabeled atoms are experimental modifications used to infer atom provenance.

# 211. ExperimentState — malonate

Malonate poisoning is an experimental perturbation, not normal metabolism.

# 212. BiologicalTime

Metabolic pathways are not synchronized animations. Reactions occur asynchronously; flux emerges statistically from many molecular events.

# 213. LOD rule

At cell scale show pathway flux and compartment context; at molecular scale show enzyme-bound intermediates, bonds, electrons, phosphate groups, and atom provenance.

# 214. Source quantitative register

| Quantity | Chapter 13 value |
|---|---:|
| complete glucose oxidation ΔG° | ~2880 kJ/mol |
| energy captured in ATP | nearly 50% |
| ATP/cell instantaneously | ~10^9 |
| ATP pool turnover | ~1–2 min |
| glycolysis ATP investment | 2 |
| glycolysis ATP gross | 4 |
| glycolysis ATP net | 2 |
| glycolysis NADH | 2 |
| glycolysis pyruvate | 2 |
| glycolysis reactions | 10 |
| Steps 6+7 ΔG° | -12.5 kJ/mol |
| PEP hydrolysis ΔG° | -61.9 kJ/mol |
| 1,3-BPG hydrolysis ΔG° | -49.0 kJ/mol |
| ATP hydrolysis ΔG° | -30.6 kJ/mol |
| G6P hydrolysis ΔG° | -17.5 kJ/mol |
| fatty-acid carbons removed/turn | 2 |
| TCA reactions | 8 |
| TCA NADH/turn | 3 |
| TCA FADH2/turn | 1 |
| TCA GTP/turn | 1 |
| TCA CO2/turn | 2 |
| water entering TCA/turn | 3 |
| approximate ATP/glucose | ~30 |
| gluconeogenesis ATP cost | 4 |
| gluconeogenesis GTP cost | 2 |
| fat vs glycogen energy/dry mass | ~2× |
| effective mass advantage of fat storage | ~6× |
| glycogen reserve | ~1 day |
| fat reserve | nearly ~1 month |
| hypothetical glycogen-only extra mass | ~60 lb / ~30 kg |
| Q13–13 O2 use | ~2.0×10^8 molecules/min |
| Q13–13 own-volume O2 time | ~134 min |
| Q13–14 four-step ΔG total | -59.5 kJ/mol |

# 215. Quantitative verification queue

Before runtime use, verify:
- physiological ΔG values
- ATP/NADH pool sizes
- glycolytic/TCA fluxes
- ATP turnover
- pyruvate import kinetics
- NADH shuttle mechanisms
- fatty-acid oxidation rates
- exact storage efficiencies
- organism/cell-specific regulatory constants

# 216. Do-not-overinterpret register

Do not infer:

```text
oxidation requires O2 in each reaction
FALSE

enzymes create energy
FALSE

breaking a high-energy bond alone releases usable energy
FALSE

glycolysis requires oxygen
FALSE

fermentation = anaerobic respiration
FALSE

fermentation terminal steps make extra ATP
FALSE

NADH = NADPH
FALSE

glycolysis makes 4 ATP net
FALSE

Steps 6–10 occur once per glucose
FALSE

pyruvate dehydrogenase is a glycolysis enzyme
FALSE

acetyl CoA is metabolic waste
FALSE

fatty-acid oxidation removes one carbon/turn
FALSE

TCA directly consumes O2
FALSE

CO2 oxygen atoms come directly from inhaled O2
FALSE

oxaloacetate is consumed permanently
FALSE

new acetyl carbons must leave as CO2 in the same turn
FALSE

TCA is a literal spatial ring
FALSE

gluconeogenesis is simply glycolysis backwards
FALSE

all glycolysis steps are reversible
FALSE

glycolysis and gluconeogenesis should run maximally together
FALSE

glycogen and fat store energy with equal mass efficiency
FALSE

cytosolic NADH simply crosses the inner mitochondrial membrane as a free molecule
NOT AUTHORIZED

pathway arrows are physical structures
FALSE
```

# 217. Cross-chapter dependencies

```text
Chapter 2:
sugars, fatty acids, lipids, chemical bonds

Chapter 3:
ΔG, ATP, NADH, NADPH, acetyl CoA, redox, coupling

Chapter 4:
enzyme catalysis, allostery, feedback, phosphorylation

Chapter 11:
mitochondrial membrane context

Chapter 12:
proton gradients, membrane transport

Chapter 14:
electron transport, chemiosmosis, ATP synthase, mitochondria/chloroplasts

Chapter 15:
lysosomal digestion

Chapter 16:
insulin/glucagon/epinephrine signaling
```

# 218. Core causal model

```text
FOOD POLYMERS
→ digestion
→ small molecules

GLUCOSE
→ glycolysis
→ pyruvate + ATP + NADH

ANAEROBIC CONDITION
→ fermentation
→ NAD+ regenerated

PYRUVATE
→ acetyl CoA + CO2 + NADH

FATTY ACIDS
→ repeated 2-carbon oxidation
→ acetyl CoA + NADH + FADH2

ACETYL CoA
→ TCA cycle
→ CO2 + NADH + FADH2 + GTP

NADH/FADH2
→ electron transport
→ proton gradient
→ oxidative phosphorylation
→ ATP

INTERMEDIATES
↔ biosynthesis

ENERGY STATE
→ feedback regulation

SURPLUS
→ glycogen / fat / starch
```

# 219. Source trace

Primary source:

**Essential Cell Biology, 6th edition — Chapter 13: “How Cells Obtain Energy from Food.”**

Printed pages:

```text
445–472
```

PDF pages reviewed:

```text
480–507
```

Supporting material reviewed:
Figures 13–1 through 13–25; Table 13–1; Panel 13–1; Panel 13–2; How We Know: *Unraveling the Citric Acid Cycle*; Essential Concepts; Questions 13–1 through 13–16.

The exact atom-position solution to Question 13–15B is deliberately not fabricated because the parsed text does not preserve the panel’s atom geometry unambiguously.

# 220. Approval checklist

Before changing this file to `APPROVED`, verify:

- direct burning versus controlled oxidation
- 2880 kJ/mol source value
- activated carriers
- substrate-level versus oxidative phosphorylation
- three stages of catabolism
- complete 10-step glycolysis pathway
- all glycolytic enzyme names
- Steps 1/3/10 irreversibility
- Step-6 cysteine/thioester intermediate
- substrate-level ATP formation
- NAD+ regeneration
- lactate and ethanol fermentation
- anaerobic respiration distinction
- all phosphate-hydrolysis source values
- pyruvate dehydrogenase complex and its three named enzymes
- fatty-acid activation and two-carbon shortening cycle
- NADH/FADH2/acetyl-CoA outputs
- all 8 TCA steps and enzyme names
- 3 NADH / 1 FADH2 / 1 GTP / 2 CO2 per turn
- oxaloacetate regeneration
- TCA oxygen/water distinction
- carbon-provenance warning
- biosynthetic branch points
- Krebs/malonate experiments
- electron-transport overview
- ~30 ATP/glucose source value
- gluconeogenesis bypass logic
- PFK/FBPase reciprocal regulation
- 4 ATP + 2 GTP cost
- glycogen and fat storage
- all Questions 13–1 through 13–16
- all `DO_NOT_INFER` rules
- all schemas
- source trace

# END OF CHAPTER 13 CANON

Recommended repository destination:

```text
science/chapters/13_how_cells_obtain_energy_from_food.md
```

Recommended commit message:

```text
science: add Chapter 13 cellular metabolism canon
```

Do not begin Chapter 14 merely because this file exists.

Chapter 14 must refine the membrane machinery that converts NADH/FADH2 electron energy into a proton gradient and ATP, including the electron-transport chain, chemiosmosis, ATP synthase, mitochondria, chloroplasts, photosynthetic electron flow, and evolutionary origin of membrane-based energy conversion.
