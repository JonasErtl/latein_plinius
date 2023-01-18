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
      text: "Wann und wo wurde Plinius geboren ?",
      options: [
        { id: 0, text: "Zwischen 64 und 66 in Pompeji", isCorrect: false },
        { id: 1, text: "Zwischen 61 und 62 in Bithyniaet Pontus", isCorrect: false },
        { id: 2, text: "Zwischen 61 und 62 in Conum", isCorrect: true },
        { id: 3, text: "63 n. Chr in Kiruna", isCorrect: false },
      ],
    },
    {
      text: "Ab wann geht plinius auf die Terasse ?",
      options: [
        { id: 0, text: "Zur 11. Tagesstunde", isCorrect: false },
        { id: 1, text: "Um 11 Uhr", isCorrect: false },
        { id: 2, text: "Um 10 oder 11 uhr", isCorrect: true },
        { id: 3, text: "Zur 1. Tagesstunde", isCorrect: false },
      ],
    },
    {
      text: "Wobei leisten Plinius gebildete Personen Gesellschaft ?",
      options: [
        { id: 0, text: "Beim Abendessen", isCorrect: false },
        { id: 1, text: "Beim Spaziergang", isCorrect: true },
        { id: 2, text: "Beim Ansehen der Schauspieler", isCorrect: false },
        { id: 3, text: "Beim anhören der Lautenschläger", isCorrect: false },
      ],
    },
    {
      text: "Was tut plinius wenn er lange gegangen ist ?",
      options: [
        { id: 0, text: "Er nimmt den Wagen", isCorrect: false },
        { id: 1, text: "Er legt sich kurz hin", isCorrect: false },
        { id: 2, text: "Er beforzugt das Pferd für schnelle Bewegungen", isCorrect: true },
        { id: 3, text: "Er geht ins Theather", isCorrect: false },
      ],
    },
    {
      text: "Zu welcher Uhrzeit beginnt Plinius seinen Tag ?",
      options: [
        { id: 0, text: "Um 1 Uhr", isCorrect: false },
        { id: 1, text: "6 Uhr Morgens", isCorrect: false },
        { id: 2, text: "11 Uhr Morgens", isCorrect: false },
        { id: 3, text: "Bei Tagesanbruch", isCorrect: true },
      ],
    },
    {
      text: '"Clausae fenaestrae manent": Begründe warum',
      options: [
        { id: 0, text: "Weil er eine Sonnenallergie hat.", isCorrect: false },
        { id: 1, text: "Weil ihn das Licht beim ausruhen stört.", isCorrect: false },
        { id: 2, text: "Da so der Geist frei von Zerstreuung ist.", isCorrect: true },
        { id: 3, text: "Um Belästigung durch das Volk zu vermeiden.", isCorrect: false },
      ],
    },
    {
      text: 'Von wem wurde Plinus adoptiert ?',
      options: [
        { id: 0, text: "Von seiner Mutter.", isCorrect: false },
        { id: 1, text: "Von seinem Onkel", isCorrect: false },
        { id: 2, text: "Von seiner Tante", isCorrect: true },
        { id: 3, text: "Von seinem Großvater", isCorrect: false },
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
    <div className="App relative">
      {/* 1. Header  */}
      <h1 className="text-center text-4xl my-7">Plinius Quiz</h1>

      {/* 2. Current Score  */}
      <h2 className="text-center mb-3 text-2xl">Punkte: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className="text-center outline rounded text-2xl">Ergebnis: </h1>
          <h2 className="py-16 text-3xl">
           Du hast {score} von {questions.length} richtig beantwortet. - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="bg-gradient-to-r from-red-400 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => restartGame()}>Nochmal spielen</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card text-gray-300">
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
        </div>
      )}
      <Animation/>
    </div>
  );
}

export default QuizCard;