//SidebarBottomCreatePlaylist.jsx
import React from 'react'

const SidebarBottomCreatePlaylist = () => {
  return (
    <div className='h-[140px] bg-[#ffffff19] w-[95%] rounded-2xl flex flex-col p-3'>
      <h1 className='text-lg font-semibold'>Create your first playlist</h1>
      <p className='text-base'>It's easy, we'll help you</p>
      <div className='h-[30%] rounded-full bg-white flex justify-center items-center w-[40%] mt-5 cursor-pointer'>
        <p className='text-black text-lg font-semibold'>Create Playlist</p>
      </div>
    </div>
  )
}

export default SidebarBottomCreatePlaylist
