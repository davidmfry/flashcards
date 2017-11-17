import { combineReducers } from 'redux';

//Reducers
import DeckReducer from './DeckReducer'

export const reducers = combineReducers({
    deckState: DeckReducer
});
