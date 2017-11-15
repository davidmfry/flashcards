import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import dummyData from '../helpers/DummyData'

const extractKey = ({id}) => id

export default class DeckList extends Component
{
    static navigationOptions = {
        header: null,

    }

    handleOnPressRow = (item) => {
        // Pushes a new screen onto the stack
        this.props.navigation.navigate('CardDetailView', {item})

    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={ () => this.handleOnPressRow(item)}>
                <Text style={styles.row}>
                    {item.title}
                </Text>

                <Text>
                    {item.questions.length}
                </Text>
            </TouchableOpacity>


        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={dummyData}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    row: {

        padding: 30,
        marginBottom: 5,
        backgroundColor: 'skyblue',
        fontSize: 25,

    },
})
