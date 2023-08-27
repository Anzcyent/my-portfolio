import React from "react";
import "./Projects.css";
import { Divider, ProjectCard } from "../../components";
import { projects } from "../../utils/data";

const Projects = () => {
  return (
    <section className="min-h-[100vh] bg-darkSecondary text-white p-3 font-poppins">
      <div className="wrapper mt-20">
        <Divider />
        <h3 className="font-bold text-4xl text-center text-gradient-purple mt-10">
          My Projects
        </h3>

        <div className="flex flex-wrap justify-center w-full items-center mt-10 gap-20">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name + i}
              name={project.name}
              description={project.description}
              pageUrl={project.pageUrl}
              codeUrl={project.codeUrl}
              image={project.image}
              category={project.category}
              techStacks={project.techStacks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
