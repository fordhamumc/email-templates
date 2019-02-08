import colors from "../layouts/colors";
import Link from "next/link";
import styled from "styled-components";

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

const NavItem = props => (
  <LI>
    <Link href={props.href}>
      <A>{props.children}</A>
    </Link>
  </LI>
);
export default NavItem;
