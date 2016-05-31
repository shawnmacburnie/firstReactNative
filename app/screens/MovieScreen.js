'use strict';
import React, { Component } from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';

class MovieScreen extends Component {

  render() {
    console.log(this.props.params.movie);
    return (
      <ViewContainer style={{backgroundColor: 'cyan'}}>
        <StatusBarBackground />
        <View style={{height: 101}}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={this.props.goBack}>
              <Icon size={30} name="times" style={styles.closeButton}/>
            </TouchableOpacity>
            <View style={styles.center}>
              <Image
                source={{uri: this.props.params.movie.posters.thumbnail}}
                style={styles.image}
                />
              </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={styles.title}>
              Title:
            </Text>
              {` ` + this.props.params.movie.title}
          </Text>
          <Text>
            <Text style={styles.title}>
              Release Date:
            </Text>
              {` ` + this.props.params.movie.year}
          </Text>
          <Text>
            <Text style={styles.title}>
              MPPA Rating:
            </Text>
              {` ` + this.props.params.movie.release_dates.dvd}
          </Text>
        </View>

      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    paddingTop: 50,
  },
  imageContainer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 101,
  },
  center: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 101,
    width: 73,
  },
  closeButton: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
});

module.exports = MovieScreen;
