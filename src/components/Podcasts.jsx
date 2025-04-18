//Podcasts.jsx

import React from "react";
import BodyNavbar from "./BodyNavbar";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Sign from "./Sign";

const Podcasts = () => {
  return (
    <div className="h-screen w-screen text-[#fff]">
      <div className="h-[90%] flex">
        {/* <Sidebar /> */}
        <div className="w-full lg:w-[calc(100vw-400px)] h-full m-2 flex-col bg-[#121212] text-[rgb(255,255,255)] block overflow-auto lg:flex">
          <BodyNavbar />
          <div className="flex justify-center items-center h-[100%] text-[20px] sm:text-[40px]">
            We have no podcast till now.
          </div>
        </div>
      </div>
      {/* <Player />
      <audio preload='auto'></audio>
      <Sign /> */}
    </div>
  );
};

export default Podcasts;
