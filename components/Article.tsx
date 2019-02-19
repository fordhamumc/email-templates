import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import Break from "./Break";
import { TitleArticle } from "./Titles";
import styled from "styled-components";
import sizes from "./sizes";

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
  cellPadding: 0
})`
  border: 0;
  width: 100%;

  td {
    vertical-align: top;
  }
  .article-link {
    padding-top: 5px;
  }
  .article-header {
    height: 100%;
  }
  .article-image {
    padding-top: 2px;
    width: ${imageWidth + sizes.gutter}px;
  }
  .article-image img {
    display: block;
  }

  @media (max-width: 540px) {
    .article-image {
      width: ${imageWidthSmall + 32}px !important;
    }
    .article-image img {
      width: ${imageWidthSmall}px !important;
    }
  }

  @media (max-width: 440px) {
    &,
    tbody,
    tr,
    td {
      display: block !important;
      width: 100% !important;
    }
    .article-image,
    .article-image img {
      width: 100% !important;
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
            <td className="article-image" rowSpan={3}>
              <img src={imageUrl} alt={alt} width={imageWidth} />
              <Break className="small" />
            </td>
          )}
          <td className="article-header">
            <TitleArticle link={link}>{title}</TitleArticle>
          </td>
        </tr>
        <tr>
          <td>{children}</td>
        </tr>
        {callToAction && (
          <tr>
            <td className="article-link">
              <a href={link} target="_blank">
                {callToAction}
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </ArticleTable>
    <Break />
  </Fragment>
);

export default Article;
