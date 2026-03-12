import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext'
const appointment = () => {
  const {doctors}=useContext(AppContext)
  return (
    <div className='mx-4'>
        <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
        <div>
           {doctors.slice(0,2).map((item,index)=>(
            <div  className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
               <div>
                 <img className='w-32 bg-secondary' src={item.image} alt="" />
               </div>
               <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 17, November, 2024 | 8:30 PM</p>
               </div>
               <div></div>
               <div className='flex flex-col gap-2 justify-end'>
                 <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded-full bg-black hover:scale-105 '>Pay Online</button>
                 <button className='text-sm text-white text-center sm:min-w-48 py-2 border rounded-full bg-black hover:scale-105'>Cancel appointment</button>
               </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default appointment