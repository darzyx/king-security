import React from "react";
import styled from "styled-components";

const FootBlock = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px; /* Bottom padding of the App */
  background: #1b1c1d;

  p {
    margin-top: 3px;
    font-size: 9px;
  }
`;

const Foot = props => <FootBlock {...props} />;

export default Foot;
