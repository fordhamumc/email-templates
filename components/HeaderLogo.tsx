import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";
import Break from "./Break";
import { GlobalInner, IeContainer } from "./Container";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width: number | string;
}

const Header = styled.div`
  border-bottom: 5px solid #900028;
`;

const HeaderH1 = styled.h1`
  text-align: center;
`;

const HeaderLogo: FunctionComponent<Props> = ({
  src,
  alt,
  width,
  ...props
}) => (
  <Header role="banner" {...props}>
    <IeContainer>
      <GlobalInner />
      <Break className="small" />
      <HeaderH1 className="inner">
        <img src={src} alt={alt} width={width} />
      </HeaderH1>
      <Break className="small" />
    </IeContainer>
  </Header>
);

export default HeaderLogo;
