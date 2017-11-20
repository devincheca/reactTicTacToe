import React from "react";
import Square from "../components/square.jsx";
class Board extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      squares: Array(9).fill("#"),
      next: true,
    };
  }
  handleClick(i)
  {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i] != '#')
    {
      return;
    }
    squares[i] = this.state.next ? 'X' : 'O';
    this.setState({
        squares: squares,
        next: !this.state.next,
    });
  }
  handleReset()
  {
    this.setState({
      squares: Array(9).fill("#"),
      next: true,
    });
  }
  renderSquare(i)
  {
    return (
    <Square 
      value={this.state.squares[i]}
      onClick={ () => this.handleClick(i) } />
    );
  }
  calculateWinner(squares)
  {
    const lines =
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) 
    {
      const [a, b, c] = lines[i];
      if (squares[a] !== '#' && squares[b] !== '#' && squares[c] !== '#')
      {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) 
        {
          return squares[a];
        }
      }
    }
    return null;
  }
  render()
  {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner)
    {
      status = 'Winner: ' + winner;
    }
    else
    {
      status = 'Next player: ' + (this.state.next ? 'X' : 'O');
    }
    return (
      <div>
        {status}
        <div>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div>
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div>
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
        <button
          className="w3-btn w3-ripple"
          onClick={ () => this.handleReset() }>
          Reset
        </button>
      </div>
    );
  }
}
module.exports = Board;