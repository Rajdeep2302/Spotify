import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Sign from "./Sign";
import Body from "./Body";
import { PlayerContext } from "../context/PlayerContext";

const Home = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <>
      <div className="h-[90%] flex">
        <Sidebar />
        <Body />
      </div>
      <Player /> {/* Player component */}
      {/* Add fallback for track.song in case it's undefined */}
      <audio ref={audioRef} src={track?.song || ""} preload="auto"></audio>
      <Sign />
    </>
  );
};

export default Home;
