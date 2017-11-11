import React from "react";
import Square from "../components/square.jsx";
class Board extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i)
  {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  renderSquare(i)
  {
    return (
    <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} />
    );
  }
  render()
  {
    return (
      <div>
        Next player: x
        <div>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <br />
        <div>
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <br />
        <div>
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
module.exports = Board;