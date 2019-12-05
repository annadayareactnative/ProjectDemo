
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';



import PrintExample from './PrintExample';

export default class Reprint extends Component {
    static navigationOptions = {
      title: 'RePrint',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    testPrint() {
      PrintExample.PrintSomething();
    }

    submit() {
      let collection={}
      collection.cardNumber = this.state.cardNumber

      this.sendCardNumber();
      // console.warn(collection);
      alert("card number saved: " + collection.cardNumber);
    }
  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
      return (
        <View stye={{flex: 1, justifyContent: 'center' }}>
            <View>
                <Text style={{ fontSize: 30, padding: 10, textAlign: 'center', marginTop: 60, fontWeight: 'bold' }}>Reprint Transaction </Text>
            </View>
            <View style={styles.container}>
            <Text style={{ paddingTop: 30, fontSize: 21, }}> Enter Reference Number: </Text>
            <TextInput
                    placeholder= 'Reference Number'
                    style={{ justifyContent: 'center', borderWidth: 0.5,borderColor: '#3c4858',width: '85%', margin: 15, padding: 10}}
                   // onChangeText={(text) => this.updateValue(text, 'cardNumber')}
                />
             {/* <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => this.submit()} 
                    >
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
             */}
                
               <TouchableOpacity 
                    onPress={this.testPrint}
                    title= "Print"
                    style={{ backgroundColor: '#1d91ff', alignItems: 'center', height: 40,width: '80%',borderRadius: 10,marginTop: 40,}} 
               
               ><Text style={{ fontSize: 21, color: '#fff', padding: 5} }>Print</Text></TouchableOpacity>
            </View>

          
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
      height: 80,
      width: '80%',
      elevation: 1,
     // alignItems: 'center',
      backgroundColor: '#2196F3' //2196F3
    },
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#fff',
      marginVertical: 10
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 21,
      paddingTop: 20,
      color: 'white'
    },
  
  });