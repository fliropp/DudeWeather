import { createStore } from 'redux';
import {INIT, IS_LOADING, LOAD_SUCCESS, LOAD_ERROR, LOAD_FORECAST, LOAD_FORECAST_SUCCESS, LOAD_FORECAST_ERROR} from "../actions.js";

const initialState = {
  userId: 0,
  id: 0,
  title: "init",
  body: "",
  status: INIT
}

export const forecast = (state = initialState, action) => {
  
  switch (action.type) {
  
    case 'LOAD_FORECAST': 
      return Object.assign({}, state, {
          userId: 1,
          id:1,
          title:"request loading",
          body:"blablabla",
          status: IS_LOADING
        });
    case 'LOAD_FORECAST_SUCCESS':
       return Object.assign({}, state, {
          userId: action.json.userId,
          id:action.json.id,
          title:action.json.title,
          body:action.json.body,
          status: LOAD_SUCCESS
        });
    case 'LOAD_FORECAST_ERROR':
      return Object.assign({}, state, {
          userId: 3,
          id:3,
          title:"load not ok",
          body:"...resten står i avisa",
          status: LOAD_ERROR
        });
    default:
      return state;
    }
}

let store = createStore(forecast);

export default store;