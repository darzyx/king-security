import React, { Component } from "react";
import { Route } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    document.title = "King Security | Home";
  }

  render() {
    return <h1>Home</h1>;
  }
}

class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return <h1>About</h1>;
  }
}

class Services extends Component {
  componentDidMount() {
    document.title = "King Security | Services";
  }

  render() {
    return <h1>Services</h1>;
  }
}

class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return <h1>Gallery</h1>;
  }
}

class Contact extends Component {
  componentDidMount() {
    document.title = "King Security | Contact";
  }

  render() {
    return <h1>Contact</h1>;
  }
}

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}
