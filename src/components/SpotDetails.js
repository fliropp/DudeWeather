
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import SpotDetailsView from './SpotDetailsView.js';

export default class SpotDetails extends Component {

    setFocusSpot = (fs) =>{
      this.props.forecastSetFocusSpot(fs);
    }

  render() {
    let spots = this.props.forecast.spots;
    
    const spotList = spots.map((spot, i) => {
      return <Picker.Item key={i} label = {spot} value = {spot} />
    });
    

    return (
      <View>
      <Text>SELECT SPOT FOR DETAILED VIEW</Text>
      <Picker selectedValue = {this.props.forecast.focusSpot} onValueChange = {this.setFocusSpot}>
             {spotList}      
      </Picker>
      <SpotDetailsView forecast={this.props.forecast[this.props.forecast.focusSpot]}/>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  spot_details: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
});