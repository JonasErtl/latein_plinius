import React, { useState } from "react";
import "./QuizCard.css"
import Animation from "../Animation";

function QuizCard() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Wer war plinius",
      options: [
        { id: 0, text: "Ein Obdachloser", isCorrect: false },
        { id: 1, text: "Ein Kaiser", isCorrect: false },
        { id: 2, text: "Ein Soldat", isCorrect: false },
        { id: 3, text: "Ein Schriftsteller", isCorrect: true },
      ],
    },
    {
      text: "Wo war plinius ? hier noch viel etxt jdfaua ajdfkklajsdfkjjasdkjfajfjdkasjfkkasjfkjkasfjkjfkjsakfjkasjfkjasfkjfskajfksjakfdjaskjfkasjfkjfkasdjfkajlkajfdkl jkldsjafkjasklf askjfaklsjf klajsf dklajfkla jdfklj qaklj fklasf jklajdfkla jfklajfdklja fkl;j asljfdalsdfjaljdfaljfdasl",
      options: [
        { id: 0, text: "Los Angeles", isCorrect: false },
        { id: 1, text: "Rom", isCorrect: true },
        { id: 2, text: "Boston", isCorrect: false },
        { id: 3, text: "Kiruna", isCorrect: false },
      ],
    },
    {
      text: "Wann war plinius",
      options: [
        { id: 0, text: "Antike", isCorrect: true },
        { id: 1, text: "2017", isCorrect: false },
        { id: 2, text: "1903", isCorrect: false },
        { id: 3, text: "2678", isCorrect: false },
      ],
    },
    {
      text: "Wie oft war plinius ?",
      options: [
        { id: 0, text: "Manchmal", isCorrect: false },
        { id: 1, text: "immer", isCorrect: true },
        { id: 2, text: "selten", isCorrect: false },
        { id: 3, text: "vielleicht", isCorrect: false },
      ],
    },
    {
      text: "Warum war plinius",
      options: [
        { id: 0, text: "weil baum", isCorrect: false },
        { id: 1, text: "weil ers kann", isCorrect: true },
        { id: 2, text: "wegen dem Papst", isCorrect: true },
        { id: 3, text: "aufgrund der Erd-Ekliptik", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="text-center text-2xl">Plinius Quiz</h1>

      {/* 2. Current Score  */}
      <h2 className="text-center">Punkte: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className="text-center outline rounded">Ergebnis: </h1>
          <h2 className="py-12">
           Du hast {score} von {questions.length} richtig beantwortet. - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="content-center outline rounded" onClick={() => restartGame()}>Restart game</button>
          <Animation/>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Frage: {currentQuestion + 1} von {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <Animation/>
        </div>
      )}
    </div>
  );
}

export default QuizCard;