import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {addLoad, addLoadSuccess, addLoadError} from "../actions.js";
import Map from "../components/Map.js";
import {store} from "../store/forecast.js";



const mapStateToProps = () => {	
  return {
       userId: store.getState().userId,
       id: store.getState().id,
       title: store.getState().title,
       body: store.getState().body,
  };
}

/*const mapDispatchToProps = (dispatch) => ({
  forecastRequest: () => { dispatch(addLoad()) },
  forecastRequestSuccess: (json) => { dispatch(addLoadSuccess(json)) },
  forecastRequestError: () => { dispatch(addLoadError()) },
});*/

export const restRequest = (url) => {


	 fetch(url)
        .then((response) => response.json())
        .then(json => store.dispatch(addLoadSuccess(json)))    
        .catch((error) => {
            store.dispatch(addLoadError());
            console.error(error);
        });
	
}

export default connect(mapStateToProps)(Map);
