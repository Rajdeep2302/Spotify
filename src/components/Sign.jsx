//Sign.jsx

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
  const navigate = useNavigate()
  return (
    <div className='p-2 flex items-center justify-between text-white px-4 bg-gradient-to-r to-violet-500 from-fuchsia-500'>
      <div>
        <h1 className='text-white font-bold'>Preview of Spotify</h1>
        <p className='text-white font-normal'>Sign up to get unlimited Songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <div className='h-fit w-fit pl-5 pr-5 bg-white rounded-full flex items-center' onClick={() => navigate('/SignUp')}>
        <p className='text-black font-extrabold text-lg'>Sign up for free</p>
      </div>
    </div>
  )
}

export default Sign
