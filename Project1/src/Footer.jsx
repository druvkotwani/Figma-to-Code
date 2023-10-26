import React from 'react'

const Footer = () => {
    return (
        <div className="md:grid md:grid-cols-2 flex flex-col justify-center md:gap-0 md:w-[90%] md:ml-auto gap-24 w-full py-16 px-6">
            <div className="md:grid md:grid-cols-2 flex flex-row justify-between items-start mx-1">
                <div className="flex flex-col justify-between w-16 shrink-0 h-40 items-start">
                    <div className="flex flex-col gap-4 w-16 h-12 shrink-0 items-start">
                        <div className="text-sm font-['Inter'] font-bold text-[#dcdcdc]">
                            Company
                        </div>
                        <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                            About
                        </div>
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Feature
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Works
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Career
                    </div>
                </div>
                <div className="flex flex-col justify-between h-40 items-start">
                    <div className="flex flex-col gap-4 w-32 h-12 shrink-0 items-start">
                        <div className="text-sm font-['Inter'] font-bold text-[#dcdcdc]">
                            Help
                        </div>
                        <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                            Customer support
                        </div>
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Delivery details
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Terms & condition
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Pravacy policy
                    </div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 flex flex-row justify-between items-start mx-1">
                <div className="flex flex-col justify-between w-32 shrink-0 h-40 items-start">
                    <div className="flex flex-col gap-4 w-16 h-12 shrink-0 items-start">
                        <div className="text-sm font-['Inter'] font-bold text-[#dcdcdc]">
                            Resources
                        </div>
                        <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                            Free
                        </div>
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Development
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        How to -blog
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Youtube
                    </div>
                </div>
                <div className="flex flex-col justify-between h-40 items-start">
                    <div className="flex flex-col gap-4 w-32 h-12 shrink-0 items-start">
                        <div className="text-sm font-['Inter'] font-bold text-[#dcdcdc]">
                            Links
                        </div>
                        <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                            Free ebooks
                        </div>
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Development details
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        How to blog
                    </div>
                    <div className="text-sm font-['Inter'] font-medium text-[#bebebe]">
                        Youtube playlist
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer