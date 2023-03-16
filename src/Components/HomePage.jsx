import React from "react";
import { NavBtn } from "../Components";
import { Slider } from "../Containers";
import backgroundImage from "../assets/cms_4.jpeg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-auto ">
      <div className="flex phone:flex-col tablet:flex relative h-full w-full overflow-auto ">
        <div className="absolute w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="absolute top-24 w-full flex flex-col gap-5  tablet:items-start phone:items-center tablet:justify-start tablet:top-1/4 tablet:left-5 tablet:w-96 ">
          <h1 className="text-9xl font-serif">CMS</h1>
          <p className=" text-lg pl-3 w-full  phone:text-center tablet:text-start">
            Control movement of the car using hand signals, voice input, text
            input or remotely controlled
          </p>
          <div className="flex flex-col gap-5">
            <Link to="/">
              <button className="phone:w-56 bg-secondary px-2 py-2 tablet:ml-3 text-2xl ">
                Live Stream
              </button>
            </Link>
            <div className="flex flex-col gap-5 tablet:hidden">
              <NavBtn to="description" text="Description" />
              <NavBtn to="gallery" text="Gallery" />
            </div>
          </div>
        </div>
        <div className="absolute  flex flex-col justify-around  tablet:flex-col  tablet:gap-5 tablet:top-1/3 tablet:right-0 phone:hidden ">
          <NavBtn to="description" text="Description" />
          <NavBtn to="gallery" text="Gallery" />
        </div>
        <div className="absolute video"></div>
      </div>
    </div>
  );
};

export default HomePage;
