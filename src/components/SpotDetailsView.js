import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LOAD_SUCCESS, LOAD_ERROR} from '../actions.js';


export default class SpotDetailsView extends Component {

	render() {

		let loaded = this.props.forecast.detailedStatus === LOAD_SUCCESS || this.props.forecast.detailedStatus === LOAD_ERROR;
		let slider = this.props.slider;
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
				  1# period: {loaded ? this.props.forecast.forecast[slider].from + ' to ' + this.props.forecast.forecast[slider].to : 'not loaded'}
				 </Text>
				 <Text>
				 direction: {loaded ? this.props.forecast.forecast[slider].dir_code + ' (' + this.props.forecast.forecast[slider].dir_deg + ')': 'not loaded'}
				 </Text>
				 <Text>
				 force : {loaded ? this.props.forecast.forecast[slider].type + ' (' + this.props.forecast.forecast[slider].mps + 'm/s)' : 'not loaded'}
				 </Text>
			</View>

			);

	}
}

const styles = StyleSheet.create({
	details: {
		flex: 1,
		marginLeft:20,
		marginRight:20,
		marginTop:80,
		marginBottom: 60,
		backgroundColor:'#03a9f4',
	}
});
