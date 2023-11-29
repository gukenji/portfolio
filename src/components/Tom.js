import { useLoader } from '@react-three/fiber'
import React, {
  useMemo,
  forwardRef,
  useEffect,
  useRef,
  useReducer
} from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useFrame } from '@react-three/fiber'
import monkeyObj from '../static/monkey.obj'
import monkeyObjGLB from '../static/monkey.glb'
import monkeyAnimatedOGLB from '../static/animatedMonkey.glb'
import animatedTomGLB from '../static/tomAnimated.glb'
import { Color, MeshBasicMaterial, MeshNormalMaterial } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Clone, useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const Tom = forwardRef((props, ref) => {
  const obj = useLoader(OBJLoader, monkeyObj)
  const objGLB = useGLTF(monkeyObjGLB)
  const animatedObjGLB = useGLTF(monkeyAnimatedOGLB)
  const animatedTomObjGLB = useGLTF(animatedTomGLB)
  const { scene, nodes, materials, animations } = animatedTomObjGLB
  const mixer = new THREE.AnimationMixer(scene)
  const { actions } = useAnimations(animations, ref)
  const orbitRef = useRef()

  // const geometry = useMemo(() => {
  //   let g
  //   obj.traverse((c) => {
  //     if (c.type === 'Mesh') {
  //       const _c = c
  //       g = _c.geometry
  //     }
  //   })
  //   return g
  // }, [obj])

  useFrame(({ clock, pointer, viewport }) => {
    // const time_elapsed = state.clock.getElapsedTime()
    const x = (pointer.x * viewport.width) / 2.5
    const y = (-pointer.y * viewport.height) / 2.5
  })

  useEffect(() => {
    // console.log(actions['Action'].play())
    // console.log(actions['Action.001'].play())
    // console.log(actions['Action.002'].play())
    // console.log(actions['Action.003'].play())
    // console.log(actions['Action.004'].play())
    // console.log(actions['Action.005'].play())
    // console.log(actions['Action.006'].play())
    // console.log(actions['Action.007'].play())
    actions['Action.003'].play()
    // console.log(actions['Armature|mixamo.com|Layer0.005'].play())
    // console.log(actions['Armature|mixamo.com|Layer0.005'])
  })

  return (
    <>
      {/* // <mesh {...props} ref={ref} geometry={geometry} scale={0.4}> */}
      <OrbitControls ref={orbitRef} enableDamping={true} />
      <mesh {...props} ref={ref} scale={0.7}>
        {/* <Clone object={objGLB.scene} /> */}
        <Clone object={scene} />
        <meshPhongMaterial />
      </mesh>
    </>
  )
})

export default Tom
