import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    document.title = "King Security | Home";
  }

  render() {
    return <h1>Home</h1>;
  }
}
