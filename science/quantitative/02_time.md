---
title: "The Seamless Cell — Quantitative Canon — Time"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Time

## 1. Purpose

This file anchors **BiologicalTime**.

The cell spans enormous temporal ranges:

```text
sub-nanosecond molecular events
→ microseconds / milliseconds
→ seconds
→ minutes
→ hours
→ days
→ months / years
```

Playback must compress these ranges explicitly.

## 2. Core timescale ladder

| Process | Representative time | Context / interpretation | Source |
|---|---:|---|---|
| water exchange around hydrated ions | ns–µs scale | hydration-shell dynamics | CBBN biochemical nuts and bolts, BNID 108517 |
| protein diffusion across ~1 µm bacterium | ~0.01 s | monomeric protein heuristic | CBBN diffusion vignette, BNID 103801 |
| one kinesin 8-nm step cycle | ~0.01 s at ~800 nm/s | ~100 steps/s in vitro | CBBN motor vignette |
| metabolite pool turnover | order ~1 s | many central-carbon metabolites | CBBN metabolite-turnover vignette |
| tRNA pool turnover | ~0.1–1 s | E. coli | CBBN, BNID 105275 |
| synaptic-cleft diffusion/clearance scale | <1 ms to ~1 ms | 20–40 nm cleft | CBBN synapse vignette |
| fastest cone photoreceptor response | ~20 ms | source example | ECB6 Chapter 16 cross-check |
| protein diffusion across ~20 µm mammalian cell | ~10 s | D≈10 µm²/s heuristic | CBBN diffusion vignette |
| G-protein shutoff | seconds | heterotrimeric G-protein source scale | ECB6 Chapter 16 cross-check |
| cAMP large fold change | seconds | signaling context | CBBN/ECB6 cross-check |
| protein folding for fluorescent reporter | <1 min | uncomplicated GFP-like folding step | CBBN fluorescent-protein vignette |
| 1-kb bacterial gene transcription at maximal elongation | ~10–25 s | 40–80 nt/s | CBBN transcription-vs-translation |
| 300-aa bacterial protein translation at 20 aa/s | ~15 s | elongation only | CBBN transcription-vs-translation |
| GFP/YFP maturation | minutes to tens of minutes | reporter-dependent and temperature-dependent | CBBN fluorescent-protein vignette |
| E. coli genome replication | ~40–65 min | condition-dependent; nested forks possible | CBBN genome-copy vignette |
| typical mammalian S phase | ~6–10 h | many epithelial/cultured contexts | CBBN genome-copy + cell-cycle vignettes |
| cultured mammalian cell cycle | ~20 h | representative fibroblast/cell-line scale | CBBN/ECB6 cross-check |
| Drosophila early embryonic replication cycle | ~8 min | specialized cleavage cycle | CBBN |
| red blood cell lifetime | ~4 months / ~120 d | human | CBBN tissue-replacement vignette |
| epidermal turnover | ~2 months | broad source estimate | ECB6 Chapter 20 cross-check |
| intestinal epithelial turnover | ~3–6 d | human gut source estimate | ECB6 Chapter 20 cross-check |
| adipocyte half-replacement time | ~8 y | inferred from ~8±6%/y | CBBN tissue-replacement vignette |
| histone half-life in long-lived-protein study | ~200 d | mouse labeling study | CBBN protein-degradation vignette |
| nuclear-pore scaffold lifetime | >1 y | subset of NPC proteins | CBBN protein-degradation vignette |

## 3. Diffusion time is distance squared

For three-dimensional diffusion, a useful scaling is:

```text
τ ~ x² / D
```

with order-unity geometry factors omitted in the simplest rule.

Representative CBBN rule for a monomeric protein in cytoplasm:

```text
D ~ 10 µm²/s
```

Therefore:

```text
1 µm    → ~0.01 s
20 µm   → ~10 s
1 cm    → ~10^6 s ≈ 2 weeks
```

The key architectural consequence is:

> Long cells require active transport because diffusion time grows quadratically with distance.

For a 1-cm process, a motor at ~1 µm/s takes hours rather than weeks.

## 4. Central-dogma timing

### Bacteria

```text
transcription elongation:
~40–80 nt/s

translation elongation:
~20 aa/s
```

Because 3 nt encode ~1 aa, the two maximal elongation fluxes are of similar order.

A 1-kb coding region:
```text
transcription elongation ≈ 10–25 s
translation of ~333 aa ≈ 17 s
```

These exclude potentially slower initiation, pausing, folding, processing, and transport.

### Mammalian transcription

Source compilation:

```text
rapid elongation ~50–100 nt/s
HeLa distribution ~30–100 nt/s
median ~60 nt/s
```

The book notes that pauses can make effective average rates lower in some measurements.

## 5. Genome replication timing

### E. coli

```text
genome ~5 Mbp
fork speed several hundred bp/s
two main forks
naive replication time ~40 min
measured replication ~55–65 min in cited live-cell work
```

Rapidly growing cells can start new replication rounds before the prior division finishes.

### Eukaryotes

Typical fork rate in the book:

```text
~4–40 bp/s
≈1 kb/min order of magnitude
```

Multiple origins permit a human-size genome to be copied in hours rather than months.

Human:

```text
S phase order ~10 h
```

Many mammalian epithelia in historical datasets cluster around:

```text
~6–8 h
```

## 6. Signaling time classes

For the project:

```text
ion-channel / voltage responses:
ms

protein-state signaling:
ms → s → min

second-messenger fields:
s → min

gene-expression responses:
min → h
```

`PROJECT_CONSTRAINT`: never animate a transcription-dependent response as though it occurs simultaneously with receptor binding.

## 7. Cell and tissue time

Representative ladder:

```text
synaptic transmission            ~ms
molecular motor transport        s–h depending distance
cell crawling                    min–h
DNA replication                  min–h
mitosis                          ~hour scale in mammalian examples
cell cycle                       hours–days
epithelial renewal               days
RBC lifetime                     months
some structural proteins         months–years
many neurons                     lifetime
```

## 8. Playback metadata

Every process animation should expose:

```yaml
biological_start:
biological_end:
biological_duration:
playback_duration:
compression_factor:
paused_for_camera:
```

Example:

```text
human S phase:
real ~8 h
playback 12 s
compression ~2400×
```

The exact reference context must be named.

## 9. Do not overinterpret

```text
all reactions occur on one cellular timescale
FALSE

diffusion has a constant travel speed
FALSE

protein transport speed can be inferred without distance
FALSE

reporter fluorescence appears immediately after translation
FALSE

transcription rate = whole-gene expression response time
FALSE

DNA polymerase fork speed = S-phase duration
FALSE

cell-cycle phase durations are universal across mammalian cells
FALSE

tissue turnover = individual cell maximum lifespan
FALSE
```

## 10. Sources

See `07_sources.md`.
