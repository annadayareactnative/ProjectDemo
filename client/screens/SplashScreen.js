import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Animated,
  Easing
} from 'react-native';



export default class SplashScreen extends Component {

    constructor() {
        super();
        this.springValue = new Animated.Value(0.3)
        this.state = {
            loadingProgress: new Animated.Value(0),
          animating: false,
          align: 'center',
          alignsecond: false,
        };

        setTimeout(
            () =>
              this.setState({ align: 'flex-start' }, function() {
                this.setState({
                  alignsecond: true,
                });
              }),
            7000
          );
    }

    spring () {
      this.springValue.setValue(0.3)
      Animated.spring(
        this.springValue,
        {
          toValue: 1,
          friction: 1
        }
      ).start()
    }

    

  
    render() {
      Animated.spring(
        3,
        {
          toValue: 1,
          friction: 1
        }
    )
        
        const viewStyles = [
          styles.container,
          { backgroundColor: 'orange' }
        ];
        const textStyles = {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        };
    
        return (
            <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: this.state.align,
              marginHorizontal: 40,
            }}>
            <Animated.Image
              source={{
                uri:
                  'https://media.licdn.com/dms/image/C510BAQEPzk7b18heiw/company-logo_200_200/0?e=2159024400&v=beta&t=Gm3EzggTDMu1CX02KIVipsEq9CWwKYmdTuLWFYaW_jI',
              }}
              style={{ width: 300, height: 200 }}
             //style={{ width: 300, height: 200, transform: [{scale: this.springValue}] }}
            />
            {!this.state.alignsecond ? null : (
              <View style={{ margin: 10 }}>
                <Text
                  style={{ color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
                 TVS Android 0.1
                </Text>
              </View>
            )}
          </View>
        );
      }
    }
    
const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        color: '#fff',
        height: '100%'
      },
      button: {
       
      },
      buttonText: {
      
      },
});