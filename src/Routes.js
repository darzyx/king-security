import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Home, About, Services, Gallery, Contact } from "./components/pages";

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
