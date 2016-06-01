
import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import MovieListScreen from '../screens/MovieListScreen';
import MovieScreen from '../screens/MovieScreen';

class MainNavigator extends Component {

  renderScene(route, navigator) {
    var goBack = () => {navigator.pop()};
    var goTo = (ident, params) => {navigator.push({ident, params})}
    if (route.ident) {
      switch (route.ident) {
        case 'MovieListView':
          return (
            <MovieListScreen
              params={route.params}
              goBack={goBack}
              goTo = {goTo}
            />
          );
        case 'MovieScreen':
          return (
            <MovieScreen
              params={route.params}
              goBack={goBack}
              goTo = {goTo}
            />
          );
        default:
          return (
            <MovieListScreen
              navigator={navigator}
            />
          );
      }
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident: 'MovieListView'}}
        renderScene={this.renderScene}
        configureScene={()=>Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

module.exports = MainNavigator;
