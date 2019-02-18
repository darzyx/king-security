import React, { Component } from "react";
import { Grid, Image, Placeholder } from "semantic-ui-react";

import Page from "./blocks";
import KingDivider from "../../misc/KingDivider";
import img1 from "../../../media/camera_views.png";
import img2 from "../../../media/warning.jpg";
import img3 from "../../../media/businesscard.jpg";

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
            <Image src={img1} />
          </Grid.Column>
          <Grid.Column>
            <Image src={img2} />
          </Grid.Column>
          <Grid.Column>
            <Image src={img3} />
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
