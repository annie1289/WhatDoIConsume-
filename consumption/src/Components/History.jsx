import React, { Component } from 'react';
import axios from "axios";

class History extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  async getBooks() {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Books`;
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const bookList = Object.keys(response.data.records)
    this.setState({ books: bookList });
    
  }

  async componentDidMount() {
    await this.getBooks();
    console.log("Component did mount!");
  }

  render(){
    const { books } = this.state;
    return (
      <div>
        <ul>
          {books.map((book, index) => (
            console.log(book,index),
          <li key={index}>
            {book}
          </li>
        ))}
        </ul>
      </div>
    );
  }

}

export default History;