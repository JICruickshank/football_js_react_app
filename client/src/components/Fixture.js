import React from "react";



const Fixture = (props) => {

  const addToFavourites = function(){
    let date = new Date(props.date);
    const stringDate = date.toDateString();
    const favouriteToAdd= {
      date:stringDate,
      homeTeam:props.homeTeam,
      awayTeam:props.awayTeam
    }
    console.log("button working");
    const request = new XMLHttpRequest();
    request.open("POST", "//localhost:3001/api/favourites");
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener('load', function(){
      if(this.status !== 201){
        return;
      }
    })
    request.send(JSON.stringify(favouriteToAdd));
  };



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
