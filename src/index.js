// import
import React, { Component } from "react";
import ReactDOM from "react-dom";

// youtube search
import YTSearch from "youtube-api-search";

// custom components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

// api key
const API_KEY = "AIzaSyCGtIV4hFOR2jXiuJoCWtRk-PmjA_jFnSE";

// create new copmonenet to produce html
class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // make search for surf boards
    YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
      // this.setState({ videos: videos });
      this.setState({ videos }) //equivalent in ES6 (names have to match)
    });
  }

  // rendering
  render() {
    return (
      <div>
        <SearchBar />
        // passing data from the parent state to the child state (passing props)
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// put component in dom
ReactDOM.render(<App />, document.querySelector(".container"));
