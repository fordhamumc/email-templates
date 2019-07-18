import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement> {
  link?: string;
}

const TitleStyle = styled.h1.attrs(({ className }) => ({
  className: `title ${className || ""}`
}))`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3em;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  padding-bottom: 5px;

  @media (max-width: 440px) {
    &.title {
      font-size: 2.6em !important;
      line-height: 1.1 !important;
    }
  }
`;
const TitleArticleStyle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.link};
  font-size: 1.15em;
  font-weight: bold;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
  margin: 0;
  padding-bottom: 5px;
`;

const getChildLink = ({ link, children }: Props) => {
  return link ? <a href={link}>{children}</a> : <Fragment>{children}</Fragment>;
};

const Title: FunctionComponent<Props> = ({ link, children, ...props }) => {
  return <TitleStyle {...props}>{getChildLink({ link, children })}</TitleStyle>;
};

const TitleArticle: FunctionComponent<Props> = ({
  link,
  children,
  ...props
}) => {
  return (
    <TitleArticleStyle {...props}>
      {getChildLink({ link, children })}
    </TitleArticleStyle>
  );
};

export { Title, TitleArticle };
