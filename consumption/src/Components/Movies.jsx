import React, { useState } from "react";
import axios from "axios";

function Movies(props) {
  const [Name, setName] = useState("");
  const [Rating, setRating] = useState("");
  const [Review, setReview] = useState("");
  const [Notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      Name,
      Rating,
      Review,
      Notes
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Movies`;
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
        <label htmlFor="">Notes</label>
      <input
        type="text"
        value={Notes}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Movies;