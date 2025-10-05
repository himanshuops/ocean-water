import React from 'react'
import LeftBox from './LeftBox'
import RightBox from './RightBox'


const Developed = () => {

  return (
    <div className=" flex bg-white ">
        <div className="w-1/5">
            <LeftBox/>
        </div>
        <div className="flex-1">
            <RightBox/>
        </div>
    </div>
  )
}

export default Developed
