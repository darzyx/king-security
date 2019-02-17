import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import Video from "./Video";
import Source from "./Source";
import Intro from "./Intro";

const PageBlock = styled.div``;

const Page = props => <PageBlock {...props} />;

Page.Banner = Banner;
Page.Video = Video;
Page.Source = Source;
Page.Intro = Intro;

export default Page;
