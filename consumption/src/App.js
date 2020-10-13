import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Form from "./Components/Form";

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Books`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setBooks(response.data.records);
      console.log(response.data.records);
    };
      getBooks();
  }, []);
  
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
            <Form />
            <button type="submit">Submit</button>
      <Homepage name={"Consuming"}/>
      </Route>
        </main>   
      </div>
    </div>
  );
}

export default App;
