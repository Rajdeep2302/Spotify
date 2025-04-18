//PlayerName.jsx

import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

const PlayerName = () => {
  const { track } = useContext(PlayerContext);
  return (
    <div className='hidden lg:flex items-center gap-4'>
      <img className='h-12 rounded-full' src={track.image} alt="SongImage" />
      <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}...</p>
      </div>
    </div>
  )
}

export default PlayerName
