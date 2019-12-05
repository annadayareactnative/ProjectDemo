import React, { Component } from 'react';
import { View, StyleSheet, ProgressBarAndroid, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10
    }
})



export default class ProgressBar extends Component {

    state = { position: 0.0 }

    progress(){
        this.setState (
            (state) => ({ position: state.position + 0.1 })
        )
    }

    render() {
        const position = this.state.position
        return (
            <View>
                <ProgressBarAndroid/>
                    <ProgressBarAndroid styleAttr="Horizontal"/>
                    <ProgressBarAndroid styleAttr="Horizontal" color="green" />
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={position}
                />

            <Button
                onPress={this.progress.bind(this)}
                title="Avancar"
                style={{ width:'90%'}}
            />

            </View>
        )
    }

}
