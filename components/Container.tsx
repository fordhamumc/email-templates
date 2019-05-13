import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { fonts, sizes } from "./defaults";

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
    Margin: 0 0 ${sizes.break}px 0;
  }
  a, .link {
    color: #900028;
    text-decoration: none;
    font-family: ${fonts.link};
  }
`;

const GlobalInner = createGlobalStyle`
  .inner {
    margin: 0 auto;
	  max-width: ${sizes.innerWidth}px;
  }
`;

interface Props {
  maxWidth?: number | string;
}

const IeContainer: FunctionComponent<Props> = ({
  maxWidth = sizes.innerWidth,
  children
}) => (
  <Fragment>
    <div
      dangerouslySetInnerHTML={{
        __html: `<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:${maxWidth}px;" width="${maxWidth}"><tr><td style="font-size: 0;line-height: 0;mso-line-height-rule:exactly;"><div><![endif]-->`
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

const ContainerTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  ${({ maxWidth }: Props) => maxWidth && `max-width: ${maxWidth}px;`};
  margin: 0 auto;
  width: 100%;
`;

const ContainerCell = styled.td.attrs({
  className: "container"
})`
  &.container {
    color: #231f20;
    font-family: ${fonts.text};
    font-size: ${sizes.fontSize}px;
    font-weight: 400;
    line-height: ${sizes.lineHeight};
    padding: 0 15px;

    @media (max-width: 440px) {
      font-size: ${Math.round(sizes.fontSize * 0.9)}px !important;
      line-height: ${(sizes.lineHeight * 0.95).toFixed(2)} !important;
    }
  }
`;

const BreakCell = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  line-height: ${sizes.breakLg}px;
`;

const Container: FunctionComponent<
  Props &
    HTMLAttributes<HTMLDivElement> & {
      topPad?: boolean;
      bottomPad?: boolean;
    }
> = ({ children, topPad = true, bottomPad = false, role, ...props }) => {
  return (
    <IeContainer maxWidth={props.maxWidth}>
      <ContainerTable {...props}>
        <tbody>
          {topPad && (
            <tr>
              <BreakCell />
            </tr>
          )}
          <tr>
            <ContainerCell role={role}>{children}</ContainerCell>
          </tr>
          {bottomPad && (
            <tr>
              <BreakCell />
            </tr>
          )}
        </tbody>
      </ContainerTable>
    </IeContainer>
  );
};

export { Container, IeContainer, GlobalScaffold, GlobalInner };
