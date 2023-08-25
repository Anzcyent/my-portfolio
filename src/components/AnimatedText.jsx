import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, delay, styles }) => {
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
    <p className={styles}>
      {animatedText}
      {blacket && <span className={`text-black font-bold blacket`}>|</span>}
    </p>
  );
};

export const AnimatedParagraphs = ({ paragraphs, delay, styles }) => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    if (currentParagraphIndex < paragraphs.length) {
      const timer = setTimeout(() => {
        setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
      }, paragraphs[currentParagraphIndex].length * delay);

      return () => clearTimeout(timer);
    }
  }, [currentParagraphIndex, paragraphs, delay]);

  return (
    <div>
      {paragraphs
        .slice(0, currentParagraphIndex + 1)
        .map((paragraph, index) => (
          <AnimatedText
            key={index}
            text={paragraph}
            delay={delay}
            styles="mt-5"
          />
        ))}
    </div>
  );
};

export default AnimatedText;
