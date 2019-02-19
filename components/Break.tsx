import styled from "styled-components";
import sizes from "./sizes";

const Break = styled.div.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  line-height: ${sizes.break}px;
  &.small {
    line-height: ${sizes.breakSm}px;
  }
  &.large {
    line-height: ${sizes.breakLg}px;
  }
`;

export default Break;
