import React from "react";

// create a component called ButtonWrapper
const ButtonWrapper = ({ children }) => {
  return (
    <div className="hover:bg-slate-400 rounded-full border-none outline-none text-5xl hover:bg-opacity-30 w-16 h-16 flex items-center justify-center text-white ">
      {children}
    </div>
  );
};

export default ButtonWrapper;
