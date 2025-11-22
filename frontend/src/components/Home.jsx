import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import Box1 from './Boxes1/Box1';
import Box2 from './Boxes1/Box2';
import Box3 from './Boxes1/Box3';

const Home = () => {
    const image = [
        {
            img:"/src/assets/image20.jpeg",
            text:"New Development"
        },
        {
            img:"/src/assets/image21.jpeg",
            text:"Flow Meter"
        },
        {
            img:"/src/assets/image22.jpeg",
            text:"Water Meters"
        },
        {
            img:"/src/assets/image23.jpeg",
            text:"Ultrasonic Flow Meter"
        },
        {
            img:"/src/assets/image24.jpeg",
            text:"Electromagnetic Flow Merter"
        },
        {
            img:"/src/assets/image25.jpeg",
            text:"Residential Water Merter"
        },
        {
            img:"/src/assets/image26.jpeg",
            text:"Dosing Pump"
        },
        {
            img:"/src/assets/image27.jpeg",
            text:"Water Meter Box"
        },
        {
            img:"/src/assets/image29.jpeg",
            text:"Turbin Flow Meter"
        }
    ]
    const image2 = [

        {
            img:"/src/assets/image5.jpeg",
            text:"New Development",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image4.jpeg",
            text:"Flow Meter",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image7.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
    ]
    const image3 = [

        {
            img:"/src/assets/image8.jpeg",
            text:"New Development",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image9.jpeg",
            text:"Flow Meter",
            tag:{ isOpen:true, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image10.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image11.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
        {
            img:"/src/assets/image12.jpeg",
            tag:{ isOpen:false, tagTitle:"Download Now . .", tagColor:"yellow"},
        },
    ]
    const bisinus = [
        {
            icon:<FaRegHandshake size={50} />,
            text1:"Nature of Business",
            text2:"Manufacturer"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"Total Number of Employees",
            text2:"11 to 25 People"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2024"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2017"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2017"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2017"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2017"
        },
        {
            icon:<FaRegHandshake size={50} />,
            text1:"GST Registration Date",
            text2:"01-07-2017"
        },
    ]

  return (
    <div className=''>
        <div className='flex items-center justify-center bg-white' >
            {
                image.map((items, i)=>{
                    return(
                        <div key={i} className=' flex items-center justify-center w-32 h-40 hover:bg-gray-200 m-2 rounded-lg '>
                            <div className=' flex flex-col items-center justify-center gap-2  cursor-pointer'>
                                <div className='w-20 h-20'>
                                    <img className='w-full h-full rounded-full' src={items.img} alt="" />
                                </div>
                                <h1 className='text-center font-semibold text-gray-800'>{items.text}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
                   
        <div className='flex py-2'>
            {
                image2.map((items, i)=>{
                    return(
                        <div key={i} className={`relative flex justify-between h-[19vw] m-2 rounded-md bg-white ${i === 2 ? "w-[65%] cursor-pointer rounded-2xl" : "w-[100%]"} bg-red-400 `} >
                            <div className={`group flex justify-center cursor-pointer w-full  h-full`}>
                                <div className={` h-[19vw] ${i === 2 ?"w-[100%] rounded-xl":"w-[11.5vw]"} `} >
                                    <img className={`w-full h-full ${i === 2 ? "opacity-55 rounded-xl" : "transform transition-transform duration-300 ease-in-out group-hover:scale-90"} `} src={items.img} alt=""  />
                                    {items.tag.isOpen ? "" :
                                        <div className='absolute rounded-md inset-0 flex items-center justify-center bg-opacity-100 bg-black opacity-60 '>
                                            <div className='z-10 flex items-center text-white '>
                                                <h1 className='font-semibold text-xl text-white z-10 p-15 '> View Complite Range Of Products </h1>
                                            </div>
                                        </div>
                                        
                                    }
                                </div>
                            </div>          
                            {items.tag.isOpen &&(
                                <div className='w-[80%] p-3'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <h1 className='font-bold text-xl leading-tight '>Multi Jet Water Meter for JJM...</h1>
                                            <h2 className='font-bold text-xl my-1'><span>$</span> 720<span className=' text-sm font-normal'>/piece</span></h2>
                                            <h2 className=' my-1'><span className='font-semibold'>/piece:</span> texl</h2>
                                            <p className=' my-1'><span className='font-semibold'>/piece:</span> color </p>
                                            <h2 className=' my-1'><span className='font-semibold'>/piece:</span> red</h2>
                                        </div>
                                        <div>
                                            <button className='font-semibold bg-teal-800 text-white text-lg rounded-md py-2 w-full hover:text-teal-800emerald-900 hover:bg-transparent border border-emerald-900'>Get Quite</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>                       
                    )
                }) 
            }
        </div>

        <div className='flex py-2'>
            {
                image3.map((items, i)=>{
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

        <div className='bg-white py-4 px-1 flex justify-between'>
            <div className='w-[40%] px-1'>
                <h2 className='mt-2 font-sans text-[1.7rem] text-gray-600'>WELCOME TO</h2>
                <h1 className='font-bold text-[2.3rem] text-gray-800'>Everest Sanitation (India) </h1>
                <p className='my-2 text-[15px]'>We,<span className='font-semibold'>Everest Sanitation (India)</span> from <span className='font-semibold'>1981</span> are one of a leading manufacturer of high-quality <span className='font-semibold'>Water meters,Flow Meters and Liquid Measuring Instruments</span>  committed to precision, durability, and innovation. <span className='font-semibold'>Read More...</span> </p>
                <p className='my-3 text-gray-700'>GET IN TOUCH WITH US FOR BEST DEALS</p>
                <div className='flex justify-center items-center w-50 h-13  rounded-md cursor-pointer text-white text-md font-semibold bg-teal-800 hover:text-teal-800 hover:bg-transparent border border-teal-800'>
                    <div>
                        <h1>Contect Us</h1>
                    </div> 
                </div>
            </div>
            <div className='grid grid-cols-2'>
                {
                    bisinus.map((items, i) =>{
                        return(
                            <div className='flex items-center gap-10 my-3'>
                                <div className='bg-gray-100 rounded-md p-2'>
                                    {items.icon}
                                </div>
                                <div>
                                    <h1 className='font-semibold'>{items.text1} </h1>
                                    <h1 className='text-gray-600'>{items.text2} </h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>           
            
        </div>

        <Box1/>
        <Box2/>
        <Box3/>       
    </div>
  )
}


export default Home
