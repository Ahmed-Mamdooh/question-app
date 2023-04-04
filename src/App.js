import "./App.css";
import Overlay from "./overlay";
import Questions from "./Questions";
// import { useState } from "react";
export default function App() {
  return (
    <div className="page">
      <img src={require("./images/blob 5.png")} className="image-1" alt="" />
      <img src={require("./images/blob-5.png")} className="image-2" alt="" />
      {/* <Overlay /> */}
      <Questions />
    </div>
  );
}
/*
cd Documents && cd react-question-app && cd question-app && npm start
*/
