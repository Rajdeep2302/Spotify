//BodyNavbar.jsx

import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
// import SignUp from "./SignUp";

const BodyNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to get the current path

  function toWards() {
    navigate(1);
  }

  function back() {
    navigate(-1);
  }

  return (
    <div className="">
      <div className="w-full h-[50px] flex justify-between items-center">
        <div className="flex pl-5">
          <img
            onClick={() => back()}
            className=" h-5 cursor-pointer mr-5 opacity-75"
            src={assets.arrow_left}
            alt="left"
          />
          <img
            onClick={() => toWards()}
            className=" h-5 cursor-pointer mr-5 opacity-75"
            src={assets.arrow_right}
            alt="right"
          />
        </div>
        <div className="flex w-[280px]">
          <div className="hidden sm:flex mr-5 w-[200px]">
            <div
              className="h-9 w-[50%] bg-black rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={() => navigate('/SignUp')}
            >
              Sign up
            </div>
            <div
              className="h-9 w-[50%] bg-white text-black rounded-full flex items-center justify-center font-bold cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Log in
            </div>
          </div>
          <div className="w-[100%] sm:w-auto flex justify-end">
            <div
              className="h-9 w-9 bg-[#9c1cff] text-white rounded-full flex items-center justify-center font-bold text-lg cursor-pointer"
              title="View Profile"
            >
              R
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 ml-4">
        <p
          className={`bg-black px-4 py-1 rounded-2xl cursor-pointer ${
            location.pathname === "/"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => navigate("/")}
        >
          All
        </p>
        <p
          className={`bg-black px-4 py-1 rounded-2xl cursor-pointer ${
            location.pathname === "/song/show"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => navigate("/song/show")}
        >
          Music
        </p>
        <p
          className={`bg-black px-4 py-1 rounded-2xl cursor-pointer ${
            location.pathname === "/podcasts"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => navigate("/podcasts")}
        >
          Podcasts
        </p>
      </div>
    </div>
  );
};

export default BodyNavbar;
