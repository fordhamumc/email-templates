import React, { Component } from "react";
import NavItem from "./NavItem";
import styled from "styled-components";

const Header = styled.header`
  background-color: #900028;
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
            <NavItem href="/gabelli/gabelli1">Gabelli Template 1</NavItem>
            <NavItem href="/gabelli/gabelli2">Gabelli Template 2</NavItem>
            <NavItem href="/gabelli/gabelli3">Gabelli Template 3</NavItem>
            <NavItem href="/gabelli/gabelli4">Gabelli Template 4</NavItem>
          </NavList>
        </nav>
      </Header>
    );
  }
}
export default NavBar;
