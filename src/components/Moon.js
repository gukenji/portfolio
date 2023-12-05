import React, { forwardRef, useEffect, useRef } from 'react'
import moonObjGLB from '../static/moon.glb'
import { Clone, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
const Moon = forwardRef((props, ref) => {
  const moon = useGLTF(moonObjGLB)
  const geometry = useRef()
  const { scene, nodes, materials, animations } = moon
  useEffect(() => {})
  return (
    <>
      <OrbitControls enableDamping={true} />
      <mesh {...props} ref={ref} scale={0.5}>
        {/* <sphereGeometry ref={geometry} />
        <meshStandardMaterial /> */}
        <Clone object={scene} />
      </mesh>
    </>
  )
})

export default Moon
