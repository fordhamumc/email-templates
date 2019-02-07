import React from "react";
import colors from "../layouts/colors";
import NavItem from "./NavItem";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${colors.navbar};
  width: 100%;
  padding: 0.5rem 0;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: -0.5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <Header>
        <nav aria-label="Main Navigation">
          <NavList>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/example">Email Example</NavItem>
          </NavList>
        </nav>
      </Header>
    </React.Fragment>
  );
};
export default NavBar;
