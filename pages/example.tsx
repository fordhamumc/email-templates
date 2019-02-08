import React, { Fragment } from "react";
import EmailViewer from "../layouts/EmailViewer";
import HeaderLogo from "../components/HeaderLogo";
import { Container, GlobalScaffold } from "../components/Container";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Break from "../components/Break";
import SectionHeader from "../components/SectionHeader";
import Lead from "../components/Lead";

export default () => (
  <EmailViewer>
    <Fragment>
      <GlobalScaffold />
      <HeaderLogo
        src="http://placehold.it/550x125"
        alt="Fordham University"
        width="550"
      />
      <Container>
        <Break className="large" />
        <Lead>This is some lead content</Lead>
        <p>
          This is some test content. It's just a test to evaluate the look and
          feel of typeset text.
        </p>
        <SectionHeader>Honorary Degrees</SectionHeader>
        <p>
          This is some test content. It's just a test to evaluate the look and
          feel of typeset text. <a href="something">This is the link text</a>.
        </p>
        <Button href="http://fordham.edu">Visit Fordham</Button>
      </Container>
      <Footer />
    </Fragment>
  </EmailViewer>
);
