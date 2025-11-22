import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const Box3 = () => {
    const box = [
        {
            img:"/src/assets/image16.jpeg",
            text:"New Development",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image23.jpeg",
            text:"Flow Meter",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image24.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image25.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image26.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
    ]
  return (
    <div className='my-1'>
        <div className='px-1'>
            <div className='flex items-center gap-8 leading-none'>
                <h2 className='mt-2 font-semibold text-[1.7rem] text-gray-900'>Water Meters</h2>
                <div className='flex items-center'>
                    <p className='underline font-[600] text-center mt-2 text-sm text-gray-800'>View All </p>
                    <IoIosArrowForward size={15} className='mt-3'/>
                </div>
            </div>
        </div>
        <div className='flex py-2'>
            {
                box.map((items, i)=>{
                    return(
                        <div key={i} className={`relative flex flex-col justify-between h-[40vw] m-2 rounded-md bg-white border border-gray-300 `} >
                            <div className={`group flex  justify-center cursor-pointer w-full  h-full`}>
                                <div className={` h-[19vw] ${i === 2 ?"w-[90%] rounded-xl":"w-[11.5vw]"} `} >
                                    <img className={`w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-90 `} src={items.img} alt=""  />
                                </div>
                            </div>          

                                <div className='w-[100%] p-3 '>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <h1 className='font-bold text-xl leading-tight '>Multi Jet Water Meter for JJM...</h1>
                                            <h2 className='font-bold text-xl my-1'><span>$</span> 720<span className=' text-sm font-normal'>/piece</span></h2>
                                            <h2 className=' my-1'><span className='font-semibold'>/piece:</span> texl</h2>
                                            <p className=' my-1'><span className='font-semibold'>/piece:</span> color </p>
                                            <h2 className=' my-1'><span className='font-semibold'>/piece:</span> red</h2>
                                        </div>
                                        <div>
                                            <button className='font-semibold bg-teal-800 text-white text-lg rounded-md py-2 w-full hover:text-teal-800 hover:bg-transparent border border-teal-800'>Get Quite</button>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>                       
                    )
                }) 
            }
        </div>
      
    </div>
  )
}

export default Box3
