import React from "react";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";

const Block = styled(Segment).attrs({
  inverted: true,
  textAlign: "center"
})`
  &&&&& {
    h2 {
      letter-spacing: 2px;
      color: goldenrod;
    }

    p {
      letter-spacing: 2px;
      margin: 0;
      padding: 0;
      color: #fff;
    }
  }
`;

const Contact = () => (
  <Block>
    <h2>Get an estimate or book an appointment:</h2>
    <p>(412) 682-4171</p>
    <p>kingspgh412@gmail.com</p>
  </Block>
);

export default Contact;
