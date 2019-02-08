import styled from "styled-components";

const Button = styled.a.attrs({
  className: "button"
})`
  display: inline-block;
  background-color: #900028;
  border: 5px solid #900028;
  border-width: 9px 30px;
  box-shadow: 4px 4px 0 0px #8e8083;
  color: #ffffff;
  font-family: "Soleil", Arial, sans-serif;
  font-size: 1.1em;
  line-height: 1.3;
  font-weight: 700;
  margin: 5px 0;
  text-align: center;
  text-decoration: none;

  &:active {
    box-shadow: none !important;
    transform: translate(4px, 4px);
  }
`;

export default Button;
