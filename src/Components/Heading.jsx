import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="heading flex items-center justify-between w-full h-24 px-4">
      <div className="line w-1/3 h-2 bg-secondary "></div>
      <div className="line min-w-48 capitalize text-2xl laptop:text-4xl">
        {text}
      </div>
      <div className="line w-1/3 h-2 bg-secondary"></div>
    </div>
  );
};

export default Heading;
