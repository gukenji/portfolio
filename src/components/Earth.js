import React, { forwardRef, useEffect, useRef } from 'react'
import moonObjGLB from '../static/earth.glb'
import { Clone, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
const Earth = forwardRef((props, ref) => {
  const earth = useGLTF(moonObjGLB)
  const geometry = useRef()
  const { scene, nodes, materials, animations } = earth
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

export default Earth
