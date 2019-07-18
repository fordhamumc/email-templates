import styled from "styled-components";
import WatsonWrapper from "./WatsonWrapper";

const Lead = styled(WatsonWrapper)`
  font-size: 1.3em;
  line-height: ${({ theme }) => (theme.sizes.lineHeight * 0.85).toFixed(2)};
`;

export default Lead;
