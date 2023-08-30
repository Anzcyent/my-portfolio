import React, { useState } from "react";
import { AnimatedText, Divider } from "../components";
import { qa } from "../utils/data";

const QA = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  return (
    <section className="min-h-[100vh] bg-darkSecondary text-white p-3 font-poppins">
      <div className="wrapper">
        <Divider />

        <h3 className="text-gradient-purple text-4xl font-bold text-center mt-10">
          Q&A About Me
        </h3>

        <div className="flex flex-col gap-10 mt-20 items-center">
          {qa.map((q) => (
            <div
              key={q.questionId + q.answerId}
              onClick={() => setCurrentQuestionId(q.questionId)}
              className="border-2 p-3 w-full hover-and-scale hover:bg-white hover:text-black transition bg-gradient"
            >
              {!currentQuestionId ? q.question : currentQuestionId === q.questionId ? <AnimatedText text={q.answer} delay={30} styles="text-gradient-blue" /> : q.question}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
