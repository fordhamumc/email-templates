import Link from "next/link";
import styled from "styled-components";
import { colors } from "./defaults";

const LI = styled.li`
  margin: 0;
`;

const A = styled.a`
  color: ${colors.textalt};
  display: inline-block;
  margin: 0.5rem 1rem;
  text-decoration: none;

  &[aria-current],
  &:hover {
    text-decoration: underline;
  }
`;

const NavItem = ({ children, ...props }) => (
  <LI>
    <Link {...props} passHref>
      <A>{children}</A>
    </Link>
  </LI>
);
export default NavItem;
