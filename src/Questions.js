import { useEffect } from "react";
import { useState } from "react";
import Question from "./Singlequestion";
import { grades } from "./Button";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  useEffect(function () {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  const questionsElements = questions.map((question) => {
    return (
      <Question
        key={Math.random()}
        question={question.question}
        options={[question.correct_answer, ...question.incorrect_answers]}
        trueAnswer={question.correct_answer}
      />
    );
  });
  function calculateIt() {}
  return (
    <div className="questions">
      <div className="container">
        {questionsElements}
        <div className="end">
          {/* <p className="result">you scored 3/5 correct answers</p> */}
          <button className="finish" onClick={calculateIt}>
            Check Answers
          </button>
          {/* <button className="finish" onClick={}>Check Answers</button> */}
        </div>
      </div>
    </div>
  );
}
