import React from 'react'
import Logo from "./Logo"
import HeaderComponent from "./HeaderComponent"
import ButtonPink from "./ButtonPink"
const CallToAction = () => {
    return (
        // Call to action
        <div className="flex flex-col py-16 pb-[72px] px-[120px] gap-14 items-center self-stretch">

            <div className="border rounded-[32px] border-solid border-[#EEEEF0] bg-gradient-to-b from-[#2B243C] to-[#0B031E] w-[1200px] py-14 px-8 flex flex-col justify-center items-center gap-8">
                {/* TExt */}
                <div className="flex flex-col p-6 justify-center items-center gap-8 self-stretch">
                    <Logo />
                    <HeaderComponent header="Join the Community Now!" subheader='Start Transforming Your Text into Stunning Images Now!' />
                    <ButtonPink text='Join Waiting List Now' />
                </div>
            </div>
        </div>
    )
}

export default CallToAction