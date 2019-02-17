import React, { Component } from "react";

import Video from "./blocks";

export default class LogoVideo extends Component {
  componentDidMount() {
    const logoVideo = document.getElementById("logo-video");
    logoVideo.oncanplaythrough = () => {
      logoVideo.muted = true;
      logoVideo.play();
    };
  }

  render() {
    return (
      <Video id="logo-video">
        <Video.Source />
        Your browser does not support the video tag.
      </Video>
    );
  }
}
