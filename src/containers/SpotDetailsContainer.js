import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SpotDetails from '../components/SpotDetails.js';
import {LOAD_FORECAST, LOAD_FORECAST_SUCCESS, LOAD_FORECAST_ERROR} from "../actions.js";


const mapStateToProps = state => ({
  forecast: state
})

const mapDispatchToProps = (dispatch) => ({
  forecastRequest: () => { dispatch({ type: LOAD_FORECAST }) },
  forecastRequestSuccess: () => { dispatch({ type: LOAD_FORECAST_SUCCESS }) },
  forecastRequestError: () => { dispatch({ type: LOAD_FORECAST_ERROR }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetails);