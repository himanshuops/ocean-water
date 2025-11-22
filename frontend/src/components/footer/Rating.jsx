import React from 'react'

const Rating = () => {
  return (
    <div className=' w-[100%] h-[20vw] flex items-center '>
        <div className=' flex  w-[100%] '>
            <div className=' w-[25%] text-center'>
                <h1 className='font-bold text-3xl'> 4.4 <span className='text-sm font-normal' > / 5</span></h1>
                <p>141 Reviews</p>
            </div>
            <div className=' w-[46%] pb-3 flex items-center justify-center border-x border-x-gray-300'>
                <div className='flex flex-col items-center justify-between h-full mr-10 font-sans'>
                    <p> 1 Star</p>
                    <p> 2 Star</p>
                    <p> 3 Star</p>
                    <p> 4 Star</p>
                    <p> 5 Star</p>
                </div>
                <div className='flex flex-col gap-3 mr-4 '>
                    <div className='w-75 h-5 bg-gray-300'>
                        <div className='h-full w-[75%] bg-lime-600'></div>
                    </div>
                    <div className='w-75 h-5 bg-gray-300'>
                        <div className='h-full w-[7%] bg-lime-600'></div>
                    </div>
                    <div className='w-75 h-5 bg-gray-300'>
                        <div className='h-full w-[7%] bg-lime-600'></div>
                    </div>
                    <div className='w-75 h-5 bg-gray-300'>
                        <div className='h-full w-[3%] bg-lime-600'></div>
                    </div>
                    <div className='w-75 h-5 bg-gray-300'>
                        <div className='h-full w-[8%] bg-lime-600'></div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between h-full text-gray-800'>
                    <h1>(75%)</h1>
                    <h1>(7%)</h1>
                    <h1>(7%)</h1>
                    <h1>(3%)</h1>
                    <h1>(8%)</h1>
                </div>
            </div>
            <div className='pb-2 w-[29%] flex justify-end'>
                <div className='flex flex-col items-center justify-between'>
                    <h1 className='text-2xl'>User Satisfaction</h1>
                    <div className='flex items-center gap-10'>
                        <div>
                            <div className='relative bg-lime-600 w-19 h-19 rounded-full flex items-center justify-center overflow-hidden  '>
                                <div className='absolute top-0 left-0 bg-zinc-300 w-5 h-5'></div>
                                <div className='flex items-center justify-center bg-white w-16 h-16 rounded-full z-10'>97%</div>
                            </div>
                            <p className='font-semibold text-md text-center'>Response</p>
                        </div>
                        <div>
                            <div className='relative bg-lime-600 w-19 h-19 rounded-full flex items-center justify-center overflow-hidden  '>
                                <div className='absolute top-0 left-0 bg-zinc-300 w-5 h-5'></div>
                                <div className='flex items-center justify-center bg-white w-16 h-16 rounded-full z-10'>97%</div>
                            </div>
                            <p className='font-semibold text-md text-center'>Qualtity</p>
                        </div>
                        <div>
                            <div className='relative bg-lime-600 w-19 h-19 rounded-full flex items-center justify-center overflow-hidden  '>
                                <div className='absolute top-0 left-0 bg-zinc-300 w-6 h-6'></div>
                                <div className='flex items-center justify-center bg-white w-16 h-16 rounded-full z-10'>94%</div>
                            </div>
                            <p className='font-semibold text-md text-center'>Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Rating
