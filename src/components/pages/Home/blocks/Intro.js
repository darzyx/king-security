import styled from "styled-components";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 20px;

  h1 {
    margin: 0;
    padding: 0;
    line-height: 48px;
    text-transform: uppercase;
  }

  p {
    margin-top: 20px;
    span {
      margin: 0 3px;
      color: goldenrod;
      font-size: 24px;
    }
  }
`;

export default Intro;
