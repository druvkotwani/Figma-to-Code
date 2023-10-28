import HeaderComponent from "./HeaderComponent"

const Hero = () => {
    return (
        <div className='flex flex-col items-center pt-[80px] pb-[64px] px-[120px] gap-8 self-stretch'>

            {/* Hero Text */}
            <div className="flex flex-col justify-center items-center p-6 gap-4 self-stretch">
                <HeaderComponent header="Bring Your Words to Life!" subheader='Transform your text into stunning, AI-generated images in seconds. No design skills required.' />

            </div>

            {/* Hero Ai Bar */}

            <div className="flex flex-col justify-center items-center p-6 gap-4 self-stretch">
                <div className="flex py-4 px-6 justify-center items-center gap-4 rounded-full bg-[#2B243C] ">
                    <div className="flex p-2 justify-center items-center gap-2 rounded-[10px] bg-brand-mix">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <path d="M17.589 5.72446L16.0801 7.17641L13.0422 4.25303L14.551 2.80109C14.9763 2.39181 15.5232 2.19692 16.07 2.19692C16.6168 2.19692 17.1637 2.39181 17.589 2.80109C18.4295 3.60989 18.4295 4.91566 17.589 5.72446ZM15.3713 7.86925L4.42453 18.3934C3.58403 19.2022 2.22708 19.2022 1.38658 18.3934C0.546081 17.5846 0.546081 16.2788 1.38658 15.47L12.3333 4.94587L15.3713 7.86925ZM7.91817 1.8276L8.33336 0.473105C8.37387 0.346425 8.33336 0.210001 8.24222 0.112555C8.15108 0.0151092 7.98906 -0.0238692 7.85741 0.0151092L6.44983 0.414637L5.04225 0.0151092C4.9106 -0.0238692 4.76883 0.0151092 4.66757 0.10281C4.5663 0.200256 4.53592 0.33668 4.57643 0.46336L4.98149 1.8276L4.5663 3.1821C4.5258 3.30878 4.5663 3.4452 4.65744 3.54265C4.75871 3.6401 4.90048 3.66933 5.03212 3.63035L6.44983 3.24057L7.85741 3.6401C7.89792 3.64984 7.9283 3.65958 7.96881 3.65958C8.07007 3.65958 8.16121 3.62061 8.24222 3.55239C8.34349 3.45495 8.37387 3.31852 8.33336 3.19184L7.91817 1.8276ZM3.86757 7.67435L4.28276 6.31986C4.32327 6.19318 4.28276 6.05675 4.19162 5.95931C4.09036 5.86186 3.94859 5.83263 3.81694 5.87161L2.39923 6.26139L0.991647 5.86186C0.860002 5.82288 0.718231 5.86186 0.616966 5.94956C0.515701 6.04701 0.485322 6.18343 0.525828 6.31011L0.930888 7.67435L0.515701 9.02885C0.475195 9.15553 0.515701 9.29196 0.60684 9.3894C0.708105 9.48685 0.849876 9.51608 0.98152 9.4771L2.3891 9.07757L3.79669 9.4771C3.82707 9.48685 3.86757 9.48685 3.90808 9.48685C4.00934 9.48685 4.10048 9.44787 4.1815 9.37966C4.28276 9.28221 4.31314 9.14579 4.27263 9.01911L3.86757 7.67435ZM19.0573 12.5466L19.4725 11.1922C19.513 11.0655 19.4725 10.929 19.3814 10.8316C19.2801 10.7342 19.1383 10.7049 19.0067 10.7439L17.5991 11.1434L16.1915 10.7439C16.0599 10.7049 15.9181 10.7439 15.8168 10.8316C15.7156 10.929 15.6852 11.0655 15.7257 11.1922L16.1409 12.5466L15.7257 13.9011C15.6852 14.0278 15.7257 14.1642 15.8168 14.2617C15.9181 14.3591 16.0599 14.3884 16.1915 14.3494L17.5991 13.9499L19.0067 14.3494C19.0371 14.3591 19.0776 14.3591 19.1181 14.3591C19.2193 14.3591 19.3105 14.3202 19.3915 14.252C19.4928 14.1545 19.5231 14.0181 19.4826 13.8914L19.0573 12.5466Z" fill="#EEEEF0" />
                        </svg>
                    </div>

                    <p className="text-brand-pink-1 text-base font-normal leading-normal">An Ape in clothes in the music studio.</p>
                </div>
            </div>

            {/* Hero Animations */}
            <div
                id="HeroAnimationRoot"
                className="relative flex flex-col justify-center w-full items-center px-32 py-6"
            >
                <div
                    id="Ellipse"
                    className="blur-[100px] w-2/5 h-[504px] bg-[#c00dc8] absolute top-40 left-[294px] rounded-[50%]"
                />
                <img src='assets/earth.png' className="relative" />
            </div>

        </div>
    )
}

export default Hero