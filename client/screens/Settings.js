
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, 
  ScrollView    

} from 'react-native';

export default class Settings extends Component {
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
      <View style={{ flex: 1, paddingTop: 50}}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>    
          <View style={{ flexDirection: 'row', marginTop: 70, paddingBottom: 14, flexWrap: 'wrap', marginHorizontal: 70, padding: 5 }}>

              <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}> 

   {/* #1 Regions List */}
   <TouchableOpacity  
        style={{ width: '40%', alignItems: 'center' }}
        onPress = { () => this.props.navigation.navigate('Regions', { name: 'Ann', age: 28 })}>
            <View  style={{ width: 130, height: 130, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
                <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/regions1.png')} />
            </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5, alignItems: 'center' }}> Regions  </Text>

    </TouchableOpacity>




   {/* #2 Provinces List */}
   <TouchableOpacity  
style={{ width: '40%', alignItems: 'center' }}
onPress = { () => this.props.navigation.navigate('Provinces', { name: 'Ann', age: 28 })}>
  <View  style={{ width: 130, height: 130, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
    <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/settings4.jpg')} />
</View>
  <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5, alignItems: 'center' }}> Provinces  </Text>

</TouchableOpacity>
</View>





<View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>
        {/* #3 Cities List */}
        <TouchableOpacity  
style={{ width: '40%', alignItems: 'center' }}
onPress = { () => this.props.navigation.navigate('Cities', { name: 'Ann', age: 28 })}>
  <View  style={{ width: 130, height: 130, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
    <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/settings5.png')} />
</View>
  <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5, alignItems: 'center' }}> Cities  </Text>

</TouchableOpacity>




    {/* #4 Barangays List */}
    <TouchableOpacity  
style={{ width: '40%', alignItems: 'center' }}
onPress = { () => this.props.navigation.navigate('Barangays', { name: 'Ann', age: 28 })}>
  <View  style={{ width: 130, height: 130, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'  }}>
    <Image style={{ width: 110, height: 110 }} source={require('../assets/icon/settings6.png')} />
</View>
  <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5, alignItems: 'center' }}> Barangays  </Text>

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







