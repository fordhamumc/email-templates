import React, { Fragment, FunctionComponent, isValidElement } from "react";
import Break from "./Break";
import { TitleArticle } from "./Titles";
import styled from "styled-components";
import { fonts, sizes } from "./defaults";

interface Props {
  title?: string;
  link?: string;
  imageUrl?: string;
  alt?: string;
}

interface SlotProps {
  slot: number;
}

const ImageWidth = (sizes.innerWidth - sizes.gutter) * 0.5;

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
  return <img src={src} alt={alt} width={ImageWidth} />;
};

const TwoColumnStyle = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0,
  className: "col-2"
})`
  border: 0;
  width: 100%;

  @media (max-width: 440px) {
    &.col-2 {
      &,
      tbody,
      tr {
        display: block !important;
        width: 100% !important;
      }
    }
  }
`;

const TwoColumnCell = styled.td.attrs({
  className: "col-2__cell"
})`
  font-family: ${fonts.text};
  min-width: 150px;

  img {
    display: block;
    width: ${ImageWidth}px;
  }
  @media (max-width: 440px) {
    &.col-2__cell {
      display: block !important;
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
`;

const TwoColumnBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" },
  className: "col-2__break"
})`
  width: ${sizes.gutter}px;

  @media (max-width: 440px) {
    &.col-2__break {
      width: 100% !important;
    }
  }
`;

const TwoColumn: FunctionComponent = ({ children, ...props }) => (
  <TwoColumnStyle role="presentation" {...props}>
    <tbody>
      <tr>
        <TwoColumnCell>
          <Slot slot={1}>{children}</Slot>
        </TwoColumnCell>
        <TwoColumnBreak />
        <TwoColumnCell>
          <Slot slot={2}>{children}</Slot>
        </TwoColumnCell>
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
