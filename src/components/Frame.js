import React, { forwardRef } from 'react'

const Frame = forwardRef((props, ref) => {
  return (
    <div className="fixed top-pad bottom-pad left-pad right-pad absolute z-9" ref={ref}>
      <div className="left-0 top-0 h-full w-px absolute z-10 bg-[#fff]"></div>
      <div className="right-0 top-0 h-full w-px absolute z-10 bg-[#fff]"></div>
      <div className="left-0 top-0 w-full h-px absolute z-10 bg-[#fff]"></div>
      <div className="left-0 bottom-0 w-full h-px absolute z-10 bg-[#fff]"></div>
    </div>
  )
})
export default Frame
