import React, { forwardRef, useEffect, useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Points, useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import galaxy from '../static/galaxy.glb'
const Galaxy = forwardRef((props, ref) => {
  const galaxyRef = useRef()
  const galaxyCenterLightRef = useRef()
  const { nodes } = useGLTF(galaxy)
  const [positions, colors] = useMemo(() => {
    nodes.Object_2.geometry.center()
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    )
    const colors = new Float32Array(positions.length)
    const getDistanceToCenter = (x, y, z) => Math.sqrt(x * x + y * y + z * z)

    const color = new THREE.Color()
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]
      const distanceToCenter = getDistanceToCenter(x, y, z)
      const normalizedDistanceToCenter = distanceToCenter / 100
      color.setRGB(
        Math.cos(normalizedDistanceToCenter) ** 3,
        THREE.MathUtils.randFloat(0.5, 1),
        Math.sin(normalizedDistanceToCenter) ** 2 + 1
      )
      color.toArray(colors, i)
    }
    return [positions, colors]
  }, [nodes])
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() / 5
    ref.current.scale.setScalar(Math.sin(clock.getElapsedTime() / 2) + 1.5)
  })
  return (
    <group {...props} dispose={null} ref={ref}>
      {/* <OrbitControls enableDamping={true} /> */}

      <pointLight
        position={[0, 0, 0]}
        ref={galaxyCenterLightRef}
        intensity={1}
      />
      <Points scale={0.05} positions={positions} colors={colors}>
        <pointsMaterial
          // map={starTexture}
          transparent
          depthWrite={false}
          vertexColors
          opacity={1}
          depthTest
          size={0.01}
        />
      </Points>
      <EffectComposer autoClear={false}>
        <SelectiveBloom
          intensity={0.2}
          luminanceThreshold={0.001}
          luminanceSmoothing={0.225}
          lights={[galaxyCenterLightRef]}
        />
      </EffectComposer>
    </group>
  )
})
export default Galaxy
