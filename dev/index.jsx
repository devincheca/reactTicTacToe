import React from "react";
import ReactDOM from "react-dom";
import Square from "./components/square.jsx";
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});
ReactDOM.render(
  <div className="w3-black w3-text-white w3-animate-opacity">
    <Square></Square>
    <HelloWorld greetTarget="Ba"/>
    <HelloWorld greetTarget="Ian"/>
    <HelloWorld greetTarget="Cage"/>
    <HelloWorld greetTarget="Ean"/>
    <HelloWorld greetTarget="Bo"/>
    <HelloWorld greetTarget="Can"/>
  </div>,
  document.querySelector("#container")
);  