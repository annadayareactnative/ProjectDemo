import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class DatePickerApp extends Component {

    constructor(props) {
        super(props);
        this.state = { date: '' };
    }

    selectDate = (date) => {
        this.setState({date: date });
    }

  render() {
    return (
        <View style={styles.container}>
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                format= "DD-MM-YYYY"
                minDate= "10-07-2019"
                maxDate= "31-08-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={this.selectDate.date}
              />
            <Text syle={{fontSize: 25}}>{this.state.date}</Text>    
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    }, 
    Button: {

    }
})

