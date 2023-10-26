import React from 'react'
import { useState } from 'react'

const Options = [' Blog headlines', 'News Headline', 'Blog Intros', 'Content rewriter', 'Product description', 'PAS copywriting formula']

const ToggleSection = () => {
    const [active, setActive] = useState(0);

    function handleActive(index) {
        console.log(index)
        setActive(index)
    }

    return (
        <div className='mx-4 px-[26px] py-[44px] w-[87%] md:w-[25%] md:mx-auto'>
            <div className="flex flex-col justify-between w-full  gap-8">
                {Options.map((option, index) => (
                    active === index ? (
                        <div className="bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-3 h-12 shrink-0 items-start rounded-lg" key={index}>
                            <Option onClick={() => handleActive(index)} option={option} />
                        </div>
                    ) : (
                        <Option onClick={() => handleActive(index)} option={option} key={index} property='border' />
                    )
                ))}
            </div>
        </div>
    )
}

function Option({ option, onClick, property }) {
    return (
        <div className={`border-solid  border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start rounded-lg ${property}`} onClick={onClick} >
            <div className="font-['Inter'] font-bold text-[#e0e0e0]">{option}</div>
        </div >
    );
}

export default ToggleSection