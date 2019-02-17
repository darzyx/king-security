import React from "react";
import styled from "styled-components";

import Video from "./Video";
import Source from "./Source";

const PageBlock = styled.div``;

const Page = props => <PageBlock {...props} />;

Page.Video = Video;
Page.Source = Source;

export default Page;
