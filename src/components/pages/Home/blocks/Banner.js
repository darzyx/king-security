import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const Banner = styled(Segment).attrs({
  inverted: true
})`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Banner;
