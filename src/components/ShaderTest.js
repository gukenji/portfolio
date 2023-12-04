import React, { useRef } from 'react'
import Wave from '../material/Wave'
const ShaderTest = () => {
  const mesh = useRef()
  const ref = useRef()
  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <Wave ref={ref} key={Wave.key} />
    </mesh>
  )
}

export default ShaderTest
