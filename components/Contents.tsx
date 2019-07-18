import React, {
  Fragment,
  FunctionComponent,
  isValidElement,
  useContext
} from "react";
import Break from "./Break";
import { TitleArticle } from "./Titles";
import styled, { ThemeContext } from "styled-components";
import { IThemeProps } from "./theme";

interface Props {
  title?: string;
  link?: string;
  imageUrl?: string;
  alt?: string;
}

interface SlotProps {
  slot: number;
}

interface ImageProps {
  src: string;
  alt: string;
  size?: number;
}

function getImageWidth(size: number, theme: IThemeProps["theme"]) {
  return (theme.sizes.innerWidth - theme.sizes.gutter) * size;
}

const Slot: FunctionComponent<SlotProps> = ({ slot, children }) => {
  let slotChild = null;
  if (isValidElement(children[--slot])) {
    slotChild = React.cloneElement(children[slot]);
  }
  return slotChild;
};

const Image: FunctionComponent<ImageProps> = ({ src, alt, size = 0.5 }) => {
  const theme = useContext(ThemeContext);
  if (!src || !alt) return null;
  return <img src={src} alt={alt} width={getImageWidth(size, theme)} />;
};

const TwoColumnStyle = styled.table.attrs(({ className }) => ({
  cellSpacing: 0,
  cellPadding: 0,
  className: `col-2 ${className || ""}`
}))`
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

const TwoColumnCell = styled.td.attrs(({ className }) => ({
  className: `col-2__cell ${className || ""}`
}))`
  min-width: 150px;

  img {
    display: block;
    width: ${({ theme }) => getImageWidth(0.5, theme)}px;
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

const SixtyColumnCell = styled.td.attrs(({ className }) => ({
  className: `col-2__cell60 ${className || ""}`
}))`
  min-width: 180px;

  img {
    display: block;
    width: ${({ theme }) => getImageWidth(0.6, theme)}px;
  }
  @media (max-width: 440px) {
    &.col-2__cell60 {
      display: block !important;
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
`;

const FortyColumnCell = styled.td.attrs(({ className }) => ({
  className: `col-2__cell40 ${className || ""}`
}))`
  min-width: 120px;

  img {
    display: block;
    width: ${({ theme }) => getImageWidth(0.4, theme)}px;
  }
  @media (max-width: 440px) {
    &.col-2__cell40 {
      display: block !important;
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
`;

const TwoColumnBreak = styled.td.attrs(({ className }) => ({
  dangerouslySetInnerHTML: { __html: "&nbsp;" },
  className: `col-2__break ${className || ""}`
}))`
  width: ${({ theme }) => theme.sizes.gutter}px;

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

const SixtyFortyColumn: FunctionComponent = ({ children, ...props }) => (
  <TwoColumnStyle role="presentation" className="col-2--6040" {...props}>
    <tbody>
      <tr>
        <SixtyColumnCell>
          <Slot slot={1}>{children}</Slot>
        </SixtyColumnCell>
        <TwoColumnBreak />
        <FortyColumnCell>
          <Slot slot={2}>{children}</Slot>
        </FortyColumnCell>
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
    {imageUrl && (
      <Fragment>
        <Image src={imageUrl} alt={alt} />
        <Break className="small" />
      </Fragment>
    )}
    {title && <TitleArticle link={link}>{title}</TitleArticle>}
    {children}
  </Fragment>
);

export { TwoColumn, SixtyFortyColumn, Column };
