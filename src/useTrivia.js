import { useState, useEffect, useCallback } from "react";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [type, setType] = useState("any");

  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";
    if (category !== "any") url += `&category=${category}`;
    if (difficulty !== "any") url += `&difficulty=${difficulty}`;
    if (type !== "any") url += `&type=${type}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setQuestion(data.results[0]));
  }, [category, difficulty, type]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category, difficulty, type]);

  return {
    question,
    category,
    setCategory,
    getQuestion,
    difficulty,
    setDifficulty,
    type,
    setType
  };
}
