import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className='flex px-[24px] justify-center items-center '>
            <div className='lg:w-[1200px] p-4'>
                <div className='flex justify-between items-center flex-1'>
                    <Logo />
                    <ul className="hidden sm:flex items-center gap-8">
                        <li className="text-white text-base font-normal"><a href="/">Pricing</a></li>
                        <li className="text-white text-base font-normal"><a href="/">About Us</a></li>
                    </ul>
                </div>


            </div>

        </nav>
    )
}

export default Navbar