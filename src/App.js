import {dudeHelper} from "./Utils.js";
import React, { Component } from 'react';
import { SideMenu, List, ListItem } from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
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

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  onSideMenuChange (isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    })
  }

  toggleSideMenu () {
    this.setState({
     isOpen: !this.state.isOpen
    })
  }

	render() {
    let spots = ["Ørekroken", "Larkollen", "Rossö", "Torkilstranda"]
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
          {spots.map((l, i) => (
            <ListItem
              //roundAvatar
              onPress={() => console.log('Pressed')}
              //avatar={l.avatar_url}
              key={i}
              title={l}
              //subtitle={l.subtitle}
            />
          ))}
        </List>
      </View>
  )


    return (
      <Provider store={store}>
      <SideMenu
         isOpen={this.state.isOpen}
         onChange={this.onSideMenuChange.bind(this)}
         menu={MenuComponent}>
         <SpotDetailsContainer toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
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
