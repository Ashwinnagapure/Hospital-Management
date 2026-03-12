import React from 'react'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>
      <div className='mx-2 my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm border border-gray-300'>
         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
           <p className='font-semibold text-lg text-gray-600'>Government Medical College (GMC) Nagpur</p>
           <p className='text-gray-500'>456 Medical Road <br /> Near Ganesh-Tekdi</p>
           <p className='text-gray-500'> Tel : +91 999-999-99</p>
           
           <p className='text-gray-500 pr-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusamus suscipit maiores architecto quidem consectetur qui recusandae facilis autem. Dolore perspiciatis architecto aut, impedit quae blanditiis maxime iste cumque nam.</p>
           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore!</button>
         </div>
      </div>
    </div>
  )
}

export default contact