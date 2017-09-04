import { createStore } from 'redux';
import * as actions from "../actions.js";
import yrspots from '../resources/spots.json';

const getInitialState = () => {

  let initialState = {
    spots: [],
    totalCount: 0,
    loadedCount: 0,
    status: actions.INIT
  }

  for(i = 0; i < yrspots.spots.length; i++) {
      initialState[yrspots.spots[i].name] = {detailedStatus: actions.INIT};
      initialState.spots = initialState.spots.concat(yrspots.spots[i].name);
  }
  initialState.totalCount = yrspots.spots.length;
  initialState.focusSpot = yrspots.spots[0].name;

  return initialState;

}

export const forecastReducer = (state = getInitialState(), action) => {
  
  switch (action.type) {
  
    case 'LOAD_FORECAST': 
      return Object.assign({}, state, {
          status: actions.IS_LOADING
        });
    case 'LOAD_FORECAST_SUCCESS':
       return Object.assign({}, state, {
          [action.json.name]: {
                    name: action.json.name,
                    longitude:action.json.longitude,
                    latitude: action.json.latitude,
                    forecast: action.json.fcst_intervals,
                    detailedStatus: actions.LOAD_SUCCESS
                              },
          loadedCount: state.loadedCount + 1,                    
          status: state.loadedCount + 1 < yrspots.spots.length ? actions.LOAD_SUCCESS_PARTIAL : actions.LOAD_SUCCESS_ALL,
        });
    case 'LOAD_FORECAST_ERROR':
      return Object.assign({}, state, {
          status: LOAD_ERROR
        });
    case 'SET_FOCUS_SPOT':
      return Object.assign({}, state, {
          focusSpot: action.focusSpot
        });    
    default:
      return state;
    }
}

let store = createStore(forecastReducer);

export default store;