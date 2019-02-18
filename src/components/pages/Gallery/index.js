import React, { Component } from "react";
import { Divider, Grid, Image, Placeholder } from "semantic-ui-react";

import Page from "./blocks";
import myImg from "../../../media/camera_views.png";

export default class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return (
      <Page>
        <h2 style={{ textAlign: "center" }}>Gallery</h2>
        <Divider horizontal inverted>
          ♔
        </Divider>
        <Grid container columns={3}>
          <Grid.Column>
            <Image src={myImg} />
          </Grid.Column>
          <Grid.Column>
            <Placeholder inverted>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
          <Grid.Column>
            <Placeholder inverted>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
          <Grid.Column>
            <Placeholder inverted>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
          <Grid.Column>
            <Placeholder inverted>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
          <Grid.Column>
            <Placeholder inverted>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Grid.Column>
        </Grid>
      </Page>
    );
  }
}
