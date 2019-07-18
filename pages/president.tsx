import React, { Fragment } from "react";
import EmailViewer from "../layouts/EmailViewer";
import Header from "../components/Header";
import { Container, GlobalScaffold } from "../components/Container";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import getTheme from "../components/theme";

export default () => {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
      <EmailViewer>
        <Fragment>
          <GlobalScaffold />
          <Header
            src="https://www.fordham.edu/images/fordham_logo.png"
            alt="Fordham University"
            width="200"
          >
            Office of the President
          </Header>
          <Container
            role="main"
            maxWidth={theme.sizes.innerWidth + 30}
            bottomPad={true}
          >
            Put your content here...
          </Container>
          <Footer role="contentinfo">&nbsp;</Footer>
        </Fragment>
      </EmailViewer>
    </ThemeProvider>
  );
};
