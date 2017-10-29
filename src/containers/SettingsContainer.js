import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SettingsView from '../components/SettingsView.js';


const mapStateToProps = state => ({
  forecast: state
})



export default connect(mapStateToProps)(SettingsView);
