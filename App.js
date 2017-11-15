import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import DeckList from './screens/DeckList'
import CardDetails from './screens/CardDetails'
import AddQuestion from './screens/AddQuestion'
import QuizScreen from "./screens/QuizScreen";


const CardStack = StackNavigator({
    DeckView: { screen: DeckList },
    CardDetailView: { screen: CardDetails},
    AddQuestionView: {screen: AddQuestion},
    QuizView: { screen: QuizScreen},
}, {
    headerMode: 'screen',
})



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <CardStack/>
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
