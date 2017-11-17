import {FETCH_DECKLIST} from "../actions/action_index";

import dummyData from '../helpers/DummyData'

export default function(state = dummyData, action)
{
    switch (action.type)
    {
        case FETCH_DECKLIST:
            return state
        default:
            return state
    }
}