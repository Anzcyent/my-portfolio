import React from "react";
import "./SkillInfo.css";
import AnimatedText from "../AnimatedText";
import { useMediaQuery } from "react-responsive";

const SkillInfo = ({ info, category }) => {
  const responsive = useMediaQuery({
    query: "(max-width:1050px)",
  });

  const positionClass =
    category === "personal" || category === "developer"
      ? "left-[-16rem]"
      : "right-[-16rem]";

  return (
    <div
      className={`skill-info absolute ${!responsive ? positionClass : undefined} z-20 px-2 py-4 w-60 h-40 bg-dark text-white custom-scroll overflow-auto animate__animated animate__fadeIn`}
    >
      <AnimatedText text={info} styles="text-xs" delay={15} />
    </div>
  );
};

export default SkillInfo;
