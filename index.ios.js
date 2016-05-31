
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';
import MovieListScreen from './app/screens/MovieListScreen';
import MovieScreen from './app/screens/MovieScreen';

class reactPageTutorial extends Component {

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

AppRegistry.registerComponent('reactPageTutorial', () => reactPageTutorial);
