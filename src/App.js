import Frame from './components/Frame'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense } from 'react'
import { useSelector } from 'react-redux'
import Galaxy from './components/Galaxy'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const currentPage = useSelector((state) => state.page.value)
  const canvas = useRef()
  const galaxy = useRef()
  const topHelper = useRef()
  const bottomHelper = useRef()
  const leftHelper = useRef()
  const rightHelper = useRef()

  const frame = useRef()
  useEffect(() => {
    topHelper.current.style.height = (window.innerHeight - frame.current?.getBoundingClientRect().height) / 2 + 'px'
    bottomHelper.current.style.height = (window.innerHeight - frame.current?.getBoundingClientRect().height) / 2 + 'px'
    leftHelper.current.style.width = (window.innerWidth - frame.current?.getBoundingClientRect().width) / 2 + 'px'
    rightHelper.current.style.width = (window.innerWidth - frame.current?.getBoundingClientRect().width) / 2 + 'px'
  }, [])
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-background-color overflow-hidden">
      <SpeedInsights />
      <Analytics />
      <div ref={topHelper} className="absolute z-10 w-full top-0 opacity-70 bg-black" />
      <div ref={bottomHelper} className="absolute z-10 w-full bottom-0 opacity-70 bg-black" />
      <div ref={leftHelper} className="absolute z-10 h-full left-0 opacity-70 bg-black" />
      <div ref={rightHelper} className="absolute z-10 h-full right-0 opacity-70 bg-black" />
      <Header />
      <Frame ref={frame} />
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
      {currentPage === 'home' || currentPage == null ? <Home /> : <></>}
      {currentPage === 'projetos' ? <Projects /> : <></>}
      {currentPage === 'contatos' ? <Contacts /> : <></>}
      <Footer />
    </div>
  )
}

export default App
