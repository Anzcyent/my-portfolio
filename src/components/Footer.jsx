import React from "react";
import { AiFillPhone, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark text-white font-poppins p-3">
      <div className="wrapper flex md:flex-row flex-col justify-evenly items-center">
        <h5>Cihan Özcan</h5>

        <small className="flex items-center justify-center gap-1 md:mt-0 mt-5">
          <AiFillPhone />
          +90 546 717 74 21
        </small>

        <small className="flex items-center justify-center gap-1 md:mt-0 mt-5">
          <AiFillMail />
          ozcancihan714@gmail.com
        </small>

        <a
          href="https://www.linkedin.com/in/cihan-özcan-27a94a284/"
          className="font-bold hover-and-scale bg-aqua md:mt-0 mt-5"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>

        <small className="font-bold md:mt-0 mt-5">ANKARA</small>
      </div>
    </footer>
  );
};

export default Footer;
