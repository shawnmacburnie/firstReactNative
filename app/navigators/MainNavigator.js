
import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import MovieListScreen from '../screens/MovieListScreen';
import MovieScreen from '../screens/MovieScreen';
import ViewContainer from '../components/ViewContainer';
import StatusBar from '../components/StatusBar';

class MainNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: '',
    };
  }

  renderScene(route, navigator) {
    var goBack = () => {
      navigator.pop();
      console.log(navigator);
    };
    var goTo = (ident, params) => {navigator.push({ident, params})}
    if (route.ident) {
      switch (route.ident) {
        case 'MovieListView':
          return (
            <MovieListScreen
              params={route.params}
              goBack={goBack}
              goTo={goTo}
              setPageTitle={this.setPageTitle.bind(this)}
            />
          );
        case 'MovieScreen':
          return (
            <MovieScreen
              params={route.params}
              goBack={goBack}
              goTo = {goTo}
              pageTitle = 'Movies Select'
              setPageTitle={this.setPageTitle.bind(this)}
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

  setPageTitle(title: string) {
    var oldTitle = this.state.pageTitle
    this.setState({
      pageTitle: title
    });
    return oldTitle;
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar pageTitle={this.state.pageTitle} />
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
