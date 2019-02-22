import React, { Fragment, FunctionComponent, isValidElement } from "react";
import Break from "./Break";
import { TitleArticle } from "./Titles";
import styled from "styled-components";
import fonts from "./fonts";
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

  @media (max-width: 440px) {
    &,
    tbody,
    tr {
      display: block !important;
      width: 100% !important;
    }
  }
`;

const TwoColumnCell = styled.td`
  font-family: ${fonts.text};
  min-width: 150px;

  img {
    display: block;
  }
  @media (max-width: 440px) {
    display: block !important;
    width: 100% !important;

    img {
      width: 100% !important;
    }
  }
`;

const TwoColumnBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  width: ${sizes.gutter}px;

  @media (max-width: 440px) {
    display: none !important;
  }
`;

const TwoColumn: FunctionComponent = ({ children, ...props }) => (
  <TwoColumnStyle role="presentation" {...props}>
    <tbody>
      <tr>
        <TwoColumnCell>
          <Slot slot={1}>{children}</Slot>
          <Break />
        </TwoColumnCell>
        <TwoColumnBreak />
        <TwoColumnCell>
          <Slot slot={2}>{children}</Slot>
          <Break />
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
