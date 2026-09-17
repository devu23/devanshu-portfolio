"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Knot() {
  const group = useRef<THREE.Group>(null);
  const solid = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.25;
    g.rotation.x += delta * 0.08;
    // cursor parallax
    const tx = state.pointer.x * 0.5;
    const ty = state.pointer.y * 0.5;
    g.rotation.y += (tx - g.rotation.y * 0.0) * 0.0; // keep spin
    g.position.x += (tx - g.position.x) * 0.04;
    g.position.y += (ty - g.position.y) * 0.04;
  });

  return (
    <group ref={group}>
      {/* solid core */}
      <mesh ref={solid}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#6D5EF6"
          metalness={0.35}
          roughness={0.35}
          flatShading
          emissive="#2b2470"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* wireframe shell */}
      <mesh scale={1.18}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.6]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={70} color="#9C8CFF" />
      <pointLight position={[-5, -3, 2]} intensity={55} color="#22D3EE" />
      <Knot />
    </Canvas>
  );
}
