import React from "react";
import axios from "axios";

function History(props) {

  //set up a state and have getBooks be called upon mounting the component and have the books be in the state
  // render the books after that
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
    <div className="History">
      <books/>
      <h3>{props.books.fields.Name}</h3>
      <h4>{props.books.fields.Author}</h4>
      <h5>{props.books.fields.Genre}</h5>
      <h6>{props.books.fields.Rating}</h6>
      <h7>{props.books.fields.Review}</h7>
    {/* books.map(book => < {...book}) */}
    </div>
    
    );
}

export default History;