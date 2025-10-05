import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const VideoBox = () => {
    const box = [
        //    {
        //     desc:"Lorem ipsum dolor this is coverd page sit amet consectetur adipisicing elit.",
        //     filesize:".9mb",
        //     close:false,
        //     tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        // },
        {
            img:"https://5.imimg.com/data5/ANDROID/Default/2024/7/438475671/GO/GJ/JM/209080/product-jpeg-250x250.jpg",
            text:"New Development",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"https://5.imimg.com/data5/ANDROID/Default/2024/7/438427143/AZ/NJ/HI/209080/product-jpeg-250x250.jpg",
            text:"Flow Meter",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"https://5.imimg.com/data5/ANDROID/Default/2024/7/438456437/MR/YE/KZ/209080/product-jpeg-250x250.jpg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },

    ]
  return (
    <div className='bg-white my-2'>
        <div className='py-3 px-5'>
            <div className='flex items-center gap-8'>
                <h1 className='font-[650] text-[2.1rem] text-gray-800'>Product Videos </h1>
            </div>
            <div className='flex my-1 gap-4'>
                {
                    box.map((items, i)=>{
                        return(
                            <div key={i} className={` flex flex-col h-[30vw] w-[33%] rounded-2xl bg-white`} >
                                <div className={` h-[71%] w-[100%] rounded-lg bg-red-500`} >
                                        {/* <img className={`w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-90 `} src={items.img} alt=""  /> */}
                                </div>
                                <div className='w-[100%] my-2'>
                                    <h1 className='font-bold py-3 text-xl '>Multi Jet Water Meter for JJM...</h1>
                                    <button className='font-semibold bg-teal-800 text-white text-lg rounded-md py-1.5 px-6 hover:text-teal-800 hover:bg-transparent border border-teal-800'>Get Quite</button>
                                </div>
                            </div>                       
                        )
                    }) 
                }
            </div>
        
        </div>
        <div className='flex items-center gap-8 py-2'>
            <h1 className='font-[650] text-[2.1rem] text-gray-800'>Ratings & Reviews </h1>
            <div className='flex items-center'>
                <p className='underline font-[600] text-center text-md text-gray-800'>View All </p>
                <IoIosArrowForward size={15} className='mt-1' />
            </div>
        </div>
    </div>
  )
}

export default VideoBox

