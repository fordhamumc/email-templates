import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import React from "react";
import Break from "./Break";
import styled from "styled-components";
import { sizes } from "./defaults";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const GridBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" },
  className: "grid__break"
})`
  width: ${Math.round(sizes.gutter * 0.5)}px;

  @media (max-width: 540px) {
    &.grid__break {
      display: none !important;
    }
  }
`;

const GridTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0,
  className: "grid"
})`
  width: 100%;

  @media (max-width: 540px) {
    &.grid {
      margin: ${Math.round(sizes.gutter * -0.25)}px !important;
      font-size: 0 !important;
      width: auto !important;

      &,
      tbody,
      tr {
        display: block !important;
      }
    }
  }
`;

const GridCell = styled.td.attrs({
  className: "grid__cell"
})`
  img {
    display: block;
  }

  @media (max-width: 540px) {
    &.grid__cell {
      box-sizing: border-box !important;
      display: inline-block !important;
      padding: ${Math.round(sizes.gutter * 0.25)}px !important;
      width: 49.5% !important;

      img {
        width: 100% !important;
      }
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
      <Fragment key={index}>
        {index > 0 && <GridBreak />}
        <GridCell>
          <img
            src={src}
            alt={alt}
            width={cellWidth}
            style={{ width: cellWidth }}
          />
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
