import React from 'react'

const Button = ({text}) => {
  return (
    <div className='flex items-center gap-5'> 
        <div className={`flex w-50 h-15 py-1 items-center justify-center gap-3 border border-white ${item.color === "green" ? "bg-green-600": "" }`}>
            
            <div>
                <h1>{text}</h1>
                
            </div> 
        </div>
    </div>
  )
}

export default Button
