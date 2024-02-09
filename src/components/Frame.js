import React, { forwardRef } from 'react'

const Frame = forwardRef((props, ref) => {
  return (
    <div className="fixed top-pad bottom-pad left-pad right-pad" ref={ref}>
      <div className="left-0 top-0 h-full w-px absolute bg-[#fff]"></div>
      <div className="right-0 top-0 h-full w-px absolute bg-[#fff]"></div>
      <div className="left-0 top-0 w-full h-px absolute bg-[#fff]"></div>
      <div className="left-0 bottom-0 w-full h-px absolute bg-[#fff]"></div>
    </div>
  )
})
export default Frame
