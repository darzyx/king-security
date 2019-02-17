import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
