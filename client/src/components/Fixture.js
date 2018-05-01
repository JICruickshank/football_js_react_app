import React from "react";
const Fixture = (props) => {
  const addToFavourites = function(){
    debugger;
    let date = new Date(props.date);
    const stringDate = date.toDateString();
    const favouriteToAdd= {
      date:stringDate,
      homeTeam:props.homeTeam,
      awayTeam:props.awayTeam
    }
    console.log("button working");
    // return null;
  }
  // this.addToFavourites = this.addToFavourites.bind(this);
  if(props.status === "FINISHED") {
    let date = new Date(props.date)
    const stringDate = date.toDateString();
    return (
      <React.Fragment>
        <p>{stringDate} {props.homeTeam} {props.homeGoals}-{props.awayGoals} {props.awayTeam}</p>
      </React.Fragment>
    )
  }
  else {
    let date = new Date(props.date);
    const stringDate = date.toDateString();
    return (
      <React.Fragment>
        <p>{stringDate} {props.homeTeam} v {props.awayTeam} <button onClick={addToFavourites}>Add to Favourites</button></p>
      </React.Fragment>
    )
  }


}
export default Fixture;
