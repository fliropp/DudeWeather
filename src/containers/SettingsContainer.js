import {setActiveSpots, incrementTotalCount, addLoadSuccess, addLoadError} from "../actions.js";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SettingsView from '../components/SettingsView.js';
import {parseXml} from './MapContainer.js';
import store from "../store/forecast.js";


const mapStateToProps = state => ({
  forecast: state
});

const mapDispatchToProps = (dispatch) => ({
  forecastSetActiveSpots: (spots) => {dispatch(setActiveSpots(spots))}
});

export const updateSingleRestRequest = (yrl) => {
    fetch(yrl)
      .then((response) => response.text())
      .then(responseText => {
        fcst = parseXml(responseText);
        store.dispatch(addLoadSuccess(fcst));
        store.dispatch(incrementTotalCount());
      })
      .catch((error) => {
          store.dispatch(addLoadError());
          console.error(error);
      });
}




export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
