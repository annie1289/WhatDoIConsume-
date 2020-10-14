import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";

function App() {
  
  return (
    <div className="App">
      <div>
        <nav>
        <Link to="/">Homepage</Link>
        <Link to="/Components/History">History/Past Entries</Link>
        <Link to="/Components/Todo-List">To Consume List</Link>
        </nav>
        <main>
          <Route exact path="/">
      <Homepage/>
      </Route>
        </main>   
      </div>
    </div>
  );
}

export default App;
