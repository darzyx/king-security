import React, { Component } from "react";
import { Placeholder } from "semantic-ui-react";

import Page from "./blocks";
import KingDivider from "../../misc/KingDivider";

export default class Services extends Component {
  componentDidMount() {
    document.title = "King Security | Services";
  }

  render() {
    return (
      <Page>
        <h2 style={{ textAlign: "center" }}>Services</h2>
        <KingDivider />
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
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Page>
    );
  }
}
