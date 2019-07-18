import React from "react";
import Head from "next/head";

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
import Social from "../../components/Social";
import { ImageFull } from "../../components/Images";
import Ad from "../../components/Ad";
import Article from "../../components/Article";
import getTheme from "../../components/theme";
import SectionHeader from "../../components/SectionHeader";

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
              This is some test content. It's just a test to evaluate the look
              and feel of typeset text. It can include <strong>bold</strong> or{" "}
              <em>italic</em> text.{" "}
              <a href="something">It can also have links.</a> Replace this text
              with your content.
              <Break />
              <Break className="line" />
              <Article
                title="Title for a News Article with an Image"
                link="#"
                imageUrl="http://placehold.it/600x350"
                alt=" "
                callToAction="Call to action sentence."
                imageWidth={Math.round(theme.sizes.innerWidth / 3)}
              >
                Replace this text with your content. Make sure your image is
                600px wide so that it looks good on both desktop and mobile.
              </Article>
              <Break />
              <Article
                title="Title for a News Article with an Image"
                link="#"
                imageUrl="http://placehold.it/600x350"
                alt=" "
                callToAction="Call to action sentence."
                imageWidth={Math.round(theme.sizes.innerWidth / 3)}
              >
                Replace this text with your content. Make sure your image is
                600px wide so that it looks good on both desktop and mobile.
              </Article>
              <Break />
              <Article
                title="Title for a News Article with an Image"
                link="#"
                imageUrl="http://placehold.it/600x350"
                alt=" "
                callToAction="Call to action sentence."
                imageWidth={Math.round(theme.sizes.innerWidth / 3)}
              >
                Replace this text with your content. Make sure your image is
                600px wide so that it looks good on both desktop and mobile.
              </Article>
              <Break />
              <Ad background="#f5f5f2" border="#fec75c">
                <SectionHeader>Visit Fordham This Summer</SectionHeader>
                Our <a href="#">summer visit programs</a> begin June 18. Visit
                our campuses for an <a href="#">information session & tour</a>,
                or attend <a href="#">Inside Track</a> to learn more about the
                college search and application process.
                <Break />
                <SectionHeader>Explore Fordham Further</SectionHeader>
                <ul>
                  <li>
                    Read more <a href="#">Fordham news stories</a>
                  </li>
                  <li>
                    <a href="#">Expore our programs</a> or{" "}
                    <a href="#">discover your passion</a>
                  </li>
                  <li>
                    Follow us on <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Contact our office</a> or search our FAQs
                  </li>
                </ul>
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
