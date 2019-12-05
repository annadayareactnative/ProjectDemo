
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';


export default class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Dashboard',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }
  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
      return (
        <View stye={{flex: 1, justifyContent: 'center' }}>

            <View style={{margin: 20, alignItems: 'center'}}>
                <Image src={require('../assets/profcircle1.jpg')} />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{fontSize: 50}}>Profile: {JSON.stringify(name)}</Text>
                <Text style={{fontSize: 50}}>Name: {JSON.stringify(name)}</Text>
                <Text style={{fontSize: 50}}>Age: {JSON.stringify(age)}</Text>
            </View>

            <View style={{margin: 20}}>
                <Button
                    title = 'Here for more details'
                    onPress = { () => this.props.navigation.navigate('Details')}
                    />
                </View>

        </View>
      )
    }
}
  