import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native';

import { connect } from 'react-redux'
import {fetchDeckList,addNewDeck} from "../actions/action_index";

import { DECK_OBJECT } from "../helpers/ConstKeys";
import dummyData from '../helpers/DummyData'

class AddDeck extends Component
{
    static navigationOptions = {
        title: 'Add New Deck',

    }

    state = {
        deckName: '',
        description: ''
    }

    componentWillMount()
    {
        this.props.fetchDeckList()
    }

    saveDeck = async (deckObject) =>
    {
        try {
            await AsyncStorage.setItem('testItem', deckObject)
        }
        catch (error)
        {
            alert(error)
            console.log(error)
        }
    }

    handleOnPressSave = (deckName, description) =>
    {
        const id = Math.floor(Math.random() * (100000 - 1) + 1)
        const data = {
            id: id,
            title: deckName,
            description,
            questions: []
        }

        this.props.addNewDeck(data)
        this.props.navigation.navigate('DeckDetailView', {id})
        this.setState({deckName: ''})

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
                            returnKeyType='next'
                            style={styles.textInput}

                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            placeholder='Add Description'
                            value = {this.state.description}
                            onChangeText={ (description) => this.setState({description})}
                            returnKeyType='done'
                            style={styles.textInput}

                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressSave(this.state.deckName, this.state.description)}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>

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
        backgroundColor: '#16a085',
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