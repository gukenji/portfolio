import Frame from './components/Frame'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from 'react'
import Flag from './components/Flag'
import Moon from './components/Moon'
import Earth from './components/Earth'

function App() {
  const canvas = useRef()
  const moon = useRef()
  const earth = useRef()

  useEffect(() => {})
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Frame />
      <Canvas
        camera={{ position: [1, 1, 1] }}
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
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Earth ref={earth} position={[2, 2, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Moon ref={earth} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
