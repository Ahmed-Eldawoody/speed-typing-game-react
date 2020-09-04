import React from "react";
import "./styles.css";

import useHooks from "./useHooks";

const App = (props) => {
  const {
    text,
    handleTextareaChange,
    textareaEl,
    timeRemaining,
    startTimer,
    wordCount,
    isTimeRunning
  } = useHooks();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleTextareaChange}
        disabled={!isTimeRunning}
        ref={textareaEl}
      ></textarea>
      <h4>Time remaning: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startTimer}>
        Start
      </button>
      <h1>word count: {wordCount}</h1>
    </div>
  );
};

export default App;
