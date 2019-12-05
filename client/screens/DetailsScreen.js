
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';

export default class DetailsScreen extends Component {
    render() {
        return (
            <View stye={{flex: 1, justifyContent: 'center' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{fontSize: 50}}> User Details </Text>
               
              </View>

              <View style={{ margin: 20 }}>
                <Button title= 'Back to Homepage' onPress = { () => this.props.navigation.navigate('Home')}/>
              </View>

              <View style={{ margin: 20 }}>
                <Button title= 'Back' onPress = { () => this.props.navigation.goBack()} />
              </View>

              <View style={{margin:20}}>
                  <Button 
                    title = 'Topo'
                    onPress = { () => this.props.navigation.popToTop()}
                    />
              </View>
            </View>
        )
    }
}


