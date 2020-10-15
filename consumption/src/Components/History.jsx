import React, { Component } from 'react';
import axios from "axios";

class History extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      movies: [],
      shows: [],
      songs: []
    };
  }

  async getBooks() {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Books`;
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    console.log(response.data.records);
    const bookList = response.data.records;
    this.setState({ books: bookList });
    
  }
 
  async getShows() {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/TV`;
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    console.log(response.data.records);
    const showList = response.data.records;
    this.setState({ shows: showList });
    
  }


  async getMovies() {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Movies`;
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    console.log(response.data.records);
    const movieList = response.data.records;
    this.setState({ movies: movieList });
    
  }

  async getSongs() {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Songs`;
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    console.log(response.data.records);
    const songList = response.data.records;
    this.setState({ songs: songList });
    
  }
  async componentDidMount() {
    await this.getBooks();
    await this.getShows();
    await this.getMovies();
    await this.getSongs();
  }
 

  render(){
    const { books } = this.state;
    const { shows } = this.state;
    const { movies } = this.state;
    const { songs } = this.state;
    return (
      <div>
        <h1>Books I've Read</h1>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              Book Name: {book.fields.Name} <br/>
              Author: {book.fields.Author} <br />
              Genre: {book.fields.Genre} <br />
              Rating: {book.fields.Rating} <br />
              Review: {book.fields.Review} 
          </li>
        ))}
        </ul>
        <h1>Movies I've Watched</h1>
        <div>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              Movie Name: {movie.fields.Name} <br/>
              Rating: {movie.fields.Rating} <br />
              Review: {movie.fields.Review} <br />
              Notes: {movie.fields.Notes} 
          </li>
        ))}
        </ul>
        </div>
        <h1>TV Shows I've Watched</h1>
        <div>
        <ul>
          {shows.map((show, index) => (
            <li key={index}>
              Show Name: {show.fields.Name} <br/>
              Rating: {show.fields.Rating} <br />
              Review: {show.fields.Review} <br />
              Notes: {show.fields.Notes} 
          </li>
        ))}
        </ul>  
        </div>
        <h1>My Favorite Songs</h1>
        <div>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              Song Name: {song.fields.Name} <br/>
              Artist: {song.fields.Artist} 
          </li>
        ))}
        </ul>
        </div>

      </div>
    );
  }

}

export default History;