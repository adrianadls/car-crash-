import React, { Component } from "react";
import Map from "./Components/map.js";
import "bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  counters = {
    manhattan: 0,
    brooklyn: 0
  };
  //map ()
  render() {
    return (
      <div className="App">
        <h1>Staten Island Crash Locations 2022</h1>
        <Map />
      </div>
    );
  }
}
export default App;
