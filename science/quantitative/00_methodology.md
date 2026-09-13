---
title: "The Seamless Cell — Quantitative Methodology"
status: "QUANTITATIVE_SOURCE_DRAFT"
source_basis:
  - "Cell Biology by the Numbers"
  - "BioNumbers"
last_updated: "2026-09-13"
---

# Quantitative methodology

## 1. Why this layer exists

A mechanistically correct animation can still be scientifically misleading if its **space**, **time**, **copy number**, **concentration**, or **rate** is wrong.

The quantitative canon therefore constrains simulation and visualization without pretending that one number applies to every species, cell type, state, or condition.

## 2. Required status vocabulary

### `CBBN_RULE_OF_THUMB`
A deliberately approximate order-of-magnitude value used by *Cell Biology by the Numbers* to build intuition.

### `CBBN_MEASURED`
A value presented as an experimental measurement or literature compilation.

### `CBBN_DERIVED_ESTIMATE`
A back-of-the-envelope estimate derived in *Cell Biology by the Numbers* from other quantities.

### `ECB6_CROSSCHECK`
A number already present in the *Essential Cell Biology* chapter canons that agrees with or usefully complements the quantitative source.

### `VERIFY_CONTEXT`
The value is useful but should not become a universal runtime constant without checking the exact organism, cell type, physiological state, temperature, medium, developmental stage, or assay.

### `PROJECT_DISPLAY_VALUE`
A deliberately exaggerated or compressed value used only to make a structure/process visible.

## 3. Required fields for quantitative records

When these Markdown registries are later converted into machine-readable data, every record should support:

```yaml
id:
quantity:
dimension:
value:
range:
unit:

organism:
cell_type:
cell_state:
compartment:
temperature:
measurement_context:

status:
source_title:
source_vignette:
bnids:
primary_source:

uncertainty:
notes:

visualization:
  real_value:
  display_value:
  exaggeration_factor:
  reason:
  do_not_interpret_as:
```

No field should be filled by model guesswork.

## 4. Values are contextual

Do **not** write:

```text
cell diameter = 20 µm
protein diffusion = 10 µm²/s
mitochondria per cell = 1000
```

Write:

```text
adherent mammalian-cell traversal scale ≈ 20 µm
typical monomeric protein in cytoplasm ≈ 10 µm²/s as a rule of thumb
mammalian mitochondrial count can be 10³–10⁴ in some cells
```

and preserve the source context.

## 5. Prefer distributions/ranges over false precision

Biological variability is real signal, not measurement noise to erase.

Priority order:

```text
distribution
> range
> representative value
> order-of-magnitude rule
> single exact-looking number
```

## 6. Separate biological and cinematic time

For every animated process, keep:

```yaml
biological_time:
playback_time:
time_compression_factor:
camera_time:
```

Example:

```text
REAL BIOLOGICAL TIME     10 h
PLAYBACK TIME             8 s
TIME COMPRESSION       4500×
```

Camera motion must not advance BiologicalTime unless explicitly coupled.

## 7. Separate real and display geometry

A membrane, DNA molecule, ion, or motor can become subpixel at cellular scale. Exaggeration is allowed only if explicit.

```text
REAL BIOLOGY:
value supported by source

PROJECT DISPLAY:
value used by renderer

KNOWN EXAGGERATION:
display / real

DO NOT INTERPRET AS:
biological measurement
```

## 8. Significant digits

The source explicitly advocates order-of-magnitude biological numeracy. Preserve that spirit.

Do not turn:

```text
~20 µm
```

into:

```text
20.000 µm
```

## 9. Cross-source conflict policy

If sources disagree:

```text
DO NOT average silently.
```

Instead store both values with:
- organism/cell type
- method
- conditions
- source date
- uncertainty

Then choose a runtime value only for a clearly named reference context.

## 10. Initial reference contexts

The quantitative layer should eventually support several explicit reference worlds rather than one mythical "average cell":

```text
E. coli reference cell
budding yeast reference cell
generic cultured mammalian cell
hepatocyte
intestinal epithelial cell
neuron
skeletal muscle cell
plant cell
```

The Scale Spine may use a generic mammalian interphase cell, but that is a **visual reference context**, not a universal mammalian cell.

## 11. Provenance hierarchy

```text
1. project-approved primary/structural source
2. BioNumbers entry linked to primary source
3. Cell Biology by the Numbers synthesis
4. Essential Cell Biology source-scale value
5. explicit project estimate
```

A lower tier must not silently override a higher tier.

## 12. First-pass scope

These files are a curated quantitative backbone, not an attempt to duplicate the entire BioNumbers database.

Only numbers that materially constrain The Seamless Cell belong here:
- scale
- timing
- abundance
- concentrations
- transport
- energy/force
- fidelity/noise
