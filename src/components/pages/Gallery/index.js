import React, { Component } from "react";
import { Card, Placeholder } from "semantic-ui-react";

import Page from "./blocks";

export default class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return (
      <Page>
        <h1>Gallery</h1>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Placeholder inverted>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder inverted>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder inverted>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder inverted>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Placeholder inverted>
                <Placeholder.Image rectangular />
              </Placeholder>
            </Card.Content>
          </Card>
        </Card.Group>
      </Page>
    );
  }
}
