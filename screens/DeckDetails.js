import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

class CardDetails extends Component 
{
    static navigationOptions = {
        title: 'Card Details',

    }
    handleOnPressAddCard = (id) => {
        this.props.navigation.navigate('AddQuestionView', {id})
    }

    handleOnPressStartQuiz = (deckObj) => {
        this.props.navigation.navigate('QuizView', {deckObj})
    }

    render()
    {
        let { id } = this.props.navigation.state.params
        let index = this.props.deckList.findIndex( deck => deck.id == id )
        let currentDeck = this.props.deckList[index]

        return (
          <View style={styles.container}>
              <Text style={styles.title}>{currentDeck.title}</Text>
              <Text style={styles.totalCardText}>Total Cards: {currentDeck.questions.length}</Text>
              <TouchableOpacity style={styles.buttonOutlined} onPress={() => this.handleOnPressAddCard(id)}>
                  <Text style={styles.outlinedButtonText}>Add Card</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressStartQuiz(currentDeck)}>
                  <Text style={styles.buttonText}>Start Quiz</Text>
              </TouchableOpacity>
              <Text>{JSON.stringify(currentDeck)}</Text>
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

function mapStateToProps(state)
{
    return {
        deckList: state.deckState
    }
}

export default connect(mapStateToProps)(CardDetails);