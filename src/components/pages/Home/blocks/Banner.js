import styled from "styled-components";

const Banner = styled.div`
  display: grid;
  margin: 25px 0;
  padding: 0;
  border: 2px solid #333;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    margin: 50px 0;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Banner;
