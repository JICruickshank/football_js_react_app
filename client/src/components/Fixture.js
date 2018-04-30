import React from "react";
const Fixture = (props) => {
  if(props.status === "FINISHED") {
    let date = new Date(props.date)
    const stringDate = date.toDateString();
    return (
      <React.Fragment>
        <p>{stringDate}</p>
        <p>{props.homeTeam} {props.homeGoals}-{props.awayGoals} {props.awayTeam}</p>
      </React.Fragment>
    )
  }
  else {
    let date = new Date(props.date);
    const stringDate = date.toDateString();
    return (
      <React.Fragment>
        <p>{stringDate}</p>
        <p>{props.homeTeam} v {props.awayTeam}</p>
      </React.Fragment>
    )
  }
}
export default Fixture;
