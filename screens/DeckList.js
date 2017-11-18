import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { fetchDeckList } from "../actions/action_index";
import dummyData from '../helpers/DummyData'
import {DECK_OBJECT} from "../helpers/StorageKeys";

const extractKey = ({id}) => id


class DeckList extends Component
{
    static navigationOptions = {
        header: null,

    }

    state ={
        deckObj: ''
    }

    componentDidMount ()
    {
        // this.load()
    }

    load = async () => {
        try {
            const loadedData = await AsyncStorage.getItem('newKey')
            let parsedData = JSON.parse(loadedData)
            if (loadedData !== null)
            {
                this.setState({deckObj: parsedData})
            }
        }
        catch (error) {
            alert(error)
        }
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

    handleOnPressTestState = () => {
        alert(JSON.stringify(this.props.deckList))
    }

    render() {
        return (
            <View>
                {/*<FlatList*/}
                {/*style={styles.container}*/}
                {/*data={this.props.deckList}*/}
                {/*renderItem={this.renderItem}*/}
                {/*keyExtractor={extractKey}*/}
                {/*/>*/}
                <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressTestState()}>
                    <Text style={styles.buttonText}>Test State</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(this.props.deckList)}</Text>
            </View>

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
    textInput: {
        flex: 1,
        height: 45,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'skyblue',
        marginTop: 20,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff'
    },
})

function mapStateToProps(state)
{
    return {
        deckList: state.deckState
    }
}
export default connect(mapStateToProps,{fetchDeckList})(DeckList)