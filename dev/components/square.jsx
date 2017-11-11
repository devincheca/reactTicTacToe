import React from "react";
function Square (props)
{
    return (
      <div>
        <button 
          className="w3-col s4 w3-btn w3-ripple w3-white w3-hover-light-gray w3-border"
          onClick={props.onClick}>
          {props.value}
        </button>
      </div>
    );
}
module.exports = Square;