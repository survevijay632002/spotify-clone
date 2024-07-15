import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
//import Playcontext from "./Playcontext";

const Player = () => {
  // const { seekBar, seekBg, playStatus, play, pause } = useContext(Playcontext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white py-1 px-4">
      <div className=" lg:flex items-center gap-4">
        <img src={songsData[0].image} alt="" className="w-10" />
        <div className="">
          <p className="text-[12px]">{songsData[0].name}</p>
          <p className="text-xs">{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex  flex-col items-center  gap-1 m-auto">
        <div className="flex gap-4 ">
          <img src={assets.shuffle_icon} className="w-4" alt="" />
          <img src={assets.prev_icon} className="w-4" alt="" />
          <img src={assets.play_icon} className="w-4" alt="" />
          <img src={assets.pause_icon} className="w-4" alt="" />
          <img src={assets.next_icon} className="w-4" alt="" />
          <img src={assets.loop_icon} className="w-4" alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p className="">1:06</p>

          <div
            // ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              // ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className=" hidden lg:flex   items-center gap-2 opacity-75">
        <img src={assets.plays_icon} className="w-4" alt="" />
        <img src={assets.mic_icon} className="w-4" alt="" />
        <img src={assets.queue_icon} className="w-4" alt="" />
        <img src={assets.speaker_icon} className="w-4" alt="" />
        <img src={assets.volume_icon} className="w-4" alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} className="w-4" alt="" />
        <img src={assets.zoom_icon} className="w-4" alt="" />
      </div>
    </div>
  );
};

export default Player;
