'use strict';
import React, { Component } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View, Text } from 'react-native';
class TabBar extends Component {
  navigationView() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          Im in the Drawer
        </Text>
      </View>
    );
  }

  initInstance(instance) {
    this.drawerInstance.instance = instance;
  }
  render() {
    return (
      <DrawerLayoutAndroid
        ref="TabView"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.navigationView}>
          {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

module.exports = TabBar;
