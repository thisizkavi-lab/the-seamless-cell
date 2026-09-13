---
title: "The Seamless Cell — Quantitative Canon — Forces and Energetics"
status: "QUANTITATIVE_SOURCE_DRAFT"
primary_source: "Cell Biology by the Numbers"
last_updated: "2026-09-13"
---

# Forces and energetics

## 1. Thermal energy is the comparison scale

Cellular free energies are often usefully expressed in:

```text
kBT
```

The quantitative project should store both:
- molar free energy, e.g. kJ/mol
- dimensionless thermal scale, e.g. kBT

when the source supplies them.

## 2. ATP hydrolysis

Under physiological cellular conditions, CBBN uses an ATP hydrolysis free-energy scale of roughly:

```text
~50 kJ/mol
~20 kBT
```

The exact value depends on ATP, ADP, Pi, Mg²⁺, pH, and compartment concentrations.

`DO_NOT_INFER`:
```text
"breaking the high-energy bond releases 50 kJ/mol"
```
is chemically misleading. Free-energy release belongs to the full reaction and cellular concentrations.

## 3. Molecular motor mechanics

Conventional kinesin source scale:

```text
step                     ~8 nm
energy input             ~1 ATP / step
force estimate           ~5 pN
processive run           ~100 steps
```

CBBN derives the ~5 pN force scale using ~50% conversion efficiency from an ATP-scale free-energy input.

`PROJECT_CONSTRAINT`: force should arise from motor/nucleotide state, not arbitrary translation of cargo meshes.

## 4. Hydrophobic effect

For sufficiently large hydrophobic interfaces in water, CBBN gives a simple interfacial rule:

```text
~10 kJ/mol/nm²
≈4 kBT/nm²
```

This is a coarse-grained large-interface heuristic, not a universal microscopic constant for every hydrophobic solute.

## 5. Redox energy

Representative redox potentials:

```text
NAD+/NADH    ~-0.32 V
O2/H2O       ~+0.82 V
ΔE           ~1.14 V
```

For 2 electrons:

```text
ΔG scale ≈230 kJ/mol
≈90 kBT
```

The book uses this to show why NADH oxidation can support several ATP equivalents but real oxidative phosphorylation captures only a fraction of the theoretical maximum.

## 6. ATP yield / respiratory coupling

CBBN source reasoning:

```text
NADH → O2 theoretical free-energy ceiling:
~4.5 ATP equivalents at ~50 kJ/mol ATP

cellular oxidative phosphorylation:
~2–3 ATP per NADH in the discussed scale
```

ECB6 chapter canon retains the more specific source-era estimates:

```text
~2.5 ATP / NADH
~1.5 ATP / FADH2
```

Keep the source contexts distinct.

## 7. Cellular power

CBBN emphasizes that cell power depends strongly on cell type and metabolic state.

Useful scales from its back-of-envelope analysis:

```text
whole adult human:
~100 W total
~1 W/kg body mass

bacterium under rapid reference growth:
~10^-12 W/cell
~1000 W/kg biomass

fibroblast estimate from glucose consumption:
~3×10^-10 W/cell
```

The fibroblast estimate disagrees by orders of magnitude with whole-body averaging; CBBN explicitly treats the discrepancy as a scientific caution rather than hiding it.

## 8. ATP flux

For a ~3000 µm³ mammalian-cell example:

```text
~10^9 ATP/s
```

is derived from one glucose-consumption estimate.

For keratocyte actin-based motility:

```text
~4×10^5 ATP/s
```

was estimated for leading-edge polymerization, much smaller than the illustrative whole-cell ATP budget.

`VERIFY_CONTEXT`: neither number is a universal mammalian-cell ATP rate.

## 9. Protein synthesis energy

CBBN uses:

```text
~4 ATP-equivalent high-energy bonds per incorporated amino acid
```

as an accounting rule for biosynthetic cost.

This helps explain why translation can dominate the energy budget of rapidly growing cells.

## 10. Phosphate-transfer energy is compound-dependent

Representative CBBN examples:

```text
PEP hydrolysis             ~60 kJ/mol
glucose-6-phosphate        ~13 kJ/mol
```

Do not label a phosphate bond as having one intrinsic universal "energy."

## 11. Project representation

Force/energy visualizations should never use generic glow intensity as the only encoded variable.

Prefer explicit metadata:

```yaml
energy_input:
free_energy_change:
force:
distance:
efficiency:
dissipation:
```

## 12. Sources

See `07_sources.md`.
