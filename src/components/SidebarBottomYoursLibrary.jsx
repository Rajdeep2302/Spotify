//SidebarBottomYoursLibrary.jsx
import React from 'react'
import { assets } from '../assets/assets'

const SidebarBottomYoursLibrary = () => {
  return (
    <div className='flex items-center justify-between gap-3 mt-3 mb-4 pr-3'>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='h-8' src={assets.stack_icon} alt="Stack" />
            <p className='text-[#cacaca] font-Roboto font-bold text-lg hover:text-white'>Your Library</p>
          </div>
          <img className='h-4 cursor-pointer' src={assets.plus_icon} alt="Plus" />
        </div>
  )
}

export default SidebarBottomYoursLibrary
