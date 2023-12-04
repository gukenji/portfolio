import React, { useEffect } from 'react'
import vertexShader from './vertexShader.js'
import fragmentShader from './fragmentShader.js'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import textureUrl from '../assets/grain.webp'
const Flag = () => {
  const mesh = useRef()
  const plane = useRef()
  const texture = useTexture(textureUrl)
  const uniforms = useMemo(
    () => ({
      u_amplitude: {
        value: 12.0
      },
      u_time: {
        value: 0.0
      },
      u_colorA: { value: new Color('#FFE486') },
      u_colorB: { value: new Color('#FEB3D9') },
      u_texture: { value: texture },
      u_color: { value: new Color('#FFE486') }
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state
    // console.log(mesh.current.material.uniforms.u_time.value)
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
  })
  useEffect(() => {
    const amount = plane.current.attributes.position.count
    const newAttributeArray = new Float32Array(amount)
    for (let i = 0; i < amount; i++) {
      newAttributeArray[i] = i % 2
    }
    plane.current.setAttribute(
      'a_modulus',
      new THREE.BufferAttribute(newAttributeArray, 1)
    )
    console.log(plane)
  })
  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}>
      <planeGeometry ref={plane} args={[1, 1, 16, 16]} />
      <rawShaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
        map={texture}
      />
    </mesh>
  )
}

export default Flag
