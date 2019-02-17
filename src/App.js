import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Navbar from "./Navbar";
import LogoVideo from "./LogoVideo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <LogoVideo />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
