import React from 'react'

const Card = ({ plan, price, }) => {
    return (
        <div className="bg-[#252835] flex flex-col justify-center gap-10 w-full px-8 py-6 rounded-[30.501998901367188px]">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 items-start">
                    <div className="text-center text-base font-['Inter'] font-medium text-[#dddddd]">
                        {plan}
                    </div>
                    <div
                        id="Month1"
                        className="text-center text-4xl font-['Outfit'] font-semibold text-[#e0e0e0]"
                    >
                        {price}<span className="text-base font-medium">/Month</span>
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#b7b7b7]">
                        This package is suitable for teams
                        <br />
                        1-100 people
                    </div>
                </div>
                <div className="flex flex-col mr-6 gap-4 h-40 shrink-0 items-start">
                    <div className="text-sm font-['Inter'] font-semibold text-[#efefef]">
                        What’s incuded:
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#b7b7b7]">
                        20 GB dedicated hosting free
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#b7b7b7]">
                        Best for developers,freelancer
                        <br />1 year support
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-black/0">
                        Free customer domain
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-black/0">
                        Full statistics
                    </div>
                </div>
            </div>
            {
                plan === 'Standard' ? (
                    <button className="bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-blend-normal bg-no-repeat flex flex-col justify-center  h-12  items-center rounded-lg">
                        <div className="border-solid border-[#676767] flex flex-col justify-center h-12 shrink-0 items-center mx-px  rounded-lg">
                            <p className="text-sm font-['Inter'] font-medium text-[#e0e0e0]">
                                Get started
                            </p>
                        </div>
                    </button>
                ) : (
                    <button className="border-solid border-[#676767] flex flex-col justify-center h-12 shrink-0 items-center mx-px border rounded-lg">
                        <p className="text-sm font-['Inter'] font-medium text-[#e0e0e0]">
                            Get started
                        </p>
                    </button>
                )
            }
        </div>
    )
}

export default Card