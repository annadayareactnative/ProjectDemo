
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button
} from 'react-native';

import hospdep from '../../db/hospdep';

import styled from 'styled-components';


export default class Department extends Component {
    static navigationOptions = {
      title: 'Department',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    state = {
        data: (hospdep)
    }
  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann Adaya');
       const depname = this.props.navigation.getParam('depname', {depname}) 
       const hospname = this.props.navigation.getParam('hospname', { hospname}) 
       const terminalID  = this.props.navigation.getParam('terminalID', {terminalID}) 
       const image = this.props.navigation.getParam('image', {image}) 
  
       return (
        <Container>
          <View style={{ marginVertical: 18,  marginHorizontal: 21,  borderRadius: 15, height: 250, width: '90%', marginTop: 50}}>
          <Image style={{ width: 250, height: 230, marginLeft: 55 }} source={require('../../assets/icon/hospPage2.png')} />
          </View>
            <Titlebar>
                
                <Title>{ depname }</Title>
                <Name>Hospital Name:  { hospname } </Name>
                <Company>Terminal ID: { terminalID } </Company>
              
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
 font-weight: 300;
 margin-top: 30px;
`;

const Company = styled.Text`
 font-size: 18px;
 color: #3c4560;
 font-weight: 300;
 margin-top: 15px;
`;
