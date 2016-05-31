'use strict';
import React, { Component } from 'react';
import {View, Image, Text, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';

class MovieScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity>
          <Icon size={30} name="times" />
        </TouchableOpacity>
        <Text>
          Hey Bill
        </Text>
      </ViewContainer>
    );
  }
}

module.exports = MovieScreen;
