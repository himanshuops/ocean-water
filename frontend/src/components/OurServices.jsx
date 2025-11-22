import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <div>
      <div className='text-sm flex items-center gap-1 py-3 px-3'>
        <Link to="/" className='cursor-pointer'> Home </Link> <span className='flex items-center gap-1 text-gray-500'>  <IoIosArrowForward/>  OurServices </span>
      </div>
    </div>
  )
}

export default OurServices
