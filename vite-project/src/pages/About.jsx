import React from 'react'
import Header2 from '../components/Header2'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <Header2/>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='mx-2 my-10 flex flex-col md:flex-row gap-12 border border-gray-300'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem veritatis est assumenda sint repudiandae mollitia voluptatum ducimus necessitatibus quia eaque omnis adipisci, aliquam temporibus, illo soluta ipsam tenetur totam.</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eum labore ipsa voluptas praesentium modi dolore repudiandae porro illo! Possimus fugit molestiae, maxime saepe voluptatibus sint nesciunt in. Adipisci, maiores.</p>
           <b className='text-gray-800'>Our Vision</b>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate expedita ipsum animi. Quaerat animi consectetur necessitatibus earum excepturi minus expedita voluptatem reiciendis ad exercitationem! Dolorem nam impedit doloribus rerum beatae.</p>
        </div>
      </div>
      <div className='text-xl my-4 mx-2'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20 mx-2'>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, explicabo. Hic numquam dolorum debitis </p>
         </div>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis facilis beatae voluptas aspernatur</p>
         </div>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde, laboriosam possimus, numquam reiciendis</p>
         </div>
      </div>
    </div>
  )
}

export default about