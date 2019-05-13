import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

const WatsonTable = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0
})`
  border: 0;
  width: 100%;
`;

const WatsonWrapper: FunctionComponent<
  HTMLAttributes<HTMLTableCellElement>
> = ({ children, ...props }) => (
  <WatsonTable>
    <tbody>
      <tr>
        <td {...props}>{children}</td>
      </tr>
    </tbody>
  </WatsonTable>
);

export default WatsonWrapper;
