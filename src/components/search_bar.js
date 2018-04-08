// import
import React, { Component } from "react";

// setup search bar (functional componenet)
/*
const SearchBar = () => {
  return <input />
}
*/

// class-based
class SearchBar extends Component {
  render() {
    //return <input onChange={this.onInputChange} />
    return <input onChange={
      (event) => console.log(event.target.value)
    } />
  }

  // event handler
  /*
  onInputChange(event) {
    console.log(event.target.value)
  }
  */
}

// export
export default SearchBar;
