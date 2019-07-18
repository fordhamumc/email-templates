import React from "react";
import EmailViewer from "../../layouts/EmailViewer";
import Header from "../../components/Header";
import {
  Container,
  GlobalInner,
  GlobalScaffold
} from "../../components/Container";
import Footer from "../../components/Footer";
import styled, { ThemeProvider } from "styled-components";
import Break from "../../components/Break";
import Button from "../../components/Button";
import Head from "next/head";
import Social from "../../components/Social";
import { ImageFull } from "../../components/Images";
import Ad from "../../components/Ad";
import getTheme from "../../components/theme";

const GabelliImageContainer = styled(Container).attrs({ topPad: false })`
  background: #900028;
  border-left: 12px solid #fec75c;
  border-right: 12px solid #fec75c;

  @media (max-width: 767px) {
    border-width: 0 5px !important;

    .container {
      padding: 0 10px !important;
    }
  }
`;

export default () => {
  const theme = getTheme({
    fonts: {
      text: `"Soleil", "Roboto", Arial, sans-serif`,
      textAlt: `"leitura roman", Georgia, serif`
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <EmailViewer stylesheets="https://use.typekit.net/dze8zxs.css">
        <Head>
          <title>Gabelli Template</title>
          <link rel="stylesheet" href="https://use.typekit.net/dze8zxs.css" />
        </Head>
        <GlobalScaffold />
        <GlobalInner />
        <Container
          maxWidth={theme.sizes.outerWidth}
          topPad={false}
          bottomPad={true}
          sidePad={0}
        >
          <Header
            src="/static/gabelli.png"
            alt="Fordham Gabelli School of Business"
            width="200"
            borderSize={0}
          />
          <GabelliImageContainer>
            <ImageFull src="https://placehold.it/1080x400" alt="" />
          </GabelliImageContainer>
          <Container bottomPad={true} topPad={true} weight={300}>
            <div className="inner">
              Pursuing an MBA will have a dramatic effect on your career and
              future goals. As you determine which type of MBA will fit into
              your lifestyle and make sense financially, there are many factors
              to consider.
              <br />
              <br />
              The Gabelli School of Business offers both full-time and part-time
              MBA options. Regardless of which option you select, we provide a
              variety of benefits and resources to make the transition from
              full-time professional to student possible.
              <br />
              <br />
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
              </ul>
              Each year, Gabelli awards MBA students{" "}
              <a href="#">
                <strong>merit scholarships</strong>
              </a>{" "}
              based on academic achievements and other various criteria. As an
              MBA applicant, you will be automatically considered for
              scholarship funding with no additional application necessary.
              <br />
              <br />
              <Button href="#">Call to Action</Button>
              <Break />
              <Ad
                background="#f5f5f2"
                border="#fec75c"
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  "This is a callout or quote box. You can use it for a
                  testimonial or other highlighted piece of content."
                </div>
                Joe Fordham
              </Ad>
            </div>
          </Container>
        </Container>
        <Container
          style={{
            background: "#f5f5f2"
          }}
        >
          <Footer
            role="contentinfo"
            border={false}
            name={false}
            tagline={false}
            address={false}
          >
            <Social
              items={{
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com"
              }}
            />
            <Break className="small" />
            Copyright &copy; 2019 Fordham University. All Rights Reserved.
            <br />
            441 East Fordham Road | Bronx, NY 10458
          </Footer>
        </Container>
      </EmailViewer>
    </ThemeProvider>
  );
};
