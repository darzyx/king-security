import React, { Component } from "react";
import { Grid, Image, Placeholder } from "semantic-ui-react";

import Page from "./blocks";
import KingDivider from "../../misc/KingDivider";
import imgCameraViews from "../../../media/camera_views.png";
import imgWarning from "../../../media/warning.jpg";
import imgBusinessCard from "../../../media/businesscard.jpg";
import imgProducts from "../../../media/products.jpg";

export default class Gallery extends Component {
  componentDidMount() {
    document.title = "King Security | Gallery";
  }

  render() {
    return (
      <Page>
        <h2 style={{ textAlign: "center" }}>Gallery</h2>
        <KingDivider />
        <Grid container columns={3}>
          <Grid.Column>
            <Image src={imgBusinessCard} />
          </Grid.Column>
          <Grid.Column>
            <Image src={imgProducts} />
          </Grid.Column>
          <Grid.Column>
            <Image src={imgCameraViews} />
          </Grid.Column>
          <Grid.Column>
            <Image src={imgWarning} />
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
