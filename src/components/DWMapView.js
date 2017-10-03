import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LOAD_SUCCESS, LOAD_ERROR} from '../actions.js';
import MapView from 'react-native-maps';
import arrow from '../graphics/ic_arrow.png';
import SpotCallout from './SpotCallout.js';


export default class DWMapView extends Component {

	configureMap(configData){}

	render() {

		let deg_val = null;
		let slider = this.props.slider;
		const forecastArray = (fcsts) => {
			let farray = [];
			for(let j = 0; j < fcsts.spots.length; j ++){
				farray.push(fcsts[fcsts.spots[j]]);
			}
			return farray;
		}

		return(
			<View style={styles.map_container}>
			<MapView style={styles.map}
    			initialRegion={{
      			longitude: 10.524903,
      			latitude: 58.214131,
      			latitudeDelta: 3.0922,
      			longitudeDelta: 3.0421,
      			zoom:1,
    			}}
  			>

  			{forecastArray(this.props.forecasts).map(function(cast, i){

				deg_val = parseInt(cast.forecast[slider].dir_deg) - 180 + 'deg';

  				return(
	  			<MapView.Marker
	      			coordinate={{
	      				latitude: parseFloat(cast.latitude),
	      				longitude: parseFloat(cast.longitude),
	      			}}
	     			image={arrow}
	     			style={{transform: [{rotate:  deg_val}],}}
	     			key={i}
	    		>
	    		 	<MapView.Callout style={styles.spot_callout_view}>
	              		<SpotCallout>
	                		<Text style={styles.callout_title}>{cast.name}</Text>
	                		<Text>vindstyrke: {cast.forecast[slider].mps}</Text>
	                		<Text>vindretning: {cast.forecast[slider].dir_code}</Text>
	              		</SpotCallout>
	            	</MapView.Callout>
	            </MapView.Marker>);
  			})}
				<MapView.Marker coordinate={
					longitude: 10.524903,
					latitude: 58.214131,}>
  				<View>
						<Text>tra la la</Text>
					</View>
				</MapView.Marker>

    		</MapView>
  			</View>
		);


	}

}

const styles = StyleSheet.create({
  map_container: {
		flex: 1,
  },
  map: {
    flex: 1,
		width: 400,
  },
  spot_callout_view: {
  	backgroundColor:'#03a9f4'
  },
  callout_title: {
  	color:'#03a9f4',
  	fontWeight:'bold',
  }
});
