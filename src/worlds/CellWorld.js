import * as THREE from 'three';
import { COLORS, rand, randomInSphere, randomOnSphere, lerp } from '../utils/constants.js';

/**
 * CellWorld — the whole-cell view (zoom 0.15 – 0.45)
 * Shows: membrane, nucleus, mitochondria, ER, vesicles, microtubules
 */
export class CellWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.name = 'CellWorld';
    scene.add(this.group);

    this.time = 0;
    this._buildMembrane();
    this._buildNucleus();
    this._buildMitochondria();
    this._buildER();
    this._buildVesicles();
    this._buildMicrotubules();
    this._buildRibosomes();
  }

  _buildMembrane() {
    const geo = new THREE.IcosahedronGeometry(10, 4);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.membrane,
      transparent: true,
      opacity: 0.15,
      roughness: 0.3,
      metalness: 0.0,
      transmission: 0.6,
      thickness: 0.5,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.membrane = new THREE.Mesh(geo, mat);
    this.group.add(this.membrane);
  }

  _buildNucleus() {
    const nucGroup = new THREE.Group();

    // Nuclear envelope
    const envGeo = new THREE.IcosahedronGeometry(3.2, 3);
    const envMat = new THREE.MeshPhysicalMaterial({
      color: COLORS.nucleus,
      transparent: true,
      opacity: 0.35,
      roughness: 0.4,
      metalness: 0.1,
      transmission: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.nucleusEnvelope = new THREE.Mesh(envGeo, envMat);
    nucGroup.add(this.nucleusEnvelope);

    // Nucleolus
    const nclGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const nclMat = new THREE.MeshStandardMaterial({
      color: 0x283593,
      transparent: true,
      opacity: 0.7,
      roughness: 0.6,
    });
    const nucleolus = new THREE.Mesh(nclGeo, nclMat);
    nucleolus.position.set(0.5, 0.3, 0);
    nucGroup.add(nucleolus);

    // Chromatin — scattered small blobs
    const chrGeo = new THREE.SphereGeometry(0.15, 6, 6);
    const chrMat = new THREE.MeshStandardMaterial({ color: 0x1A237E, opacity: 0.5, transparent: true });
    for (let i = 0; i < 40; i++) {
      const p = randomInSphere(2.8);
      const blob = new THREE.Mesh(chrGeo, chrMat);
      blob.position.set(...p);
      blob.scale.setScalar(rand(0.5, 1.5));
      nucGroup.add(blob);
    }

    nucGroup.position.set(0, 0.5, 0);
    this.group.add(nucGroup);
    this.nucleusGroup = nucGroup;
  }

  _buildMitochondria() {
    // Elongated capsule-like shapes
    const geo = new THREE.CapsuleGeometry(0.25, 0.8, 4, 8);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.mitochondria,
      transparent: true,
      opacity: 0.85,
      roughness: 0.5,
    });

    const count = 25;
    this.mitoMesh = new THREE.InstancedMesh(geo, mat, count);
    this.mitoData = [];

    const dummy = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const pos = randomInSphere(8);
      // Keep them outside nucleus
      const dist = Math.sqrt(pos[0]**2 + pos[1]**2 + pos[2]**2);
      if (dist < 4) {
        pos[0] *= 2; pos[1] *= 2; pos[2] *= 2;
      }

      const rot = new THREE.Euler(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI));
      const scale = rand(0.8, 1.4);
      const speed = rand(0.1, 0.3);
      const orbitAxis = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1)).normalize();

      dummy.makeRotationFromEuler(rot);
      dummy.setPosition(pos[0], pos[1], pos[2]);
      dummy.scale(new THREE.Vector3(scale, scale, scale));
      this.mitoMesh.setMatrixAt(i, dummy);

      this.mitoData.push({
        basePos: new THREE.Vector3(...pos),
        rot, scale, speed, orbitAxis,
        phase: rand(0, Math.PI * 2),
      });
    }
    this.mitoMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.mitoMesh);
  }

  _buildER() {
    // ER as a network of curves
    const erGroup = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.er,
      transparent: true,
      opacity: 0.4,
      roughness: 0.6,
      side: THREE.DoubleSide,
    });

    // Create tubular ER segments
    for (let i = 0; i < 15; i++) {
      const points = [];
      const start = randomInSphere(7);
      let current = new THREE.Vector3(...start);

      for (let j = 0; j < 6; j++) {
        points.push(current.clone());
        current = current.clone().add(
          new THREE.Vector3(rand(-1.5, 1.5), rand(-1.5, 1.5), rand(-1.5, 1.5))
        );
        // Keep within cell
        if (current.length() > 9) current.normalize().multiplyScalar(8);
        // Keep outside nucleus
        if (current.length() < 4) current.normalize().multiplyScalar(4.5);
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.08, 6, false);
      const tube = new THREE.Mesh(tubeGeo, mat);
      erGroup.add(tube);
    }

    this.group.add(erGroup);
    this.erGroup = erGroup;
  }

  _buildVesicles() {
    const geo = new THREE.SphereGeometry(0.12, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.vesicle,
      emissive: COLORS.vesicle,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.8,
    });

    const count = 200;
    this.vesicleMesh = new THREE.InstancedMesh(geo, mat, count);
    this.vesicleData = [];

    const dummy = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const pos = randomInSphere(9);
      if (Math.sqrt(pos[0]**2 + pos[1]**2 + pos[2]**2) < 3.5) {
        pos[0] *= 2.5; pos[1] *= 2.5; pos[2] *= 2.5;
      }
      const vel = new THREE.Vector3(rand(-0.3, 0.3), rand(-0.3, 0.3), rand(-0.3, 0.3));
      dummy.setPosition(pos[0], pos[1], pos[2]);
      this.vesicleMesh.setMatrixAt(i, dummy);
      this.vesicleData.push({
        pos: new THREE.Vector3(...pos),
        vel,
      });
    }
    this.vesicleMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.vesicleMesh);
  }

  _buildMicrotubules() {
    // Radiating from centrosome near nucleus
    const mtGroup = new THREE.Group();
    const centrosome = new THREE.Vector3(2.5, 0.5, 0); // Near nucleus

    const mat = new THREE.LineBasicMaterial({
      color: COLORS.microtubule,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < 30; i++) {
      const dir = new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
      const len = rand(4, 9);
      const points = [];
      const steps = 8;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const p = centrosome.clone().add(dir.clone().multiplyScalar(t * len));
        // Slight wobble
        p.x += Math.sin(t * 3 + i) * 0.15;
        p.y += Math.cos(t * 2 + i) * 0.15;
        points.push(p);
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, mat);
      mtGroup.add(line);
    }

    // Centrosome dot
    const cGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const cMat = new THREE.MeshStandardMaterial({ color: 0x90CAF9, emissive: 0x42A5F5, emissiveIntensity: 0.5 });
    const centrosomeMesh = new THREE.Mesh(cGeo, cMat);
    centrosomeMesh.position.copy(centrosome);
    mtGroup.add(centrosomeMesh);

    this.group.add(mtGroup);
  }

  _buildRibosomes() {
    const geo = new THREE.SphereGeometry(0.06, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x795548,
      transparent: true,
      opacity: 0.6,
    });

    const count = 300;
    this.ribosomeMesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const pos = randomInSphere(9);
      if (Math.sqrt(pos[0]**2 + pos[1]**2 + pos[2]**2) < 3.5) {
        pos[0] *= 2.2; pos[1] *= 2.2; pos[2] *= 2.2;
      }
      dummy.setPosition(pos[0], pos[1], pos[2]);
      this.ribosomeMesh.setMatrixAt(i, dummy);
    }
    this.ribosomeMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.ribosomeMesh);
  }

  setOpacity(opacity) {
    this.group.traverse((child) => {
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => { if (m.transparent) m.opacity = m._baseOpacity * opacity; });
        } else if (child.material.transparent) {
          if (child.material._baseOpacity === undefined) {
            child.material._baseOpacity = child.material.opacity;
          }
          child.material.opacity = child.material._baseOpacity * opacity;
        }
      }
    });
  }

  update(dt, zoomValue) {
    this.time += dt;

    // ─── Animate mitochondria (slow drift + wobble) ───
    const dummy = new THREE.Matrix4();
    const tmpQ = new THREE.Quaternion();
    const tmpV = new THREE.Vector3();

    for (let i = 0; i < this.mitoData.length; i++) {
      const d = this.mitoData[i];
      const t = this.time * d.speed + d.phase;

      // Gentle orbit around base position
      const offset = new THREE.Vector3(
        Math.sin(t * 0.5) * 0.3,
        Math.cos(t * 0.7) * 0.2,
        Math.sin(t * 0.3 + 1) * 0.3
      );

      const pos = d.basePos.clone().add(offset);

      // Slow rotation
      const rot = new THREE.Euler(
        d.rot.x + t * 0.1,
        d.rot.y + t * 0.15,
        d.rot.z + t * 0.05,
      );

      dummy.makeRotationFromEuler(rot);
      dummy.setPosition(pos.x, pos.y, pos.z);
      dummy.scale(tmpV.set(d.scale, d.scale, d.scale));
      this.mitoMesh.setMatrixAt(i, dummy);
    }
    this.mitoMesh.instanceMatrix.needsUpdate = true;

    // ─── Animate vesicles (random walk) ───
    const vDummy = new THREE.Matrix4();
    for (let i = 0; i < this.vesicleData.length; i++) {
      const v = this.vesicleData[i];
      // Random walk with boundary
      v.vel.x += rand(-0.02, 0.02);
      v.vel.y += rand(-0.02, 0.02);
      v.vel.z += rand(-0.02, 0.02);
      v.vel.clampLength(0, 0.5);

      v.pos.add(v.vel.clone().multiplyScalar(dt));

      // Keep within cell membrane
      if (v.pos.length() > 9) {
        v.pos.normalize().multiplyScalar(8.5);
        v.vel.negate().multiplyScalar(0.5);
      }
      // Keep outside nucleus
      if (v.pos.length() < 3.5) {
        v.pos.normalize().multiplyScalar(4);
        v.vel.negate().multiplyScalar(0.5);
      }

      vDummy.setPosition(v.pos.x, v.pos.y, v.pos.z);
      this.vesicleMesh.setMatrixAt(i, vDummy);
    }
    this.vesicleMesh.instanceMatrix.needsUpdate = true;

    // ─── Gentle nucleus bob ───
    this.nucleusGroup.position.y = 0.5 + Math.sin(this.time * 0.2) * 0.1;
    this.nucleusGroup.rotation.y = this.time * 0.02;
  }
}
