import React from 'react'
import Describe from './Describe'
import Button from './Button'

const Results = () => {
    return (
        <div className='inline-flex md:grid grid-cols-2 flex-col justify-center items-center md:w-[90%] md:pl-8 md:mx-auto gap-[40px] '>

            <div className=' w-full mt-16 pl-5 pr-8 md:w-[60%] md:mx-auto'>
                <div className="relative flex flex-col justify-end items-end ">
                    <img
                        src="https://file.rendit.io/n/BbbYofMFGMK97timZsum.svg"
                        className="w-[268px] h-[297px]  md:w-[301px] md:h-[335px]  bg-[url(https://file.rendit.io/n/YSX5R7siCvNLr0SFrHg7.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
                    />
                    <img
                        src="https://file.rendit.io/n/VNE5sn287CPPqtAzrJGI.svg"
                        className="relative pt-[95px]"
                    />
                </div>
            </div>

            <div className='pl-8 pr-16 md:w-[90%] mx-auto  md:mt-16 md:order-1'>
                <Describe text='Create content efficiently
                and quickly with great AI
                writing tools'/>
                <div className='pt-8'>
                    <Button text='Start 14 days free trial' />
                </div>
            </div>
        </div>
    )
}

export default Results