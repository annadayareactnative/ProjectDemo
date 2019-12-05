

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

    export default class Instructions extends Component {
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
  
	// {company}

    render() {
       const name = this.props.navigation.getParam('name', {name});
       const role = this.props.navigation.getParam('role', 'Software Developer');
		const company = this.props.navigation.getParam('company', 'Veridata Networks');
		const email = this.props.navigation.getParam('email', {email})  
		const image = this.props.navigation.getParam('image', {image})
      return (

		<View style={{ }}> 
			<View>
				<Image style={{ width: '100%', height: '35%' }} source={require('../assets/icon/banner.png')} />
			
				
				<Text style={{ fontSize: 40, paddingBottom: 10, color: '#ff9800', paddingTop: 30, paddingLeft: 10}}>What's New</Text>
				<Text style={{ fontSize: 18, color: '#3c4858', paddingLeft: 10}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 

				'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 

				</Text>
				</View>
		</View>
		);
	}
}



