
import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
} from 'react-native';
import MovieListScreen from '../screens/MovieListScreen';
import MovieScreen from '../screens/MovieScreen';
import ViewContainer from '../components/ViewContainer';
import StatusBar from '../components/StatusBar';
import Stack from '../Stack';

class MainNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleStack: new Stack('Movies'),
    };
  }

  renderScene(route, navigator) {
    if(!this.navigator) {
      this.navigator = navigator;
    }
    if (route.ident) {
      switch (route.ident) {
        case 'MovieListView':
          return (
              <MovieListScreen
                params={route.params}
                goBack={this.goBack.bind(this)}
                goTo={this.goTo.bind(this)}
              />
          );
        case 'MovieScreen':
          return (
              <MovieScreen
                params={route.params}
                goBack={this.goBack.bind(this)}
                goTo={this.goTo.bind(this)}
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

  goTo(ident, params) {
    if (this.navigator) {
      this.setState({
        titleStack: this.state.titleStack.push(params.title)
      });
      this.navigator.push({ident, params});
    }
  }

  goBack() {
    if(this.navigator) {
      this.setState({
        titleStack: this.state.titleStack.pop()
      });
      this.navigator.pop();
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar
          title={this.state.titleStack}
          onGoBack={this.goBack.bind(this)}
          onGoNext={this.goTo.bind(this)}
        />

          <Navigator
            initialRoute={{ident: 'MovieListView'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={()=>Navigator.SceneConfigs.FloatFromBottom}
          />
      </ViewContainer>
    );
  }
}


module.exports = MainNavigator;
