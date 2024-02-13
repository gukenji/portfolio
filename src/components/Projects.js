import React from 'react'
import { SliderX } from './SliderX'
import { items } from './items'
import { a } from '@react-spring/web'

const Projects = () => {
  return (
    <div className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">
      <SliderX items={items} width={700}>
        {({ css }, i) => (
          <div className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">
            <div className="block m-0 p-0 w-full min-h-[calc(1vh*100)] absolute">{String(i).padStart(2, '0')}</div>
            <a.div style={{ backgroundImage: css }} />
            <p className="bg-white">{css}</p>
          </div>
        )}
      </SliderX>
    </div>
  )
}

export default Projects
