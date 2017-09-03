
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Map extends Component {

  render() {
    return (
      <View>
        <Button
          title="Map"
          onPress={this.props.forecastRequestError}/>
        <Text
          style={styles.map}
          onPress={this.props.forecastRequestError}>
          {this.props.forecast.status}
        </Text>
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
  }
}

const styles = StyleSheet.create({
  map: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});