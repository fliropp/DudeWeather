export const LOAD_FORECAST = 'LOAD_FORECAST';
export const LOAD_FORECAST_SUCCESS = 'LOAD_FORECAST_SUCCESS';
export const LOAD_FORECAST_ERROR = 'LOAD_FORECAST_ERROR';
export const INIT = 'INIT';
export const IS_LOADING = 'IS_LOADING';
export const LOAD_SUCESS = 'LOAD_SUCESS';
export const LOAD_ERROR = 'LOAD_ERROR';

export const addLoad = () => {
	return {type: LOAD_FORECAST};
}

export const addLoadSuccess = (json) => {
	return {type: LOAD_FORECAST_SUCCESS, json};
}

export const addLoadError = () => {
	return {type: LOAD_FORECAST_ERROR};
}
