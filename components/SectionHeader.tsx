import styled from "styled-components";

const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2em;
  font-weight: bold;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.75).toFixed(2)};
  margin: 0 0 10px 0;
  padding-top: 12px;
  text-transform: uppercase;
`;

export default SectionHeader;
