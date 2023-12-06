import Frame from './components/Frame'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from 'react'
import Flag from './components/Flag'
import Moon from './components/Moon'
import Earth from './components/Earth'
import Galaxy from './components/Galaxy'
import Header from './components/Header'
function App() {
  const canvas = useRef()
  const moon = useRef()
  const earth = useRef()
  const galaxy = useRef()
  useEffect(() => {})
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Header />
      <Frame />
      <Canvas
        camera={{ position: [10, 6, 4] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1)
        }}
        gl={{
          physicallyCorrectLights: true,
          antialias: true
        }}
        style={{ position: 'fixed', width: 'auto', height: 'auto' }}
        className="top-pad_canvas bottom-pad_canvas left-pad_canvas right-pad_canvas z-10 opacity-20 fixed"
        ref={canvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Galaxy ref={galaxy} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
