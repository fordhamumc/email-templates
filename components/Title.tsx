import styled from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

const Title = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.heading};
  font-size: 3.7em;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 440px) {
    font-size: 2.5em;
  }
`;

export default Title;
