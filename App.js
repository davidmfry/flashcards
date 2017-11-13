import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import DeckList from './screens/DeckList'
import CardDetails from './screens/CardDetails'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <DeckList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,

  },
});
