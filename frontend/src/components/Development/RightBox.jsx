import React from 'react'
import { Mail, Phone } from 'lucide-react'

const RightBox = () => {

    const details = [
        {
            id: '1',
            classid: "Flow-Water-Sensor",
            text: "Flow Water Sensor",
            img:"/src/assets/image.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '2',
            classid: "Mag-Flow-Meter",
            text: "Mag Flow Meter",
            img:"/src/assets/image2.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '3',
            classid:"Magnetic-Flow-Sensor",
            text: "Magnetic Flow Sensor",
            img:"/src/assets/image3.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '4',
            text: "Magflow Flow Meter",
            img:"/src/assets/image4.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '5',
            text: "Magnetic Flow Meter",
            img:"/src/assets/image5.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '6',
            text: "Software Engineer",
            img:"/src/assets/image6.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
        {
            id: '7',
            text: "Software Engineer",
            img:"/src/assets/image7.jpeg",
            price:"17000",
            list: [
                { id: '1', label: "Nominal Diameter ", label2: "25 mm" },
                { id: '2', label: "Brand ", label2: "Everest" },
                { id: '3', label: "Maximum Pressure ",  label2: "1 Inch" },
                { id: '4', label: "Material ", label2: "Mild Steel" },
                { id: '5', label: "Usage/Application", label2: "Water" },
                { id: '5', label: "Country of Origin", label2: "Mag Flow Meter" },
            ],
            images:[
                { id: '1', img:"/src/assets/image26.jpeg" },
                { id: '2', img:"/src/assets/image29.jpeg" },
                { id: '3', img:"/src/assets/image27.jpeg" },
            ]
        },
    ]

    

  return (
        <div className='px-2 mt-2 '>
            {
                details.map((detail) => {
                    return(
                    <div id={detail.classid} className=' w-full min-h-screen'>
                        <div className='flex items-center justify-center '>
                            <h1 className='font-bold text-2xl bg-gray-100 pb-2 py-1 px-3 w-full'>{detail.text}</h1>
                            <div className='flex items-center justify-center gap-1 border px-3 py-1 border-emerald-900 text-emerald-900 rounded-full whitespace-nowrap'>
                                <Phone size={18} />
                                <button className='text-sm font-semibold'>Request Callback</button>
                            </div>
                        </div>
                        <div className='flex my-3 gap-5'>
                            <div className=' w-1/2 h-[38vw] relative'>
                                <img className='w-full h-full object-contain cursor-pointer' src={detail.img} alt="" />
                                <div className='absolute bottom-10 left-40 bg-white text-emerald-900  flex items-center border px-8 py-1 border-emerald-900 hover:bg-emerald-900 hover:text-white rounded-full '>
                                    <button className='text-md font-bold'>Get Best Quote</button>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex items-center font-medium gap-3 '>
                                    <h2 className=' text-2xl'><span>$</span> {detail.price} <span className=' text-sm'>/Price</span></h2>
                                    <h1 className=' text-xl leading-tight underline '>Get Latest Price</h1>
                                </div>
                                <h2 className='hover:underline cursor-pointer'>Product Brochure</h2>
                                <div className=''>
                                    {
                                        detail.list.map((item) => {
                                            return(
                                                <div key={item.id} className='flex gap-15 items-center text-sm font-bold leading-tight py-1'>
                                                    <h1 className='w-31 '>{item.label}</h1>
                                                    <span>{item.label2}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className='my-2 text-[15px]'> An industrial digital meter is a robust, highly accurate electronic instrument designed to measure and monitor electrical or process parameters in harsh industrial environments. </p>
                                <button className='font-semibold bg-teal-800 text-white text-lg rounded-md my-4 py-2 px-10 hover:text-teal-800 hover:bg-transparent border border-teal-800 flex items-center gap-2'>
                                    <Mail/>Yes! I am interested
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-10 mx-10 mb-10'>
                            {
                                detail.images.map((img) => {
                                    return(
                                        <div key={img.id} className='w-20 h-20 rounded-md border border-black cursor-pointer '>
                                            <img className='w-full h-full object-contain rounded-md ' src={img.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    )
                })
            }
        </div>

  )
}

export default RightBox
