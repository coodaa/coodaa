'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/Volksbuehne.glb')
  return (
    <Center>
      <primitive object={scene} scale={0.8} />
    </Center>
  )
}

useGLTF.preload('/Volksbuehne.glb')

export default function VbViewer() {
  return (
    <div className="w-full h-full relative" role="region" aria-label="Interaktiver 3D-Viewer der Volksbühne Berlin">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model />
          <Environment preset="sunset" />
          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={20}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none" aria-live="polite">
        <p className="text-xs uppercase tracking-widest font-medium text-muted">
          Volksbühne — Berlin
        </p>
        <p className="text-xs mt-1 text-accent-light">
          Drehen · Zoomen · Erkunden
        </p>
      </div>
    </div>
  )
}
