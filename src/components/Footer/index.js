import React, { Component } from "react";

import Foot from "./blocks";
import Camera from "./Camera";

export default class Footer extends Component {
  render() {
    return (
      <Foot>
        <Camera />
        <p>Copyright © King Security 2019</p>
      </Foot>
    );
  }
}
