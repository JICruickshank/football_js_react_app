import React from "react";
import MapContainer from '../containers/MapContainer';


class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.checkTeam = this.checkTeam.bind(this);
    this.state = {
      favourites: [],
      locations: []
    }
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
        {this.props.favourites.map((favourite, index) => {
          return (
            <React.Fragment>
              <p>{favourite.date} {favourite.homeTeam} {favourite.homeGoals}-{favourite.awayGoals} {favourite.awayTeam}</p>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}
export default Favourites;
