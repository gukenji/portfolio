import React from 'react'
import { a } from '@react-spring/web'
import { Slider } from './Slider'
import { items } from './items'
import { isMobile } from 'react-device-detect'
const Projects = () => {
  const handleMouseEnter = (e) => {
    e.preventDefault()
    e.target.style.transform = 'scale(1.3,1.3)'
    const p = e.target.nextElementSibling
    p.className = 'absolute p-0 m-0 my-1 text-xs md:text-sm'
  }
  const handleMouseLeave = (e) => {
    e.preventDefault()
    e.target.style.transform = 'scale(1,1)'
    const p = e.target.nextElementSibling
    p.className = 'hidden'
  }

  return (
    <div
      className={`text-white py-[calc(max(20px,4vmin)*2+300px)] md:py-[calc(max(20px,4vmin)*2+320px)] px-[calc(max(20px,4vmin)*2)]`}>
      <div className={`relative z-8 w-full h-[400px]`}>
        <Slider items={items} width={isMobile ? 300 : 500}>
          {({ css, content, icons, title }, i) => (
            <div className={`w-full h-full `}>
              <div className={`text-white relative font-mono`}>
                {String(i).padStart(2, '0')}
                <p className="">{title}</p>
              </div>
              <a.div
                className={`w-[80%] h-[60%] md:h-full bg-contain bg-no-repeat bg-center`}
                style={{ backgroundImage: css }}
              />
              <div className="px-1 md:px-2">
                <p className="relative mt-5 break-word text-xs md:text-sm w-[80%] text-justify ">{content}</p>
                <div className="flex gap-1">
                  {icons?.map((icon) => (
                    <div>
                      <img
                        src={Object.values(icon)}
                        className="w-[25px] md:w-[30px] cursor-pointer rounded-lg"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                      <p className="hidden">{Object.keys(icon)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
