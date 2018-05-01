import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '.LeagueTable.css';1
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
class LeagueTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.teams) {
    return (
      null
    )}

  let data = [];
  for (let team of this.props.teams) {
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
