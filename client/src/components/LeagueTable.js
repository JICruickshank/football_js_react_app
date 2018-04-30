import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '.LeagueTable.css';
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
class LeagueTable extends React.Component {
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
  }
  render() {
  let data = [];
  for (let team of this.state.league) {
    const teamData = {
      position: team.position,
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
        <TableHeaderColumn dataField="position"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                           >Position</TableHeaderColumn>

        <TableHeaderColumn dataField="name" isKey
                           dataAlign='left'
                           headerAlign="center"
                           width="200"
                           >Team</TableHeaderColumn>
        <TableHeaderColumn dataField="played"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                           >P</TableHeaderColumn>
        <TableHeaderColumn dataField="won"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                           >W</TableHeaderColumn>
        <TableHeaderColumn dataField="drawn"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                           >D</TableHeaderColumn>
        <TableHeaderColumn dataField="lost"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                           >L</TableHeaderColumn>
        <TableHeaderColumn dataField="for"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                          >F</TableHeaderColumn>
        <TableHeaderColumn dataField="against"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                          >A</TableHeaderColumn>
        <TableHeaderColumn dataField="points"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                          >Pts</TableHeaderColumn>
        <TableHeaderColumn dataField="goalDifference"
                           dataAlign='center'
                           headerAlign="center"
                           width="70"
                          >GD</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
  }
}
export default LeagueTable;
