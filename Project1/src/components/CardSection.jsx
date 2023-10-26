import React from 'react'
import Card from './Card'
import Describe2 from './Describe2'

const CardSection = () => {
    return (
        <div className='flex flex-col my-16 justify-center items-center gap-[45.753px]'>

            <Describe2 text='Make the wise decision for your business' />

            <div className='pt-4 pb-8 py-8 flex md:flex-row flex-col justify-center items-center gap-[33.552px]'>
                <Card plan="Basic" price="$29" />
                <Card plan="Standard" price="$149" color='bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat' />
                <Card plan="Premium" price="$299" />
            </div>
        </div>
    )
}

export default CardSection