import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";
import { BreakSm } from "./Breaks";
import { GlobalInner } from "./Container";
import { IeContainer } from "./Ie";
import sizes from "./sizes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width: number | string;
}

const Header = styled.div`
  border-bottom: 5px solid #900028;
`;

const HeaderLogo: FunctionComponent<Props> = ({
  src,
  alt,
  width,
  ...props
}) => {
  return (
    <Header role="banner" {...props}>
      <IeContainer width={sizes.innerWidth}>
        <GlobalInner />
        <BreakSm />
        <h1 className="inner">
          <img src={src} alt={alt} width={width} />
        </h1>
        <BreakSm />
      </IeContainer>
    </Header>
  );
};

export default HeaderLogo;
