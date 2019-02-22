import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import React from "react";
import Break from "./Break";
import styled from "styled-components";
import colors from "./colors";
import fonts from "./fonts";
import sizes from "./sizes";

interface Props {
  src?: string;
  alt?: string;
}

const cellWidth = Math.round(sizes.innerWidth / 3) - 15 - sizes.gutter;

const AdContainer = styled.div`
  background: ${colors.asideBg};
  padding: 15px;
`;

const AdTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  width: 100%;
  background: ${colors.asideBg};

  .ad-content {
    font-family: ${fonts.text};
    min-width: 170px;
  }

  @media (max-width: 440px) {
    box-sizing: border-box !important;

    &,
    tbody,
    tr,
    td {
      display: block !important;
    }
  }
`;

const AdImage = styled.td`
  background: ${colors.asideBg};
  width: ${cellWidth}px;
  max-width: 50%;
  vertical-align: top;

  img {
    display: block;
  }

  @media (max-width: 440px) {
    width: 100% !important;
    max-width: 100% !important;

    img {
      width: 100% !important;
    }
  }
`;

const AdBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  width: ${sizes.gutter}px;
`;

const Ad: FunctionComponent<Props & HTMLAttributes<HTMLTableElement>> = ({
  src,
  alt,
  children,
  ...props
}) => (
  <Fragment>
    <AdContainer>
      <AdTable {...props}>
        <tbody>
          <tr>
            {src && alt && (
              <Fragment>
                <AdImage>
                  <img src={src} alt={alt} width={cellWidth} />
                </AdImage>
                <AdBreak />
              </Fragment>
            )}
            <td className="ad-content">{children}</td>
          </tr>
        </tbody>
      </AdTable>
    </AdContainer>
    <Break />
  </Fragment>
);

export default Ad;
