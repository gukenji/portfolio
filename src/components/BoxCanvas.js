import React, { useEffect } from 'react'
import Animation from './Box'
import { Canvas, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import Box from './Box'
const BoxCanvas = () => {
  let box1 = useRef()
  let box2 = useRef()

  return (
    <Canvas
      camera={{ position: [0, 0, 2.5] }}
      style={{ position: 'fixed', width: 'auto', height: 'auto' }}
      className="top-pad bottom-pad left-pad right-pad">
      {/* <Animation position={[0, 0, 0]} name="A" />
      <Animation position={[5, 2, 0]} name="B" /> */}
      <Box position={[-1, 0, 0]} ref={box1} />
      <Box position={[1, 1, 0]} ref={box2} />
    </Canvas>
  )
}

export default BoxCanvas
