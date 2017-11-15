import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';

class AddQuestion extends Component
{
    static navigationOptions = {
        title: 'Add Question',

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
                          placeholder='Add your question'
                          style={styles.textInput}
                      />
                  </View>

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
})

export default AddQuestion;