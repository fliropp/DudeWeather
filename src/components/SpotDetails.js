
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider } from 'react-native';
import SpotDetailsView from './SpotDetailsView.js';
import TheDude from '../svg/TheDude.js';

export default class SpotDetails extends Component {

    setFocusSpot = (fs) =>{
      this.props.forecastSetFocusSpot(fs);
    }

    setSlider = (sl) =>{
      this.props.forecastSetSlider(sl);
    }

  render() {
    let spots = this.props.forecast.spots;

    const spotList = spots.map((spot, i) => {
      return <Picker.Item key={i} label = {spot} value = {spot} />
    });


    return (
      <View style={styles.container}>
      <TheDude/>  
      <Text style={styles.header}>VELG SPOT FOR DETALJERT VARSEL </Text>
      <Picker selectedValue = {this.props.forecast.focusSpot} onValueChange = {this.setFocusSpot} style={styles.picker}>
             {spotList}
      </Picker>
      <SpotDetailsView forecast={this.props.forecast[this.props.forecast.focusSpot]} slider={this.props.forecast.detailSlider} style={styles.dViewContainer}/>
      <Slider minimumValue={0} maximumValue={19} minimumTrackTintColor="#03a9f4" maximumTractTintColor="#03a9f4"
              step={1} value={this.props.forecast.detailSlider} onValueChange={this.setSlider} style={styles.detail_slider} thumbTintColor="#f4e842"
      />
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
   header: {
      fontSize: 12,
      alignSelf: 'center',
      color: '#03a9f4'
   },
   picker: {
     backgroundColor:'#03a9ae',
     color: '#f4e842',
     marginTop: 50,
     marginLeft:20,
     marginRight:20
   },
   container: {
     backgroundColor: '#f4e842'
   },
   detail_slider: {
     height:20,
     backgroundColor:'#03a9f4',
     marginLeft: 0,
     marginRight: 0
   }
});
