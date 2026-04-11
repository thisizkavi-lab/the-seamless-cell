import { ZOOM, TRACKS, clamp, smoothstep } from '../utils/constants.js';

/**
 * LODManager — controls which world(s) are visible based on zoom + active track.
 * Handles crossfade transitions between adjacent worlds.
 */
export class LODManager {
  constructor() {
    this.worlds = new Map();       // worldId → { group, update, setOpacity }
    this.zoomValue = 0.3;
    this.activeTrack = 'energy';   // default track
    this._onTrackChange = null;
  }

  registerWorld(id, worldObj) {
    this.worlds.set(id, worldObj);
  }

  setZoom(value) {
    this.zoomValue = clamp(value, 0, 1);
  }

  getZoom() {
    return this.zoomValue;
  }

  setTrack(trackName) {
    if (TRACKS[trackName] && this.activeTrack !== trackName) {
      this.activeTrack = trackName;
      if (this._onTrackChange) this._onTrackChange(trackName);
    }
  }

  getTrack() {
    return this.activeTrack;
  }

  onTrackChange(fn) {
    this._onTrackChange = fn;
  }

  /**
   * Returns the active zoom level name
   */
  getActiveLevel() {
    const z = this.zoomValue;
    if (z < 0.15) return 'tissue';
    if (z < 0.45) return 'cell';
    if (z < 0.75) return 'organelle';
    return 'molecular';
  }

  /**
   * Get world IDs that should be visible for the current track
   */
  _getTrackWorlds() {
    const track = TRACKS[this.activeTrack];
    if (!track) return new Set();
    return new Set(Object.values(track.worlds));
  }

  /**
   * Update world visibility and opacity each frame.
   */
  update(dt) {
    const z = this.zoomValue;
    const fw = ZOOM.FADE_WIDTH;

    for (const [id, world] of this.worlds) {
      const range = this._getRange(id);

      // If this world has no range in the active track, hide it
      if (!range) {
        world.group.visible = false;
        continue;
      }

      // Calculate opacity based on zoom position
      let opacity = 0;

      if (z >= range.min && z <= range.max) {
        opacity = 1;

        // Fade in at the start of range
        if (z < range.min + fw) {
          opacity = smoothstep(range.min, range.min + fw, z);
        }
        // Fade out at end of range
        if (z > range.max - fw) {
          opacity = smoothstep(range.max, range.max - fw, z);
        }
      }

      const visible = opacity > 0.01;
      world.group.visible = visible;

      if (visible && world.setOpacity) {
        world.setOpacity(opacity);
      }

      if (visible && world.update) {
        world.update(dt, this.zoomValue);
      }
    }
  }

  _getRange(id) {
    // Base ranges for each zoom level
    const levelRanges = {
      tissue:    { min: -0.1, max: 0.21 },
      cell:      { min: 0.12, max: 0.48 },
      organelle: { min: 0.42, max: 0.78 },
      molecular: { min: 0.72, max: 1.1 },
    };

    // Check which levels this world is mapped to in the active track
    const track = TRACKS[this.activeTrack];
    if (!track) return null;

    let mergedMin = Infinity;
    let mergedMax = -Infinity;
    let found = false;

    for (const [level, worldId] of Object.entries(track.worlds)) {
      if (worldId === id && levelRanges[level]) {
        found = true;
        mergedMin = Math.min(mergedMin, levelRanges[level].min);
        mergedMax = Math.max(mergedMax, levelRanges[level].max);
      }
    }

    return found ? { min: mergedMin, max: mergedMax } : null;
  }
}
