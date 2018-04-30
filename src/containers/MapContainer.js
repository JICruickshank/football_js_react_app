import React from "react";
import GoogleMapReact from "google-map-react";

class MapContainer extends React.Component {
	constructor(props){
		super(props);

		this.map = null;
		this.maps = null;

		this.state = {
			markers: []
		};

		this.storeMaps = this.storeMaps.bind(this);
	}

	storeMaps({map, maps}){
		this.map = map;
		this.maps = maps;

    // let markers = this.props.markers;

	}

  render(){
    return(

      <div style={{ height: `300px`, width: '90%' }}>
        <GoogleMapReact
        center = { { lat: 52.489471, lng: -1.898575 } }
        zoom = { 6 }
        onGoogleApiLoaded = {this.storeMaps}
        />

      </div>
    )
  }
}

export default MapContainer;
