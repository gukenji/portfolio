import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere = forwardRef((props, ref) => {
  console.log(ref)
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)
  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 0.01 * delta
      ref.current.rotation.y += 0.1 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <sphereGeometry />
      <meshBasicMaterial color={hovered ? 0xffffff : 0x00ff00} wireframe />
    </mesh>
  )
})
export default Sphere
