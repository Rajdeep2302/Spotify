import React from 'react';
import BodyNavbar from './BodyNavbar';
import { songsData } from '../assets/assets'; // Ensure this path is correct
import BodyDisplayHomePopularSong from './BodyDisplayHomePopularSong';
import Sidebar from './Sidebar';
import Player from './Player';
import Sign from './Sign';

const BodyDisplayHomePopularSongShow = () => {
  return (
    <div className="h-screen w-screen text-[#fff]">
      <div className="h-[90%] flex">
        {/* <Sidebar /> */}
        <div className="w-full lg:w-[calc(100vw-400px)] h-full m-2 flex-col bg-[#121212] text-[rgb(255,255,255)] block overflow-auto lg:flex">
          <BodyNavbar />
          <div className='bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4'>
            <div className='flex justify-between mr-3 items-center'>
              <h1 className='font-bold text-[25px] ml-5 hover:underline cursor-pointer'>Popular Songs</h1>
            </div>
            <div className='my-5 font-bold text-2xl flex flex-wrap'>
              {songsData.length === 0 ? (
                <div>No songs available</div> // Handle case with no songs
              ) : (
                songsData.map((item) => (
                  <BodyDisplayHomePopularSong 
                    key={item.id} // Use unique identifier as key
                    name={item.name} 
                    desc={item.desc} 
                    id={item.id} 
                    image={item.image} 
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Player />
      <audio preload='auto'></audio>
      <Sign /> */}
    </div>
  );
};

export default BodyDisplayHomePopularSongShow;
