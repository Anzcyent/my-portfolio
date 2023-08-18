import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, delay }) => {
  const [animatedText, setAnimatedText] = useState("");
  const [blacket, setBlacket] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatedText.length < text.length) {
        setAnimatedText((prevText) => prevText + text[animatedText.length]);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [animatedText, text, delay]);

  useEffect(() => {
    if (animatedText.length === text.length) {
      setTimeout(() => setBlacket(false), 1700);
    }
  }, [animatedText, text]);

  return (
    <p className="lg:w-1/2 w-full mt-12 lg:text-2xl text-base">
      {animatedText}
      {blacket && <span className={`text-black font-bold blacket`}>|</span>}
    </p>
  );
};

export default AnimatedText;
