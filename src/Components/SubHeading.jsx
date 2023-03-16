import React from "react";

const SubHeading = ({ text }) => {
  return (
    <div className="heading  flex flex-col start justify-center items-center my-2">
      <div className="line capitalize text-2xl laptop:text-4xl">{text}</div>
      <div className="line w-20 h-2 bg-secondary rounded-3xl"></div>
    </div>
  );
};

export default SubHeading;
