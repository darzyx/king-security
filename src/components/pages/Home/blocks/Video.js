import styled from "styled-components";

const Video = styled.video.attrs({
  autoPlay: true,
  loop: true,
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

export default Video;
