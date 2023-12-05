import React, { forwardRef, useEffect, useRef } from 'react'
import earthObjGLB from '../static/earth.glb'
import { Clone, OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'

const Earth = forwardRef((props, ref) => {
  const earth = useGLTF(earthObjGLB)
  const { scene, nodes, materials, animations } = earth
  materials['Atmosphere'].emissiveIntensity = 0

  useEffect(() => {})

  return (
    <>
      <mesh {...props} ref={ref} scale={0.2}>
        <Clone object={scene} />
      </mesh>
    </>
  )
})

export default Earth
