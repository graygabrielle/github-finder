import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
