/** @format */

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import DesktopContent from "./components/DesktopContent";
import MobileContent from "./components/MobileContent";

function Laptop() {
  const { scene } = useGLTF("/desktop.glb");

  return (
    <primitive object={scene}>
      <DesktopContent />
    </primitive>
  );
}

function Smartphone() {
  const { scene } = useGLTF("/phone.glb");

  return (
    <primitive 
      object={scene} 
      position={[2, 89.5, 25]} 
      scale={10}
      rotation={[Math.PI/2, 0, -Math.PI/2]}
      ambientLight={<ambientLight intensity={10} />}
    >
      <MobileContent />
    </primitive>
  );
}


function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[20000, 20000]} />
      <meshStandardMaterial color="#292929" />
    </mesh>
  );
}

export default function Home() {
  return (
    <main style={{ height: "100vh", margin: 0 }}>
      <Canvas camera={{ position: [3, 3, 3] }} style={{ background: "#1c1c1c" }}>
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Floor />
          <Laptop />
          <Smartphone />
        </Suspense>
        <OrbitControls
          target={[0, 118, 10]}
          enablePan={false} 
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          maxAzimuthAngle={0}
          minAzimuthAngle={Math.PI}
          maxDistance={80}
          minDistance={0} 
        />
      </Canvas>
    </main>
  );
}

