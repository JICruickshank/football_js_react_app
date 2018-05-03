import React from "react";

const Fixture = (props) => {

  const addToFavourites = function() {
  //   fetch("//localhost:3001/api/favourites", {headers: {"Content-Type": "application/json"}}, {body: JSON.stringify(favouriteToAdd)})
  //   .then(response => response.json())
  //   .then(favouriteToAdd => console.log(favouriteToAdd))
  // }
  let date = new Date(props.date);
    const stringDate = date.toDateString();
    const favouriteToAdd= {
      date:stringDate,
      homeTeam:props.homeTeam,
      awayTeam:props.awayTeam
    }
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
          <li classname="fixli">
            {stringDate}
          </li>
          <li classname="fixli">
            {props.homeTeam}
          </li>
          <li classname="fixli">
            {props.homeGoals}
          </li>
          <li classname="fixli">
            -
          </li>
          <li classname="fixli">
            {props.awayGoals}
          </li>
          <li classname="fixli">
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
            <button onClick={addToFavourites}>Add</button>
          </li>
          <li className="fixli-button5">
            <button onClick={findStadium}>Location</button>
          </li>
        </ul>
      </div>

    )
  }


}
export default Fixture;
