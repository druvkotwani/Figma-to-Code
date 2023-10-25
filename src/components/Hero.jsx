import React from 'react';

const customStyle = {
  backgroundImage: 'linear-gradient(90deg, #FFC947 8.35%, #FC6739 91.76%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontFamily: 'Outfit',
  fontSize: '40px',
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
    <div className='flex flex-col justify-center items-center gap-[25px] px-[13px]'>
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="text-center text-4xl font-['Outfit'] font-semibold text-[#e0e0e0]">
          Write better
          <br />
          content for your
          <br />
          <span className="font-medium" style={customStyle}>facebook ads</span>
          <div style={underlineStyle}></div>
        </div>
        <p className="text-center text-xs font-['Inter'] font-medium text-[#b7b7b7] self-start w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna
        </p>
      </div>

      {/* Button and Watch a demo */}
      <div className='flex justify-center flex-col items-center gap-[8px]'>

        <button className=' border-[0.844px] border-solid border-[#676767] w-[151.156px] h-[29px] bg-custom2 text-center'>
          <p className='pb-[2px] text-[#E0E0E0] font-inter text-[13px] font-medium text-center'>
            Start 14 days free trial
          </p>
        </button>

        <div className='inline-flex justify-center items-center gap-[6px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M10.1333 1.68889C5.47195 1.68889 1.68884 5.472 1.68884 10.1333C1.68884 14.7947 5.47195 18.5778 10.1333 18.5778C14.7946 18.5778 18.5777 14.7947 18.5777 10.1333C18.5777 5.472 14.7946 1.68889 10.1333 1.68889ZM12.3795 11.5942L11.2986 12.2191L10.2177 12.844C8.8244 13.6462 7.6844 12.9876 7.6844 11.3831V10.1333V8.88356C7.6844 7.27067 8.8244 6.62044 10.2177 7.42267L11.2986 8.04756L12.3795 8.67244C13.7728 9.47467 13.7728 10.792 12.3795 11.5942Z" fill="#B0B0B0" />
          </svg>
          <p className='text-[#E0E0E0] font-inter text-xs font-medium pb-[2px]'>
            Watch a demo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
