import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import Break from "./Break";
import styled from "styled-components";
import sizes from "./sizes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const ImageTable: FunctionComponent<{
  src: string;
  alt: string;
}> = ({ src, alt, ...props }) => {
  if (!src || !alt) return null;
  return (
    <table {...props} role="presentation">
      <tbody>
        <tr>
          <td>
            <img src={src} alt={alt} width={sizes.innerWidth / 3} />
          </td>
        </tr>
      </tbody>
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
    padding: 5px ${sizes.gutter}px 18px 0;
  }

  &.right td {
    padding: 5px 0 0 ${sizes.gutter}px;
  }

  @media (max-width: 440px) {
    width: 100% !important;
    max-width: 100% !important;

    td {
      padding: 0 0 18px 0 !important;
    }

    img {
      width: 100% !important;
    }
  }
`;

const ImageFullStyle = styled.div`
  //background: linear-gradient(270deg, #ffffff, #ffffff 30px, transparent 30px),
  //  linear-gradient(#900028, #900028 20px, transparent 20px);
  //margin-left: -15px;
  //padding-left: 15px;

  img {
    display: block;
    padding-top: 5px;
  }
`;

const ImageFull: FunctionComponent<Props> = ({ src, alt, ...props }) => (
  <ImageFullStyle {...props}>
    <img src={src} alt={alt} width={sizes.innerWidth} />
    <Break />
  </ImageFullStyle>
);

const ImageLeft: FunctionComponent<
  Props & { align?: string } & HTMLAttributes<HTMLDivElement>
> = ({ src, alt, children, align = "left", ...props }) => {
  return (
    <Fragment>
      <AlignedImage src={src} alt={alt} align={align} {...props} />
      {children}
    </Fragment>
  );
};

const ImageRight: FunctionComponent<Props & { align?: string }> = props => (
  <ImageLeft {...props} align="right" className="right" />
);

export { ImageFull, ImageLeft, ImageRight };
