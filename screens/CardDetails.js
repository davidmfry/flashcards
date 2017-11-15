import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class CardDetails extends Component 
{
    static navigationOptions = {
        title: 'Card Details',

    }
    handleOnPressAddCard = () => {
        this.props.navigation.navigate('AddQuestionView')
    }

    handleOnPressStartQuiz = (questions) => {
        this.props.navigation.navigate('QuizView', {questions})
    }

    render() 
    {
        let { item } = this.props.navigation.state.params

        return (
          <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.totalCardText}>Total Cards: {item.questions.length}</Text>

              <TouchableOpacity style={styles.buttonOutlined} onPress={() => this.handleOnPressAddCard()}>
                  <Text style={styles.outlinedButtonText}>Add Card</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressStartQuiz(item.questions)}>
                  <Text style={styles.buttonText}>Start Quiz</Text>
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

export default CardDetails;