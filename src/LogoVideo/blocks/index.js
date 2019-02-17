import React from "react";
import styled from "styled-components";

import Source from "./Source";

const VideoBlock = styled.video.attrs({
  autoPlay: true,
  muted: true
})`
  float: right;
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

const Video = props => <VideoBlock {...props} />;

Video.Source = Source;

export default Video;
