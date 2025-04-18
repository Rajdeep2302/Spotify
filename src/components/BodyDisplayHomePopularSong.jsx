//BodyDisplayHomePopularSong.jsx

import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const BodyDisplayHomePopularSong = ({ name, desc, id, image }) => {

  const {playWithId} = useContext(PlayerContext)

  const calculatedWidth = `calc(100% * ${parseInt(id)} + (40px * ${
    parseInt(id) - 1
  }))`;

  return (
    <div className="min-w-[180px] p-2 px-3 m-2 rounded cursor-pointer hover:bg-[#ffffff36] group relative">
  <img className="rounded-full" src={image} alt="image" />
  <p className="font-bold text-lg mt-2 mb-1 text-center">{name}</p>

  {/* Play button */}
  <div className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
    <div className="flex justify-center items-center h-10 w-10 bg-yellow-800 rounded-full">
      <img className="h-6" src={assets.play_icon} alt="Play" onClick={() =>playWithId(id)}/>
    </div>
  </div>
</div>
  );
};

export default BodyDisplayHomePopularSong;
