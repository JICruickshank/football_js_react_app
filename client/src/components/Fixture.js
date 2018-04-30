import React from "react";
const Fixture = (props) => {
  if(props.status === "FINISHED") {
    // let date = new Date(props.date)
    // stringDate = date.toString();
    return (
      <React.Fragment>
        <p>{props.date}</p>
        <p>{props.homeTeam} {props.homeGoals}-{props.awayGoals} {props.awayTeam}</p>
      </React.Fragment>
    )
  }
  else {
    // let date = new Date(props.date);
    // stringDate = date.toString();
    return (
      <React.Fragment>
        <p>{props.date}</p>
        <p>{props.homeTeam} v {props.awayTeam}</p>
      </React.Fragment>
    )
  }
}
export default Fixture;
