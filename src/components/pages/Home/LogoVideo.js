import React, { Component } from "react";

import Page from "./blocks";

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
      <Page.Video id="logo-video">
        <Page.Source />
        Your browser does not support this video.
      </Page.Video>
    );
  }
}
