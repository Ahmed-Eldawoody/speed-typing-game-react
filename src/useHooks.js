import { useState, useRef, useEffect } from "react";

function useHooks() {
  const STARTING_TIME = 10;

  // State
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setisTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  //State

  //Ref
  const textareaEl = useRef(null);
  //Ref

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startTimer(e) {
    setisTimeRunning(true); //State
    setTimeRemaining(STARTING_TIME); //State
    setText(""); //State

    textareaEl.current.disabled = false;
    textareaEl.current.focus(); //Ref
  }

  function endTimer() {
    setisTimeRunning(false); //State
    setWordCount(calculateWordCount(text)); //State
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endTimer();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    text,
    handleTextareaChange,
    textareaEl,
    timeRemaining,
    startTimer,
    wordCount,
    isTimeRunning
  };
}

export default useHooks;
