
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import DWMapView from './DWMapView.js';

export default class Map extends Component {

  render() {

    if(this.props.forecast.status === 'LOAD_SUCCESS_ALL') {

      return (
        <View style={styles.container}>
          <DWMapView forecasts={this.props.forecast} style={styles.map}/>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[0]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[0]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[1]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[1]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[2]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[2]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[3]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[3]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[4]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[4]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[5]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[5]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[6]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[6]].longitude : 'not loaded'}</Text>
          <Text>longitude: {this.props.forecast[this.props.forecast.spots[7]].detailedStatus === 'LOAD_SUCCESS' ? this.props.forecast[this.props.forecast.spots[7]].longitude : 'not loaded'}</Text>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});