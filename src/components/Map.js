
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
        <Text>name: {this.props.forecast.name}</Text>
        <Text>longitude: {this.props.forecast.lon}</Text>
        <Text>latitude: {this.props.forecast.lat}</Text>

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