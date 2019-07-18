import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Break from "./Break";
import { Container } from "./Container";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width: number | string;
}

interface HeaderStyleProps {
  borderSize?: number;
}

const Header = styled.div<HeaderStyleProps>`
  ${({ borderSize, theme }) =>
    borderSize > 0 &&
    `border-bottom:${borderSize}px solid ${theme.colors.primary}}`}
  h1 {
    font-size: 1em;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

const HeaderTable = styled.table.attrs(({ className }) => ({
  cellpadding: 0,
  cellspacing: 0,
  className: `header ${className || ""}`
}))`
  width: 100%;

  img {
    padding-right: ${({ theme }) => theme.sizes.gutter}px;
  }

  @media (max-width: 440px) {
    &.header {
      &,
      & > tbody,
      & > tbody > tr,
      & > tbody > tr > td {
        display: block !important;
      }
    }
  }
`;

const Department = styled.td.attrs(({ className }) => ({
  className: `header__department ${className || ""}`
}))`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.link};
  font-size: 13px;
  line-height: ${({ theme }) => theme.sizes.lineHeight};
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;

  @media (max-width: 440px) {
    &.header__department {
      margin-top: 5px !important;
      text-align: left !important;
    }
  }
`;

const HeaderLogo: FunctionComponent<Props & HeaderStyleProps> = ({
  src,
  alt,
  width,
  children,
  borderSize = 5,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Header role="banner" {...props} borderSize={borderSize}>
      <Container
        maxWidth={theme.sizes.innerWidth + 30}
        topPad={false}
        bottomPad={false}
      >
        <Break className="small" />
        <HeaderTable>
          <tbody>
            <tr>
              <td
                style={
                  children
                    ? { width: `${Number(width) + theme.sizes.gutter}px` }
                    : { textAlign: "center" }
                }
              >
                <h1>
                  <img src={src} alt={alt} width={width} />
                </h1>
              </td>
              {children && (
                <Department style={{ letterSpacing: "0.4em" }}>
                  {children}
                </Department>
              )}
            </tr>
          </tbody>
        </HeaderTable>
        <Break className="small" />
      </Container>
    </Header>
  );
};

export default HeaderLogo;
