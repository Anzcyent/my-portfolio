import React from "react";
import "./Skills.css"
import ProgressBar from "@ramonak/react-progress-bar";
import { skills, personalSkills, developerSkills } from "../../utils/data";
import { SkillInfo } from "../../components";
import { useState } from "react";


const Skills = () => {
  const [showInfo, setShowInfo] = useState(null);

  const sortedSkills = skills.slice().sort((a, b) => b.completed - a.completed);
  const sortedPersonalSkills = personalSkills
    .slice()
    .sort((a, b) => b.completed - a.completed);
  const sortedDeveloperSkills = developerSkills
    .slice()
    .sort((a, b) => b.completed - a.completed);

  return (
    <section className="min-h-[100vh] font-poppins p-3 bg-darkSecondary text-white overflow-auto custom-scroll">
      <div className="wrapper flex lg:flex-row flex-col justify-center w-full h-full lg:gap-80 gap-0">
        <div className="lg:w-1/2 w-full grid grid-cols-1">
          <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-20">
            Language Skills
          </h3>
          {sortedSkills.map((skill, i) => (
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
            <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-20">
              Personal Skills
            </h3>

            {sortedPersonalSkills.map((skill, i) => (
              <div
                key={skill.name + i}
                className="flex items-center w-full lg:mt-10 mt-5 hover-and-scale relative"
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
            <h3 className="skill-heading font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 mt-20">
              Developer Skills
            </h3>

            {sortedDeveloperSkills.map((skill, i) => (
              <div
                key={skill.name + i}
                className="flex items-center w-full lg:mt-10 mt-5 hover-and-scale relative"
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
