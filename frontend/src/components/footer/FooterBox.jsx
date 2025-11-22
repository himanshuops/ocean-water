
//  chat gpt footer genrate
//  ctrl => npm install react-icons

import { ArrowBigRight, ArrowRight } from 'lucide-react';
import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';

const FooterBox = () => {
    return (
        <div>
            <footer className="bg-white text-gray-800 py-5 px-2">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-1 text-gray-600 text-lg">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Our Product Range</h3>
                        <ul className="space-y-1 text-gray-600 text-lg">
                        <li><a href="#" className="hover:underline">Docs</a></li>
                        <li><a href="#" className="hover:underline">API Reference</a></li>
                        <li><a href="#" className="hover:underline">Community</a></li>
                        <li><a href="#" className="hover:underline">Support</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <ul className="space-y-1 text-gray-600 text-lg mt-10">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        <li><a href="#" className="hover:underline flex items-center gap-1">View All <ArrowRight size={20}/> </a></li>
                        </ul>
                    </div>

                    {/* Logo / About */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Share Us:</h2>
                        <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white p-0.5 rounded-sm bg-purple-400">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="#" className="text-white p-0.5 rounded-sm bg-blue-800 ">
                            <FaLinkedinIn size={25}/>
                        </a>
                        <a href="#" className="text-white p-0.5 rounded-sm bg-black">
                            <GiCrossMark size={25} />
                        </a>
                        </div>
                    </div>
                    </div>


                    {/* Bottom bar */}
                    <div className="mt-7 border-t border-gray-300 pt-2 text-cente1 text-sm  text-gray-700">
                        &copy;<span className='text-md font-bold'>Everest Sanitation (India).</span> All Rights Reserved <span className='underline'>(Terms of Use)</span> <br /> Developed and Managed by <span className='underline'> IndiaMART InterMESH Limited </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterBox
