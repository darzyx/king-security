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
        <Page.Banner>
          <LogoVideo />
          <Page.Intro>
            <h1>SECURITY SERVICES</h1>
            <p>
              Setup Video Surveillance • Residential • Small Business • 24 Hour
              Security Guard • Monitor Video Surveillance • Private Security
              Guard
            </p>
          </Page.Intro>
        </Page.Banner>
      </Page>
    );
  }
}
