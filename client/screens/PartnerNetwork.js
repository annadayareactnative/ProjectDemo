
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity, 

} from 'react-native';


export default class PartnerNetwork extends Component {
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

    render() {
       const name = this.props.navigation.getParam('name', 'Ann');
       const age = this.props.navigation.getParam('age', 'not determined');
  
    return (

      <View style={{ flex: 1}}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>    
          <View style={{ flexDirection: 'row', marginTop: 70, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 40, padding: 5 }}>


              <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 30 }}> 

              {/* #1 Hospital List */}
              <TouchableOpacity  
              style={{ width: '100%', alignItems: 'center' }}
              onPress = { () => this.props.navigation.navigate('HospitalList', { name: 'Ann', age: 28 })}>
                <View  style={{ width: 130, height: 170, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                  <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/partner2.png')} />
              </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, alignItems: 'center' }}> Hospital List  </Text>

              </TouchableOpacity>
              </View>


              {/* #2 Hospital Departments */}
              <TouchableOpacity  
                  style={{ width: '100%', alignItems: 'center' }}
                  onPress = { () => this.props.navigation.navigate('HospitalDepartment', { name: 'Ann', age: 28 })}>
                      <View  style={{ width: 130, height: 170, borderWidth: 2, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                        <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/hospdep3.png')} />
                      </View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5, alignItems: 'center' }}> Hospital Departments  </Text>

              </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        )
    }
}

