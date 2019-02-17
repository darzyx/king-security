import React, { Component } from "react";

import Navbar from "./Navbar";
import LogoVideo from "./LogoVideo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LogoVideo />
      </div>
    );
  }
}

export default App;
