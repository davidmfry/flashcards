export const FETCH_DECKLIST = 'FETCH_DECKLIST'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'

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