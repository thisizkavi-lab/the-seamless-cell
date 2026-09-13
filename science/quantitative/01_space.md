---
title: "The Seamless Cell — Quantitative Canon — Space"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Space

## 1. Purpose

This file constrains the **Scale Spine** from cell/tissue scale down to molecular and atomic scale.

The registry should answer:

```text
How large is it?
What is the relevant dimension?
What context does the number belong to?
At what zoom level should it become resolved?
```

## 2. Scale ladder

| Entity / scale | Representative size | Context | Status / source |
|---|---:|---|---|
| O–H / covalent-bond scale | ~0.1 nm | molecular ruler | `CBBN_RULE_OF_THUMB`; biochemical nuts and bolts, BNID 106548 |
| mean water-molecule spacing | ~0.3 nm | liquid water | `CBBN_DERIVED_ESTIMATE`; biochemical nuts and bolts |
| bare Mg²⁺ radius | ~0.07 nm | unhydrated ion | `CBBN_MEASURED`; BNID 109742 |
| bare Na⁺ radius | ~0.09 nm | unhydrated ion | `CBBN_MEASURED`; BNID 108517 |
| bare K⁺ radius | ~0.13 nm | unhydrated ion | `CBBN_MEASURED`; BNID 104162 |
| bare Cl⁻ radius | ~0.18 nm | unhydrated ion | `CBBN_MEASURED`; BNID 103950 |
| hydrated-ion radius | ~0.3–0.4 nm | typical small ion in water | `CBBN_RULE_OF_THUMB`; BNID 108517 |
| DNA axial rise / bp | ~0.33 nm | B-form DNA rule of thumb | `CBBN_RULE_OF_THUMB`; biochemical nuts and bolts |
| amino-acid physical extent | ~0.4–1 nm | free amino acids | `CBBN_MEASURED`; BNID 106983 |
| DNA double-helix diameter | ~2 nm | radius ~1 nm | `CBBN_RULE_OF_THUMB`; biochemical nuts and bolts |
| lipid tail length | order ~2 nm | common membrane lipids | `CBBN_RULE_OF_THUMB` |
| lipid cross-sectional area | ~0.25–0.5 nm² | single lipid | `CBBN_RULE_OF_THUMB` |
| glucose | ~1 nm | small metabolite | `CBBN_RULE_OF_THUMB`; BNID 110368/106979 |
| ATP effective diffusion diameter | ~1.4 nm | ATP in solution | `CBBN_MEASURED`; BNID 106978 |
| NADP length | ~2.5 nm | extended molecular dimension | `CBBN_MEASURED`; BNID 106981 |
| typical soluble protein | ~3–6 nm diameter | rule-of-thumb protein | `CBBN_RULE_OF_THUMB`; average protein vignette |
| bacterial RNA polymerase | ~5 nm | E. coli core transcription machinery | `CBBN_RULE_OF_THUMB`; BNID 104927 |
| nucleosome | ~10 nm across | purified/in-vitro structural scale | `CBBN_MEASURED`; nuclei vignette, BNID 102979/102985 |
| actin filament | ~7 nm diameter | cytoskeleton | `ECB6_CROSSCHECK`; Chapter 17 canon |
| intermediate filament | ~10 nm diameter | cytoskeleton | `ECB6_CROSSCHECK`; Chapter 17 canon |
| ribosome | ~20–30 nm diameter | bacterial/eukaryotic comparison | `CBBN_MEASURED`; central-dogma machines, BNID 102320/111542 |
| microtubule | ~25 nm outer diameter | canonical microtubule | `ECB6_CROSSCHECK`; Chapter 17 canon |
| ER tubule | ~30–100 nm diameter | eukaryotic ER | `CBBN_MEASURED`; BNID 105175/111388 |
| synaptic cleft | ~20–40 nm | neuronal synapse | `CBBN_MEASURED`; synapse vignette, BNID 100721/108451 |
| primary plant-cell wall | ~200 nm thick | growing plant cell | `ECB6_CROSSCHECK`; Chapter 20 canon |
| motile cilium | ~0.25 µm diameter | eukaryotic cilium | `ECB6_CROSSCHECK`; Chapter 17 canon |
| chloroplast granum stack | ~0.3–0.6 µm diameter | vascular plants | `CBBN_MEASURED`; BNID 107014 |
| typical synapse bounding scale | ~1 µm | many brain synapses | `CBBN_RULE_OF_THUMB`; synapse vignette |
| E. coli diameter | ~1 µm | rule-of-thumb cell | `CBBN_RULE_OF_THUMB`; BNID 101788 |
| E. coli length | ~2 µm | rule-of-thumb cell | `CBBN_RULE_OF_THUMB`; BNID 101788 |
| mitochondrion diameter | ~1 µm | textbook-like discrete mitochondrion | `CBBN_RULE_OF_THUMB` |
| mitochondrion length | ~2 µm | textbook-like discrete mitochondrion | `CBBN_RULE_OF_THUMB` |
| haploid budding yeast diameter | ~4 µm | S. cerevisiae | `CBBN_MEASURED`; BNID 101796 |
| diploid budding yeast diameter | ~6 µm | S. cerevisiae | `CBBN_MEASURED`; BNID 101796 |
| chloroplast diameter | ~4–6 µm | vascular plant | `CBBN_MEASURED`; BNID 104982/107012 |
| yeast nucleus | ~2 µm | source micrograph scale | `CBBN_RULE_OF_THUMB`; nuclei vignette |
| fibroblast nucleus | ~10 µm | human fibroblast example | `CBBN_RULE_OF_THUMB`; nuclei vignette |
| human RBC diameter | ~7–8 µm | mature erythrocyte | `CBBN_MEASURED`; BNID 100509 |
| neuron width | ~10 µm | long human neuron, approximate | `CBBN_RULE_OF_THUMB`; human-cell vignette |
| spread/confluent mammalian-cell traversal scale | ~20 µm | rule used for diffusion estimate | `CBBN_RULE_OF_THUMB`; diffusion vignette |
| spread HeLa diameter | ~40 µm | adherent low-density condition | `CBBN_MEASURED`; human-cell vignette |
| megakaryocyte / large fused cell diameter | up to ~100 µm | large human cell types | `CBBN_MEASURED`; BNID 106130 |
| mature human oocyte diameter | ~120 µm | mature egg cell | `CBBN_MEASURED`; human-cell vignette |
| long human neuron | >1 m | axonal extent | `CBBN_MEASURED`; BNID 104901 |

## 3. Volumes

| Entity | Representative volume | Context | Source |
|---|---:|---|---|
| E. coli | ~1 µm³ | rule of thumb | CBBN, BNID 101788 |
| E. coli refined spherocylinder | ~1.3 µm³ | 1 µm diameter × 2 µm length geometry | CBBN derived estimate |
| haploid budding yeast | ~42 ± 2 µm³ median | wild-type example | CBBN, BNID 100427 |
| diploid budding yeast | ~82 µm³ | source strain/context | CBBN, BNID 100490 |
| human RBC | ~100 µm³ | mature erythrocyte | CBBN, BNID 101711/101713 |
| sperm | ~20–40 µm³ | human sperm | CBBN, BNID 109892/109891 |
| cultured mammalian-cell rule | ~500–4000 µm³ | broad cell-line range | CBBN human-cell vignette |
| HeLa-like rule of thumb | ~2000 µm³ | cultured cell heuristic | CBBN human-cell vignette |
| chloroplast | ~20 µm³ | corn seedling example | CBBN, BNID 106536 |
| haploid yeast nucleus | ~3 µm³ | S. cerevisiae | CBBN, BNID 104709 |

## 4. Genome spatial constraints

| Quantity | Value | Interpretation |
|---|---:|---|
| human haploid genome | ~3 Gbp | source rule |
| contour length of one human haploid genome | ~1 m | 0.33 nm/bp × ~3×10⁹ bp |
| diploid nuclear DNA contour length | ~2 m | before accounting for replication |
| yeast DNA fraction of nuclear volume | ~0.3% naked-DNA volume estimate | not chromatin packing fraction |
| base-pair volume heuristic | ~1 nm³ | order-of-magnitude rule used in nuclei vignette |

`PROJECT_CONSTRAINT`: a chromosome cannot be rendered as a short free DNA string at cellular scale. Compaction is not optional.

## 5. Organelle scale notes

### Nucleus
Typical eukaryotic nuclei in the source span roughly:

```text
~2–10 µm diameter
```

but the nucleus-to-cell volume ratio is strongly cell-type dependent.

### Mitochondria
Discrete mitochondria are often approximated as:

```text
~2 µm long
~1 µm diameter
```

but mitochondria can form reticular networks extending **tens of microns**.

`DO_NOT_INFER`: mitochondrial count is not always well-defined when the network is continuous.

### ER
The ER can occupy:

```text
>10% of cell volume
~10–20× plasma-membrane area in a secretory-cell example
up to ~60% of cellular membrane area in source tables
```

Its tubules are on the order of **30–100 nm** diameter.

## 6. Visualization rules

### Rule A — semantic LOD
Do not try to keep every molecular structure geometrically literal across 10⁵–10⁶× zoom.

Use persistent identity with representation changes.

### Rule B — screen-space visibility
If a real structure is subpixel:
- switch representation,
- exaggerate explicitly,
- or hide it.

Do not silently enlarge biology.

### Rule C — membrane thickness
A real membrane-scale thickness will be visually tiny at whole-cell scale. Any visible whole-cell membrane rim is a `PROJECT_DISPLAY_VALUE`.

### Rule D — nuclear/chromatin context
The historical 30-nm fiber is not a default in-vivo chromatin architecture. Do not derive cell-scale chromatin geometry from that textbook model.

## 7. Sources

See `07_sources.md`.
