import React from "react";
import { AnimatedText } from "../../components";
import "./Hero.css";

import { heroText } from "../../utils/data";
import { heroTextTR } from "../../utils/dataTR";

const Hero = () => {
  const lang = localStorage.getItem("lang");

  const handleLanguage = (language) => {
    localStorage.setItem("lang", language);

    window.location.reload();
  };

  return (
    <section className="w-full h-[95vh] bg-gradient text-white font-poppins p-3 flex flex-col items-center justify-evenly relative">
      <div className="flex absolute md:right-5 top-5 gap-3 text-xs">
        <button
          onClick={() => handleLanguage("tr")}
          className={`${
            lang === "tr"
              ? "bg-white text-black shadow-lg border border-aqua"
              : "bg-black text-white"
          } px-3 py-1 hover-and-scale`}
        >
          TR
        </button>
        <button
          onClick={() => handleLanguage("en")}
          className={`${
            lang === "en"
              ? "bg-white text-black shadow-lg border border-aqua"
              : "bg-black text-white"
          } px-3 py-1 hover-and-scale`}
        >
          EN
        </button>
      </div>

      <div className="mt-3 flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl text-2xl font-bold tracking-wide text-center">
          Cihan Özcan
        </h1>
        <span className="opacity-60">
          {lang === "en"
            ? "Front End (React) Developer"
            : "Ön Uç (React) Geliştiricisi"}
        </span>

        <img
          src="/assets/hero.png"
          alt="hero-image"
          className="sm:w-[40%] w-[80%]"
        />
      </div>

      <AnimatedText
        text={lang === "en" ? heroText : heroTextTR}
        delay={75}
        styles="lg:w-1/2 w-full mt-12 lg:text-2xl text-base"
      />

      <div className="gradient-div mt-12 w-full h-[10px]"></div>

      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
