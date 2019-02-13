import styled from "styled-components";
import fonts from "./fonts";

const Date = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.7em;
  font-weight: bold;
  line-height: 1.3;

  @media (max-width: 440px) {
    font-size: 1.3em;
  }
`;

const Location = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.3em;
  line-height: 1.3;

  @media (max-width: 440px) {
    font-size: 1.1em;
  }
`;

export { Date, Location };
