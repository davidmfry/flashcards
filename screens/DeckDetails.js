import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

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
              <Text style={styles.description}>{currentDeck.description}</Text>
              <TouchableOpacity style={styles.button} onPress={ () => this.handleOnPressStartQuiz(currentDeck)}>
                  <Text style={styles.buttonText}>Start Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOutlined} onPress={() => this.handleOnPressAddCard(id)}>
                  <Text style={styles.outlinedButtonText}>Add Card</Text>
              </TouchableOpacity>
              {/*<Text>{JSON.stringify(currentDeck)}</Text>*/}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        fontWeight: '500'
    },
    description: {
        padding: 10,
    },
    totalCardText: {
        paddingBottom: 3,
        paddingHorizontal: 10,
        fontSize: 24,
    },
    button: {
        backgroundColor: '#16a085',
        marginTop: 20,
        padding: 30,
        paddingLeft: 80,
        paddingRight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonOutlined: {
        marginTop: 20,
        padding: 30,
        paddingLeft: 80,
        paddingRight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#2c3e50',
        borderWidth: 1,


    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    },
    outlinedButtonText: {
        fontSize: 16,
        color: '#2c3e50'
    },
})

function mapStateToProps(state)
{
    return {
        deckList: state.deckState
    }
}

export default connect(mapStateToProps)(CardDetails);