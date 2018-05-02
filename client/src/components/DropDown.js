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

  return (
    <div>
      <select >
        {months.map(month => {
          return <option key={month.index} value={month.index}>{month.month}</option>
        })}
      </select>
    </div>
  )

//   return (
//     <div>
//       <h1>Hit Parade</h1>
//       <select onChange={props.handleSelectChange}>
//         {props.genres.map(genre => {
//           return <option key={genre.name} value={genre.url}>{genre.name}</option>
//         })}
//       </select>
//     </div>
//   );
// };

}

export default DropDown;
