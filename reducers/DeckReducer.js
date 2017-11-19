import { REHYDRATE } from 'redux-persist/constants'
import {FETCH_DECKLIST, ADD_NEW_DECK, ADD_QUESTION} from "../actions/action_index";


import dummyData from '../helpers/DummyData'



export default function(state = dummyData, action)
{
    switch (action.type)
    {
        case REHYDRATE:
            return action.payload.deckState || dummyData
        case FETCH_DECKLIST:
            return state
        case ADD_NEW_DECK:
            let newArray = []
            newArray.push(action.payload)
            return [...state, ...newArray]
        case ADD_QUESTION:
            let currentState = state
            let index = currentState.findIndex( deck => deck.id == action.payload.id)
            currentState[index].questions = [...currentState[index].questions, ...action.payload.newQuestion]
            return [...currentState]

        default:
            return state
    }
}