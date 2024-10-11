import React, { useState } from "react";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What is your country name",
      options: ["us", "india", "canada"],
      correctAnswer: "india",
    },
    {
      question: "What is your country capital",
      options: ["newDelhi", "Mumbai", "Hyderabad"],
      correctAnswer: "newDelhi",
    },
    {
      question: "Who is your country PM",
      options: ["Modi", "Rahul", "Jaishenkar"],
      correctAnswer: "Modi",
    },
  ];
  function handleNext() {
    if (selectedAnswer === questions[index].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setIndex((prevIndex) => prevIndex + 1);
    setselectedAnswer(null);
    console.log(score, index);
  }
  return (
    <div>
      {index <= questions.length - 1 ? (
        <>
          <h3>{questions[index].question} ?</h3>
          {questions[index].options.map((option, i) => (
            <>
              <input
                onChange={() => setselectedAnswer(option)}
                checked={selectedAnswer === option}
                type="radio"
                name={index}
              />
              <span>{option}</span>
            </>
          ))}
          {index < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={selectedAnswer ? false : true}
            >
              Next
            </button>
          ) : (
            <button onClick={handleNext}>Finish</button>
          )}{" "}
        </>
      ) : (
        <h2>
          Congratulations you have finished the Quiz! <br /> Your score is{" "}
          {score}
        </h2>
      )}
    </div>
  );
}
