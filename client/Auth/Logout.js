

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';

import styled from 'styled-components';

import hospdata from '../db/hospitaldb';
import data from '../db/db';

    export default class Logout extends Component {
        static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headertitleStyle: {
            fontWeight: 'bold',
        }
	}
	

	state = {
        data: (hospdata, data)
    }
  


    render() {
       const name = this.props.navigation.getParam('name', {name});
       const role = this.props.navigation.getParam('role', 'Software Developer');
		const company = this.props.navigation.getParam('company', 'Veridata Networks');
		const email = this.props.navigation.getParam('email', {email}) 
		const image = this.props.navigation.getParam('image', {image})
      return (
            <View>
                <Text> Logout </Text>
            </View>
		);
	}
}

