import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  useContext
} from "react";
import styled, { createGlobalStyle, ThemeContext } from "styled-components";
import { IThemeProps } from "./theme";

const GlobalScaffold = createGlobalStyle<IThemeProps>`
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
    padding-left: 40px;
    padding-bottom: 8px;
  }
  li {
    Margin-bottom: 10px;
  }
  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: bold;
    margin: 0;
  }
  h1 {
    font-size: 3em;
    line-height: 1;
    padding-bottom: 5px;
  }
  h2 {
    font-size: 1.69em;
    line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
  }
  h3 {
    font-size: 1.15em;
    line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
    padding-bottom: 5px;
  }
  p {
    Margin: 0 0 ${({ theme }) => theme.sizes.break}px 0;
  }
  a, .link {
    color: #900028;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.link};
  }
  strong {
    font-weight: bold;
  }
      
  @media (max-width: 440px) {
    h1 {
      font-size: 2.6em !important;
      line-height: 1.1 !important;
    }
    h2 {
      font-size: 1.4em !important;
    }
  }
`;

const GlobalInner = createGlobalStyle<IThemeProps>`
  .inner {
    margin: 0 auto;
	  max-width: ${({ theme }) => theme.sizes.innerWidth}px;
  }
`;

interface Props {
  maxWidth?: number | string;
}

const IeContainer: FunctionComponent<Props> = ({ maxWidth, children }) => {
  const theme = useContext(ThemeContext);
  maxWidth = maxWidth || theme.sizes.innerWidth;
  return (
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
};

const ContainerTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0
})`
  ${({ maxWidth }: Props) => maxWidth && `max-width: ${maxWidth}px;`};
  margin: 0 auto;
  width: 100%;
`;

const ContainerCell = styled.td.attrs(({ className }) => ({
  className: `container ${className || ""}`
}))<{ weight?: number | string; sidePad?: number }>`
  &.container {
    color: #231f20;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.sizes.fontSize}px;
    font-weight: ${({ weight }) => weight};
    line-height: ${({ theme }) => theme.sizes.lineHeight};
    padding: 0 ${({ sidePad }) => sidePad}px;

    @media (max-width: 440px) {
      font-size: ${({ theme }) =>
        Math.round(theme.sizes.fontSize * 0.9)}px !important;
      line-height: ${({ theme }) =>
        (theme.sizes.lineHeight * 0.95).toFixed(2)} !important;
    }
  }
`;

const BreakCell = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  line-height: ${({ theme }) => theme.sizes.breakLg}px;
`;

const Container: FunctionComponent<
  Props &
    HTMLAttributes<HTMLDivElement> & {
      topPad?: boolean;
      bottomPad?: boolean;
      sidePad?: number;
      weight?: number | string;
    }
> = ({
  children,
  topPad = true,
  bottomPad = false,
  role,
  sidePad = 15,
  weight = 400,
  ...props
}) => (
  <IeContainer maxWidth={props.maxWidth}>
    <ContainerTable {...props}>
      <tbody>
        {topPad && (
          <tr>
            <BreakCell />
          </tr>
        )}
        <tr>
          <ContainerCell role={role} sidePad={sidePad} weight={weight}>
            {children}
          </ContainerCell>
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

export { Container, IeContainer, GlobalScaffold, GlobalInner };
