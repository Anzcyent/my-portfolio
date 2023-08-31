import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const lang = localStorage.getItem("lang");
  return (
    <nav className="w-full bg-gradient text-white font-poppins p-3 text-sm">
      <div className="flex justify-evenly">
        <a
          href="#description"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
         {lang === "en" ? "About Me" : "Hakkımda"}
        </a>
        <a
          href="#projects"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
          {lang === "en" ? "Projects" : "Projelerim"}
        </a>
        <a
          href="#cv"
          className="hover-and-scale font-semibold nav-link relative transition"
        >
         {lang === "en" ? "Resume" : "Özgeçmişim"}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
