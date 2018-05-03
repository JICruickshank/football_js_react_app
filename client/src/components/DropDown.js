import React from "react";

const DropDown = (props) => {
  const months = [
    {month: "January",
    index: 0},
    {month: "February",
    index: 1},
    {month: "March",
    index: 2},
    {month: "April",
    index: 3},
    {month: "May",
    index: 4},
    {month: "June",
    index: 5},
    {month: "July",
    index: 6},
    {month: "August",
    index: 7},
    {month: "September",
    index: 8},
    {month: "October",
    index: 9},
    {month: "November",
    index: 10},
    {month: "December",
    index: 11}
  ]

  const getCurrentMonth = function() {
    const date = new Date();
    const currentMonth = date.getMonth();
    return currentMonth;
  }

  const selectedValue = function(index) {
    if(index === getCurrentMonth()) {
      return true;
    }
    return false;
  }

  return (

    <div className="dropdown">

      <select onChange={props.handleSelectChange}>
        {months.map(month => {
          return <option selected={selectedValue(month.index)} key={month.index} value={month.index}>{month.month}</option>
        })}
      </select>
    </div>
  )

}

export default DropDown;
