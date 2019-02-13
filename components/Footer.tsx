import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import Break from "./Break";
import { Container } from "./Container";
import fonts from "./fonts";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  tagline?: string;
  logoUrl?: string;
  logoWidth?: number | string;
  address?: string;
}

const FooterBar = styled.div`
  border-top: 25px solid #900028;
  line-height: 25px;
`;

const FooterLogo = styled.div`
  font-size: 1.8em;
  letter-spacing: 0.09em;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

const FooterTagline = styled.div`
  font-family: ${fonts.text};
  font-size: 0.8em;
  letter-spacing: 0.15em;
  text-align: center;
  text-transform: uppercase;
`;

const FooterAddress = styled.div`
  color: #594f51;
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
  <Container {...props}>
    <Break className="large" />
    <FooterBar>&nbsp;</FooterBar>
    <FooterLogo>{GetFooterLogo(name, logoUrl, logoWidth)}</FooterLogo>
    <FooterTagline>{tagline}</FooterTagline>
    <Break className="small" />
    <FooterAddress>{address}</FooterAddress>
    <Break className="large" />
  </Container>
);

export default Footer;
