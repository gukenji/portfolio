import React, { useEffect, useRef } from 'react'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Github } from '../assets/github.svg'

const Footer = () => {
  const logo = useRef()
  const footer = useRef()

  useEffect(() => {
    const logo_width = logo.current?.getBoundingClientRect().width
    footer.current.style.left = `${window.innerWidth / 2 - logo_width}px`
  })
  return (
    <div className="fixed z-10 md:mt-1 opacity-100" ref={footer}>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/gustavo-takahashi-182bb745/" target="_blank">
          <Linkedin className="w-[30px] md:w-[40px] hover:scale-125 cursor-pointer rounded-lg" ref={logo} />
        </a>
        <a href="https://github.com/gukenji" target="_blank">
          {' '}
          <Github className="w-[30px] md:w-[40px] hover:scale-125 cursor-pointer rounded-lg" />
        </a>
      </div>
    </div>
  )
}

export default Footer
