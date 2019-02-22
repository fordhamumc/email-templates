import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import Break from "./Break";
import { Container } from "./Container";
import fonts from "./fonts";
import colors from "./colors";
import sizes from "./sizes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  tagline?: string;
  logoUrl?: string;
  logoWidth?: number | string;
  address?: string;
}

const FooterBar = styled.div.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  border-top: 25px solid #900028;
  line-height: 25px;
`;

const FooterLogo = styled.div`
  text-align: center;
  font-size: 1.8em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 440px) {
    font-size: 1.7em !important;
  }
`;

const FooterTagline = styled.div`
  text-align: center;
  font-family: ${fonts.link};
  font-size: 0.8em;
  text-transform: uppercase;
`;

const FooterAddress = styled.div`
  color: ${colors.light};
  text-align: center;
  font-size: 0.9em;
`;

const GetFooterLogo = (
  name: string,
  logoUrl?: string,
  logoWidth?: number | string
): string | ReactNode => {
  if (logoUrl) {
    return <img src={logoUrl} width={logoWidth} alt={name} />;
  } else {
    return name;
  }
};
const Footer: FunctionComponent<Props> = ({
  name = "Fordham University",
  tagline = "The Jesuit University of New\u00A0York",
  logoUrl,
  logoWidth,
  address = "441 East Fordham Road | Bronx, NY 10458",
  ...props
}) => (
  <Container {...props} className="footer" maxWidth={sizes.outerWidth}>
    <Break className="large" />
    <FooterBar />
    <FooterLogo style={{ letterSpacing: "0.09em" }}>
      {GetFooterLogo(name, logoUrl, logoWidth)}
    </FooterLogo>
    <FooterTagline
      className="footer-tagline"
      style={{ letterSpacing: "0.15em" }}
    >
      {tagline}
    </FooterTagline>
    <Break className="small" />
    <FooterAddress className="footer-address">{address}</FooterAddress>
    <Break className="large" />
  </Container>
);

export default Footer;
