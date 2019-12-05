
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableNativeFeedback
} from 'react-native';

import provincedata from '../../db/provincedb';


export default class Provinces extends Component {
    static navigationOptions = {
      title: 'Province List',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    state = {
        data: provincedata
    }

  
    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
      return (
        <View style={ styles.container}>
        <FlatList 
            style={{ width: '100%' }}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
                return (
                    <TouchableNativeFeedback 
                    //onPress={() => 
                    
                    //item should match from the item of renderItem above
                    //this.props.navigation.navigate('', {...item})}
                    >
                        <View 
                            style={{
                                marginVertical: 5, 
                                marginHorizontal: 15, 
                                //borderRadius: 15,
                                backgroundColor: '#ced6eo',
                                elevation: 15,
                                paddingTop: 30,
                            }}>
                            <View 
                                style={{ 
                                    padding:25,    
                                    backgroundColor: '#ecf0f1',
                                    // borderTopLeftRadius: 15,
                                    // borderTopRightRadius: 15
                                    borderRadius: 10
                                }}>
                                <Text style={{ 
                                    fontSize: 24, 
                                    fontWeight: 'bold' 
                                }}>
                                    {item.provincecode}
                                </Text>
                                <View  
                                    style={{ 
                                        //flexDirection: 'row', 
                                        justifyContent: 'space-between' 
                                        }}>
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            //alignItems: 'baseline' 
                                            }}>
                                        <Text style={{
                                             fontSize: 15, 
                                             fontWeight: 'bold' }}> Description:  </Text>
                                        <Text> { item.description } </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row', 
                                        alignItems: 'baseline',
                                        //justifyContent: 'space-between'
                                    }}>
                                        <Text style={{
                                             fontSize: 15, 
                                             fontWeight: 'bold' 
                                    }}> Region:  </Text>
                                        <Text> { item.region } </Text>
                                    </View>
                                </View>
                               
                            </View>
                    </View>
                </TouchableNativeFeedback>
                )
            }}
        />
    </View>


      )
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#34495e',
        
      },
      title: {
        color: '#ffff',
        fontSize: 40
      },
    button: {
      marginBottom: 30,
      height: 80,
      width: 350,
      elevation: 1,
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