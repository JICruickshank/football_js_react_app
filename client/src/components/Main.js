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
      league: [],
      fixtures: []
    }
  }

  componentDidMount() {

    fetch("http://api.football-data.org/v1/competitions/445/leagueTable?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({league: json.standing}))

    fetch("http://api.football-data.org/v1/competitions/445/fixtures?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({fixtures: json.fixtures}))
  }


  render() {
    return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/league' render={() => {return(
          <LeagueTable teams={this.state.league}/>
        )}}/>
        <Route path='/fixtures' render={() => {return(
          <Fixtures fixtures={this.state.fixtures}/>
        )}}/>
        <Route path='/favourites' component={Favourites} />
      </React.Fragment>
    </Router>
    );
  }

}

export default Main;
