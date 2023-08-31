import React, { useState, useEffect } from "react";
import "./Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { skills, personalSkills, developerSkills } from "../../utils/data";
import {
  skillsTR,
  personalSkillsTR,
  developerSkillsTR,
} from "../../utils/dataTR";
import { SkillInfo } from "../../components";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const [showInfo, setShowInfo] = useState(null);
  const [renderAnimation, setRenderAnimation] = useState(false);
  const [renderDeveloperSkills, setRenderDeveloperSkills] = useState(false);

  const sortedSkills = skills.slice().sort((a, b) => b.completed - a.completed);
  const sortedPersonalSkills = personalSkills
    .slice()
    .sort((a, b) => b.completed - a.completed);
  const sortedDeveloperSkills = developerSkills
    .slice()
    .sort((a, b) => b.completed - a.completed);

  const sortedSkillsTR = skillsTR
    .slice()
    .sort((a, b) => b.completed - a.completed);
  const sortedPersonalSkillsTR = personalSkillsTR
    .slice()
    .sort((a, b) => b.completed - a.completed);
  const sortedDeveloperSkillsTR = developerSkillsTR
    .slice()
    .sort((a, b) => b.completed - a.completed);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const lang = localStorage.getItem("lang");

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktopOrLaptop) {
        if (window.scrollY > 1000 && window.scrollY < 2000) {
          setRenderAnimation(true);
        }

        if (window.scrollY > 1900 && window.scrollY < 2500) {
          setRenderDeveloperSkills(true);
        }
      } else {
        if (window.scrollY > 1200 && window.scrollY < 2000) {
          setRenderAnimation(true);
        }

        if (window.scrollY > 2500 && window.scrollY < 3500) {
          setRenderDeveloperSkills(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-[100vh] font-poppins p-3 bg-darkSecondary text-white overflow-auto custom-scroll">
      <div className="wrapper flex lg:flex-row flex-col justify-center w-full h-full lg:gap-80 gap-0">
        <div className="lg:w-1/2 w-full grid grid-cols-1">
          {renderAnimation && (
            <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-20 animate__animated animate__fadeIn">
              {lang === "en" ? "Language Skills" : "Dil Becerilerim"}
            </h3>
          )}

          {renderAnimation && lang === "en"
            ? sortedSkills.map((skill, i) => (
                <div
                  key={skill.name + i}
                  className="flex justify-evenly items-center w-full mt-10 relative hover-and-scale"
                  onClick={() =>
                    setShowInfo(skill.name === showInfo ? null : skill.name)
                  }
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                  />
                  <ProgressBar
                    completed={skill.completed}
                    customLabel={skill.name}
                    className="w-full"
                    barContainerClassName="bg-gradient overflow-hidden"
                    labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                    animateOnRender={true}
                    transitionDuration="2s"
                  />
                  {showInfo === skill.name && (
                    <SkillInfo info={skill.info} category={skill.category} />
                  )}
                </div>
              ))
            : renderAnimation && sortedSkillsTR.map((skill, i) => (
                <div
                  key={skill.name + i}
                  className="flex justify-evenly items-center w-full mt-10 relative hover-and-scale"
                  onClick={() =>
                    setShowInfo(skill.name === showInfo ? null : skill.name)
                  }
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                  />
                  <ProgressBar
                    completed={skill.completed}
                    customLabel={skill.name}
                    className="w-full"
                    barContainerClassName="bg-gradient overflow-hidden"
                    labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                    animateOnRender={true}
                    transitionDuration="2s"
                  />
                  {showInfo === skill.name && (
                    <SkillInfo info={skill.info} category={skill.category} />
                  )}
                </div>
              ))}
        </div>

        <div className="grid grid-rows-1 gap-4 lg:w-1/2 w-full h-full">
          <div className="h-1/2">
            {renderAnimation && (
              <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-20 animate__animated animate__fadeIn">
                {lang === "en" ? "Personal Skills" : "Kişisel Becerilerim"}
              </h3>
            )}

            {renderAnimation && lang === "en"
              ? sortedPersonalSkills.map((skill, i) => (
                  <div
                    key={skill.name + i}
                    className={`flex items-center w-full ${
                      skill.name === "Creativity" && "mt-20"
                    } mt-10 hover-and-scale relative`}
                    onClick={() =>
                      setShowInfo(skill.name === showInfo ? null : skill.name)
                    }
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                    />
                    <ProgressBar
                      completed={skill.completed}
                      customLabel={skill.name}
                      className="w-full"
                      barContainerClassName="bg-gradient overflow-hidden"
                      labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                      animateOnRender={true}
                      transitionDuration="2s"
                    />
                    {showInfo === skill.name && (
                      <SkillInfo info={skill.info} category={skill.category} />
                    )}
                  </div>
                ))
              : renderAnimation && sortedPersonalSkillsTR.map((skill, i) => (
                  <div
                    key={skill.name + i}
                    className={`flex items-center w-full ${
                      skill.name === "Creativity" && "mt-20"
                    } mt-10 hover-and-scale relative`}
                    onClick={() =>
                      setShowInfo(skill.name === showInfo ? null : skill.name)
                    }
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                    />
                    <ProgressBar
                      completed={skill.completed}
                      customLabel={skill.name}
                      className="w-full"
                      barContainerClassName="bg-gradient overflow-hidden"
                      labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                      animateOnRender={true}
                      transitionDuration="2s"
                    />
                    {showInfo === skill.name && (
                      <SkillInfo info={skill.info} category={skill.category} />
                    )}
                  </div>
                ))}
          </div>

          <div className="h-1/2">
            {renderDeveloperSkills && (
              <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 mt-20 animate__animated animate__fadeIn">
                {lang === "en" ? "Developer Skills" : "Geliştirici Becerilerim"}
              </h3>
            )}

            {renderDeveloperSkills && lang === "en"
              ? sortedDeveloperSkills.map((skill, i) => (
                  <div
                    key={skill.name + i}
                    className="flex items-center w-full mt-10 hover-and-scale relative"
                    onClick={() =>
                      setShowInfo(skill.name === showInfo ? null : skill.name)
                    }
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                    />
                    <ProgressBar
                      completed={skill.completed}
                      customLabel={skill.name}
                      className="w-full"
                      barContainerClassName="bg-gradient overflow-hidden"
                      labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                      animateOnRender={true}
                      transitionDuration="2s"
                    />
                    {showInfo === skill.name && (
                      <SkillInfo info={skill.info} category={skill.category} />
                    )}
                  </div>
                ))
              : renderDeveloperSkills && sortedDeveloperSkillsTR.map((skill, i) => (
                  <div
                    key={skill.name + i}
                    className="flex items-center w-full mt-10 hover-and-scale relative"
                    onClick={() =>
                      setShowInfo(skill.name === showInfo ? null : skill.name)
                    }
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="lg:w-20 w-10 lg:mr-5 mr-1 lg:border lg:p-3 p-0"
                    />
                    <ProgressBar
                      completed={skill.completed}
                      customLabel={skill.name}
                      className="w-full"
                      barContainerClassName="bg-gradient overflow-hidden"
                      labelClassName="font-bold p-3 bg-aqua w-full lg:text-sm text-xs text-black hover:text-white"
                      animateOnRender={true}
                      transitionDuration="2s"
                    />
                    {showInfo === skill.name && (
                      <SkillInfo info={skill.info} category={skill.category} />
                    )}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
