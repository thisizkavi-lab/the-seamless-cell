// ─── Color Palette ───
export const COLORS = {
  membrane:     0xF5C542,
  nucleus:      0x1A237E,
  mitochondria: 0xE64A19,
  er:           0x00897B,
  golgi:        0x7E57C2,
  vesicle:      0x4CAF50,
  microtubule:  0x2196F3,
  actin:        0xE91E63,
  atp:          0xFFD600,
  proton:       0xFF6D00,
  background:   0x0a0a12,
  cristae:      0xBF360C,
  innerMembrane: 0xD84315,
  outerMembrane: 0xFF7043,
  matrix:       0x1B0000,
  f0rotor:      0xFF8A65,
  f1head:       0x64B5F6,
  gammaStalk:   0xFFEB3B,
  adp:          0x9E9E9E,
  atpParticle:  0xFFD600,

  // ─── Nuclear / Central Dogma ───
  chromatin:    0x7986CB,
  nucleolus:    0x4DD0E1,
  rnaPol:       0xFFCA28,
  mrna:         0xFF8A65,
  trna:         0x81C784,
  ribosome:     0x90A4AE,
  polypeptide:  0xE040FB,
  dnaBlue:      0x42A5F5,
  dnaCompl:     0x5C6BC0,
  spliceosome:  0xAB47BC,

  // ─── Secretory / Transport ───
  roughER:      0x26A69A,
  golgiCis:     0xFFF176,
  golgiMed:     0xFFB74D,
  golgiTrans:   0xEF5350,
  copII:        0x80DEEA,
  copI:         0xFFAB91,
  clathrin:     0xCE93D8,
  motorKinesin: 0x4FC3F7,
  motorDynein:  0xF48FB1,

  // ─── Signaling ───
  ligand:       0x76FF03,
  gpcr:         0x7C4DFF,
  gProtein:     0xFF6E40,
  camp:         0x00E5FF,
  pka:          0xFFD740,
  transcriptionFactor: 0xEA80FC,

  // ─── Division ───
  chromosome:   0xE040FB,
  kinetochore:  0xFF1744,
  spindle:      0x40C4FF,
  contractileRing: 0xFF4081,
  centrosome:   0x00E676,

  // ─── Cell Cycle Regulators ───
  cyclinD:      0xFFAB40,   // amber
  cyclinE:      0xFF6D00,   // deep orange
  cyclinA:      0xFFC107,   // amber
  cyclinB:      0xFF3D00,   // red-orange
  cdk:          0x8D6E63,   // brown
  rb:           0xE53935,   // red (unphosphorylated)
  rbPhospho:    0x43A047,   // green (phosphorylated)
  p53:          0x00BFA5,   // teal
  apc:          0xAA00FF,   // purple
  separase:     0x76FF03,   // light green
  cohesin:      0xFF9100,   // orange links
  replicationFork: 0x64FFDA, // cyan-green

  // ─── Apoptosis ───
  fas:          0xD50000,   // deep red
  fasLigand:    0xFF1744,   // red
  fadd:         0xFF6F00,   // amber
  caspase8:     0xF4511E,   // red-orange
  bid:          0xFFA726,   // amber
  tBid:         0xEF6C00,   // dark amber
  baxBak:       0xB71C1C,   // dark red
  cytochromeC:  0xFF8F00,   // amber-gold
  apaf1:        0x7C4DFF,   // deep purple
  apoptosome:   0x651FFF,   // indigo
  caspase3:     0xDD2C00,   // scarlet
  apoptoticBody: 0x455A64,  // blue-grey
};

// ─── Focus Tracks ───
export const TRACKS = {
  energy: {
    name: 'Energy',
    icon: '⚡',
    description: 'Glucose → Mitochondria → ATP',
    worlds: {
      cell: 'cell',
      organelle: 'organelle_mito',
      molecular: 'molecular_atp',
    },
  },
  dogma: {
    name: 'Central Dogma',
    icon: '🧬',
    description: 'DNA → RNA → Protein',
    worlds: {
      cell: 'cell',
      organelle: 'organelle_nucleus',
      molecular: 'molecular_dogma',
    },
  },
  transport: {
    name: 'Transport',
    icon: '📦',
    description: 'ER → Golgi → Plasma Membrane',
    worlds: {
      cell: 'cell',
      organelle: 'organelle_transport',
      molecular: 'molecular_dogma', // reuse — vesicle detail TBD
    },
  },
  signaling: {
    name: 'Signaling',
    icon: '📡',
    description: 'Ligand → GPCR → cAMP → Gene Expression',
    worlds: {
      tissue: 'tissue',
      cell: 'tissue',
      organelle: 'molecular_signaling',
      molecular: 'molecular_signaling',
    },
  },
  division: {
    name: 'Division',
    icon: '🔄',
    description: 'Mitosis: Prophase → Cytokinesis',
    worlds: {
      tissue: 'tissue',
      cell: 'tissue',
      organelle: 'organelle_division',
      molecular: 'molecular_apoptosis',
    },
  },
};

// ─── Zoom Ranges ───
export const ZOOM = {
  TISSUE:    { min: 0.00, max: 0.15 },
  CELL:      { min: 0.15, max: 0.45 },
  ORGANELLE: { min: 0.45, max: 0.75 },
  MOLECULAR: { min: 0.75, max: 1.00 },
  // Crossfade zones
  FADE_WIDTH: 0.06,
};

// ─── Math Helpers ───
export function lerp(a, b, t) { return a + (b - a) * t; }
export function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
export function remap(value, inMin, inMax, outMin, outMax) {
  return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

// Random in range
export function rand(min = 0, max = 1) { return Math.random() * (max - min) + min; }

// Random point in sphere
export function randomInSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2 * Math.PI;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random());
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  ];
}

// Random point on sphere surface
export function randomOnSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2 * Math.PI;
  const phi = Math.acos(2 * v - 1);
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi)
  ];
}
