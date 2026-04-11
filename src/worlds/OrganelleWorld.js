import * as THREE from 'three';
import { COLORS, rand, randomOnSphere, lerp } from '../utils/constants.js';

/**
 * OrganelleWorld — mitochondrion interior (zoom 0.45 – 0.75)
 * Shows: outer membrane, inner membrane with cristae, ATP synthase instances, proton flow
 */
export class OrganelleWorld {
  constructor(scene) {
    this.group = new THREE.Group();
    this.group.name = 'OrganelleWorld';
    this.group.visible = false;
    scene.add(this.group);

    this.time = 0;
    this._buildOuterMembrane();
    this._buildInnerMembrane();
    this._buildCristae();
    this._buildATPSynthaseInstances();
    this._buildMatrixParticles();
    this._buildProtons();
    this._buildETCComplexes();
  }

  _buildOuterMembrane() {
    const geo = new THREE.SphereGeometry(8, 32, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.outerMembrane,
      transparent: true,
      opacity: 0.12,
      roughness: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
      transmission: 0.7,
    });
    this.outerMembrane = new THREE.Mesh(geo, mat);
    this.group.add(this.outerMembrane);
  }

  _buildInnerMembrane() {
    const geo = new THREE.SphereGeometry(6.5, 32, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      color: COLORS.innerMembrane,
      transparent: true,
      opacity: 0.2,
      roughness: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
      transmission: 0.5,
    });
    this.innerMembrane = new THREE.Mesh(geo, mat);
    this.group.add(this.innerMembrane);
  }

  _buildCristae() {
    // Cristae are the infoldings of the inner membrane
    const cristaeGroup = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.cristae,
      transparent: true,
      opacity: 0.45,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 8; i++) {
      // Each crista is a wavy disc-like shape
      const angle = (i / 8) * Math.PI * 2;
      const radius = rand(2, 4);
      const geo = new THREE.TorusGeometry(radius, 0.15, 8, 24);

      const crista = new THREE.Mesh(geo, mat);
      crista.position.set(
        Math.cos(angle) * 2,
        rand(-3, 3),
        Math.sin(angle) * 2
      );
      crista.rotation.set(
        rand(-0.5, 0.5),
        angle + Math.PI / 2,
        rand(-0.3, 0.3)
      );
      cristaeGroup.add(crista);

      // Add a flat disc to each crista to give it volume
      const discGeo = new THREE.CircleGeometry(radius, 24);
      const disc = new THREE.Mesh(discGeo, mat);
      disc.position.copy(crista.position);
      disc.rotation.copy(crista.rotation);
      cristaeGroup.add(disc);
    }

    this.group.add(cristaeGroup);
    this.cristaeGroup = cristaeGroup;
  }

  _buildATPSynthaseInstances() {
    // Mushroom-shaped bumps on inner membrane
    // Stalk
    const stalkGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 6);
    const stalkMat = new THREE.MeshStandardMaterial({
      color: COLORS.gammaStalk,
      emissive: COLORS.gammaStalk,
      emissiveIntensity: 0.2,
    });

    // Head
    const headGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const headMat = new THREE.MeshStandardMaterial({
      color: COLORS.f1head,
      emissive: COLORS.f1head,
      emissiveIntensity: 0.15,
    });

    const count = 60;
    this.synthaseStalkMesh = new THREE.InstancedMesh(stalkGeo, stalkMat, count);
    this.synthaseHeadMesh = new THREE.InstancedMesh(headGeo, headMat, count);
    this.synthaseData = [];

    const dummy = new THREE.Matrix4();
    const normal = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
      const pos = randomOnSphere(6.5);
      normal.set(pos[0], pos[1], pos[2]).normalize();

      // Stalk: positioned on inner membrane surface, pointing inward (toward matrix)
      const stalkPos = new THREE.Vector3(...pos).add(normal.clone().multiplyScalar(-0.3));
      const headPos = stalkPos.clone().add(normal.clone().multiplyScalar(-0.5));

      // Orient stalk to point inward
      const up = new THREE.Vector3(0, 1, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(up, normal.clone().negate());

      dummy.makeRotationFromQuaternion(quat);
      dummy.setPosition(stalkPos.x, stalkPos.y, stalkPos.z);
      this.synthaseStalkMesh.setMatrixAt(i, dummy);

      dummy.makeRotationFromQuaternion(quat);
      dummy.setPosition(headPos.x, headPos.y, headPos.z);
      this.synthaseHeadMesh.setMatrixAt(i, dummy);

      this.synthaseData.push({
        basePos: stalkPos.clone(),
        headPos: headPos.clone(),
        normal: normal.clone(),
        quat: quat.clone(),
        rotPhase: rand(0, Math.PI * 2),
      });
    }

    this.synthaseStalkMesh.instanceMatrix.needsUpdate = true;
    this.synthaseHeadMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.synthaseStalkMesh);
    this.group.add(this.synthaseHeadMesh);
  }

  _buildMatrixParticles() {
    // Small particles representing the dense matrix contents (enzymes)
    const geo = new THREE.SphereGeometry(0.06, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x4E342E,
      transparent: true,
      opacity: 0.3,
    });
    const count = 150;
    this.matrixMesh = new THREE.InstancedMesh(geo, mat, count);
    this.matrixData = [];
    const dummy = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
      const p = randomOnSphere(rand(0.5, 5.5));
      dummy.setPosition(p[0], p[1], p[2]);
      this.matrixMesh.setMatrixAt(i, dummy);
      this.matrixData.push({
        pos: new THREE.Vector3(...p),
        vel: new THREE.Vector3(rand(-0.05,0.05), rand(-0.05,0.05), rand(-0.05,0.05)),
      });
    }
    this.matrixMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.matrixMesh);
  }

  _buildProtons() {
    // Tiny bright particles representing H+ flow in intermembrane space
    const geo = new THREE.SphereGeometry(0.05, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: COLORS.proton,
      emissive: COLORS.proton,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.9,
    });

    const count = 100;
    this.protonMesh = new THREE.InstancedMesh(geo, mat, count);
    this.protonData = [];
    const dummy = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      // Protons in intermembrane space (between inner membrane 6.5 and outer 8)
      const r = rand(6.6, 7.8);
      const p = randomOnSphere(r);
      const vel = new THREE.Vector3(rand(-0.3,0.3), rand(-0.3,0.3), rand(-0.3,0.3));
      dummy.setPosition(p[0], p[1], p[2]);
      this.protonMesh.setMatrixAt(i, dummy);
      this.protonData.push({
        pos: new THREE.Vector3(...p),
        vel,
        speed: rand(0.5, 1.5),
      });
    }
    this.protonMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.protonMesh);
  }

  _buildETCComplexes() {
    // Dark studs on inner membrane representing ETC complexes
    const geo = new THREE.BoxGeometry(0.3, 0.15, 0.3);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x37474F,
      emissive: 0x263238,
      emissiveIntensity: 0.3,
    });

    const count = 80;
    this.etcMesh = new THREE.InstancedMesh(geo, mat, count);
    const dummy = new THREE.Matrix4();
    const normal = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
      const p = randomOnSphere(6.5);
      normal.set(p[0], p[1], p[2]).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(up, normal);
      dummy.makeRotationFromQuaternion(quat);
      dummy.setPosition(p[0], p[1], p[2]);
      this.etcMesh.setMatrixAt(i, dummy);
    }
    this.etcMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.etcMesh);
  }

  setOpacity(opacity) {
    this.group.traverse((child) => {
      if (child.material && child.material.transparent) {
        if (child.material._baseOpacity === undefined) {
          child.material._baseOpacity = child.material.opacity;
        }
        child.material.opacity = child.material._baseOpacity * opacity;
      }
    });
  }

  update(dt, zoomValue) {
    this.time += dt;

    // ─── Animate protons buzzing in intermembrane space ───
    const dummy = new THREE.Matrix4();
    for (let i = 0; i < this.protonData.length; i++) {
      const p = this.protonData[i];
      p.pos.add(p.vel.clone().multiplyScalar(dt * p.speed));

      // Bounce between inner and outer membranes
      const r = p.pos.length();
      if (r > 7.8 || r < 6.6) {
        p.vel.negate();
        p.pos.normalize().multiplyScalar(r > 7.8 ? 7.7 : 6.7);
      }
      // Random jitter
      p.vel.x += rand(-0.05, 0.05);
      p.vel.y += rand(-0.05, 0.05);
      p.vel.z += rand(-0.05, 0.05);
      p.vel.clampLength(0, 0.8);

      dummy.setPosition(p.pos.x, p.pos.y, p.pos.z);
      this.protonMesh.setMatrixAt(i, dummy);
    }
    this.protonMesh.instanceMatrix.needsUpdate = true;

    // ─── Animate matrix particles (Brownian) ───
    for (let i = 0; i < this.matrixData.length; i++) {
      const m = this.matrixData[i];
      m.pos.add(m.vel.clone().multiplyScalar(dt));
      if (m.pos.length() > 6) {
        m.vel.negate();
        m.pos.normalize().multiplyScalar(5.8);
      }
      m.vel.x += rand(-0.01, 0.01);
      m.vel.y += rand(-0.01, 0.01);
      m.vel.z += rand(-0.01, 0.01);
      m.vel.clampLength(0, 0.1);

      dummy.setPosition(m.pos.x, m.pos.y, m.pos.z);
      this.matrixMesh.setMatrixAt(i, dummy);
    }
    this.matrixMesh.instanceMatrix.needsUpdate = true;

    // ─── Gentle pulse on cristae ───
    const pulse = 1 + Math.sin(this.time * 1.5) * 0.02;
    this.cristaeGroup.scale.setScalar(pulse);
  }
}
