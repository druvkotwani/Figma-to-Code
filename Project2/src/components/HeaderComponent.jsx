import React from 'react'

const HeaderComponent = ({ header, subheader }) => {
    return (
        <div className="flex flex-col justify-center items-center p-6 gap-4 self-stretch">
            {/* Here goes the text */}
            <h1 className="text-brand-off-white text-[54px] font-extrabold leading-normal">{header}</h1>
            <h2 className="text-brand-off-white text-center text-lg font-normal leading-normal w-2/4 ">{subheader}</h2>
        </div>
    )
}

export default HeaderComponent