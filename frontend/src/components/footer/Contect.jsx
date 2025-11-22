import { Loader2, MailIcon, PhoneCall, Plus  } from 'lucide-react'
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { BiLogoFacebook } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";
import { RiArrowRightFill } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import axios from 'axios';
import { toast } from 'sonner';


const Contect = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        
    try {
        setLoading(true)
        const res = await axios.post("http://localhost:8000/api/v1/contact/", formData, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(res.data.success){
            toast.success(res.data.message)
        }
        setLoading(false)
        setFormData({
          username: '',
          email: '',
          message: '',
          phone: ''
        });
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }finally{
            setLoading(false)
        }
    };


  return (
    <div className='flex justify-between text-white bg-zinc-800 px-2 py-5'>
        <div className=''>
          <h1 className='font-bold text-3xl'>Contect Us</h1>
          <div className='flex gap-3 my-3'>
              <FaLocationDot size={22} className='text-teal-800'/>
              <div className=''>
                <p className='font-semibold text-lg leading-none '>Azad Yadav (Partner)</p>
                <h1 className='font-extrabold text-xl leading-tight'>OCEAN WATER AND ENVIRO SOLUTIONS (INDIA)</h1>
                <p className='font-semibold text-lg leading-tight'>SHOP NO.9 RNA SHOPPING ARCADE OPP. CROMA NEAR DHANUKARWADI METRO STATION M.G ROAD KANDIVALI (W)</p>
                <p className='font-semibold text-lg leading-tight'>MUMBAI -400067, MAHARASHTRA, India</p>
                <div className='flex items-center leading-tight'>
                  <h2 className='font-bold text-xl leading-tight'>Get Directjion  </h2>
                  <RiArrowRightFill/>
                </div>
                
              </div>
          </div>
          <div className='flex items-center gap-3 my-3'>
              <MailIcon size={20} className='text-teal-900'/>
              <h1 className='font-bold text-lg'>Send Email</h1>
          </div>
          <div className='flex items-center gap-3 my-3'>
              <PhoneCall size={20} className='text-teal-900'/>
              <h1 className='font-bold text-lg'>9628106446</h1>
          </div>
          <div className='flex items-center gap-3'>
              <h1 className='font-bold text-xl'>Share:</h1>
              <div className='flex items-center gap-3 my-2'>
                <BiLogoFacebook size={28} className='p-0.5 text-white border-2 border-white rounded-full'/>
                <LiaLinkedinIn size={28} className='p-0.5 text-white border-2 border-white rounded-full' />
                <GiCrossMark size={28} className='p-1 text-white border-2 border-white rounded-full' />
              </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className=' bg-white rounded-sm flex items-center'>
              <div className='flex flex-col items-start text-black  px-10 py-9 w-[48vw]'>            
                
                <input 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className='w-full py-3 px-6 mb-7 border border-gray-400 rounded-sm' type="text" placeholder='Enter Your Name' />
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full py-3 px-6 mb-7 border border-gray-400 rounded-sm' type="email" placeholder='Enter Your Email' />   
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full py-3 px-6 mb-7 border border-gray-400 rounded-sm' type="text" placeholder='Enter Your Number' />                     
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full py-5 px-6 mb-8 border border-gray-400 rounded-sm text-md resize-none' id="" placeholder='Iwould like to...'></textarea>
                  
                {
                  loading ? <button type="submit"  className='bg-teal-800 py-3 px-18 inline rounded-sm text-white text-lg font-semibold'><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please waite . . . </button>:
                  <button type="submit"  className='bg-teal-800 py-3 px-18 inline rounded-sm text-white text-lg font-semibold'>Submit</button>
                }
                
              </div>
            </div>
          </form>
          <div className='flex items-center gap-5'>
            <Plus size={27} className="border-2 p-0.5 border-white rounded-full text-white " />
            <h1 className='font-bold text-xl'>View Aditional Details</h1>
          </div>
        </div>
    </div>
  )
}

export default Contect
