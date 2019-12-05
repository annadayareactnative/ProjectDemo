import React, { Component } from "react";
import { Link, BrowserRouter, Router } from "react-router-dom";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
export default class Landing extends Component {
    render() {
      return (
          <View style={{ height: "75vh" }} className="container valign-wrapper">
            <View className="row">
              <View className="row">
                <View className="col s12 center-align">
                  <Text style={{ fontFamily: "monospace" }}>
                      TVS Mobile POS {" "}
                  </Text>
                  <Text className="flow-text grey-text text-darken-1">
                    Android Transaction
                  </Text>
                  <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
                <View
                  className="col s6">
                  <Link
                    to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large btn-flat waves-effect white black-text"
                  >
                    Log In
                  </Link>
                </View>
              </View>
            </View>
          </View>
      </View>

    )
  }
}