

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
TouchableNativeFeedback,
TextInput

} from 'react-native';

import hospdata from '../../db/hospitaldb';

import styled from 'styled-components';

import {  SearchBar} from 'react-native-elements';

export default class HospitalList extends Component {
    static navigationOptions = {
      title: 'Partner Network',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    constructor(props) {
      super(props);
      this.state = { isLoading:false, text: '' };
      this.arrayholder = [];
    }
    state = {
        data: [],
        
    }

    callAPI() {
        fetch("http://192.168.18.135:9000/hospitalsAPI")
          .then(res => res.json())
          .then(res => this.setState({ data: res.hospdata }))
        // .then( res => console.log(res))
          .catch(function(error) {
            console.log("Api call error");
            alert(error.message);
        });
    }

    componentDidMount() {
        this.callAPI();
    }

    renderHeader = () => {
      return <SearchBar placeholder="Search User Here..." lightTheme round  />
    };

    renderFooter = () => {
      if (!this.state.loading) return null;
    }

    search = (searchText) => {
      this.setState({searchText: searchText});
    
      let filteredData = this.state.item.filter(function (item) {
        return item.name.includes(searchText);
      });
    
      this.setState({filteredData: filteredData});
    };

    SearchFilterFunction(text) {
      //passing the inserted text in textinput
      const newData = this.arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.hospname ? item.hospname.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: newData,
        text: text,
      });
    }

    render() {
        const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');

       const hospname = this.props.navigation.getParam('hospname', {hospname}) 
       const email = this.props.navigation.getParam('email') 
       const city = this.props.navigation.getParam('city') 
       const phone = this.props.navigation.getParam('phone') 
  
      return (
        <>
         <SearchBar lightTheme round 
          //style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          keyboardShouldPersistTaps="always"
        />
            <FlatList 
                style={{ width: '100%' }}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableNativeFeedback onPress={() => 
                        this.props.navigation.navigate('Hospital', {...item})}>
    
    
                            <View style={{ marginVertical: 8,  marginHorizontal: 5,  borderRadius: 15, height: 250,  elevation: 15 }}>
    
                                
                                <View style={{ padding:11, borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1 }}>
                                    
    
                                <Container>
                                    <Titlebar>
                                    <Avatar  source={{ uri: item.image }} />
                                    <Title>{item.hospname}</Title>
                                    <Name>{ item.city }</Name>
                                    <Name>{ item.phone }</Name>
                                    <Name>{ item.email }</Name>
                                    </Titlebar>
                                    </Container>
                                </View>
                                </View>
                                
                        
                    </TouchableNativeFeedback>
                    )
                }}
            />
        
</>
        )
    }
}


//border-radius: 18px;
const Container = styled.View`
	flex: 1;
	background-color: white;
	align-items: center;
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 13px;
	padding-left: 180px;
`;

const Avatar = styled.Image`
	width: 150px;
	height: 200px;
	
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

// #b8bece;
const Title = styled.Text`
	font-size: 21px;
	font-weight: 500;
	color: #4285f4 
    paddingTop: 20px;
`;

const Name = styled.Text`
	font-size: 14px;
	color: #3c4560;
	font-weight: 100;
`;

const Company = styled.Text`
	font-size: 18px;
	color: #3c4560;
	font-weight: bold;
`;



























// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   Button,
//   TouchableNativeFeedback

// } from 'react-native';

// import hospdata from '../../db/hospitaldb';

// export default class HospitalList extends Component {
//     static navigationOptions = {
//       title: 'Partner Network',
//       headerStyle: {
//         backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headertitleStyle: {
//         fontWeight: 'bold',
//       }
//     }

//     state = {
//         data: hospdata
//     }

//     render() {
//        const name = this.props.navigation.getParam('name', 'Ann');
//        const age = this.props.navigation.getParam('age', 'not determined');

//        const hospname = this.props.navigation.getParam('hospname', {hospname}) 
//        const email = this.props.navigation.getParam('email') 
  
//       return (
//         <View style={ styles.container}>


// {/* List */}
//             <FlatList 
//                 style={{ width: '100%' }}
//                 data={this.state.data}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({item}) => {
//                     return (
//                   //Button to next page -> touchableNativeFeedback
//                         <TouchableNativeFeedback onPress={() => 

//                         //item should match from the item of renderItem above
//                         this.props.navigation.navigate('Hospital', {...item})}>
//                             <View 
//                                 style={{
//                                     marginVertical: 24, 
//                                     marginHorizontal: 15, 
//                                     borderRadius: 15,
//                                     backgroundColor: '#ced6eo',
//                                     elevation: 15
//                                 }}>
//                                 <View 
//                                     style={{ 
//                                         padding:15,    
//                                         backgroundColor: '#ecf0f1',
//                                         borderTopLeftRadius: 15,
//                                         borderTopRightRadius: 15
//                                     }}>
//                                     <Text style={{ 
//                                         fontSize: 24, 
//                                         fontWeight: 'bold' 
//                                     }}>
//                                         {item.hospname}
//                                     </Text>
//                                     <View  
//                                         style={{ 
//                                             //flexDirection: 'row', 
//                                             //justifyContent: 'space-between' 
//                                             }}>
//                                         <View 
//                                             style={{ 
//                                                 flexDirection: 'row', 
//                                                // alignItems: 'baseline' 
//                                                 }}>
//                                             <Text> Email:  </Text>
//                                             <Text> { item.email } </Text>
//                                         </View>
//                                         <View style={{
//                                             //flexDirection: 'row', 
//                                             alignItems: 'baseline',
//                                             //justifyContent: 'space-between'
//                                         }}>
//                                             <Text style={{
//                                                 fontSize: 15, 
//                                                 fontWeight: '200' 
//                                         }}> Address:  </Text>
//                                             <Text> { item.hospaddress } </Text>
//                                         </View>
//                                     </View>
//                                     <View>
//                                         <Image 
//                                             source={{ uri: item.image }} 
//                                             style={{ 
//                                                 width: '100%', 
//                                                 height: 200,
//                                                 borderBottomLeftRadius: 15,
//                                                 borderBottomRightRadius: 15,
//                                                 flex: 1,
//                                                 alignSelf: 'stretch'
//                                             }} 
//                                         />
                                        
//                                     </View>
//                                 </View>
//                         </View>
//                     </TouchableNativeFeedback>
//                  )
//                 }}
//             />
//         </View>

//         )
//     }
// }

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     color: '#34495e',
//   },
//     title: {
//         color: '#ffff',
//         fontSize: 40
//   },
//     button: {
//     marginBottom: 30,
//     height: 80,
//     width: 350,
//     elevation: 1,
//     // alignItems: 'center',
//     backgroundColor: '#2196F3' //2196F3
//     },
//     buttonText: {
//     textAlign: 'center',
//     fontSize: 21,
//     paddingTop: 20,
//     color: 'white'
//     },
// });