import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
   const navigate=useNavigate();
   const [showMenu,setShowMenu]=useState(false)
   const [token,setToken]=useState(true)
  return (
    <div className='bg-black  h-20 rounded-t-2xl mt-5 place-self-center' style={{ width: '98%' }}>
      <div className='flex  items-center h-20  text-md justify-between '>
        <img onClick={()=>navigate('/')} className='w-44 ml-4 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-14 font-medium font-bold text-white pl-72'>
          <NavLink to='/' >
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/doc'>
            <li className='py-1'>Services</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
        </ul>
        <div className='ml-28' >
          {
            token ? <div className='flex items-center gap-2 cursor-pointer group relative mr-11'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('/my-profile')}className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointment')}className='hover:text-black cursor-pointer '>My Appointment</p>
                  <p onClick={()=>setToken(false)}className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary rounded-full px-7 py-2 font-bold text-sm mr-11 items-center hidden md:block'>Create account</button>
          }
        </div>
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden mr-6 ' src={assets.menu_icon} alt="" />

      </div>
    </div>

  )
}

export default Navbar