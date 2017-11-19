import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

class QuizScreen extends Component
{
    constructor (props)
    {
        super(props)

    }

    state = {
        questions: '',
        currentQuestion: 0,
        totalQuestion: '',
        correct: 0,
        incorrect: 0,
        correctBtnTouch: false,
        incorrectBtnTouch: false,
        showAnswer: false,
    }

    static navigationOptions = {
        title: 'Quiz',

    }

    componentWillMount ()
    {
        this.setState({questions: this.props.navigation.state.params.deckObj.questions})
        this.setState({totalQuestion: this.props.navigation.state.params.deckObj.questions.length})
    }

    handleOnPressNextQuestion = (qlength, deckObj) => {
        if(this.state.currentQuestion + 1 < qlength)
        {
            this.setState({currentQuestion: this.state.currentQuestion + 1})
            this.setState({showAnswer: false})
            this.setState({correctBtnTouch: false})
            this.setState({incorrectBtnTouch: false})
        }

        if ( this.state.currentQuestion + 1 === qlength)
        {
            deckObj.correct = this.state.correct
            deckObj.incorrect = this.state.incorrect
            deckObj.totalQuestion = this.state.totalQuestion
            this.props.navigation.navigate('QuizResults', {deckObj})
        }
    }
    handleOnPressPrevQuestion = () => {
        if(this.state.currentQuestion - 1 >= 0)
        {
            this.setState({currentQuestion: this.state.currentQuestion - 1})
        }
    }

    handleOnPressCorrectAnswer = () => {
        this.setState({correct: this.state.correct + 1})
        this.setState({correctBtnTouch: true})
        this.setState({incorrectBtnTouch: true})
    }

    handleOnPressIncorrectAnswer = () => {
        this.setState({incorrect: this.state.incorrect + 1})
        this.setState({correctBtnTouch: true})
        this.setState({incorrectBtnTouch: true})
    }

    handleOnPressShowAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    handleOnPressCancel = () => {
        this.props.navigation.navigate('DeckView')
    }

    render()
    {
        let { deckObj } = this.props.navigation.state.params
        let { questions } = this.props.navigation.state.params.deckObj

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.questionCount}>{`${this.state.currentQuestion + 1}/ ${this.state.totalQuestion}`}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>
                    {this.state.showAnswer
                        ? <View style={styles.answerContainer}>
                            <Text style={styles.answerText}>Answer: {questions[this.state.currentQuestion].answer}</Text>
                        </View>
                        : null
                    }


                    <TouchableOpacity
                        style={[styles.button, styles.correctButton, this.state.correctBtnTouch ? styles.disabledButton: null]}
                        onPress={() => this.handleOnPressCorrectAnswer()}
                        disabled={this.state.correctBtnTouch ? true : false}
                    >
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.incorrectButton, this.state.correctBtnTouch ? styles.disabledButton: null]}
                        onPress={() => this.handleOnPressIncorrectAnswer()}
                        disabled={this.state.incorrectBtnTouch ? true : false}
                    >
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.showAnswer]} onPress={() => this.handleOnPressShowAnswer()}>
                        <Text style={styles.buttonText}>Show Answer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressNextQuestion(questions.length, deckObj)}>
                        <Text style={styles.buttonText}>Next Question</Text>
                    </TouchableOpacity>

                </View>
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
        paddingBottom: 20,
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
        backgroundColor: '#2c3e50',
        marginTop: 20,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    correctButton: {
        backgroundColor: '#2ecc71',
    },
    incorrectButton: {
        backgroundColor: '#c0392b',
    },
    showAnswer: {
        backgroundColor: '#8e44ad',
    },
    buttonText: {
        color: '#fff'
    },
    outlinedButtonText: {
        color: 'skyblue'
    },
    disabledButton: {
        backgroundColor: '#B3B2B3'
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
export default QuizScreen;