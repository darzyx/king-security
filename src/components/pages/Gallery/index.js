import React, { Component } from "react";

import Page from "./blocks";

export default class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return (
      <Page>
        <h1>Gallery</h1>
      </Page>
    );
  }
}
