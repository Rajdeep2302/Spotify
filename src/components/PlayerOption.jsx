//PlayerOption.jsx

import React, { useState } from 'react';
import { assets } from '../assets/assets';

const PlayerOption = () => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0); 

  const showVolume = () => {
    setIsVolumeVisible(true);
  };

  const hideVolume = () => {
    setIsVolumeVisible(false);
  };

  const handleVolumeChange = (e) => {
    const newVolumeLevel = (e.clientX - e.target.getBoundingClientRect().left) / e.target.offsetWidth * 100;
    setVolumeLevel(Math.min(Math.max(newVolumeLevel, 0), 100)); 
  };

  return (
    <div className='hidden lg:flex items-center gap-3 opacity-75'>
      <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="Plays" />
      <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="Mic" />
      <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="Queue" />
      <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="Speaker" />
      <img 
        onMouseEnter={showVolume}
        className='w-4 cursor-pointer'
        src={assets.volume_icon}
        alt="Volume"
      />
      {isVolumeVisible && (
        <div
          id='volume'
          className='w-[90px] bg-gray-300 rounded-full cursor-pointer'
          onClick={handleVolumeChange}
          onMouseLeave={hideVolume}
        >
          <hr
            className='h-1 border-none bg-green-800 rounded-full'
            onMouseLeave={hideVolume}
            style={{ width: `${volumeLevel}%` }}
          />
        </div>
      )}
      <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="Mini_Player" />
      <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="Zoom" />
    </div>
  );
};

export default PlayerOption;
