import React from 'react'

const TrustedBy = () => {
    return (
        <div className='border-t-[2px] border-[#212121] mt-16'>
            <div className='inline-flex flex-col justify-center items-center gap-[14px] mt-16 px-8 md:px-auto w-full '>
                <h1 className='text-gray-300 text-center font-[Outfit] md:text-xl    font-semibold text-base'>
                    Trusted by nearly 5000+ paying customers
                </h1>
                <img className="md:w-1/2  md:pt-4"
                    src='/assets/logos.png' />

            </div>

        </div>
    )
}

export default TrustedBy