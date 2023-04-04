export default function Singlequestion(given) {
  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{ __html: given.question }}></p>
      <div className="choose-list">
        <button className="chosen">one</button>
        <button className="true-answer">two</button>
        <button className="wrong-answer">three</button>
        <button className="not-chosen">four</button>
      </div>
      <hr />
    </div>
  );
}

// document.querySelector("p").innerHTML = document.querySelector("p");
