import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useContext
} from "react";
import styled, { ThemeContext } from "styled-components";
import Break from "./Break";
import { Container } from "./Container";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string | false;
  tagline?: string | false;
  logoUrl?: string;
  logoWidth?: number | string;
  address?: string | false;
  border?: boolean;
}

const FooterBar = styled.div.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  border-top: 25px solid #900028;
  line-height: 25px;
`;

const FooterLogo = styled.div.attrs(({ className }) => ({
  className: `footer__logo ${className || ""}`
}))`
  text-align: center;
  font-size: 1.8em;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.75).toFixed(2)};
  text-transform: uppercase;

  @media (max-width: 440px) {
    &.footer__logo {
      font-size: 1.7em !important;
    }
  }
`;

const FooterTagline = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.link};
  font-size: 0.8em;
  text-transform: uppercase;
`;

const FooterContent = styled.div`
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
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
  border = true,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      {...props}
      className="footer"
      maxWidth={theme.sizes.outerWidth}
      topPad={false}
    >
      {border && <FooterBar />}
      <div className="inner">
        {name && (
          <FooterLogo style={{ letterSpacing: "0.09em" }}>
            {GetFooterLogo(name, logoUrl, logoWidth)}
          </FooterLogo>
        )}
        {tagline && (
          <FooterTagline
            className="footer__tagline"
            style={{ letterSpacing: "0.15em" }}
          >
            {tagline}
          </FooterTagline>
        )}
        {(name || tagline) && <Break className="small" />}
        {address && (
          <Fragment>
            <FooterContent className="footer__address">{address}</FooterContent>
            <Break className="small" />
          </Fragment>
        )}
        <FooterContent className="footer__links">
          {children || (
            <Fragment>
              {/* 
              // @ts-ignore: ESP-specific code */}
              <a
                href="#SPCLICKTOVIEW"
                name="View in Browser"
                xt="SPCLICKTOVIEW"
              >
                View this email in your browser.
              </a>
              <Break className="small" />
              {/* 
              // @ts-ignore: ESP-specific code */}
              <a
                href="https://emailprefs.fordham.edu/?eid=%%RECIPIENT_ID%%&email=%%EMAIL%%"
                name="Preference"
                xt="SPCLICK"
              >
                Customize the types of emails you (%%EMAIL%%) receive from
                Fordham or unsubscribe.
              </a>
            </Fragment>
          )}
        </FooterContent>
      </div>
      <Break className="large" />
    </Container>
  );
};

export default Footer;
