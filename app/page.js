/** @format */

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import DesktopContent from "./components/DesktopContent";
import MobileContent from "./components/MobileContent";
import DeviceSelector from "./components/DeviceSelector";

function Laptop() {
  const { scene } = useGLTF("/desktop.glb");

  return (
    <primitive object={scene}>
      <DesktopContent />
    </primitive>
  );
}

function Smartphone({ currentDevice }) {
  const { scene } = useGLTF("/phone.glb");

  return (
    <primitive 
      object={scene} 
      position={[2, 89.5, 25]} 
      scale={10}
      rotation={[Math.PI/2, 0, -Math.PI/2]}
      ambientLight={<ambientLight intensity={10} />}
    >
      {currentDevice === 'mobile' && <MobileContent />}
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
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [isSelectorCollapsed, setIsSelectorCollapsed] = useState(false);
  const controlsRef = useRef();

  // Define camera positions for each device
  const cameraPositions = {
    desktop: {
      position: [0, 3, 6], // Frente al laptop, no a la izquierda
      target: [0, 118, 10],
      maxPolarAngle: Math.PI / 2.2,
      minPolarAngle: Math.PI / 6,
      maxAzimuthAngle: -Math.PI / 4,
      minAzimuthAngle: -4*(Math.PI / 4),
      maxDistance: 30,
      minDistance: 0,
    },
    mobile: {
      position: [2, 3, 3], // Más cerca del teléfono, posición frontal
      target: [2, 89.5, 25],
      maxPolarAngle: Math.PI / 2 - (40 * Math.PI / 180),
      minPolarAngle: Math.PI / 4 - (40 * Math.PI / 180),
      maxAzimuthAngle: -Math.PI / 4,
      minAzimuthAngle: -3 * Math.PI / 4,
      maxDistance: 15,
      minDistance: 2
    }
  };

  const handleDeviceChange = (device) => {
    setCurrentDevice(device);
    
    if (controlsRef.current) {
      const targetConfig = cameraPositions[device];
      
      // Animate camera position
      controlsRef.current.object.position.set(...targetConfig.position);
      controlsRef.current.target.set(...targetConfig.target);
      
      // Set initial azimuth angle if specified
      if (targetConfig.initialAzimuth !== undefined) {
        controlsRef.current.setAzimuthalAngle(targetConfig.initialAzimuth);
      }
      
      // Update controls limits
      controlsRef.current.maxPolarAngle = targetConfig.maxPolarAngle;
      controlsRef.current.minPolarAngle = targetConfig.minPolarAngle;
      controlsRef.current.maxAzimuthAngle = targetConfig.maxAzimuthAngle;
      controlsRef.current.minAzimuthAngle = targetConfig.minAzimuthAngle;
      controlsRef.current.maxDistance = targetConfig.maxDistance;
      controlsRef.current.minDistance = targetConfig.minDistance;
      
      controlsRef.current.update();
    }
  };

  return (
    <main style={{ height: "100vh", margin: 0 }}>
      <DeviceSelector 
        onDeviceChange={handleDeviceChange} 
        currentDevice={currentDevice}
        isCollapsed={isSelectorCollapsed}
        onToggleCollapse={() => setIsSelectorCollapsed(!isSelectorCollapsed)}
      />
      
      <Canvas 
        camera={{ position: cameraPositions[currentDevice].position }} 
        style={{ 
          background: "#1c1c1c",
          zIndex: 1000 // Lower z-index than DeviceSelector
        }}
      >
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Floor />
          <Laptop />
          <Smartphone currentDevice={currentDevice} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          target={cameraPositions[currentDevice].target}
          enablePan={false} 
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={cameraPositions[currentDevice].maxPolarAngle}
          minPolarAngle={cameraPositions[currentDevice].minPolarAngle}
          maxAzimuthAngle={cameraPositions[currentDevice].maxAzimuthAngle}
          minAzimuthAngle={cameraPositions[currentDevice].minAzimuthAngle}
          maxDistance={cameraPositions[currentDevice].maxDistance}
          minDistance={cameraPositions[currentDevice].minDistance}
        />
      </Canvas>
    </main>
  );
}

