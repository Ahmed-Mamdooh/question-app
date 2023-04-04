import { useState } from "react";

export default function Overlay() {
  const [startQuiz, setStartQuiz] = useState(false);
  function toggleQuiz() {
    setStartQuiz(!startQuiz);
  }
  return (
    <>
      {!startQuiz && (
        <div className="content-introduction">
          <h1>ahmed quiz app</h1>
          <p>this is a small dynamic quiz app I made using React.js.</p>
          <button onClick={toggleQuiz}>Start quiz</button>
        </div>
      )}
    </>
  );
}
