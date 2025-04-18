//SidebarTop.jsx

import React from 'react';
import { assets } from '../assets/assets'; // Make sure this is correctly exported
import { useNavigate } from 'react-router-dom';

const SidebarTop = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#121212] h-[150px] rounded flex flex-col justify-around">
      <div 
        className="flex items-center gap-3 pl-8 cursor-pointer m-0" 
        title="Spotify Clone" 
        onClick={() => navigate('/')}
      >
        <img className="h-5" src={assets.spotify_logo} alt="Spotify Logo" />
        <p className="text-white font-bold text-lg">Spotify</p>
      </div>
      <div 
        className="flex items-center gap-3 pl-8 cursor-pointer m-0" 
        title="Home" 
        onClick={() => navigate('/')}
      >
        <img className="h-5" src={assets.home_icon} alt="Home Icon" />
        <p className="text-white font-bold text-lg">Home</p>
      </div>
      
      <div 
        className="flex items-center gap-3 pl-8 cursor-pointer m-0" 
        onClick={() => navigate('/search')} 
        title="Search Your Favorite Song and Podcasts"
      >
        <img className="h-5" src={assets.search_icon} alt="Search Icon" />
        <p className="text-gray-400 font-bold text-lg hover:text-white">Search</p>
      </div>
    </div>
  );
};

export default SidebarTop



