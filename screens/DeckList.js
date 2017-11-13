import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import dummyData from '../helpers/DummyData'

const extractKey = ({id}) => id

export default class DeckList extends Component {

    renderItem = ({item}) => {
        return (
            <View>
                <Text style={styles.row}>
                    {item.title}
                </Text>

                <Text>
                    {item.questions.length}
                </Text>
            </View>


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
