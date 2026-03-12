import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div
      className='flex flex-col w-full max-w-[95%] lg:max-w-[1505px] mx-auto bg-secondary items-center gap-4 pt-4 pb-6 text-gray-800 rounded-b-2xl'
      id='speciality'
    >
      <h1 className='text-2xl md:text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-11/12 sm:w-2/3 md:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className='flex justify-center gap-4 pt-5 w-full flex-wrap lg:justify-center overflow-x-auto scrollbar-hide'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-transform duration-500 hover:translate-y-[-5px] sm:hover:translate-y-[-10px]'
            key={index}
            to={`/doc/${item.speciality}`}
          >
            <img
              className='w-12 sm:w-16 md:w-20 lg:w-24 mb-2'
              src={item.image}
              alt=''
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
