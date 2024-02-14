import React, { useEffect, useState, useRef } from 'react'
import ProjectWLabel from './_ProjectWLabel'
import mui from '../assets/mui.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import tailwind from '../assets/tailwind.svg'
import threejs from '../assets/threejs.svg'
import portfolio_cover from '../assets/portfolio-cover.png'
import { isMobile } from 'react-device-detect'

const Projects = () => {
  const projects = useRef()
  const [offset, setOffset] = useState(0)
  var translating = `translate3d(0px,${offset}px,0px)`

  useEffect(() => {
    if (isMobile) return
    const onScroll = (e) => {
      setOffset(offset - e.deltaY * 0.1)
      if (offset < -700) setOffset(-700)
      if (offset > 0) setOffset(0)
    }
    window.addEventListener('wheel', onScroll, { passive: true })
    if (offset <= 0 && offset >= -700) projects.current.style.transform = translating
    return () => window.removeEventListener('wheel', onScroll)
  }, [offset, translating])

  return (
    <div ref={projects} className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">
      <div className="text-white py-[calc(max(20px,4vmin)*2+260px)] px-[calc(max(20px,4vmin)*2)] text-right">
        <div className="flex w-full md:gap-0 md:flex-col flex-row md:items-end">
          <ProjectWLabel
            project={{
              title: 'Portfólio',
              description: 'Site pessoal com o propósito de expor meus outros projetos.',
              icons: [mui, react, redux, , tailwind, , threejs],
              cover: portfolio_cover
            }}
          />
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
          <p>E</p>
          <p>F</p>
          <p>G</p>
          <p>H</p>
          <p>I</p>
          <p>J</p>
          <p>K</p>
          <p>L</p>
          <p>M</p>
          <p>N</p>
          <p>O</p>
          <p>P</p>
          <p>Q</p>
          <p>R</p>
          <p>S</p>
          <p>T</p>
          <p>U</p>
          <p>V</p>
          <p>W</p>
          <p>X</p>
          <p>Y</p>
          <p>Z</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
