import React, { useState } from "react";

const ProjectCard = ({
  name,
  description,
  pageUrl,
  codeUrl,
  image,
  category,
  techStacks,
}) => {
  const [showFullStackCodeMenu, setShowFullStackCodeMenu] = useState("");

  const handleFullStackCodeMenu = (category, name) => {
    if (category === "full-stack") {
      setShowFullStackCodeMenu(name);
    }
  };

  return (
    <div className="w-[300px] h-[450px] text-center border-aqua shadow-lg overflow-hidden animate__animated animate__zoomIn">
      <header className="bg-gradient font-bold h-[40px] rounded-tl-lg rounded-tr-lg">
        <h4 className="text-gradient-blue p-2">{name}</h4>
      </header>

      <main className="w-full h-[160px]">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </main>

      <footer className="flex flex-col h-[250px] rounded-bl-lg rounded-br-lg">
        <p className="flex flex-col justify-around text-sm p-3 h-[200px] bg-gradient">
          {description}
          <br />
          <div className="flex w-full justify-evenly items-center mt-1">
            {techStacks.map((tech, i) => (
              <img src={tech} alt={tech} className="w-10" key={tech + i} />
            ))}
          </div>
        </p>

        {showFullStackCodeMenu === name ? (
          <FullStackCodeMenu
            codeUrl={codeUrl}
            setShowFullStackCodeMenu={setShowFullStackCodeMenu}
          />
        ) : (
          <div className="flex w-full h-[50px] text-sm">
            <a
              href={pageUrl}
              target="_blank"
              className="w-1/2 bg-gradient hover-and-scale flex justify-center items-center rounded-bl-lg"
            >
              Visit Site
            </a>
            <a
              href={category === "landing" ? codeUrl : undefined}
              target="_blank"
              className="w-1/2 bg-gradient hover-and-scale flex justify-center items-center rounded-br-lg"
              onClick={() => handleFullStackCodeMenu(category, name)}
            >
              {"</> "}Code
            </a>
          </div>
        )}
      </footer>
    </div>
  );
};

const FullStackCodeMenu = ({ codeUrl, setShowFullStackCodeMenu }) => (
  <div className="animate__animated animate__fadeInRight flex w-full h-[50px] text-sm">
    <a
      href={codeUrl[0]}
      target="_blank"
      className="w-1/2 bg-gradient hover-and-scale flex justify-center items-center rounded-bl-lg"
      onClick={() => setShowFullStackCodeMenu("")}
    >
      Client
    </a>
    <a
      href={codeUrl[1]}
      target="_blank"
      className="w-1/2 bg-gradient hover-and-scale flex justify-center items-center rounded-br-lg"
      onClick={() => setShowFullStackCodeMenu("")}
    >
      Server
    </a>
  </div>
);

export default ProjectCard;
