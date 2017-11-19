import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo';
import { createStore, applyMiddleware, compose} from 'redux';
import { persistStore, autoRehydrate} from 'redux-persist'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { reducers } from "./reducers/reducers";

import DeckList from './screens/DeckList'
import DeckDetails from './screens/DeckDetails'
import AddQuestion from './screens/AddQuestion'
import AddDeck from './screens/AddDeck'
import QuizScreen from "./screens/QuizScreen"
import QuizDone from "./screens/QuizDone"
import {setLocalNotifications, clearLocalNotifications} from "./helpers/helps";
import { NOTIFICATION_KEY } from "./helpers/ConstKeys";


const CardStack = StackNavigator({
    DeckView: { screen: DeckList },
    DeckDetailView: { screen: DeckDetails},
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

const middleware = [];
if(process.env.NODE_ENV === 'development')
{
    middleware.push(logger)
}

const store = createStore(reducers,
    compose(
        applyMiddleware(logger)),
        autoRehydrate()
    )
persistStore(store, { storage: AsyncStorage, whitelist: ['deckState']})


export default class App extends React.Component
{
    componentDidMount ()
    {

        //clearLocalNotifications()
        setLocalNotifications()
    }
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AppNavigation />
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
