//Body.jsx

import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BodyDisplayHomeComponent from "./BodyDisplayHomeComponent";
import { albumsData } from "../assets/assets";
import BodyDisplayHomePopularArtistShow from "./BodyDisplayHomePopularArtistShow";
import BodyDisplayHomePopularAlbumShow from "./BodyDisplayHomePopularAlbumShow";
import BodyDisplayHomePopularSongShow from "./BodyDisplayHomePopularSongShow";
import Podcasts from "./podcasts";
import Search from "./search";
import BodyDisplayHomePopularArtistPage from "./BodyDisplayHomePopularArtistPage";
import BodyDisplayHomePopularAlbumPage from "./BodyDisplayHomePopularAlbumPage";

const Body = () => {
  const displayRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  // Extracting albumId from the path
  const pathParts = currentPath.split("/");
  const albumId = pathParts[pathParts.length - 1];

  // Handling case when albumId is not a number
  const validAlbumId = Number(albumId);
  const album =
    Number.isInteger(validAlbumId) &&
    validAlbumId > 0 &&
    validAlbumId <= albumsData.length
      ? albumsData[validAlbumId - 1]
      : null;

  const bgColors = album ? album.bgColor : "#121212";

  useEffect(() => {
    if (album) {
      displayRef.current.style.background = `linear-gradient(${bgColors}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [bgColors, album, albumId]); // Correct dependency handling

  return (
    <div
      ref={displayRef}
      className="w-full lg:w-[calc(100vw-400px)] h-full m-2 flex-col bg-[#121212] text-[rgb(255,255,255)] block overflow-auto lg:flex"
    >
      <Routes>
        <Route path="/" element={<BodyDisplayHomeComponent />} />
        <Route
          path="/artist/show"
          element={<BodyDisplayHomePopularArtistShow />}
        />
        <Route
          path="/album/show"
          element={<BodyDisplayHomePopularAlbumShow />}
        />
        <Route path="/song/show" element={<BodyDisplayHomePopularSongShow />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/artist/:name/:id"
          element={<BodyDisplayHomePopularArtistPage />}
        />
        <Route
          path="/album/:name/:id"
          element={<BodyDisplayHomePopularAlbumPage />}
        />
      </Routes>
    </div>
  );
};

export default Body;
