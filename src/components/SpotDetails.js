
import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, Image } from 'react-native';
import SpotDetailsView from './SpotDetailsView.js';
import TheDude from '../svg/TheDude.js';

export default class SpotDetails extends Component {

    setFocusSpot = (fs) =>{
      this.props.forecastSetFocusSpot(fs);
    }

    setSlider = (sl) =>{
      this.props.forecastSetSlider(sl);
    }

  render() {
    let spots = this.props.forecast.spots;

    const spotList = spots.map((spot, i) => {
      return <Picker.Item key={i} label = {spot} value = {spot} />
    });


    return (
      <Image source={require('../graphics/dw_background.jpg')} style={styles.background_container}>
        <View style={styles.spacer_left}/>
        <View style={styles.details_container}>
          <TheDude style={styles.dude}></TheDude>
          <View style={styles.details_backdrop}>
            <Picker selectedValue = {this.props.forecast.focusSpot} onValueChange = {this.setFocusSpot} style={styles.picker}>
                   {spotList}
            </Picker>
            <SpotDetailsView forecast={this.props.forecast[this.props.forecast.focusSpot]} slider={this.props.forecast.detailSlider} style={styles.dViewContainer}/>
        </View>
          <Slider minimumValue={0} maximumValue={19} minimumTrackTintColor="#03a9f4" maximumTractTintColor="#03a9f4"
                  step={1} value={this.props.forecast.detailSlider} onValueChange={this.setSlider} style={styles.detail_slider} thumbTintColor="#f05a28"
          />
        </View>
        <View style={styles.spacer_right}/>
      </Image>

    );
  }
}

const styles = StyleSheet.create({
  background_container: {
    display:'flex',
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  spacer_right: {
    flex: 0.1,
    backgroundColor:'transparent'
  },
  spacer_left: {
    flex: 0.1,
    backgroundColor:'transparent'
  },
  details_container: {
    flex:0.8,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
  },
  dude: {
    flex:0.5,
    backgroundColor:'transparent'
  },
  details_backdrop: {
    flexDirection:'column',
    flex:0.5,
    alignItems:'center',
    backgroundColor: '#00000080',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#00000080'
  },
  picker: {
    flex:0.1,
    backgroundColor:'#00000060',
    color: '#ffffff',
    height:30,
    width:250
  },
  spot_details: {
    flex:0.5,
    fontSize: 26,
    fontWeight: 'bold',
  },
  detail_slider: {
    width:340,
    height:20,
    backgroundColor:'transparent',
    marginLeft: 0,
    marginRight: 0
   }
});
