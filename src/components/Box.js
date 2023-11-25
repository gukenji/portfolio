import React, { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = forwardRef((props, ref) => {
  useFrame(({ pointer, viewport }) => {
    // const time_elapsed = state.clock.getElapsedTime()
    const x = (pointer.x * viewport.width) / 2.5
    const y = (-pointer.y * viewport.height) / 2.5
    ref.current.lookAt(x, y, 2.5)
  })

  return (
    //objeto
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  )
})
export default Box
