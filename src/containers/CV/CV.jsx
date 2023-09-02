import React from "react";
import "./CV.css";
import { useMediaQuery } from "react-responsive";

const CV = ({isOpenedQA}) => {
  const smallDevice = useMediaQuery({query: '(max-width: 380px)'})
  const lang = localStorage.getItem("lang");
  return (
    <section
      id="cv"
      className="bg-darkSecondary min-h-[100vh] text-white p-3 font-poppins"
    >
      <div className={`wrapper md:mt-10 ${!isOpenedQA ? "mt-20" : smallDevice ? "mt-[25rem]" : "mt-[9rem]"} `}>
        <div className="cluster">
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>

          <div className="flex flex-col justify-center items-center">
            <span className="text-center">
              {lang === "en"
                ? "You can access my resumé by clicking the button below."
                : "Aşağıdaki butona tıklayarak özgeçmişime ulaşabilirsiniz."}
            </span>
            <a
              href="/downloads/cihan-ozcan-cv.pdf"
              className="bg-gradient p-3 hover-and-scale my-10"
              download
            >
              {lang === "en" ? "DOWNLOAD CV" : "CV İNDİR"}
            </a>
          </div>

          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
        </div>
      </div>
    </section>
  );
};

export default CV;
