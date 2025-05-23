'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Laptop() {
  const { scene } = useGLTF('/desktop.glb')

  return (
    <primitive object={scene}>
      <Html
        position={[0, 1.1, -0.01]} // Ajustar según tu pantalla
        transform
        distanceFactor={1.5}
        occlude
        style={{ pointerEvents: 'auto' }}
      >
        <div style={{
          background: 'rgba(0,0,0,0.6)',
          padding: '1em',
          borderRadius: '10px',
          color: 'white',
          textAlign: 'center',
          width: '200px',
        }}>
          <h2>Gonzalo Gómez Pizarro</h2>
          <p>Full Stack Developer</p>
          <a href="https://github.com/tuusuario" target="_blank">GitHub</a><br />
          <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a>
        </div>
      </Html>
    </primitive>
  )
}

export default function Home() {
  return (
    <main style={{ height: '100vh', margin: 0 }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 35 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </main>
  )
}
