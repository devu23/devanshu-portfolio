"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Spline-style 3D Studio Stage Floor Grid
function StudioStage() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (!gridRef.current) return;
    // Gentle floor breath
    const p = state.pointer;
    gridRef.current.position.x = THREE.MathUtils.damp(gridRef.current.position.x, p.x * 0.4, 2, delta);
  });

  return (
    <group position={[0, -2.8, -1]} rotation={[0.18, 0, 0]}>
      {/* Radial floor glow */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5.5, 64]} />
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <gridHelper ref={gridRef} args={[16, 28, "#6D5EF6", "#141422"]} />
    </group>
  );
}

// Floating 3D Tech Glyphs (Spline / Awwwards style orbiting artifacts)
function FloatingTechArtifacts() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const p = state.pointer;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -p.y * 0.25, 3, delta);
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, p.x * 0.4, 3, delta);
  });

  return (
    <group ref={groupRef} position={[0, 0.2, -0.5]}>
      {/* Tech Ring 1 (Electric Cyan) */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[2.8, 1.2, -1]} rotation={[0.4, 0.2, 0]}>
          <torusGeometry args={[0.65, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#06B6D4"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Tech Ring 2 (Deep Violet) */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.9}>
        <mesh position={[-2.9, -0.8, -1.2]} rotation={[Math.PI / 3, 0.3, 0]}>
          <torusGeometry args={[0.85, 0.025, 16, 64]} />
          <meshStandardMaterial
            color="#9C8CFF"
            emissive="#6D5EF6"
            emissiveIntensity={0.9}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Floating Octahedron Data Node */}
      <Float speed={3} rotationIntensity={1.4} floatIntensity={1.5}>
        <mesh position={[-2.4, 1.8, -0.8]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#22D3EE"
            emissiveIntensity={1.2}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating Icosahedron Crystal Node */}
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1}>
        <mesh position={[2.6, -1.4, -0.5]}>
          <icosahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#9C8CFF"
            emissive="#6D5EF6"
            emissiveIntensity={1}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// Ambient Star Dust
function AmbientDust({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#22D3EE"
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3D() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Canvas
      className="!absolute inset-0 z-0 pointer-events-none"
      camera={{ position: [0, 0, 5.8], fov: 46 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 5, 4]} intensity={50} color="#9C8CFF" />
      <pointLight position={[-4, -3, 3]} intensity={45} color="#22D3EE" />
      <directionalLight position={[0, 4, 3]} intensity={0.8} color="#FFFFFF" />

      <group position={[0, -scrollY * 0.003, 0]}>
        <StudioStage />
        <FloatingTechArtifacts />
        <AmbientDust count={100} />
      </group>
    </Canvas>
  );
}
