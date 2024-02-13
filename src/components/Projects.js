import React, { useEffect, useState, useRef } from 'react'

const Projects = () => {
  const projects = useRef()
  const [offset, setOffset] = useState(0)
  var translating = `translate3d(0px,${offset}px,0px)`

  useEffect(() => {
    const onScroll = (e) => {
      console.log(e)
      setOffset(offset + e.deltaY * 0.1)
      if (offset < -700) setOffset(-700)
      if (offset > 0) setOffset(0)
    }

    window.addEventListener('wheel', onScroll, { passive: true })
    projects.current.style.transform = translating

    return () => window.removeEventListener('wheel', onScroll)
  }, [offset, translating])

  return (
    <div ref={projects} className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">
      <div className="text-white py-[calc(max(20px,4vmin)*2+130px)] px-[calc(max(20px,4vmin)*2)] text-right">
        <div>
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
