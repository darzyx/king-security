import React from "react";
import styled from "styled-components";

import Container from "./Container";

const PageBlock = styled.div``;

const Page = props => <PageBlock {...props} />;

Page.Container = Container;

export default Page;
