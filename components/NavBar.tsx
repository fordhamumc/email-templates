import React, { Component } from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import { colors } from "./defaults";

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

class NavBar extends Component {
  public render() {
    return (
      <Header>
        <nav aria-label="Main Navigation">
          <NavList>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/watson">Watson Template</NavItem>
            <NavItem href="/president">President Template</NavItem>
          </NavList>
        </nav>
      </Header>
    );
  }
}
export default NavBar;
