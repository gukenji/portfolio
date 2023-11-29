import React, { forwardRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

const Box = forwardRef((props, ref) => {
  const { meshWireframe } = useControls({
    meshWireframe: {
      value: false
    }
  })

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
      <meshBasicMaterial color="white" wireframe={meshWireframe} />
    </mesh>
  )
})
export default Box
