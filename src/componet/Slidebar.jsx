import React from "react";
import { assets } from "../assets/assets.js";

const Slidebar = () => {
  return (
    <div className=" phone:w-[25%] phone:h-full  bg-neutral-950 p-3 flex gap-2 xsm text-white border-2 border-white  flex-col">
      <div className=" bg-neutral-900 h-[20%] p-2 w-full flex flex-col gap-3 rounded justify-around">
        <div className=" text-white flex items-center cursor-pointer gap-3 pl-8">
          <img src={assets.spotify_logo} className="w-6" alt="" />
          <p className="text-white font-bold">Spotify</p>
        </div>
        <div className=" text-white flex items-center cursor-pointer gap-3 pl-8">
          <img src={assets.home_icon} className="w-6" alt="" />
          <p className="text-white font-bold">Home</p>
        </div>
        <div className=" text-white flex items-center cursor-pointer gap-3 pl-8">
          <img src={assets.search_icon} className="w-6" alt="" />
          <p className="text-white font-bold">Search</p>
        </div>
      </div>
      <div className=" bg-neutral-900 h-[85%] p-2 w-full flex flex-col gap-3 rounded justify-around">
        <div className=" text-white flex flex-row items-center justify-between cursor-pointer gap-3 pl-8">
          <div className="flex gap-2">
            <img src={assets.stack_icon} className="w-6" alt="" />
            <p className="text-white font-semibold">Your Library</p>
          </div>
          <div>
            <img src={assets.plus_icon} className="w-4" alt="" />
          </div>
        </div>

        <div className=" overflow-y-scroll h-[240px] flex flex-col   items-center  ">
          <div className="text-white flex flex-col w-full p-4 rounded-2xl   bg-neutral-800 cursor-pointer gap-3 pl-8 mt-4">
            <h2 className=" font-bold ">Create your frist playlist</h2>
            <p className="font-semibold">it's easy, we'll help you</p>
            <button className="bg-white font-bold w-fit text-black rounded-full px-3 py-1">
              Create Play list
            </button>
          </div>
          <div className="text-white flex flex-col w-full p-4  rounded-2xl  bg-neutral-800 cursor-pointer gap-3 pl-8 mt-4">
            <h2 className=" font-bold ">Lets's find some podcast to follow</h2>
            <p className="font-semibold text-[14px]">
              {" "}
              we'll keep your updated on new episodes
            </p>
            <button className="bg-white w-fit font-bold text-black rounded-full px-3 py-1">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
      <div className="pl-8 phone:flex flex-col mt-4 gap-7 ">
        <div className="flex flex-col gap-3 ">
          <span className=" text-xs flex gap-3">
            <span>Legal</span> <span>safety and PrivacyCenter</span>
            <span>PrivacyPolicy</span>
          </span>
          <span className="text-xs flex gap-3">
            <span>Cookies</span>
            <span>AboutAds</span>
            <span>Accessibilty</span>
          </span>
          <span className="text-xs flex gap-3">Cookies</span>
        </div>
        <div className="bg-black border-2  text-white border-white mt-3 py- flex justify-center items-center rounded-full w-fit px-2 ">
          <img src="" alt="" />
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
