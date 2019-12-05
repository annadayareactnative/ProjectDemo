
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

import regiondata from '../../db/regiondb';


export default class Regions extends Component {
    static navigationOptions = {
      title: 'Regions',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headertitleStyle: {
        fontWeight: 'bold',
      }
    }

    state = {
        data: regiondata
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
                    // onPress={() => 
                    // this.props.navigation.navigate('', {...item})}
                    style={{ paddingTop: 30}}
                    >
 
                        <View 
                            style={{
                                // marginVertical: 5, 
                                marginHorizontal: 15, 
                                paddingTop: 30,
                                padding: 5,
                               // borderRadius: 25,
                                backgroundColor: '#ced6eo',
                                elevation: 15,
                                //marginBottom: 10
                               
                            }}>
                            <View 
                                style={{ 
                                    padding:15,    
                                    backgroundColor: '#ecf0f1',
                                    // borderTopLeftRadius: 15,
                                    // borderTopRightRadius: 15,
                                    height: 120,
                                    borderRadius: 10
                                }}>
                                <Text style={{ 
                                    fontSize: 24, 
                                    fontWeight: 'bold' 
                                }}>
                                    {item.regioncode}
                                </Text>
                                <View  
                                    style={{ 
                                        //flexDirection: 'row', 
                                        //justifyContent: 'space-between' 
                                        }}>
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            //alignItems: 'baseline' 
                                            }}>
                                        <Text  style={{ fontSize: 18, paddingTop: 10, fontWeight: 'bold' }}> 
                                                Description:  </Text>
                                        <Text  style={{ fontSize: 13, paddingTop: 15 }}> { item.description } </Text>
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

  
  });