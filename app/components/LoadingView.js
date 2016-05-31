'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies ...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


module.exports = LoadingView;
