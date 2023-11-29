import Frame from './components/Frame'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from 'react'
import Box from './components/Box'
import Sphere from './components/Sphere'
import { useControls } from 'leva'
import Tom from './components/Tom'
import * as THREE from 'three'
function App() {
  const box1 = useRef()
  const box2 = useRef()
  const sphereRef = useRef()
  const canvas = useRef()
  const tom = useRef()
  const { box1X, box1Y, box1Z } = useControls({
    box1X: {
      value: -1,
      min: 0,
      max: 5,
      step: 1
    },
    box1Y: {
      value: 1,
      min: 0,
      max: 5,
      step: 1
    },
    box1Z: {
      value: 0,
      min: 0,
      max: 5,
      step: 1
    }
  })
  useEffect(() => {})
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Frame />
      <Canvas
        camera={{ position: [0, 0, 2.5] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#808080', 0.5)
        }}
        gl={{
          physicallyCorrectLights: true,
          antialias: true
        }}
        style={{ position: 'fixed', width: 'auto', height: 'auto' }}
        className="top-pad bottom-pad left-pad right-pad"
        ref={canvas}>
        <ambientLight intensity={4.1} />
        <directionalLight position={[0, 0, 2.5]} />
        <Suspense fallback={null}>
          <Tom ref={tom} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
