
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
});
