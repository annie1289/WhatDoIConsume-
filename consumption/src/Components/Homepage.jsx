import React from "react";
import Toggle from "./Toggle";

function Homepage(props) {
  return (
    <div className = "home">
      <h1 className="title">What Have I been Consuming? </h1>
      <div className="Form">
        <Toggle/>
        </div>
    </div>
  );
}

export default Homepage;