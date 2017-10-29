import {dudeHelper} from "./Utils.js";
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/forecast.js';
import MapContainer from './containers/MapContainer.js';
import SpotDetailsContainer from './containers/SpotDetailsContainer.js';
import {restRequest, loadYrls} from './containers/MapContainer.js';
import SettingsContainer from './containers/SettingsContainer.js';
import settingsIcon from './graphics/ic_settings.png';
import mapIcon from './graphics/ic_map.png';
import infoIcon from './graphics/ic_info.png';

export default class DWMainView extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    loadYrls().then((yrls) => {
      restRequest(yrls);
    });
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

class Settings extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.settings}>
          <SettingsContainer/>
        </View>
    </Provider>
    );
  }

}

const DudeWeather = TabNavigator({
  Oversikt: { screen: DWMainView,navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image source={mapIcon}/>
      ),
    }
   },
  Detaljert: { screen: DWDetailedForecast,navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Image source={infoIcon}/>
      ),
    }
   },
  Settings: {screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={settingsIcon}/>
        ),
      }
    },
},
{
  tabBarOptions : {
    showIcon:true,
    activeTintColor:'#141F1F',
    inactiveTintColor:'#ffffff',
    indicatorStyle: { backgroundColor: 'transparent' },
    style: {
      backgroundColor: '#f05a28',
      height:45,
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f05a28',
  },

});

AppRegistry.registerComponent('DudeWeather', () => DudeWeather);
