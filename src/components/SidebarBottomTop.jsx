//SidebarBottomTop.jsx
import React from 'react'
import SidebarBottomCreatePlaylist from './SidebarBottomCreatePlaylist'
import SidebarBottomBrowsePodcast from './SidebarBottomBrowsePodcast'
import SidebarBottomYoursLibrary from './SidebarBottomYoursLibrary'

const SidebarBottomTop = () => {
  return (
    <div className='h-[65%]'>
        <SidebarBottomYoursLibrary/>
        <div className='h-[calc(100%-100px)] flex flex-col items-center overflow-auto'>
          <SidebarBottomCreatePlaylist/>
          <SidebarBottomBrowsePodcast/>
        </div>
      </div>
  )
}

export default SidebarBottomTop
