import React from 'react'

const Logo = () => {
    return (
        <div className='flex p-2 gap-2 justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 19 20" fill="none">
                <path d="M2.375 6.97583V13.0321C2.375 13.5467 2.73917 14.1642 3.19042 14.4175L8.73208 17.4971C9.15167 17.7346 9.84833 17.7346 10.2679 17.4971L15.8096 14.4175C16.2608 14.1721 16.625 13.5467 16.625 13.0321V6.97583C16.625 6.46124 16.2608 5.84374 15.8096 5.59041L10.2679 2.51083C9.84833 2.27333 9.15167 2.27333 8.73208 2.51083L3.19042 5.59041C2.73917 5.83583 2.375 6.46124 2.375 6.97583Z" fill="#E8E8E8" />
            </svg>
            <h1 className='text-white font-bold text-xl'>AI</h1>
        </div>
    )
}

export default Logo