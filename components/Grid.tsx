import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import React from "react";
import Break from "./Break";
import styled from "styled-components";
import sizes from "./sizes";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const GridTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  width: 100%;

  td {
    padding-right: ${Math.round(sizes.gutter * 0.5)}px;
  }

  td:last-child {
    padding-right: 0;
  }

  img {
    display: block;
  }

  @media (max-width: 540px) {
    margin: ${Math.round(sizes.gutter * -0.25)}px !important;
    font-size: 0 !important;
    width: auto !important;

    &,
    tbody,
    tr {
      display: block !important;
    }

    td {
      box-sizing: border-box !important;
      display: inline-block !important;
      padding: ${Math.round(sizes.gutter * 0.25)}px!important;
      width: 49.5% !important;
    }

    img {
      width: 100% !important;
    }
  }
`;

const Grid: FunctionComponent<Props & HTMLAttributes<HTMLTableElement>> = ({
  images = [],
  ...props
}) => {
  const cells = images.map(({ src, alt }) => {
    const cellWidth = Math.round(
      (sizes.innerWidth - sizes.gutter * (images.length - 1) * 0.5) /
        images.length
    );
    return (
      <td>
        <img src={src} alt={alt} width={cellWidth} />
      </td>
    );
  });

  return (
    <Fragment>
      <GridTable {...props}>
        <tbody>
          <tr>{cells}</tr>
        </tbody>
      </GridTable>
      <Break />
    </Fragment>
  );
};

export default Grid;
