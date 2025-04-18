//SidebarBottomBrowsePodcast.jsx
import React from 'react'

const SidebarBottomBrowsePodcast = () => {
  return (
    <div className='h-[150px] bg-[#ffffff19] w-[95%] rounded-2xl flex flex-col p-3 mt-4'>
      <h1 className='text-lg font-semibold'>Let's find some podcasts to follow</h1>
      <p className='text-base'>We'll keep you update on new episodes</p>
      <div className='h-[30%] rounded-full bg-white flex justify-center items-center w-[40%] mt-5 cursor-pointer'>
        <p className='text-black text-lg font-semibold'>Create Playlist</p>
      </div>
    </div>
  )
}

export default SidebarBottomBrowsePodcast
