import React, { useState, useEffect } from "react";
import { AnimatedText } from "../../components";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="w-full h-[95vh] bg-gradient text-white font-poppins p-3 flex flex-col items-center justify-evenly relative">
      <div className="flex absolute md:right-5 top-10 gap-3 text-xs">
        <button className="bg-black px-3 py-1 hover-and-scale">TR</button>
        <button className="bg-black px-3 py-1 hover-and-scale">EN</button>
      </div>

      <div className="mt-3 flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl text-2xl font-bold tracking-wide text-center">
          Cihan Özcan
        </h1>
        <span className="opacity-60">Front End Developer</span>

        <img
          src="/assets/hero.png"
          alt="hero-image"
          className="sm:w-[40%] w-[80%]"
        />
      </div>

      <AnimatedText
        text="Hello!!! I am Cihan, a passionate junior front-end developer. My love and curiosity for the web inspires my journey to create user-centered, engaging and functional websites. On this platform, you can meet me, discover my projects, and browse my posts where I share my passion for technology."
        delay={50}
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
