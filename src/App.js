import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Camera from "./Camera";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Divider hidden />
          <Routes />
          <Divider inverted />
          <Camera />
        </Container>
      </div>
    );
  }
}

export default App;
