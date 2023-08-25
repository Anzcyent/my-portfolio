import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { skills, personalSkills, developerSkills } from "../../utils/data";

const Skills = () => {
  return (
    <section className="min-h-[100vh] font-poppins p-3 bg-darkSecondary text-white overflow-auto custom-scroll">
      <div className="wrapper flex lg:flex-row flex-col justify-center w-full h-full lg:gap-80 gap-0">
        <div className="lg:w-1/2 w-full grid grid-cols-1">
          <h3 className="font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-10">
            Language/Framework Skills
          </h3>
          {skills.map((skill, i) => (
            <div
              key={skill.name + i}
              className="flex items-center w-full mt-10 hover-and-scale"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="lg:w-20 w-10 lg:mr-5 mr-1"
              />
              <ProgressBar
                completed={skill.completed}
                customLabel={skill.name}
                className="w-full"
                barContainerClassName="bg-gradient overflow-hidden"
                labelClassName="font-bold px-3 bg-aqua w-full text-sm"
                animateOnRender={true}
                transitionDuration="2s"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-rows-1 gap-4 lg:w-1/2 w-full h-full">
          <div className="h-1/2">
            <h3 className="font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 lg:mt-0 mt-20">
              Personal Skills
            </h3>

            {personalSkills.map((skill, i) => (
              <div
                key={skill.name + i}
                className="flex items-center w-full mt-5 hover-and-scale"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="lg:w-20 w-10 lg:mr-5 mr-1"
                />
                <ProgressBar
                  completed={skill.completed}
                  customLabel={skill.name}
                  className="w-full"
                  barContainerClassName="bg-gradient overflow-hidden"
                  labelClassName="font-bold px-3 bg-aqua w-full text-sm"
                  animateOnRender={true}
                  transitionDuration="2s"
                />
              </div>
            ))}
          </div>

          <div className="h-1/2">
            <h3 className="font-bold text-gradient-blue lg:text-4xl text-2xl mb-7 mt-20">
              Developer Skills
            </h3>

            {developerSkills.map((skill, i) => (
              <div
                key={skill.name + i}
                className="flex items-center w-full mt-5 hover-and-scale"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="lg:w-20 w-10 lg:mr-5 mr-1"
                />
                <ProgressBar
                  completed={skill.completed}
                  customLabel={skill.name}
                  className="w-full"
                  barContainerClassName="bg-gradient overflow-hidden"
                  labelClassName="font-bold px-3 bg-aqua w-full text-sm"
                  animateOnRender={true}
                  transitionDuration="2s"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
