import Frame from './components/Frame'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import Box from './components/Box'
import Sphere from './components/Sphere'
function App() {
  const box1 = useRef()
  const box2 = useRef()
  const sphereRef = useRef()

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Frame />
      <Canvas
        camera={{ position: [0, 0, 2.5] }}
        style={{ position: 'fixed', width: 'auto', height: 'auto' }}
        className="top-pad bottom-pad left-pad right-pad">
        <Box position={[-1, 0, 0]} ref={box1} />
        <Box position={[1, 1, 0]} ref={box2} />
        <Sphere position={[2, 2, 0]} name="A" ref={sphereRef} />
      </Canvas>
    </div>
  )
}

export default App
