import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  useContext
} from "react";
import { TitleArticle } from "./Titles";
import styled, { ThemeContext } from "styled-components";

interface Props extends HTMLAttributes<HTMLTableElement> {
  title: string;
  link: string;
  imageUrl?: string;
  alt?: string;
  imageWidth?: number;
  callToAction?: string;
}

const ArticleTable = styled.table.attrs(({ className }) => ({
  cellSpacing: 0,
  cellPadding: 0,
  className: `article ${className || ""}`
}))`
  border: 0;
  width: 100%;

  td {
    vertical-align: top;
  }
  .article__link {
    padding-top: 5px;
  }
  .article__content {
    font-family: ${({ theme }) => theme.fonts.text};
    min-width: 200px;
  }

  @media (max-width: 440px) {
    &.article {
      &,
      & > tbody,
      & > tbody > tr,
      & > tbody > tr > td {
        display: block !important;
        width: 100% !important;
      }
    }
  }
`;

const ArticleImageCell = styled.td.attrs(({ className }) => ({
  className: `article__image ${className || ""}`
}))<{ imageWidth?: number }>`
  padding-top: 2px;
  width: ${({ imageWidth, theme }) => imageWidth + theme.sizes.gutter}px;

  img {
    display: block;
    width: ${({ imageWidth }) => imageWidth}px;
  }

  @media (max-width: 540px) {
    width: ${({ imageWidth, theme }) =>
      imageWidth * 0.9 + theme.sizes.gutter}px !important;

    img {
      width: ${({ imageWidth }) => imageWidth * 0.9}px !important;
    }
  }

  @media (max-width: 440px) {
    padding-bottom: ${({ theme }) => theme.sizes.breakSm}px;

    &,
    img {
      width: 100% !important;
    }
  }
`;

const Article: FunctionComponent<Props> = ({
  title,
  link,
  imageUrl,
  alt,
  imageWidth,
  callToAction,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  imageWidth = imageWidth || Math.round(theme.sizes.innerWidth * 0.25);
  return (
    <Fragment>
      <ArticleTable role="presentation" {...props}>
        <tbody>
          <tr>
            {imageUrl && alt && (
              <ArticleImageCell
                className="article__image"
                imageWidth={imageWidth}
              >
                <img src={imageUrl} alt={alt} width={imageWidth} />
              </ArticleImageCell>
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
        </tbody>
      </ArticleTable>
    </Fragment>
  );
};

export default Article;
