import { useState, useEffect } from "react";

const useTypewriter = (text: string | string[], speed = 3) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const fullText = Array.isArray(text) ? text.join("\n") : text;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

export default useTypewriter;
