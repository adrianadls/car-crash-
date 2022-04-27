import React from "react";
import pic from "./images/Map.jpeg";
import data from "./data";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

console.log(data.crash_time);
console.log(data.borough);

//import React, { Component } from "react";
//import "./App.css";

//class App extends Component {
// constructor(props) {
//  super(props);
//  this.state = {
// Add data state here
//    data: []
//  };
// }

// Code your API request here
//componentDidMount = () => {
//  fetch(
//   " data"
//   )
// .then((response) => response.json())
//  .then((data) => {
//     this.setState({ data: data });
//  console.log(this.state.data);
//   })
//   .catch((e) => {
//    console.log(e);
//   });
// };

let bData = {
  //MANHATTAN: 0,
  // BROOKLYN: 0,
  // QUEENS: 0
  // BRONX: 0,
  // STATEN ISLAND: 0
};

function Map() {
  //map for borough

  return (
    <div className="Map">
      <img src={pic} />

      <VictoryChart>
        <VictoryAxis
          tickValues={[
            "STATEN ISLAND",
            "BRONX",
            "QUEENS",
            "BROOKLYN",
            "MANHATTAN"
          ]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x} mil`} />

        <VictoryBar data={data} x="borough" y="crash_time" />
      </VictoryChart>
    </div>
  );
}

export default Map;
