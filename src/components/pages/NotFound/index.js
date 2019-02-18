import React, { Component } from "react";
import { Divider } from "semantic-ui-react";

import Page from "./blocks";
import Image from "./Image";

export default class NotFound extends Component {
  componentDidMount() {
    document.title = "King Security | Not Found";
  }

  render() {
    return (
      <Page>
        <h2>Page Not Found</h2>
        <Divider horizontal inverted>
          ♔
        </Divider>
        <Divider hidden />
        <Page.Container>
          <Image />
        </Page.Container>
      </Page>
    );
  }
}
