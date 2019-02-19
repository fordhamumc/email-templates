import React, { Fragment, FunctionComponent, isValidElement } from "react";
import Break from "./Break";
import { TitleArticle } from "./Titles";
import styled from "styled-components";
import sizes from "./sizes";

interface Props {
  title?: string;
  link?: string;
  imageUrl?: string;
  alt?: string;
}

interface SlotProps {
  slot: number;
}

const Slot: FunctionComponent<SlotProps> = ({ slot, children }) => {
  let slotChild = null;
  if (isValidElement(children[--slot])) {
    slotChild = React.cloneElement(children[slot]);
  }
  return slotChild;
};

const Image: FunctionComponent<{ src: string; alt: string }> = ({
  src,
  alt
}) => {
  if (!src || !alt) return null;
  return (
    <img src={src} alt={alt} width={(sizes.innerWidth - sizes.gutter) * 0.5} />
  );
};

const TwoColumnStyle = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0
})`
  border: 0;
  width: 100%;

  td {
    width: 50%;
  }
  .col1 {
    padding-right: ${sizes.gutter * 0.5}px;
  }
  .col2 {
    padding-left: ${sizes.gutter * 0.5}px;
  }

  img {
    display: block;
  }

  @media (max-width: 440px) {
    &,
    tbody,
    tr,
    td {
      display: block !important;
      width: 100% !important;
    }
    .col1,
    .col2 {
      padding: 0 !important;
    }
    img {
      width: 100% !important;
    }
  }
`;

const TwoColumn: FunctionComponent = ({ children, ...props }) => (
  <TwoColumnStyle role="presentation" {...props}>
    <tbody>
      <tr>
        <td className="col1">
          <Slot slot={1}>{children}</Slot>
          <Break />
        </td>
        <td className="col2">
          <Slot slot={2}>{children}</Slot>
          <Break />
        </td>
      </tr>
    </tbody>
  </TwoColumnStyle>
);

const Column: FunctionComponent<Props> = ({
  title,
  link,
  imageUrl,
  alt,
  children
}) => (
  <Fragment>
    <Image src={imageUrl} alt={alt} />
    <Break className="small" />
    <TitleArticle link={link}>{title}</TitleArticle>
    {children}
  </Fragment>
);

export { TwoColumn, Column };
