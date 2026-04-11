import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

import { COLORS, clamp, lerp } from './utils/constants.js';
import { LODManager } from './core/LODManager.js';
import { CellWorld } from './worlds/CellWorld.js';
import { OrganelleWorld } from './worlds/OrganelleWorld.js';
import { MolecularWorld } from './worlds/MolecularWorld.js';
import { NucleusWorld } from './worlds/NucleusWorld.js';
import { CentralDogmaWorld } from './worlds/CentralDogmaWorld.js';
import { TransportWorld } from './worlds/TransportWorld.js';
import { TissueWorld } from './worlds/TissueWorld.js';
import { SignalingWorld } from './worlds/SignalingWorld.js';
import { DivisionWorld } from './worlds/DivisionWorld.js';
import { ApoptosisWorld } from './worlds/ApoptosisWorld.js';
import { HUD } from './ui/HUD.js';

// ════════════════════════════════════════════════════════════
//  THE SEAMLESS CELL — Main Entry Point
// ════════════════════════════════════════════════════════════

class SeamlessCell {
  constructor() {
    this.clock = new THREE.Clock();
    this.zoomValue = 0.3; // start at whole-cell view
    this.targetZoom = 0.3;

    this._initRenderer();
    this._initScene();
    this._initCamera();
    this._initControls();
    this._initLighting();
    this._initPostProcessing();
    this._initWorlds();
    this._initHUD();
    this._initScrollZoom();

    this._animate();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(COLORS.background, 1);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    const container = document.getElementById('canvas-container');
    container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => this._onResize());
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(COLORS.background, 0.01);
  }

  _initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.01,
      500
    );
    this.camera.position.set(0, 5, 20);
    this.camera.lookAt(0, 0, 0);
  }

  _initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enableZoom = false; // We handle zoom ourselves
    this.controls.enablePan = true;
    this.controls.panSpeed = 0.5;
    this.controls.rotateSpeed = 0.5;
    this.controls.minPolarAngle = 0.3;
    this.controls.maxPolarAngle = Math.PI - 0.3;
  }

  _initLighting() {
    // Hemisphere: warm top, cool bottom
    const hemi = new THREE.HemisphereLight(0xffecd2, 0x1a1a2e, 0.6);
    this.scene.add(hemi);

    // Key light
    const dir = new THREE.DirectionalLight(0xfff4e6, 0.8);
    dir.position.set(10, 15, 10);
    this.scene.add(dir);

    // Fill light
    const fill = new THREE.DirectionalLight(0xb3e5fc, 0.3);
    fill.position.set(-10, -5, -10);
    this.scene.add(fill);

    // Ambient
    const ambient = new THREE.AmbientLight(0x222233, 0.4);
    this.scene.add(ambient);

    // Point light inside "cell" for warmth
    this.innerLight = new THREE.PointLight(0xFFCC80, 0.4, 20);
    this.innerLight.position.set(0, 0, 0);
    this.scene.add(this.innerLight);
  }

  _initPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.4,   // strength
      0.6,   // radius
      0.7    // threshold
    );
    this.composer.addPass(bloom);
    this.bloomPass = bloom;
  }

  _initWorlds() {
    this.lod = new LODManager();

    // ── Energy track worlds (existing) ──
    this.cellWorld = new CellWorld(this.scene);
    this.organelleWorld = new OrganelleWorld(this.scene);
    this.molecularWorld = new MolecularWorld(this.scene);

    // ── Central Dogma track worlds ──
    this.nucleusWorld = new NucleusWorld(this.scene);
    this.centralDogmaWorld = new CentralDogmaWorld(this.scene);

    // ── Transport track worlds ──
    this.transportWorld = new TransportWorld(this.scene);

    // ── Signaling track worlds ──
    this.tissueWorld = new TissueWorld(this.scene);
    this.signalingWorld = new SignalingWorld(this.scene);

    // ── Division track worlds ──
    this.divisionWorld = new DivisionWorld(this.scene);
    this.apoptosisWorld = new ApoptosisWorld(this.scene);

    // Register all with LODManager
    this.lod.registerWorld('cell', this.cellWorld);
    this.lod.registerWorld('organelle_mito', this.organelleWorld);
    this.lod.registerWorld('molecular_atp', this.molecularWorld);
    this.lod.registerWorld('organelle_nucleus', this.nucleusWorld);
    this.lod.registerWorld('molecular_dogma', this.centralDogmaWorld);
    this.lod.registerWorld('organelle_transport', this.transportWorld);
    this.lod.registerWorld('tissue', this.tissueWorld);
    this.lod.registerWorld('molecular_signaling', this.signalingWorld);
    this.lod.registerWorld('organelle_division', this.divisionWorld);
    this.lod.registerWorld('molecular_apoptosis', this.apoptosisWorld);
  }

  _initHUD() {
    this.hud = new HUD(
      (zoom) => { this.targetZoom = zoom; },
      (track) => { this.lod.setTrack(track); }
    );
  }

  _initScrollZoom() {
    // Mouse wheel → zoom
    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.0008;
      this.targetZoom = clamp(this.targetZoom + delta, 0.05, 0.98);
    }, { passive: false });

    // Touch pinch → zoom
    let lastTouchDist = 0;
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDist = Math.sqrt(dx*dx + dy*dy);
      }
    });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const delta = (lastTouchDist - dist) * 0.003;
        this.targetZoom = clamp(this.targetZoom + delta, 0.05, 0.98);
        lastTouchDist = dist;
      }
    });
  }

  _updateCameraForZoom() {
    // Smoothly interpolate actual zoom to target
    this.zoomValue = lerp(this.zoomValue, this.targetZoom, 0.06);

    // Camera distance based on zoom level
    const distances = [
      { zoom: 0.0, dist: 35, fov: 50 },   // tissue (far)
      { zoom: 0.15, dist: 25, fov: 50 },   // cell start
      { zoom: 0.30, dist: 18, fov: 48 },   // cell default
      { zoom: 0.45, dist: 14, fov: 45 },   // cell → organelle transition
      { zoom: 0.60, dist: 16, fov: 42 },   // organelle
      { zoom: 0.75, dist: 12, fov: 40 },   // organelle → molecular
      { zoom: 0.90, dist: 10, fov: 35 },   // molecular
      { zoom: 1.00, dist: 8, fov: 30 },    // max molecular
    ];

    // Find the two keyframes we're between
    let a = distances[0], b = distances[1];
    for (let i = 0; i < distances.length - 1; i++) {
      if (this.zoomValue >= distances[i].zoom && this.zoomValue <= distances[i + 1].zoom) {
        a = distances[i];
        b = distances[i + 1];
        break;
      }
    }

    const t = (this.zoomValue - a.zoom) / (b.zoom - a.zoom || 1);
    const targetDist = lerp(a.dist, b.dist, t);
    const targetFov = lerp(a.fov, b.fov, t);

    // Apply distance by scaling camera position along its view direction
    const dir = this.camera.position.clone().normalize();
    const currentDist = this.camera.position.length();
    const newDist = lerp(currentDist, targetDist, 0.04);
    this.camera.position.copy(dir.multiplyScalar(newDist));

    // Apply FOV
    this.camera.fov = lerp(this.camera.fov, targetFov, 0.04);
    this.camera.updateProjectionMatrix();

    // Adjust fog for zoom level
    this.scene.fog.density = lerp(0.005, 0.02, this.zoomValue);

    // Adjust bloom for zoom level
    this.bloomPass.strength = lerp(0.3, 0.7, this.zoomValue);
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }

  _animate() {
    requestAnimationFrame(() => this._animate());

    const dt = Math.min(this.clock.getDelta(), 0.05); // cap dt

    // ─── Update zoom ───
    this._updateCameraForZoom();
    this.lod.setZoom(this.zoomValue);

    // ─── Update LOD (activates/deactivates worlds) ───
    this.lod.update(dt);

    // ─── Update HUD ───
    this.hud.setZoom(this.zoomValue);

    // ─── Update controls ───
    this.controls.update();

    // ─── Render ───
    this.composer.render();
  }
}

// ─── Boot ───
window.addEventListener('DOMContentLoaded', () => {
  new SeamlessCell();
});
