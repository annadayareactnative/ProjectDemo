import React, { Component } from 'react';
import { View, StyleSheet, ProgressBarAndroid, Button, Text, StatusBar} from 'react-native';



export default class StatusBarComponent extends Component {
    render() {
        return (
            <View>
                
                    <StatusBarComponent
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="blue"
                    />
                
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    }
})

