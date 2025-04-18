//BodyDisplayHomePopularAlbum.jsx

import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const BodyDisplayHomePopularAlbum = ({ image, name, desc, id }) => {
  const calculatedWidth = `calc(100% * ${id} + (40px * ${id - 1}))`;
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/album/${name}/${id}`)}>
      <div
        className="min-w-[180px] p-2 px-3 m-2 rounded cursor-pointer hover:bg-[#ffffff36]"
        onMouseEnter={() => {
          const playButton = document.getElementById("playA");
          playButton.style.display = "flex";
          playButton.style.width = calculatedWidth;
        }}
        onMouseLeave={() => {
          const playButton = document.getElementById("playA");
          playButton.style.display = "none";
        }}
      >
        <div id="playA" className="hidden justify-end items-end">
          <div
            className="flex justify-center items-center h-10 w-10 bg-yellow-800 rounded-full mb-[-40px] z-10"
            title={`play ${name}`}
          >
            <img className="h-6" src={assets.play_icon} alt="" />
          </div>
        </div>
        <img className="rounded-[3px]" src={image} alt="image" />
        <p className="font-bold text-lg mt-2 mb-1">{name}</p>
        <p className="text-slate-100 font-light text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default BodyDisplayHomePopularAlbum;
