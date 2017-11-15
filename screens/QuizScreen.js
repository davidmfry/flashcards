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
        currentQuestion: 0
    }

    static navigationOptions = {
        title: 'Quiz',

    }

    componentWillMount ()
    {
        this.setState({questions: this.props.navigation.state.params})
    }

    handleOnPressNextQuestion = (qlength) => {
        if(this.state.currentQuestion + 1 < qlength)
        {
            this.setState({currentQuestion: this.state.currentQuestion + 1})
        }
    }
    handleOnPressPrevQuestion = () => {
        if(this.state.currentQuestion - 1 >= 0)
        {
            this.setState({currentQuestion: this.state.currentQuestion - 1})
        }
    }



    handleOnPressCancel = () => {
        this.props.navigation.navigate('DeckView')
    }

    render()
    {
        let { questions } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>


                <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressNextQuestion(questions.length)}>
                    <Text style={styles.buttonText}>Next Question</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressPrevQuestion()}>
                    <Text style={styles.buttonText}>Previous Question</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.handleOnPressCancel()}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    totalCardText: {
        fontSize: 16,
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
    buttonText: {
        color: '#fff'
    },
    outlinedButtonText: {
        color: 'skyblue'
    },
})
export default QuizScreen;