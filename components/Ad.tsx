import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import React from "react";
import Break from "./Break";
import styled from "styled-components";
import colors from "./colors";
import sizes from "./sizes";

interface Props {
  src?: string;
  alt?: string;
}

const cellWidth = Math.round(sizes.innerWidth / 3) - 15 - sizes.gutter;

const AdTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  background: ${colors.asideBg};
  border-collapse: separate;
  padding: 15px;
  width: 100%;

  .ad-image {
    background: ${colors.asideBg};
    width: ${cellWidth}px;
    max-width: 50%;
    padding-right: ${sizes.gutter}px;
    vertical-align: top;
  }
  img {
    display: block;
  }
  @media (max-width: 440px) {
    box-sizing: border-box !important;

    &,
    tbody,
    tr,
    td {
      display: block !important;
    }

    .ad-image {
      width: 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-bottom: ${sizes.break}px !important;
    }

    img {
      width: 100% !important;
    }
  }
`;

const Ad: FunctionComponent<Props & HTMLAttributes<HTMLTableElement>> = ({
  src,
  alt,
  children,
  ...props
}) => (
  <Fragment>
    <AdTable {...props}>
      <tbody>
        <tr>
          {src && alt && (
            <td className="ad-image">
              <img src={src} alt={alt} width={cellWidth} />
            </td>
          )}
          <td>{children}</td>
        </tr>
      </tbody>
    </AdTable>
    <Break />
  </Fragment>
);

export default Ad;
