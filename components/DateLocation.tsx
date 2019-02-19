import React, { FunctionComponent } from "react";
import styled from "styled-components";
import fonts from "./fonts";
import Break from "./Break";

interface Props {
  date?: string;
}

const Date = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.7em;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 440px) {
    font-size: 1.25em !important;
  }
`;

const Location = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.3em;
  line-height: 1.3;

  @media (max-width: 440px) {
    font-size: 1.1em !important;
  }
`;

const DateLocation: FunctionComponent<Props> = ({
  date,
  children,
  ...props
}) => (
  <div {...props}>
    {date && <Date>{date}</Date>}
    <Location>{children}</Location>
    <Break />
  </div>
);

export { Date, Location };
export default DateLocation;
