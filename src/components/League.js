import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

// const League = () => (
//   <div>
//     <h4>League</h4>
//     <p>Welcome to our magical league page</p>
//   </div>
// );

class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: []
    }
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v1/competitions/445/leagueTable?api-key=ce59c6fd7c2d47c29fb4c133e01112d8", {headers: {'x-auth-token': 'ce59c6fd7c2d47c29fb4c133e01112d8'}})
      .then(response => response.json())
      .then(json => this.setState({league: json.standing}))
      // .then(json => {debugger})

  }

  render() {

  let data = [];
  for (let team of this.state.league) {

    const teamData = {
      position: team.positon,
      name: team.teamName,
      played: team.playedGames,
      won: team.wins,
      drawn: team.draws,
      lost: team.losses,
      for: team.goals,
      against: team.goalsAgainst,
      points: team.points,
      goalDifference: team.goalDifference}
      data.push(teamData);
  }

  return (
    <div>
      <BootstrapTable data={data}>
        <TableHeaderColumn dataField="position">Position</TableHeaderColumn>
        <TableHeaderColumn dataField="name" isKey>Team</TableHeaderColumn>
        <TableHeaderColumn dataField="played">P</TableHeaderColumn>
        <TableHeaderColumn dataField="won">W</TableHeaderColumn>
        <TableHeaderColumn dataField="drawn">D</TableHeaderColumn>
        <TableHeaderColumn dataField="lost">L</TableHeaderColumn>
        <TableHeaderColumn dataField="for">F</TableHeaderColumn>
        <TableHeaderColumn dataField="against">A</TableHeaderColumn>
        <TableHeaderColumn dataField="points">Pts</TableHeaderColumn>
        <TableHeaderColumn dataField="goalDifference">GD</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
  }

}

export default League;
