import React from "react";
import Toggle from "./Toggle";
// import "/Users/anniewang/General_Assembly/phoenix/unit_2/WhatDoIConsume-/consumption/src/App.css"
// import Home from "/Users/anniewang/General_Assembly/phoenix/unit_2/WhatDoIConsume-/consumption/src/img/home.jpg"
function Homepage(props) {
  return (
    <div className = "home">
      <h1>What Have I been Consuming? </h1>
      <Toggle />
    </div>
  );
}

export default Homepage;