//SidebarBottom.jsx
import React from 'react'
import SidebarBottomTop from './SidebarBottomTop'
import SidebarBottomBottom from './SidebarBottomBottom'

const SidebarBottom = () => {
  return (
    <div className='bg-[#121212] h-[calc(100vh-150px)] rounded flex flex-col justify-between mt-3'>
      <SidebarBottomTop/>
      <SidebarBottomBottom/>
    </div>
  )
}

export default SidebarBottom
