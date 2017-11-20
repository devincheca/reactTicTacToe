import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
export default class Square extends Component
{
  render() {
    return (
      <TouchableHighlight 
        style={styles.square}
        onPress={this.props.onPress}>
        <Text style={styles.welcome}>
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
  welcome: {
    fontSize: 105,
    textAlign: 'center',
    margin: 10,
  }
});
AppRegistry.registerComponent('Square', () => Square);