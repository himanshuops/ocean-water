import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const LeftBox = () => {
    const [openId, setOpenId] = useState(null);

    const details = [
        {
            id: '1',
            text: "New Development",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ],
            
        },
        {
            id: '2',
            text: "Flow Meter",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '3',
            text: "Water Meters",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
            ]
        },
        {
            id: '4',
            text: "Ultrasonic Flow Meter",
            list: [
                { id: '1', label: "Mag Flow Meter" },
                { id: '2', label: "Magnetic Flow Sensor" },
                { id: '3', label: "Magflow Flow Meter" },
                { id: '4', label: "Magnetic Flow Meter" },
                { id: '5', label: "Water Flow Meter" },
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
                        <div key={detail.id}  className={`border rounded-sm p-1 mr-1 hover:bg-gray-200 mt-2 shadow ${isOpen ? "bg-gray-200 " : "bg-zinc-100"}`}>
                            <div className="flex items-center justify-between pr-1">
                                <div className="text-sm font-medium m-2 text-gray-700 hover:text-emerald-800 cursor-pointer "> {detail.text} <span>{`(${detail.list.length})`}</span> </div> 
                                <button onClick={() => toggleDetails(detail.id)} className="text-gray-700 cursor-pointer ">
                                    <span className=" transition-transform duration-200 ease-in-out">
                                        {isOpen ? <ChevronUp/> : <ChevronDown/>}
                                    </span>
                                </button>
                            </div>
                            {isOpen && (
                                <ul className="mx-2  text-gray-700">
                                    {detail.list.map((item) => (                                   
                                        <li key={item.id} className='border-b border-gray-300 pb-2 my-1 text-sm font-medium text-gray-600 hover:text-emerald-800 cursor-pointer'>{item.label} </li>
                                    ))}
                                    <li className='pb-2 my-1 underline cursor-pointer font-medium text-sm text-emerald-900'>View More</li>
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
