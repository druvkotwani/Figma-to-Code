import React from 'react'

const Describe2 = ({ text }) => {
    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <div className="text-center text-3xl font-['Outfit'] font-semibold text-[#e0e0e0] w-full">
                {text}
            </div>
            <div className="text-center text-xs font-['Inter'] font-medium text-[#b7b7b7] self-start w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna{" "}
            </div>
        </div>
    )
}

export default Describe2