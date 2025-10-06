import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Header = () => {
    const btn = [
        { icon: <FiPhoneCall size={22} color='teal'/>, text: "Call 9618106446", p: "94% Response rate", color:"blue" },
        { icon: <CiMail size={22}  />, text: "Send email", color:"green" },
    ]
  return (
    <div className='fixed top-0 z-10 h-25 shadow-lg shadow-gray-500 flex items-center justify-between px-3 bg-white w-full'>
        <div className='flex items-center gap-3'>
            <div>
                <img className='w-20' src="/src/assets/logo.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-xl font-bold'>OCEAN WATER AND ENVIRO SOLUTIONS</h1>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-1'>
                        <FaLocationDot size={19} className='text-teal-800'/>
                        <h2>Mumbai</h2>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoMdCheckmarkCircle size={20} className='text-teal-800' />
                        <h2 className='text-sm'>GST No.-<span className='font-bold'>27AAIFO7672G1ZU</span></h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-5'> 
            {
                btn.map((item, i) => (
                    <div key={i} className={` flex w-50 h-13 py-1 items-center justify-center gap-3 cursor-pointer rounded-md ${item.color === "green" ? "bg-teal-800 border text-white border-white": "border border-black " }`}>
                        {item.icon}
                        <div>
                            <h1 className='font-semibold text-md leading-none'>{item.text}</h1>
                            <p className='text-sm'>{item.p}</p>
                        </div> 
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default Header
