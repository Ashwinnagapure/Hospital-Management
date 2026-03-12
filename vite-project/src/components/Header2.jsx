import React from 'react';
import { assets } from '../assets/assets';

const Header2 = () => {
  return (
    <div className='flex flex-col w-full max-w-[95%] lg:max-w-[1505px] mx-auto md:flex-row flex-wrap bg-secondary rounded-lg px-4 sm:px-6 md:px-10 lg:px-20'>
      {/* Left side */}
      <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-4 py-6 sm:py-10 md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight'>
          Book Appointment <br /> With GMCs Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-xs sm:text-sm font-light'>
          <img className='w-14 sm:w-20 md:w-28 mt-5 ' src={assets.group_profiles} alt="Group profiles" />
          <p className='text-center md:text-left'>
            Simply browse through our extensive list of GMCs doctors,{' '}
            <br className='hidden sm:block'/>
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className='flex items-center gap-2 bg-primary px-6 py-2 sm:px-8 sm:py-3 rounded-full text-white-600 text-xs sm:text-sm mt-4 md:mt-0 hover:scale-105 transition-all duration-300 font-semibold'
           href="#speciality">
          Book Appointment 
          <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>
      
      {/* Right side */}
      <div className='w-full md:w-1/2 mt-4 md:mt-0 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Header" />
      </div>
    </div>
  );
}

export default Header2;
