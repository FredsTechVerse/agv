import React from "react";
import {
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
  BiDownArrow,
  BiWifi,
} from "react-icons/bi";

import { GiBattery100 } from "react-icons/gi";

const Console = () => {
  return (
    <div className="relative w-full h-full flex  flex-col items-center justify-center bg-slate-400">
      <div className="absolute top-2 right-2  gap-2 flex status-controls">
        <GiBattery100 className="text-2xl" />
        <BiWifi className="text-2xl" />
      </div>
      <div className="speed-monitor absolute bottom-10 mx-auto  font-bold flex flex-col items-center ">
        <span>speed</span>
        <span className="text-2xl">60/180</span>
      </div>
      <div className="absolute bottom-20 left-20 flex nav-controls">
        <BiLeftArrow className="text-5xl" />
        <BiRightArrow className="text-5xl" />
      </div>
      <div className="absolute bottom-20 right-20 flex flex-col speed-controls gap-7">
        <BiUpArrow className="text-5xl space-y-2" />
        <BiDownArrow className="text-5xl" />
      </div>
    </div>
  );
};

export default Console;
