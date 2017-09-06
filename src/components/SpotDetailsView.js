import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LOAD_SUCCESS, LOAD_ERROR} from '../actions.js';


export default class SpotDetailsView extends Component {



	render() {

		const loaded = this.props.forecast.detailedStatus === LOAD_SUCCESS || this.props.forecast.detailedStatus === LOAD_ERROR;

		return(
			<View style={styles.details}>
				<Text>
					spot: {this.props.forecast.name}
				</Text>
				<Text>
				 longitude: {this.props.forecast.longitude}
				 </Text>
				 <Text>
				  latitude: {this.props.forecast.latitude}
				 </Text>
				 <Text>
				  1# period: {loaded ? this.props.forecast.forecast[0].from + ' to ' + this.props.forecast.forecast[0].to : 'not loaded'}
				 </Text> 
				 <Text>
				 direction: {loaded ? this.props.forecast.forecast[0].dir_code + ' (' + this.props.forecast.forecast[0].dir_deg + ')': 'not loaded'}
				 </Text>
				 <Text>
				 force : {loaded ? this.props.forecast.forecast[0].type + ' (' + this.props.forecast.forecast[0].mps + 'm/s)' : 'not loaded'}
				 </Text>
			</View>

			);

	}
}

const styles = StyleSheet.create({
	details: {
		padding: 30,
    	alignSelf: 'center'
	}
});