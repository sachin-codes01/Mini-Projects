import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const fullText = "Hello, I am a typewriter effect in React!";
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDisplayedText(fullText.slice(0, indexRef.current + 1));
      indexRef.current += 1;

      if (indexRef.current >= fullText.length) {
        clearInterval(intervalRef.current);
      }
    }, 150);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <h1 className="typewriter">{displayedText}</h1>
    </div>
  );
}

export default App;