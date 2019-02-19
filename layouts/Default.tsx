import React, { FunctionComponent, HTMLAttributes } from "react";
import NavBar from "../components/NavBar";
import styled, { createGlobalStyle } from "styled-components";

interface Props {
  codeOpen: boolean;
}

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
    @media (min-width: 60rem) {
      display: flex;

      section {
        flex: 1;
      }
    }
  }
`;

const Layout: FunctionComponent<Props & HTMLAttributes<HTMLMainElement>> = ({
  children,
  codeOpen = true,
  ...props
}) => (
  <React.Fragment>
    {codeOpen && <NavBar />}
    <Main {...props}>{children}</Main>
    <GlobalStyle />
  </React.Fragment>
);

export default Layout;
