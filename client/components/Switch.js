import React, { Component } from 'react';
import { View, StyleSheet, ProgressBarAndroid, Button, Text } from 'react-native';



export default class Switch extends Component {

    constructor(props) {
        super(props);
        this.state = { switchValue: false };
    }

    toggleSwitch = ( value ) => {
        this.setState({ switchValue: value })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text >Hello from Switch</Text>
                <Text> {this.state.switchValue ? 'Switch Ligado' : 'Switch Desligado'} </Text>    

                    <Switch
                        value={ this.state.switchValue }
                        onValueChange={this.toggleSwitch}
                    />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       alignItems: 'center',
       paddingTop: 40
    }
})

