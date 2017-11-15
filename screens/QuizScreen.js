import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

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
        showAnswer: false,
    }

    static navigationOptions = {
        title: 'Quiz',

    }

    componentWillMount ()
    {
        this.setState({questions: this.props.navigation.state.params})
        this.setState({totalQuestion: this.props.navigation.state.params.questions.length})
    }

    handleOnPressNextQuestion = (qlength) => {
        if(this.state.currentQuestion + 1 < qlength)
        {
            this.setState({currentQuestion: this.state.currentQuestion + 1})
            this.setState({showAnswer: false})
        }

        if ( this.state.currentQuestion + 1 === qlength)
        {
            this.props.navigation.navigate('QuizResults', {})
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
    }

    handleOnPressIncorrectAnswer = () => {
        this.setState({incorrect: this.state.incorrect + 1})
    }

    handleOnPressShowAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    handleOnPressCancel = () => {
        this.props.navigation.navigate('DeckView')
    }

    render()
    {
        let { questions } = this.props.navigation.state.params
        {alert(JSON.stringify(questions))}
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


                    <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={() => this.handleOnPressNextQuestion(questions.length)}>
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.incorrectButton]} onPress={() => this.handleOnPressNextQuestion(questions.length)}>
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.showAnswer]} onPress={() => this.handleOnPressShowAnswer()}>
                        <Text style={styles.buttonText}>Show Answer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressNextQuestion(questions.length)}>
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
export default QuizScreen;