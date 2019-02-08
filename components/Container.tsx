import React, { FunctionComponent } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { IeContainer } from "./Ie";
import sizes from "./sizes";

const GlobalScaffold = createGlobalStyle`
  @font-face {
    font-family: 'leitura roman';
    src: url('https://emailprefs.fordham.edu/fnt/leitura-roman_1-webfont.woff2') format('woff2'),
    url('https://emailprefs.fordham.edu/fnt/leitura-roman_1-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'leitura roman';
    src: url('https://emailprefs.fordham.edu/fnt/leitura-roman_3-webfont.woff2') format('woff2'),
    url('https://emailprefs.fordham.edu/fnt/leitura-roman_3-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  .body {
	  background-color:#ffffff;
    font-size: 16px;
  }
  img {
    max-width: 100%;
  }
  ul {
    Margin-top:0;
    Margin-bottom:0;
  }
`;

const GlobalInner = createGlobalStyle`
  .inner {
    Margin: 0 auto;
	  max-width: ${sizes.innerWidth}px;
    padding: 0 15px;
  }
`;

const ContainerStyles = styled.div`
  color: #231f20;
  font-family: "leitura roman", Palatino, "Palatino Linotype", "Palatino LT STD",
    Georgia, serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 auto;
  max-width: ${sizes.innerWidth + sizes.gutter * 2}px;

  @media screen and (max-width: 440px) {
    font-size: 16px !important;
    line-height: 1.5 !important;
  }
`;

const Container: FunctionComponent = ({ children }) => {
  return (
    <IeContainer>
      <ContainerStyles>{children}</ContainerStyles>
    </IeContainer>
  );
};

export { Container, GlobalScaffold, GlobalInner };
