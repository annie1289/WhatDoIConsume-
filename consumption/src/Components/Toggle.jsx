import Book from "./Book";
import Songs from "./Songs";
import TV from "./TV";
import Movies from "./Movies"
import React, { Component } from "react";

// Used this resource to learn how to toggle  https://www.dev-tips-and-tricks.com/toggle-visibility-with-react
class Toggle extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return(
    <div>
      <button onClick={this.toggleHidden.bind(this)}>
        Click to Add Media
      </button>
        {!this.state.isHidden && <Book />}
        {!this.state.isHidden && <TV />}
        {!this.state.isHidden && <Movies/>}
        {!this.state.isHidden && <Songs/>}

      </div>
      )
  }

};



export default Toggle;