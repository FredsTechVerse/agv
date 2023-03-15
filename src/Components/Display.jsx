import React from "react";
import {
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
  BiDownArrow,
  BiWifi,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { GiBattery100 } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import { MdUploadFile } from "react-icons/md";

import { ButtonWrapper } from "./index";
import randomImage from "../assets/cms_1.jpg";

const Display = () => {
  return (
    <div className="relative w-full h-full flex  flex-col items-center justify-center bg-slate-400">
      <img
        src={randomImage}
        className="w-full h-full flex object-cover  flex-col items-center justify-center bg-slate-400"
      />
      <div className="absolute top-3 right-5  gap-2 flex status-controls">
        <GiBattery100 className="text-2xl text-white" />
        <BiWifi className="text-2xl text-white" />
      </div>

      <div className="upload absolute top-3 left-3 flex items-center gap-5">
        {/* Create upload button */}
        <Link to="/">
          <ButtonWrapper>
            <span
              // onClick={() => {
              //   console.log("Hello this is running.");
              // }}
              className="text-2xl text-white"
            >
              <AiFillHome />
            </span>
          </ButtonWrapper>
        </Link>
        <button className="bg-secondary hover:bg-secondary text-white px-3 py-1 flex gap-2 items-center justify-center rounded-md ">
          <span>Upload</span>
          <span>
            <MdUploadFile />
          </span>
        </button>
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

export default Display;
