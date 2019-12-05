

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity, 
  ScrollView
} from 'react-native';

import {  SearchBar } from 'react-native-elements';

export default class UserManagement extends Component {
    static navigationOptions = {
      title: 'User Management',
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
        <View style={{ flex: 1}}>
          
        <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>    
            <View style={{ flexDirection: 'row', marginTop: 50, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 35, padding: 5 }}>


                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}> 

 {/* #1 User List */}
        <TouchableOpacity  
            style={{ width: '100%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('UserList', { name: 'Ann', age: 28 })}>
              
              <View  style={{   width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/users1.png')} />
            </View>

              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> User List </Text>

        </TouchableOpacity>
        </View>


 {/* #2 Registration */}
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}>
       
            <TouchableOpacity  
            style={{ width: '100%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('Registration', { name: 'Ann', age: 28 })}>
              
              <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/reg1.jpg')} />
              </View>

              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> Registration  </Text>

            </TouchableOpacity>
        </View>


 {/* #3 User's Terminal Access  */}
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}>

            <TouchableOpacity  
                style={{ width: '100%', alignItems: 'center' }}
                onPress = { () => this.props.navigation.navigate('UserTerminalAccess', { name: 'Ann', age: 28 })}>
                  
                  <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                    
                    <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/trans5.png')} />

                </View>

                  <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> Terminal Access  </Text>

            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        </View>
      )
    }
}
  
 const styles = StyleSheet.create({
    container: {
      //paddingTop: 10,
      alignItems: 'center',
      elevation: 5,
      position:'relative'
    },
    button: {
      marginBottom: 30,
       elevation: 15,
    borderRadius: 10,
      height: 80,
      width: 350,
     
     // alignItems: 'center',
      backgroundColor: '#2196F3' //2196F3
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 21,
      paddingTop: 20,
      color: 'white'
    },
  });


























// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   Image,
//   TouchableOpacity, 
//   ScrollView
// } from 'react-native';



// export default class UserManagement extends Component {
//     static navigationOptions = {
//       title: 'User Management',
//       headerStyle: {
//         backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headertitleStyle: {
//         fontWeight: 'bold',
//       }
//     }

//     render() {
//        const name = this.props.navigation.getParam('name', 'Ann');
//        const age = this.props.navigation.getParam('age', 'not determined');
  
//       return (
//         <View style={{ flex: 1}}>
//         <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>    
//             <View style={{ flexDirection: 'row', marginTop: 50, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 35, padding: 5 }}>


//                 <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}> 

//  {/* #1 User List */}
//         <TouchableOpacity  
//             style={{ width: '100%', alignItems: 'center' }}
//             onPress = { () => this.props.navigation.navigate('UserList', { name: 'Ann', age: 28 })}>
              
//               <View  style={{   width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
//                 <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/users1.png')} />
//             </View>

//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> User List </Text>

//         </TouchableOpacity>
//         </View>


//  {/* #2 Registration */}
//         <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}>
       
//             <TouchableOpacity  
//             style={{ width: '100%', alignItems: 'center' }}
//             onPress = { () => this.props.navigation.navigate('Registration', { name: 'Ann', age: 28 })}>
              
//               <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
//                 <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/reg1.jpg')} />
//               </View>

//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> Registration  </Text>

//             </TouchableOpacity>
//         </View>


//  {/* #3 User's Terminal Access  */}
//           <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 20 }}>

//             <TouchableOpacity  
//                 style={{ width: '100%', alignItems: 'center' }}
//                 onPress = { () => this.props.navigation.navigate('UserTerminalAccess', { name: 'Ann', age: 28 })}>
                  
//                   <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                    
//                     <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/trans5.png')} />

//                 </View>

//                   <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10, alignItems: 'center' }}> Terminal Access  </Text>

//             </TouchableOpacity>
//           </View>
//         </View>
//         </ScrollView>
//         </View>
//       )
//     }
// }
  
//  const styles = StyleSheet.create({
//     container: {
//       //paddingTop: 10,
//       alignItems: 'center',
//       elevation: 5,
//       position:'relative'
//     },
//     button: {
//       marginBottom: 30,
//        elevation: 15,
//     borderRadius: 10,
//       height: 80,
//       width: 350,
     
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
