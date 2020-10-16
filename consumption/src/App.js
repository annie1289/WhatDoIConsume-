import './App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import History from "./Components/History"
import Home from "/Users/anniewang/General_Assembly/phoenix/unit_2/WhatDoIConsume-/consumption/src/Components/home.jpg"
import Past from "/Users/anniewang/General_Assembly/phoenix/unit_2/WhatDoIConsume-/consumption/src/img/history-50x50.png"
function App() {
  
    return(
    <div className="App">
        <nav>
        <Link to="/" className = "homeIcon"><img src={Home} alt = "Home"/></Link>
        <Link to="/Components/History" className = "historyIcon"><img src={Past} alt = "History"/></Link>
          </nav>
        <main>
          <Route exact path="/">
      <Homepage/>
            </Route>
            <Route exact path="/Components/History">
      <History/>
      </Route>
        </main>   
      </div>
  
  );
}

export default App;
