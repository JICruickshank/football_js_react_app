import React from "react";
import Fixture from "./Fixture";
import MapContainer from '../containers/MapContainer.js';
import DropDown from "./DropDown"



class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.filterFixturesByMonth = this.filterFixturesByMonth.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    this.state = {
      fixtures: [],
      displayFixtures: [],
      locations: [],
      favourites: [],
      month: currentMonth
      }
    }

  changeMonth(event) {
    // console.log("previous", this.state.month);
    // console.log("selected", event.target.value)
    this.setState({month: parseInt(event.target.value)}, function() {console.log(this.state.month)})

  }

  filterFixturesByMonth(fixtures, month) {
    let filteredFixtures = [];
    for (let fixture of fixtures) {
      const fixtureDate = new Date(fixture.date);
      const fixtureMonth = fixtureDate.getMonth();
      if (fixtureMonth === month) {
        filteredFixtures.push(fixture)
      }
    }
    return filteredFixtures;
  }

  render() {
    if (!this.props.fixtures) {
      return null
    }
    let fixtures = this.filterFixturesByMonth(this.props.fixtures, this.state.month);
    return (
      <div>
        <MapContainer locations={this.props.locations}/>
        <DropDown handleSelectChange={this.changeMonth}></DropDown>
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
