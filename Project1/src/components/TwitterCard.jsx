import React from 'react'

const TwitterCard = ({ name, username, image, text, hashtag }) => {
    return (
        <div className="bg-white flex flex-col justify-center gap-4 w-full px-4 py-3">
            <div className="flex flex-row mr-4 gap-10 items-start">
                <div className="flex flex-row gap-4 w-[208px] items-start">
                    <img src="" id="Ellipse" className="w-10 shrink-0" />
                    <div className="flex flex-col w-40 items-start">
                        <div className="text-center text-base font-['Inter'] font-bold text-[#404040]">
                            {name}
                        </div>
                        <div className="text-center text-base font-['Inter'] font-medium text-[#1c93d7]">
                            {username}
                        </div>
                    </div>
                </div>
                <img
                    src="https://file.rendit.io/n/6QrDSAISffqtg6B3y1Ow.svg"
                    id="Twitter"
                    className="mt-1 w-6 shrink-0"
                />
            </div>
            <div className="flex flex-col gap-3 items-start">
                <div className="text-sm font-['Inter'] font-medium text-[#707070] w-full">
                    {text}
                </div>
                <div className="text-center text-base font-['Inter'] font-medium text-[#1c93d7]">
                    {hashtag}
                </div>
            </div>
        </div>
    )
}

export default TwitterCard