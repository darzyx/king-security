import React from "react";
import styled from "styled-components";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Page = props => <PageBlock {...props} />;

export default Page;
