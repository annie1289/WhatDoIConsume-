import './App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import History from "./Components/History"

function App() {
  
    return(
    <div className="App">
        <nav>
        <Link to="/">Homepage</Link>
        <Link to="/Components/History">History/Past Entries</Link>
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
