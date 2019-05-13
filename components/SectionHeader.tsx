import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { HTMLAttributes } from "react";
import { colors, fonts, sizes } from "./defaults";

const SectionStyle = styled.h2`
  color: ${colors.primary};
  font-family: ${fonts.heading};
  font-size: 1.2em;
  font-weight: bold;
  line-height: ${(sizes.lineHeight * 0.75).toFixed(2)};
  margin: 0 0 10px 0;
  padding-top: 12px;
  text-transform: uppercase;
`;

const SectionHeader: FunctionComponent<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => <SectionStyle {...props} />;

export default SectionHeader;
