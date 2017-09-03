
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
        <Text>name: {this.props.forecast.spots[0].name}</Text>
        <Text>longitude: {this.props.forecast.fcst["Ørekroken"].fcst[0]}</Text>
        <Text>latitude: {this.props.forecast.fcst["Ørekroken"].fcst[1]}</Text>

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