import { Search } from 'lucide-react';
import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    const details = [
        {
            id: '1',
            text: "New Development",
            list: [
                { id: '1', classid: "Flow-Water-Sensor", label: "Flow Water Sensor" },
                { id: '2', classid: "Mag-Flow-Meter", label: "Mag Flow Meter" },
                { id: '3', classid: "Magnetic-Flow-Sensor", label: "Magnetic Flow Sensor" },
                { id: '4', classid: "Magflow-Flow-Meter", label: "Magflow Flow Meter" },
                { id: '5', classid: "Magflow-Flow-Meter", label: "Magflow Flow Meter" },
            ],
            
        },
        {
            id: '2',
            text: "Flow Meter",
            list: [
                { id: '1', classid: "Bulk-Flow-Meter", label: "Bulk Flow Meter" },
                { id: '2', classid: "Digital-Flow-Meter", label: "Digital Flow Meter" },
                { id: '3', classid: "Everest-Level-Transmitter", label: "Everest Level Transmitter" },
                { id: '4', classid: "Oil-Flow-Meters", label: "Oil Flow Meters" },
                { id: '5', classid: "Electromagnetic-Flow-Transmitter", label: "Electromagnetic Flow Transmitter" },
            ]
        },
        {
            id: '3',
            text: "Water Meters",
            list: [
                { id: '1', classid: "Everest-15mm-Class-B-Multi-Jet-Water-Meter", label: "Everest 15mm Class B Multi Jet Water Meter" },
                { id: '2', classid: "Brass-Multi-Jet-Water-Meter-Class-B", label: "Brass Multi Jet Water Meter Class B" },
                { id: '3', classid: "Hot-Water-Multi-Jet-Water-Meter", label: "Hot Water Multi Jet Water Meter" },
                { id: '4', classid: "Volumetric-Water-Meter", label: "Volumetric Water Meter" },
                { id: '5', classid: "Amr-Compatible-Water-Meter", label: "Amr Compatible Water Meter" },
            ]
        },
        {
            id: '4',
            text: "Ultrasonic Flow Meter",
            list: [
                { id: '1', classid: "Clamp-On-Handheld-Ultrasonic-Flow-Meter", label: "Clamp On Handheld Ultrasonic Flow Meter" },
                { id: '2', classid: "Open-Channel-Flow-Meter", label: "Open Channel Flow Meter" },
                { id: '3', classid: "Insertion-Type-Ultrasonic-Water-Meter", label: "Insertion Type Ultrasonic Water Meter" },
                { id: '4', classid: "Ultrasonic-Water-Flow-Meter", label: "Ultrasonic Water Flow Meter" },
                { id: '5', classid: "Smart-Ultrasonic-Water-Meter", label: "Smart Ultrasonic Water Meter" },
            ]
        }
    ]

    // Check current path
    const isHomePage = location.pathname === '/';

  return (
    <div className=' w-[100%] z-10 mt-25 bg-zinc-800 text-white'>
        <div className='flex items-center justify-between px-2 relative '>
            <div className='flex items-center gap-2 '>
                <div className='flex font-bold text-md gap-7 text-white '>
                    <div className='flex items-center gap-2 group px-4 py-4 hover:bg-teal-900'>
                        <GiHamburgerMenu  size={"24px"} className='cursor-pointer ' />
                        <Link to="/flow-meter-electromagnetic-flow-meter-water-meters" >Our Product Range</Link>

                        <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 w-[100%] shadow-lg p-6 z-50">
                            <div className=" flex  items-center gap-10 ">
                            {/* Column 1 */}
                            {
                                details.map((detail ) => (
                                    
                                    <div key={detail.id}>

                                        <Link to="/new-development" className="font-semibold text-lg mb-2">{detail.text}</Link>
                                        <ul className="space-y-1 text-lg font-normal">
                                            {
                                                detail.list.map((item) => (
                                                    <li key={item.id}> <Link to="#" className="hover:text-teal-600 text-md">{item.label}</Link></li>
                                                ))
                                            }
                                        </ul>
                                        <Link to="#" className="text-teal-600 text-sm mt-2 inline-block">View All Products</Link>
                                    </div>
                                ))
                            }

                            {/* Column 2 */}
                            {/* <div>
                                <h3 className="font-semibold text-lg mb-2">Flow Meter</h3>
                                <ul className="space-y-1 text-lg font-normal">
                                <li><Link to="#" className="hover:text-teal-600">Bulk Flow Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Digital Flow Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Everest Level Transmitter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Oil Flow Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Electromagnetic Flow Meter</Link></li>
                                </ul>
                                <Link to="#" className="text-teal-600 text-sm mt-2 inline-block">View All Products</Link>
                            </div> */}

                            {/* Column 3 */}
                            {/* <div>
                                <h3 className="font-semibold text-lg mb-2">Water Meters</h3>
                                <ul className="space-y-1 text-lg font-normal">
                                <li><Link to="#" className="hover:text-teal-600">Multi Jet Water Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Hot Water Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Volumetric Water Meter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">AMR Compatible</Link></li>
                                </ul>
                                <Link to="#" className="text-teal-600 text-sm mt-2 inline-block">View All Products</Link>
                            </div> */}

                            {/* Column 4 */}
                            {/* <div>
                                <h3 className="font-semibold text-lg mb-2">Ultrasonic Flow Meter</h3>
                                <ul className="space-y-1 text-lg font-normal">
                                <li><Link to="#" className="hover:text-teal-600">Clamp On Handheld</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Insertion Type</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Level Transmitter</Link></li>
                                <li><Link to="#" className="hover:text-teal-600">Smart Ultrasonic</Link></li>
                                </ul>
                                <Link to="#" className="text-teal-600 text-sm mt-2 inline-block">View All Products</Link>
                            </div> */}
                            </div>

                            <div className="mt-4">
                                <Link to="" className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"> View All Categories </Link>
                            </div>
                        </div>
                    </div>
                    {!isHomePage && (
                        <Link to="/" className="hover:bg-teal-900 px-4 py-4">
                        Home
                        </Link>
                    )}
                    <Link to="/our-servicess" className="hover:bg-teal-900 px-4 py-4">Over Services</Link>
                    <div className='group px-4 py-4 hover:bg-teal-900'>
                        <Link to="/profile" >About us</Link>
                        <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-500 w-[100%] shadow-lg p-6 z-50">
                            <div className="grid grid-cols-4 gap-6">
                            {/* Column 1 */}
                            <div>
                                <ul className="space-y-1 text-lg font-normal">
                                    <li><Link to="#" className="hover:text-teal-600">Testimonial</Link></li>
                                    <li><Link to="#" className="hover:text-teal-600">Distributor Enquiry Form</Link></li>
                                </ul>
                            </div>
                            {/* Column 2 */}
                            <div>
                                <ul className="space-y-1 text-lg font-normal">
                                    <li><Link to="#" className="hover:text-teal-600">Infrastructure & Facilities</Link></li>
                                    <li><Link to="#" className="hover:text-teal-600">Download Brochure</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                                <ul className="space-y-1 text-lg font-normal">
                                    <li><Link to="#" className="hover:text-teal-600">After Sales Service</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 */}
                            <div>
                                <ul className="space-y-1 text-lg font-normal">
                                    <li><Link to="#" className="hover:text-teal-600">Why Us?</Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/enquiry" className="hover:bg-teal-900 px-4 py-4">Contect us</Link>
                </div>
            </div>
            <div className='flex items-center w-[31%] '>
                <div className='w-[100%] py-2 px-4 border border-gray-300 rounded-l bg-white' >
                    <input type="text" placeholder='Search Product/Services' className='w-full text-md  outline-none text-black px-2 bg-white'/>
                </div>
                <button className='cursor-pointer py-2 px-2.5 border border-y-teal-800 border-r-teal-800 bg-teal-800 border-gray-300 rounded-r flex items-center gap-1'>
                    <Search size={16} />
                    <span>Search</span>
                </button>
            </div>        
        </div>
    </div>
  )
}


export default Navbar




