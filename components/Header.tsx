import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";
import Break from "./Break";
import { GlobalInner, IeContainer } from "./Container";
import fonts from "./fonts";
import colors from "./colors";
import sizes from "./sizes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width: number | string;
}

const Header = styled.div`
  border-bottom: 5px solid #900028;
  h1 {
    line-height: 1;
    margin: 0;
  }
`;

const HeaderTable = styled.table.attrs({
  cellpadding: 0,
  cellspacing: 0
})`
  width: 100%;

  img {
    padding-right: ${sizes.gutter}px;
  }

  @media (max-width: 440px) {
    &,
    tbody,
    tr,
    td {
      display: block !important;
    }
  }
`;

const Department = styled.td`
  color: ${colors.light};
  font-family: ${fonts.link};
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: right;
  text-transform: uppercase;

  @media (max-width: 440px) {
    margin-top: 5px !important;
    text-align: left !important;
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
    <IeContainer>
      <GlobalInner />
      <Break className="small" />
      <div className="inner">
        <HeaderTable>
          <tbody>
            <tr>
              <td>
                <h1>
                  <img src={src} alt={alt} width={width} />
                </h1>
              </td>
              {children && <Department>{children}</Department>}
            </tr>
          </tbody>
        </HeaderTable>
      </div>
      <Break className="small" />
    </IeContainer>
  </Header>
);

export default HeaderLogo;
