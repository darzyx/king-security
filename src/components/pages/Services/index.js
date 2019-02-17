import React, { Component } from "react";

import Page from "./blocks";

export default class Services extends Component {
  componentDidMount() {
    document.title = "King Security | Services";
  }

  render() {
    return (
      <Page>
        <h1>Services</h1>
      </Page>
    );
  }
}
