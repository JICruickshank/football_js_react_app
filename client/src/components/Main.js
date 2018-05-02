import React from "react";
import Home from "./Home";
import LeagueTable from "./LeagueTable";
import Fixtures from "./Fixtures";
import Fixture from "./Fixture";
import Favourites from "./Favourites";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends React.Component {
  constructor(props){
    super(props);

    this.addFavourite = this.addFavourite.bind(this);

    this.state = {
      league: [],
      fixtures: [],
      locations: [
          {team: "Manchester City FC", coords:{lat: 53.4831, lng: -2.2004}, description: "Eithad Stadium"},
          {team: "Manchester United FC", coords:{lat: 53.4631, lng: -2.2913}, description: "Old Trafford"},
          {team: "Liverpool FC", coords:{lat: 53.4308, lng: -2.9608}, description: "Anfield"},
          {team: "Tottenham FC", coords:{lat: 51.5560, lng: -0.2795}, description: "Wembley"},
          {team: "Chelsea FC", coords:{lat: 51.4817, lng: -0.1910}, description: "Stamford Bridge"},
          {team: "Arsenal FC", coords:{lat: 51.5549, lng: -0.1084}, description: "The Emirates Stadium"},
          {team: "Burnley FC", coords:{lat: 53.7890, lng: -2.2302}, description: "Turf Moor"},
          {team: "Everton FC", coords:{lat: 53.4388, lng: -2.9663}, description: "Goodison Park"},
          {team: "Leicester City FC", coords:{lat: 52.6204, lng: -1.1422}, description: "King Power Stadium"},
          {team: "Newcastle United FC", coords:{lat: 54.9756, lng: -1.6217}, description: "St James' Park"},
          {team: "Crystal Palace FC", coords:{lat: 51.398270, lng: -0.085644}, description: "Selhurst Park"},
          {team: "Watford FC", coords:{lat: 51.649939, lng: -0.401707}, description: "Vicarage Road"},
          {team: "AFC Bournemouth", coords:{lat: 50.7352, lng: -1.838515}, description: "Dean Court"},
          {team: "Brighton & Hove Albion", coords:{lat: 50.861701, lng: -0.084070}, description: "Falmer Stadium"},
          {team: "West Ham United FC", coords:{lat: 51.5387078, lng: -0.0175076}, description: "London Stadium"},
          {team: "Huddersfield Town", coords:{lat: 53.654516, lng: -1.768398}, description: "Kirklees Stadium"},
          {team: "Swansea City FC", coords:{lat: 51.642827, lng: -3.934255}, description: "Liberty Stadium"},
          {team: "Southampton FC", coords:{lat: 50.905024, lng: -1.3923383}, description: "St Mary's Stadium"},
          {team: "Stoke City FC", coords:{lat: 52.988343, lng: -2.175693}, description: "Bet 365 Stadium"},
          {team: "West Bromwich Albion FC", coords:{lat: 52.509058, lng: -1.964110}, description: "The Hawthorns"}
      ],
      favourites: []
    }
  }

  componentDidMount() {

    fetch("http://api.football-data.org/v1/competitions/445/leagueTable?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({league: json.standing}))

    fetch("http://api.football-data.org/v1/competitions/445/fixtures?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({fixtures: json.fixtures}))

    fetch("http://localhost:3001/api/favourites")
      .then(response => response.json())
      .then(json => {this.setState({favourites: json})})
  }

  addFavourite = function() {
    fetch("http://localhost:3001/api/favourites")
      .then(response => response.json())
      .then(json => {this.setState({favourites: json})})
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
          <Fixtures fixtures={this.state.fixtures} locations={this.state.locations} favourites={this.state.favourites} action={this.addFavourite} />
        )}}/>
        <Route path='/favourites' render={() => {return(
          <Favourites favourites={this.state.favourites} locations={this.state.locations}/>
        )}}/>
      </React.Fragment>
    </Router>
    );
  }

}

export default Main;
