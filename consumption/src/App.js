import './App.css';
import React from 'react';
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import History from "./Components/History"

function App() {
  
    return(
    <div className="App">
      <div>
        <nav>
        <Link to="/">Homepage</Link>
        <Link to="/Components/History">History/Past Entries</Link>
        {/* <Link to="/Components/Todo-List">To Consume List</Link> */}
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
    </div>
  );
}

export default App;
