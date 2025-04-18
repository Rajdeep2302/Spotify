import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const PlayerBar = () => {
  const { seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, loopSong } = useContext(PlayerContext);

  return (
    <div className='flex flex-col items-center gap-1 m-auto'>
      <div className='gap-4 flex'>
        <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
        <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev" />
        {/* Conditionally render play or pause button based on playStatus */}
        {playStatus ? (
          <img className='w-4 cursor-pointer' onClick={pause} src={assets.pause_icon} alt="Pause" />
        ) : (
          <img className='w-4 cursor-pointer' onClick={play} src={assets.play_icon} alt="Play" />
        )}
        <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
        <img onClick={loopSong} className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
      </div>
      <div className='flex items-center gap-5'>
        {/* Display dynamic currentTime and totalTime */}
        <p>{`${time.currentTime.minute}:${time.currentTime.second < 10 ? '0' + time.currentTime.second : time.currentTime.second}`}</p>
        <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
          <hr ref={seekBar} className='h-1 border-none w-[0%] bg-green-800 rounded-full' />
        </div>
        <p>{`${time.totalTime.minute}:${time.totalTime.second < 10 ? '0' + time.totalTime.second : time.totalTime.second}`}</p>
      </div>
    </div>
  );
}

export default PlayerBar;
