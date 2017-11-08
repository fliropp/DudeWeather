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
export const SET_DETAIL_SLIDER = 'SET_DETAIL_SLIDER';
export const SET_MAP_SLIDER = 'SET_MAP_SLIDER';
export const SET_TIMESLOT_POSITION = 'SET_TIMESLOT_POSITION';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const TOGGLE_ACTIVE_STATUS_SPOT = 'TOGGLE_ACTIVE_STATUS_SPOT';
export const SET_ACTIVE_SPOTS = 'SET_ACTIVE_SPOTS';

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

export const setDetailSlider = (slider) => {
	return {type: SET_DETAIL_SLIDER, slider};
}

export const setMapSlider = (slider) => {
	return {type: SET_MAP_SLIDER, slider};
}

export const setTimeslotPosition = (timeslotPosition) => {
	return {type: SET_TIMESLOT_POSITION, timeslotPosition};
}

export const setTotalCount = (count) => {
	return {type: SET_TOTAL_COUNT, count};
}

export const toggleActiveStatus = (spot) => {
	return {type: TOGGLE_ACTIVE_STATUS_SPOT, spot};
}

export const setActiveSpots = (spots) => {
	return {type: SET_ACTIVE_SPOTS, spots};
}
