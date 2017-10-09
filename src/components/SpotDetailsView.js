import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LOAD_SUCCESS, LOAD_ERROR} from '../actions.js';
import Wind from '../svg/Wind.js';
import Moment from 'moment';


export default class SpotDetailsView extends Component {

	render() {

		let loaded = this.props.forecast.detailedStatus === LOAD_SUCCESS || this.props.forecast.detailedStatus === LOAD_ERROR;
		let slider = this.props.slider;
		return(
			<View style={styles.details}>
				<Text style={styles.details_text_geo}>
				 longitude: {this.props.forecast.longitude}
				 </Text>
				 <Text style={styles.details_text_geo}>
				  latitude: {this.props.forecast.latitude}
				 </Text>
				 <Text style={styles.details_text_time}>
				  periode: {loaded ? Moment(this.props.forecast.forecast[slider].from).format('YYYY-MM-DD HH:mm') + ' - ' + Moment(this.props.forecast.forecast[slider].to).format('YYYY-MM-DD HH:mm') : 'not loaded'}
				 </Text>
				 <Wind style={styles.wind}/>
				 <Text style={styles.details_text}>
				 {loaded ? this.props.forecast.forecast[slider].dir_code + ' (' + this.props.forecast.forecast[slider].dir_deg + ')': 'not loaded'}
				 </Text>
				 <Text style={styles.details_text}>
				 {loaded ? this.props.forecast.forecast[slider].type + ' (' + this.props.forecast.forecast[slider].mps + 'm/s)' : 'not loaded'}
				 </Text>
			</View>

			);

	}
}

const styles = StyleSheet.create({
	details: {
		flexDirection:'column',
		flex: 1,
		marginLeft:20,
		marginRight:20,
		marginBottom: 60,
		alignItems:'center',
		backgroundColor:'transparent',
	},
	details_text: {
		color: '#ffffff',
		fontFamily:'notoSans',
		fontSize: 16
	},
	details_text_spot: {
		color: '#ffffff',
		fontFamily:'notoSans',
		fontSize: 22
	},
	details_text_geo: {
		color: '#ffffff',
		fontFamily:'notoSans',
		fontSize: 12
	},
	details_text_time: {
		color: '#ffffff',
		fontFamily:'notoSans',
		fontSize: 12
	},
	wind: {
		flex: 1,
		paddingTop:-30
	}
});
