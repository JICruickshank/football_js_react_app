import React from "react";
import MapContainer from '../containers/MapContainer';


class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.deleteFromFavourites = this.deleteFromFavourites.bind(this);
    this.checkTeam = this.checkTeam.bind(this);
    this.state = {
      favourites: [],
      locations: []
    }
  }

  deleteFromFavourites(id_passed_in){
        const request = new XMLHttpRequest();
        request.open("DELETE", "//localhost:3001/api/favourites/" + id_passed_in);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', function(){
          if(this.status !== 201){
            return;
          }
        })
        request.send();
      }



  checkTeam(){
    let array =[]
    for(let favourite of this.props.favourites){

      for(let location of this.props.locations){

        if(location.team === favourite.homeTeam){
          array.push(location);
        }
      }
    }
    return array;
  }


  render() {
    if (!this.props.favourites) {
      return null
    }

    return (
      <div>
        <div className="spacer">

        </div>
        <MapContainer locations= {this.checkTeam()} />
        {this.props.favourites.map((favourite, index) => {
          return (
            <div className="favourites">
              <ul>
                <li className="favli1">
                  {favourite.date}
                </li>
                <li className="favli2">
                  {favourite.homeTeam}
                </li>
                <li className="favli3">
                  v
                </li>
                <li className="favli4">
                  {favourite.awayTeam}
                </li>
                <li className="favli-button5">
                  <button className="btn" onClick={() => this.deleteFromFavourites(favourite._id)}>Remove</button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Favourites;
