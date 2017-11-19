import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchDeckList, addNewDeck, addQuestion } from "../actions/action_index";

import { List, ListItem } from 'react-native-elements'

const extractKey = ({id}) => id


class DeckList extends Component
{
    static navigationOptions = {
        header: null,
        title: 'Decks'

    }

    componentDidMount ()
    {
        this.props.fetchDeckList()
    }

    handleOnPressRow = (id) => {
        // Pushes a new screen onto the stack
        this.props.navigation.navigate('DeckDetailView', {id})

    }

    rowItem = ({item}) => {
        return (
            <ListItem
                title={`${item.title}`}
                subtitle={`Cards: ${item.questions.length}`}
                onPress={() => this.handleOnPressRow(item.id)}
            />
        )
    }

    render() {
        return (
            <List>
                <FlatList
                    data={this.props.deckList}
                    renderItem={this.rowItem}
                    keyExtractor={extractKey}
                />
            </List>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },

})

function mapStateToProps(state)
{
    return {
        deckList: state.deckState
    }
}

export default connect(mapStateToProps, {fetchDeckList})(DeckList)
