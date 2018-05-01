import React from "react";
import Home from "./Home";
import LeagueTable from "./LeagueTable";
import Fixtures from "./Fixtures";
import Favourites from "./Favourites";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      league: []
    }
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v1/competitions/445/leagueTable?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({league: json.standing}))
  }

  render() {
    return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/league' component={LeagueTable} teams={this.state.league} />
        <Route path='/fixtures' component={Fixtures} />
        <Route path='/favourites' component={Favourites} />
      </React.Fragment>
    </Router>
    );
  }

}

export default Main;
