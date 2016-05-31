'use strict';
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import LoadingView from '../components/LoadingView';
import styles from '../stylesheets/MovieListScreen';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  // This will only be called when the component is loaded and only once
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(res.movies),
          loaded: true,
        })
      })
      .done();
  }
  render() {
    if (!this.state.loaded) {
      return (<LoadingView />);
    }
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie.bind(this)}
          style={styles.listView}
        />
      </ViewContainer>
    );
  }
  goToMovieScreen(movie) {
    this.props.goTo('MovieScreen', {
      movie: movie,
    });
  }

  renderMovie(movie) {
    return (
      <TouchableOpacity onPress={()=> this.goToMovieScreen.bind(this)(movie)}>
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

module.exports = MovieListScreen;
