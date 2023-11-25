import React from 'react'
import Box from './Sphere'
import { Canvas } from '@react-three/fiber'
import Sphere from './Sphere'

const SphereCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      style={{ position: 'fixed', width: 'auto', height: 'auto' }}
      className="top-pad bottom-pad left-pad right-pad">
      <Sphere position={[-0.75, 1, 0]} name="A" />
      <Sphere position={[-0.75, 0, 0]} name="B" />
      <Sphere position={[-0.75, -1, 0]} name="C" />
      <Sphere position={[0.75, 1, 0]} name="D" />
      <Sphere position={[0.75, 0, 0]} name="E" />
      <Sphere position={[0.75, -1, 0]} name="F" />
    </Canvas>
  )
}

export default SphereCanvas
