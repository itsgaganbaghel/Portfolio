import React from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const GoToTop = () => {
  return (
    <NavLink
      path="/"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className=" block fixed bottom-3 right-2 text-6xl  text-gray-300 scrollUp  z-50 opacity-70 hover:opacity-100 hover:px-2 hover:py-2 hover:bg-white hover:text-black hover:rounded-[100%] transition-all duration-500 ease-in-out"
    >
      <RiArrowUpDoubleFill />
    </NavLink>
  );
};

export default GoToTop;
