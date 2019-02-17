import styled from "styled-components";

const Video = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true
})`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default Video;
