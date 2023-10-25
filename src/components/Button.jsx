import React from 'react'

const Button = ({ text }) => {
    return (
        <button className=' border-[0.844px] border-solid border-[#676767] w-[151.156px] h-[40px] bg-custom2 text-center'>
            <p className='pb-[2px] text-[#E0E0E0] font-inter text-[12px] font-medium text-center'>
                {text}
            </p>
        </button>
    )
}

export default Button