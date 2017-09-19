import {addLoad, addLoadSuccess, addLoadError, setFocusSpot, setDetailSlider} from "../actions.js";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SpotDetails from '../components/SpotDetails.js';
import {LOAD_FORECAST, LOAD_FORECAST_SUCCESS, LOAD_FORECAST_ERROR} from "../actions.js";


const mapStateToProps = state => ({
  forecast: state
})

const mapDispatchToProps = (dispatch) => ({
  forecastRequest: () => { dispatch(addLoad()) },
  forecastRequestSuccess: () => { dispatch(addLoadSuccess()) },
  forecastRequestError: () => { dispatch(addLoadError()) },
  forecastSetFocusSpot: (fs) => {dispatch(setFocusSpot(fs))},
  forecastSetSlider: (sl) => {dispatch(setDetailSlider(sl))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetails);
