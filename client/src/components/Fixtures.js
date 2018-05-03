import React from "react";
import Fixture from "./Fixture";
import MapContainer from '../containers/MapContainer.js';
import DropDown from "./DropDown"

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.filterFixturesByMonth = this.filterFixturesByMonth.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.findMatchDays = this.findMatchDays.bind(this);
    this.getStadium = this.getStadium.bind(this);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    this.state = {
      fixtures: [],
      displayFixtures: [],
      locations: [],
      favourites: [],
      month: currentMonth,
      stadium: null
      }
    }

  changeMonth(event) {
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

  // add all match dates to an array
  // eliminate duplicates
  // for each date, loop over fixtures and add to an array
  // create object holding objects (date as key, array of fixtures as value)
  findMatchDays() {
    let matchDays = [];
    for (let fixture of this.props.fixtures) {
      const fixtureDate = new Date(fixture.date);
      const stringDate = fixtureDate.toDateString();
      matchDays.push(stringDate);
    }
    matchDays = Array.from(new Set(matchDays));
    let fixturesObject = {}
    for (let matchDay of matchDays) {
      let matchDayGames = [];
      for (let fixture of this.props.fixtures) {
        const fixtureDate = new Date(fixture.date);
        const stringDate = fixtureDate.toDateString();
        if (stringDate === matchDay) {
          matchDayGames.push(fixture);
        }
      }
      fixturesObject[matchDay] = matchDayGames;
    }
    console.log(fixturesObject);


  }

  // find location of home team, set state to render page and map again
  // pass down stadium to map container
  getStadium(team) {
    for (let location of this.props.locations) {
      if (team === location.team) {
        this.setState({stadium: location.coords});
      }
    }

  }

  render() {
    this.findMatchDays()
    if (!this.props.fixtures) {
      return null
    }
    let fixtures = this.filterFixturesByMonth(this.props.fixtures, this.state.month);
    return (
      <div>

        <MapContainer locations={this.props.locations} stadium={this.state.stadium}/>

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
              stadium={this.getStadium}
              >
            </Fixture>
          )
        })}
      </div>
    )
  }
}
export default Fixtures;
