import React, { Fragment } from "react";
import EmailViewer from "../layouts/EmailViewer";
import HeaderLogo from "../components/HeaderLogo";
import { GlobalScaffold } from "../components/Container";
import Footer from "../components/Footer";

export default () => (
  <EmailViewer>
    <Fragment>
      <GlobalScaffold />
      <HeaderLogo
        src="http://placehold.it/550x125"
        alt="Fordham University"
        width="550"
      />
      <Footer />
    </Fragment>
  </EmailViewer>
);
