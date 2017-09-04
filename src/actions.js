export const LOAD_FORECAST = 'LOAD_FORECAST';
export const LOAD_FORECAST_SUCCESS = 'LOAD_FORECAST_SUCCESS';
export const LOAD_FORECAST_ERROR = 'LOAD_FORECAST_ERROR';
export const INIT = 'INIT';
export const IS_LOADING = 'IS_LOADING';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_SUCCESS_PARTIAL = 'LOAD_SUCCESS_PARTIAL';
export const LOAD_SUCCESS_ALL = 'LOAD_SUCCESS_ALL'; 
export const LOAD_ERROR = 'LOAD_ERROR';
export const SET_FOCUS_SPOT = 'SET_FOCUS_SPOT';

export const addLoad = () => {
	return {type: LOAD_FORECAST};
}

export const addLoadSuccess = (json) => {
	return {type: LOAD_FORECAST_SUCCESS, json};
}

export const addLoadError = () => {
	return {type: LOAD_FORECAST_ERROR};
}

export const setFocusSpot = (focusSpot) => {
	return {type: SET_FOCUS_SPOT, focusSpot};
}
