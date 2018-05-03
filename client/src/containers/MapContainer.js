import React from "react";
import GoogleMapReact from "google-map-react";
import Fixture from "../components/Fixture"
// import {Locations} from '../components/Locations';
class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.maps = null;
        this.renderMarker = this.renderMarker.bind(this);
        this.center = this.center.bind(this);
        this.state = {
            markers: [],
            center: {lng:-2.110748, lat:53}
        };
        this.storeMaps = this.storeMaps.bind(this);
    }
    storeMaps({map, maps}){
        this.map = map;
        this.maps = maps;
        this.renderMarker();
    }

    // function to set center to stadium if not null. render map with this center
    center() {
      if (this.props.stadium !== null && this.map !==null) {
        this.map.setCenter(this.props.stadium);
        this.map.setZoom(15);
        // return {lng: 0, lat: 0}
      }
      else {
        return;
      }
    }

    renderMarker(){
        for(let location of this.props.locations){
        let marker = new this.maps.Marker({
            position: location.coords,
            map: this.map,
            center: {lat:-2, lng: 52}
        });

        let contentString = '<p class="infoWindow">' + (location.description) + '<br/>' + (location.address) + '<br/>' + 'Nearby train station: ' + (location.station) +'</p>'

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
        this.center();
    }
    render(){

        return(
            <div className="map" style={{ height: `450px`, width: '450px' }}>
                <GoogleMapReact
                    center = { this.state.center }

                    zoom = { 6 }
                    onGoogleApiLoaded = {this.storeMaps}
                />
            </div>
        )
    }
}
export default MapContainer;
