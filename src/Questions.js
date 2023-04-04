import { useEffect } from "react";
import { useState } from "react";
import Question from "./Singlequestion";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=2")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results[0]);
      });
  }, []);
  console.clear();
  // console.log();
  // const question = questions[0].question;
  console.log(questions.question);
  return (
    <div className="questions">
      <div className="container">
        <Question question={questions[0].question} />
        <Question question={questions[1].question} />
        <div className="end">
          <p className="result">you scored 3/5 correct answers </p>
          <button className="finish">Check Answers</button>
        </div>
      </div>
    </div>
  );
}
