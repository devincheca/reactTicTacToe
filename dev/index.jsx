import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board.jsx";
ReactDOM.render(
  <div 
    className="w3-row w3-black w3-text-white w3-animate-opacity w3-large">
    <Board></Board>
  </div>,
  document.querySelector("#container")
);  