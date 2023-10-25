import React from 'react'
import Describe from './Describe'
import Button from './Button'
const Result2 = () => {
    return (
        <div className='inline-flex flex-col justify-center items-center gap-[40px] '>

            <div className=' w-full mt-16 pl-5 pr-8'>
                <div className="relative flex flex-col justify-end items-end ">
                    <img
                        src="https://file.rendit.io/n/8hP4XrPpIgRq7iwzNrdq.svg"
                        className="bg-[url(https://file.rendit.io/n/Yrwzp4rlxYaaCL0zau36.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat"
                    />
                </div>
            </div>

            <div className='pl-8 pr-16 '>
                <Describe text='Write what you want to
convey through clear,&
authentic writing' />
                <div className='pt-8'>
                    <Button text='Start 14 days free trial' />
                </div>
            </div>
        </div>
    )
}

export default Result2

