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
              {book.fields.Name} <br/>
              {book.fields.Author} <br />
              {book.fields.Genre} <br />
              {book.fields.Rating} <br />
              {book.fields.Review} 
          </li>
        ))}
        </ul>
        <h1>Movies I've Watched</h1>
        <div>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.fields.Name} <br/>
              {movie.fields.Rating} <br />
              {movie.fields.Review} <br />
              {movie.fields.Notes} 
          </li>
        ))}
        </ul>
        </div>
        <h1>TV Shows I've Watched</h1>
        <div>
        <ul>
          {shows.map((show, index) => (
            <li key={index}>
              {show.fields.Name} <br/>
              {show.fields.Rating} <br />
              {show.fields.Review} <br />
              {show.fields.Notes} 
          </li>
        ))}
        </ul>  
        </div>
        <h1>My Favorite Songs</h1>
        <div>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {song.fields.Name} <br/>
              {song.fields.Artist} 
          </li>
        ))}
        </ul>
        </div>

      </div>
    );
  }

}

export default History;