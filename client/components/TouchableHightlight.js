import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image, TouchableHighlight } from 'react-native';


export default class TouchHigh extends Component {

    warn = () => {
        alert('Hello Ann!');

    }

  render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight  onPress={this.warn}>
                <Image
                    source={require('../assets/logo.jpg')}
                />
            </TouchableHighlight>
            
            <Text style={{fontSize: 28}}>TVS MOBILE</Text>
            
            <TouchableHighlight  onPress={this.warn}>
                <Image
                    source={require('../assets/button.png')}
                />
            </TouchableHighlight>
                
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
       alignItems: 'center',
       paddingTop: 40
    }, 
    Button: {

    }
})

