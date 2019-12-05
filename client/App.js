
//import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'
//import { createMemoryHistory } from 'history';
//import Navbar from "./components/layout/Navbar";
//import Landing from "./components/layout/Landing";

import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   Button
// } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserManagement from './screens/UserManagement';
import Transaction from './screens/Transaction';
import PartnerNetwork from './screens/PartnerNetwork';
import Terminal from './screens/Terminal';
import Settings from './screens/Settings';
import Profile from './screens/Profile';

//Transaction
import ManualCard from './screens/transaction/ManualCard';
import RePrint from './screens/transaction/RePrint';
import VoidTransaction from './screens/transaction/VoidTransaction';


//User Management
import UserList from './screens/usermanagement/UserList';
import Registration from './screens/usermanagement/Registration';
import UserTerminalAccess from './screens/usermanagement/UserTerminalAccess';
import User from './screens/usermanagement/User';

import QRScanner from './components/QRScanner';

//Partner Network
import HospitalDepartment from './screens/partnernetwork/HospitalDepartment';
import HospitalList from './screens/partnernetwork/HospitalList';
import Hospital from './screens/partnernetwork/Hospital';
import Department from './screens/partnernetwork/Department';

//Terminal
import TerminalList from './screens/terminal/TerminalList';



//Settings
import Regions from './screens/settings/Regions';
import Provinces from './screens/settings/Provinces';
import Cities from './screens/settings/Cities';
import Barangays from './screens/settings/Barangays';

//Authentication
import Login from './Auth/Login';
import SplashScreen from './screens/SplashScreen';
import Logout from './Auth/Logout';
import Instructions from './screens/Instructions';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



//For Pages/Screen Navigators

// const InitialNavigator  = createSwitchNavigator({
//   Splash: SplashScreen,
//   screen: Login
// });


const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        //tabBarVisible: false,
        headerMode: 'none',
        //title: ' ',
        //headerStyle: { backgroundColor: '#2196f3' },
        headerTintColor: '#f5f7f7'
      }
    },
    Login: {
      screen: Login //InitialNavigator
    },
    Profile: {
      screen: ProfileScreen
    },
    Details: {
      screen: DetailsScreen
    },
    UserManagement: {
      screen: UserManagement,
      navigationOptions: {
        tabBarVisible: false,
        title: ' ',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Transaction: {
      screen: Transaction,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    PartnerNetwork: {
      screen: PartnerNetwork,
      navigationOptions: {
        tabBarVisible: false,
        title: ' ',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Terminal: {
      screen: TerminalList,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    ManualCard: {
      screen: ManualCard,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    RePrint: {
      screen: RePrint,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    VoidTransaction: {
      screen: VoidTransaction,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    UserList: {
      screen: UserList,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    UserTerminalAccess: {
      screen: UserTerminalAccess,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    HospitalList: {
      screen: HospitalList,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    HospitalDepartment: {
      screen: HospitalDepartment,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    TerminalList: {
      screen: TerminalList,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Regions: {
      screen: Regions,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Provinces: {
      screen: Provinces,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Cities: {
      screen: Cities,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Barangays: {
      screen: Barangays,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Hospital: {
      screen: Hospital,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    User: { //
      screen: User,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Department: {
      screen: Department,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    QRScanner: {
      screen: QRScanner,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    }, //
    Instructions: {
      screen: Instructions,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        tabBarVisible: false,
        title: '',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#404040'
      }
    },
  },
  {
    initialRouteName: 'Login', //'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer (AppNavigator);

export default createAppContainer (AppNavigator);
