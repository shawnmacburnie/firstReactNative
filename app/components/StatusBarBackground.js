'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import StyleSheet from '../StyleSheet';

class StatusBarBackground extends Component {
  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}
console.log(StyleSheet);
const styles = StyleSheet.create({
  statusBarBackground: {
    ios: {
      height: 20,
      backgroundColor: 'white'
    },
  }
});

module.exports = StatusBarBackground;
