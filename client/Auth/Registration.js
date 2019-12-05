import React, { Component } from 'react';

import {
    StyleSheet, 
    Text,
    Image,
    View,
    TouchableOpacity,
    Vibration,
    TextInput
} from 'react-native';

export default class Registration extends Component {

    updateValue(text, field) 
    {
        console.warn(text)
    }

    constructor() {
        super()
        this.state = {
            name: ''
        }
    }



    render() {
        return (
            <View style={}>
                <Text style={}>Registration</Text>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'name')}
                />

                <TextInput
                    placeholder="Email Address"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'email')}
                />  

                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'password')}
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'password2')}
                />

                <TouchableOpacity style={styles.btn}>
                    <Text>Create Account</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: 'yellow',
        height: 40,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    
    }
})