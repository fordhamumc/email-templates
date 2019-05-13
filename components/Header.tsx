import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";
import Break from "./Break";
import { Container } from "./Container";
import { colors, fonts, sizes } from "./defaults";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width: number | string;
}

const Header = styled.div`
  border-bottom: 5px solid #900028;
  h1 {
    font-size: 1em;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

const HeaderTable = styled.table.attrs({
  cellpadding: 0,
  cellspacing: 0,
  className: "header"
})`
  width: 100%;

  img {
    padding-right: ${sizes.gutter}px;
  }

  @media (max-width: 440px) {
    &.header {
      &,
      tbody,
      tr,
      td {
        display: block !important;
      }
    }
  }
`;

const Department = styled.td.attrs({
  className: "header__department"
})`
  color: ${colors.light};
  font-family: ${fonts.link};
  font-size: 13px;
  line-height: ${sizes.lineHeight};
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

const HeaderLogo: FunctionComponent<Props> = ({
  src,
  alt,
  width,
  children,
  ...props
}) => (
  <Header role="banner" {...props}>
    <Container
      maxWidth={sizes.innerWidth + 30}
      topPad={false}
      bottomPad={false}
    >
      <Break className="small" />
      <HeaderTable>
        <tbody>
          <tr>
            <td style={{ width: `${Number(width) + sizes.gutter}px` }}>
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

export default HeaderLogo;
