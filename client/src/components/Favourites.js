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

  componentDidMount() {
    fetch("http://localhost:3001/api/favourites")
      .then(response => response.json())
      .then(json => {this.setState({favourites: json})})
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
        <MapContainer locations= {this.checkTeam()} />
        {this.state.favourites.map((favourite, index) => {
          return (
            <React.Fragment>
              <p>{favourite.date} {favourite.homeTeam} {favourite.homeGoals}-{favourite.awayGoals} {favourite.awayTeam} <button onClick={() => this.deleteFromFavourites(favourite._id)}>Delete Fixture</button></p>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}
export default Favourites;
