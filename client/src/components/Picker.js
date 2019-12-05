import React, { Component } from 'react';
import { View,  Picker, Text, StyleSheet } from 'react-native';




export default class Picker extends Component {
    state = { language: 'ReactJS'}

    render() {
        const language = this.state.language;

        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={ (itemValue, itemIndex) => 
                        this.setState

                    }
                    >

                </Picker>
                <Picker>
                    <Picker.Item label="ReactJS" value="ReactJS" />
                    <Picker.Item label="React Native" value="ReactNative" />
                    <Picker.Item label="MySQL" value="MySQL" />
                    <Picker.Item label="MongoDB" value="MongoDB" />
                </Picker>
            </View>
         )
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker: {
        height: 20,
        width: 150,
        transform: [{ scaleX: 2.0}, {scaleY: 2.0}]
    }
})