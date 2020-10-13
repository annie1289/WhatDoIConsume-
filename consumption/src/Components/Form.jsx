// dropdown form for each of the types of media using if values?, filter objects from a single table?

import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [Name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Genre, setGenre] = useState("");
  const [Rating, setRating] = useState("");
  const [Review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      Name,
      Author,
      Genre,
      Rating,
      Review,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Books`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Author</label>
      <input
        type="text"
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="">Genre</label>
      <input
        type="text"
        value={Genre}
        onChange={(e) => setGenre(e.target.value)}
      />
         <label htmlFor="">Rating</label>
      <input
        type="text"
        value={Rating}
        onChange={(e) => setRating(e.target.value)}
      />
         <label htmlFor="">Review</label>
      <input
        type="text"
        value={Review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;