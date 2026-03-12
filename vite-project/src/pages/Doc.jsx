import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Doc = () => {
  const {speciality}=useParams()
  const {doctors}=useContext(AppContext)
  const [filterDoc,setFilterDoc]=useState([])
  const navigate=useNavigate()

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality=== speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
      applyFilter();
  },[speciality,doctors])
  return (
    <div>
       <p className='text-black font-semibold mx-4 mt-4'>Browse through the doctors specialist</p>
       <div className='flex flex-col  sm:flex-row items-start gap-5 mt-5 mx-4 my-4'>
        <div className=' flex flex-col gap-4 text-sm text-gray-600 '>
          <p onClick={()=>speciality==='General physician'? navigate('/doc'):navigate('/doc/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>General physician</p>
          <p onClick={()=>speciality==='Gynecologist'? navigate('/doc'):navigate('/doc/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'? navigate('/doc'):navigate('/doc/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians'? navigate('/doc'):navigate('/doc/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'? navigate('/doc'):navigate('/doc/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist'? navigate('/doc'):navigate('/doc/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer hover:scale-105 trasition-all  hover:bg-secondary hover:text-black`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 hap-y-6'>
           {
             filterDoc.map((items,index)=>(
              <div onClick={()=>navigate(`/appointment/${items._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] trasition-all duration-500'>
                  <img className='bg-blue-50' src={items.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
                      <p className='text-gray-600 text-sm'>{items.speciality}</p>
                  </div>
              </div>
          ))
           }
        </div>
       </div>
    </div>
  )
}

export default Doc