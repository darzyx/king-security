import styled from "styled-components";

import vid from "../../../../media/logo.mp4";

const Source = styled.source.attrs({
  src: vid,
  type: "video/mp4"
})``;

export default Source;
