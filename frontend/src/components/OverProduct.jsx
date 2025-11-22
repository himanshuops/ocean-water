import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ProductList from './ProductList';

const products = [
  { id: 1, title: "Flow Sensor with Digital Display", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.03 AM (1).jpeg" },
  { id: 2, title: "Bulk Water Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.01 AM (1).jpeg" },
  { id: 3, title: "Multi-Jet Water Meter Type-S", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.01 AM.jpeg" },
  { id: 4, title: "Ultrasonic Flow Meter Portable", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.02 AM (1).jpeg" },
  { id: 5, title: "Residential Water Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.02 AM.jpeg" },
  { id: 6, title: "Industrial Water Flow Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 8.53.31 AM.jpeg" },
  { id: 7, title: "Digital Electromagnetic Flow Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.04 AM (1).jpeg" },
  { id: 8, title: "Smart Flow Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.04 AM (1).jpeg" },
  { id: 9, title: "Analog Water Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.04 AM (2).jpeg" },
  { id: 10, title: "Digital Ultrasonic Meter", image: "/src/assets/WhatsApp Image 2025-10-18 at 4.58.04 AM.jpeg" }
];

const OverProduct = () => {
  return (
    <div>
      <div className='text-sm flex items-center gap-1 py-3 px-3'>
        <Link to="/" className='cursor-pointer'> Home </Link> <span className='flex items-center gap-1 text-gray-500'>  <IoIosArrowForward/>  Our Product Range </span>
      </div>
      <div className="px-2 bg-gray-50 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"> Flow Meter, Electromagnetic Flow Meter, Water Meters </h1>
        <p className="text-gray-600 mb-8">
          We, <strong>Everest Sanitation (India)</strong> from <strong>1981</strong> 
          are one of the famous manufacturers, exporters, traders, and importers of a wide array of 
          <strong> Flow Meter, Electromagnetic Flow Meter, Water Meters & Residential Water Meter</strong>.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5">
          {products.map((item) => (
            <ProductList key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default OverProduct
