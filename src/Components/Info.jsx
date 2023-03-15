import React from "react";
import { Slider } from "../Containers";
import backgroundImage from "../assets/background_1.jpg";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-auto ">
      <div className="flex relative h-full w-full ">
        {/* <div className="absolute w-full h-full backdrop-blur-sm"></div> */}
        <img src={backgroundImage} alt="" className="w-full h-full " />
        <div className="absolute flex flex-col gap-5 items-start justify-start top-1/4 left-5 w-96 ">
          <h1 className="text-9xl">CMS</h1>
          <p className="text-lg pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            dicta!
          </p>
          <Link to="console">
            <button className="bg-secondary px-2 py-2 ml-3  text-2xl">
              Live Stream
            </button>
          </Link>
        </div>
        <div className="absolute flex flex-col gap-5 top-1/4 right-2">
          <button className="border-2 border-secondary hover:bg-secondary w-48 px-2 py-2 ml-3  text-2xl">
            About
          </button>
          <button className="border-2 border-secondary hover:bg-secondary w-48 px-2 py-2 ml-3  text-2xl">
            Architecture
          </button>
          <button className="border-2 border-secondary hover:bg-secondary w-48 px-2 py-2 ml-3  text-2xl">
            Gallery
          </button>
        </div>
        <div className="absolute video"></div>
      </div>
      {/* <div className="flex w-full">
        <div className="basis-1/2">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quisquam perferendis non, doloribus cumque quis unde deserunt nisi,
            earum at dignissimos error saepe ipsam. Atque cupiditate eius
            maiores quaerat totam rem aspernatur deleniti odit consectetur,
            laborum ullam aliquid. Unde dolores ab suscipit fuga, eos et
            asperiores veniam id impedit corporis cum esse illum, atque omnis
            dolorum? Placeat labore porro distinctio at dolore. Dolore facilis
            exercitationem deserunt, atque accusamus ut praesentium expedita
            eos. Harum ut ratione quos culpa soluta sit ipsam minima, tempore
            accusantium praesentium. At quibusdam non saepe laborum recusandae
            beatae sequi autem dolorem, amet doloremque, rerum ipsum consectetur
            consequuntur!
          </p>
        </div>

        <div className="basis-1/2">
          <Slider />
        </div>
      </div> */}
    </div>
  );
};

export default Info;
