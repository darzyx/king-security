import React, { Component } from "react";
import { Divider, Placeholder } from "semantic-ui-react";

import Page from "./blocks";

export default class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return (
      <Page>
        <h2 style={{ textAlign: "center" }}>About</h2>
        <Divider horizontal inverted>
          ♔
        </Divider>
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
