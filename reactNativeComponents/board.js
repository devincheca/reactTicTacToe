import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Square from './square.js';
export default class Board extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      squares: Array(9).fill('#'),
      next: true,
    };
  }
  handlePress(i)
  {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i] !== '#')
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
      squares: Array(9).fill('#'),
      next: true,
    });
  }
  renderSquare(i)
  {
    return (
      <Square
        value={this.state.squares[i]}
        onPress={ () => this.handlePress(i) }
      />
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
      <View>
      <Text style={styles.status}>
        {status}
      </Text>
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.container}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.container}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
        <Button
          onPress={ () => this.handleReset() }
          title="Reset"
          color="#0000FF"
        />
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  status: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('Board', () => Board);