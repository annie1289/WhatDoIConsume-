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
            <li key={index} className="booksList">
              <b>Book Name:</b> {book.fields.Name} <br/>
              <b>Author:</b> {book.fields.Author} <br />
              <b>Genre: </b>{book.fields.Genre} <br />
              <b> Rating:</b> {book.fields.Rating} <br />
              <b>Review:</b> {book.fields.Review} 
          </li>
        ))}
        </ul>
        <h1>Movies I've Watched</h1>
        <div>
        <ul className = "movies">
          {movies.map((movie, index) => (
            <li key={index} className = "moviesList">
              <b>Movie Name:</b> {movie.fields.Name} <br/>
              <b>Rating:</b> {movie.fields.Rating} <br />
              <b>Review:</b> {movie.fields.Review} <br />
              <b>Notes: </b>{movie.fields.Notes} 
          </li>
        ))}
        </ul>
        </div>
        <h1>TV Shows I've Watched</h1>
        <div>
        <ul>
          {shows.map((show, index) => (
            <li key={index} className = "showsList">
              <b>Show Name:</b> {show.fields.Name} <br/>
              <b>Rating:</b> {show.fields.Rating} <br />
              <b>Review:</b> {show.fields.Review} <br />
              <b>Notes:</b> {show.fields.Notes} 
          </li>
        ))}
        </ul>  
        </div>
        <h1>My Favorite Songs</h1>
        <div>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className = "songsList">
              <b>Song Name:</b> {song.fields.Name} <br/>
              <b>Artist:</b> {song.fields.Artist} 
          </li>
        ))}
        </ul>
        </div>

      </div>
    );
  }

}

export default History;