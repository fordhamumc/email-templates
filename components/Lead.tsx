import styled from "styled-components";
import WatsonWrapper from "./WatsonWrapper";
import { sizes } from "./defaults";

const Lead = styled(WatsonWrapper)`
  font-size: 1.3em;
  line-height: ${(sizes.lineHeight * 0.85).toFixed(2)};
`;

export default Lead;
