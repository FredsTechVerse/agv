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
    <div className=" relative w-full h-full flex  flex-col items-center justify-center bg-black text-red-700">
      Hello from console.
      <div className="absolute top-10 right-0 flex status-controls">
        <GiBattery100 className="text-2xl" />
        <BiWifi className="text-2xl" />
      </div>
      <div className="speed-monitor align-self-center justify-self-center">
        60/180
      </div>
      <div className="absolute bottom-10 left-20 flex nav-controls">
        <BiLeftArrow />
        <BiRightArrow />
      </div>
      <div className="absolute bottom-20 right-20 flex flex-col speed-controls">
        <BiUpArrow />
        <BiDownArrow />
      </div>
    </div>
  );
};

export default Console;
