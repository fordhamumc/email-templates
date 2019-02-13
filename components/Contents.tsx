import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  isValidElement
} from "react";
import Break from "./Break";
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

const Title: FunctionComponent<{ link?: string }> = ({ link, children }) => {
  if (!children) return null;
  if (link) {
    return (
      <h3>
        <a href={link}>{children}</a>
      </h3>
    );
  } else {
    return <h3>{children}</h3>;
  }
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

const ImageTable: FunctionComponent<{
  src: string;
  alt: string;
}> = ({ src, alt, ...props }) => {
  if (!src || !alt) return null;
  return (
    <table {...props} role="presentation">
      <tr>
        <td>
          <img src={src} alt={alt} width={sizes.innerWidth / 3} />
          <Break className="small" />
        </td>
      </tr>
    </table>
  );
};

const AlignedImage = styled(ImageTable).attrs({
  cellSpacing: 0,
  cellPadding: 0,
  align: "left"
})`
  border: 0;
  width: ${Math.round(sizes.innerWidth / 3)}px;
  max-width: 50%;

  img {
    display: block;
  }

  td {
    padding: 2px ${sizes.gutter}px 0 0;
  }

  .right & td {
    padding: 2px 0 0 ${sizes.gutter}px;
  }

  @media (max-width: 440px) {
    width: 100% !important;
    max-width: 100% !important;

    td {
      padding: 0 !important;
    }

    img {
      width: 100% !important;
    }
  }
`;

const AlignedImageStyle = styled.div`
  h3 {
    font-family: ${fonts.link};
    font-size: 1.15em;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    padding-bottom: 5px;
  }
`;

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
  h3 {
    font-family: ${fonts.link};
    font-size: 1.15em;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    padding-bottom: 5px;
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
    <Title link={link}>{title}</Title>
    {children}
  </Fragment>
);

const ImageLeft: FunctionComponent<
  Props & { align?: string } & HTMLAttributes<HTMLDivElement>
> = ({ title, link, imageUrl, alt, children, align = "left", ...props }) => {
  return (
    <AlignedImageStyle {...props}>
      <AlignedImage src={imageUrl} alt={alt} align={align} />
      <Title link={link}>{title}</Title>
      {children}
    </AlignedImageStyle>
  );
};

const ImageRight: FunctionComponent<Props & { align?: string }> = props => (
  <ImageLeft {...props} align="right" className="right" />
);

export { TwoColumn, Column, ImageLeft, ImageRight };
