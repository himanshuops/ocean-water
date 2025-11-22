import React from 'react'
import Developed from './Development/Developed'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const NewDevelop = () => {

  return (
    <div className='px-2'>
      <div className='text-sm flex items-center gap-1 pt-3'>
        <Link to="/" className='cursor-pointer'> Home </Link> 
        <IoIosArrowForward />
        <Link to="/flow-meter-electromagnetic-flow-meter-water-meters" className='cursor-pointer'>  Our Product Range </Link> 
        <span className='flex items-center gap-1 text-gray-500'> <IoIosArrowForward/>  New Development </span>
      </div>
      <div>
        <h1 className='text-2xl font-semibold py-2'>New Development</h1>
        <p className='text-gray-600 text-sm '>Providing you the best range of flow water sensor, mag flow meter, magnetic flow sensor, magflow flow meter, magnetic flow meter and water flow meter with effective & timely delivery.</p>
      </div>
      <Developed/>
    </div>
  )
}

export default NewDevelop
