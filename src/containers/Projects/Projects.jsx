import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Divider, ProjectCard } from "../../components";
import { projects } from "../../utils/data";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const [renderAnimation, setRenderAnimation] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktopOrLaptop) {
        if (window.scrollY > 2895 && window.scrollY < 3500) {
          setRenderAnimation(true);
        }
      } else {
        if (window.scrollY > 3280 && window.scrollY < 3600) {
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
    <section className="min-h-[100vh] bg-darkSecondary text-white p-3 font-poppins">
      <div className="wrapper mt-20">
        <Divider />
        {renderAnimation && (
          <h3 className="font-bold text-4xl text-center text-gradient-purple mt-10 animate__animated animate__fadeIn">
            My Projects
          </h3>
        )}

        <div className="flex flex-wrap justify-center w-full items-center mt-10 gap-20">
          {renderAnimation &&
            projects.map((project, i) => (
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
