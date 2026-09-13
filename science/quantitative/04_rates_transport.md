---
title: "The Seamless Cell — Quantitative Canon — Rates and Transport"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Rates and transport

## 1. Diffusion

Representative protein diffusion coefficient:

```text
water:
~100 µm²/s for a small monomeric protein

cytoplasm:
~10 µm²/s rule of thumb
larger proteins can fall toward ~1 µm²/s
```

Cellular context can slow molecules by very different factors depending on size, binding, crowding, viscosity, and geometry.

### Diffusion traversal examples

```text
~1 µm bacterium:
~0.01 s

~20 µm mammalian cell:
~10 s

1 cm axonal distance:
~10^6 s ≈ 2 weeks
```

## 2. Cytoskeletal motors

CBBN broad statement:

```text
~0.1 to several µm/s
```

for many translational motors, with important outliers.

### Conventional kinesin

```text
in vitro speed          ~800 nm/s
in vivo example         ~2000 nm/s
step size               8 nm
processive run          ~100 steps
ATP / step              ~1
force scale             ~5 pN
```

The speed and force depend on load, motor family, cargo, cofactors, and assay conditions.

## 3. Cell motility

Examples from CBBN:

```text
E. coli swimming          ~30 µm/s
Dictyostelium crawling    ~10 µm/min
fast crawling cell-line competition winner  ~5.2 µm/min
keratocyte example        ~0.2 µm/s
```

`DO_NOT_INFER`: swimming and crawling are different mechanisms and should not share a single mobility model.

## 4. Electrical propagation

Human nerve conduction spans a broad range.

CBBN:
```text
human action-potential propagation:
~10–100 m/s characteristic range

large myelinated motor fibers:
~80–120 m/s
```

Speed depends strongly on axon diameter and myelination.

## 5. Transcription

### E. coli
```text
RNA polymerase elongation:
~40–80 nt/s maximal source range
```

### Mammalian
```text
rapid stretches:
~50–100 nt/s

HeLa distribution:
~30–100 nt/s
median ~60 nt/s
```

Pausing/initiation can make whole-transcript effective rates slower.

## 6. Translation

### E. coli
```text
~20 aa/s
```

### budding yeast
CBBN example:
```text
~10 aa/s
```

Translation rate is not synonymous with protein appearance because folding, processing, localization, and reporter maturation can add substantial delay.

## 7. DNA replication

### E. coli
```text
in-vivo average reported example   ~600 bp/s
whole-genome replication            ~55–65 min measured example
```

### Eukaryotic forks
```text
~4–40 bp/s
≈1 kb/min useful order of magnitude
```

Human S phase is hours because thousands of origins operate in parallel.

## 8. Vesicular / synaptic transmission

Representative CBBN synapse values:

```text
synaptic-cleft width      ~20–40 nm
cleft traversal           <1 ms
clearance scale           ~1 ms
cortical firing average   ~1–10 Hz
some neurons              >100 Hz
```

These are contextual, not universal neuronal constants.

## 9. Active transport versus diffusion decision rule

At subcellular distances of a few microns, diffusion can be fast enough for many small proteins/metabolites.

At long distances:
```text
diffusion time ∝ distance²
motor travel time ∝ distance
```

For a 1-cm distance:

```text
diffusion     ~weeks
motor @1 µm/s ~hours
```

This should directly inform transport-mechanism selection in simulations.

## 10. Sources

See `07_sources.md`.
