

import React, { Component } from 'react';

import {
    Platform,
    CheckBox,
    StyleSheet, 
    Text,
    Image,
    View,
    TouchableOpacity,
    Vibration,
    TextInput
} from 'react-native';

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';

import SplashScreen from '../screens/SplashScreen';

import styled from 'styled-components';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.myTextInput = React.createRef();
        this.state = {
            isLoading: true,
            username: '',
            password: '',
            accessToken: '',
            refreshToken: ''
        }
    }

    updateValue(text, field) 
        {
            //console.warn(text)
            if(field == 'username') {
                this.setState({
                    username: text
                   
                })
            }
            else if (field == 'password') 
            {
                this.setState({
                    password: text
                })
            }
        }
    
        submit() {
            // let collection = {}
            // collection.username = this.state.username,
            // collection.password = this.state.password,
            //console.warn(collection)

            //this.props.navigation.navigate('Home', { name: 'Ann', age: 28 })
    
            // var url = 'https://example.com/tvs';
           
            // fetch(url, {
            //     method: 'POST',
            //     body: JSON.stringify(collection),
            //     headers: new Headers({
            //         'Content-Type': 'application/json'
            //     })
            // }).then(res => res.json())
            // .catch(error => console.error('Error', error))
            // // .then(response => console.log('Success', response));
            // .then(response => console.log('Success',
            //     () => this.props.navigation.navigate('Home', { name: 'Ann', age: 28 }))
            // );
            
            this.login()
            //console.log(this.state.logResult)
        }

        login= () => {
            const username = this.state.username
            const password = this.state.password

            fetch("http://192.168.18.135:9000/profileAPI/login",{
              method: 'POST',
              body: JSON.stringify({
                username: username,
                password: password,
              }),
              headers: {"Content-Type": "application/json"}
            })
            .then(res => res.json())
            .then(res => {
                
                this.setState({
                    accessToken : res.accessToken,
                    refreshToken: res.refreshToken
                })
                if (res.access == 'valid') {
                    this.props.navigation.navigate('Home', { name: 'Ann', age: 28 })
                    console.warn(res.accessToken, res.refreshToken)
                } else {
                    alert('Invalid Username or Password')
                }
            })
            .catch(function(error) {
              console.log(error.message);
              alert(error.message);
          });
          }
          performTimeConsumingTask = async() => {
            return new Promise((resolve) =>
              setTimeout(
                () => { resolve('result') },
                3000
              )
            )
          }
    
        async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        
        if (data !== null) {
            this.setState({ isLoading: false });
            }
        }

        // renderPasswordAccessory() {
        //     let { secureTextEntry } = this.state;
      
        //     let name = secureTextEntry?
        //       'visibility':
        //       'visibility-off';
      
        //     return (
        //       <MaterialIcon
        //         size={24}
        //         name={name}
        //         enablesReturnKeyAutomatically={true}
        //         color={TextField.defaultProps.baseColor}
        //         onPress={this.onAccessoryPress}
        //         suppressHighlighting={true}
        //       />
        //     );
        //   }
      

    

    render() {

        if (this.state.isLoading) {
            return <SplashScreen />;
          }

        return (
            <View style={ styles.container }>
                {/* <Text style={{ fontSize: 40, paddingBottom: 40, color: 'black', alignItems: 'center', textAlign: 'center' }}>Veridata TVS</Text> */}

                {/* <Image style={{ width: 130, height: 130, marginLeft: 120, marginTop: 65}} source={require('../assets/icon/user.png')} /> */}

                <Image style={{ width: 180, height: 180, marginLeft: 100, marginTop: 10}} source={require('../assets/icon/a.png')} />

                <Text style={{ fontSize: 25, paddingTop: 40, paddingBottom: 15,  color: 'black', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>Transaction Verification System</Text>

                {/* <Text style={{ fontSize: 21,  color: 'black', alignItems: 'center', textAlign: 'center', paddingBottom: 40,  }}>Login to your account</Text> */}

                <TextField
                   //ref={this.myTextInput}
                   autoCorrect={false}
                    placeholder="Username"
                    secureTextEntry={true}
                    autocomplete="off" 
                    autocorrect="off" 
                    autocapitalize="off" 
                    spellcheck="false"
                    style={styles.inputStyle}
                    onChangeText={(text) => this.updateValue(text, 'username')}
                />

                <TextField
                    secureTextEntry={true}
                    autocomplete="off" 
                    autocorrect="off" 
                    autocapitalize="off" 
                    spellcheck="false"
                    placeholder="Password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    clearTextOnFocus={true}
                    clearButtonMode="always"
                    type="password"
                    style={styles.inputStyle}
                    onChangeText={(text) => this.updateValue(text, 'password')}
                    title='Update your password regularly'
                    maxLength={30}
                    characterRestriction={20}
                    //renderRightAccessory={this.renderPasswordAccessory}
                />

                <TouchableOpacity 
                    onPress={() => this.submit()}
                    
                    style={styles.btn}
                    >

                    <Text style={{ fontSize: 21, color: '#fff'} }>Login</Text>
                </TouchableOpacity>



                <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 20, fontWeight: 'bold' }}>TVS Android 0.1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
       // backgroundColor: '#1d91ff',
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20
    },
    inputStyle: {
       // backgroundColor: '#fff',
        marginBottom: 15,
        fontSize: 21,
        paddingLeft: 15,
        borderRadius: 20,
       
    },
    btn: {
        backgroundColor: '#1d91ff',
        height: 40,
        color: '#dedede',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '90%',
        marginLeft: '5%',
        borderRadius: 10,
        //marginLeft: 20,
        
    
    },
    btnText: {
        backgroundColor: '#ECEEF1',
       // paddingBottom: 10,
        //paddingTop: 10,
        fontSize: 24,
        marginTop: 25,
       // color: '#26AE90',
        textAlign: 'center',
        //fontWeight: 'bold',
        
    },

    btnTextSignUp: {
        fontSize:15,
        color: '#fff',
        marginTop: 70,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    error: {
        borderWidth: 3,
        borderColor: 'red'
    },



})













// import React, { Component } from 'react';

// import {
//     Platform,
//     CheckBox,
//     StyleSheet, 
//     Text,
//     Image,
//     View,
//     TouchableOpacity,
//     Vibration,
//     TextInput
// } from 'react-native';

// export default class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             nameValidate: true,
//             password: '',
//             passwordValidate: true,
//         }
//     }

//     // updateValue(text, field) 
//     // {
//     //     //console.warn(text)
//     //     if(field == 'username') {
//     //         this.setState({
//     //             username: text
               
//     //         })
//     //     }
//     //     else if (field == 'password') 
//     //     {
//     //         this.setState({
//     //             password: text
//     //         })
//     //     }
//     // }

//     validate(text,type) {
       
//         let alph = /^[a-zA-Z]+$/
//         num = /^[0-9]+$/
//         if(type == 'username') {
//             if(alph.test(text)) {
//               //  console.warn('text is correct')
//               this.setState({
//                   nameValidate: true
//               })
//             }
//             else{
//                 this.setState({
//                     nameValidate: false
//                 })
//             }
//         } else if( type == 'password') {
//            if  (alph.test(password)) {
//             //  console.warn('text is correct')
//             this.setState({
//                 nameValidate: true
//             })
//           }
//           else{
//               this.setState({
//                   nameValidate: false
//               })
//           }
//         }
//     }

//     render() {
//         return (
//             <View style={ styles.container }>
//                 <Text style={{ fontSize: 32, paddingBottom: 40, color: '#fff' }}>Veridata </Text>
//                 <Text style={{ fontSize: 30, paddingTop: 40, paddingBottom: 40, color: '#fff' }}>LOGIN</Text>

//                 <TextInput
//                     placeholder="Username"
//                     style={[styles.inputStyle, !this.state.nameValidate? styles.error:null ]}
//                     onChangeText={(text) => this.validate(text, 'username')}
//                 />

//                 <TextInput
//                     placeholder="Password"
//                     style={[styles.inputStyle, !this.state.passwordValidate? styles.error:null ]}
//                     onChangeText={(password) => this.validate(password, 'password')}
//                 />

//                 <TouchableOpacity 
//                     onPress={() => this.submit()}
//                     style={styles.btn}
//                     >

//                     <Text style={{ fontSize: 21} }>Login</Text>
//                 </TouchableOpacity>



//                 <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center', paddingTop: 150 }}>TVS Android 0.1</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         //backgroundColor: '#F5FCFF',
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#1d91ff',
//         flex: 1,
//         paddingRight: 20,
//         paddingLeft: 20
//     },
//     inputStyle: {
//         backgroundColor: '#fff',
//         marginBottom: 15,
//         fontSize: 21,
//         paddingLeft: 15,
//         borderRadius: 20
//     },
//     btn: {
//         backgroundColor: '#dedede',
//         height: 40,
//         color: '#dedede',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 40,
//         width: 300,
//         borderRadius: 10,
//         marginLeft: 20,
        
    
//     },
//     btnText: {
//         backgroundColor: '#ECEEF1',
//        // paddingBottom: 10,
//         //paddingTop: 10,
//         fontSize: 24,
//         marginTop: 25,
//        // color: '#26AE90',
//         textAlign: 'center',
//         //fontWeight: 'bold',
        
//     },

//     btnTextSignUp: {
//         fontSize:15,
//         color: '#fff',
//         marginTop: 70,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     error: {
//         borderWidth: 3,
//         borderColor: 'red'
//     }
// })











// import React, { Component } from 'react';

// import {
//     StyleSheet, 
//     Text,
//     Image,
//     View,
//     TouchableOpacity,
//     Vibration,
//     TextInput
// } from 'react-native';

// export default class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     updateValue(text, field) 
//     {
//         //console.warn(text)
//         if(field == 'username') {
//             this.setState({
//                 username: text
               
//             })
//         }
//         else if (field == 'password') 
//         {
//             this.setState({
//                 password: text
//             })
//         }
//     }

//     submit() {
//         let collection = {}
//         collection.username = this.state.username,
//         collection.password = this.state.password,
//         console.warn(collection)

//         var url = 'veridata/url';

//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(collection),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(res => res.json())
//         .catch(error => console.error('Error', error))
//         .then(response => console.log('Success', response));



//     }

//     render() {
//         return (
//             <View style={{alignItems: "center"}}>
//                 <Text style={{ fontSize: 30, paddingTop: 40, paddingBottom: 40 }}>LOGIN PAGE</Text>
//                 <TextInput
//                     placeholder="Username"
//                     style={styles.input}
//                     onChangeText={(text) => this.updateValue(text, 'username')}
//                 />

//                 <TextInput
//                     placeholder="Password"
//                     style={styles.input}
//                     onChangeText={(text) => this.updateValue(text, 'password')}
//                 />

//                 <TouchableOpacity 
//                     onPress={() => this.submit()}
//                     style={styles.btn}
//                     >

//                     <Text>Login</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#F5FCFF',
//         flex: 1,
//         justifyContent: 'center'
//     },
//     btn: {
//         backgroundColor: 'red',
//         height: 40,
//         color: '#fff',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 40,
//         width: 100
    
//     }
// })