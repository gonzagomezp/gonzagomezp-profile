/** @format */

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import DesktopContent from "./components/DesktopContent";
import MobileContent from "./components/MobileContent";
import DeviceSelector from "./components/DeviceSelector";

function Laptop({ lightsOn }) {
  const { scene } = useGLTF("/desktop.glb");

  return <primitive object={scene}>{lightsOn && <DesktopContent />}</primitive>;
}

function Smartphone({ currentDevice, lightsOn }) {
  const { scene } = useGLTF("/phone.glb");

  return (
    <primitive
      object={scene}
      position={[2, 89.5, 25]}
      scale={10}
      rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      ambientLight={<ambientLight intensity={10} />}
    >
      {currentDevice === "mobile" && lightsOn && <MobileContent />}
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

function WelcomeOverlay({ onStart, isAnimating }) {
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-2000 ${
        isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ zIndex: 99999 }}
    >
      <div className="text-center mx-4 max-w-3xl">
        <button
          onClick={onStart}
          className="relative bg-gradient-to-r from-purple-800 to-pink-600 text-green-300 px-10 py-5 rounded-lg text-xl md:text-2xl font-mono font-bold hover:from-purple-700 hover:to-pink-500 transform hover:scale-105 transition-all duration-500 shadow-lg border-2 border-green-400 hover:border-yellow-400"
          style={{
            fontFamily: "monospace",
            boxShadow: "0 0 15px rgba(255, 0, 255, 0.3)",
            background: "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)",
            backgroundSize: "200% 200%",
            animation: "gentleGlow 4s ease-in-out infinite",
          }}
        >
          <span className="relative text-base sm:text-xl z-10">START ADVENTURE 🚀</span>
        </button>
        <div className="mt-4 text-green-400 font-mono text-sm opacity-70">
          Version 2025.07.24
        </div>
      </div>
      <style jsx>{`
        @keyframes gentleGlow {
          0%,
          100% {
            background-position: 0% 50%;
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
          }
          50% {
            background-position: 100% 50%;
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [currentDevice, setCurrentDevice] = useState("desktop");
  const [isSelectorCollapsed, setIsSelectorCollapsed] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(0);
  const controlsRef = useRef();

  // Animate light intensity when starting
  useEffect(() => {
    if (isAnimating) {
      let startTime = null;
      const duration = 3000; // 3 seconds animation

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          // Ease-in-out function for smooth animation
          const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          setLightIntensity(easeProgress * 2);
          requestAnimationFrame(animate);
        } else {
          setLightIntensity(2);
          setLightsOn(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isAnimating]);

  // Define camera positions for each device
  const cameraPositions = {
    desktop: {
      position: [0, 3, 6], // Frente al laptop, no a la izquierda
      target: [0, 118, 10],
      maxPolarAngle: Math.PI / 2.2,
      minPolarAngle: Math.PI / 6,
      maxAzimuthAngle: -Math.PI / 4,
      minAzimuthAngle: -4 * (Math.PI / 4),
      maxDistance: 30,
      minDistance: 0,
    },
    mobile: {
      position: [2, 3, 3], // Más cerca del teléfono, posición frontal
      target: [2, 89.5, 25],
      maxPolarAngle: Math.PI / 2 - (40 * Math.PI) / 180,
      minPolarAngle: Math.PI / 4 - (40 * Math.PI) / 180,
      maxAzimuthAngle: -Math.PI / 4,
      minAzimuthAngle: (-3 * Math.PI) / 4,
      maxDistance: 15,
      minDistance: 2,
    },
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

  const handleStartAdventure = () => {
    setIsAnimating(true);
  };

  return (
    <main style={{ height: "100vh", margin: 0 }}>
      {!lightsOn && <WelcomeOverlay onStart={handleStartAdventure} isAnimating={isAnimating} />}

      {lightsOn && (
        <DeviceSelector
          onDeviceChange={handleDeviceChange}
          currentDevice={currentDevice}
          isCollapsed={isSelectorCollapsed}
          onToggleCollapse={() => setIsSelectorCollapsed(!isSelectorCollapsed)}
        />
      )}

      <Canvas
        camera={{ position: cameraPositions[currentDevice].position }}
        style={{
          background: `rgb(${Math.floor(5 * (lightIntensity / 2))}, ${Math.floor(
            5 * (lightIntensity / 2)
          )}, ${Math.floor(5 * (lightIntensity / 2))})`,
          zIndex: 1000,
        }}
      >
        <ambientLight intensity={lightIntensity} />
        <Suspense fallback={null}>
          {/* <Floor /> */}
          <Laptop lightsOn={lightsOn} />
          <Smartphone currentDevice={currentDevice} lightsOn={lightsOn} />
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
