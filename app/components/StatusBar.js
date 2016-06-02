'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleSheet from '../StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class StatusBar extends Component {

  getTitle() {
    console.log(this.props.title.get());
    return _.truncate(this.props.title.get(), {
      'length': 25,
      'separator': ' '
    });
  }

  getPrev() {
    if (this.props.title.reach()) {
      return (
        <TouchableOpacity
          onPress={this.props.onGoBack}
          style={styles.backNav}
        >
          <Icon name="chevron-left" size={20}/>
          <Text>
            {_.truncate(this.props.title.reach(),{
              'length': 10,
              'separator': ' '
            })}
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (<View style={styles.backNav} />);
    }
  }

  getNext() {
    if (this.props.nextTitle) {
      return (
        <TouchableOpacity
          onPress={this.props.onGoNext}
          style={styles.nextNav}
        >
          <Icon name="chevron-right" size={20}/>
          <Text>
            {_.truncate(this.props.nextTitle,{
              'length': 10,
              'separator': ' '
            })}
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (<View style={styles.nextNav} />);
    }
  }

  render() {
    return (
      <View style={styles.statusBarBackground}>
        {this.getPrev.bind(this)()}
        <View style={styles.title}>
          <Text> {this.getTitle()} </Text>
        </View>
        {this.getNext.bind(this)()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'blue',
    ios: {
      paddingTop: 20,
    },
  },
  title: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backNav: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 20,
  },
  nextNav: {
    flex: 1,
    flexDirection: 'row',
  },
});

module.exports = StatusBar;
