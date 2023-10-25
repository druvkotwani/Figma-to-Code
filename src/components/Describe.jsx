import React from 'react'

const Describe = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-start gap-[14px]'>
            <h1 className='text-gray-300 font-[Outfit] text-[20px] font-semibold'>
                {text}
            </h1>
            <p className='text-gray-500 font-[Inter] text-xs font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        </div>
    )
}

export default Describe