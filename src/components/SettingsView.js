import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class SpotDetailsView extends Component {




	render() {

    return(
      <View>
        {this.props.forecast.spots.map(function(name, i){
          return(
            <CheckBox
              label={name}
              checked={false}
              onChange={(checked) => console.log('I am checked', checked)}
            />);
          })}
     </View>
    );
  }
}
