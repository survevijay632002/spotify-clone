import React from "react";

const Songsitems = ({ name, desc, images, id }) => {
  return (
    <div className=" min-w-[180px] p-2 px3 rounded cursor-pointer  hover:bg-[#ffffff26]">
      <img src={images} className="" alt="no" />
      <p className="font-bold mt2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default Songsitems;
