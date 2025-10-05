import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()

    const toggleBar = [
        { id: "1" , label: "Home"},
        { id: "2" , label: "New-development"},
        { id: "3" , label: "Over Product Range"},
        { id: "4" , label: "Over Services"},
        { id: "5" , label: "About us"},
        { id: "6" , label: "Contect us"},
    ]

    const sidebarHandler = (textType) =>{
        if(textType === 'Home'){
            navigate('/')
        }
        else if(textType === 'New-development'){
            navigate('/new-development')
        } 
        else if(textType === 'Over Product Range'){
            navigate('/flow-meter-electromagnetic-flow-meter-water-meters')
        }     
    }


  return (
    <div className=' w-[100%] z-10 mt-25 bg-zinc-800 text-white'>
        <div className='flex items-center justify-between px-6 py-3'>
            <div className='flex items-center gap-5'>
                <GiHamburgerMenu  size={"24px"} className='cursor-pointer' />
                <div className='flex font-bold text-md gap-10 text-white '>
                    {
                        toggleBar.map((item) => {
                            return(
                                <span key={item.id} onClick={()=> sidebarHandler(item.label)} className='cursor-pointer'>{item.label}</span>
                            )
                        })                       
                    }
                    
                </div>
            </div>
            <div className='flex items-center w-[31%] '>
                <div className='w-[100%] py-2 px-4 border border-gray-300 rounded-l-sm bg-white' >
                    <input type="text" placeholder='Search Product/Services' className='w-full outline-none text-black px-2 bg-white'/>
                </div>
                <button className='cursor-pointer py-2 px-2 border border-r bg-teal-800 border-gray-300 rounded-r-sm flex items-center gap-1'>
                    <CiSearch size={18} />
                    <span>Search</span>
                </button>
            </div>        
        </div>
    </div>
  )
}


export default Navbar
