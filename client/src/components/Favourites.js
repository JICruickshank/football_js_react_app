import React from "react";
import MapContainer from '../containers/MapContainer';


class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favourites: [],
      locations: []
    }
  }


  render() {
    if (!this.props.favourites) {
      return null
    }
    return (
      <div>
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
