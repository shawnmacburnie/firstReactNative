
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainNavigator from './app/navigators/MainNavigator';


class reactPageTutorial extends Component {

  render() {
    return (
      <MainNavigator />
    );
  }
}

AppRegistry.registerComponent('reactPageTutorial', () => reactPageTutorial);
