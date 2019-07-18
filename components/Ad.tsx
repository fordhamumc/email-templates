import { Fragment, FunctionComponent, HTMLAttributes, useContext } from "react";
import React from "react";
import styled, { ThemeContext } from "styled-components";

interface Props {
  src?: string;
  alt?: string;
  link?: string;
  linkText?: string;
}

interface Container {
  background?: string;
  border?: string;
  imageWidth?: number;
  fontFamily?: string;
}

const AdContainer = styled.div<Container>`
  background: ${({ background }) => background};
  ${({ border }) => (border ? `border-top: 5px solid ${border};` : "")}
  margin: 0 -15px;
  margin-top: 12px;
  padding: 15px;
`;

const AdTable = styled.table.attrs(({ className }) => ({
  cellPadding: 0,
  cellSpacing: 0,
  className: `ad ${className || ""}`
}))<Container>`
  width: 100%;
  background: ${({ background }) => background};

  td {
    vertical-align: top;
  }

  .ad__content {
    color: ${({ color }) => color};
    font-family: ${({ fontFamily }) => fontFamily};
    height: 100%;
    min-width: 170px;
  }

  .ad__link {
    color: ${({ color }) => color};
    padding-top: 5px;
  }

  @media (max-width: 440px) {
    &.ad {
      box-sizing: border-box !important;

      &,
      & > tbody,
      & > tbody > tr,
      & > tbody > tr > td {
        display: block !important;
      }
    }
  }
`;

const AdImage = styled.td.attrs(({ className }) => ({
  className: `ad__image ${className || ""}`
}))<Container>`
  background: ${({ background }) => background};
  width: ${({ imageWidth }) => imageWidth}px;
  max-width: 50%;
  vertical-align: top;

  img {
    display: block;
    width: ${({ imageWidth }) => imageWidth}px;
  }

  @media (max-width: 440px) {
    &.ad__image {
      width: 100% !important;
      max-width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
`;

const AdBreak = styled.td.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  line-height: ${({ theme }) => theme.sizes.breakSm}px;
  width: ${({ theme }) => theme.sizes.gutter}px;
`;

const Ad: FunctionComponent<
  Props & Container & HTMLAttributes<HTMLTableElement>
> = ({
  src,
  alt,
  link,
  linkText,
  background,
  color,
  imageWidth,
  border,
  children,
  fontFamily,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  background = background || theme.colors.asideBg;
  color = color || theme.colors.text;
  imageWidth =
    imageWidth ||
    Math.round(theme.sizes.innerWidth / 3) - 15 - theme.sizes.gutter;
  fontFamily = fontFamily || theme.fonts.text;
  return (
    <AdContainer background={background} border={border}>
      <AdTable
        {...props}
        background={background}
        color={color}
        fontFamily={fontFamily}
      >
        <tbody>
          <tr>
            {src && alt && (
              <Fragment>
                <AdImage background={background} imageWidth={imageWidth}>
                  <img src={src} alt={alt} width={imageWidth} />
                </AdImage>
                <AdBreak />
              </Fragment>
            )}
            <td className="ad__content">
              {children}
              {linkText && link && (
                <div className="ad__link">
                  <strong>
                    <a href={link}>{linkText}</a>
                  </strong>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </AdTable>
    </AdContainer>
  );
};

export default Ad;
