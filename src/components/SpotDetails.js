
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SpotDetails extends Component {
  render() {
    return (
      <View>
        <Button
          title="Spot details"
          onPress={this.props.forecastRequest}/>
        <Text
          style={styles.spot_details}
          onPress={this.props.forecastRequestError}>
          {this.props.forecast.title}
        </Text>
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
});