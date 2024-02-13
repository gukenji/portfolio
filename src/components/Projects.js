import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
  const projects = useRef()
  const [offset, setOffset] = useState(0)
  var translating = `translate3d(0px,${offset}px,0px)`

  useEffect(() => {
    const onScroll = (e) => {
      setOffset(offset + e.deltaY)
      if (offset < -700) setOffset(-700)
      if (offset > 0) setOffset(0)
    }

    window.addEventListener('wheel', onScroll, { passive: true })
    projects.current.style.transform = translating

    return () => window.removeEventListener('wheel', onScroll)
  }, [offset])

  return (
    <div ref={projects} className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">
      <div className="text-white py-[calc(max(20px,4vmin)*2+130px)] px-[calc(max(20px,4vmin)*2)] text-right">
        <div>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
          <p>Projetos</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
