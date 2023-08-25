import React from "react";
import "./Description.css";
import "animate.css";
import { AnimatedParagraphs } from "../../components/AnimatedText";

const Description = () => {
  const paragraphs = [
    "I am Cihan. I have a bachelor's degree in English translation and interpreting from Kırıkkale University and an associate degree in web design and coding from Anadolu University.",
    "My fascination with software started about 3 years ago and when I entered the world of web development, I realized that I enjoy creating user-centered interfaces. By developing my React.js skills, I enjoy turning design concepts into interactive and dynamic websites that captivate users and offer smooth navigation.",
    "As a Junior Developer, I love continuous learning. I try to stay up to date with the latest trends, best practices and new technologies in the ever-evolving environment of front end development. I try to improve my skills and embrace new challenges in every project I do or contribute to. I try to write clean and non-repetitive code (as much as I can 😁).",
  ];
  return (
    <section className="h-[100vh] bg-darkSecondary text-white font-poppins p-3 flex sm:flex-row flex-col justify-between items-center">
      <div className="image-container sm:w-1/2 w-full sm:h-full h-1/2 flex justify-center items-center relative">
        <img
          src="/assets/me.png"
          alt="me"
          className="sm:w-1/2 w-3/4 sm:h-auto h-2/3 rounded-tl-[10rem] rounded-tr-[10rem] p-2 object-cover border-4 border-gradient"
        />
      </div>

      <div className="sm:w-1/2 w-full sm:h-auto h-1/2 flex flex-col p-3 description-bg animate__animated animate__fadeInRight overflow-auto custom-scroll">
        <h2 className="font-bold mb-6 gradient-text sm:text-2xl text-lg text-center">
          About me
        </h2>
        <AnimatedParagraphs
          paragraphs={paragraphs}
          delay={20}
          styles="mt-2 sm:text-base text-sm"
        />
      </div>
    </section>
  );
};

export default Description;
