import React from 'react';
import { Text, AppRegistry } from 'react-native';

const styles = {
  main: {
    padding: '20px',
  },
};

const App = () => (
  <View style={styles.main}>
    <Text style=>some text</Text>
  </View>
);

AppRegistry.registerComponent('albums', () => App);
