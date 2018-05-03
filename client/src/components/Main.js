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

    this.state = {
      league: [],
      fixtures: [],
      locations: [
          {team: "Manchester City FC", coords:{lat: 53.4831, lng: -2.2004}, description: "Eithad Stadium", address:"Ashton New Rd, Manchester M11 3FF" , station:'<a href="https://www.thetrainline.com/stations/ashburys">Ashburys</a>'},
          {team: "Manchester United FC", coords:{lat: 53.4631, lng: -2.2913}, description: "Old Trafford", address:"Sir Matt Busby Way, Stretford, Manchester M16 0RA", station:'<a href="https://www.networkrail.co.uk/stations/manchester-piccadilly/">Manchester Piccadilly</a>'},
          {team: "Liverpool FC", coords:{lat: 53.4308, lng: -2.9608}, description: "Anfield", address:"Anfield Rd, Liverpool L4 0TH", station:'<a href="https://www.merseyrail.org/plan-your-journey/stations/sandhills.aspx">Sandhills</a>'},
          {team: "Tottenham FC", coords:{lat: 51.5560, lng: -0.2795}, description: "Wembley", address:"London HA9 0WS", station:'<a href="https://www.chilternrailways.co.uk/">Wembley Stadium</a>'},
          {team: "Chelsea FC", coords:{lat: 51.4817, lng: -0.1910}, description: "Stamford Bridge", address:"Fulham Rd, Fulham, London SW6 1HS", station:'<a href="https://www.southernrailway.com/">West Brompton</a>'},
          {team: "Arsenal FC", coords:{lat: 51.5549, lng: -0.1084}, description: "The Emirates Stadium", address:"Hornsey Rd, London N7 7AJ", station:'<a href="https://www.greatnorthernrail.com/">Drayton Park</a>'},
          {team: "Burnley FC", coords:{lat: 53.7890, lng: -2.2302}, description: "Turf Moor", address:"52-56 Harry Potts Way, Burnley BB10 4BX", station:'<a href="https://www.northernrailway.co.uk/">Burnley Central</a>'},
          {team: "Everton FC", coords:{lat: 53.4388, lng: -2.9663}, description: "Goodison Park", address:"Goodison Rd, Liverpool L4 4EL", station:'<a href="https://www.merseyrail.org/">Kirkdale</a>'},
          {team: "Leicester City FC", coords:{lat: 52.6204, lng: -1.1422}, description: "King Power Stadium", address:"Filbert Way, Leicester LE2 7FL", station:'<a href="https://www.crosscountrytrains.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=map%20results">Leicester Station</a>'},
          {team: "Newcastle United FC", coords:{lat: 54.9756, lng: -1.6217}, description: "St James' Park", address:"Barrack Rd, Newcastle upon Tyne NE1 4ST", station:'<a href="https://www.crosscountrytrains.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=map%20results">Newcastle Station</a>'},
          {team: "Crystal Palace FC", coords:{lat: 51.398270, lng: -0.085644}, description: "Selhurst Park", address:"Whitehorse Ln, London SE25 6PU", station:'<a href="https://www.southernrailway.com/">Selhurst</a>'},
          {team: "Watford FC", coords:{lat: 51.649939, lng: -0.401707}, description: "Vicarage Road", address:"Vicarage Rd, Watford WD18 0ER", station:'<a href="https://www.wmtrains.co.uk/">Bushey</a>'},
          {team: "AFC Bournemouth", coords:{lat: 50.7352, lng: -1.838515}, description: "Dean Court", address:"King's Park Dr, Bournemouth BH7 7AF", station:'<a href="https://www.wmtrains.co.uk/">Pokesdown</a>'},
          {team: "Brighton & Hove Albion", coords:{lat: 50.861701, lng: -0.084070}, description: "Falmer Stadium", address:"Village Way, Brighton BN1 9BL", station:'<a href="https://www.southernrailway.com/">Falmer</a>'},
          {team: "West Ham United FC", coords:{lat: 51.5387078, lng: -0.0175076}, description: "London Stadium", address:"Queen Elizabeth Olympic Park, London E20 2ST", station:'<a href="https://tfl.gov.uk/modes/dlr/">Pudding Mill Lane DLR Station</a>'},
          {team: "Huddersfield Town", coords:{lat: 53.654516, lng: -1.768398}, description: "Kirklees Stadium", address:"Stadium Way, Huddersfield HD1 6PG", station:'<a href="https://www.northernrailway.co.uk/">Huddersfield Station</a>'},
          {team: "Swansea City FC", coords:{lat: 51.642827, lng: -3.934255}, description: "Liberty Stadium", address:"Plasmarl, Swansea SA1 2FA", station:'<a href="https://www.arrivatrainswales.co.uk/">Swansea Station</a>'},
          {team: "Southampton FC", coords:{lat: 50.905024, lng: -1.3923383}, description: "St Mary's Stadium", address:"Britannia Rd, Southampton SO14 5FP", station:'<a href="https://www.crosscountrytrains.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=map%20results">Southampton Central</a>'},
          {team: "Stoke City FC", coords:{lat: 52.988343, lng: -2.175693}, description: "Bet 365 Stadium", address:"Stanley Matthews Way, Stoke-on-Trent ST4 4EG", station:'<a href="https://www.crosscountrytrains.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=map%20results">Stoke on Trent Station</a>'},
          {team: "West Bromwich Albion FC", coords:{lat: 52.509058, lng: -1.964110}, description: "The Hawthorns", address:"9 Birmingham Rd, West Bromwich B71 4LF", station:'<a href="https://www.chilternrailways.co.uk/">The Hawthorns</a>'}
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
          <Fixtures fixtures={this.state.fixtures} locations={this.state.locations} favourites={this.state.favourites}  />
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
