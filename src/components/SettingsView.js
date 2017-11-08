import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import CheckBox from 'react-native-checkbox';
import { updateSingleRestRequest } from '../containers/SettingsContainer.js';
export default class SpotDetailsView extends Component {

	render() {

    const persistSpotsArray = async (spotIndex, toggle) => {

      let yrls = [];
      let active = await AsyncStorage.getItem('@DudeWeather:active');
      if(active){
        let yrlstring = await AsyncStorage.getItem('@DudeWeather:yrls');
        yrls = JSON.parse(yrlstring);
        yrls[spotIndex].active = toggle;
				updateSingleRestRequest(yrls[spotIndex].yrl);
				this.props.forecastSetActiveSpots(yrls);
        AsyncStorage.setItem('@DudeWeather:yrls', JSON.stringify(yrls));
      }
    }

    return(
      <View>
          {this.props.forecast.spots.map(function(x, i){
          return(
            <CheckBox
              key={i}
              label={x.name}
              checked={x.active}
              onChange={(checked) => persistSpotsArray(i, checked? false:true)}
            />);
          })}
     </View>
    );
  }
}
