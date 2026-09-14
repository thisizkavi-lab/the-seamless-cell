# The Seamless Cell — public concept review

The home page presents the three page concepts created from the user's video references. The user requested publication at https://thisizkavi-lab.github.io/the-seamless-cell/. These are static design previews, with working gallery navigation, not a new biological renderer or simulation.

- [Cell interior](https://thisizkavi-lab.github.io/the-seamless-cell/#cell): establish spatial context and select a mitochondrion.
- [Inside the mitochondrion](https://thisizkavi-lab.github.io/the-seamless-cell/#mitochondrion): explore an illustrative inner-membrane landscape.
- [ATP synthesis](https://thisizkavi-lab.github.io/the-seamless-cell/#atp): a proposed process view retaining the selected assembly's visual identity.
- [Existing interactive prototype](https://thisizkavi-lab.github.io/the-seamless-cell/prototype.html): the prior home-page experience, retained with the same source code.

The images are original 1536 × 1024 PNGs generated with the built-in Image Gen tool. Exact prompts and revisions are preserved in [concept-generation-prompts.json](./concept-generation-prompts.json). The final ATP concept was edited from the mitochondrion concept to retain the selected assembly's lavender/blue head, green right-side support, and membrane landmarks. An ambiguously placed intermembrane-space label was removed.

## References

The available English transcripts were read in full and key visual sequences were inspected in the YouTube player. This was a targeted visual review, not uninterrupted playback of every second.

| Video | Inspected sequences | Design observation |
|---|---|---|
| [Mitochondria: the cell's powerhouse — Harvard Online](https://www.youtube.com/watch?v=vkYEYjintqU) | Around 0:31, 1:03, 2:38, and 3:41–3:43 | Membrane layers, sculpted protein surfaces, and compartment depth. |
| [Electron transport chain — Harvard Online](https://www.youtube.com/watch?v=LQmTKxI4Wn4) | Around 1:32, 3:05, and 5:24 | Machinery in membrane context, followed by selective process close-ups. |
| [Overview of cell structure — Harvard Online](https://www.youtube.com/watch?v=XOaiWl-nW1k) | Around 0:39, 1:19, 1:59, and 2:18 | Foreground occlusion, intermediate structures, and background membranes. |

No video frames, logos, or audio are included. Blue/teal, lavender, and green are restrained display choices derived from the references' visual direction. Glowing particle cues are not adopted as the definition of energy, ions, or proton-motive force.

## Scientific limits

The repository's scientific canon remains authoritative. Relevant records consulted were `E.mitochondrion`, `E.atp_synthase`, `P.respiratory_electron_transport`, `P.atp_synthesis`, `P.oxidative_phosphorylation`, and guardrails `GR.095` and `GR.096`.

These images are project visual models, not `SOURCE_FACT`, microscopy, measured geometry, or retrieved structural coordinates. Colors, crowding, surface detail, apparent size, membrane thickness, and depth of field are illustrative. Surface details are especially exaggerated in the cell-level concept. Pixels are not a physical ruler. No organelle census, universal dimensions, measured rate, coupling ratio, or quantitative binding is claimed.

The ATP-synthase silhouette is not a validated structural asset. Subunit geometry, membrane insertion of the base, membrane topology, side-specific accessibility, physical scale, and rotor/stator relationships need validation before a 3D implementation. Do not derive atom positions or molecule counts from this artwork. Pictorial continuity is not an implemented persistent-instance system.

Observer sectioning does not imply membrane rupture. The proposed "Biology paused" and playback controls are part of static mockups. No biological motion, process kinetics, camera precision, or rendering performance is demonstrated. The mobile gallery fits the desktop images; it is not a responsive learner-interface concept.

Reference discrepancy retained: the first video's exported transcript around 2:39 names complexes II, III, and IV in a proton-pumping sentence, whereas the second transcript at 2:24–2:39 names I, III, and IV and distinguishes II. Narration/caption origin was not resolved here; this discrepancy was not adopted as science or used to rewrite the scientific canon.

## Publication architecture

Vite builds two entries: the concept gallery at `index.html` and the preserved prototype at `prototype.html`. Gallery code lives in `src/review/`; original image assets are copied through `public/visual-review/`. Runtime-created image links use Vite's base URL so they work under the GitHub Pages project path. The existing GitHub Pages workflow builds and publishes `dist/` on pushes to main.

This publication contains no unfinished V2 runtime work and changes no files under `science/` or the existing prototype's `src/` directories. Its previous entry HTML is preserved as `prototype.html`.

Local review:

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1
```

Open the printed preview address with `/the-seamless-cell/` appended. Append `prototype.html` for the retained interactive experience. Use the three navigation links or left/right arrow keys to compare concepts and "Open full resolution" to view the selected PNG.
