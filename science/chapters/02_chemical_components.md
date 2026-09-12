---
title: "The Seamless Cell — Science Canon — Chapter 02"
subtitle: "Chemical Components of Cells"
source_title: "Essential Cell Biology"
source_edition: "6th edition"
source_authors: "Bruce Alberts et al."
source_scope: "Chapter 2, printed pages 43–84 (PDF approximately pages 78–119)"
project: "The Seamless Cell"
status: "SOURCE_DERIVED_DRAFT"
approval_state: "Pending Kavi/ChatGPT science review"
external_quantitative_layer: "NOT YET MERGED"
last_updated: "2026-09-12"
---

# The Seamless Cell — Chapter 02 Science Canon

## Purpose

This file is a **hard-coded science canon**, not ordinary study notes.

Its job is to convert Chapter 2 of *Essential Cell Biology*, 6th edition into an implementation-facing factual layer for **The Seamless Cell**.

The chapter establishes the chemical reality beneath every structure that will later appear in the project:

```text
cell
→ organelle
→ membrane / macromolecular assembly
→ macromolecule
→ monomer
→ chemical group
→ atom
→ electron distribution
```

Everything rendered at molecular scale must eventually obey this layer.

The goal is to preserve, with high granularity:

- atomic structure relevant to cell chemistry
- electron-shell logic
- covalent and ionic bonding
- molecular geometry
- bond polarity
- electronegativity
- water and hydrogen bonding
- acids, bases, pH, and buffers
- hydrophilic and hydrophobic behavior
- electrostatic attractions
- van der Waals attractions
- hydrophobic forces
- carbon skeletons and common chemical groups
- the four major small-organic-molecule families
- sugars and sugar derivatives
- fatty acids and lipids
- all 20 protein amino acids and their chapter-level classifications
- nucleotides, nucleosides, ATP, RNA, and DNA chemistry
- condensation and hydrolysis
- polymerization
- macromolecular sequence
- folding and conformation
- molecular recognition
- macromolecular assemblies
- figure-level geometry and scale constraints
- chemical representation rules for the visual system

This file should be treated as a **source-derived chemical contract** for future implementation agents.

---

# 0. Evidence/status conventions

## `SOURCE_FACT`

Directly supported by Chapter 2.

## `SOURCE_SCALE`

A numerical quantity, range, bond length, concentration, mass, count, pH, or other quantitative statement explicitly supplied by Chapter 2.

## `SOURCE_MODEL`

A source-presented conceptual model or explanatory representation.

## `PROJECT_CONSTRAINT`

A visualization / implementation rule derived from source facts and The Seamless Cell architecture.

## `VERIFY_QUANT`

A number that belongs in the source canon but should be checked against approved quantitative sources before becoming a precise simulation constant.

## `LATER_CHAPTER_REFINEMENT`

Chapter 2 gives only an introductory statement and later chapters must define the full mechanism.

## `DO_NOT_INFER`

A guardrail against turning a schematic convention, simplified statement, rendering convenience, or model-memory guess into biological truth.

---

# 1. Chapter-level worldview

**Status: `SOURCE_FACT`**

Living cells obey ordinary physical and chemical laws.

There is no separate "vital" chemistry that violates physics.

The chemistry of life is nevertheless distinctive because it is:

- overwhelmingly carbon based
- carried out primarily in an aqueous environment
- performed over a relatively narrow biological temperature range
- enormously complex
- dominated by polymers constructed from smaller chemical subunits
- tightly regulated in rate, time, and location

### Project rule

```text
BIOLOGY IS CHEMISTRY IN SPACE AND TIME.
```

At the deepest scales, The Seamless Cell must not replace chemistry with decorative "molecular-looking" geometry.

A chemical representation must encode, at minimum when relevant:

```text
element identity
covalent connectivity
bond order
formal / partial charge
molecular geometry
hydrogen-bond donor/acceptor capability
hydrophobic / hydrophilic character
chemical-group identity
polymer directionality
```

---

# 2. Matter, elements, atoms, and molecules

## 2.1 Element

**Status: `SOURCE_FACT`**

An element is a substance that cannot be broken down or interconverted into a different element by ordinary chemical means.

Examples introduced include:

- hydrogen
- carbon
- nitrogen
- oxygen

## 2.2 Atom

The atom is the smallest particle of an element that retains the distinctive chemical properties of that element.

## 2.3 Molecule

The properties of cellular materials depend not only on which atoms are present but on how those atoms are connected.

A molecule is a cluster of atoms held together by covalent bonds.

### `DO_NOT_INFER`

A molecule is not defined merely by a set of element counts.

```text
same formula
≠
same molecular structure
≠
same biological behavior
```

This becomes critical for isomers.

---

# 3. Atomic architecture

## 3.1 Atomic nucleus

**Status: `SOURCE_FACT`**

The center of an atom is a dense, positively charged nucleus containing almost all of the atom's mass.

The nucleus contains:

- protons — positively charged
- neutrons — electrically neutral

## 3.2 Electrons

Electrons:

- are negatively charged
- occupy space around the atomic nucleus
- are governed by quantum-mechanical behavior
- are appropriately represented as a probability distribution / electron cloud rather than as tiny planets following classical deterministic orbits

The source sometimes uses "orbit" as a simplified teaching description but explicitly clarifies that the electron cloud represents the probability of finding electrons.

### Project constraint

At atomic-detail scale, do not show electrons as little balls orbiting nuclei in classical planetary trajectories unless the experience is explicitly explaining the historical/schematic shell model.

For chemically meaningful visualization:

```text
atoms + bonds + charge/electron-density cues
```

are preferable to animated classical electron orbits.

---

# 4. Atomic number, atomic neutrality, and mass

## 4.1 Atomic number

**Status: `SOURCE_FACT`**

The atomic number equals the number of protons in the nucleus.

Examples:

- hydrogen: 1 proton → atomic number 1
- carbon: 6 protons → atomic number 6

## 4.2 Neutral atom

A neutral atom contains the same number of electrons as protons.

Therefore:

```text
neutral atom:
number of electrons = atomic number
```

## 4.3 Atomic mass at chapter level

Protons and neutrons each contribute approximately 1 dalton to atomic mass.

Electron mass is negligible for the chapter's mass accounting.

Examples:

- ordinary hydrogen ≈ 1 dalton
- carbon-12 = 12 daltons
- carbon-14 = 14 daltons

---

# 5. Atomic scale

**Status: `SOURCE_SCALE`**

The source gives approximate spatial orientation values:

- electron-cloud diameter:
  - hydrogen: ~0.1 nm
  - high-atomic-number atoms: up to ~0.4 nm
- carbon atomic nucleus diameter: ~5 × 10^-6 nm
- carbon atom diameter: roughly ~0.2 nm

The nucleus is therefore tiny relative to the full atom.

### Project rule

Atomic renderings must not suggest that the nucleus occupies a large fraction of an atom's visible volume.

However, a literal nucleus-to-electron-cloud scale representation is usually not useful for molecular chemistry and may be intentionally abstracted.

Any such exaggeration must be treated as representation, not physical proportion.

---

# 6. Isotopes

## 6.1 Definition

**Status: `SOURCE_FACT`**

Atoms of the same element always have the same number of protons.

They can differ in neutron number.

Such forms are isotopes.

## 6.2 Chemical similarity

Changing neutron number does not normally change the ordinary chemical identity of the atom.

Therefore isotopes of one element can be:

- physically distinguishable
- chemically very similar

## 6.3 Nuclear stability

Too many or too few neutrons can make a nucleus unstable.

Unstable isotopes undergo radioactive decay.

## 6.4 Carbon examples

- carbon-12: 6 protons + 6 neutrons; stable
- carbon-14: 6 protons + 8 neutrons; radioactive

Carbon-14 decays at a steady rate and can be used for radiocarbon dating of organic material.

## 6.5 Hydrogen isotope examples from Figure 2–2

- ordinary H: proton, no neutron
- deuterium (^2H): one proton + one neutron
- tritium (^3H): one proton + two neutrons

---

# 7. Dalton, mole, Avogadro's number, and concentration

## 7.1 Dalton

**Status: `SOURCE_FACT` / `SOURCE_SCALE`**

One dalton is defined as one-twelfth of the mass of one carbon-12 atom.

At chapter precision:

- proton ≈ 1 dalton
- neutron ≈ 1 dalton

## 7.2 Mole

A mole is a fixed number of particles:

```text
1 mol = 6.022 × 10^23 particles
```

Particles may be:

- atoms
- molecules
- ions

The number is Avogadro's number.

## 7.3 Dalton-to-gram relationship

If one particle has mass `X daltons`, one mole of those particles has mass approximately `X grams`.

Source examples:

- carbon atom: 12 Da → 1 mol carbon ≈ 12 g
- glucose molecule: 180 Da → 1 mol glucose ≈ 180 g
- Na+ ~23 Da + Cl- ~35 Da → 1 mol NaCl ≈ 58 g

## 7.4 Molar concentration

```text
1 M = 1 mole solute / liter solution
```

For glucose:

- 1 M glucose = 180 g/L
- 1 mM glucose = 180 mg/L

### Project consequence

If concentrations are later visualized as explicit molecule counts, conversions must pass through:

```text
concentration
× volume
× Avogadro's number
→ expected number of particles
```

Never place arbitrary molecule counts into a compartment that is supposed to be quantitatively meaningful.

---

# 8. Elemental composition of living matter

## 8.1 Dominant elements

**Status: `SOURCE_FACT` / `SOURCE_SCALE`**

The chapter states that four elements account for roughly 96% of organismal mass:

- carbon (C)
- hydrogen (H)
- nitrogen (N)
- oxygen (O)

Figure 2–7 additionally describes these four as accounting for about 99% of the total number of atoms in the human body.

## 8.2 Biological chemistry differs from Earth's crust

The elemental abundance profile of living matter differs strongly from the Earth's inorganic crust.

Figure 2–4 uses atom-count abundance and illustrates, for example:

- >60% of atoms in the human body are hydrogen
- nearly 30% of atoms in Earth's crust are silicon

### `DO_NOT_INFER`

The composition of a biological system should not be represented by simply sampling elements according to crustal abundance.

---

# 9. Electron shells

## 9.1 Discrete allowed states

**Status: `SOURCE_FACT`**

Electrons occupy discrete allowed distributions described at chapter level as electron shells.

## 9.2 Shell capacities used by the chapter

**Status: `SOURCE_SCALE`**

- first shell: maximum 2 electrons
- second shell: maximum 8
- third shell: maximum 8 in the simplified biological treatment
- fourth shell: maximum 18
- fifth shell: maximum 18

Atoms with more than four occupied shells are uncommon in biological molecules.

### Note

This is the textbook's biologically simplified shell accounting.

Do not extrapolate it into a full quantum-chemistry engine.

---

# 10. Valence / outer-shell principle

## 10.1 Filled outer shell

**Status: `SOURCE_FACT`**

Atoms are especially stable when the outermost occupied electron shell is filled.

Examples of chemically inert noble gases:

- He: 2
- Ne: 2 + 8
- Ar: 2 + 8 + 8

## 10.2 Incomplete outer shell

Atoms important in living systems generally have incomplete outer shells and therefore tend to participate in chemical bonds.

Hydrogen has one electron in a shell that can hold two and is highly reactive.

### Core rule

```text
OUTER ELECTRON ARRANGEMENT
→ BONDING CAPABILITY
→ MOLECULAR CHEMISTRY
```

---

# 11. Bond formation: two broad electron strategies

Atoms can reach more stable outer-shell arrangements through:

```text
electron sharing
→ covalent bond
```

or

```text
electron transfer
→ charged ions
→ electrostatic / ionic attraction
```

These are idealized ends of a spectrum; unequal electron sharing produces polar covalent bonds.

---

# 12. Covalent bonds

## 12.1 Definition

**Status: `SOURCE_FACT`**

A covalent bond forms when atoms share electron pairs.

The shared electron density contributes to holding positively charged nuclei together.

## 12.2 H2 example

Two hydrogen atoms share electrons.

**Status: `SOURCE_SCALE`**

H–H covalent bond length:

```text
~0.074 nm
```

At shorter separation, nuclear repulsion becomes excessive.

At longer separation, electron sharing is insufficient to maintain the bond.

---

# 13. Characteristic bonding capacity of common biological atoms

At the simplified Chapter 2 level:

- H commonly forms 1 covalent bond
- O commonly forms up to 2
- N commonly forms up to 3
- C commonly forms up to 4

Carbon's four bonds are central to organic chemistry.

### Project constraint

Molecular geometry cannot be generated by connecting atoms with arbitrary lines.

Bond connectivity and valence must be chemically valid.

---

# 14. Bond length, bond angle, and three-dimensional geometry

## 14.1 Bond length

Covalent bonds have characteristic lengths determined by the atoms and bond order.

## 14.2 Bond angle

When an atom forms multiple bonds, those bonds occupy characteristic spatial directions.

## 14.3 Carbon tetrahedral geometry

The four single-bond directions around tetrahedral carbon point approximately toward the corners of a tetrahedron.

## 14.4 Water geometry

Figure 2–9 describes water as V-shaped with an angle of about:

```text
~109°
```

### Project constraint

At chemical / atomic scale:

```text
topology alone is insufficient.
3D stereochemistry matters.
```

---

# 15. Molecular color convention

Figure 2–9 records the conventional molecular-model color scheme used in the book:

- carbon: black or dark gray
- hydrogen: white
- nitrogen: blue
- oxygen: red

### Project rule

Unlike arbitrary fluorescent biological colors, conventional element colors can be useful at atomic scale because they carry standardized chemical meaning.

Additional elements should follow an explicitly declared atom-color convention when atomic representation is active.

---

# 16. Single and double covalent bonds

## 16.1 Single bond

A typical single covalent bond shares one electron pair.

Rotation around many single-bond axes is possible.

This gives chains conformational flexibility.

## 16.2 Double bond

A double bond shares two electron pairs.

Compared with a corresponding single bond, a double bond is:

- shorter
- stronger
- more rigid
- restrictive of rotation

Figure 2–10 contrasts:

- ethane: C–C single bond; groups can rotate
- ethene: C=C double bond; arrangement becomes planar and rotation is prevented

### Core visualization rule

A double bond must not be rendered as if it were a free torsional hinge.

Bond order affects both geometry and dynamics.

---

# 17. Resonance / intermediate bond character

**Status: `SOURCE_FACT`**

Some bonding arrangements cannot be described accurately as one fixed pattern of alternating single and double bonds.

The chapter uses benzene and alternating double-bond systems to introduce electron delocalization / resonance.

The real structure is intermediate between simple alternate-bond drawings.

### `DO_NOT_INFER`

A line-bond drawing is a representation.

It does not always imply localized electron pairs exactly as drawn.

---

# 18. Polar covalent bonds

## 18.1 Unequal sharing

**Status: `SOURCE_FACT`**

When covalently bonded atoms attract the shared electrons unequally, the bond is polar.

The result is a partial charge separation:

- partial positive: δ+
- partial negative: δ-

## 18.2 Electronegativity

Electronegativity measures the tendency of an atom to attract shared electrons.

Source values:

- O: 3.4
- N: 3.0
- C: 2.6
- H: 2.1

## 18.3 Examples

O–H and N–H bonds are polar.

C–H is relatively nonpolar because carbon and hydrogen have closer electronegativities.

O2 is nonpolar because identical atoms share electrons equally.

Water has partial negative character around oxygen and partial positive character around hydrogens.

---

# 19. Covalent-bond strength

## 19.1 Energy units

Bond strength is expressed as energy required to break one mole of such bonds.

Common units:

- kcal/mol
- kJ/mol

Conversion used by the chapter:

```text
1 kcal ≈ 4.2 kJ
```

## 19.2 Thermal stability

Typical covalent bonds are about 100 times stronger than the energy associated with ordinary thermal molecular collisions under cellular conditions.

Therefore thermal motion does not routinely tear cellular molecules apart at covalent bonds.

Covalent bond breaking in cells normally occurs through controlled chemical reactions, often enzyme-catalyzed.

---

# 20. Approximate bond table from Chapter 2

**Status: `SOURCE_SCALE`**

The chapter explicitly notes that values vary with the atoms involved.

| Interaction | Approx. length | Strength in vacuum | Strength in water |
|---|---:|---:|---:|
| Covalent | 0.10 nm | 377 kJ/mol (~90 kcal/mol) | 377 kJ/mol |
| Ionic / electrostatic | 0.25 nm | 335 kJ/mol (~80 kcal/mol) | 12.6 kJ/mol (~3 kcal/mol) |
| Hydrogen bond | 0.17 nm | 16.7 kJ/mol (~4 kcal/mol) | 4.2 kJ/mol (~1 kcal/mol) |
| van der Waals attraction per atom | 0.35 nm | 0.4 kJ/mol (~0.1 kcal/mol) | 0.4 kJ/mol |

### Critical rule

The surrounding medium matters enormously.

A noncovalent interaction cannot be assigned a single universal strength independent of environment.

---

# 21. Ionic bonding

## 21.1 Electron transfer

**Status: `SOURCE_FACT`**

When electronegativity differences are sufficiently strong, electron transfer can occur.

Example:

```text
Na → loses electron → Na+
Cl → gains electron → Cl-
```

## 21.2 Ion terminology

- cation = positive ion
- anion = negative ion

## 21.3 Ionic bond

Oppositely charged ions attract electrostatically.

In crystalline NaCl, the structure is not isolated Na–Cl pairs; each ion interacts with multiple oppositely charged neighbors in a three-dimensional lattice.

**Status: `SOURCE_SCALE`**

A 1 mm NaCl crystal contains on the order of:

```text
~2 × 10^19 Na+ ions
~2 × 10^19 Cl- ions
```

---

# 22. Ions in water

Polar water molecules strongly interact with ions.

Many salts therefore dissolve and dissociate in water.

Hydration surrounds individual ions.

Examples of biologically important inorganic ions introduced:

- Na+
- K+
- Cl-
- Ca2+

Their detailed biological roles are deferred largely to Chapter 12.

### Project rule

If an ion is explicitly represented in aqueous cytosol:

```text
ion != dry isolated charged sphere in vacuum
```

Its behavior is shaped by hydration, other ions, and electrostatic screening.

---

# 23. Water is the dominant chemical environment

**Status: `SOURCE_SCALE`**

Water accounts for approximately:

```text
~70% of cell mass
```

Most intracellular chemistry occurs in water.

Therefore the chemistry of life is inseparable from water's polarity and hydrogen-bonding behavior.

---

# 24. Water polarity

A water molecule is electrically neutral overall but has asymmetric electron density.

Oxygen attracts the shared electrons more strongly.

Therefore:

- oxygen side: partial negative regions
- hydrogen side: partial positive regions

Panel 2–2 describes the electron distribution using an approximately tetrahedral picture, with two positive H directions and two electron-rich directions.

### `DO_NOT_INFER`

"Neutral molecule" does not mean "no local charge distribution."

---

# 25. Hydrogen bonds

## 25.1 Definition

A hydrogen bond can form when a hydrogen carrying partial positive charge because it is covalently attached in a polar bond approaches an electron-attracting atom with partial negative character, commonly O or N.

## 25.2 Donor and acceptor

- donor = electronegative atom covalently bearing the H
- acceptor = electronegative atom interacting with that H

Chapter examples include:

```text
O–H···O
O–H···N
N–H···O
N–H···N
```

## 25.3 Geometry

Hydrogen bonds are strongest when donor-H-acceptor atoms are approximately aligned in a straight line.

## 25.4 Water network

Each water molecule can participate in multiple transient hydrogen bonds.

The network is continuously forming and breaking under thermal motion.

This hydrogen-bond network contributes to water being a liquid at room temperature and to:

- high surface tension
- high specific heat capacity
- high heat of vaporization

## 25.5 Biological intramolecular hydrogen bonds

Hydrogen bonds can form within a large molecule and help stabilize folded shapes.

Examples later include:

- proteins
- RNA
- DNA base pairs

---

# 26. Hydrogen bonds in water are competitive

Panel 2–3 makes a crucial point:

Atoms capable of hydrogen-bonding to one another are also capable of hydrogen-bonding to water.

Therefore a direct hydrogen bond between two biological groups in water competes with alternative interactions with surrounding water molecules.

### Project constraint

Binding energy cannot be visualized as if a single hydrogen-bond line acts in vacuum.

The solvent context matters.

---

# 27. Hydrophilic versus hydrophobic

## 27.1 Hydrophilic

Hydrophilic substances interact favorably with water.

This includes:

- ions
- many polar molecules
- sugars
- DNA
- RNA
- many proteins

Water can surround them through:

- charge interactions
- hydrogen bonding

## 27.2 Hydrophobic

Hydrophobic substances:

- contain a predominance of nonpolar bonding
- form few or no favorable hydrogen bonds with water
- tend to be poorly soluble in water

Hydrocarbon-rich groups are strongly hydrophobic.

### Critical rule

Hydrophobicity is not itself an intrinsic "attraction between oil molecules."

It emerges from the energetic organization of the aqueous environment.

---

# 28. Four weak interaction classes relevant to biology

The chapter distinguishes four effects that bring cellular molecules together.

Three are treated as noncovalent bonds:

1. hydrogen bonds
2. electrostatic attractions
3. van der Waals attractions

The fourth is:

4. hydrophobic force

The hydrophobic force is explicitly described as not literally a bond.

---

# 29. Electrostatic attractions

## 29.1 Full and partial charges

Electrostatic attraction occurs between:

- fully charged ions/groups
- partially charged regions on polar molecules

## 29.2 Distance dependence

Attraction decreases rapidly as separation increases.

## 29.3 Water weakens electrostatics

Polar water molecules interact with charged groups and shield them.

Dissolved inorganic ions can cluster around charges and weaken electrostatic interactions further.

### Project rule

Do not implement electrostatics as if cytosol were vacuum.

---

# 30. van der Waals attractions

## 30.1 Origin

**Status: `SOURCE_FACT`**

Transient fluctuations in electron distribution can create weak short-range attractions between nearby atoms.

These interactions occur even between nonpolar atoms.

## 30.2 Contact geometry

If atoms come too close, strong repulsion develops.

This allows atoms to be treated approximately as spheres with characteristic van der Waals radii.

Panel 2–3 gives:

| Atom | van der Waals radius |
|---|---:|
| H | ~0.12 nm |
| C | ~0.20 nm |
| N | ~0.15 nm |
| O | ~0.14 nm |

The contact distance between two noncovalently bonded atoms is approximately the sum of their radii.

## 30.3 Carbon distance examples

Panel 2–3:

- two nonbonded carbon atoms: ~0.40 nm center-to-center
- two carbons in single covalent bond: ~0.15 nm
- two carbons in double covalent bond: ~0.13 nm

### Project constraint

Atomic-scale rendering must prevent impossible steric overlap.

A collision / steric system needs chemically meaningful exclusion radii when realism is claimed.

---

# 31. Hydrophobic force

## 31.1 Mechanism at chapter level

Water's hydrogen-bond network is disrupted by exposed nonpolar surfaces.

Bringing hydrophobic surfaces together reduces their exposure to water.

Thus hydrophobic groups tend to cluster.

The source emphasizes:

> the apparent attraction is actually driven by exclusion from water.

## 31.2 Biological importance

Hydrophobic forces contribute strongly to:

- membrane self-assembly
- macromolecular folding
- molecular association

### `DO_NOT_INFER`

Do not draw a literal spring/bond between two hydrophobic groups and call it a "hydrophobic bond" without qualification.

---

# 32. Acids, bases, H+, hydronium, hydroxyl

## 32.1 Proton transfer in water

**Status: `SOURCE_FACT`**

A proton released in water is normally associated with water molecules.

The chapter writes the relevant species as hydronium:

```text
H3O+
```

but notes that biological chemistry conventionally abbreviates aqueous proton concentration as `[H+]`.

## 32.2 Dynamic exchange

Protons are transferred rapidly among water molecules and solutes.

Pure water continuously forms small amounts of:

- H3O+
- OH-

and these recombine.

---

# 33. Acid

A substance that donates protons in water and thereby increases hydronium / H+ concentration is an acid.

## 33.1 Strong acid example

HCl releases protons readily.

## 33.2 Weak acid example

Acetic acid releases protons incompletely.

Carboxyl groups are important weak acids in cellular chemistry:

```text
–COOH ⇌ –COO- + H+
```

---

# 34. Base

A base reduces free H+ concentration by accepting protons or generating OH- that combines with H+.

## 34.1 Strong base example

NaOH dissociates into:

- Na+
- OH-

## 34.2 Weak base example

Amino groups can accept protons:

```text
–NH2 + H+ ⇌ –NH3+
```

The text also expresses base action through the water equilibrium.

---

# 35. pH

## 35.1 Definition

Panel 2–2:

```text
pH = -log10[H+]
```

## 35.2 Neutral water

**Status: `SOURCE_SCALE`**

At neutral water conditions described:

```text
[H+] = 10^-7 M
[OH-] = 10^-7 M
pH = 7
```

## 35.3 Water-ion relationship

Figure 2–16 gives:

```text
[H+] × [OH-] = 10^-14 (mol/L)^2
```

within the chapter's standard treatment.

## 35.4 Direction

- lower pH → more acidic → higher H+
- higher pH → more basic → lower H+

The pH scale is logarithmic.

### Project consequence

A pH change of one unit is not a linear visual increment.

It represents a tenfold change in H+ concentration.

---

# 36. Buffers

Cells maintain pH near appropriate values using buffers.

A buffer is a mixture of weak acid/base forms that can:

- release H+ when proton concentration falls
- bind H+ when proton concentration rises

This resists large changes in pH.

### Project rule

When later visualizing proton chemistry, do not imply that a cell contains one fixed immutable pH value independent of compartment.

Chapter 2 introduces general buffering; compartment-specific pH must come from later verified sources.

---

# 37. Carbon chemistry

## 37.1 Carbon's central role

Ignoring water, nearly all major cellular molecules are carbon based.

Carbon can form:

- four covalent bonds
- stable C–C bonds
- long chains
- branches
- rings

There is no simple upper size limit imposed by carbon skeleton formation.

Such carbon-containing molecules are organic molecules.

---

# 38. Common chemical groups

Chapter 2 introduces recurring chemical groups that strongly affect molecular behavior.

Core groups include:

- methyl: `–CH3`
- hydroxyl: `–OH`
- carboxyl: `–COOH` / `–COO-`
- carbonyl: `C=O`
- phosphoryl / phosphate-containing group
- amino: `–NH2` / protonated forms
- sulfhydryl: `–SH`

### Project rule

At chemical-detail scale, chemical groups must not be visually interchangeable.

A methyl group and a hydroxyl group have radically different interaction behavior even if their graphical size is similar.

---

# 39. Carbon skeletons

Panel 2–1 hard-codes three common carbon architectures:

```text
chains
branched structures
rings
```

Carbon skeleton shape becomes the structural frame on which functional groups are placed.

---

# 40. Hydrocarbons / C–H compounds

Carbon and hydrogen have similar electronegativities.

C–H-rich structures are therefore relatively nonpolar.

Hydrocarbon groups:

- do not hydrogen-bond effectively with water
- are generally hydrophobic / water-insoluble

Examples:

- methane
- methyl group
- fatty-acid hydrocarbon tail

---

# 41. C–O chemistry

Panel 2–1 distinguishes:

## 41.1 Alcohol

Contains hydroxyl:

```text
C–OH
```

## 41.2 Aldehyde

Terminal carbonyl-containing group.

## 41.3 Ketone

Internal carbonyl-containing group.

## 41.4 Carboxylic acid

```text
–COOH
```

Can lose H+ in water to produce:

```text
–COO-
```

## 41.5 Ester

Formed by combining an acid with an alcohol via condensation.

Esters are important in lipid chemistry.

---

# 42. C–N chemistry

## 42.1 Amine

Amines can bind H+ in water and become positively charged.

## 42.2 Amide

Amides form from acid + amine chemistry.

Unlike amines, amide nitrogen is uncharged in water in the chapter-level treatment.

The peptide bond is an amide linkage.

## 42.3 Nitrogen-containing rings

Nitrogen occurs in ring systems including:

- pyrimidines
- purines

which form nucleotide bases.

---

# 43. Sulfhydryl and disulfide

A sulfhydryl group:

```text
–SH
```

is present in cysteine.

Two cysteine sulfhydryl groups can form an oxidized disulfide cross-link:

```text
–S–S–
```

### `LATER_CHAPTER_REFINEMENT`

Chapter 4 will establish how disulfide bonds influence protein structure and cellular context.

---

# 44. Phosphate chemistry

## 44.1 Inorganic phosphate

Phosphate derives from phosphoric acid and is stable as an ion under cellular conditions.

## 44.2 Phosphate ester

A phosphate can form a covalent ester bond with a hydroxyl group.

Proteins can be covalently phosphorylated through such linkages.

## 44.3 Acid anhydrides involving phosphate

Chapter 2 depicts:

- acyl phosphate bond
- phosphoanhydride bond

and refers to these using the conventional phrase `"high-energy" bond` because hydrolysis of compounds containing them can release substantial free energy.

### Critical project guardrail

**Status: `LATER_CHAPTER_REFINEMENT` / `DO_NOT_INFER`**

Do not implement a literal visual rule:

```text
break bond → energy stored inside bond flies out
```

Chapter 3 must define the thermodynamic explanation.

For now hard-code only:

```text
certain phosphate-containing compounds
have high group-transfer potential / favorable hydrolysis
and participate in cellular energy coupling
```

until the Chapter 3 canon replaces the simplified visual story.

---

# 45. Four major families of small organic molecules

Chapter 2 identifies four major small-organic-molecule families:

1. sugars
2. fatty acids
3. amino acids
4. nucleotides

They serve as:

- building blocks
- energy sources
- chemical intermediates
- precursors
- signaling / carrier molecules

and they give rise to major cellular macromolecules and assemblies.

---

# 46. Small-molecule scale and diversity

**Status: `SOURCE_SCALE`**

The chapter characterizes many small cellular organic molecules as:

- ~100–1000 Da
- up to roughly ~30 carbon atoms

They account for only a minority of total organic mass but exhibit huge chemical diversity.

In *E. coli*, the text states that nearly:

```text
~4000 kinds of small organic molecules
```

have been detected.

### `VERIFY_QUANT`

This is a textbook orientation value tied to a well-studied bacterium, not a universal small-molecule count for all cells.

---

# 47. Bacterial-cell chemical composition table

**Status: `SOURCE_SCALE`**

Chapter 2 gives an approximate bacterial-cell composition:

| Substance | % total cell weight | Approx. number of types |
|---|---:|---:|
| Water | 70 | 1 |
| Inorganic ions | 1 | 20 |
| Sugars + precursors | 1 | 250 |
| Amino acids + precursors | 0.4 | 100 |
| Nucleotides + precursors | 0.4 | 100 |
| Fatty acids + precursors | 1 | 50 |
| Other small molecules | 0.2 | 3000 |
| Phospholipids | 2 | 4 classes, many variants |
| Macromolecules: nucleic acids, proteins, polysaccharides | 24 | ~3000 |

### `VERIFY_QUANT`

Treat as representative educational composition of a bacterial cell, not a universal species-independent composition.

---

# 48. Sugars — monosaccharides

## 48.1 General formula

Common monosaccharides are represented as:

```text
(CH2O)n
```

where `n` is often:

- 3
- 4
- 5
- 6

Glucose:

```text
C6H12O6
```

## 48.2 Aldose versus ketose

Monosaccharides can contain:

- aldehyde group → aldose
- ketone group → ketose

---

# 49. Sugar examples from Panel 2–4

The panel organizes representative monosaccharides by carbon number and carbonyl class.

## Aldoses

- glyceraldehyde — 3-carbon triose
- ribose — 5-carbon pentose
- glucose — 6-carbon hexose

## Ketoses

- dihydroxyacetone — 3-carbon ketose
- ribulose — 5-carbon ketose
- fructose — 6-carbon ketose

---

# 50. Sugar ring formation

In aqueous solution, the aldehyde or ketone of many sugars reacts intramolecularly with one of the molecule's hydroxyl groups.

This closes the molecule into a ring.

Panel 2–4 explicitly illustrates ring formation for:

- glucose
- ribose

### Project constraint

Do not assume sugars exist only as open linear chains.

At biologically relevant aqueous conditions, ring forms are central.

---

# 51. Sugar isomers

## 51.1 Structural / stereochemical isomers

Molecules can have the same molecular formula but different structures.

Example:

```text
glucose
mannose
galactose
```

all have:

```text
C6H12O6
```

but differ in spatial arrangement around selected carbon atoms.

## 51.2 Biological consequence

Small stereochemical differences may cause relatively modest changes in bulk chemistry yet be strongly recognized by enzymes and binding proteins.

### Core project rule

At molecular recognition scale:

```text
same atomic formula
does not imply biological interchangeability.
```

---

# 52. Optical isomers

Chapter 2 introduces mirror-image stereoisomers.

For relevant molecules:

```text
D form
L form
```

are mirror images.

This principle later becomes critical for amino acids.

---

# 53. Alpha and beta sugar forms

For cyclic sugars, the hydroxyl on the carbon derived from the carbonyl can occupy alternative configurations termed:

```text
α
β
```

Before glycosidic linkage these forms can interconvert.

Once a sugar is linked into a glycosidic bond, the α or β configuration at that linkage is fixed.

### Project constraint

A glycosidic linkage must preserve stereochemical identity.

It is not just "connect sugar A to sugar B."

---

# 54. Sugar derivatives

Panel 2–4 includes:

- glucosamine
- N-acetylglucosamine
- glucuronic acid

These illustrate that hydroxyl groups on sugars can be replaced / chemically modified to produce diverse derivatives.

---

# 55. Glycosidic bonds

Monosaccharides can be covalently linked through glycosidic bonds.

Two linked monosaccharides form a disaccharide.

Panel examples:

- maltose = glucose + glucose
- lactose = galactose + glucose
- sucrose = glucose + fructose

Sucrose formation is shown as a condensation reaction with release of water.

---

# 56. Oligosaccharides and polysaccharides

## 56.1 Oligosaccharide

The main text gives typical small chains of around 2–10 sugar monomers.

## 56.2 Polysaccharide

Longer chains can contain hundreds or thousands of sugar subunits.

Polymers can be:

- linear
- branched

## 56.3 Glycogen

Glycogen is a branched glucose polysaccharide used in animals as a glucose reserve.

## 56.4 Starch

Starch is a plant glucose-storage polysaccharide.

---

# 57. Structural polysaccharides

## 57.1 Cellulose

The chapter describes cellulose as:

- a glucose polysaccharide
- the major structural organic material of plant cell walls
- the most abundant organic molecule/material discussed in this context on Earth

## 57.2 Chitin

Chitin is:

- a polysaccharide
- a linear polymer of N-acetylglucosamine
- found in insect exoskeletons
- found in fungal cell walls

---

# 58. Complex oligosaccharides and cell surfaces

Short, nonrepetitive sugar sequences can create very diverse molecular identities.

Oligosaccharides can attach covalently to:

- proteins → glycoproteins
- lipids → glycolipids

Functions introduced include:

- protection of cell surface
- cell-cell adhesion
- cell-surface identity

Differences in cell-surface sugar structures underlie human blood-group molecular distinctions.

### Project rule

Cell-surface carbohydrate chains must not be represented as meaningless identical decorations when the interaction being taught depends on glycan identity.

---

# 59. Condensation and hydrolysis

## 59.1 Condensation

Two smaller molecules become covalently linked while water is released.

General conceptual pattern:

```text
A–OH + H–B
→ A–B + H2O
```

This is used to build:

- glycosidic bonds
- peptide bonds
- many polymer backbones

## 59.2 Hydrolysis

The reverse reaction uses water to break the bond.

```text
A–B + H2O
→ A–OH + H–B
```

## 59.3 Energetic direction at Chapter 2 level

The text describes:

- polymer-forming condensation reactions as energetically unfavorable
- hydrolysis as generally energetically favorable

### `LATER_CHAPTER_REFINEMENT`

Chapter 3 must define how cells couple unfavorable polymer synthesis to favorable energy-releasing chemistry.

Do not make "water loss" itself the source of energy.

---

# 60. Glucose as energy source

Glucose has a central role as an energy source.

It can be broken down through multistep reaction pathways.

The released chemical free energy can be captured for cellular work.

Detailed mechanism is deferred to Chapters 3 and 13.

---

# 61. Fatty acids

## 61.1 Two-region architecture

A fatty acid consists of:

```text
hydrophilic carboxyl head
+
hydrophobic hydrocarbon tail
```

Therefore fatty acids are amphipathic.

At about pH 7, a free fatty-acid carboxyl group is shown in ionized form:

```text
–COO-
```

In cells, fatty acids are often covalently linked to other molecules through this carboxyl group.

---

# 62. Fatty-acid examples

Panel 2–5:

- palmitic acid: C16 saturated
- stearic acid: C18 saturated
- oleic acid: C18 unsaturated

Hundreds of fatty-acid types exist.

They differ principally in:

- hydrocarbon-chain length
- number of double bonds
- position of double bonds

---

# 63. Saturated versus unsaturated fatty acids

## Saturated

No carbon-carbon double bonds in the hydrocarbon chain.

Contains the maximum hydrogen complement for that carbon skeleton.

## Unsaturated

Contains one or more C=C double bonds.

A cis-like double-bond geometry shown in the source introduces a rigid kink and reduces packing efficiency.

### Membrane consequence

Fatty-acid packing affects membrane fluidity.

Detailed membrane-fluidity control belongs in Chapter 11.

---

# 64. Fatty acids as energy reserve

**Status: `SOURCE_SCALE`**

The chapter states that gram-for-gram fatty-acid breakdown can yield roughly:

```text
~6× as much usable energy as glucose
```

in the comparison given.

Fatty acids can be stored in triacylglycerol droplets.

During energy mobilization, fatty acids can be released and broken into two-carbon units that feed energy-yielding metabolism.

Detailed metabolism is deferred to Chapter 13.

---

# 65. Lipids

The chapter uses a broad operational definition:

Lipids are molecules that are:

- poorly soluble / insoluble in water
- soluble in fats or organic solvents

Common lipid architectures include:

- long hydrocarbon chains
- linked ring systems
- isoprenoid-based structures

---

# 66. Triacylglycerols

Triacylglycerol contains:

```text
glycerol
+
3 fatty-acid chains
```

connected through ester linkages.

They form:

- animal fats
- plant oils
- intracellular fat droplets

Panel 2–5 depicts cellular fat droplets as large aggregates.

**Status: `SOURCE_SCALE`**

Illustrated droplets:

```text
~200 nm or more
```

### Project constraint

A fat droplet is an aggregate / cellular structure composed of many molecules.

It is not a single giant triacylglycerol molecule.

---

# 67. Phospholipids

## 67.1 Basic architecture

The main example is glycerol-based phospholipid:

```text
glycerol
├── fatty acid tail
├── fatty acid tail
└── phosphate-containing hydrophilic head
```

The phosphate can be attached to a polar group such as choline.

## 67.2 Amphipathic character

Phospholipids have:

- hydrophilic head
- two hydrophobic tails

## 67.3 Phosphatidylcholine

The chapter identifies phosphatidylcholine as a common membrane phospholipid example.

---

# 68. Lipid self-assembly

## 68.1 Fatty-acid assemblies

In water, fatty acids can form:

- surface films
- small spherical micelles

## 68.2 Triacylglycerols

Primarily hydrophobic triacylglycerols assemble into large fat droplets.

## 68.3 Phospholipids / glycolipids

These can form self-sealing lipid bilayers.

The bilayer forms because hydrophobic regions are buried away from water while hydrophilic regions remain exposed to water.

**Status: `SOURCE_SCALE`**

Panel 2–5 illustrates a bilayer thickness of approximately:

```text
~4 nm
```

### `VERIFY_QUANT`

Use Chapter 11 and quantitative sources before making 4 nm a universal fixed membrane thickness.

---

# 69. Membrane topology consequence

At molecular scale a bilayer has:

```text
aqueous phase
hydrophilic heads
hydrophobic core
hydrophilic heads
aqueous phase
```

### Critical project rule

Do not depict a phospholipid membrane as:

- a single solid sheet
- a glowing shell with no molecular interior
- heads and tails randomly mixed
- hydrophobic tails exposed directly to bulk water under equilibrium conditions

when the molecular structure is explicitly resolved.

---

# 70. Glycolipids

Glycolipids are amphipathic lipids containing:

- hydrophobic region with hydrocarbon tails
- polar region containing one or more sugars
- no phosphate group in the simplified comparison shown

They contribute to membranes and surface carbohydrate chemistry.

---

# 71. Steroids

Steroids have a characteristic multiple-ring carbon skeleton.

Panel examples:

- cholesterol — found in many cell membranes
- testosterone — male sex hormone example

### `LATER_CHAPTER_REFINEMENT`

Membrane cholesterol behavior and steroid signaling should wait for later chapter / verified context.

---

# 72. Polyisoprenoids

Polyisoprenoids are long-chain polymers constructed from isoprene units.

Panel example:

- dolichol phosphate

The panel notes a role for dolichol phosphate in carrying activated sugars during membrane-associated synthesis of glycoproteins and some polysaccharides.

---

# 73. Amino-acid general structure

Each protein amino acid has a central α-carbon attached to:

- amino group
- carboxyl group
- hydrogen
- side chain `R`

At approximately pH 7, free amino acids are shown in ionized / zwitterionic form.

### Important distinction

When amino acids become part of a polypeptide, the backbone amino/carboxyl groups participate in peptide bonds and do not retain the same free-group charges as isolated amino acids.

---

# 74. Amino-acid chirality

Except for glycine, the α-carbon is asymmetric in the chapter's treatment and amino acids have D and L mirror-image forms.

Proteins are constructed from:

```text
L-amino acids
```

The text notes exceptions to "D amino acids do not occur biologically":

- D-amino acids can occur in bacterial cell walls
- some antibiotics contain D-amino acids
- D-serine is used as a signal molecule in the brain

### `DO_NOT_INFER`

"Proteins use L-amino acids" does not mean "D-amino acids do not exist in cells."

---

# 75. The 20 amino acids used in proteins

Panel 2–6 groups the standard amino acids according to side-chain properties.

## 75.1 Basic side chains

### Lysine
- Lys
- K
- positively charged/basic side chain under relevant conditions

### Arginine
- Arg
- R
- strongly basic guanidinium-like group
- positive charge stabilized by resonance

### Histidine
- His
- H
- ring nitrogens have relatively weak H+ affinity
- only partly positively charged around neutral pH in the panel's description

---

# 76. Acidic side chains

### Aspartic acid
- Asp
- D
- negatively charged carboxylate side chain at neutral cellular pH

### Glutamic acid
- Glu
- E
- negatively charged carboxylate side chain at neutral cellular pH

---

# 77. Uncharged polar side chains

Panel 2–6 places these in the uncharged-polar category:

### Asparagine
- Asn
- N
- amide-containing side chain

### Glutamine
- Gln
- Q
- amide-containing side chain

The panel explicitly notes that amide nitrogen is not charged at neutral pH but the amide group is polar.

### Serine
- Ser
- S
- hydroxyl-containing

### Threonine
- Thr
- T
- hydroxyl-containing

### Tyrosine
- Tyr
- Y
- phenolic hydroxyl-containing

---

# 78. Nonpolar side chains

Panel 2–6 places the following in the nonpolar category:

### Glycine
- Gly
- G
- side chain is H

### Alanine
- Ala
- A
- methyl side chain

### Valine
- Val
- V

### Leucine
- Leu
- L

### Isoleucine
- Ile
- I

### Proline
- Pro
- P
- cyclic backbone connection
- panel notes it is technically an imino acid

### Phenylalanine
- Phe
- F
- aromatic side chain

### Methionine
- Met
- M
- sulfur-containing thioether side chain

### Tryptophan
- Trp
- W
- aromatic heterocyclic side chain

### Cysteine
- Cys
- C
- sulfhydryl side chain
- can form disulfide bond with another cysteine

---

# 79. Amino-acid property summary

The main text emphasizes:

- 5 of the 20 standard amino acids have side chains that can carry ionic charge in the simplified categorization
- other side chains are uncharged
- some are polar/hydrophilic
- some are nonpolar/hydrophobic

### Project rule

At protein-detail scale, side chains cannot all be rendered as chemically equivalent beads if the visualization claims to explain:

- folding
- binding
- catalysis
- membrane insertion
- charge recognition

A bead model may be used only if its coarse-grained chemistry remains encoded in metadata / interaction rules.

---

# 80. Peptide bond

## 80.1 Formation

Amino acids are covalently joined via condensation to form an amide linkage called a peptide bond.

## 80.2 Chain directionality

A polypeptide has:

- N-terminus
- C-terminus

The sequence is conventionally read:

```text
N → C
```

The difference between ends gives the chain structural polarity / directionality.

## 80.3 Planarity

Panel 2–6 states that the atoms of the peptide-bond unit form a rigid planar arrangement.

Rotation does not occur freely around the peptide C–N bond.

Adjacent single bonds permit backbone flexibility.

### Project constraint

A protein backbone must not be animated as a freely jointed chain at the peptide C–N bond.

---

# 81. Peptide versus protein

Panel 2–6 uses a practical convention:

- peptide: shorter chain, usually fewer than ~50 amino acids
- protein: longer amino-acid polymer / functional macromolecule

This is a teaching convention, not an absolute physical boundary.

---

# 82. Nucleotides

## 82.1 Components

A nucleotide contains:

```text
nitrogen-containing base
+
five-carbon sugar
+
phosphate
```

## 82.2 Nucleoside

A nucleoside is:

```text
base + sugar
```

with no phosphate.

### `DO_NOT_INFER`

Nucleoside and nucleotide are not interchangeable terms.

---

# 83. Nucleotide sugars

Two pentose sugars are central:

## RNA

```text
β-D-ribose
```

## DNA

```text
β-D-2-deoxyribose
```

The key chemical distinction introduced:

At the 2′ carbon:

- ribose: hydroxyl `–OH`
- deoxyribose: hydrogen `–H`

### Critical project rule

DNA contains **deoxyribose**, not ribose.

This was already identified as a critical terminology guardrail in the Scale Spine.

---

# 84. Sugar carbon numbering

Nucleotide sugar carbons are numbered with prime notation:

```text
1′
2′
3′
4′
5′
```

The base is attached to the 1′ carbon.

Phosphate groups commonly attach to the 5′ hydroxyl.

### Project consequence

When nucleotide chemistry is shown explicitly, prime notation and connectivity must be correct.

---

# 85. N-glycosidic base–sugar linkage

The nitrogenous base connects to the sugar through an N-glycosidic bond at the sugar's 1′ carbon.

This relationship is distinct from phosphate linkage.

---

# 86. Nitrogenous bases

## Pyrimidines

Single six-membered ring family:

- cytosine (C)
- thymine (T)
- uracil (U)

## Purines

Fused six-membered + five-membered ring family:

- adenine (A)
- guanine (G)

---

# 87. Nucleotide phosphate states

Nucleoside phosphates commonly occur as:

- monophosphate
- diphosphate
- triphosphate

Examples:

- AMP
- ADP
- ATP

The phosphate groups give nucleotides substantial negative charge.

---

# 88. Nucleotide nomenclature

Panel 2–7:

| Base | Nucleoside | One-letter base symbol |
|---|---|---|
| adenine | adenosine | A |
| guanine | guanosine | G |
| cytosine | cytidine | C |
| uracil | uridine | U |
| thymine | thymidine | T |

Examples of derivative abbreviations:

- AMP = adenosine monophosphate
- dAMP = deoxyadenosine monophosphate
- UDP = uridine diphosphate
- ATP = adenosine triphosphate

---

# 89. ATP

## 89.1 Chemical identity

ATP is:

```text
adenine
+ ribose
+ three phosphate groups
```

Therefore ATP is a **ribonucleotide derivative**, not a generic abstract "energy molecule."

## 89.2 Bonds

The phosphate chain contains phosphoanhydride linkages.

## 89.3 Role introduced here

ATP participates in energy transfer in hundreds of cellular reactions.

The chapter presents a cycle:

```text
ADP + phosphate + energy input
→ ATP

ATP + H2O
→ ADP + phosphate + available free energy
```

Energy input can ultimately derive from:

- oxidation of food
- capture of light

## 89.4 Group transfer

Frequently, the terminal phosphate is removed or transferred to another molecule.

### Critical guardrail

Do not show ATP as a luminous particle containing a visible packet of "energy."

Its usefulness comes from chemical reaction thermodynamics and coupling, to be defined in Chapter 3.

---

# 90. Other nucleotide-derived functions

Panel 2–7 gives three major non-polymer roles for nucleotide derivatives.

## 90.1 Energy carrier

Example:

- ATP

## 90.2 Coenzyme component

Example:

- coenzyme A (CoA)

## 90.3 Intracellular signaling molecule

Example:

- cyclic AMP (cAMP)

### Project consequence

The visual ontology should not restrict "nucleotide" to DNA/RNA monomer.

Nucleotide derivatives participate broadly in metabolism and signaling.

---

# 91. Nucleic-acid polymerization

Nucleotides are linked by covalent phosphodiester bonds.

The bond connects the 5′ and 3′ sugar positions of adjacent nucleotides.

This creates chain directionality:

```text
5′ end
→
3′ end
```

A sequence is conventionally written/read beginning at the 5′ end.

Example shown:

```text
GATC
```

---

# 92. RNA

RNA:

- contains ribose
- uses bases A, G, C, U
- usually occurs as a single polynucleotide chain in cells
- can fold into diverse structures through intramolecular interactions

### `DO_NOT_INFER`

"Single stranded" does not mean "straight floppy line with no structure."

Many RNAs form highly structured folded conformations.

---

# 93. DNA

DNA:

- contains 2-deoxyribose
- uses bases A, G, C, T
- is usually double stranded in the source's broad description
- consists of two polynucleotide chains running in opposite directions
- is held together noncovalently by hydrogen bonding among paired bases

### Base pairing introduced

```text
G ↔ C
A ↔ T in DNA
A ↔ U in RNA contexts
```

### `LATER_CHAPTER_REFINEMENT`

Chapter 5 must define:

- exact base-pair geometry
- double-helix organization
- antiparallel polarity
- grooves
- dimensions
- nucleosome/chromatin context

---

# 94. DNA versus RNA information roles

Chapter 2 gives a broad functional distinction:

- DNA: comparatively stable long-term repository of hereditary information
- RNA: often more transient carrier / functional molecule

### `DO_NOT_INFER`

Do not reduce all RNA to transient messenger RNA.

Chapter 1 and Chapter 2 both acknowledge structural/regulatory/catalytic RNA functions.

---

# 95. Macromolecules dominate dry cell mass

Chapter 2 emphasizes that macromolecules are the most abundant organic molecules by mass and form major structural and functional components of cells.

A bacterial-cell composition figure gives approximately:

```text
70% water
30% other chemicals
```

Within total cell mass:

- small molecules ~3%
- inorganic ions ~1%
- phospholipids ~2%
- DNA ~1%
- RNA ~6%
- protein ~15%
- polysaccharide ~2%

The source says animal-cell composition is broadly similar at this coarse level.

### `VERIFY_QUANT`

Do not hard-code these percentages for every cell type.

---

# 96. Major polymer classes

Chapter 2 maps:

```text
sugar → polysaccharide
amino acid → protein / polypeptide
nucleotide → nucleic acid
```

Lipids are chemically important macromolecular/mesoscale assemblies but are not presented as linear polymers assembled from one repeating monomer type in the same sense.

### Critical validation rule

```text
LIPID BILAYER != ONE GIANT COVALENT MACROMOLECULE
```

It is a noncovalently assembled supramolecular structure.

---

# 97. Macromolecule sequence

Macromolecules are not generally random collections of monomers.

For proteins and nucleic acids, monomers occur in specific linear sequences.

Sequence strongly determines:

- structure
- chemical behavior
- biological function

The cell's polymerization machinery therefore must control which subunit is added next.

---

# 98. Sequence-space magnitude

**Status: `SOURCE_SCALE`**

Source thought experiments:

## Protein

For a chain of 200 amino acids:

```text
20^200 possible sequences
```

## DNA

For 10,000 nucleotide positions:

```text
4^10000 possible sequences
```

The point is combinatorial vastness.

### Project consequence

Do not procedurally randomize sequence-dependent macromolecules while claiming they represent a specific biological molecule.

---

# 99. Polymer growth

The chapter states a general principle that macromolecular chains are extended by adding monomers in repeated enzyme-catalyzed reactions.

The chemistry differs among polymer classes, but the repeated use of standard subunits simplifies construction of enormously complex chains.

### `LATER_CHAPTER_REFINEMENT`

Actual biological polymerization mechanisms differ substantially:

- DNA replication
- transcription
- translation
- polysaccharide synthesis

Later chapters must define each mechanism.

---

# 100. Protein functions introduced

Proteins are presented as the most functionally diverse macromolecular class.

Examples:

## Enzyme

Ribulose 1,5-bisphosphate carboxylase/oxygenase (Rubisco) is cited as a major plant enzyme involved in conversion of CO2 into organic carbon/sugars.

## Structural polymer

Tubulin self-assembles into microtubules.

## DNA packaging

Histones assemble into structures that package DNA in chromosomes.

## Molecular motor

Myosin produces force and movement.

### Project consequence

"Protein" is a chemical class, not a single generic shape.

Representation must depend on actual protein identity and role.

---

# 101. Noncovalent forces control macromolecular conformation

Covalent single bonds in polymer backbones often permit considerable rotational flexibility.

Thermal motion continually samples conformations.

A biological macromolecule nevertheless often adopts a preferred folded state because many noncovalent interactions collectively stabilize selected conformations.

These include:

- electrostatic attractions
- hydrogen bonds
- van der Waals interactions
- hydrophobic force

---

# 102. Conformation

A conformation is the three-dimensional shape adopted by a macromolecule.

For many proteins and RNAs:

```text
linear sequence
+
physical chemistry
→ preferred 3D conformation
```

The chapter emphasizes that evolution selects sequences that adopt useful conformations.

### Project rule

A macromolecule must not be represented as a static geometry disconnected from sequence and interaction physics when the lesson is about folding/dynamics.

---

# 103. Denaturation / loss of noncovalent structure

Figure 2–34 shows that conditions disrupting noncovalent interactions can unfold a macromolecule into a flexible chain and abolish biological activity.

### `LATER_CHAPTER_REFINEMENT`

The detailed causes and reversibility of protein denaturation belong to Chapter 4.

---

# 104. Molecular recognition

## 104.1 Multipoint weak interactions

A single noncovalent interaction is weak.

Many complementary interactions acting simultaneously can create:

- strong binding
- high specificity
- reversible recognition

## 104.2 Shape complementarity

The chapter uses a "hand in glove" logic.

Surfaces that fit poorly form too few interactions and are rapidly separated by thermal motion.

Closely matching surfaces can create enough interactions to remain bound.

## 104.3 Binding-strength continuum

Because binding depends on the number/type of noncovalent contacts, biological associations can span a wide range of affinities.

### Project rule

Specific binding should not be represented merely as two objects "magnetically snapping" because their names match.

At an explanatory molecular scale, the reason for recognition should be traceable to:

```text
shape complementarity
charge complementarity
H-bond donor/acceptor pattern
hydrophobic packing
van der Waals contact
```

---

# 105. Enzyme-substrate recognition

An enzyme may use complementary charged / polar groups to guide a substrate into an appropriate binding position.

Example described:

- positively charged substrate
- negatively charged amino-acid side chain in binding site

Chapter 4 will define enzyme structure and catalysis.

---

# 106. Macromolecular assemblies

Macromolecules can act as building blocks for larger noncovalently assembled structures.

Examples include:

- multiprotein complexes
- molecular machines
- ribosomes
- membraneless subcompartments

Weak interactions allow such assemblies to be:

- specific
- stable enough to function
- reversible / dynamic

---

# 107. Ribosome as an assembly example

Figure 2–36 distinguishes two construction levels:

```text
small monomers
--covalent bonds-->
macromolecules

macromolecules
--noncovalent interactions-->
ribosome
```

The chapter describes a ribosome as containing about:

```text
~90 macromolecules
```

including proteins and RNA molecules.

Figure scale:

```text
~30 nm
```

### `VERIFY_QUANT`

Ribosome composition and dimensions vary among organisms and organelles.

Use Chapter 7 / approved structural data for actual models.

---

# 108. Membraneless organelles / phase-like cellular organization

The chapter notes that weak interactions among macromolecules can drive formation of functional subcompartments and membraneless organelles.

### Project consequence

Not every cellular compartment is bounded by a lipid membrane.

The ontology must support:

```text
membrane-bounded compartment
and
non-membrane macromolecular compartment
```

as distinct categories.

---

# 109. Historical evidence: discovery of macromolecules

This material matters because it shows how physical measurement established the reality of macromolecules.

## 109.1 Early skepticism

In the early twentieth century many chemists doubted that very large biological polymers existed as discrete molecules.

An alternative hypothesis held that proteins/polysaccharides were loose aggregates of smaller molecules held by weak "association forces."

## 109.2 Materials studied

Examples included:

- albumin from egg white
- casein from milk
- collagen / gelatin
- cellulose from wood

These materials behaved unusually in solution, including difficulty passing through fine filters.

## 109.3 Inconsistent early mass estimates

Methods included:

- freezing-point depression
- osmotic pressure

Experimental limitations produced variable estimates.

The source cites cellulose estimates ranging roughly:

```text
6,000–103,000 Da
```

## 109.4 Limits of chemical imagination

At the time, synthetic organic chemistry had produced compounds only around a few thousand daltons.

Many scientists therefore found >4,000 Da molecules difficult to accept.

### Hemoglobin argument

Chemical composition suggested approximately:

- 1 iron atom per ~712 carbon atoms
- minimum mass estimate ~16,700 Da

Emil Fischer, despite discovering peptide linkage chemistry, doubted that polypeptide chains could extend far beyond ~30–40 amino acids.

---

# 110. Ultracentrifuge evidence

## 110.1 Svedberg

Theodor Svedberg developed the ultracentrifuge in the 1920s.

The chapter gives 1925 for his early studies and notes his 1926 Nobel Prize in Chemistry.

## 110.2 Experimental logic

If a protein sample were a heterogeneous loose aggregate, centrifugation should yield a broad distribution / smear.

A population of discrete equal-sized molecules should sediment as a defined boundary or band.

## 110.3 Hemoglobin result

Hemoglobin behaved as a sharp homogeneous population.

The modern figure describes hemoglobin at roughly:

```text
68,000 Da
```

and as a tight complex of:

```text
4 polypeptide chains
```

each containing one iron atom.

## 110.4 Forces

Modern ultracentrifugation can exceed:

```text
500,000 × g
```

in the chapter's description.

## 110.5 Boundary versus band sedimentation

The historical Svedberg experiment used boundary sedimentation in a homogeneous hemoglobin solution.

The modern schematic also shows band sedimentation in a stabilizing sucrose gradient.

### Project relevance

Scientific certainty about scale/structure should be tied to measurement methods.

The project's scientific inspector should eventually preserve:

```text
what is known
how it was measured
measurement context
```

---

# 111. Protein crystallography as additional macromolecule evidence

In the 1930s, researchers obtained pure protein crystals suitable for x-ray diffraction.

The ability to form ordered crystals supported the existence of discrete molecules with reproducible size and shape.

A heterogeneous loose aggregate would not produce the same ordered structural evidence.

Chapter 4 will deepen structural-method details.

---

# 112. Hard visual chemistry rules

The following rules are directly important for The Seamless Cell.

## 112.1 Do not overlap atoms

Resolved atoms have steric radii.

Two nonbonded atoms cannot occupy the same physical volume.

## 112.2 Bond order must affect geometry

Single and double bonds cannot share identical rotational behavior.

## 112.3 Formal and partial charge are different

Do not render:

```text
Na+ full ionic charge
```

as chemically identical to:

```text
δ+ region in polar covalent bond
```

## 112.4 Water is active context

At molecular scale, aqueous environment changes interaction strength and organization.

## 112.5 Hydrophobic association is solvent-mediated

Do not invent a direct "hydrophobic magnet."

## 112.6 Hydrogen bonds are geometric and transient

They depend on donor/acceptor chemistry and favorable orientation.

## 112.7 Molecules can have stereochemistry

Mirror-image / epimeric molecules cannot be collapsed to the same 3D graph.

## 112.8 Native molecular colors are not intrinsic macroscopic colors

Element colors are a visualization convention.

They are acceptable when declared as such.

## 112.9 Macromolecular surface complementarity matters

Binding interfaces should not visibly interpenetrate.

## 112.10 Chemical detail should appear only at appropriate scale

Atoms should not be individually visible at whole-cell scale.

---

# 113. Chemical representation ladder

A possible project representation hierarchy derived from this chapter:

```text
CELLULAR SCALE
chemical identity represented statistically / by compartment

ORGANELLE SCALE
gradients / composition / selected molecular populations

MESOSCALE
membrane bilayers
filaments
macromolecular assemblies

MACROMOLECULAR SCALE
protein/RNA/DNA surfaces
coarse-grained chemical regions
binding interfaces

MOLECULAR SCALE
explicit monomers
chemical groups
bond topology

ATOMIC SCALE
explicit atoms
bond order
formal charge
stereochemistry
H-bond geometry
steric radii
```

### Rule

Never expose atomic detail simply because the renderer technically can.

Representation must answer a biological question.

---

# 114. Molecular motion rules from Chapter 2

At atomic/molecular scale:

- thermal motion is continual
- weak bonds repeatedly form and break
- flexible single bonds allow conformational sampling
- double bonds restrict torsional movement
- water molecules reorganize
- protons exchange rapidly through aqueous networks
- weak molecular encounters can form and dissociate
- strongly complementary multi-contact interfaces can remain bound

### Project constraint

A molecular animation cannot be physically credible if:

- every atom is static
- every weak bond is permanent
- every bond angle is freely deformable
- water is absent while claiming aqueous chemistry
- molecules pass through one another

---

# 115. Source-specific quantitative register

All values below are source-derived and should stay traceable.

| Quantity | Chapter 2 value/context | Status |
|---|---|---|
| H electron-cloud diameter | ~0.1 nm | `SOURCE_SCALE` |
| high-Z atom cloud diameter | ~0.4 nm | `SOURCE_SCALE` |
| carbon nucleus diameter | ~5 × 10^-6 nm | `SOURCE_SCALE` |
| carbon atom diameter | ~0.2 nm | `SOURCE_SCALE` |
| Avogadro number | 6.022 × 10^23 | `SOURCE_SCALE` |
| dominant C/H/N/O mass fraction | ~96% | `SOURCE_SCALE` |
| H–H bond length | 0.074 nm | `SOURCE_SCALE` |
| conventional covalent interaction length table | ~0.10 nm | approximate |
| ionic distance table | ~0.25 nm | approximate |
| hydrogen bond length table | ~0.17 nm | approximate |
| vdW interaction distance table | ~0.35 nm | approximate |
| water in cell by mass | ~70% | broad |
| neutral [H+] | 10^-7 M | chapter standard condition |
| neutral [OH-] | 10^-7 M | chapter standard condition |
| pH neutral water | 7 | chapter standard condition |
| [H+][OH-] | 10^-14 (M^2) | chapter standard treatment |
| small organic molecules | ~100–1000 Da | broad |
| small molecule carbon count | up to ~30 C atoms | broad |
| E. coli small organic species | nearly ~4000 | contextual |
| phospholipid bilayer illustration | ~4 nm | verify later |
| fat-droplet illustration | ~200 nm or more | contextual |
| fatty acid energy vs glucose by mass | ~6× | broad |
| ribosome illustration | ~30 nm | verify by type |
| ribosome components | ~90 macromolecules | context-dependent |
| protein side-chain sequence example | 20^200 possibilities | combinatorial |
| DNA 10,000-nt sequence space | 4^10000 | combinatorial |
| ultracentrifuge force | >500,000 × g | method example |
| hemoglobin modern figure mass | ~68,000 Da | example |
| historical hemoglobin minimum estimate | ~16,700 Da | historical |
| historical cellulose estimates | ~6,000–103,000 Da | historical |

---

# 116. Quantitative verification queue

Before physics-grade or concentration-grade simulation, verify externally:

## Water / solvent

- water activity
- compartment-specific viscosity
- effective dielectric behavior
- proton diffusion
- ionic strength

## Atomistic interactions

- element-specific covalent lengths
- force-field parameters
- van der Waals radii
- partial charges
- H-bond geometry and energy

## pH

- actual pH by compartment
- buffer capacity
- proton concentration by volume

## Membranes

- bilayer thickness by lipid composition
- area per lipid
- lipid diffusion
- cholesterol fraction
- leaflet asymmetry
- membrane bending rigidity

## Metabolites

- ATP concentration
- ADP concentration
- glucose concentration
- amino-acid pools
- ion concentrations

## Macromolecules

- protein concentration
- RNA concentration
- DNA concentration
- ribosome concentration
- crowding fraction

## Molecular motion

- diffusion coefficients
- rotational diffusion
- association / dissociation rates

---

# 117. Chapter 2 figure/panel knowledge to preserve

## Figure 2–1

Atom = tiny nucleus + extended probabilistic electron cloud.

## Figure 2–2

Atomic number set by proton count; isotope changes neutron count.

## Figure 2–3

Mole links atomic/molecular mass in daltons to macroscopic grams.

## Figure 2–4

Living systems have distinctive elemental composition.

## Figure 2–5

Outer-shell filling drives chemical reactivity.

## Figure 2–6

Electron sharing → covalent; electron transfer → ionic.

## Figure 2–8

Stable covalent bond has preferred internuclear distance.

## Figure 2–9

Bond geometry creates molecular geometry.

## Figure 2–10

Double bond restricts rotation.

## Figure 2–11

Polar covalent bonds create partial charge.

## Figure 2–12

Ionic crystal is a charge-balanced lattice; water can dissociate it.

## Figure 2–13

Hydrogen bonds require donor/acceptor chemistry.

## Figure 2–14

Many weak interactions yield specific protein-protein binding.

## Figure 2–15

Protons transfer dynamically among aqueous molecules.

## Figure 2–16

pH is logarithmic and linked to H+/OH- balance.

## Figure 2–17

Four main small-organic families connect to larger cellular structures.

## Figure 2–18

One molecule can be represented by structural, chair, ball-stick, and space-filling views.

### Project implication

Representation type is a ViewState choice.

The biological molecule's identity does not change.

## Figure 2–19

Glycosidic condensation / hydrolysis.

## Figure 2–20

Polymer synthesis and hydrolysis are opposite reaction directions.

## Figure 2–21

Fatty acid = amphipathic head-tail molecule.

## Figure 2–22

Saturation affects fatty-acid packing and physical state.

## Figure 2–23

Phospholipid amphipathy drives bilayer assembly.

## Figure 2–24

Amino-acid generic structure and ionization.

## Figure 2–25

Peptide bond and N→C sequence direction.

## Figure 2–26

ATP chemical structure: adenine + ribose + triphosphate.

## Figure 2–27

ATP/ADP chemical cycle.

## Figure 2–28

DNA phosphodiester linkage and 5′→3′ polarity.

## Figure 2–29

Macromolecules dominate dry cell mass.

## Figure 2–30

Polysaccharide/protein/nucleic-acid polymer logic.

## Figure 2–31

Stepwise monomer addition via condensation.

## Figures 2–32 / 2–33

Measurement established discrete macromolecules.

## Figure 2–34

Noncovalent interactions stabilize folded macromolecules.

## Figure 2–35

Binding persistence depends on surface complementarity and number of weak contacts.

## Figure 2–36

Covalent chemistry builds macromolecules; noncovalent chemistry builds larger machines.

---

# 118. Panel 2–1 hard-code summary

```text
CARBON SKELETONS
- chains
- branches
- rings

COVALENT BONDS
- defined valence
- defined spatial arrangement
- single vs double bond
- multiple bonds restrict rotation

C–H COMPOUNDS
- hydrocarbon
- relatively nonpolar
- hydrophobic

ALTERNATING DOUBLE BONDS
- resonance/delocalization
- benzene stability

C–O
- alcohol / hydroxyl
- aldehyde
- ketone
- carboxylic acid / carboxylate
- ester

C–N
- amine
- amide
- peptide
- purine/pyrimidine rings

SULFHYDRYL
- reduced –SH
- oxidized disulfide –S–S–

PHOSPHATE
- inorganic phosphate
- phosphate ester
- acyl phosphate
- phosphoanhydride
```

---

# 119. Panel 2–2 hard-code summary

```text
WATER
- polar
- asymmetric electron density

HYDROGEN BOND
- weak
- directional
- transient

WATER NETWORK
- continuously reorganizing
- contributes to bulk properties

HYDROPHILIC
- ions
- polar molecules
- hydrated

HYDROPHOBIC
- nonpolar
- poorly solvated

SOLUTION
- solvent
- solute

ACID
- increases H+

BASE
- decreases H+ / accepts proton

PURE WATER
- H+ and OH- in equal concentration
- 10^-7 M each in chapter treatment

pH
- -log10[H+]
```

---

# 120. Panel 2–3 hard-code summary

```text
NONCOVALENT INTERACTIONS
1. hydrogen bonding
2. electrostatic attraction
3. van der Waals attraction
4. hydrophobic force (not literally a bond)

RULE:
many weak contacts together
→ strong + selective macromolecular interaction
```

---

# 121. Panel 2–4 hard-code summary

```text
MONOSACCHARIDE
- aldose or ketose
- commonly 3–6 carbons
- multiple hydroxyl groups

RING FORMATION
- favored in aqueous solution for many sugars

ISOMERS
- same formula
- different stereochemistry

α / β
- distinct ring-linkage states

DERIVATIVES
- glucosamine
- N-acetylglucosamine
- glucuronic acid

DISACCHARIDE
- maltose
- lactose
- sucrose

OLIGO / POLYSACCHARIDE
- linear / branched

COMPLEX GLYCANS
- nonrepetitive sequences
- protein/lipid attachment
- cell-surface identity
```

---

# 122. Panel 2–5 hard-code summary

```text
FATTY ACID
- carboxyl head
- hydrocarbon tail

SATURATED
- no C=C

UNSATURATED
- one or more C=C
- rigid kink

TRIACYLGLYCEROL
- glycerol + 3 fatty acids
- energy storage

PHOSPHOLIPID
- glycerol + 2 fatty acids + phosphate/polar group
- membrane-forming

GLYCOLIPID
- hydrophobic tails + sugar head
- no phosphate in shown example

STERIODS
- multiple fused rings
- cholesterol
- testosterone

POLYISOPRENOID
- repeated isoprene
- dolichol phosphate

AGGREGATES
- micelle
- surface film
- fat droplet
- self-sealing bilayer
```

---

# 123. Panel 2–6 hard-code summary

```text
AMINO ACID
- α-carbon
- amino
- carboxyl
- H
- side chain

PROTEIN CHIRALITY
- L-amino acids

PEPTIDE BOND
- amide
- planar
- no free C–N rotation

CHAIN DIRECTION
- N-terminus → C-terminus

BASIC
- Lys K
- Arg R
- His H

ACIDIC
- Asp D
- Glu E

UNCHARGED POLAR
- Asn N
- Gln Q
- Ser S
- Thr T
- Tyr Y

NONPOLAR
- Gly G
- Ala A
- Val V
- Leu L
- Ile I
- Pro P
- Phe F
- Met M
- Trp W
- Cys C

CYSTEINE
- can form disulfide
```

---

# 124. Panel 2–7 hard-code summary

```text
BASE
Pyrimidine:
- C
- T
- U

Purine:
- A
- G

SUGAR
- β-D-ribose for RNA
- β-D-2-deoxyribose for DNA

NUCLEOSIDE
= base + sugar

NUCLEOTIDE
= base + sugar + phosphate

PHOSPHATES
- mono
- di
- tri

POLYNUCLEOTIDE
- 5′↔3′ phosphodiester bonds
- sequence written 5′→3′

OTHER NUCLEOTIDE FUNCTIONS
- energy transfer
- coenzymes
- signaling
```

---

# 125. Question-derived consistency tests

These are not copied answers; they are validation rules implied by the chapter's factual content.

A science implementation should fail review if it implies any of the following:

```text
same element → always same neutron count
FALSE

lipid bilayer → one huge covalent macromolecule
FALSE

DNA bases → A,G,U,C
FALSE

DNA sugar → ribose
FALSE

all amino acids → hydrophilic
FALSE

hydrophobic effect → direct chemical bond
FALSE

nucleic acids → contain no sugar
FALSE

protein diversity → amino acids linked in random order
FALSE

peptide C–N bond → freely rotating
FALSE

NaCl in water → permanent isolated Na–Cl molecule pairs
FALSE

weak interaction → biologically insignificant
FALSE

single hydrogen bond → enough for highly specific tight binding
GENERALLY FALSE

molecule formula alone → determines biological identity
FALSE

cell chemistry → can ignore water
FALSE
```

---

# 126. Cross-chapter dependencies

## Chapter 3 — Energy, Catalysis, and Biosynthesis

Must refine:

- free energy
- favorable/unfavorable reactions
- ATP coupling
- "high-energy" phosphate language
- activated carriers
- enzyme catalysis
- oxidation/reduction

## Chapter 4 — Protein Structure and Function

Must refine:

- protein folding
- secondary / tertiary / quaternary structure
- domains
- binding sites
- enzyme specificity
- conformational change
- denaturation
- structural methods

## Chapter 5 — DNA and Chromosomes

Must refine:

- DNA double helix
- exact base pairing
- nucleotide geometry
- chromatin
- nucleosome
- chromosome organization

## Chapters 6–7

Must refine:

- polymerization mechanisms
- DNA replication
- transcription
- translation
- ribosome mechanism

## Chapter 11

Must refine:

- lipid bilayer
- membrane composition
- fluidity
- cholesterol
- membrane proteins
- leaflet organization

## Chapter 12

Must refine:

- ions
- membrane electrochemistry
- ion gradients
- channels/pumps
- nerve-cell electrical activity

## Chapters 13–14

Must refine:

- glucose/fatty-acid oxidation
- ATP synthesis
- mitochondrial/chloroplast energy conversion

## Chapter 15

Must refine:

- glycoprotein synthesis
- glycolipid trafficking
- dolichol-associated sugar transfer
- organelle membrane chemistry

## Chapter 16

Must refine:

- cAMP
- signaling molecules
- receptor interactions

---

# 127. Entity schema implications

Chemical entities should be able to store:

```yaml
chemical_entity:
  id:
  name:
  entity_class:
  formula:
  molecular_mass:
  atoms:
  covalent_graph:
  bond_orders:
  stereochemistry:
  formal_charge:
  partial_charge_model:
  protonation_state:
  pH_context:
  hydrophobic_regions:
  hydrophilic_regions:
  h_bond_donors:
  h_bond_acceptors:
  chemical_groups:
  polymer_role:
  monomer_role:
  compartment_context:
  provenance_status:
  source:
  later_chapter_dependencies:
  representation_levels:
```

---

# 128. Bond schema implications

```yaml
bond:
  atoms:
  type:
    - covalent_single
    - covalent_double
    - peptide
    - phosphodiester
    - glycosidic
    - ester
    - amide
    - disulfide
    - electrostatic
    - hydrogen_bond
    - van_der_waals_contact
  order:
  equilibrium_length:
  rotational_constraint:
  geometry:
  source_status:
  solvent_context:
```

A hydrophobic effect should **not** be stored as an ordinary pairwise bond type unless explicitly labeled as a coarse effective interaction.

---

# 129. Small-molecule schema implications

```yaml
small_molecule:
  family:
    - sugar
    - fatty_acid
    - amino_acid
    - nucleotide
    - other
  formula:
  structure:
  stereochemistry:
  protonation:
  charge:
  mass:
  biological_roles:
  precursor_of:
  energy_role:
  signaling_role:
  source_context:
```

---

# 130. Polymer schema implications

```yaml
polymer:
  type:
    - polypeptide
    - DNA
    - RNA
    - polysaccharide
  monomer_sequence:
  directionality:
  covalent_linkage:
  termini:
  folded_conformation:
  noncovalent_contacts:
  dynamic_state:
  assembly_partners:
  provenance:
```

---

# 131. Render representation rules

## Structural formula

Best for explicit connectivity/reaction logic.

## Ball-and-stick

Best for:

- bond geometry
- stereochemistry
- bond angles

## Space-filling

Best for:

- molecular surface
- steric volume
- packing
- collision / binding interfaces

## Surface/coarse representation

Best for:

- large macromolecules
- interaction sites
- performance-efficient context

### Project constraint

These are multiple **ViewState representations of one ChemicalEntity**, not different biological objects.

---

# 132. Hard stop rules for coding agents

An implementation agent must not:

- invent atomic coordinates for a named biomolecule when structural data are required
- use random bond lengths
- allow atom overlap for convenience
- draw DNA with ribose
- make peptide bonds freely rotate
- treat double bonds as freely rotating
- use U as a canonical DNA base
- use T as the ordinary canonical RNA base without context
- treat nucleoside and nucleotide as synonyms
- present ATP as stored glowing energy
- model hydrophobic force as a literal covalent-like bond
- show membranes with tails exposed to bulk water
- confuse a lipid bilayer with a covalent polymer
- ignore solvent when explaining weak interaction strength
- treat fluorescent colors as chemical atom colors
- infer protonation state without pH/context
- assign a single charge model to a molecule independent of environment
- silently change L/D stereochemistry
- assume a molecular formula uniquely identifies a stereoisomer
- call every oxygen-containing group a hydrogen-bond donor
- call every nitrogen-containing group positively charged
- use one generic amino-acid bead for atomic-detail protein chemistry
- turn source approximations into exact simulation constants

---

# 133. Chapter 2 canonical vocabulary

- acid
- aldehyde
- amino acid
- amino group
- amide
- amine
- amphipathic
- anion
- atom
- ATP
- Avogadro's number
- base
- buffer
- carbonyl
- carboxyl
- cation
- chemical bond
- chemical group
- condensation reaction
- conformation
- covalent bond
- dalton
- disaccharide
- disulfide
- DNA
- double bond
- electron
- electron shell
- electronegativity
- electrostatic attraction
- ester
- fatty acid
- glycosidic bond
- glycolipid
- glycoprotein
- hydrogen bond
- hydrolysis
- hydronium
- hydrophilic
- hydrophobic
- hydrophobic force
- hydroxyl
- hydroxide
- inorganic
- ion
- ionic bond
- isotope
- lipid
- lipid bilayer
- macromolecule
- methyl
- micelle
- mole
- molecule
- monomer
- monosaccharide
- N-terminus
- C-terminus
- noncovalent bond
- nucleotide
- nucleoside
- oligosaccharide
- organic molecule
- peptide bond
- pH
- phosphate
- phosphodiester bond
- phospholipid
- polar
- polymer
- polysaccharide
- proton
- purine
- pyrimidine
- resonance
- RNA
- saturated fatty acid
- sequence
- single bond
- solute
- solution
- solvent
- stereoisomer
- sugar
- sulfhydryl
- triacylglycerol
- unsaturated fatty acid
- van der Waals attraction
- van der Waals radius

---

# 134. Chapter 2 core project statement

Chapter 1 established the cell as a dynamic spatial system.

Chapter 2 establishes what that system is physically made of.

At sufficiently deep scale, cellular biology becomes a world of:

```text
atoms
with quantum-derived electron structure

connected by
covalent geometry

immersed in
water

organized by
charge
polarity
hydrogen bonding
van der Waals contact
hydrophobic exclusion

assembled into
small molecules

assembled into
polymers

folded into
macromolecules

associated into
molecular machines
membranes
and cellular matter
```

The central implementation consequence is:

> **Molecular realism is not achieved by drawing many colored spheres. It is achieved by preserving the chemical rules that determine which spheres may exist, how they connect, how they occupy space, how they interact with water, how they move, and what molecular identity those relationships create.**

---

# 135. Source trace

Primary source:

**Essential Cell Biology, Sixth Edition — Chapter 2: "Chemical Components of Cells."**

Printed pages:

```text
43–84
```

Main text:

```text
CHEMICAL BONDS
SMALL MOLECULES IN CELLS
MACROMOLECULES IN CELLS
ESSENTIAL CONCEPTS
QUESTIONS
```

Review panels:

```text
Panel 2–1 Chemical Bonds and Groups
Panel 2–2 The Chemical Properties of Water
Panel 2–3 The Principal Types of Weak Noncovalent Bonds
Panel 2–4 An Outline of Some of the Types of Sugars
Panel 2–5 Fatty Acids and Other Lipids
Panel 2–6 The 20 Amino Acids Found in Proteins
Panel 2–7 A Survey of the Nucleotides
```

Historical evidence section:

```text
How We Know: The Discovery of Macromolecules
```

---

# 136. Approval checklist

Before moving this file from:

```text
SOURCE_DERIVED_DRAFT
```

to:

```text
APPROVED
```

review:

- atomic values
- bond strength table
- pH statements
- all four weak interaction categories
- hydrophobic-force wording
- sugar stereochemistry
- α/β sugar-linkage rule
- lipid aggregation rules
- amino-acid category membership
- all 20 amino-acid names/codes
- peptide-bond planarity
- nucleotide base/sugar/phosphate nomenclature
- DNA deoxyribose rule
- RNA ribose rule
- 5′→3′ directionality
- ATP wording
- "high-energy bond" guardrail
- macromolecular sequence/conformation rules
- historical measurement details
- all `PROJECT_CONSTRAINT` statements for accidental overreach

---

# END OF CHAPTER 02 CANON

Next planned file:

```text
science/chapters/03_energy_catalysis_biosynthesis.md
```

Do not start Chapter 3 implementation merely because this file exists.

Chapter 2 defines the **chemical substrate** of the world.

Chapter 3 will define how chemical reactions acquire direction, speed, and energetic coupling.
