import styled from "styled-components";

const Break = styled.div.attrs({
  dangerouslySetInnerHTML: { __html: "&nbsp;" }
})`
  line-height: ${({ theme }) => theme.sizes.break}px;
  &.small {
    line-height: ${({ theme }) => theme.sizes.breakSm}px;
  }
  &.large {
    line-height: ${({ theme }) => theme.sizes.breakLg}px;
  }
  &.line {
    border-top: 5px solid ${({ theme }) => theme.colors.lineBreak};
    width: 50px;
    max-width: 100%;
  }
`;

export default Break;
