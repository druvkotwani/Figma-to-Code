import Logo from './Logo'
// sm, md, lg, 
const Navbar = () => {
    return (
        <nav className=" flex flex-row justify-between items-center pt-4 px-8 lg:px-[72px]">
            <div className="flex flex-row gap-16 w-2/5 items-center">
                <Logo />

                <div className="hidden md:flex flex-row justify-between w-[422px] md:gap-4 items-start pt-1">
                    <div className="text-lg font-['Inter'] font-medium text-[#e0e0e0]">
                        Demos
                    </div>
                    <div className="text-lg font-['Inter'] font-medium text-[#e0e0e0]">
                        About
                    </div>
                    <div className="text-lg font-['Inter'] font-medium text-[#e0e0e0]">
                        Blog
                    </div>
                    <div className="text-lg font-['Inter'] font-medium text-[#e0e0e0]">
                        Pages
                    </div>
                    <div className="text-lg font-['Inter'] font-medium text-[#e0e0e0]">
                        Contact
                    </div>
                </div>
            </div>
            <div className="hidden self-start md:flex flex-row gap-4 items-start pt-2">
                <button className="border-solid border-[#676767] flex flex-col w-20  h-8 justify-center  items-center border">
                    <span className="text-sm font-['Inter'] font-medium text-[#e0e0e0]">
                        Sign in
                    </span>
                </button>
                <button className="border-solid border-[#676767] bg-[linear-gradient(90deg,_#2b59ff_0%,#bb2bff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col w-[116px] h-8 items-center justify-center py-2 border">
                    <span className="text-sm font-['Inter'] font-medium text-[#e0e0e0]">
                        Sign up
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar