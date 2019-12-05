

import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Button, 
    Text, 
    Image
} from 'react-native';

import {
    IndicatorViewPager, PagerDotIndicator
} from 'rn-viewpager';



export default class ViewPager extends Component {

    renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />
    }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <IndicatorViewPager
            style={{height: 170}}
            indicator={this.renderDotIndicator()}

        >
        <View>
            <Image 
                source={{uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjZouGAmMXlAhXl7HMBHbLjBoQQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.chartboost.com%2Fdevelopers%2F&psig=AOvVaw2SSwoLd_gJAU8MxVsSZanT&ust=1572566263939987' }}
                style={{ width: 420, height: 170  }}    
            />
        </View>
        <View>
            <Image 
                source={{uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjd9MP4mMXlAhU663MBHX7qCk0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.techrepublic.com%2Farticle%2Fin-praise-of-developers-who-delete-code%2F&psig=AOvVaw2SSwoLd_gJAU8MxVsSZanT&ust=1572566263939987' }}
                style={{ width: 420, height: 170  }}    
            />
        </View>
        <View>
            <Image 
                source={{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.betakit.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fdev-1.jpeg&imgrefurl=https%3A%2F%2Fbetakit.com%2Fkin-announces-40-participants-in-kin-developer-program%2F&docid=hc2URdVee1u-jM&tbnid=pk3sDctWXm7eeM%3A&vet=10ahUKEwj-xrr9l8XlAhWW73MBHUviAToQMwiKASgPMA8..i&w=1050&h=700&bih=657&biw=1366&q=developers&ved=0ahUKEwj-xrr9l8XlAhWW73MBHUviAToQMwiKASgPMA8&iact=mrc&uact=8' }}
                style={{ width: 420, height: 170  }}    
            />
        </View>

        </IndicatorViewPager>
      </View>
    )
  }
}
