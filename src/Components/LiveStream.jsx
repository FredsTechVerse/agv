import React, { useState } from "react";
import {
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
  BiDownArrow,
  BiWifi,
  BiInfoCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { GiBattery100 } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import { MdUploadFile } from "react-icons/md";

import { ButtonWrapper } from "./index";
import randomImage from "../assets/cms_1.jpg";

import { Description } from "../Components";

const LiveStream = () => {
  const [displayDescription, setDisplayDescription] = useState(false);
  const showDescription = () => {
    setDisplayDescription(true);
  };
  const closeDescription = () => {
    setDisplayDescription(false);
  };

  return (
    <div className="relative w-full h-full flex  flex-col items-center justify-center bg-slate-400">
      {displayDescription && (
        <Description closeDescription={closeDescription} />
      )}
      <img
        src={randomImage}
        className="w-full h-full flex object-cover  flex-col items-center justify-center bg-slate-400"
      />
      <div className="absolute  top-1  px-2 w-full">
        <div className="flex items-center justify-between bg-black bg-opacity-80 rounded-full px-4 w-full">
          <div className="gap-2 flex order-3">
            <button className="bg-secondary hover:bg-secondary text-white px-2 text-md py-0.5 flex gap-2 items-center justify-center rounded-lg ml-1 ">
              <span>Upload</span>
              <span>
                <MdUploadFile />
              </span>
            </button>
          </div>
          <div className="order-2 flex gap-3">
            <GiBattery100 className="text-2xl text-white" />
            <BiWifi className="text-2xl text-white" />
          </div>

          <div className=" flex items-center gap-3 order-1">
            {/* Create upload button */}
            <Link to="/console">
              <ButtonWrapper>
                <span className="text-2xl text-white">
                  <AiFillHome />
                </span>
              </ButtonWrapper>
            </Link>
            <ButtonWrapper>
              <span
                onClick={() => {
                  showDescription();
                }}
                className="text-2xl text-white"
              >
                <BiInfoCircle />
              </span>
            </ButtonWrapper>
          </div>
        </div>
      </div>
      <div className="speed-monitor absolute bottom-10 mx-auto  font-bold flex flex-col items-center text-black ">
        <span>speed</span>
        <span className="text-2xl">60/180</span>
      </div>
      <div className="absolute bottom-20 left-10 phone:bottom-10 phone:left-1 phone:gap-1 flex gap-5 nav-controls">
        <ButtonWrapper>
          <BiLeftArrow />
        </ButtonWrapper>

        <ButtonWrapper>
          <BiRightArrow />
        </ButtonWrapper>
      </div>
      <div className="absolute bottom-20 right-10 phone:bottom-5 phone:gap-1 phone:right-5 flex flex-col speed-controls gap-7 text-white text-6xl">
        <ButtonWrapper>
          <BiUpArrow />
        </ButtonWrapper>
        <ButtonWrapper>
          <BiDownArrow />
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default LiveStream;
