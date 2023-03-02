import React from "react";
import {
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
  BiDownArrow,
  BiWifi,
} from "react-icons/bi";

import { GiBattery100 } from "react-icons/gi";

import { MdUploadFile } from "react-icons/md";

import randomImage from "../assets/random_image_2.jpg";

const Console = () => {
  return (
    <div className="relative w-full h-full flex  flex-col items-center justify-center bg-slate-400">
      <img
        src={randomImage}
        className="w-full h-full flex object-cover  flex-col items-center justify-center bg-slate-400"
      />
      <div className="absolute top-2 right-2  gap-2 flex status-controls">
        <GiBattery100 className="text-2xl text-white" />
        <BiWifi className="text-2xl text-white" />
      </div>

      <div className="upload">
        {/* Create upload button */}
        <button className="bg-blue-800 text-white px-4 py-2 flex gap-2 items-center justify-center rounded-md absolute top-2 left-2">
          <span>Upload</span>
          <span>
            <MdUploadFile />
          </span>
        </button>
      </div>
      <div className="speed-monitor absolute bottom-10 mx-auto  font-bold flex flex-col items-center text-white ">
        <span>speed</span>
        <span className="text-2xl">60/180</span>
      </div>
      <div className="absolute bottom-20 left-10 flex gap-5 nav-controls text-white text-6xl">
        <BiLeftArrow className="" />
        <BiRightArrow className="" />
      </div>
      <div className="absolute bottom-20 right-10 flex flex-col speed-controls gap-7 text-white text-6xl">
        <BiUpArrow className="" />
        <BiDownArrow className="" />
      </div>
    </div>
  );
};

export default Console;
