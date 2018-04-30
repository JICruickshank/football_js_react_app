import React from "react";
import MapContainer from '../containers/MapContainer';
const testMarker = {lat: 53.4831, lng: -2.2004}
const Favourites = () => (
  <div>
    <h4>Favourites</h4>
    <p>Welcome to our magical favourites page</p>
  <MapContainer marker={testMarker}/>
  </div>
);
export default Favourites;
