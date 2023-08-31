import React, { useState, useEffect } from "react";
import { AnimatedText, Divider } from "../components";
import { qa } from "../utils/data";
import { qaTR } from "../utils/dataTR";
import { useMediaQuery } from "react-responsive";

const QA = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [renderAnimation, setRenderAnimation] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const lang = localStorage.getItem("lang");

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktopOrLaptop) {
        if (window.scrollY > 4250 && window.scrollY < 4500) {
          setRenderAnimation(true);
        }
      } else {
        if (window.scrollY > 7220 && window.scrollY < 8000) {
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
    <section className="h-[100vh] bg-darkSecondary text-white p-3 font-poppins">
      <div className="wrapper">
        <Divider />

        {renderAnimation && (
          <h3 className="text-gradient-purple text-4xl font-bold text-center mt-10 animate__animated animate__fadeIn">
            {lang === "en" ? "Q&A About Me" : "Hakkımda Soru Cevap"}
          </h3>
        )}

        {renderAnimation && (
          <div className="flex flex-col gap-10 mt-20 items-center animate__animated animate__fadeInLeft">
            {lang === "en"
              ? qa.map((q) => (
                  <div
                    key={q.questionId}
                    onClick={() => setCurrentQuestionId(q.questionId)}
                    className="border-2 p-3 w-full hover-and-scale hover:bg-white transition bg-gradient"
                  >
                    {!currentQuestionId ? (
                      q.question
                    ) : currentQuestionId === q.questionId ? (
                      <AnimatedText
                        text={q.answer}
                        delay={30}
                        styles="text-gradient-blue"
                      />
                    ) : (
                      q.question
                    )}
                  </div>
                ))
              : qaTR.map((q) => (
                  <div
                    key={q.questionId}
                    onClick={() => setCurrentQuestionId(q.questionId)}
                    className="border-2 p-3 w-full hover-and-scale hover:bg-white transition bg-gradient"
                  >
                    {!currentQuestionId ? (
                      q.question
                    ) : currentQuestionId === q.questionId ? (
                      <AnimatedText
                        text={q.answer}
                        delay={30}
                        styles="text-gradient-blue"
                      />
                    ) : (
                      q.question
                    )}
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default QA;
