import React from "react";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Question({ question, answerQuestion }) {
  const answer = [...question.incorrect_answers, question.correct_answer];
  shuffle(answer);

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answer.map((answer, index) => (
        <button
          key={index}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}
