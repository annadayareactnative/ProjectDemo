




import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, 
  ScrollView
} from 'react-native';


export default class Transaction extends Component {
    static navigationOptions = {
      title: 'Transaction',
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
                    <View style={{ flexDirection: 'row', marginTop: 40, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 70, padding: 5 }}>



{/* #1 Manual Card */}
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 25 }}> 

                  <TouchableOpacity  
                      style={{ width: '100%', alignItems: 'center' }}
                      onPress = { () => this.props.navigation.navigate('ManualCard', { name: 'Ann', age: 28 })}>

                        <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' , width: '100%'  }}>
                          <Image style={{ width: 130, height: 130 }} source={require('../assets/icon/manual1.png')} />
                      </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 8, alignItems: 'center', width: '100%' }}> Manual Card  </Text>

                  </TouchableOpacity>
                  </View>



 {/* #2 RePrint */}

                  <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 25 }}>
      
                  <TouchableOpacity  
                      style={{ width: '100%', alignItems: 'center' }}
                      onPress = { () => this.props.navigation.navigate('RePrint', { name: 'Ann', age: 28 })}>

                        <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' , width: '100%' }}>

                            <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/reprint1.png')} />
                      </View>

                     <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 8 }}> RePrint  </Text>

                  </TouchableOpacity>
                  </View>



  {/* #3 Void Transaction  */}
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 25 }}>
                
                  <TouchableOpacity  
                      style={{ width: '100%', alignItems: 'center' }}
                      onPress = { () => this.props.navigation.navigate('VoidTransaction', { name: 'Ann', age: 28 })}>
                        <View  style={{ width: 130, height: 150, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                            <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/void2.png')} />
                        </View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 8 }}> Void Transaction  </Text>

                  </TouchableOpacity>
                  </View>


                      
                  </View>
              </ScrollView>
         </View>
       )
     }
 }



































// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   Button,
//   TouchableHighlight, 
//   TouchableOpacity, 
//   TouchableNativeFeedback, 
//   TouchableWithoutFeedback,
// } from 'react-native';


// export default class Transaction extends Component {
//     static navigationOptions = {
//       title: 'Transaction',
//       headerStyle: {
//         backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headertitleStyle: {
//         fontWeight: 'bold',
//       }
//     }
  
//     render() {
//         const name = this.props.navigation.getParam('name', 'Ann');
//         const age = this.props.navigation.getParam('age', 'not determined');
   
//        return (
//          <View stye={{flex: 1, justifyContent: 'center' }}>
//              <View>
//                  <Text style={{ fontSize: 30, padding: 10, textAlign: 'center', marginBottom: 50 }}>This is the content of the Transaction Module</Text>
//              </View>
//         <View style={styles.container}>


//  {/* #1 Manual Card */}
//             <TouchableOpacity  
//                 onPress = { () => this.props.navigation.navigate('ManualCard', { name: 'Ann', age: 28 })}>
//                 <View style={styles.button}>
//                     <Text style={styles.buttonText}> Manual Card </Text>
//                 </View>
//             </TouchableOpacity>


// {/* #2 RePrint */}
//             <TouchableOpacity  
//                 style={{ }}
//                 onPress = { () => this.props.navigation.navigate('RePrint', { name: 'Ann', age: 28 })}>
//                 <View style={styles.button}>
//                     <Text style={styles.buttonText}> RePrint </Text>
//                 </View>
//             </TouchableOpacity>


//  {/* #3 Void Transaction  */}
//             <TouchableNativeFeedback
//                 onPress = { () => this.props.navigation.navigate('VoidTransaction', { name: 'Ann', age: 28 })}
//                 background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}> Void Transaction {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
//                     </View>
//             </TouchableNativeFeedback>

//             </View>


 
//              <View style={{margin: 20, top: 400 }}>
//                  <Button
//                      title = 'Here for more details'
//                      onPress = { () => this.props.navigation.navigate('Details')}
//                      />
//                  </View>
 
//          </View>
//        )
//      }
//  }

//  const styles = StyleSheet.create({
//     container: {
//       alignItems: 'center',
//       elevation: 10,
//       position:'relative'
//     },
//     button: {
//       marginBottom: 30,
//        elevation: 15,
//     borderRadius: 10,
//       height: 80,
//       width: 350,
//       backgroundColor: '#2196F3' //2196F3
//     },
//     buttonText: {
//       textAlign: 'center',
//       fontSize: 21,
//       paddingTop: 20,
//       color: 'white'
//     },
// });
   