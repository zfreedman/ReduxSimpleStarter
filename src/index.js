// import
import React from "react";
import ReactDOM from "react-dom";

// api key
const API_KEY = "AIzaSyCGtIV4hFOR2jXiuJoCWtRk-PmjA_jFnSE";
/*
const API_KEY = ((f) => {
  var raw_file = new XMLHttpRequest();
  raw_file.open("GET", f, false);
  raw_file.onreadystatechange = function() {
    if(raw_file.readyState === 4)
    {
      if(raw_file.status === 200 || raw_file.status == 0)
      {
        alert(raw_file.responseText);
        return raw_file.responseText;
      }
    }
  }
})("./api.txt")
*/

// create new copmonenet to produce html
const App = () => {
  return <div>Hi!</div>;
}

// put component in dom
ReactDOM.render(<App />, document.querySelector(".container"));
