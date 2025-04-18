import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";
import SignUpVerify from "./components/SignUpVerify"; 
import { albumsData } from "./assets/assets";
// import BodyDisplayHomePopularArtistShow from "./components/BodyDisplayHomePopularArtistShow";
// import BodyDisplayHomePopularAlbumShow from "./components/BodyDisplayHomePopularAlbumShow";
// import BodyDisplayHomePopularSongShow from "./components/BodyDisplayHomePopularSongShow";
// import Podcasts from "./components/podcasts";
// import Search from "./components/search";
// import BodyDisplayHomePopularArtistPage from "./components/BodyDisplayHomePopularArtistPage";
// import BodyDisplayHomePopularAlbumPage from "./components/BodyDisplayHomePopularAlbumPage";
// import Player from "./components/Player";
// import Sign from "./components/Sign"; 
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);  // Extract audioRef and track from PlayerContext
  const displayRef = useRef(null);  // Ref for the display element
  const location = useLocation();   // Get the current route location
  const currentPath = location.pathname;

  // Extracting albumId from the path
  const pathParts = currentPath.split("/");
  const albumId = pathParts[pathParts.length - 1];

  // Handling case when albumId is not a number
  const validAlbumId = Number.isInteger(Number(albumId)) && Number(albumId) > 0;
  const album = validAlbumId ? albumsData[Number(albumId) - 1] : null;
  const bgColors = album ? album.bgColor : "#121212";

  useEffect(() => {
    if (displayRef.current) {
      if (albumId && album) {
        displayRef.current.style.background = `linear-gradient(${bgColors}, #121212)`;
      } else {
        displayRef.current.style.background = "#121212";
      }
    }
  }, [bgColors, album, albumId]);

  const hideHomePaths = ["/login", "/SignUp", "/SignUpVerify", "/Reset"];

  return (
    <div ref={displayRef} className="h-screen bg-black">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpVerify" element={<SignUpVerify />} />
        <Route path="/Reset" element={<Reset />} />
        </Routes>
        {!hideHomePaths.includes(currentPath) && <Home id="Home" />}
    </div>
  );
};

export default App;
