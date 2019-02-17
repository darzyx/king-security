import React, { Component } from "react";

import Page from "./blocks";

export default class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return (
      <Page>
        <h1>About</h1>
      </Page>
    );
  }
}
