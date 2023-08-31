import React from "react";
import "./CV.css";

const CV = () => {
  const lang = localStorage.getItem("lang");
  return (
    <section
      id="cv"
      className="bg-darkSecondary min-h-[100vh] text-white p-3 font-poppins"
    >
      <div className="wrapper md:mt-10 mt-20">
        <div className="cluster">
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>
          <div className="grape"></div>

          <div className="flex flex-col justify-center items-center">
            <span>
              {lang === "en"
                ? "You can access my resumé by clicking the button below."
                : "Aşağıdaki butona tıklayarak özgeçmişime ulaşabilirsiniz."}
            </span>
            <a
              href="/downloads/dummyCV.txt"
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
