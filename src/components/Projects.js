import React from 'react'
import { a } from '@react-spring/web'
import { Slider } from './Slider'
import { items } from './items'
import styles from '../styles/styles.module.css'
import { isMobile } from 'react-device-detect'
const Projects = () => {
  return (
    <div
      className={`text-white py-[calc(max(20px,4vmin)*2+300px)] md:py-[calc(max(20px,4vmin)*2+320px)] px-[calc(max(20px,4vmin)*2)]`}>
      <div className={`${styles.main} relative z-8`}>
        <Slider items={items} width={isMobile ? 300 : 500}>
          {({ css, content, icons }, i) => (
            <div className={`${styles.content} w-full`}>
              <div className={`${styles.marker}`}>{String(i).padStart(2, '0')}</div>
              <a.div className={`${styles.image}`} style={{ backgroundImage: css }} />
              <p className="relative mt-[-30px] md:mt-5 break-word text-xs md:text-sm w-[90%]">{content}</p>
              {icons?.map((icon) => (
                <img src={icon} className="w-[25px] md:w-[30px] hover:bg-white cursor-pointer rounded-lg" />
              ))}
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
