import React from 'react'

const Describe2 = ({ text }) => {
    return (
        <div className="flex flex-col gap-4 md:w-full w-[87%] mx-auto  items-center">
            <h1 className="text-center md:text-4xl text-3xl font-['Outfit'] font-semibold text-[#e0e0e0] ">
                {text}
            </h1>
            <p className="text-center md:text-[16px] text-xs font-['Inter'] font-medium text-[#b7b7b7] self-start md:w-[40%] leading-snug mx-auto w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
            </p>
        </div>
    )
}

export default Describe2