import { useEffect, useState } from "react";
import Button from "./Button";
let id = 0;
function idGenerator() {
  id++;
  return id;
}
export default function Singlequestion(given) {
  const options = given.options;
  // suffling options`
  let questionsChangedPlace = [];
  function shuffling(arrayOfQuestions) {
    const shuffledQuestion =
      arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)];
    if (!questionsChangedPlace.includes(shuffledQuestion)) {
      questionsChangedPlace.push(shuffledQuestion);
      return shuffledQuestion;
    } else {
      return shuffling(arrayOfQuestions);
    }
  }
  const shuffledQuestions = options.map(() => shuffling(options));
  const buttonValues = shuffledQuestions.map((shuffledQuestion) => ({
    checked: false,
    id: idGenerator(),
    content: shuffledQuestion,
  }));

  const [buttons, setButtons] = useState(buttonValues);
  function choosingAnswer(id) {
    setButtons((prevButtonsValues) => {
      return prevButtonsValues.map((prevButtonValue) => {
        return prevButtonValue.id === id
          ? { ...prevButtonValue, checked: true }
          : { ...prevButtonValue, checked: false };
      });
    });
  }
  const buttonsElements = buttons.map((button) => {
    let isTrue;
    if (button.content === given.trueAnswer) isTrue = true;
    return (
      <Button
        key={button.id}
        id={button.id}
        checked={button.checked}
        content={button.content}
        toggle={() => choosingAnswer(button.id)}
        rightAnswer={isTrue}
      />
    );
  });
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: given.question }}></p>
      <div className="choose-list">{buttonsElements}</div>
      <hr />
    </div>
  );
}
