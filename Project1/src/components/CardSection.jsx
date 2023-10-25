import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[45.753px]'>
            <div className='px-8 py-8 flex flex-col justify-center items-center gap-[33.552px]'>
                <Card plan="Basic" price="$29" />
                <Card plan="Standard" price="$149" />
                <Card plan="Premium" price="$299" />
            </div>
        </div>
    )
}

export default CardSection