import {FETCH_DECKLIST, ADD_NEW_DECK} from "../actions/action_index";

import dummyData from '../helpers/DummyData'

export default function(state = [], action)
{
    switch (action.type)
    {
        case FETCH_DECKLIST:
            return state
        case ADD_NEW_DECK:
            let newArray = []
            newArray.push(action.payload)
            return [...state, ...newArray]
        default:
            return state
    }
}