import {addLoad, addLoadSuccess, addLoadError} from "../actions.js";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Map from "../components/Map.js";
import store from "../store/forecast.js";



const mapStateToProps = state => ({
  forecast: state
})


const mapDispatchToProps = (dispatch) => ({
  forecastRequest: () => { dispatch(addLoad()) },
  forecastRequestSuccess: () => { dispatch(addLoadSuccess()) },
  forecastRequestError: () => { dispatch(addLoadError()) },
});

export const restRequest = (url) => {

  store.dispatch(addLoad());
 
  fetch(url)
        .then((response) => response.json())
        .then(json => store.dispatch(addLoadSuccess(json)))    
        .catch((error) => {
            store.dispatch(addLoadError());
            console.error(error);
        });
	
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);