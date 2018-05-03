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

  // pass home team to fixtures getStadium method
  const findStadium = function() {
    props.stadium(props.homeTeam);
  }



  if(props.status === "FINISHED") {
    let date = new Date(props.date)
    const stringDate = date.toDateString();
    return (
      <div className="fixtures">
        <ul>
          <li classname="fixli1">
            {stringDate}
          </li>
          <li classname="fixli2">
            {props.homeTeam}
          </li>
          <li classname="fixli7">
            {props.homeGoals}
          </li>
          <li classname="fixli3">
            -
          </li>
          <li classname="fixli8">
            {props.awayGoals}
          </li>
          <li classname="fixli4">
            {props.awayTeam}
          </li>
        </ul>
      </div>
    )
  }
  else {
    let date = new Date(props.date);
    const stringDate = date.toDateString();
    return (
      <div className="fixtures">
        <ul>
          <li className="fixli1">
            {stringDate}
          </li>
          <li className="fixli2">
            {props.homeTeam}
          </li>
          <li className="fixli3">
            v
          </li>
          <li className="fixli4">
            {props.awayTeam}
          </li>
          <li className="fixli-button5">
            <button className="btn" onClick={findStadium}><img src="./images/globe2.png" height="12" width="15"></img></button>
          </li>
          <li className="fixli-button6">
            <button className="btn" onClick={addToFavourites}>Add</button>
          </li>
        </ul>
      </div>

    )
  }


}
export default Fixture;
