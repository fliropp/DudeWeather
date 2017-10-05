
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Slider
} from 'react-native';
import DWMapViewContainer from '../containers/DWMapViewContainer.js';



export default class Map extends Component {

  setSlider = (sl) =>{
    this.props.forecastSetSlider(sl);
  }

  render() {

    if(this.props.forecast.status === 'LOAD_SUCCESS_ALL') {

      return (
        <View style={styles.container}>
          <DWMapViewContainer forecasts={this.props.forecast} slider={this.props.forecast.mapSlider} tsp={this.props.forecast.timeslotPosition} style={styles.map}/>
          <Slider minimumValue={0} maximumValue={19} minimumTrackTintColor="#03a9f4" maximumTrackTintColor="#03a9f4"
                  step={1} value={this.props.forecast.mapSlider} onValueChange={this.setSlider} style={styles.map_slider} thumbTintColor="#141F1F"
          />
        </View>
      );
    }else{
      return (
        <ActivityIndicator animating={true} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  map_slider: {
    height:50,
    backgroundColor:'transparent',
    marginLeft: 50,
    marginRight: 30,
    marginBottom:0
  }
});
