import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
export default class Square extends Component
{
  render() {
    return (
      <TouchableHighlight 
        style={styles.square}
        onPress={this.props.onPress}>
        <Text style={this.props.style}>
          {this.props.value}
        </Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 4, 
    borderWidth: 0.5, 
    borderColor: '#000000',
  },
});
AppRegistry.registerComponent('Square', () => Square);