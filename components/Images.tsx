import React, { FunctionComponent, HTMLAttributes } from "react";
import Break from "./Break";
import styled from "styled-components";
import sizes from "./sizes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const ImageFullStyle = styled.div`
  background: linear-gradient(270deg, #ffffff, #ffffff 30px, transparent 30px),
    linear-gradient(#900028, #900028 20px, transparent 20px);
  margin-left: -15px;
  margin-top: 10px;
  padding-left: 15px;

  img {
    display: block;
    padding-top: 10px;
  }
`;

const ImageFull: FunctionComponent<Props> = ({ src, alt, ...props }) => (
  <ImageFullStyle {...props}>
    <img src={src} alt={alt} width={sizes.innerWidth} />
    <Break />
  </ImageFullStyle>
);

export { ImageFull };
