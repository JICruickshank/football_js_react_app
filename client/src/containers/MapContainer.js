import React from "react";
import GoogleMapReact from "google-map-react";
// import {Locations} from '../components/Locations';
class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.maps = null;
        this.renderMarker = this.renderMarker.bind(this);
        this.state = {
            markers: []
        };
        this.storeMaps = this.storeMaps.bind(this);
    }
    storeMaps({map, maps}){
        this.map = map;
        this.maps = maps;
        this.renderMarker();
    }

    renderMarker(){
        console.log("render Marker testing");
        for(let location of this.props.locations){
        let marker = new this.maps.Marker({
            position: location.coords,
            map: this.map
        });

        let contentString = '<p class="infoWindow">' + (location.description) + '</p>'

        let infoWindow = new this.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function(){
          infoWindow.open(this.map, marker);
        })
    }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        this.renderMarker();
    }
    render(){
        return(
            <div className="map" style={{ height: `450px`, width: '450px' }}>
                <GoogleMapReact
                    center = { { lat: 53, lng: -1.898575 } }
                    zoom = { 6 }
                    onGoogleApiLoaded = {this.storeMaps}
                />
            </div>
        )
    }
}
export default MapContainer;
