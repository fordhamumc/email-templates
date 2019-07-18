import { Fragment, FunctionComponent, HTMLAttributes, useContext } from "react";
import React from "react";
import Break from "./Break";
import styled, { ThemeContext } from "styled-components";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const GridBreak = styled.td.attrs(({ className }) => ({
  dangerouslySetInnerHTML: { __html: "&nbsp;" },
  className: `grid__break ${className || ""}`
}))`
  width: ${({ theme }) => Math.round(theme.sizes.gutter * 0.5)}px;

  @media (max-width: 540px) {
    &.grid__break {
      display: none !important;
    }
  }
`;

const GridTable = styled.table.attrs(({ className }) => ({
  cellPadding: 0,
  cellSpacing: 0,
  className: `grid ${className || ""}`
}))`
  width: 100%;

  @media (max-width: 540px) {
    &.grid {
      margin: ${({ theme }) =>
        Math.round(theme.sizes.gutter * -0.25)}px !important;
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

const GridCell = styled.td.attrs(({ className }) => ({
  className: `grid__cell ${className || ""}`
}))`
  img {
    display: block;
  }

  @media (max-width: 540px) {
    &.grid__cell {
      box-sizing: border-box !important;
      display: inline-block !important;
      padding: ${({ theme }) =>
        Math.round(theme.sizes.gutter * 0.25)}px !important;
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
  const theme = useContext(ThemeContext);
  const cells = images.map(({ src, alt }, index) => {
    const cellWidth = Math.round(
      (theme.sizes.innerWidth -
        theme.sizes.gutter * (images.length - 1) * 0.5) /
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
