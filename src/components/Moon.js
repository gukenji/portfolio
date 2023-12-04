import React, { forwardRef, useEffect, useRef } from 'react'
import moonObjGLB from '../static/moon.glb'
import bump from '../textures/bump.png'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { Clone, OrbitControls, useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three'
const Moon = forwardRef((props, ref) => {
  const objGLB = useGLTF(moonObjGLB)
  const clone = useRef()
  const material = useLoader(TextureLoader, bump)
  const phong = useRef()
  const { scene, nodes, materials, animations } = objGLB
  const orbitRef = useRef()
  useEffect(() => {
    console.log(ref)
    console.log(clone)
    console.log(phong)
  })
  return (
    <>
      <OrbitControls ref={orbitRef} enableDamping={true} />
      <mesh {...props} ref={ref} scale={0.5}>
        <sphereGeometry />
        <meshStandardMaterial bumpMap={material} ref={phong} />
      </mesh>
    </>
  )
})

export default Moon
