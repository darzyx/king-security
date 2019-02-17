import React, { Component } from "react";
import { Placeholder } from "semantic-ui-react";

import Page from "./blocks";

export default class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return (
      <Page>
        <h1>About</h1>
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
