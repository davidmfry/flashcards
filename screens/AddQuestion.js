import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { addQuestion } from "../actions/action_index";

class AddQuestion extends Component
{
    static navigationOptions = {
        title: 'Add Question',

    }

    state = {
        question: '',
        answer: ''
    }

    handleOnPressSave = (id, question, answer) => {
        console.log(this.props)
        const questionObj = {
            question,
            answer,
        }
        let currentDeck = this.props.deckList[id]
        currentDeck.questions = [...currentDeck.questions, questionObj]
        console.log(JSON.stringify(currentDeck))
        this.props.addQuestion(id, currentDeck)
    }

    render()
    {
        let { id } = this.props.navigation.state.params
        let { question } = this.state
        let { answer } = this.state

        return (
          <View style={{flex: 1}}>
              <ScrollView
                  contentContainerStyle={{paddingTop: 30}}
                  style={{ flex: 1, backgroundColor: '#F8F8F9'}}
              >
                  <View style={styles.row}>
                      <TextInput
                          placeholder='Add your question'
                          value = {this.state.question}
                          onChangeText={ (question) => this.setState({question})}
                          returnKeyType='next'
                          style={styles.textInput}

                      />
                  </View>

                  <View style={styles.row}>
                      <TextInput
                          placeholder='Add the answer'
                          style={styles.textInput}
                      />
                  </View>
                  <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressSave(id, question, answer)}>
                      <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                  <Text>{JSON.stringify(this.props.deckList[id])}</Text>
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

export default connect(mapStateToProps,{addQuestion})(AddQuestion)