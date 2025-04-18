//Songs.jsx
import React from "react";
import { assets, songsData } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Songs = () => {
  const Navigation = useNavigate()
  return (
    <div className="bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4">
      <p className="ml-7 font-bold underline">All Songs</p>
      <table className="table-auto w-full text-[#a2a2a2]">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">#</th>
            <th className="text-left p-2">Title</th>
            <th className="hidden md:table-cell text-left p-2">Artist</th>
            <th className="hidden sm:table-cell text-left p-2">Language</th>
            <th className="hidden sm:table-cell text-left p-2">Date Added</th>
            <th className="text-center p-2">
              <img className="w-4 mx-auto" src={assets.clock_icon} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {songsData.map((item, index) => (
            <tr key={index} className="hover:bg-[#fff3] cursor-pointer">
              <td className="p-2 font-bold text-[#fff]">{index + 1}</td>
              <td className="p-2 font-bold text-[#fff]">
                {item.name.length > 15
                  ? `${item.name.substring(0, 15)}...`
                  : item.name}
              </td>
              <td className="p-2 font-bold text-[#fff]">{item.file}</td>
              <td className="p-2 font-bold text-[#fff]">{item.lang}</td>
              <td className="p-2 font-bold text-[#fff]">{item.date}</td>
              <td className="p-2 font-bold text-[#fff]">{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
};

export default Songs;
