import React from "react";
import Fixture from "./Fixture";
import MapContainer from '../containers/MapContainer.js';
// const Fixtures = () => (
//   <div>
//     <h4>Fixtures</h4>
//     <p>Welcome to our magical fixtures page</p>
//   </div>
// );
class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.filterFixturesByMonth = this.filterFixturesByMonth.bind(this);


    this.state = {
      fixtures: [],
      displayFixtures: [],
      locations: []
    }
  }
  componentDidMount() {
    fetch("http://api.football-data.org/v1/competitions/445/fixtures?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({fixtures: json.fixtures}))
  }

  filterFixturesByMonth(fixtures) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    let filteredFixtures = [];
    for (let fixture of fixtures) {
      const fixtureDate = new Date(fixture.date);
      console.log("fixture Date", fixtureDate);
      const fixtureMonth = fixtureDate.getMonth();
      console.log("fixture Month", fixtureMonth);
      if (fixtureMonth === currentMonth) {
        filteredFixtures.push(fixture)
      }
    }
    return filteredFixtures;
    // this.setState({displayFixtures: filteredFixtures})
  }

  render() {
    let fixtures = this.filterFixturesByMonth(this.state.fixtures);
    return (
      <div>
        <MapContainer locations={this.props.locations}/>
        {fixtures.map((fixture, index) => {
          return (
            <Fixture
              homeTeam={fixture.homeTeamName}
              awayTeam={fixture.awayTeamName}
              status={fixture.status}
              homeGoals={fixture.result.goalsHomeTeam}
              awayGoals={fixture.result.goalsAwayTeam}
              date={fixture.date}
              key={index}
              >
            </Fixture>
          )
        })}
      </div>
    )
  }
}
export default Fixtures;
