import Frame from './components/Frame'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from 'react'
import { useSelector } from 'react-redux'
import Galaxy from './components/Galaxy'
import Header from './components/Header'
import { current } from '@reduxjs/toolkit'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  const currentPage = useSelector((state) => state.page.value)
  const canvas = useRef()
  const galaxy = useRef()
  useEffect(() => {})
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <Header />
      <Frame />
      <Canvas
        camera={{ position: [10, 6, 4] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1)
        }}
        gl={{
          physicallyCorrectLights: true,
          antialias: true
        }}
        style={{ position: 'fixed', width: 'auto', height: 'auto' }}
        className="top-pad_canvas bottom-pad_canvas left-pad_canvas right-pad_canvas z-0 opacity-50 fixed"
        ref={canvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Galaxy ref={galaxy} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
      {currentPage == 'home' ? <Home /> : <></>}
      {currentPage == 'projetos' ? <Projects /> : <></>}
      {currentPage == 'contatos' ? <Contacts /> : <></>}
    </div>
  )
}

export default App
