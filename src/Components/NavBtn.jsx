import React from "react";
import { Link } from "react-router-dom";
const NavBtn = ({ to, text }) => {
  return (
    <Link to={`/${to}`}>
      <button className="border-2 tablet:rounded-l-3xl border-secondary hover:bg-secondary phone:w-full w-48 px-2 py-2 tablet:ml-3  text-2xl">
        {text}
      </button>
    </Link>
  );
};

export default NavBtn;
