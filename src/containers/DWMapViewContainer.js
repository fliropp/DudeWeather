import {setTimeslotPosition} from "../actions.js";
//import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import DWMapView from '../components/DWMapView.js';
import {SET_TIMESLOT_POSITION} from "../actions.js";


const mapStateToProps = state => ({
  forecast: state
});

const mapDispatchToProps = (dispatch) => ({
  forecastSetTimeslotPosition: (tp) => {dispatch(setTimeslotPosition(tp))}
});

export default connect(mapStateToProps, mapDispatchToProps)(DWMapView);
