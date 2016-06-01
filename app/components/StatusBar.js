'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StyleSheet from '../StyleSheet';

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.statusBarBackground}>
        <View>
          <Text>{this.props.pageTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ios: {
      marginTop: 20,
    },
  },
  header: {
  },
});

module.exports = StatusBar;
