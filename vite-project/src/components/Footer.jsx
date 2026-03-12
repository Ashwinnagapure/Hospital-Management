import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div className='md:mx-2 rounded-b-xl px-12 py-6  bg-black pt-14 mb-2'>
        <div className='flex flex-col sm:grid grid-cols-[4fr_1fr_1fr_1fr] gap-12 my-10 mt-0 text-sm'>
            {/* left section */}
            <div>
                 <img className='mb-3 ml-2 w-40' src={assets.logo} alt="" />
                 <div className='flex w-full md:w-2/3 ml-4 gap-2'>
                    <a href=""><img className='w-7 h-7' src={assets.insta} alt="" /></a>
                    <a href=""><img className='w-7 h-7' src={assets.facebook} alt="" /></a>
                    <a href=""><img className='w-7 h-7' src={assets.linkedin} alt="" /></a>
                    <a href=""><img className='w-7 h-7' src={assets.google} alt="" /></a>
                 </div>
            </div>
            {/* center section */}
            <div>
                <p className='text-xl text-white font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-white'>
                    <li><a href="">Home</a></li>
                    <li><a href=""> About us</a></li>
                    <li><a href="">Contact us</a> </li>
                    <li><a href="">Privacy policy</a> </li>
                </ul>
            </div>
            {/* mid section */}
            <div>
                <p className='text-xl text-white font-medium mb-5'>GMCs</p>
                <ul className='flex flex-col gap-2 text-white'>
                    <li><a href="">GMC Nagpur</a></li>
                    <li><a href=""> GMC Nanded</a></li>
                    <li><a href="">GMC Sambhaji Nagar</a> </li>
                   
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl text-white font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-white'>
                    <li> +1-212-456-789</li>
                    <li>AptMed@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* copyright text */}
            <hr />
            <p className='py-5 text-sm text-center text-white'>Copyright 2024, All Rights Reserved with AptMed | Privacy Policy | Terms & Conditions | Refund and Cancellation Policy | Medical Disclaimer</p>
        </div>
    </div>
  )
}

export default footer