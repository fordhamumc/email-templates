import React, { FunctionComponent } from "react";
import styled from "styled-components";
import sizes from "./sizes";

const BreakContainer = styled.div`
  line-height: ${sizes.break}px;
  &.small {
    line-height: ${sizes.breakSm}px;
  }
  &.large {
    line-height: ${sizes.breakLg}px;
  }
`;

const Break: FunctionComponent = () => <BreakContainer>&nbsp;</BreakContainer>;

const BreakSm: FunctionComponent = () => (
  <BreakContainer className="small">&nbsp;</BreakContainer>
);

const BreakLg: FunctionComponent = () => (
  <BreakContainer className="large">&nbsp;</BreakContainer>
);

export { Break, BreakSm, BreakLg };
