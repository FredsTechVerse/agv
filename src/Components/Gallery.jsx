import React from "react";
import { ImageWrapper, Heading } from "./index";
// Images will be loading as links but for now we can use the means that are available to us.
import Person_1 from "../assets/person_1.jpg";
import Person_2 from "../assets/person_2.jpg";
import Person_3 from "../assets/person_3.jpg";
import Person_4 from "../assets/person_4.jpg";
import Person_5 from "../assets/person_5.jpg";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="relative gallery-background w-full h-screen flex flex-col justify-start items-center">
      <div className="relative w-full h-full py-4 px-4 overflow-auto backdrop-blur-lg bg-black bg-opacity-80">
        <button
          onClick={() => {
            console.log("Button clicked successfully");
            navigate("/console");
          }}
          className="absolute top-3 right-3"
        >
          <MdCancel className="text-white text-3xl" />
        </button>
        <Heading text="Gallery " />
        <div
          id="image-grid"
          className="grid phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-5 pt-10 w-full h-4/5 p-4  overflow-auto"
        >
          <ImageWrapper src={Person_1} alt="Person_1" />
          <ImageWrapper src={Person_2} alt="Person_2" />
          <ImageWrapper src={Person_3} alt="Person_3" />
          <ImageWrapper src={Person_4} alt="Person_4" />
          <ImageWrapper src={Person_5} alt="Person_5" />
          <ImageWrapper src={Person_1} alt="Person_1" />
          <ImageWrapper src={Person_2} alt="Person_2" />
          <ImageWrapper src={Person_3} alt="Person_3" />
          <ImageWrapper src={Person_4} alt="Person_4" />
          <ImageWrapper src={Person_5} alt="Person_5" />
          <ImageWrapper src={Person_3} alt="Person_3" />
          <ImageWrapper src={Person_4} alt="Person_4" />
          <ImageWrapper src={Person_5} alt="Person_5" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
