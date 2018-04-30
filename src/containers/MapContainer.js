import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
  render() {
  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: 52.489471, lng: -1.898575 } }
       defaultZoom = { 6 }
     >
     </GoogleMap>
  ));
  return(
     <div>
       <GoogleMapExample
         containerElement={ <div style={{ height: `300px`, width: '90%' }} /> }
         mapElement={ <div style={{ height: `100%` }} /> }
       />
     </div>
  );
  }
};
export default Map;
