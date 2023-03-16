import React from "react";

// create a component called ButtonWrapper
const ButtonWrapper = ({ children }) => {
  return (
    <div className="hover:bg-slate-400 cursor-pointer rounded-full border-none outline-none text-3xl hover:bg-opacity-30 w-12 h-12 flex items-center justify-center text-white ">
      {children}
    </div>
  );
};

export default ButtonWrapper;
