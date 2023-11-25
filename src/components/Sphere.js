import React, { useState, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere = forwardRef((props, ref) => {
  console.log(ref)
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2.5
    const y = (-pointer.y * viewport.height) / 2.5
    ref.current.lookAt(x, y, 2.5)
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.1
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
