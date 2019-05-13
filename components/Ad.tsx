import { Fragment, FunctionComponent, HTMLAttributes } from "react";
import React from "react";
import styled from "styled-components";
import { colors, fonts, sizes } from "./defaults";

interface Props {
  src?: string;
  alt?: string;
  link?: string;
  linkText?: string;
}

const cellWidth = Math.round(sizes.innerWidth / 3) - 15 - sizes.gutter;

const AdContainer = styled.div`
  background: ${colors.asideBg};
  margin: 0 -15px;
  margin-top: 12px;
  padding: 15px;
`;

const AdTable = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0,
  className: props => `${props.className} ad`
})`
  width: 100%;
  background: ${colors.asideBg};

  td {
    background: ${colors.asideBg};
    vertical-align: top;
  }

  .ad__content {
    font-family: ${fonts.text};
    height: 100%;
    min-width: 170px;
  }

  .ad__link {
    padding-top: 5px;
  }

  @media (max-width: 440px) {
    &.ad {
      box-sizing: border-box !important;

      &,
      tbody,
      tr,
      td {
        display: block !important;
      }
    }
  }
`;

const AdImage = styled.td.attrs({
  className: "ad__image"
})`
  background: ${colors.asideBg};
  width: ${cellWidth}px;
  max-width: 50%;
  vertical-align: top;

  img {
    display: block;
    width: ${cellWidth}px;
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
  line-height: ${sizes.breakSm}px;
  width: ${sizes.gutter}px;
`;

const Ad: FunctionComponent<Props & HTMLAttributes<HTMLTableElement>> = ({
  src,
  alt,
  link,
  linkText,
  children,
  ...props
}) => (
  <AdContainer>
    <AdTable {...props}>
      <tbody>
        <tr>
          {src && alt && (
            <Fragment>
              <AdImage>
                <img src={src} alt={alt} width={cellWidth} />
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

export default Ad;
