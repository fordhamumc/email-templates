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
import Lead from "../../components/Lead";
import Break from "../../components/Break";
import Button from "../../components/Button";
import Head from "next/head";
import Social from "../../components/Social";
import getTheme from "../../components/theme";

const SecondaryBorder = styled.div`
  border-bottom: 5px solid #fec75c;
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
        <Container maxWidth="100%" topPad={false} bottomPad={true} sidePad={0}>
          <SecondaryBorder>
            <Header
              src="/static/gabelli.png"
              alt="Fordham Gabelli School of Business"
              width="200"
              borderSize={20}
            />
          </SecondaryBorder>
          <Container bottomPad={true} topPad={true} weight={300}>
            <div className="inner">
              <Lead
                style={{
                  fontWeight: "bold"
                }}
              >
                This is a lead content section. It's optional and should only be
                used for the first paragraph. If the user only reads this
                paragraph they should understand the purpose of the email.
              </Lead>
              <Break />
              Pursuing an MBA will have a dramatic effect on your career and
              future goals. As you determine which type of MBA will fit into
              your lifestyle and make sense financially, there are many factors
              to consider.
              <Break />
              The Gabelli School of Business offers both full-time and part-time
              MBA options. Regardless of which option you select, we provide a
              variety of benefits and resources to make the transition from
              full-time professional to student possible.
              <Break />
              Each year, Gabelli awards MBA students merit scholarships based on
              academic achievements and other various criteria. As an MBA
              applicant, you will be automatically considered for scholarship
              funding with no additional application necessary.
              <Break />
              <Button href="#">Call to Action</Button>
              <Break />
              <strong>Full Name</strong>
              <br />
              <em>Dean of Admissions</em>
              <br />
              555-555-5555
              <br />
              <a href="mailto:email@fordham.edu">email@fordham.edu</a>
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
