import {dudeHelper} from "./Utils.js";
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/forecast.js';
import MapContainer from './containers/MapContainer.js';
import SpotDetailsContainer from './containers/SpotDetailsContainer.js';
import {restRequest} from './containers/MapContainer.js';






export default class DWMainView extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    restRequest();

  }

  render() {
    return (
    	<Provider store={store}>
     	<View style={styles.container}>
      		<MapContainer/>
    	</View>
    	</Provider>
    );
  }
}

class DWDetailedForecast extends Component {

  

	render() {
   

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SpotDetailsContainer/>
        </View>
      </Provider>
    );

	} 
} 


const DudeWeather = TabNavigator({
  Oversikt: { screen: DWMainView },
  Detaljert: { screen: DWDetailedForecast },
},{
  tabBarOptions : {
    style: {
      backgroundColor: '#03a9f4',
      height:40,
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('DudeWeather', () => DudeWeather);
