import React from "react";
import { assets } from "../assets/assets";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[12%]  flex justify-between items-center font-semibold">
        <div className=" flex items-center gap-2">
          <div className="  text-xl sm:hidden">
            <FaBars></FaBars>
          </div>
          <img
            onClick={() => Navigate(-1)}
            className="w-5 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => Navigate(1)}
            className="w-5  rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center flex-row gap-4">
          <button className="">Sign up</button>
          <button className="bg-white text-black px-3 py-2 rounded-full">
            Log in
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className=" bg-neutral-900  px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-neutral-900   px-4 py-1 rounded-2xl">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
