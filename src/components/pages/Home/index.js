import React, { Component } from "react";
import { Placeholder } from "semantic-ui-react";

import Page from "./blocks";
import LogoVideo from "./LogoVideo.js";
import Reviews from "./Reviews";

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
            <h1>KING SECURITY</h1>
            <p>
              Setup Video Surveillance • Residential • Small Business • 24 Hour
              Security Guard • Monitor Video Surveillance • Private Security
              Guard
            </p>
          </Page.Intro>
        </Page.Banner>
        <Placeholder fluid inverted>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
        <Reviews />
        <Placeholder fluid inverted>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Page>
    );
  }
}
