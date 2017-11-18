import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native';

import { connect } from 'react-redux'
import {fetchDeckList,addNewDeck} from "../actions/action_index";

import { DECK_OBJECT } from "../helpers/StorageKeys";
import dummyData from '../helpers/DummyData'

class AddDeck extends Component
{
    static navigationOptions = {
        title: 'Add Question',

    }

    state = {
        deckName: '',
        loadedData: ''
    }

    componentWillMount()
    {
        this.props.fetchDeckList()
    }

    handleOnPressSave = async (deckName) =>
    {
        // let newData = {
        //     id: Math.random(),
        //     title: deckName,
        //     questions:[]
        // }
        //
        // dummyData.push(newData)
        // let newObject = await AsyncStorage.getItem('newKey')
        // let parsedData = JSON.parse(newObject)
        // parsedData.push(newData)
        //
        // try {
        //     await AsyncStorage.setItem('newKey', JSON.stringify(parsedData)).then(this.setState({deckName: ''}))
        // }
        // catch (error)
        // {
        //     alert(error)
        // }
        const data = {id:1, name: 'test1'}
        this.props.addNewDeck(data)



    }

    handleOnPressLoad = async () => {

        // try {
        //     const loadedData = await AsyncStorage.getItem('newKey')
        //     if (loadedData !== null)
        //     {
        //         //alert(JSON.parse(loadedData))
        //     }
        // }
        // catch (error) {
        //     alert(error)
        // }
        //
        //  alert(JSON.stringify(loadedData))
        // alert(`From load: ${JSON.stringify(this.state)}`)

        alert(JSON.stringify(this.props.deckList))

    }

    render()
    {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    contentContainerStyle={{paddingTop: 30}}
                    style={{ flex: 1, backgroundColor: '#F8F8F9'}}
                >
                    <View style={styles.row}>
                        <TextInput
                            placeholder='Add Deck Name'
                            value = {this.state.deckName}
                            onChangeText={ (deckName) => this.setState({deckName})}
                            returnKeyType='done'
                            style={styles.textInput}

                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressSave(this.state.deckName)}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressLoad()}>
                        <Text style={styles.buttonText}>Load</Text>
                    </TouchableOpacity>

                    <Text>{this.state.loadedData}</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
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
export default connect(mapStateToProps,{fetchDeckList, addNewDeck})(AddDeck)