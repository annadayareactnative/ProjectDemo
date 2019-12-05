

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';

import hospdata from '../../db/hospitaldb';
import data from '../../db/db';

import styled from 'styled-components';


export default class User extends Component {
    static navigationOptions = {
      title: 'Hospital',
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
    // const image = this.props.navigation.getParam('image', {image})
    
     return (
       <View style={{flex: 1}}>
       <Container>
       <Titlebar>
               {/* <Avatar  source={data.image}  /> */}
               <Avatar source={require('../../assets/icon/user2.png')} />
                <Title>{name}</Title>
                <Name> {role} </Name>
                <Company> {company} </Company>
              
       </Titlebar>

     </Container>
            <View style={{ paddingLeft: 20 }} >
            <Text style={{ fontSize: 18}}>Edit Profile </Text>
          </View>
       </View>

   );
 }
}

const Container = styled.View`
 height: 35%;
 background-color: white;
 align-items: center;
`;

const Titlebar = styled.View`
 width: 100%;
 margin-top: 60px;
 padding-left: 180px;
`;

const Avatar = styled.Image`
 width: 150px;
 height: 150px;
 border-radius: 22px;
 margin-left: 20px;
 position: absolute;
 top: 0;
 left: 0;
`;

const Title = styled.Text`
 font-size: 28px;
 font-weight: 500;
 color: #b8bece;
 margin-top: 30px;
`;

const Name = styled.Text`
 font-size: 20px;
 color: #3c4560;
 font-weight: bold;
`;

const Company = styled.Text`
 font-size: 18px;
 color: #3c4560;
 font-weight: bold;
`;





