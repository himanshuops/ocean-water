import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div>
        <div className='text-sm flex items-center gap-1 py-3 px-3'>
            <Link to="/" classNameName='cursor-pointer'> Home </Link> <span className='flex items-center gap-1 text-gray-500'>  <IoIosArrowForward/>  About Us </span>
        </div>
        <div className=" min-h-screen">
            <div className="flex flex-col md:flex-row mt-2 ">
                <div className="w-full md:w-1/4 space-y-2 px-2">
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-emerald-50 text-teal-900 rounded">About Us</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">Testimonial</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">Infrastructure & Facilities</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">After Sales Service</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">Why Us?</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">Distributor Enquiry Form</button>
                    <button className="w-full text-left px-4 py-3.5 text-sm font-semibold bg-gray-100 hover:bg-emerald-50 hover:text-teal-900 rounded">Download Brochure</button>
                </div>

                <main className="w-full md:w-3/4 mx-2 mt-3">
                    <h1 className="text-4xl font-semibold mb-8">About Us</h1>

                    <div className=" relative">
                        <img src="https://img.indiamart.com/trustseal.png" alt="Trust Seal" className="absolute top-4 right-4 w-16" />

                        <h2 className="text-2xl font-bold mb-12 text-center">Factsheet</h2>
                        <h2 className='text-2xl font-semibold mb-2'>Basic Infarmation</h2>

                        <div className=" gap-y-4 gap-x text-sm ">
                            <div className='flex items-center mb-4'>
                                <div className="font-semibold text-gray-700 w-80">Nature of Business</div>
                                <div>Manufacturer</div>
                            </div>

                            <div className='flex items-center mb-4'>
                                <div className="font-semibold text-gray-700 w-80">Additional Business</div>
                                <div>
                                    Factory / Manufacturing <br/>
                                    Retail Business<br/>
                                    Office / Sale Office
                                </div>
                            </div>

                            <div className='flex items-center mb-4'>
                                <div className="font-semibold text-gray-700 w-80">Company CEO</div>
                                <div>Pawan Kumar Gupta</div>
                            </div>

                            <div className='flex items-center mb-4'>
                                <div className="font-semibold text-gray-700 w-80">Registered Address</div>
                                <div>B – 55, Wazirpur Group Industrial Area, Delhi - 110052, Delhi, India</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      
    </div>
  )
}



export default Aboutus



