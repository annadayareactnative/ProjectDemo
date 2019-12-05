
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';

import terminaldata from '../../db/terminaldb';
import styled from 'styled-components';

export default class TerminalList extends Component {
    static navigationOptions = {
      title: 'Terminal List',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    state = {
      data: []
    }

  callAPI() {
      fetch("http://192.168.18.135:9000/terminalsAPI")
        .then(res => res.json())
        .then(res => this.setState({ data: res.termndata }))
      // .then( res => console.log(res))
        .catch(function(error) {
          console.log("Api call error");
          alert(error.message);
      });
  }

  componentDidMount() {
      this.callAPI();
  }
  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
      return (

        <FlatList 
            style={{ width: '100%' }}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity 
                // onPress={() => 
                // this.props.navigation.navigate('', {...item})}
                >


                    <View style={{ marginVertical: 11,  marginHorizontal: 11,  borderRadius: 15,backgroundColor: '#ced6eo', height: 165, elevation: 15, marginTop: 21 }}>

                        
                        <View style={{ padding:15, backgroundColor: '#ecf0f1',borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1 }}>
                            

                        <Container>
                            <Titlebar>
                            <Avatar  source={{ uri: item.image }} />
                            <Title> {item.terminalID}</Title>
                            <Name> { item.description }</Name>
                            <Name>{ item.department }</Name>
                            <Name>{ item.hospname }</Name>
                            </Titlebar>
                            </Container>
                        </View>
                        </View>
                        
                
            </TouchableOpacity>
            )
            }}
        />



      )
    }
}
  
const Container = styled.View`
	flex: 1;
	background-color: white;
  align-items: center;
 
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 17px;
	padding-left: 100px;
`;

const Avatar = styled.Image`
	width: 150px;
	height: 110px;
	margin-left: 10px;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 70px;
	color: #b8bece;
`;

const Name = styled.Text`
	font-size: 13px;
	color: #3c4560;
  font-weight: bold;
  margin-left: 70px;
`;

const Company = styled.Text`
	font-size: 13px;
	color: #3c4560;
	font-weight: bold;
`;