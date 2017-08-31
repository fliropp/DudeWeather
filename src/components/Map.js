
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
          {this.props.forecast.title}
        </Text>
        <Text>status: {this.props.forecast.title}</Text>
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