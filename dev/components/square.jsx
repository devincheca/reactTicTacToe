import React from "react";
function Square (props)
{
    return (
      <div
          className="w3-third w3-white w3-hover-light-gray w3-border w3-padding"
          onClick={props.onClick}>
          {props.value}
      </div>
    );
}
module.exports = Square;