//Sidebar.jsx

import React from 'react'
import SidebarTop from './SidebarTop'
import SidebarBottom from './SidebarBottom'

const Sidebar = () => {
  return (
    <div className='w-[400px] h-full p-2 flex-col text-[rgb(255,255,255)] hidden lg:flex'>
      <SidebarTop/>
      <SidebarBottom/>
    </div>
  )
}

export default Sidebar
