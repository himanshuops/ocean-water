import React from 'react'

const Reviews = () => {
    const rev = [
        {
            t:"R", t1:"Rajendra Arora", t2:"Una, Himachal Pradesh", t3:"(5)", t4:"Product Name :", t5:"Electromagnetic Flow Meter"
        },
        {
            t:"A", t1:"ASHU", t2:"New Delhi, Delhi", t3:"(5)", t4:"Product Name :", t5:"Electronic Flow Meter"
        },
        {
            t:"V", t1:"VIJAYKUMAR Rise Enterprises", t2:"Satara, Maharashtra", t3:"(5)", t4:"Product Name :", t5:"Electromagnetic Flow Meter"
        },
    ]
  return (
    <div className='py-10 px-5 bg-white'>
        <div className='flex items-center justify-between bg-white'>
            {
                rev.map((tag, i) => {
                    return(
                        <div key={i} className='flex gap-5'>
                            <div className='w-10 h-10 flex items-center justify-center bg-zinc-200 rounded-full text-md font-bold'>{tag.t}</div>
                            <div>
                                <h1 className='font-semibold text-xl leading-none'>{tag.t1}</h1>
                                <p className='text-sm text-gray-900'>{tag.t2}</p>
                                <span>{tag.t3}</span>
                                <h2 className='mt-5'><span className='font-bold'>{tag.t4}</span> <span className='text-sm'>{tag.t5}</span>  </h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='mt-5 text-center'>
            <button className='font-semibold bg-teal-800 text-white text-md rounded-md py-2 px-8 hover:text-teal-800 hover:bg-transparent border border-teal-800'>View More Reviews</button>
        </div>
    </div>
  )
}

export default Reviews
