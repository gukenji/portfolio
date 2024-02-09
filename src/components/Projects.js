import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
  const projects = useRef()
  // const [height, setHeight] = useState(0)
  // var translating
  // const translate = (e) => {
  //   console.log('oi')
  //   setHeight(height + parseInt(e.deltaY))
  //   translating = `translate3d(0px,${height}px,0px)`
  //   projects.current.style.transform = translating
  // }

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
