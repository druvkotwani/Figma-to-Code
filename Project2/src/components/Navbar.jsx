import Logo from "./Logo"
import ButtonPink from "./ButtonPink"
const Navbar = () => {
    return (
        <nav className="flex p-0 px-[24px] justify-center items-start self-stretch ">
            <div className="flex w-[1200px] p-4 justify-center items-center">
                <div className="flex justify-between items-center flex-1">
                    <Logo />
                    <ul className="hidden sm:flex items-center gap-8">
                        <li className="text-brand-off-white text-base font-normal"><a href="/">Pricing</a></li>
                        <li className="text-brand-off-white text-base font-normal"><a href="/">About Us</a></li>
                        <ButtonPink text="Join Waiting List" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar