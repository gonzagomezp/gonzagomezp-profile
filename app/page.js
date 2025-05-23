'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls  } from '@react-three/drei'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main style={{ height: '100vh', margin: 0 }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 35 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </main>
  )
}
