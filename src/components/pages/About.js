import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return <h1>About</h1>;
  }
}
