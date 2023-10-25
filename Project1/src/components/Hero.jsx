import React from 'react';
import Button from './Button';

const customStyle = {
  backgroundImage: 'linear-gradient(90deg, #FFC947 8.35%, #FC6739 91.76%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontFamily: 'Outfit',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  textDecorationLine: 'underline'
};

const underlineStyle = {
  width: '93%', // Full width of the text
  height: '2.5px', // Height of the underline
  background: 'linear-gradient(90deg, #FFC947 8.35%, #FC6739 91.76%)',
  marginTop: '-5px', // Adjust this value to reduce the gap
  marginLeft: '8px' // Adjust this value to shift it towards right
};

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[35px] px-[13px] py-16 mt-4 relative' >
      <div className='absolute top-[169px] right-[316px] md:right-[90%] md:w-[375px] md:h-[375px] w-[242px] h-[242px] blur-md bg-Ellipse2 bg-cover'></div>
      <div className='absolute top-[189px] left-[315px] md:left-[90%] md:w-[375px] md:h-[375px] w-[242px] h-[242px] blur-md bg-Ellipse3 bg-cover'></div>
      <div className='absolute top-[39px] md:top-0 mx-auto bg-Ellipse1 md:w-[475px] md:h-[475px] w-[275px] h-[275px] bg-cover bg-center blur-lg'></div>

      <div className="flex flex-col gap-6 w-full items-center relative ">
        <div className="text-center text-4xl md:text-6xl font-['Outfit'] font-semibold text-[#e0e0e0] ">
          Write better
          <br />
          content for your
          <br />
          <span className="font-medium text-4xl md:text-6xl" style={customStyle}>facebook ads</span>
          <div style={underlineStyle}></div>
        </div>
        <p className="text-center md:pt-1 text-xs md:text-[18px] leading-normal font-['Inter'] font-medium text-[#b7b7b7] self-start mx-auto md:w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna
        </p>
      </div>

      {/* Button and Watch a demo */}
      <div className='flex justify-center flex-col items-center md:gap-4 gap-[8px]'>

        <Button text='Start 14 days free trial' />

        <button className='inline-flex justify-center  items-center gap-[6px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21" fill="none">
            <path d="M10.1333 1.68889C5.47195 1.68889 1.68884 5.472 1.68884 10.1333C1.68884 14.7947 5.47195 18.5778 10.1333 18.5778C14.7946 18.5778 18.5777 14.7947 18.5777 10.1333C18.5777 5.472 14.7946 1.68889 10.1333 1.68889ZM12.3795 11.5942L11.2986 12.2191L10.2177 12.844C8.8244 13.6462 7.6844 12.9876 7.6844 11.3831V10.1333V8.88356C7.6844 7.27067 8.8244 6.62044 10.2177 7.42267L11.2986 8.04756L12.3795 8.67244C13.7728 9.47467 13.7728 10.792 12.3795 11.5942Z" fill="#B0B0B0" />
          </svg>
          <p className='text-[#E0E0E0] font-inter text-[16px]  font-medium py-[2px]'>
            Watch a demo
          </p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
