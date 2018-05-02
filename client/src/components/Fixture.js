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
      <div className="fixtures">
        <ul>
          <li classname="fix-li">
            {stringDate}
          </li>
          <li classname="fix-li">
            {props.homeTeam}
          </li>
          <li classname="fix-li">
            {props.homeGoals}
          </li>
          <li classname="fix-li">
            -
          </li>
          <li classname="fix-li">
            {props.awayGoals}
          </li>
          <li classname="fix-li">
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
          <li classname="fix-li">
            {stringDate}
          </li>
          <li classname="fix-li">
            {props.homeTeam}
          </li>
          <li classname="fix-li">
            v
          </li>
          <li classname="fix-li">
            {props.awayTeam}
          </li>
          <li classname="fix-li">
            <button onClick={addToFavourites}>Add to Favourites</button>
          </li>
        </ul>
      </div>
    )
  }


}
export default Fixture;
