import React, { Fragment, FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

interface Props extends HTMLAttributes<HTMLElement> {
  link?: string;
}

const TitleStyle = styled.h1`
  color: ${colors.primary};
  font-family: ${fonts.heading};
  font-size: 3.4em;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 440px) {
    font-size: 2.5em !important;
  }
`;
const TitleArticleStyle = styled.h3`
  font-family: ${fonts.link};
  font-size: 1.15em;
  font-weight: bold;
  line-height: 1.3;
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
