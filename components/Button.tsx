import React, { FunctionComponent, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

type SizeType = "small" | "large";

interface Props {
  background?: string;
  borderColor?: string;
  color?: string;
  size?: SizeType;
}

const ButtonTable = styled.table.attrs(({ className }) => ({
  cellPadding: 0,
  cellSpacing: 0,
  className: `button ${className || ""}`
}))<{
  borderColor: string;
}>`
  box-shadow: ${({ borderColor }) =>
    borderColor === "transparent" ? "" : `4px 4px 0 0px ${borderColor}`};
  border: 0;

  &.button:active {
    box-shadow: none !important;
    transform: translate(4px, 4px);
  }
`;

const buttonPadding = (size: SizeType) => {
  if (size === "small") {
    return [7, 20];
  } else if (size === "large") {
    return [12, 40];
  }
  return [9, 30];
};

const buttonFontSize = (size: SizeType) => {
  if (size === "small") {
    return 0.85;
  } else if (size === "large") {
    return 1.3;
  }
  return 1.1;
};

const ButtonCell = styled.td<Props>`
  background: ${({ background }) => background};
  border: ${({ size }) => buttonPadding(size)[0]}px solid
    ${({ background }) => background};
  border-width: ${({ size }) =>
    buttonPadding(size)
      .map(x => x + "px")
      .join(" ")};
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.link};
  font-size: ${({ size }) => buttonFontSize(size)}em;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
  font-weight: bold;
  margin: 5px 0;
  text-align: center;

  a {
    color: ${({ color }) => color};
    text-decoration: none;
  }
`;

const Button: FunctionComponent<
  Props & {
    href: string;
  }
> = ({
  children,
  href,
  background = "#900028",
  borderColor,
  color = "#ffffff",
  size,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  borderColor = borderColor || theme.colors.accent;
  return (
    <ButtonTable {...props} role="presentation" borderColor={borderColor}>
      <tbody>
        <tr>
          <ButtonCell background={background} color={color} size={size}>
            <a href={href}>{children}</a>
          </ButtonCell>
        </tr>
      </tbody>
    </ButtonTable>
  );
};

export default Button;
