

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback,
  Animated,
  Alert
} from 'react-native';




export default class HomeScreen extends Component {

    
    proceedLogout = () =>{
        const refreshToken = this.props.navigation.getParam('refreshToken', 'invalid token');

        Alert.alert(
            'Alert',
            'Are you sure you want to logout?',
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Yes', 
                onPress: () => {
                    fetch("http://192.168.18.135:9000/profileAPI/logout",{
                        method: 'DELETE',
                        body: JSON.stringify({
                            token: refreshToken,
                        }),
                        headers: {"Content-Type": "application/json"}
                    })
                        .then(res => res.text())
                        .then(this.backToLogin)
                        .catch(function(error) {
                        console.log("Api call error");
                        alert(error.message);
                    });
                }
            }],
            {cancelable: false},
          );   
    }

    logoutConfirmation() {
        Alert.alert(
            'Alert',
            'Are you sure you want to logout?',
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Yes', 
                onPress: this.proceedLogout
            }],
            {cancelable: false},
          );
    }

    backToLogin = () => {
        this.props.navigation.navigate('Login', { name: 'Ann', age: 28 })
    }

    render() {
      return  (
            // <View style={styles.container}>
            <View style={{ flex: 1}}>
                <View style={{  backgroundColor: '#fff'}}>    

                {/* <TouchableOpacity  
                style={{ width: '30%', marginLeft: 340, marginTop: 20, marginBottom: 0 }}
                onPress = { () => this.props.navigation.navigate('Transaction', { name: 'Ann', age: 28 })}>
                    
                <View  style={{ width: 60, height: 30, borderRadius: 18  }}>
                    <Image style={{ width: 30, height: 30 }} source={require('../assets/icon/logout3.png')} />
                </View>
                
                
            </TouchableOpacity> */}
                    
                    <View style={{ flexDirection: 'row', marginTop: 26, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 38, padding: 5 }}>

           

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18, marginTop: 0 }}> 

{/* #1 TRANSACTION */} 
            <TouchableOpacity  
                style={{ width: '50%', alignItems: 'center' }}
                onPress = { () => this.props.navigation.navigate('Transaction', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/trans3.png')} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Transaction </Text>
                
            </TouchableOpacity>


{/* #2 USER MANAGEMENT */}
        <TouchableOpacity  
            style={{ width: '50%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('UserManagement', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/user1.png')} />
                </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> User Management </Text>

        </TouchableOpacity>
        </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>

{/* #3 PARTNER NETWORK */}
            <TouchableOpacity  
                style={{ width: '50%', alignItems: 'center' }}
                onPress = { () => this.props.navigation.navigate('PartnerNetwork', { name: 'Ann', age: 28 })}>
                    <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                            <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/partner1.png')} />
                    </View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Partner Network </Text>
            </TouchableOpacity>
           

{/* #4 TERMINAL */}
        <TouchableOpacity  
            style={{ width: '50%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('TerminalList', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                        <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/trans1.png')} />
                </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Terminal </Text>
        </TouchableOpacity>
        </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>


{/* #5 SETTINGS */}
            <TouchableOpacity  
                style={{ width: '50%', alignItems: 'center' }}
                onPress = { () => this.props.navigation.navigate('Settings', { name: 'Ann', age: 28 })}>
                    <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                        <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/settings7.png')} />
                    </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Branch </Text>
            </TouchableOpacity>



{/* #6  PROFILE */}
        <TouchableOpacity  
            style={{ width: '50%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('Profile', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/profile5.jpg')} />
                </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Profile </Text>
        </TouchableOpacity>
        </View>


        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>



        {/* #6  Instructions */}
        <TouchableOpacity  
            style={{ width: '50%', alignItems: 'center' }}
            onPress = { () => this.props.navigation.navigate('Instructions', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/how1.jpg')} />
                </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Instructions </Text>
        </TouchableOpacity>

        

        {/* #8  Logout */}
        <TouchableOpacity  
            style={{ width: '50%', alignItems: 'center' }}
            onPress = { this.proceedLogout }>
            {/* onPress = { () => this.props.navigation.navigate('Logout', { name: 'Ann', age: 28 })}> */}
                <View  style={{ width: 100, height: 100, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                    <Image style={{ width: 70, height: 70 }} source={require('../assets/icon/logout1.png')} />
                </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}> Logout </Text>
        </TouchableOpacity>

                    </View>

                </View>

                    <View>
                        <Text style={{ textAlign: 'center', paddingTop: 40, fontWeight: 'bold'}}>Veridata TVS Android 0.1</Text>
                    </View>
            </View>
        </View>
        );
    }
  }



  const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position:'relative',
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 30,
    height: 80,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#2196F3' //2196F3
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 21,
    paddingTop: 20,
    color: 'white'
  },

});