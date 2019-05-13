import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { fonts, sizes, colors } from "./defaults";

const ButtonTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0,
  className: "button"
})`
  box-shadow: 4px 4px 0 0px ${colors.accent};
  border: 0;

  &.button:active {
    box-shadow: none !important;
    transform: translate(4px, 4px);
  }
`;

const ButtonCell = styled.td`
  background-color: #900028;
  border: 9px solid #900028;
  border-width: 9px 30px;
  color: #ffffff;
  font-family: ${fonts.link};
  font-size: 1.1em;
  line-height: ${(sizes.lineHeight * 0.85).toFixed(2)};
  font-weight: bold;
  margin: 5px 0;
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Button: FunctionComponent<{ href: string }> = ({
  children,
  href,
  ...props
}) => (
  <ButtonTable {...props} role="presentation">
    <tbody>
      <tr>
        <ButtonCell>
          <a href={href}>{children}</a>
        </ButtonCell>
      </tr>
    </tbody>
  </ButtonTable>
);

export default Button;
