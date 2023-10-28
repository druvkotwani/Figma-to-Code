import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';


const Card = ({ background, shadow, text, price }) => {
    return (
        <div className={`flex flex-col items-center w-[360px] h-[576px] py-8 px-4 justify-between rounded-[20px] ${background}`} style={{ boxShadow: `0px 0px 100px 0px ${shadow}` }}>
            <header className='flex flex-col items-start gap-6'>
                {/* 2 text here */}
                <div className='flex w-[360px] px-4 pt-0 pb-4 flex-col justify-center items-center gap-2'>
                    <h1 className='text-brand-off-white text-2xl font-bold'>
                        {text}
                    </h1>
                    <h2 className='text-brand-off-white text-6xl font-extrabold leading-[94px] text-center'>
                        {price}
                    </h2>
                </div>

                {/* list */}
                <ul className='flex w-[360px] p-4 flex-col justify-center items-center gap-5'>

                    <li className='flex items-start gap-2 self-stretch justify-center '>
                        <div className='flex w-6 h-6 justify-center items-center'>
                            <AiFillCheckCircle className='w-[20px] h-[20px]' />
                        </div>
                        <p className='flex-1 text-brand-off-white font-inter text-base font-normal'>Access to basic features and tools for setting up your online store.</p>
                    </li>

                    <li className='flex items-start gap-2 self-stretch '>
                        <div className='flex w-6 h-6 justify-center items-center'>
                            <AiFillCheckCircle className='w-[20px] h-[20px]' />
                        </div>
                        <p className='flex-1 text-brand-off-white font-inter text-base font-normal'>Up to 100 product listings suitable for a small business.</p>
                    </li>


                    <li className='flex items-start gap-2 self-stretch'>
                        <div className='flex w-6 h-6 justify-center items-center'>
                            <AiFillCheckCircle className='w-[20px] h-[20px]' />
                        </div>
                        <p className='flex-1 text-brand-off-white font-inter text-base font-normal'>Email support to help you navigate any difficulties.</p>
                    </li>

                    <li className='flex items-start gap-2 self-stretch'>
                        <div className='flex w-6 h-6 justify-center items-center'>
                            <AiFillCheckCircle className='w-[20px] h-[20px]' />
                        </div>
                        <p className='flex-1 text-brand-off-white font-inter text-base font-normal'>Affordable pricing perfect
                            for startups and small businesses.</p>
                    </li>
                </ul>

            </header>
            <button className='bg-brand-off-white rounded-[8px] off-white flex w-[328px] px-8 py-4 justify-center items-center gap-2'>
                <span className='text-brand-purple-6 font-inter text-base font-medium'>
                    Start 7 Days Free Trail

                </span>
            </button>
        </div>
    )
}

Card.propTypes = {
    background: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default Card;
