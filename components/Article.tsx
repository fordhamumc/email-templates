import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import { TitleArticle } from "./Titles";
import styled from "styled-components";
import { fonts, sizes } from "./defaults";

interface Props extends HTMLAttributes<HTMLTableElement> {
  title: string;
  link: string;
  imageUrl?: string;
  alt?: string;
  callToAction?: string;
}

const imageWidth = Math.round(sizes.innerWidth * 0.25);
const imageWidthSmall = Math.round(imageWidth * 0.9);

const ArticleTable = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0,
  className: props => `${props.className} article`
})`
  border: 0;
  width: 100%;

  td {
    vertical-align: top;
  }
  .article__link {
    padding-top: 5px;
  }
  .article__content {
    font-family: ${fonts.text};
    min-width: 200px;
  }
  .article__image {
    padding-top: 2px;
    width: ${imageWidth + sizes.gutter}px;
  }
  .article__image img {
    display: block;
    width: ${imageWidth}px;
  }

  @media (max-width: 540px) {
    .article__image {
      width: ${imageWidthSmall + 32}px !important;
    }
    .article__image img {
      width: ${imageWidthSmall}px !important;
    }
  }

  @media (max-width: 440px) {
    &.article {
      &,
      tbody,
      tr,
      td {
        display: block !important;
        width: 100% !important;
      }
    }
    .article__image,
    .article__image img {
      width: 100% !important;
    }
    .article__image {
      padding-bottom: ${sizes.breakSm}px;
    }
  }
`;

const Article: FunctionComponent<Props> = ({
  title,
  link,
  imageUrl,
  alt,
  callToAction,
  children,
  ...props
}) => (
  <Fragment>
    <ArticleTable role="presentation" {...props}>
      <tbody>
        <tr>
          {imageUrl && alt && (
            <td className="article__image">
              <img src={imageUrl} alt={alt} width={imageWidth} />
            </td>
          )}
          <td className="article__content">
            <TitleArticle link={link}>{title}</TitleArticle>
            {children}
            {callToAction && (
              <div className="article__link">
                <a href={link} target="_blank">
                  {callToAction}
                </a>
              </div>
            )}
          </td>
        </tr>
        {callToAction && (
          <tr>
            <td className="article__link">
              <a href={link} target="_blank">
                {callToAction}
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </ArticleTable>
  </Fragment>
);

export default Article;
