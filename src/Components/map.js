import React from "react";
import pic from "./images/Map.jpeg";
import data from "./data";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

console.log(data.crash_time);
console.log(data.borough);

function Map() {
  return (

    map.data{



    }


    <div className="Map">
      <img src={pic} />

      <VictoryChart>
        <VictoryAxis
          tickValues={[
            "STATEN ISLAND",
            " BRONX",
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
