import React from "react";
import NavBar from "../components/NavBar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  #__next {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
`;

const Main = styled.main`
  &.grid {
    display: grid;

    @media (min-width: 60rem) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Layout = props => (
  <React.Fragment>
    <NavBar />
    <Main className={props.className}>{props.children}</Main>
    <GlobalStyle />
  </React.Fragment>
);

export default Layout;
