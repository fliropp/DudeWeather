import {addLoad, addLoadSuccess, addLoadError, setMapSlider} from "../actions.js";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Map from "../components/Map.js";
import store from "../store/forecast.js";
import yrspots from '../resources/spots.json';



const mapStateToProps = state => ({
  forecast: state
})


const mapDispatchToProps = (dispatch) => ({
  forecastRequest: () => { dispatch(addLoad()) },
  forecastRequestSuccess: () => { dispatch(addLoadSuccess()) },
  forecastRequestError: () => { dispatch(addLoadError()) },
  forecastSetSlider: (sl) => {dispatch(setMapSlider(sl))}
});

export const restRequest = () => {

  var yrls = [];

    for(let i = 0; i < yrspots.spots.length; i++) {
      yrls.push(yrspots.spots[i].yrl);
    }

  store.dispatch(addLoad());
  let fcst = "";

  for(let i = 0; i < yrls.length; i++){
    fetch(yrls[i])
          .then((response) => response.text())
          .then(responseText => {
            fcst = parseXml(responseText);
            store.dispatch(addLoadSuccess(fcst));
          })
          .catch((error) => {
              store.dispatch(addLoadError());
              console.error(error);
          });

  }

}

const parseXml = (raw) => {

    var DOMParser = require('xmldom').DOMParser;

    var parser = new DOMParser();
    var doc = parser.parseFromString(raw, 'text/xml');


    var location  = doc.getElementsByTagName('location');
    var name = location[0].getElementsByTagName('name')[0].textContent;
    var lat = location[0].getElementsByTagName('location')[0].getAttribute('latitude');
    var lon = location[0].getElementsByTagName('location')[0].getAttribute('longitude');

    var casts = doc.getElementsByTagName('tabular')[0].getElementsByTagName('time');
    var forecastInterval = [];

    for(i = 0; i < casts.length; i++){
      forecastInterval.push({
        from: casts[i].getAttribute('from'),
        to: casts[i].getAttribute('to'),
        dir_deg:casts[i].getElementsByTagName('windDirection')[0].getAttribute('deg'),
        dir_code: casts[i].getElementsByTagName('windDirection')[0].getAttribute('code'),
        mps: casts[i].getElementsByTagName('windSpeed')[0].getAttribute('mps'),
        type: casts[i].getElementsByTagName('windSpeed')[0].getAttribute('name'),
      });
    }
    return {name:name, latitude:lat, longitude:lon, fcst_intervals: forecastInterval};

  }

export default connect(mapStateToProps,mapDispatchToProps)(Map);
