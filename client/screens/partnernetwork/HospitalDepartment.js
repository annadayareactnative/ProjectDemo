
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

import hospdep from '../../db/hospdep';
import styled from 'styled-components';

import {  SearchBar } from 'react-native-elements';


export default class HospitalDepartment extends Component {
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
      //searchText: "",
      //filteredData: [],
      // error: null,
      data: hospdep
    }

    // renderHeader = () => {
    //   return <SearchBar placeholder="Search User Here..." lightTheme round  />
    // };

    // renderFooter = () => {
    //   if (!this.state.loading) return null;
    // }

    // search = (searchText) => {
    //   this.setState({searchText: searchText});
    
    //   let filteredData = this.state.data.filter(function (data) {
    //     return data.name.includes(searchText);
    //   });
    
    //   this.setState({filteredData: filteredData});
    // };




    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
       if (this.state.isLoading) {
        //Loading View while data is loading
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
        );
      }


      return (

        <>
        <SearchBar lightTheme round 
         //style={styles.textInputStyle}
        // onChangeText={text => this.SearchFilterFunction(text)}
         //value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
         autoCorrect={false}
         keyboardShouldPersistTaps="always"
       />
        <FlatList 
        style={{ width: '100%' }}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => 
                this.props.navigation.navigate('Department', {...item})}>


                    <View style={{ marginVertical: 11,  marginHorizontal: 11,  borderRadius: 15,backgroundColor: '#ced6eo', height: 165, elevation: 15, marginTop: 21 }}>

                        
                        <View style={{ padding:15, backgroundColor: '#ecf0f1',borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1 }}>
                            

                        <Container>
                            <Titlebar>
                            <Avatar  source={{ uri: item.image }} />
                            <Title>{item.depname}</Title>
                            <Name>{ item.hospname }</Name>
                            <Name> ID: { item.terminalID }</Name>
                            </Titlebar>
                            </Container>
                        </View>
                        </View>
                        
                
            </TouchableOpacity>
            )
        }}
    
        />
        </>
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
	width: 140px;
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
