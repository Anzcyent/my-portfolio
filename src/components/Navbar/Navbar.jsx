import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient text-white font-poppins p-3 text-sm">
      <div className="flex justify-evenly">
        <a
          href="#description"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          Projects
        </a>
        <a
          href="#cv"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
