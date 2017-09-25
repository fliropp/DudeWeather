
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Slider
} from 'react-native';
import DWMapView from './DWMapView.js';

export default class Map extends Component {

  setSlider = (sl) =>{
    this.props.forecastSetSlider(sl);
  }

  render() {

    if(this.props.forecast.status === 'LOAD_SUCCESS_ALL') {

      return (
        <View style={styles.container}>
          <DWMapView forecasts={this.props.forecast} slider={this.props.forecast.mapSlider} style={styles.map}/>
          <Text style={styles.timeslot}>
            Fra: {this.props.forecast[this.props.forecast.spots[0]].forecast[this.props.forecast.mapSlider].from} -
            Til: {this.props.forecast[this.props.forecast.spots[0]].forecast[this.props.forecast.mapSlider].to}
          </Text>
          <Slider minimumValue={0} maximumValue={19} minimumTrackTintColor="#03a9f4" maximumTrackTintColor="#03a9f4"
                  step={1} value={this.props.forecast.mapSlider} onValueChange={this.setSlider} style={styles.map_slider} thumbTintColor="#f05a28"
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
    height:20,
    backgroundColor:'transparent',
    marginLeft: 20,
    marginRight: 10
  },
  timeslot: {
    height:20,
    backgroundColor:'transparent',
    color: '#f05a28',
    marginLeft: 20,
    marginRight: 10
  }
});
