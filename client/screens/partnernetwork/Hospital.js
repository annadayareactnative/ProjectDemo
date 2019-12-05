
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

export default class Hospital extends Component {
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
       const name = this.props.navigation.getParam('name', 'Ann Adaya');

       const hospname = this.props.navigation.getParam('hospname', {hospname}) 
       const email = this.props.navigation.getParam('email', {email}) 
       const hospaddress = this.props.navigation.getParam('hospaddress', {hospaddress}) 
       const image = this.props.navigation.getParam('image', {image}) 
       const city = this.props.navigation.getParam('city') 
       const phone = this.props.navigation.getParam('phone') 

//backgroundColor: '#ccc',  elevation: 30,
      return (
        <Container>
          <View style={{ marginVertical: 18,  marginHorizontal: 21,  borderRadius: 15, height: 250,   width: '90%', marginTop: 50}}>
          <Image style={{ width: 220, height: 190, marginLeft: 60 }} source={require('../../assets/icon/hospPage3.png')} />
          </View>
            <Titlebar>
                
                <Title>{ hospname }</Title>
                <Name >Email:  { email } </Name>
                <Company>Address: { hospaddress } </Company>
              
       </Titlebar>
     </Container>
   );
    }
}

const Container = styled.View`
 background-color: white;
 align-items: center;
 
`;

const Titlebar = styled.View`
 width: 100%;
 padding-left: 9%;
 line-height: 40px;
 
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
 font-size: 30px;
 font-weight: bold;
 color: #b8bece;
 margin-top: 30px;
`;

const Name = styled.Text`
 font-size: 19px;
 color: #3c4560;
 
 margin-top: 30px;
`;

const Company = styled.Text`
 font-size: 18px;
 color: #3c4560;
 font-weight: 300;
 margin-top: 15px;
`;
