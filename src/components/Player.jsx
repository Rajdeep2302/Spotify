//Player.jsx

import React from 'react'
import PlayerName from './PlayerName'
import PlayerBar from './PlayerBar'
import PlayerOption from './PlayerOption'

const Player = () => {

   

  return (
    <div className='h-[13vh] bg-[#000000] flex items-center justify-between text-white px-4'>
      <PlayerName/>
      <PlayerBar/>
      <PlayerOption/>
    </div>
  )
}

export default Player
