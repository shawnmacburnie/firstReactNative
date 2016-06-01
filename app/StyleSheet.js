import {StyleSheet, Platform} from 'react-native';


function create(styles) {
    var platformStyles = {};
    Object.keys(styles).forEach((name) => {
      let {ios, android, ...style} = {...styles[name]};
      if (ios && Platform.OS === 'ios') {
        style = {...style, ...ios};
      }
      if (android && Platform.OS === 'android') {
        style = {...style, ...android};
      }
      platformStyles[name] = style;
    });
  return StyleSheet.create(platformStyles);
}

module.exports = {create};
