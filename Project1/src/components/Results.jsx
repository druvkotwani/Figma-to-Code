import React from 'react'
import Describe from './Describe'
import Button from './Button'

const Results = () => {
    return (
        <div className='inline-flex flex-col justify-center items-center gap-[40px] '>

            <div className=' w-[50%]  mt-16 pl-5 pr-8 '>
                <div className="relative flex flex-col justify-end items-end ">
                    <img
                        src="https://file.rendit.io/n/BbbYofMFGMK97timZsum.svg"
                        className="w-[268px] md:w-[375px] md:h-[415px] h-[297px] bg-[url(https://file.rendit.io/n/YSX5R7siCvNLr0SFrHg7.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0"
                    />
                    <img
                        src="https://file.rendit.io/n/VNE5sn287CPPqtAzrJGI.svg"
                        className="relative pt-[95px]"
                    />
                </div>
            </div>

            <div className='pl-8 pr-16 '>
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