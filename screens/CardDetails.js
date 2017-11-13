import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class CardDetails extends Component 
{
    render() 
    {
        return (
          <View style={styles.container}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.totalCardText}>Card number</Text>

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Add Card</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
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
    buttonText: {
        color: '#fff'
    }
})

export default CardDetails;