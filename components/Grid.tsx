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

const GridBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  width: ${Math.round(sizes.gutter * 0.5)}px;

  @media (max-width: 540px) {
    display: none !important;
  }
`;

const GridTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  width: 100%;

  @media (max-width: 540px) {
    margin: ${Math.round(sizes.gutter * -0.25)}px !important;
    font-size: 0 !important;
    width: auto !important;

    &,
    tbody,
    tr {
      display: block !important;
    }
  }
`;

const GridCell = styled.td`
  img {
    display: block;
  }

  @media (max-width: 540px) {
    box-sizing: border-box !important;
    display: inline-block !important;
    padding: ${Math.round(sizes.gutter * 0.25)}px!important;
    width: 49.5% !important;

    img {
      width: 100% !important;
    }
  }
`;

const Grid: FunctionComponent<Props & HTMLAttributes<HTMLTableElement>> = ({
  images = [],
  ...props
}) => {
  const cells = images.map(({ src, alt }, index) => {
    const cellWidth = Math.round(
      (sizes.innerWidth - sizes.gutter * (images.length - 1) * 0.5) /
        images.length
    );
    return (
      <Fragment>
        {index > 0 && <GridBreak />}
        <GridCell>
          <img src={src} alt={alt} width={cellWidth} />
        </GridCell>
      </Fragment>
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
