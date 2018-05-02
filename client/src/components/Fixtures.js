import React from "react";
import Fixture from "./Fixture";
import MapContainer from '../containers/MapContainer.js';



class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.filterFixturesByMonth = this.filterFixturesByMonth.bind(this);


    this.state = {
      fixtures: [],
      displayFixtures: [],
      locations: [],
      favourites: []
    }
  }

  filterFixturesByMonth(fixtures) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    let filteredFixtures = [];
    for (let fixture of fixtures) {
      const fixtureDate = new Date(fixture.date);
      const fixtureMonth = fixtureDate.getMonth();
      if (fixtureMonth === currentMonth) {
        filteredFixtures.push(fixture)
      }
    }
    return filteredFixtures;
  }

  render() {
    if (!this.props.fixtures) {
      return null
    }
    let fixtures = this.filterFixturesByMonth(this.props.fixtures);
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
              action={this.props.action}
              >
            </Fixture>
          )
        })}
      </div>
    )
  }
}
export default Fixtures;
