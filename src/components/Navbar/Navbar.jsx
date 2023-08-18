import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#2d4256] text-white font-poppins p-3">
      <div className="flex sm:w-1/3 w-full justify-evenly sm:text-base text-sm">
        <a
          href="#"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          Blog
        </a>
        <a
          href="#"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
