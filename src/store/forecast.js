import { createStore } from 'redux';
import {INIT, IS_LOADING, LOAD_SUCCESS, LOAD_ERROR, LOAD_FORECAST, LOAD_FORECAST_SUCCESS, LOAD_FORECAST_ERROR} from "../actions.js";

const initialState = {
  name: '',
  lon: '',
  lat: '',
  fcst: [],
  status: INIT
}

export const forecast = (state = initialState, action) => {
  
  switch (action.type) {
  
    case 'LOAD_FORECAST': 
      return Object.assign({}, state, {
          status: IS_LOADING
        });
    case 'LOAD_FORECAST_SUCCESS':
       return Object.assign({}, state, {
          name: action.json.name,
          lon:action.json.longitude,
          lat:action.json.latitude,
          fcst:action.json.fcst,
          status: LOAD_SUCCESS
        });
    case 'LOAD_FORECAST_ERROR':
      return Object.assign({}, state, {
          status: LOAD_ERROR
        });
    default:
      return state;
    }
}

let store = createStore(forecast);

export default store;