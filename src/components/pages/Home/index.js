import React, { Component } from "react";

import Page from "./blocks";
import LogoVideo from "./LogoVideo.js";

export default class Home extends Component {
  componentDidMount() {
    document.title = "King Security | Home";
  }

  render() {
    return (
      <Page>
        <h1>Home</h1>
        <LogoVideo />
      </Page>
    );
  }
}
