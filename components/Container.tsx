import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import styled, { createGlobalStyle } from "styled-components";
import sizes from "./sizes";
import fonts from "./fonts";

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
    margin: 0;
    padding: 0;
  }
  td {
    font-family: ${fonts.text};
  }
  img {
    border: 0;
    height: auto;
    line-height: 100%;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }
  ul {
    Margin-top:0;
    Margin-bottom:0;
    padding-bottom: 8px;
  }
  li {
    Margin-bottom: 10px;
  }
  p {
    Margin: 0 0 18px 0; 
  }
  a {
    color: #900028;
    text-decoration: none;
    font-family: ${fonts.link};
  }
`;

const GlobalInner = createGlobalStyle`
  .inner {
    margin: 0 auto;
	  max-width: ${sizes.innerWidth}px;
    padding: 0 15px;
  }
`;

interface Props {
  width?: number | string;
}

const IeContainer: FunctionComponent<Props> = ({
  width = sizes.innerWidth,
  children
}) => (
  <Fragment>
    <div
      dangerouslySetInnerHTML={{
        __html: `<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:${width}px;" width="${width}"><tr><td style="font-size: 0;line-height: 0;mso-line-height-rule:exactly;"><div><![endif]-->`
      }}
    />
    {children}
    <div
      dangerouslySetInnerHTML={{
        __html: `<!--[if mso | IE]></div></td></tr></table><![endif]-->`
      }}
    />
  </Fragment>
);

const ContainerStyles = styled.div`
  color: #231f20;
  font-family: ${fonts.text};
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 auto;
  max-width: ${sizes.outerWidth}px;

  @media screen and (max-width: 440px) {
    font-size: 16px !important;
    line-height: 1.5 !important;
  }
`;

const Container: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <IeContainer width={sizes.outerWidth}>
      <ContainerStyles {...props}>{children}</ContainerStyles>
    </IeContainer>
  );
};

export { Container, IeContainer, GlobalScaffold, GlobalInner };
