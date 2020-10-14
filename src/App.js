import React, { useState } from "react";

import ResultModal from "./components/ResultModal";
import Selector from "./components/Selector";
import ScoreBoard from "./components/ScoreBoard";
import Question from "./components/Question";

import { categories, difficulties, types } from "./options";
import useTrivia from "./useTrivia";

import "./style.css";

export default function App() {
  const {
    question,
    getQuestion,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    type,
    setType
  } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="app">
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestion={handleNextQuestion}
        />
      )}

      <div className="question-header">
        <Selector
          title={"Select Category"}
          value={category}
          chose={setCategory}
          categories={categories}
        />
        <Selector
          title={"Select Difficultiy"}
          value={difficulty}
          chose={setDifficulty}
          categories={difficulties}
        />
        <Selector
          title={"Select Type"}
          value={type}
          chose={setType}
          categories={types}
        />
        <ScoreBoard isCorrect={isCorrect} />
      </div>

      <div className="question-main">
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
