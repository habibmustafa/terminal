import React, { useState, useEffect } from "react";

type TypewriterProps = {
  text: string | string[];
  speed?: number;
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 20,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const fullText = Array.isArray(text) ? text.join("\n") : text;
    const words = fullText.match(/(\s*\S+\s*)/g) || [];

    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + words[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [wordIndex, speed, text]);

  return (
    <div
      className={`${className} whitespace-pre-wrap`}
      dangerouslySetInnerHTML={{ __html: currentText }}
    />
  );
};

export default Typewriter;
