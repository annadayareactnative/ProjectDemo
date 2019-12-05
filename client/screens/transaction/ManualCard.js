
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';

import TouchHigh from '../../components/TouchableHightlight'


export default class ManualCard extends Component {
    static navigationOptions = {
      title: 'ManualCard',
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
      this.state = ({
        cardNumber: '',
        apiResponse: ""
      });
    }

    updateValue( text, field ){
      if(field == 'cardNumber'){
        this.setState({
          cardNumber: text,
          modalVisible: false
        })
      }
    }

    submit() {
      let collection={}
      collection.cardNumber = this.state.cardNumber

      this.sendCardNumber();
      // console.warn(collection);
      alert("card number saved: " + collection.cardNumber);
    }
    
    callAPI() {
        fetch("http://192.168.18.135:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(function(error) {
            console.log("Api call error");
            alert(error.message);
        });
    }

    sendCardNumber() {
      const enteredNumber = this.state.cardNumber
      fetch("http://192.168.18.135:9000/transactionsAPI",{
        method: 'POST',
        body: JSON.stringify({
          cardNumber: enteredNumber,
          transactionType: 'TransactionEntry',
          inputType: 'Manual'
        }),
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response){
        return response.json()
      })
      .then(function(body){
        console.log(body);
        alert("card number sent: " + enteredNumber)
      })
      .catch(function(error) {
        console.log(error.message);
        alert(error.message);
    });
    }
    
    componentDidMount() {
      this.callAPI();
    }
    
  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');

       <p className="App-intro">;</p>
  
       return (
        <View>
            <View style={styles.container}>
            <Text style={{ fontSize: 32, paddingTop: 50, fontWeight: 'bold'}}> Manual Card</Text>
            <Text> {this.state.apiResponse} </Text>
              <View>
                <Text style={{ fontSize: 28,textAlign:'center', paddingTop: 100  }}> Card Number: </Text>
              </View>
                <TextInput
                    placeholder= 'Enter Card Number'
                    style={{ justifyContent: 'center', borderWidth: 0.5,borderColor: '#3c4858',width: '85%', margin: 15, padding: 10}}
                    onChangeText={(text) => this.updateValue(text, 'cardNumber')}
                />

                <TouchableOpacity 
                    style={styles.btn}
                    onPress = {() => this.submit()} 
                    >
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>

                <TouchableOpacity  
                onPress = { () => this.props.navigation.navigate('QRScanner', { qrType: 'ManualCard', transactionType: 'TransactionEntry', name: 'Ann', age: 28 })}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Use QR Code </Text>
                </View>
              </TouchableOpacity>

              </View>
        </View>
       
      )
    }
}
  
const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
    alignItems: 'center',
    elevation: 5,
    position:'relative'
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
  button: {
    backgroundColor: '#0d95fd',
    height: 40,
    width:350,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
   
    paddingVertical: 13
  },
  btn: {
    height: 40,
    width:350,
    marginTop: 40,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f75a2b',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center'
  }

});