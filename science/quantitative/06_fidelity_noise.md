---
title: "The Seamless Cell — Quantitative Canon — Fidelity, Variability, and Noise"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Fidelity, variability, and noise

## 1. Purpose

The Seamless Cell must not become a deterministic clockwork toy.

Biology contains:
- stochastic molecular motion
- heterogeneous copy numbers
- cell-to-cell variability
- probabilistic reaction events
- replication/transcription/translation errors
- variable lifetimes
- variable geometry

These are biological features.

## 2. Mutation-rate scale

CBBN cites an E. coli long-term-evolution inference of:

```text
~10^-10 mutations / bp / replication
```

under the measured conditions.

For a ~5×10^6 bp genome this corresponds to roughly:

```text
order 1 mutation / 1000 generations / lineage
```

as an order-of-magnitude consequence in the source.

`VERIFY_CONTEXT`: mutation rates depend on organism, stress, repair background, sequence context, and measurement method.

## 3. Replication fidelity versus polymerase chemistry

The final genomic mutation rate is **not** simply the raw nucleotide-misincorporation rate.

It emerges from layered processes:

```text
base selection
→ polymerase proofreading
→ post-replication mismatch repair
→ survival/fixation
```

Do not collapse these into one "DNA polymerase error rate."

## 4. Size variability

Examples in CBBN:

### budding yeast
```text
haploid median volume   ~42 ± 2 µm³
25th–75th percentile    ~30–60 fL
```

Genetic/environmental perturbations can shift median volume by more than twofold.

### mammalian cells
Mouse lymphoblast cell volume showed a broad distribution around an order-10³ µm³ scale.

`PROJECT_CONSTRAINT`: reference-cell dimensions should be distributions or parameterized contexts when population simulation begins.

## 5. Organelle variability

Mitochondria illustrate why counting is context-dependent:

```text
yeast on ethanol:
~20–30 smaller discrete mitochondria

yeast on glucose:
~3 larger branched mitochondria
```

yet total occupied fraction can remain similar.

Count is therefore not equivalent to total mitochondrial mass/volume/function.

## 6. Rate variability

Motor speeds, diffusion coefficients, transcription rates, and protein lifetimes are distributions.

Examples:

```text
HeLa RNA-polymerase elongation:
~30–100 nt/s distribution
median ~60 nt/s

human protein active-degradation half-lives:
<1 h for fastest observed
to negligible degradation over days for very stable proteins
```

## 7. Molecular stochasticity

For low-copy components:

```text
1 molecule
10 molecules
100 molecules
```

cannot be represented faithfully as a smooth concentration field without an explicit approximation.

For high-copy components:

```text
10^6–10^10 molecules
```

particle-by-particle rendering is usually scientifically unnecessary and computationally absurd.

The representation controller should choose discrete versus field models based partly on abundance.

## 8. Diffusion is stochastic

`PROJECT_CONSTRAINT`:

Brownian diffusion must be stochastic and reproducible when simulation reproducibility matters.

```text
curl noise ≠ Brownian motion
```

Curl noise may be used only as an explicitly labeled nonphysical visual agitation/advection model.

## 9. Biological stochasticity versus cinematic randomness

Do not add random motion simply to make the scene "feel alive."

Every random process should have a declared class:

```yaml
stochastic_model:
  type:
    - Brownian_diffusion
    - binding_event
    - polymerization_event
    - gene_expression_noise
    - chromosome_orientation
    - rendering_only
  seed:
  biological_basis:
```

## 10. Measurement uncertainty

A quantitative record can be uncertain because of:
- biological heterogeneity
- instrument calibration
- sampling
- assay assumptions
- indirect inference
- historical source age

Do not store all uncertainty as a single ± value unless the source supports that model.

## 11. Source-era caution

Some CBBN vignettes synthesize measurements from older literature.

Use them for:
```text
order-of-magnitude intuition
sanity checking
initial parameter ranges
```

Use current primary literature/databases when:
```text
a precise runtime parameter materially affects the scientific claim.
```

## 12. Sources

See `07_sources.md`.
