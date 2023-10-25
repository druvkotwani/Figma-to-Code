import React from 'react'

const ToggleSection = () => {
    return (
        <div className='px-[26px] py-[44px]'>
            <div className="flex flex-col justify-between w-full h-[440px]">
                <div className="bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-3 h-12 shrink-0 items-start rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">
                        Blog headlines
                    </div>
                </div>
                <div className="border-solid border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start border rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">Blog intros</div>
                </div>
                <div className="border-solid border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start border rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">
                        Content rewriter
                    </div>
                </div>
                <div className="border-solid border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start border rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">Facebook ads</div>
                </div>
                <div className="border-solid border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start border rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">
                        Product description
                    </div>
                </div>
                <div className="border-solid border-[#252525] flex flex-col justify-center pl-3 h-12 shrink-0 items-start border rounded-lg">
                    <div className="font-['Inter'] font-bold text-[#e0e0e0]">
                        PAS copywriting formula
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToggleSection