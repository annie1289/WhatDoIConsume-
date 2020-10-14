import React, { useState } from "react";
import axios from "axios";

function Songs(props) {
  const [Name, setName] = useState("");
  const [Artist, setArtist] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      Name,
      Artist
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Songs`;
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
      <label htmlFor="">Artist</label>
      <input
        type="text"
        value={Artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Songs;