import {setActiveSpots} from "../actions.js";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SettingsView from '../components/SettingsView.js';


const mapStateToProps = state => ({
  forecast: state
});

const mapDispatchToProps = (dispatch) => ({
  forecastSetActiveSpots: (spots) => {dispatch(setActiveSpots(spots))}
});



export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
