import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";

const King = styled(Divider).attrs({
  horizontal: true,
  inverted: true
})`
  &&&&& {
    color: goldenrod;
  }
`;

const KingDivider = () => <King>♔</King>;

export default KingDivider;
