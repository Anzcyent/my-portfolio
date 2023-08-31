import React, { useState, useEffect } from "react";
import "./Description.css";
import "animate.css";
import { AnimatedParagraphs } from "../../components/AnimatedText";
import { paragraphs } from "../../utils/data";
import { useMediaQuery } from "react-responsive";

const Description = () => {
  const [renderAnimation, setRenderAnimation] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktopOrLaptop) {
        if (window.scrollY > 272 && window.scrollY < 1500) {
          setRenderAnimation(true);
        }
      } else {
        if (window.scrollY > 700 && window.scrollY < 1200) {
          setRenderAnimation(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="description" className="h-[100vh] bg-darkSecondary text-white font-poppins p-3">
      <div className="wrapper flex sm:flex-row flex-col justify-between items-center h-full">
        <div className="image-container sm:w-1/2 w-full sm:h-full h-1/2 flex justify-center items-center relative">
          <img
            src="/assets/me.png"
            alt="me"
            className="sm:w-1/2 w-3/4 sm:h-auto h-2/3 rounded-tl-[10rem] rounded-tr-[10rem] p-2 object-cover border-4 border-gradient"
          />
        </div>

        {/* Bg color is on Description.css */}
        {renderAnimation && (
          <div className="sm:w-1/2 w-full sm:h-auto h-1/2 flex flex-col p-6 description-bg animate__animated animate__fadeInRight overflow-auto custom-scroll rounded-md">
            <h2 className="font-bold mb-6 text-gradient-purple sm:text-2xl text-lg text-center">
              About me
            </h2>
            <AnimatedParagraphs
              paragraphs={paragraphs}
              delay={20}
              styles="mt-2 sm:text-base text-sm"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Description;
