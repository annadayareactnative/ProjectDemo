




import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

import {  SearchBar} from 'react-native-elements';

import data from '../../db/db'

import styled from 'styled-components';


export default class UserList extends Component {
    static navigationOptions = {
      title: 'UserList',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    

    state = {
        searchText: "",
        filteredData: [],
        error: null,
        data: data,
    }

    renderHeader = () => {
      return <SearchBar placeholder="Search User Here..." lightTheme round  />
    };

    renderFooter = () => {
      if (!this.state.loading) return null;
    }
    
    search = (searchText) => {
      this.setState({searchText: searchText});
    
      let filteredData = this.state.data.filter(function (data) {
        return data.name.includes(searchText);
      });
    
      this.setState({filteredData: filteredData});
    };




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

        {/* <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Search user..."
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.search}
          value={this.state.searchText}

          
        /> */}


        <FlatList 
            style={{ width: '100%' }}
            data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
            //keyExtractor={(item) => `item-${item.name}`}
            renderItem={({item}) => {
              
                return (
                    <TouchableOpacity
                    name={item.name}
                    onPress={() => 

                      this.props.navigation.navigate('User', {...item})}>


                        <View style={{ marginVertical: 24,  marginHorizontal: 15,  borderRadius: 15,backgroundColor: '#ced6eo', height: 165, elevation: 15 }}>

                            
                            <View style={{ padding:15, backgroundColor: '#ecf0f1',borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1 }}>
                                

                            <Container>
                                <Titlebar>
                                <Avatar  source={{ uri: item.image }} />
                                <Title>{item.name}</Title>
                                <Name>{ item.email }</Name>
                                <Name>{ item.role }</Name>
                                </Titlebar>
                                </Container>
                            </View>
                            </View>
                            
                    {/* <ActivityIndicator animating size="large" /> */}
                </TouchableOpacity>
              
                )
            }}
            keyExtractor={item => item.email}  
            ItemSeparatorComponent={this.renderSeparator} 
            ListHeaderComponent={this.renderHeader}    
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
	padding-left: 180px;
`;

const Avatar = styled.Image`
	width: 120px;
	height: 120px;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
	font-size: 25px;
	font-weight: 500;
	color: #b8bece;
    paddingTop: 20px;
`;

const Name = styled.Text`
	font-size: 15px;
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
//   TouchableOpacity,
//   ActivityIndicator,
//   SafeAreaView
// } from 'react-native';

// import {  SearchBar} from 'react-native-elements';

// import data from '../../db/db'

// import styled from 'styled-components';


// export default class UserList extends Component {
//     static navigationOptions = {
//       title: 'UserList',
//       headerStyle: {
//         backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headertitleStyle: {
//         fontWeight: 'bold',
//       }
//     }

//     state = {
//         data: data,
//         error: null
//     }

//     renderHeader = () => {
//       return <SearchBar placeholder="Search User Here..." lightTheme round  />
//     };

//     renderFooter = () => {
//       if (!this.state.loading) return null;
//     }
    
  
//     render() {
//        const name = this.props.navigation.getParam('name', 'Ann');
//        const age = this.props.navigation.getParam('age', 'not determined');
  
//       return (
//         <>   
//         <FlatList 
//             style={{ width: '100%' }}
//             data={this.state.data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({item}) => {
//                 return (
//                     <TouchableOpacity onPress={() => 
//                     this.props.navigation.navigate('User', {...item})}>


//                         <View style={{ marginVertical: 24,  marginHorizontal: 15,  borderRadius: 15,backgroundColor: '#ced6eo', height: 165, elevation: 15 }}>

                            
//                             <View style={{ padding:15, backgroundColor: '#ecf0f1',borderTopLeftRadius: 15, borderTopRightRadius: 15, flex: 1 }}>
                                

//                             <Container>
//                                 <Titlebar>
//                                 <Avatar  source={{ uri: item.image }} />
//                                 <Title>{item.name}</Title>
//                                 <Name>{ item.email }</Name>
//                                 <Name>{ item.role }</Name>
//                                 </Titlebar>
//                                 </Container>
//                             </View>
//                             </View>
                            
//                     {/* <ActivityIndicator animating size="large" /> */}
//                 </TouchableOpacity>
              
//                 )
//             }}
//             keyExtractor={item => item.email}  
//             ItemSeparatorComponent={this.renderSeparator} 
//             ListHeaderComponent={this.renderHeader}    
//         />
//      {/* </View> */}

// </>
//       )
//     }
// }

// const Container = styled.View`
// 	flex: 1;
// 	background-color: white;
// 	align-items: center;
// `;

// const Titlebar = styled.View`
// 	width: 100%;
// 	margin-top: 17px;
// 	padding-left: 180px;
// `;

// const Avatar = styled.Image`
// 	width: 120px;
// 	height: 120px;
// 	border-radius: 22px;
// 	margin-left: 20px;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// `;

// const Title = styled.Text`
// 	font-size: 25px;
// 	font-weight: 500;
// 	color: #b8bece;
//     paddingTop: 20px;
// `;

// const Name = styled.Text`
// 	font-size: 15px;
// 	color: #3c4560;
// 	font-weight: 100;
// `;

// const Company = styled.Text`
// 	font-size: 18px;
// 	color: #3c4560;
// 	font-weight: bold;
// `;




  
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         color: '#34495e',
        
//       },
//       title: {
//         color: '#ffff',
//         fontSize: 40
//       },
//     button: {
//       marginBottom: 30,
//       height: 80,
//       width: 350,
//       elevation: 1,
//      // alignItems: 'center',
//       backgroundColor: '#2196F3' //2196F3
//     },
//     buttonText: {
//       textAlign: 'center',
//       fontSize: 21,
//       paddingTop: 20,
//       color: 'white'
//     },
  
//   });





























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

// import data from '../../db/db'


// export default class UserList extends Component {
//     static navigationOptions = {
//       title: 'UserList',
//       headerStyle: {
//         backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headertitleStyle: {
//         fontWeight: 'bold',
//       }
//     }

//     state = {
//         data: data
//     }

  
//     render() {
//        const name = this.props.navigation.getParam('name', 'Ann');
//        const age = this.props.navigation.getParam('age', 'not determined');
  
//       return (
//         <View style={ styles.container}>
//         <FlatList 
//             style={{ width: '100%' }}
//             data={this.state.data}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({item}) => {
//                 return (
//                     <TouchableNativeFeedback onPress={() => 
                    
// //here we added the item after the Details using spread, so we can use all the other information from the current subject or item clicked/tap in this case, since we have hospital list, it will then show all the details included of that specific hospital, data is from the internal API data
//                     //item should match from the item of renderItem above
//                     this.props.navigation.navigate('User', {...item})}>
//                         <View 
//                             style={{
//                                 marginVertical: 24, 
//                                 marginHorizontal: 15, 
//                                 borderRadius: 15,
//                                 backgroundColor: '#ced6eo',
//                                 elevation: 15
//                             }}>
//                             <View 
//                                 style={{ 
//                                     padding:15,    
//                                     backgroundColor: '#ecf0f1',
//                                     borderTopLeftRadius: 15,
//                                     borderTopRightRadius: 15,
//                                     flex: 1,
                                  
                                          
//                                 }}>
//                                 <Text style={{ 
//                                     fontSize: 24, 
//                                     fontWeight: '200',
                                    
//                                     textAlign: 'right'
//                                 }}>
//                                     {item.name}
//                                 </Text>
//                                 <View  
//                                     style={{ 
//                                         //flexDirection: 'row', 
//                                        // justifyContent: 'space-between' 
//                                        textAlign: 'right'
//                                         }}>
//                                     <View 
//                                         style={{ 
//                                             // flexDirection: 'row', 
//                                             // alignItems: 'baseline' ,
                                           
//                                             }}>
//                                         <Text> Email:  </Text>
//                                         <Text> { item.email } </Text>
//                                     </View>
//                                     <View style={{
//                                         flexDirection: 'row', 
//                                         alignItems: 'baseline',
//                                         justifyContent: 'space-between'
//                                     }}>
//                                         <Text style={{
//                                              fontSize: 15, 
//                                              fontWeight: '200' 
//                                     }}> Role:  </Text>
//                                         <Text> { item.role } </Text>
//                                     </View>
//                                 </View>
//                                 <View>
//                                     <Image 
//                                         source={{ uri: item.image }} 
//                                         style={{ 
//                                             width: '40%', 
//                                             height: 200,
//                                             borderBottomLeftRadius: 15,
//                                             borderBottomRightRadius: 15,
//                                             flex: 1,
//                                             alignSelf: 'stretch'
//                                         }} 
//                                     />
//                                 </View>
//                             </View>
//                     </View>
//                 </TouchableNativeFeedback>
//                 )
//             }}
//         />
//     </View>


//       )
//     }
// }
  
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         color: '#34495e',
        
//       },
//       title: {
//         color: '#ffff',
//         fontSize: 40
//       },
//     button: {
//       marginBottom: 30,
//       height: 80,
//       width: 350,
//       elevation: 1,
//      // alignItems: 'center',
//       backgroundColor: '#2196F3' //2196F3
//     },
//     buttonText: {
//       textAlign: 'center',
//       fontSize: 21,
//       paddingTop: 20,
//       color: 'white'
//     },
  
//   });