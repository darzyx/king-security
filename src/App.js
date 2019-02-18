import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Container>
          <Divider hidden />
          <Routes />
          <Divider hidden />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
