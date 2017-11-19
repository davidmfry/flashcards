import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { setLocalNotifications, clearLocalNotifications} from "../helpers/helps";


class QuizDone extends Component
{
    state = {
        score: ''
    }

    componentDidMount ()
    {
        const {deckObj} = this.props.navigation.state.params
        let score = (deckObj.correct / deckObj.totalQuestion) * 100
        this.setState({score:score.toFixed(2)})
        // Resets the Quiz notifications
        this.quizFinished()
    }

    handleOnPressRetakeQuiz = (deckObj) => {
        this.props.navigation.navigate('QuizView', {deckObj})
    }

    handleOnPressReturnToDeck = (id) => {
        this.props.navigation.navigate('DeckDetailView', {id})
    }

    quizFinished = () => {
        clearLocalNotifications()
            .then( setLocalNotifications)
    }

    render()
    {
        const {deckObj} = this.props.navigation.state.params

        return (
          <View style={styles.container}>
              <Text style={styles.title}>You got a {this.state.score}%</Text>
              <Text style={styles.totalCardText}>Correct Answers: {deckObj.correct}</Text>
              <Text style={styles.totalCardText}>Incorrect Answers: {deckObj.incorrect}</Text>

              <TouchableOpacity style={[styles.button, styles.showAnswer]} onPress={() => this.handleOnPressRetakeQuiz(deckObj)}>
                  <Text style={styles.buttonText}>Retake Quiz</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressReturnToDeck(deckObj.id)}>
                  <Text style={styles.buttonText}>Return to Deck Page</Text>
              </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    totalCardText: {
        fontSize: 16,
    },
    questionCount: {
        fontSize: 24,
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
    buttonOutlined: {
        marginTop: 20,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'skyblue',
        borderWidth: 1,


    },
    correctButton: {
        backgroundColor: '#2ecc71',
    },
    incorrectButton: {
        backgroundColor: '#c0392b',
    },
    showAnswer: {
        backgroundColor: '#f1c40f',
    },
    buttonText: {
        color: '#fff'
    },
    outlinedButtonText: {
        color: 'skyblue'
    },
    answerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    answerText: {
        color:'#2c3e50',
        fontSize: 16,
    }
})

export default QuizDone;