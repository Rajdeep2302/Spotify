//BodyFooter.jsx

import React from 'react'

const BodyFooter = () => {
  return (
    <>
      <div className='flex lg:flex-row flex-col justify-evenly w-full bg-black text-white border-b-[1px] border-[#ffffff74] p-2 '>
        {/* company */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-lg mb-2'>Company</h2>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>About</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>C.E.O.</a>
        </div>
        {/* community */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-lg mb-2'>Community</h2>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Artist</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Developer</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Manager</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>C.E.O</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Full Team</a>
        </div>
        {/* Useful links */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-lg mb-2'>Useful links</h2>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Support</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Free web links</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Remarks</a>
        </div>
        {/* Spotify Plans */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-lg mb-2'>Spotify Plans</h2>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Spotify Free</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Join as Spotify Team member</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Post Your Song</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Create your own Playlist</a>
        </div>
        {/* Social Media */}
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-lg mb-2'>Social Media</h2>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Instagram</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>X-App</a>
          <a href="#" className='opacity-65 hover:underline hover:opacity-90'>Linkedin</a>
        </div>
      </div>
      <div className=' flex flex-col pt-20 pb-20 pl-5 pr-5 lg:flex-row justify-between w-full bg-black text-white p-2 items-center'>
        <div>
          <h1 className='text-lg font-DM font-bold'>@ Rajdeep Pal</h1>
          <p className='opacity-65 '>Developer, Designer & Programmer</p>
        </div>
        <div className='bg-white text-black p-1 rounded-full'>
          Portfolio & Other Works
        </div>
      </div>
    </>
  )
}

export default BodyFooter
