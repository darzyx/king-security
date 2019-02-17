import React, { Component } from "react";

export default class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return <h1>Gallery</h1>;
  }
}
