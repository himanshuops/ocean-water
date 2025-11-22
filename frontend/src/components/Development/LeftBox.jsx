import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const LeftBox = () => {
    const [openId, setOpenId] = useState('1');

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
        },
        {
            id: '5',
            text: "Electomagnetic Flow Meters",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '6',
            text: "Residential Water Meter",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '7',
            text: "Dosing Pump",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '8',
            text: "Turbine Flow Meter",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '9',
            text: "Water Meter Box",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '10',
            text: "Digital Flow Meter",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '10',
            text: "Woltman Type Water Meters",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        
    ];

    const toggleDetails = (id) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <div className='p-2'>
            {
                details.map((detail) => { 
                    const isOpen = openId === detail.id;
                    return(
                        <div key={detail.id}  className={`border rounded-sm py-2 px-1 mr-1 hover:bg-[#E5EFEF] mt-2 shadow ${isOpen ? "bg-[#E5EFEF] " : "bg-zinc-100"}`}>
                            <div className="flex items-center justify-between pr-1">
                                <div className="text-sm font-medium my-1 mx-2 text-gray-800 hover:text-emerald-800 cursor-pointer "> {detail.text} <span>{`(${detail.list.length})`}</span> </div> 
                                <button onClick={() => toggleDetails(detail.id)} className="text-gray-700 cursor-pointer ">
                                    <span className=" transition-transform duration-200 ease-in-out">
                                        {isOpen ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                                    </span>
                                </button> 
                            </div>
                            {isOpen && (
                                <ul className="mx-2  text-gray-700 ">
                                    {detail.list.map((item) => (                                   
                                        <li key={item.id} className='border-b border-gray-300 pt-2 pb-3 text-sm font-medium text-gray-600 hover:text-emerald-800'>
                                            {/* <Link to={`#${item.id2}`}  >{item.label} </Link>     */}
                                            <a href={`#${item.classid}`}>{item.label}</a>                                        
                                        </li>
                                    ))}
                                    <li className='pb-1 my-1 underline cursor-pointer font-medium text-sm text-emerald-900'>View More</li>
                                </ul>
                            )}
                        </div>
                    )
                })
            }

        </div>
    );
};

export default LeftBox