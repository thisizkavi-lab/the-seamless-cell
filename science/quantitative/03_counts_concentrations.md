---
title: "The Seamless Cell — Quantitative Canon — Counts and Concentrations"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Counts and concentrations

## 1. Purpose

Absolute abundance determines whether a process should be visualized as:
- a handful of discrete entities,
- hundreds of particles,
- a dense molecular field,
- or an effectively continuous concentration.

## 2. Useful copy-number rules

| Quantity | Representative value | Context | Source |
|---|---:|---|---|
| total proteins in E. coli | ~2–4×10⁶ molecules/cell | ~1 µm³ cell | CBBN protein census |
| total proteins in haploid yeast | ~0.9–1.4×10⁸/cell | ~40 µm³ | CBBN protein census |
| total proteins in typical cultured mammalian cell | order ~10¹⁰/cell | ~2000–4000 µm³ extrapolation | CBBN derived estimate |
| E. coli tRNAs | ~2×10⁵/cell | ~40-min doubling | CBBN metabolite-turnover vignette, BNID 100066 |
| E. coli ribosomes | ~3×10⁴/cell | ~40-min doubling example | CBBN metabolite-turnover vignette, BNID 102015 |
| budding-yeast tRNAs | ~2×10⁶/cell | example | CBBN, BNID 108197 |
| budding-yeast ribosomes | ~2×10⁵/cell | example | CBBN, BNID 100267/108197 |
| Spiroplasma ribosomes | ~1000/cell | very small slow-growing cell | CBBN ribosome vignette, BNID 108945 |
| mitochondria in mammalian cells | order 10³–10⁴ | highly cell-type dependent | CBBN mitochondria vignette |
| mitochondria in yeast | order 10¹ | morphology-dependent | CBBN mitochondria vignette |
| human-body cells | ~3.7±0.8×10¹³ | historical estimate in source | CBBN human-cell vignette, BNID 109716 |
| human cell types | >200 | broad classification | CBBN human-cell vignette |
| brain synapses | ~10¹³–10¹⁵ | historical broad estimate | CBBN synapse vignette |
| neurotransmitters / synaptic vesicle | ~10³–10⁴ | common vesicle example | CBBN synapse vignette |
| Ca²⁺ ions triggering vesicle release | ~10²–10⁴ | synaptic-vesicle source estimate | CBBN synapse vignette |

## 3. Concentration ↔ copy-number intuition

For an E. coli-sized volume (~1 µm³):

```text
1 nM ≈ order 1 molecule per cell
```

This is a highly useful rule of thumb.

For larger cells, copy number at the same concentration scales with volume.

`PROJECT_CONSTRAINT`: never reuse the E. coli 1 nM→1 molecule conversion in a mammalian cell without correcting for volume.

## 4. Macromolecular abundance

### Protein number density
CBBN estimates scale roughly with cell volume and gives:

```text
E. coli (~1 µm³)     ~2–4 million proteins
mammalian cell       order ~10^10 proteins
```

The book explicitly notes published eukaryotic proteome totals can differ substantially, so this remains a quantitative intuition rather than a universal exact constant.

### Typical protein length

```text
prokaryotic protein rule of thumb  ~300 aa
eukaryotic protein rule of thumb   ~400 aa
```

Useful for estimating biomass and polymerization cost, not for sizing every protein.

## 5. Ions and metabolites

### Ca²⁺
The source emphasizes an extreme gradient:

```text
outside mammalian cell / resting cytosol:
order ~10^4-fold difference
```

This is why small absolute Ca²⁺ fluxes can create large relative signaling changes.

### Intracellular K⁺
CBBN gives a rough bacterial intracellular scale of:

```text
~200 mM
```

in the metabolite/ion discussion.

### E. coli glutamate
A striking metabolite example:

```text
~100 mM glutamate
≈10^8 molecules / E. coli
```

This single metabolite pool is comparable to a substantial fraction of the amino-acid inventory embodied in the proteome.

### Metabolite concentration ceiling
The book notes many intermediate metabolites are kept below a few mM to avoid osmotic and nonspecific-reaction costs, although several major metabolites/ions can be much more abundant.

## 6. pH is logarithmic concentration

Representative CBBN examples:

```text
HeLa cytoplasm / nucleus    ~pH 7.3
HeLa mitochondria           ~pH 8.0
HeLa ER                     ~pH 7.5
HeLa Golgi                  ~pH 6.6

exponential-growth yeast cytosol   ~pH 7
stationary-phase yeast cytosol     ~pH 5.5
yeast mitochondria                 ~pH 7.5
yeast vacuole                      ~pH 5.5–6.5
```

`DO_NOT_INFER`: pH is not a visual color label; it is a logarithmic H⁺ activity state.

## 7. Organelle abundance

Mitochondrial number is difficult to define in reticular networks.

CBBN:
```text
yeast        ~10¹ characteristic order
mammalian    ~10³–10⁴ characteristic order
```

ECB6 contextual example:
```text
liver cell   ~1000–2000
```

These values should be stored by cell type/state.

## 8. Membrane inventory

For secretory mammalian cells, CBBN notes:
```text
ER membrane area can be ~10–20× plasma-membrane area
ER may account for up to ~60% of total cellular membrane area
plasma membrane may be <10% of total membrane area
```

Therefore the visible outer cell boundary is only a small fraction of total lipid-bilayer real estate.

## 9. Do not overinterpret

```text
all proteins have ~1000 copies
FALSE

all mammalian cells have 10^10 proteins
FALSE

all cells have thousands of mitochondria
FALSE

concentration can be converted to copy number without cell volume
FALSE

total Ca2+ = free cytosolic Ca2+
FALSE

pH difference is linear concentration difference
FALSE

high copy number means high functional importance
FALSE
```

## 10. Sources

See `07_sources.md`.
