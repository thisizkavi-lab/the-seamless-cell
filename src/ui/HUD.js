import { TRACKS } from '../utils/constants.js';

/**
 * HUD — thin UI overlay with zoom slider, track selector, info panel
 */
export class HUD {
  constructor(onZoomChange, onTrackChange) {
    this.onZoomChange = onZoomChange;
    this.onTrackChange = onTrackChange;
    this.currentLevel = '';
    this.activeTrack = 'energy';
    this._build();
  }

  _build() {
    const container = document.createElement('div');
    container.id = 'hud';
    container.innerHTML = `
      <style>
        #hud {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 100;
          font-family: 'Inter', sans-serif;
        }
        #hud * { pointer-events: auto; }

        /* ─── Title ─── */
        #hud-title {
          position: absolute;
          top: 24px; left: 32px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          pointer-events: none;
        }
        #hud-title span {
          color: rgba(255,213,0,0.7);
        }

        /* ─── Track Selector ─── */
        #track-selector {
          position: absolute;
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .track-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(10,10,18,0.7);
          backdrop-filter: blur(8px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s;
          position: relative;
        }
        .track-btn:hover {
          border-color: rgba(255,213,0,0.3);
          background: rgba(30,30,50,0.8);
        }
        .track-btn.active {
          border-color: rgba(255,213,0,0.5);
          background: rgba(40,35,15,0.8);
          box-shadow: 0 0 16px rgba(255,213,0,0.15);
        }
        .track-tooltip {
          position: absolute;
          left: 52px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,10,18,0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 8px 12px;
          white-space: nowrap;
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 110;
        }
        .track-tooltip strong {
          color: rgba(255,213,0,0.8);
          display: block;
          margin-bottom: 2px;
          font-size: 11px;
          letter-spacing: 0.5px;
        }
        .track-btn:hover .track-tooltip {
          opacity: 1;
        }

        /* ─── Zoom Slider ─── */
        #zoom-track {
          position: absolute;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 300px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
          cursor: pointer;
        }
        #zoom-thumb {
          position: absolute;
          left: -8px;
          width: 20px;
          height: 20px;
          background: rgba(255,213,0,0.8);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(255,213,0,0.4);
          transform: translateY(-50%);
          cursor: grab;
          transition: box-shadow 0.2s;
        }
        #zoom-thumb:hover {
          box-shadow: 0 0 20px rgba(255,213,0,0.7);
        }
        #zoom-labels {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          pointer-events: none;
        }
        .zoom-label {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s, text-shadow 0.3s;
          text-align: right;
        }
        .zoom-label.active {
          color: rgba(255,213,0,0.8);
          text-shadow: 0 0 8px rgba(255,213,0,0.3);
        }

        /* ─── Level Indicator ─── */
        #level-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          pointer-events: none;
          transition: color 0.5s;
        }

        /* ─── Info Panel ─── */
        #info-panel {
          position: absolute;
          bottom: 32px;
          left: 80px;
          max-width: 320px;
          padding: 16px 20px;
          background: rgba(10,10,18,0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          font-size: 12px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }
        #info-panel.visible { opacity: 1; }
        #info-panel h3 {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        /* ─── Track badge ─── */
        #track-badge {
          position: absolute;
          top: 56px;
          left: 32px;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,213,0,0.5);
          pointer-events: none;
        }

        /* ─── Controls hint ─── */
        #controls-hint {
          position: absolute;
          top: 24px;
          right: 32px;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          pointer-events: none;
          text-align: right;
          line-height: 1.8;
        }
      </style>

      <div id="hud-title">THE SEAMLESS <span>CELL</span></div>
      <div id="track-badge"></div>

      <div id="controls-hint">
        SCROLL · ZOOM<br/>
        DRAG · ORBIT<br/>
        RIGHT-DRAG · PAN
      </div>

      <div id="track-selector"></div>

      <div id="zoom-track">
        <div id="zoom-thumb"></div>
      </div>

      <div id="zoom-labels">
        <div class="zoom-label" data-level="molecular">Molecular</div>
        <div class="zoom-label" data-level="organelle">Organelle</div>
        <div class="zoom-label" data-level="cell">Whole Cell</div>
        <div class="zoom-label" data-level="tissue">Tissue</div>
      </div>

      <div id="level-indicator">WHOLE CELL</div>

      <div id="info-panel">
        <h3></h3>
        <p></p>
      </div>
    `;
    document.body.appendChild(container);

    this.zoomTrack = container.querySelector('#zoom-track');
    this.zoomThumb = container.querySelector('#zoom-thumb');
    this.zoomLabels = container.querySelectorAll('.zoom-label');
    this.levelIndicator = container.querySelector('#level-indicator');
    this.infoPanel = container.querySelector('#info-panel');
    this.trackBadge = container.querySelector('#track-badge');

    this._buildTrackSelector(container.querySelector('#track-selector'));
    this._setupZoomDrag();
    this.setZoom(0.3);
    this.setTrack('energy');
  }

  _buildTrackSelector(container) {
    for (const [key, track] of Object.entries(TRACKS)) {
      const btn = document.createElement('div');
      btn.className = `track-btn${key === 'energy' ? ' active' : ''}`;
      btn.dataset.track = key;
      btn.innerHTML = `
        ${track.icon}
        <div class="track-tooltip">
          <strong>${track.name}</strong>
          ${track.description}
        </div>
      `;
      btn.addEventListener('click', () => {
        this.setTrack(key);
        if (this.onTrackChange) this.onTrackChange(key);
      });
      container.appendChild(btn);
    }
    this.trackBtns = container.querySelectorAll('.track-btn');
  }

  setTrack(trackName) {
    this.activeTrack = trackName;
    this.trackBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.track === trackName);
    });

    const track = TRACKS[trackName];
    if (track) {
      this.trackBadge.textContent = `${track.icon} ${track.name}`;
    }

    // Force info panel refresh
    this.currentLevel = '';
    this.setZoom(this._lastZoom || 0.3);
  }

  _setupZoomDrag() {
    let dragging = false;

    const updateFromEvent = (e) => {
      const rect = this.zoomTrack.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const pct = 1 - (y / rect.height);
      const clamped = Math.max(0, Math.min(1, pct));
      this.setZoom(clamped);
      this.onZoomChange(clamped);
    };

    this.zoomTrack.addEventListener('mousedown', (e) => {
      dragging = true;
      updateFromEvent(e);
    });
    this.zoomThumb.addEventListener('mousedown', (e) => {
      dragging = true;
      e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
      if (dragging) updateFromEvent(e);
    });
    window.addEventListener('mouseup', () => { dragging = false; });
  }

  setZoom(value) {
    this._lastZoom = value;

    // Position thumb
    const pct = 1 - value;
    this.zoomThumb.style.top = `${pct * 100}%`;

    // Determine active level
    let activeLevel = 'tissue';
    if (value >= 0.75) activeLevel = 'molecular';
    else if (value >= 0.45) activeLevel = 'organelle';
    else if (value >= 0.15) activeLevel = 'cell';

    this.zoomLabels.forEach(label => {
      label.classList.toggle('active', label.dataset.level === activeLevel);
    });

    // Update level indicator and info
    if (this.currentLevel !== activeLevel) {
      this.currentLevel = activeLevel;
      const levelName = this._getLevelName(activeLevel, this.activeTrack);
      this.levelIndicator.textContent = levelName;
      this._showInfo(activeLevel, this.activeTrack);
    }
  }

  _getLevelName(level, track) {
    const names = {
      energy: {
        tissue: 'TISSUE', cell: 'ANIMAL CELL',
        organelle: 'MITOCHONDRION INTERIOR', molecular: 'ATP SYNTHASE',
      },
      dogma: {
        tissue: 'TISSUE', cell: 'ANIMAL CELL',
        organelle: 'NUCLEUS INTERIOR', molecular: 'TRANSCRIPTION & TRANSLATION',
      },
      transport: {
        tissue: 'TISSUE', cell: 'ANIMAL CELL',
        organelle: 'SECRETORY PATHWAY', molecular: 'VESICLE TRANSPORT',
      },
      signaling: {
        tissue: 'CELL COMMUNITY', cell: 'CELL COMMUNITY',
        organelle: 'GPCR SIGNALING CASCADE', molecular: 'GPCR SIGNALING CASCADE',
      },
      division: {
        tissue: 'CELL COMMUNITY', cell: 'CELL COMMUNITY',
        organelle: 'CELL CYCLE + MITOSIS', molecular: 'APOPTOSIS (Cell Death)',
      },
    };
    return names[track]?.[level] || level.toUpperCase();
  }

  _showInfo(level, track) {
    const info = {
      energy: {
        tissue: { title: 'Tissue Level', text: 'Cross-section of animal tissue. Epithelial cells sit on a basal lamina, surrounded by connective tissue.' },
        cell: { title: 'Animal Cell (~20 μm)', text: 'A living cell in constant motion. Vesicles shuttle cargo, mitochondria drift, microtubules grow and shrink. Nothing is ever static.' },
        organelle: { title: 'Mitochondrion Interior', text: 'The powerhouse of the cell. The electron transport chain pumps H⁺ ions across the inner membrane, creating the gradient that drives ATP synthase — the smallest rotary motor in nature.' },
        molecular: { title: 'ATP Synthase', text: 'A molecular turbine spinning at ~100 rev/sec. Protons flow through the F₀ rotor, spinning the γ-stalk, which drives conformational changes in the F₁ head to forge ~3 ATP per revolution.' },
      },
      dogma: {
        tissue: { title: 'Tissue Level', text: 'Cells within tissue are constantly expressing genes — the Central Dogma is running in every nucleus.' },
        cell: { title: 'Animal Cell', text: 'The nucleus stores the genome. DNA is transcribed into mRNA, which exits through nuclear pores to be translated by ribosomes in the cytoplasm.' },
        organelle: { title: 'Nucleus Interior', text: 'Inside the nucleus: chromatin fibers are being transcribed by RNA Polymerase II at ~30 nucleotides/sec. Pre-mRNA is spliced, capped, and polyadenylated before export through nuclear pores.' },
        molecular: { title: 'Central Dogma', text: 'Left: RNA Polymerase unwinds DNA and synthesizes pre-mRNA. Spliceosomes remove introns. Right: Ribosomes translate mRNA into protein at ~6 amino acids/sec, with tRNAs cycling through A→P→E sites.' },
      },
      transport: {
        tissue: { title: 'Tissue Level', text: 'Cells constantly secrete and receive proteins via the secretory and endocytic pathways.' },
        cell: { title: 'Animal Cell', text: 'The ER, Golgi, and plasma membrane are connected by a continuous flow of vesicles — the secretory pathway.' },
        organelle: { title: 'Secretory Pathway', text: 'Proteins made in the rough ER are packaged into COPII vesicles → shipped to the cis-Golgi → modified through medial/trans cisternae → dispatched to the plasma membrane for secretion.' },
        molecular: { title: 'Vesicle Transport', text: 'COPII coats curve the ER membrane into buds. Motor proteins (kinesin/dynein) walk vesicles along microtubule tracks. SNARE proteins drive membrane fusion at the target.' },
      },
      signaling: {
        tissue: { title: 'Cell Community', text: '3-5 cells communicate via paracrine signaling. One cell releases a signal molecule that diffuses to neighboring cells, triggering intracellular cascades.' },
        cell: { title: 'Cell Community', text: 'Signal molecules (green dots) are released by the center cell and diffuse outward. When they reach a neighbor, receptors flash — the signal has been received.' },
        organelle: { title: 'GPCR Cascade', text: 'Watch the cascade: Ligand docks → GPCR activates → G-protein splits (GDP→GTP) → adenylyl cyclase fires → cAMP flood (the amplification!) → PKA opens → transcription factor enters nucleus → gene expression changes.' },
        molecular: { title: 'GPCR Cascade', text: '1 ligand → 1 GPCR → 1 G-protein → 1 adenylyl cyclase → ~10,000 cAMP → hundreds of PKA activated → gene expression changed. The key insight: MASSIVE AMPLIFICATION from a single molecule.' },
      },
      division: {
        tissue: { title: 'Cell Community', text: 'Growth factor signals stimulate cell division. Neighboring cells coordinate when to divide via contact inhibition and secreted growth factors.' },
        cell: { title: 'Cell Community', text: 'Before a cell divides, it must grow, duplicate its DNA (S phase), and check for errors (G2). Growth signals from neighbors determine whether to proceed.' },
        organelle: { title: 'Cell Cycle + Mitosis', text: 'Watch the full cell cycle with named regulators: G1 (Cyclin D-Cdk4/6 → Rb phosphorylation) → p53 checkpoint → S phase (Cyclin E-Cdk2, DNA replication) → G2 → M-Cdk triggers prophase → APC/C activates Separase → Cohesin cleaved → sisters separate → 1 cell → 2 → 4 daughters!' },
        molecular: { title: 'Apoptosis (Cell Death)', text: 'Fas Ligand → Fas Receptor → FADD/DISC → Caspase-8 (scissors) → cleaves Bid → tBid reaches mitochondria → Bax/Bak pores → Cytochrome c leaks → Apoptosome (Apaf-1 wheel) → Caspase-9 → Caspase-3 (executioner) → cell shrinks, blebs, apoptotic bodies.' },
      },
    };
    const data = info[track]?.[level];
    if (data) {
      this.infoPanel.querySelector('h3').textContent = data.title;
      this.infoPanel.querySelector('p').textContent = data.text;
      this.infoPanel.classList.add('visible');
    }
  }
}
