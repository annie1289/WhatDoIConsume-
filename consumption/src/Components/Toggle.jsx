//imported all the components I need
import Book from "./Book";
import Songs from "./Songs";
import TV from "./TV";
import Movies from "./Movies"
import React, { Component } from "react";

// Used this resource to learn how to toggle  https://www.dev-tips-and-tricks.com/toggle-visibility-with-react
class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { media: '' }
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  
  toggleHidden = (e) => {
    this.setState({ media: e.target.value })
  }
  render() {
    let form;
    if (this.state.media === "books") {
      form = <Book/>
    }
    else if (this.state.media === "shows") {
      form = <TV/>
    }
    else if (this.state.media === "movies") {
      form=<Movies/>
    }
    else if (this.state.media === "songs") {
      form=<Songs/>
    }
    else {
      form = "";
    }

    // used this to help witht the form functionality!https://reactjs.org/docs/forms.html
    return (
      <div>
        <label htmlFor="Media-type">Add Something! 
        <select onClick={this.toggleHidden} name="Media-type" id="media">
          <option value = "blank">Select a Media Type</option>
          <option value="books">Add a Book</option>
          <option value ="shows">Add a TV Show</option>
          <option value = "movies">Add a Movie</option>
          <option value = "songs">Add a Song</option>
          </select>
          </label>
        <div>
          {form}
        </div>
      </div>
    );
  }
}

export default Toggle;