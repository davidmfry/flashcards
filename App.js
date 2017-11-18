import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo';
import { createStore} from 'redux';
import { Provider } from 'react-redux'
import { reducers } from "./reducers/reducers";

import DeckList from './screens/DeckList'
import CardDetails from './screens/CardDetails'
import AddQuestion from './screens/AddQuestion'
import AddDeck from './screens/AddDeck'
import QuizScreen from "./screens/QuizScreen"
import QuizDone from "./screens/QuizDone"

import {FETCH_DECKLIST} from "./actions/action_index";

const CardStack = StackNavigator({
    DeckView: { screen: DeckList },
    CardDetailView: { screen: CardDetails},
    AddQuestionView: {screen: AddQuestion},
    QuizView: { screen: QuizScreen},
    QuizResults: { screen: QuizDone},
}, {
    headerMode: 'screen',
})

const AddDeckStack = StackNavigator({
    AddDeckView: { screen: AddDeck}
})

const AppNavigation = TabNavigator({
    CardsTab: {screen: CardStack},
    AddDeckTab: {screen: AddDeckStack},
}, {
    animationEnabled: true,
    lazy: true,
})

const store = createStore(reducers)


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                {/*<QuizDone />*/}
                <AppNavigation onNavigationStateChange={ (prevState, currentState) => {

                }}/>
            </View>
        </Provider>
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
