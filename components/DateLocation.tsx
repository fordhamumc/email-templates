import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  date?: string;
}

const Date = styled.strong.attrs(({ className }) => ({
  className: `date ${className || ""}`
}))`
  font-size: 1.3em;

  @media (max-width: 440px) {
    &.date {
      font-size: 1.15em !important;
    }
  }
`;

const DateLocationWrapper = styled.h2.attrs(({ className }) => ({
  className: `date-location ${className || ""}`
}))`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3em;
  font-weight: normal;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
  margin: 0;

  @media (max-width: 440px) {
    &.date-location {
      font-size: 1.1em !important;
    }
  }
`;

const DateLocation: FunctionComponent<Props> = ({
  date,
  children,
  ...props
}) => (
  <DateLocationWrapper {...props}>
    {date && (
      <Date>
        {date}
        <br />
      </Date>
    )}
    {children}
  </DateLocationWrapper>
);

export default DateLocation;
