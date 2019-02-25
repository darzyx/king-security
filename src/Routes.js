import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Services, Gallery, Contact, NotFound } from "./components/pages";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
