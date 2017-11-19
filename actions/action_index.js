import dummyData from '../helpers/DummyData'
import { AsyncStorage } from 'react-native'


export const FETCH_DECKLIST = 'FETCH_DECKLIST'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'



export function fetchDeckList()
{


    return {
        type: FETCH_DECKLIST,
        payload: 'none'
    }
}

export function addNewDeck(newDeckItem)
{
    return {
        type: ADD_NEW_DECK,
        payload: newDeckItem
    }

}

export function addQuestion (id, newQuestion)
{
    const data = {id, newQuestion}
    return {
        type: ADD_QUESTION,
        payload: data
    }
}
