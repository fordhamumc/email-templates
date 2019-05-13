import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  ReactNode
} from "react";
import styled from "styled-components";
import Break from "./Break";
import { Container } from "./Container";
import { colors, fonts, sizes } from "./defaults";

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

const FooterLogo = styled.div.attrs({
  className: "footer__logo"
})`
  text-align: center;
  font-size: 1.8em;
  line-height: ${(sizes.lineHeight * 0.75).toFixed(2)};
  text-transform: uppercase;

  @media (max-width: 440px) {
    &.footer__logo {
      font-size: 1.7em !important;
    }
  }
`;

const FooterTagline = styled.div`
  text-align: center;
  font-family: ${fonts.link};
  font-size: 0.8em;
  text-transform: uppercase;
`;

const FooterContent = styled.div`
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
  children,
  ...props
}) => (
  <Container
    {...props}
    className="footer"
    maxWidth={sizes.outerWidth}
    topPad={false}
  >
    <FooterBar />
    <div className="inner">
      <FooterLogo style={{ letterSpacing: "0.09em" }}>
        {GetFooterLogo(name, logoUrl, logoWidth)}
      </FooterLogo>
      <FooterTagline
        className="footer__tagline"
        style={{ letterSpacing: "0.15em" }}
      >
        {tagline}
      </FooterTagline>
      <Break className="small" />
      <FooterContent className="footer__address">{address}</FooterContent>
      <Break className="small" />
      <FooterContent className="footer__links">
        {children || (
          <Fragment>
            <a href="#SPCLICKTOVIEW" name="View in Browser" xt="SPCLICKTOVIEW">
              View this email in your browser.
            </a>
            <Break className="small" />
            <a
              href="https://emailprefs.fordham.edu/?eid=%%RECIPIENT_ID%%&email=%%EMAIL%%"
              name="Preference"
              xt="SPCLICK"
            >
              Customize the types of emails you (%%EMAIL%%) receive from Fordham
              or unsubscribe.
            </a>
          </Fragment>
        )}
      </FooterContent>
    </div>
    <Break className="large" />
  </Container>
);

export default Footer;
