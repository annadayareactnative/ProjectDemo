// 'use strict';

// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking,
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

// export default class QRScanner extends Component {
//   onSuccess = (e) => {
//     Linking
//       .openURL(e.data)
//       .catch(err => console.error('An error occured', err));
//   }

//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         //flashMode={QRCodeScanner.Constants.FlashMode.torch}      
//         topContent={
//           <Text style={styles.centerText}>
//             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });

// // AppRegistry.registerComponent('default', () => QRScanner);





import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  absoluteFill
} from 'react-native';

import { RNCamera } from 'react-native-camera'

const { width } = Dimensions.get('screen')


export default class QRScanner extends Component {
    static navigationOptions = {
      title: 'QRScanner',
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
      this.camera = null;
      this.barcodeCodes = [];
  
      this.state = ({
        camera: {
          type: RNCamera.Constants.Type.back,
          flashMode: RNCamera.Constants.FlashMode.auto,
        },
        cardNumber: '',
        scan: false
      });
    }

    onBarCodeRead(scanResult) {
      //console.warn(scanResult.type);
      // console.warn("One" + scanResult.data);

      //console.warn(this.state.scan);

      if(this.state.scan == true ){
        alert(scanResult.data);

        if (scanResult.data != null) {

          this.setState({
            cardNumber: scanResult.data,
            modalVisible: false,
            scan: false
          })

          if (!this.barcodeCodes.includes(scanResult.data)) {
            this.barcodeCodes.push(scanResult.data);
            //console.warn('onBarCodeRead call');
          }
          //console.warn(this.state.cardNumber);
          // console.warn("Two " + scanResult.data);
          //this.setUrl();
          this.sendCardNumber(scanResult.data);
        }
        return;
      }
      else {
        alert('Click on Start/ReScan Button to Activate');
      }
    }

    logTransaction = (data, actionType) => {
      console.warn('log transaction here ' + data + ' via ' + actionType)

      fetch( "http://192.168.18.135:9000/logsAPI/logTransaction" ,{
        method: 'POST',
        body: JSON.stringify({
          cardNumber: data,
          action: actionType
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
    
    sendCardNumber = (e) => {
      const enteredNumber = this.state.cardNumber;
      const qrType = this.props.navigation.getParam('qrType', 'others');

      switch (qrType) {
        case "ManualCard":   
          var linkURL = "http://192.168.18.135:9000/transactionsAPI/getRecord";
          //console.warn( "ManualCard Start");
          break;
        case "VoidTransaction":   
          var linkURL = "http://192.168.18.135:9000/transactionsAPI/getRecord";
          //console.warn( "ManualCard Start");
          break;
        case "Registration": 
          var linkURL = "http://192.168.18.135:9000/usersmngtAPI/getRecord";
          //console.warn( "Registration Start");
          break;
        case "TerminalAccess": 
          var linkURL = "http://192.168.18.135:9000/usersmngtAPI/getRecord";
          //console.warn( "Registration Start");
          break;
        default:             
          console.warn( "URL Not Set");
      }

      const transType = this.props.navigation.getParam('transactionType', 'others');

      fetch( linkURL ,{
        method: 'POST',
        body: JSON.stringify({
          cardNumber: e,
          transactionType: transType,
          inputType: 'Scanned'
        }),
        headers: {"Content-Type": "application/json"}
      })
      .then(res => res.json())
      .then(res => {    
        if (res != null || res != 'undefined') {
            console.warn('transactionType: ' + res.transactionType, 'inputType: '+ res.inputType, 'name: '+ res.name)
            this.logTransaction(e, qrType)
        } else {
            alert('No data found')
        }
    })
    .catch(function(error) {
      console.warn(error.message);
      alert(error.message);
  });
    }

    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            cardNumber: ''
        })

        //console.warn(this.state.scan);
    }
  
    async takePicture() {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
      }
    }
  
    async requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'Allow this app to access your Camera?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission to use camera');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  
    pendingView() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Waiting</Text>
        </View>
      );
    }

    render() {
      const leftTop = {
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderColor: 'white'
      };
      const leftBottom = {
        borderLeftWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'white'
      };
      const rightTop = {
        borderRightWidth: 3,
        borderTopWidth: 3,
        borderColor: 'white'
      };
      const rightBottom = {
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'white'
      };


      return (
        <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            //permissionDialogTitle={'Permission to use camera'}
            //permissionDialogMessage={'We need your permission to use your camera phone'}
            
            style={styles.preview}
            type={this.state.camera.type}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
          {/* <Text style={styles.scanScreenMessage}>Enter Card Number:</Text> */}
          <Text style={{ color: "white", fontSize: 30, padding: 10, textAlign: 'center' }}>QR Scanner</Text>
          
          <Text style={{color: "white", textAlign: 'center', fontSize: 20 }}> {this.state.cardNumber} </Text>
        </View>

        <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: width / 2, height: width / 2 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftTop }} />
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightTop }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftBottom }} />
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightBottom }} />
            </View>
          </View>
        </View>

        <View style={[styles.overlay, styles.bottomOverlay]}>
          <Button
            // onPress={() => { console.log('scan clicked'); }}
            onPress={() => this.scanAgain()}
            style={styles.enterBarcodeManualButton}
            title="Start / ReScan"
          />
        </View>
      </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 10,
    // alignItems: 'center',
    // elevation: 5,
    // position:'relative'
    flex: 1
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
 
 });


















