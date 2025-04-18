//Search.jsx

import React from "react";
import BodyNavbar from "./BodyNavbar";
import { assets } from "../assets/assets";
import Songs from "./Songs";
import Artist from "./Artist";
import Language from "./Language";

const Search = () => {
  let a = 0;

  return (
    <div className="h-screen w-screen text-[#fff]">
      <div className="h-[90%] flex">
        {/* <Sidebar /> */}
        <div className="w-full lg:w-[calc(100vw-400px)] h-full m-2 flex-col bg-[#121212] text-[rgb(255,255,255)] block overflow-auto lg:flex">
          <BodyNavbar />
          <div className="bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4">
            <div className="flex justify-center items-center w-[100%] pb-5">
              <select
                className="font-bold w-[50px] bg-[#fafafa23] border-t-[2px] border-l-[#fff] rounded-l-2xl pl-1 h-[30px]"
                name=""
                id=""
              >
                <option className="font-normal text-[#000]" value="all">
                  All
                </option>
                <option className="font-normal text-[#000]" value="name">
                  Song Name
                </option>
                <option className="font-normal text-[#000]" value="artist">
                  Artist Name
                </option>
                <option className="font-normal text-[#000]" value="lang">
                  Language
                </option>
              </select>
              <input
                type="text"
                className="w-[80%] h-[30px] bg-[#a9a9a945] border-l-[2px] border-b-[2px] border-l-[#fff] border-b-[#fff] rounded-r-2xl"
              />
              <img src={assets.search_icon} alt="" className="h-[30px] ml-5" />
            </div>
          </div>
          <Songs />
          <Artist />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Search;
