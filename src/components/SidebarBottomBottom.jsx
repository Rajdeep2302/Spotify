//SidebarBottomBottom.jsx
import React from 'react'
import { assets } from '../assets/assets'

const SidebarBottomBottom = () => {
  return (
    <div className='h-[100%] flex flex-col justify-end mb-4 opacity-60'>
      <div className='flex mb-4'>
        <a href="#" className='text-xs ml-6'>Legal</a>
        <a href="#" className='text-xs ml-6'>Safety & Privacy</a>
        <a href="#" className='text-xs ml-6'>Privacy Policy</a>
        <a href="#" className='text-xs ml-6'>Cookies</a>
      </div>
      <div className='flex mb-3'>
        <a href="#" className='text-xs ml-6'>About Ads</a>
        <a href="#" className='text-xs ml-6'>Accessibility</a>
      </div>
      <a href="#" className='text-xs ml-6 '>Cookies</a>
      <div className='h-8 w-fit border border-[#cacaca] mt-4 ml-6 p-2 flex items-center rounded-full hover:border-white cursor-pointer'>
        <img className='h-5' src={assets.lang} alt="Language" />
        <p className='text-base ml-2 font-extrabold text-[#cacaca] hover:text-white'>English</p>
      </div>
    </div>
  )
}

export default SidebarBottomBottom
