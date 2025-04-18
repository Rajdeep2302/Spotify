import React, { useContext } from "react";
import BodyNavbar from "./BodyNavbar";
import { useParams } from "react-router-dom";
import { popularAlbumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const BodyDisplayHomePopularArtistPage = () => {
  const { playWithId } = useContext(PlayerContext); // Ensure useContext is properly imported
  const { id } = useParams(); // Get id from URL parameters
  const artistData = popularAlbumsData.find(
    (album) => album.id === parseInt(id)
  ); // Find the artist data based on the id

  // Ensure that artistData exists
  if (!artistData) {
    return <div>Album not found</div>;
  }

  const { image, name, desc } = artistData;

  // Find the artist's songs and calculate total duration
  let count = 0,
    Duration = 0,
    number,
    time;

  // Find matching songs between popularAlbumsData and songsData
  const matchingSongs = songsData.filter(
    (song) => song.lang === artistData.lang
  );

  matchingSongs.forEach((song) => {
    count++;
    number = song.duration.split(/\D+/).filter(Boolean).map(Number);
    time = number[0] * 60 + number[1];
    Duration += time;
  });

  function Minute() {
    let min = Duration / 60;
    const flooredMin = Math.floor(min);
    return flooredMin;
  }

  function Second() {
    let sec = Duration % 60;
    return sec;
  }

  const totalDuration = [Minute(), Second()];
  let a = 0;

  return (
    <div className="h-screen w-screen text-[#fff] bg-black">
      <div className="h-[90%] flex">
        <div
          className="w-full lg:w-[calc(100vw-400px)] h-full m-2 flex-col bg-[#121212] text-[rgb(255,255,255)] block overflow-auto lg:flex"
          style={{ background: `linear-gradient(${artistData.bgColor}, #0003)` }}
        >
          <BodyNavbar />
          <div className="h-full p-4">
            <div className="block lg:flex justify-start items-center">
              <img
                className="rounded-full aspect-square h-[300px]"
                src={artistData.image}
                alt={artistData.name}
              />
              <div className="ml-[30px]">
                <h1 className="font-bold text-[40px]">{artistData.name}</h1>
                <p className="text-[20px]">{artistData.desc}</p>
                <ul className="flex list-disc list-inside">
                  <li>Total songs: {count}</li>
                  <li className="ml-10">
                    Duration: {totalDuration[0]}:{totalDuration[1]}
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4">
              {matchingSongs.length > 0 ? (
                <table className="table-auto w-full text-[#a2a2a2]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">#</th>
                      <th className="text-left p-2">Title</th>
                      <th className="hidden md:table-cell text-left p-2">
                        Description
                      </th>
                      <th className="hidden sm:table-cell text-left p-2">
                        Artist
                      </th>
                      <th className="hidden sm:table-cell text-left p-2">
                        Date Added
                      </th>
                      <th className="text-center p-2">
                        <img
                          className="w-4 mx-auto"
                          src={assets.clock_icon}
                          alt="clock"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchingSongs.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-[#fff3] cursor-pointer"
                        onClick={() => playWithId(item.id)}
                      >
                        <td className="p-2 font-bold text-[#fff]">{++a}</td>
                        <td className="p-2">
                          <img
                            className="inline w-10 mr-5 rounded-full"
                            src={item.image}
                            alt={item.name}
                          />
                          {item.name.length > 15
                            ? `${item.name.substring(0, 15)}...`
                            : item.name}
                        </td>
                        <td className="hidden md:table-cell p-2">
                          {item.desc.length > 80
                            ? `${item.desc.substring(0, 80)}...`
                            : item.desc}
                        </td>
                        <td className="hidden sm:table-cell p-2">
                          {item.file.toUpperCase()}
                        </td>
                        <td className="hidden sm:table-cell p-2">{item.date}</td>
                        <td className="text-center p-2">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No matching songs found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDisplayHomePopularArtistPage;
  