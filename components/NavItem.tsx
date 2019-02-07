import colors from "../layouts/colors";
import Link from "next/link";
import styled from "styled-components";

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

const NavItem = props => {
  return (
    <li>
      <Link href={props.href}>
        <A>{props.children}</A>
      </Link>
    </li>
  );
};
export default NavItem;
